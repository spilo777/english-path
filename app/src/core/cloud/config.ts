// Настройки облака (Supabase). Попадут в EngineConfig (шаг 3)
// Ключ publishable/anon — публичный: доступ к данным защищён правилами RLS в базе
export const CLOUD_CONFIG = {
    supabaseUrl: 'https://rxpmzsresfuevebkirsk.supabase.co',
    supabaseKey: 'sb_publishable_wIw_PhBUps-e0z3QlMBCIw_t3yiwJZD',
    minUsersForRarity: 10, // с какого числа учеников показывать реальную редкость достижений
};

/** Ключ localStorage, где supabase-js хранит вход */
export const AUTH_KEY = 'englishpath.auth';

/** Адрес edge-функции Supabase */
export const functionUrl = (name: string) => CLOUD_CONFIG.supabaseUrl + '/functions/v1/' + name;
