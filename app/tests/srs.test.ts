import { describe, expect, it } from 'vitest';
import { defaults } from '@core/progress';
import { addCard, cardKind, fuzzIvl, schedule, studyDayStart } from '@core/srs';
import { DAY } from '@utils/date';

describe('интервальные повторения', () => {
    it('новая карточка → «хорошо» дважды → повторение завтра', () => {
        const s = defaults();
        expect(addCard(s, 'Apple', 'яблоко')).toBe(true);
        expect(addCard(s, 'apple', 'яблоко')).toBe(false);
        const now = 1_000_000;
        const c1 = schedule(s.cards.apple, 2, now);
        expect(c1.state).toBe('learn');
        const c2 = schedule(c1, 2, now);
        expect(c2.state).toBe('review');
        // завтра, с начала учебного дня (4 утра)
        expect(c2.due).toBe(studyDayStart(now) + DAY);
    });
    it('«снова» на выученной карточке сбрасывает интервал', () => {
        const s = defaults();
        addCard(s, 'cat', 'кот');
        const c = { ...s.cards.cat, state: 'review' as const, ivl: 30, ease: 2.5 };
        expect(cardKind(c)).toBe('done');
        const n = schedule(c, 0, 0);
        expect(n.state).toBe('learn');
        expect(n.lapses).toBe(1);
        expect(n.ease).toBeCloseTo(2.3);
    });
});

describe('расписание как в Anki', () => {
    const at = (y: number, m: number, d: number, h: number, min = 0) => new Date(y, m - 1, d, h, min).getTime();
    it('учебный день начинается в 4 утра', () => {
        expect(studyDayStart(at(2026, 9, 30, 21))).toBe(at(2026, 9, 30, 4));
        expect(studyDayStart(at(2026, 10, 1, 2))).toBe(at(2026, 9, 30, 4));
    });
    it('выученное вечером слово ждёт уже с 4 утра следующего дня', () => {
        const s = defaults();
        addCard(s, 'dog', 'собака');
        const now = at(2026, 9, 30, 21);
        const c = schedule(schedule(s.cards.dog, 2, now), 2, now);
        expect(c.due).toBe(at(2026, 10, 1, 4));
    });
    it('опоздание удлиняет следующий интервал', () => {
        const s = defaults();
        addCard(s, 'tree', 'дерево');
        const due = at(2026, 9, 20, 4);
        const c = { ...s.cards.tree, state: 'review' as const, ivl: 10, ease: 2.5, due };
        const onTime = schedule(c, 2, at(2026, 9, 20, 12));
        const late = schedule(c, 2, at(2026, 9, 30, 12));
        expect(onTime.ivl).toBe(25);
        expect(late.ivl).toBe(38);
    });
    it('разброс интервала — в пределах 5–15%', () => {
        expect(fuzzIvl(2, 0)).toBe(2);
        expect(fuzzIvl(100, 0)).toBe(95);
        expect(fuzzIvl(100, 1)).toBe(105);
    });
    it('после 8 забываний слово помечается трудным', () => {
        const s = defaults();
        addCard(s, 'though', 'хотя');
        const c = schedule({ ...s.cards.though, state: 'review', ivl: 3, lapses: 7 }, 0, at(2026, 9, 30, 12));
        expect(c.lapses).toBe(8);
        expect(c.leech).toBe(true);
    });
});
