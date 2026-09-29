// Грамматика по шагам для юнита a2-19: пустое начало предложения (there / it); there was / were; there will be, минус и вопрос; there has been и there was; it — время, дни, «пора», расстояние (far / a long way); it — погода, It’s hard to…, it или there; пересказ после said — шаг назад (was, liked, didn’t, could, would, had to); say или tell.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-19'); if (!u) return;
  u.walk = [
    // ───────────── 1. there was / there were ─────────────
    { title: '«Вчера была вечеринка» — there was, there were', steps: [
      { t: 'idea', text: `Хотите сказать «Вчера была вечеринка». Помните <b>there is</b> из A1 («где-то что-то есть»)? Для прошлого is меняем на <b>was</b>, а время и место уходят в конец — русский порядок «Вчера была…» не работает.`,
        lit: [['There', '(пустышка)'], ['was', 'была'], ['a party', 'вечеринка'], ['yesterday', 'вчера']],
        ex: [['There was a party yesterday.', 'Вчера была вечеринка.'], ['There was a big event in the game.', 'В игре был большой ивент.'], ['There was a strange noise in the kitchen.', 'На кухне был странный шум.']],
        bad: 'Yesterday was a party at Tom’s.', good: '<b>There was</b> a party at Tom’s yesterday.' },
      { t: 'idea', text: `Как is и are в A1: одна вещь — <b>was</b>, много — <b>were</b>.`,
        rows: [['сейчас', 'в прошлом'], ['there is a bug', 'there <b>was</b> a bug'], ['there are two bugs', 'there <b>were</b> two bugs']],
        ex: [['There were ten people on the call.', 'На созвоне было десять человек.'], ['There were a lot of guests at Anna’s birthday.', 'На дне рождения Анны было много гостей.']] },
      { t: 'check', q: '___ a lot of players online last night.', ru: 'Вчера вечером в сети было много игроков.', o: ['There was', 'There were', 'It was'], a: 1,
        why: 'Игроков много, это прошлое → There were.' },
      { t: 'check', q: 'Скажите: «На фестивале было много гостей»', o: ['At the festival were a lot of guests.', 'There were a lot of guests at the festival.', 'There was a lot of guests at the festival.'], a: 1,
        why: 'Начинаем с there, место — в конце; гостей много → were.' },
      { t: 'idea', text: `Итог: «было что-то где-то» → there was / there were, место и время — в конце.`,
        rows: [['одна вещь', 'There was a fire.'], ['много', 'There were two fires.']] }
    ]},

    // ───────────── 2. there will be, минус и вопрос ─────────────
    { title: '«Завтра будет обновление» — there will be; «не было», «было ли?»', steps: [
      { t: 'idea', text: `Хотите сказать «Завтра будет обновление». Будущее — через знакомое <b>will</b>: <b>there will be</b>. Это одна форма и для одной вещи, и для многих.`,
        lit: [['There', '(пустышка)'], ['will be', 'будет'], ['an update', 'обновление'], ['tomorrow', 'завтра']],
        ex: [['There will be a new season in autumn.', 'Осенью будет новый сезон.'], ['I think there will be a lot of people at the festival.', 'Думаю, на фестивале будет много народу.']],
        bad: 'There will a meeting tomorrow.', good: 'There will <b>be</b> a meeting tomorrow.' },
      { t: 'check', q: '___ twenty guests at the party.', ru: 'На вечеринке будет двадцать гостей.', o: ['There will', 'There will be', 'There were be'], a: 1,
        why: 'После will обязательно be: there will be.' },
      { t: 'idea', text: `«Не было / не будет» — как у was, were и will: <b>wasn’t</b>, <b>weren’t</b>, <b>won’t be</b>. Перед «много» обычно ставим any.`,
        ex: [['There wasn’t a lift.', 'Лифта не было.'], ['There weren’t any seats.', 'Мест не было.'], ['Buy tickets now. There won’t be any on Friday.', 'Купи билеты сейчас. В пятницу их уже не будет.']] },
      { t: 'idea', text: `В вопросе was / were / will выходит вперёд, а there остаётся за ним. В коротком ответе повторяем то же слово.`,
        lit: [['Will', '(будет?)'], ['there', '(пустышка)'], ['be', '(быть)'], ['a sequel?', 'продолжение']],
        ex: [['Was there a lift? — No, there wasn’t.', 'Там был лифт? — Нет.'], ['Were there any problems? — Yes, there were.', 'Были проблемы? — Да.'], ['Will there be a sequel? — Yes, there will.', 'Будет продолжение? — Да.']] },
      { t: 'check', q: '___ a meeting on Monday? — Yes, there will.', ru: 'В понедельник будет встреча? — Да.', o: ['Will there be', 'Will be there', 'There will be'], a: 0,
        why: 'В вопросе will выходит вперёд, дальше there be: Will there be…?' },
      { t: 'idea', text: `Итог: will be — будущее, одна форма на всё; в вопросе вперёд выходит was / were / will.`,
        rows: [['+', 'There will be a demo.'], ['−', 'There won’t be time.'], ['?', 'Will there be a demo?']] }
    ]},

    // ───────────── 3. there has been ─────────────
    { title: '«Случилась проблема!» — there has been', steps: [
      { t: 'idea', text: `Помните have + третья форма — «случилось, и это важно сейчас»? С there так же: <b>there has been</b> (одно), <b>there have been</b> (много). Коротко — there’s been.`,
        lit: [['There', '(пустышка)'], ['’s been', 'случилась / была'], ['a problem', 'проблема'], ['with the server', 'с сервером']],
        ex: [['Oh no! There’s been a problem with the server.', 'О нет! С сервером проблема.'], ['There have been three updates this month.', 'В этом месяце было уже три обновления.'], ['Has there been any news from the client?', 'От клиента были новости?']] },
      { t: 'check', q: 'Oh no! ___ a problem with the game — it doesn’t start.', ru: 'О нет! С игрой проблема — она не запускается.', o: ['There’s been', 'There was being', 'It has been'], a: 0,
        why: 'Новость, результат виден сейчас → there has been (there’s been).' },
      { t: 'idea', text: `Но если сказано, <b>когда</b> это было (yesterday, last night, in 2020), — только there was / were, как в уроке a2-4.`,
        ex: [['There’s been an accident. Call a doctor!', 'Авария! Вызовите врача!'], ['There was an accident on the bridge yesterday.', 'Вчера на мосту была авария.']],
        bad: 'There has been a fire in our building last night.', good: 'There <b>was</b> a fire in our building last night.' },
      { t: 'check', q: '___ two storms last week.', ru: 'На прошлой неделе было две грозы.', o: ['There have been', 'There were', 'There’s been'], a: 1,
        why: 'last week — время названо и закончилось → there were.' },
      { t: 'idea', text: `Итог: новость «сейчас» → there has / have been; есть «когда» → there was / were.`,
        rows: [['результат сейчас', 'There’s been an accident!'], ['точное время', 'There was an accident last night.']] }
    ]},

    // ───────────── 4. it: время, дни, расстояние ─────────────
    { title: '«Поздно», «пятница», «далеко» — it', steps: [
      { t: 'idea', text: `Хотите сказать «Поздно». По-русски одно слово, а английскому снова нужен кто-то в начале. Для времени, дней и дат это <b>it</b>. А «пора что-то делать» — <b>It’s time to</b> + слово-действие.`,
        lit: [['It', '(оно)'], ['’s', '(есть)'], ['late', 'поздно']],
        ex: [['What time is it? — It’s half past six.', 'Который час? — Полседьмого.'], ['Is it Wednesday today? — No, it’s Thursday.', 'Сегодня среда? — Нет, четверг.'], ['It’s late. It’s time to go home.', 'Поздно. Пора домой.']],
        tip: `Даты и прошлое — тоже it: It’s the third of May. It was my birthday on Sunday.` },
      { t: 'check', q: 'Скажите: «Пора начинать стрим»', o: ['Is time to start the stream.', 'It’s time to start the stream.', 'Time is to start the stream.'], a: 1,
        why: 'Пора = It’s time to + действие. It выбрасывать нельзя.' },
      { t: 'idea', text: `Расстояние — тоже it: <b>How far is it</b> from A to B? В обычном ответе «далеко» — <b>a long way</b>, а <b>far</b> — только в вопросе и с «не».`,
        lit: [['How far', 'как далеко'], ['is it', '(есть оно)'], ['from your flat', 'от твоей квартиры'], ['to the office?', 'до офиса']],
        rows: [['вопрос, «не»', 'Is it far? It isn’t far.'], ['обычная фраза', 'It’s a long way.']],
        bad: 'It’s far from my home to the studio.', good: 'It’s <b>a long way</b> from my home to the studio.' },
      { t: 'check', q: 'The airport is ___ from the city. Take the train.', ru: 'Аэропорт далеко от города. Поезжай на поезде.', o: ['a long way', 'far', 'long'], a: 0,
        why: 'Обычная фраза без «не» и без вопроса → a long way.' },
      { t: 'idea', text: `Итог: время, день, дата, расстояние → начинаем с it.`,
        rows: [['время / день', 'It’s six. It’s Friday.'], ['пора', 'It’s time to go.'], ['расстояние', 'How far is it? — It’s two kilometres.']] }
    ]},

    // ───────────── 5. it: погода, It’s hard to…, it или there ─────────────
    { title: '«Холодно», «Трудно найти» — it; it или there?', steps: [
      { t: 'idea', text: `Погода — тоже <b>it</b>: «Холодно» = It’s cold, «Идёт дождь» = It’s raining. Без it так нельзя — это самое частое место ошибок.`,
        lit: [['It', '(оно)'], ['’s', '(есть)'], ['raining', 'дождит'], ['again', 'опять']],
        ex: [['It’s windy and cloudy.', 'Ветрено и пасмурно.'], ['It snowed all night.', 'Всю ночь шёл снег.'], ['It gets dark at five in winter.', 'Зимой темнеет в пять.']],
        bad: 'Is raining again.', good: '<b>It’s</b> raining again.' },
      { t: 'check', q: 'Скажите: «Сегодня холодно»', o: ['Is cold today.', 'It’s cold today.', 'There is cold today.'], a: 1,
        why: 'Погода — всегда it: It’s cold.' },
      { t: 'idea', text: `Хотите оценить действие: «трудно найти», «приятно видеть». Начинаем с <b>It’s</b> + оценка, а само действие — после <b>to</b>.`,
        lit: [['It’s', '(оно есть)'], ['hard', 'трудно'], ['to find', 'найти'], ['a good designer', 'хорошего дизайнера']],
        ex: [['It’s nice to see you again!', 'Рад снова тебя видеть!'], ['It was impossible to beat that boss.', 'Этого босса было невозможно победить.'], ['Is it true that you’re moving to Kazan?', 'Правда, что ты переезжаешь в Казань?']] },
      { t: 'check', q: '___ to learn a language without practice.', ru: 'Трудно выучить язык без практики.', o: ['It’s hard', 'Is hard', 'There is hard'], a: 0,
        why: 'Оценка действия: It’s + hard + to + действие.' },
      { t: 'idea', text: `it или there? Смотрим, что дальше. Признак или действие (cold, windy, rains) → <b>it</b>. Вещь (a wind, a lot of snow) → <b>there</b>.`,
        rows: [['It was very windy.', 'There was a strong wind.'], ['It snowed a lot.', 'There was a lot of snow.']],
        bad: 'It was a strong wind.', good: '<b>There was</b> a strong wind.' },
      { t: 'check', q: '___ a lot of snow last winter.', ru: 'Прошлой зимой было много снега.', o: ['There was', 'It was', 'It snowed'], a: 0,
        why: 'Дальше вещь (a lot of snow) → there was.' },
      { t: 'idea', text: `Итог: there — «что-то есть», it — «так обстоят дела». По-русски на их месте пусто, по-английски — никогда.`,
        rows: [['погода, оценка', 'It’s cold. It’s hard to say.'], ['вещь', 'There’s a lot of rain.']] }
    ]},

    // ───────────── 6. said that — шаг назад ─────────────
    { title: '«Она сказала, что устала» — шаг назад в прошлое', steps: [
      { t: 'idea', text: `Кейт говорит: «Я занята». Пересказываем: Kate said she <b>was</b> busy. По-русски время не меняем, а по-английски после said слово делает шаг назад: am / is → was, are → were.`,
        lit: [['Kate', 'Кейт'], ['said', 'сказала'], ['(that)', '(что)'], ['she', 'она'], ['was', '(была)'], ['busy', 'занята']],
        ex: [['“I’m tired.” → Max said he was tired.', '«Я устал». → Макс сказал, что устал.'], ['“We’re ready.” → They said they were ready.', '«Мы готовы». → Они сказали, что готовы.']],
        bad: 'Max said that he is tired.', good: 'Max said that he <b>was</b> tired.',
        tip: `that можно ставить, а можно и нет: He said (that) he was hungry.` },
      { t: 'check', q: '“I’m busy,” Anna said. → Anna said she ___ busy.', ru: '«Я занята», — сказала Анна. → Анна сказала, что занята.', o: ['is', 'was', 'were'], a: 1,
        why: 'После said шаг назад: is → was; Анна одна → was.' },
      { t: 'idea', text: `Остальные слова-действия тоже шагают назад — как в Past Simple: like → <b>liked</b>, don’t → <b>didn’t</b>, am working → <b>was working</b>.`,
        ex: [['“I like the logo.” → The client said she liked the logo.', '«Мне нравится логотип». → Клиентка сказала, что ей нравится логотип.'], ['“I don’t have time.” → Oleg said he didn’t have time.', '«У меня нет времени». → Олег сказал, что у него нет времени.'], ['“I’m working from home.” → Anna said she was working from home.', '«Я работаю из дома». → Анна сказала, что работает из дома.']] },
      { t: 'idea', text: `И «я, мой, ты» меняем по смыслу — как и по-русски: кто теперь говорит, о ком речь.`,
        ex: [['“I love my job.” → She said she loved her job.', '«Я люблю свою работу». → Она сказала, что любит свою работу.'], ['“You look tired.” → He said I looked tired.', '«Ты выглядишь усталым». → Он сказал, что я выгляжу усталым.']] },
      { t: 'check', q: '“I don’t like my job,” Oleg said. → Oleg said he ___ his job.', ru: '«Мне не нравится моя работа», — сказал Олег. → Олег сказал, что ему не нравится его работа.', o: ['doesn’t like', 'didn’t like', 'don’t like'], a: 1,
        why: 'Шаг назад: don’t → didn’t; my → his.' },
      { t: 'idea', text: `Итог: после said слово из чужой фразы делает шаг назад в прошлое.`,
        rows: [['am / is / are', 'was / were'], ['like / don’t like', 'liked / didn’t like'], ['I / my', 'he, she / his, her']] }
    ]},

    // ───────────── 7. can → could, will → would ─────────────
    { title: '«Он сказал, что позвонит» — could, would, had to', steps: [
      { t: 'idea', text: `Маленькие слова-помощники тоже шагают назад. can → <b>could</b> (помните, could — это can в прошлом), have to → <b>had to</b>.`,
        ex: [['“I can’t come.” → Tom said he couldn’t come.', '«Я не могу прийти». → Том сказал, что не может прийти.'], ['“I have to leave.” → He said he had to leave.', '«Мне надо уйти». → Он сказал, что ему надо уйти.']] },
      { t: 'idea', text: `will → <b>would</b>. Would вы знаете по I’d like; здесь это просто «будет» в пересказе. По-русски «сказала, что пришлёт», по-английски — would send.`,
        ex: [['“I’ll call you.” → Lena said she would call me.', '«Я тебе позвоню». → Лена сказала, что позвонит мне.'], ['They announced that there would be a sequel.', 'Они объявили, что будет продолжение.']],
        bad: 'She said she will send the file.', good: 'She said she <b>would</b> send the file.' },
      { t: 'check', q: '“I can’t find my keys,” Kate said. → Kate said she ___ find her keys.', ru: '«Не могу найти ключи», — сказала Кейт. → Кейт сказала, что не может найти ключи.', o: ['can’t', 'couldn’t', 'didn’t'], a: 1,
        why: 'can → could, значит can’t → couldn’t.' },
      { t: 'check', q: '“I’ll be late.” → Tom said he ___ late.', ru: '«Я опоздаю». → Том сказал, что опоздает.', o: ['will be', 'would be', 'was be'], a: 1,
        why: 'will → would: he would be late.' },
      { t: 'idea', opt: true, text: `Если сказали have done («уже сделал»), в пересказе будет <b>had done</b>: had + третья форма — «сделал ещё до того момента».`,
        ex: [['“I’ve finished the icons.” → Vera said she had finished the icons.', '«Я закончила иконки». → Вера сказала, что закончила иконки.']] },
      { t: 'idea', text: `Итог: can → could, will → would, have to → had to.`,
        rows: [['can / can’t', 'could / couldn’t'], ['will / won’t', 'would / wouldn’t'], ['have to', 'had to']],
        tip: `Так же после explained, replied, complained, announced: He explained that the server was down.` }
    ]},

    // ───────────── 8. say или tell ─────────────
    { title: 'said или told?', steps: [
      { t: 'idea', text: `Оба слова — «сказать». У <b>tell</b> (told) сразу за ним идёт человек, без предлога. У <b>say</b> (said) человека можно не называть, а если называем — через to.`,
        lit: [['He', 'он'], ['told', 'сказал'], ['me', 'мне'], ['that he was busy', 'что он занят']],
        rows: [['said', 'He said (to me) that he was busy.'], ['told + кому', 'He told me that he was busy.']],
        bad: 'He said me that the build was ready.', good: 'He <b>told me</b> that… / He <b>said</b> that…',
        tip: `tell тянет за собой человека: told me, told Max, told us. Нет человека — берите said.` },
      { t: 'check', q: 'She ___ me that the meeting was cancelled.', ru: 'Она сказала мне, что встречу отменили.', o: ['said', 'told', 'say'], a: 1,
        why: 'Сразу после слова стоит человек (me) → told.' },
      { t: 'check', q: 'He ___ that he was on his way.', ru: 'Он сказал, что уже едет.', o: ['told', 'said', 'told to'], a: 1,
        why: 'Человека нет → said.' },
      { t: 'idea', opt: true, text: `Устойчивые пары, их удобно запомнить целиком. С say: say hello, say goodbye, say sorry. С tell: tell the truth (сказать правду), tell a lie (соврать), tell a joke, tell a story.`,
        ex: [['Say hello to Max!', 'Передай привет Максу!'], ['Tell me the truth.', 'Скажи мне правду.']] },
      { t: 'idea', text: `Итог урока: было / будет → there was / were / will be; время, погода, расстояние → it; после said — шаг назад; told me, но said (to me).`,
        rows: [['что-то было / будет', 'There was / will be a party.'], ['погода, время', 'It’s cold. It’s late.'], ['пересказ', 'She told me she couldn’t come.']] }
    ]}
  ];
})();
