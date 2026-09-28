// Перевод через Яндекс для English Path.
// Ключи хранятся в секретах Supabase (Edge Functions → Secrets), в код сайта они не попадают:
//   YANDEX_DICT_KEY            — ключ API Яндекс.Словаря (бесплатно): слова, части речи, варианты перевода
//   YANDEX_TRANSLATE_API_KEY   — API-ключ Yandex Cloud Translate (для фраз), необязательно
//   YANDEX_FOLDER_ID           — ID каталога Yandex Cloud, нужен вместе с ключом выше
// Вызывать может только вошедший пользователь (verify_jwt), чтобы ключ не расходовали посторонние.

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

type DictTr = { text: string; pos?: string; syn?: { text: string }[]; mean?: { text: string }[]; ex?: { text: string; tr?: { text: string }[] }[] };
type DictDef = { text: string; pos?: string; ts?: string; tr?: DictTr[] };

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'method' }, 405);

  let body: { q?: string; mode?: string };
  try { body = await req.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const q = String(body.q || '').trim().slice(0, 300);
  if (!q) return json({ error: 'empty' }, 400);
  const isWord = body.mode === 'word' || (body.mode !== 'text' && !/\s/.test(q));

  const dictKey = Deno.env.get('YANDEX_DICT_KEY');
  const trKey = Deno.env.get('YANDEX_TRANSLATE_API_KEY');
  const folder = Deno.env.get('YANDEX_FOLDER_ID');

  try {
    // Слово (или короткое сочетание) — словарная статья
    if (dictKey && (isWord || q.split(/\s+/).length <= 3)) {
      const url = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?lang=en-ru&ui=ru&key='
        + encodeURIComponent(dictKey) + '&text=' + encodeURIComponent(q);
      const r = await fetch(url);
      if (r.ok) {
        const d = await r.json() as { def?: DictDef[] };
        const defs = (d.def || []).slice(0, 4).map((df) => ({
          text: df.text,
          pos: df.pos || '',
          ts: df.ts || '',
          tr: (df.tr || []).slice(0, 5).map((t) => ({
            text: t.text,
            syn: (t.syn || []).slice(0, 3).map((s) => s.text),
            ex: (t.ex || []).slice(0, 1).map((e) => ({ en: e.text, ru: (e.tr || [])[0]?.text || '' })),
          })),
        }));
        if (defs.length) return json({ source: 'yandex-dict', defs });
      } else if (r.status === 401 || r.status === 402 || r.status === 403) {
        console.error('dict key problem', r.status);
      }
    }
    // Фраза/предложение — Yandex Cloud Translate
    if (trKey && folder) {
      const r = await fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Api-Key ' + trKey },
        body: JSON.stringify({ folderId: folder, texts: [q], sourceLanguageCode: 'en', targetLanguageCode: 'ru' }),
      });
      if (r.ok) {
        const d = await r.json() as { translations?: { text: string }[] };
        const text = d.translations?.[0]?.text;
        if (text) return json({ source: 'yandex-translate', text });
      } else console.error('translate error', r.status, await r.text());
    }
    if (!dictKey && !(trKey && folder)) return json({ error: 'not_configured' }, 501);
    return json({ error: 'not_found' }, 404);
  } catch (e) {
    console.error(e);
    return json({ error: 'upstream' }, 502);
  }
});
