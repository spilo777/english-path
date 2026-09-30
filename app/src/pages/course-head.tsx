// Шапка раздела «Словарь»: вкладки Слова / Грамматика / Времена (грамматика — это уроки курса)
import type { ReactNode } from 'react';
import { Tabs, TopBar } from '../components/ui';

export type LearnTab = 'words' | 'lessons' | 'tenses';
const TABS: { key: LearnTab; href: string; icon: string; label: string }[] = [
    { key: 'words', href: '#/', icon: 'cards', label: 'Слова' },
    { key: 'lessons', href: '#/course', icon: 'graduation-cap', label: 'Грамматика' },
    { key: 'tenses', href: '#/tenses', icon: 'clock-countdown', label: 'Времена' },
];

/** Верх раздела «Словарь»: заголовок + переключатель подразделов + пояснение */
export function LearnHead({ tab, sub, right }: { tab: LearnTab; sub?: string; right?: ReactNode }) {
    return (
        <>
            <TopBar title="Словарь" right={right} />
            <Tabs items={TABS} active={tab} />
            {sub ? <p className="page-sub">{sub}</p> : null}
        </>
    );
}
