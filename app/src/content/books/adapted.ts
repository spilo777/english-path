// Адаптированные книги A1–B2 (bk-<уровень>-*)
import { defineBooks } from './define';
import { booksOfKind } from './sources';

export const Adapted_Books = defineBooks({
    id: 'books-adapted',
    title: 'Адаптированные книги',
    icon: 'books',
    tags: ['adapted'],
    source: booksOfKind('adapted'),
});
