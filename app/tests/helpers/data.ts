// Тестовый fetch: запросы к …/data/<путь> отдаёт из public/data (без сети), остальное — 404.
// Файлы подключаются лениво через import.meta.glob — грузятся только запрошенные.
const files = import.meta.glob<string>('../../public/data/**/*.json', { query: '?raw', import: 'default' });

/** Подменить глобальный fetch на чтение файлов из public/data. Возвращает функцию отката */
export function serveDataFromDisk(): () => void {
    const orig = globalThis.fetch;
    globalThis.fetch = (async (input: RequestInfo | URL) => {
        const url = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url);
        const m = /\/data\/(.+)$/.exec(url.pathname);
        const file = m ? files['../../public/data/' + decodeURIComponent(m[1])] : undefined;
        if (!file) return new Response('not found', { status: 404 });
        return new Response(await file(), { status: 200, headers: { 'content-type': 'application/json' } });
    }) as typeof fetch;
    return () => {
        globalThis.fetch = orig;
    };
}
