// Шапки раздела «Грамматика»: главный экран курса и отдельная страница «Времена» (ссылка из уроков)
import { BackLink, TopBar } from '../components/ui';

/** Главный экран: «Грамматика» + пояснение; серия дней и аватар профиля — справа */
export function CourseHead({ sub }: { sub?: string }) {
    return <TopBar title="Грамматика" sub={sub} />;
}

/** Страница «Времена»: назад к курсу */
export function TensesHead({ sub }: { sub?: string }) {
    return (
        <>
            <BackLink href="#/" label="К курсу" />
            <TopBar title="Времена" sub={sub} />
        </>
    );
}
