// Хранилище прогресса: один объект в localStorage, подписка для React через useSyncExternalStore.
// Формат совместим со старым сайтом (ключ englishpath.v1) — прогресс и облачная синхронизация переносятся как есть.
import { useSyncExternalStore } from 'react';
import { DAY, dayKey, today } from '@utils/date';
import type { Progress, Settings, UnitProgress } from './types';

export const STORE_KEY = 'englishpath.v1';
export { DAY, today };
export const PASS = 0.8;

export const defaultSettings = (): Settings => ({
    newPerDay: 15,
    rate: 0.9,
    voice: '',
    cardMode: 'en-ru',
    decks: { A1: true, A2: true, B1: true, B2: true },
    autoImg: true,
    liveVoice: true,
    accent: 'us',
    sfx: true,
});

const defaultStats = () => ({
    lookups: 0,
    listened: 0,
    exStreak: 0,
    exStreakBest: 0,
    perfect: {},
    firstTryUnits: {},
    attempts: {},
    ruEn: 0,
    cleanSessions: 0,
    listenRight: 0,
});

export const defaults = (): Progress => ({
    cards: {},
    units: {},
    textsRead: {},
    userTexts: [],
    activity: {},
    newToday: { date: '', count: 0 },
    known: {},
    settings: defaultSettings(),
    stats: defaultStats(),
    ach: {},
});

/** Приводит любые сохранённые данные к полному виду Progress */
export function normalize(raw: unknown): Progress {
    const x = (raw && typeof raw === 'object' ? raw : {}) as Partial<Progress>;
    const s = Object.assign(defaults(), x);
    s.settings = Object.assign(defaultSettings(), x.settings || {});
    s.stats = Object.assign(defaultStats(), x.stats || {});
    s.known = s.known || {};
    s.ach = s.ach || {};
    s.cards = s.cards || {};
    s.units = s.units || {};
    return s;
}

function load(): Progress {
    try {
        return normalize(JSON.parse(localStorage.getItem(STORE_KEY) || '{}'));
    } catch {
        return defaults();
    }
}

let state: Progress = load();
let version = 0;
const listeners = new Set<() => void>();
const afterSave = new Set<(s: Progress) => void>();
let settingsSnap = JSON.stringify(state.settings);

function persist() {
    const snap = JSON.stringify(state.settings);
    if (snap !== settingsSnap) {
        state.settingsMod = Date.now();
        settingsSnap = snap;
    }
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
        /* переполнение — молча */
    }
}

/** Текущее состояние (изменять только через update) */
export const getState = (): Progress => state;

/** Изменить прогресс: функция получает объект и меняет его на месте */
export function update(fn: (s: Progress) => void, opts: { silent?: boolean } = {}) {
    fn(state);
    persist();
    version++;
    listeners.forEach((l) => l());
    if (!opts.silent) afterSave.forEach((f) => f(state));
}

/** Полностью заменить состояние (облако, импорт, сброс) */
export function replaceState(next: Progress) {
    state = normalize(next);
    settingsSnap = JSON.stringify(state.settings);
    persist();
    version++;
    listeners.forEach((l) => l());
}

export function subscribe(l: () => void) {
    listeners.add(l);
    return () => {
        listeners.delete(l);
    };
}
/** Вызывается после каждого сохранения (достижения, облако) */
export function onSave(f: (s: Progress) => void) {
    afterSave.add(f);
    return () => {
        afterSave.delete(f);
    };
}

/** React: перерисовать компонент при любом изменении прогресса */
export function useProgress(): Progress {
    useSyncExternalStore(
        subscribe,
        () => version,
        () => version,
    );
    return state;
}

// ───────── общие операции ─────────

/** Прогресс урока для изменения (вызывать внутри update): заодно отмечает время изменения */
export function unitState(s: Progress, id: string): UnitProgress {
    const u = (s.units[id] = s.units[id] || { steps: {}, testBest: null });
    u.mod = Date.now();
    return u;
}

/** «Начать заново»: пустой урок + надгробие, чтобы старая копия из облака не вернула пройденное */
export function resetUnit(s: Progress, id: string) {
    const t = Date.now();
    s.units[id] = { steps: {}, testBest: null, mod: t };
    s.deleted = s.deleted || {};
    s.deleted['unit:' + id] = t;
}

/** Учесть активность за сегодня (карточки, упражнения, чтение) и «особые» моменты для достижений */
export function track(s: Progress, kind: 'reviews' | 'exercises' | 'reads', n = 1) {
    const d = today();
    if (!s.activity[d]) {
        const prev = Object.keys(s.activity).sort().pop();
        if (prev && (new Date(d).getTime() - new Date(prev).getTime()) / DAY >= 7) s.stats.comeback = 1;
    }
    const now = new Date(),
        h = now.getHours();
    if (h >= 4 && h < 7) s.stats.early = 1;
    if (h >= 0 && h < 4) s.stats.owl = 1;
    if (h >= 3 && h < 5) s.stats.insomnia = 1;
    if (now.getMonth() === 0 && now.getDate() === 1) s.stats.newyear = 1;
    if (now.getMonth() === 9 && now.getDate() === 31) s.stats.halloween = 1;
    s.dayParts = s.dayParts || {};
    s.dayParts[d] = (s.dayParts[d] || 0) | (h < 12 ? 1 : h < 18 ? 2 : 4);
    if (s.dayParts[d] === 7) s.stats.allDay = 1;
    s.activity[d] = s.activity[d] || { reviews: 0, exercises: 0, reads: 0 };
    s.activity[d][kind] = (s.activity[d][kind] || 0) + n;
}

/** Ответ в любом упражнении: серия верных, статистика, активность */
export function recordAnswer(s: Progress, ok: boolean) {
    track(s, 'exercises');
    s.stats.ansAll = (s.stats.ansAll || 0) + 1; // для «Успеваемости» в профиле
    if (ok) s.stats.ansOk = (s.stats.ansOk || 0) + 1;
    s.stats.exStreak = ok ? (s.stats.exStreak || 0) + 1 : 0;
    s.stats.exStreakBest = Math.max(s.stats.exStreakBest || 0, s.stats.exStreak);
}

export function streak(s: Progress): number {
    const d = new Date();
    let n = 0;
    if (!s.activity[dayKey(d)]) d.setDate(d.getDate() - 1);
    while (s.activity[dayKey(d)]) {
        n++;
        d.setDate(d.getDate() - 1);
    }
    return n;
}

export function bestStreak(s: Progress): number {
    const days = Object.keys(s.activity).sort();
    let best = 0,
        cur = 0,
        prev: number | null = null;
    days.forEach((d) => {
        const t = new Date(d).getTime();
        cur = prev != null && Math.round((t - prev) / DAY) === 1 ? cur + 1 : 1;
        best = Math.max(best, cur);
        prev = t;
    });
    return best;
}

/** Надгробие для синхронизации удалений между устройствами */
export const tomb = (s: Progress, key: string) => {
    s.deleted = s.deleted || {};
    s.deleted[key] = Date.now();
};
