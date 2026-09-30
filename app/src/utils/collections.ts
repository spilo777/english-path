// Массивы и объекты-словари

/** Без повторов, порядок первого появления */
export const uniq = <T>(a: Iterable<T>): T[] => [...new Set(a)];

/** Ключи обоих объектов без повторов: сначала ключи a, затем новые ключи b */
export const unionKeys = (a: object, b: object): string[] => uniq([...Object.keys(a), ...Object.keys(b)]);
