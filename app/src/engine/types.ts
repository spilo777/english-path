// Типы движка: какие элементы у каждого вида контента, описания коллекций, курсов и категорий
import type { Level } from '@utils/level';
import type { Ach } from '../content/achievements/model';
import type { ContentKind, ContentSet } from '../content/base/object';
import type { Source } from '../content/base/source';
import type { BookItem } from '../content/books/sources';
import type { DictEntry } from '../content/dictionary/model';
import type { Exercise } from '../content/exercises/model';
import type { Lecture } from '../content/lectures/sources';
import type { StepKey } from '../content/lessons/progress';
import type { CourseIndex, UnitMeta } from '../content/lessons/model';
import type { Lesson } from '../content/lessons/sources';
import type { Letter } from '../content/letters/model';
import type { Channel } from '../content/listening/model';
import type { PlacementItem } from '../content/placement/sources';
import type { Tense } from '../content/tenses/model';
import type { TextItem } from '../content/texts/model';
import type { WordCard } from '../content/word-cards/model';
import type { Progress } from '../core/progress/types';

export type { DeepPartial, EngineConfig } from '../core/config/types';
export type { ContentKind, ContentSet, Source };

/** Элемент каждого вида контента */
export interface KindItems {
    'word-cards': WordCard;
    text: TextItem;
    book: BookItem;
    lecture: Lecture;
    tense: Tense;
    exercises: Exercise;
    lesson: Lesson;
    listening: Channel;
    letter: Letter;
    placement: PlacementItem;
    dictionary: DictEntry;
    achievement: Ach;
}

/** Набор контента любого вида */
export type AnySet = ContentSet<ContentKind, unknown>;
/** Набор контента вида K с типом элементов */
export type SetOf<K extends ContentKind> = ContentSet<K, KindItems[K]>;

export interface CollectionMeta {
    id: string;
    title: string;
    level?: Level;
    icon?: string;
    /** id категории, к которой относится коллекция */
    category?: string;
}

/** Готовая коллекция: неизменяемая, контент грузится по требованию */
export interface CollectionDef extends Readonly<CollectionMeta> {
    readonly sets: readonly AnySet[];
    /** Наборы одного вида */
    of<K extends ContentKind>(kind: K): SetOf<K>[];
    has(kind: ContentKind): boolean;
    /** Все элементы вида K из наборов коллекции, по порядку наборов */
    load<K extends ContentKind>(kind: K): Promise<KindItems[K][]>;
}

/** Открыт ли урок: по умолчанию — правила курса (по порядку, ниже стартового уровня — всё открыто) */
export type UnlockPolicy = (s: Progress, meta: UnitMeta, index: CourseIndex) => boolean;

export interface CourseMeta {
    id: string;
    title: string;
    icon?: string;
    category?: string;
}

/** Готовый курс: уровни — коллекции с уроками, дополнительные ветки (игры) */
export interface CourseDef extends Readonly<CourseMeta> {
    readonly levels: ReadonlyMap<Level, CollectionDef>;
    readonly tracks: Readonly<Record<string, CollectionDef>>;
    readonly steps: readonly StepKey[];
    /** Все коллекции курса: уровни по порядку, затем ветки */
    collections(): CollectionDef[];
    /** Индекс курса из его наборов уроков (как course.json): основа для разблокировки и текущего урока */
    index(): Source<CourseIndex>;
    isUnlocked(s: Progress, meta: UnitMeta, index: CourseIndex): boolean;
    /** Текущий урок: первый открытый и не сданный (со стартового уровня) */
    current(s: Progress, index: CourseIndex): UnitMeta | undefined;
    /** Доля пройденных шагов урока 0..1 */
    progress(s: Progress, unitId: string): number;
}

export interface CategoryMeta {
    id: string;
    title: string;
    icon?: string;
    /** Цветовой тон (класс оформления) */
    tone?: string;
}

/** Готовая категория: курсы и коллекции одного раздела */
export interface CategoryDef extends Readonly<CategoryMeta> {
    readonly courses: readonly CourseDef[];
    readonly collections: readonly CollectionDef[];
    /** Коллекции уровня (для категорий, разделённых по уровням) */
    byLevel(l: Level): CollectionDef[];
}
