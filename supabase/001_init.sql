-- English Path: схема базы Supabase (уже применена к проекту rxpmzsresfuevebkirsk как миграция init_progress_and_achievements).
-- Хранится для истории. Повторно запускать не нужно.

create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  state      jsonb not null default '{}'::jsonb,   -- весь прогресс ученика
  updated_at timestamptz not null default now(),
  device     text
);
alter table public.progress enable row level security;
create policy "progress: read own"   on public.progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "progress: insert own" on public.progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "progress: update own" on public.progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "progress: delete own" on public.progress for delete to authenticated using ((select auth.uid()) = user_id);

create table if not exists public.user_achievements (
  user_id     uuid not null references auth.users (id) on delete cascade,
  ach_id      text not null check (char_length(ach_id) <= 64),
  unlocked_at timestamptz not null default now(),
  primary key (user_id, ach_id)
);
alter table public.user_achievements enable row level security;
create policy "ach: read own"   on public.user_achievements for select to authenticated using ((select auth.uid()) = user_id);
create policy "ach: insert own" on public.user_achievements for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "ach: delete own" on public.user_achievements for delete to authenticated using ((select auth.uid()) = user_id);

-- Редкость достижений: только агрегаты (сколько учеников получили), без личных данных.
create or replace function public.achievement_stats()
returns table (ach_id text, holders bigint, total_users bigint)
language sql stable security definer set search_path = ''
as $$
  with total as (select count(*)::bigint as n from public.progress)
  select a.ach_id, count(*)::bigint, (select n from total)
  from public.user_achievements a
  group by a.ach_id;
$$;
revoke all on function public.achievement_stats() from public, anon;
grant execute on function public.achievement_stats() to authenticated;

create or replace function public.touch_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end $$;
create trigger progress_touch before update on public.progress
for each row execute function public.touch_updated_at();
