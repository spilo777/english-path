// Типы контента (JSON из public/data) и прогресса ученика

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
export const LEVEL_ORDER: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };

/** Слово урока: [english, перевод, пример, перевод примера] */
export type UnitWord = [string, string, string, string];
/** Слово частотной колоды: [english, перевод, пример, перевод примера, уровень, часть речи, ранг] */
export type DeckWordRow = [string, string, string, string, Level, string, number];

export interface DeckWord { id: string; en: string; ru: string; ex: string; exRu: string; lvl: Level; pos: string; rank: number }

export interface Question { q: string; o: string[]; a: number }

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
}

export type Exercise =
  | { t: 'choice'; q: string; o: string[]; a: number; why?: string }
  | { t: 'gap'; q: string; a: string[]; why?: string; hint?: string }
  | { t: 'order'; a: string; ru: string }
  | { t: 'tr'; q: string; a: string[] }
  | { t: 'listen'; say: string; a: string[] };

export interface GrammarBlock { title: string; html: string }

export type WalkStep =
  | { t: 'idea'; text: string; lit?: [string, string][]; ex?: [string, string][]; rows?: string[][]; bad?: string; good?: string; tip?: string; opt?: boolean }
  | { t: 'check'; q: string; ru?: string; o: string[]; a: number; why?: string };
export interface WalkPart { title: string; steps: WalkStep[] }

export interface BookRefs { red?: number[]; blue?: number[]; green?: number[] }

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

export interface CourseIndex { levels: { id: Level; title: string; goal: string }[]; units: UnitMeta[] }

export interface SyllabusBook { name: string; short: string; author: string; level: string; units: Record<string, string> }
export interface SyllabusLesson { id: string; level: Level; title: string; red: number[]; blue: number[]; green: number[] }
export interface Syllabus { books: Record<'red' | 'blue' | 'green', SyllabusBook>; lessons: SyllabusLesson[] }

export interface BookMeta { id: string; title: string; author: string; level: Level; kind: 'adapted' | 'original'; wiki?: string; ru?: string; chapters: number; words: number }
export interface Book extends Omit<BookMeta, 'chapters'> { chapters: { title: string; text: string }[] }

export interface TopicCat { id: string; title: string; tone: string }
export interface TopicCol { id: string; cat: string; title: string; icon: string; level: Level; words: UnitWord[] }

export interface TenseEx { q: string; v?: string; o: string[]; a: number; why?: string }
export interface Tense {
  id: string; name: string; ru: string;
  time: 'present' | 'past' | 'future';
  aspect: 'simple' | 'continuous' | 'perfect' | 'perfect-continuous' | 'going-to';
  level: Level; freq: number; one: string;
  formula: { plus: string; minus: string; q: string };
  markers: string[]; compare: string[]; html: string; ex: TenseEx[];
}

// ───────── прогресс ─────────
export interface Card {
  id: string; en: string; ru: string; ex: string; exRu: string; src: string;
  state: 'new' | 'learn' | 'review';
  due: number; ivl: number; ease: number; reps: number; lapses: number; step: number;
  added: number; mod: number; img?: string; noImg?: boolean;
}

export interface UnitProgress {
  steps: Record<string, boolean>;
  testBest: number | null;
  walk?: { part: number; step: number; done: boolean };
}

export interface DayActivity { reviews: number; exercises: number; reads: number; [k: string]: number }

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
}

export interface UserText { id: string; title: string; text: string; level: string }

export interface Progress {
  cards: Record<string, Card>;
  units: Record<string, UnitProgress>;
  textsRead: Record<string, string>;
  userTexts: UserText[];
  activity: Record<string, DayActivity>;
  newToday: { date: string; count: number };
  known: Record<string, number>;
  settings: Settings;
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
