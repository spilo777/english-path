// Раздел «Словарь»: #/cards, #/topic/<id>, #/words/<kind>, #/deck/<lvl>
import type { ReactNode } from 'react';
import type { PageProps } from '../app/App';
import { LoadError, Loading, Page } from '../components/ui';
import { useDeck, useTopics } from '../lib/data';
import { CardsHome } from './cards-home';
import { DeckPage, TopicPage, WL, WordsPage, isDeckLevel } from './cards-lists';
import './Dictionary.css';

export default function Dictionary({ params }: PageProps) {
  const deck = useDeck();
  const topics = useTopics();
  const r = params[0] || '';
  const arg = params[1] || '';
  if (topics.error) return <Page className="dict"><LoadError error={topics.error} /></Page>;
  if (!deck || !topics.data) return <Page className="dict"><Loading /></Page>;
  const { cats, cols } = topics.data;
  const key = params.join('/');
  const topic = r === 'topic' ? cols.find((c) => c.id === arg) : undefined;
  let body: ReactNode;
  if (topic) body = <TopicPage key={key} c={topic} cats={cats} cols={cols} />;
  else if (r === 'words' && WL[arg]) body = <WordsPage key={key} kind={arg} deck={deck} />;
  else if (r === 'deck' && isDeckLevel(arg)) body = <DeckPage key={key} lvl={arg} deck={deck} />;
  else body = <CardsHome deck={deck} cats={cats} cols={cols} />;
  return <Page className="dict">{body}</Page>;
}
