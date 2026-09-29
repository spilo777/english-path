// Всё, что живёт поверх страниц: счётчик карточек в меню, всплывающие достижения, синхронизация
import type { ReactNode } from 'react';
import { useDeck } from '../lib/data';
import { dueCards, newAvailable } from '../lib/srs';
import { useProgress } from '../lib/store';

export function AppChrome({ children }: { children: (badge: number) => ReactNode }) {
  const s = useProgress();
  const deck = useDeck();
  const badge = deck ? dueCards(s).length + newAvailable(s, deck) : 0;
  return <>{children(badge)}</>;
}
