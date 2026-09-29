// Грамматика по шагам для юнита b1-18: три вопроса про the; «один такой» — the, номер (level 5, Gate 12) — без the; school / hospital / prison / church — по назначению без the, как здание — the; bed, work, home, завтрак и TV; вообще — без the, конкретная группа — the; the giraffe, the piano, the rich, the French; названия: титулы, Mount, the Ivanovs, northern Italy; улицы, здания, газеты, бренды; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-18'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Одно слово — с the и без', steps: [
      { t: 'idea', text: `Вы уже знаете маленькое слово-подсказку <b>the</b> — «тот самый»: the sun, the internet, go to work, go home, the Volga, the Alps. Теперь — пары, где одно и то же слово бывает и с the, и без.`,
        ex: [['My son goes to school.', 'Мой сын ходит в школу. (учится)'], ['I went to the school to talk to his teacher.', 'Я ходил в школу поговорить с его учителем.'], ['Boarding at Gate 12.', 'Посадка у выхода 12.']] },
      { t: 'check', q: 'Boarding at ___ 7.', ru: 'Посадка у выхода 7.', o: ['the Gate', 'Gate', 'a Gate'], a: 1,
        why: 'Номер работает как имя → без the: Gate 7.' },
      { t: 'idea', text: `Итог: вместо зубрёжки — три вопроса по порядку. Один такой? Номер или «иду ради дела»? Название?`,
        rows: [['один такой', 'the sun, the capital of Japan'], ['номер / ради дела', 'Gate 12, go to school'], ['название', 'Japan, the Volga']] }
    ]},

    // ───────────── 2. Один в мире — the; с номером — без the ─────────────
    { title: 'the equator, но level 5', steps: [
      { t: 'idea', text: `Хотите сказать «Ты пересекал экватор?». Экватор на свете один — значит <b>the</b>. Так же всё, что одно в стране, в здании, в рейтинге: столица, пятый этаж, конец месяца.`,
        ex: [['Have you ever crossed the equator?', 'Ты когда-нибудь пересекал экватор?'], ['Tokyo is the capital of Japan.', 'Токио — столица Японии.'], ['The deadline is at the end of the month.', 'Дедлайн — в конце месяца.']],
        tip: `Всегда с the: the world, the universe, the sky, the sea, the ground (земля под ногами). И <b>the same</b> — «тот же самый».` },
      { t: 'idea', text: `А если у предмета есть <b>номер после слова</b> — the не нужен. Номер работает как имя: он и так показывает, какой именно.`,
        rows: [['платформа, выход, комната', 'platform 4, Gate 12, room 305'], ['страница, вопрос, витамин', 'page 29, question 3, vitamin D'], ['игры и сериалы', 'level 5, season 2, episode 8']],
        bad: 'I’m stuck on the level 5.', good: 'I’m stuck on <b>level 5</b>.' },
      { t: 'check', q: 'The train leaves from ___ 2.', ru: 'Поезд отправляется со второй платформы.', o: ['the platform', 'platform', 'a platform'], a: 1,
        why: 'Номер после слова → без the: platform 2.' },
      { t: 'idea', text: `Но если номер стоит <b>перед</b> словом (fifth, second — «пятый», «второй»), the возвращается. Пятый уровень в игре — один такой.`,
        lit: [['the', '(тот самый)'], ['fifth', 'пятый'], ['level', 'уровень']],
        ex: [['I’m stuck on the fifth level.', 'Я застрял на пятом уровне.'], ['The second season is better.', 'Второй сезон лучше.']],
        tip: `Номер после слова — без the (level 5). Номер перед словом — с the (the fifth level).` },
      { t: 'check', q: 'Have you watched ___ second season?', ru: 'Ты смотрел второй сезон?', o: ['the', 'a', '—'], a: 0,
        why: 'second стоит перед словом → the second season.' },
      { t: 'idea', text: `Космос. <b>the earth</b> — мир, где мы живём; <b>Earth</b> без the — планета среди других. <b>space</b> без the — космос, а <b>the space</b> — конкретное место: The parking space was too small.`,
        ex: [['Mars is further from the sun than Earth.', 'Марс дальше от Солнца, чем Земля.'], ['I’d love to travel in space.', 'Я бы хотел полететь в космос.']], opt: true },
      { t: 'idea', text: `Итог: один такой — the; номер после слова — без the; номер перед словом — снова the.`,
        rows: [['один такой', 'the equator, the capital, the same'], ['номер после слова', 'level 5, Gate 12, page 29'], ['номер перед словом', 'the fifth level, the second season']] }
    ]},

    // ───────────── 3. school или the school ─────────────
    { title: 'school или the school: учусь или пришёл в здание', steps: [
      { t: 'idea', text: `Хотите сказать «Мой сын ходит в школу» — он там учится. Если человек идёт в место ради его главного дела (учиться, лечиться, отбывать срок, молиться), the не нужен.`,
        lit: [['My son', 'мой сын'], ['goes', 'ходит'], ['to school', 'в школу (учиться)']],
        ex: [['My son goes to school.', 'Мой сын ходит в школу.'], ['She’s at university.', 'Она учится в университете.'], ['They go to church on Sundays.', 'По воскресеньям они ходят в церковь.']] },
      { t: 'idea', text: `А если вы там гость, посетитель, работник — или говорите просто о здании — нужен <b>the</b>. Вы пришли не учиться, а в конкретное здание.`,
        lit: [['I', 'я'], ['went', 'ходил'], ['to the school', 'в (ту) школу'], ['to talk', 'поговорить'], ['to his teacher', 'с его учителем']],
        ex: [['I went to the school to talk to his teacher.', 'Я ходил в школу поговорить с его учителем.'], ['I went to the university for a job interview.', 'Я ходил в университет на собеседование.'], ['Workers are repairing the church.', 'Рабочие ремонтируют церковь.']] },
      { t: 'check', q: 'I went to ___ to pick up my son.', ru: 'Я заехал в школу забрать сына.', o: ['school', 'the school', 'schools'], a: 1,
        why: 'Вы не учиться пришли, а в здание → the school.' },
      { t: 'idea', text: `Так же <b>hospital</b> и <b>prison</b>. Пациент — in hospital, заключённый — in prison. Посетитель, врач, охранник (guard) — the hospital, the prison.`,
        rows: [['пациент / посетитель', 'He’s in hospital.', 'I went to the hospital to visit him.'], ['заключённый / гость', 'He was sent to prison.', 'Journalists visited the prison.']],
        bad: 'He’s a guard. He works in prison.', good: 'He’s a guard. He works at <b>the prison</b>.' ,
        tip: `В американском английском говорят in the hospital даже про пациента — так тоже правильно.` },
      { t: 'check', q: 'My brother is a doctor. He works at ___.', ru: 'Мой брат врач. Он работает в больнице.', o: ['hospital', 'the hospital', 'hospitals'], a: 1,
        why: 'Врач там не лечится, а работает → the hospital.' },
      { t: 'idea', text: `Итог: иду ради дела этого места — без the; иду как гость или про здание — the.`,
        rows: [['учусь / лечусь / сижу', 'go to school, in hospital, in prison'], ['гость, работник, здание', 'the school, the hospital, the prison']] }
    ]},

    // ───────────── 4. bed, work, home, завтрак, TV ─────────────
    { title: 'go to bed, have breakfast, watch TV', steps: [
      { t: 'idea', text: `Та же логика с фразами, которые вы знаете с A1. <b>go to bed</b> — ложиться спать (дело). <b>the bed</b> — кровать как мебель.`,
        ex: [['I’m going to bed.', 'Я спать.'], ['The cat is sleeping on the bed.', 'Кот спит на кровати.'], ['What time do you finish work?', 'Во сколько ты заканчиваешь работу?'], ['Let’s go home.', 'Пошли домой.']],
        bad: 'She went to the bed after the work.', good: 'She went <b>to bed</b> after <b>work</b>.' ,
        tip: `Так же watch TV (смотреть), но turn off the TV (аппарат). Всегда с the: listen to the radio, go to the cinema, on the internet.` },
      { t: 'check', q: 'I was so tired that I went to ___ at nine.', ru: 'Я так устал, что лёг спать в девять.', o: ['the bed', 'bed', 'a bed'], a: 1,
        why: '«Лечь спать» — дело, а не мебель → go to bed.' },
      { t: 'idea', text: `Еда: <b>breakfast, lunch, dinner</b> — как «время поесть» без подсказки. Но если перед ними есть «какой» (big, nice), ставим <b>a</b>.`,
        ex: [['What did you have for breakfast?', 'Что ты ел на завтрак?'], ['We had a very nice dinner.', 'У нас был очень хороший ужин.'], ['The lunch at the conference was great.', 'Обед на конференции был отличный. (тот самый)']],
        bad: 'We had very nice dinner.', good: 'We had <b>a</b> very nice dinner.' },
      { t: 'check', q: 'We had ___ big breakfast before the trip.', ru: 'Перед поездкой мы плотно позавтракали.', o: ['—', 'a', 'the'], a: 1,
        why: 'Есть «какой» (big) → a big breakfast.' },
      { t: 'idea', text: `Итог: дело — без подсказки; конкретный предмет — the; «какой» перед едой — a.`,
        rows: [['дело', 'go to bed, after work, go home, watch TV'], ['предмет', 'on the bed, turn off the TV'], ['«какой» перед едой', 'a big breakfast, a nice dinner']] }
    ]},

    // ───────────── 5. Вообще или конкретно ─────────────
    { title: 'children или the children: вообще или конкретно', steps: [
      { t: 'idea', text: `Хотите сказать «Дети учатся через игру» — все дети, вообще. Когда говорим о чём-то в целом, the <b>не</b> ставим. Русский это не различает, поэтому здесь больше всего ошибок.`,
        lit: [['Children', 'дети (вообще)'], ['learn', 'учатся'], ['by playing', 'играя']],
        ex: [['Children learn by playing.', 'Дети учатся через игру.'], ['I can’t work without music.', 'Не могу работать без музыки.'], ['Life is short.', 'Жизнь коротка.']],
        bad: 'The life is short. / I like the music.', good: '<b>Life</b> is short. / I like <b>music</b>.' },
      { t: 'idea', text: `А если группу можно очертить — наши дети, музыка в этом фильме, игры на этой полке — ставим <b>the</b>.`,
        rows: [['вообще', 'Children learn by playing.', 'Music helps me work.'], ['конкретно', 'We took the children to the park.', 'The music in this game is great.']] ,
        tip: `Ловушка: most («большинство») — без the: Most gamers hate ads. С the — только most of the people in my team (урок a2-13).` },
      { t: 'check', q: 'I’m interested in ___.', ru: 'Меня интересует история (вообще, как предмет).', o: ['the history', 'history', 'a history'], a: 1,
        why: 'История вообще, как явление → без the.' },
      { t: 'check', q: 'I didn’t like the film, but ___ was great.', ru: 'Фильм мне не понравился, но музыка (в нём) была отличная.', o: ['music', 'the music', 'a music'], a: 1,
        why: 'Музыка именно из этого фильма → the music.' },
      { t: 'idea', text: `Самое тонкое: уточнение само ещё не делает группу конкретной. «Люди, которые дают честный отзыв» — всё ещё любые такие люди, где угодно.`,
        ex: [['I like working with people who give honest feedback.', 'Мне нравится работать с людьми, которые дают честный отзыв. (любыми такими)'], ['I like the people I work with.', 'Мне нравятся люди, с которыми я работаю. (мои коллеги)'], ['The coffee in our office is awful.', 'Кофе у нас в офисе ужасный.']],
        tip: `Тест: могу показать или пересчитать эту группу? → the. Любые представители типа, где угодно? → без the, даже с длинным уточнением.` },
      { t: 'check', q: 'I don’t trust ___ who never make mistakes.', ru: 'Я не доверяю людям (любым), которые никогда не ошибаются.', o: ['the people', 'people', 'a people'], a: 1,
        why: 'Любые люди такого типа, их не пересчитать → без the.' },
      { t: 'idea', text: `Итог: вообще — без the; группу можно показать или пересчитать — the.`,
        rows: [['вообще', 'Life is short. Children love games.'], ['конкретно', 'the children in my class, the coffee in our office'], ['большинство', 'most people / most of the people in my team']] }
    ]},

    // ───────────── 6. the giraffe, the rich, the French ─────────────
    { title: 'the smartphone, the rich, the French — целый вид и группа', steps: [
      { t: 'idea', text: `Хотите сказать «Гепард (cheetah) — самое быстрое животное». Речь о всём виде сразу — как в энциклопедии. Тогда: <b>the</b> + одно слово без -s. Так же про изобретения, инструменты, валюты.`,
        ex: [['The cheetah is the fastest land animal.', 'Гепард — самое быстрое животное на суше.'], ['When was the smartphone invented?', 'Когда изобрели смартфон?'], ['The euro is the currency of many countries.', 'Евро — валюта многих стран.']] ,
        tip: `С инструментами так же: play the piano (умение), но I want to buy a piano (вещь). Исключение: man («человечество») — без the: the history of man.` },
      { t: 'idea', text: `<b>the</b> + слово-признак (rich — богатый, young — молодой) = группа людей: «богатые», «молодые». -s не добавляем, но это всегда «они» → are / were.`,
        lit: [['The rich', 'богатые (люди)'], ['should', 'должны'], ['pay', 'платить'], ['more', 'больше']],
        rows: [['the rich, the poor, the young', 'богатые, бедные, молодые'], ['the elderly, the homeless, the unemployed', 'пожилые, бездомные, безработные'], ['the injured', 'пострадавшие']],
        bad: 'the richs / The injured was taken to hospital.', good: '<b>the rich</b> / The injured <b>were</b> taken to hospital.' },
      { t: 'check', q: 'The city has built a new centre for ___.', ru: 'Город построил новый центр для бездомных.', o: ['homeless', 'the homeless', 'the homelesses'], a: 1,
        why: 'Группа людей → the + слово-признак, без -s.' },
      { t: 'idea', text: `Народы. На -ch, -sh, -ese, -ss весь народ — <b>the French, the British, the Japanese, the Swiss</b>. Остальные — просто с -s: Italians, Russians. Одного человека так не назвать.`,
        rows: [['-ch, -sh, -ese, -ss', 'the French, the Japanese', 'a French woman, a Japanese designer'], ['остальные', 'Italians, Russians', 'an Italian, a Russian']],
        bad: 'I met a Japanese in Tokyo.', good: 'I met a <b>Japanese designer</b> in Tokyo.',
        tip: `Безопасный вариант всегда есть: French people, Japanese people, Russian people.` },
      { t: 'check', q: '___ are famous for their cheese.', ru: 'Французы славятся своим сыром.', o: ['French', 'The French', 'The Frenches'], a: 1,
        why: 'Весь народ на -ch → the French, без -s.' },
      { t: 'idea', text: `Итог: весь вид — the + одно слово; группа людей — the + признак; народ на -ch / -ese — the French.`,
        rows: [['весь вид', 'the cheetah, the smartphone, play the piano'], ['группа людей', 'the rich, the young, the homeless'], ['народ', 'the French, the Japanese / Italians']] }
    ]},

    // ───────────── 7. Названия: люди и география ─────────────
    { title: 'Doctor Petrova, Mount Elbrus, the Ivanovs', steps: [
      { t: 'idea', text: `Вы уже знаете из a2-22: страны, города, одна гора — без the; вода, «много», of и места с билетом — с the. Добавим несколько новых случаев.`,
        rows: [['без the', 'Japan, Kazan, Everest, Lake Baikal'], ['с the', 'the Alps, the USA, the Volga, the Sahara'], ['с the', 'the north of Italy, the Hermitage']] ,
        tip: `На картах и в играх подписи обычно без the: «Pacific Ocean». Но в речи — We sailed across the Pacific.` },
      { t: 'idea', text: `Должность + имя — как имя, без the: Doctor Petrova, President Lincoln, Uncle Sasha. Просто должность — the. И <b>Mount</b> + название тоже без the, как Lake.`,
        ex: [['We called the doctor.', 'Мы вызвали врача.'], ['We called Doctor Petrova.', 'Мы позвонили доктору Петровой.'], ['I climbed Mount Elbrus.', 'Я поднялся на Эльбрус.']],
        bad: 'We met the Doctor Smith. / I climbed the Mount Elbrus.', good: 'We met <b>Doctor Smith</b>. / I climbed <b>Mount Elbrus</b>.' },
      { t: 'check', q: 'Last summer we climbed ___ Fuji.', ru: 'Прошлым летом мы поднялись на Фудзи.', o: ['the Mount', 'Mount', 'a Mount'], a: 1,
        why: 'Mount + название — как имя, без the.' },
      { t: 'idea', text: `Фамилия — без the, а вся семья — <b>the</b> + фамилия с -s: the Ivanovs, the Simpsons. Сторона света: northern / southern впереди — без the, конструкция с of — с the.`,
        ex: [['The Ivanovs live next door.', 'Ивановы живут по соседству.'], ['They live in northern Spain.', 'Они живут на севере Испании.'], ['They live in the north of Spain.', 'Они живут на севере Испании.']],
        bad: 'They live in the northern Spain.', good: 'They live in <b>northern Spain</b> / in <b>the north of</b> Spain.' },
      { t: 'check', q: 'We spent a week in ___ Italy.', ru: 'Мы провели неделю на юге Италии.', o: ['the southern', 'southern', 'south of'], a: 1,
        why: 'southern впереди — без the (иначе the south of Italy).' },
      { t: 'idea', text: `Итог: должность + имя и Mount — без the; вся семья — the …s; northern Italy, но the north of Italy.`,
        rows: [['должность + имя', 'Doctor Petrova, Mount Elbrus'], ['семья', 'the Ivanovs, the Simpsons'], ['стороны света', 'northern Italy / the north of Italy']] }
    ]},

    // ───────────── 8. Названия: город, газеты, компании ─────────────
    { title: 'Oxford Street, the White House, Google', steps: [
      { t: 'idea', text: `Помните: улицы, площади, парки — без the (Oxford Street, Times Square). Так же «Название + Airport / Station / University / Palace».`,
        ex: [['We live on Nevsky Prospect.', 'Мы живём на Невском проспекте.'], ['He studies at Harvard University.', 'Он учится в Гарварде.'], ['We visited Buckingham Palace.', 'Мы побывали в Букингемском дворце.']] },
      { t: 'idea', text: `А если первое слово — признак (royal — королевский, national, white), а не имя, нужен <b>the</b>: the White House, the National Gallery, the Royal Palace.`,
        rows: [['имя + здание', 'Buckingham Palace, Victoria Station'], ['признак + здание', 'the White House, the National Gallery']],
        tip: `Сравните: Harvard University, но the University of Cambridge. Всё решает of.` },
      { t: 'check', q: 'The President lives in ___ White House.', ru: 'Президент живёт в Белом доме.', o: ['the', 'a', '—'], a: 0,
        why: 'Первое слово — признак (white), а не имя → the.' },
      { t: 'idea', text: `Названия по владельцу, на <b>-’s</b>, — без the: McDonald’s, Joe’s Bar, St Isaac’s Cathedral. Компании и бренды — тоже без the: Nintendo, Sony, Figma.`,
        ex: [['I work at Ubisoft.', 'Я работаю в Ubisoft.'], ['We had lunch at McDonald’s.', 'Мы пообедали в Макдоналдсе.']],
        bad: 'I work at the Ubisoft.', good: 'I work at <b>Ubisoft</b>.' ,
        tip: `А газеты и организации — с the: the Guardian, the New York Times, the BBC, the UN.` },
      { t: 'check', q: 'He works for ___ Google.', ru: 'Он работает в Google.', o: ['the', 'a', '—'], a: 2,
        why: 'Компании и бренды — без the.' },
      { t: 'idea', text: `Итог: the любит здания с билетом, of и признак впереди, газеты и организации. Без the — улицы, «Имя + здание», бренды и всё на -’s.`,
        rows: [['с the', 'the White House, the University of Tokyo, the BBC'], ['без the', 'Oxford Street, Harvard University, Google, McDonald’s']] }
    ]},

    // ───────────── 9. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'idea', text: `Самые частые ошибки этого урока — лишний the там, где номер, «дело» или «вообще».`,
        rows: [['boarding at the Gate 15', 'boarding at Gate 15'], ['went to the bed after the work', 'went to bed after work'], ['The life is hard for the young designers.', 'Life is hard for young designers.']] },
      { t: 'check', q: 'Скажите: «Он охранник. Он работает в тюрьме»', o: ['He’s a guard. He works in prison.', 'He’s a guard. He works at the prison.', 'He’s a guard. He works at prison.'], a: 1,
        why: 'Охранник там работает, а не сидит → the prison.' },
      { t: 'check', q: 'We visited ___ Buckingham Palace and ___ Tower of London.', ru: 'Мы посетили Букингемский дворец и Тауэр.', o: ['the … the', '— … the', '— … —'], a: 1,
        why: 'Имя + Palace — без the; Tower of London — есть of → the.' },
      { t: 'idea', text: `Итог урока: один такой — the; номер и «дело» — без the; вообще — без, конкретно — the; весь вид и группа — the.`,
        rows: [['the', 'the equator, the hospital (посетитель), the children in my class, the rich'], ['без the', 'level 5, go to school, in prison, Life is short, Google'], ['названия', 'the: вода, много, of, здания с билетом; без: улицы, Имя + здание, -’s']] }
    ]}
  ];
})();
