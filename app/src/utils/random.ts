// Случайный порядок и случайный элемент

/** Перемешанная копия массива (Фишер — Йетс), исходный не меняется */
export const shuffle = <T>(a: readonly T[]): T[] => {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
};

/** Случайный элемент непустого массива */
export const pickOne = <T>(a: readonly T[]): T => a[Math.floor(Math.random() * a.length)];
