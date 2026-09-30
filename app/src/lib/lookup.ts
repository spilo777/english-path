// Поиск слова в словаре: точное совпадение, неправильные формы, окончания -s/-es/-ed/-ing/-ies и т.д.
// Словарь = dict.json (en→ru) + слова уроков (addToDict) + частотная колода words.json.
import { loadJSON, paths } from './data';
import type { DeckWordRow } from './types';

type Dict = Record<string, string>;

let DICT: Dict = {};
let FORMS: Dict = {};
let ready = false;
let loading: Promise<void> | null = null;
// слова уроков, добавленные до загрузки словаря
const pending: [string, string][] = [];

/** Нормализует слово: нижний регистр, прямые апострофы, без пунктуации по краям */
export function clean(w: string): string {
    return String(w)
        .toLowerCase()
        .replace(/[’‘`]/g, "'")
        .replace(/[àáâä]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/^[^a-z0-9'-]+|[^a-z0-9'-]+$/g, '')
        .replace(/^['-]+|['-]+$/g, '');
}

function base(w: string): string[] {
    const out = [w];
    if (FORMS[w]) out.push(FORMS[w]);
    if (w.endsWith("'s")) out.push(w.slice(0, -2));
    if (w.endsWith("s'")) out.push(w.slice(0, -1));
    if (w.endsWith('ies')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('es')) out.push(w.slice(0, -2));
    if (w.endsWith('s')) out.push(w.slice(0, -1));
    if (w.endsWith('ied')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('ed')) {
        out.push(w.slice(0, -2));
        out.push(w.slice(0, -1));
    }
    if (w.endsWith('ing')) {
        const b = w.slice(0, -3);
        out.push(b, b + 'e');
        if (b.length > 2 && b[b.length - 1] === b[b.length - 2]) out.push(b.slice(0, -1));
    }
    if (w.endsWith('ed') && w.length > 4 && w[w.length - 3] === w[w.length - 4]) out.push(w.slice(0, -3));
    // сравнительная и превосходная степень
    if (w.endsWith('iest')) out.push(w.slice(0, -4) + 'y');
    if (w.endsWith('ier')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('est')) {
        const b = w.slice(0, -3);
        out.push(b, b + 'e');
        if (b[b.length - 1] === b[b.length - 2]) out.push(b.slice(0, -1));
    }
    if (w.endsWith('er')) {
        const b = w.slice(0, -2);
        out.push(b, b + 'e');
        if (b[b.length - 1] === b[b.length - 2]) out.push(b.slice(0, -1));
    }
    // наречия и существительные на -ly, -ness
    if (w.endsWith('ily')) out.push(w.slice(0, -3) + 'y');
    if (w.endsWith('ly')) {
        out.push(w.slice(0, -2));
        out.push(w.slice(0, -2) + 'e');
    }
    if (w.endsWith('iness')) out.push(w.slice(0, -5) + 'y');
    if (w.endsWith('ness')) out.push(w.slice(0, -4));
    // британское написание
    if (/ise$|ised$|ising$/.test(w)) out.push(w.replace(/is(e|ed|ing)$/, 'iz$1'));
    if (/our$/.test(w)) out.push(w.replace(/our$/, 'or'));
    return out;
}

/** Возможные начальные формы (слово уже очищено через clean). Два шага: children's → children → child */
export function candidates(w: string): string[] {
    const first = base(w);
    const out = [...first];
    first.slice(1).forEach((x) => base(x).forEach((y) => out.push(y)));
    return [...new Set(out)].filter(Boolean);
}

function put(en: string, ru: string) {
    const k = en.toLowerCase().trim();
    if (k && ru && !DICT[k]) DICT[k] = ru;
}

/** Загрузить словарь, формы и колоду (один раз) */
export function ensureDict(): Promise<void> {
    if (ready) return Promise.resolve();
    if (!loading) {
        loading = Promise.all([
            loadJSON<Dict>(paths.dict),
            loadJSON<Dict>(paths.forms).catch((): Dict => ({})),
            loadJSON<DeckWordRow[]>(paths.words).catch((): DeckWordRow[] => []),
        ])
            .then(([dict, forms, words]) => {
                DICT = Object.assign({}, dict);
                FORMS = Object.assign({}, forms);
                pending.splice(0).forEach(([en, ru]) => put(en, ru));
                words.forEach((w) => put(w[0], w[1]));
                ready = true;
            })
            .catch((e) => {
                loading = null;
                throw e;
            });
    }
    return loading;
}

/** [{word, tr}] — первым идёт наиболее точное совпадение. До загрузки словаря — [] */
export function lookup(raw: string): { word: string; tr: string }[] {
    if (!ready) return [];
    const w = clean(raw);
    if (!w) return [];
    const res: { word: string; tr: string }[] = [];
    const seen = new Set<string>();
    for (const c of candidates(w)) {
        if (DICT[c] && !seen.has(c)) {
            res.push({ word: c, tr: DICT[c] });
            seen.add(c);
        }
    }
    return res;
}

/** Добавить слово урока (не перезаписывает перевод из словаря) */
export function addToDict(en: string, ru: string) {
    if (ready) put(en, ru);
    else pending.push([en, ru]);
}

export const isDictReady = () => ready;

/** Только для тестов: подменить словарь и формы без сети */
export function setDictForTests(dict: Dict, forms: Dict = {}) {
    DICT = Object.assign({}, dict);
    FORMS = Object.assign({}, forms);
    pending.length = 0;
    loading = Promise.resolve();
    ready = true;
}
