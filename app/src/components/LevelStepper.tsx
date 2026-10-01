// Степпер уровней (макет «Грамматика»): кружки A1…C1 заполняются «водой» по доле пройденных уроков уровня.
// Нажатие на уровень показывает его уроки; на телефоне степпер прокручивается вбок.
import { useEffect, useId, useRef } from 'react';
import { Icon } from './ui';
import './LevelStepper.css';

export interface StepLevel {
    id: string;
    /** Пройдено уроков и всего (вместе с готовящимися) */
    done: number;
    total: number;
    /** Уровень текущего урока */
    current?: boolean;
    /** Уроков ещё нет — «скоро» */
    soon?: boolean;
}

/** Кружок с водой: уровень воды = доля; у текущего уровня — минимум, чтобы было видно «здесь» */
function Water({ pct, on }: { pct: number; on: boolean }) {
    const clip = useId();
    const top = 50 - 50 * pct;
    return (
        <svg className="lstep-water" viewBox="0 0 50 50" aria-hidden="true">
            <defs>
                <clipPath id={clip}>
                    <circle cx="25" cy="25" r="25" />
                </clipPath>
            </defs>
            <g clipPath={`url(#${clip})`}>
                <rect className={on ? 'w-bg on' : 'w-bg'} width="50" height="50" />
                {on && pct > 0 ? (
                    <g transform={`translate(0 ${top - 4})`}>
                        <path
                            className="w-wave"
                            d="M0 4 Q6.25 0 12.5 4 T25 4 T37.5 4 T50 4 T62.5 4 T75 4 T87.5 4 T100 4 V60 H0 Z"
                        />
                    </g>
                ) : null}
            </g>
        </svg>
    );
}

export function LevelStepper({
    levels,
    selected,
    onSelect,
}: {
    levels: StepLevel[];
    selected: string;
    onSelect: (id: string) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    // телефон: выбранный уровень — в зоне видимости прокрутки
    useEffect(() => {
        const box = ref.current;
        const el = box?.querySelector<HTMLElement>('.lstep.sel');
        if (!box || !el || box.scrollWidth <= box.clientWidth) return;
        box.scrollTo({ left: el.offsetLeft - 16, behavior: 'smooth' });
    }, [selected]);
    return (
        <div className="lsteps" ref={ref} role="tablist" aria-label="Уровни курса">
            {levels.map((l, i) => {
                const pct = l.total ? l.done / l.total : 0;
                const full = l.total > 0 && l.done >= l.total;
                const on = full || l.done > 0 || !!l.current;
                const water = full ? 1 : l.current ? Math.max(pct, 0.18) : pct;
                const cls = 'lstep' + (on ? ' on' : '') + (full ? ' full' : '') + (l.id === selected ? ' sel' : '');
                return (
                    <div className={cls} key={l.id}>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={l.id === selected}
                            className="lstep-btn"
                            onClick={() => onSelect(l.id)}
                            title={l.soon ? `${l.id}: уроки готовятся` : `${l.id}: пройдено ${l.done} из ${l.total}`}
                        >
                            <span className="lstep-label">{l.id}</span>
                            <span className="lstep-dot">
                                <Water pct={water} on={on} />
                                {full ? <Icon name="check" /> : null}
                            </span>
                            <span className="lstep-count">{l.soon ? 'скоро' : `${l.done}/${l.total}`}</span>
                        </button>
                        {i < levels.length - 1 ? (
                            <span className="lstep-line" aria-hidden="true">
                                <i style={{ width: full ? '100%' : Math.round(pct * 100) + '%' }} />
                            </span>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
