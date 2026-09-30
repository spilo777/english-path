// Словарь: страница тематической коллекции, списки слов по статусу, колода уровня
import { useMemo, useState } from 'react';
import { BackLink, Icon, toast } from '../components/ui';
import { cardKind, fmtIvl } from '../lib/srs';
import { tomb, update, useProgress } from '../lib/store';
import { LEVELS, type Card, type DeckWord, type TopicCat, type TopicCol } from '../lib/types';
import {
    KnownBtn,
    SayBtn,
    SayText,
    StatusPill,
    TopicProg,
    catTone,
    deckWords,
    learnedCard,
    topicStats,
    wid,
} from './cards-util';

// ───────── коллекция по теме ─────────
export function TopicPage({ c, cats, cols }: { c: TopicCol; cats: TopicCat[]; cols: TopicCol[] }) {
    const s = useProgress();
    const st = topicStats(s, c);
    const same = cols.filter((x) => x.cat === c.cat);
    const nxt = same[same.indexOf(c) + 1];
    const cat = cats.find((x) => x.id === c.cat);
    const toLearn = c.words.filter((w) => {
        const k = wid(w[0]);
        return !s.known[k] && !learnedCard(s.cards[k]);
    }).length;
    return (
        <>
            <BackLink href="#/cards" />
            <div className={'topic-hero tone-' + catTone(cats, c.cat)}>
                <Icon name={c.icon} fill className="topic-ill" />
                <div className="eyebrow">
                    {cat?.title || ''} · {c.level}
                </div>
                <h1>{c.title}</h1>
                <div className="small">
                    {st.total} слов · выучено {st.learned}
                    {st.study ? ' · учу ' + st.study : ''}
                </div>
                <TopicProg {...st} big />
            </div>
            <div className="row topic-actions">
                {toLearn ? (
                    <a className="pill-btn" href={'#/review/topic/' + c.id}>
                        {st.study || st.learned ? 'ПРОДОЛЖИТЬ' : 'УЧИТЬ'}
                    </a>
                ) : (
                    <span className="pill ok">
                        <Icon name="check" /> Коллекция выучена
                    </span>
                )}
                <span className="small muted">
                    {toLearn
                        ? 'Сессия: до 12 новых слов и повторение начатых. Потом слова будут приходить в обычные карточки по расписанию.'
                        : ''}
                </span>
            </div>
            <div className="card">
                <div className="word-list">
                    {c.words.map((w) => {
                        const id = wid(w[0]);
                        return (
                            <div className="word-item" key={id}>
                                <SayBtn text={w[0]} />
                                <div className="wi-body">
                                    <span className="w">{w[0]}</span> — {w[1]}
                                    <div className="ex">
                                        <SayText text={w[2]} /> · {w[3]}
                                    </div>
                                </div>
                                <StatusPill s={s} id={id} />
                                <KnownBtn s={s} id={id} />
                            </div>
                        );
                    })}
                </div>
            </div>
            {nxt ? (
                <a className="list-link" href={'#/topic/' + nxt.id}>
                    <Icon name={nxt.icon} fill />
                    <span>
                        <b>Дальше: {nxt.title}</b>
                        <span className="small muted">
                            {nxt.level} · {nxt.words.length} слов
                        </span>
                    </span>
                    <Icon name="caret-right" className="muted" />
                </a>
            ) : null}
        </>
    );
}

// ───────── слова по статусу ─────────
export const WL: Record<string, [string, string]> = {
    new: [
        'Новые',
        'Слова в очереди: ещё ни разу не приходили в карточки. Они появятся в повторении по лимиту новых слов в день.',
    ],
    learn: ['Изучаю', 'Слова, которые вы только начали учить: повторяются часто — через минуты, часы и первые дни.'],
    fam: ['Знакомые', 'Вы их уже неплохо помните: следующее повторение через неделю-две.'],
    done: ['Выученные', 'Интервал больше 3 недель — слово в долгой памяти. Сюда же попадают слова, отмеченные «Знаю».'],
    mine: ['Мои слова', 'Слова, добавленные вручную и из текстов (не из колод).'],
    all: ['Все', 'Все слова в ваших карточках. Удалить слово — крестик справа.'],
};

interface WordRow {
    id: string;
    en: string;
    ru: string;
    added: number;
    card?: Card;
}

export function WordsPage({ kind, deck }: { kind: string; deck: DeckWord[] }) {
    const s = useProgress();
    const [q, setQ] = useState('');
    const byId = useMemo(() => new Map(deck.map((w) => [w.id, w])), [deck]);
    const cs = Object.values(s.cards);
    const toRow = (c: Card): WordRow => ({ id: c.id, en: c.en, ru: c.ru, added: c.added || 0, card: c });
    let items: WordRow[];
    if (kind === 'mine') items = cs.filter((c) => !byId.has(c.id) && !/^topic:/.test(c.src || '')).map(toRow);
    else if (kind === 'all') items = cs.map(toRow);
    else {
        items = cs.filter((c) => cardKind(c) === kind).map(toRow);
        if (kind === 'done')
            Object.keys(s.known).forEach((id) => {
                if (!s.cards[id]) {
                    const w = byId.get(id);
                    items.push({ id, en: w ? w.en : id, ru: w ? w.ru : '', added: s.known[id] });
                }
            });
    }
    items.sort((a, b) => b.added - a.added);
    const qq = q.toLowerCase().trim();
    const f = items.filter((c) => !qq || c.en.toLowerCase().includes(qq) || (c.ru || '').toLowerCase().includes(qq));
    const now = Date.now();
    const del = (id: string) => {
        if (!confirm('Удалить карточку?')) return;
        update((x) => {
            delete x.cards[id];
            tomb(x, 'card:' + id);
        });
    };
    return (
        <>
            <BackLink href="#/cards" />
            <h1 className="page-title">
                {WL[kind][0]} · {items.length}
            </h1>
            <p className="page-sub">{WL[kind][1]}</p>
            <div className="wl-seg">
                {Object.keys(WL).map((k) => (
                    <a key={k} href={'#/words/' + k} className={k === kind ? 'on' : ''}>
                        {WL[k][0]}
                    </a>
                ))}
            </div>
            {items.length ? (
                <input
                    className="input"
                    placeholder="Поиск по слову или переводу"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            ) : null}
            <div className="card">
                <div className="word-list">
                    {f.length ? (
                        f.slice(0, 400).map((c) => (
                            <div className="word-item" key={c.id}>
                                <SayBtn text={c.en} />
                                <div className="wi-body">
                                    <span className="w">{c.en}</span> — {c.ru}
                                    <div className="ex">
                                        {!c.card
                                            ? 'отмечено «Знаю»'
                                            : c.card.state === 'new'
                                              ? 'ещё не повторялось'
                                              : 'следующее повторение ' +
                                                (c.card.due <= now ? 'сейчас' : 'через ' + fmtIvl(c.card.due - now))}
                                    </div>
                                </div>
                                {kind === 'all' && c.card ? (
                                    <button
                                        type="button"
                                        className="icon-btn"
                                        title="Удалить"
                                        aria-label="Удалить"
                                        onClick={() => del(c.id)}
                                    >
                                        <Icon name="x" />
                                    </button>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <div className="empty">
                            <div className="big">
                                <Icon name="cards" />
                            </div>
                            {items.length ? 'Ничего не найдено' : 'Здесь пока пусто'}
                        </div>
                    )}
                </div>
            </div>
            {kind === 'new' || kind === 'learn' ? (
                <div>
                    <a className="pill-btn" href="#/review">
                        ПОВТОРИТЬ СЕЙЧАС
                    </a>
                </div>
            ) : null}
        </>
    );
}

// ───────── колода уровня / фразовые глаголы ─────────
type DeckFilter = 'all' | 'todo' | 'cards' | 'known';

export function DeckPage({ lvl, deck }: { lvl: string; deck: DeckWord[] }) {
    const s = useProgress();
    const phr = lvl === 'phr';
    const ws = useMemo(() => deckWords(deck, lvl), [deck, lvl]);
    const [q, setQ] = useState('');
    const [flt, setFlt] = useState<DeckFilter>('all');
    const [shown, setShown] = useState(150);
    const qq = q.toLowerCase().trim();
    const items = ws.filter(
        (w) =>
            (!qq || w.id.includes(qq) || w.ru.toLowerCase().includes(qq)) &&
            (flt === 'all' ||
                (flt === 'known' && s.known[w.id]) ||
                (flt === 'cards' && s.cards[w.id]) ||
                (flt === 'todo' && !s.cards[w.id] && !s.known[w.id])),
    );
    const on = !!(s.settings.decks || {})[lvl];
    const setOn = (v: boolean) => {
        update((x) => {
            x.settings.decks = x.settings.decks || {};
            x.settings.decks[lvl] = v;
        });
        toast(v ? 'Слова этой колоды будут приходить в карточки' : 'Колода выключена');
    };
    return (
        <>
            <BackLink href="#/cards" />
            <div className="row deck-head">
                <h1 className="page-title">{phr ? 'Фразовые глаголы' : 'Колода ' + lvl}</h1>
                {phr ? null : (
                    <label className="switch-row">
                        <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
                        <span className="switch" /> Учить
                    </label>
                )}
            </div>
            {phr ? (
                <p className="muted">
                    Глагол + маленькое слово (up, out, on…) = новое значение: give up — сдаваться, look for — искать. В
                    играх и сериалах они повсюду. Все они уже входят в колоды по уровням.
                </p>
            ) : null}
            <p className="muted">
                Слова, которые вы уже знаете, отметьте «Знаю» — они не будут приходить в карточки. Слова идут от самых
                частых к более редким (частота по английским субтитрам фильмов и сериалов) — в этом же порядке они будут
                приходить в карточки.
            </p>
            <div className="row deck-filter">
                <input
                    className="input"
                    placeholder="Поиск по слову или переводу"
                    value={q}
                    onChange={(e) => {
                        setQ(e.target.value);
                        setShown(150);
                    }}
                />
                <select
                    className="input"
                    value={flt}
                    onChange={(e) => {
                        setFlt(e.target.value as DeckFilter);
                        setShown(150);
                    }}
                >
                    <option value="all">Все</option>
                    <option value="todo">Ещё не начаты</option>
                    <option value="cards">В карточках</option>
                    <option value="known">Отмечены «знаю»</option>
                </select>
            </div>
            <div className="card">
                <div className="word-list">
                    {items.length ? (
                        items.slice(0, shown).map((w) => (
                            <div className="word-item" key={w.id}>
                                <SayBtn text={w.en} />
                                <div className="wi-body">
                                    <span className="w">{w.en}</span>{' '}
                                    <span className="tiny muted">
                                        {w.pos || ''}
                                        {w.rank ? ' · №' + w.rank + ' по частоте' : ''}
                                    </span>{' '}
                                    — {w.ru}
                                    <div className="ex">
                                        <SayText text={w.ex} /> · {w.exRu}
                                    </div>
                                </div>
                                <StatusPill s={s} id={w.id} />
                                <KnownBtn s={s} id={w.id} />
                            </div>
                        ))
                    ) : (
                        <div className="empty">Ничего не найдено</div>
                    )}
                </div>
                {items.length > shown ? (
                    <div className="more-row">
                        <button type="button" className="btn small" onClick={() => setShown((n) => n + 300)}>
                            Показать ещё
                        </button>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export const isDeckLevel = (lvl: string) => lvl === 'phr' || (LEVELS as string[]).includes(lvl);
