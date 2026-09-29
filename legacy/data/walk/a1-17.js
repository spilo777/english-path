// Грамматика по шагам для юнита a1-17: все виды вопросов — помощник выходит вперёд (am/is/are, was/were, can, have got), do/does/did, Who saw you? vs Who did you see?, what/which, how + прилагательное, How long does it take?
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-17'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея: помощник выходит вперёд ─────────────
    { title: 'Вопрос — это не интонация, а порядок слов', steps: [
      { t: 'idea', text: `Хотите спросить: «Ты дома?». По-русски мы просто говорим то же самое с вопросом в голосе. По-английски так нельзя: маленькое слово <b>are</b> должно выйти вперёд, перед «ты».`,
        lit: [['Are', '(есть)'], ['you', 'ты'], ['at home?', 'дома?']],
        ex: [['You are at home.', 'Ты дома.'], ['Are you at home?', 'Ты дома?'], ['Is Anna tired?', 'Анна устала?']] },
      { t: 'idea', text: `Так работают все маленькие слова, которые вы уже знаете: am / is / are, was / were, <b>can</b>, have (got). Они меняются местами с тем, о ком говорим.`,
        rows: [['You are tired.', 'Are you tired?'], ['The game was good.', 'Was the game good?'], ['Tom can draw.', 'Can Tom draw?'], ['You have got a car.', 'Have you got a car?']],
        tip: `Представьте, что это слово — игрок, который первым выбегает на карту. В вопросе оно всегда впереди.` },
      { t: 'check', q: 'Скажите: «Она умеет готовить?»', o: ['She can cook?', 'Can she cook?', 'Does she can cook?'], a: 1, why: 'can сам выходит вперёд: Can she cook? Ничего добавлять не надо.' },
      { t: 'idea', text: `Теперь вопрос со словом: «<b>Где</b> ты?». Слово-вопрос (where, why, what…) ставим в самое начало, а сразу за ним — наш маленький помощник.`,
        lit: [['Where', 'где'], ['are', '(есть)'], ['you?', 'ты?']],
        ex: [['Where are you?', 'Где ты?'], ['Why are you late?', 'Почему ты опоздал?'], ['What is she cooking?', 'Что она готовит?']],
        rows: [['where', 'где, куда'], ['when', 'когда'], ['why', 'почему'], ['what', 'что'], ['who', 'кто'], ['how', 'как']] },
      { t: 'idea', text: `Тот, о ком спрашиваем, может быть длинным: «твои новые наушники». Ничего не меняется — помощник всё равно перед ним.`,
        bad: 'Where your headphones are?', good: 'Where <b>are</b> your headphones?',
        ex: [['Is your new laptop fast?', 'Твой новый ноутбук быстрый?'], ['Why was the film so long?', 'Почему фильм был таким долгим?']] },
      { t: 'check', q: 'Скажите: «Где ключи?»', o: ['Where the keys are?', 'Where are the keys?', 'Where is the keys?'], a: 1, why: 'Помощник are встаёт перед the keys; ключей много → are.' },
      { t: 'check', q: '___ your friends at the party?', ru: 'Твои друзья были на вечеринке?', o: ['Was', 'Were', 'Did'], a: 1, why: 'Друзья — их много, прошлое → were, и оно стоит впереди.' },
      { t: 'idea', text: `Итог: вопрос по-английски — это когда маленькое слово (am/is/are, was/were, can, have) выходит вперёд. Слово-вопрос — ещё раньше.`,
        rows: [['Ты устал?', 'Are you tired?'], ['Где ты?', 'Where are you?'], ['Она умеет рисовать?', 'Can she draw?']] }
    ]},

    // ───────────── 2. do / does / did ─────────────
    { title: 'Когда переставлять нечего: do / does / did', steps: [
      { t: 'idea', text: `Хотите спросить: «Где ты живёшь?». В «Ты живёшь в Москве» нет никакого is или can — переставлять нечего. Тогда английский зовёт помощника <b>do</b>.`,
        lit: [['Where', 'где'], ['do', '(помощник)'], ['you', 'ты'], ['live?', 'живёшь?']],
        ex: [['Where do you live?', 'Где ты живёшь?'], ['What do you want?', 'Что ты хочешь?'], ['Do you like coffee?', 'Ты любишь кофе?']],
        tip: `do ничего не значит. Это просто «место» в вопросе, которое нельзя оставлять пустым.` },
      { t: 'idea', text: `Помощник бывает трёх видов. Про он / она / оно — <b>does</b>. Про прошлое — <b>did</b>, для всех. После помощника слово-действие стоит голое: без -s и без -ed.`,
        rows: [['I, you, we, they', 'do', 'What do you play?'], ['he, she, it', 'does', 'Where does she work?'], ['прошлое', 'did', 'When did you start?']],
        bad: 'Where does she works? · What did you bought?', good: 'Where does she <b>work</b>? · What did you <b>buy</b>?' },
      { t: 'check', q: 'Скажите: «Где Макс работает?»', o: ['Where Max works?', 'Where does Max work?', 'Where does Max works?'], a: 1, why: 'Слово-вопрос + does + Max + work без -s.' },
      { t: 'check', q: 'What ___ you do yesterday?', ru: 'Что ты делал вчера?', o: ['do', 'does', 'did'], a: 2, why: 'yesterday — прошлое → did.' },
      { t: 'idea', text: `Заметили? В «What did you do?» два do. Первый — помощник, второй — обычное «делать». Так спрашивают о работе: <b>What do you do?</b> — «Чем ты занимаешься?».`,
        lit: [['What', 'что'], ['do', '(помощник)'], ['you', 'ты'], ['do?', 'делаешь?']],
        ex: [['What do you do? — I’m a designer.', 'Кем работаешь? — Я дизайнер.'], ['What did you do at the weekend?', 'Что ты делал на выходных?']],
        bad: 'How did you that?', good: 'How did you <b>do</b> that?' },
      { t: 'idea', text: `«Почему ты не…?» — тот же порядок, только помощник с not: <b>Why don’t you</b>, <b>Why didn’t you</b>, <b>Why isn’t</b>, <b>Why can’t</b>.`,
        lit: [['Why', 'почему'], ['didn’t', 'не (прошлое)'], ['you', 'ты'], ['call', 'позвонил'], ['me?', 'мне?']],
        ex: [['Why didn’t you call me?', 'Почему ты мне не позвонил?'], ['Why don’t you play with us?', 'Почему ты не играешь с нами?'], ['Why can’t Anna come?', 'Почему Анна не может прийти?']],
        bad: 'Why you didn’t call me?', good: 'Why <b>didn’t you</b> call me?' },
      { t: 'check', q: 'Скажите: «Почему ты не ответил?»', o: ['Why you didn’t answer?', 'Why didn’t you answer?', 'Why didn’t you answered?'], a: 1, why: 'didn’t сразу после why, потом you, потом answer — голое.' },
      { t: 'idea', text: `Итог: нет is / can — зовём do. Слово-вопрос → do / does / did → кто → слово-действие без -s и -ed.`,
        rows: [['обычно', 'Where do you live?'], ['он / она', 'Where does she live?'], ['прошлое', 'Where did you live?']] }
    ]},

    // ───────────── 3. Who won? vs Who did you see? ─────────────
    { title: 'Кто выиграл? — вопрос без помощника', steps: [
      { t: 'idea', text: `Хотите спросить: «Кто выиграл?». Тут неожиданность: помощник did <b>не нужен</b>. Слово who само стоит на месте того, кто действует, и дальше всё как в обычном предложении.`,
        lit: [['Who', 'кто'], ['won?', 'выиграл?']],
        ex: [['Who won?', 'Кто выиграл?'], ['What happened?', 'Что случилось?'], ['Who lives here?', 'Кто здесь живёт?']],
        bad: 'Who did win? · What did happen?', good: 'Who <b>won</b>? · What <b>happened</b>?' },
      { t: 'idea', text: `Как понять, нужен did или нет? Сравните: «Кто позвонил Анне?» и «Кому Макс позвонил?». В первом who — тот, кто действует. Во втором действует Макс, а who — «кому».`,
        rows: [['Кто позвонил Анне?', 'Who called Anna?', 'без did'], ['Кому позвонил Макс?', 'Who did Max call?', 'с did']],
        tip: `По-русски «кто?» → без did. «Кого? кому? что (ты сделал)?» → с did.` },
      { t: 'check', q: 'Скажите: «Кто выиграл игру вчера?»', o: ['Who won the game yesterday?', 'Who did win the game yesterday?', 'Who did won the game yesterday?'], a: 0, why: '«Кто?» — who сам выиграл → без did: Who won.' },
      { t: 'check', q: 'Who ___ you meet at the party?', ru: 'Кого ты встретил на вечеринке?', o: ['—', 'did', 'does'], a: 1, why: 'Встречали вы, а спрашиваем «кого?» → нужен did.' },
      { t: 'idea', text: `То же с what. «Что случилось?» — what само действует, без did. «Что ты сказал?» — говорили вы, поэтому <b>What did you say?</b>`,
        rows: [['What happened?', 'What did you say?'], ['Who wants tea?', 'What do you want?'], ['Who called?', 'Who did you call?']],
        ex: [['Who wants coffee?', 'Кто хочет кофе?'], ['What do you want?', 'Что ты хочешь?']] },
      { t: 'check', q: 'What ___ Kate say?', ru: 'Что сказала Кейт?', o: ['—', 'did', 'was'], a: 1, why: 'Говорила Кейт, спрашиваем «что?» → did.' },
      { t: 'idea', text: `Итог: если по-русски «кто? что (случилось)?» — помощника нет. Если «кого? кому? что (ты сделал)?» — помощник есть.`,
        rows: [['кто действует', 'Who won? Who called you?'], ['кого / что', 'Who did you see? What did you buy?']] }
    ]},

    // ───────────── 4. what / which ─────────────
    { title: '«Какой» — what или which', steps: [
      { t: 'idea', text: `Хотите спросить: «Какого цвета твоя машина?». По-английски «какой» + слово — это <b>what</b> + слово: what colour, what size, what time.`,
        lit: [['What', 'какой'], ['colour', 'цвет'], ['is', '(есть)'], ['your car?', 'твоя машина?']],
        ex: [['What colour is your car?', 'Какого цвета твоя машина?'], ['What size are you?', 'Какой у тебя размер?'], ['What time is it?', 'Который час?']],
        bad: 'What colour has your car?', good: 'What colour <b>is</b> your car?' },
      { t: 'idea', text: `«Какую музыку ты любишь?» — тоже what: <b>What kind of</b> music (kind of — «вид, тип»). Это «какой вообще», из всего на свете.`,
        ex: [['What kind of music do you like?', 'Какую музыку ты любишь?'], ['What games do you play?', 'В какие игры ты играешь?']] },
      { t: 'check', q: '___ colour is your new phone?', ru: 'Какого цвета твой новый телефон?', o: ['What', 'Which', 'How'], a: 0, why: 'Цвет вообще, из всех цветов → what colour.' },
      { t: 'idea', text: `А если вариантов два-три и они перед глазами: «Тут две чашки. Которая твоя?» — это <b>which</b>. Which = «который из…».`,
        lit: [['Which', 'которая'], ['is', '(есть)'], ['yours?', 'твоя?']],
        ex: [['There are two cups. Which is yours?', 'Тут две чашки. Которая твоя?'], ['Which do you prefer — tea or coffee?', 'Что ты предпочитаешь — чай или кофе?'], ['Which way do we go?', 'Куда (какой дорогой) нам идти?']],
        tip: `Если можно сказать «который из этих?» — берите which. Если «какой вообще?» — what.` },
      { t: 'check', q: 'There are two keys. ___ is yours?', ru: 'Тут два ключа. Который твой?', o: ['What', 'Which', 'Who'], a: 1, why: 'Выбор из двух видимых → which.' },
      { t: 'idea', text: `Which без слова после — только о вещах. О людях — who: <b>Who</b> plays the guitar — Tom or Max?`,
        bad: 'Which plays the guitar — Tom or Max?', good: '<b>Who</b> plays the guitar — Tom or Max?', opt: true },
      { t: 'idea', text: `Итог: what — «какой вообще», which — «который из этих».`,
        rows: [['what colour / size / time', 'из всех на свете'], ['which (— this or that?)', 'из двух-трёх известных'], ['who', 'о людях']] }
    ]},

    // ───────────── 5. how + прилагательное ─────────────
    { title: 'How old? How far? — «насколько…?»', steps: [
      { t: 'idea', text: `Хотите спросить: «Сколько тебе лет?». По-русски «сколько лет», а по-английски «насколько старый»: <b>How old</b> are you? Слово how + слово-признак (старый, далёкий, частый).`,
        lit: [['How', 'насколько'], ['old', 'старый'], ['are', '(есть)'], ['you?', 'ты?']],
        ex: [['How old are you? — I’m 28.', 'Сколько тебе лет? — 28.'], ['How old is your brother?', 'Сколько лет твоему брату?']],
        bad: 'How many years do you have?', good: 'How <b>old are</b> you?' },
      { t: 'idea', text: `По этой схеме — целая семья вопросов. По-русски слова разные, по-английски одна схема: how + признак.`,
        rows: [['how far', 'как далеко', 'How far is the station?'], ['how often', 'как часто', 'How often do you play?'], ['how long', 'как долго', 'How long was the film?'], ['how big', 'насколько большой', 'How big is your flat?']] },
      { t: 'check', q: 'Скажите: «Как часто ты играешь?»', o: ['How much do you play?', 'How often do you play?', 'How many do you play?'], a: 1, why: '«Как часто» = how often.' },
      { t: 'check', q: '___ is it from here to the office? — Two kilometres.', ru: 'Как далеко отсюда до офиса? — Два километра.', o: ['How long', 'How far', 'How old'], a: 1, why: 'Ответ — расстояние → how far.' },
      { t: 'idea', text: `«Сколько?» — тоже how. <b>How much</b> — цена и то, что не считают штуками. <b>How many</b> — штуки.`,
        ex: [['How much is this keyboard?', 'Сколько стоит эта клавиатура?'], ['How many people are there?', 'Сколько там людей?']],
        bad: 'How many time do you play?', good: 'How <b>long</b> do you play? · How <b>many hours</b> do you play?' },
      { t: 'check', q: 'How ___ is this T-shirt? — Twenty dollars.', ru: 'Сколько стоит эта футболка? — Двадцать долларов.', o: ['many', 'much', 'long'], a: 1, why: 'Цена → how much.' },
      { t: 'idea', text: `Итог: how + слово-признак = «насколько…?». Одна схема на все русские «сколько лет / как далеко / как часто».`,
        rows: [['how old', 'сколько лет'], ['how far / how often / how long', 'далеко / часто / долго'], ['how much / how many', 'сколько (цена) / сколько штук']] }
    ]},

    // ───────────── 6. How long does it take? ─────────────
    { title: 'Сколько времени это занимает?', steps: [
      { t: 'idea', text: `Хотите сказать: «Дорога до работы занимает час». По-английски «занимает» — <b>it takes</b>, и впереди всегда стоит it («это»), даже если по-русски его нет.`,
        lit: [['It', 'это'], ['takes', 'занимает'], ['an hour', 'час'], ['to get', 'чтобы добраться'], ['to work.', 'до работы.']],
        ex: [['It takes an hour to get to work.', 'Дорога до работы занимает час.'], ['It takes ten minutes.', 'Это занимает десять минут.']] },
      { t: 'idea', text: `«У меня уходит…» — вставляем me / him / us сразу после takes. В прошлом takes → <b>took</b>.`,
        lit: [['It', 'это'], ['took', 'заняло'], ['me', 'у меня'], ['two hours', 'два часа'], ['to get there.', 'чтобы добраться туда.']],
        ex: [['It takes me twenty minutes to get to the office.', 'У меня дорога до офиса занимает двадцать минут.'], ['It took us two hours to get there.', 'У нас ушло два часа, чтобы добраться туда.']],
        bad: 'It takes to me an hour.', good: 'It takes <b>me</b> an hour.' },
      { t: 'check', q: 'It ___ me two hours to get home yesterday.', ru: 'Вчера у меня ушло два часа, чтобы добраться домой.', o: ['takes', 'took', 'take'], a: 1, why: 'yesterday — прошлое → took.' },
      { t: 'idea', text: `Теперь вопрос: «Сколько ехать на автобусе?». take — обычное слово-действие, значит зовём помощника: <b>How long does it take</b>…?`,
        lit: [['How long', 'как долго'], ['does', '(помощник)'], ['it', 'это'], ['take', 'занимать'], ['by bus?', 'на автобусе?']],
        ex: [['How long does it take by bus?', 'Сколько ехать на автобусе?'], ['How long does it take to get to the station?', 'Сколько идти до станции?'], ['How long did it take you to learn Figma?', 'Сколько времени ты учил Figma?']],
        bad: 'How long it takes?', good: 'How long <b>does it take</b>?' },
      { t: 'check', q: 'How long ___ it take to get to the airport?', ru: 'Сколько ехать до аэропорта?', o: ['is', 'does', 'do'], a: 1, why: 'take — обычное слово-действие, it → does.' },
      { t: 'check', q: 'Скажите: «Сколько времени это заняло у тебя?»', o: ['How long it took you?', 'How long did it take you?', 'How long did it took you?'], a: 1, why: 'Прошлое → did, а take после did — голое.' },
      { t: 'idea', text: `Итог: «занимает время» = it takes (took) + (me) + время. Вопрос — через does / did.`,
        rows: [['It takes me an hour.', 'У меня уходит час.'], ['How long does it take?', 'Сколько это занимает?'], ['How long did it take?', 'Сколько это заняло?']] }
    ]}
  ];
})();
