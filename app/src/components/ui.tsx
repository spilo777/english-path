// Общие элементы интерфейса: шапка страницы, секции-карусели, обложки, вкладки, тосты
import { useSyncExternalStore, type ReactNode } from 'react';
import { clamp } from '@utils/math';
import { onToast, toastMessage, toastVersion } from '../core/notifications/notify';
import { useCloud } from '@core/cloud/hooks';
import { streak } from '@core/progress';
import { useProgress } from '@core/progress/hooks';
import { today } from '@utils/date';
import './ui.css';

export const Icon = ({ name, fill, className }: { name: string; fill?: boolean; className?: string }) => (
    <i className={`${fill ? 'ph-fill' : 'ph'} ph-${name}${className ? ' ' + className : ''}`} aria-hidden="true" />
);

/** Контейнер страницы с единым ритмом отступов */
export const Page = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={'page' + (className ? ' ' + className : '')}>{children}</div>
);

/** Аватар в шапке: вход в профиль (первая буква почты; гостю — значок) */
function AccountBtn() {
    const st = useCloud();
    const email = st.user?.email || '';
    return (
        <a className="tb-avatar" href="#/profile" title="Профиль" aria-label="Профиль">
            {email ? email[0].toUpperCase() : <Icon name="user" />}
        </a>
    );
}

/** Шапка раздела: крупный заголовок и пояснение слева; серия дней, кнопки и аватар профиля справа */
export function TopBar({
    title,
    sub,
    right,
    left,
    avatar = true,
}: {
    title: ReactNode;
    sub?: ReactNode;
    right?: ReactNode;
    /** что показать вместо огонька серии */
    left?: ReactNode;
    /** аватар-вход в профиль (на самом профиле не нужен) */
    avatar?: boolean;
}) {
    const s = useProgress();
    const on = !!s.activity[today()];
    return (
        <header className="topbar">
            <div className="tb-head">
                <h1 className="page-title">{title}</h1>
                {sub ? <p className="page-sub">{sub}</p> : null}
            </div>
            <div className="tb-side">
                {left !== undefined ? (
                    left
                ) : (
                    <a className={'streak-pill' + (on ? ' on' : '')} href="#/stats" title="Дней подряд">
                        <Icon name="flame" fill />
                        <b>{streak(s)}</b>
                    </a>
                )}
                {right}
                {avatar ? <AccountBtn /> : null}
            </div>
        </header>
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
            <i style={{ width: Math.round(clamp(value, 0, 1) * 100) + '%' }} />
        </div>
    );
}

// ───────── тосты ─────────
// сообщения живут в core/notifications (их показывают и модули ядра); здесь — только отрисовка
export function Toaster() {
    useSyncExternalStore(onToast, toastVersion);
    const msg = toastMessage();
    return msg ? (
        <div className="toast" role="status">
            {msg}
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
