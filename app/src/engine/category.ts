// Категория: раздел приложения (Уроки, Слова, Библиотека…) — курсы и коллекции.
// Одну категорию можно разделить по уровням: splitByLevel сделает по коллекции на уровень.
import { levelRank, type Level } from '@utils/level';
import { Collection, toCollection } from './collection';
import { Course, toCourse } from './course';
import type { AnySet, CategoryDef, CategoryMeta, CollectionDef, CourseDef } from './types';

export class Category {
    private readonly meta: CategoryMeta;
    private readonly courseList: (Course | CourseDef)[] = [];
    private readonly colList: (Collection | CollectionDef)[] = [];

    constructor(meta: CategoryMeta) {
        this.meta = { ...meta };
    }

    addCourse(...c: (Course | CourseDef)[]): this {
        this.courseList.push(...c);
        return this;
    }

    addCollection(...c: (Collection | CollectionDef)[]): this {
        this.colList.push(...c);
        return this;
    }

    /** По коллекции на уровень: <id категории>-<уровень>; наборы без уровня — в <id>-all */
    splitByLevel(sets: readonly AnySet[], make?: (l: Level | undefined) => Collection): this {
        const groups = new Map<Level | undefined, AnySet[]>();
        for (const s of sets) groups.set(s.level, [...(groups.get(s.level) || []), s]);
        const order = [...groups.keys()].sort((a, b) => (a ? levelRank(a) : 99) - (b ? levelRank(b) : 99));
        for (const l of order) {
            const c = make ? make(l) : new Collection();
            c.id(this.meta.id + '-' + (l || 'all'))
                .title(l ? this.meta.title + ' ' + l : this.meta.title)
                .category(this.meta.id);
            if (l) c.level(l);
            if (this.meta.icon) c.icon(this.meta.icon);
            c.add(...(groups.get(l) || []));
            this.colList.push(c);
        }
        return this;
    }

    build(): CategoryDef {
        const courses = Object.freeze(this.courseList.map(toCourse));
        const collections = Object.freeze(
            this.colList.map((c) => {
                const def = toCollection(c);
                return def.category ? def : Object.freeze({ ...def, category: this.meta.id });
            }),
        );
        const def: CategoryDef = {
            ...this.meta,
            courses,
            collections,
            byLevel: (l) => collections.filter((c) => c.level === l),
        };
        return Object.freeze(def);
    }
}

/** Категория или её строитель → готовая категория */
export const toCategory = (c: Category | CategoryDef): CategoryDef => (c instanceof Category ? c.build() : c);
