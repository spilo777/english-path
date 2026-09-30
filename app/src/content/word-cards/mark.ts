// Пример для карточки: изучаемое слово выделено **так**
export const exMark = (sentence: string | undefined, raw: string): string =>
    (sentence || '').replace(new RegExp('\\b(' + raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'i'), '**$1**');
