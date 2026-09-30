// Облако (Supabase): адреса и ключи берутся из конфига движка (cloud.*, storage.authKey)
import { getConfig } from '../config/current';

/** Ключ localStorage, где supabase-js хранит вход (читается при запуске) */
export const AUTH_KEY = getConfig().storage.authKey;

/** Адрес edge-функции Supabase */
export const functionUrl = (name: string) => getConfig().cloud.url + '/functions/v1/' + name;
