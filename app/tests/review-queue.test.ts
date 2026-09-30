// Очередь повторения (content/word-cards/review-queue): то, что раньше строила страница «Повторение»
import { describe, expect, it } from 'vitest';
import { buildQueue } from '../src/content/word-cards/review-queue';
import { defaults } from '../src/core/progress';
import type { Card, Progress } from '../src/core/progress/types';
import type { TopicCol, WordCard } from '../src/content/word-cards/model';

const card = (id: string, o: Partial<Card> = {}): Card => ({
    id,
    en: id,
    ru: '',
    ex: '',
    exRu: '',
    src: '',
    state: 'review',
    due: 0,
    ivl: 3,
    ease: 2.5,
    reps: 2,
    lapses: 0,
    step: 0,
    added: 1,
    mod: 1,
    ...o,
});
const word = (en: string): WordCard => ({ id: en, en, ru: 'ru', ex: '', exRu: '', lvl: 'A1', pos: 'n', rank: 1 });
const withCards = (...cs: Card[]): Progress => {
    const s = defaults();
    cs.forEach((c) => (s.cards[c.id] = c));
    return s;
};

describe('очередь повторения', () => {
    it('обычная: два повторения, одно новое; новые из колоды попадают в карточки', () => {
        const s = withCards(card('r1', { due: 1 }), card('r2', { due: 2 }), card('r3', { due: 3 }));
        const q = buildQueue(s, [word('n1'), word('n2')]);
        expect(q).toEqual(['r1', 'r2', 'n1', 'r3', 'n2']);
        expect(s.cards.n1.state).toBe('new');
        expect(s.cards.n1.src).toBe('deck:A1');
    });

    it('новых — не больше дневной нормы', () => {
        const s = defaults();
        s.settings.newPerDay = 2;
        expect(buildQueue(s, [word('a'), word('b'), word('c')])).toEqual(['a', 'b']);
    });

    it('по подборке: её повторения и до 12 новых, «знаю» пропускаются', () => {
        const s = withCards(card('cat', { due: 1 }), card('dog', { due: Date.now() + 1e9 }));
        s.known.fox = 1;
        const row = (en: string): [string, string, string, string] => [en, 'ru', 'A ' + en + '.', 'пример'];
        const words = ['cat', 'dog', 'fox', ...Array.from({ length: 15 }, (_, i) => 'w' + i)].map(row);
        const tc: TopicCol = { id: 'animals', cat: 'c', title: 'Звери', icon: 'paw-print', level: 'A1', words };
        const q = buildQueue(s, [], tc);
        expect(q.slice(0, 2)).toEqual(['cat', 'w0']);
        expect(q.filter((id) => id.startsWith('w')).length).toBe(12);
        expect(q).not.toContain('fox');
        expect(q).not.toContain('dog');
        expect(s.cards.w0.src).toBe('topic:animals');
        expect(s.cards.w0.ex).toBe('A **w0**.');
    });

    it('вне очереди: сначала «должники», потом ближайшие, через одну с новыми', () => {
        const later = Date.now() + 1e9;
        const s = withCards(card('due', { due: 1 }), card('soon', { due: later }), card('later', { due: later + 1 }));
        const q = buildQueue(s, [word('n1'), word('n2')], undefined, true);
        expect(q).toEqual(['due', 'n1', 'soon', 'n2', 'later']);
    });
});
