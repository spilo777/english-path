// Описание набора словаря
import { defineSet, type ContentSet } from '../base';
import type { DictEntry } from './model';

export type DictionarySet = ContentSet<'dictionary', DictEntry>;

export const defineDictionary = (m: Omit<DictionarySet, 'kind'>): DictionarySet => defineSet('dictionary', m);
