// Источники словаря. Быстрый поиск по нажатию — core/translate/lookup (читает те же файлы)
import { paths } from '../../core/data/paths';
import { jsonSource } from '../base';
import type { DictEntry } from './model';

/** Основной словарь: en → ru */
const toEntries = (d: Record<string, string>): DictEntry[] => Object.entries(d).map(([en, ru]) => ({ en, ru }));
export const dictEntries = jsonSource(paths.dict, toEntries);
/** Неправильные формы: went → go */
export const wordForms = jsonSource<Record<string, string>>(paths.forms);
