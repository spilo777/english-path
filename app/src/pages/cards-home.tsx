// Словарь: «Сейчас учу», плитки статусов, колоды по уровням, добавление слова, коллекции по темам
import { useMemo, useRef, useState, type RefObject } from 'react';
import { GoalCard } from '../components/GoalCard';
import { Icon, RoundBtn, TopBar, plural, toast } from '../components/ui';
import { go } from '../app/router';
import { useCourse } from '../lib/data';
import { ensureDict, lookup } from '../lib/lookup';
import { addCard, cardKind, dueCards, newAvailable, type WordKind } from '../lib/srs';
import { update, useProgress } from '../lib/store';
import { autoTranslate } from '../lib/translate';
import { LEVELS, type DeckWord, type Progress, type TopicCat, type TopicCol } from '../lib/types';
import { DECK_ICONS, TopicProg, catTone, deckWords, learnedCard, topicStats } from './cards-util';

/** Плитка колоды уровня (или фразовых глаголов) */
function DeckTile({ s, deck, lvl, levelTitle }: { s: Progress; deck: DeckWord[]; lvl: string; levelTitle: string }) {
  const phr = lvl === 'phr';
  const ws = deckWords(deck, lvl);
  let learned = 0, study = 0;
  ws.forEach((w) => { const c = s.cards[w.id]; if (s.known[w.id] || learnedCard(c)) learned++; else if (c && c.state !== 'new') study++; });
  const on = !phr && !!(s.settings.decks || {})[lvl];
  const i = phr ? 4 : LEVELS.indexOf(lvl as (typeof LEVELS)[number]);
  const pct = (x: number) => (x / Math.max(1, ws.length)) * 100 + '%';
  return (
    <a className={'coll-tile t' + i} href={'#/deck/' + lvl}>
      <div className="coll-ill"><Icon name={phr ? 'puzzle-piece' : DECK_ICONS[i]} fill /></div>
      <div className="coll-top"><b>{phr ? 'Фразовые глаголы' : lvl}</b>
        <span className="sig">{[1, 2, 3, 4].map((k) => <i key={k} className={k <= (phr ? 2 : i + 1) ? 'on' : ''} style={{ height: k * 25 + '%' }} />)}</span></div>
      <span>{phr ? 'give up, look for, get on…' : levelTitle}</span>
      <span className="coll-meta">{learned} / {ws.length} выучено{study ? ` · в процессе ${study}` : ''}{!phr && !on ? <> · <b className="off-tag">выключена</b></> : null}</span>
      <div className="coll-bar"><i style={{ width: pct(learned) }} /><i style={{ width: pct(study) }} /></div>
    </a>
  );
}

function TopicTile({ s, c, cats }: { s: Progress; c: TopicCol; cats: TopicCat[] }) {
  const st = topicStats(s, c);
  return (
    <a className={'topic-tile tone-' + catTone(cats, c.cat)} href={'#/topic/' + c.id}><b>{c.title}</b>
      <Icon name={c.icon} fill className="topic-ill" />
      <span className="topic-meta">{st.learned || st.study ? <><TopicProg {...st} />{st.learned}/{st.total}</> : `${c.level} · ${st.total} слов`}</span>
    </a>
  );
}

/** Ручное добавление слова: перевод подставляется из словаря или машинным переводом */
function AddBox({ boxRef, enRef }: { boxRef: RefObject<HTMLDivElement | null>; enRef: RefObject<HTMLInputElement | null> }) {
  const [en, setEn] = useState('');
  const [ru, setRu] = useState('');
  const [ph, setPh] = useState('перевод');
  const fill = () => {
    const w = en.trim(); if (!w || ru.trim()) return;
    const hit = lookup(w)[0];
    if (hit && !w.includes(' ')) { setRu(hit.tr); return; }
    setPh('перевожу…');
    void autoTranslate(w).then((tr) => { if (tr) setRu((v) => v || tr); setPh('перевод'); });
  };
  const add = () => {
    const e = en.trim(), r = ru.trim();
    if (!e || !r) { toast('Заполните оба поля'); return; }
    let ok = false;
    update((s) => { ok = addCard(s, e, r, '', '', 'manual'); });
    if (!ok) { toast('Такое слово уже есть'); return; }
    setEn(''); setRu(''); toast('Добавлено');
  };
  return (
    <div className="card add-box" ref={boxRef}>
      <div className="small add-h">Добавить слово вручную</div>
      <div className="row">
        <input className="input" ref={enRef} placeholder="english" value={en} onChange={(e) => setEn(e.target.value)} onBlur={fill} onKeyDown={(e) => { if (e.key === 'Enter') add(); }} />
        <input className="input" placeholder={ph} value={ru} onChange={(e) => setRu(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') add(); }} />
        <button type="button" className="btn small primary" onClick={add}>Добавить</button>
      </div>
    </div>
  );
}

export function CardsHome({ deck, cats, cols }: { deck: DeckWord[]; cats: TopicCat[]; cols: TopicCol[] }) {
  const s = useProgress();
  const course = useCourse().data;
  const [adding, setAdding] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const enRef = useRef<HTMLInputElement>(null);
  const deckIds = useMemo(() => new Set(deck.map((w) => w.id)), [deck]);

  const all = Object.values(s.cards);
  const due = dueCards(s).length;
  const nw = newAvailable(s, deck);
  const onDecks = LEVELS.filter((l) => (s.settings.decks || {})[l]);
  const cnt = (k: WordKind) => all.filter((c) => cardKind(c) === k).length + (k === 'done' ? Object.keys(s.known).filter((id) => !s.cards[id]).length : 0);
  const mine = all.filter((c) => !deckIds.has(c.id)).length;
  const lvTitle = (l: string) => { const lv = course?.levels.find((x) => x.id === l); return lv ? lv.title.split('— ')[1] || '' : ''; };

  const toggleAdd = () => {
    const open = !adding;
    setAdding(open);
    if (open) {
      void ensureDict();
      requestAnimationFrame(() => { boxRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }); enRef.current?.focus(); });
    }
  };

  const tiles: [WordKind, string, string, string][] = [
    ['new', 't-blue', 'sparkle', 'Новые'], ['learn', 't-yellow', 'lightning', 'Изучаю'],
    ['fam', 't-orange', 'eye', 'Знакомые'], ['done', 't-green', 'seal-check', 'Выученные'],
  ];

  return (
    <>
      <TopBar title="Словарь" right={<>
        <RoundBtn icon="plus" title="Добавить слово" onClick={toggleAdd} />
        <RoundBtn icon="magnifying-glass" title="Найти слово" onClick={() => go('#/words/all')} />
      </>} />
      <div className="duo">
        <div className="now-card">
          <div className="now-ill"><Icon name="cards" fill /></div>
          <div className="now-body">
            <div className="eyebrow">Сейчас учу</div>
            <b className="now-title">{onDecks.length ? 'Колоды ' + onDecks.join(' · ') : 'Только мои слова'}</b>
            <div className="small muted">{due + nw ? `${due} на повторение · ${nw} ${plural(nw, 'новая', 'новые', 'новых')}` : 'На сегодня всё повторено'}</div>
            <a className="now-extra small" href="#/review/extra"><Icon name="lightning" fill /> Занятие вне очереди</a>
          </div>
          {due + nw ? <a className="pill-btn" href="#/review">НАЧАТЬ</a> : <span className="pill ok"><Icon name="check" /> Готово</span>}
        </div>
        <GoalCard title="Цель обучения на сегодня" />
      </div>
      <div className="tiles4">
        {tiles.map(([k, cls, icon, label]) => (
          <a key={k} className={'tile ' + cls} href={'#/words/' + k}><Icon name={icon} fill /><b>{cnt(k)}</b><span>{label}</span><Icon name="caret-right" className="tile-go" /></a>
        ))}
      </div>
      <section className="sec">
        <div className="sec-head"><h2>Мои коллекции</h2></div>
        <p className="sec-sub">{deck.length} самых нужных слов от A1 до B2 — по частоте в живой речи. Включённые колоды приходят в карточки по порядку.</p>
        <div className="coll-grid">
          {LEVELS.map((l) => <DeckTile key={l} s={s} deck={deck} lvl={l} levelTitle={lvTitle(l)} />)}
          <DeckTile s={s} deck={deck} lvl="phr" levelTitle="" />
          <a className="coll-tile t5" href="#/words/mine">
            <div className="coll-ill"><Icon name="bookmark-simple" fill /></div>
            <b>Мои слова</b><span>Добавленные из текстов и вручную</span>
            <span className="coll-meta">{mine} {plural(mine, 'слово', 'слова', 'слов')}</span>
          </a>
        </div>
      </section>
      {adding ? <AddBox boxRef={boxRef} enRef={enRef} /> : null}
      {cats.map((cat) => {
        const list = cols.filter((c) => c.cat === cat.id);
        if (!list.length) return null;
        return (
          <section className="sec" key={cat.id}>
            <div className="sec-head"><h2>{cat.title}</h2><span className="see-all muted">{list.length}</span></div>
            <div className="carousel topic-row">{list.map((c) => <TopicTile key={c.id} s={s} c={c} cats={cats} />)}</div>
          </section>
        );
      })}
      <a className="list-link words-all" href="#/words/all"><Icon name="list-bullets" />
        <span><b>Все мои слова · {all.length}</b><span className="small muted">Поиск, статусы, удаление</span></span>
        <Icon name="caret-right" className="muted" /></a>
    </>
  );
}
