// Времена: результаты и тренажёр (content/tenses) — то, что раньше было внутри страницы
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
    recordTrainRound,
    saveTenseResult,
    tenseBest,
    tenseMastered,
    tenses,
    tensesUpTo,
    trainerLevel,
    trainerQuestions,
} from '../src/content/tenses';
import { defaults } from '../src/core/progress';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => restore());

describe('результаты по временам', () => {
    it('лучший балл сохраняется, освоено — от 80%', () => {
        const s = defaults();
        saveTenseResult(s, 'ps', 0.9);
        saveTenseResult(s, 'ps', 0.5);
        expect(tenseBest(s, 'ps')).toBe(0.9);
        expect(s.tenses?.ps.at).toBeGreaterThan(0);
        expect([tenseMastered(s, 'ps'), tenseMastered(s, 'pc')]).toEqual([true, false]);
    });

    it('раунды тренажёра: счётчик и лучший результат', () => {
        const s = defaults();
        recordTrainRound(s, 0.7);
        recordTrainRound(s, 0.6);
        expect([s.stats.tenseTrain, s.stats.tenseBest]).toEqual([2, 0.7]);
    });
});

describe('тренажёр', () => {
    it('уровень: выбранный, иначе свой, но не ниже A2', () => {
        expect(trainerLevel('A1', null)).toBe('A2');
        expect(trainerLevel('B1', null)).toBe('B1');
        expect(trainerLevel('B2', 'A1')).toBe('A1');
    });

    it('вопросы — только по временам до уровня, не больше 20', async () => {
        const list = await tenses.load();
        const upToA2 = tensesUpTo(list, 'A2');
        expect(upToA2.length).toBe(7);
        const qs = trainerQuestions(list, 'A2');
        expect(qs.length).toBe(20);
        const ids = new Set(upToA2.map((t) => t.id));
        expect(qs.every((q) => ids.has(q.tid))).toBe(true);
    });
});
