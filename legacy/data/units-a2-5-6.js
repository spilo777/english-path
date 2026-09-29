// Юниты A2 5–6: будущее — планы (Present Continuous, going to, расписания); will и shall
COURSE.units.push(
  // ───────────────────────────── UNIT A2-5 ─────────────────────────────
  {
    id: 'a2-5', level: 'A2', num: 5, track: 'main',
    books: { red: [25, 26] },
    title: 'What are you doing tomorrow? I\'m going to…',
    summary: 'Научимся говорить о планах: «Завтра я встречаюсь с Максом», «Я собираюсь купить новую видеокарту», «Поезд уходит в 7:30», «Сейчас пойдёт дождь».',
    grammar: [
      {
        title: '1. Главная идея: будущее «с планом» — без will',
        html: `
<div class="g-idea">По-русски про планы мы часто говорим в <b>настоящем</b> времени: «Завтра я <b>иду</b> в кино». В английском так тоже можно — но форма зависит от того, <b>что это за будущее</b>: договорённость, решение или расписание. Слово <b>will</b> здесь обычно <b>не нужно</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Завтра я <b>встречаюсь</b> с Максом.</p><p>Я <b>собираюсь</b> купить новый ноутбук.</p><p>Поезд <b>уходит</b> в 7:30.</p><p>Смотри, сейчас <b>пойдёт</b> дождь.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I<b>'m meeting</b> Max tomorrow.</span></p><p><span class="say">I<b>'m going to buy</b> a new laptop.</span></p><p><span class="say">The train <b>leaves</b> at 7.30.</span></p><p><span class="say">Look, it<b>'s going to rain</b>.</span></p></div>
</div>
<table>
<tr><th>Что за будущее</th><th>Форма</th><th>Пример</th></tr>
<tr><td>договорились, есть время и место</td><td><b class="g-v">am/is/are + -ing</b></td><td><span class="say">We're playing at eight.</span></td></tr>
<tr><td>решил, собираюсь</td><td><b class="g-v">am/is/are going to + глагол</b></td><td><span class="say">I'm going to learn Blender.</span></td></tr>
<tr><td>расписание, программа</td><td><b class="g-v">Present Simple</b></td><td><span class="say">The stream starts at six.</span></td></tr>
<tr><td>видно сейчас, что будет</td><td><b class="g-v">going to</b></td><td><span class="say">It's going to crash!</span></td></tr>
</table>
<div class="g-tip">Все эти формы вы уже знаете (Present Continuous — урок a1-5, Present Simple — a1-3). Новое только одно: их можно отправить в будущее, если добавить слово-время — <b>tomorrow, tonight, next week</b>.</div>
<div class="mini" data-q="Завтра я играю с друзьями (мы договорились)." data-o="I play with friends tomorrow.|I'm playing with friends tomorrow.|I playing with friends tomorrow." data-a="1" data-why="Договорённость на будущее → am + -ing + tomorrow."></div>`
      },
      {
        title: '2. I\'m meeting Max tomorrow — договорённости',
        html: `
<div class="g-idea">Если вы <b>уже договорились</b> (с друзьями, с врачом, с клиентом) — берите знакомое <b>am/is/are + -ing</b> и добавляйте, <b>когда</b>. В голове у англичанина: «это уже стоит в календаре».</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are + глагол-ing</span><span class="g-plus">+</span><span class="g-part">когда (tomorrow, on Friday…)</span></div>
<ul class="g-list">
<li><span class="say">I'm meeting a client on Monday.</span> — В понедельник у меня встреча с клиентом.</li>
<li><span class="say">Kate is going to the dentist on Friday.</span> — В пятницу Кейт идёт к стоматологу. <span class="muted">(она записана)</span></li>
<li><span class="say">We're having a party next Saturday.</span> — В следующую субботу у нас вечеринка.</li>
<li><span class="say">My parents are coming to visit this weekend.</span> — На этих выходных приезжают родители.</li>
</ul>
<table>
<tr><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td><span class="say">I'm not working next week.</span></td><td><span class="say">Are you working next week?</span></td></tr>
<tr><td><span class="say">Tom isn't coming tonight.</span></td><td><span class="say">Is Tom coming tonight?</span></td></tr>
<tr><td><span class="say">We aren't going out.</span></td><td><span class="say">What are you doing tomorrow evening?</span></td></tr>
</table>
<div class="g-bad">I stay at home tonight. Do you go out tonight?</div>
<div class="g-good">I<b>'m staying</b> at home tonight. <b>Are</b> you <b>going</b> out tonight?</div>
<div class="g-bad">Max doesn't come to the party next week.</div>
<div class="g-good">Max <b>isn't coming</b> to the party next week.</div>
<div class="g-tip">Самый частый вопрос про планы: <span class="say">What are you doing tonight?</span> — «Что делаешь вечером?» Без слова-времени он значит «что ты делаешь <i>сейчас</i>», так что время обязательно.</div>
<div class="mini" data-q="___ you ___ anything next weekend?" data-o="Do … do|Are … doing|Did … do" data-a="1" data-why="Спрашиваем о планах на выходные → Are you doing…?"></div>
<div class="mini" data-q="Я не иду на вечеринку в субботу." data-o="I don't go to the party on Saturday.|I'm not going to the party on Saturday.|I not going to the party on Saturday." data-a="1" data-why="Договорённость (здесь — её отсутствие) → am not + -ing."></div>`
      },
      {
        title: '3. The train leaves at 7.30 — расписания',
        html: `
<div class="g-idea">Когда будущее зависит не от людей, а от <b>расписания</b> (поезд, самолёт, фильм, урок, стрим по сетке, распродажа) — берите обычный <b>Present Simple</b>. Как в русском: «Поезд <b>отправляется</b> в 7:30».</div>
<ul class="g-list">
<li><span class="say">The train leaves at 7.30.</span> — Поезд уходит в 7:30.</li>
<li><span class="say">The film starts at nine and finishes at eleven.</span> — Фильм начинается в девять и заканчивается в одиннадцать.</li>
<li><span class="say">The sale ends on Sunday.</span> — Распродажа заканчивается в воскресенье.</li>
<li><span class="say">What time does your flight arrive?</span> — Во сколько прилетает твой рейс?</li>
</ul>
<table>
<tr><th>Люди и их планы</th><th>Расписание</th></tr>
<tr><td><span class="say">I'm going to a concert tomorrow.</span></td><td><span class="say">The concert starts at 7.30.</span></td></tr>
<tr><td><span class="say">What time are you leaving?</span></td><td><span class="say">What time does your train leave?</span></td></tr>
<tr><td><span class="say">We're flying to Rome on Friday.</span></td><td><span class="say">The plane lands at ten.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как выбрать</div><ol>
<li>Кто решает время — <b>человек</b> (договорился)? → <b>am/is/are + -ing</b>.</li>
<li>Время стоит в <b>таблице</b>, программе, на сайте? → <b>Present Simple</b> (leaves, starts, does … start).</li>
</ol></div>
<div class="mini" data-q="The new season ___ on Netflix on 15 May." data-o="starts|is starting to|start" data-a="0" data-why="Дата выхода по программе → Present Simple, season — одно → starts."></div>
<div class="mini" data-q="What time ___ the bus leave?" data-o="is|does|do" data-a="1" data-why="Расписание автобуса → Present Simple, вопрос с does."></div>`
      },
      {
        title: '4. I\'m going to… — я решил, я собираюсь',
        html: `
<div class="g-idea"><b>be going to + глагол</b> = «собираюсь, решил сделать». Решение принято <b>раньше</b>, сейчас это намерение. Точное время и договорённость не обязательны.</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are (not)</span><span class="g-plus">+</span><span class="g-part g-v">going to</span><span class="g-plus">+</span><span class="g-part">глагол (начальная форма)</span></div>
<table>
<tr><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td><span class="say">I'm going to learn 3D.</span></td><td><span class="say">I'm not going to buy it.</span></td><td><span class="say">Am I going to win?</span></td></tr>
<tr><td><span class="say">She's going to sell her car.</span></td><td><span class="say">He isn't going to call.</span></td><td><span class="say">Is she going to stream today?</span></td></tr>
<tr><td><span class="say">We're going to move.</span></td><td><span class="say">They aren't going to wait.</span></td><td><span class="say">What are you going to wear?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I'm going to finish this level tonight.</span> — Сегодня вечером я собираюсь пройти этот уровень.</li>
<li><span class="say">I'm not going to have lunch. I'm not hungry.</span> — Я не буду обедать. Я не голоден.</li>
<li><span class="say">My hands are dirty. — I know, I'm going to wash them.</span> — Руки грязные. — Знаю, я как раз собираюсь их помыть.</li>
<li><span class="say">Are you going to invite Anna?</span> — Ты собираешься пригласить Анну?</li>
</ul>
<div class="g-bad">I going to buy a new mouse. I'm going to buying a new mouse.</div>
<div class="g-good">I<b>'m going to buy</b> a new mouse.</div>
<div class="g-tip">В сериалах и играх вы слышите <span class="say">gonna</span> — это going to в быстрой речи: <i>I'm gonna win</i>. Говорить можно, писать в учёбе — полностью: <b>going to</b>.</div>
<p>С глаголом <b>go</b> обычно не повторяют going to go — проще сказать через -ing: <span class="say">I'm going to the gym tonight.</span> (можно и <span class="muted">I'm going to go to the gym</span> — тоже правильно).</p>
<div class="mini" data-q="She ___ her old PC." data-o="is going to sell|going to sell|is going sell" data-a="0" data-why="Нужны все три части: is + going to + sell."></div>
<div class="mini" data-q="What ___ going to do after the course?" data-o="you are|are you|do you" data-a="1" data-why="В вопросе am/is/are встаёт перед «кто»: What are you going to do?"></div>`
      },
      {
        title: '5. It\'s going to rain — видно уже сейчас',
        html: `
<div class="g-idea">Второе значение <b>going to</b>: мы <b>видим сейчас</b> что-то, из-за чего будущее почти точно случится. «Всё к тому идёт».</div>
<ul class="g-list">
<li><span class="say">Look at those clouds! It's going to rain.</span> — Посмотри на тучи! Сейчас пойдёт дождь.</li>
<li><span class="say">It's nine o'clock and I'm not ready. I'm going to be late.</span> — Уже девять, а я не готов. Я опоздаю.</li>
<li><span class="say">My HP is very low. I'm going to die!</span> — У меня почти нет здоровья. Меня сейчас убьют!</li>
<li><span class="say">Careful! That glass is going to fall.</span> — Осторожно! Стакан сейчас упадёт.</li>
<li><span class="say">Our team is going to win — we're 3–0 up!</span> — Наша команда выиграет — мы ведём 3:0!</li>
</ul>
<div class="g-steps"><div class="g-h">Проверка: подходит ли going to</div><ol>
<li>Есть <b>знак прямо сейчас</b> (тучи, время на часах, счёт, почти пустая шкала)?</li>
<li>Из него <b>понятно</b>, что будет? → <b>be going to</b>.</li>
</ol></div>
<div class="g-bad">Look at the sky! It rains soon.</div>
<div class="g-good">Look at the sky! It<b>'s going to rain</b>.</div>
<div class="mini" data-q="Уже 8:55, а встреча в 9:00 на другом конце города." data-o="I'm being late.|I'm going to be late.|I was late." data-a="1" data-why="Видно по часам, что опоздание неизбежно → going to be late."></div>`
      },
      {
        title: '6. -ing или going to?',
        html: `
<div class="g-idea">Часто подходят обе формы, смысл почти одинаковый. Разница в оттенке: <b>-ing</b> — «уже договорились, стоит в календаре», <b>going to</b> — «я так решил».</div>
<table>
<tr><th>Договорённость</th><th>Решение, намерение</th></tr>
<tr><td><span class="say">I'm meeting Max at six.</span><br><span class="muted">время согласовано с Максом</span></td><td><span class="say">I'm going to call Max.</span><br><span class="muted">решил, но ещё ни с кем не договорился</span></td></tr>
<tr><td><span class="say">We're flying to Spain in July.</span><br><span class="muted">билеты куплены</span></td><td><span class="say">We're going to travel more this year.</span><br><span class="muted">общее намерение</span></td></tr>
</table>
<div class="g-tip">Если сомневаетесь — <b>going to</b> почти всегда подойдёт для плана. А вот -ing без договорённости звучит странно: <span class="muted">I'm learning Chinese next year</span> — лучше <span class="say">I'm going to learn Chinese next year.</span></div>
<div class="g-bad">It's raining tomorrow. <span class="muted">— погоду не планируют</span></div>
<div class="g-good">It<b>'s going to rain</b> tomorrow. <span class="muted">(видно по прогнозу)</span></div>
<div class="mini" data-q="Я решил: в этом году я начну бегать." data-o="I'm starting running this year.|I'm going to start running this year.|I start running this year." data-a="1" data-why="Личное решение без договорённости → going to."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I meet my friends tomorrow.</div><div class="g-good">I<b>'m meeting</b> my friends tomorrow.</div>
<div class="g-bad">Do you go out tonight?</div><div class="g-good"><b>Are</b> you <b>going</b> out tonight?</div>
<div class="g-bad">I going to buy it.</div><div class="g-good">I<b>'m going to buy</b> it.</div>
<div class="g-bad">She is going to plays tonight.</div><div class="g-good">She is going to <b>play</b> tonight.</div>
<div class="g-bad">The film is starting at 9 (по программе кино).</div><div class="g-good">The film <b>starts</b> at 9.</div>
<div class="g-bad">What you are going to do?</div><div class="g-good">What <b>are you</b> going to do?</div>
<div class="g-bad">Look! It rains soon.</div><div class="g-good">Look! It<b>'s going to rain</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Договорились → <b>I'm meeting</b> · решил → <b>I'm going to meet</b> · по расписанию → <b>it starts</b> · видно сейчас → <b>it's going to rain</b>.</div>`
      }
    ],
    words: [
      ["tomorrow", "завтра", "I'm meeting a client tomorrow.", "Завтра у меня встреча с клиентом."],
      ["tonight", "сегодня вечером", "What are you doing tonight?", "Что делаешь сегодня вечером?"],
      ["the day after tomorrow", "послезавтра", "We're leaving the day after tomorrow.", "Мы уезжаем послезавтра."],
      ["next week", "на следующей неделе", "I'm not working next week.", "На следующей неделе я не работаю."],
      ["this weekend", "на этих выходных", "Are you doing anything this weekend?", "Ты что-нибудь делаешь на этих выходных?"],
      ["plan", "план; планировать", "What are your plans for the summer?", "Какие у тебя планы на лето?"],
      ["be going to", "собираться (что-то сделать)", "I'm going to learn Blender.", "Я собираюсь изучить Blender."],
      ["gonna", "= going to (разговорное)", "I'm gonna win this match.", "Я выиграю этот матч."],
      ["decide", "решать", "I decided to move, so I'm going to sell my sofa.", "Я решил переехать, поэтому собираюсь продать диван."],
      ["go out", "выходить (развлечься), гулять", "We're going out tonight.", "Мы сегодня вечером идём гулять."],
      ["stay in", "оставаться дома", "I'm staying in tonight.", "Я сегодня вечером сижу дома."],
      ["meet up (with)", "встречаться (с друзьями)", "I'm meeting up with Tom on Friday.", "В пятницу я встречаюсь с Томом."],
      ["invite", "приглашать", "Are you going to invite Anna?", "Ты собираешься пригласить Анну?"],
      ["appointment", "запись, встреча (к врачу, по делу)", "I have an appointment at three.", "У меня запись на три."],
      ["dentist", "стоматолог", "Kate is going to the dentist on Friday.", "В пятницу Кейт идёт к стоматологу."],
      ["wedding", "свадьба", "What are you going to wear to the wedding?", "Что ты наденешь на свадьбу?"],
      ["get married", "жениться, выйти замуж", "My sister is getting married in June.", "Моя сестра выходит замуж в июне."],
      ["move", "переезжать", "We're moving to a new flat next month.", "В следующем месяце мы переезжаем в новую квартиру."],
      ["sell — sold", "продавать — продал", "He's going to sell his old PC.", "Он собирается продать свой старый компьютер."],
      ["leave — left", "уезжать, отправляться — уехал", "The train leaves at 7.30.", "Поезд отправляется в 7:30."],
      ["arrive", "прибывать, приезжать", "What time does your flight arrive?", "Во сколько прилетает твой рейс?"],
      ["flight", "рейс, перелёт", "Our flight leaves at six in the morning.", "Наш рейс в шесть утра."],
      ["timetable", "расписание", "Check the timetable — the bus leaves soon.", "Посмотри расписание — автобус скоро уходит."],
      ["end", "заканчиваться; конец", "The sale ends on Sunday.", "Распродажа заканчивается в воскресенье."],
      ["come out", "выходить (об игре, фильме)", "The new game comes out next Friday.", "Новая игра выходит в следующую пятницу."],
      ["sky", "небо", "Look at the sky! It's going to rain.", "Посмотри на небо! Сейчас пойдёт дождь."],
      ["cloud", "облако, туча", "There are big black clouds over the city.", "Над городом большие чёрные тучи."],
      ["fall — fell", "падать — упал", "Careful! That cup is going to fall.", "Осторожно! Чашка сейчас упадёт."],
      ["late", "поздно; опоздавший", "Hurry up! We're going to be late.", "Быстрее! Мы опоздаем."],
      ["free", "свободный", "Are you free on Saturday?", "Ты свободен в субботу?"],
      ["busy", "занятой", "Sorry, I'm busy tomorrow. I'm working.", "Извини, завтра я занят. Я работаю."]
    ],
    texts: [
      {
        id: 't-a2-5-1', title: 'Plans for Saturday', level: 'A2',
        text: `Kate: Hi, Max! What are you doing on Saturday?
Max: Saturday? Nothing special. Why?
Kate: Tom and I are going to the cinema. The new Marvel film is out. Do you want to come?
Max: Sounds great! What time does it start?
Kate: At 7.40. We're meeting at the café next to the cinema at seven.
Max: OK. Oh, wait. I'm having lunch with my parents on Saturday. They're coming from Kazan for the weekend.
Kate: Lunch is not a problem. What time does their train leave?
Max: At five, I think. So I'm free after that.
Kate: Perfect. Are you going to bring Anna?
Max: I don't know. She's very busy this month. She's going to start a new job on Monday, and she has a lot to do.
Kate: Ask her anyway. And after the film we're going to play the new co-op game at Tom's place.
Max: At night? Kate, I'm working on Sunday!
Kate: Me too. But the game comes out on Friday, and I'm not going to wait a week!
Max: OK, OK. I'm going to buy it tonight, then.
Kate: Great. See you on Saturday. Don't be late!
Max: Me? Late? Never.`,
        questions: [
          { q: 'Where are Kate and Tom meeting before the film?', o: ['At Tom\'s place', 'At the café next to the cinema', 'At the station'], a: 1 },
          { q: 'What is Max doing on Saturday at lunchtime?', o: ['He is working', 'He is having lunch with his parents', 'He is going to the dentist'], a: 1 },
          { q: 'What is Anna going to do on Monday?', o: ['Start a new job', 'Play a new game', 'Go to Kazan'], a: 0 }
        ]
      },
      {
        id: 't-a2-5-2', title: 'A big month for Anna', level: 'A2',
        text: `Anna is a UI designer, and next month is going to be very busy for her.
First, she is changing jobs. She is leaving her small studio on Friday, and on Monday she is starting at a big game company. She is going to design menus and screens for a new mobile game. She is very excited, but also a little nervous.
Second, she is moving. The new office is on the other side of the city, so she is going to rent a flat near it. She has an appointment with the owner of the flat on Wednesday at six.
Third, her best friend is getting married on the 20th. The wedding is in Saint Petersburg. Anna's train leaves at 8.15 on Friday morning and arrives at noon. She is going to buy a dress this weekend, but she doesn't know what to wear yet.
And what is she not going to do? She is not going to play games this month. "Well, maybe one hour on Sunday," she says.
Right now Anna is looking out of the window. The sky is dark and grey. "Oh no," she thinks, "it's going to rain, and I'm going to be late for my last meeting at the old studio."`,
        questions: [
          { q: 'Where is Anna going to work?', o: ['At a small studio', 'At a big game company', 'At a café'], a: 1 },
          { q: 'When does Anna\'s train to Saint Petersburg leave?', o: ['At 8.15 on Friday', 'At noon on Friday', 'At six on Wednesday'], a: 0 },
          { q: 'Why does Anna think it\'s going to rain?', o: ['She saw the forecast', 'The sky is dark and grey', 'Her friend told her'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I can\'t play tonight. I ___ my sister at eight.', o: ['meet', 'am meeting', 'met'], a: 1, why: 'Договорённость на вечер → am + -ing.' },
      { t: 'choice', q: 'What ___ tomorrow afternoon?', o: ['do you do', 'are you doing', 'you are doing'], a: 1, why: 'Вопрос о планах: are + you + doing.' },
      { t: 'choice', q: 'The last bus ___ at midnight.', o: ['leaves', 'is leaving', 'is going to leave'], a: 0, why: 'Расписание транспорта → Present Simple.' },
      { t: 'choice', q: 'I\'m hungry. I ___ make a sandwich.', o: ['going to', 'am going to', 'am going'], a: 1, why: 'Решение-намерение: am + going to + глагол.' },
      { t: 'choice', q: 'Look at the score! We ___!', o: ['are going to win', 'win', 'won'], a: 0, why: 'По счёту видно, чем кончится → going to.' },
      { t: 'choice', q: '___ Tom going to stream today?', o: ['Does', 'Is', 'Do'], a: 1, why: 'Вопрос с going to строится через is/are: Is Tom going to…?' },
      { t: 'choice', q: 'Lisa ___ to the party next week. She\'s on holiday.', o: ['doesn\'t come', 'isn\'t coming', 'not coming'], a: 1, why: 'Планы людей в отрицании → isn\'t + -ing.' },
      { t: 'choice', q: 'What time ___ the match start?', o: ['is', 'does', 'do'], a: 1, why: 'Время матча по программе → Present Simple, вопрос с does.' },
      { t: 'gap', q: 'My hands are dirty. I\'m going to ___ them. (wash)', a: ['wash'], why: 'После going to — начальная форма глагола.' },
      { t: 'gap', q: 'We ___ a party next Saturday. (have — договорились)', a: ['\'re having', 'are having'], why: 'Договорённость → are + having.' },
      { t: 'gap', q: 'I ___ going to have breakfast. I\'m not hungry. (не)', a: ['\'m not', 'am not'], why: 'Отрицание: am not going to.' },
      { t: 'gap', q: 'The concert ___ at 7.30. (start — по программе)', a: ['starts'], why: 'Программа → Present Simple, concert — одно → -s.' },
      { t: 'gap', q: 'It\'s 8.59 and the lesson starts at nine. I\'m ___ to be late.', a: ['going'], why: 'Видно по часам → be going to be late.' },
      { t: 'gap', q: 'What are you going to ___ to the wedding? (wear)', a: ['wear'], why: 'going to + начальная форма.' },
      { t: 'order', a: 'Are you going out tonight', ru: 'Ты идёшь куда-нибудь сегодня вечером?' },
      { t: 'order', a: 'She is going to sell her car', ru: 'Она собирается продать свою машину' },
      { t: 'order', a: 'What time does your flight arrive', ru: 'Во сколько прилетает твой рейс?' },
      { t: 'tr', q: 'Завтра я работаю.', a: ['i\'m working tomorrow', 'i am working tomorrow', 'tomorrow i\'m working', 'tomorrow i am working'] },
      { t: 'tr', q: 'Я собираюсь купить новую игру.', a: ['i\'m going to buy a new game', 'i am going to buy a new game', 'i\'m gonna buy a new game'] },
      { t: 'listen', say: 'It\'s going to rain', a: ['it\'s going to rain', 'it is going to rain'] }
    ],
    test: [
      { t: 'choice', q: 'Я сегодня вечером остаюсь дома (так решили с семьёй).', o: ['I stay at home tonight.', 'I\'m staying at home tonight.', 'I stayed at home tonight.'], a: 1, why: 'План на вечер → am + -ing, не Present Simple.' },
      { t: 'choice', q: 'Sarah ___ married next month!', o: ['gets', 'is getting', 'get'], a: 1, why: 'Событие в жизни человека, всё назначено → is getting.' },
      { t: 'choice', q: 'Your course ___ on Friday, right? — Yes, the last lesson is at six.', o: ['is finish', 'finishes', 'finish'], a: 1, why: 'Окончание курса по расписанию → Present Simple: finishes.' },
      { t: 'choice', q: 'Как спросить «Ты собираешься звать Макса?»', o: ['Do you going to invite Max?', 'Are you going to invite Max?', 'You are going to invite Max?'], a: 1, why: 'Вопрос: are + you + going to + глагол, без do.' },
      { t: 'choice', q: 'The shelf has too many books on it. It ___.', o: ['falls', 'is going to fall', 'fell'], a: 1, why: 'Видно сейчас, что будет → is going to.' },
      { t: 'choice', q: 'I ___ Chinese one day. It\'s my dream.', o: ['am learning', 'am going to learn', 'learn'], a: 1, why: 'Намерение без договорённости → going to, а не -ing.' },
      { t: 'choice', q: 'How ___ home after the party? — By taxi, I think.', o: ['do you get', 'are you getting', 'you are getting'], a: 1, why: 'Спрашиваем о личном плане человека → are you getting.' },
      { t: 'gap', q: 'What time ___ your train leave tomorrow?', a: ['does'], why: 'Расписание поезда → Present Simple, вопрос с does.' },
      { t: 'gap', q: 'They ___ going to move this year. They like their flat. (не)', a: ['aren\'t', 'are not', '\'re not'], why: 'Отрицание: they are not going to.' },
      { t: 'gap', q: 'Where ___ Kate and Tom going on holiday?', a: ['are'], why: 'Планы людей: are + going (-ing), Kate and Tom — они.' },
      { t: 'gap', q: 'I\'m going ___ call the bank tomorrow.', a: ['to'], why: 'Конструкция всегда с to: going to call.' },
      { t: 'gap', q: 'He\'s going to ___ a new video tonight. (upload)', a: ['upload'], why: 'После going to — глагол без -s и -ing.' }
    ]
  },

  // ───────────────────────────── UNIT A2-6 ─────────────────────────────
  {
    id: 'a2-6', level: 'A2', num: 6, track: 'main',
    books: { red: [27, 28] },
    title: 'Will и shall',
    summary: 'Научимся говорить «я буду дома», «думаю, мы выиграем», «я тебе позвоню», «давай помогу» и предлагать: «Открыть окно?», «Во сколько встретимся?»',
    grammar: [
      {
        title: '1. Главная идея: will — будущее без готового плана',
        html: `
<div class="g-idea">В прошлом уроке будущее было «по плану»: договорились, решили, есть расписание. <b>will</b> — для будущего, которое <b>не спланировано заранее</b>: мы что-то знаем или думаем о будущем, или <b>решаем прямо сейчас</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Завтра я <b>буду</b> дома.</p><p>Думаю, мы <b>выиграем</b>.</p><p>Сумка тяжёлая? Я <b>понесу</b>.</p><p><b>Открыть</b> окно?</p></div>
  <div><div class="g-h">English</div><p><span class="say">I<b>'ll be</b> at home tomorrow.</span></p><p><span class="say">I think we<b>'ll win</b>.</span></p><p><span class="say">Is your bag heavy? I<b>'ll carry</b> it.</span></p><p><span class="say"><b>Shall I open</b> the window?</span></p></div>
</div>
<table>
<tr><th>Вчера</th><th>Сейчас</th><th>Завтра</th></tr>
<tr><td><span class="say">I was at work.</span></td><td><span class="say">I am at work.</span></td><td><span class="say">I will be at work.</span></td></tr>
</table>
<div class="g-tip">Русское «буду / сделаю / понесу» не всегда = will. Если решение принято <b>раньше</b> — это going to или -ing (урок a2-5). will — когда решаем или предсказываем <b>сейчас, по ходу разговора</b>.</div>
<div class="mini" data-q="Позвони мне вечером, я буду дома." data-o="I'm being at home.|I'll be at home.|I be at home." data-a="1" data-why="Просто факт о будущем → will be."></div>`
      },
      {
        title: '2. Форма: will, \'ll, won\'t — одна для всех',
        html: `
<div class="g-idea"><b>will</b> — помощник, как can: он <b>одинаковый</b> для всех лиц, а глагол после него — в <b>начальной форме</b>, без to и без -s.</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">will / 'll / won't</span><span class="g-plus">+</span><span class="g-part">глагол (be, win, come…)</span></div>
<table>
<tr><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td><span class="say">I'll be there.</span></td><td><span class="say">I won't be there.</span></td><td><span class="say">Will you be there?</span></td></tr>
<tr><td><span class="say">She'll like it.</span></td><td><span class="say">She won't like it.</span></td><td><span class="say">Will she like it?</span></td></tr>
<tr><td><span class="say">They'll win.</span></td><td><span class="say">They won't win.</span></td><td><span class="say">Who will win?</span></td></tr>
</table>
<p>Короткие формы: <b>'ll</b> = will (<span class="say">I'll, you'll, he'll, we'll, it'll</span>), <b>won't</b> = will not. Короткие ответы: <span class="say">Yes, I will.</span> / <span class="say">No, I won't.</span></p>
<div class="g-bad">I will to call you. She wills come. He will comes.</div>
<div class="g-good">I will <b>call</b> you. She <b>will come</b>. He will <b>come</b>.</div>
<div class="g-tip">Не путайте <span class="say">won't</span> [воунт] — «не буду» и <span class="say">want</span> [уонт] — «хочу». <span class="say">I won't go.</span> — Я не пойду. <span class="say">I want to go.</span> — Я хочу пойти. В won't звук «оу», как в <i>no</i>.</div>
<div class="mini" data-q="Tom ___ here tomorrow — he's in Berlin." data-o="won't be|won't is|not will be" data-a="0" data-why="Отрицание: won't + начальная форма be."></div>
<div class="mini" data-q="___ you be at home this evening?" data-o="Do|Will|Are" data-a="1" data-why="Вопрос о будущем с will: will выходит вперёд."></div>`
      },
      {
        title: '3. Будущее как факт и прогноз: I think… will',
        html: `
<div class="g-idea">will — когда мы <b>знаем</b> или <b>думаем</b>, что будет. Часто рядом стоят <b>I think, I'm sure, probably</b> — «думаю, наверное».</div>
<ul class="g-list">
<li><span class="say">Next week I'll be in Minsk.</span> — На следующей неделе я буду в Минске.</li>
<li><span class="say">My brother will be 30 in May.</span> — В мае брату исполнится 30.</li>
<li><span class="say">Don't play games so late. You won't sleep.</span> — Не играй так поздно. Не уснёшь.</li>
<li><span class="say">I think the new update will be great.</span> — Думаю, новое обновление будет отличным.</li>
<li><span class="say">I'm sure you'll like this series.</span> — Уверен, тебе понравится этот сериал.</li>
<li><span class="say">Do you think they'll fix the bug?</span> — Как думаешь, они исправят баг?</li>
</ul>
<div class="g-steps"><div class="g-h">Где стоит probably («наверное»)</div><ol>
<li>В утверждении — <b>после</b> will: <span class="say">We'll probably go out tonight.</span></li>
<li>В отрицании — <b>перед</b> won't: <span class="say">I probably won't come.</span></li>
</ol></div>
<p>«Думаю, что <b>не</b>…» по-английски говорят через <b>I don't think</b>, а не через won't:</p>
<div class="g-bad">I think it won't rain today.</div>
<div class="g-good">I <b>don't think</b> it <b>will</b> rain today.</div>
<div class="mini" data-q="Думаю, Кейт не придёт." data-o="I think Kate won't come.|I don't think Kate will come.|I don't think Kate won't come." data-a="1" data-why="«Думаю, что не…» → I don't think + will."></div>
<div class="mini" data-q="We ___ finish the project on time." data-o="probably will|will probably|probably" data-a="1" data-why="В утверждении probably стоит после will."></div>`
      },
      {
        title: '4. I\'ll do it! — решение прямо сейчас, предложение, обещание',
        html: `
<div class="g-idea">Самое живое употребление will: вы <b>решаете в момент разговора</b> — предлагаете помощь, обещаете, соглашаетесь. Почти всегда в короткой форме <b>I'll</b>.</div>
<ul class="g-list">
<li><span class="say">My bag is really heavy. — I'll carry it for you.</span> — У меня тяжёлая сумка. — Давай я понесу.</li>
<li><span class="say">The doorbell! — I'll get it.</span> — Звонят! — Я открою.</li>
<li><span class="say">I'll call you tomorrow, OK?</span> — Я тебе завтра позвоню, хорошо?</li>
<li><span class="say">I'll send you the mockups tonight.</span> — Я пришлю тебе макеты сегодня вечером.</li>
<li><span class="say">Tea or coffee? — I'll have tea, please.</span> — Чай или кофе? — Мне чай, пожалуйста.</li>
</ul>
<p>Когда что-то решаем вслух, часто говорим <b>I think I'll…</b> / <b>I don't think I'll…</b>:</p>
<ul class="g-list">
<li><span class="say">I'm tired. I think I'll go to bed early.</span> — Я устал. Пожалуй, лягу пораньше.</li>
<li><span class="say">It's raining. I don't think I'll go out.</span> — Идёт дождь. Пожалуй, не пойду гулять.</li>
</ul>
<div class="g-bad">I call you tomorrow, OK? I think I go to bed.</div>
<div class="g-good">I<b>'ll call</b> you tomorrow, OK? I think I<b>'ll go</b> to bed.</div>
<div class="g-tip">Русское «Я открою!», «Я перезвоню» звучит как настоящее, но это будущее-решение → <b>I'll</b>. Present Simple (I call, I open) здесь нельзя.</div>
<div class="mini" data-q="Я не понимаю этот баг. — Не волнуйся, я помогу." data-o="I help you.|I'll help you.|I'm going to help you." data-a="1" data-why="Решение-предложение в момент разговора → I'll."></div>`
      },
      {
        title: '5. will или going to / -ing?',
        html: `
<div class="g-idea">Главный вопрос: решение принято <b>сейчас</b> или <b>раньше</b>? Сейчас → <b>will</b>. Раньше (есть план, договорённость) → <b>going to</b> или <b>am/is/are + -ing</b>.</div>
<table>
<tr><th>Решаю сейчас → will</th><th>Решил раньше → going to / -ing</th></tr>
<tr><td><span class="say">Oh, we have no milk. I'll buy some.</span></td><td><span class="say">I'm going to buy milk after work.</span></td></tr>
<tr><td><span class="say">Cinema? OK, I'll come with you.</span></td><td><span class="say">We're going to the cinema on Saturday. We've got tickets.</span></td></tr>
<tr><td><span class="say">This book is Tina's? OK, I'll give it to her.</span></td><td><span class="say">I don't need my PC. I'm going to sell it.</span></td></tr>
</table>
<div class="g-bad">What will you do at the weekend? <span class="muted">— спрашиваем о планах</span></div>
<div class="g-good">What <b>are you doing</b> at the weekend?</div>
<div class="g-bad">I can't meet tomorrow. I'll work. <span class="muted">— это известно заранее</span></div>
<div class="g-good">I can't meet tomorrow. I<b>'m working</b>.</div>
<div class="g-tip">Прогнозы: <b>will</b> — «я так думаю», <b>going to</b> — «вижу знаки прямо сейчас». <span class="say">I think it will rain later.</span> (мнение) — <span class="say">Look at those clouds! It's going to rain.</span> (видно)</div>
<div class="mini" data-q="Why are you putting on your jacket? — I ___ out." data-o="'ll go|'m going|go" data-a="1" data-why="Решение уже принято (он одевается) → I'm going out."></div>
<div class="mini" data-q="The phone is ringing! — OK, I ___ answer it." data-o="'ll|'m going to|am" data-a="0" data-why="Решил в эту секунду → I'll."></div>`
      },
      {
        title: '6. Shall I…? Shall we…? — предложить и посоветоваться',
        html: `
<div class="g-idea"><b>shall</b> сегодня живёт в основном в вопросах <b>Shall I…? / Shall we…?</b> — «Мне сделать…? Давай…? Как ты думаешь, это хорошая идея?» Работает только с <b>I</b> и <b>we</b>.</div>
<div class="g-formula"><span class="g-part g-v">Shall</span><span class="g-plus">+</span><span class="g-part">I / we</span><span class="g-plus">+</span><span class="g-part">глагол…?</span></div>
<ul class="g-list">
<li><span class="say">It's hot in here. Shall I open the window?</span> — Тут жарко. Открыть окно?</li>
<li><span class="say">Shall I send you the file now? — Yes, please.</span> — Прислать тебе файл сейчас? — Да, пожалуйста.</li>
<li><span class="say">It's a nice day. Shall we go for a walk?</span> — Хороший день. Может, пройдёмся?</li>
<li><span class="say">What shall we play tonight?</span> — Во что сыграем вечером?</li>
<li><span class="say">Let's meet on Friday. — OK, what time shall we meet?</span> — Давай встретимся в пятницу. — Хорошо, во сколько?</li>
<li><span class="say">I'm going to a party. What shall I wear?</span> — Я иду на вечеринку. Что мне надеть?</li>
</ul>
<div class="g-bad">Do I open the window? Will I open the window?</div>
<div class="g-good"><b>Shall I</b> open the window?</div>
<p>Ещё <b>I shall / we shall</b> = I will / we will, но это звучит официально и редко: <span class="say">We shall see.</span> — Посмотрим. С you, he, she, they shall не ставят:</p>
<div class="g-bad">Tom shall be late.</div>
<div class="g-good">Tom <b>will</b> be late.</div>
<div class="g-tip">Русские «Открыть? Помочь? Заказать пиццу?» (инфинитив-вопрос) → почти всегда <b>Shall I…?</b> А «Пойдём? Сыграем?» → <b>Shall we…?</b></div>
<div class="mini" data-q="Заказать пиццу? (предлагаю сам)" data-o="Will I order pizza?|Shall I order pizza?|Do I order pizza?" data-a="1" data-why="Предлагаем что-то сделать сами → Shall I…?"></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I will to help you.</div><div class="g-good">I will <b>help</b> you.</div>
<div class="g-bad">She wills be happy.</div><div class="g-good">She <b>will</b> be happy.</div>
<div class="g-bad">I think he won't win.</div><div class="g-good">I <b>don't think</b> he <b>will</b> win.</div>
<div class="g-bad">I phone you tomorrow, OK?</div><div class="g-good">I<b>'ll phone</b> you tomorrow, OK?</div>
<div class="g-bad">Do I close the door?</div><div class="g-good"><b>Shall I</b> close the door?</div>
<div class="g-bad">We will go to the concert on Friday — we've got tickets.</div><div class="g-good">We<b>'re going</b> to the concert on Friday.</div>
<div class="g-bad">I don't want be late. <span class="muted">(хотел сказать «не опоздаю»)</span></div><div class="g-good">I <b>won't</b> be late.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>will</b> + глагол — факт, прогноз (I think… will) и решение прямо сейчас (I'll get it) · <b>Shall I / Shall we…?</b> — предложить · а готовые планы — going to / -ing.</div>`
      }
    ],
    words: [
      ["will ('ll)", "буду, будет (помощник будущего)", "I'll be at home tonight.", "Сегодня вечером я буду дома."],
      ["won't (will not)", "не буду, не будет", "Don't worry, I won't be late.", "Не волнуйся, я не опоздаю."],
      ["shall", "(в вопросах) мне…? давай…?", "Shall we order pizza?", "Закажем пиццу?"],
      ["probably", "наверное, вероятно", "We'll probably win.", "Мы, наверное, выиграем."],
      ["definitely", "точно, определённо", "I'll definitely watch the new season.", "Я точно посмотрю новый сезон."],
      ["maybe", "может быть", "Maybe I'll stream tonight.", "Может, я сегодня постримлю."],
      ["sure", "уверенный", "I'm sure you'll like it.", "Уверен, тебе понравится."],
      ["think — thought", "думать — думал", "I don't think it will rain.", "Не думаю, что будет дождь."],
      ["hope", "надеяться", "I hope you'll come.", "Надеюсь, ты придёшь."],
      ["promise", "обещать; обещание", "I promise I'll call you.", "Обещаю, я тебе позвоню."],
      ["offer", "предлагать; предложение", "He offered to help me with the boxes.", "Он предложил помочь мне с коробками."],
      ["carry", "нести", "Your bag looks heavy. I'll carry it.", "Сумка, похоже, тяжёлая. Я понесу."],
      ["heavy", "тяжёлый", "This box is too heavy.", "Эта коробка слишком тяжёлая."],
      ["lend — lent", "одалживать (кому-то) — одолжил", "I'll lend you my headphones.", "Я одолжу тебе наушники."],
      ["borrow", "брать взаймы", "Can I borrow your charger?", "Можно взять твою зарядку?"],
      ["fix", "чинить, исправлять", "Don't worry, they'll fix the bug.", "Не волнуйся, они исправят баг."],
      ["send — sent", "отправлять — отправил", "I'll send you the file tonight.", "Я пришлю тебе файл вечером."],
      ["answer", "отвечать; ответ", "The phone is ringing. — I'll answer it.", "Звонит телефон. — Я отвечу."],
      ["call back", "перезвонить", "I'm busy. I'll call you back.", "Я занят. Я тебе перезвоню."],
      ["get (the door / the phone)", "открыть дверь / взять трубку", "Someone's at the door. — I'll get it.", "Кто-то у двери. — Я открою."],
      ["turn on / turn off", "включить / выключить", "Shall I turn on the light?", "Включить свет?"],
      ["forget — forgot", "забывать — забыл", "I won't forget, I promise.", "Я не забуду, обещаю."],
      ["remember", "помнить", "Will you remember the password?", "Ты запомнишь пароль?"],
      ["pass (an exam)", "сдать (экзамен)", "I think you'll pass the exam.", "Думаю, ты сдашь экзамен."],
      ["future", "будущее", "In the future, games will be even bigger.", "В будущем игры будут ещё больше."],
      ["next year", "в следующем году", "Where will you be next year?", "Где ты будешь в следующем году?"],
      ["in (ten minutes / a year)", "через (десять минут / год)", "I'll be ready in five minutes.", "Я буду готов через пять минут."],
      ["soon", "скоро", "The update will be out soon.", "Обновление скоро выйдет."],
      ["later", "позже", "I'll do it later.", "Я сделаю это позже."],
      ["ready", "готовый", "Dinner will be ready at seven.", "Ужин будет готов в семь."],
      ["happen", "случаться", "Sorry! It won't happen again.", "Извините! Это не повторится."]
    ],
    texts: [
      {
        id: 't-a2-6-1', title: 'Moving day', level: 'A2',
        text: `Max is moving to a new flat today. Kate and Tom have come to help.
Kate: Wow, Max. So many boxes! Where shall we start?
Max: Maybe with the kitchen? The van will be here in an hour.
Tom: OK. I'll take the plates. Kate, shall we do the books together?
Kate: Sure. Oh, this box is really heavy.
Tom: Leave it. I'll carry it later.
Max: Thanks, guys. I'll buy pizza for everyone tonight, I promise.
Kate: I'm going to remember that! Hey, what about your PC? Shall I put it in a box?
Max: No, no! I'll do it myself. It's my baby.
Tom: Do you think everything will fit in one van?
Max: I don't think it will. I'll probably need two trips.
(The doorbell rings.)
Kate: Someone's at the door.
Max: I'll get it. ... It's the van driver. He's early!
Tom: Great. Shall I help him with the sofa?
Max: Yes, please. Careful with the door.
Kate: Max, will you have Wi-Fi in the new flat tonight?
Max: No, they'll connect it on Monday. So I won't play for two days.
Tom: Two days without games? You won't survive!
Max: We'll see. Maybe I'll finally read a book.`,
        questions: [
          { q: 'When will the van arrive, according to Max?', o: ['In an hour', 'On Monday', 'In two days'], a: 0 },
          { q: 'What does Max promise to do?', o: ['Carry the heavy box', 'Buy pizza for everyone', 'Connect the Wi-Fi'], a: 1 },
          { q: 'Why won\'t Max play games for two days?', o: ['His PC is broken', 'He will have no Wi-Fi', 'He is going on a trip'], a: 1 }
        ]
      },
      {
        id: 't-a2-6-2', title: 'Stream predictions', level: 'A2',
        text: `Every December, the streamer PixelNina makes a stream about the next year. She talks about new games and makes predictions. Here is what she said this time.
"OK, chat, here are my ideas for next year. First, I think the big RPG from Poland will come out in autumn. I don't think it will come out in spring — they always need more time. And I'm sure it will be amazing.
Second, prices. Games will probably be more expensive. I don't like it, but I think it will happen.
Third, our channel. I think we'll get to a hundred thousand followers. You're the best chat on the internet, so I'm sure we will!
What about me? I'll try to stream five days a week. I won't play horror games — you know I scream too much. Well... maybe one or two.
And the last one: the new console. Will it be good? I don't know. I probably won't buy it in the first month. I'll wait for the reviews.
Shall we check these predictions next December? Yes, let's do that. Someone, please save this stream! Now, shall we play?"`,
        questions: [
          { q: 'When does Nina think the big RPG will come out?', o: ['In spring', 'In autumn', 'In December'], a: 1 },
          { q: 'What does Nina say about game prices?', o: ['They will probably go up', 'They will go down', 'They won\'t change'], a: 0 },
          { q: 'What will Nina do about the new console?', o: ['Buy it on the first day', 'Wait for the reviews', 'Never buy it'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Call me this evening. I ___ at home.', o: ['\'ll be', '\'ll am', 'will being'], a: 0, why: 'После will — начальная форма be.' },
      { t: 'choice', q: 'Don\'t drink coffee now. You ___ sleep.', o: ['won\'t', 'don\'t will', 'willn\'t'], a: 0, why: 'Отрицание will — won\'t (will not).' },
      { t: 'choice', q: '___ you be at the office tomorrow?', o: ['Do', 'Will', 'Shall'], a: 1, why: 'Вопрос о будущем с you → Will you…? (shall — только с I/we).' },
      { t: 'choice', q: 'My bag is so heavy! — I ___ it for you.', o: ['carry', '\'ll carry', '\'m carrying'], a: 1, why: 'Предложение помощи, решённое сейчас → I\'ll.' },
      { t: 'choice', q: 'It\'s dark in here. ___ turn on the light?', o: ['Shall I', 'Will I', 'Do I'], a: 0, why: 'Предлагаем что-то сделать → Shall I…?' },
      { t: 'choice', q: 'Думаю, фильм тебе не понравится.', o: ['I think you won\'t like the film.', 'I don\'t think you\'ll like the film.', 'I don\'t think you won\'t like the film.'], a: 1, why: '«Думаю, что не…» → I don\'t think + will.' },
      { t: 'choice', q: 'We ___ to the theatre tonight. We\'ve got tickets.', o: ['\'ll go', '\'re going', 'go'], a: 1, why: 'Есть билеты — план готов заранее → -ing, не will.' },
      { t: 'choice', q: 'I\'m tired. I think I ___ to bed early.', o: ['go', '\'ll go', 'goes'], a: 1, why: 'Решаю вслух прямо сейчас → I think I\'ll…' },
      { t: 'gap', q: 'Are you ready? — Not yet. I ___ be ready in five minutes.', a: ['\'ll', 'will'], why: 'Факт о ближайшем будущем → will / \'ll.' },
      { t: 'gap', q: 'It\'s a nice day. ___ we go for a walk?', a: ['shall'], why: 'Предложение «давай…?» → Shall we…?' },
      { t: 'gap', q: 'I\'m sorry I was late. It ___ happen again.', a: ['won\'t', 'will not'], why: 'Обещание «не повторится» → won\'t.' },
      { t: 'gap', q: 'Next month my sister ___ 25. (be)', a: ['will be', '\'ll be'], why: 'Факт о будущем (возраст) → will be.' },
      { t: 'gap', q: 'What time ___ we meet? — At seven.', a: ['shall'], why: 'Советуемся о плане с we → What time shall we…?' },
      { t: 'gap', q: 'It\'s raining. I don\'t think I\'ll ___ out. (go)', a: ['go'], why: 'После \'ll — начальная форма глагола.' },
      { t: 'order', a: 'I will send you the file tonight', ru: 'Я пришлю тебе файл сегодня вечером' },
      { t: 'order', a: 'Do you think they will win', ru: 'Как ты думаешь, они победят?' },
      { t: 'order', a: 'What shall I wear to the party', ru: 'Что мне надеть на вечеринку?' },
      { t: 'tr', q: 'Я тебе завтра позвоню.', a: ['i\'ll call you tomorrow', 'i will call you tomorrow', 'i\'ll phone you tomorrow', 'i will phone you tomorrow'] },
      { t: 'tr', q: 'Открыть окно?', a: ['shall i open the window', 'should i open the window'] },
      { t: 'listen', say: 'I won\'t forget, I promise', a: ['i won\'t forget i promise', 'i will not forget i promise'] }
    ],
    test: [
      { t: 'choice', q: 'Tomorrow at this time Helen ___ in Amsterdam.', o: ['is', 'will be', 'was'], a: 1, why: 'Где человек будет завтра — факт о будущем → will be.' },
      { t: 'choice', q: 'Выберите правильное:', o: ['She will comes later.', 'She will to come later.', 'She will come later.'], a: 2, why: 'will + глагол без -s и без to.' },
      { t: 'choice', q: 'We ___ go out tonight. We\'re not sure yet.', o: ['probably will', 'will probably', 'will probably to'], a: 1, why: 'probably в утверждении — после will.' },
      { t: 'choice', q: 'I ___ go to the party. I have a lot of work.', o: ['won\'t probably', 'probably won\'t', 'probably don\'t will'], a: 1, why: 'В отрицании probably стоит перед won\'t.' },
      { t: 'choice', q: 'Как сказать: «Не думаю, что он сдаст экзамен»?', o: ['I don\'t think he\'ll pass the exam.', 'I think he won\'t pass the exam.', 'I don\'t think he passes the exam.'], a: 0, why: 'Отрицание уходит в think: I don\'t think + will.' },
      { t: 'choice', q: 'Steve can\'t meet us on Saturday. He ___.', o: ['\'ll work', '\'s working', 'works'], a: 1, why: 'Его работа известна заранее → -ing, не will.' },
      { t: 'choice', q: 'This book is Tina\'s. — Oh, OK. I ___ it to her.', o: ['give', '\'ll give', '\'m giving'], a: 1, why: 'Решил только что, услышав новость → I\'ll.' },
      { t: 'choice', q: '___ Tom be at the meeting?', o: ['Shall', 'Will', 'Does'], a: 1, why: 'С he/she/Tom shall не используют → Will Tom…?' },
      { t: 'gap', q: 'The film is boring. ___ we watch something else?', a: ['shall'], why: 'Предлагаем идею с we → Shall we…?' },
      { t: 'gap', q: 'I haven\'t done the dishes yet. I ___ do them later.', a: ['\'ll', 'will'], why: 'Обещание / решение сейчас → I\'ll do them later.' },
      { t: 'gap', q: 'Will you help me? — Yes, I ___.', a: ['will'], why: 'Короткий ответ на Will you…? → Yes, I will.' },
      { t: 'gap', q: 'Do you think the update ___ fix the lag?', a: ['will'], why: 'Вопрос-прогноз: Do you think + will.' }
    ]
  }
);
