// Общие элементы интерфейса: шапка страницы, секции-карусели, обложки, вкладки, тосты
import { useSyncExternalStore, type ReactNode } from 'react';
import { streak, today, useProgress } from '../lib/store';
import './ui.css';

export const plural = (n: number, one: string, few: string, many: string) => {
    const m10 = n % 10,
        m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
};

export const shuffle = <T,>(a: T[]): T[] => {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
};

export const Icon = ({ name, fill, className }: { name: string; fill?: boolean; className?: string }) => (
    <i className={`${fill ? 'ph-fill' : 'ph'} ph-${name}${className ? ' ' + className : ''}`} aria-hidden="true" />
);

/** Контейнер страницы с единым ритмом отступов */
export const Page = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={'page' + (className ? ' ' + className : '')}>{children}</div>
);

/** Огонёк серии дней + кнопки справа, затем крупный заголовок */
export function TopBar({ title, sub, right }: { title: ReactNode; sub?: ReactNode; right?: ReactNode }) {
    const s = useProgress();
    const on = !!s.activity[today()];
    return (
        <>
            <div className="topbar">
                <a className={'streak-pill' + (on ? ' on' : '')} href="#/profile" title="Дней подряд">
                    <Icon name="flame" fill />
                    <b>{streak(s)}</b>
                </a>
                <span className="spacer" />
                {right}
            </div>
            <h1 className="page-title">{title}</h1>
            {sub ? <p className="page-sub">{sub}</p> : null}
        </>
    );
}

export const RoundBtn = ({
    href,
    icon,
    title,
    onClick,
}: {
    href?: string;
    icon: string;
    title: string;
    onClick?: () => void;
}) =>
    href ? (
        <a className="rbtn" href={href} title={title} aria-label={title}>
            <Icon name={icon} />
        </a>
    ) : (
        <button type="button" className="rbtn" title={title} aria-label={title} onClick={onClick}>
            <Icon name={icon} />
        </button>
    );

export const BackLink = ({ href, label = 'Назад' }: { href: string; label?: string }) => (
    <a href={href} className="backlink" aria-label={label} title={label}>
        <Icon name="caret-left" />
    </a>
);

/** Секция с заголовком, ссылкой «См. все» и горизонтальной каруселью */
export function Section({
    title,
    href,
    sub,
    children,
    carousel = true,
    extra,
}: {
    title: ReactNode;
    href?: string;
    sub?: ReactNode;
    children: ReactNode;
    carousel?: boolean;
    extra?: ReactNode;
}) {
    return (
        <section className="sec">
            <div className="sec-head">
                <h2>{title}</h2>
                {href ? (
                    <a className="see-all" href={href}>
                        См. все
                    </a>
                ) : (
                    extra
                )}
            </div>
            {sub ? <p className="sec-sub">{sub}</p> : null}
            {carousel ? <div className="carousel">{children}</div> : children}
        </section>
    );
}

/** Вкладки-переключатель (как в разделе «Курс») */
export function Tabs({
    items,
    active,
}: {
    items: { key: string; href: string; icon: string; label: string }[];
    active: string;
}) {
    return (
        <nav className="tabs" role="tablist">
            {items.map((t) => (
                <a
                    key={t.key}
                    href={t.href}
                    role="tab"
                    aria-selected={t.key === active}
                    className={t.key === active ? 'on' : ''}
                >
                    <Icon name={t.icon} fill={t.key === active} />
                    {t.label}
                </a>
            ))}
        </nav>
    );
}

export function Progress({ value }: { value: number }) {
    return (
        <div className="progress">
            <i style={{ width: Math.round(Math.max(0, Math.min(1, value)) * 100) + '%' }} />
        </div>
    );
}

// ───────── тосты ─────────
let toastMsg = '';
let toastKey = 0;
let toastTimer: ReturnType<typeof setTimeout> | undefined;
const toastL = new Set<() => void>();
export function toast(msg: string) {
    toastMsg = msg;
    toastKey++;
    toastL.forEach((l) => l());
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastMsg = '';
        toastKey++;
        toastL.forEach((l) => l());
    }, 2400);
}
export function Toaster() {
    useSyncExternalStore(
        (l) => {
            toastL.add(l);
            return () => {
                toastL.delete(l);
            };
        },
        () => toastKey,
    );
    return toastMsg ? (
        <div className="toast" role="status">
            {toastMsg}
        </div>
    ) : null;
}

export const Loading = ({ what = 'Загружаю…' }: { what?: string }) => (
    <div className="empty">
        <div className="big">
            <Icon name="circle-notch" />
        </div>
        {what}
    </div>
);
export const LoadError = ({ error }: { error: Error }) => (
    <div className="empty">
        <div className="big">
            <Icon name="wifi-slash" />
        </div>
        Не удалось загрузить: {error.message}. Проверьте интернет и обновите страницу.
    </div>
);
