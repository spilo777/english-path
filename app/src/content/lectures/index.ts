// Слой content: лекции — грамматика уроков
import { A1_Lectures } from './a1';
import { A2_Lectures } from './a2';
import { B1_Lectures } from './b1';
import { B2_Lectures } from './b2';

export { A1_Lectures, A2_Lectures, B1_Lectures, B2_Lectures };
export const LEVEL_Lectures = [A1_Lectures, A2_Lectures, B1_Lectures, B2_Lectures];

export * from './define';
export type * from './model';
export * from './sources';
