// Шапка раздела «Словарь»: вкладки Слова / Грамматика; внутри грамматики — переключатель Уроки / Времена
import type { ReactNode } from 'react';
import { Icon, Tabs, TopBar } from '../components/ui';

export type LearnTab = 'words' | 'lessons' | 'tenses';
const TABS: { key: 'words' | 'grammar'; href: string; icon: string; label: string }[] = [
    { key: 'words', href: '#/', icon: 'cards', label: 'Слова' },
    { key: 'grammar', href: '#/course', icon: 'graduation-cap', label: 'Грамматика' },
];
const SUB: { key: LearnTab; href: string; icon: string; label: string }[] = [
    { key: 'lessons', href: '#/course', icon: 'book-open', label: 'Уроки' },
    { key: 'tenses', href: '#/tenses', icon: 'clock-countdown', label: 'Времена' },
];

/** Верх раздела «Словарь»: заголовок + вкладки + (для грамматики) Уроки / Времена + пояснение */
export function LearnHead({ tab, sub, right }: { tab: LearnTab; sub?: string; right?: ReactNode }) {
    const grammar = tab !== 'words';
    return (
        <>
            <TopBar title="Словарь" right={right} />
            <Tabs items={TABS} active={grammar ? 'grammar' : 'words'} />
            {grammar ? (
                <nav className="chips-row learn-sub" aria-label="Грамматика">
                    {SUB.map((t) => (
                        <a
                            key={t.key}
                            href={t.href}
                            className={'fchip' + (t.key === tab ? ' on' : '')}
                            aria-current={t.key === tab ? 'page' : undefined}
                        >
                            <Icon name={t.icon} /> {t.label}
                        </a>
                    ))}
                </nav>
            ) : null}
            {sub ? <p className="page-sub">{sub}</p> : null}
        </>
    );
}
