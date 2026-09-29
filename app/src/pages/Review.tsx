// Повторение карточек: #/review (все карточки) и #/review/topic/<id> (одна коллекция)
import { useEffect, useMemo, useRef, useState } from 'react';
import type { PageProps } from '../app/App';
import { BackLink, Icon, LoadError, Loading, Page, Progress as Bar, toast } from '../components/ui';
import { useDeck, useTopics } from '../lib/data';
import { addCard, countNew, dueCards, newLeftToday, schedule, takeNew } from '../lib/srs';
import { getState, tomb, track, update, useProgress } from '../lib/store';
import type { DeckWord, Settings, TopicCol } from '../lib/types';
import { exMark, wid } from './cards-util';
import { FlashCard, prefetchCard, type Grade, type Side } from './review-card';
import './Review.css';

interface Sess { queue: string[]; done: number; graded: number; agains: number; start: number; total: number; finished: boolean }

/** Очередь: два повторения, одно новое — и так по кругу */
function buildQueue(deck: DeckWord[], tc: TopicCol | undefined): string[] {
  let dueIds: string[] = [], newIds: string[] = [];
  update((s) => {
    if (tc) { // сессия по одной коллекции: её повторения + до 12 новых слов из неё
      const now = Date.now();
      dueIds = tc.words.map((w) => wid(w[0])).filter((id) => s.cards[id] && s.cards[id].state !== 'new' && s.cards[id].due <= now);
      tc.words.forEach((w) => {
        const id = wid(w[0]);
        if (newIds.length >= 12 || s.known[id]) return;
        if (!s.cards[id]) addCard(s, w[0], w[1], exMark(w[2], w[0]), w[3], 'topic:' + tc.id);
        if (s.cards[id] && s.cards[id].state === 'new') newIds.push(id);
      });
    } else {
      dueIds = dueCards(s).map((c) => c.id);
      newIds = takeNew(s, deck, newLeftToday(s));
    }
  });
  const q: string[] = [];
  while (dueIds.length || newIds.length) {
    if (dueIds.length) q.push(dueIds.shift() as string);
    if (dueIds.length) q.push(dueIds.shift() as string);
    if (newIds.length) q.push(newIds.shift() as string);
  }
  return q;
}

function Session({ deck, tc }: { deck: DeckWord[]; tc?: TopicCol }) {
  const s = useProgress();
  const sess = useRef<Sess | null>(null);
  const [turn, setTurn] = useState(0);
  const byId = useMemo(() => new Map(deck.map((w) => [w.id, w])), [deck]);

  useEffect(() => {
    if (sess.current) return;
    const queue = buildQueue(deck, tc);
    sess.current = { queue, done: 0, graded: 0, agains: 0, start: Date.now(), total: queue.length, finished: false };
    setTurn(1);
  }, [deck, tc]);

  /** Следующая карточка: пропустить удалённые, в конце сессии — «чистая сессия» для достижений */
  const next = () => {
    const x = sess.current; if (!x) return;
    const cards = getState().cards;
    while (x.queue.length && !cards[x.queue[0]]) x.queue.shift();
    if (!x.queue.length && !x.finished) {
      x.finished = true;
      if (x.graded >= 20 && x.agains === 0) update((st) => { st.stats.cleanSessions = (st.stats.cleanSessions || 0) + 1; });
    }
    setTurn((t) => t + 1);
  };

  const x = sess.current;
  const head = x && x.queue.length ? s.cards[x.queue[0]] : undefined;
  const nextCard = x && x.queue[1] ? s.cards[x.queue[1]] : undefined;
  useEffect(() => { if (nextCard) prefetchCard(nextCard, byId.get(nextCard.id)?.pos, byId.has(nextCard.id)); }, [turn]);

  const setMode = (v: Settings['cardMode']) => update((st) => { st.settings.cardMode = v; });

  const onGrade = (g: Grade, side: Side) => {
    if (!x || !head) return;
    const id = head.id;
    const wasNew = head.state === 'new';
    const n = schedule(head, g);
    update((st) => {
      st.cards[id] = n;
      if (wasNew) countNew(st);
      track(st, 'reviews');
      if (side === 'ru-en') st.stats.ruEn = (st.stats.ruEn || 0) + 1;
      if (st.settings.cardMode === 'mix') st.stats.mixRev = (st.stats.mixRev || 0) + 1;
      const d = new Date();
      if (d.getHours() >= 23) st.stats.late = (st.stats.late || 0) + 1;
      if (d.getHours() === 0 && d.getMinutes() === 0) st.stats.midnight = 1;
      if (x.graded + 1 === 50 && Date.now() - x.start < 5 * 60000) st.stats.speedrun = 1;
    });
    x.graded++; if (g === 0) x.agains++;
    x.queue.shift();
    if (n.state === 'learn') x.queue.splice(Math.min(x.queue.length, g === 0 ? 3 : 6), 0, id); // вернётся через несколько карточек
    else x.done++;
    next();
  };

  // «Уже знаю»: слово — в выученные, из карточек убираем, на его место в сессию — следующее новое слово
  const onKnown = () => {
    if (!x || !head) return;
    const id = head.id;
    x.queue.shift();
    update((st) => {
      st.known[id] = Date.now(); delete st.cards[id]; tomb(st, 'card:' + id);
      const more = takeNew(st, deck, 1).filter((k) => !x.queue.includes(k));
      x.queue.push(...more);
    });
    toast('Отмечено как выученное');
    next();
  };

  const side: Side = useMemo(() => {
    const mode = getState().settings.cardMode;
    return mode === 'mix' ? (Math.random() < 0.5 ? 'en-ru' : 'ru-en') : mode;
  }, [turn]);

  let body;
  if (!x) body = <Loading />;
  else if (!x.total) {
    body = <div className="card empty"><div className="big"><Icon name="check" /></div>Сейчас повторять нечего. {Object.keys(s.cards).length ? 'Следующие карточки придут позже.' : 'Добавьте слова из урока.'}</div>;
  } else if (!head) {
    body = (
      <div className="card result">
        <div className="big"><Icon name="confetti" /></div>
        <h2>{tc ? 'Сессия закончена!' : 'На сегодня всё!'}</h2>
        <p className="muted">{tc ? `«${tc.title}»: повторено ${x.done}. Эти слова теперь будут приходить в обычные карточки по расписанию.` : `Повторено карточек: ${x.done}. Возвращайтесь завтра — слова придут сами.`}</p>
        <div className="row rv-end">
          {tc ? <><a className="btn primary" href={'#/topic/' + tc.id}>К коллекции</a><a className="btn" href="#/cards">В словарь</a></> : <a className="btn primary" href="#/">На главную</a>}
        </div>
      </div>
    );
  } else {
    body = <FlashCard key={turn} c={head} pos={byId.get(head.id)?.pos} side={side} onGrade={onGrade} onKnown={onKnown} />;
  }

  return (
    <>
      <div className="row rv-top">
        <BackLink href={tc ? '#/topic/' + tc.id : '#/cards'} />
        {tc ? <b className="rv-topic">{tc.title}</b> : null}
        <span className="rv-spacer" />
        <select className="input rv-mode" aria-label="Сторона карточки" value={s.settings.cardMode} onChange={(e) => setMode(e.target.value as Settings['cardMode'])}>
          <option value="en-ru">англ → рус</option><option value="ru-en">рус → англ</option><option value="mix">вперемешку</option>
        </select>
      </div>
      {x && x.total ? (
        <div className="ex-head"><Bar value={x.done / Math.max(1, x.total)} /><span className="tiny muted">{x.queue.length ? `осталось ${x.queue.length}` : ''}</span></div>
      ) : null}
      {body}
    </>
  );
}

export default function Review({ params }: PageProps) {
  const deck = useDeck();
  const topicId = params[1] === 'topic' ? params[2] : undefined;
  const topics = useTopics();
  if (topicId && topics.error) return <Page className="rv"><LoadError error={topics.error} /></Page>;
  if (!deck || (topicId && !topics.data)) return <Page className="rv"><Loading /></Page>;
  const tc = topicId ? topics.data?.cols.find((c) => c.id === topicId) : undefined;
  return <Page className="rv"><Session key={params.join('/')} deck={deck} tc={tc} /></Page>;
}
