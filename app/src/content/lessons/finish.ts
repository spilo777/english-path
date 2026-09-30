// Итог практики и теста урока: что записать в прогресс и куда вести дальше. Без React
import { getConfig } from '../../core/config/current';
import { unitState } from '../../core/progress/counters';
import type { Progress } from '../../core/progress/types';
import type { CourseIndex, UnitMeta } from './model';
import { mainUnits, passed } from './progress';

/** Результат теста проходной (по умолчанию от 80%) */
export const isPassing = (score: number): boolean => score >= getConfig().course.passMark;

/** Практика пройдена (вызывать внутри update) */
export function recordPractice(s: Progress, unitId: string) {
    unitState(s, unitId).steps.practice = true;
}

/** Записать результат теста (внутри update): попытки, «идеально», «с первого раза», «пересдал», лучший балл.
 *  wasPassed — был ли тест сдан до этой попытки */
export function recordTest(s: Progress, unitId: string, score: number, wasPassed: boolean) {
    const st = s.stats;
    st.attempts = st.attempts || {};
    st.perfect = st.perfect || {};
    st.firstTryUnits = st.firstTryUnits || {};
    st.attempts[unitId] = (st.attempts[unitId] || 0) + 1;
    if (score >= 1) st.perfect[unitId] = true;
    if (isPassing(score) && st.attempts[unitId] === 1) st.firstTryUnits[unitId] = true;
    if (isPassing(score) && st.attempts[unitId] > 1 && !wasPassed) st.retry = 1;
    const u = unitState(s, unitId);
    u.testBest = Math.max(u.testBest || 0, score);
}

/** После сданного теста: следующий урок основной линии и первый несданный игровой урок */
export function afterTest(s: Progress, course: CourseIndex, unitId: string): { next?: UnitMeta; game?: UnitMeta } {
    const main = mainUnits(course);
    const i = main.findIndex((m) => m.id === unitId);
    return {
        next: i >= 0 ? main[i + 1] : undefined,
        game: course.units.find((m) => m.track === 'games' && !passed(s, m.id)),
    };
}
