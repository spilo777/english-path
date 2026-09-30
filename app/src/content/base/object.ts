// Объекты среднего слоя: набор контента одного вида (слова A1, статьи B1, уроки A2…) с ленивым источником
import type { Level } from '@utils/level';
import type { Source } from './source';

export type ContentKind =
    | 'word-cards'
    | 'text'
    | 'book'
    | 'lecture'
    | 'tense'
    | 'exercises'
    | 'lesson'
    | 'listening'
    | 'letter'
    | 'placement'
    | 'dictionary'
    | 'achievement';

export interface ContentMeta {
    /** Уникальный id набора во всём приложении */
    id: string;
    kind: ContentKind;
    title: string;
    level?: Level;
    /** Имя иконки Phosphor */
    icon?: string;
    tags?: string[];
}

/** Набор контента: описание + источник элементов. Сам по себе ничего не грузит */
export interface ContentSet<K extends ContentKind = ContentKind, T = unknown> extends ContentMeta {
    readonly kind: K;
    readonly source: Source<T[]>;
}

/** Описать набор: вид + метаданные + источник. Результат заморожен */
export function defineSet<K extends ContentKind, T>(kind: K, m: Omit<ContentSet<K, T>, 'kind'>): ContentSet<K, T> {
    return Object.freeze({ ...m, kind });
}
