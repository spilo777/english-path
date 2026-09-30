-- Перевод через Яндекс: дневные лимиты символов и кеш переводов.
-- Обе таблицы закрыты: RLS включён, политик нет — читать и писать может только edge-функция translate
-- (ключ service_role на сервере). Пользователи и сайт к ним доступа не имеют.

-- 1) Сколько символов отправлено в Яндекс за день: по пользователю и всего (user_id = нулевой uuid)
create table if not exists public.translate_usage (
  user_id uuid not null,
  day date not null default current_date,
  chars integer not null default 0 check (chars >= 0),
  primary key (user_id, day)
);
alter table public.translate_usage enable row level security;
revoke all on public.translate_usage from anon, authenticated;

-- 2) Кеш переводов: одинаковый запрос не оплачивается повторно
create table if not exists public.translate_cache (
  key text primary key check (char_length(key) <= 320),
  result jsonb not null,
  created_at timestamptz not null default now()
);
alter table public.translate_cache enable row level security;
revoke all on public.translate_cache from anon, authenticated;
create index if not exists translate_cache_created_at on public.translate_cache (created_at);

-- 3) Списать символы до запроса в Яндекс. Атомарно: при превышении лимита ничего не списывается.
--    Возвращает 'ok', 'user' (исчерпан лимит пользователя) или 'total' (исчерпан общий лимит проекта).
create or replace function public.translate_take(p_user uuid, p_chars integer, p_user_max integer, p_total_max integer)
returns text
language plpgsql security definer set search_path = ''
as $$
declare
  total_id constant uuid := '00000000-0000-0000-0000-000000000000';
  used_user integer;
  used_total integer;
begin
  if p_user is null or p_user = total_id or p_chars is null or p_chars <= 0 or p_chars > 1000 then
    raise exception 'translate_take: bad arguments';
  end if;
  -- строки дня создаём заранее и блокируем обе — параллельные запросы не проскочат лимит
  insert into public.translate_usage (user_id, day, chars) values (p_user, current_date, 0), (total_id, current_date, 0)
    on conflict (user_id, day) do nothing;
  select chars into used_total from public.translate_usage where user_id = total_id and day = current_date for update;
  select chars into used_user from public.translate_usage where user_id = p_user and day = current_date for update;
  if used_total + p_chars > p_total_max then return 'total'; end if;
  if used_user + p_chars > p_user_max then return 'user'; end if;
  update public.translate_usage set chars = chars + p_chars
    where day = current_date and user_id in (p_user, total_id);
  return 'ok';
end
$$;
revoke all on function public.translate_take(uuid, integer, integer, integer) from public, anon, authenticated;
grant execute on function public.translate_take(uuid, integer, integer, integer) to service_role;

-- 4) Уборка: учёт старше 60 дней и кеш старше 180 дней — pg_cron 'translate-cleanup' каждый день в 03:17 UTC
create or replace function public.translate_cleanup()
returns void
language sql security definer set search_path = ''
as $$
  delete from public.translate_usage where day < current_date - 60;
  delete from public.translate_cache where created_at < now() - interval '180 days';
$$;
revoke all on function public.translate_cleanup() from public, anon, authenticated;
grant execute on function public.translate_cleanup() to service_role;

select cron.unschedule('translate-cleanup') where exists (select 1 from cron.job where jobname = 'translate-cleanup');
select cron.schedule('translate-cleanup', '17 3 * * *', $$ select public.translate_cleanup(); $$);
