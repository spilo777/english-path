// Грамматика по шагам для юнита b1-5: Past Perfect — прошлое до прошлого на ленте времени, had + третья форма (не, вопрос, ’d), по порядку или шаг назад (сравнение в истории), realise / by the time / thought / причина, have done → had done (just, already, never, yet, the first time), had been doing, had done или had been doing и слова-состояния.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-5'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея: прошлое до прошлого ─────────────
    { title: 'Шаг назад: прошлое, которое было ещё раньше', steps: [
      { t: 'idea', text: `Хотите сказать «Когда я зашёл в игру, друзья <b>уже начали</b> рейд (совместный бой)». Тут два прошлых события, и одно случилось <b>раньше</b> другого. Для этого «прошлого до прошлого» в английском своё время — <b>Past Perfect</b>: had + третья форма.`,
        lit: [['When I logged in,', 'когда я зашёл,'], ['my friends', 'мои друзья'], ['had', '(уже к тому моменту)'], ['started', 'начали'], ['the raid', 'рейд']],
        ex: [['When I logged in, my friends had started the raid.', 'Когда я зашёл, друзья уже начали рейд.'], ['I realised I had left my charger at home.', 'Я понял, что оставил зарядку дома.']] },
      { t: 'idea', text: `Представьте ленту времени в видеоредакторе. Past Simple (logged in, realised) — это место, где стоит курсор рассказа. Всё, что лежит на ленте <b>левее курсора</b>, — had + третья форма.`,
        rows: [['1 — раньше', 'друзья начали рейд', 'had started'], ['2 — курсор рассказа', 'я зашёл в игру', 'logged in']],
        tip: `Perfect здесь, как в have done, значит «уже сделано к моменту». Только момент не «сейчас», а «тогда».` },
      { t: 'idea', text: `По-русски «Когда мы пришли, фильм начался» — непонятно, до нас или при нас. В английском одна форма меняет смысл.`,
        rows: [['When we arrived, the film had started.', 'уже шёл, начало пропустили'], ['When we arrived, the film started.', 'пришли — и тут он начался']] },
      { t: 'check', q: 'Скажите: «Когда я позвонил Ане, она уже легла спать»', o: ['When I called Anna, she went to bed.', 'When I called Anna, she had gone to bed.', 'When I called Anna, she has gone to bed.'], a: 1,
        why: 'Легла ещё до звонка — шаг назад от курсора: had + gone.' },
      { t: 'idea', text: `Итог: в рассказе о прошлом есть «курсор» (Past Simple). Что было ещё раньше него — <b>had + третья форма</b>.`,
        rows: [['курсор рассказа', 'I logged in.'], ['раньше курсора', 'My friends had started.']] }
    ]},

    // ───────────── 2. Форма ─────────────
    { title: 'Как построить: had + третья форма — одна для всех', steps: [
      { t: 'idea', text: `had — это прошедшее от have. Здесь он помощник, как в have done, сам не переводится. Хорошая новость: had один для всех — никаких has / have.`,
        lit: [['She', 'она'], ['had', '(помощник)'], ['finished', 'закончила'], ['the mockups', 'макеты']],
        ex: [['She had finished the mockups.', 'Она закончила макеты. (к тому моменту)'], ['We had saved the game.', 'Мы сохранили игру.'], ['Max had deleted the folder.', 'Макс удалил папку.']] },
      { t: 'idea', text: `Самая частая ошибка — оставить has / have в рассказе о прошлом. Если курсор в прошлом (came, arrived), помощник тоже прошлый — <b>had</b>.`,
        bad: 'When I came, he has already left.', good: 'When I came, he <b>had</b> already left.' },
      { t: 'check', q: 'When I arrived, the stream ___ already ended.', ru: 'Когда я пришёл, стрим уже закончился.', o: ['has', 'had', 'have'], a: 1,
        why: 'Курсор в прошлом (arrived) → had, а не has.' },
      { t: 'idea', text: `В речи had сжимают в <b>’d</b>. «Не» — <b>hadn’t</b>. Вопрос — had выходит вперёд, как have в Have you…?`,
        rows: [['+', 'She’d finished.'], ['−', 'We hadn’t saved the game.'], ['?', 'Had you played it before? — No, I hadn’t.']] },
      { t: 'check', q: 'Скажите: «Мы не сохранили игру» (до того, как погас свет)', o: ['We didn’t saved the game.', 'We hadn’t saved the game.', 'We hadn’t save the game.'], a: 1,
        why: 'hadn’t + третья форма (saved). didn’t с третьей формой не бывает.' },
      { t: 'idea', opt: true, text: `’d бывает и had, и would («бы»). Смотрите на следующее слово: третья форма — это had, начальная форма — would. И не пугайтесь <b>had had</b>: это Past Perfect от have.`,
        rows: [['He’d gone.', 'had gone — он ушёл'], ['He’d go.', 'would go — он бы пошёл']],
        ex: [['I wasn’t hungry. I’d had a big lunch.', 'Я не был голоден: я плотно пообедал.']] },
      { t: 'idea', text: `Итог: кто угодно + had + третья форма. Сжато — ’d, «не» — hadn’t, вопрос — Had…?`,
        rows: [['все лица', 'had (’d) + третья форма'], ['не / вопрос', 'hadn’t done / Had you done?']] }
    ]},

    // ───────────── 3. Когда нужен, а когда нет ─────────────
    { title: 'История по порядку или прыжок назад', steps: [
      { t: 'idea', text: `Past Perfect — не «очень давнее прошлое», а инструмент для прыжка назад. Если события идут по порядку, как в кино, хватает Past Simple — сколько бы их ни было.`,
        ex: [['I got up, made coffee and launched the game.', 'Я встал, сварил кофе и запустил игру.'], ['We came home, had dinner and watched two episodes.', 'Мы пришли домой, поужинали и посмотрели две серии.']] },
      { t: 'idea', text: `А теперь та же история с прыжком назад. Курсор на «запустил игру», и вдруг мы вспоминаем, что было до этого.`,
        rows: [['по порядку', 'I launched the game. It was great.'], ['прыжок назад', 'I launched the game. I’d bought it the day before.']],
        tip: `Past Perfect — как флешбэк в сериале: картинка на секунду уходит в прошлое героя, а потом история идёт дальше.` },
      { t: 'check', q: 'Скажите: «Вчера я пришёл домой, поужинал и посмотрел две серии»', o: ['Yesterday I had come home, had had dinner and watched two episodes.', 'Yesterday I came home, had dinner and watched two episodes.', 'Yesterday I have come home, had dinner and watched two episodes.'], a: 1,
        why: 'События по порядку → Past Simple. had dinner здесь — просто «поужинал».' },
      { t: 'idea', text: `Одна форма меняет весь смысл истории. Сравните:`,
        rows: [['When I called Kate, she left.', 'я позвонил — и после этого она ушла'], ['When I called Kate, she had left.', 'когда я позвонил, её уже не было'], ['Was Tom there? — No, he’d already left.', 'нет, ушёл до нас']] },
      { t: 'idea', text: `Выучив Past Perfect, многие ставят его во всё «давнее». Проверка: есть ли в рассказе <b>другое прошлое событие</b>, которое было позже? Нет — значит, Past Simple.`,
        bad: 'Last year I had visited Spain. It had been great.', good: 'Last year I <b>visited</b> Spain. It <b>was</b> great.' },
      { t: 'check', q: 'Was Tom at the party when you arrived? — No, he ___.', ru: 'Том был на вечеринке, когда ты пришёл? — Нет, он уже ушёл.', o: ['already leaves', 'had already left', 'has already left'], a: 1,
        why: 'Ушёл до нашего прихода (курсор в прошлом) → had already left.' },
      { t: 'idea', opt: true, text: `После <b>after, before, as soon as</b> (как только) порядок и так понятен из самих слов. Поэтому Past Perfect там можно, но не обязательно.`,
        ex: [['After I (had) finished the level, I went to bed.', 'Когда я прошёл уровень, я лёг спать.'], ['As soon as I (had) saved the game, it crashed.', 'Как только я сохранил игру, она вылетела.']] },
      { t: 'idea', text: `Итог: события по порядку — Past Simple. Шаг назад от курсора — had + третья форма.`,
        rows: [['по порядку', 'I came home, had dinner…'], ['шаг назад', 'When I came, he had left.']] }
    ]},

    // ───────────── 4. Где встречается чаще всего ─────────────
    { title: '«Я понял, что…», «к тому времени как…»', steps: [
      { t: 'idea', text: `Хотите сказать «Я понял, что забыл пароль». Понял — это курсор, а забыл — раньше. После <b>realise, notice, discover, find out, it turned out</b> (понял, заметил, обнаружил, узнал, оказалось) Past Perfect встречается постоянно.`,
        lit: [['I realised', 'я понял'], ['I’d', 'я (уже раньше)'], ['forgotten', 'забыл'], ['my password', 'мой пароль']],
        ex: [['I noticed that somebody had moved my monitor.', 'Я заметил, что кто-то передвинул мой монитор.'], ['It turned out he’d lied to everyone.', 'Оказалось, что он всем врал.']] },
      { t: 'check', q: 'Скажите: «Я понял, что забыл пароль»', o: ['I realised I have forgotten my password.', 'I realised I had forgotten my password.', 'I realised I had forget my password.'], a: 1,
        why: 'Забыл до того, как понял → had + третья форма forgotten.' },
      { t: 'idea', text: `<b>By the time</b> — «к тому времени как». После него курсор, а всё, что успело случиться раньше, — had + третья форма.`,
        lit: [['By the time', 'к тому времени как'], ['we got there,', 'мы добрались,'], ['the concert', 'концерт'], ['had finished', 'уже закончился']],
        ex: [['By the time we got there, the concert had finished.', 'Когда мы добрались, концерт уже закончился.'], ['By the evening I had calmed down.', 'К вечеру я успокоился.']] },
      { t: 'check', q: 'By the time I woke up, everyone ___.', ru: 'К тому времени как я проснулся, все уже ушли.', o: ['has left', 'had left', 'leaves'], a: 1,
        why: 'By the time + прошлое: что случилось раньше → had + третья форма.' },
      { t: 'idea', text: `Ещё два частых случая. «Думал, что…, а оказалось иначе» и объяснение причины: почему кто-то сделал или не сделал что-то тогда.`,
        ex: [['I thought I’d saved the file, but I hadn’t.', 'Я думал, что сохранил файл, но нет.'], ['Kate didn’t come with us. She’d already seen the film.', 'Катя не пошла с нами: она уже видела фильм.']] },
      { t: 'check', q: 'Kate didn’t want to watch it with us. She ___ it twice.', ru: 'Катя не хотела смотреть его с нами: она уже видела его дважды.', o: ['had seen', 'has seen', 'sees'], a: 0,
        why: 'Причина из прошлого, до «не хотела» → had seen.' },
      { t: 'idea', text: `Итог: понял / заметил / оказалось / к тому времени как / думал, что — сигналы шага назад.`,
        rows: [['I realised / noticed…', 'I’d forgotten…'], ['By the time we arrived,', 'it had finished.']] }
    ]},

    // ───────────── 5. have done → had done ─────────────
    { title: 'have done → had done: «сейчас» переезжает в прошлое', steps: [
      { t: 'idea', text: `Вы уже знаете have done: «только что», «уже», «никогда раньше» — к сейчас. Past Perfect говорит то же самое, только отсчёт идёт от момента в прошлом.`,
        rows: [['We aren’t hungry. We’ve just eaten.', 'We weren’t hungry. We’d just eaten.'], ['They’ve never flown before.', 'They were nervous. They’d never flown before.'], ['Nobody has cleaned it for weeks.', 'Nobody had cleaned it for weeks.']] },
      { t: 'idea', text: `Слова <b>already, just, never, ever</b> встают между had и третьей формой — как между have и третьей формой. А <b>yet</b> — в конце.`,
        lit: [['I’d', 'я'], ['never', 'никогда'], ['seen', 'видел'], ['snow', 'снег'], ['before', 'раньше']],
        ex: [['The stream had just ended.', 'Стрим только что закончился.'], ['He hadn’t answered yet.', 'Он ещё не ответил.']] },
      { t: 'check', q: 'Скажите: «Я никогда раньше не видел снега» (рассказ о поездке в прошлом)', o: ['I had seen never snow before.', 'I had never seen snow before.', 'I never had see snow before.'], a: 1,
        why: 'never стоит между had и третьей формой seen.' },
      { t: 'idea', text: `Особый случай: <b>It was the first time…</b> — «это было впервые». После него всегда Past Perfect, как после It’s the first time… — Present Perfect.`,
        bad: 'It was the first time I try sushi.', good: 'It was the first time I<b>’d tried</b> sushi.',
        ex: [['It was the first time I’d tried VR.', 'Я тогда впервые попробовал VR.']] },
      { t: 'check', q: 'It was the first time I ___ a horror game in VR.', ru: 'Я тогда впервые играл в хоррор в VR.', o: ['have played', 'had played', 'play'], a: 1,
        why: 'It was the first time → Past Perfect: had played.' },
      { t: 'check', q: 'I didn’t recognise Max. He ___ a beard.', ru: 'Я не узнал Макса: он отрастил бороду.', o: ['had grow', 'had grown', 'grows'], a: 1,
        why: 'Борода выросла до встречи в прошлом → had grown.' },
      { t: 'idea', text: `Итог: всё, что вы говорили с have done, в рассказе о прошлом говорится с had done.`,
        rows: [['сейчас', 'It’s the first time I’ve tried it.'], ['тогда', 'It was the first time I’d tried it.']] }
    ]},

    // ───────────── 6. had been doing ─────────────
    { title: 'I had been doing — долгий процесс до момента в прошлом', steps: [
      { t: 'idea', text: `Вы уже знаете have been + -ing: процесс тянется до сейчас, и видны его следы. <b>had been + -ing</b> — то же, но до момента в прошлом. Это Past Perfect Continuous.`,
        lit: [['My eyes hurt.', 'глаза болели'], ['I’d', 'я'], ['been', '(был)'], ['staring', 'смотрящим'], ['at the screen', 'в экран']],
        ex: [['The ground was wet. It had been raining.', 'Земля была мокрая: шёл дождь (и кончился).'], ['He was out of breath. He’d been running.', 'Он запыхался: он бежал.']] },
      { t: 'idea', text: `Хотите сказать «Мы играли <b>уже два часа</b>, когда упал сервер». «Уже» + срок + «когда» — главный сигнал для had been + -ing.`,
        lit: [['We’d been playing', 'мы играли'], ['for two hours', 'уже два часа'], ['when the server crashed', 'когда упал сервер']],
        ex: [['I’d been waiting for 20 minutes when the bus came.', 'Я ждал уже 20 минут, когда пришёл автобус.'], ['She hadn’t been working there long.', 'Она работала там недавно.']] },
      { t: 'check', q: 'We ___ for two hours when the server crashed.', ru: 'Мы играли уже два часа, когда упал сервер.', o: ['played', 'had been playing', 'have been playing'], a: 1,
        why: 'Процесс длился до момента в прошлом (crashed) → had been playing.' },
      { t: 'idea', text: `Не путайте с was + -ing из A2: оно про то, что шло <b>в тот самый момент</b>. А had been + -ing — про то, что шло <b>до</b> момента.`,
        rows: [['have been -ing', 'до сейчас', 'I’ve been waiting for 20 minutes.'], ['had been -ing', 'до момента в прошлом', 'I’d been waiting when the bus came.'], ['was -ing', 'в тот самый момент', 'It was raining when we went out.']] },
      { t: 'check', q: 'It wasn’t raining when we left, but the road was wet. It ___.', ru: 'Когда мы вышли, дождя не было, но дорога была мокрой. До этого шёл дождь.', o: ['was raining', 'had been raining', 'has been raining'], a: 1,
        why: 'Дождь шёл раньше и закончился, остались следы → had been raining.' },
      { t: 'check', q: 'When I called her, she ___ dinner.', ru: 'Когда я позвонил, она как раз в тот момент готовила ужин.', o: ['was cooking', 'had been cooking', 'has cooked'], a: 0,
        why: '«В тот самый момент» → was + -ing.' },
      { t: 'idea', text: `Итог: долгий процесс до момента в прошлом (часто со следами) — <b>had been + -ing</b>.`,
        rows: [['формула', 'had been + слово-действие + -ing'], ['пример', 'We’d been playing for two hours when…']] }
    ]},

    // ───────────── 7. had done или had been doing ─────────────
    { title: 'had done или had been doing? И слова-состояния', steps: [
      { t: 'idea', text: `Как с have done и have been doing: had done — <b>результат</b>, сколько сделано. had been doing — <b>процесс</b>, как долго.`,
        rows: [['She had drawn five icons.', 'результат: пять штук'], ['She had been drawing icons all day.', 'процесс: весь день']] },
      { t: 'check', q: 'By the evening, I ___ 30 bugs.', ru: 'К вечеру я исправил 30 багов.', o: ['had fixed', 'had been fixing', 'was fixing'], a: 0,
        why: 'Сколько сделано (30 штук) — результат → had fixed.' },
      { t: 'idea', text: `Слова-состояния из b1-1 (<b>know, like, want, believe, understand</b>, have — «иметь») не берут -ing и здесь. Вместо had been + -ing — просто had + третья форма.`,
        bad: 'We had been knowing each other for years.', good: 'We <b>had known</b> each other for years.',
        ex: [['He’d wanted that job since he was a student.', 'Он хотел эту работу ещё со студенчества.'], ['She’d always had long hair.', 'У неё всегда были длинные волосы.']] },
      { t: 'check', q: 'When we opened the studio, we ___ each other for ten years.', ru: 'Когда мы открыли студию, мы были знакомы уже десять лет.', o: ['had been knowing', 'had known', 'were knowing'], a: 1,
        why: 'know — слово-состояние, -ing не берёт → had known.' },
      { t: 'idea', opt: true, text: `С «не» и сроком обычно берут простую форму: не было процесса — нечему «длиться».`,
        ex: [['I hadn’t played for months.', 'Я не играл несколько месяцев.'], ['We hadn’t talked for a year.', 'Мы не общались год.']] },
      { t: 'idea', text: `Итог урока: есть курсор в прошлом → что было раньше: had + третья форма (результат) или had been + -ing (долгий процесс). Всё по порядку — просто Past Simple.`,
        rows: [['результат раньше курсора', 'I’d fixed 30 bugs.'], ['процесс до курсора', 'I’d been fixing bugs all day.'], ['по порядку', 'I came, fixed it and left.']] }
    ]}
  ];
})();
