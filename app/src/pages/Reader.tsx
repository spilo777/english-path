// Страница «Reader» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Reader({ params }: PageProps) {
  return <Page><TopBar title="Reader" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
