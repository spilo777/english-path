// Описание набора писем
import { defineSet, type ContentSet } from '../base';
import type { Letter } from './model';

export type LetterSet = ContentSet<'letter', Letter>;

export const defineLetters = (m: Omit<LetterSet, 'kind'>): LetterSet => defineSet('letter', m);
