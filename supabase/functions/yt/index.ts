// Свежие видео YouTube-каналов для раздела «Слушать» (из RSS-лент YouTube, без ключей).
// GET → { channels: { <channelId>: [{ id, title, published, views }] }, meta: { <channelId>: { avatar, banner } }, at }.
// Аватар и шапка — со страницы канала (og:image и баннер), чтобы в приложении были настоящие картинки каналов.
// Только каналы из списка ниже (не открытый прокси); ответ кешируется на 3 часа.
const CHANNELS = [
  'UC9VWyvdF-91McG6kt27MeKA', // Mark Kulek
  'UC2L7vR43LKuBXXV2AentEMw', // Luke's English Podcast
  'UCZJJTxA36ZPNTJ1WFIByaeA', // Learn English with Bob the Canadian
];
const TTL = 3 * 3600 * 1000;
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };

interface Video { id: string; title: string; published: string; views: number }
interface Meta { avatar: string; banner: string }
let cache: { at: number; channels: Record<string, Video[]>; meta: Record<string, Meta> } | null = null;

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (!cache || Date.now() - cache.at > TTL) {
    const [lists, metas] = await Promise.all([
      Promise.all(CHANNELS.map((c) => feed(c).catch(() => [] as Video[]))),
      Promise.all(CHANNELS.map((c) => meta(c).catch(() => null))),
    ]);
    const channels: Record<string, Video[]> = {};
    const m: Record<string, Meta> = {};
    CHANNELS.forEach((c, i) => {
      channels[c] = lists[i].length ? lists[i] : (cache?.channels[c] || []);
      const x = metas[i] || cache?.meta[c];
      if (x) m[c] = x;
    });
    cache = { at: Date.now(), channels, meta: m };
  }
  return new Response(JSON.stringify({ channels: cache.channels, meta: cache.meta, at: cache.at }), {
    headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
  });
});
