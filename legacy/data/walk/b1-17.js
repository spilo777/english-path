// Грамматика по шагам для юнита b1-17: алгоритм «считается? понятно какой?»; одно слово — два смысла (a noise / noise, experience, time, coffee); неисчисляемые, которые хочется посчитать (feedback, progress, luggage…), и их исчисляемые близнецы (travel → a trip, a piece of advice); a/an — «что это за вид» (профессии, внешность, What a…!); some = «несколько» и «некоторые»; a или the глубже (понятно из обстановки, the bank / the dentist, вид или конкретный); a = «в / за каждый» (twice a week, $5 a month); типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-17'); if (!u) return;
  u.walk = [
    // ───────────── 1. Алгоритм ─────────────
    { title: 'Перед каждым словом-предметом — маленькое решение', steps: [
      { t: 'idea', text: `Вы уже знаете (урок A1-13): <b>a</b> — «какой-то один», <b>the</b> — «тот самый», о чём-то <b>вообще</b> — ничего. Теперь цель — выбирать это за секунду, по привычке.`,
        lit: [['I watched', 'я посмотрел'], ['a film.', '(какой-то) фильм.'], ['The film', '(тот самый) фильм'], ['was boring.', 'был скучный.']],
        ex: [['I watched a film. The film was boring.', 'Я посмотрел фильм. Фильм был скучный.'], ['I love music.', 'Я люблю музыку (вообще).'], ['I need some advice.', 'Мне нужен совет.']] },
      { t: 'idea', text: `Алгоритм — два вопроса. 1) Слово <b>считается</b> (одна игра, две игры) или нет (музыка, совет)? 2) Собеседник <b>понимает, какой именно</b>? Если да — the. Если нет — смотрим на таблицу.`,
        rows: [['одна штука, какая-то', 'a game'], ['много или не считается, «какое-то количество»', 'some games, some music'], ['понятно какой / вообще', 'the game / games, music']],
        tip: `Шаг 1 решает, можно ли a. Шаг 2 решает, нужен ли the.` },
      { t: 'idea', text: `Самое важное место: одна штука того, что считается, <b>никогда не стоит голой</b>. I play game — это как по-русски «я играю в игр». Хочется «вообще» — берите много: games.`,
        bad: 'I love strategy game.', good: 'I love strategy <b>games</b>. I’m playing <b>a</b> new game.' },
      { t: 'check', q: 'Скажите: «Я люблю головоломки» (вообще, все)', o: ['I love puzzle.', 'I love puzzles.', 'I love the puzzles.'], a: 1,
        why: 'Вообще → много и без the. Голое puzzle без a нельзя.' },
      { t: 'check', q: 'I downloaded ___ app yesterday. ___ app is really useful.', ru: 'Вчера я скачал приложение. Приложение правда полезное.', o: ['an … The', 'the … An', '— … —'], a: 0,
        why: 'Первый раз — какое-то одно → an (app с гласного звука). Второй раз — то самое → The.' },
      { t: 'idea', text: `Итог: два вопроса — «считается?» и «понятно, какой именно?». Одна штука без подсказки не бывает.`,
        rows: [['понятно какой', 'the'], ['одна штука, какая-то', 'a / an'], ['много или не считается', 'some или ничего']] }
    ]},

    // ───────────── 2. Одно слово — два смысла ─────────────
    { title: 'Одно слово — два смысла: a noise или noise', steps: [
      { t: 'idea', text: `Хотите сказать «Ты слышал странный звук?» и «Тут слишком много шума». По-английски это одно слово <b>noise</b>. Один звук — <b>a noise</b>. Шум вообще, масса — просто <b>noise</b>, без a.`,
        ex: [['Did you hear a strange noise?', 'Ты слышал странный звук?'], ['There’s too much noise in the office.', 'В офисе слишком шумно.']],
        tip: `Проверка: можно ли сказать «два таких»? Два звука — да (two noises). «Два шума вообще» — нет.` },
      { t: 'idea', text: `Так же у многих слов: «масса, вещество» — без a, «одна отдельная штука» — с a.`,
        rows: [['paper — бумага', 'a paper — газета, статья'], ['hair — волосы (все)', 'a hair — один волос'], ['room / space — место', 'a room — комната']],
        ex: [['I need some paper.', 'Мне нужна бумага.'], ['There’s a hair in my soup!', 'У меня в супе волос!'], ['Is there room for my bag?', 'Тут есть место для моей сумки?']] },
      { t: 'check', q: 'Your ___ too long. Go to the hairdresser!', ru: 'У тебя слишком длинные волосы. Сходи в парикмахерскую!', o: ['hairs are', 'hair is', 'hair are'], a: 1,
        why: 'Все волосы на голове — масса → hair без -s, и глагол как для одного: is.' },
      { t: 'idea', text: `Особенно коварны <b>experience</b> и <b>time</b>. Опыт работы — без a и без -s. Один случай, впечатление — an experience. Время — time; «провести время» — a time.`,
        bad: 'I have a lot of experiences in UI design.', good: 'I have a lot of <b>experience</b> in UI design.',
        ex: [['The concert was an amazing experience.', 'Концерт был потрясающим впечатлением.'], ['I don’t have time.', 'У меня нет времени.'], ['We had a great time!', 'Мы отлично провели время!']] },
      { t: 'check', q: 'Скажите на собеседовании: «У меня три года опыта в дизайне»', o: ['I have three years of experiences in design.', 'I have three years of experience in design.', 'I have three years of an experience in design.'], a: 1,
        why: 'Опыт работы не считается: «два опыта работы» не скажешь → experience без a и -s.' },
      { t: 'idea', opt: true, text: `Ещё пары: <b>glass</b> — стекло / <b>a glass</b> — стакан; <b>light</b> — свет / <b>a light</b> — лампа; <b>business</b> — дела / <b>a business</b> — компания. Напитки не считаются, но в кафе «один кофе» — одна чашка: a coffee.`,
        ex: [['Two coffees and a tea, please.', 'Два кофе и один чай, пожалуйста.'], ['Can I have a glass of water?', 'Можно стакан воды?'], ['She runs a small business.', 'У неё небольшая компания.']] },
      { t: 'idea', text: `Итог: у одного слова бывает два смысла. «Масса, вообще» — без a и -s; «одна отдельная штука, один случай» — с a.`,
        rows: [['noise, hair, experience', 'шум, волосы, опыт работы'], ['a noise, a hair, an experience', 'звук, волос, впечатление'], ['time / a great time', 'время / провести время']] }
    ]},

    // ───────────── 3. Неисчисляемые, которые хочется посчитать ─────────────
    { title: 'Слова, которые так и хочется посчитать', steps: [
      { t: 'idea', text: `Помните advice, information, news, furniture (мебель)? Их список растёт: <b>feedback</b>, <b>progress</b>, <b>luggage</b>, <b>equipment</b>, <b>accommodation</b>. С ними нельзя a и нельзя -s, а глагол — как для одного: is / was / has.`,
        bad: 'Thanks for the feedbacks! You made a great progress.', good: 'Thanks for the <b>feedback</b>! You made great <b>progress</b>.',
        ex: [['How much luggage do you have?', 'Сколько у вас багажа?'], ['All the equipment is new.', 'Всё оборудование новое.'], ['Accommodation is expensive here.', 'Жильё здесь дорогое.']] },
      { t: 'check', q: 'The news ___ shocking.', ru: 'Новости были шокирующими.', o: ['were', 'was', 'are'], a: 1,
        why: 'news не считается, хоть и кончается на -s → глагол как для одного: was.' },
      { t: 'idea', text: `Ещё такие слова: traffic (пробки), damage (ущерб), behaviour (поведение), permission (разрешение), luck, scenery (пейзаж), research, evidence, knowledge. Как узнать? Это «куча», которую нельзя положить на стол по одной штуке.`,
        ex: [['There was heavy traffic.', 'Были жуткие пробки.'], ['We need more research.', 'Нам нужно больше исследований.'], ['Good luck!', 'Удачи!']] },
      { t: 'check', q: 'Скажите: «Клиент дал нам полезную обратную связь»', o: ['The client gave us a useful feedback.', 'The client gave us useful feedbacks.', 'The client gave us some useful feedback.'], a: 2,
        why: 'feedback не считается: ни a, ни -s. «Какое-то количество» → some.' },
      { t: 'idea', text: `А если нужна одна штука? У многих таких слов есть <b>близнец, который считается</b>. travel — путешествия вообще, <b>a trip</b> — одна поездка; work — работа вообще, <b>a job</b> — место работы; advice — <b>a tip</b>, совет.`,
        bad: 'We had a very good travel. I’m looking for a new work.', good: 'We had a very good <b>trip</b>. I’m looking for a new <b>job</b>.',
        ex: [['What a view!', 'Какой вид! (не scenery)'], ['We only have two bags.', 'У нас всего две сумки (не luggages).'], ['It’s a lovely day!', 'Чудесная погода! (не a lovely weather)']] },
      { t: 'check', q: 'Скажите другу: «Удачи на новой работе!»', o: ['Good luck with a new work!', 'Good luck with your new job!', 'Good luck with your new works!'], a: 1,
        why: 'Место работы считается → job. И это его работа, понятно какая → your.' },
      { t: 'idea', opt: true, text: `Универсальный способ посчитать «кучу» — <b>a piece of</b>: a piece of advice, a piece of equipment. Для еды свои слова: a loaf of bread (буханка), a bowl of rice (миска).`,
        ex: [['Let me give you a piece of advice.', 'Дам тебе один совет.'], ['Can you buy a loaf of bread?', 'Купишь буханку хлеба?']] },
      { t: 'idea', text: `Итог: у слов-«куч» нет a и -s, глагол — is / was. Нужна одна штука — берите близнеца.`,
        rows: [['feedback, progress, luggage, news', 'без a, без -s, is / was'], ['travel → a trip', 'work → a job'], ['advice → a tip', 'a piece of advice']] }
    ]},

    // ───────────── 4. a/an — «что это за вид» ─────────────
    { title: 'a/an — «что это за вид»: профессии, внешность, What a…!', steps: [
      { t: 'idea', text: `Вы уже говорите She is <b>a</b> designer. Здесь a значит не «один», а «<b>из какой категории</b>»: кто по профессии, что за вещь, какой человек. Много таких — просто -s, без some.`,
        rows: [['She’s a UX designer.', 'They’re both UX designers.'], ['Chess is a strategy game.', 'Chess and Go are strategy games.'], ['I’m an optimist.', 'We’re optimists.']] },
      { t: 'check', q: 'Скажите: «Когда я был ребёнком, я играл в тетрис»', o: ['When I was child, I played Tetris.', 'When I was a child, I played Tetris.', 'When I was the child, I played Tetris.'], a: 1,
        why: 'Кем я был — «из какой категории» → a child. Голым child стоять не может.' },
      { t: 'idea', text: `Внешность описываем через <b>a</b> (одна штука) или <b>без ничего</b> (много), но не через the. По-русски «у неё голубые глаза» — по-английски She has blue eyes.`,
        bad: 'She has the blue eyes.', good: 'She has blue eyes.',
        ex: [['My cat has a very long tail.', 'У моего кота очень длинный хвост.'], ['He has a scar (шрам) and red eyes.', 'У него шрам и красные глаза.']] },
      { t: 'idea', text: `Восклицание «Какой…!» — <b>What a…!</b>, но a — только с одной штукой. С «много» и с тем, что не считается, — без a.`,
        rows: [['What a beautiful level!', 'What a surprise!'], ['What nice weather!', 'What awful graphics!']] },
      { t: 'check', q: 'What ___ weather! Let’s go for a walk.', ru: 'Какая отличная погода! Пойдём погуляем.', o: ['a great', 'great', 'the great'], a: 1,
        why: 'weather не считается → What + сразу слово, без a.' },
      { t: 'idea', opt: true, text: `Мелкие недомогания тоже с a: <b>a headache</b> (головная боль), <b>a cold</b> (простуда), <b>a sore throat</b> (болит горло).`,
        ex: [['I have a headache after that meeting.', 'У меня голова болит после той встречи.'], ['I think I’m getting a cold.', 'Кажется, я простываю.']] },
      { t: 'idea', text: `Итог: a / an отвечает «кто он, что это за вещь». Много — просто -s; внешность — без the; What a — только с одной штукой.`,
        rows: [['профессия, вид', 'She’s a designer. / They’re designers.'], ['внешность', 'She has blue eyes.'], ['восклицание', 'What a view! / What nice weather!']] }
    ]},

    // ───────────── 5. some ─────────────
    { title: 'some: «несколько» и «некоторые»', steps: [
      { t: 'idea', text: `С «много» <b>some</b> бывает в двух ролях. Роль первая — «<b>несколько, какое-то количество</b>». Звучит тихо, без ударения, и часто его можно выбросить.`,
        ex: [['I’ve watched some great series lately.', 'Я недавно посмотрел несколько классных сериалов.'], ['I need (some) new headphones.', 'Мне нужны новые наушники.']] },
      { t: 'idea', text: `Роль вторая — «<b>некоторые, но не все</b>». Здесь some звучит с ударением и выбросить его нельзя: он делит на «одни» и «другие».`,
        lit: [['Some', 'некоторые'], ['games', 'игры'], ['are free,', 'бесплатные,'], ['but most', 'но большинство'], ['aren’t.', 'нет.']],
        ex: [['Some players never read tutorials (обучение).', 'Некоторые игроки никогда не читают обучение.'], ['It will rain in some parts of the city.', 'В некоторых частях города будет дождь.']],
        tip: `Можно добавить «но не все»? Тогда нужен ударный some.` },
      { t: 'check', q: '___ apps are free, but most of them aren’t.', ru: 'Некоторые приложения бесплатные, но большинство — нет.', o: ['Some', '—', 'The'], a: 0,
        why: '«Некоторые, но не все» → some. Без него фраза значит «все приложения бесплатные» и спорит сама с собой.' },
      { t: 'idea', text: `А о привычках, профессии и вкусах — «вообще» — some <b>не нужен</b>.`,
        bad: 'I love some cats. She draws some book covers.', good: 'I love cats. She draws book covers.' },
      { t: 'check', q: 'My sister is an illustrator (иллюстратор). She draws ___ book covers.', ru: 'Моя сестра иллюстратор. Она рисует обложки для книг (это её профессия).', o: ['some', 'the', '—'], a: 2,
        why: 'Это профессия, «вообще» → без some и без the.' },
      { t: 'idea', text: `Итог: some с «много» — это «несколько» или «некоторые». О вкусах и профессии — ничего.`,
        rows: [['несколько (можно выбросить)', 'I need (some) new headphones.'], ['некоторые, но не все', 'Some games are free.'], ['вообще', 'I love cats.']] }
    ]},

    // ───────────── 6. a или the — глубже ─────────────
    { title: 'a или the глубже: «и так понятно»', steps: [
      { t: 'idea', text: `Правило «в первый раз a, потом the» вы знаете. Но главный вопрос другой: может ли собеседник <b>показать пальцем</b>, о каком предмете речь? Если да — the, даже если слово звучит впервые.`,
        ex: [['Sit on the chair nearest the window.', 'Сядь на стул, ближайший к окну. (такой один)'], ['I cleaned the car.', 'Я помыл машину. (нашу)'], ['Did you feed the cat?', 'Ты покормил кошку? (нашу)']] },
      { t: 'check', q: 'Did you close ___ door when you left?', ru: 'Ты закрыл дверь, когда уходил? (дверь в вашу квартиру)', o: ['a', 'the', '—'], a: 1,
        why: 'Оба понимают, какая дверь — наша → the.' },
      { t: 'idea', text: `Привычные «сервисы» — <b>the</b>, даже если вы не думаете о конкретном: go to <b>the</b> bank, <b>the</b> doctor, <b>the</b> dentist. А если речь «какой-нибудь, любой» или о профессии — a.`,
        rows: [['I have to go to the bank.', 'Is there a bank near here?'], ['I hate going to the dentist.', 'My cousin is a dentist.']] },
      { t: 'check', q: 'Excuse me, is there ___ bank near here?', ru: 'Простите, здесь рядом есть банк? (турист, любой банк)', o: ['a', 'the', '—'], a: 0,
        why: 'Турист не знает банков, подойдёт любой → a.' },
      { t: 'idea', text: `a — «<b>какого типа</b>», the — «<b>вот тот самый</b>». Ловушка: уточнение не всегда даёт the. Если таких может быть несколько — остаётся a.`,
        ex: [['We stayed at a cheap hostel.', 'Мы жили в дешёвом хостеле. (какого типа)'], ['The hostel where we stayed was cheap.', 'Хостел, где мы жили, был дешёвым. (тот самый)'], ['He’s a friend of my brother.', 'Он друг моего брата. (один из)']] },
      { t: 'check', q: 'Hades? It’s ___ game that I play most.', ru: 'Hades? Это игра, в которую я играю больше всего.', o: ['a', 'the', '—'], a: 1,
        why: '«Больше всего» — такая игра одна → the.' },
      { t: 'idea', text: `Итог: the — собеседник понимает, какой именно. a — какой-нибудь или «какого типа».`,
        rows: [['понятно из обстановки', 'the door, the cat, the bank'], ['какой-нибудь / профессия', 'a bank, a dentist'], ['одна из нескольких', 'a friend of my brother']] }
    ]},

    // ───────────── 7. a = «в / за каждый» ─────────────
    { title: 'twice a week, $5 a month', steps: [
      { t: 'idea', text: `Хотите сказать «Я стримлю три раза в неделю». Русское «в неделю», «в месяц», «за килограмм» — по-английски просто <b>a</b>. Не in и не for.`,
        lit: [['I', 'я'], ['stream', 'стримлю'], ['three times', 'три раза'], ['a', '(в каждую)'], ['week.', 'неделю.']],
        ex: [['The subscription is ten dollars a month.', 'Подписка стоит десять долларов в месяц.'], ['Apples are two euros a kilo.', 'Яблоки по два евро за килограмм.']] },
      { t: 'idea', text: `Один и два раза — обычно не one time / two times, а <b>once</b> и <b>twice</b>. И помните: перед hour (h не читается) — <b>an</b>.`,
        bad: 'I go to the gym two times in week.', good: 'I go to the gym <b>twice a</b> week.',
        ex: [['I call my parents once a week.', 'Я звоню родителям раз в неделю.'], ['The speed limit is sixty kilometres an hour.', 'Ограничение — шестьдесят километров в час.']] },
      { t: 'check', q: 'Скажите: «Мы играем в футбол два раза в неделю»', o: ['We play football two times in week.', 'We play football twice a week.', 'We play football twice week.'], a: 1,
        why: '«Два раза» → twice, «в неделю» → a week.' },
      { t: 'idea', text: `Итог: «сколько раз / сколько стоит» + <b>a / an</b> + период.`,
        rows: [['once / twice / three times', 'a day, a week, a month'], ['ten dollars', 'a month'], ['sixty kilometres', 'an hour']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'idea', text: `Прогоните каждую фразу через алгоритм: считается ли слово? понятно ли, какой именно? Это самое частое место ошибок — не переживайте, после десятка таких фраз выбор станет привычкой.`,
        rows: [['He has many experience of travels.', 'He has a lot of travel experience.'], ['Is there the bank near here?', 'Is there a bank near here?']] },
      { t: 'check', q: 'Thanks for ___!', ru: 'Спасибо за советы и за обратную связь! (сразу после вашего отзыва о моём макете)', o: ['the advices and the feedbacks', 'the advice and the feedback', 'an advice and a feedback'], a: 1,
        why: 'advice и feedback не считаются — ни a, ни -s. Понятно какие, ваши → the.' },
      { t: 'check', q: 'My friend is ___, she has ___.', ru: 'Моя подруга дизайнер, у неё зелёные глаза.', o: ['designer … the green eyes', 'a designer … green eyes', 'a designer … the green eyes'], a: 1,
        why: 'Профессия → a designer. Внешность во множественном → без the.' },
      { t: 'check', q: 'I like ___ horror games, but ___ music in this one is bad.', ru: 'Я люблю хорроры (вообще), но музыка в этом плохая.', o: ['the … the', '— … the', '— … —'], a: 1,
        why: 'Игры вообще → без the. Музыка в этой конкретной игре → the.' },
      { t: 'idea', text: `Итог урока: одна штука того, что считается, никогда не стоит голой · вид / один из → a · понятно какой → the · вообще → ничего · некоторые → some · feedback, progress, luggage — без a и -s · twice a week.`,
        rows: [['a', 'какой-то один, профессия, What a…!, twice a week'], ['the', 'понятно какой: the door, the bank'], ['ничего / some', 'вообще: games, music; некоторые: some games']] }
    ]}
  ];
})();
