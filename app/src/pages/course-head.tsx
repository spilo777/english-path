// Шапка раздела «Грамматика»: вкладки Уроки / Времена
import { Tabs, TopBar } from '../components/ui';

export type CourseTab = 'lessons' | 'tenses';
const TABS: { key: CourseTab; href: string; icon: string; label: string }[] = [
    { key: 'lessons', href: '#/', icon: 'book-open', label: 'Уроки' },
    { key: 'tenses', href: '#/tenses', icon: 'clock-countdown', label: 'Времена' },
];

/** Верх раздела «Грамматика»: заголовок + переключатель подразделов + пояснение */
export function CourseHead({ tab, sub }: { tab: CourseTab; sub?: string }) {
    return (
        <>
            <TopBar title="Грамматика" />
            <Tabs items={TABS} active={tab} />
            {sub ? <p className="page-sub">{sub}</p> : null}
        </>
    );
}
