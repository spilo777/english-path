// Слой content: уроки курса
import { A1_Lessons } from './a1';
import { A2_Lessons } from './a2';
import { B1_Lessons } from './b1';
import { B2_Lessons } from './b2';
import { Games_Lessons } from './games';

export { A1_Lessons, A2_Lessons, B1_Lessons, B2_Lessons, Games_Lessons };
/** Уроки по уровням, от A1 к B2 */
export const LEVEL_Lessons = [A1_Lessons, A2_Lessons, B1_Lessons, B2_Lessons];

export * from './define';
export * from './finish';
export type * from './model';
export * from './murphy';
export * from './progress';
export * from './sources';
