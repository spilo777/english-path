// Вкладки раздела «Библиотека»: Читать / Слушать / Книги
import { Tabs } from './ui';

export type LibTab = 'read' | 'listen' | 'books';
const TABS: { key: LibTab; href: string; icon: string; label: string }[] = [
    { key: 'read', href: '#/library', icon: 'article', label: 'Читать' },
    { key: 'listen', href: '#/listen', icon: 'headphones', label: 'Слушать' },
    { key: 'books', href: '#/library/books', icon: 'books', label: 'Книги' },
];

export function LibTabs({ tab }: { tab: LibTab }) {
    return <Tabs items={TABS} active={tab} />;
}
