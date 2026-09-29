// Грамматика по шагам для юнита a1-15: quick / quickly, слово «какой?» перед предметом и после is, look / feel / sound / smell / taste + «какой?», хвостик -ly, hard / fast / late / early, good → well, порядок слов кто → действие → что → где → когда, место always / usually / often / never / also / still.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-15'); if (!u) return;
  u.walk = [
    // ───────────── 1. Какой? и как? ─────────────
    { title: 'Какой? и как? — два разных слова', steps: [
      { t: 'idea', text: `Хотите сказать «Он играет быстро». По-русски «быстрый» и «быстро» — разные слова, и по-английски тоже: <b>quick</b> — какой?, <b>quickly</b> — как? (player — игрок).`,
        lit: [['He', 'он'], ['plays', 'играет'], ['quickly', 'быстро']],
        ex: [['He is a quick player.', 'Он быстрый игрок.'], ['He plays quickly.', 'Он играет быстро.'], ['Please speak slowly.', 'Пожалуйста, говорите медленно.']],
        rows: [['какой? — человек или вещь', 'quick, slow, quiet', 'a quick player'], ['как? — действие (играет, говорит)', 'quickly, slowly, quietly', 'He plays quickly.']],
        tip: `Русское «как?» кончается на -о (быстро, тихо, плохо), английское — на -ly: quick<b>ly</b>, quiet<b>ly</b>, bad<b>ly</b>. Слышите «-о» — ставьте «-ly».` },
      { t: 'check', q: 'Скажите: «Она говорит медленно»', o: ['She speaks slow.', 'She speaks slowly.', 'She is speak slowly.'], a: 1, why: 'Как говорит? — это действие, нужен хвостик -ly: slowly.' },
      { t: 'check', q: 'He is a ___ player.', ru: 'Он осторожный игрок.', o: ['careful', 'carefully', 'carefuly'], a: 0, why: 'Какой игрок? — описываем человека, без -ly: careful.' },
      { t: 'idea', text: `Итог: какой? — без хвостика, как? — с хвостиком -ly.`,
        rows: [['какой? (человек, вещь)', 'quick', 'a quick player'], ['как? (действие)', 'quickly', 'He plays quickly.']] }
    ]},

    // ───────────── 2. Слово «какой?» ─────────────
    { title: 'Слово «какой?»: где стоит и почему не меняется', steps: [
      { t: 'idea', text: `Хотите сказать «Хороший день». Слово «какой?» стоит <b>перед</b> словом-предметом (день, игра, телефон), как и в русском. Только перед ними ещё стоит a / the / my.`,
        lit: [['It’s', 'это (есть)'], ['a', '—'], ['nice', 'хороший'], ['day', 'день']],
        ex: [['It’s a nice day.', 'Хороший день.'], ['I have an old laptop.', 'У меня старый ноутбук.'], ['He met famous people.', 'Он встретил знаменитых людей.']],
        bad: 'He met people famous.', good: 'He met <b>famous</b> people.' },
      { t: 'idea', text: `Хорошая новость: это слово <b>никогда не меняется</b>. Русские «новый, новая, новые, новых» — всё это одно слово <b>new</b>.`,
        ex: [['a new game — new games', 'новая игра — новые игры'], ['my new friend — my new friends', 'мой новый друг — мои новые друзья']],
        bad: 'expensives headphones', good: '<b>expensive</b> headphones',
        tip: `Хвостик -s бывает только у слова-предмета: game<b>s</b>, friend<b>s</b>. У слова «какой?» — никогда.` },
      { t: 'check', q: 'Скажите: «Это дорогие наушники»', o: ['These are expensives headphones.', 'These are expensive headphones.', 'These are headphones expensive.'], a: 1, why: 'Слово «какой?» стоит перед предметом и не получает -s.' },
      { t: 'idea', text: `А если предмета нет — «Погода хорошая», «Тебе холодно?» Тогда слово «какой?» стоит после am / is / are (или was / were).`,
        lit: [['The weather', 'погода'], ['is', '(есть)'], ['nice', 'хорошая']],
        ex: [['The weather is nice today.', 'Сегодня хорошая погода.'], ['The film wasn’t very good.', 'Фильм был не очень.'], ['Are you cold?', 'Тебе холодно?']] },
      { t: 'check', q: 'The game ___.', ru: 'Игра трудная.', o: ['is hard', 'hard', 'is a hard'], a: 0, why: 'Без предмета после — is + слово «какой?», и a не нужно.' },
      { t: 'idea', text: `Итог: слово «какой?» стоит перед предметом или после is, и никогда не меняется.`,
        rows: [['перед предметом', 'a new game, famous people'], ['после am / is / are', 'The weather is nice.'], ['форма одна', 'new game — new games']] }
    ]},

    // ───────────── 3. look tired ─────────────
    { title: 'You look tired — выглядишь устало', steps: [
      { t: 'idea', text: `Хотите сказать «Ты выглядишь устало». По-русски тут «-о», и рука тянется к -ly. Но после <b>look</b> (выглядеть) ставим слово «какой?»: You look <b>tired</b>.`,
        lit: [['You', 'ты'], ['look', 'выглядишь'], ['tired', 'уставший']],
        ex: [['You look tired.', 'Ты выглядишь устало.'], ['You look happy!', 'Ты выглядишь довольным!'], ['Your new flat looks beautiful.', 'Твоя новая квартира выглядит красиво.']],
        bad: 'You look tiredly.', good: 'You look <b>tired</b>.' },
      { t: 'idea', text: `Так же ведут себя ещё четыре слова: <b>feel</b> (чувствовать себя), <b>sound</b> (звучать), <b>smell</b> (пахнуть), <b>taste</b> (быть на вкус). После них — «какой?», не «-ly».`,
        rows: [['feel', 'I feel good today.', 'Я хорошо себя чувствую.'], ['sound', 'That sounds nice.', 'Звучит хорошо.'], ['smell / taste', 'It smells good. It tastes bad.', 'Пахнет вкусно. На вкус плохо.']],
        tip: `Мысленно замените look / smell на <b>is</b>: It smells good ≈ It is good. Если с is фраза складывается — нужно слово «какой?».` },
      { t: 'check', q: 'The new game looks ___.', ru: 'Новая игра выглядит красиво.', o: ['beautiful', 'beautifully', 'beauty'], a: 0, why: 'После look (выглядеть) — слово «какой?», без -ly.' },
      { t: 'check', q: 'Скажите: «Еда пахнет вкусно»', o: ['The food smells deliciously.', 'The food smells delicious.', 'The food smell delicious.'], a: 1, why: 'smell + «какой?»: delicious. И food = it → smells.' },
      { t: 'idea', text: `Итог: look, feel, sound, smell, taste + слово «какой?» — как после is.`,
        rows: [['You look', 'tired'], ['It smells', 'good'], ['That sounds', 'nice']] }
    ]},

    // ───────────── 4. Как сделать «как?» ─────────────
    { title: 'Как сделать «как?»: прибавляем -ly', steps: [
      { t: 'idea', text: `Слово «как?» почти всегда делают из слова «какой?» — прибавляют <b>-ly</b>: quick → quickly, slow → slowly, bad → badly.`,
        ex: [['The game started suddenly.', 'Игра началась внезапно.'], ['I opened the door slowly.', 'Я медленно открыл дверь.'], ['They talked loudly.', 'Они громко разговаривали.']] },
      { t: 'idea', text: `Две мелочи в написании. Слово на <b>-l</b> получает второе l: careful → careful<b>ly</b>; слово на <b>-y</b> меняет y на i: easy → eas<b>ily</b>.`,
        rows: [['обычно', '+ ly', 'slow → slowly'], ['на -l', '+ ly (два l)', 'careful → carefully'], ['на -y', 'y → i + ly', 'easy → easily']] },
      { t: 'check', q: 'easy → ___', ru: 'Как будет «легко»?', o: ['easyly', 'easily', 'easly'], a: 1, why: 'y меняется на i: easily.' },
      { t: 'idea', text: `Куда ставить «как?» — после действия или после «действие + что»: speaks quietly, opened the door slowly. Между действием и «что» его не ставят.`,
        lit: [['She', 'она'], ['speaks', 'говорит'], ['very', 'очень'], ['quietly', 'тихо']],
        ex: [['She won the game easily.', 'Она легко выиграла игру.'], ['I understand you perfectly.', 'Я прекрасно тебя понимаю.']],
        bad: 'She speaks very quiet.', good: 'She speaks very quiet<b>ly</b>.' },
      { t: 'check', q: 'Скажите: «Мы сыграли плохо»', o: ['We played bad.', 'We played badly.', 'We badly played.'], a: 1, why: 'Как сыграли? → badly, и стоит после действия.' },
      { t: 'idea', text: `Итог: «какой?» + -ly = «как?», и стоит после действия.`,
        rows: [['quick + ly', 'quickly'], ['careful + ly', 'carefully'], ['easy → i + ly', 'easily']] }
    ]},

    // ───────────── 5. hard, fast, late, early; good → well ─────────────
    { title: 'Четыре слова без -ly и good → well', steps: [
      { t: 'idea', text: `Хотите сказать «Я усердно работаю». Слово <b>hard</b> — и «трудный», и «усердно»: одно слово на оба вопроса, без -ly. Таких слов четыре: hard, fast, late, early.`,
        lit: [['I', 'я'], ['work', 'работаю'], ['hard', 'усердно']],
        rows: [['fast', 'a fast car', 'He runs fast.'], ['late', 'The bus was late.', 'I got up late.'], ['early', 'an early train', 'We left early.']],
        bad: 'He works hardly. · She drives fastly.', good: 'He works <b>hard</b>. · She drives <b>fast</b>.' },
      { t: 'check', q: 'Скажите: «Он бегает очень быстро»', o: ['He runs very fastly.', 'He runs very fast.', 'He runs very fast-ly.'], a: 1, why: 'fast не меняется; слова fastly нет.' },
      { t: 'idea', text: `Самое важное: <b>good</b> (хороший) → <b>well</b> (хорошо). Не goodly — совсем другое слово.`,
        lit: [['You', 'ты'], ['speak', 'говоришь'], ['English', 'по-английски'], ['well', 'хорошо']],
        ex: [['Your English is good.', 'Твой английский хороший.'], ['You speak English well.', 'Ты хорошо говоришь по-английски.'], ['It was a good game. We played well.', 'Была хорошая игра. Мы хорошо сыграли.']],
        bad: 'You play very good.', good: 'You play very <b>well</b>.' },
      { t: 'check', q: 'She plays the guitar very ___.', ru: 'Она очень хорошо играет на гитаре.', o: ['good', 'well', 'goodly'], a: 1, why: 'Как играет? → well.' },
      { t: 'check', q: 'Your English is very ___.', ru: 'Твой английский очень хороший.', o: ['good', 'well', 'goodly'], a: 0, why: 'После is — «какой?»: good.' },
      { t: 'idea', opt: true, text: `Мелочь: <b>hardly</b> существует, но значит «почти не» (I hardly slept — я почти не спал). А <b>well</b> ещё значит «здоров»: How are you? — I’m very well.`,
        ex: [['I hardly slept.', 'Я почти не спал.'], ['I’m very well, thanks.', 'У меня всё хорошо, спасибо.']] },
      { t: 'idea', text: `Итог: hard, fast, late, early — без -ly; good → well.`,
        rows: [['hard / fast / late / early', 'одно слово на «какой?» и «как?»'], ['good', 'хороший — Your English is good.'], ['well', 'хорошо — You speak well.']] }
    ]},

    // ───────────── 6. Порядок слов ─────────────
    { title: 'Порядок слов: кто → действие → что → где → когда', steps: [
      { t: 'idea', text: `Хотите сказать «Мне очень нравится эта игра». По-русски слова можно переставлять как угодно, по-английски порядок жёсткий: <b>кто → действие → что</b>, а «очень» — в конец.`,
        lit: [['I', 'я'], ['like', 'люблю'], ['this game', 'эту игру'], ['very much', 'очень']],
        ex: [['I like this game very much.', 'Мне очень нравится эта игра.'], ['He speaks English very well.', 'Он очень хорошо говорит по-английски.']],
        bad: 'I like very much this game.', good: 'I like <b>this game</b> very much.',
        tip: `Действие и его «что» — как магниты: speak English, like this game, play games. Между ними ничего не вставляем.` },
      { t: 'check', q: 'Скажите: «Он очень хорошо говорит по-английски»', o: ['He speaks very well English.', 'He speaks English very well.', 'He very well speaks English.'], a: 1, why: 'speak English — вместе, very well — после.' },
      { t: 'idea', text: `Если есть и «где», и «когда» — сначала <b>где</b>, потом <b>когда</b>. По-русски «Вчера мы ходили в парк», по-английски место раньше времени.`,
        lit: [['We', 'мы'], ['went', 'ходили'], ['to the park', 'в парк'], ['yesterday', 'вчера']],
        ex: [['We went to the park yesterday.', 'Вчера мы ходили в парк.'], ['I was at home all evening.', 'Я весь вечер был дома.'], ['She goes to work every day.', 'Она каждый день ходит на работу.']],
        bad: 'We went yesterday to the park.', good: 'We went <b>to the park yesterday</b>.',
        tip: `«Когда» можно поставить и в самое начало: Yesterday we went to the park. А «где» в начало не ставят.` },
      { t: 'check', q: 'Как правильно?', o: ['I drink every day two cups of coffee.', 'I every day drink two cups of coffee.', 'I drink two cups of coffee every day.'], a: 2, why: 'drink two cups — вместе; когда (every day) — в конце.' },
      { t: 'idea', text: `Итог: кто → действие → что → как → где → когда.`,
        rows: [['кто + действие + что', 'I like this game'], ['как', 'very much / very well'], ['где → когда', 'to the park yesterday']] }
    ]},

    // ───────────── 7. always, usually, often ─────────────
    { title: 'always, usually, often — где им место', steps: [
      { t: 'idea', text: `Хотите сказать «Я всегда пью кофе утром». Слово <b>always</b> (всегда) стоит <b>перед</b> действием — между «кто» и «что делает».`,
        lit: [['I', 'я'], ['always', 'всегда'], ['drink', 'пью'], ['coffee', 'кофе'], ['in the morning', 'утром']],
        ex: [['I always drink coffee in the morning.', 'Я всегда пью кофе утром.'], ['She often works from home.', 'Она часто работает из дома.'], ['We rarely watch films.', 'Мы редко смотрим фильмы.']],
        rows: [['always / usually', 'всегда / обычно', '100% / 90%'], ['often / sometimes', 'часто / иногда', '70% / 40%'], ['rarely / never', 'редко / никогда', '10% / 0%']],
        bad: 'I drink always coffee.', good: 'I <b>always drink</b> coffee.',
        tip: `Так ведут себя все слова «как часто» из таблицы — место у них одно.` },
      { t: 'check', q: 'Скажите: «Я обычно работаю из дома»', o: ['I work usually from home.', 'I usually work from home.', 'I am usually work from home.'], a: 1, why: 'usually — перед действием work; am тут не нужно.' },
      { t: 'idea', text: `Одно исключение, и оно важное: с am / is / are (was / were) эти слова стоят <b>после</b>. He is always late, а не He always is late.`,
        lit: [['He', 'он'], ['is', '(есть)'], ['always', 'всегда'], ['late', 'опаздывающий']],
        ex: [['I’m always tired on Mondays.', 'По понедельникам я всегда уставший.'], ['He is never late.', 'Он никогда не опаздывает.'], ['It was often cold there.', 'Там часто было холодно.']],
        tip: `С be — после, с любым другим действием — перед: She <b>is always</b> busy, но She <b>always works</b>.` },
      { t: 'check', q: 'She ___ late.', ru: 'Она всегда опаздывает.', o: ['always is', 'is always', 'always'], a: 1, why: 'С is слово always стоит после него.' },
      { t: 'idea', text: `Итог: слова «как часто» — перед действием, но после am / is / are.`,
        rows: [['перед действием', 'I always drink coffee.'], ['после be', 'He is always late.']] }
    ]},

    // ───────────── 8. never, also, still ─────────────
    { title: 'never без «не», also и still', steps: [
      { t: 'idea', text: `Если действий два (can + find, don’t + eat, do you + work) — слово «как часто» встаёт между ними.`,
        lit: [['I', 'я'], ['can', 'могу'], ['never', 'никогда'], ['find', 'найти'], ['my keys', 'мои ключи']],
        ex: [['I can never find my keys.', 'Я никогда не могу найти ключи.'], ['It doesn’t often rain here.', 'Здесь нечасто идёт дождь.'], ['Do you usually work from home?', 'Ты обычно работаешь из дома?']] },
      { t: 'check', q: 'I ___ find my phone.', ru: 'Я никогда не могу найти телефон.', o: ['never can', 'can never', 'can find never'], a: 1, why: 'Между двумя действиями: can + never + find.' },
      { t: 'idea', text: `Ловушка: <b>never</b> уже значит «не». Русское «никогда не ем» — по-английски одно never, без don’t.`,
        bad: 'I never don’t eat breakfast.', good: 'I <b>never eat</b> breakfast.',
        ex: [['I never eat breakfast.', 'Я никогда не завтракаю.'], ['She never plays at night.', 'Она никогда не играет ночью.']] },
      { t: 'check', q: 'Скажите: «Я никогда не завтракаю»', o: ['I never eat breakfast.', 'I eat never breakfast.', 'I never don’t eat breakfast.'], a: 0, why: 'never — перед действием, и второе «не» не нужно.' },
      { t: 'idea', text: `На том же месте стоят <b>also</b> (тоже) и <b>still</b> (всё ещё): He also plays chess. She is still at work.`,
        ex: [['He also plays chess.', 'Он тоже играет в шахматы.'], ['She is still at work.', 'Она всё ещё на работе.'], ['I’m still in bed.', 'Я всё ещё в кровати.']],
        tip: `В вопросе «когда-нибудь» — это <b>ever</b>: Do you ever play chess?` },
      { t: 'check', q: 'Richard ___ tennis.', ru: 'Ричард тоже играет в теннис.', o: ['plays also', 'also plays', 'also play'], a: 1, why: 'also — перед действием, а у he — plays.' },
      { t: 'idea', text: `Итог: never / also / still — там же, где always: перед действием, после be, между двумя действиями.`,
        rows: [['перед действием', 'I never eat breakfast.'], ['после be', 'She is still at work.'], ['между двумя', 'I can never find my keys.']] }
    ]}
  ];
})();
