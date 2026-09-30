// Все достижения одним набором (для каталога и движка). Описания грузятся отдельно — только когда нужны
import { defineSet, lazySource, type ContentSet } from '../base';
import type { Ach } from './model';

export type AchievementSet = ContentSet<'achievement', Ach>;

export const All_Achievements: AchievementSet = defineSet('achievement', {
    id: 'achievements-all',
    title: 'Достижения',
    icon: 'trophy',
    source: lazySource('achievements', () => import('./list').then((m) => m.ACH_LIST)),
});
