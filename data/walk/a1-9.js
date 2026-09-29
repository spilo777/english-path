// Грамматика по шагам для юнита a1-9: Past Simple — одна форма для всех, -ed и как его писать, как читать -ed, неправильные глаголы группами, was или went, три формы кратко, рассказ о вчерашнем дне.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-9'); if (!u) return;
  u.walk = [
    // ───────────── 1. Одна форма для всех ─────────────
    { title: '«Вчера я работал» — одна форма для всех', steps: [
      { t: 'idea', text: `Хотите сказать «Вчера я работал». Берём знакомое слово-действие work и добавляем в конец хвостик <b>-ed</b>: work → <b>worked</b>. Это и есть «работал».`,
        lit: [['I', 'я'], ['worked', 'работал'], ['yesterday', 'вчера']],
        ex: [['I worked yesterday.', 'Вчера я работал.'], ['We played last night.', 'Вчера вечером мы играли.'], ['She watched a film.', 'Она посмотрела фильм.']] },
      { t: 'idea', text: `По-русски «работал / работала / работали» — три разных хвостика. По-английски хвостик <b>один на всех</b>: I worked, she worked, they worked.`,
        rows: [['Я работал.', 'I worked.'], ['Она работала.', 'She worked.'], ['Мы работали.', 'We worked.']],
        tip: `Прошлое проще настоящего: кто бы ни говорил — форма одна.` },
      { t: 'check', q: 'Скажите: «Вчера она играла»', o: ['She play yesterday.', 'She played yesterday.', 'She playeds yesterday.'], a: 1,
        why: 'Прошлое → play + ed. Никаких лишних хвостиков.' },
      { t: 'idea', text: `Помните -s у he / she в настоящем: she play<b>s</b>? В прошлом этого -s <b>нет</b>. Одно «вчера» — и -s пропадает.`,
        bad: 'She works yesterday.', good: 'She work<b>ed</b> yesterday.',
        ex: [['She plays tennis on Sundays.', 'Она играет в теннис по воскресеньям.'], ['She played tennis last Sunday.', 'Она играла в теннис в прошлое воскресенье.']] },
      { t: 'idea', text: `Итог: было и закончилось → слово-действие + <b>-ed</b>, одинаково для всех.`,
        rows: [['обычно', 'I work. / She works.'], ['вчера', 'I worked. / She worked.']] }
    ]},

    // ───────────── 2. Как писать -ed ─────────────
    { title: 'Как писать -ed: четыре маленьких правила', steps: [
      { t: 'idea', text: `Обычно просто дописываем -ed: work → worked, watch → watched, start → started. Но если слово уже кончается на <b>e</b> — дописываем только <b>d</b>.`,
        ex: [['I liked the game.', 'Мне понравилась игра.'], ['We lived in Kazan.', 'Мы жили в Казани.'], ['I decided to learn English.', 'Я решил учить английский.']],
        tip: `like + ed было бы «likeed» — две e подряд. Поэтому просто liked.` },
      { t: 'check', q: 'live → «жил»:', ru: 'live — жить', o: ['liveed', 'lived', 'livd'], a: 1, why: 'На конце уже e → добавляем только d.' },
      { t: 'idea', text: `Слово кончается на <b>y</b>? Смотрим на букву перед ней. Если это не a, e, i, o, u (как в stu<b>d</b>y, t<b>r</b>y) — y меняется на <b>ied</b>: studied, tried.`,
        ex: [['I studied English.', 'Я учил английский.'], ['I tried to call you.', 'Я пытался тебе позвонить.']] },
      { t: 'idea', text: `А если перед y стоит a, e, i, o или u (pl<b>a</b>y, st<b>a</b>y) — ничего не меняем, просто + ed: played, stayed.`,
        rows: [['study, try', 'y → ied', 'studied, tried'], ['play, stay', 'просто + ed', 'played, stayed']],
        bad: 'studyed, staied', good: 'stud<b>ied</b>, stay<b>ed</b>' },
      { t: 'check', q: 'try → «пытался»:', ru: 'try — пытаться', o: ['tryed', 'tried', 'tryied'], a: 1, why: 'Перед y буква r (не a, e, i, o, u) → y меняется на ied.' },
      { t: 'check', q: 'stay → «остался»:', ru: 'stay — оставаться', o: ['staied', 'stayed', 'stayd'], a: 1, why: 'Перед y буква a → просто + ed.' },
      { t: 'idea', text: `Короткое слово из трёх звуков вроде stop (остановить), plan (планировать): последняя буква <b>удваивается</b> — stopped, planned. Длинные слова (listen, open) не трогаем: listened, opened.`,
        bad: 'stoped, planed', good: 'sto<b>pp</b>ed, pla<b>nn</b>ed',
        tip: `Удваиваем только в коротких словах «буква-гласная-буква»: stop, plan. Work и help — не тот случай: worked, helped.` },
      { t: 'check', q: 'stop → «остановил»:', ru: 'stop — останавливать', o: ['stoped', 'stopped', 'stopt'], a: 1, why: 'Короткое слово stop → удваиваем p: stopped.' },
      { t: 'idea', text: `Итог: четыре правила написания -ed.`,
        rows: [['на конце e', '+ d', 'liked, lived'], ['y после не-гласной', 'y → ied', 'studied, tried'], ['короткое stop, plan', 'удвоить + ed', 'stopped, planned']] }
    ]},

    // ───────────── 3. Как читать -ed ─────────────
    { title: 'Как звучит -ed: «т», «д» или «ид»', steps: [
      { t: 'idea', text: `Пишем всегда -ed, а слышим по-разному. Главная ловушка: лишний слог «-ид» появляется <b>только</b> если слово кончается на t или d: want → «вонт-ид», start → «старт-ид».`,
        ex: [['I wanted a new phone.', 'Я хотел новый телефон.'], ['The game started at nine.', 'Игра началась в девять.'], ['I decided to stay.', 'Я решил остаться.']],
        tip: `После t и d без слога «-ид» просто не выговорить. Попробуйте сказать «стартд» — не получится.` },
      { t: 'idea', text: `Во всех остальных словах слога «ид» <b>нет</b> — -ed звучит как короткое «т» или «д». worked — «воркт», played — «плэйд».`,
        bad: 'worked — «вор-кид», played — «плэй-ид»', good: 'worked — «воркт», played — «плэйд»',
        rows: [['«т»', 'worked, watched, stopped'], ['«д»', 'played, lived, listened'], ['«ид»', 'wanted, started, needed']],
        tip: `Перепутать «т» и «д» не страшно — вас поймут. Главное — не добавлять лишний «ид».` },
      { t: 'check', q: 'В каком слове -ed звучит как отдельный слог «ид»?', ru: 'watched — смотрел, decided — решил, played — играл', o: ['watched', 'decided', 'played'], a: 1, why: 'decide кончается на d → появляется слог «ид».' },
      { t: 'check', q: 'Как звучит worked?', ru: 'worked — работал', o: ['«воркт»', '«вор-кид»', '«вор-кед»'], a: 0, why: 'work не кончается на t или d → без «ид», коротко «воркт».' },
      { t: 'idea', text: `Итог: слог «ид» — только после t и d.`,
        rows: [['после t / d', '«ид»', 'wanted, started'], ['всё остальное', '«т» / «д»', 'worked, played']] }
    ]},

    // ───────────── 4. Неправильные глаголы ─────────────
    { title: 'Неправильные: go → went', steps: [
      { t: 'idea', text: `Хотите сказать «Вчера я ходил в кино». Но «goed» не бывает: у самых частых слов-действий прошлое — <b>совсем другое слово</b>. go → <b>went</b>.`,
        lit: [['I', 'я'], ['went', 'ходил'], ['to the cinema', 'в кино'], ['yesterday', 'вчера']],
        ex: [['I went to the cinema yesterday.', 'Вчера я ходил в кино.'], ['We saw a good film.', 'Мы посмотрели хороший фильм.'], ['I bought a new game.', 'Я купил новую игру.']],
        bad: 'I goed home. / She buyed a laptop.', good: 'I <b>went</b> home. / She <b>bought</b> a laptop.' },
      { t: 'idea', text: `Такие слова называют неправильными. Их немного, и они всё время на слуху — в играх, сериалах, чатах. Первая группа — «совсем новое слово»:`,
        rows: [['go → went', 'идти → пошёл'], ['see → saw', 'видеть → увидел'], ['do → did', 'делать → сделал'], ['eat → ate', 'есть → ел']] },
      { t: 'check', q: 'We ___ at a café last night.', ru: 'Вчера вечером мы поели в кафе.', o: ['eated', 'ate', 'eat'], a: 1, why: 'eat — неправильное: eat → ate.' },
      { t: 'idea', text: `Вторая группа — меняется <b>одна гласная</b> в середине. Слово почти то же, звук другой.`,
        rows: [['come → came', 'пришёл'], ['give → gave', 'дал'], ['drink → drank', 'пил'], ['get → got', 'получил'], ['write → wrote', 'написал'], ['win → won', 'выиграл']],
        ex: [['He came home late.', 'Он пришёл домой поздно.'], ['Tom won the game!', 'Том выиграл!']] },
      { t: 'idea', text: `Третья группа — на конце появляется <b>t</b>. И четвёртая, самая заметная: хвост <b>-ought</b>.`,
        rows: [['sleep → slept', 'спал'], ['meet → met', 'встретил'], ['leave → left', 'ушёл'], ['lose → lost', 'потерял'], ['buy → bought', 'купил'], ['think → thought', 'думал']],
        ex: [['I met Anna in the park.', 'Я встретил Анну в парке.'], ['I lost my phone.', 'Я потерял телефон.']] },
      { t: 'check', q: 'I ___ Anna in the park.', ru: 'Я встретил Анну в парке.', o: ['meeted', 'met', 'meet'], a: 1, why: 'meet → met: группа «на конце t».' },
      { t: 'idea', text: `Пятая группа — на конце <b>d</b>: have → had, make → made, say → said, find → found, tell → told. И несколько особых: take → took, know → knew.`,
        ex: [['She made coffee for me.', 'Она сварила мне кофе.'], ['He told me about the game.', 'Он рассказал мне об игре.'], ['I took my laptop.', 'Я взял ноутбук.']] },
      { t: 'check', q: 'She ___ a new phone last week.', ru: 'На прошлой неделе она купила новый телефон.', o: ['buyed', 'bought', 'buys'], a: 1, why: 'buy — неправильное: bought. Last week → прошлое.' },
      { t: 'idea', text: `Два слова с подвохом: <b>read → read</b> пишется одинаково, но в прошлом звучит «ред». А в <b>get up → got up</b> меняется только get.`,
        ex: [['Yesterday I read a book.', 'Вчера я читал книгу. (звучит «ред»)'], ['I got up at eight.', 'Я встал в восемь.']], opt: true },
      { t: 'idea', text: `Итог: самые частые слова-действия в прошлом — свои. Учим группами:`,
        rows: [['новое слово', 'went, saw, did, ate'], ['другая гласная', 'came, got, drank, won'], ['на конце t / d / -ought', 'met, lost, had, made, bought']] }
    ]},

    // ───────────── 5. was или went ─────────────
    { title: 'was или went? И «у меня был» = had', steps: [
      { t: 'idea', text: `Was / were из прошлого урока — тоже прошлое, но только для «какой» и «где»: I was tired, I was at home. Если есть <b>действие</b> — берём само слово-действие в прошлом, а was <b>не ставим</b>.`,
        rows: [['Какой? Где?', 'I was at home.'], ['Что делал?', 'I stayed at home.'], ['Какая была игра?', 'The game was fun.'], ['Что делали?', 'We played the game.']] },
      { t: 'idea', text: `Самая частая ошибка русскоговорящих — «I was played». Это как сказать «я был играл». Одно из двух: либо was, либо played.`,
        lit: [['I', 'я'], ['watched', 'смотрел'], ['a film', 'фильм']],
        bad: 'I was watch a film. / I was played games.', good: 'I <b>watched</b> a film. / I <b>played</b> games.',
        tip: `Это самое частое место ошибок — не переживайте, дальше потренируемся.` },
      { t: 'check', q: 'Скажите: «Вчера я смотрел фильм»', o: ['I was watch a film yesterday.', 'I watched a film yesterday.', 'I was watched a film yesterday.'], a: 1,
        why: 'Есть действие (смотрел) → только watched, без was.' },
      { t: 'check', q: 'Скажите: «Вчера она ходила в парк»', o: ['She was to the park yesterday.', 'She went to the park yesterday.', 'She was go to the park yesterday.'], a: 1,
        why: 'Ходила — действие → went. Was go не бывает. (Можно и «She was in the park» — где была.)' },
      { t: 'idea', text: `Ещё ловушка: русское «<b>у меня был</b> хороший день» — это не was, а <b>had</b> (от have — иметь). Дословно: «я имел хороший день».`,
        lit: [['I', 'я'], ['had', 'имел'], ['a good day', 'хороший день']],
        ex: [['I had a good day.', 'У меня был хороший день.'], ['We had breakfast at nine.', 'Мы позавтракали в девять.'], ['She had a lot of work.', 'У неё было много работы.']],
        bad: 'I was a good day.', good: 'I <b>had</b> a good day.' },
      { t: 'check', q: 'Скажите: «У нас был хороший вечер»', o: ['We were a good evening.', 'We had a good evening.', 'To us was a good evening.'], a: 1,
        why: '«У нас был» = we had.' },
      { t: 'idea', text: `Итог: was — «какой / где», действие — своё слово, «у меня был» — had.`,
        rows: [['где, какой', 'I was at home.'], ['что делал', 'I went / played / watched.'], ['у меня был', 'I had a good day.']] }
    ]},

    // ───────────── 6. Три формы кратко ─────────────
    { title: 'Три формы в словаре: берём вторую', steps: [
      { t: 'idea', text: `В словарях и таблицах у слова-действия обычно <b>три</b> формы: go — went — gone. Первая — начальная, вторая — прошлое, третья пригодится позже, в других темах.`,
        rows: [['1 — начальная', '2 — прошлое', '3 — позже'], ['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['buy', 'bought', 'bought']] },
      { t: 'idea', text: `Для «вчера» нужна <b>только вторая</b>. У правильных слов и у многих неправильных вторая и третья одинаковые (worked — worked, made — made), так что путаницы нет.`,
        bad: 'I gone home. / I seen this film.', good: 'I <b>went</b> home. / I <b>saw</b> this film.',
        tip: `Gone и seen часто слышны в песнях, но сами по себе «вчера» не значат. Рассказываете, что было, — вторая колонка.` },
      { t: 'check', q: 'Скажите: «Вчера я видел Тома»', o: ['I seen Tom yesterday.', 'I saw Tom yesterday.', 'I see Tom yesterday.'], a: 1,
        why: 'Прошлое → вторая форма: see → saw. Seen — третья, для других тем.' },
      { t: 'check', q: 'take → «взял»:', ru: 'take — брать', o: ['taked', 'took', 'taken'], a: 1, why: 'take — неправильное, вторая форма took. Taken — третья.' },
      { t: 'idea', text: `Итог: в таблице трёх форм для «вчера» берём среднюю колонку.`,
        rows: [['go — went — gone', 'went'], ['see — saw — seen', 'saw'], ['work — worked — worked', 'worked']] }
    ]},

    // ───────────── 7. Рассказываем, что было ─────────────
    { title: 'Рассказываем вчерашний день', steps: [
      { t: 'idea', text: `Слова yesterday, last week, two days ago (из прошлого урока) — знак, что нужна форма прошлого. Ставим их в конец или в начало.`,
        ex: [['I worked yesterday.', 'Вчера я работал.'], ['We watched it last week.', 'Мы посмотрели это на прошлой неделе.'], ['I started two years ago.', 'Я начал два года назад.']],
        bad: 'Yesterday I go to the park.', good: 'Yesterday I <b>went</b> to the park.' },
      { t: 'check', q: 'Last week I ___ a new game.', ru: 'На прошлой неделе я купил новую игру.', o: ['buy', 'bought', 'was buy'], a: 1, why: 'Last week → прошлое → bought.' },
      { t: 'idea', text: `Рассказ о дне — это просто слова-действия в прошлом подряд. Между ними — <b>then</b> (потом) и <b>and</b> (и).`,
        lit: [['I', 'я'], ['got up', 'встал'], ['and', 'и'], ['had', 'имел (съел)'], ['breakfast', 'завтрак']],
        ex: [['I got up at eight and had breakfast.', 'Я встал в восемь и позавтракал.'], ['Then I went to the office.', 'Потом я пошёл в офис.'], ['In the evening I met Anna.', 'Вечером я встретил Анну.']] },
      { t: 'check', q: 'I had breakfast, ___ I went to work.', ru: 'Я позавтракал, потом пошёл на работу.', o: ['then', 'ago', 'last'], a: 0, why: '«Потом, затем» — then.' },
      { t: 'idea', text: `Итог: маркер прошлого + слово-действие в прошлом, фразы соединяем через then.`,
        rows: [['yesterday / last week / ago', 'I went, I played, I had'], ['потом', 'Then I …']],
        tip: `Вопросы («Ты ходил?») и «не» («Я не ходил») в прошлом — в следующем уроке. Пока тренируйте рассказ: три-четыре фразы о вчерашнем дне.` }
    ]}
  ];
})();
