// Тренажёр времён: уровень по умолчанию и случайный набор вопросов по временам «до уровня»
import { levelRank, type Level } from '@utils/level';
import { shuffle } from '@utils/random';
import type { Tense, TenseEx } from './model';

/** Вопрос тренажёра: упражнение + id времени */
export type TrainQ = TenseEx & { tid: string };

/** Уровень тренажёра: выбранный или уровень ученика, но не ниже A2 (на A1 всего три времени) */
export const trainerLevel = (my: Level, pick: Level | null): Level => pick || (levelRank(my) >= 2 ? my : 'A2');

/** Времена до уровня включительно */
export const tensesUpTo = (list: readonly Tense[], l: Level): Tense[] =>
    list.filter((t) => levelRank(t.level) <= levelRank(l));

/** n случайных вопросов по временам до уровня */
export function trainerQuestions(list: readonly Tense[], l: Level, n = 20): TrainQ[] {
    const all = tensesUpTo(list, l).flatMap((t) => t.ex.map((e) => ({ ...e, tid: t.id })));
    return shuffle(all).slice(0, n);
}
