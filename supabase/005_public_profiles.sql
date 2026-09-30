-- Публичные профили: участники одной группы лиги (на этой неделе) и друзья видят сводку прогресса друг друга.
-- Только ник, код и агрегаты — никогда email и не сам progress.state.

-- 1) В таблице лиги нужен код участника, чтобы открыть его профиль
drop function if exists public.league_board();
create function public.league_board()
returns table(place integer, name text, xp integer, is_me boolean, is_friend boolean, league smallint, week date, members integer, code text)
language sql stable security definer set search_path to ''
as $$
  with me as (select m.week, m.league, m.grp from public.league_members m where m.week = public.week_start() and m.user_id = auth.uid()),
  g as (
    select m.user_id, pr.name, pr.friend_code, public.week_xp(m.user_id, me.week) as xp, me.league, me.week
    from me join public.league_members m on m.week = me.week and m.league = me.league and m.grp = me.grp
    join public.profiles pr on pr.user_id = m.user_id
  )
  select (row_number() over (order by g.xp desc, g.name))::int, g.name, g.xp, g.user_id = auth.uid(),
    exists (select 1 from public.friends f where f.user_id = auth.uid() and f.friend_id = g.user_id),
    g.league, g.week, (count(*) over ())::int, g.friend_code
  from g order by 1
$$;
revoke all on function public.league_board() from public, anon;
grant execute on function public.league_board() to authenticated;

-- 2) Сводка чужого профиля по коду
create or replace function public.profile_view(p_code text)
returns jsonb
language plpgsql stable security definer set search_path to ''
as $$
declare
  me uuid := auth.uid();
  them uuid;
  pr record;
  st jsonb;
  wk date := public.week_start();
  res jsonb;
begin
  if me is null then raise exception 'not signed in'; end if;
  select p.user_id, p.name, p.friend_code, p.league into pr from public.profiles p where p.friend_code = upper(trim(p_code));
  if pr.user_id is null then raise exception 'code not found'; end if;
  them := pr.user_id;
  if them <> me
    and not exists (select 1 from public.friends f where f.user_id = me and f.friend_id = them)
    and not exists (
      select 1 from public.league_members a join public.league_members b
        on b.week = a.week and b.league = a.league and b.grp = a.grp
      where a.week = wk and a.user_id = me and b.user_id = them)
  then raise exception 'not allowed'; end if;

  select coalesce(p.state, '{}'::jsonb) into st from public.progress p where p.user_id = them;
  st := coalesce(st, '{}'::jsonb);

  with cards as (
    select c.value->>'state' as s, coalesce((c.value->>'ivl')::numeric, 0) as ivl, c.key
    from jsonb_each(case when jsonb_typeof(st->'cards') = 'object' then st->'cards' else '{}'::jsonb end) c
    where jsonb_typeof(c.value) = 'object'
  ),
  kinds as (
    select case when s = 'new' then 'new' when s = 'learn' or ivl < 7 then 'learn' when ivl < 21 then 'fam' else 'done' end as k, key
    from cards
  ),
  units as (
    select u.key as id, nullif(u.value->>'testBest', '')::numeric as best
    from jsonb_each(case when jsonb_typeof(st->'units') = 'object' then st->'units' else '{}'::jsonb end) u
    where jsonb_typeof(u.value) = 'object'
  ),
  act as (
    select a.key::date as d,
      coalesce((a.value->>'reviews')::numeric, 0) + 2 * coalesce((a.value->>'exercises')::numeric, 0) + 10 * coalesce((a.value->>'reads')::numeric, 0) as xp
    from jsonb_each(case when jsonb_typeof(st->'activity') = 'object' then st->'activity' else '{}'::jsonb end) a
    where a.key ~ '^\d{4}-\d{2}-\d{2}$' and jsonb_typeof(a.value) = 'object'
  )
  select jsonb_build_object(
    'name', pr.name,
    'code', pr.friend_code,
    'league', pr.league,
    'is_me', them = me,
    'is_friend', exists (select 1 from public.friends f where f.user_id = me and f.friend_id = them),
    'streak', public.streak_of(them),
    'week_xp', public.week_xp(them, wk),
    'total_xp', coalesce((select sum(xp) from act), 0)::int,
    'active_days', (select count(*) from act)::int,
    'learning', (select count(*) from kinds where k in ('learn', 'fam'))::int,
    'learned', ((select count(*) from kinds where k = 'done')
      + (select count(*) from jsonb_object_keys(case when jsonb_typeof(st->'known') = 'object' then st->'known' else '{}'::jsonb end) kk
         where not exists (select 1 from cards c where c.key = kk)))::int,
    'passed', coalesce((select jsonb_agg(id) from units where best >= 0.8), '[]'::jsonb),
    'grammar', (select round(avg(best) * 100) from units where best is not null)::int,
    'start_level', st->'settings'->>'startLevel',
    'accent', st->'settings'->>'accent',
    'answers', case when coalesce((st->'stats'->>'ansAll')::numeric, 0) > 0
      then round((st->'stats'->>'ansOk')::numeric / (st->'stats'->>'ansAll')::numeric * 100)::int end,
    'ach', (select count(*) from jsonb_object_keys(case when jsonb_typeof(st->'ach') = 'object' then st->'ach' else '{}'::jsonb end))::int
  ) into res;
  return res;
end $$;
revoke all on function public.profile_view(text) from public, anon;
grant execute on function public.profile_view(text) to authenticated;
