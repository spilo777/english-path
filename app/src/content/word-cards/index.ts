// Слой content: карточки слов
import { A1_WordCards } from './a1';
import { A2_WordCards } from './a2';
import { B1_WordCards } from './b1';
import { B2_WordCards } from './b2';
import { Phrases_WordCards } from './phrases';

export { A1_WordCards, A2_WordCards, B1_WordCards, B2_WordCards, Phrases_WordCards };
/** Колоды по уровням, от A1 к B2 */
export const LEVEL_WordCards = [A1_WordCards, A2_WordCards, B1_WordCards, B2_WordCards];

export * from './define';
export type * from './model';
export * from './sources';
