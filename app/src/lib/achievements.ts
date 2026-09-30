// Перенесено: механика — core/achievements, достижения English Path — content/achievements.
// Реэкспорт, пока страницы не переведены на новые пути.
export * from '../content/achievements';
export { useAchContextData, useAchCtx } from '../content/achievements/hooks';
export {
    ACH_TIERS,
    levelStartXp,
    points,
    RANKS,
    rankLadder,
    tier,
    type AchTier,
    type Engagement,
    type RankStep,
    type TierCls,
} from '../core/achievements/runtime';
export { pctOf, pctReal } from '../core/achievements/rarity';
