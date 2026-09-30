// Описание набора упражнений
import { defineSet, type ContentSet } from '../base';
import type { Exercise } from './model';

export type ExerciseSet = ContentSet<'exercises', Exercise>;

export const defineExercises = (m: Omit<ExerciseSet, 'kind'>): ExerciseSet => defineSet('exercises', m);
