// Все иконки, которые используются в коде и данных, есть в собранном наборе (src/styles/icons.css).
// Упал — запустите node build/icons.mjs <phosphor core> (см. шапку скрипта).
import { describe, expect, it } from 'vitest';
import names from '../src/styles/icons.json';

const have = new Set<string>(names as string[]);
const code = import.meta.glob<string>('../src/**/*.{ts,tsx}', { query: '?raw', import: 'default', eager: true });
const data = import.meta.glob<string>('../public/data/*.json', { query: '?raw', import: 'default', eager: true });

describe('иконки', () => {
    it('каждая иконка из кода есть в наборе', () => {
        const miss = new Set<string>();
        for (const [f, src] of Object.entries(code)) {
            for (const re of [
                /<Icon[^>]*?\sname="([a-z0-9-]+)"/g,
                /\bicon:\s*'([a-z0-9-]+)'/g,
                /\bph-([a-z0-9-]{2,})\b/g,
            ]) {
                for (const m of src.matchAll(re))
                    if (m[1] !== 'fill' && !have.has(m[1])) miss.add(m[1] + ' (' + f + ')');
            }
        }
        expect(Object.keys(code).length).toBeGreaterThan(20);
        expect([...miss]).toEqual([]);
    });
    it('каждая иконка из данных есть в наборе', () => {
        const miss = new Set<string>();
        for (const [f, src] of Object.entries(data)) {
            for (const m of src.matchAll(/"(?:icon|ic|ico)"\s*:\s*"([a-z0-9-]+)"/g))
                if (!have.has(m[1])) miss.add(m[1] + ' (' + f + ')');
        }
        expect([...miss]).toEqual([]);
    });
});
