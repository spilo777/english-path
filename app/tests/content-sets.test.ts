// Слой content: наборы текстов, книг, времён, теста на уровень, словаря, лекций и упражнений читают данные без потерь
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Adapted_Books, Original_Books, bookIndex } from '../src/content/books';
import { Main_Dictionary } from '../src/content/dictionary';
import { exercisesOf } from '../src/content/exercises';
import { LEVEL_Listenings } from '../src/content/listening';
import { A1_Lectures, LEVEL_Lectures } from '../src/content/lectures';
import { Placement_Test } from '../src/content/placement';
import { All_Tenses } from '../src/content/tenses';
import { LEVEL_Articles, LEVEL_Dialogs, library } from '../src/content/texts';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => restore());

const sizes = (sets: { source: { load(): Promise<unknown[]> } }[]) =>
    Promise.all(sets.map((s) => s.source.load().then((l) => l.length)));

describe('тексты', () => {
    it('статьи и диалоги по уровням — вся библиотека без потерь', async () => {
        expect(await sizes(LEVEL_Articles)).toEqual([38, 40, 43, 38]);
        expect(await sizes(LEVEL_Dialogs)).toEqual([22, 22, 22, 22]);
        expect((await library.load()).length).toBe(247);
        const dialogs = (await Promise.all(LEVEL_Dialogs.map((s) => s.source.load()))).flat();
        expect(dialogs.every((t) => t.id.startsWith('dlg-'))).toBe(true);
    });
});

describe('книги', () => {
    it('адаптированные и оригиналы делят оглавление, текст — по требованию', async () => {
        const [a, o] = await Promise.all([Adapted_Books.source.load(), Original_Books.source.load()]);
        expect([a.length, o.length]).toEqual([16, 23]);
        expect(a.length + o.length).toBe((await bookIndex.load()).length);
        const book = await a[0].body.load();
        expect(book.id).toBe(a[0].id);
        expect(book.chapters.length).toBe(a[0].chapters);
    });
});

describe('времена, тест на уровень, словарь', () => {
    it('13 времён', async () => {
        expect((await All_Tenses.source.load()).length).toBe(13);
    });
    it('тест на уровень: по 13 вопросов на ступень, ступень проставлена', async () => {
        const q = await Placement_Test.source.load();
        expect(q.length).toBe(52);
        expect(q.filter((x) => x.stage === 'B2').length).toBe(13);
    });
    it('словарь: пары en → ru', async () => {
        const d = await Main_Dictionary.source.load();
        expect(d.length).toBe(551);
        expect(d.every((e) => typeof e.en === 'string' && typeof e.ru === 'string')).toBe(true);
    });
});

describe('лекции и упражнения', () => {
    it('лекции уровня = грамматика всех его уроков', async () => {
        expect(A1_Lectures.source.peek()).toBeUndefined();
        const lec = await A1_Lectures.source.load();
        expect(lec.length).toBe(19);
        expect(lec.every((l) => l.level === 'A1' && l.grammar.length > 0)).toBe(true);
        expect(A1_Lectures.source.peek()).toBe(lec);
        expect(LEVEL_Lectures.map((s) => s.id)).toEqual(['lectures-A1', 'lectures-A2', 'lectures-B1', 'lectures-B2']);
    });
    it('упражнения урока: практика и тест', async () => {
        const practice = await exercisesOf('a1-0', 'practice').load();
        const test = await exercisesOf('a1-0', 'test').load();
        expect(practice.length).toBeGreaterThan(0);
        expect(test.length).toBeGreaterThan(0);
        expect(exercisesOf('a1-0', 'test')).toBe(exercisesOf('a1-0', 'test'));
    });
});

describe('аудирование', () => {
    it('каналы уровня: уровень внутри диапазона канала, у каждого уровня есть каналы', async () => {
        const order = ['A1', 'A2', 'B1', 'B2', 'C1'];
        for (const set of LEVEL_Listenings) {
            const list = await set.source.load();
            expect(list.length).toBeGreaterThan(0);
            const i = order.indexOf(set.level || '');
            expect(list.every((c) => order.indexOf(c.levels[0]) <= i && i <= order.indexOf(c.levels[1]))).toBe(true);
        }
    });
});
