// Даты: ключ дня YYYY-MM-DD в местном времени, неделя с понедельника

export const DAY = 86_400_000;

/** Ключ дня в местном времени: 2026-09-30 */
export const dayKey = (d: Date = new Date()): string =>
    d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

/** Ключ сегодняшнего дня */
export const today = (): string => dayKey(new Date());

/** Понедельник той же недели (новая дата, время не трогаем) */
export const mondayOf = (d: Date): Date => {
    const m = new Date(d);
    m.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return m;
};

/** Ключ понедельника недели, в которую попадает день (ключ YYYY-MM-DD) */
export const weekOf = (key: string): string => dayKey(mondayOf(new Date(key + 'T12:00:00')));
