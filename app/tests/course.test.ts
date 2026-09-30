import { describe, expect, it } from 'vitest';
import { currentUnit, isUnlocked, mainUnits, nextStep, passed, unitProgress } from '../src/lib/course';
import { defaults } from '../src/lib/store';
import type { CourseIndex, Progress, UnitMeta } from '../src/lib/types';

const u = (
    id: string,
    level: UnitMeta['level'],
    num: number,
    track: UnitMeta['track'] = 'main',
    unlockAfter: string | null = null,
): UnitMeta => ({ id, level, num, track, title: id, summary: '', books: null, unlockAfter, hasWalk: false });

// специально не по порядку — mainUnits сортирует по уровню и номеру
const course: CourseIndex = {
    levels: [],
    units: [
        u('a2-1', 'A2', 1),
        u('a1-1', 'A1', 1),
        u('g-1', 'A1', 1, 'games'),
        u('a1-0', 'A1', 0),
        u('g-2', 'A1', 2, 'games', 'a1-1'),
    ],
};
// для стартового уровня: A1 → A2 → B1 по два урока
const course3: CourseIndex = {
    levels: [],
    units: [
        u('a1-0', 'A1', 0),
        u('a1-1', 'A1', 1),
        u('a2-1', 'A2', 1),
        u('a2-2', 'A2', 2),
        u('b1-1', 'B1', 1),
        u('b1-2', 'B1', 2),
        u('g-1', 'A1', 1, 'games', 'a1-0'),
    ],
};
const by3 = (id: string) => course3.units.find((x) => x.id === id)!;
const byId = (id: string) => course.units.find((x) => x.id === id)!;
const pass = (s: Progress, id: string, score = 1) => {
    s.units[id] = { steps: {}, testBest: score };
};

describe('порядок и разблокировка', () => {
    it('mainUnits: только основные, по уровню и номеру', () => {
        expect(mainUnits(course).map((x) => x.id)).toEqual(['a1-0', 'a1-1', 'a2-1']);
    });
    it('открыт только первый урок, остальные — после сдачи предыдущего', () => {
        const s = defaults();
        expect(isUnlocked(s, byId('a1-0'), course)).toBe(true);
        expect(isUnlocked(s, byId('a1-1'), course)).toBe(false);
        pass(s, 'a1-0');
        expect(isUnlocked(s, byId('a1-1'), course)).toBe(true);
        expect(isUnlocked(s, byId('a2-1'), course)).toBe(false);
        pass(s, 'a1-1');
        expect(isUnlocked(s, byId('a2-1'), course)).toBe(true);
    });
    it('тест ниже 80% не считается сданным', () => {
        const s = defaults();
        pass(s, 'a1-0', 0.7);
        expect(passed(s, 'a1-0')).toBe(false);
        expect(isUnlocked(s, byId('a1-1'), course)).toBe(false);
        pass(s, 'a1-0', 0.8);
        expect(passed(s, 'a1-0')).toBe(true);
    });
    it('игровые: после a1-0 или после своего unlockAfter', () => {
        const s = defaults();
        expect(isUnlocked(s, byId('g-1'), course)).toBe(false);
        expect(isUnlocked(s, byId('g-2'), course)).toBe(false);
        pass(s, 'a1-0');
        expect(isUnlocked(s, byId('g-1'), course)).toBe(true);
        expect(isUnlocked(s, byId('g-2'), course)).toBe(false);
        pass(s, 'a1-1');
        expect(isUnlocked(s, byId('g-2'), course)).toBe(true);
    });
    it('currentUnit — первый открытый несданный, в конце — последний', () => {
        const s = defaults();
        expect(currentUnit(s, course)?.id).toBe('a1-0');
        pass(s, 'a1-0');
        expect(currentUnit(s, course)?.id).toBe('a1-1');
        pass(s, 'a1-1');
        pass(s, 'a2-1');
        expect(currentUnit(s, course)?.id).toBe('a2-1');
    });
});

describe('прогресс урока', () => {
    it('шаги и следующий шаг', () => {
        const s = defaults();
        expect(unitProgress(s, 'a1-0')).toBe(0);
        expect(nextStep(s, 'a1-0')).toEqual({ k: 'words', label: 'Слова' });
        s.units['a1-0'] = { steps: { words: true, grammar: true }, testBest: null };
        expect(unitProgress(s, 'a1-0')).toBeCloseTo(0.4);
        expect(nextStep(s, 'a1-0')?.k).toBe('reading');
        s.units['a1-0'] = { steps: { words: true, grammar: true, reading: true, practice: true }, testBest: 0.9 };
        expect(unitProgress(s, 'a1-0')).toBe(1);
        expect(nextStep(s, 'a1-0')).toBeNull();
    });
    it('функции не создают запись урока в прогрессе', () => {
        const s = defaults();
        unitProgress(s, 'a1-1');
        nextStep(s, 'a1-1');
        expect(s.units['a1-1']).toBeUndefined();
    });
});

describe('стартовый уровень (настройка или тест на уровень)', () => {
    it('ниже стартового уровня всё открыто, стартовый — с первого урока, дальше по порядку', () => {
        const s = defaults();
        s.settings.startLevel = 'A2';
        expect(isUnlocked(s, by3('a1-0'), course3)).toBe(true);
        expect(isUnlocked(s, by3('a1-1'), course3)).toBe(true);
        expect(isUnlocked(s, by3('g-1'), course3)).toBe(true);
        expect(isUnlocked(s, by3('a2-1'), course3)).toBe(true);
        expect(isUnlocked(s, by3('a2-2'), course3)).toBe(false);
        expect(isUnlocked(s, by3('b1-1'), course3)).toBe(false);
        pass(s, 'a2-1');
        expect(isUnlocked(s, by3('a2-2'), course3)).toBe(true);
    });
    it('текущий урок — первый несданный со стартового уровня, а не a1-0', () => {
        const s = defaults();
        s.settings.startLevel = 'B1';
        expect(currentUnit(s, course3)?.id).toBe('b1-1');
        pass(s, 'b1-1');
        expect(currentUnit(s, course3)?.id).toBe('b1-2');
    });
    it('без настройки — как раньше, с a1-0', () => {
        const s = defaults();
        expect(currentUnit(s, course3)?.id).toBe('a1-0');
        expect(isUnlocked(s, by3('a2-1'), course3)).toBe(false);
    });
});
