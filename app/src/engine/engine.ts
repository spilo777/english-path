// Движок English Path: конфиг + всё содержимое приложения (коллекции, курсы, категории) + сервисы ядра.
//   export const engine = new ENEngine(config).addCourse(grammarCourse).addCollection(wc_La1_collection);
// Движок не грузит контент сам: наборы отдают данные по требованию страниц.
import type { Level } from '@utils/level';
import type { ContentKind } from '../content/base/object';
import { courseIndex, lessonsIndex } from '../content/lessons/sources';
import { ding } from '../core/audio/sfx';
import { speak, stopSpeech } from '../core/audio/speech';
import { Cloud, hasSession } from '../core/cloud/client';
import { setConfig } from '../core/config/current';
import type { DeepPartial, EngineConfig } from '../core/config/types';
import { touchLeague } from '../core/league/league';
import { toast } from '../core/notifications/notify';
import { getState, replaceState, subscribe, update } from '../core/progress/store';
import { autoTranslate } from '../core/translate/translate';
import { ensureDict, lookup } from '../core/translate/lookup';
import { Category, toCategory } from './category';
import { Collection, toCollection } from './collection';
import { Course, toCourse } from './course';
import { Registry } from './registry';
import type { AnySet, CategoryDef, CollectionDef, CourseDef, SetOf } from './types';

export class ENEngine {
    readonly config: EngineConfig;
    private readonly reg = new Registry();
    private started = false;
    private idled = false;

    /** Прогресс ученика (формат englishpath.v1 не меняется) */
    readonly progress = { get: getState, update, subscribe, replace: replaceState };

    /** Сервисы ядра для страниц */
    readonly services = {
        cloud: Cloud,
        speak,
        stopSpeech,
        ding,
        toast,
        translate: autoTranslate,
        lookup,
        ensureDict,
        touchLeague,
    };

    constructor(config?: DeepPartial<EngineConfig>) {
        this.config = setConfig(config);
    }

    addCollection(...c: (Collection | CollectionDef)[]): this {
        c.forEach((x) => this.reg.addCollection(toCollection(x)));
        return this;
    }

    addCourse(...c: (Course | CourseDef)[]): this {
        c.forEach((x) => this.reg.addCourse(toCourse(x)));
        return this;
    }

    addCategory(...c: (Category | CategoryDef)[]): this {
        c.forEach((x) => this.reg.addCategory(toCategory(x)));
        return this;
    }

    /** Запуск: облако сразу, если есть сохранённый вход. Повторные вызовы ничего не делают */
    start(): this {
        if (this.started) return this;
        this.started = true;
        if (hasSession()) Cloud.init();
        return this;
    }

    /** Первый экран нарисован: облако в фоне, лёгкие данные заранее, запись в лигу при входе */
    whenIdle(): this {
        if (this.idled) return this;
        this.idled = true;
        Cloud.init();
        [courseIndex, lessonsIndex].forEach((s) => s.load().catch(() => undefined));
        let userId: string | null = null;
        const onUser = () => {
            const u = Cloud.status().user;
            if (u && u.id !== userId) touchLeague();
            userId = u ? u.id : null;
        };
        Cloud.onChange(onUser);
        onUser();
        return this;
    }

    collections(filter: { level?: Level; category?: string; kind?: ContentKind } = {}): CollectionDef[] {
        return [...this.reg.collections.values()].filter(
            (c) =>
                (!filter.level || c.level === filter.level) &&
                (!filter.category || c.category === filter.category) &&
                (!filter.kind || c.has(filter.kind)),
        );
    }
    collection(id: string): CollectionDef | undefined {
        return this.reg.collections.get(id);
    }
    courses(): CourseDef[] {
        return [...this.reg.courses.values()];
    }
    course(id: string): CourseDef | undefined {
        return this.reg.courses.get(id);
    }
    categories(): CategoryDef[] {
        return [...this.reg.categories.values()];
    }
    category(id: string): CategoryDef | undefined {
        return this.reg.categories.get(id);
    }

    /** Все наборы одного вида из всех коллекций (без повторов) */
    sets<K extends ContentKind>(kind: K): SetOf<K>[] {
        return this.reg.sets(kind) as SetOf<K>[];
    }
    find(kind: ContentKind, id: string): AnySet | undefined {
        return this.reg.find(kind, id);
    }
}
