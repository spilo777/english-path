// Библиотека: #/library — витрина; #/library/all[/<тема>] — все статьи с фильтрами;
// #/library/new — форма «Свой текст»; #/library/find — поиск; #/library/books — все книги
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { PageProps } from '../app/App';
import { go } from '../app/router';
import { BookPoster, CAT_ICON, LibCard, TextPoster, wordsIn } from '../components/Posters';
import { BackLink, Icon, LoadError, Loading, Page, plural, RoundBtn, Section, toast, TopBar } from '../components/ui';
import { currentUnit, isUnlocked, mainUnits, passed } from '../lib/course';
import { useBookIndex, useCourse, useLessons, useLibrary, useTenses } from '../lib/data';
import { tomb, update, useProgress } from '../lib/store';
import { LEVEL_ORDER, type BookMeta, type CourseIndex, type Level, type Progress, type LessonText, type TextItem, type UserText } from '../lib/types';
import { lsGet, lsSet } from './reader-core';
import { CHANNELS } from '../lib/listen';
import './Library.css';

const myLevel = (s: Progress, course?: CourseIndex): Level => (course && currentUnit(s, course)?.level) || 'A1';
const chapN = (b: BookMeta) => b.chapters || 0;
const bookDone = (s: Progress, b: BookMeta) => { let n = 0; for (let i = 0; i < chapN(b); i++) if (s.textsRead[b.id + '#' + i]) n++; return n; };

/** Удалить свой текст (с подтверждением) */
function delUserText(id: string) {
  if (!confirm('Удалить текст?')) return;
  update((s) => { s.userTexts = s.userTexts.filter((t) => t.id !== id); tomb(s, 'text:' + id); });
}

/** Строка текста: свой текст (с крестиком) или текст из урока */
function TextRow({ t, user }: { t: TextItem | UserText | LessonText; user?: boolean }) {
  const s = useProgress();
  return (
    <a className="unit-row" href={'#/read/' + t.id}>
      <div className="unit-num">{s.textsRead[t.id] ? <Icon name="check" /> : <Icon name="book-open-text" />}</div>
      <div className="body"><div className="title">{t.title}</div><div className="muted small">{'text' in t ? wordsIn(t) : t.words} слов{t.level ? ' · ' + t.level : ''}</div></div>
      {user ? (
        <button type="button" className="icon-btn" title="Удалить" aria-label="Удалить" onClick={(e) => { e.preventDefault(); e.stopPropagation(); delUserText(t.id); }}><Icon name="x" /></button>
      ) : null}
    </a>
  );
}

export default function Library({ params }: PageProps) {
  const a = params[1] || '';
  if (a === 'all' || a === 'new' || a === 'find') return <LibraryAll key={params.join('/')} mode={a} cat={a === 'all' ? params[2] : undefined} />;
  if (a === 'books') return <Books />;
  return <LibraryHome />;
}

// ───────── витрина ─────────
function LibraryHome() {
  const s = useProgress();
  const lib = useLibrary();
  const books = useBookIndex();
  const { data: course } = useCourse();
  const { data: tenses } = useTenses();
  if (lib.error) return <Page><LoadError error={lib.error} /></Page>;
  if (!lib.data || !books.data || !course) return <Page><Loading /></Page>;
  const LIB = lib.data, BOOKS = books.data;
  const lvl = myLevel(s, course), LV = LEVEL_ORDER[lvl];
  const lo = (t: { level: string }) => LEVEL_ORDER[t.level] || 0;
  const dist = (t: TextItem) => Math.abs(lo(t) - LV) + (lo(t) > LV + 1 ? 2 : 0);
  const rank = (x: TextItem, y: TextItem) => ((s.textsRead[x.id] ? 1 : 0) - (s.textsRead[y.id] ? 1 : 0)) || (dist(x) - dist(y)) || (lo(x) - lo(y));
  const forYou = LIB.filter((t) => t.kind !== 'dialogue' && !s.textsRead[t.id] && (t.level === lvl || lo(t) === LV + 1)).slice(0, 12);
  const byCat = (c: string) => LIB.filter((t) => t.cat === c).sort(rank).slice(0, 14);
  const reading = BOOKS.filter((b) => (s.bookPos || {})[b.id] || lsGet('ep.bookAt.' + b.id, '')).filter((b) => bookDone(s, b) < chapN(b));
  const adapted = BOOKS.filter((b) => b.kind !== 'original').sort((x, y) => Math.abs(lo(x) - LV) - Math.abs(lo(y) - LV));
  const originals = BOOKS.filter((b) => b.kind === 'original');
  const main = mainUnits(course);
  const tensesDone = (tenses || []).filter((t) => ((s.tenses || {})[t.id]?.best || 0) >= 0.8).length;

  const catSec = (c: string, sub?: string) => {
    const list = byCat(c);
    if (!list.length) return null;
    return (
      <Section key={c} title={<>{CAT_ICON[c] ? <Icon name={CAT_ICON[c]} /> : null} {c}</>} href={'#/library/all/' + encodeURIComponent(c)} sub={sub}>
        {list.map((t) => <TextPoster key={t.id} t={t} />)}
      </Section>
    );
  };

  return (
    <Page className="lib-page">
      <TopBar title="Библиотека" sub={`${LIB.length} статей и диалогов · ${BOOKS.length} книг · ваш уровень ${lvl}`}
        right={<><RoundBtn href="#/library/new" icon="plus" title="Свой текст" /><RoundBtn href="#/library/find" icon="magnifying-glass" title="Поиск" /></>} />
      {reading.length ? <Section title="Продолжить чтение">{reading.map((b) => <BookPoster key={b.id} b={b} />)}</Section> : null}
      {forYou.length ? (
        <Section title="Для вас" href="#/library/all" sub={`Статьи уровня ${lvl} и на шаг выше — самое полезное для роста`}>
          {forYou.map((t) => <TextPoster key={t.id} t={t} />)}
        </Section>
      ) : null}
      <Section title={<><Icon name="headphones" /> Слушать</>} href="#/listen" sub="YouTube-каналы с понятной живой речью — от медленных диалогов до подкаста">
        {CHANNELS.map((ch) => (
          <a key={ch.id} className="ls-card" href="#/listen" style={{ '--cc': ch.color } as CSSProperties}>
            <span className="ls-card-ava">{ch.short[0]}</span>
            <b>{ch.short}</b>
            <span className="tiny muted">{ch.levels[0]}–{ch.levels[1]} · {ch.accent}</span>
          </a>
        ))}
      </Section>
      {adapted.length ? (
        <Section title={<><Icon name="books" /> Адаптированные книги</>} href="#/library/books" sub="Классика, пересказанная простым языком под ваш уровень">
          {adapted.map((b) => <BookPoster key={b.id} b={b} />)}
        </Section>
      ) : null}
      {catSec('Диалоги из игр', 'Таверны, лобби, рейды и боссы — живая речь, которую вы услышите в играх. По ролям, с озвучкой разными голосами')}
      {catSec('Диалоги из фильмов и сериалов', 'Сцены в духе ситкомов, детективов, фантастики и драм — живые разговоры по ролям, как в кино')}
      {['Сериалы', 'Игры', 'Мультфильмы', 'Аниме', 'Кино', 'Про экран'].map((c) => catSec(c))}
      {originals.length ? (
        <Section title={<><Icon name="crown-simple" /> Классика в оригинале</>} href="#/library/books" sub="Полные тексты без упрощений — цель уровня B2">
          {originals.map((b) => <BookPoster key={b.id} b={b} />)}
        </Section>
      ) : null}
      <Section title="Грамматика по уровням" href="#/course" carousel={false}>
        <div className="coll-grid">
          {course.levels.map((l, i) => {
            const us = main.filter((u) => u.level === l.id);
            const dn = us.filter((u) => passed(s, u.id)).length;
            return (
              <a key={l.id} className={'coll-tile t' + i} href="#/course">
                <div className="coll-ill"><Icon name={['plant', 'tree-evergreen', 'mountains', 'rocket-launch'][i] || 'star'} fill /></div>
                <b>{l.id}</b><span>{l.title.split('— ')[1] || l.title}</span>
                <span className="coll-meta">{us.length ? `${dn} из ${us.length} юнитов` : 'скоро'}</span>
              </a>
            );
          })}
          <a className="coll-tile t5" href="#/tenses">
            <div className="coll-ill"><Icon name="clock-countdown" fill /></div>
            <b>Времена</b><span>Все {(tenses || []).length} времён: карта и тренажёр</span>
            <span className="coll-meta">{tensesDone} освоено</span>
          </a>
        </div>
      </Section>
      {s.userTexts.length ? (
        <section className="sec">
          <div className="sec-head"><h2>Мои тексты</h2><a className="see-all" href="#/library/new">Добавить</a></div>
          <div className="stack">{s.userTexts.map((t) => <TextRow key={t.id} t={t} user />)}</div>
        </section>
      ) : null}
      <a className="list-link" href="#/library/all">
        <Icon name="list-magnifying-glass" />
        <span><b>Все статьи списком</b><span className="small muted">Фильтры по уровню и теме, поиск, тексты из уроков</span></span>
        <Icon name="caret-right" className="muted" />
      </a>
    </Page>
  );
}

// ───────── все статьи ─────────
const ssGet = (k: string) => { try { return sessionStorage.getItem(k) || ''; } catch { return ''; } };
const ssSet = (k: string, v: string) => { try { sessionStorage.setItem(k, v); } catch { /* приватный режим */ } };

function LibraryAll({ mode, cat: catParam }: { mode: string; cat?: string }) {
  const s = useProgress();
  const lib = useLibrary();
  const { data: course } = useCourse();
  const lvlDefault = myLevel(s, course);
  // #/library/all/<тема> — запомнить тему, уровень «все»
  const [cat, setCat] = useState(() => {
    if (catParam) { lsSet('ep.libCat', catParam); lsSet('ep.libLevel', 'all'); }
    // поиск ищет по всей библиотеке, а не внутри последней открытой темы
    if (mode === 'find') { lsSet('ep.libCat', 'all'); lsSet('ep.libLevel', 'all'); }
    return lsGet('ep.libCat', 'all');
  });
  const [lvlSaved, setLvl] = useState(() => lsGet('ep.libLevel', ''));
  const lvl = lvlSaved || lvlDefault;
  const [hideRead, setHide] = useState(() => lsGet('ep.libHideRead', '') === '1');
  const [q, setQ] = useState(() => ssGet('ep.libQ'));
  const [formOpen, setFormOpen] = useState(mode === 'new');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const titleRef = useRef<HTMLInputElement>(null);
  const qRef = useRef<HTMLInputElement>(null);

  const ready = !!lib.data;
  useEffect(() => { if (ready && mode === 'find') qRef.current?.focus(); }, [ready, mode]);
  useEffect(() => { if (formOpen && ready) titleRef.current?.focus(); }, [formOpen, ready]);

  const unlocked = course ? course.units.filter((u) => isUnlocked(s, u, course)) : [];
  // тексты уроков — из индекса lessons.json (без тел текстов)
  const lessons = useLessons().data;
  const units = unlocked.length && lessons ? lessons : [];

  if (lib.error) return <Page><LoadError error={lib.error} /></Page>;
  if (!lib.data) return <Page><Loading /></Page>;
  const LIB = lib.data;
  const ql = q.trim().toLowerCase();
  const cats = ['all', ...Object.keys(CAT_ICON).filter((c) => LIB.some((t) => t.cat === c))];
  const list = LIB.filter((t) => (lvl === 'all' || t.level === lvl) && (cat === 'all' || t.cat === cat) && (!hideRead || !s.textsRead[t.id])
    && (!ql || (t.title + ' ' + (t.about || '') + ' ' + (t.ru || '')).toLowerCase().includes(ql)));
  const readN = LIB.filter((t) => s.textsRead[t.id]).length;
  const groups = unlocked.map((m) => ({ m, texts: units.find((u) => u.id === m.id)?.texts || [] })).filter((g) => g.texts.length);
  const groupsN = groups.reduce((n, g) => n + g.texts.length, 0);

  const pickLvl = (l: string) => { lsSet('ep.libLevel', l); setLvl(l); };
  const pickCat = (c: string) => { lsSet('ep.libCat', c); setCat(c); };
  const add = () => {
    const tx = text.trim();
    if (!tx) { toast('Вставьте текст'); return; }
    const t: UserText = { id: 'u-' + Date.now(), title: title.trim() || 'Мой текст', text: tx, level: '' };
    update((st) => { st.userTexts.unshift(t); });
    go('#/read/' + t.id);
  };

  return (
    <Page className="lib-page lib-all">
      <BackLink href="#/library" />
      <div className="lib-all-head">
        <div className="lib-all-title">
          <h1 className="page-title">Все статьи</h1>
          <p className="muted">{LIB.length} статей и диалогов · прочитано {readN}</p>
        </div>
        <button type="button" className="btn small" onClick={() => setFormOpen((v) => !v)}><Icon name="plus" /> Свой текст</button>
      </div>
      {formOpen ? (
        <div className="card ut-box">
          <h3>Свой текст</h3>
          <p className="muted small">Статья, диалог из игры, субтитры, описание квеста — вставьте и читайте с переводом по тапу.</p>
          <div className="stack">
            <input ref={titleRef} className="input ut-title" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="input" placeholder="Вставьте английский текст" value={text} onChange={(e) => setText(e.target.value)} />
            <div><button type="button" className="btn primary" onClick={add}>Добавить</button></div>
          </div>
        </div>
      ) : null}
      <div className="lib-filters">
        <div className="seg lib-lvl">
          {['all', 'A1', 'A2', 'B1', 'B2'].map((l) => (
            <button type="button" key={l} className={lvl === l ? 'on' : ''} onClick={() => pickLvl(l)}>{l === 'all' ? 'Все' : l}{l === lvlDefault ? ' •' : ''}</button>
          ))}
        </div>
        <div className="chips-row">
          {cats.map((c) => (
            <button type="button" key={c} className={'fchip' + (cat === c ? ' on' : '')} onClick={() => pickCat(c)}>
              {c === 'all' ? 'Все темы' : <><Icon name={CAT_ICON[c]} /> {c}</>}
            </button>
          ))}
        </div>
        <div className="row lib-search-row">
          <input ref={qRef} className="input lib-search" type="search" placeholder="Поиск: Shrek, таверна, Witcher…" value={q}
            onChange={(e) => { setQ(e.target.value); ssSet('ep.libQ', e.target.value); }} />
          <label className="row small lib-hide"><input type="checkbox" checked={hideRead} onChange={(e) => { lsSet('ep.libHideRead', e.target.checked ? '1' : ''); setHide(e.target.checked); }} /> Скрыть прочитанные</label>
        </div>
      </div>
      <p className="tiny muted lib-count">{lvl === 'all' ? 'Все уровни' : 'Уровень ' + lvl} · {list.length} {plural(list.length, 'статья', 'статьи', 'статей')}. Точка • — ваш текущий уровень. Читать чуть выше своего уровня полезно, но не больше чем на шаг.</p>
      <div className="lib-grid">
        {list.length ? list.map((t) => <LibCard key={t.id} t={t} />)
          : <div className="empty lib-empty"><div className="big"><Icon name="magnifying-glass" /></div>Ничего не нашлось — смените фильтр.</div>}
      </div>
      {s.userTexts.length ? (
        <section className="sec">
          <h2 className="sec-h">Мои тексты</h2>
          <div className="stack">{s.userTexts.map((t) => <TextRow key={t.id} t={t} user />)}</div>
        </section>
      ) : null}
      <details className="lib-units">
        <summary><h2>Тексты из уроков</h2> <span className="muted small">{groupsN}</span></summary>
        {groups.map(({ m, texts }) => (
          <div key={m.id} className="lib-ugroup">
            <div className="eyebrow">{m.track === 'games' ? <><Icon name="game-controller" /> </> : 'Юнит ' + m.num + ' · '}{m.title}</div>
            <div className="stack">{texts.map((t) => <TextRow key={t.id} t={{ ...t, level: t.level || m.level }} />)}</div>
          </div>
        ))}
      </details>
    </Page>
  );
}

// ───────── все книги ─────────
function Books() {
  const books = useBookIndex();
  if (books.error) return <Page><LoadError error={books.error} /></Page>;
  if (!books.data) return <Page><Loading /></Page>;
  const ad = books.data.filter((b) => b.kind !== 'original'), or = books.data.filter((b) => b.kind === 'original');
  return (
    <Page className="lib-page">
      <BackLink href="#/library" />
      <h1 className="page-title">Книги</h1>
      <p className="page-sub">Адаптированные версии написаны простым языком под уровень. Оригиналы — полные тексты классики из Project Gutenberg (общественное достояние), с переводом по тапу.</p>
      <h2 className="sec-h">Адаптированные</h2>
      <div className="poster-grid">{ad.map((b) => <BookPoster key={b.id} b={b} />)}</div>
      <h2 className="sec-h">Классика в оригинале</h2>
      <div className="poster-grid">{or.map((b) => <BookPoster key={b.id} b={b} />)}</div>
    </Page>
  );
}
