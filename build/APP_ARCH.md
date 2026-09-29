# English Path v2 — архитектура и правила для разработчиков

Переписываем сайт `/home/claude/English` (старый: `index.html`, `js/app.js` ~2600 строк, `css/style.css`, `data/*.js`) на **Vite + React 19 + TypeScript** в папке `/home/claude/English/app`. Функциональность и внешний вид — как у старого сайта (он в продакшене и работает; бери оттуда логику, тексты интерфейса и стили), но код — нормальный: модули, компоненты, типы, без `innerHTML`-шаблонов (кроме HTML из контента), без глобальных переменных.

## Что уже есть
- `app/src/lib/types.ts` — типы контента и прогресса. `app/src/lib/store.ts` — прогресс (`useProgress()`, `update(s => …)`, `getState()`, `replaceState()`, `onSave()`, `track`, `recordAnswer`, `unitState`, `streak`, `bestStreak`, `tomb`, `today`, `PASS`, `DAY`). Формат прогресса совместим со старым (`localStorage['englishpath.v1']`).
- `app/src/lib/srs.ts` — карточки: `addCard, schedule, dueCards, newCards, deckPending, newAvailable, takeNew, countNew, newLeftToday, fmtIvl, cardKind, isLearned, cardId`.
- `app/src/lib/data.ts` — загрузка JSON: `useCourse, useUnit(id), useLessons(), useSyllabus, useLibrary, useTopics, useTenses, useBookIndex, useBook(id), useDeck(), useJSON(path), loadJSON(path), peekJSON, paths`.
- `app/src/app/router.ts` — `useRoute()` → массив частей хеша, `go('#/…')`, `href(...)`.
- `app/src/app/App.tsx` — маршруты → страницы (`pages/*.tsx`, default export, пропс `params: string[]` = части хеша, например `['unit','a1-3','practice']`).
- `app/src/components/ui.tsx` — `Page, TopBar, RoundBtn, BackLink, Section, Tabs, Progress, Icon, toast, plural, shuffle, Loading, LoadError`. `ui.css` — общие стили (topbar, sec, carousel, poster, continue-card, goal-card, tiles4, coll-grid/tile, book-hero, chap-list, bub, prof-head, league, cal, menu-list, tense-*, lvl-*, tabs, topic-*, duo, plan-grid, toast, .page ритм).
- `app/src/styles/tokens.css`, `base.css` — токены и примитивы (`.btn .primary .ghost .small`, `.pill-btn`, `.icon-btn`, `.pill .ok .accent`, `.card`, `.progress`, `.input`, `.row`, `.stack`, `.muted`, `.say`, `.empty`).
- Контент: `app/public/data/*.json` (см. `paths` в data.ts). Уроки: `units/<id>.json` — один `Unit` (поля `grammar`, `walk`, `words`, `texts`, `practice`, `test`); `lessons.json` — компактный индекс всех юнитов (`LessonUnit[]`: id, level, track, английские слова, метаданные текстов без тел) для подсветки новых слов, списков текстов и достижений.
- Иконки — веб-шрифт Phosphor 2.1 (`<Icon name="house" fill />` → `<i class="ph-fill ph-house">`). Список имён: `/tmp/claude-0/ph_icons.txt`.
- Supabase-клиент подключён тегом `<script>` в `index.html` → `window.supabase` (npm-пакета нет).

## Контракты модулей (пиши/используй ровно такие экспорты)
- `lib/lookup.ts`: `clean(w)`, `candidates(w)`, `ensureDict(): Promise<void>` (грузит dict.json + forms.json + words.json), `lookup(raw): {word:string, tr:string}[]` (синхронно, после ensureDict; до загрузки — []), `addToDict(en, ru)` (слова уроков).
- `lib/speech.ts`: `speak(text, opts?: {rate?:number; speaker?:number; onend?:()=>void; tts?:boolean})`, `speakTTS(text, opts?)`, `stopSpeech()`, `liveAudio(word): Promise<{u:string, ipa:string}|null>`, `useIpa(word): {ipa?:string; live:boolean}`, `listVoices(): SpeechSynthesisVoice[]`. Разблокировка звука на iOS при первом касании — внутри модуля.
- `lib/sfx.ts`: `ding(kind: 'ok'|'bad'|'done')` (учитывает `settings.sfx`).
- `lib/translate.ts`: `autoTranslate(q): Promise<string|null>` (Яндекс через облако, если настроен, иначе MyMemory, с кешем), `translationAlts(q): string[]`, `gtUrl(q)`.
- `lib/images.ts`: `useCover(id: string, wikiTitle?: string): string|undefined` (обложки статей/книг: Википедия по карте, кеш localStorage 30 дней), `autoImage(en): Promise<string|null>` (картинка-ассоциация для карточки).
- `lib/course.ts`: `STEPS` (`[['words','Слова'],['grammar','Грамматика'],['reading','Чтение'],['practice','Практика'],['test','Тест']]`), `mainUnits(course)`, `passed(s,id)`, `isUnlocked(s, meta, course)`, `unitProgress(s,id)`, `nextStep(s,id)`, `currentUnit(s, course)`, `unitBooksText(meta, syllabus)`.
- `lib/cloud.ts`: `Cloud` = `{ enabled, init(), status(): {user, lastSync, lastError, pushing, pulling}, onChange(fn), signUp, signIn, signOut, resetPassword, resendConfirm, updatePassword, pull(), queuePush(), realPct(achId), takeAuthEvent(), peekAuthEvent(), yandexReady(), yandex(q, mode) }`. Слияние прогресса — порт `merge` из `js/cloud.js`.
- `lib/achievements.ts`: `ACH_LIST`, `achCtx(s, extra)`, `checkAch(s): Ach[]` (новые), `engagement(s)`, `pctOf(a)`, `ACH_TIERS/RANKS`; компонент `components/AchPopups.tsx`.
- `components/Popover.tsx`: `<PopoverHost/>` (рендерится в AppChrome) + функции `openWord({anchor: Element, word, sentence?, sid?, onSentence?, src?})`, `openSentence({anchor: Element, text, speaker?, onPrev?, onNext?, index?, total?})`, `closePopover()`.
- `components/Enhance.tsx`: хук `useLessonEnhance(ref, deps)` — в контейнере с HTML контента: делает английские слова нажимаемыми (перевод), подчёркивает пунктиром новые слова (нет в карточках/«знаю»), `.say` озвучивает, `.mini` превращает в мини-проверку (со звуком и статистикой), добавляет кнопку «Перевод».
- `components/Exercises.tsx`: `<ExerciseRunner list={Exercise[]} mode="practice"|"test" onFinish={(score)=>ReactNode} />`.
- `components/Walk.tsx`: `<Walk unit={Unit} />` — пошаговая грамматика (прогресс в `unitState(s,id).walk`).
- `components/Posters.tsx`: `<TextPoster t/>`, `<BookPoster b/>`, `<Cover id wiki? cls icon/>`.
- `components/GoalCard.tsx`: `<GoalCard title? />` (три кольца цели на день).

## Правила кода
- TypeScript strict, без `any`, кроме данных от внешних API (Supabase, Википедия) — там `unknown` + проверка или узкий тип.
- Компоненты — функции, состояние — хуки. Прогресс менять только через `update(s => …)`.
- HTML из контента (поля `html`, `text` шагов walk, `formula`) выводить через `dangerouslySetInnerHTML` — это наш контент. Всё остальное — JSX.
- Стили: у компонента/страницы свой `Имя.css` рядом (импорт в tsx). Бери правила из старого `css/style.css`, но только нужные, без `!important`, без дублей. Общие вещи — уже в ui.css/base.css.
- Тексты интерфейса — русские, как на старом сайте. Комментарии в коде — короткие, по-русски.
- Каждая страница: мобильная (390px) и десктоп (1440px) без горизонтальной прокрутки.
- Не трогай чужие файлы из своего задания без необходимости; если нужен новый общий хелпер — положи в свой файл и экспортируй.

## Как проверять локально (npm недоступен — есть глобальные esbuild/React/TypeScript/Playwright)
1. Сборка: `node /home/claude/English/build/local-build.mjs` (≈0.2 с, ошибки esbuild видны сразу; типы esbuild не проверяет).
2. Сервер: `/tmp/claude-0/serve.sh` (http://127.0.0.1:4173, отдаёт `app/.local`).
3. Скриншоты и ошибки консоли: `python3 /tmp/claude-0/shot.py "маршрут1,маршрут2" [ширина]` → `/tmp/claude-0/sw/n-<ширина>-<маршрут>.png`, печатает текст и ERRORS. Посмотри скриншоты (Read) на 390 и 1440.
4. Для сценариев (клики, прохождение упражнений) пиши свой python-скрипт на Playwright по образцу shot.py.
5. Типы проверяет CI (GitHub Actions) после пуша — ты НЕ пушишь. Пиши типы аккуратно: явные типы пропсов, никаких неявных any.
