// Источники книг: оглавление books/index.json (небольшое) и текст книги books/<id>.json по требованию
import { paths } from '../../core/data/paths';
import { derive, jsonSource, type Source } from '../base';
import type { Book, BookMeta } from './model';

export const bookIndex = jsonSource<BookMeta[]>(paths.bookIndex);

const bodies = new Map<string, Source<Book>>();
/** Полный текст книги по главам */
export function bookBody(id: string): Source<Book> {
    let s = bodies.get(id);
    if (!s) bodies.set(id, (s = jsonSource<Book>(paths.book(id))));
    return s;
}

/** Книга в движке: описание из оглавления + ленивый текст */
export interface BookItem extends BookMeta {
    readonly body: Source<Book>;
}

const toItem = (b: BookMeta): BookItem => ({ ...b, body: bookBody(b.id) });

/** Книги одного вида: адаптированные или в оригинале */
export function booksOfKind(kind: BookMeta['kind']): Source<BookItem[]> {
    return derive(bookIndex, 'books:' + kind, (list) => list.filter((b) => b.kind === kind).map(toItem));
}
