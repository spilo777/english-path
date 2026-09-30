// Книги в оригинале (bk-o-*)
import { defineBooks } from './define';
import { booksOfKind } from './sources';

export const Original_Books = defineBooks({
    id: 'books-original',
    title: 'Книги в оригинале',
    icon: 'book-open',
    tags: ['original'],
    source: booksOfKind('original'),
});
