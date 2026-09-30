// Описание набора каналов для аудирования
import { defineSet, type ContentSet } from '../base';
import type { Channel } from './model';

export type ListeningSet = ContentSet<'listening', Channel>;

export const defineListenings = (m: Omit<ListeningSet, 'kind'>): ListeningSet => defineSet('listening', m);
