// Типы прогресса ученика: localStorage['englishpath.v1'] и облако. Формат не менять (tests/progress-compat).
import type { Level } from '@utils/level';

export interface Card {
    id: string;
    en: string;
    ru: string;
    ex: string;
    exRu: string;
    src: string;
    state: 'new' | 'learn' | 'review';
    due: number;
    ivl: number;
    ease: number;
    reps: number;
    lapses: number;
    step: number;
    added: number;
    mod: number;
    img?: string;
    noImg?: boolean;
    /** трудное слово: забыто 8+ раз (как leech в Anki) */
    leech?: boolean;
}

export interface UnitProgress {
    steps: Record<string, boolean>;
    testBest: number | null;
    walk?: { part: number; step: number; done: boolean };
    /** время последнего изменения (для слияния с облаком и сброса урока) */
    mod?: number;
}

export interface DayActivity {
    reviews: number;
    exercises: number;
    reads: number;
    [k: string]: number;
}

export interface Settings {
    newPerDay: number;
    rate: number;
    voice: string;
    cardMode: 'en-ru' | 'ru-en' | 'mix';
    decks: Record<string, boolean>;
    autoImg?: boolean;
    liveVoice?: boolean;
    accent?: 'us' | 'uk';
    sfx?: boolean;
    /** С какого уровня начинать: уроки ниже открыты сразу (настройка или тест на уровень) */
    startLevel?: Level;
    /** Результат теста на уровень */
    placement?: PlacementResult;
}

/** level — с какого уровня начинать учиться; known — какой уровень уже есть (null — с нуля) */
export interface PlacementResult {
    level: Level;
    known?: Level | null;
    at: number;
    scores: Partial<Record<Level, number>>;
}

export interface UserText {
    id: string;
    title: string;
    text: string;
    level: string;
}

export interface Progress {
    cards: Record<string, Card>;
    units: Record<string, UnitProgress>;
    textsRead: Record<string, string>;
    /** просмотренные видео раздела «Слушать»: id → время */
    watched?: Record<string, number>;
    userTexts: UserText[];
    activity: Record<string, DayActivity>;
    newToday: { date: string; count: number };
    known: Record<string, number>;
    settings: Settings;
    // счётчики достижений: числа и вложенные объекты вперемешку
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stats: Record<string, any>;
    ach: Record<string, number>;
    quiz?: Record<string, number>;
    tenses?: Record<string, { best?: number; at?: number }>;
    bookPos?: Record<string, number>;
    imgCache?: Record<string, string>;
    deleted?: Record<string, number>;
    dayParts?: Record<string, number>;
    settingsMod?: number;
}
