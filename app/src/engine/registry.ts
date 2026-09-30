// Реестр движка: коллекции, курсы и категории по id; поиск наборов контента
import type { ContentKind } from '../content/base/object';
import type { AnySet, CategoryDef, CollectionDef, CourseDef } from './types';

export class Registry {
    readonly collections = new Map<string, CollectionDef>();
    readonly courses = new Map<string, CourseDef>();
    readonly categories = new Map<string, CategoryDef>();

    addCollection(c: CollectionDef) {
        const had = this.collections.get(c.id);
        if (had && had !== c) throw new Error(`ENEngine: коллекция «${c.id}» уже есть`);
        this.collections.set(c.id, c);
    }

    addCourse(c: CourseDef) {
        if (this.courses.has(c.id)) throw new Error(`ENEngine: курс «${c.id}» уже есть`);
        this.courses.set(c.id, c);
        c.collections().forEach((col) => this.addCollection(col));
    }

    addCategory(c: CategoryDef) {
        if (this.categories.has(c.id)) throw new Error(`ENEngine: категория «${c.id}» уже есть`);
        this.categories.set(c.id, c);
        c.courses.forEach((co) => {
            if (!this.courses.has(co.id)) this.addCourse(co);
        });
        c.collections.forEach((col) => this.addCollection(col));
    }

    /** Все наборы (без повторов по id), по порядку добавления коллекций */
    sets(kind?: ContentKind): AnySet[] {
        const out = new Map<string, AnySet>();
        for (const c of this.collections.values())
            for (const s of c.sets) if ((!kind || s.kind === kind) && !out.has(s.id)) out.set(s.id, s);
        return [...out.values()];
    }

    find(kind: ContentKind, id: string): AnySet | undefined {
        return this.sets(kind).find((s) => s.id === id);
    }
}
