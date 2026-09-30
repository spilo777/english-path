// Коллекция: группа наборов контента (слова, тексты, уроки…), собирается строителем:
//   new Collection().addWordCards(A1_WordCards).addTexts(A1_Articles, A1_Dialogs)
// Коллекция ничего не грузит сама: контент приходит из источников наборов по требованию.
import type { Level } from '@utils/level';
import type { AchievementSet } from '../content/achievements/all';
import type { ContentKind } from '../content/base/object';
import type { BookSet } from '../content/books/define';
import type { DictionarySet } from '../content/dictionary/define';
import type { ExerciseSet } from '../content/exercises/define';
import type { LectureSet } from '../content/lectures/define';
import type { LessonSet } from '../content/lessons/define';
import type { LetterSet } from '../content/letters/define';
import type { ListeningSet } from '../content/listening/define';
import type { PlacementSet } from '../content/placement/define';
import type { TenseSet } from '../content/tenses/define';
import type { TextSet } from '../content/texts/define';
import type { WordCardSet } from '../content/word-cards/define';
import type { AnySet, CollectionDef, CollectionMeta, KindItems, SetOf } from './types';

export class Collection {
    private readonly meta: Partial<CollectionMeta>;
    private readonly list: AnySet[] = [];

    constructor(meta: Partial<CollectionMeta> = {}) {
        this.meta = { ...meta };
    }

    id(v: string): this {
        this.meta.id = v;
        return this;
    }
    title(v: string): this {
        this.meta.title = v;
        return this;
    }
    level(v: Level): this {
        this.meta.level = v;
        return this;
    }
    icon(v: string): this {
        this.meta.icon = v;
        return this;
    }
    category(v: string): this {
        this.meta.category = v;
        return this;
    }

    addWordCards(...sets: WordCardSet[]): this {
        return this.addKind('word-cards', sets);
    }
    addTexts(...sets: TextSet[]): this {
        return this.addKind('text', sets);
    }
    addBooks(...sets: BookSet[]): this {
        return this.addKind('book', sets);
    }
    addLectures(...sets: LectureSet[]): this {
        return this.addKind('lecture', sets);
    }
    addTenses(...sets: TenseSet[]): this {
        return this.addKind('tense', sets);
    }
    addExercises(...sets: ExerciseSet[]): this {
        return this.addKind('exercises', sets);
    }
    addLessons(...sets: LessonSet[]): this {
        return this.addKind('lesson', sets);
    }
    addListenings(...sets: ListeningSet[]): this {
        return this.addKind('listening', sets);
    }
    addLetters(...sets: LetterSet[]): this {
        return this.addKind('letter', sets);
    }
    addPlacement(...sets: PlacementSet[]): this {
        return this.addKind('placement', sets);
    }
    addDictionaries(...sets: DictionarySet[]): this {
        return this.addKind('dictionary', sets);
    }
    addAchievements(...sets: AchievementSet[]): this {
        return this.addKind('achievement', sets);
    }

    /** Любой набор (для новых видов контента, пока у них нет своего метода) */
    add(...sets: AnySet[]): this {
        this.list.push(...sets);
        return this;
    }

    private addKind(kind: ContentKind, sets: AnySet[]): this {
        for (const s of sets) {
            if (!s || s.kind !== kind) throw new Error(`Collection: ожидался набор «${kind}», получен «${s?.kind}»`);
        }
        return this.add(...sets);
    }

    /** Готовая коллекция. Без id — id из наборов (col:deck-A1), без названия — название первого набора */
    build(): CollectionDef {
        const sets = Object.freeze(this.list.slice());
        const seen = new Set<string>();
        for (const s of sets) {
            if (seen.has(s.id)) throw new Error(`Collection: набор «${s.id}» добавлен дважды`);
            seen.add(s.id);
        }
        const levels = [...new Set(sets.map((s) => s.level))];
        const id = this.meta.id || 'col:' + (sets.map((s) => s.id).join('+') || 'empty');
        const def: CollectionDef = {
            id,
            title: this.meta.title || sets[0]?.title || id,
            level: this.meta.level || (levels.length === 1 ? levels[0] : undefined),
            icon: this.meta.icon || sets[0]?.icon,
            category: this.meta.category,
            sets,
            of: <K extends ContentKind>(kind: K) => sets.filter((s) => s.kind === kind) as SetOf<K>[],
            has: (kind) => sets.some((s) => s.kind === kind),
            load: async <K extends ContentKind>(kind: K) => {
                const parts = await Promise.all(def.of(kind).map((s) => s.source.load()));
                return parts.flat() as KindItems[K][];
            },
        };
        return Object.freeze(def);
    }
}

/** Коллекция или её строитель → готовая коллекция */
export const toCollection = (c: Collection | CollectionDef): CollectionDef => (c instanceof Collection ? c.build() : c);
