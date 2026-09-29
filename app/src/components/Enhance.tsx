// Оживление HTML урока: нажимаемые английские слова (перевод), пунктир под новыми словами,
// .say — озвучка, .mini — мини-проверка, «Перевод» для вопросов.
// ВАЖНО: слова оборачиваются прямо в DOM, поэтому текст, который должен стать нажимаемым,
// выводите через <Html html=…/> (а не JSX-текстом). React 19 перезаписывает innerHTML при каждом
// новом объекте {__html}, поэтому Html держит объект стабильным — иначе обёртка и мини-проверки слетают.
import { createElement, useEffect, useMemo, useState, type DependencyList, type RefObject } from 'react';
import { mainUnits, passed } from '../lib/course';
import { loadJSON, paths, useCourse } from '../lib/data';
import { candidates, ensureDict, isDictReady, lookup } from '../lib/lookup';
import { ding } from '../lib/sfx';
import { speak } from '../lib/speech';
import { recordAnswer, update, useProgress } from '../lib/store';
import { autoTranslate } from '../lib/translate';
import { LEVEL_ORDER, type CourseIndex, type Level, type Progress, type Unit } from '../lib/types';
import { Icon } from './ui';
import { openWord } from './Popover';
import './Enhance.css';

// ───────── общие хелперы ─────────
/** HTML контента в стабильном {__html}: при перерисовке с тем же текстом DOM не пересоздаётся */
export function Html({ html, className, tag = 'div' }: { html: string; className?: string; tag?: 'div' | 'span' | 'table' | 'p' }) {
  const inner = useMemo(() => ({ __html: tag === 'table' ? '<tbody>' + html + '</tbody>' : html }), [html, tag]);
  return createElement(tag, { className, dangerouslySetInnerHTML: inner });
}

export const esc = (x: string) => String(x).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
/** Вопрос с пропуском: ___ → подчёркнутое место (HTML) */
export const fmtQ = (q: string) => esc(q).replace(/_{2,}/g, '<span class="blank">&nbsp;</span>');

/** Перевод вопроса: предложение с правильным словом на месте пропуска (смысл, не ответ). '' — переводить нечего */
export function trSentence(q: string | undefined, fill?: string): string {
  const b = String(q || '').replace(/\s*\([^)]*\)\s*/g, ' ');
  if (/[А-Яа-яЁё]/.test(b) || !/[A-Za-z]{2}/.test(b)) return '';
  return b.replace(/_{2,}/g, fill || '').replace(/\s+/g, ' ').replace(/\s+([?.!,])/g, '$1').trim();
}

/** Кнопка «Перевод» с машинным переводом под ней */
export function TrBox({ text }: { text: string }) {
  const [out, setOut] = useState<string | null>(null);
  useEffect(() => { setOut(null); }, [text]);
  const click = () => {
    if (out != null) { setOut(null); return; }
    setOut('перевожу…');
    autoTranslate(text).then((t) => setOut(t ? '«' + t + '»' : 'не получилось перевести'));
  };
  return (
    <div className="tr-box">
      <button type="button" className="tr-btn" onClick={click}><Icon name="translate" /> Перевод</button>
      {out != null ? <span className="tr-out">{out}</span> : null}
    </div>
  );
}

// ───────── какие слова ученик уже видел ─────────
const BASIC_WORDS = 'a an the i you he she it we they me him her us them my your his its our their is am are was were be been do does did not no yes and or but to of in on at for with from by this that these those there here what who where when why how can will would have has had get got go ok hi hello'.split(' ');

/** Карточки, «знаю», слова предыдущих уроков (и пройденных игровых), служебные слова */
export function knownWordSet(s: Progress, course: CourseIndex | undefined, units: Unit[], unitId?: string): Set<string> {
  const set = new Set(BASIC_WORDS);
  Object.keys(s.cards).forEach((k) => set.add(k));
  Object.keys(s.known).forEach((k) => set.add(k));
  if (!course) return set;
  const main = mainUnits(course);
  const ci = unitId ? main.findIndex((u) => u.id === unitId) : -1;
  units.forEach((u) => {
    const i = main.findIndex((m) => m.id === u.id);
    const take = unitId
      ? u.id !== unitId && ((i >= 0 && ci >= 0 && i < ci) || (u.track === 'games' && passed(s, u.id)))
      : passed(s, u.id);
    if (take) (u.words || []).forEach((w) => w[0].toLowerCase().split(/\s*[—–-]\s*|\s*\/\s*/).forEach((x) => set.add(x.trim())));
  });
  return set;
}

export function isNewWord(w: string, set: Set<string>): boolean {
  let lw = w.toLowerCase().replace(/’/g, "'");
  if (/^[a-z]{1,3}-/.test(lw)) return false; // разбивка по слогам в объяснении
  if (lw.includes("'")) lw = lw.replace(/n't$/, '').replace(/'.*$/, '') || lw; // I'm, isn't → I, is
  if (lw === 'ca' || lw === 'wo' || lw === 'ai') return false; // can't, won't, ain't
  if (lw.length < 3 || set.has(lw)) return false;
  if (candidates(lw).some((c) => set.has(c))) return false;
  if (lookup(lw).some((r) => set.has(r.word))) return false;
  return true;
}

/** Набор знакомых слов для урока unitId (или по пройденным урокам, если не задан) */
export function useKnownWords(unitId?: string): Set<string> {
  const s = useProgress();
  const { data: course } = useCourse();
  const [units, setUnits] = useState<Unit[]>([]);
  // состояние мутируется на месте — зависимости считаем по «подписи»
  const passedSig = Object.keys(s.units).filter((id) => passed(s, id)).join(',');
  const sig = Object.keys(s.cards).length + '|' + Object.keys(s.known).length + '|' + passedSig;
  // уровни, слова которых нужны: до уровня урока включительно / уровни пройденных уроков
  const levels = useMemo(() => {
    if (!course) return '';
    const cur = unitId ? course.units.find((u) => u.id === unitId) : undefined;
    const lv = new Set<Level>();
    course.units.forEach((u) => {
      if (cur ? (LEVEL_ORDER[u.level] || 0) <= (LEVEL_ORDER[cur.level] || 0) : passed(s, u.id)) lv.add(u.level);
    });
    return [...lv].sort().join(',');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course, unitId, passedSig]);
  useEffect(() => {
    if (!levels) { setUnits([]); return; }
    let alive = true;
    Promise.all(levels.split(',').map((l) => loadJSON<Unit[]>(paths.units(l as Level)).catch((): Unit[] => [])))
      .then((all) => { if (alive) setUnits(all.flat()); });
    return () => { alive = false; };
  }, [levels]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => knownWordSet(s, course, units, unitId), [sig, course, units, unitId]);
}

// ───────── нажимаемые слова ─────────
const WF_TARGETS = '.lesson .card, .wk-step, .mini-q, .ex-q, .tq-q, .feedback .right, .tense-formula, .tense-hero';
const WF_SKIP = 'button, input, textarea, select, a, .lw, .blank, .tq-gap, .mini-o, .options, .chips, .ipa, svg, .wk-lit, .wk-ru';
const WORD_RE = /([A-Za-z][A-Za-z'’]*(?:-[A-Za-z]+)*)/;

function wordify(root: Element, known: Set<string>) {
  const boxes = [...root.querySelectorAll(WF_TARGETS)];
  if (root.matches(WF_TARGETS)) boxes.push(root);
  boxes.forEach((box) => {
    const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (!/[A-Za-z]/.test(n.nodeValue || '') || n.parentElement?.closest(WF_SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    nodes.forEach((n) => {
      const frag = document.createDocumentFragment();
      (n.nodeValue || '').split(WORD_RE).forEach((part, i) => {
        if (!part) return;
        if (i % 2) {
          const sp = document.createElement('span');
          sp.className = isNewWord(part, known) && !(/^[A-Z]/.test(part) && i > 1) ? 'lw nw' : 'lw';
          sp.textContent = part;
          frag.appendChild(sp);
        } else frag.appendChild(document.createTextNode(part));
      });
      n.parentNode?.replaceChild(frag, n);
    });
  });
}

/** Обновить пунктир у уже обёрнутых слов (набор знакомых изменился) */
function reclass(root: Element, known: Set<string>) {
  root.querySelectorAll('.lw').forEach((sp) => {
    const t = sp.textContent || '';
    const prev = sp.previousSibling;
    const first = !prev || !/[A-Za-z]/.test(prev.textContent || '');
    sp.classList.toggle('nw', isNewWord(t, known) && !(/^[A-Z]/.test(t) && !first));
  });
}

// ───────── мини-проверки в объяснениях (DOM внутри HTML контента) ─────────
function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string): HTMLElementTagNameMap[K] {
  const x = document.createElement(tag);
  if (cls) x.className = cls;
  if (text != null) x.textContent = text;
  return x;
}
const icon = (name: string) => el('i', 'ph ph-' + name);

function trBoxDom(text: string): HTMLElement {
  const box = el('div', 'tr-box');
  const btn = el('button', 'tr-btn'); btn.type = 'button';
  btn.append(icon('translate'), ' Перевод');
  const out = el('span', 'tr-out'); out.hidden = true;
  btn.addEventListener('click', () => {
    if (!out.hidden) { out.hidden = true; return; }
    out.hidden = false; out.textContent = 'перевожу…';
    autoTranslate(text).then((t) => { out.textContent = t ? '«' + t + '»' : 'не получилось перевести'; });
  });
  box.append(btn, out);
  return box;
}

function setupMini(box: HTMLElement) {
  if (box.dataset.ready) return;
  box.dataset.ready = '1';
  const opts = (box.dataset.o || '').split('|');
  const right = +(box.dataset.a || 0);
  const mq = box.dataset.q || '';
  const mTr = trSentence(mq, opts[right]);
  box.textContent = '';
  const h = el('div', 'mini-h');
  h.append(icon('question'), ' Проверьте себя · ', el('span', 'mini-task', /_{2,}/.test(mq) ? 'выберите слово для пропуска' : 'выберите правильный вариант'));
  const q = el('div', 'mini-q');
  mq.split(/(_{2,})/).forEach((p, i) => { if (i % 2) { const b = el('span', 'blank'); b.textContent = '\u00a0'; q.append(b); } else if (p) q.append(p); });
  const o = el('div', 'mini-o');
  const why = el('div', 'mini-why');
  const btns = opts.map((txt, i) => {
    const b = el('button', 'qz-btn', txt); b.type = 'button';
    b.addEventListener('click', () => {
      if (box.dataset.done) return;
      box.dataset.done = '1';
      const ok = i === right;
      btns.forEach((x, k) => { x.disabled = true; if (k === right) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      why.textContent = '';
      why.append(el('b', '', ok ? 'Верно!' : 'Не совсем.'), ' ' + (box.dataset.why || ''));
      why.className = 'mini-why ' + (ok ? 'ok' : 'bad');
      ding(ok ? 'ok' : 'bad');
      if (ok) setTimeout(() => speak(opts[right].replace(/_/g, '')), 350);
      update((s) => {
        recordAnswer(s, ok);
        s.stats.mini = (s.stats.mini || 0) + 1;
        if (ok) s.stats.miniRight = (s.stats.miniRight || 0) + 1;
      });
    });
    return b;
  });
  o.append(...btns);
  box.append(h, q);
  if (mTr) box.append(trBoxDom(mTr));
  box.append(o, why);
}

function setupAlphabet(box: HTMLElement) {
  if (box.dataset.ready) return;
  box.dataset.ready = '1';
  box.textContent = '';
  (box.dataset.alphabet || '').split('').forEach((ch) => {
    const b = el('button', '', ch); b.type = 'button';
    b.addEventListener('click', () => speak(ch.toLowerCase() === 'a' ? 'A.' : ch, { rate: 0.8 }));
    box.append(b);
  });
}

// предложение вокруг нажатого слова (пропуски → ___), только английская часть
function sentenceAround(w: Element): string {
  const ctx = w.closest('.say, .mini-q, .ex-q, .tq-q, li, td, p, .g-bad, .g-good, .g-formula, div');
  let sentence = w.textContent || '';
  if (ctx) {
    const c = ctx.cloneNode(true) as Element;
    c.querySelectorAll('.blank, .tq-gap, .gap').forEach((x) => { x.textContent = ' ___ '; });
    sentence = (c.textContent || '').replace(/\s+/g, ' ').trim();
  }
  return (sentence.match(/[A-Za-z][^А-Яа-яЁё—]*[A-Za-z.!?…_]/) || [sentence])[0];
}

/**
 * Хук для контейнера с HTML урока. deps — когда содержимое сменилось (новые узлы ловятся и сами).
 * opts.unitId — текущий урок: слова предыдущих уроков считаются знакомыми (без пунктира).
 */
export function useLessonEnhance(ref: RefObject<HTMLElement | null>, deps: DependencyList = [], opts?: { unitId?: string }) {
  const known = useKnownWords(opts?.unitId);
  const [dictReady, setDictReady] = useState(isDictReady());
  useEffect(() => {
    if (dictReady) return;
    let alive = true;
    ensureDict().then(() => { if (alive) setDictReady(true); }).catch(() => undefined);
    return () => { alive = false; };
  }, [dictReady]);

  // оборачивание слов, мини-проверки, нажатия (слово → перевод, .say → озвучка); следим за новыми узлами (React дорисовал шаг/вопрос)
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const run = () => {
      root.querySelectorAll<HTMLElement>('.mini[data-o]').forEach(setupMini);
      root.querySelectorAll<HTMLElement>('[data-alphabet]').forEach(setupAlphabet);
      wordify(root, known);
    };
    run();
    const click = (ev: MouseEvent) => {
      const t = ev.target as Element | null;
      if (!t || !t.closest) return;
      const w = t.closest('.lw');
      if (w && root.contains(w)) {
        ev.stopPropagation(); ev.preventDefault();
        document.querySelectorAll('.lw.sel').forEach((x) => x.classList.remove('sel'));
        w.classList.add('sel');
        openWord({ anchor: w, word: w.textContent || '', sentence: sentenceAround(w) });
        return;
      }
      const ds = t.closest<HTMLElement>('[data-speak]');
      if (ds && root.contains(ds)) { ev.stopPropagation(); speak(ds.dataset.speak || ''); return; }
      const say = t.closest('.say');
      if (say && root.contains(say)) speak((say.textContent || '').replace(/[!?.]$/, ''));
    };
    root.addEventListener('click', click, true);
    let raf = 0;
    const mo = new MutationObserver(() => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; run(); }); });
    mo.observe(root, { childList: true, subtree: true });
    return () => { mo.disconnect(); if (raf) cancelAnimationFrame(raf); root.removeEventListener('click', click, true); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, known, ...deps]);

  // набор знакомых слов или словарь обновились — пересчитать пунктир
  useEffect(() => { if (ref.current) reclass(ref.current, known); }, [ref, known, dictReady]);
}

