// Очередь повторения: два повторения, одно новое. Меняет прогресс (берёт новые слова в карточки) —
// вызывать внутри update()
import { wordId } from '@utils/text';
import type { Progress } from '../../core/progress/types';
import { addCard, dueCards, newLeftToday, takeNew, type SrsWord } from '../../core/srs/deck';
import { exMark } from './mark';
import type { TopicCol } from './model';

const EXTRA_REV = 10,
    EXTRA_NEW = 10;

/** Вне очереди: ближайшие по расписанию карточки (сначала «должники») и новые слова сверх нормы — через одну */
function extraSession(s: Progress, deck: SrsWord[]): string[] {
    const now = Date.now();
    const soon = Object.values(s.cards)
        .filter((c) => c.state !== 'new')
        .sort((a, b) => a.due - b.due)
        .filter((c) => c.due > now)
        .slice(0, EXTRA_REV)
        .map((c) => c.id);
    const due = dueCards(s).map((c) => c.id);
    const rev = [...due.slice(0, EXTRA_REV), ...soon].slice(0, EXTRA_REV);
    const fresh = takeNew(s, deck, EXTRA_NEW);
    const q: string[] = [];
    while (rev.length || fresh.length) {
        if (rev.length) q.push(rev.shift() as string);
        if (fresh.length) q.push(fresh.shift() as string);
    }
    return q;
}

/** Сессия по одной подборке: её повторения + до 12 новых слов из неё */
function topicSession(s: Progress, tc: TopicCol): { due: string[]; fresh: string[] } {
    const now = Date.now();
    const due = tc.words
        .map((w) => wordId(w[0]))
        .filter((id) => s.cards[id] && s.cards[id].state !== 'new' && s.cards[id].due <= now);
    const fresh: string[] = [];
    tc.words.forEach((w) => {
        const id = wordId(w[0]);
        if (fresh.length >= 12 || s.known[id]) return;
        if (!s.cards[id]) addCard(s, w[0], w[1], exMark(w[2], w[0]), w[3], 'topic:' + tc.id);
        if (s.cards[id] && s.cards[id].state === 'new') fresh.push(id);
    });
    return { due, fresh };
}

/** Очередь: два повторения, одно новое — и так по кругу.
 *  tc — сессия по подборке; extra — вне очереди (см. extraSession, там свой порядок) */
export function buildQueue(s: Progress, deck: SrsWord[], tc?: TopicCol, extra = false): string[] {
    if (extra) return extraSession(s, deck);
    const { due, fresh } = tc
        ? topicSession(s, tc)
        : { due: dueCards(s).map((c) => c.id), fresh: takeNew(s, deck, newLeftToday(s)) };
    const q: string[] = [];
    while (due.length || fresh.length) {
        if (due.length) q.push(due.shift() as string);
        if (due.length) q.push(due.shift() as string);
        if (fresh.length) q.push(fresh.shift() as string);
    }
    return q;
}
