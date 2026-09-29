// Всё, что живёт поверх страниц: счётчик карточек в меню, всплывающие достижения, синхронизация
import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { PopoverHost } from '../components/Popover';
import { Cloud, hasSession } from '../lib/cloud';
import { loadJSON, paths, useDeck } from '../lib/data';
import { dueCards, newAvailable } from '../lib/srs';
import { useProgress } from '../lib/store';

const AchPopups = lazy(() => import('../components/AchPopups').then((m) => ({ default: m.AchPopups })));

/** true, когда первый экран нарисован и браузер свободен: фоновые загрузки не мешают открытию страницы */
function useIdle(): boolean {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    const w = window as unknown as { requestIdleCallback?: (f: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    if (w.requestIdleCallback) { const id = w.requestIdleCallback(() => setIdle(true), { timeout: 2500 }); return () => w.cancelIdleCallback?.(id); }
    const t = setTimeout(() => setIdle(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return idle;
}

/** В свободное время заранее подгружаем главные экраны и лёгкие данные — переходы по меню без ожидания */
function prefetch() {
  const pages = [() => import('../pages/Home'), () => import('../pages/Course'), () => import('../pages/Unit'), () => import('../pages/Library'),
    () => import('../pages/Dictionary'), () => import('../pages/Review'), () => import('../pages/Profile'), () => import('../pages/Reader')];
  let i = 0;
  const next = () => { if (i < pages.length) pages[i++]().catch(() => undefined).finally(() => setTimeout(next, 60)); };
  next();
  [paths.course, paths.lessons].forEach((p) => { loadJSON(p).catch(() => undefined); });
}

export function AppChrome({ children }: { children: (badge: number) => ReactNode }) {
  const s = useProgress();
  const idle = useIdle();
  const deck = useDeck(idle); // словарь для счётчика «новых» — после первого экрана
  const badge = deck ? dueCards(s).length + newAvailable(s, deck) : dueCards(s).length;
  // облако: сразу, если вы вошли; иначе — в фоне после первого экрана (повторные вызовы игнорируются)
  useEffect(() => { if (idle || hasSession()) Cloud.init(); }, [idle]);
  useEffect(() => { if (idle) prefetch(); }, [idle]);
  return <>{children(badge)}{idle ? <Suspense fallback={null}><AchPopups /></Suspense> : null}<PopoverHost /></>;
}
