// Карточки и колоды: добавление, очередь на сегодня, новые слова из колод
import { today } from '@utils/date';
import { wordId } from '@utils/text';
import type { Card, Progress } from '../progress/types';

/** Слово колоды — всё, что нужно, чтобы сделать из него карточку (DeckWord из контента подходит) */
export interface SrsWord {
    id: string;
    en: string;
    ru: string;
    ex: string;
    exRu: string;
    lvl: string;
}

/** id карточки = id слова */
export const cardId = wordId;

/** Добавить карточку. false — если такая уже есть */
export function addCard(s: Progress, en: string, ru: string, ex = '', exRu = '', src = ''): boolean {
    const id = cardId(en);
    if (!id || s.cards[id]) return false;
    const now = Date.now();
    s.cards[id] = {
        id,
        en: en.trim(),
        ru: ru.trim(),
        ex,
        exRu,
        src,
        state: 'new',
        due: 0,
        ivl: 0,
        ease: 2.5,
        reps: 0,
        lapses: 0,
        step: 0,
        added: now,
        mod: now,
    };
    return true;
}

/** Сколько новых слов ещё можно взять сегодня */
export function newLeftToday(s: Progress): number {
    const cnt = s.newToday.date === today() ? s.newToday.count : 0;
    return Math.max(0, s.settings.newPerDay - cnt);
}

export function dueCards(s: Progress, now = Date.now()): Card[] {
    return Object.values(s.cards)
        .filter((c) => c.state !== 'new' && c.due <= now)
        .sort((a, b) => a.due - b.due);
}

export function newCards(s: Progress): Card[] {
    return Object.values(s.cards)
        .filter((c) => c.state === 'new')
        .sort((a, b) => a.added - b.added);
}

/** Слова колод, которых ещё нет в карточках и не отмечены «знаю» */
export function deckPending<W extends SrsWord>(s: Progress, deck: W[], limit = Infinity): W[] {
    const out: W[] = [];
    const decks = s.settings.decks || {};
    for (const w of deck) {
        if (out.length >= limit) break;
        if (!decks[w.lvl] || s.cards[w.id] || s.known[w.id]) continue;
        out.push(w);
    }
    return out;
}

export function newAvailable(s: Progress, deck: SrsWord[]): number {
    const lim = newLeftToday(s);
    const own = newCards(s).length;
    return Math.min(lim, own + (own >= lim ? 0 : deckPending(s, deck, lim - own).length));
}

/** Взять n новых: сначала слова из уроков, потом из колод (добавляя их в карточки) */
export function takeNew(s: Progress, deck: SrsWord[], n: number): string[] {
    const ids = newCards(s)
        .slice(0, n)
        .map((c) => c.id);
    if (ids.length < n)
        deckPending(s, deck, n - ids.length).forEach((w) => {
            addCard(s, w.en, w.ru, w.ex, w.exRu, 'deck:' + w.lvl);
            ids.push(w.id);
        });
    return ids;
}

/** Отметить, что сегодня взято новое слово */
export function countNew(s: Progress) {
    if (s.newToday.date !== today()) s.newToday = { date: today(), count: 0 };
    s.newToday.count++;
}
