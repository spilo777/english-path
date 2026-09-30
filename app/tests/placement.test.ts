// Тест на уровень (content/placement/scoring): переходы между ступенями и итог — раньше внутри страницы
import { describe, expect, it } from 'vitest';
import { afterStage, applyStartLevel, PER_STAGE, pickStage, recordPlacement } from '../src/content/placement';
import type { PlacementBank } from '../src/content/placement/model';
import { defaults } from '../src/core/progress';

describe('тест на уровень', () => {
    it('7+ верных — следующая ступень', () => {
        expect(afterStage(0, 7)).toEqual({ next: 1 });
        expect(afterStage(2, 10)).toEqual({ next: 3 });
    });

    it('не сдал первую ступень — начинать с A1, уровня ещё нет', () => {
        expect(afterStage(0, 6)).toEqual({ outcome: { level: 'A1', known: null, top: false } });
    });

    it('не сдал B1 — A2 уже есть, учиться с B1', () => {
        expect(afterStage(2, 3)).toEqual({ outcome: { level: 'B1', known: 'A2', top: false } });
    });

    it('сдал все ступени — B2 уже есть', () => {
        expect(afterStage(3, 9)).toEqual({ outcome: { level: 'B2', known: 'B2', top: true } });
    });

    it('вопросы ступени: не больше 10, варианты перемешаны без потерь', () => {
        const q = (i: number) => ({ q: 'q' + i, o: ['a', 'b', 'c'], a: 0 });
        const bank = { A1: Array.from({ length: 13 }, (_, i) => q(i)), A2: [], B1: [], B2: [] } as PlacementBank;
        const items = pickStage(bank, 'A1');
        expect(items.length).toBe(PER_STAGE);
        expect(items.every((x) => [...x.order].sort().join() === '0,1,2')).toBe(true);
    });

    it('итог и стартовый уровень записываются в настройки', () => {
        const s = defaults();
        recordPlacement(s, { level: 'B1', known: 'A2', top: false }, { A1: 9, A2: 8, B1: 3 });
        expect(s.settings.placement?.known).toBe('A2');
        expect(s.settings.placement?.scores).toEqual({ A1: 9, A2: 8, B1: 3 });
        s.settings.decks = { A1: true, B1: false };
        applyStartLevel(s, 'B1');
        expect(s.settings.startLevel).toBe('B1');
        expect(s.settings.decks).toEqual({ A1: true, B1: true });
    });
});
