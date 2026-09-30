// Всплывающая подсказка: перевод слова (+ В карточки) и перевод/озвучка предложения.
// Одна на приложение: <PopoverHost/> в AppChrome, открывается функциями openWord / openSentence.
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react';
import { speak, speakTTS } from '@core/audio';
import { useIpa } from '@core/audio/hooks';
import { Cloud } from '@core/cloud';
import { getState, update } from '@core/progress';
import { useProgress } from '@core/progress/hooks';
import { addCard } from '@core/srs';
import { autoTranslate, clean, ensureDict, gtUrl, isDictReady, lookup, translationAlts } from '@core/translate';
import { exMark } from '../content/word-cards/mark';
import { Icon } from './ui';
import { toast } from '@core/notifications/notify';
import './Popover.css';

export interface WordOpts {
    anchor: Element;
    word: string;
    /** Предложение вокруг слова — пример для карточки и «Всё предложение» */
    sentence?: string;
    /** Номер предложения в тексте (чтение): тогда «Всё предложение» вызывает onSentence(sid) */
    sid?: number;
    onSentence?: (sid: number) => void;
    /** Источник карточки, например 'text:lib-a1-shrek' */
    src?: string;
    /** Слово с большой буквы не в начале предложения — «Похоже на имя или название» */
    maybeName?: boolean;
}

export interface SentenceOpts {
    anchor: Element;
    text: string;
    /** Номер говорящего в диалоге (другой голос) */
    speaker?: number;
    onPrev?: () => void;
    onNext?: () => void;
    /** Номер предложения и сколько всего — режим чтения («Предложение 3 из 20», ‹ ›) */
    index?: number;
    total?: number;
    /** Скорость «Слушать» (по умолчанию — из настроек) */
    rate?: number;
}

type PopState =
    | { kind: 'word'; key: number; o: WordOpts; rect: DOMRect }
    | { kind: 'sentence'; key: number; o: SentenceOpts; rect: DOMRect }
    | null;

let cur: PopState = null;
let seq = 0;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => {
    listeners.add(l);
    return () => {
        listeners.delete(l);
    };
};

const clearMarks = () => {
    document.querySelectorAll('.w.sel, .lw.sel').forEach((x) => x.classList.remove('sel'));
    document.querySelectorAll('.s.sel-sent').forEach((x) => x.classList.remove('sel-sent'));
};

const countLookup = () =>
    update((s) => {
        s.stats.lookups = (s.stats.lookups || 0) + 1;
    });

/** Подсказка слова возле anchor (на телефоне — лист снизу) */
export function openWord(o: WordOpts) {
    countLookup();
    cur = { kind: 'word', key: ++seq, o, rect: o.anchor.getBoundingClientRect() };
    emit();
}

/** Подсказка предложения: текст, перевод, Слушать / Медленно, ‹ › */
export function openSentence(o: SentenceOpts) {
    countLookup();
    clearMarks();
    if (o.anchor.classList.contains('s')) o.anchor.classList.add('sel-sent');
    cur = { kind: 'sentence', key: ++seq, o, rect: o.anchor.getBoundingClientRect() };
    emit();
}

export function closePopover() {
    clearMarks();
    document.querySelectorAll('.s.speaking').forEach((x) => x.classList.remove('speaking'));
    if (!cur) return;
    cur = null;
    emit();
}

const isPhone = () => window.matchMedia('(max-width: 760px)').matches;

/** Позиция у слова (порт placePop). На телефоне — CSS ставит лист над меню */
function place(r: DOMRect): { left: number; top: number } | undefined {
    if (isPhone()) return undefined;
    const pw = Math.min(330, window.innerWidth - 24);
    const left = Math.min(Math.max(12, r.left + r.width / 2 - pw / 2), window.innerWidth - pw - 12);
    let top = r.bottom + 8;
    if (top + 240 > window.innerHeight) top = Math.max(12, r.top - 250);
    return { left, top };
}

/** После добавления в карточки — слово на странице больше не «новое» */
function markKnown(base: string) {
    document.querySelectorAll('.w, .lw').forEach((w) => {
        const t = w.textContent || '';
        if (clean(t) === base || lookup(t).some((x) => x.word === base)) {
            w.classList.add('known');
            w.classList.remove('nw');
        }
    });
}

// ───────── словарная статья Яндекса ─────────
const POS_RU: Record<string, string> = {
    noun: 'сущ.',
    verb: 'гл.',
    adjective: 'прил.',
    adverb: 'нареч.',
    pronoun: 'мест.',
    preposition: 'предлог',
    conjunction: 'союз',
    numeral: 'числ.',
    interjection: 'межд.',
    participle: 'прич.',
    'adverbial participle': 'деепр.',
    particle: 'частица',
    determiner: 'опр.',
};
interface YaDef {
    pos?: string;
    ts?: string;
    tr?: { text?: string }[];
}

function YaBox({ word }: { word: string }) {
    const [defs, setDefs] = useState<YaDef[] | null>(null);
    useEffect(() => {
        let alive = true;
        if (!Cloud.yandexReady()) return;
        Cloud.yandex(word, 'word')
            .then((d) => {
                const list = ((d as { defs?: unknown } | null)?.defs || []) as YaDef[];
                if (alive && Array.isArray(list) && list.length) setDefs(list);
            })
            .catch(() => undefined);
        return () => {
            alive = false;
        };
    }, [word]);
    if (!defs) return null;
    return (
        <div className="ya-box">
            {defs[0].ts ? <div className="ya-ts">[{defs[0].ts}]</div> : null}
            {defs.slice(0, 3).map((df, i) => (
                <div className="ya-def" key={i}>
                    <span className="ya-pos">{POS_RU[df.pos || ''] || df.pos || ''}</span>{' '}
                    {(df.tr || [])
                        .slice(0, 4)
                        .map((t) => t.text || '')
                        .join(', ')}
                </div>
            ))}
            <a className="ya-attr" href="https://tech.yandex.ru/dictionary/" target="_blank" rel="noopener">
                Реализовано с помощью сервиса «Яндекс.Словарь»
            </a>
        </div>
    );
}

function Ipa({ word }: { word: string }) {
    const { ipa, live } = useIpa(word);
    if (!ipa && !live) return null;
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

// ───────── слово ─────────
function WordPop({ o }: { o: WordOpts }) {
    const s = useProgress();
    const [ready, setReady] = useState(isDictReady());
    const [tr, setTr] = useState('');
    const [status, setStatus] = useState<'wait' | 'auto' | 'fail'>('wait');
    const [alts, setAlts] = useState<string[]>([]);
    const inp = useRef<HTMLInputElement>(null);
    const raw = o.word;
    const res = ready ? lookup(raw) : [];
    const base = res[0] ? res[0].word : clean(raw);
    const inCards = !!s.cards[base];
    const sayW = res[0] ? res[0].word : raw;
    const sentence = o.sentence || '';

    useEffect(() => {
        if (ready) return;
        let alive = true;
        ensureDict()
            .then(() => {
                if (alive) setReady(true);
            })
            .catch(() => {
                if (alive) setReady(true);
            });
        return () => {
            alive = false;
        };
    }, [ready]);

    // озвучить сразу, как только знаем начальную форму
    useEffect(() => {
        if (ready) speak(sayW);
    }, [ready, sayW]);

    // нет в словаре — автоперевод
    const found = res.length > 0;
    useEffect(() => {
        if (!ready || found) return;
        let alive = true;
        autoTranslate(raw).then((t) => {
            if (!alive) return;
            if (t) {
                setTr((v) => v || t);
                setStatus('auto');
                setAlts(translationAlts(raw));
            } else setStatus('fail');
        });
        return () => {
            alive = false;
        };
    }, [ready, found, raw]);

    const add = () => {
        const ru = found ? res[0].tr : tr.trim();
        if (!ru) {
            toast('Впишите перевод');
            inp.current?.focus();
            return;
        }
        update((st) => {
            addCard(st, found ? base : raw.toLowerCase(), ru, exMark(sentence, raw), '', o.src || '');
        });
        markKnown(base);
        toast('Добавлено в карточки');
        closePopover();
    };

    const showSent =
        o.sid != null || (/\s/.test(sentence.trim()) && sentence.trim().toLowerCase() !== raw.toLowerCase());
    const openSent = () => {
        if (o.sid != null && o.onSentence) o.onSentence(o.sid);
        else openSentence({ anchor: o.anchor, text: sentence });
    };

    return (
        <>
            <div className="pp-head">
                <div className="pw">{raw}</div>
                <button type="button" className="icon-btn" aria-label="Слушать" onClick={() => speak(sayW)}>
                    <Icon name="speaker-high" />
                </button>
                <span className="spacer" />
                <button type="button" className="icon-btn" aria-label="Закрыть" onClick={closePopover}>
                    <Icon name="x" />
                </button>
            </div>
            <Ipa word={base} />
            {!ready ? (
                <div className="alt">загружаю словарь…</div>
            ) : found ? (
                <>
                    <div className="tr">{res[0].tr}</div>
                    {res[0].word !== clean(raw) ? (
                        <div className="alt">
                            форма слова <b>{res[0].word}</b>
                        </div>
                    ) : null}
                    {res.slice(1, 3).map((r) => (
                        <div className="alt" key={r.word}>
                            {r.word}: {r.tr}
                        </div>
                    ))}
                    <YaBox word={base} />
                </>
            ) : (
                <>
                    <div className="alt pp-note">
                        {o.maybeName ? 'Похоже на имя или название.' : 'Нет во встроенном словаре —'}{' '}
                        <span>
                            {status === 'wait'
                                ? 'перевожу…'
                                : status === 'auto'
                                  ? 'автоперевод, можно поправить:'
                                  : 'впишите перевод сами (или откройте переводчик):'}
                        </span>
                    </div>
                    <input
                        ref={inp}
                        className="input pp-input"
                        placeholder="Перевод"
                        autoComplete="off"
                        value={tr}
                        onChange={(e) => setTr(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') add();
                        }}
                    />
                    {alts.length ? (
                        <div className="alt-row">
                            <span className="tiny muted">Другие варианты:</span>
                            {alts.map((a) => (
                                <button
                                    type="button"
                                    className="alt-chip"
                                    key={a}
                                    onClick={() => {
                                        setTr(a);
                                        inp.current?.focus();
                                    }}
                                >
                                    {a}
                                </button>
                            ))}
                        </div>
                    ) : null}
                </>
            )}
            <div className="actions">
                {inCards ? (
                    <span className="pill ok">
                        <Icon name="check" /> в карточках
                    </span>
                ) : (
                    <button type="button" className="btn small primary" onClick={add} disabled={!ready}>
                        + В карточки
                    </button>
                )}
                {showSent ? (
                    <button type="button" className="btn small" onClick={openSent}>
                        <Icon name="text-align-left" /> Всё предложение
                    </button>
                ) : null}
                <a className="btn small ghost" target="_blank" rel="noopener" href={gtUrl(sentence || raw)}>
                    Переводчик <Icon name="arrow-up-right" />
                </a>
            </div>
        </>
    );
}

// ───────── предложение ─────────
function SentencePop({ o }: { o: SentenceOpts }) {
    const reader = o.index != null && o.total != null;
    const plain = reader
        ? o.text
        : String(o.text || '')
              .replace(/_{2,}/g, '…')
              .replace(/\s+/g, ' ')
              .trim();
    const spoken = plain.replace(/…/g, '').trim();
    const [ru, setRu] = useState<string | null | undefined>(undefined);
    const el = o.anchor.classList.contains('s') ? o.anchor : null;

    const say = (rate: number) => {
        if (!reader) {
            speakTTS(spoken, { rate });
            return;
        }
        document.querySelectorAll('.s.speaking').forEach((x) => x.classList.remove('speaking'));
        el?.classList.add('speaking');
        speak(spoken, { rate, speaker: o.speaker, onend: () => el?.classList.remove('speaking') });
    };
    const rate = () => o.rate || getState().settings.rate;

    useEffect(() => {
        say(rate());
        let alive = true;
        autoTranslate(spoken).then((t) => {
            if (alive) setRu(t);
        });
        return () => {
            alive = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spoken]);

    return (
        <>
            <div className="pp-head ps-head">
                <span className="eyebrow">
                    {reader ? `Предложение ${(o.index || 0) + 1} из ${o.total}` : 'Предложение'}
                </span>
                <span className="spacer" />
                {reader ? (
                    <>
                        <button
                            type="button"
                            className="icon-btn"
                            title="Предыдущее"
                            aria-label="Предыдущее"
                            disabled={!o.index || !o.onPrev}
                            onClick={o.onPrev}
                        >
                            <Icon name="caret-left" />
                        </button>
                        <button
                            type="button"
                            className="icon-btn"
                            title="Следующее"
                            aria-label="Следующее"
                            disabled={(o.index || 0) >= (o.total || 0) - 1 || !o.onNext}
                            onClick={o.onNext}
                        >
                            <Icon name="caret-right" />
                        </button>
                    </>
                ) : null}
                <button type="button" className="icon-btn" aria-label="Закрыть" onClick={closePopover}>
                    <Icon name="x" />
                </button>
            </div>
            <div className="ps-en">{plain}</div>
            <div className="ps-ru">
                {ru === undefined ? (
                    <span className="muted">перевожу…</span>
                ) : ru ? (
                    ru
                ) : (
                    <span className="muted">
                        {reader
                            ? 'Не удалось перевести автоматически — откройте «Переводчик».'
                            : 'Не удалось перевести автоматически.'}
                    </span>
                )}
            </div>
            <div className="actions">
                <button type="button" className="btn small primary" onClick={() => say(rate())}>
                    <Icon name="play" fill /> Слушать
                </button>
                <button type="button" className="btn small" onClick={() => say(0.6)}>
                    <Icon name="timer" /> Медленно
                </button>
                {reader ? (
                    <a className="btn small ghost" target="_blank" rel="noopener" href={gtUrl(plain)}>
                        Переводчик <Icon name="arrow-up-right" />
                    </a>
                ) : null}
            </div>
            {reader ? (
                <div className="tiny muted ps-tip">
                    Послушайте и повторите вслух 2–3 раза — это shadowing, лучший способ поставить произношение.
                </div>
            ) : null}
        </>
    );
}

/** Контейнер подсказки — один на приложение */
export function PopoverHost() {
    const st = useSyncExternalStore(
        subscribe,
        () => cur,
        () => cur,
    );
    const ref = useRef<HTMLDivElement>(null);

    // закрытие: Esc, нажатие вне подсказки и вне слов, смена страницы
    useEffect(() => {
        const down = (e: Event) => {
            const t = e.target as Element | null;
            if (!cur || !t || !t.closest) return;
            if (t.closest('.popover') || t.closest('.w') || t.closest('.s') || t.closest('.lw')) return;
            closePopover();
        };
        const key = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closePopover();
        };
        document.addEventListener('mousedown', down);
        document.addEventListener('touchstart', down, { passive: true });
        document.addEventListener('keydown', key);
        window.addEventListener('hashchange', closePopover);
        return () => {
            document.removeEventListener('mousedown', down);
            document.removeEventListener('touchstart', down);
            document.removeEventListener('keydown', key);
            window.removeEventListener('hashchange', closePopover);
        };
    }, []);

    // режим чтения: не даём листу закрыть выделенное предложение
    useLayoutEffect(() => {
        if (!st || st.kind !== 'sentence' || !ref.current) return;
        const el = st.o.anchor;
        const id = requestAnimationFrame(() => {
            if (!ref.current || !el.isConnected) return;
            const pr = ref.current.getBoundingClientRect(),
                er = el.getBoundingClientRect();
            if (pr.top > er.top - 20 && er.bottom > pr.top - 12)
                window.scrollBy({ top: er.bottom - pr.top + 24, behavior: 'smooth' });
            else if (er.top < 70) window.scrollBy({ top: er.top - 90, behavior: 'smooth' });
        });
        return () => cancelAnimationFrame(id);
    }, [st]);

    if (!st) return null;
    const pos = place(st.rect);
    return (
        <div
            ref={ref}
            className="popover"
            role="dialog"
            aria-label={st.kind === 'word' ? 'Перевод слова' : 'Перевод предложения'}
            style={pos ? { left: pos.left, top: pos.top } : undefined}
        >
            {st.kind === 'word' ? <WordPop key={st.key} o={st.o} /> : <SentencePop key={st.key} o={st.o} />}
        </div>
    );
}
