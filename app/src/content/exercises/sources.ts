// Упражнения урока: практика и тест из units/<id>.json
import { derive, type Source } from '../base';
import { unitBody } from '../lessons/sources';
import type { Exercise } from './model';

export type ExerciseMode = 'practice' | 'test';

const cache = new Map<string, Source<Exercise[]>>();
/** Упражнения урока: практика или тест */
export function exercisesOf(unitId: string, mode: ExerciseMode): Source<Exercise[]> {
    const key = 'ex:' + unitId + ':' + mode;
    let s = cache.get(key);
    if (!s) cache.set(key, (s = derive(unitBody(unitId), key, (u) => u[mode])));
    return s;
}
