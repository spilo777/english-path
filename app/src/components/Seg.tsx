// Сегментный переключатель (фильтр наград, вкладки входа/регистрации)
import './Seg.css';

export function Seg<K extends string>({ items, value, onChange, className }: { items: [K, string][]; value: K; onChange: (k: K) => void; className?: string }) {
  return (
    <div className={'seg' + (className ? ' ' + className : '')} role="tablist">
      {items.map(([k, label]) => (
        <button key={k} type="button" role="tab" aria-selected={k === value} className={k === value ? 'on' : ''} onClick={() => onChange(k)}>{label}</button>
      ))}
    </div>
  );
}
