// ВРЕМЕННАЯ песочница для проверки общих компонентов урока (Walk, ExerciseRunner, Popover).
// Страницу урока полностью перепишет другой разработчик.
import type { PageProps } from '../app/App';
import { ExerciseRunner } from '../components/Exercises';
import { GoalCard } from '../components/GoalCard';
import { Walk } from '../components/Walk';
import { LoadError, Loading, Page, TopBar } from '../components/ui';
import { useUnits } from '../lib/data';

export default function Unit({ params }: PageProps) {
  const id = params[1] || 'a1-2';
  const { data, error } = useUnits('A1');
  if (error) return <LoadError error={error} />;
  if (!data) return <Loading />;
  const unit = data.find((u) => u.id === id) || data[0];
  return (
    <Page>
      <TopBar title={unit.title} sub="Песочница компонентов урока" />
      <GoalCard />
      <section className="sec" id="sb-walk"><Walk unit={unit} /></section>
      <section className="sec" id="sb-ex">
        <ExerciseRunner list={unit.practice} mode="practice" unitId={unit.id}
          onFinish={(score) => <a className="btn primary" href="#/course">Готово · {Math.round(score * 100)}%</a>} />
      </section>
    </Page>
  );
}
