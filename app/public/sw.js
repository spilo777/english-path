// Service worker: повторные заходы открываются мгновенно и работают без сети.
// - страница (index.html): сначала сеть (свежая версия после выкладки), если сеть медленная/нет — из кеша;
// - assets/* (имена с хешем, не меняются): из кеша, иначе сеть;
// - data/*.json, img/*: сразу из кеша, в фоне обновляем (следующий заход — уже свежие данные).
// Архив старого сайта (legacy/) и чужие адреса не трогаем.
const V = 'v1';
const PAGE = 'ep-page-' + V,
    ASSETS = 'ep-assets-' + V,
    DATA = 'ep-data-' + V;
const KEEP = [PAGE, ASSETS, DATA];
const NET_TIMEOUT = 3000;
const scope = new URL(self.registration.scope);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
    e.waitUntil(
        (async () => {
            for (const k of await caches.keys()) if (k.startsWith('ep-') && !KEEP.includes(k)) await caches.delete(k);
            await self.clients.claim();
        })(),
    );
});

const put = async (cacheName, req, res) => {
    if (res && res.ok && res.type === 'basic') {
        const c = await caches.open(cacheName);
        await c.put(req, res.clone());
    }
    return res;
};

async function page(req) {
    const cached = caches.match(scope.href, { cacheName: PAGE });
    const net = fetch(req).then((res) => (res.ok ? put(PAGE, scope.href, res) : res));
    net.catch(() => undefined); // если победила копия из кеша — ошибка сети не должна «всплывать»
    // сеть не ответила за 3 с, а копия есть — показываем копию (свежая сохранится для следующего раза)
    const slow = new Promise((r) => setTimeout(r, NET_TIMEOUT)).then(() => cached);
    try {
        const first = await Promise.race([net, slow]);
        if (first) return first;
        return await net;
    } catch {
        return (await cached) || Response.error();
    }
}

async function asset(req) {
    const hit = await caches.match(req, { cacheName: ASSETS });
    if (hit) return hit;
    const res = await fetch(req);
    await put(ASSETS, req, res);
    trim(ASSETS, 400);
    return res;
}

// data/*.json?v=<сборка>: внутри одной выкладки файл не меняется — из кеша навсегда
async function versioned(req) {
    return asset(req);
}

async function data(req, ev) {
    const hit = await caches.match(req, { cacheName: DATA });
    const net = fetch(req).then((res) => put(DATA, req, res));
    if (hit) {
        ev.waitUntil(net.catch(() => undefined));
        return hit;
    }
    return net;
}

// после нескольких выкладок в кеше копятся старые файлы — держим разумный объём
async function trim(name, max) {
    const c = await caches.open(name);
    const keys = await c.keys();
    for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
}

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
    const rel = url.pathname.slice(scope.pathname.length);
    if (rel.startsWith('legacy/') || rel === 'sw.js') return;
    if (req.mode === 'navigate') {
        if (rel === '' || rel === 'index.html') e.respondWith(page(req));
        return;
    }
    if (rel.startsWith('assets/')) {
        e.respondWith(asset(req));
        return;
    }
    if (rel.startsWith('data/') && url.searchParams.has('v')) {
        e.respondWith(versioned(req));
        return;
    }
    if (rel.startsWith('data/') || rel.startsWith('img/') || rel === 'manifest.webmanifest') {
        e.respondWith(data(req, e));
        return;
    }
});

// ───────── напоминания (web push) ─────────
self.addEventListener('push', (e) => {
    let m = { title: 'English Path', body: 'Пора позаниматься английским', url: scope.href, tag: 'daily' };
    try {
        if (e.data) m = { ...m, ...e.data.json() };
    } catch {
        /* не JSON — показываем стандартный текст */
    }
    e.waitUntil(
        self.registration.showNotification(m.title, {
            body: m.body,
            tag: m.tag,
            renotify: false,
            icon: new URL('img/icon-192.png', scope).href,
            badge: new URL('img/favicon-32.png', scope).href,
            data: { url: m.url },
        }),
    );
});

// нажатие на уведомление: открыть уже открытую вкладку сайта (и перейти по ссылке) или новую
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    const url = (e.notification.data && e.notification.data.url) || scope.href;
    e.waitUntil(
        (async () => {
            const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
            const mine = wins.find((w) => w.url.startsWith(scope.href) && !w.url.includes('/legacy/'));
            if (mine) {
                await mine.focus();
                if ('navigate' in mine) await mine.navigate(url).catch(() => undefined);
                return;
            }
            await self.clients.openWindow(url);
        })(),
    );
});
