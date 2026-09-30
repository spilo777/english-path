// Типизированная загрузка контента. Загрузчик — в core/data; эти хуки переедут в content/* (шаг 5)
import { useJSON } from '../core/data/hooks';
import { paths } from '../core/data/paths';
import { useSource } from '../content/base/hooks';
import { deck } from '../content/word-cards/sources';
import type {
    Book,
    BookMeta,
    CourseIndex,
    DeckWord,
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

/** Частотная колода ~4000 слов (источник — content/word-cards) */
export function useDeck(enabled = true): DeckWord[] | undefined {
    return useSource(enabled ? deck : null).data;
}
