// Грамматика по шагам для юнита a1-18: and / but / or, so / because, when / before / after (две части и запятая), while, настоящее после when про будущее, until; последняя часть — повторение всего A1 без новых правил.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-18'); if (!u) return;
  u.walk = [
    // ───────────── 1. and / but / or ─────────────
    { title: 'Как склеить две фразы в одну', steps: [
      { t: 'idea', text: `Хотите сказать: «Я остался дома и посмотрел сериал». Пока мы говорили двумя короткими фразами: I stayed at home. I watched a series. Слово <b>and</b> («и») склеивает их в одну.`,
        lit: [['I', 'я'], ['stayed', 'остался'], ['at home', 'дома'], ['and', 'и'], ['watched', 'посмотрел'], ['a series', 'сериал']],
        ex: [['I stayed at home and watched a series.', 'Я остался дома и посмотрел сериал.'], ['I got up and made coffee.', 'Я встал и сварил кофе.'], ['Kate is at work and Tom is at the gym.', 'Кейт на работе, а Том в спортзале.']],
        tip: `Если в списке три дела и больше — между ними запятые, а and только перед последним: I got up, made coffee and opened Figma.` },
      { t: 'idea', text: `Заметили: во второй части пропало «I»? Если в обеих частях действует один и тот же человек, после and его второй раз не повторяют.`,
        bad: 'I got up and I made coffee.', good: 'I got up <b>and</b> made coffee.',
        tip: `Один человек — говорим его один раз. Два разных — оба: Kate is at work and Tom is at the gym.` },
      { t: 'check', q: 'Скажите: «Я встал и сварил кофе»', o: ['I got up and made coffee.', 'I got up and make coffee.', 'Got up and I made coffee.'], a: 0,
        why: 'Обе части в прошлом (got up, made), а второе I не нужно.' },
      { t: 'idea', text: `«Но» — это <b>but</b>. Оно предупреждает: дальше что-то неожиданное, не как ждали.`,
        lit: [['I', 'я'], ['bought', 'купил'], ['the game', 'игру'], [', but', ', но'], ['I didn’t play it', 'я не играл в неё']],
        ex: [['I bought the game, but I didn’t play it.', 'Я купил игру, но не играл в неё.'], ['It’s a nice flat, but it’s very small.', 'Хорошая квартира, но очень маленькая.'], ['I was tired, but I played.', 'Я устал, но всё равно поиграл.']],
        tip: `Русское «а» — то and, то but. Просто сравниваем: I’m a designer, and he’s a programmer → and. Есть «но», неожиданность → but.` },
      { t: 'idea', text: `«Или» — это <b>or</b>. Оно даёт выбор из двух.`,
        ex: [['Tea or coffee?', 'Чай или кофе?'], ['Do you want to play, or are you tired?', 'Хочешь поиграть или ты устал?'], ['We can play now or later.', 'Можем поиграть сейчас или позже.']] },
      { t: 'check', q: 'I wanted to call you, ___ I didn’t have your number.', ru: 'Я хотел тебе позвонить, но у меня не было твоего номера.', o: ['and', 'but', 'or'], a: 1,
        why: 'Хотел, а не смог — неожиданность → but.' },
      { t: 'check', q: 'Do you want pizza ___ sushi?', ru: 'Ты хочешь пиццу или суши?', o: ['and', 'or', 'so'], a: 1,
        why: 'Выбор одного из двух → or.' },
      { t: 'idea', opt: true, text: `Ловушка: русское «ни… ни» после «не» — это <b>or</b>, а не and. В английском «не» уже стоит, and тут не нужно.`,
        bad: 'I don’t like tea and coffee.', good: 'I don’t like tea <b>or</b> coffee.',
        ex: [['I haven’t got a PlayStation or an Xbox.', 'У меня нет ни PlayStation, ни Xbox.'], ['I don’t like horror films or thrillers.', 'Я не люблю ни ужастики, ни триллеры.']] },
      { t: 'check', q: 'I don’t play football ___ tennis.', ru: 'Я не играю ни в футбол, ни в теннис.', o: ['and', 'or', 'but'], a: 1,
        why: 'После «не» вместо «ни… ни» — or.' },
      { t: 'idea', text: `Итог: три слова-клея, и после and одного и того же человека не повторяем.`,
        rows: [['and', 'и, а (просто добавить)', 'I got up and made coffee.'], ['but', 'но (неожиданно)', 'I bought it, but I didn’t play.'], ['or', 'или; после «не» — ни… ни', 'Tea or coffee?']] }
    ]},

    // ───────────── 2. so / because ─────────────
    { title: 'Поэтому и потому что', steps: [
      { t: 'idea', text: `Хотите сказать: «Я устал, поэтому пошёл спать». «Поэтому» — это <b>so</b>. Оно стоит перед тем, что получилось в итоге.`,
        lit: [['I', 'я'], ['was', 'был'], ['tired', 'уставший'], [', so', ', поэтому'], ['I went', 'я пошёл'], ['to bed', 'спать']],
        ex: [['I was tired, so I went to bed.', 'Я устал, поэтому пошёл спать.'], ['It was hot, so I opened the window.', 'Было жарко, поэтому я открыл окно.'], ['Kate plays a lot, so she’s very good.', 'Кейт много играет, поэтому она очень хороша.']] },
      { t: 'idea', text: `А «потому что» — это <b>because</b>. Оно стоит перед причиной: сначала что случилось, потом because и почему.`,
        lit: [['I', 'я'], ['went', 'пошёл'], ['to bed', 'спать'], ['because', 'потому что'], ['I was tired', 'я устал']],
        ex: [['I went to bed because I was tired.', 'Я пошёл спать, потому что устал.'], ['I’m hungry because I didn’t have lunch.', 'Я голоден, потому что не обедал.'], ['Max didn’t come because he was busy.', 'Макс не пришёл, потому что был занят.']] },
      { t: 'check', q: 'I was hungry, ___ I made a sandwich.', ru: 'Я был голоден, поэтому сделал сэндвич.', o: ['because', 'so', 'but'], a: 1,
        why: 'Сэндвич — то, что получилось в итоге → so.' },
      { t: 'check', q: 'I made a sandwich ___ I was hungry.', ru: 'Я сделал сэндвич, потому что был голоден.', o: ['so', 'because', 'or'], a: 1,
        why: 'После пропуска идёт причина (был голоден) → because.' },
      { t: 'idea', text: `so и because — одна и та же связь, только с разных концов. Проверка: because отвечает на «почему?», so — на «и что в итоге?».`,
        rows: [['причина', ', so', 'результат'], ['результат', 'because', 'причина']],
        bad: 'It was cold, because I closed the window.', good: 'It was cold, <b>so</b> I closed the window.' },
      { t: 'idea', text: `На вопрос Why? часто отвечают одним куском — сразу с because. А если because очень хочется поставить в начало — можно, но тогда после первой части запятая.`,
        ex: [['Why are you late? — Because my bus didn’t come.', 'Почему ты опоздал? — Потому что мой автобус не пришёл.'], ['Why didn’t you come? — Because I was tired.', 'Почему ты не пришёл? — Потому что устал.'], ['Because it was late, we stopped the game.', 'Так как было поздно, мы остановили игру.']] },
      { t: 'check', q: 'My laptop is old, ___ I can’t play new games.', ru: 'Мой ноутбук старый, поэтому я не могу играть в новые игры.', o: ['because', 'so', 'or'], a: 1,
        why: 'Старый ноутбук — причина, «не могу играть» — итог → so.' },
      { t: 'idea', opt: true, text: `В одном предложении может быть и два слова-клея, и три. Это нормально, если каждое на своём месте.`,
        ex: [['It was late and I was tired, so I went to bed.', 'Было поздно, и я устал, поэтому пошёл спать.'], ['I like this game, but I don’t play it because it’s hard.', 'Мне нравится эта игра, но я в неё не играю, потому что она сложная.']] },
      { t: 'idea', text: `Итог: so — перед результатом, because — перед причиной.`,
        rows: [['so', 'поэтому → результат', 'It was cold, so I stayed at home.'], ['because', 'потому что ← причина', 'I stayed at home because it was cold.']] }
    ]},

    // ───────────── 3. when / before / after ─────────────
    { title: 'Когда, перед тем как, после того как', steps: [
      { t: 'idea', text: `Хотите сказать: «Когда я пришёл домой, я позвонил Кейт». «Когда» — <b>when</b>. Предложение из двух частей: часть с when и главная часть.`,
        lit: [['When', 'когда'], ['I got', 'я пришёл'], ['home', 'домой'], [',', ','], ['I called', 'я позвонил'], ['Kate', 'Кейт']],
        ex: [['When I got home, I called Kate.', 'Когда я пришёл домой, я позвонил Кейт.'], ['When I finished the level, I went to bed.', 'Когда я прошёл уровень, я пошёл спать.'], ['Anna was 22 when she got her first job.', 'Анне было 22, когда она получила первую работу.']] },
      { t: 'idea', text: `Части можно поменять местами, смысл тот же. Если when-часть <b>первая</b> — после неё запятая; если <b>вторая</b> — запятой нет.`,
        rows: [['When I got home, I called Kate.', 'запятая'], ['I called Kate when I got home.', 'без запятой']],
        ex: [['When you’re tired, don’t play.', 'Когда ты устал, не играй.'], ['Don’t play when you’re tired.', 'Не играй, когда устал.']] },
      { t: 'check', q: 'Выберите правильно: «Когда я прошёл уровень, я пошёл спать»', o: ['When I finished the level, I went to bed.', 'When I finished the level I went, to bed.', 'When I finished, the level I went to bed.'], a: 0,
        why: 'Запятая ровно между двумя частями: после when-части.' },
      { t: 'idea', text: `Ловушка после прошлого юнита. В вопросе «Когда ты пришёл?» помощник did выходит вперёд. А в when-части порядок обычный, никакого did.`,
        bad: 'When did I get home, I called Kate.', good: 'When <b>I got</b> home, I called Kate.',
        rows: [['Вопрос', 'When did you get home?'], ['Клей «когда»', 'When you got home, …']] },
      { t: 'check', q: 'When ___ home, I opened my laptop.', ru: 'Когда я пришёл домой, я открыл ноутбук.', o: ['did I get', 'I got', 'got I'], a: 1,
        why: 'Это не вопрос, а часть предложения: обычный порядок — I got.' },
      { t: 'idea', text: `<b>before</b> («перед тем как») и <b>after</b> («после того как») работают точно так же: две части, запятая — если они первые.`,
        ex: [['Before you close the game, save it.', 'Перед тем как закрыть игру, сохрани её.'], ['Save the game before you close it.', 'Сохрани игру, перед тем как закрыть.'], ['After I finished work, I went to the gym.', 'После того как я закончил работу, я пошёл в спортзал.']] },
      { t: 'check', q: 'Always save the game ___ you close it.', ru: 'Всегда сохраняй игру, перед тем как закрыть её.', o: ['after', 'before', 'because'], a: 1,
        why: 'Сохранить надо до закрытия → before.' },
      { t: 'idea', text: `Итог: when / before / after — две части, обычный порядок слов, запятая — только если такая часть стоит первой.`,
        rows: [['When…, главная часть', 'When I got home, I called Kate.'], ['главная часть when…', 'I called Kate when I got home.'], ['before / after', 'Save it before you close it.']] }
    ]},

    // ───────────── 4. while и «когда» про будущее ─────────────
    { title: 'Пока, и почему «придёшь» — это get', steps: [
      { t: 'idea', text: `Хотите сказать: «Я слушаю подкасты, пока рисую». «Пока, в то время как» — <b>while</b>: два дела идут одновременно.`,
        lit: [['I listen', 'я слушаю'], ['to podcasts', 'подкасты'], ['while', 'пока'], ['I’m drawing', 'я рисую']],
        ex: [['I listen to podcasts while I’m drawing.', 'Я слушаю подкасты, пока рисую.'], ['Don’t use your phone while you’re driving.', 'Не пользуйся телефоном, пока ведёшь машину.'], ['We talked while we waited.', 'Мы разговаривали, пока ждали.']] },
      { t: 'check', q: 'I listen to music ___ I’m working.', ru: 'Я слушаю музыку, пока работаю.', o: ['while', 'so', 'or'], a: 0,
        why: 'Два дела в одно время → while.' },
      { t: 'idea', text: `Теперь главное. Хотите сказать: «Позвони, когда придёшь домой». По-русски «придёшь» — будущее. По-английски после when ставят <b>настоящее</b>: when you get home.`,
        lit: [['Call', 'позвони'], ['me', 'мне'], ['when', 'когда'], ['you get', 'ты приходишь (= придёшь)'], ['home', 'домой']],
        ex: [['Call me when you get home.', 'Позвони, когда придёшь домой.'], ['When you finish the level, save the game.', 'Когда пройдёшь уровень, сохрани игру.'], ['Tell me when you’re ready.', 'Скажи, когда будешь готов.']] },
      { t: 'idea', text: `Так же с before, after и while. Слово will («буду») вы узнаете на A2, но правило уже сейчас: после when и его друзей — никакого будущего, только настоящее.`,
        bad: 'Call me when you will get home.', good: 'Call me when you <b>get</b> home.',
        ex: [['Text me before you leave.', 'Напиши, перед тем как выйдешь.'], ['After you finish, we can play.', 'Когда закончишь, сможем поиграть.']] },
      { t: 'check', q: 'Let’s play when you ___ work.', ru: 'Давай поиграем, когда ты закончишь работу.', o: ['will finish', 'finish', 'finished'], a: 1,
        why: 'После when про будущее — настоящее: you finish.' },
      { t: 'check', q: 'Text me ___ you leave the office.', ru: 'Напиши мне, перед тем как уйдёшь из офиса.', o: ['before', 'because', 'so'], a: 0,
        why: '«Перед тем как» → before, и после него тоже настоящее: you leave.' },
      { t: 'idea', text: `Ещё одно слово из той же компании — <b>until</b>: «пока не», «до тех пор пока». После него тоже настоящее.`,
        lit: [['Wait', 'жди'], ['here', 'здесь'], ['until', 'пока не'], ['I come back', 'я вернусь']],
        ex: [['Wait here until I come back.', 'Жди здесь, пока я не вернусь.'], ['Don’t start until Anna is ready.', 'Не начинай, пока Анна не будет готова.']] },
      { t: 'idea', text: `Итог: while — «пока» (одновременно), а после when / before / after / while / until про будущее стоит настоящее время.`,
        rows: [['while', 'пока (в одно время)', 'I eat while I’m watching.'], ['when + настоящее', 'когда придёшь', 'Call me when you get home.'], ['until + настоящее', 'пока не вернусь', 'Wait until I come back.']] }
    ]},

    // ───────────── 5. Итог A1 ─────────────
    { title: 'Итог A1: проверьте себя', steps: [
      { t: 'idea', text: `Это конец A1. Новых правил больше нет — только проверка главного. Первое: как сказать про себя обычно, сейчас и вчера.`,
        rows: [['обычно', 'I work · she works', 'She works from home.'], ['прямо сейчас', 'am / is / are + -ing', 'I’m playing now.'], ['вчера', '-ed · went, saw, made', 'We played. I went home.']] },
      { t: 'check', q: 'Be quiet! The baby ___.', ru: 'Тихо! Ребёнок спит (прямо сейчас).', o: ['sleeps', 'is sleeping', 'sleep'], a: 1,
        why: 'Прямо сейчас → is + -ing.' },
      { t: 'check', q: 'Last summer we ___ to Italy.', ru: 'Прошлым летом мы ездили в Италию.', o: ['go', 'went', 'goed'], a: 1,
        why: 'Прошлое, а go — особый глагол: go → went.' },
      { t: 'idea', text: `Второе: «не» и вопрос. Если есть am / is / are, was / were или can — они сами делают «не» и вопрос. Если глагол обычный — зовём помощника do / does / did.`,
        rows: [['be, can', 'I’m not · I can’t', 'Are you…? Can you…?'], ['обычно', 'don’t / doesn’t + глагол', 'Do you…? Does she…?'], ['прошлое', 'didn’t + глагол', 'Did you…?']] },
      { t: 'check', q: 'Why ___ you answer my message yesterday?', ru: 'Почему ты вчера не ответил на моё сообщение?', o: ['don’t', 'didn’t', 'weren’t'], a: 1,
        why: 'Вчера + обычный глагол answer → didn’t, а сам глагол без -ed.' },
      { t: 'check', q: 'Who ___ the last game? — Our team!', ru: 'Кто выиграл последнюю игру? — Наша команда!', o: ['won', 'did win', 'did won'], a: 0,
        why: 'Who — сам тот, кто выиграл → без did, сразу won.' },
      { t: 'idea', text: `Третье: маленькие слова. a — один из многих, the — тот самый; some — в «да», any — в «нет» и вопросе; at — часы, on — день, in — месяц.`,
        rows: [['a / the', 'I bought a game. The game is great.'], ['some / any', 'I’ve got some water. Have you got any?'], ['at / on / in', 'at 8 · on Friday · in April']] },
      { t: 'check', q: 'I bought ___ new mouse. ___ mouse is really fast.', ru: 'Я купил новую мышку. Мышка очень быстрая.', o: ['a / The', 'the / A', 'a / A'], a: 0,
        why: 'Первый раз — a (какая-то), второй — the (та самая).' },
      { t: 'idea', text: `Итог A1: вы умеете рассказать о себе, о том, что делаете сейчас, обычно и делали вчера, спросить о чём угодно и склеить мысли словами and, but, so, because, when. Три золотых правила — и дальше A2!`,
        rows: [['1', 'в предложении всегда есть глагол', 'I am tired.'], ['2', 'he / she / it обычно → -s', 'She works.'], ['3', 'после do / does / did / can глагол голый', 'Did you play?']] }
    ]}
  ];
})();
