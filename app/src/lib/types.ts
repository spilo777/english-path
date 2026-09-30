// Типы контента (JSON из public/data) и прогресса ученика

import type { Level } from '@utils/level';
// уровни живут в utils/level; реэкспорт для старых импортов
export type { Level };
export { LEVELS, LEVEL_ORDER } from '@utils/level';

/** Слово урока: [english, перевод, пример, перевод примера] */
export type UnitWord = [string, string, string, string];
/** Слово частотной колоды: [english, перевод, пример, перевод примера, уровень, часть речи, ранг] */
export type DeckWordRow = [string, string, string, string, Level, string, number];

export interface DeckWord {
    id: string;
    en: string;
    ru: string;
    ex: string;
    exRu: string;
    lvl: Level;
    pos: string;
    rank: number;
}

export interface Question {
    q: string;
    o: string[];
    a: number;
}

export interface TextItem {
    id: string;
    title: string;
    level: string;
    text: string;
    questions?: Question[];
    // только у статей библиотеки
    cat?: string;
    about?: string;
    ru?: string;
    kind?: 'dialogue' | string;
    /** обложка: статья английской Википедии (главное фото) или поиск в Wikimedia Commons */
    wiki?: string;
    /** обложка, подобранная при сборке (build/covers.mjs) */
    img?: string;
    commons?: string;
}

export type Exercise =
    | { t: 'choice'; q: string; o: string[]; a: number; why?: string }
    | { t: 'gap'; q: string; a: string[]; why?: string; hint?: string }
    | { t: 'order'; a: string; ru: string }
    | { t: 'tr'; q: string; a: string[] }
    | { t: 'listen'; say: string; a: string[] };

export interface GrammarBlock {
    title: string;
    html: string;
}

export type WalkStep =
    | {
          t: 'idea';
          text: string;
          lit?: [string, string][];
          ex?: [string, string][];
          rows?: string[][];
          bad?: string;
          good?: string;
          tip?: string;
          opt?: boolean;
      }
    | { t: 'check'; q: string; ru?: string; o: string[]; a: number; why?: string };
export interface WalkPart {
    title: string;
    steps: WalkStep[];
}

export interface BookRefs {
    red?: number[];
    blue?: number[];
    green?: number[];
}

export interface UnitMeta {
    id: string;
    level: Level;
    num: number;
    track: 'main' | 'games';
    title: string;
    summary: string;
    books: BookRefs | null;
    unlockAfter: string | null;
    hasWalk: boolean;
}

export interface Unit extends Omit<UnitMeta, 'books' | 'unlockAfter' | 'hasWalk'> {
    books?: BookRefs;
    unlockAfter?: string;
    grammar: GrammarBlock[];
    walk?: WalkPart[];
    words: UnitWord[];
    texts: TextItem[];
    practice: Exercise[];
    test: Exercise[];
}

/** Текст урока в индексе lessons.json: без тела, счётчики посчитаны при экспорте */
export interface LessonText {
    id: string;
    title: string;
    level: string;
    words: number;
    lines: number;
    q: number;
}
/** Юнит в индексе lessons.json (порядок — как в старых units/<уровень>.json) */
export interface LessonUnit {
    id: string;
    level: Level;
    track: 'main' | 'games';
    words: string[];
    texts: LessonText[];
}

export interface CourseIndex {
    levels: { id: Level; title: string; goal: string }[];
    units: UnitMeta[];
}

export interface SyllabusBook {
    name: string;
    short: string;
    author: string;
    level: string;
    units: Record<string, string>;
}
export interface SyllabusLesson {
    id: string;
    level: Level;
    title: string;
    red: number[];
    blue: number[];
    green: number[];
}
export interface Syllabus {
    books: Record<'red' | 'blue' | 'green', SyllabusBook>;
    lessons: SyllabusLesson[];
}

export interface BookMeta {
    id: string;
    title: string;
    author: string;
    level: Level;
    kind: 'adapted' | 'original';
    wiki?: string;
    img?: string;
    ru?: string;
    chapters: number;
    words: number;
}
export interface Book extends Omit<BookMeta, 'chapters'> {
    chapters: { title: string; text: string }[];
}

export interface TopicCat {
    id: string;
    title: string;
    tone: string;
}
export interface TopicCol {
    id: string;
    cat: string;
    title: string;
    icon: string;
    level: Level;
    words: UnitWord[];
}

export interface TenseEx {
    q: string;
    v?: string;
    o: string[];
    a: number;
    why?: string;
}
export interface Tense {
    id: string;
    name: string;
    ru: string;
    time: 'present' | 'past' | 'future';
    aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous' | 'going-to';
    level: Level;
    freq: number;
    one: string;
    formula: { plus: string; minus: string; q: string };
    markers: string[];
    compare: string[];
    html: string;
    ex: TenseEx[];
}

// ───────── тест на уровень ─────────

/** Вопрос теста на уровень: q — фраза с ___ или вопрос, ru — перевод/подсказка, o — варианты, a — индекс верного */
export interface PlacementQ {
    q: string;
    ru?: string;
    o: string[];
    a: number;
}
export type PlacementBank = Record<'A1' | 'A2' | 'B1' | 'B2', PlacementQ[]>;

// прогресс — в core/progress/types; реэкспорт для старых импортов
export type {
    Card,
    DayActivity,
    PlacementResult,
    Progress,
    Settings,
    UnitProgress,
    UserText,
} from '../core/progress/types';
