// Все достижения одним набором (для каталога и движка)
import { defineSet, staticSource, type ContentSet } from '../base';
import { ACH_LIST } from './list';
import type { Ach } from './model';

export type AchievementSet = ContentSet<'achievement', Ach>;

export const All_Achievements: AchievementSet = defineSet('achievement', {
    id: 'achievements-all',
    title: 'Достижения',
    icon: 'trophy',
    source: staticSource('achievements', ACH_LIST),
});
