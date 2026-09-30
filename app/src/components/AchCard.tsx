// Карточка достижения: цветной значок с рамкой редкости, описание, прогресс, дата получения
import type { CSSProperties } from 'react';
import { pctOf, tier, type Ach, type AchCtx } from '../lib/achievements';
import { useCloud } from '../lib/cloud';
import { useProgress } from '../lib/store';
import { Icon } from './ui';
import './AchCard.css';

const fmt = (n: number) => n.toLocaleString('ru-RU');
type IconVars = CSSProperties & { '--c1': string; '--c2': string };

/** Значок достижения (используется и во всплывающем окне) */
export function AchIcon({ a, cls, secret, locked }: { a: Ach; cls: string; secret?: boolean; locked?: boolean }) {
    const style: IconVars = { '--c1': secret ? '#475569' : a.color[0], '--c2': secret ? '#0f172a' : a.color[1] };
    return (
        <div className={'ach-icon ' + cls} style={style}>
            <Icon name={secret ? 'question' : a.icon} fill />
            {locked ? (
                <b className="ach-lock">
                    <Icon name="lock-simple" fill />
                </b>
            ) : null}
        </div>
    );
}

export function AchCard({ a, ctx }: { a: Ach; ctx: AchCtx }) {
    const s = useProgress();
    useCloud(); // реальная редкость подгружается из облака
    const got = s.ach[a.id];
    const P = pctOf(a);
    const t = tier(P);
    const secret = !!a.hidden && !got;
    const v = Math.min(a.need, a.val(ctx) || 0);
    return (
        <div className={`ach ${got ? 'got' : 'locked'} r-${t.cls}`}>
            <AchIcon a={a} cls={t.cls} secret={secret} locked={!got} />
            <div className="ach-body">
                <b>{secret ? 'Секретное достижение' : a.title}</b>
                <div className="small muted">{secret ? 'Продолжайте заниматься, чтобы узнать' : a.desc}</div>
                {!got && !secret && a.need > 1 ? (
                    <>
                        <div className="progress ach-prog">
                            <i style={{ width: (v / a.need) * 100 + '%' }} />
                        </div>
                        <div className="tiny muted ach-count">
                            {fmt(v)} / {fmt(a.need)}
                        </div>
                    </>
                ) : null}
                {got ? (
                    <div className="tiny muted ach-date">
                        Получено{' '}
                        {new Date(got).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                ) : null}
            </div>
            <div className="ach-rar">
                <span className={'rar-pill ' + t.cls}>{t.name}</span>
                <span className={'tier-' + t.cls}>{P}%</span>
            </div>
        </div>
    );
}
