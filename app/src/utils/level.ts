// Уровни CEFR: список, порядок, проверка

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

/** Уровни, для которых есть материалы */
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
/** Все уровни шкалы, включая ещё пустые */
export const ALL_LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const LEVEL_ORDER: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };

/** Номер уровня (A1 = 1 … C1 = 5), неизвестный — 0 */
export const levelRank = (l: string | null | undefined): number => (l && LEVEL_ORDER[l]) || 0;

export const isLevel = (x: string | null | undefined): x is Level => !!x && x in LEVEL_ORDER;
