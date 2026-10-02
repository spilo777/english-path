// Каркас: плавающая таблетка-меню внизу по центру (на всех экранах): Грамматика, Словарь, Библиотека, Профиль
import type { MouseEvent, ReactNode } from 'react';
import './Layout.css';

export type NavKey = 'grammar' | 'words' | 'library' | 'profile';

const ITEMS: { key: NavKey; href: string; icon: string; label: string }[] = [
    { key: 'grammar', href: '#/', icon: 'graduation-cap', label: 'Грамматика' },
    { key: 'words', href: '#/cards', icon: 'cards', label: 'Словарь' },
    { key: 'library', href: '#/library', icon: 'books', label: 'Библиотека' },
    { key: 'profile', href: '#/profile', icon: 'user-circle', label: 'Профиль' },
];

/** Повторное нажатие на открытый раздел — плавно наверх (как в мобильных приложениях) */
function onTab(e: MouseEvent<HTMLAnchorElement>, href: string, active: boolean) {
    const here = (location.hash || '#/') === href || (href === '#/' && location.hash === '#');
    if (!active || !here) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: window.scrollY > 3000 ? 'auto' : 'smooth' });
}

export function Layout({
    active,
    badge,
    narrow,
    children,
}: {
    active: NavKey;
    badge?: number;
    narrow?: boolean;
    children: ReactNode;
}) {
    return (
        <div className="app">
            <nav className="nav" aria-label="Разделы">
                {ITEMS.map((it) => (
                    <a
                        key={it.key}
                        href={it.href}
                        className={it.key === active ? 'active' : ''}
                        aria-current={it.key === active ? 'page' : undefined}
                        onClick={(e) => onTab(e, it.href, it.key === active)}
                    >
                        <span className="ico">
                            <i className={`${it.key === active ? 'ph-fill' : 'ph'} ph-${it.icon}`} />
                        </span>
                        <span>{it.label}</span>
                        {it.key === 'words' && badge ? <b className="badge">{badge}</b> : null}
                    </a>
                ))}
            </nav>
            <main className={'main' + (narrow ? ' narrow' : '')}>{children}</main>
        </div>
    );
}
