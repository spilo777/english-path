// Страница «Unit» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Unit({ params }: PageProps) {
  return <Page><TopBar title="Unit" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
