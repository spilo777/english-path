// Грамматика по шагам для юнита b1-1: Present Simple и Continuous глубже — временно или постоянно, открытый процесс и период вокруг «сейчас», перемены (is getting), Simple для фактов / What do you do? / I promise, always + -ing, state verbs, think / have / see / taste в двух смыслах, is being rude, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-1'); if (!u) return;
  u.walk = [
    // ───────────── 1. Временно или постоянно ─────────────
    { title: 'Не «сейчас или обычно», а «временно или постоянно»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>I work</b> — обычно, <b>I’m working</b> — прямо сейчас. На B1 граница тоньше: -ing — это ещё и то, что <b>временно</b>, а простая форма — то, что <b>постоянно</b>.`,
        ex: [['I work at a game studio.', 'Я работаю в игровой студии. (постоянно)'], ['I’m working from home this week.', 'На этой неделе я работаю из дома. (временно)']],
        tip: `Дальше зовём их коротко: <b>Simple</b> — простая форма (I work, she works), <b>Continuous</b> — «продолжающаяся» (am / is / are + -ing).` },
      { t: 'idea', text: `Хотите сказать «Сестра живёт у друзей, пока ищет квартиру». Она не «живёт» в эту секунду, но ситуация временная — значит, Continuous.`,
        lit: [['My sister', 'моя сестра'], ['is', '(есть)'], ['living', 'живущая'], ['with friends', 'у друзей'], ['for now', 'пока']],
        ex: [['My sister is living with friends for now.', 'Сестра пока живёт у друзей.'], ['I’m living with my parents.', 'Я (пока) живу с родителями.'], ['My parents live in Tula.', 'Мои родители живут в Туле. (давно и надолго)']] },
      { t: 'check', q: 'Скажите: «Брат живёт у нас, пока не найдёт квартиру»', o: ['My brother lives with us until he finds a flat.', 'My brother is living with us until he finds a flat.', 'My brother living with us until he finds a flat.'], a: 1,
        why: '«Пока не найдёт» — ситуация временная → is living.' },
      { t: 'idea', text: `Simple — как строчка в профиле: то, что верно всегда или давно. Законы природы, расписания, «как часто».`,
        ex: [['Water boils at 100 degrees.', 'Вода кипит при 100 градусах. (всегда)'], ['Careful, the water is boiling!', 'Осторожно, вода кипит! (сейчас)'], ['How often do you update the app?', 'Как часто вы обновляете приложение?']],
        tip: `Continuous — видео, которое идёт. Simple — строчка в профиле: «живу в Туле, работаю дизайнером, люблю RPG».` },
      { t: 'check', q: 'Lena ___ in Kazan. She was born there and loves the city.', ru: 'Лена живёт в Казани. Она там родилась и любит этот город.', o: ['lives', 'is living', 'living'], a: 0,
        why: 'Живёт там всю жизнь — постоянно → Simple.' },
      { t: 'idea', text: `Итог: спросите себя «это временно или постоянно?»`,
        rows: [['временно, пока', 'I’m living with my parents.'], ['постоянно, факт', 'My parents live in Tula.']] }
    ]},

    // ───────────── 2. Открытый процесс и период вокруг «сейчас» ─────────────
    { title: 'Continuous — не только «в эту секунду»', steps: [
      { t: 'idea', text: `Хотите сказать «Я читаю отличное фэнтези», а сейчас вы пьёте кофе. Книга начата и не закончена — процесс «открыт», значит -ing.`,
        ex: [['I’m reading a great fantasy book.', 'Я читаю отличное фэнтези.'], ['Kate is learning Japanese.', 'Кейт учит японский.'], ['We’re redesigning our app.', 'Мы переделываем дизайн нашего приложения.']] },
      { t: 'idea', text: `Так же — период вокруг «сейчас»: today, this week, this year, these days (в последнее время), at the moment.`,
        ex: [['You’re playing a lot this week.', 'Ты много играешь на этой неделе.'], ['What are you working on these days?', 'Над чем ты сейчас работаешь?'], ['Our studio isn’t doing very well this year.', 'У нашей студии в этом году дела так себе.']],
        tip: `Готовая фраза: <b>What’s going on?</b> / <b>What’s happening?</b> — «Что происходит?»` },
      { t: 'check', q: 'Скажите: «Над чем ты работаешь в последнее время?»', o: ['What are you working on these days?', 'What are you work on these days?', 'What you are working on these days?'], a: 0,
        why: 'Процесс вокруг «сейчас» → are + working; в вопросе are стоит перед you.' },
      { t: 'idea', text: `Объясняете, почему вы заняты или что не так, — тоже -ing: действие идёт прямо сейчас.`,
        bad: 'Please be quiet. I try to focus.', good: 'Please be quiet. I’m <b>trying</b> to focus.',
        tip: `focus — сосредоточиться. «Я пытаюсь…» в смысле «не мешай» — почти всегда I’m trying.` },
      { t: 'check', q: 'Shh! I ___ to work.', ru: 'Тише! Я пытаюсь работать.', o: ['try', 'am trying', 'trying'], a: 1,
        why: 'Объясняем, почему просим тишины: процесс идёт сейчас → am trying.' },
      { t: 'idea', text: `Итог: Continuous — всё, что начато и ещё «открыто».`,
        rows: [['начал, не закончил', 'I’m reading a great book.'], ['период вокруг «сейчас»', 'I’m working from home this week.'], ['почему занят', 'I’m trying to focus.']] }
    ]},

    // ───────────── 3. Перемены ─────────────
    { title: '«Темнеет», «дорожает» — is getting', steps: [
      { t: 'idea', text: `Хотите сказать «Темнеет». По-русски одно слово, по-английски — «становится тёмным». Перемена уже идёт, поэтому -ing.`,
        lit: [['It', '(оно)'], ['is', '(есть)'], ['getting', 'становящееся'], ['dark', 'тёмным']],
        ex: [['It’s getting dark.', 'Темнеет.'], ['Games are getting more and more expensive.', 'Игры всё дорожают.'], ['My English is getting better.', 'Мой английский становится лучше.']],
        tip: `Русское «-ает / -еет» о переменах (темнеет, дорожает, холодает) почти всегда = <b>is getting</b> + описание.` },
      { t: 'idea', text: `Так же работают другие слова о переменах: becoming, changing, improving, increasing, growing, starting. И вопрос о переменах — тоже с am / is / are, а не с do.`,
        ex: [['The number of players is growing fast.', 'Число игроков быстро растёт.'], ['I’m starting to like this job.', 'Мне начинает нравиться эта работа.'], ['Prices are going up.', 'Цены растут.']],
        bad: 'Does your English get better?', good: '<b>Is</b> your English <b>getting</b> better?' },
      { t: 'check', q: 'Look at those clouds. The weather ___.', ru: 'Посмотри на эти тучи. Погода меняется.', o: ['changes', 'is changing', 'change'], a: 1,
        why: 'Перемена идёт прямо сейчас → is changing.' },
      { t: 'check', q: 'Скажите: «Твой английский становится лучше?»', o: ['Does your English get better?', 'Is your English getting better?', 'Is your English get better?'], a: 1,
        why: 'Перемена в процессе → вопрос с is + getting.' },
      { t: 'idea', text: `Итог: то, что меняется прямо сейчас, — am / is / are + getting (becoming, growing…).`,
        rows: [['It’s getting cold.', 'Холодает.'], ['Prices are going up.', 'Цены растут.']] }
    ]},

    // ───────────── 4. Simple: do и «слово = действие» ─────────────
    { title: 'Simple: «кем работаешь», «что значит» и «обещаю»', steps: [
      { t: 'idea', text: `Помните из A1: <b>What do you do?</b> — «Кем ты работаешь?». Первое do — помощник для вопроса, второе — само слово «делать».`,
        lit: [['What', 'что'], ['do', '(вопрос)'], ['you', 'ты'], ['do?', 'делаешь (вообще)?']],
        ex: [['What do you do? — I’m a UI designer.', 'Кем работаешь? — Я UI-дизайнер.'], ['What are you doing? — I’m drawing icons.', 'Что делаешь сейчас? — Рисую иконки.'], ['He doesn’t do anything at home.', 'Он ничего не делает дома.']] },
      { t: 'idea', text: `Хотите спросить «Что значит это слово?». По-русски вопрос без помощника, а по-английски нужен does — как в любом вопросе в Simple.`,
        bad: 'What means this word?', good: 'What <b>does</b> this word <b>mean</b>?' },
      { t: 'check', q: 'Excuse me, what ___ this button do?', ru: 'Простите, а что делает эта кнопка?', o: ['is', 'does', 'do'], a: 1,
        why: 'Обычный вопрос в Simple: button — it → does + do.' },
      { t: 'idea', text: `Есть слова, которые сами и есть действие: сказали «обещаю» — и уже пообещали. С ними только Simple: I promise, I apologise, I suggest, I agree, I refuse, I insist, I recommend.`,
        ex: [['I promise I won’t tell anyone.', 'Обещаю, никому не скажу.'], ['I apologise for the delay.', 'Прошу прощения за задержку.'], ['I suggest we take a break.', 'Предлагаю сделать перерыв.']],
        bad: 'I’m promising I’ll help. / I am agree.', good: 'I <b>promise</b> I’ll help. / I <b>agree</b>.',
        tip: `«Я согласен» — это <b>I agree</b>, без am: agree — слово-действие («соглашаться»), а не описание, как tired.` },
      { t: 'check', q: 'I ___ I won’t be late again.', ru: 'Обещаю, я больше не опоздаю.', o: ['promise', 'am promising', 'promising'], a: 0,
        why: 'Обещание совершается самими словами → Simple.' },
      { t: 'idea', text: `Итог: вопросы «вообще» и слова-поступки — в Simple.`,
        rows: [['профессия', 'What do you do?'], ['значение', 'What does it mean?'], ['слово = действие', 'I promise. I agree. I suggest…']] }
    ]},

    // ───────────── 5. always ─────────────
    { title: 'always + Simple и always + -ing: факт или «вечно ты…»', steps: [
      { t: 'idea', text: `Вы уже знаете always + Simple: «всегда, каждый раз» — спокойный факт.`,
        ex: [['I always go to work by bike.', 'Я всегда езжу на работу на велосипеде.'], ['Tom always starts work on time.', 'Том всегда начинает работу вовремя.']] },
      { t: 'idea', text: `Хотите сказать с досадой «Вечно ты сидишь в телефоне!». Тогда <b>am / is / are + always + -ing</b>: always встаёт между are и словом с -ing.`,
        lit: [['You', 'ты'], ['are', '(есть)'], ['always', 'вечно'], ['looking', 'смотрящий'], ['at your phone!', 'в свой телефон!']],
        ex: [['You’re always looking at your phone!', 'Ты вечно сидишь в телефоне!'], ['I’m always forgetting my password.', 'Вечно я забываю пароль.'], ['Tom’s always starting new projects.', 'Том вечно затевает новые проекты.']] },
      { t: 'check', q: 'Ugh! You ___ my snacks!', ru: 'Ну вот! Вечно ты ешь мои снеки!', o: ['are always eat', 'are always eating', 'always are eating'], a: 1,
        why: 'are + always + eating: always между are и -ing.' },
      { t: 'idea', text: `Вместо always можно <b>constantly</b> (постоянно) или <b>forever</b> (вечно) — смысл тот же. В речи ударение падает на это слово — так и слышно раздражение.`,
        ex: [['My laptop is constantly crashing.', 'Мой ноутбук постоянно вылетает.'], ['He’s forever complaining about the boss.', 'Он вечно жалуется на начальника.']],
        tip: `Иногда это не раздражение, а приятное удивление: <b>She’s always buying me little presents.</b> — Она всё время дарит мне подарочки.` },
      { t: 'check', q: 'I ___ breakfast at eight. It’s my routine.', ru: 'Я всегда завтракаю в восемь. Это мой режим.', o: ['always have', 'am always having', 'always having'], a: 0,
        why: 'Спокойная привычка, без досады → always + Simple.' },
      { t: 'idea', text: `Итог: always + Simple — факт; am / is / are + always + -ing — «вечно ты…».`,
        rows: [['факт', 'I always forget my password.'], ['досада', 'I’m always forgetting my password!']] }
    ]},

    // ───────────── 6. State verbs ─────────────
    { title: 'Слова-состояния: почему нельзя I’m knowing', steps: [
      { t: 'idea', text: `Вы уже знаете из A1: like, want, need, know, understand не ставят с -ing даже «прямо сейчас». Причина: это не действие, а <b>состояние</b> — внутри ничего не «идёт».`,
        bad: 'I’m wanting a pizza. / Are you knowing his name?', good: 'I <b>want</b> a pizza. / <b>Do</b> you <b>know</b> his name?',
        tip: `А как же «I’m lovin’ it»? В живой речи love / like иногда ставят с -ing — «прямо сейчас очень нравится»: <b>I’m loving this new season!</b> Это разговорный стиль; в письме, тестах и на работе — Simple.` },
      { t: 'idea', text: `На B1 таких слов больше. Первая кучка — «в голове»: realize, recognize, believe, suppose, remember, mean, prefer, hate.`,
        ex: [['Now I realize why the button didn’t work.', 'Теперь я понимаю, почему кнопка не работала.'], ['Sorry, I don’t recognize you.', 'Простите, я вас не узнаю.'], ['I suppose you’re right.', 'Полагаю, ты прав.']] },
      { t: 'check', q: 'Sorry, I ___ what you mean.', ru: 'Извини, я не понимаю, что ты имеешь в виду.', o: ['am not understanding', 'don’t understand', 'not understand'], a: 1,
        why: 'understand — состояние → Simple: don’t understand.' },
      { t: 'idea', text: `Вторая кучка — «принадлежит, состоит, кажется»: belong, own, contain, consist of, fit (подходит по размеру), seem. Здесь тоже ничего не происходит — только Simple.`,
        ex: [['This laptop belongs to the studio.', 'Этот ноутбук принадлежит студии.'], ['The team consists of five people.', 'Команда состоит из пяти человек.'], ['You seem tired.', 'Ты кажешься уставшим.']] },
      { t: 'check', q: 'This controller ___ to my brother.', ru: 'Этот контроллер принадлежит моему брату.', o: ['belongs', 'is belonging', 'belong'], a: 0,
        why: 'belong — состояние → Simple; controller — it, поэтому -s.' },
      { t: 'idea', text: `Итог: состояние — без -ing, даже «прямо сейчас».`,
        rows: [['в голове', 'know, understand, realize, suppose, mean'], ['хочу, люблю', 'want, need, like, prefer'], ['принадлежит, состоит', 'belong, own, contain, consist of, seem']] }
    ]},

    // ───────────── 7. Один глагол — два смысла ─────────────
    { title: 'think, have, see, taste — один глагол, два смысла', steps: [
      { t: 'idea', text: `Некоторые слова бывают и состоянием, и действием. Смысл «мнение» → Simple, смысл «обдумываю» → можно -ing.`,
        rows: [['I think it’s a good idea.', 'считаю (мнение)'], ['I’m thinking about the new logo.', 'обдумываю (процесс)']],
        ex: [['What do you think of my idea?', 'Что ты думаешь о моей идее?'], ['I’m thinking of quitting my job.', 'Подумываю уйти с работы.']] },
      { t: 'check', q: 'What ___ of the new trailer?', ru: 'Что ты думаешь о новом трейлере? (какое мнение)', o: ['do you think', 'are you thinking', 'you think'], a: 0,
        why: 'Спрашиваем мнение → think как состояние, Simple.' },
      { t: 'idea', text: `То же с have, see, taste: «владею, понимаю, имеет вкус» — Simple. «Обедаю, встречаюсь, пробую» — действие, можно -ing.`,
        rows: [['I have a new laptop. (владею)', 'I’m having lunch. (обедаю)'], ['I see what you mean. (понимаю)', 'I’m seeing a client at three. (встречаюсь)'], ['This soup tastes great. (на вкус)', 'I’m tasting the sauce. (пробую)']],
        tip: `smell так же: The room smells of paint (пахнет) — Simple. Видеть и слышать «прямо сейчас» обычно говорят через can: <b>Can you hear me?</b>` },
      { t: 'check', q: 'Where’s Max? — He ___ a shower.', ru: 'Где Макс? — Он в душе.', o: ['has', 'is having', 'have'], a: 1,
        why: 'have a shower = принимать душ, действие идёт сейчас → is having.' },
      { t: 'idea', text: `look и feel о самочувствии «сейчас» — можно обе формы, разницы почти нет. Но с usually, often — только Simple.`,
        rows: [['You look tired.', '= You’re looking tired.'], ['How do you feel?', '= How are you feeling?'], ['I usually feel sleepy after lunch.', 'с usually — только Simple']] },
      { t: 'idea', text: `Итог: смотрите на смысл — состояние или действие.`,
        rows: [['состояние → Simple', 'I think… / I have… / I see… / It tastes…'], ['действие → -ing', 'I’m thinking of… / I’m having lunch.']] }
    ]},

    // ───────────── 8. is being ─────────────
    { title: 'He’s being rude — «ведёт себя» прямо сейчас', steps: [
      { t: 'idea', text: `<b>He is rude</b> — он грубый, это характер. <b>He’s being rude</b> — он <b>ведёт себя</b> грубо сейчас, может быть, не как обычно.`,
        lit: [['He', 'он'], ['is', '(есть)'], ['being', 'ведущий себя'], ['rude', 'грубо']],
        rows: [['He’s selfish.', 'Он эгоист. (характер)'], ['He’s being selfish.', 'Он сейчас ведёт себя эгоистично.']],
        ex: [['Why are you being so nice to me?', 'Чего это ты такой милый со мной?'], ['I’m being serious!', 'Я серьёзно!'], ['You’re being unfair.', 'Ты несправедлив (сейчас).']] },
      { t: 'check', q: 'Max usually shares, but today he ___ really selfish.', ru: 'Макс обычно делится, но сегодня ведёт себя очень эгоистично.', o: ['are being', 'is being', 'being'], a: 1,
        why: 'Поведение сейчас, не как обычно → is being.' },
      { t: 'idea', text: `being — только про поведение, которое человек выбирает. Устал, голоден, болен — это не выбор, поэтому без being.`,
        bad: 'Are you being tired? / She’s being ill.', good: 'Are you tired? / She’s ill.' },
      { t: 'check', q: 'I ___ hungry. Let’s order pizza.', ru: 'Я голоден. Давай закажем пиццу.', o: ['am being', 'am', 'being'], a: 1,
        why: 'Голод не выбирают → просто am.' },
      { t: 'idea', text: `Итог: характер — is; поведение сейчас — is being.`,
        rows: [['характер, состояние', 'He’s rude. / I’m tired.'], ['ведёт себя сейчас', 'He’s being rude.']] }
    ]},

    // ───────────── 9. Ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'Скажите: «Я знаю ответ»', o: ['I’m knowing the answer.', 'I know the answer.', 'I am know the answer.'], a: 1,
        why: 'know — состояние → Simple, без am.' },
      { t: 'check', q: 'Скажите: «Что ты думаешь о моём дизайне?» (твоё мнение)', o: ['What are you thinking about my design?', 'What do you think of my design?', 'What you think of my design?'], a: 1,
        why: 'Мнение → think в Simple: What do you think of…?' },
      { t: 'check', q: 'You ___ your keys! Third time today!', ru: 'Вечно ты теряешь ключи! Третий раз за день!', o: ['always losing', 'are always losing', 'are always lose'], a: 1,
        why: 'Досада «вечно ты…» → are + always + losing.' },
      { t: 'idea', text: `Итог урока: выбирайте взгляд — процесс или факт.`,
        rows: [['Continuous', 'процесс, временное, перемены, «вечно ты…», поведение сейчас'], ['Simple', 'факты, привычки, профессия, состояния, I promise / I agree']] }
    ]}
  ];
})();
