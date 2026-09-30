// Числа

/** Ограничить число промежутком [lo, hi] */
export const clamp = (x: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, x));
