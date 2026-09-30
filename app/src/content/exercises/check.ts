// Проверка ответа в упражнении: нормализация (сокращения, регистр, знаки), одна опечатка в длинном ответе
import type { Exercise } from './model';

export function norm(s: string): string {
    let x = String(s).toLowerCase().replace(/[’‘`]/g, "'");
    x = x
        .replace(/\bcan't\b/g, 'cannot')
        .replace(/\bwon't\b/g, 'will not')
        .replace(/n't\b/g, ' not')
        .replace(/\bi'm\b/g, 'i am')
        .replace(/'re\b/g, ' are')
        .replace(/\b(he|she|it|that|what|where|who|there)'s\b/g, '$1 is')
        .replace(/'ll\b/g, ' will')
        .replace(/'ve\b/g, ' have');
    return x
        .replace(/[^a-z0-9' ]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export function lev(a: string, b: string): number {
    const m = a.length,
        n = b.length;
    const d: number[][] = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++)
        for (let j = 1; j <= n; j++)
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
}

/** Верно ли; typo — правильное написание, если ответ засчитан с одной опечаткой */
export function checkText(input: string, answers: string[]): { ok: boolean; typo?: string } {
    const v = norm(input);
    if (!v) return { ok: false };
    for (const a of answers) if (norm(a) === v) return { ok: true };
    for (const a of answers) {
        const na = norm(a);
        if (na.length > 5 && lev(na, v) === 1) return { ok: true, typo: a };
    }
    return { ok: false };
}

export function displayAnswer(e: Exercise): string {
    if (e.t === 'choice') return e.o[e.a];
    if (e.t === 'order') return e.a;
    return e.a[0];
}
