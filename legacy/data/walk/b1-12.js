// Грамматика по шагам для юнита b1-12: passive глубже — одна схема на все времена; карта «active → passive»; was being done (процесс в прошлом); had been done (сделано ещё раньше); be done / to be done после must, can, want, need, going; must / might / can’t / should have been done и seem to have been done; глаголы без passive (happen, disappear…) и пары «сам / кто-то сделал»; русское «-ся», «как называется», passive вместо «они»; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-12'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Одна схема на все времена', steps: [
      { t: 'idea', text: `Вы уже знаете (урок A2-18): passive — это <b>be + третья форма (V3)</b>. Предмет не делает сам, с ним делают; «кем» — через <b>by</b>.`,
        ex: [['The app is updated every month.', 'Приложение обновляют каждый месяц.'], ['My bike was stolen.', 'Мой велосипед украли.'], ['The bug has been fixed.', 'Баг исправили.']] },
      { t: 'idea', text: `Новое в этом уроке — длинные формы: «когда я пришёл, комнату убирали», «файл, наверное, удалили». Правило то же: время показывает <b>be</b>, а V3 в конце не меняется никогда.`,
        ex: [['When I arrived, the room was being cleaned.', 'Когда я пришёл, комнату убирали.'], ['The file must have been deleted.', 'Файл, наверное, удалили.'], ['I want to be left alone.', 'Я хочу, чтобы меня оставили в покое.']],
        tip: `Русская фраза без «кто» — «убирали», «исправили», «удалили» — почти всегда сигнал: по-английски нужен passive.` },
      { t: 'check', q: 'Скажите: «Мой аккаунт взломали!» (итог важен сейчас)', o: ['My account has hacked!', 'My account has been hacked!', 'My account hacked!'], a: 1,
        why: 'Аккаунт сам ничего не взламывал → passive; итог сейчас → has been + V3.' },
      { t: 'idea', text: `Итог: passive в любом времени = be в нужном времени + V3.`,
        rows: [['be — меняется', 'is / was / is being / has been / had been…'], ['V3 — не меняется', 'cleaned, deleted, stolen']] }
    ]},

    // ───────────── 2. Карта ─────────────
    { title: 'Карта: как любое время превращается в passive', steps: [
      { t: 'idea', text: `Возьмите фразу, где делает кто-то: They were testing the game. Ставим игру вперёд, а <b>be</b> — в том же времени, что было: were testing → was <b>being</b> tested.`,
        lit: [['The game', 'игру'], ['was being', '(как раз в процессе)'], ['tested', 'тестировали']],
        rows: [['They test it.', 'It is tested.'], ['They are testing it.', 'It is being tested.'], ['They were testing it.', 'It was being tested.']] },
      { t: 'idea', text: `С have, had и should have — так же. Заметьте: в passive всегда на одно be больше — появляется <b>being</b> или <b>been</b>.`,
        rows: [['They have tested it.', 'It has been tested.'], ['They had tested it.', 'It had been tested.'], ['They should have tested it.', 'It should have been tested.']],
        tip: `Нужно сказать, кто сделал, — как раньше, by в конце: It was being tested by our QA team (тестировщики).` },
      { t: 'check', q: 'They are repairing the road. → The road ___.', ru: 'Дорогу сейчас ремонтируют.', o: ['is repairing', 'is being repaired', 'has been repaired'], a: 1,
        why: 'are repairing — процесс сейчас → is being + V3.' },
      { t: 'check', q: 'They had closed the shop. → The shop ___.', ru: 'Магазин (к тому времени) уже закрыли.', o: ['had being closed', 'was being closed', 'had been closed'], a: 2,
        why: 'had closed → had been + V3: магазин закрыли люди.' },
      { t: 'idea', text: `Итог: смотрим, какое время у «кто-то делает», ставим be в это время и добавляем V3.`,
        rows: [['were testing', 'was being tested'], ['have / had tested', 'has / had been tested'], ['should have tested', 'should have been tested']] }
    ]},

    // ───────────── 3. was being done ─────────────
    { title: '«Когда я пришёл, кухню красили» — was being done', steps: [
      { t: 'idea', text: `Хотите сказать «Когда я пришёл в офис, кухню красили» — в тот момент как раз шла работа. Это <b>was / were being + V3</b>: как Past Continuous (was doing), только в passive.`,
        lit: [['the kitchen', 'кухню'], ['was being', '(как раз в процессе)'], ['painted', 'красили']],
        ex: [['When I got to the office, the kitchen was being painted.', 'Когда я пришёл в офис, кухню красили.'], ['While the server was being updated, nobody could log in.', 'Пока обновляли сервер, никто не мог зайти.']] },
      { t: 'idea', text: `Одно слово being меняет смысл: без него — работа закончена, с ним — в тот момент ещё шла.`,
        rows: [['The room was cleaned.', 'убрали, готово'], ['The room was being cleaned.', 'как раз убирали, в процессе']] },
      { t: 'check', q: 'When I arrived, the room ___, so I waited outside.', ru: 'Когда я пришёл, комнату как раз убирали, поэтому я подождал снаружи.', o: ['was cleaned', 'was being cleaned', 'had cleaned'], a: 1,
        why: 'В тот момент шёл процесс, а убирали люди → was being + V3.' },
      { t: 'idea', text: `Главная ошибка — забыть being. «The room was cleaning» звучит так, будто комната сама что-то убирала.`,
        bad: 'When I came, the room was cleaning.', good: 'When I came, the room <b>was being cleaned</b>.',
        ex: [['I didn’t know our conversation was being recorded.', 'Я не знал, что наш разговор записывают.'], ['I had a feeling we were being followed.', 'У меня было чувство, что за нами следят.']] },
      { t: 'check', q: 'When we arrived, the stage ___, so the concert started late.', ru: 'Когда мы приехали, сцену (stage) ещё строили, поэтому концерт начался поздно.', o: ['was building', 'had built', 'was being built'], a: 2,
        why: 'Процесс в тот момент + сцену строили люди → was being + V3.' },
      { t: 'idea', text: `Итог: с чем-то как раз что-то делали в момент прошлого → was / were being + V3.`,
        rows: [['одно', 'The office was being painted.'], ['много', 'The files were being deleted.']] }
    ]},

    // ───────────── 4. had been done ─────────────
    { title: '«Когда мы пришли, пиццу уже съели» — had been done', steps: [
      { t: 'idea', text: `Помните Past Perfect из B1-5: had + V3 — «это случилось ещё раньше». В passive — <b>had been + V3</b>: с чем-то это сделали до другого момента в прошлом.`,
        lit: [['all the pizza', 'всю пиццу'], ['had been', '(уже, раньше)'], ['eaten', 'съели']],
        ex: [['When we arrived at the party, all the pizza had been eaten.', 'Когда мы пришли на вечеринку, всю пиццу уже съели.'], ['By the time fans noticed, the post had been deleted.', 'Когда фанаты заметили, пост уже удалили.']] },
      { t: 'idea', text: `Сравните: was stolen — просто событие в прошлом. had been stolen — украли ещё до того, как я что-то увидел.`,
        rows: [['My bike was stolen last night.', 'украли ночью'], ['When I went outside, my bike had been stolen.', 'украли ещё до того, как я вышел']] },
      { t: 'check', q: 'When I went outside, my bike ___.', ru: 'Когда я вышел, велосипед уже украли.', o: ['was stealing', 'had been stolen', 'had stolen'], a: 1,
        why: 'Украли раньше, чем я вышел, и крал кто-то другой → had been + V3.' },
      { t: 'idea', text: `«Не» — <b>hadn’t been + V3</b>. already встаёт между had и been.`,
        ex: [['The laptop was old, but it hadn’t been used much.', 'Ноутбук был старый, но им почти не пользовались.']],
        bad: 'When I checked, the file already deleted.', good: 'When I checked, the file <b>had already been deleted</b>.' },
      { t: 'check', q: 'The windows were dirty. They ___ for months.', ru: 'Окна были грязные: их не мыли много месяцев.', o: ['hadn’t cleaned', 'weren’t cleaning', 'hadn’t been cleaned'], a: 2,
        why: 'До того момента их не мыли, моют люди → hadn’t been + V3.' },
      { t: 'idea', text: `Итог: сделали ещё раньше другого момента в прошлом → had been + V3.`,
        rows: [['+', 'The bug had been fixed.'], ['−', 'It hadn’t been used.'], ['already', 'It had already been deleted.']] }
    ]},

    // ───────────── 5. be done / to be done ─────────────
    { title: '«Это нужно исправить», «хочу, чтобы меня пригласили» — (to) be done', steps: [
      { t: 'idea', text: `Вы уже знаете: после <b>will, can, must, should</b> идёт <b>be + V3</b>. Так говорят и «надо», и «нельзя», и «было слышно».`,
        ex: [['Something must be done.', 'Надо что-то делать.'], ['This bug can’t be explained.', 'Этот баг невозможно объяснить.'], ['The music could be heard from the street.', 'Музыку было слышно даже с улицы.']],
        bad: 'The report must finish by Friday.', good: 'The report must <b>be finished</b> by Friday.' },
      { t: 'idea', text: `Новое: после <b>want, need, would like, going</b> нужен to — значит, <b>to be + V3</b>.`,
        lit: [['This', 'это'], ['needs', 'нуждается'], ['to be', '(быть)'], ['fixed', 'исправленным']],
        ex: [['This needs to be fixed before the release.', 'Это нужно исправить до релиза.'], ['The meeting is going to be held online.', 'Встречу проведут (hold — проводить) онлайн.'], ['I’d love to be invited.', 'Я бы с радостью получил приглашение.']] },
      { t: 'idea', text: `Хотите сказать «Хочу, чтобы меня оставили в покое». По-русски — целое «чтобы меня…», по-английски короче: «хочу быть оставленным». И смысл противоположен active:`,
        rows: [['I want to invite Max.', 'я приглашаю'], ['I want to be invited.', 'хочу, чтобы меня пригласили'], ['I want to be left alone.', 'хочу, чтобы меня оставили в покое']] },
      { t: 'check', q: 'Please go away. I want ___ alone.', ru: 'Уйди, пожалуйста. Я хочу, чтобы меня оставили в покое.', o: ['to leave', 'to be left', 'being left'], a: 1,
        why: 'Оставляют меня → to be + V3.' },
      { t: 'check', q: 'The new version is going ___ next month.', ru: 'Новую версию выпустят в следующем месяце.', o: ['to release', 'be released', 'to be released'], a: 2,
        why: 'После going нужен to; версию выпускают люди → to be + V3.' },
      { t: 'idea', text: `Итог: там, где нужна форма «как в словаре», passive — это be + V3; если перед ней to — to be + V3.`,
        rows: [['must / can / will', 'be done'], ['want / need / going', 'to be done']] }
    ]},

    // ───────────── 6. must / should have been done ─────────────
    { title: '«Файл, наверное, удалили», «нас должны были предупредить» — have been done', steps: [
      { t: 'idea', text: `Вы уже знаете must have done, should have done (уроки B1-8 и B1-10). Хотите сказать «Файл пропал. Наверняка его удалили». Файл сам не удалял → добавляем <b>been</b>.`,
        lit: [['It', 'его'], ['must', 'наверняка'], ['have been', '(было, прошлое)'], ['deleted', 'удалили']],
        bad: 'The file must have deleted.', good: 'The file must <b>have been deleted</b>.' },
      { t: 'idea', text: `Тот же приём с другими словами-догадками: must — наверняка, might / could — возможно, can’t — не может быть.`,
        rows: [['must have been done', 'наверняка сделали'], ['might / could have been done', 'возможно, сделали'], ['can’t have been done', 'не может быть, чтобы сделали']],
        ex: [['It can’t have been tested — it crashes all the time.', 'Не может быть, что это тестировали: всё время падает.']] },
      { t: 'check', q: 'I haven’t got the package. It ___ to the wrong address.', ru: 'Посылка (package) не пришла. Возможно, её отправили не по тому адресу.', o: ['might have sent', 'might have been sent', 'might been sent'], a: 1,
        why: 'Посылку отправляют люди → might have been + V3.' },
      { t: 'idea', text: `<b>should have been + V3</b> — упрёк: «надо было сделать, а не сделали». После been всегда V3: sent, а не send.`,
        ex: [['We should have been warned about the changes.', 'Нас должны были предупредить об изменениях.'], ['This road should have been repaired years ago.', 'Эту дорогу давно надо было отремонтировать.']],
        bad: 'It should have been send yesterday.', good: 'It should have been <b>sent</b> yesterday.' },
      { t: 'check', q: 'Скажите: «Нас должны были пригласить!»', o: ['We should have invited!', 'We should have been invited!', 'We should be invited!'], a: 1,
        why: 'Упрёк о прошлом, и приглашают нас → should have been + V3.' },
      { t: 'idea', text: `«Похоже, уже сделали» — <b>seem(s) to have been + V3</b>.`,
        ex: [['The problem seems to have been solved.', 'Похоже, проблему решили.'], ['The bug seems to have been added in the last update.', 'Похоже, баг появился с последним обновлением.']] },
      { t: 'idea', text: `Итог: догадка или упрёк о прошлом в passive → слово-догадка + have been + V3.`,
        rows: [['наверняка / возможно / не может быть', 'must / might / can’t have been done'], ['надо было', 'should have been done'], ['похоже', 'seems to have been done']] }
    ]},

    // ───────────── 7. Глаголы без passive ─────────────
    { title: '«Случилось», «пропал»: глаголы, у которых нет passive', steps: [
      { t: 'idea', text: `Не каждое действие можно поставить в passive. Если его нельзя сделать «с кем-то / с чем-то» — <b>happen, disappear, die, arrive, fall, seem, exist</b> (существовать), — passive не бывает.`,
        bad: 'The accident was happened at night. · My keys were disappeared.', good: 'The accident <b>happened</b> at night. · My keys <b>disappeared</b>.' },
      { t: 'check', q: 'A strange thing ___ yesterday.', ru: 'Вчера случилась странная вещь.', o: ['was happened', 'happened', 'has been happened'], a: 1,
        why: 'happen нельзя сделать «с чем-то» → только active.' },
      { t: 'idea', text: `Часто выбор меняет смысл: само случилось или кто-то сделал. Спросите себя, есть ли тот, кто действовал.`,
        rows: [['My phone disappeared.', 'пропал, неизвестно как'], ['My phone was stolen.', 'его украли']],
        ex: [['She fell off her bike.', 'Она упала с велосипеда (сама).'], ['She was knocked off her bike.', 'Её сбили с велосипеда.'], ['He resigned. / He was fired.', 'Он уволился сам. / Его уволили.']] },
      { t: 'check', q: 'Sue ___ because she didn’t enjoy her job any more.', ru: 'Сью уволилась (сама), потому что работа ей больше не нравилась.', o: ['resigned', 'was resigned', 'was fired'], a: 0,
        why: 'Ушла сама → active resigned. У resign нет passive.' },
      { t: 'idea', text: `Итог: happen, disappear, die, arrive, fall — только active. Если действовал кто-то — passive.`,
        rows: [['само', 'It happened. · It disappeared.'], ['кто-то сделал', 'It was stolen. · He was fired.']] }
    ]},

    // ───────────── 8. «-ся», «как называется», passive вместо «они» ─────────────
    { title: 'Русское «-ся», «как называется» и passive вместо «они»', steps: [
      { t: 'idea', text: `Русское <b>«-ся»</b> бывает двух видов. Спросите: делает ли кто-то это действие? Если само — active, если кто-то — passive.`,
        rows: [['Дверь открылась (от ветра).', 'The door opened.'], ['Игра продаётся везде (её продают).', 'The game is sold everywhere.'], ['Баг сейчас исправляется.', 'The bug is being fixed.']] },
      { t: 'idea', text: `«Как называется?», «Как пишется?» — тоже passive: предмет не называет себя сам, его называют люди.`,
        lit: [['What', 'как'], ['is', '(есть)'], ['this tool', 'этот инструмент'], ['called?', 'названный?']],
        ex: [['What is this tool called?', 'Как называется этот инструмент?'], ['How is this word spelled?', 'Как пишется это слово? (spell — писать по буквам)']],
        bad: 'What do these flowers call?', good: 'What <b>are</b> these flowers <b>called</b>?' },
      { t: 'check', q: 'These flowers are beautiful. What ___?', ru: 'Какие красивые цветы. Как они называются?', o: ['do they call', 'are they called', 'are they calling'], a: 1,
        why: 'Цветы не называют сами себя → are they called.' },
      { t: 'idea', text: `В новостях и на работе вместо «они / кто-то / люди» обычно берут passive — так звучит нейтрально.`,
        rows: [['They cancelled all flights.', 'All flights were cancelled.'], ['Somebody has moved the furniture.', 'The furniture has been moved.']] },
      { t: 'idea', opt: true, text: `Так же переворачивают и «меня беспокоит»: The noise doesn’t bother me → <b>I’m not bothered</b> by the noise.`,
        ex: [['I’m not bothered by the noise.', 'Шум мне не мешает.']] },
      { t: 'idea', text: `Итог: «-ся» — проверьте, есть ли тот, кто делает; «как называется / пишется» — passive; вместо «они» — passive.`,
        rows: [['само', 'The door opened.'], ['кто-то делает', 'The game is sold everywhere.'], ['как называется?', 'What is it called?']] }
    ]},

    // ───────────── 9. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'When we arrived, all the tickets ___.', ru: 'Когда мы пришли, все билеты уже продали.', o: ['had been sell', 'had been sold', 'were selling'], a: 1,
        why: 'Продали раньше нашего прихода, продают люди → had been + V3.' },
      { t: 'check', q: 'Скажите: «Этот баг невозможно объяснить»', o: ['This bug can’t be explain.', 'This bug can’t explain.', 'This bug can’t be explained.'], a: 2,
        why: 'После can’t — be, потом V3: explained.' },
      { t: 'check', q: 'When I came, the office ___.', ru: 'Когда я пришёл, в офисе как раз шёл ремонт (renovate — ремонтировать).', o: ['was renovating', 'was being renovated', 'renovated'], a: 1,
        why: 'Процесс в тот момент, офис ремонтировали люди → was being + V3.' },
      { t: 'idea', text: `Итог урока: passive = <b>be в нужном времени + V3</b>. А happen, disappear, die в passive не ставим.`,
        rows: [['was being done · had been done', 'в процессе · ещё раньше'], ['(to) be done', 'после must / want / need'], ['must / should have been done', 'догадка · упрёк о прошлом']] }
    ]}
  ];
})();
