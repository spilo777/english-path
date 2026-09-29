// Курс: доступность уроков и прогресс по шагам. Работает с индексом курса (CourseIndex), без полных уроков.
import { LEVEL_ORDER } from './types';
import type { BookRefs, CourseIndex, Progress, Syllabus, UnitMeta } from './types';
import { PASS } from './store';

export type StepKey = 'words' | 'grammar' | 'reading' | 'practice' | 'test';
export const STEPS: [StepKey, string][] = [
  ['words', 'Слова'], ['grammar', 'Грамматика'], ['reading', 'Чтение'], ['practice', 'Практика'], ['test', 'Тест'],
];

const mainCache = new WeakMap<CourseIndex, UnitMeta[]>();
/** Основная линия уроков по порядку: уровень, затем номер */
export function mainUnits(course: CourseIndex): UnitMeta[] {
  let list = mainCache.get(course);
  if (!list) {
    list = course.units.filter((u) => u.track === 'main')
      .sort((a, b) => ((LEVEL_ORDER[a.level] || 0) - (LEVEL_ORDER[b.level] || 0)) || (a.num - b.num));
    mainCache.set(course, list);
  }
  return list;
}

/** Тест урока сдан (≥ 80%) */
export function passed(s: Progress, id: string): boolean {
  const u = s.units[id];
  return !!(u && u.testBest != null && u.testBest >= PASS);
}

/** Основные — по порядку (открыт, если сдан предыдущий); игровые — после unlockAfter (или a1-0) */
export function isUnlocked(s: Progress, meta: UnitMeta, course: CourseIndex): boolean {
  if (meta.track === 'games') return passed(s, meta.unlockAfter || 'a1-0');
  const list = mainUnits(course);
  const i = list.findIndex((u) => u.id === meta.id);
  return i <= 0 || passed(s, list[i - 1].id);
}

const stepDone = (s: Progress, id: string, k: StepKey) => (k === 'test' ? passed(s, id) : !!s.units[id]?.steps[k]);

/** Доля пройденных шагов 0..1 */
export function unitProgress(s: Progress, id: string): number {
  return STEPS.filter(([k]) => stepDone(s, id, k)).length / STEPS.length;
}

/** Следующий непройденный шаг или null, если урок пройден целиком */
export function nextStep(s: Progress, id: string): { k: StepKey; label: string } | null {
  for (const [k, label] of STEPS) if (!stepDone(s, id, k)) return { k, label };
  return null;
}

/** Текущий урок: первый открытый и не сданный (или последний) */
export function currentUnit(s: Progress, course: CourseIndex): UnitMeta | undefined {
  const list = mainUnits(course);
  return list.find((u) => isUnlocked(s, u, course) && !passed(s, u.id)) || list[list.length - 1];
}

// ───────── книги Мерфи ─────────
export const BOOK_KEYS = ['red', 'blue', 'green'] as const;
export const BOOK_COL: Record<(typeof BOOK_KEYS)[number], string> = { red: '#E0453C', blue: '#3B6FE0', green: '#1FA865' };

/** Юниты книг для урока: из самого урока или из программы */
export function unitBooks(meta: Pick<UnitMeta, 'id' | 'books'>, syllabus?: Syllabus): BookRefs {
  if (meta.books) return meta.books;
  const l = syllabus?.lessons.find((x) => x.id === meta.id);
  return l ? { red: l.red, blue: l.blue, green: l.green } : {};
}

/** 1,2,3,5 → «1–3, 5» */
export function rangeTxt(a: number[]): string {
  const r: [number, number][] = [];
  a.slice().sort((x, y) => x - y).forEach((n) => { const l = r[r.length - 1]; if (l && n === l[1] + 1) l[1] = n; else r.push([n, n]); });
  return r.map(([x, y]) => (x === y ? String(x) : x + '–' + y)).join(', ');
}

/** Части для чипов: «Красный Мерфи: юниты 1–3» по каждой книге */
export function unitBooksParts(meta: Pick<UnitMeta, 'id' | 'books'>, syllabus?: Syllabus): { key: (typeof BOOK_KEYS)[number]; color: string; text: string }[] {
  const b = unitBooks(meta, syllabus);
  return BOOK_KEYS.filter((k) => b[k] && b[k]!.length).map((k) => {
    const n = b[k]!;
    return { key: k, color: BOOK_COL[k], text: `${syllabus?.books[k]?.short || k}: ${n.length > 1 ? 'юниты' : 'юнит'} ${rangeTxt(n)}` };
  });
}

/** Книги урока одной строкой: «Красный Мерфи: юниты 1–3 · Синий Мерфи: юнит 5» */
export function unitBooksText(meta: Pick<UnitMeta, 'id' | 'books'>, syllabus?: Syllabus): string {
  return unitBooksParts(meta, syllabus).map((p) => p.text).join(' · ');
}
