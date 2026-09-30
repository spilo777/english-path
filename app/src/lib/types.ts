// Типы контента и прогресса — реэкспорт для старых импортов.
// Контент: content/*/model.ts; прогресс: core/progress/types; уровни: utils/level.
export type { Level } from '@utils/level';
export { LEVELS, LEVEL_ORDER } from '@utils/level';

export type { Book, BookMeta } from '../content/books/model';
export type { Exercise } from '../content/exercises/model';
export type { GrammarBlock, WalkPart, WalkStep } from '../content/lectures/model';
export type {
    BookRefs,
    CourseIndex,
    LessonUnit,
    Syllabus,
    SyllabusBook,
    SyllabusLesson,
    Unit,
    UnitMeta,
} from '../content/lessons/model';
export type { PlacementBank, PlacementQ } from '../content/placement/model';
export type { Tense, TenseEx } from '../content/tenses/model';
export type { LessonText, Question, TextItem } from '../content/texts/model';
export type { DeckWord, DeckWordRow, TopicCat, TopicCol, UnitWord, WordCard } from '../content/word-cards/model';

export type {
    Card,
    DayActivity,
    PlacementResult,
    Progress,
    Settings,
    UnitProgress,
    UserText,
} from '../core/progress/types';
