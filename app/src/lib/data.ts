// Типизированная загрузка контента. Загрузчик — в core/data; эти хуки переедут в content/* (шаг 5)
import { useJSON } from '../core/data/hooks';
import { paths } from '../core/data/paths';
import type {
    Book,
    BookMeta,
    CourseIndex,
    DeckWord,
    DeckWordRow,
    LessonUnit,
    Syllabus,
    Tense,
    TextItem,
    TopicCat,
    TopicCol,
    Unit,
} from './types';

export * from '../core/data';
export { useJSON };

export const useCourse = () => useJSON<CourseIndex>(paths.course);
/** Один юнит целиком (грамматика, упражнения, тексты) */
export const useUnit = (id: string | null) => useJSON<Unit>(id ? paths.unit(id) : null);
/** Компактный индекс всех юнитов: слова и метаданные текстов */
export const useLessons = () => useJSON<LessonUnit[]>(paths.lessons);
export const useSyllabus = () => useJSON<Syllabus>(paths.syllabus);
export const useLibrary = () => useJSON<TextItem[]>(paths.library);
export const useTopics = () => useJSON<{ cats: TopicCat[]; cols: TopicCol[] }>(paths.topics);
export const useTenses = () => useJSON<Tense[]>(paths.tenses);
export const useBookIndex = () => useJSON<BookMeta[]>(paths.bookIndex);
export const useBook = (id: string | null) => useJSON<Book>(id ? paths.book(id) : null);

let deckCache: DeckWord[] | null = null;
export const toDeck = (rows: DeckWordRow[]): DeckWord[] =>
    (deckCache =
        deckCache ||
        rows.map((w) => ({
            id: w[0].toLowerCase(),
            en: w[0],
            ru: w[1],
            ex: w[2],
            exRu: w[3],
            lvl: w[4],
            pos: w[5],
            rank: w[6],
        })));
/** Частотная колода ~4000 слов */
export function useDeck(enabled = true): DeckWord[] | undefined {
    const { data } = useJSON<DeckWordRow[]>(enabled ? paths.words : null);
    return data ? toDeck(data) : undefined;
}
