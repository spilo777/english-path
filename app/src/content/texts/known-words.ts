// Знакомые слова ученика: карточки, «знаю», слова пройденных (или предыдущих) уроков, служебные слова.
// Незнакомые слова в тексте урока подчёркиваются.
import { candidates, lookup } from '../../core/translate/lookup';
import type { Progress } from '../../core/progress/types';
import type { CourseIndex, LessonUnit } from '../lessons/model';
import { mainUnits, passed } from '../lessons/progress';

// ───────── какие слова ученик уже видел ─────────
const BASIC_WORDS =
    'a an the i you he she it we they me him her us them my your his its our their is am are was were be been do does did not no yes and or but to of in on at for with from by this that these those there here what who where when why how can will would have has had get got go ok hi hello'.split(
        ' ',
    );

/** Карточки, «знаю», слова предыдущих уроков (и пройденных игровых), служебные слова */
/** Что нужно knownWordSet от юнита: id, трек и английские слова урока (как в lessons.json) */
export type KnownWordsUnit = Pick<LessonUnit, 'id' | 'track' | 'words'>;

export function knownWordSet(
    s: Progress,
    course: CourseIndex | undefined,
    units: KnownWordsUnit[],
    unitId?: string,
): Set<string> {
    const set = new Set(BASIC_WORDS);
    Object.keys(s.cards).forEach((k) => set.add(k));
    Object.keys(s.known).forEach((k) => set.add(k));
    if (!course) return set;
    const main = mainUnits(course);
    const ci = unitId ? main.findIndex((u) => u.id === unitId) : -1;
    units.forEach((u) => {
        const i = main.findIndex((m) => m.id === u.id);
        const take = unitId
            ? u.id !== unitId && ((i >= 0 && ci >= 0 && i < ci) || (u.track === 'games' && passed(s, u.id)))
            : passed(s, u.id);
        if (take)
            (u.words || []).forEach((w) =>
                w
                    .toLowerCase()
                    .split(/\s*[—–-]\s*|\s*\/\s*/)
                    .forEach((x) => set.add(x.trim())),
            );
    });
    return set;
}

export function isNewWord(w: string, set: Set<string>): boolean {
    let lw = w.toLowerCase().replace(/’/g, "'");
    if (/^[a-z]{1,3}-/.test(lw)) return false; // разбивка по слогам в объяснении
    if (lw.includes("'")) lw = lw.replace(/n't$/, '').replace(/'.*$/, '') || lw; // I'm, isn't → I, is
    if (lw === 'ca' || lw === 'wo' || lw === 'ai') return false; // can't, won't, ain't
    if (lw.length < 3 || set.has(lw)) return false;
    if (candidates(lw).some((c) => set.has(c))) return false;
    if (lookup(lw).some((r) => set.has(r.word))) return false;
    return true;
}
