// Описание набора лекций (грамматика уроков)
import { defineSet, type ContentSet } from '../base';
import type { Lecture } from './sources';

export type LectureSet = ContentSet<'lecture', Lecture>;

export const defineLectures = (m: Omit<LectureSet, 'kind'>): LectureSet => defineSet('lecture', m);
