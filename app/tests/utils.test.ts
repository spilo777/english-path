// Слой utils: общие помощники
import { describe, expect, it } from 'vitest';
import {
    clamp,
    dayKey,
    dlgLines,
    esc,
    isLevel,
    levelRank,
    lsGet,
    lsJSON,
    lsSet,
    lsSetJSON,
    minsIn,
    mondayOf,
    pickOne,
    plural,
    shuffle,
    ssGet,
    ssSet,
    unionKeys,
    uniq,
    weekOf,
    wordId,
    wordsIn,
} from '../src/utils';

/** localStorage бросает исключение на любое обращение, как Safari в приватном режиме */
function withBrokenStorage(fn: () => void) {
    const boom = () => {
        throw new Error('SecurityError');
    };
    const own = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
    if (own && own.configurable) {
        Object.defineProperty(globalThis, 'localStorage', {
            configurable: true,
            value: { getItem: boom, setItem: boom, removeItem: boom },
        });
        try {
            fn();
        } finally {
            Object.defineProperty(globalThis, 'localStorage', own);
        }
        return;
    }
    // jsdom: методы живут в Storage.prototype
    const p = Storage.prototype;
    const { getItem, setItem } = p;
    p.getItem = boom;
    p.setItem = boom;
    try {
        fn();
    } finally {
        p.getItem = getItem;
        p.setItem = setItem;
    }
}

describe('plural', () => {
    it('одно / несколько / много, включая 11–14', () => {
        const w = (n: number) => plural(n, 'слово', 'слова', 'слов');
        expect([1, 2, 5, 11, 12, 14, 21, 22, 25, 101, 111, 0].map(w)).toEqual([
            'слово',
            'слова',
            'слов',
            'слов',
            'слов',
            'слов',
            'слово',
            'слова',
            'слов',
            'слово',
            'слов',
            'слов',
        ]);
    });
});

describe('random', () => {
    it('shuffle возвращает перестановку и не меняет исходный массив', () => {
        const a = [1, 2, 3, 4, 5, 6, 7, 8];
        const b = shuffle(a);
        expect(a).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(b.slice().sort((x, y) => x - y)).toEqual(a);
    });
    it('pickOne берёт элемент массива', () => {
        const a = ['x', 'y', 'z'];
        for (let i = 0; i < 20; i++) expect(a).toContain(pickOne(a));
    });
});

describe('date', () => {
    it('dayKey — местная дата с нулями', () => {
        expect(dayKey(new Date(2026, 0, 5, 23, 59))).toBe('2026-01-05');
        expect(dayKey(new Date(2026, 11, 31, 0, 1))).toBe('2026-12-31');
    });
    it('неделя начинается с понедельника', () => {
        expect(weekOf('2026-09-30')).toBe('2026-09-28'); // среда
        expect(weekOf('2026-09-28')).toBe('2026-09-28'); // понедельник
        expect(weekOf('2026-10-04')).toBe('2026-09-28'); // воскресенье
        expect(dayKey(mondayOf(new Date(2026, 9, 1, 8)))).toBe('2026-09-28');
    });
});

describe('storage', () => {
    it('строки и JSON туда и обратно', () => {
        expect(lsSet('t.a', 'x')).toBe(true);
        expect(lsGet('t.a')).toBe('x');
        expect(lsGet('t.none')).toBeNull();
        expect(lsGet('t.none', 'd')).toBe('d');
        expect(lsSetJSON('t.j', { a: [1, 2] })).toBe(true);
        expect(lsJSON('t.j')).toEqual({ a: [1, 2] });
        expect(ssSet('t.s', 'y')).toBe(true);
        expect(ssGet('t.s')).toBe('y');
        expect(ssGet('t.none', '')).toBe('');
    });
    it('битый JSON — null, а не исключение', () => {
        lsSet('t.bad', '{oops');
        expect(lsJSON('t.bad')).toBeNull();
    });
    it('хранилище недоступно (приватный режим) — запасные значения', () => {
        withBrokenStorage(() => {
            expect(lsGet('k')).toBeNull();
            expect(lsGet('k', 'd')).toBe('d');
            expect(lsSet('k', 'v')).toBe(false);
            expect(lsJSON('k')).toBeNull();
            expect(lsSetJSON('k', {})).toBe(false);
        });
    });
});

describe('math и коллекции', () => {
    it('clamp', () => {
        expect([clamp(-1, 0, 1), clamp(0.5, 0, 1), clamp(3, 0, 1)]).toEqual([0, 0.5, 1]);
    });
    it('uniq и unionKeys сохраняют порядок первого появления', () => {
        expect(uniq(['b', 'a', 'b', 'c', 'a'])).toEqual(['b', 'a', 'c']);
        expect(unionKeys({ x: 1, y: 2 }, { z: 3, x: 4 })).toEqual(['x', 'y', 'z']);
    });
});

describe('text', () => {
    it('esc экранирует HTML', () => {
        expect(esc(`<b a="1">Tom's & Jerry</b>`)).toBe('&lt;b a=&quot;1&quot;&gt;Tom&#39;s &amp; Jerry&lt;/b&gt;');
    });
    it('wordId', () => {
        expect(wordId('  Hello ')).toBe('hello');
    });
    it('объём текста и реплики диалога', () => {
        const t = { text: 'Anna: Hi there!\nBen: Hello.\n\nJust a note, not a line.' };
        expect(wordsIn(t)).toBe(11);
        expect(minsIn(t)).toBe(1);
        expect(minsIn({ text: 'w '.repeat(900) })).toBe(10);
        expect(dlgLines(t)).toBe(2);
    });
});

describe('level', () => {
    it('порядок и проверка уровня', () => {
        expect(['C1', 'A1', 'B2', 'x', undefined].map(levelRank)).toEqual([5, 1, 4, 0, 0]);
        expect([isLevel('B1'), isLevel('C1'), isLevel('Z9'), isLevel(null)]).toEqual([true, true, false, false]);
    });
});
