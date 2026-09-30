// Описание набора книг
import { defineSet, type ContentSet } from '../base';
import type { BookItem } from './sources';

export type BookSet = ContentSet<'book', BookItem>;

export const defineBooks = (m: Omit<BookSet, 'kind'>): BookSet => defineSet('book', m);
