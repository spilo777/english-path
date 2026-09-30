-- Озвучка через Yandex SpeechKit: общие лимиты символов для перевода и озвучки, кеш аудио в закрытом бакете.
-- Как и в 006: таблицы и функции доступны только edge-функциям (service_role), не сайту и не пользователям.

-- 1) Учёт символов по видам: 'tr' — перевод, 'tts' — озвучка. Прежние строки — перевод.
alter table public.translate_usage add column if not exists kind text not null default 'tr';
alter table public.translate_usage drop constraint if exists translate_usage_kind_check;
alter table public.translate_usage add constraint translate_usage_kind_check check (kind in ('tr', 'tts'));
alter table public.translate_usage drop constraint if exists translate_usage_pkey;
alter table public.translate_usage add primary key (kind, user_id, day);

-- 2) Списать символы до запроса в Яндекс. Атомарно: при превышении лимита ничего не списывается.
--    Возвращает 'ok', 'user' (исчерпан лимит ученика) или 'total' (исчерпан общий лимит сайта).
create or replace function public.yandex_take(p_kind text, p_user uuid, p_chars integer, p_user_max integer, p_total_max integer)
returns text
language plpgsql security definer set search_path = ''
as $$
declare
  total_id constant uuid := '00000000-0000-0000-0000-000000000000';
  used_user integer;
  used_total integer;
begin
  if p_kind is null or p_kind not in ('tr', 'tts') or p_user is null or p_user = total_id
     or p_chars is null or p_chars <= 0 or p_chars > 1000 then
    raise exception 'yandex_take: bad arguments';
  end if;
  -- строки дня создаём заранее и блокируем обе — параллельные запросы не проскочат лимит
  insert into public.translate_usage (kind, user_id, day, chars)
    values (p_kind, p_user, current_date, 0), (p_kind, total_id, current_date, 0)
    on conflict (kind, user_id, day) do nothing;
  select chars into used_total from public.translate_usage
    where kind = p_kind and user_id = total_id and day = current_date for update;
  select chars into used_user from public.translate_usage
    where kind = p_kind and user_id = p_user and day = current_date for update;
  if used_total + p_chars > p_total_max then return 'total'; end if;
  if used_user + p_chars > p_user_max then return 'user'; end if;
  update public.translate_usage set chars = chars + p_chars
    where kind = p_kind and day = current_date and user_id in (p_user, total_id);
  return 'ok';
end
$$;
revoke all on function public.yandex_take(text, uuid, integer, integer, integer) from public, anon, authenticated;
grant execute on function public.yandex_take(text, uuid, integer, integer, integer) to service_role;

-- 3) Вернуть символы, если Яндекс не ответил (ошибка — не повод тратить лимит ученика)
create or replace function public.yandex_refund(p_kind text, p_user uuid, p_chars integer)
returns void
language sql security definer set search_path = ''
as $$
  update public.translate_usage set chars = greatest(0, chars - least(greatest(p_chars, 0), 1000))
    where kind = p_kind and day = current_date
      and user_id in (p_user, '00000000-0000-0000-0000-000000000000'::uuid);
$$;
revoke all on function public.yandex_refund(text, uuid, integer) from public, anon, authenticated;
grant execute on function public.yandex_refund(text, uuid, integer) to service_role;

-- 4) Прежняя функция перевода больше не нужна (edge-функция translate зовёт yandex_take)
drop function if exists public.translate_take(uuid, integer, integer, integer);

-- 5) Кеш озвучки: закрытый бакет, политик нет — читать и писать может только edge-функция tts.
--    Повтор той же фразы не оплачивается и не расходует лимит.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('tts', 'tts', false, 1048576, array['audio/mpeg'])
on conflict (id) do update set public = false, file_size_limit = 1048576, allowed_mime_types = array['audio/mpeg'];
