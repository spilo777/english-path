// Проверка ответов в упражнениях (content/exercises/check)
import { describe, expect, it } from 'vitest';
import { checkText, displayAnswer, lev, norm } from '../src/content/exercises';

describe('проверка ответов', () => {
    it('нормализация: регистр, апострофы, сокращения, знаки', () => {
        expect(norm("  I’m NOT here, aren't you?! ")).toBe('i am not here are not you');
        expect(norm("He's gone; we've won't")).toBe('he is gone we have will not');
        expect(norm("can't")).toBe('cannot');
    });

    it('расстояние Левенштейна', () => {
        expect([lev('kitten', 'sitting'), lev('', 'abc'), lev('same', 'same')]).toEqual([3, 3, 0]);
    });

    it('верно с сокращениями и без; одна опечатка — только в длинном ответе', () => {
        expect(checkText('I am happy', ["I'm happy"])).toEqual({ ok: true });
        expect(checkText('beautifull', ['beautiful'])).toEqual({ ok: true, typo: 'beautiful' });
        expect(checkText('cst', ['cat'])).toEqual({ ok: false });
        expect(checkText('   ', ['cat'])).toEqual({ ok: false });
    });

    it('правильный ответ для показа', () => {
        expect(displayAnswer({ t: 'choice', q: '', o: ['a', 'b'], a: 1 })).toBe('b');
        expect(displayAnswer({ t: 'order', a: 'I am here', ru: '' })).toBe('I am here');
        expect(displayAnswer({ t: 'gap', q: '', a: ['is', "'s"] })).toBe('is');
    });
});
