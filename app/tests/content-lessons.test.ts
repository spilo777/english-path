// Слой content: уроки курса по уровням и ленивые тела уроков
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { courseIndex, Games_Lessons, LEVEL_Lessons, mainUnits } from '../src/content/lessons';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => restore());

describe('уроки', () => {
    it('основная линия делится по уровням без потерь и в том же порядке', async () => {
        const course = await courseIndex.load();
        const byLevel = await Promise.all(LEVEL_Lessons.map((s) => s.source.load()));
        expect(byLevel.map((l) => l.length)).toEqual([19, 22, 24, 10]);
        expect(byLevel.flat().map((l) => l.id)).toEqual(mainUnits(course).map((u) => u.id));
        byLevel.forEach((l, i) => expect(l.every((u) => u.level === LEVEL_Lessons[i].level)).toBe(true));
    });

    it('игровые уроки — отдельный набор', async () => {
        const games = await Games_Lessons.source.load();
        expect(games.length).toBe(3);
        expect(games.every((u) => u.track === 'games')).toBe(true);
    });

    it('всего 78 уроков, id не повторяются', async () => {
        const all = [...(await Promise.all(LEVEL_Lessons.map((s) => s.source.load()))).flat()];
        all.push(...(await Games_Lessons.source.load()));
        expect(all.length).toBe(78);
        expect(new Set(all.map((u) => u.id)).size).toBe(78);
    });

    it('тело урока грузится по требованию и совпадает по id', async () => {
        const [first] = await LEVEL_Lessons[0].source.load();
        expect(first.body.peek()).toBeUndefined();
        const unit = await first.body.load();
        expect(unit.id).toBe(first.id);
        expect(unit.test.length).toBeGreaterThan(0);
        expect(first.body.peek()).toBe(unit);
    });
});
