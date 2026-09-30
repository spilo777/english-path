// Конфиг движка: умолчания = прежние константы; переопределение действует на модули ядра
import { describe, expect, it } from 'vitest';
import { DEFAULT_CONFIG, getConfig, mergeConfig, setConfig } from '../src/core/config';
import { dayXp, defaults, STORE_KEY } from '../src/core/progress';
import { cardLearned, studyDayStart } from '../src/core/srs';
import type { Card } from '../src/core/progress/types';

describe('конфиг движка', () => {
    it('умолчания совпадают с тем, как сайт работал до движка', () => {
        const c = DEFAULT_CONFIG;
        expect(c.storage.progressKey).toBe('englishpath.v1');
        expect(c.storage.authKey).toBe('englishpath.auth');
        expect(c.storage.audioCache).toBe('ep.audio.v1');
        expect(c.storage.covers).toEqual({ key: 'ep.libimg.v3', ttlDays: 30 });
        expect(c.storage.feed).toEqual({ key: 'ep.yt', ttlHours: 3 });
        expect(c.course.passMark).toBe(0.8);
        expect(c.srs).toEqual({ dayStartHour: 4, leechAt: 8, learnedIvl: 21, newPerDay: 15 });
        expect(c.xp).toEqual({ review: 1, exercise: 2, read: 10 });
        expect(c.levels.active).toEqual(['A1', 'A2', 'B1', 'B2']);
        expect(STORE_KEY).toBe('englishpath.v1');
        expect(defaults().settings.newPerDay).toBe(15);
        expect(defaults().settings.rate).toBe(0.9);
    });

    it('слияние: объекты по полям, массивы целиком, undefined не затирает', () => {
        const m = mergeConfig(DEFAULT_CONFIG, {
            xp: { exercise: 5 },
            levels: { active: ['A1'] },
            app: { name: undefined },
        });
        expect(m.xp).toEqual({ review: 1, exercise: 5, read: 10 });
        expect(m.levels.active).toEqual(['A1']);
        expect(m.levels.all).toEqual(DEFAULT_CONFIG.levels.all);
        expect(m.app.name).toBe('English Path');
        expect(DEFAULT_CONFIG.xp.exercise).toBe(2);
    });

    it('setConfig накладывается на умолчания, а не на прошлый вызов', () => {
        setConfig({ xp: { read: 20 } });
        setConfig({ xp: { review: 3 } });
        expect(getConfig().xp).toEqual({ review: 3, exercise: 2, read: 10 });
        setConfig();
        expect(getConfig()).toEqual(DEFAULT_CONFIG);
    });

    it('очки за день считаются по весам из конфига', () => {
        const a = { reviews: 10, exercises: 5, reads: 1 };
        expect(dayXp(a)).toBe(10 + 10 + 10);
        expect(dayXp(undefined)).toBe(0);
        setConfig({ xp: { exercise: 1 } });
        try {
            expect(dayXp(a)).toBe(10 + 5 + 10);
        } finally {
            setConfig();
        }
    });

    it('повторения берут настройки из конфига в момент вызова', () => {
        const c = { state: 'review', ivl: 14 } as Card;
        expect(cardLearned(c)).toBe(false);
        const noon = new Date(2026, 8, 30, 12, 0).getTime();
        expect(new Date(studyDayStart(noon)).getHours()).toBe(4);
        setConfig({ srs: { learnedIvl: 14, dayStartHour: 6 } });
        try {
            expect(cardLearned(c)).toBe(true);
            expect(new Date(studyDayStart(noon)).getHours()).toBe(6);
        } finally {
            setConfig();
        }
    });
});
