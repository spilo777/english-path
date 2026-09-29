// Всплывающие «Достижение получено»: после каждого сохранения проверяем достижения, новые — в очередь
import { useEffect, useRef, useState } from 'react';
import { checkAch, pctOf, tier, useAchContextData, type Ach, type AchExtra } from '../lib/achievements';
import { Cloud } from '../lib/cloud';
import { ding } from '../lib/sfx';
import { getState, onSave, update } from '../lib/store';
import { AchIcon } from './AchCard';
import './AchCard.css';
import './AchPopups.css';

const SHOW_MS = 3800, HIDE_MS = 350;

export function AchPopups() {
  const extra = useAchContextData();
  const extraRef = useRef<AchExtra | null>(null);
  const [queue, setQueue] = useState<Ach[]>([]);
  const [shown, setShown] = useState(false);

  // проверка: новые достижения записываем тихо (без повторной проверки) и ставим в очередь
  const checkRef = useRef<() => void>(() => {});
  checkRef.current = () => {
    const ex = extraRef.current;
    if (!ex) return;
    const fresh = checkAch(getState(), ex);
    if (!fresh.length) return;
    const now = Date.now();
    update((s) => { fresh.forEach((a) => { if (!s.ach[a.id]) s.ach[a.id] = now; }); }, { silent: true });
    setQueue((q) => [...q, ...fresh]);
    ding('done');
  };

  // данные курса появились/обновились — проверить (как старый checkAch при старте)
  useEffect(() => {
    extraRef.current = extra;
    if (!extra) return;
    const t = setTimeout(() => checkRef.current(), 600);
    return () => clearTimeout(t);
  }, [extra]);

  // после каждого сохранения и при входе в аккаунт («В облаке»)
  useEffect(() => {
    const offSave = onSave(() => checkRef.current());
    const offCloud = Cloud.onChange(() => checkRef.current());
    return () => { offSave(); offCloud(); };
  }, []);

  // показ по одному: выезжает, держится, уезжает, следующий
  const cur = queue[0];
  useEffect(() => {
    if (!cur) return;
    const raf = requestAnimationFrame(() => setShown(true));
    const t1 = setTimeout(() => setShown(false), SHOW_MS);
    const t2 = setTimeout(() => setQueue((q) => q.slice(1)), SHOW_MS + HIDE_MS);
    return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); };
  }, [cur]);

  if (!cur) return null;
  const P = pctOf(cur);
  const t = tier(P);
  return (
    <div className={`ach-pop ${t.cls}${shown ? ' in' : ''}`} role="status" aria-live="polite">
      <AchIcon a={cur} cls={t.cls} />
      <div>
        <div className="tiny ach-pop-label">Достижение получено</div>
        <b>{cur.title}</b>
        <div className="tiny"><span className={'tier-' + t.cls}>{t.name}</span> · {P}% учеников</div>
      </div>
    </div>
  );
}
