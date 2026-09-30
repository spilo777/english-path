// Упражнения: практика и тест урока, аудирование

export type Exercise =
    | { t: 'choice'; q: string; o: string[]; a: number; why?: string }
    | { t: 'gap'; q: string; a: string[]; why?: string; hint?: string }
    | { t: 'order'; a: string; ru: string }
    | { t: 'tr'; q: string; a: string[] }
    | { t: 'listen'; say: string; a: string[] };
