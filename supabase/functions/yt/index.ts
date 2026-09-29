// Свежие видео YouTube-каналов для раздела «Слушать» (из RSS-лент YouTube, без ключей).
// GET → { channels: { <channelId>: [{ id, title, published, views }] }, meta: { <channelId>: { avatar, banner } }, at }.
// Аватар и шапка — со страницы канала (og:image и баннер), чтобы в приложении были настоящие картинки каналов.
// Только каналы из списка ниже (не открытый прокси); видео кешируются на 3 часа, картинки — на сутки.
const CHANNELS = [
  'UC9VWyvdF-91McG6kt27MeKA', // markkulek
  'UCZJJTxA36ZPNTJ1WFIByaeA', // learnenglishwithbobthecanadian
  'UC2L7vR43LKuBXXV2AentEMw', // lukesenglishpodcast
  'UCeTVoczn9NOZA9blls3YgUg', // EnglishClass101
  'UCKyTokYo0nK2OA-az-sDijA', // VOALearningEnglish
  'UCGLGVRO_9qDc8VDGGMTcUiQ', // SpeakEnglishWithTiffani
  'UC_XZoWueXyWuwVG4B_AEmmg', // ArnelsEverydayEnglish
  'UCKcZoWbqWzXSYzxQL9utJ1g', // AdeptEnglish
  'UCxJGMJbjokfnr2-s4_RXPxQ', // SpeakEnglishWithVanessa
  'UCHaHD477h-FeBbVh9Sh7syA', // bbclearningenglish
  'UCwk6ifONlkvqnoMF2uyA05g', // PapaTeachMe
  'UCz4tgANd4yy8Oe0iXCdSWfA', // EnglishwithLucy
  'UCKgpamMlm872zkGDcBJHYDg', // LearnEnglishWithTVSeries
  'UCvn_XCl_mgQmt3sD753zdJA', // rachelsenglish
  'UCajKaiBJSwYcDFbfMICpSpA', // AllEarsEnglishPodcast
  'UCa2aEN90vKFPyWcHsSMFKCA', // englishlearningforcuriousminds
];
const TTL = 3 * 3600 * 1000;
const META_TTL = 24 * 3600 * 1000; // картинки каналов меняются редко
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };

interface Video { id: string; title: string; published: string; views: number }
interface Meta { avatar: string; banner: string }
let cache: { at: number; channels: Record<string, Video[]> } | null = null;

/** по n запросов одновременно — страницы каналов тяжёлые (~2 МБ) */
async function pool<T, R>(xs: T[], n: number, f: (x: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(xs.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < xs.length) { const k = i++; out[k] = await f(xs[k]); } }));
  return out;
}

const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

async function feed(id: string): Promise<Video[]> {
  const r = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=' + id, { headers: { 'User-Agent': 'Mozilla/5.0 EnglishPath' } });
  if (!r.ok) return [];
  const xml = await r.text();
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => {
    const e = m[1];
    const pick = (re: RegExp) => (e.match(re) || [])[1] || '';
    return {
      id: pick(/<yt:videoId>([^<]+)<\/yt:videoId>/),
      title: decode(pick(/<title>([^<]*)<\/title>/)),
      published: pick(/<published>([^<]+)<\/published>/),
      views: +pick(/<media:statistics views="(\d+)"/) || 0,
    };
  }).filter((v) => /^[\w-]{11}$/.test(v.id)).slice(0, 15);
}

async function meta(id: string): Promise<Meta | null> {
  const r = await fetch('https://www.youtube.com/channel/' + id, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', 'Cookie': 'CONSENT=YES+1; SOCS=CAI', 'Accept-Language': 'en' },
  });
  if (!r.ok) return null;
  const html = await r.text();
  const og = (html.match(/<meta property="og:image" content="(https:\/\/yt3\.[^"]+)"/) || [])[1] || '';
  const ban = (html.match(/"(https:\/\/yt3\.googleusercontent\.com\/[^"]*fcrop64[^"]*)"/) || [])[1] || '';
  if (!og) return null;
  return { avatar: decode(og).replace(/=s\d+-/, '=s240-'), banner: decode(ban).replace(/=w\d+-/, '=w1280-') };
}

let metaCache: { at: number; meta: Record<string, Meta> } = { at: 0, meta: {} };
let metaBusy: Promise<void> | null = null;
/** картинки каналов обновляются в фоне и не задерживают ответ (у приложения есть свои сохранённые) */
function refreshMeta(): Promise<void> {
  if (metaBusy) return metaBusy;
  metaBusy = pool(CHANNELS, 3, (c) => meta(c).catch(() => null)).then((xs) => {
    const m: Record<string, Meta> = { ...metaCache.meta };
    CHANNELS.forEach((c, i) => { const x = xs[i]; if (x) m[c] = x; });
    metaCache = { at: Date.now(), meta: m };
  }).finally(() => { metaBusy = null; });
  return metaBusy;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (Date.now() - metaCache.at > META_TTL) {
    const job = refreshMeta();
    // deno-lint-ignore no-explicit-any
    const rt = (globalThis as any).EdgeRuntime;
    if (rt?.waitUntil) rt.waitUntil(job);
  }
  if (!cache || Date.now() - cache.at > TTL) {
    const lists = await pool(CHANNELS, 6, (c) => feed(c).catch(() => [] as Video[]));
    const channels: Record<string, Video[]> = {};
    CHANNELS.forEach((c, i) => { channels[c] = lists[i].length ? lists[i] : (cache?.channels[c] || []); });
    cache = { at: Date.now(), channels };
  }
  return new Response(JSON.stringify({ channels: cache.channels, meta: metaCache.meta, at: cache.at }), {
    headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
  });
});
