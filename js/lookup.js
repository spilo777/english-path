// Поиск слова в словаре: точное совпадение, неправильные формы, окончания -s/-es/-ed/-ing/-ies
(function (root) {
  function clean(w) {
    return String(w).toLowerCase().replace(/[’‘`]/g, "'").replace(/[àáâä]/g, 'a').replace(/[èéêë]/g, 'e').replace(/^[^a-z0-9'-]+|[^a-z0-9'-]+$/g, '').replace(/^['-]+|['-]+$/g, '');
  }

  function base(w) {
    const out = [w];
    const F = root.FORMS || {};
    if (F[w]) out.push(F[w]);
    if (w.endsWith("'s")) out.push(w.slice(0, -2));
    if (w.endsWith("s'")) out.push(w.slice(0, -1));
    if (w.endsWith('ies')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('es')) out.push(w.slice(0, -2));
    if (w.endsWith('s')) out.push(w.slice(0, -1));
    if (w.endsWith('ied')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('ed')) { out.push(w.slice(0, -2)); out.push(w.slice(0, -1)); }
    if (w.endsWith('ing')) { const b = w.slice(0, -3); out.push(b, b + 'e'); if (b.length > 2 && b[b.length - 1] === b[b.length - 2]) out.push(b.slice(0, -1)); }
    if (w.endsWith('ed') && w.length > 4 && w[w.length - 3] === w[w.length - 4]) out.push(w.slice(0, -3));
    // сравнительная и превосходная степень
    if (w.endsWith('iest')) out.push(w.slice(0, -4) + 'y');
    if (w.endsWith('ier')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('est')) { const b = w.slice(0, -3); out.push(b, b + 'e'); if (b[b.length - 1] === b[b.length - 2]) out.push(b.slice(0, -1)); }
    if (w.endsWith('er')) { const b = w.slice(0, -2); out.push(b, b + 'e'); if (b[b.length - 1] === b[b.length - 2]) out.push(b.slice(0, -1)); }
    // наречия и существительные на -ly, -ness, -ment
    if (w.endsWith('ily')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('ly')) { out.push(w.slice(0, -2)); out.push(w.slice(0, -2) + 'e'); }
    if (w.endsWith('iness')) out.push(w.slice(0, -5) + 'y');
    if (w.endsWith('ness')) out.push(w.slice(0, -4));
    // британское написание
    if (/ise$|ised$|ising$/.test(w)) out.push(w.replace(/is(e|ed|ing)$/, 'iz$1'));
    if (/our$/.test(w)) out.push(w.replace(/our$/, 'or'));
    return out;
  }
  function candidates(w) {
    const first = base(w);
    const out = [...first];
    first.slice(1).forEach((x) => base(x).forEach((y) => out.push(y))); // два шага: children's → children → child
    return [...new Set(out)].filter(Boolean);
  }

  // Возвращает [{word, tr}] — первым идёт наиболее точное совпадение
  function lookup(raw, dict) {
    const w = clean(raw);
    if (!w) return [];
    const res = [];
    const seen = new Set();
    for (const c of candidates(w)) {
      if (dict[c] && !seen.has(c)) { res.push({ word: c, tr: dict[c] }); seen.add(c); }
    }
    return res;
  }

  root.EngLookup = { clean, candidates, lookup };
})(typeof window !== 'undefined' ? window : globalThis);
