// Страница «Tenses» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Tenses({ params }: PageProps) {
  return <Page><TopBar title="Tenses" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
