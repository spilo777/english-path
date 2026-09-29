// Страница «Library» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Library({ params }: PageProps) {
  return <Page><TopBar title="Library" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
