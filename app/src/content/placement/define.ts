// Описание набора вопросов теста на уровень
import { defineSet, type ContentSet } from '../base';
import type { PlacementItem } from './sources';

export type PlacementSet = ContentSet<'placement', PlacementItem>;

export const definePlacement = (m: Omit<PlacementSet, 'kind'>): PlacementSet => defineSet('placement', m);
