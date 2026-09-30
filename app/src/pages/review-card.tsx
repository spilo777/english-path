// Одна карточка в сессии повторения: лицо/оборот, картинка-ассоциация, транскрипция, оценки
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Icon, toast } from '../components/ui';
import { autoImage } from '../lib/images';
import { ding } from '../lib/sfx';
import { fmtIvl, schedule } from '../lib/srs';
import { liveAudio, speak, useIpa } from '../lib/speech';
import { getState, update } from '../lib/store';
import type { Card } from '../lib/types';

export type Grade = 0 | 1 | 2 | 3;
export type Side = 'en-ru' | 'ru-en';

const ABSTRACT_POS = /^(pron|det|prep|conj|modal|num|excl|adv)$/;

/** Нужна ли карточке картинка: только конкретные одиночные слова */
export const wantsImg = (c: Card, pos: string | undefined) =>
    getState().settings.autoImg !== false &&
    !c.noImg &&
    c.id.length > 2 &&
    !c.id.includes(' ') &&
    !(pos && ABSTRACT_POS.test(pos));

/** Можно ли искать живую запись произношения (как в lib/speech) */
export const liveOk = (w: string, inDeck: boolean) =>
    /^[a-z][a-z'’-]*$/i.test(w) || (inDeck && w.split(' ').length <= 3);

/** «**слово**» в примере → жирное слово */
function ExText({ text }: { text: string }) {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return <>{parts.map((p, i) => (i % 2 ? <b key={i}>{p}</b> : p))}</>;
}

function Ipa({ word }: { word: string }) {
    const { ipa, live } = useIpa(word);
    return (
        <div className="ipa">
            {ipa ? <span>{ipa}</span> : null}
            {live ? (
                <em title="Запись живого человека из Викисловаря">
                    <Icon name="waveform" fill /> живой голос
                </em>
            ) : null}
        </div>
    );
}

interface Props {
    c: Card;
    pos?: string;
    side: Side;
    onKnown: () => void;
    /** занятие вне очереди, карточке ещё не пора: «Хорошо/Легко» не меняют расписание */
    early?: boolean;
    onGrade: (g: Grade, side: Side) => void;
}

export function FlashCard({ c, pos, side: m, onGrade, onKnown, early }: Props) {
    const id = c.id;
    const [shown, setShown] = useState(false);
    const graded = useRef(false);
    // null — места под картинку нет; '' — ищем картинку; строка — адрес
    const [img, setImg] = useState<string | null>(() => c.img || (wantsImg(c, pos) ? '' : null));
    const [loaded, setLoaded] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [url, setUrl] = useState(c.img || '');
    const urlRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (m === 'en-ru') speak(c.en);
        if (c.img || !wantsImg(c, pos)) return;
        let alive = true;
        void autoImage(c.en).then((u) => {
            if (alive) setImg(u || null);
        });
        return () => {
            alive = false;
        };
    }, []);

    const show = () => {
        if (shown) return;
        setShown(true);
        if (m === 'ru-en') speak(c.en);
    };
    const grade = (g: Grade) => {
        if (!shown || graded.current) return;
        graded.current = true;
        if (g >= 2) ding('ok');
        else if (g === 0) ding('bad');
        onGrade(g, m);
    };

    // клавиатура: пробел/Enter — показать ответ, 1–4 — оценка
    const keys = useRef({ show, grade, shown });
    keys.current = { show, grade, shown };
    useEffect(() => {
        const onKey = (ev: KeyboardEvent) => {
            const t = ev.target as HTMLElement | null;
            if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA')) return;
            if (ev.code === 'Space' || ev.key === 'Enter') {
                ev.preventDefault();
                keys.current.show();
            } else if (keys.current.shown && ['1', '2', '3', '4'].includes(ev.key))
                keys.current.grade((+ev.key - 1) as Grade);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    const hideImg = () => {
        update((s) => {
            const k = s.cards[id];
            if (k) {
                k.noImg = true;
                k.img = undefined;
                k.mod = Date.now();
            }
        });
        setImg(null);
        toast('Картинка скрыта для этого слова');
    };
    const imgFailed = () => {
        setImg(null);
        if (!c.img)
            update(
                (s) => {
                    s.imgCache = s.imgCache || {};
                    s.imgCache[id] = '';
                },
                { silent: true },
            );
    };
    const saveImg = () => {
        const v = url.trim();
        if (v && !/^(https?:\/\/|data:image\/)/i.test(v)) {
            toast('Нужна ссылка, начинающаяся с http');
            return;
        }
        update((s) => {
            const k = s.cards[id];
            if (k) {
                k.img = v || undefined;
                if (v) k.noImg = false;
                k.mod = Date.now();
            }
        });
        setImg(v || null);
        setLoaded(false);
        setToolsOpen(false);
        toast(v ? 'Картинка сохранена' : 'Картинка убрана');
    };

    const slot =
        img !== null ? (
            <div className={'assoc' + (loaded ? '' : ' loading')}>
                {img ? (
                    <>
                        <img
                            src={img}
                            alt=""
                            referrerPolicy="no-referrer"
                            onLoad={() => setLoaded(true)}
                            onError={imgFailed}
                        />
                        <button
                            type="button"
                            className="assoc-x"
                            title="Не показывать картинку для этого слова"
                            onClick={(e) => {
                                e.stopPropagation();
                                hideImg();
                            }}
                        >
                            <Icon name="x" />
                        </button>
                    </>
                ) : null}
            </div>
        ) : null;

    const q = encodeURIComponent(c.en);
    // поиск и своя картинка — редкое действие, поэтому за одной кнопкой в строке озвучки
    const tools = toolsOpen ? (
        <div className="img-panel" ref={panelRef}>
            <div className="img-tools">
                <a
                    className="btn small"
                    target="_blank"
                    rel="noopener"
                    href={'https://yandex.ru/images/search?text=' + q}
                >
                    Найти в Яндексе
                </a>
                <a
                    className="btn small"
                    target="_blank"
                    rel="noopener"
                    href={'https://www.google.com/search?tbm=isch&q=' + q}
                >
                    Найти в Google
                </a>
            </div>
            <div className="img-form">
                <input
                    className="input"
                    ref={urlRef}
                    placeholder="Вставьте адрес картинки"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.stopPropagation();
                            saveImg();
                        }
                    }}
                />
                <button type="button" className="btn small primary" onClick={saveImg}>
                    OK
                </button>
            </div>
        </div>
    ) : null;

    let front: ReactNode, back: ReactNode;
    if (m === 'en-ru') {
        front = (
            <>
                <div className="front">{c.en}</div>
                <Ipa word={c.en} />
                {c.ex ? (
                    <div className="ex">
                        <ExText text={c.ex} />
                    </div>
                ) : null}
            </>
        );
        back = (
            <div className="back">
                {c.ru}
                {c.exRu ? <div className="exru">{c.exRu}</div> : null}
            </div>
        );
    } else {
        front = (
            <>
                <div className="front ru">{c.ru}</div>
                {c.exRu ? <div className="ex">{c.exRu}</div> : null}
                <div className="muted small fc-hint">Вспомните английское слово и скажите вслух</div>
            </>
        );
        back = (
            <div className="back">
                {c.en}
                <Ipa word={c.en} />
                {c.ex ? (
                    <div className="exru">
                        <ExText text={c.ex} />
                    </div>
                ) : null}
            </div>
        );
    }
    const exPlain = c.ex ? c.ex.replace(/\*\*/g, '') : '';
    const lbl = (g: Grade) => {
        if (early && g > 0) return 'как было';
        const n = schedule(c, g);
        return fmtIvl(Math.max(60000, n.due - Date.now()));
    };

    return (
        <>
            <div
                className="card fc"
                data-testid="flashcard"
                onClick={(e) => {
                    if (!(e.target as HTMLElement).closest('button, a, input')) show();
                }}
            >
                {slot}
                {front}
                {shown ? back : null}
                <div className="row fc-say">
                    <button type="button" className="btn small ghost" onClick={() => speak(c.en)}>
                        <Icon name="speaker-high" /> Слово
                    </button>
                    {exPlain ? (
                        <button type="button" className="btn small ghost" onClick={() => speak(exPlain)}>
                            <Icon name="speaker-high" /> Пример
                        </button>
                    ) : null}
                    {shown ? (
                        <button
                            type="button"
                            className={'btn small ghost' + (toolsOpen ? ' on' : '')}
                            aria-expanded={toolsOpen}
                            onClick={() => {
                                setToolsOpen((o) => !o);
                                // кнопки оценок прилипают к низу экрана — прокрутить, чтобы панель была видна
                                requestAnimationFrame(() =>
                                    panelRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }),
                                );
                            }}
                        >
                            <Icon name="image" /> Картинка
                        </button>
                    ) : null}
                </div>
                {shown ? tools : null}
            </div>
            <div className="fc-actions">
                {!shown ? (
                    <button type="button" className="btn primary fc-show" onClick={show}>
                        Показать ответ <span className="kbd">пробел</span>
                    </button>
                ) : (
                    <>
                        <div className="grades">
                            <button type="button" className="btn again" onClick={() => grade(0)}>
                                Снова<small>{lbl(0)}</small>
                            </button>
                            <button type="button" className="btn" onClick={() => grade(1)}>
                                Трудно<small>{lbl(1)}</small>
                            </button>
                            <button type="button" className="btn good" onClick={() => grade(2)}>
                                Хорошо<small>{lbl(2)}</small>
                            </button>
                            <button type="button" className="btn" onClick={() => grade(3)}>
                                Легко<small>{lbl(3)}</small>
                            </button>
                        </div>
                        <p className="tiny muted fc-keys">
                            <span className="fc-kbd">
                                Клавиши <span className="kbd">1</span>
                                <span className="kbd">2</span>
                                <span className="kbd">3</span>
                                <span className="kbd">4</span>
                            </span>
                        </p>
                    </>
                )}
                <button type="button" className="btn ghost small fc-known" onClick={onKnown}>
                    <Icon name="check-circle" /> Уже знаю это слово
                </button>
            </div>
        </>
    );
}

/** Заранее подгрузить запись и картинку следующей карточки */
export function prefetchCard(c: Card, pos: string | undefined, inDeck: boolean) {
    if (getState().settings.liveVoice !== false && liveOk(c.en, inDeck)) void liveAudio(c.en);
    if (!c.img && wantsImg(c, pos))
        void autoImage(c.en).then((u) => {
            if (u) new Image().src = u;
        });
}
