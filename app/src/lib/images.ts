// Картинки: обложки статей/книг (Википедия / Wikimedia Commons, только ссылки) и картинки-ассоциации для карточек
import { useEffect, useSyncExternalStore } from 'react';
import { DAY, getState, update } from './store';
import { LIB_COMMONS, LIB_WIKI } from './images-map';

// ───────── обложки ─────────
const COVER_KEY = 'ep.libimg.v3';
const COVER_TTL = 30 * DAY;

interface WikiPage { title?: string; thumbnail?: { source?: string } }
interface WikiResp { query?: { normalized?: { from: string; to: string }[]; redirects?: { from: string; to: string }[]; pages?: Record<string, WikiPage> } }
interface CommonsPage { index?: number; title?: string; imageinfo?: { mime?: string; thumburl?: string }[] }
interface CommonsResp { query?: { pages?: Record<string, CommonsPage> } }

let covers: Record<string, string> = {};
let cacheValid = false;
try {
  const c = JSON.parse(localStorage.getItem(COVER_KEY) || 'null') as { t: number; m: Record<string, string> } | null;
  if (c && c.m && Date.now() - c.t < COVER_TTL && Object.keys(c.m).length > 50) { covers = c.m; cacheValid = true; }
} catch { /* нет кеша */ }

let baseRequested = false; // пакет по картам LIB_WIKI/LIB_COMMONS
const extraWiki: Record<string, string> = {}; // книги и статьи: wiki из данных
const extraCommons: Record<string, string> = {}; // статьи: поиск в Commons из данных
const requested = new Set<string>();
let flushT: ReturnType<typeof setTimeout> | undefined;
let version = 0;
const listeners = new Set<() => void>();
const notify = () => { version++; listeners.forEach((l) => l()); };
const subscribe = (l: () => void) => { listeners.add(l); return () => { listeners.delete(l); }; };

function wikiBatch(titles: Record<string, string>, m: Record<string, string>): Promise<unknown> {
  const ids = Object.keys(titles);
  const chunks: string[][] = [];
  for (let i = 0; i < ids.length; i += 40) chunks.push(ids.slice(i, i + 40));
  return Promise.all(chunks.map((ch) => fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&pilicense=any&titles=' + encodeURIComponent(ch.map((k) => titles[k]).join('|')))
    .then((r) => r.json() as Promise<WikiResp>).then((j) => {
      const norm: Record<string, string> = {};
      (j.query?.normalized || []).concat(j.query?.redirects || []).forEach((n) => { norm[n.from] = n.to; });
      const byT: Record<string, string> = {};
      Object.values(j.query?.pages || {}).forEach((p) => { if (p.title && p.thumbnail?.source) byT[p.title] = p.thumbnail.source; });
      ch.forEach((k) => { let t = titles[k]; t = norm[t] || t; t = norm[t] || t; if (byT[t]) m[k] = byT[t]; });
    }).catch(() => undefined)));
}

function commonsBatch(queries: Record<string, string>, m: Record<string, string>): Promise<unknown> {
  return Promise.all(Object.entries(queries).map(([k, q]) => fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=3&gsrsearch=' + encodeURIComponent(q) + '&prop=imageinfo&iiprop=url|mime&iiurlwidth=480')
    .then((r) => r.json() as Promise<CommonsResp>).then((j) => {
      const p = Object.values(j.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0)).find((x) => x.imageinfo && /jpeg|png/.test(x.imageinfo[0]?.mime || ''));
      const u = p?.imageinfo?.[0]?.thumburl; if (u) m[k] = u;
    }).catch(() => undefined)));
}

// Один пакетный запрос на всё, что запросили компоненты за один кадр
function flush() {
  flushT = undefined;
  const m: Record<string, string> = {};
  const jobs: Promise<unknown>[] = [];
  const full = !cacheValid && !baseRequested;
  const titles: Record<string, string> = {};
  if (full) { baseRequested = true; Object.assign(titles, LIB_WIKI); Object.keys(LIB_WIKI).forEach((k) => requested.add(k)); }
  Object.entries(extraWiki).forEach(([k, t]) => { if (!requested.has(k) && !covers[k]) { titles[k] = t; requested.add(k); } });
  if (Object.keys(titles).length) jobs.push(wikiBatch(titles, m));
  const cq: Record<string, string> = {};
  Object.entries(extraCommons).forEach(([k, q]) => { if (!requested.has(k) && !covers[k]) { cq[k] = q; requested.add(k); } });
  if (Object.keys(cq).length) jobs.push(commonsBatch(cq, m));
  if (full) { Object.keys(LIB_COMMONS).forEach((k) => requested.add(k)); jobs.push(commonsBatch(LIB_COMMONS, m)); }
  if (!jobs.length) return;
  void Promise.all(jobs).then(() => {
    if (!Object.keys(m).length) { if (full) baseRequested = false; return; } // нет сети — попробуем при следующем показе
    covers = Object.assign({}, covers, m);
    if (full) cacheValid = Object.keys(covers).length > 50;
    if (Object.keys(covers).length > 50) { try { localStorage.setItem(COVER_KEY, JSON.stringify({ t: Date.now(), m: covers })); } catch { /* переполнение */ } }
    notify();
  });
}

function need(id: string, wiki?: string, commons?: string) {
  if (covers[id]) return;
  if (wiki && !LIB_WIKI[id] && !LIB_COMMONS[id]) extraWiki[id] = wiki;
  else if (commons && !LIB_WIKI[id] && !LIB_COMMONS[id]) extraCommons[id] = commons;
  const wanted = (!cacheValid && !baseRequested) || ((!!extraWiki[id] || !!extraCommons[id]) && !requested.has(id));
  if (wanted && !flushT) flushT = setTimeout(flush, 0);
}

/** Ссылка на обложку статьи/книги (или undefined, пока нет или не нашлась) */
export function useCover(id: string, wikiTitle?: string, commons?: string): string | undefined {
  useSyncExternalStore(subscribe, () => version, () => version);
  useEffect(() => { need(id, wikiTitle, commons); }, [id, wikiTitle, commons]);
  return covers[id];
}

// ───────── картинка-ассоциация для карточки ─────────
const imgPending: Record<string, Promise<string | null>> = {};
const BAD_IMG = /(flag|logo|map|icon|diagram|coat[_ ]of[_ ]arms|\.svg)/i;

interface Summary { type?: string; thumbnail?: { source?: string } }

/** Википедия (главное фото статьи), затем Wikimedia Commons. Результат — в прогрессе (imgCache) */
export function autoImage(en: string): Promise<string | null> {
  const k = en.toLowerCase().trim();
  const cache = getState().imgCache || {};
  if (k in cache) return Promise.resolve(cache[k] || null);
  if (k in imgPending) return imgPending[k];
  const title = encodeURIComponent(k.replace(/ /g, '_'));
  const wiki = fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + title)
    .then((r) => (r.ok ? r.json() as Promise<Summary> : null))
    .then((j) => {
      const src = j?.thumbnail?.source;
      return j && j.type === 'standard' && src && !BAD_IMG.test(src) ? src : null;
    });
  const commons = () => fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=' + encodeURIComponent(k + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime&iiurlwidth=480')
    .then((r) => r.json() as Promise<CommonsResp>)
    .then((j) => {
      const pages = Object.values(j.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
      const hit = pages.find((p) => p.imageinfo && /jpeg|png|webp/.test(p.imageinfo[0]?.mime || '') && !BAD_IMG.test(p.title || ''));
      return hit?.imageinfo?.[0]?.thumburl || null;
    });
  const p = wiki.then((u) => u || commons())
    .then((u) => {
      update((s) => { s.imgCache = s.imgCache || {}; s.imgCache[k] = u || ''; }, { silent: true });
      delete imgPending[k];
      return u;
    })
    .catch(() => { delete imgPending[k]; return null; }); // нет интернета — не кешируем
  imgPending[k] = p;
  return p;
}
