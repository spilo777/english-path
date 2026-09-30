// Слой content, основа: ленивые источники и наборы контента
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { defineSet, derive, jsonSource, staticSource } from '../src/content/base';
import type { DeckWordRow } from '../src/content/word-cards/model';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => restore());

describe('источники данных', () => {
    it('jsonSource: до загрузки peek пуст, после — то же значение и та же ссылка', async () => {
        let calls = 0;
        const src = jsonSource<DeckWordRow[], number>('words.json', (rows) => {
            calls++;
            return rows.length;
        });
        expect(src.key).toBe('json:words.json');
        expect(src.peek()).toBeUndefined();
        expect(await src.load()).toBe(4081);
        expect(src.peek()).toBe(4081);
        expect(await src.load()).toBe(4081);
        expect(calls).toBe(1);
    });

    it('derive: выборка по уровню считается один раз и отдаёт ту же ссылку', async () => {
        const rows = jsonSource<DeckWordRow[]>('words.json');
        let calls = 0;
        const a1 = derive(rows, 'deck:A1', (all) => {
            calls++;
            return all.filter((r) => r[4] === 'A1');
        });
        const list = await a1.load();
        expect(list.length).toBe(829);
        expect(a1.peek()).toBe(list);
        expect(a1.peek()).toBe(a1.peek());
        expect(calls).toBe(1);
    });

    it('нет файла — load отклоняется, peek пуст', async () => {
        const src = jsonSource('no-such-file.json');
        let failed = false;
        await src.load().catch(() => {
            failed = true;
        });
        expect(failed).toBe(true);
        expect(src.peek()).toBeUndefined();
    });

    it('staticSource отдаёт значение сразу', async () => {
        const src = staticSource('s', [1, 2]);
        expect(src.peek()).toEqual([1, 2]);
        expect(await src.load()).toEqual([1, 2]);
    });
});

describe('наборы контента', () => {
    it('defineSet: вид проставлен, объект заморожен', () => {
        const set = defineSet('word-cards', { id: 'x', title: 'X', level: 'A1', source: staticSource('x', []) });
        expect(set.kind).toBe('word-cards');
        expect(Object.isFrozen(set)).toBe(true);
    });
});
