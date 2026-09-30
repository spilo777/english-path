// Источник теста на уровень: placement.json — вопросы по ступеням A1–B2
import { paths } from '../../core/data/paths';
import { derive, jsonSource } from '../base';
import type { PlacementBank, PlacementQ } from './model';

export const placementBank = jsonSource<PlacementBank>(paths.placement);

/** Вопрос вместе со ступенью */
export interface PlacementItem extends PlacementQ {
    stage: keyof PlacementBank;
}

function flatten(bank: PlacementBank): PlacementItem[] {
    const stages = Object.keys(bank) as (keyof PlacementBank)[];
    return stages.flatMap((stage) => bank[stage].map((q) => ({ ...q, stage })));
}

/** Все вопросы подряд, ступень за ступенью */
export const placementItems = derive(placementBank, 'placement:items', flatten);
