// Свежие видео YouTube-каналов для раздела «Слушать» (из RSS-лент YouTube, без ключей).
// GET → { channels: { <channelId>: [{ id, title, published, views }] }, at }.
// Только каналы из списка ниже (не открытый прокси); ответ кешируется на 3 часа.
const CHANNELS = [
  'UC9VWyvdF-91McG6kt27MeKA', // Mark Kulek
  'UC2L7vR43LKuBXXV2AentEMw', // Luke's English Podcast
  'UCZJJTxA36ZPNTJ1WFIByaeA', // Learn English with Bob the Canadian
];
const TTL = 3 * 3600 * 1000;
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' };

interface Video { id: string; title: string; published: string; views: number }
let cache: { at: number; channels: Record<string, Video[]> } | null = null;

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (!cache || Date.now() - cache.at > TTL) {
    const lists = await Promise.all(CHANNELS.map((c) => feed(c).catch(() => [] as Video[])));
    const channels: Record<string, Video[]> = {};
    CHANNELS.forEach((c, i) => { channels[c] = lists[i].length ? lists[i] : (cache?.channels[c] || []); });
    cache = { at: Date.now(), channels };
  }
  return new Response(JSON.stringify({ channels: cache.channels, at: cache.at }), {
    headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
  });
});
