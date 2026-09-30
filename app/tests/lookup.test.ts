import { beforeAll, describe, expect, it } from 'vitest';
import { candidates, clean, lookup, setDictForTests } from '../src/lib/lookup';

beforeAll(() => {
    setDictForTests(
        { work: 'работа', child: 'ребёнок', play: 'играть', city: 'город', good: 'хороший', bet: 'пари' },
        { children: 'child', better: 'good' },
    );
});

describe('clean', () => {
    it('нижний регистр, пунктуация и кавычки по краям', () => {
        expect(clean('Works,')).toBe('works');
        expect(clean('«Played»')).toBe('played');
        expect(clean('children’s')).toBe("children's");
        expect(clean('...Better!')).toBe('better');
        expect(clean('  ')).toBe('');
    });
});

describe('candidates', () => {
    it('works → work', () => {
        const c = candidates('works');
        expect(c[0]).toBe('works');
        expect(c).toContain('work');
    });
    it("children's → children → child (два шага, неправильная форма)", () => {
        const c = candidates("children's");
        expect(c).toContain('children');
        expect(c).toContain('child');
    });
    it('played → play', () => {
        expect(candidates('played')).toContain('play');
    });
    it('cities → city', () => {
        expect(candidates('cities')).toContain('city');
    });
    it('better → good (формы) и bet (окончание)', () => {
        const c = candidates('better');
        expect(c[1]).toBe('good');
        expect(c).toContain('bet');
    });
    it('без повторов', () => {
        const c = candidates('played');
        expect(new Set(c).size).toBe(c.length);
    });
});

describe('lookup', () => {
    it('находит начальную форму', () => {
        expect(lookup('Works')).toEqual([{ word: 'work', tr: 'работа' }]);
        expect(lookup("children's")[0]).toEqual({ word: 'child', tr: 'ребёнок' });
        expect(lookup('played')[0].word).toBe('play');
        expect(lookup('cities')[0].word).toBe('city');
    });
    it('неправильная форма идёт раньше догадки по окончанию', () => {
        expect(lookup('better').map((x) => x.word)).toEqual(['good', 'bet']);
    });
    it('неизвестное слово и пустая строка', () => {
        expect(lookup('qwerty')).toEqual([]);
        expect(lookup('!!!')).toEqual([]);
    });
});
