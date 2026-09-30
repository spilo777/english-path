// Строки и тексты: экранирование HTML, id слова, объём текста

/** Экранировать строку для вставки в HTML */
export const esc = (x: string): string =>
    String(x).replace(
        /[&<>"']/g,
        (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
    );

/** id слова/карточки: английское слово в нижнем регистре без пробелов по краям */
export const wordId = (en: string): string => en.toLowerCase().trim();

/** Число слов в тексте */
export const wordsIn = (t: { text: string }): number => t.text.split(/\s+/).filter(Boolean).length;

/** Время чтения в минутах (90 слов в минуту, не меньше 1) */
export const minsIn = (t: { text: string }): number => Math.max(1, Math.round(wordsIn(t) / 90));

/** Число реплик в диалоге: строки вида «Имя: …» */
export const dlgLines = (t: { text: string }): number =>
    t.text.split(/\n+/).filter((l) => /^[A-Z][\w .'’-]{0,24}:/.test(l.trim())).length;
