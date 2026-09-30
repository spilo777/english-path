// Курс: доступность уроков и прогресс по шагам. Работает с индексом курса (CourseIndex), без полных уроков.
import { levelRank, type Level } from '@utils/level';
import { getConfig } from '../../core/config/current';
import type { Progress } from '../../core/progress/types';
import type { CourseIndex, UnitMeta } from './model';

export type StepKey = 'words' | 'grammar' | 'reading' | 'practice' | 'test';
export const STEPS: [StepKey, string][] = [
    ['words', 'Слова'],
    ['grammar', 'Грамматика'],
    ['reading', 'Чтение'],
    ['practice', 'Практика'],
    ['test', 'Тест'],
];

const mainCache = new WeakMap<CourseIndex, UnitMeta[]>();
/** Основная линия уроков по порядку: уровень, затем номер */
export function mainUnits(course: CourseIndex): UnitMeta[] {
    let list = mainCache.get(course);
    if (!list) {
        list = course.units
            .filter((u) => u.track === 'main')
            .sort((a, b) => levelRank(a.level) - levelRank(b.level) || a.num - b.num);
        mainCache.set(course, list);
    }
    return list;
}

/** Тест урока сдан (≥ 80%) */
export function passed(s: Progress, id: string): boolean {
    const u = s.units[id];
    return !!(u && u.testBest != null && u.testBest >= getConfig().course.passMark);
}

/** Уровень, с которого человек начинает (настройка или тест на уровень); по умолчанию A1 */
export const startLevel = (s: Progress): Level => s.settings.startLevel || getConfig().course.defaultStart;
/** Урок ниже стартового уровня — открыт без прохождения */
export const belowStart = (s: Progress, level: string) => levelRank(level) < (levelRank(startLevel(s)) || 1);

/** Основные — по порядку (открыт, если сдан предыдущий); ниже стартового уровня — все открыты;
 *  игровые — после unlockAfter (или a1-0) */
export function isUnlocked(s: Progress, meta: UnitMeta, course: CourseIndex): boolean {
    if (belowStart(s, meta.level)) return true;
    if (meta.track === 'games') {
        const after = meta.unlockAfter || 'a1-0';
        const am = course.units.find((u) => u.id === after);
        return passed(s, after) || (!!am && belowStart(s, am.level));
    }
    const list = mainUnits(course);
    const i = list.findIndex((u) => u.id === meta.id);
    return i <= 0 || passed(s, list[i - 1].id) || belowStart(s, list[i - 1].level);
}

const stepDone = (s: Progress, id: string, k: StepKey) => (k === 'test' ? passed(s, id) : !!s.units[id]?.steps[k]);

/** Доля пройденных шагов 0..1 (steps — шаги курса, по умолчанию все пять) */
export function unitProgress(s: Progress, id: string, steps: readonly [StepKey, string][] = STEPS): number {
    return steps.filter(([k]) => stepDone(s, id, k)).length / steps.length;
}

/** Следующий непройденный шаг или null, если урок пройден целиком */
export function nextStep(
    s: Progress,
    id: string,
    steps: readonly [StepKey, string][] = STEPS,
): { k: StepKey; label: string } | null {
    for (const [k, label] of steps) if (!stepDone(s, id, k)) return { k, label };
    return null;
}

/** Текущий урок: первый открытый и не сданный, начиная со стартового уровня (или последний) */
export function currentUnit(s: Progress, course: CourseIndex): UnitMeta | undefined {
    const list = mainUnits(course);
    return (
        list.find((u) => !belowStart(s, u.level) && isUnlocked(s, u, course) && !passed(s, u.id)) ||
        list.find((u) => isUnlocked(s, u, course) && !passed(s, u.id)) ||
        list[list.length - 1]
    );
}

/** Адрес следующего шага текущего урока (для кнопок «Продолжить» и плана на день) */
export function stageHref(s: Progress, course: CourseIndex | undefined): string {
    const u = course ? currentUnit(s, course) : undefined;
    if (!u) return '#/course';
    const ns = nextStep(s, u.id);
    return `#/unit/${u.id}/${ns ? ns.k : 'words'}`;
}
