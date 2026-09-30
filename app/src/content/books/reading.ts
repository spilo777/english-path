// Итоги чтения для профиля: время в читалке, книги, тексты и примерные страницы
import { getConfig } from '../../core/config/current';
import { readTimeStats, type ReadTimeStats } from '../../core/progress/reading';
import type { Progress } from '../../core/progress/types';
import type { BookMeta } from './model';
import { type BooksReading, booksReading } from './progress';

export interface ReadingSummary {
    time: ReadTimeStats;
    books: BooksReading;
    /** Прочитано текстов (статьи, диалоги, тексты уроков и свои — без глав книг) */
    texts: number;
    /** Примерно страниц: слова прочитанных глав и текстов / config.reading.pageWords */
    pages: number;
}

/** books — оглавление книг; пока не загружено, книги и их страницы не считаются */
export function readingSummary(s: Progress, books: readonly BookMeta[] | undefined): ReadingSummary {
    const b = booksReading(s, books || []);
    const texts = Object.keys(s.textsRead).filter((id) => !id.includes('#')).length;
    const words = b.words + (Number(s.stats.wordsRead) || 0);
    return { time: readTimeStats(s), books: b, texts, pages: Math.round(words / getConfig().reading.pageWords) };
}
