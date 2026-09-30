// Источник времён: tenses.json (13 времён с объяснением и упражнениями тренажёра)
import { paths } from '../../core/data/paths';
import { jsonSource } from '../base';
import type { Tense } from './model';

export const tenses = jsonSource<Tense[]>(paths.tenses);
