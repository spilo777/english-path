// Подбор текстов библиотеки под уровень ученика: «Для вас» и порядок внутри подборок
import { levelRank, type Level } from '@utils/level';
import type { Progress } from '../../core/progress/types';
import type { TextItem } from './model';
import { isDialog } from './sources';

/** Непрочитанные статьи своего уровня и на уровень выше (до n штук) */
export function textsForYou(lib: readonly TextItem[], s: Progress, lvl: Level, n = 12): TextItem[] {
    const LV = levelRank(lvl);
    const near = (t: TextItem) => t.level === lvl || levelRank(t.level) === LV + 1;
    const fits = (t: TextItem) => !isDialog(t) && !s.textsRead[t.id] && near(t);
    return lib.filter(fits).slice(0, n);
}

/** Порядок в подборке: сначала непрочитанные, ближе к своему уровню (сложнее на 2+ — в конец), потом проще */
export function byFit(s: Progress, lvl: Level): (x: TextItem, y: TextItem) => number {
    const LV = levelRank(lvl);
    const lo = (t: TextItem) => levelRank(t.level);
    const dist = (t: TextItem) => Math.abs(lo(t) - LV) + (lo(t) > LV + 1 ? 2 : 0);
    return (x, y) => (s.textsRead[x.id] ? 1 : 0) - (s.textsRead[y.id] ? 1 : 0) || dist(x) - dist(y) || lo(x) - lo(y);
}

/** Тексты подборки (категории) в порядке byFit, до n штук */
export function textsInCat(lib: readonly TextItem[], s: Progress, lvl: Level, cat: string, n = 14): TextItem[] {
    const inCat = lib.filter((t) => t.cat === cat);
    return inCat.sort(byFit(s, lvl)).slice(0, n);
}
