import { describe, expect, it } from 'vitest';
import { knownWordSet } from '../src/components/Enhance';
import type { CourseIndex, LessonUnit, Unit } from '@content/lessons';
import { defaults } from '@core/progress';
import courseJson from '../public/data/course.json';
import lessonsJson from '../public/data/lessons.json';

// индекс lessons.json и файлы units/<id>.json — из build/export_json.js
const course = courseJson as unknown as CourseIndex;
const lessons = lessonsJson as unknown as LessonUnit[];
const files = import.meta.glob('../public/data/units/*.json', { eager: true, import: 'default' }) as Record<
    string,
    Unit
>;
const unitFile = (id: string): Unit | undefined => files[`../public/data/units/${id}.json`];

// как wordsIn / dlgLines в components/Posters.tsx
const wordsIn = (t: string) => t.split(/\s+/).filter(Boolean).length;
const dlgLines = (t: string) => t.split(/\n+/).filter((l) => /^[A-Z][\w .'’-]{0,24}:/.test(l.trim())).length;

describe('lessons.json и units/<id>.json', () => {
    it('каждый юнит курса есть в индексе и в своём файле, лишних нет', () => {
        const ids = course.units.map((u) => u.id).sort();
        expect(lessons.map((u) => u.id).sort()).toEqual(ids);
        expect(
            Object.keys(files)
                .map((f) => f.replace(/^.*\/(.+)\.json$/, '$1'))
                .sort(),
        ).toEqual(ids);
        course.units.forEach((m) => {
            const l = lessons.find((u) => u.id === m.id)!;
            expect(l.level).toBe(m.level);
            expect(l.track).toBe(m.track);
        });
    });

    it('индекс совпадает с файлами юнитов: слова, id и счётчики текстов', () => {
        lessons.forEach((l) => {
            const u = unitFile(l.id);
            expect(u, l.id).toBeDefined();
            if (!u) return;
            expect(u.id).toBe(l.id);
            expect(l.words).toEqual(u.words.map((w) => w[0]));
            expect(l.texts.map((t) => t.id)).toEqual(u.texts.map((t) => t.id));
            l.texts.forEach((t, i) => {
                const full = u.texts[i];
                expect(t.title).toBe(full.title);
                expect(t.level).toBe(full.level || u.level);
                expect(t.words).toBe(wordsIn(full.text));
                expect(t.lines).toBe(dlgLines(full.text));
                expect(t.q).toBe((full.questions || []).length);
            });
        });
    });

    it('id текстов — t-<юнит>-<n> (по ним Reader находит файл юнита)', () => {
        lessons.forEach((l) => l.texts.forEach((t) => expect(t.id).toMatch(new RegExp('^t-' + l.id + '-\\d+$'))));
    });

    it('индекс компактный (без тел текстов и упражнений)', () => {
        expect(JSON.stringify(lessons).length).toBeLessThan(100_000);
    });
});

describe('knownWordSet по индексу', () => {
    it('слова предыдущих основных уроков знакомы, текущего и следующих — нет', () => {
        const s = defaults();
        const base = knownWordSet(s, course, []); // служебные слова
        const set = knownWordSet(s, course, lessons, 'a1-3');
        const prev = lessons.find((u) => u.id === 'a1-2')!;
        const cur = lessons.find((u) => u.id === 'a1-3')!;
        const w = prev.words.find((x) => !/[—–/-]/.test(x))!.toLowerCase();
        expect(set.has(w)).toBe(true);
        // слово, которого нет ни в одном предыдущем уроке
        const before = new Set(
            lessons
                .filter((u) => ['a1-0', 'a1-1', 'a1-2'].includes(u.id))
                .flatMap((u) => u.words.map((x) => x.toLowerCase())),
        );
        const fresh = cur.words
            .map((x) => x.toLowerCase())
            .find((x) => !before.has(x) && !/[\s—–/-]/.test(x) && x.length > 3 && !base.has(x));
        expect(fresh).toBeDefined();
        if (fresh) expect(set.has(fresh)).toBe(false);
    });

    it('без урока — только слова пройденных уроков', () => {
        const s = defaults();
        const a10 = lessons.find((u) => u.id === 'a1-0')!;
        const base = knownWordSet(s, course, []);
        const w = a10.words
            .map((x) => x.toLowerCase())
            .find((x) => !/[\s—–/-]/.test(x) && x.length > 3 && !base.has(x))!;
        expect(knownWordSet(s, course, lessons).has(w)).toBe(false);
        s.units['a1-0'] = { steps: {}, testBest: 1 };
        expect(knownWordSet(s, course, lessons).has(w)).toBe(true);
    });
});
