// Тест на уровень: ступени A1→B2 по 10 вопросов; 7+ верных — следующая ступень.
// Итог: known — уровень, который уже есть (последняя сданная ступень), level — с чего учиться дальше
import type { Level } from '@utils/level';
import { shuffle } from '@utils/random';
import type { Progress } from '../../core/progress/types';
import type { PlacementBank, PlacementQ } from './model';

export const STAGES = ['A1', 'A2', 'B1', 'B2'] as const;
export type Stage = (typeof STAGES)[number];
/** Вопросов на ступени */
export const PER_STAGE = 10;
/** Столько верных, чтобы перейти на следующую ступень */
export const PASS_AT = 7;

/** Вопрос теста с перемешанными вариантами (order — индексы вариантов по порядку показа) */
export interface StageQuestion {
    q: PlacementQ;
    order: number[];
}

/** Случайные вопросы ступени с перемешанными вариантами */
export function pickStage(bank: PlacementBank, st: Stage): StageQuestion[] {
    const qs = shuffle(bank[st]).slice(0, PER_STAGE);
    return qs.map((q) => ({ q, order: shuffle(q.o.map((_, i) => i)) }));
}

export interface PlacementOutcome {
    /** с чего учиться дальше */
    level: Stage;
    /** уже есть (null — с нуля) */
    known: Stage | null;
    /** прошли все ступени */
    top: boolean;
}

/** Ступень stage закончена с right верными: следующая ступень или итог */
export function afterStage(stage: number, right: number): { next: number } | { outcome: PlacementOutcome } {
    if (right >= PASS_AT && stage + 1 < STAGES.length) return { next: stage + 1 };
    const top = right >= PASS_AT;
    const st = STAGES[stage];
    return { outcome: { level: st, known: top ? st : stage > 0 ? STAGES[stage - 1] : null, top } };
}

/** Записать итог теста (внутри update) */
export function recordPlacement(s: Progress, o: PlacementOutcome, scores: Partial<Record<Level, number>>) {
    s.settings.placement = { level: o.level, known: o.known, at: Date.now(), scores };
}

/** Начинать с уровня (внутри update): стартовый уровень и колода слов этого уровня включена */
export function applyStartLevel(s: Progress, lvl: Level) {
    s.settings.startLevel = lvl;
    s.settings.decks = { ...(s.settings.decks || {}), [lvl]: true };
}
