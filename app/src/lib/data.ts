// Загрузка контента из public/data/*.json: кеш в памяти + React-хук
import { useEffect, useState } from 'react';
import type { Book, BookMeta, CourseIndex, DeckWord, DeckWordRow, Level, Syllabus, Tense, TextItem, TopicCat, TopicCol, Unit } from './types';

const cache = new Map<string, Promise<unknown>>();
const ready = new Map<string, unknown>();

export const dataUrl = (path: string) => new URL('data/' + path, document.baseURI).toString();

export function loadJSON<T>(path: string): Promise<T> {
  if (!cache.has(path)) {
    const p = fetch(dataUrl(path)).then((r) => {
      if (!r.ok) throw new Error(`${path}: ${r.status}`);
      return r.json();
    }).then((j) => { ready.set(path, j); return j; }).catch((e) => { cache.delete(path); throw e; });
    cache.set(path, p);
  }
  return cache.get(path) as Promise<T>;
}

/** Уже загруженные данные (или undefined) — без ожидания */
export const peekJSON = <T,>(path: string): T | undefined => ready.get(path) as T | undefined;

export interface Loaded<T> { data: T | undefined; error: Error | null }

/** Хук: загрузить один или несколько файлов. Пока грузится — data undefined */
export function useJSON<T>(path: string | null): Loaded<T> {
  const [st, setSt] = useState<Loaded<T>>(() => ({ data: path ? peekJSON<T>(path) : undefined, error: null }));
  useEffect(() => {
    if (!path) { setSt({ data: undefined, error: null }); return; }
    const now = peekJSON<T>(path);
    if (now) { setSt({ data: now, error: null }); return; }
    let alive = true;
    setSt({ data: undefined, error: null });
    loadJSON<T>(path).then((d) => { if (alive) setSt({ data: d, error: null }); }).catch((e) => { if (alive) setSt({ data: undefined, error: e }); });
    return () => { alive = false; };
  }, [path]);
  return st;
}

// ───────── типизированные пути ─────────
export const paths = {
  course: 'course.json',
  units: (lvl: Level) => `units/${lvl}.json`,
  syllabus: 'syllabus.json',
  words: 'words.json',
  dict: 'dict.json',
  forms: 'forms.json',
  library: 'library.json',
  topics: 'topics.json',
  tenses: 'tenses.json',
  bookIndex: 'books/index.json',
  book: (id: string) => `books/${id}.json`,
};

export const useCourse = () => useJSON<CourseIndex>(paths.course);
export const useUnits = (lvl: Level | null) => useJSON<Unit[]>(lvl ? paths.units(lvl) : null);
export const useSyllabus = () => useJSON<Syllabus>(paths.syllabus);
export const useLibrary = () => useJSON<TextItem[]>(paths.library);
export const useTopics = () => useJSON<{ cats: TopicCat[]; cols: TopicCol[] }>(paths.topics);
export const useTenses = () => useJSON<Tense[]>(paths.tenses);
export const useBookIndex = () => useJSON<BookMeta[]>(paths.bookIndex);
export const useBook = (id: string | null) => useJSON<Book>(id ? paths.book(id) : null);

let deckCache: DeckWord[] | null = null;
export const toDeck = (rows: DeckWordRow[]): DeckWord[] =>
  (deckCache = deckCache || rows.map((w) => ({ id: w[0].toLowerCase(), en: w[0], ru: w[1], ex: w[2], exRu: w[3], lvl: w[4], pos: w[5], rank: w[6] })));
/** Частотная колода ~4000 слов */
export function useDeck(): DeckWord[] | undefined {
  const { data } = useJSON<DeckWordRow[]>(paths.words);
  return data ? toDeck(data) : undefined;
}
