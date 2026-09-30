// Слой content: карточки слов. Наборы читают words.json и делят его по уровням без потерь
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
    A1_WordCards,
    A2_WordCards,
    B1_WordCards,
    B2_WordCards,
    deck,
    LEVEL_WordCards,
    Phrases_WordCards,
} from '../src/content/word-cards';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => restore());

describe('карточки слов', () => {
    it('наборы по уровням: id, уровень, число слов', async () => {
        const got = await Promise.all(LEVEL_WordCards.map((s) => s.source.load()));
        expect(LEVEL_WordCards.map((s) => [s.id, s.kind, s.level])).toEqual([
            ['deck-A1', 'word-cards', 'A1'],
            ['deck-A2', 'word-cards', 'A2'],
            ['deck-B1', 'word-cards', 'B1'],
            ['deck-B2', 'word-cards', 'B2'],
        ]);
        expect(got.map((l) => l.length)).toEqual([829, 893, 1272, 1087]);
        got.forEach((l, i) => expect(l.every((w) => w.lvl === LEVEL_WordCards[i].level)).toBe(true));
    });

    it('уровни вместе = вся колода, без повторов', async () => {
        const all = await deck.load();
        const parts = [A1_WordCards, A2_WordCards, B1_WordCards, B2_WordCards].map((s) => s.source.peek() || []);
        expect(parts.reduce((n, p) => n + p.length, 0)).toBe(all.length);
        expect(new Set(all.map((w) => w.id)).size).toBe(all.length);
    });

    it('карточка из строки колоды: id в нижнем регистре, поля на месте', async () => {
        const [first] = await A1_WordCards.source.load();
        expect(first).toEqual({
            id: 'i',
            en: 'I',
            ru: 'я',
            ex: 'I play games every evening.',
            exRu: 'Я играю в игры каждый вечер.',
            lvl: 'A1',
            pos: 'pron',
            rank: 1,
        });
    });

    it('фразовые глаголы — отдельная колода всех уровней', async () => {
        const phr = await Phrases_WordCards.source.load();
        expect(phr.length).toBe(109);
        expect(phr.every((w) => w.pos === 'phr')).toBe(true);
        expect(Phrases_WordCards.level).toBeUndefined();
    });
});
