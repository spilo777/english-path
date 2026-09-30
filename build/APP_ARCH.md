# English Path — архитектура и правила для разработчиков

Сайт: **Vite + React 19 + TypeScript** в `app/`. Контент — JSON в `app/public/data`, сборка данных — скрипты в `build/`, база и функции — `supabase/`, проверки и выкладка — `.github/workflows/app.yml`.

Приложение собрано из слоёв. Контент описывается наборами в файлах по уровням. Из наборов строятся коллекции, курсы и категории (классический Builder), и всё это передаётся движку:

```ts
import { A1_WordCards } from '@content/word-cards/a1';
const wc_La1_collection = new Collection().addWordCards(A1_WordCards);
export const engine = new ENEngine(engineConfig).addCollection(wc_La1_collection);
```

## Слои

Импорты идут **только вниз**:

```
L4  интерфейс   app/ (App, router, AppChrome)  pages/  components/  styles/   React; данные — через движок и источники
L3  catalog/    что содержит приложение: collections/, courses/, categories.ts, engine.config.ts, index.ts → engine
L2b engine/     строители Collection, Course, Category и ENEngine; React-привязка (react.tsx)
L2a content/    виды контента: модели, источники, наборы по уровням, логика вида (без React, кроме hooks.ts)
L1  core/       инфраструктура: конфиг, данные, прогресс, повторения, облако, звук, перевод, картинки, лига, уведомления
L0  utils/      общие помощники без зависимостей от приложения
```

| Слой | Может импортировать |
|---|---|
| `utils` | ничего из проекта |
| `core` | `utils` |
| `content` | `core`, `utils` |
| `engine` | `content`, `core`, `utils` |
| `catalog` | всё ниже |
| интерфейс | всё |

Ещё два правила:
- В слоях `utils`…`catalog` React подключают только файлы `hooks.ts(x)` / `react.tsx`. Остальной код можно тестировать без браузера.
- CSS подключает только интерфейс.

Правила проверяет `tests/boundaries.test.ts` (он блокирует выкладку), а для псевдонимов — ещё и ESLint (`no-restricted-imports`).

**Псевдонимы** (tsconfig `paths` + vite `resolve.alias`): `@utils`, `@core/*`, `@content/*`, `@engine`, `@catalog`.

## Дерево `app/src`

```
utils/        collections date level math plural random storage text  (+ index.ts)
core/
  config/         EngineConfig (types), DEFAULT_CONFIG (defaults), getConfig/setConfig (current)
  data/           loader (loadJSON, peekJSON, dataUrl), paths, hooks (useJSON)
  progress/       types (Progress…), store (englishpath.v1), defaults, counters, xp, hooks (useProgress)
  srs/            deck, scheduler (SM-2 как в Anki), classify (cardKind, cardLearned, isLearned)
  cloud/          config, types, merge (чистое слияние), client (вход, синхронизация, редкость, Яндекс), hooks
  audio/          unlock (onGesture), sfx (ding), speech, live (записи носителей), hooks (useIpa)
  translate/      lookup (словарь по нажатию), translate (автоперевод)
  images/         covers (+ covers-map), word-images, hooks (useCover)
  league/         лиги и друзья
  notifications/  notify (тосты без React), push (web push)
  achievements/   runtime (редкость, очки, уровни, detectNew), rarity (pctOf)
content/
  base/           Source (jsonSource, derive, all, chain, staticSource, lazySource), ContentSet, defineSet, hooks (useSource)
  word-cards/     model, sources, define, a1…b2, phrases, review-queue, mark
  lessons/        model, sources (course.json, units/<id>.json, lessons.json, syllabus), progress, finish, murphy, a1…b2, games
  texts/          model, sources, articles/a1…b2, dialogs/a1…b2, recommend, resolve, known-words
  lectures/       грамматика уроков по уровням
  books/          model, sources, adapted, original, progress
  tenses/         model, sources, all, results, trainer
  exercises/      model, sources (упражнения урока), check (проверка ответа)
  listening/      model, channels, feed, hooks, sources, a1…b2
  placement/      model, sources, all, scoring
  dictionary/     model, sources, main
  letters/        model, define (вид есть, материалов пока нет)
  achievements/   model, add, definitions/<категория>.ts, list (ACH_LIST), all, context, hooks
engine/       collection, course, category, registry, engine (ENEngine), types, react (EngineProvider, useEngine…)
catalog/      engine.config.ts, collections/words.ts, courses/grammar.ts, categories.ts, hooks.ts (useMainCourse), index.ts
app/ pages/ components/ styles/
```

## Контент: наборы и источники

**Источник** (`Source<T>`) — ленивые данные с памятью. `load()` загружает данные, а `peek()` отдаёт уже готовое значение: одну и ту же ссылку при каждом вызове, что важно для React. JSON в сборку не вшивается, он грузится через `core/data` (кеш, `?v=` версии сборки, service worker).

| Функция | Что делает |
|---|---|
| `jsonSource(path, map?)` | файл из `public/data` |
| `derive(src, key, fn)` | выборка или преобразование, считается один раз на значение |
| `all(key, parts)` | несколько источников как один массив |
| `chain(src, key, next)` | источник, который зависит от значения другого (уроки уровня → их тела) |
| `staticSource` | данные, которые уже есть в коде |
| `lazySource` | модуль грузится отдельно через `import()`, в стартовую сборку не попадает (описания достижений, каналы) |

**Набор** (`ContentSet`) — описание и источник элементов одного вида. Сам по себе набор ничего не грузит. Каждый набор лежит в своём файле:

```ts
// content/word-cards/a1.ts
export const A1_WordCards = defineWordCards({
    id: 'deck-A1',
    title: 'Слова A1',
    level: 'A1',
    icon: 'plant',
    source: deckByLevel('A1'), // words.json → WordCard, отбор по уровню
});
```

Виды контента: `word-cards`, `text`, `book`, `lecture`, `tense`, `exercises`, `lesson`, `listening`, `letter`, `placement`, `dictionary`, `achievement`. Тип элемента каждого вида задан в `engine/types.ts` (`KindItems`).

## Движок

```ts
// catalog/courses/grammar.ts
export const grammarCourse = new Course({ id: 'grammar', title: 'Грамматика' })
    .describeLevels(levelInfo) // названия и цели уровней из course.json
    .level('A1', new Collection({ id: 'grammar-A1' }).addLessons(A1_Lessons).addLectures(A1_Lectures))
    .extraTrack('games', new Collection({ id: 'grammar-games' }).addLessons(Games_Lessons));

// catalog/categories.ts — одна категория, разделённая по уровням
export const libraryCategory = new Category({ id: 'library', title: 'Библиотека' })
    .splitByLevel([A1_Articles, A1_Dialogs, A1_Listenings /* … */]);

// catalog/index.ts
export const engine = new ENEngine(engineConfig).addCategory(grammarCategory).addCategory(libraryCategory);
```

- **`Collection`**:
  - у каждого вида свой метод `add…` (`addWordCards`, `addTexts`, `addLessons`…) и есть общий `add`;
  - без `id` коллекция получает id из своих наборов (`col:deck-A1`), а название и уровень — от них же;
  - `build()` проверяет вид и повторы наборов и отдаёт замороженный `CollectionDef` (`of`, `has`, `load`).
- **`Course`**:
  - уровни — это коллекции с уроками, плюс ветки (`extraTrack`), шаги урока (`steps`) и своё правило открытия (`unlock`);
  - `index()` собирает индекс курса в формате `course.json`;
  - `isUnlocked`, `current` и `progress` работают по тем же правилам, что `content/lessons/progress`.
- **`Category`**: курсы и коллекции одного раздела; `splitByLevel` делает по коллекции на уровень.
- **`ENEngine(config)`**:
  - применяет конфиг (`setConfig`) и ведёт реестр с проверкой повторов;
  - поиск: `collections({level, category, kind})`, `course`, `category`, `sets(kind)`, `find`;
  - запуск: `start()` — облако сразу, если есть вход; `whenIdle()` — после первого экрана облако, заранее грузит данные и записывает в лигу при входе;
  - для страниц: `progress` и `services`.
- **React**: `<EngineProvider engine>` в `main.tsx`; хуки `useEngine()`, `useCourseDef(id)`, `useCollectionDef(id)`, `useCategoryDef(id)`. Основной курс для страниц — `useMainCourse()` из `catalog/hooks.ts`.

## Конфиг (`core/config`)

Все настройки, которые раньше были константами, лежат в `EngineConfig`. Значения по умолчанию (`DEFAULT_CONFIG`) равны прежним. Разделы:

| Раздел | Что внутри |
|---|---|
| `app` | название, версия сборки |
| `data` | папка с данными |
| `storage` | ключи localStorage |
| `levels` | уровни и их названия |
| `course` | порог сдачи 0.8, стартовый уровень |
| `srs` | начало учебного дня, leech, «выучено» с 21 дня, новых в день |
| `xp` | очки 1/2/10, как у лиги на сервере |
| `cloud` | адрес, ключ, SDK, пороги |
| `speech` | скорость, словарь произношения |

Переопределение — в `catalog/engine.config.ts`. Модули ядра читают `getConfig()` в момент вызова. Исключение — ключи хранилища: их читают один раз при запуске, и менять их нельзя.

## Как добавить…

**…набор существующего вида** (например, слова C1):
1. Создайте файл `content/word-cards/c1.ts` с `defineWordCards({ id: 'deck-C1', …, source: deckByLevel('C1') })`.
2. Экспортируйте набор из `content/word-cards/index.ts`.
3. Добавьте его в каталог: `new Collection().addWordCards(C1_WordCards)` в `catalog/collections/words.ts` и в категорию.

**…новый вид контента** (например, «Песни»):
1. `content/songs/model.ts` — тип элемента.
2. `content/songs/sources.ts` — источники (`jsonSource('songs.json')`, выборки по уровню).
3. `content/songs/define.ts` — `defineSet('song', …)`.
4. Файлы наборов `a1.ts`… и `index.ts`.
5. Вид `'song'` — в `ContentKind` (`content/base/object.ts`), тип элемента — в `KindItems` (`engine/types.ts`). Метод `addSongs` в `Collection` — по желанию: до этого работает `add(...)`.
6. Тест с числом элементов по данным — по образцу `tests/content-sets.test.ts`.

**…курс или раздел** — в `catalog/courses/*.ts` и `catalog/categories.ts`. Страница берёт его из движка через `useCourseDef(id)` / `useCategoryDef(id)`.

## Правила кода

- TypeScript strict, без `any`. Исключение — данные от внешних API (Supabase, Википедия): там `unknown` + проверка или узкий тип.
- Компоненты — функции, состояние — хуки. Прогресс менять только через `update(s => …)`. Логика предметной области (что записать, что показать дальше) живёт в `content/*` или `core/*` чистыми функциями, а не в страницах.
- HTML из контента (поля `html`, `text` шагов walk, `formula`) выводить через `dangerouslySetInnerHTML` — это наш контент. Всё остальное — JSX.
- Стили: у компонента или страницы свой `Имя.css` рядом. Общее — в `components/ui.css`, `styles/base.css`.
- Тексты интерфейса и комментарии в коде — русские, короткие.
- Каждая страница: мобильная (390px) и десктоп (1440px) без горизонтальной прокрутки.
- Иконки — веб-шрифт Phosphor (`<Icon name="house" />`, `icon: 'house'` в наборах). Все используемые имена проверяет `tests/icons.test.ts`.

## Совместимость (не ломать)

- **Прогресс** — `localStorage['englishpath.v1']` и `progress.state` в Supabase. Формат, чтение, запись и слияние закреплены эталоном `tests/fixtures/progress-v1.golden.json` (`tests/progress-compat.test.ts`). Менять его можно только осознанно, с новым эталоном в том же коммите.
- **Адреса** `#/…` обрабатывает `app/App.tsx` (`resolve()`). Пути к данным — `core/data/paths.ts`. `build/covers.mjs` читает `src/core/images/covers-map.ts`.
- **Достижения**: id, порядок и цвета значков закреплены эталоном `tests/fixtures/achievements.golden.json`.

## Проверки

- В `app/`: `npm run typecheck && npm test && npm run lint && npm run build && npm run e2e`.
- **CI** (`.github/workflows/app.yml`):
  - на `main` и ветках `refactor/**` запускаются typecheck, unit, lint, сборка и e2e; отчёт — в ветку `ci-report`;
  - выкладка на GitHub Pages идёт **только из `main`** и только если зелёные typecheck, unit, сборка и e2e;
  - lint пока только в отчёте, выкладку не блокирует.
- Новая логика — с unit-тестом в `tests/`; данные для тестов отдаёт `tests/helpers/data.ts` (fetch из `public/data`).
