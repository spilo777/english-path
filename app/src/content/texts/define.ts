// Описание набора текстов
import { defineSet, type ContentSet } from '../base';
import type { TextItem } from './model';

export type TextSet = ContentSet<'text', TextItem>;

export const defineTexts = (m: Omit<TextSet, 'kind'>): TextSet => defineSet('text', m);
