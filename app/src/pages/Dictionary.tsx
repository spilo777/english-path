// Страница «Dictionary» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Dictionary({ params }: PageProps) {
  return <Page><TopBar title="Dictionary" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
