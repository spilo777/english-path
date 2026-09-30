// Редкость достижения: реальная доля учеников из облака (если учеников достаточно), иначе оценка из описания
import { Cloud } from '../cloud/client';

/** Реальный процент по всем ученикам из облака, иначе — оценка */
export const pctOf = (a: { id: string; pct: number }): number => {
    const r = Cloud.realPct(a.id);
    return r == null ? a.pct : Math.max(0.1, r);
};
/** Проценты — реальная статистика облака */
export const pctReal = () => Cloud.realPct('rev_1') != null;
