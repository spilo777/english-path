// Страница «Book» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Book({ params }: PageProps) {
  return <Page><TopBar title="Book" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
