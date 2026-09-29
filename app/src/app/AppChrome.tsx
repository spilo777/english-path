// Всё, что живёт поверх страниц: счётчик карточек в меню, всплывающие достижения, синхронизация
import { useEffect, type ReactNode } from 'react';
import { AchPopups } from '../components/AchPopups';
import { Cloud } from '../lib/cloud';
import { useDeck } from '../lib/data';
import { dueCards, newAvailable } from '../lib/srs';
import { useProgress } from '../lib/store';

export function AppChrome({ children }: { children: (badge: number) => ReactNode }) {
  const s = useProgress();
  const deck = useDeck();
  const badge = deck ? dueCards(s).length + newAvailable(s, deck) : 0;
  useEffect(() => { Cloud.init(); }, []); // повторные вызовы игнорируются
  return <>{children(badge)}<AchPopups /></>;
}
