// Описание набора уроков
import { defineSet, type ContentSet } from '../base';
import type { Lesson } from './sources';

export type LessonSet = ContentSet<'lesson', Lesson>;

export const defineLessons = (m: Omit<LessonSet, 'kind'>): LessonSet => defineSet('lesson', m);
