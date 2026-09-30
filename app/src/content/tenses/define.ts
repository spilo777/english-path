// Описание набора времён
import { defineSet, type ContentSet } from '../base';
import type { Tense } from './model';

export type TenseSet = ContentSet<'tense', Tense>;

export const defineTenses = (m: Omit<TenseSet, 'kind'>): TenseSet => defineSet('tense', m);
