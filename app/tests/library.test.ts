// Библиотека: подбор текстов под уровень, прогресс книги, текст урока по id
import { describe, expect, it } from 'vitest';
import { chapN, chaptersRead } from '../src/content/books';
import { byFit, textsForYou, textsInCat, textUnitId } from '../src/content/texts';
import type { TextItem } from '../src/content/texts/model';
import { defaults } from '../src/core/progress';

const t = (id: string, level: string, o: Partial<TextItem> = {}): TextItem => ({
    id,
    title: id,
    level,
    text: '',
    ...o,
});

describe('подбор текстов', () => {
    const lib = [
        t('a1', 'A1', { cat: 'Игры' }),
        t('a2', 'A2', { cat: 'Игры' }),
        t('b1', 'B1', { cat: 'Игры' }),
        t('b2', 'B2', { cat: 'Игры' }),
        t('d-a2', 'A2', { kind: 'dialogue', cat: 'Игры' }),
    ];

    it('«Для вас»: свой уровень и на уровень выше, без диалогов и прочитанного', () => {
        const s = defaults();
        expect(textsForYou(lib, s, 'A1').map((x) => x.id)).toEqual(['a1', 'a2']);
        s.textsRead.a1 = '2026-09-30';
        expect(textsForYou(lib, s, 'A1').map((x) => x.id)).toEqual(['a2']);
    });

    it('подборка: непрочитанные, ближе к уровню, сложнее на 2+ — в конце, прочитанные — последними', () => {
        const s = defaults();
        s.textsRead.a2 = '2026-09-30';
        expect(textsInCat(lib, s, 'A2', 'Игры').map((x) => x.id)).toEqual(['d-a2', 'a1', 'b1', 'b2', 'a2']);
        expect([...lib].sort(byFit(defaults(), 'A1'))[0].id).toBe('a1');
    });
});

describe('книги и тексты уроков', () => {
    it('главы книги и прочитанные главы', () => {
        const s = defaults();
        const b = { id: 'bk-a1-aesop', chapters: 5 };
        s.textsRead['bk-a1-aesop#0'] = 'x';
        s.textsRead['bk-a1-aesop#3'] = 'x';
        s.textsRead['bk-a1-aesop#9'] = 'x';
        expect([chapN(b), chaptersRead(s, b)]).toEqual([5, 2]);
    });

    it('текст урока t-<урок>-N → урок', () => {
        expect(textUnitId('t-a1-3-2')).toBe('a1-3');
        expect(textUnitId('t-games-1-10')).toBe('games-1');
        expect(textUnitId('lib-a1-shrek')).toBeNull();
    });
});
