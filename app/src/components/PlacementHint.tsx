// Подсказка про тест на уровень: новичку — предложить тест; выбравшему уровень — напомнить, откуда он начинает
import { startLevel } from '../lib/course';
import { PASS } from '../lib/store';
import type { Progress } from '../lib/types';
import { Icon } from './ui';
import './PlacementHint.css';

/** offerOnly — только предложение теста (для главной), без напоминания о выбранном уровне */
export function PlacementHint({ s, offerOnly }: { s: Progress; offerOnly?: boolean }) {
  const anyPassed = Object.values(s.units).some((u) => u.testBest != null && u.testBest >= PASS);
  const lvl = startLevel(s);
  if (!offerOnly && s.settings.startLevel && s.settings.startLevel !== 'A1') {
    return <p className="small muted place-note"><Icon name="flag" /> Вы начинаете с уровня <b>{lvl}</b> — уроки ниже открыты для повторения. <a href="#/settings">Изменить</a> · <a href="#/placement">Пройти тест ещё раз</a></p>;
  }
  if (anyPassed || s.settings.placement || s.settings.startLevel) return null;
  return (
    <a className="card place-card" href="#/placement">
      <span className="place-ico"><Icon name="target" /></span>
      <span className="place-txt"><b>Уже знаете английский?</b><span className="small muted">Тест на уровень за 3–10 минут — и начнёте с нужного места, а не с азбуки.</span></span>
      <Icon name="caret-right" />
    </a>
  );
}

