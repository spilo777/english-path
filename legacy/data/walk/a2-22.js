// Грамматика по шагам для юнита a2-22: still / yet / already (повтор), still + не = «до сих пор не», Not yet, already? — удивление, not … any more / any longer, give кому + что / что + to кому, for с buy / get / make, give it to me, explain … to, lend / borrow, названия мест без the и с the, итог A2.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-22'); if (!u) return;
  u.walk = [
    // ───────────── 1. Повторяем still / yet / already ─────────────
    { title: '«Всё ещё», «ещё не», «уже» — вспоминаем', steps: [
      { t: 'idea', text: `Помните урок a2-2? Три слова про время: <b>still</b> — всё ещё (ничего не изменилось), <b>yet</b> — «ещё не» или «уже?» в вопросе, <b>already</b> — уже, раньше, чем ждали.`,
        rows: [['still', 'всё ещё', 'She’s still at work.'], ['yet', 'ещё не / уже?', 'Has the new season come out yet?'], ['already', 'уже', 'He’s already here!']] },
      { t: 'idea', text: `Где они стоят: <b>still</b> и <b>already</b> — после am / is / are, но перед обычным словом-действием. <b>yet</b> — всегда в самом конце.`,
        ex: [['I still use my old tablet.', 'Я всё ещё пользуюсь старым планшетом.'], ['Don’t explain. I already know.', 'Не объясняй, я уже знаю.'], ['Emma isn’t here yet.', 'Эммы ещё нет.']],
        bad: 'She is yet at the office. / I yet play this game.', good: 'She is <b>still</b> at the office. / I <b>still</b> play this game.' },
      { t: 'check', q: 'Скажите: «Я всё ещё играю в эту игру»', o: ['I yet play this game.', 'I play still this game.', 'I still play this game.'], a: 2,
        why: '«Всё ещё» без not — только still, и стоит он перед play.' },
      { t: 'idea', text: `Итог: still и already — в середине, yet — в конце.`,
        rows: [['всё ещё', 'I still play it. / She’s still here.'], ['уже', 'I already know. / I’ve already seen it.'], ['ещё не / уже?', 'I haven’t seen it yet. / Have you seen it yet?']] }
    ]},

    // ───────────── 2. still + не ─────────────
    { title: '«До сих пор не» — still перед «не»', steps: [
      { t: 'idea', text: `Хотите сказать «Я до сих пор не закончил» — уже пора бы, а всё никак. Ставим <b>still</b> перед haven’t / don’t / can’t.`,
        lit: [['I', 'я'], ['still', 'до сих пор'], ['haven’t', 'не'], ['finished', 'закончил']],
        ex: [['I still haven’t finished.', 'Я до сих пор не закончил.'], ['He still doesn’t know the rules.', 'Он до сих пор не знает правил.'], ['I still can’t beat this boss!', 'Я всё никак не могу победить этого босса!']] },
      { t: 'idea', text: `Сравните с yet. <b>I haven’t finished yet</b> — спокойно: ещё не, скоро будет. <b>I still haven’t finished</b> — «до сих пор не», долго, уже раздражает.`,
        bad: 'I haven’t still finished.', good: 'I <b>still haven’t</b> finished. / I haven’t finished <b>yet</b>.',
        tip: `Готовый короткий ответ «Ещё нет» — <b>Not yet.</b> Are you ready? — Not yet.` },
      { t: 'check', q: 'I wrote to him two weeks ago, and he ___ answered.', ru: 'Я написал ему две недели назад, а он до сих пор не ответил.', o: ['yet hasn’t', 'still hasn’t', 'hasn’t still'], a: 1,
        why: '«До сих пор не» → still стоит перед hasn’t.' },
      { t: 'idea', text: `А <b>already</b> в вопросе — это удивление: «Как, уже?!» Обычно в конце. Спокойное «уже?» — это yet.`,
        ex: [['Are you leaving already?', 'Ты уже уходишь?!'], ['Is it midnight already?', 'Уже полночь?!'], ['Have you finished yet?', 'Ты уже закончил? (спокойно)']] },
      { t: 'check', q: 'You’re leaving ___? It’s only nine!', ru: 'Ты уже уходишь? Ещё только девять!', o: ['yet', 'already', 'still'], a: 1,
        why: 'Удивление: раньше, чем ждали → already.' },
      { t: 'idea', text: `Итог: still перед «не» — «до сих пор не»; already? — «как, уже?!».`,
        rows: [['ещё не (спокойно)', 'I haven’t finished yet. — Not yet.'], ['до сих пор не', 'I still haven’t finished.'], ['уже?! (удивление)', 'Are you leaving already?']] }
    ]},

    // ───────────── 3. not … any more ─────────────
    { title: '«Больше не» — not … any more', steps: [
      { t: 'idea', text: `Хотите сказать «Я больше не играю в эту игру»: раньше играл, теперь нет. Берём обычное «не» (don’t, didn’t, isn’t), а в самый конец — <b>any more</b>.`,
        lit: [['I', 'я'], ['don’t', 'не'], ['play', 'играю'], ['that game', 'в эту игру'], ['any more', 'больше']],
        ex: [['I don’t play that game any more.', 'Я больше не играю в эту игру.'], ['He isn’t my boss any more.', 'Он мне больше не начальник.'], ['We don’t live in Omsk any more.', 'Мы больше не живём в Омске.']] },
      { t: 'idea', text: `Русское «больше» тянет сказать просто more — но так нельзя, нужно два слова <b>any more</b>. Можно и <b>any longer</b>: смысл тот же.`,
        bad: 'I don’t play it more.', good: 'I don’t play it <b>any more</b>. / I don’t play it <b>any longer</b>.',
        ex: [['She doesn’t live here any longer.', 'Она здесь больше не живёт.']],
        tip: `Пишут и слитно: anymore. Это противоположность still: still — как было, так и есть; not … any more — было, а теперь нет.` },
      { t: 'check', q: 'I used to watch anime, but I don’t watch it ___.', ru: 'Раньше я смотрел аниме, но больше не смотрю.', o: ['still', 'yet', 'any more'], a: 2,
        why: '«Больше не» = not … any more, в конце.' },
      { t: 'idea', text: `Итог: still — ничего не изменилось; not … any more — изменилось.`,
        rows: [['всё ещё', 'I still live in Omsk.'], ['до сих пор не', 'I still haven’t moved.'], ['больше не', 'I don’t live in Omsk any more.']] }
    ]},

    // ───────────── 4. Два порядка после give ─────────────
    { title: '«Я дал Саше ключи» — два порядка после give', steps: [
      { t: 'idea', text: `Хотите сказать «Я дал Саше ключи». По-русски «кому» и «что» можно переставлять как угодно. По-английски первый способ — <b>кому + что</b>, без всяких маленьких слов между ними.`,
        lit: [['I', 'я'], ['gave', 'дал'], ['Sasha', 'Саше'], ['the keys', 'ключи']],
        ex: [['I gave Sasha the keys.', 'Я дал Саше ключи.'], ['Can you send me the file?', 'Можешь прислать мне файл?'], ['She showed us her portfolio.', 'Она показала нам своё портфолио.']],
        tip: `Так же работают: give, send, show, lend, pass, bring, offer, sell, tell, teach, pay. Pass me the salt. They offered me a job.` },
      { t: 'idea', text: `Второй способ — <b>что + to + кому</b>. Здесь to отвечает на вопрос «кому?». Главное — не ставить to в первый способ.`,
        lit: [['I', 'я'], ['gave', 'дал'], ['the keys', 'ключи'], ['to', '(кому)'], ['Sasha', 'Саше']],
        ex: [['I gave the keys to Sasha.', 'Я дал ключи Саше.'], ['Can you send the file to me?', 'Можешь прислать файл мне?']],
        bad: 'I gave to Sasha the keys.', good: 'I gave <b>Sasha the keys</b>. / I gave the keys <b>to Sasha</b>.',
        tip: `Какой выбрать? В конец ставят то, что важнее: I gave the keys to Sasha, not to Masha (важно, кому).` },
      { t: 'check', q: 'Can you ___ the link?', ru: 'Можешь прислать мне ссылку?', o: ['send to me', 'send me', 'send for me'], a: 1,
        why: 'Кому + что — без маленьких слов: send me the link.' },
      { t: 'idea', text: `С <b>buy, get, make, find</b> вместо to ставим <b>for</b> — «для»: купил для мамы, приготовил для нас.`,
        ex: [['I bought my mum some flowers. = I bought some flowers for my mum.', 'Я купил маме цветы.'], ['Anna made us dinner. = Anna made dinner for us.', 'Анна приготовила нам ужин.'], ['I’m going to the shop. Can I get you anything?', 'Я в магазин. Тебе что-нибудь взять?']],
        bad: 'I bought a present to my brother.', good: 'I bought a present <b>for</b> my brother.' },
      { t: 'check', q: 'I bought a new mouse ___ my brother.', ru: 'Я купил брату новую мышку.', o: ['to', 'for', '—'], a: 1,
        why: 'С buy / get / make — for: купил для кого-то.' },
      { t: 'idea', text: `Итог: кому + что без предлога или что + to кому; с buy / get / make — for.`,
        rows: [['кому + что', 'I gave Sasha the keys.'], ['что + to кому', 'I gave the keys to Sasha.'], ['buy / get / make', 'I bought flowers for my mum.']] }
    ]},

    // ───────────── 5. give it to me, explain, lend / borrow ─────────────
    { title: '«Дай его мне» — it, them и «одолжить»', steps: [
      { t: 'idea', text: `Хотите сказать «Дай её мне» (про зарядку). Если «что» — это <b>it</b> или <b>them</b>, работает только порядок с to: <b>give it to me</b>.`,
        lit: [['Give', 'дай'], ['it', 'её'], ['to me', 'мне']],
        ex: [['That’s my charger. Give it to me.', 'Это моя зарядка. Дай её мне.'], ['These are Kate’s headphones. Can you give them to her?', 'Это наушники Кейт. Передашь их ей?'], ['I’ll send them to you tonight.', 'Пришлю их тебе вечером.']],
        bad: 'Give me it. / I sent him them.', good: 'Give <b>it to me</b>. / I sent <b>them to him</b>.',
        tip: `Если «что» — обычное слово, первый порядок в порядке: Give him the book. Ловушка только с it и them.` },
      { t: 'check', q: 'These are Anna’s keys. Can you give ___?', ru: 'Это ключи Анны. Можешь отдать их ей?', o: ['her them', 'them to her', 'to her them'], a: 1,
        why: '«Что» = them → только порядок с to: give them to her.' },
      { t: 'idea', text: `А вот <b>explain</b> (объяснять) не любит «кому + что» совсем. Всегда: объяснить что + <b>to</b> кому.`,
        bad: 'She explained me the rules.', good: 'She explained the rules <b>to me</b>.',
        ex: [['Can you explain it to me?', 'Можешь объяснить мне это?'], ['He explained the task to us.', 'Он объяснил нам задачу.']] },
      { t: 'check', q: 'Скажите: «Он объяснил мне задачу»', o: ['He explained me the task.', 'He explained the task to me.', 'He explained to me it.'], a: 1,
        why: 'explain — только «что + to кому».' },
      { t: 'idea', text: `Ловушка — «одолжить». В английском это два разных слова: <b>lend</b> — дать на время (от вас), <b>borrow</b> — взять на время (к вам).`,
        rows: [['lend — lent', 'дать кому-то', 'Can you lend me your pen?'], ['borrow', 'взять у кого-то (from)', 'Can I borrow your pen? I borrowed it from Anna.']],
        bad: 'Can you borrow me your pen?', good: 'Can you <b>lend</b> me your pen? / Can I <b>borrow</b> your pen?',
        tip: `Lend — от тебя, borrow — к тебе. «Лендишь» — отдаёшь, «бороу» — берёшь.` },
      { t: 'check', q: 'Скажите: «Можно одолжить твою зарядку?»', o: ['Can you borrow me your charger?', 'Can I borrow your charger?', 'Can I lend your charger?'], a: 1,
        why: 'Я беру на время → Can I borrow…?' },
      { t: 'idea', text: `Итог: с it / them — только «it to me»; explain — только с to; lend — даю, borrow — беру.`,
        rows: [['it / them', 'Give it to me. Send them to her.'], ['explain', 'Explain it to me.'], ['одолжить', 'Can you lend me…? / Can I borrow…?']] }
    ]},

    // ───────────── 6. Места без the ─────────────
    { title: 'Japan, Kazan, Red Square — места без the', steps: [
      { t: 'idea', text: `Хотите сказать «Я хочу поехать в Японию». Помните из a1-13: перед именами людей (Anna, Max) маленького слова-подсказки нет. У большинства мест так же: страны, города, улицы — <b>без the</b>.`,
        rows: [['континенты, страны', 'Europe, Asia, Russia, Japan, Brazil'], ['города', 'Kazan, Tokyo, Berlin'], ['улицы, площади, парки', 'Lenina Street, Red Square, Gorky Park']],
        ex: [['I want to visit Japan.', 'Я хочу побывать в Японии.'], ['We live on Lenina Street.', 'Мы живём на улице Ленина.']],
        bad: 'I want to visit the Japan. / I live in the Tverskaya Street.', good: 'I want to visit <b>Japan</b>. / I live <b>on Tverskaya Street</b>.' },
      { t: 'check', q: '___ Brazil is the biggest country in South America.', ru: 'Бразилия — самая большая страна в Южной Америке.', o: ['The', 'A', '— (ничего)'], a: 2,
        why: 'Обычное название страны — без the.' },
      { t: 'idea', text: `Тоже без the: <b>один</b> остров, <b>одна</b> гора, озеро со словом Lake, аэропорты и вокзалы, университеты вида «Название + University».`,
        rows: [['остров, гора, Lake…', 'Bali, Sicily, Elbrus, Lake Baikal'], ['аэропорты, вокзалы', 'Sheremetyevo Airport, King’s Cross Station'], ['… University', 'Moscow State University']],
        ex: [['My flight leaves from Pulkovo Airport.', 'Мой рейс вылетает из Пулково.']] },
      { t: 'check', q: 'We swam in ___ Lake Baikal last summer.', ru: 'Прошлым летом мы купались в Байкале.', o: ['the', 'a', '— (ничего)'], a: 2,
        why: 'Озеро со словом Lake впереди — без the.' },
      { t: 'idea', text: `Итог: обычное название места — как имя человека, без the.`,
        rows: [['страны, города, улицы', 'Russia, Kazan, Lenina Street'], ['один остров, гора, Lake…', 'Bali, Everest, Lake Baikal'], ['аэропорты, … University', 'Pulkovo Airport, Moscow State University']] }
    ]},

    // ───────────── 7. Места с the ─────────────
    { title: 'the Alps, the Volga, the Hermitage — места с the', steps: [
      { t: 'idea', text: `the появляется, когда название — это <b>много</b> (на конце -s): горы, острова. Отсюда и <b>the USA</b>: United States — много штатов. Так же the UK, the Czech Republic — «объединение» частей.`,
        ex: [['We went skiing in the Alps.', 'Мы катались на лыжах в Альпах.'], ['I’ve been to the Netherlands.', 'Я был в Нидерландах.'], ['Canada is bigger than the USA.', 'Канада больше, чем США.']],
        rows: [['много', 'the Alps, the Urals, the Canary Islands'], ['States, Kingdom, Republic', 'the USA, the UK, the Czech Republic']] },
      { t: 'check', q: 'We went skiing in ___ Urals last winter.', ru: 'Прошлой зимой мы катались на лыжах на Урале.', o: ['the', 'a', '— (ничего)'], a: 0,
        why: 'Urals — горы, их много → the.' },
      { t: 'idea', text: `Второй случай — <b>вода</b>: океаны, моря, реки, каналы. И пустыни туда же. Только озеро с Lake — без the.`,
        ex: [['We flew over the Atlantic.', 'Мы летели над Атлантикой.'], ['We swam in the Black Sea.', 'Мы купались в Чёрном море.'], ['It rarely rains in the Sahara.', 'В Сахаре редко идут дожди.']],
        rows: [['the Pacific, the Black Sea', 'океан, море'], ['the Volga, the Thames', 'реки']] },
      { t: 'check', q: 'The Volga flows into ___ Caspian Sea.', ru: 'Волга впадает в Каспийское море.', o: ['the', 'a', '— (ничего)'], a: 0,
        why: 'Моря, реки, океаны — с the.' },
      { t: 'idea', text: `Третий и четвёртый: места, <b>куда идут с билетом</b> (отели, музеи, театры, кино, галереи), и названия вида <b>the … of …</b>.`,
        rows: [['с билетом', 'the Hilton, the Hermitage, the Bolshoi Theatre, the Louvre'], ['the … of …', 'the Tower of London, the University of Tokyo, the north of Italy']],
        bad: 'I saw it in Hermitage. / They live in south of France.', good: 'I saw it in <b>the</b> Hermitage. / They live in <b>the</b> south of France.',
        tip: `Сравните: Moscow State University, но the University of Moscow. Всё решает of.` },
      { t: 'check', q: 'Скажите: «Я был на севере Италии»', o: ['I’ve been to north of Italy.', 'I’ve been to the north of Italy.', 'I’ve been to the Italy north.'], a: 1,
        why: 'Конструкция the … of … → the north of Italy.' },
      { t: 'idea', text: `Итог: запомните четыре «the» — <b>много</b>, <b>вода</b>, <b>of</b>, <b>с билетом</b>. Всё остальное — без the.`,
        rows: [['много / вода', 'the Alps, the USA / the Volga, the Black Sea'], ['of / с билетом', 'the north of Italy / the Hermitage, the Hilton'], ['остальное', 'Russia, Kazan, Everest, Lake Baikal']] }
    ]},

    // ───────────── 8. Итог A2 ─────────────
    { title: 'Итог A2: что вы теперь можете сказать', steps: [
      { t: 'idea', text: `Поздравляем: это последний урок A2! Посмотрите, как много вы теперь можете сказать о <b>прошлом</b> — не одним did, а по-разному.`,
        rows: [['процесс, который прервали', 'I was playing when the power went off.'], ['итог сейчас, опыт', 'I’ve just sent it. I’ve never been abroad.'], ['когда-то было, теперь нет', 'I used to play every day.']] },
      { t: 'idea', text: `О <b>будущем</b> — тоже тремя способами, смотря что у вас в голове. А про «может быть» — might.`,
        rows: [['договорились', 'I’m meeting Anna tomorrow.'], ['собираюсь', 'I’m going to learn Blender.'], ['решил сейчас, обещаю', 'I’ll help you. — It might rain.']] },
      { t: 'idea', text: `И ещё: советы и правила, сравнения, «кто сделал» наоборот, «если бы» и вежливые вопросы.`,
        ex: [['You don’t have to pay. It’s the best game I’ve ever played!', 'Платить не надо. Это лучшая игра в моей жизни!'], ['The game was made in Poland.', 'Игру сделали в Польше.'], ['If I had time, I’d travel. Do you know where he lives?', 'Если бы было время, я бы путешествовал. Ты знаешь, где он живёт?']] },
      { t: 'check', q: 'I ___ this series three times. I first ___ it in 2021.', ru: 'Я смотрел этот сериал три раза. Впервые — в 2021 году.', o: ['watched … have watched', 'have watched … watched', 'have watched … have watched'], a: 1,
        why: 'Опыт без времени → have watched; есть «в 2021» → watched.' },
      { t: 'check', q: 'If I ___ a bigger flat, I would buy a piano.', ru: 'Если бы у меня была квартира побольше, я бы купил пианино.', o: ['have', 'had', 'will have'], a: 1,
        why: '«Если бы» → if + вторая форма, дальше would.' },
      { t: 'idea', text: `Итог A2: вы рассказываете о прошлом и будущем, сравниваете, советуете и строите сложные фразы. Дальше — B1: те же темы, но глубже.`,
        rows: [['прошлое', 'was doing · have done · did · used to'], ['будущее', 'I’m meeting · going to · will · might'], ['сложные фразы', 'was made · If I had… · Do you know where…?']] }
    ]}
  ];
})();
