// Прогресс по книге: главы, отмеченные прочитанными (textsRead['<id книги>#<глава>'])
import type { Progress } from '../../core/progress/types';
import type { BookMeta } from './model';

/** Число глав книги */
export const chapN = (b: Pick<BookMeta, 'chapters'>): number => b.chapters || 0;

/** Сколько глав прочитано */
export function chaptersRead(s: Progress, b: Pick<BookMeta, 'id' | 'chapters'>): number {
    let n = 0;
    for (let i = 0; i < chapN(b); i++) if (s.textsRead[b.id + '#' + i]) n++;
    return n;
}

/** Книга прочитана целиком: отмечены все главы */
export const bookDone = (s: Progress, b: Pick<BookMeta, 'id' | 'chapters'>): boolean =>
    chapN(b) > 0 && chaptersRead(s, b) >= chapN(b);

export interface BooksReading {
    /** Прочитано целиком */
    done: number;
    /** Начато, но не дочитано */
    started: number;
    /** Прочитанных глав всего */
    chapters: number;
    /** Примерно слов в прочитанных главах (слова книги × доля прочитанных глав) */
    words: number;
}

/** Итоги по книгам для профиля */
export function booksReading(s: Progress, books: readonly Pick<BookMeta, 'id' | 'chapters' | 'words'>[]): BooksReading {
    const r: BooksReading = { done: 0, started: 0, chapters: 0, words: 0 };
    for (const b of books) {
        const n = chapN(b);
        const read = chaptersRead(s, b);
        if (!n || !read) continue;
        r.chapters += read;
        r.words += Math.round(((b.words || 0) * read) / n);
        if (read >= n) r.done++;
        else r.started++;
    }
    return r;
}
