// Итог практики и теста урока (content/lessons/finish): то, что раньше делала страница урока
import { describe, expect, it } from 'vitest';
import { afterTest, isPassing, recordPractice, recordTest } from '../src/content/lessons';
import { defaults } from '../src/core/progress';
import type { CourseIndex, UnitMeta } from '../src/content/lessons/model';

const u = (id: string, num: number, track: UnitMeta['track'] = 'main'): UnitMeta => ({
    id,
    level: 'A1',
    num,
    track,
    title: id,
    summary: '',
    books: null,
    unlockAfter: null,
    hasWalk: false,
});
const course: CourseIndex = { levels: [], units: [u('a1-1', 1), u('g-1', 1, 'games'), u('a1-0', 0)] };

describe('итог урока', () => {
    it('порог сдачи — 80%', () => {
        expect([isPassing(0.79), isPassing(0.8), isPassing(1)]).toEqual([false, true, true]);
    });

    it('практика отмечается в шагах урока', () => {
        const s = defaults();
        recordPractice(s, 'a1-0');
        expect(s.units['a1-0'].steps.practice).toBe(true);
    });

    it('тест с первой попытки на 100%: лучший балл, «идеально», «с первого раза»', () => {
        const s = defaults();
        recordTest(s, 'a1-0', 1, false);
        expect(s.units['a1-0'].testBest).toBe(1);
        expect(s.stats.attempts['a1-0']).toBe(1);
        expect(s.stats.perfect['a1-0']).toBe(true);
        expect(s.stats.firstTryUnits['a1-0']).toBe(true);
        expect(s.stats.retry).toBeUndefined();
    });

    it('не сдал, потом пересдал: «пересдал», лучший балл — максимум', () => {
        const s = defaults();
        recordTest(s, 'a1-0', 0.5, false);
        recordTest(s, 'a1-0', 0.9, false);
        expect(s.units['a1-0'].testBest).toBe(0.9);
        expect(s.stats.attempts['a1-0']).toBe(2);
        expect(s.stats.firstTryUnits['a1-0']).toBeUndefined();
        expect(s.stats.retry).toBe(1);
        recordTest(s, 'a1-0', 0.6, true);
        expect(s.units['a1-0'].testBest).toBe(0.9);
    });

    it('после сдачи: следующий урок по порядку и первый несданный игровой', () => {
        const s = defaults();
        expect(afterTest(s, course, 'a1-0')).toEqual({ next: course.units[0], game: course.units[1] });
        expect(afterTest(s, course, 'a1-1').next).toBeUndefined();
    });
});
