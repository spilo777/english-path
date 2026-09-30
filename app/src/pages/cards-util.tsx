// Общие помощники раздела «Словарь»: статусы слов, «Знаю», коллекции по темам
import { wordId } from '@utils/text';
import type { DeckWord, TopicCat, TopicCol } from '@content/word-cards';
import { speak } from '@core/audio';
import { type Progress, tomb, update } from '@core/progress';
import { cardLearned as learnedCard } from '@core/srs';
import { Icon } from '../components/ui';

export const wid = wordId;

/** Пометка «**слово**» в примере — чтобы на карточке слово было выделено */
export { exMark } from '../content/word-cards/mark';

// правило «выучено» — одно на всё приложение (core/srs)
export { learnedCard };

/** «Знаю» ↔ «Вернуть»: знакомое слово убирается из очереди новых карточек */
export function toggleKnown(id: string) {
    update((s) => {
        if (s.known[id]) {
            delete s.known[id];
            tomb(s, 'known:' + id);
        } else {
            s.known[id] = Date.now();
            if (s.cards[id] && s.cards[id].state === 'new') {
                delete s.cards[id];
                tomb(s, 'card:' + id);
            }
        }
    });
}

/** Статус слова в списке: знаю / выучено / в очереди / учу */
export function StatusPill({ s, id }: { s: Progress; id: string }) {
    const c = s.cards[id];
    if (s.known[id]) return <span className="pill ok">знаю</span>;
    if (!c) return null;
    return (
        <span className={'pill ' + (c.ivl >= 21 ? 'ok' : 'accent')}>
            {c.ivl >= 21 ? 'выучено' : c.state === 'new' ? 'в очереди' : 'учу'}
        </span>
    );
}

/** Кнопка «Знаю»/«Вернуть» — только пока слово не начато в карточках */
export function KnownBtn({ s, id }: { s: Progress; id: string }) {
    const c = s.cards[id];
    if (c && c.state !== 'new') return null;
    return (
        <button type="button" className="btn small ghost" data-known={id} onClick={() => toggleKnown(id)}>
            {s.known[id] ? 'Вернуть' : 'Знаю'}
        </button>
    );
}

export const SayBtn = ({ text }: { text: string }) => (
    <button
        type="button"
        className="icon-btn"
        title="Послушать"
        aria-label="Послушать"
        onClick={(e) => {
            e.stopPropagation();
            speak(text);
        }}
    >
        <Icon name="speaker-high" />
    </button>
);

/** Пример, который озвучивается по нажатию */
export const SayText = ({ text }: { text: string }) => (
    <span
        className="say-ex"
        role="button"
        tabIndex={0}
        onClick={(e) => {
            e.stopPropagation();
            speak(text);
        }}
        onKeyDown={(e) => {
            if (e.key === 'Enter') speak(text);
        }}
    >
        {text}
    </span>
);

// ───────── колоды ─────────
export const DECK_ICONS = ['plant', 'tree-evergreen', 'mountains', 'rocket-launch'];
export const deckWords = (deck: DeckWord[], lvl: string) =>
    lvl === 'phr' ? deck.filter((w) => w.pos === 'phr') : deck.filter((w) => w.lvl === lvl);

// ───────── тематические коллекции ─────────
export const catTone = (cats: TopicCat[], id: string) => cats.find((c) => c.id === id)?.tone || 'blue';

export function topicStats(s: Progress, c: TopicCol) {
    let learned = 0,
        study = 0;
    c.words.forEach((w) => {
        const id = wid(w[0]),
            k = s.cards[id];
        if (s.known[id] || learnedCard(k)) learned++;
        else if (k) study++;
    });
    return { learned, study, total: c.words.length };
}

/** Двухцветная полоска: выучено + в процессе */
export const TopicProg = ({
    learned,
    study,
    total,
    big,
}: {
    learned: number;
    study: number;
    total: number;
    big?: boolean;
}) => (
    <span className={'topic-prog' + (big ? ' big' : '')}>
        <i style={{ width: (learned / Math.max(1, total)) * 100 + '%' }} />
        <i style={{ width: (study / Math.max(1, total)) * 100 + '%' }} />
    </span>
);
