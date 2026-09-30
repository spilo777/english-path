// Результаты по временам: лучший балл упражнений времени и раунды тренажёра (прогресс: tenses, stats)
import type { Progress } from '../../core/progress/types';

/** Время освоено при таком лучшем результате */
export const TENSE_OK = 0.8;

/** Лучший результат упражнений времени (0..1) или undefined */
export const tenseBest = (s: Progress, id: string): number | undefined => s.tenses?.[id]?.best;

/** Время освоено */
export const tenseMastered = (s: Progress, id: string): boolean => (tenseBest(s, id) || 0) >= TENSE_OK;

/** Сохранить попытку упражнений времени (внутри update): лучший балл и время попытки */
export function saveTenseResult(s: Progress, id: string, score: number) {
    s.tenses = s.tenses || {};
    const r = (s.tenses[id] = s.tenses[id] || {});
    r.best = Math.max(r.best || 0, score);
    r.at = Date.now();
}

/** Раунд тренажёра закончен (внутри update): счётчик раундов и лучший результат */
export function recordTrainRound(s: Progress, score: number) {
    s.stats.tenseTrain = (s.stats.tenseTrain || 0) + 1;
    s.stats.tenseBest = Math.max(s.stats.tenseBest || 0, score);
}
