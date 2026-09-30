// Слой engine: строители Collection / Course / Category и ENEngine
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Category, Collection, Course, ENEngine } from '../src/engine';
import { A1_WordCards, A2_WordCards } from '../src/content/word-cards';
import { A1_Articles, A2_Dialogs, A1_Dialogs } from '../src/content/texts';
import { Adapted_Books } from '../src/content/books';
import {
    A1_Lessons,
    A2_Lessons,
    B1_Lessons,
    B2_Lessons,
    courseIndex,
    currentUnit,
    Games_Lessons,
    isUnlocked,
    unitProgress,
} from '../src/content/lessons';
import { DEFAULT_CONFIG, getConfig, setConfig } from '../src/core/config';
import { defaults, normalize } from '../src/core/progress';
import type { Progress } from '../src/core/progress/types';
import local from './fixtures/progress-v1.json';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
beforeAll(() => {
    restore = serveDataFromDisk();
});
afterAll(() => {
    restore();
    setConfig();
});

const grammar = () =>
    new Course({ id: 'grammar', title: 'Грамматика' })
        .level('B1', new Collection().addLessons(B1_Lessons))
        .level('A1', new Collection().addLessons(A1_Lessons).addWordCards(A1_WordCards))
        .level('A2', new Collection().addLessons(A2_Lessons))
        .level('B2', new Collection().addLessons(B2_Lessons))
        .extraTrack('games', new Collection().addLessons(Games_Lessons));

describe('Collection', () => {
    it('как в задании: new Collection().addWordCards(A1_WordCards)', async () => {
        const wc_La1_collection = new Collection().addWordCards(A1_WordCards).build();
        expect(wc_La1_collection.id).toBe('col:deck-A1');
        expect(wc_La1_collection.title).toBe('Слова A1');
        expect(wc_La1_collection.level).toBe('A1');
        expect((await wc_La1_collection.load('word-cards')).length).toBe(829);
        expect(wc_La1_collection.has('text')).toBe(false);
    });

    it('несколько видов: наборы по виду, общий уровень, свои id и название', async () => {
        const c = new Collection({ id: 'a1', title: 'Всё для A1' })
            .addWordCards(A1_WordCards)
            .addTexts(A1_Articles, A1_Dialogs)
            .build();
        expect(c.of('text').map((s) => s.id)).toEqual(['articles-A1', 'dialogs-A1']);
        expect((await c.load('text')).length).toBe(38 + 22);
        expect(c.level).toBe('A1');
        expect(Object.isFrozen(c)).toBe(true);
    });

    it('разные уровни — уровень коллекции не задан', () => {
        expect(new Collection().addWordCards(A1_WordCards, A2_WordCards).build().level).toBeUndefined();
    });

    it('ошибки: набор не того вида, повтор набора', () => {
        const wrong = () => new Collection().addWordCards(A1_Articles as never);
        expect(wrong).toThrow();
        expect(() => new Collection().addWordCards(A1_WordCards, A1_WordCards).build()).toThrow();
    });
});

describe('Course', () => {
    it('уровни по порядку, ветка игр, индекс = course.json', async () => {
        const c = grammar().build();
        expect([...c.levels.keys()]).toEqual(['A1', 'A2', 'B1', 'B2']);
        expect(c.levels.get('A2')?.level).toBe('A2');
        expect(Object.keys(c.tracks)).toEqual(['games']);
        const idx = await c.index().load();
        const course = await courseIndex.load();
        expect(idx.units.length).toBe(78);
        expect(new Set(idx.units.map((u) => u.id))).toEqual(new Set(course.units.map((u) => u.id)));
        expect(c.index().peek()).toBe(idx);
    });

    it('открытие уроков и текущий урок — как на странице курса сейчас', async () => {
        const c = grammar().build();
        const idx = await c.index().load();
        const course = await courseIndex.load();
        const states: Progress[] = [defaults(), normalize(JSON.parse(JSON.stringify(local)))];
        const b1 = defaults();
        b1.settings.startLevel = 'B1';
        states.push(b1);
        const passedA1 = defaults();
        idx.units.filter((u) => u.level === 'A1').forEach((u) => (passedA1.units[u.id] = { steps: {}, testBest: 1 }));
        states.push(passedA1);
        for (const s of states) {
            expect(c.current(s, idx)?.id).toBe(currentUnit(s, course)?.id);
            for (const u of course.units) expect(c.isUnlocked(s, u, idx)).toBe(isUnlocked(s, u, course));
        }
    });

    it('свои шаги урока и своё правило открытия', async () => {
        const allOpen = () => true;
        const c = grammar().steps(['words', 'test']).unlock(allOpen).build();
        const s = defaults();
        s.units['a1-0'] = { steps: { words: true, grammar: true }, testBest: null };
        expect(c.progress(s, 'a1-0')).toBe(0.5);
        expect(unitProgress(s, 'a1-0')).toBeCloseTo(0.4);
        const idx = await c.index().load();
        expect(idx.units.every((u) => c.isUnlocked(s, u, idx))).toBe(true);
        const one = new Course({ id: 'x', title: 'x' }).level('A1', new Collection());
        expect(() => one.level('A1', new Collection())).toThrow();
    });
});

describe('Category', () => {
    it('splitByLevel: одна категория → коллекции по уровням, без уровня — в -all', () => {
        const lib = new Category({ id: 'library', title: 'Библиотека', icon: 'books' })
            .splitByLevel([A2_Dialogs, A1_Articles, Adapted_Books, A1_Dialogs])
            .build();
        expect(lib.collections.map((c) => [c.id, c.level, c.sets.map((s) => s.id)])).toEqual([
            ['library-A1', 'A1', ['articles-A1', 'dialogs-A1']],
            ['library-A2', 'A2', ['dialogs-A2']],
            ['library-all', undefined, ['books-adapted']],
        ]);
        expect(lib.collections.every((c) => c.category === 'library')).toBe(true);
        expect(lib.byLevel('A1').length).toBe(1);
    });
});

describe('ENEngine', () => {
    it('конфиг: поверх умолчаний и доступен ядру', () => {
        const e = new ENEngine({ xp: { exercise: 3 } });
        expect(e.config.xp).toEqual({ review: 1, exercise: 3, read: 10 });
        expect(getConfig().xp.exercise).toBe(3);
        new ENEngine();
        expect(getConfig()).toEqual(DEFAULT_CONFIG);
    });

    it('как в задании: new ENEngine(config).addCollection(wc_La1_collection)', () => {
        const wc_La1_collection = new Collection().addWordCards(A1_WordCards);
        const engine = new ENEngine({})
            .addCollection(wc_La1_collection)
            .addCourse(grammar())
            .addCategory(new Category({ id: 'library', title: 'Библиотека' }).splitByLevel([A1_Articles, A1_Dialogs]));
        expect(engine.collection('col:deck-A1')?.level).toBe('A1');
        expect(engine.course('grammar')?.levels.size).toBe(4);
        expect(engine.category('library')?.collections.length).toBe(1);
        expect(engine.collections({ level: 'A1' }).map((c) => c.id)).toContain('library-A1');
        expect(engine.collections({ kind: 'lesson' }).length).toBe(5);
        expect(engine.sets('word-cards').map((s) => s.id)).toEqual(['deck-A1']);
        expect(engine.find('text', 'dialogs-A1')?.title).toBe('Диалоги A1');
        expect(() => engine.addCollection(new Collection({ id: 'library-A1' }))).toThrow();
    });
});
