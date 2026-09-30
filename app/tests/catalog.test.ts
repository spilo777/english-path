// Слой catalog: движок собран из разделов приложения, контент грузится только по требованию
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { engine } from '../src/catalog';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => restore());

describe('каталог', () => {
    it('разделы как в меню', () => {
        expect(engine.categories().map((c) => [c.id, c.title])).toEqual([
            ['grammar', 'Грамматика'],
            ['words', 'Словарь'],
            ['library', 'Библиотека'],
            ['profile', 'Профиль'],
        ]);
    });

    it('словарь: колоды по уровням, фразовые глаголы, словарь', () => {
        expect(engine.category('words')?.collections.map((c) => c.id)).toEqual([
            'col:deck-A1',
            'col:deck-A2',
            'col:deck-B1',
            'col:deck-B2',
            'col:deck-phr',
            'dictionary',
        ]);
    });

    it('библиотека по уровням: статьи, диалоги и каналы уровня + книги', () => {
        const lib = engine.category('library');
        expect(lib?.collections.map((c) => c.id)).toEqual([
            'library-A1',
            'library-A2',
            'library-B1',
            'library-B2',
            'books',
        ]);
        expect(lib?.byLevel('B1')[0].sets.map((s) => s.kind)).toEqual(['text', 'text', 'listening']);
    });

    it('курс грамматики: 4 уровня + игры, индекс = 78 уроков', async () => {
        const course = engine.course('grammar');
        expect([...(course?.levels.keys() || [])]).toEqual(['A1', 'A2', 'B1', 'B2']);
        expect((await course?.index().load())?.units.length).toBe(78);
    });

    it('наборы не повторяются, достижения грузятся лениво', async () => {
        const ids = engine.collections().flatMap((c) => c.sets.map((s) => s.id));
        expect(new Set(ids).size).toBe(ids.length);
        const ach = engine.sets('achievement')[0];
        expect(ach.source.peek()).toBeUndefined();
        expect((await ach.source.load()).length).toBe(134);
    });
});
