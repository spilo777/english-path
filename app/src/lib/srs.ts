// Интервальные повторения (вариант SM-2) и работа с карточками
import { DAY, today } from './store';
import type { Card, DeckWord, Progress } from './types';

export const cardId = (en: string) => en.toLowerCase().trim();

/** Добавить карточку. false — если такая уже есть */
export function addCard(s: Progress, en: string, ru: string, ex = '', exRu = '', src = ''): boolean {
  const id = cardId(en);
  if (!id || s.cards[id]) return false;
  const now = Date.now();
  s.cards[id] = { id, en: en.trim(), ru: ru.trim(), ex, exRu, src, state: 'new', due: 0, ivl: 0, ease: 2.5, reps: 0, lapses: 0, step: 0, added: now, mod: now };
  return true;
}

/** Сколько новых слов ещё можно взять сегодня */
export function newLeftToday(s: Progress): number {
  const cnt = s.newToday.date === today() ? s.newToday.count : 0;
  return Math.max(0, s.settings.newPerDay - cnt);
}

export function dueCards(s: Progress, now = Date.now()): Card[] {
  return Object.values(s.cards).filter((c) => c.state !== 'new' && c.due <= now).sort((a, b) => a.due - b.due);
}

export function newCards(s: Progress): Card[] {
  return Object.values(s.cards).filter((c) => c.state === 'new').sort((a, b) => a.added - b.added);
}

/** Слова колод, которых ещё нет в карточках и не отмечены «знаю» */
export function deckPending(s: Progress, deck: DeckWord[], limit = Infinity): DeckWord[] {
  const out: DeckWord[] = [];
  const decks = s.settings.decks || {};
  for (const w of deck) {
    if (out.length >= limit) break;
    if (!decks[w.lvl] || s.cards[w.id] || s.known[w.id]) continue;
    out.push(w);
  }
  return out;
}

export function newAvailable(s: Progress, deck: DeckWord[]): number {
  const lim = newLeftToday(s);
  const own = newCards(s).length;
  return Math.min(lim, own + (own >= lim ? 0 : deckPending(s, deck, lim - own).length));
}

/** Взять n новых: сначала слова из уроков, потом из колод (добавляя их в карточки) */
export function takeNew(s: Progress, deck: DeckWord[], n: number): string[] {
  const ids = newCards(s).slice(0, n).map((c) => c.id);
  if (ids.length < n) deckPending(s, deck, n - ids.length).forEach((w) => { addCard(s, w.en, w.ru, w.ex, w.exRu, 'deck:' + w.lvl); ids.push(w.id); });
  return ids;
}

/** Отметить, что сегодня взято новое слово */
export function countNew(s: Progress) {
  if (s.newToday.date !== today()) s.newToday = { date: today(), count: 0 };
  s.newToday.count++;
}

export function fmtIvl(ms: number): string {
  const m = Math.round(ms / 60000);
  if (m < 60) return m + ' мин';
  const h = Math.round(m / 60); if (h < 24) return h + ' ч';
  const d = Math.round(ms / DAY); if (d < 31) return d + ' дн';
  const mo = Math.round(d / 30); if (mo < 12) return mo + ' мес';
  return (d / 365).toFixed(1) + ' г';
}

/** grade: 0 снова, 1 трудно, 2 хорошо, 3 легко. Возвращает новую версию карточки */
export function schedule(c: Card, grade: 0 | 1 | 2 | 3, now = Date.now()): Card {
  const n: Card = { ...c };
  if (c.state === 'new' || c.state === 'learn') {
    if (grade === 0) { n.state = 'learn'; n.step = 0; n.due = now + 60_000; }
    else if (grade === 1) { n.state = 'learn'; n.due = now + 5 * 60_000; }
    else if (grade === 2) {
      if ((c.step || 0) === 0) { n.state = 'learn'; n.step = 1; n.due = now + 10 * 60_000; }
      else { n.state = 'review'; n.ivl = 1; n.due = now + DAY; n.reps = 1; }
    } else { n.state = 'review'; n.ivl = 4; n.due = now + 4 * DAY; n.reps = 1; }
  } else {
    const ivl = Math.max(1, c.ivl || 1);
    if (grade === 0) { n.lapses = (c.lapses || 0) + 1; n.ease = Math.max(1.3, c.ease - 0.2); n.state = 'learn'; n.step = 1; n.ivl = 1; n.due = now + 10 * 60_000; }
    else if (grade === 1) { n.ease = Math.max(1.3, c.ease - 0.15); n.ivl = Math.max(ivl + 1, Math.round(ivl * 1.2)); }
    else if (grade === 2) { n.ivl = Math.max(ivl + 1, Math.round(ivl * c.ease)); }
    else { n.ease = c.ease + 0.15; n.ivl = Math.max(ivl + 2, Math.round(ivl * c.ease * 1.3)); }
    if (grade > 0) { n.reps = (c.reps || 0) + 1; n.due = now + n.ivl * DAY; }
  }
  n.mod = now;
  return n;
}

/** Статус слова для плиток «Новые / Изучаю / Знакомые / Выученные» */
export type WordKind = 'new' | 'learn' | 'fam' | 'done';
export const cardKind = (c: Card): WordKind => (c.state === 'new' ? 'new' : c.state === 'learn' || c.ivl < 7 ? 'learn' : c.ivl < 21 ? 'fam' : 'done');
export const isLearned = (s: Progress, id: string) => !!s.known[id] || (!!s.cards[id] && s.cards[id].state === 'review' && s.cards[id].ivl >= 21);
