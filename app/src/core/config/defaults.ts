// Значения по умолчанию = то, как сайт работал до движка. Менять осознанно
import { ALL_LEVELS, LEVELS } from '@utils/level';
import type { EngineConfig } from './types';

export const DEFAULT_CONFIG: EngineConfig = {
    app: {
        name: 'English Path',
        build: (import.meta.env.VITE_BUILD as string | undefined) || '',
    },
    data: { root: 'data/' },
    storage: {
        progressKey: 'englishpath.v1',
        authKey: 'englishpath.auth',
        audioCache: 'ep.audio.v1',
        covers: { key: 'ep.libimg.v3', ttlDays: 30 },
        feed: { key: 'ep.yt', ttlHours: 3 },
    },
    levels: {
        all: ALL_LEVELS,
        active: LEVELS,
        names: { A1: 'Начальный', A2: 'Элементарный', B1: 'Средний', B2: 'Выше среднего', C1: 'Продвинутый' },
    },
    course: { passMark: 0.8, defaultStart: 'A1' },
    srs: { dayStartHour: 4, leechAt: 8, learnedIvl: 21, newPerDay: 15 },
    xp: { review: 1, exercise: 2, read: 10 },
    cloud: {
        url: 'https://rxpmzsresfuevebkirsk.supabase.co',
        key: 'sb_publishable_wIw_PhBUps-e0z3QlMBCIw_t3yiwJZD',
        sdkUrl: 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js',
        minUsersForRarity: 10,
        rarityTtlMinutes: 10,
        pushDebounceMs: 3000,
    },
    speech: {
        rate: 0.9,
        dictionaryApi: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
    },
};
