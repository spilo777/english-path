// Статус слова: новое / изучаю / знакомое / выученное. Единое правило «выучено» для всего приложения
import { DEFAULT_CONFIG } from '../config/defaults';
import { getConfig } from '../config/current';
import type { Card, Progress } from '../progress/types';

/** Выучено надолго: карточка на повторении с интервалом от стольких дней */
export const LEARNED_IVL = DEFAULT_CONFIG.srs.learnedIvl;
const learnedIvl = () => getConfig().srs.learnedIvl;

/** Карточка выучена надолго */
export const cardLearned = (c: Card | undefined): boolean => !!c && c.state === 'review' && c.ivl >= learnedIvl();

/** Статус слова для плиток «Новые / Изучаю / Знакомые / Выученные» */
export type WordKind = 'new' | 'learn' | 'fam' | 'done';
export const cardKind = (c: Card): WordKind =>
    c.state === 'new' ? 'new' : c.state === 'learn' || c.ivl < 7 ? 'learn' : c.ivl < learnedIvl() ? 'fam' : 'done';
/** Слово выучено: отмечено «знаю» или карточка выучена надолго */
export const isLearned = (s: Progress, id: string) => !!s.known[id] || cardLearned(s.cards[id]);
