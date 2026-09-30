// Описание набора карточек слов
import { defineSet, type ContentSet } from '../base';
import type { WordCard } from './model';

export type WordCardSet = ContentSet<'word-cards', WordCard>;

export const defineWordCards = (m: Omit<WordCardSet, 'kind'>): WordCardSet => defineSet('word-cards', m);
