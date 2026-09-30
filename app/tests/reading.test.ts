import { describe, expect, it } from 'vitest';
import { merge } from '@core/cloud';
import { addReadTime, defaults, fmtDuration, fmtDurationShort, readTimeStats } from '@core/progress';
import { booksReading, readingSummary } from '@content/books';
import type { BookMeta } from '@content/books';

const book = (id: string, chapters: number, words: number) => ({ id, chapters, words }) as BookMeta;

describe('время чтения', () => {
    it('складывает секунды по дням, пустое и отрицательное не пишет', () => {
        const s = defaults();
        addReadTime(s, 30, '2026-09-28');
        addReadTime(s, 45.4, '2026-09-28');
        addReadTime(s, 0, '2026-09-29');
        addReadTime(s, -5, '2026-09-29');
        expect(s.readTime).toEqual({ '2026-09-28': 75 });
    });

    it('сегодня, неделя с понедельника и всего', () => {
        const s = defaults();
        s.readTime = { '2026-09-20': 600, '2026-09-28': 120, '2026-09-30': 300 };
        // среда 30.09.2026: неделя с понедельника 28.09
        const r = readTimeStats(s, new Date('2026-09-30T15:00:00'));
        expect(r).toEqual({ today: 300, week: 420, total: 1020, days: 3 });
    });

    it('формат длительности', () => {
        expect(fmtDuration(0)).toBe('0 мин');
        expect(fmtDuration(20)).toBe('< 1 мин');
        expect(fmtDuration(25 * 60 + 10)).toBe('25 мин');
        expect(fmtDuration(3600)).toBe('1 ч');
        expect(fmtDuration(3 * 3600 + 5 * 60)).toBe('3 ч 5 мин');
        expect(fmtDurationShort(20 * 60)).toBe('20 мин');
        expect(fmtDurationShort(92 * 60)).toBe('1,5 ч');
        expect(fmtDurationShort(2 * 3600)).toBe('2 ч');
        expect(fmtDurationShort(12.4 * 3600)).toBe('12 ч');
    });

    it('облако: по дням берётся максимум, а не сумма', () => {
        const a = defaults();
        const b = defaults();
        a.readTime = { d1: 100, d2: 50 };
        b.readTime = { d1: 80, d3: 20 };
        expect(merge(a, b).readTime).toEqual({ d1: 100, d2: 50, d3: 20 });
        expect(merge(defaults(), defaults()).readTime).toBeUndefined();
    });
});

describe('итоги чтения', () => {
    const books = [book('b1', 4, 4000), book('b2', 2, 1000), book('b3', 5, 900)];

    it('книги: прочитанные целиком, начатые, главы и слова по доле глав', () => {
        const s = defaults();
        for (let i = 0; i < 4; i++) s.textsRead['b1#' + i] = 'x';
        s.textsRead['b2#0'] = 'x';
        expect(booksReading(s, books)).toEqual({ done: 1, started: 1, chapters: 5, words: 4500 });
    });

    it('страницы: слова глав и текстов / 250; тексты без глав книг', () => {
        const s = defaults();
        s.textsRead['b2#0'] = 'x';
        s.textsRead['b2#1'] = 'x';
        s.textsRead['lib-a1-shrek'] = 'x';
        s.stats.wordsRead = 500;
        const r = readingSummary(s, books);
        expect(r.books.done).toBe(1);
        expect(r.texts).toBe(1);
        expect(r.pages).toBe(6); // (1000 + 500) / 250
        expect(readingSummary(s, undefined).pages).toBe(2); // оглавление ещё не загружено
    });
});
