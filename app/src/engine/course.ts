// Курс: уроки по уровням, каждый уровень — коллекция с наборами уроков (и слов, текстов, грамматики):
//   new Course({ id: 'grammar', title: 'Грамматика' })
//       .level('A1', new Collection().addLessons(A1_Lessons).addWordCards(A1_WordCards))
//       .extraTrack('games', new Collection().addLessons(Games_Lessons))
// Правила открытия уроков и «текущего урока» — те же, что в content/lessons/progress.
import { levelRank, type Level } from '@utils/level';
import { all, derive, type Source } from '../content/base/source';
import type { CourseIndex, UnitMeta } from '../content/lessons/model';
import { currentUnit, isUnlocked, passed, STEPS, unitProgress, type StepKey } from '../content/lessons/progress';
import type { Lesson } from '../content/lessons/sources';
import type { Progress } from '../core/progress/types';
import { Collection, toCollection } from './collection';
import type { CollectionDef, CourseDef, CourseMeta, UnlockPolicy } from './types';

export class Course {
    private readonly meta: CourseMeta;
    private readonly lv = new Map<Level, Collection | CollectionDef>();
    private readonly tr: Record<string, Collection | CollectionDef> = {};
    private stepKeys: readonly StepKey[] = STEPS.map(([k]) => k);
    private policy: UnlockPolicy = isUnlocked;

    constructor(meta: CourseMeta) {
        this.meta = { ...meta };
    }

    /** Уровень курса: коллекция с уроками уровня (и сопутствующим контентом) */
    level(l: Level, c: Collection | CollectionDef): this {
        if (this.lv.has(l)) throw new Error(`Course ${this.meta.id}: уровень ${l} уже задан`);
        this.lv.set(l, c);
        return this;
    }

    /** Дополнительная ветка курса (например, уроки-игры) */
    extraTrack(name: string, c: Collection | CollectionDef): this {
        this.tr[name] = c;
        return this;
    }

    /** Шаги урока (по умолчанию: слова, грамматика, чтение, практика, тест) */
    steps(keys: readonly StepKey[]): this {
        this.stepKeys = keys.slice();
        return this;
    }

    /** Своё правило открытия уроков (по умолчанию — по порядку, ниже стартового уровня всё открыто) */
    unlock(p: UnlockPolicy): this {
        this.policy = p;
        return this;
    }

    build(): CourseDef {
        const levels = new Map<Level, CollectionDef>();
        const order = [...this.lv.keys()].sort((a, b) => levelRank(a) - levelRank(b));
        for (const l of order) levels.set(l, withLevel(toCollection(this.lv.get(l) as Collection | CollectionDef), l));
        const tracks: Record<string, CollectionDef> = {};
        for (const [k, c] of Object.entries(this.tr)) tracks[k] = toCollection(c);
        const steps = Object.freeze(this.stepKeys.slice());
        const stepPairs = STEPS.filter(([k]) => steps.includes(k));
        const policy = this.policy;
        const cols = () => [...levels.values(), ...Object.values(tracks)];
        const lessonSources = cols().flatMap((c) => c.of('lesson').map((s) => s.source));
        const lessons = all<Lesson[]>('course:' + this.meta.id + ':lessons', lessonSources);
        const index = derive(lessons, 'course:' + this.meta.id, toIndex);
        const def: CourseDef = {
            ...this.meta,
            levels,
            tracks: Object.freeze(tracks),
            steps,
            collections: cols,
            index: (): Source<CourseIndex> => index,
            isUnlocked: (s: Progress, meta: UnitMeta, idx: CourseIndex) => policy(s, meta, idx),
            current: (s: Progress, idx: CourseIndex) => currentWith(s, idx, policy),
            progress: (s: Progress, id: string) => unitProgress(s, id, stepPairs),
        };
        return Object.freeze(def);
    }
}

/** Текущий урок по правилам курса; со стандартным правилом — ровно как на странице курса */
function currentWith(s: Progress, idx: CourseIndex, policy: UnlockPolicy): UnitMeta | undefined {
    if (policy === isUnlocked) return currentUnit(s, idx);
    const main = idx.units.filter((u) => u.track === 'main');
    return main.find((u) => policy(s, u, idx) && !passed(s, u.id)) || main[main.length - 1];
}

/** Индекс курса из уроков его наборов: уровни по порядку, затем ветки */
const toIndex = (parts: Lesson[][]): CourseIndex => ({ levels: [], units: parts.flat() });

/** Коллекция уровня получает уровень, если он не задан */
const withLevel = (c: CollectionDef, l: Level): CollectionDef => (c.level ? c : Object.freeze({ ...c, level: l }));

/** Курс или его строитель → готовый курс */
export const toCourse = (c: Course | CourseDef): CourseDef => (c instanceof Course ? c.build() : c);
