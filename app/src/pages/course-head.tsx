// Общие части раздела «Курс»: шапка с вкладками (Уроки / Времена) и кнопка-аватар
import { useCloud } from '../lib/cloud';
import { Icon, Tabs, TopBar } from '../components/ui';

/** Круглая кнопка профиля: первая буква почты или значок */
export function AvatarBtn() {
    const st = useCloud();
    const mail = st.user?.email;
    return (
        <a className="rbtn av" href="#/profile" title="Профиль" aria-label="Профиль">
            {mail ? mail[0].toUpperCase() : <Icon name="user" />}
        </a>
    );
}

export type CourseTab = 'lessons' | 'tenses';
const TABS: { key: CourseTab; href: string; icon: string; label: string }[] = [
    { key: 'lessons', href: '#/course', icon: 'graduation-cap', label: 'Уроки' },
    { key: 'tenses', href: '#/tenses', icon: 'clock-countdown', label: 'Времена' },
];

/** Верх раздела «Курс»: заголовок + переключатель подразделов + пояснение */
export function CourseHead({ tab, sub }: { tab: CourseTab; sub?: string }) {
    return (
        <>
            <TopBar title="Курс" right={<AvatarBtn />} />
            <Tabs items={TABS} active={tab} />
            {sub ? <p className="page-sub">{sub}</p> : null}
        </>
    );
}
