// Умолчания и приведение сохранённого прогресса к полному виду
import { getConfig } from '../config/current';
import type { Progress, Settings } from './types';

export const defaultSettings = (): Settings => ({
    newPerDay: getConfig().srs.newPerDay,
    rate: getConfig().speech.rate,
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
