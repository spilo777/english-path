// Экран чтения: текст с переводом по нажатию (слово / предложение / выделенная фраза), диалоги пузырями,
// озвучка по предложениям, вопросы на понимание, «Прочитано». Общий для статей, текстов уроков, своих текстов и глав книг.
import { useEffect, useMemo, useRef, useState, type MouseEvent as RMouseEvent } from 'react';
import { closePopover, openSentence, openWord } from '../components/Popover';
import { Cover, CAT_ICON, catIdx, catIcon, minsIn } from '../components/Posters';
import { BackLink, Icon, Page, toast } from '../components/ui';
import { clean, ensureDict, isDictReady, lookup } from '../lib/lookup';
import { ding } from '../lib/sfx';
import { speak, stopSpeech } from '../lib/speech';
import { recordAnswer, today, track, unitState, update, useProgress } from '../lib/store';
import type { BookMeta, Progress, TextItem } from '../lib/types';
import './Reader.css';

/** Что читаем и откуда: статья библиотеки, текст урока, свой текст или глава книги */
export interface ReadCtx {
    t: TextItem;
    unit?: { id: string; texts: TextItem[] };
    user?: boolean;
    book?: BookMeta;
    chapter?: number;
    /** Статьи библиотеки — для «Следующая статья» */
    lib?: TextItem[];
}

export const lsGet = (k: string, d: string): string => {
    try {
        const v = localStorage.getItem(k);
        return v == null ? d : v;
    } catch {
        return d;
    }
};
export const lsSet = (k: string, v: string) => {
    try {
        localStorage.setItem(k, v);
    } catch {
        /* приватный режим */
    }
};

// ───────── разбор текста: абзацы → реплики → предложения → слова ─────────
interface Tok {
    w?: string;
    o?: string;
    first?: boolean;
}
interface Sent {
    sid: number;
    toks: Tok[];
}
interface Block {
    who?: string;
    k?: number;
    sents: Sent[];
}
interface Model {
    blocks: Block[];
    sentences: string[];
    speakers: number[];
}

const SENT_RE = /[^.!?…]+[.!?…]*["')\]”]*\s*/g;
const TOK_RE = /([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’]*(?:-[A-Za-zÀ-ÿ]+)*)|([^A-Za-zÀ-ÿ]+)/g;
const SPK_RE = /^([A-Z][\w .'’-]{0,24}):\s*(.+)$/;

function parse(text: string, dialogue: boolean): Model {
    const sentences: string[] = [],
        speakers: number[] = [],
        order: string[] = [];
    const sents = (p: string, spk: number): Sent[] =>
        (p.match(SENT_RE) || [p]).map((s) => {
            const sid = sentences.length;
            sentences.push(s.trim());
            speakers.push(spk);
            const toks: Tok[] = [];
            let first = true;
            for (const m of s.matchAll(TOK_RE)) {
                if (m[1]) {
                    toks.push({ w: m[1], first });
                    first = false;
                } else toks.push({ o: m[2] });
            }
            return { sid, toks };
        });
    const blocks = text
        .split(/\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p): Block => {
            const m = dialogue ? p.match(SPK_RE) : null;
            if (m) {
                let k = order.indexOf(m[1]);
                if (k < 0) {
                    order.push(m[1]);
                    k = order.length - 1;
                }
                return { who: m[1], k, sents: sents(m[2], k) };
            }
            return { sents: sents(p, -1) };
        });
    return { blocks, sentences, speakers };
}

const tapMode = () => (lsGet('ep.tapMode', 'word') === 'sent' ? 'sent' : 'word');
const rateOpt = (r: number) => (r <= 0.75 ? '0.7' : r >= 0.95 ? '1' : '0.85');
const hoverNone = () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

/** Отметить прочитанным (внутри update) */
function markReadIn(s: Progress, c: ReadCtx) {
    const { t } = c;
    if (c.book && c.chapter != null) {
        s.bookPos = s.bookPos || {};
        s.bookPos[c.book.id] = Math.max(s.bookPos[c.book.id] || 0, c.chapter + 1);
    }
    if (!s.textsRead[t.id]) {
        s.textsRead[t.id] = today();
        track(s, 'reads');
    }
    if (c.unit && c.unit.texts.every((x) => s.textsRead[x.id])) unitState(s, c.unit.id).steps.reading = true;
}

export function ReaderView({ ctx }: { ctx: ReadCtx }) {
    const s = useProgress();
    const { t, book, unit } = ctx;
    const isDlg = t.kind === 'dialogue';
    const lib = !unit && !ctx.user && !book;
    const model = useMemo(() => parse(t.text, isDlg), [t.text, isDlg]);
    const textRef = useRef<HTMLDivElement>(null);
    const [rate, setRate] = useState(() => rateOpt(s.settings.rate));
    const rateRef = useRef(rate);
    rateRef.current = rate;
    const [mode, setMode] = useState<'word' | 'sent'>(tapMode);
    const [playing, setPlaying] = useState(false);
    const playRef = useRef(false);
    const [dictReady, setDictReady] = useState(isDictReady());

    useEffect(() => {
        if (dictReady) return;
        let alive = true;
        ensureDict()
            .then(() => {
                if (alive) setDictReady(true);
            })
            .catch(() => undefined);
        return () => {
            alive = false;
        };
    }, [dictReady]);

    // уход со страницы / смена текста — остановить чтение вслух
    useEffect(
        () => () => {
            playRef.current = false;
            stopSpeech();
            closePopover();
        },
        [t.id],
    );

    // ───────── озвучка всего текста ─────────
    const clearSpeaking = () =>
        textRef.current?.querySelectorAll('.s.speaking').forEach((x) => x.classList.remove('speaking'));
    const stop = () => {
        playRef.current = false;
        setPlaying(false);
        stopSpeech();
        clearSpeaking();
    };
    const playFrom = (i: number) => {
        clearSpeaking();
        if (playRef.current && i >= model.sentences.length && i > 0)
            update((st) => {
                st.stats.listened = (st.stats.listened || 0) + 1;
            });
        if (!playRef.current || i >= model.sentences.length) {
            stop();
            return;
        }
        const el = textRef.current?.querySelector(`.s[data-sid="${i}"]`);
        if (el) {
            el.classList.add('speaking');
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        const spk = model.speakers[i];
        speak(model.sentences[i], {
            rate: +rateRef.current,
            onend: () => playFrom(i + 1),
            speaker: spk >= 0 ? spk : undefined,
        });
    };
    const play = () => {
        playRef.current = true;
        setPlaying(true);
        playFrom(0);
    };

    // ───────── предложение / слово / фраза ─────────
    const showSentence = (i: number) => {
        const text = model.sentences[i];
        const el = textRef.current?.querySelector(`.s[data-sid="${i}"]`);
        if (!text || !el) return;
        const spk = model.speakers[i];
        openSentence({
            anchor: el,
            text,
            speaker: spk >= 0 ? spk : undefined,
            index: i,
            total: model.sentences.length,
            rate: +rateRef.current,
            onPrev: i > 0 ? () => showSentence(i - 1) : undefined,
            onNext: i < model.sentences.length - 1 ? () => showSentence(i + 1) : undefined,
        });
    };

    const onClick = (ev: RMouseEvent<HTMLDivElement>) => {
        if (
            String(window.getSelection?.() || '')
                .trim()
                .includes(' ')
        )
            return; // выделена фраза
        const target = ev.target as Element;
        if (mode === 'sent') {
            const se = target.closest<HTMLElement>('.s');
            if (se) showSentence(+(se.dataset.sid || 0));
            return;
        }
        const w = target.closest<HTMLElement>('.w');
        if (!w) return;
        textRef.current?.querySelectorAll('.w.sel').forEach((x) => x.classList.remove('sel'));
        w.classList.add('sel');
        const word = w.textContent || '';
        const sid = +(w.dataset.s || 0);
        openWord({
            anchor: w,
            word,
            sentence: model.sentences[sid],
            sid,
            onSentence: showSentence,
            src: 'text:' + t.id,
            maybeName: !w.dataset.first && /^[A-Z]/.test(word),
        });
    };

    // выделение нескольких слов — перевод фразы
    const onSel = () =>
        setTimeout(() => {
            const sel = window.getSelection();
            if (!sel || sel.isCollapsed || !sel.rangeCount) return;
            const txt = String(sel)
                .replace(/\s+/g, ' ')
                .trim()
                .replace(/^[^A-Za-z]+|[^A-Za-z']+$/g, '');
            if (!txt || !txt.includes(' ') || txt.split(' ').length > 10) return;
            const rng = sel.getRangeAt(0);
            if (!textRef.current || !textRef.current.contains(rng.commonAncestorContainer)) return;
            const startEl =
                rng.startContainer.nodeType === 1 ? (rng.startContainer as Element) : rng.startContainer.parentElement;
            const sEl = startEl?.closest<HTMLElement>('.s');
            openWord({
                anchor: startEl || textRef.current,
                word: txt,
                sentence: sEl ? model.sentences[+(sEl.dataset.sid || 0)] : '',
                src: 'text:' + t.id,
            });
        }, 10);

    const setTap = (m: 'word' | 'sent') => {
        lsSet('ep.tapMode', m);
        setMode(m);
        closePopover();
        toast(
            m === 'sent'
                ? 'Нажмите на любое место предложения — перевод и озвучка'
                : 'Нажмите на слово — перевод и «+ В карточки»',
        );
    };

    const markRead = () => {
        update((st) => markReadIn(st, ctx));
        toast('Отмечено');
    };

    // слова, которые уже в карточках, подчёркнуты
    const cardsSig = Object.keys(s.cards).length;
    const body = useMemo(() => {
        const known = (w: string) => !!s.cards[clean(w)] || (dictReady && lookup(w).some((r) => !!s.cards[r.word]));
        const sents = (list: Sent[]) =>
            list.map((se) => (
                <span className="s" data-sid={se.sid} key={se.sid}>
                    {se.toks.map((tk, j) =>
                        tk.w ? (
                            <span
                                key={j}
                                className={'w' + (known(tk.w) ? ' known' : '')}
                                data-s={se.sid}
                                data-first={tk.first ? '1' : undefined}
                            >
                                {tk.w}
                            </span>
                        ) : (
                            tk.o
                        ),
                    )}
                </span>
            ));
        return model.blocks.map((b, i) =>
            b.who != null ? (
                <div key={i} className={`bub ${(b.k || 0) % 2 ? 'right' : 'left'} spk-${(b.k || 0) % 4}`}>
                    <b className="who">{b.who}</b>
                    <p>{sents(b.sents)}</p>
                </div>
            ) : (
                <p key={i}>{sents(b.sents)}</p>
            ),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [model, cardsSig, dictReady]);

    const back = unit ? `#/unit/${unit.id}/reading` : book ? `#/book/${book.id}` : '#/library';
    const nextT =
        lib && ctx.lib
            ? ctx.lib.find((x) => x.level === t.level && x.id !== t.id && !s.textsRead[x.id] && x.cat === t.cat) ||
              ctx.lib.find((x) => x.level === t.level && x.id !== t.id && !s.textsRead[x.id])
            : undefined;
    const read = !!s.textsRead[t.id];
    const nCh = book ? book.chapters : 0;
    const ch = ctx.chapter || 0;

    return (
        <Page className="reader-page">
            <BackLink href={back} />
            {book ? (
                <div className="reader-head">
                    <Cover
                        id={book.id}
                        wiki={book.wiki}
                        cls={'sm book' + (book.kind === 'original' ? ' orig' : '')}
                        icon="book"
                    />
                    <div className="reader-head-body">
                        <div className="lib-meta">
                            <span className="pill accent">{book.level}</span>
                            <span className="tiny muted">
                                {book.title} · {book.author} · глава {ch + 1} из {nCh}
                            </span>
                        </div>
                        <h1>{t.title}</h1>
                    </div>
                </div>
            ) : lib ? (
                <div className="reader-head">
                    <Cover
                        id={t.id}
                        wiki={t.wiki}
                        commons={t.commons}
                        img={t.img}
                        cls={'sm cat-' + catIdx(t.cat)}
                        icon={catIcon(t.cat)}
                    />
                    <div className="reader-head-body">
                        <div className="lib-meta">
                            <span className="pill accent">{t.level}</span>
                            <span className="tiny muted">
                                {CAT_ICON[t.cat || ''] ? <Icon name={CAT_ICON[t.cat || '']} /> : null} {t.cat} ·{' '}
                                {t.about} · {minsIn(t)} мин
                            </span>
                        </div>
                        <h1>{t.title}</h1>
                        <div className="muted small">{t.ru}</div>
                    </div>
                </div>
            ) : (
                <h1 className="reader-title">{t.title}</h1>
            )}

            <div className="reader-bar">
                {playing ? (
                    <button type="button" className="btn small" onClick={stop}>
                        <Icon name="stop" fill /> Стоп
                    </button>
                ) : (
                    <button type="button" className="btn small primary" onClick={play}>
                        <Icon name="play" fill /> Слушать
                    </button>
                )}
                <div className="seg tap-seg" title="Что выделять по нажатию">
                    <button type="button" className={mode === 'word' ? 'on' : ''} onClick={() => setTap('word')}>
                        <Icon name="cursor-click" /> Слово
                    </button>
                    <button type="button" className={mode === 'sent' ? 'on' : ''} onClick={() => setTap('sent')}>
                        <Icon name="text-align-left" /> Предложение
                    </button>
                </div>
                <select
                    className="input rd-rate"
                    aria-label="Скорость"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                >
                    <option value="0.7">0.7×</option>
                    <option value="0.85">0.85×</option>
                    <option value="1">1×</option>
                </select>
                <span className="spacer" />
                <button type="button" className="btn small" onClick={markRead}>
                    {read ? (
                        <>
                            <Icon name="check" /> Прочитано
                        </>
                    ) : (
                        'Отметить прочитанным'
                    )}
                </button>
            </div>

            <div
                ref={textRef}
                className={'card reader-text' + (isDlg ? ' dialog' : '')}
                onClick={onClick}
                onMouseUp={onSel}
                onTouchEnd={onSel}
            >
                {body}
            </div>

            <p className="muted small reader-tip">
                <Icon name="hand-tap" /> Нажмите на слово — перевод и «+ В карточки». Кнопка «Всё предложение» в
                подсказке (или режим «Предложение» сверху) — перевод и озвучка целого предложения. Чтобы перевести фразу
                целиком, выделите несколько слов{hoverNone() ? ' (долгое нажатие и протянуть)' : ' мышкой'}.
            </p>

            {t.questions && t.questions.length ? <Quiz key={t.id} ctx={ctx} /> : null}

            <ReadEnd ctx={ctx} nextLib={nextT} />
        </Page>
    );
}

/** Конец текста: куда дальше. Переход вперёд отмечает текст прочитанным — не нужно листать наверх */
function ReadEnd({ ctx, nextLib }: { ctx: ReadCtx; nextLib?: TextItem }) {
    const s = useProgress();
    const { t, book, unit } = ctx;
    const done = () => update((st) => markReadIn(st, ctx));
    if (book) {
        const ch = ctx.chapter || 0;
        const n = book.chapters;
        return (
            <div className="read-end chap-nav">
                {ch > 0 ? (
                    <a className="btn" href={`#/book/${book.id}/${ch - 1}`}>
                        <Icon name="caret-left" /> Назад
                    </a>
                ) : (
                    <span />
                )}
                <a className="btn ghost" href={`#/book/${book.id}`}>
                    Все главы
                </a>
                {ch < n - 1 ? (
                    <a className="btn primary" href={`#/book/${book.id}/${ch + 1}`} onClick={done}>
                        Следующая глава <Icon name="caret-right" />
                    </a>
                ) : (
                    <a
                        className="btn primary"
                        href={`#/book/${book.id}`}
                        onClick={() => {
                            done();
                            toast('Книга прочитана!');
                        }}
                    >
                        Закончить книгу <Icon name="check" />
                    </a>
                )}
            </div>
        );
    }
    if (unit) {
        const i = unit.texts.findIndex((x) => x.id === t.id);
        const next =
            unit.texts.slice(i + 1).find((x) => !s.textsRead[x.id]) ||
            unit.texts.find((x) => x.id !== t.id && !s.textsRead[x.id]);
        const finish = () =>
            update((st) => {
                markReadIn(st, ctx);
                unitState(st, unit.id).steps.reading = true;
            });
        return (
            <div className="read-end">
                {next ? (
                    <a className="next-read" href={'#/read/' + encodeURIComponent(next.id)} onClick={done}>
                        <span className="muted small">Следующий текст урока</span>
                        <b>
                            {next.title} <Icon name="arrow-right" />
                        </b>
                    </a>
                ) : null}
                <div className="row read-end-btns">
                    <a className="btn" href={`#/unit/${unit.id}/reading`} onClick={done}>
                        <Icon name="list-bullets" /> Все тексты
                    </a>
                    {next ? (
                        <a className="btn ghost" href={`#/unit/${unit.id}/practice`} onClick={finish}>
                            Пропустить — к практике
                        </a>
                    ) : (
                        <a className="btn primary" href={`#/unit/${unit.id}/practice`} onClick={finish}>
                            Дальше: Практика <Icon name="arrow-right" />
                        </a>
                    )}
                </div>
            </div>
        );
    }
    return (
        <div className="read-end">
            {nextLib ? (
                <a className="next-read" href={'#/read/' + nextLib.id} onClick={done}>
                    <span className="muted small">Следующая статья {nextLib.level}</span>
                    <b>
                        {nextLib.title} <Icon name="arrow-right" />
                    </b>
                </a>
            ) : null}
            <div className="row read-end-btns">
                <a className={'btn' + (nextLib ? '' : ' primary')} href="#/library" onClick={done}>
                    <Icon name="check" /> {s.textsRead[t.id] ? 'В библиотеку' : 'Прочитано — в библиотеку'}
                </a>
            </div>
        </div>
    );
}

/** Вопросы на понимание: по одному ответу, в конце — итог и «прочитано» */
function Quiz({ ctx }: { ctx: ReadCtx }) {
    const qs = ctx.t.questions || [];
    const [ans, setAns] = useState<Record<number, number>>({});
    const choose = (qi: number, oi: number) => {
        if (qi in ans) return;
        const next = { ...ans, [qi]: oi };
        setAns(next);
        const ok = oi === qs[qi].a;
        ding(ok ? 'ok' : 'bad');
        update((st) => {
            recordAnswer(st, ok);
            if (Object.keys(next).length === qs.length) {
                const right = qs.filter((q, i) => next[i] === q.a).length;
                st.quiz = st.quiz || {};
                st.quiz[ctx.t.id] = Math.max(st.quiz[ctx.t.id] || 0, right);
                markReadIn(st, ctx);
            }
        });
    };
    const done = Object.keys(ans).length === qs.length;
    const right = qs.filter((q, i) => ans[i] === q.a).length;
    const all = right === qs.length;
    return (
        <div className="card quiz">
            <h3>Проверьте понимание</h3>
            {qs.map((q, qi) => (
                <div className="qz" key={qi}>
                    <div className="qz-q">
                        {qi + 1}. {q.q}
                    </div>
                    <div className="qz-o">
                        {q.o.map((o, oi) => {
                            const answered = qi in ans;
                            const cls =
                                'qz-btn' +
                                (answered && oi === q.a ? ' right' : '') +
                                (answered && ans[qi] === oi && oi !== q.a ? ' wrong' : '');
                            return (
                                <button
                                    type="button"
                                    key={oi}
                                    className={cls}
                                    disabled={answered}
                                    onClick={() => choose(qi, oi)}
                                >
                                    {o}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
            {done ? (
                <div className={'feedback qz-res' + (all ? ' ok' : right ? ' mid' : ' bad')}>
                    <b>
                        {right} из {qs.length}
                    </b>{' '}
                    —{' '}
                    {all
                        ? 'отлично, вы всё поняли!'
                        : right
                          ? 'хорошо. Перечитайте места с ошибками.'
                          : 'текст пока сложноват — попробуйте статью уровнем ниже.'}{' '}
                    Статья отмечена прочитанной.
                </div>
            ) : null}
        </div>
    );
}
