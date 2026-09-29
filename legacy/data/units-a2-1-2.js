// Юниты A2 1–2: Past Continuous (was doing) и Past Continuous vs Past Simple; Present Perfect: just, already, yet + still/yet/already
COURSE.units.push(
  // ───────────────────────────── UNIT A2-1 ─────────────────────────────
  {
    id: 'a2-1', level: 'A2', num: 1, track: 'main',
    books: { red: [13, 14] },
    title: 'I was doing — Past Continuous',
    summary: 'Научимся рассказывать, что происходило в какой-то момент прошлого и что прервало это действие: «Я играл, когда позвонил босс».',
    grammar: [
      {
        title: '1. Главная идея: «делал» бывает двух видов',
        html: `
<div class="g-idea">По-русски «вчера в девять я <b>играл</b>» и «вчера я <b>играл</b> два часа, потом лёг спать» — один и тот же глагол. В английском это разные вещи. Если мы смотрим на действие <b>в процессе</b>, в какой-то момент прошлого (оно уже началось и ещё не закончилось), нужен <b>Past Continuous</b>: <b>was / were + -ing</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Вчера в девять вечера я <span class="g-gap">_</span> играл в Elden Ring.</p><p>Когда ты позвонил, мы <span class="g-gap">_</span> смотрели сериал.</p><p>Шёл дождь.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>was playing</b> Elden Ring at nine last night.</span></p><p><span class="say">We <b>were watching</b> a series when you called.</span></p><p><span class="say">It <b>was raining</b>.</span></p></div>
</div>
<div class="g-tip">Past Continuous — это <b>стоп-кадр</b> из прошлого. Вы нажали паузу в 21:00 — и на экране вы с геймпадом в руках: <i>I was playing</i>.</div>
<p>Вы уже знаете Present Continuous: <span class="say">I am playing now.</span> Past Continuous устроен точно так же, только <b>am / is / are</b> «переехали» в прошлое и стали <b>was / were</b>.</p>
<div class="mini" data-q="Вчера в 8 вечера я рисовал логотип." data-o="I drew a logo at 8 pm yesterday.|I was drawing a logo at 8 pm yesterday.|I am drawing a logo at 8 pm yesterday." data-a="1" data-why="В 8 вечера действие шло, было в процессе → was drawing."></div>`
      },
      {
        title: '2. Как построить: was / were + -ing',
        html: `
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">was / were</span><span class="g-plus">+</span><span class="g-part">глагол + -ing</span></div>
<table>
<tr><th>Кто</th><th>Утверждение</th><th>Отрицание</th></tr>
<tr><td>I / he / she / it</td><td><span class="say">I was working.</span></td><td><span class="say">She wasn't working.</span></td></tr>
<tr><td>you / we / they</td><td><span class="say">We were working.</span></td><td><span class="say">They weren't working.</span></td></tr>
</table>
<p>Выбор <b>was</b> или <b>were</b> — как в уроке про to be в прошлом: один человек или предмет (и I) → <b>was</b>, остальные → <b>were</b>. <b>wasn't</b> = was not, <b>weren't</b> = were not.</p>
<p><b>Вопрос</b> — was/were выходит вперёд, как в любом вопросе с be:</p>
<table>
<tr><th>Вопрос</th><th>Краткий ответ</th></tr>
<tr><td><span class="say">Were you sleeping?</span></td><td><span class="say">Yes, I was.</span> / <span class="say">No, I wasn't.</span></td></tr>
<tr><td><span class="say">Was it raining?</span></td><td><span class="say">Yes, it was.</span> / <span class="say">No, it wasn't.</span></td></tr>
<tr><td><span class="say">Were they streaming?</span></td><td><span class="say">Yes, they were.</span> / <span class="say">No, they weren't.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">What were you doing at ten?</span> — Что ты делал в десять?</li>
<li><span class="say">Where was she going?</span> — Куда она шла?</li>
<li><span class="say">Why were they laughing?</span> — Почему они смеялись?</li>
</ul>
<p>Написание -ing — как в Present Continuous: make → <span class="say">making</span>, run → <span class="say">running</span>, sit → <span class="say">sitting</span>, lie → <span class="say">lying</span>.</p>
<div class="g-bad">I was play. · They was working.</div>
<div class="g-good">I was <b>playing</b>. · They <b>were</b> working.</div>
<div class="mini" data-q="My friends ___ waiting for me." data-o="was|were|are" data-a="1" data-why="My friends — они (they) → were."></div>
<div class="mini" data-q="___ you listening? — No, sorry, I wasn't." data-o="Was|Were|Did" data-a="1" data-why="Вопрос в Past Continuous: were выходит вперёд; you → were."></div>`
      },
      {
        title: '3. Что происходило в тот момент',
        html: `
<div class="g-idea">Past Continuous почти всегда привязан к <b>моменту</b> в прошлом: в 10 часов, в полночь, когда что-то случилось. Действие началось <b>до</b> этого момента и продолжалось <b>после</b>.</div>
<div class="g-steps"><div class="g-h">Как это выглядит на линии времени</div><ol>
<li>В 20:00 я начал работать.</li>
<li>В 22:30 я всё ещё работал — это и есть <span class="say">I was working at 10.30.</span></li>
<li>В 23:00 я закончил.</li>
</ol></div>
<p>Слова-подсказки: <span class="say">at 8 o'clock yesterday</span>, <span class="say">at midnight</span>, <span class="say">at this time last week</span> — в это время на прошлой неделе.</p>
<table>
<tr><th>Сейчас</th><th>Тогда</th></tr>
<tr><td><span class="say">I'm working now.</span></td><td><span class="say">I was working at 10 last night.</span></td></tr>
<tr><td><span class="say">It isn't raining now.</span></td><td><span class="say">It wasn't raining in the morning.</span></td></tr>
<tr><td><span class="say">What are you doing?</span></td><td><span class="say">What were you doing at 3?</span></td></tr>
</table>
<p>Ещё Past Continuous описывает <b>временную ситуацию</b> в прошлом — «жил тогда», «носил в тот день»:</p>
<ul class="g-list">
<li><span class="say">In 2022 we were living in Kazan.</span> — В 2022-м мы жили в Казани.</li>
<li><span class="say">Today she's wearing a dress, but yesterday she was wearing jeans.</span> — Сегодня она в платье, а вчера была в джинсах.</li>
</ul>
<div class="mini" data-q="At this time last week I ___ on a beach." data-o="lay|was lying|am lying" data-a="1" data-why="В этот момент на прошлой неделе действие шло → was lying (lie → lying)."></div>`
      },
      {
        title: '4. Фон истории — как первые кадры сериала',
        html: `
<div class="g-idea">Когда мы начинаем историю, Past Continuous рисует <b>декорации</b>: погода, кто что делал вокруг. А события сюжета — что случилось — идут в <b>Past Simple</b>.</div>
<ul class="g-list">
<li><span class="say">It was a cold night. It was snowing, and people were hurrying home.</span> — Была холодная ночь. Шёл снег, люди спешили домой.</li>
<li><span class="say">The sun was shining, and the birds were singing.</span> — Светило солнце, пели птицы.</li>
<li><span class="say">Then a strange man came into the bar.</span> — Потом в бар вошёл странный человек. <span class="muted">(событие → Past Simple)</span></li>
</ul>
<p>Так же объясняют причину или оправдываются:</p>
<ul class="g-list">
<li><span class="say">Sorry, what did you say? I wasn't listening.</span> — Прости, что ты сказал? Я не слушал.</li>
<li><span class="say">It was raining, so we didn't go out.</span> — Шёл дождь, поэтому мы не пошли гулять.</li>
<li><span class="say">I didn't hear the phone. I was taking a shower.</span> — Я не слышал телефон. Я был в душе.</li>
</ul>
<div class="g-tip">Past Continuous — декорации и фон, Past Simple — то, что происходит в кадре. Сначала «шёл дождь», потом «вошёл незнакомец».</div>
<div class="mini" data-q="I didn't answer your call. I ___ a film." data-o="watched|was watching|watch" data-a="1" data-why="Объясняем, что шло в момент звонка → was watching."></div>`
      },
      {
        title: '5. Past Simple или Past Continuous',
        html: `
<div class="g-idea"><b>Past Simple</b> — действие целиком, от начала до конца (или одно за другим). <b>Past Continuous</b> — середина действия, процесс в какой-то момент.</div>
<table>
<tr><th>Past Simple — целиком</th><th>Past Continuous — процесс</th></tr>
<tr><td><span class="say">We played from 10 to 12.</span></td><td><span class="say">At 11 we were playing.</span></td></tr>
<tr><td><span class="say">I read a book yesterday.</span></td><td><span class="say">I was reading when you came.</span></td></tr>
<tr><td><span class="say">Did you watch the match?</span></td><td><span class="say">Were you watching TV when I called?</span></td></tr>
<tr><td><span class="say">It didn't rain on holiday.</span></td><td><span class="say">It wasn't raining when I got up.</span></td></tr>
</table>
<p>Цепочка событий — одно за другим — всегда Past Simple: <span class="say">I got up, took a shower and made coffee.</span></p>
<p>Некоторые глаголы почти не бывают с -ing, потому что это не действие, а состояние: <b>know, want, like, love, need, understand, believe, have</b> (иметь). В прошлом они просто в Past Simple:</p>
<div class="g-bad">I was knowing the answer. · She was wanting a new phone.</div>
<div class="g-good">I <b>knew</b> the answer. · She <b>wanted</b> a new phone.</div>
<div class="mini" data-q="Yesterday I ___ a logo in Figma from 2 to 5 and then sent it to the client." data-o="designed|was designing|design" data-a="0" data-why="Действие целиком, с двух до пяти → Past Simple."></div>
<div class="mini" data-q="He ___ the answer, but he didn't say it." data-o="was knowing|knew|was know" data-a="1" data-why="know — состояние, в -ing не ставится → knew."></div>`
      },
      {
        title: '6. when: процесс и событие, которое его прервало',
        html: `
<div class="g-idea">Самая частая схема: длинное действие шло (<b>Past Continuous</b>), и тут что-то коротко случилось (<b>Past Simple</b>). Связывает их <b>when</b>.</div>
<div class="g-formula"><span class="g-part g-v">was / were + -ing</span><span class="g-plus">+</span><span class="g-part">when</span><span class="g-plus">+</span><span class="g-part">Past Simple</span></div>
<ul class="g-list">
<li><span class="say">I was drawing when the boss called.</span> — Я рисовал, когда позвонил босс.</li>
<li><span class="say">We were playing online when the lights went out.</span> — Мы играли онлайн, когда отключили свет.</li>
<li><span class="say">When I saw Max, he was waiting for a bus.</span> — Когда я увидел Макса, он ждал автобус.</li>
</ul>
<p>Если when стоит в начале, после его части ставим запятую: <span class="say">When the game crashed, I was fighting the boss.</span></p>
<p><b>Важная разница</b> — одно время меняет весь смысл:</p>
<table>
<tr><th>Предложение</th><th>Что было</th></tr>
<tr><td><span class="say">When Max came, we were having dinner.</span></td><td>Ужин уже шёл, Макс пришёл посреди него.</td></tr>
<tr><td><span class="say">When Max came, we had dinner.</span></td><td>Сначала Макс пришёл, потом мы поужинали.</td></tr>
</table>
<div class="g-bad">When I was watching TV, the phone was ringing.</div>
<div class="g-good">When I was watching TV, the phone <b>rang</b>. <span class="muted">— звонок короткий, это событие</span></div>
<div class="mini" data-q="I ___ a shower when you called." data-o="took|was taking|was take" data-a="1" data-why="Душ — длинный процесс, звонок его прервал → was taking."></div>
<div class="mini" data-q="She was crossing the road when she ___ her phone." data-o="was dropping|dropped|drops" data-a="1" data-why="Уронила — короткое событие посреди процесса → Past Simple."></div>`
      },
      {
        title: '7. while: пока шёл процесс',
        html: `
<div class="g-idea"><b>while</b> — «пока, в то время как». После while обычно стоит <b>длинное действие</b> в Past Continuous. А when чаще идёт с коротким событием.</div>
<ul class="g-list">
<li><span class="say">My phone died while I was streaming.</span> — Телефон сел, пока я стримил.</li>
<li><span class="say">Kate fell asleep while she was watching the film.</span> — Кейт уснула, пока смотрела фильм.</li>
<li><span class="say">Somebody stole his bike while he was working.</span> — Кто-то украл его велосипед, пока он работал.</li>
</ul>
<p>Два процесса <b>одновременно</b> — оба в Past Continuous:</p>
<ul class="g-list">
<li><span class="say">While I was cooking, my brother was playing FIFA.</span> — Пока я готовил, брат играл в FIFA.</li>
<li><span class="say">I was listening to music while I was working.</span> — Я слушал музыку, пока работал.</li>
</ul>
<table>
<tr><th>Слово</th><th>Обычно с чем</th><th>Пример</th></tr>
<tr><td><b>when</b></td><td>короткое событие</td><td><span class="say">when the phone rang</span></td></tr>
<tr><td><b>while</b></td><td>длинный процесс</td><td><span class="say">while I was sleeping</span></td></tr>
</table>
<div class="g-tip">while — длинное слово для длинного действия. when — короткое, как щелчок.</div>
<div class="mini" data-q="The game crashed ___ I was saving it." data-o="while|so|but" data-a="0" data-why="Пока шёл процесс (сохранение) → while + Past Continuous."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I was play a game.</div><div class="g-good">I was <b>playing</b> a game.</div>
<div class="g-bad">They was sleeping.</div><div class="g-good">They <b>were</b> sleeping.</div>
<div class="g-bad">What you were doing at ten?</div><div class="g-good">What <b>were you</b> doing at ten?</div>
<div class="g-bad">Did you sleeping when I called?</div><div class="g-good"><b>Were</b> you sleeping when I called?</div>
<div class="g-bad">I was reading when the phone was ringing.</div><div class="g-good">I was reading when the phone <b>rang</b>.</div>
<div class="g-bad">I was knowing him at school.</div><div class="g-good">I <b>knew</b> him at school.</div>
<div class="g-bad">Yesterday I was watching three episodes.</div><div class="g-good">Yesterday I <b>watched</b> three episodes. <span class="muted">— целиком, результат</span></div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>was / were + -ing</b> — процесс в момент прошлого (фон), а короткое событие, которое его прервало, — <b>Past Simple</b>: <b>I was playing when the lights went out.</b></div>`
      }
    ],
    words: [
      ["while", "пока, в то время как", "I fell asleep while I was reading.", "Я уснул, пока читал."],
      ["when", "когда", "I was cooking when you called.", "Я готовил, когда ты позвонил."],
      ["suddenly", "вдруг, внезапно", "Suddenly the screen went black.", "Вдруг экран погас."],
      ["at that moment", "в тот момент", "At that moment the door opened.", "В тот момент дверь открылась."],
      ["at the time", "в то время, тогда", "At the time I was living in Kazan.", "В то время я жил в Казани."],
      ["ring — rang", "звонить (о телефоне) — зазвонил", "My phone rang while I was driving.", "Мой телефон зазвонил, пока я был за рулём."],
      ["fall — fell", "падать — упал", "He fell while he was running.", "Он упал, пока бежал."],
      ["fall asleep", "уснуть", "She fell asleep during the film.", "Она уснула во время фильма."],
      ["wake up — woke up", "просыпаться — проснулся", "When I woke up, it was snowing.", "Когда я проснулся, шёл снег."],
      ["break — broke", "ломать, разбивать — сломал", "I broke a cup while I was washing up.", "Я разбил чашку, пока мыл посуду."],
      ["happen", "происходить, случаться", "What happened while I was away?", "Что случилось, пока меня не было?"],
      ["wait (for)", "ждать (кого-то, что-то)", "We were waiting for the bus.", "Мы ждали автобус."],
      ["rain", "дождь; идти (о дожде)", "It was raining all morning.", "Всё утро шёл дождь."],
      ["snow", "снег; идти (о снеге)", "It was snowing when we left.", "Шёл снег, когда мы уходили."],
      ["shine", "светить, сиять", "The sun was shining.", "Светило солнце."],
      ["wear — wore", "носить (одежду) — носил", "She was wearing a red jacket.", "На ней была красная куртка."],
      ["carry", "нести, носить (в руках)", "He was carrying a big box.", "Он нёс большую коробку."],
      ["drive — drove", "водить, ехать (за рулём) — вёл", "I was driving home when it started to rain.", "Я ехал домой, когда начался дождь."],
      ["ride — rode", "ехать (на велосипеде, лошади) — ехал", "She was riding her bike in the park.", "Она каталась на велосипеде в парке."],
      ["hear — heard", "слышать — услышал", "I heard a strange noise.", "Я услышал странный шум."],
      ["notice", "замечать", "I didn't notice the time.", "Я не заметил, сколько времени."],
      ["turn off", "выключать", "Somebody turned off the lights.", "Кто-то выключил свет."],
      ["go out — went out", "погаснуть; выйти погулять", "The lights went out at ten.", "Свет погас в десять."],
      ["arrive", "прибывать, приезжать", "When I arrived, they were eating.", "Когда я приехал, они ели."],
      ["crash", "падать, вылетать (об игре); авария", "The game crashed while I was saving.", "Игра вылетела, пока я сохранялся."],
      ["knock", "стучать", "Somebody was knocking at the door.", "Кто-то стучал в дверь."],
      ["laugh", "смеяться", "Why were you laughing?", "Почему ты смеялся?"],
      ["cross", "переходить (дорогу)", "She was crossing the street.", "Она переходила улицу."],
      ["upload", "загружать (в сеть)", "The video was uploading all night.", "Видео загружалось всю ночь."],
      ["the whole evening", "весь вечер", "I was working the whole evening.", "Я работал весь вечер."]
    ],
    texts: [
      {
        id: 't-a2-1-1', title: 'The night the lights went out', level: 'A2',
        text: `Last Friday I was at home. It was a cold, rainy evening. The wind was blowing, and the rain was hitting the windows. I was playing a new horror game online with my friends Max and Kate. We were talking on Discord and laughing a lot.
At about ten o'clock we were exploring a dark hospital in the game. Max was carrying the only torch, and Kate was looking for a key. Suddenly I heard a strange noise behind my character. I turned around... and at that moment all the lights in my flat went out!
My screen went black. For a second I was really scared. My heart was beating so fast! Then I understood: it was just the electricity.
I found my phone and called Max. "What happened?" he asked. "We were waiting for you, and then you disappeared!" I told him about the lights. He laughed. "While you were sitting in the dark, a monster killed Kate," he said.
The electricity came back at eleven. My neighbours were standing on the stairs and talking about the storm. I went back to my computer, but my friends weren't playing any more. They were watching a comedy. Maybe that was a better idea.`,
        questions: [
          { q: 'What were the friends doing at about ten o\'clock?', o: ['Exploring a hospital in the game', 'Watching a comedy', 'Standing on the stairs'], a: 0 },
          { q: 'What happened when the narrator turned around?', o: ['Kate found the key', 'The lights went out', 'Max called him'], a: 1 },
          { q: 'What were the friends doing when the electricity came back?', o: ['Playing the horror game', 'Sleeping', 'Watching a comedy'], a: 2 }
        ]
      },
      {
        id: 't-a2-1-2', title: 'Why didn\'t you answer?', level: 'A2',
        text: `Anna: Hi, Tom! I called you three times yesterday evening. Why didn't you answer?
Tom: Sorry! What time did you call?
Anna: The first time at about six.
Tom: At six I was driving home from the office. I never answer calls when I'm driving.
Anna: OK. And at seven?
Tom: At seven I was at the gym. I was running and listening to a podcast, so I didn't hear the phone.
Anna: And at nine? Were you sleeping?
Tom: No, I wasn't. I was working on a logo for a client. He wanted it this morning.
Anna: Were you working the whole evening?
Tom: Not the whole evening. While the files were uploading, I watched an episode of my favourite series. But my phone was in the other room. Why were you calling? Did something happen?
Anna: Yes! I was walking past the new game shop when I saw a sign: "Free tickets for the gaming festival". They were giving away tickets, and I wanted to take one for you too.
Tom: Wow! Did you get them?
Anna: I got one for myself. When I came back for the second, they weren't giving them away any more.
Tom: Oh no! Next time just send me a message!`,
        questions: [
          { q: 'Where was Tom at seven?', o: ['At the office', 'At the gym', 'In the game shop'], a: 1 },
          { q: 'What was Tom doing at nine?', o: ['He was sleeping', 'He was driving', 'He was working on a logo'], a: 2 },
          { q: 'What did Anna see near the game shop?', o: ['A sign about free tickets', 'Her friend Tom', 'A new logo'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'At 11 last night I ___ a series.', o: ['watched', 'was watching', 'am watching'], a: 1, why: 'В конкретный момент прошлого действие шло → was watching.' },
      { t: 'choice', q: 'Kate and Tom ___ for the bus.', o: ['was waiting', 'were waiting', 'waited for'], a: 1, why: 'Kate and Tom — они (they) → were + -ing.' },
      { t: 'choice', q: '___ it raining when you left?', o: ['Did', 'Were', 'Was'], a: 2, why: 'Вопрос в Past Continuous: was выходит вперёд; it → was.' },
      { t: 'choice', q: 'I ___ when the alarm rang.', o: ['was sleeping', 'slept', 'sleep'], a: 0, why: 'Сон — длинный процесс, будильник прервал его → was sleeping.' },
      { t: 'choice', q: 'We were having lunch when the boss ___ in.', o: ['was coming', 'came', 'comes'], a: 1, why: 'Короткое событие посреди процесса → Past Simple.' },
      { t: 'choice', q: 'My phone died ___ I was streaming.', o: ['while', 'so', 'if'], a: 0, why: 'Пока шёл процесс → while + Past Continuous.' },
      { t: 'choice', q: 'Yesterday I ___ from 9 to 6, and then I went to the gym.', o: ['was working', 'worked', 'were working'], a: 1, why: 'Действие целиком, от начала до конца → Past Simple.' },
      { t: 'choice', q: 'I ___ what to do, so I called Max.', o: ['wasn\'t knowing', 'didn\'t know', 'wasn\'t know'], a: 1, why: 'know — состояние, в -ing не ставится → didn\'t know.' },
      { t: 'gap', q: 'Sorry, I ___ . What did you say? (not/listen)', a: ["wasn't listening", 'was not listening'], why: 'Процесс в момент, когда говорили → wasn\'t + -ing.' },
      { t: 'gap', q: 'What ___ you doing at 8 o\'clock yesterday?', a: ['were'], why: 'Вопрос в Past Continuous, you → were.' },
      { t: 'gap', q: 'When I got up, the sun ___ . (shine)', a: ['was shining'], why: 'Фон в момент, когда я встал → was + shining.' },
      { t: 'gap', q: 'He ___ off his bike while he was riding in the park. (fall)', a: ['fell'], why: 'Упал — короткое событие → Past Simple, fall → fell.' },
      { t: 'gap', q: 'While I was cooking, my brother ___ a game. (play)', a: ['was playing'], why: 'Два процесса одновременно → оба в Past Continuous.' },
      { t: 'gap', q: '— Were they working? — No, they ___ .', a: ["weren't", 'were not'], why: 'Краткий ответ повторяет помощник: No, they weren\'t.' },
      { t: 'order', a: 'What were you doing at midnight', ru: 'Что ты делал в полночь?' },
      { t: 'order', a: 'I was driving when you called', ru: 'Я был за рулём, когда ты позвонил' },
      { t: 'tr', q: 'Шёл снег, когда мы вышли из дома.', a: ['it was snowing when we left home', 'it was snowing when we left the house', 'it was snowing when we went out', 'it was snowing when we went outside', 'it was snowing when we left our house', 'it was snowing when we left'] },
      { t: 'tr', q: 'Я уснул, пока смотрел фильм.', a: ['i fell asleep while i was watching a film', 'i fell asleep while i was watching the film', 'i fell asleep while i was watching a movie', 'i fell asleep while i was watching the movie', 'i fell asleep while watching a film', 'i fell asleep while watching the film', 'i fell asleep while watching a movie', 'i fell asleep while watching the movie'] },
      { t: 'listen', say: 'We were playing online when the lights went out.', a: ['we were playing online when the lights went out'] }
    ],
    test: [
      { t: 'choice', q: 'Выберите правильный вопрос:', o: ['What you were doing?', 'What were you doing?', 'What did you doing?'], a: 1, why: 'Вопросительное слово + were + you + глагол с -ing.' },
      { t: 'choice', q: 'When Max came, we ___ dinner. (ужин уже шёл)', o: ['had', 'were having', 'have'], a: 1, why: 'Ужин уже шёл, когда он пришёл → Past Continuous.' },
      { t: 'choice', q: 'When Max came, we ___ dinner. (он пришёл — и потом поужинали)', o: ['had', 'were having', 'was having'], a: 0, why: 'Сначала пришёл, потом поужинали — события по очереди → Past Simple.' },
      { t: 'choice', q: 'The game ___ while I was fighting the last boss.', o: ['was crashing', 'crashed', 'crashes'], a: 1, why: 'Вылет игры — короткое событие посреди процесса → Past Simple.' },
      { t: 'choice', q: 'In 2021 my sister ___ in Berlin.', o: ['was living', 'is living', 'were living'], a: 0, why: 'Временная ситуация в прошлом; she → was living.' },
      { t: 'choice', q: 'I didn\'t go out yesterday. It ___ all day.', o: ['rained', 'was raining', 'both are possible'], a: 2, why: 'Можно как целиком (rained), так и как фон-процесс (was raining).' },
      { t: 'gap', q: 'I saw Kate this morning. She ___ at the bus stop. (wait)', a: ['was waiting'], why: 'В момент, когда я её увидел, она ждала → was waiting.' },
      { t: 'gap', q: 'How fast ___ you driving when the police stopped you?', a: ['were'], why: 'Вопрос в Past Continuous, you → were.' },
      { t: 'gap', q: 'Where ___ Tom going when you met him?', a: ['was'], why: 'Tom — один человек → was + -ing.' },
      { t: 'gap', q: 'I ___ my finger while I was cutting bread. (cut)', a: ['cut'], why: 'Порезался — короткое событие → Past Simple; cut → cut.' },
      { t: 'gap', q: 'At 3 am we ___ — we were playing online. (not/sleep)', a: ["weren't sleeping", 'were not sleeping'], why: 'Процесс в момент прошлого, отрицание: weren\'t + -ing.' },
      { t: 'choice', q: 'She ___ a nice jacket when I saw her.', o: ['was wearing', 'wore', 'is wearing'], a: 0, why: 'Что было на ней в тот момент → was wearing.' }
    ]
  },

  // ───────────────────────────── UNIT A2-2 ─────────────────────────────
  {
    id: 'a2-2', level: 'A2', num: 2, track: 'main',
    books: { red: [15, 16, 95] },
    title: 'I have done — Present Perfect: just, already, yet',
    summary: 'Научимся говорить о том, что уже сделано и что это значит сейчас: «Я потерял ключи», «Он только что ушёл», «Ты уже посмотрел?», «Я ещё не закончил».',
    grammar: [
      {
        title: '1. Главная идея: прошлое, которое важно сейчас',
        html: `
<div class="g-idea">По-русски «я <b>потерял</b> ключи» — прошедшее время. Но на самом деле мы говорим о <b>сейчас</b>: ключей нет, я не могу войти. Для такого «прошлого с результатом сейчас» в английском есть отдельное время — <b>Present Perfect</b>: <b>have / has + 3-я форма глагола</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я потерял ключи. <span class="muted">(их нет сейчас)</span></p><p>Она ушла. <span class="muted">(её тут нет)</span></p><p>Ты уже закончил?</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>have lost</b> my keys.</span></p><p><span class="say">She <b>has gone</b>.</span></p><p><span class="say"><b>Have</b> you <b>finished</b> yet?</span></p></div>
</div>
<div class="g-tip">Present Perfect смотрит из <b>сегодня</b> назад: «что я имею сейчас в итоге?» Даже название подсказывает: <b>Present</b> — настоящее.</div>
<ul class="g-list">
<li><span class="say">He has cleaned his room.</span> — Он убрал комнату. <span class="muted">(комната чистая сейчас)</span></li>
<li><span class="say">We've bought a new TV.</span> — Мы купили новый телевизор. <span class="muted">(он у нас есть)</span></li>
<li><span class="say">The update has come out!</span> — Вышло обновление! <span class="muted">(его можно качать)</span></li>
</ul>
<div class="mini" data-q="Где мой телефон? Я его потерял! (сейчас его нет)" data-o="I have lost it!|I am lost it!|I lose it!" data-a="0" data-why="Прошлое действие, результат сейчас → have + lost."></div>`
      },
      {
        title: '2. Как построить: have / has + 3-я форма',
        html: `
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">have / has</span><span class="g-plus">+</span><span class="g-part">3-я форма (past participle)</span></div>
<table>
<tr><th>Кто</th><th>Утверждение</th><th>Отрицание</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I've finished.</span></td><td><span class="say">I haven't finished.</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She's finished.</span></td><td><span class="say">She hasn't finished.</span></td></tr>
</table>
<p>Короткие формы: I have → <b>I've</b>, he has → <b>he's</b>, have not → <b>haven't</b>, has not → <b>hasn't</b>.</p>
<div class="g-tip"><b>he's</b> бывает и <i>he is</i>, и <i>he has</i>. Смотрите на следующее слово: <span class="say">He's tired.</span> (is) — <span class="say">He's gone.</span> (has + 3-я форма).</div>
<p><b>Вопрос</b> — have/has выходит вперёд:</p>
<table>
<tr><th>Вопрос</th><th>Краткий ответ</th></tr>
<tr><td><span class="say">Have you seen my keys?</span></td><td><span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span></td></tr>
<tr><td><span class="say">Has Max finished the icons?</span></td><td><span class="say">Yes, he has.</span> / <span class="say">No, he hasn't.</span></td></tr>
<tr><td><span class="say">Where have they gone?</span></td><td><span class="say">To the shop.</span></td></tr>
</table>
<div class="g-bad">She have finished. · Did you have finished?</div>
<div class="g-good">She <b>has</b> finished. · <b>Have</b> you finished?</div>
<div class="mini" data-q="My brother ___ bought a new console." data-o="have|has|is" data-a="1" data-why="My brother — он (he) → has."></div>
<div class="mini" data-q="___ you fixed the bug? — Yes, I have." data-o="Did|Have|Has" data-a="1" data-why="Present Perfect: вопрос с have; you → have."></div>`
      },
      {
        title: '3. Третья форма: правильные и неправильные',
        html: `
<div class="g-idea">У <b>правильных</b> глаголов 3-я форма такая же, как прошедшее: <b>-ed</b>. clean → cleaned → <span class="say">I have cleaned</span>. У <b>неправильных</b> её надо запомнить — иногда она совпадает со 2-й формой, иногда нет.</div>
<p><b>Совпадает со 2-й формой</b> — повезло, вы уже знаете её:</p>
<table>
<tr><th>Глагол</th><th>Past Simple</th><th>3-я форма</th></tr>
<tr><td>buy</td><td>bought</td><td><span class="say">have bought</span></td></tr>
<tr><td>have</td><td>had</td><td><span class="say">has had</span></td></tr>
<tr><td>lose · find</td><td>lost · found</td><td><span class="say">have lost · found</span></td></tr>
<tr><td>make · send</td><td>made · sent</td><td><span class="say">have made · sent</span></td></tr>
<tr><td>tell · say</td><td>told · said</td><td><span class="say">have told · said</span></td></tr>
<tr><td>get · win</td><td>got · won</td><td><span class="say">have got · won</span></td></tr>
</table>
<p><b>Отличается</b> — эти учим отдельно:</p>
<table>
<tr><th>Глагол</th><th>Past Simple</th><th>3-я форма</th></tr>
<tr><td>go</td><td>went</td><td><span class="say">gone</span></td></tr>
<tr><td>see</td><td>saw</td><td><span class="say">seen</span></td></tr>
<tr><td>do</td><td>did</td><td><span class="say">done</span></td></tr>
<tr><td>eat</td><td>ate</td><td><span class="say">eaten</span></td></tr>
<tr><td>take</td><td>took</td><td><span class="say">taken</span></td></tr>
<tr><td>write</td><td>wrote</td><td><span class="say">written</span></td></tr>
<tr><td>break</td><td>broke</td><td><span class="say">broken</span></td></tr>
<tr><td>forget</td><td>forgot</td><td><span class="say">forgotten</span></td></tr>
<tr><td>fall</td><td>fell</td><td><span class="say">fallen</span></td></tr>
<tr><td>give · choose</td><td>gave · chose</td><td><span class="say">given · chosen</span></td></tr>
<tr><td>come · begin</td><td>came · began</td><td><span class="say">come · begun</span></td></tr>
</table>
<div class="g-tip">Много неправильных 3-х форм кончаются на <b>-n / -en</b>: seen, done, gone, eaten, taken, written, broken. Слышите «-н» после have — это Present Perfect.</div>
<div class="g-bad">I have went. · She has saw it. · We have eat.</div>
<div class="g-good">I have <b>gone</b>. · She has <b>seen</b> it. · We have <b>eaten</b>.</div>
<div class="mini" data-q="Oh no! Somebody has ___ the window." data-o="broke|broken|breaked" data-a="1" data-why="После has — 3-я форма: break → broke → broken."></div>
<div class="mini" data-q="I've ___ my homework." data-o="did|done|do" data-a="1" data-why="do → did → done; после have — done."></div>`
      },
      {
        title: '4. Результат сейчас: что это значит',
        html: `
<div class="g-idea">Говорящему важно не <b>когда</b> это случилось, а что мы имеем <b>теперь</b>. Поэтому в Present Perfect обычно <b>нет</b> точного времени (yesterday, last week, in 2020).</div>
<table>
<tr><th>Present Perfect</th><th>Что это значит сейчас</th></tr>
<tr><td><span class="say">I've lost my passport.</span></td><td>Паспорта нет.</td></tr>
<tr><td><span class="say">Anna has gone to bed.</span></td><td>Она в кровати.</td></tr>
<tr><td><span class="say">They've gone out.</span></td><td>Их нет дома.</td></tr>
<tr><td><span class="say">It's her birthday, and I haven't bought a present.</span></td><td>Подарка нет.</td></tr>
<tr><td><span class="say">Have you finished with the laptop?</span></td><td>Он тебе ещё нужен?</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Look! It has stopped raining.</span> — Смотри, дождь кончился.</li>
<li><span class="say">Where has Tom gone?</span> — Куда ушёл Том? <span class="muted">(где он сейчас?)</span></li>
<li><span class="say">I've forgotten his name.</span> — Я забыл, как его зовут. <span class="muted">(не помню сейчас)</span></li>
</ul>
<div class="g-bad">I have lost my keys yesterday.</div>
<div class="g-good">I <b>lost</b> my keys yesterday. · I<b>'ve lost</b> my keys. <span class="muted">— с yesterday только Past Simple; подробно сравним в следующих уроках</span></div>
<div class="mini" data-q="Tom isn't here. He ___ home." data-o="has gone|have gone|is go" data-a="0" data-why="Ушёл — и сейчас его нет → has gone (he → has)."></div>`
      },
      {
        title: '5. just и already — «только что» и «уже»',
        html: `
<div class="g-idea"><b>just</b> — «только что», совсем недавно. <b>already</b> — «уже», раньше, чем ожидали. Оба стоят <b>между have/has и 3-й формой</b>.</div>
<div class="g-formula"><span class="g-part">have / has</span><span class="g-plus">+</span><span class="g-part g-v">just / already</span><span class="g-plus">+</span><span class="g-part">3-я форма</span></div>
<ul class="g-list">
<li><span class="say">— Are you hungry? — No, I've just had lunch.</span> — Нет, я только что пообедал.</li>
<li><span class="say">Is Max here? — Sorry, he's just gone.</span> — Он только что ушёл.</li>
<li><span class="say">The stream has just started.</span> — Стрим только что начался.</li>
<li><span class="say">It's only nine, and Kate has already gone to bed.</span> — Только девять, а Кейт уже легла.</li>
<li><span class="say">— This is Emma. — I know. We've already met.</span> — Мы уже знакомы.</li>
<li><span class="say">— Let's watch the new episode! — Sorry, I've already watched it.</span> — Извини, я уже посмотрел.</li>
</ul>
<div class="g-bad">I have finished just. · She already has gone.</div>
<div class="g-good">I have <b>just</b> finished. · She has <b>already</b> gone.</div>
<div class="g-tip">just — как только что обновлённая лента: «новое, 1 минуту назад». already — «опа, уже!», быстрее, чем думали.</div>
<div class="mini" data-q="The bus ___ left. We can't catch it." data-o="has just|just has|have just" data-a="0" data-why="just стоит между has и 3-й формой; the bus → has."></div>`
      },
      {
        title: '6. yet — «ещё не» и «уже?» в вопросе',
        html: `
<div class="g-idea"><b>yet</b> ставят только в <b>отрицания</b> и <b>вопросы</b>, обычно в <b>самый конец</b>. В отрицании это «ещё не» (но скоро будет), в вопросе — «уже?».</div>
<table>
<tr><th>Где</th><th>Пример</th><th>Перевод</th></tr>
<tr><td>отрицание</td><td><span class="say">I haven't finished yet.</span></td><td>Я ещё не закончил.</td></tr>
<tr><td>отрицание</td><td><span class="say">The film hasn't started yet.</span></td><td>Фильм ещё не начался.</td></tr>
<tr><td>вопрос</td><td><span class="say">Have you seen the new trailer yet?</span></td><td>Ты уже видел трейлер?</td></tr>
<tr><td>вопрос</td><td><span class="say">Has Kate called yet?</span></td><td>Кейт уже звонила?</td></tr>
</table>
<p>Короткий ответ: <span class="say">Not yet.</span> — Ещё нет.</p>
<div class="g-bad">Have you already finished? <span class="muted">— обычный вопрос «уже закончил?»</span></div>
<div class="g-good">Have you finished <b>yet</b>?</div>
<div class="g-tip">Русское «уже» в <b>вопросе</b> — обычно <b>yet</b> в конце. Already в вопросе звучит как удивление: «Как, ты уже?!» — <span class="say">Have you already finished? Wow!</span></div>
<div class="g-bad">I haven't yet finished. · I have finished yet.</div>
<div class="g-good">I haven't finished <b>yet</b>. <span class="muted">— yet в конце и только с not или в вопросе</span></div>
<div class="mini" data-q="— Have you paid the bill ___? — No, not yet." data-o="already|yet|just" data-a="1" data-why="Обычный вопрос «уже?» → yet в конце."></div>
<div class="mini" data-q="She hasn't answered my message ___." data-o="yet|already|still" data-a="0" data-why="Отрицание «ещё не» → yet в конце."></div>`
      },
      {
        title: '7. still, yet, already — не только в Present Perfect',
        html: `
<div class="g-idea"><b>still</b> — «всё ещё»: ничего не изменилось, как было, так и есть. <b>yet</b> и <b>already</b> тоже работают с другими временами, а не только с Present Perfect.</div>
<p><b>still</b> — всё ещё:</p>
<ul class="g-list">
<li><span class="say">It's still raining.</span> — Всё ещё идёт дождь.</li>
<li><span class="say">I ate a pizza, but I'm still hungry.</span> — Я съел пиццу, но всё ещё голоден.</li>
<li><span class="say">Do you still live in Kazan?</span> — Ты всё ещё живёшь в Казани?</li>
<li><span class="say">Did you sell your old PC? — No, I've still got it.</span> — Нет, он всё ещё у меня.</li>
</ul>
<table>
<tr><th>Где стоит still / already</th><th>Пример</th></tr>
<tr><td>после am/is/are/was/were</td><td><span class="say">She is still at work.</span></td></tr>
<tr><td>перед обычным глаголом</td><td><span class="say">He still plays that game.</span></td></tr>
<tr><td>после have/has</td><td><span class="say">I've already seen it.</span></td></tr>
</table>
<p><b>yet</b> и <b>already</b> с другими временами:</p>
<ul class="g-list">
<li><span class="say">Emma isn't here yet.</span> — Эммы ещё нет. <span class="muted">(скоро будет)</span></li>
<li><span class="say">I don't know yet.</span> — Я пока не знаю.</li>
<li><span class="say">Are you ready yet? — Not yet.</span> — Ты уже готов? — Ещё нет.</li>
<li><span class="say">What time is Joe coming? — He's already here.</span> — Он уже здесь.</li>
<li><span class="say">Don't explain. I already know.</span> — Не объясняй, я уже знаю.</li>
</ul>
<p><b>still</b> и <b>yet</b> — две стороны одного: чего-то ещё нет → что-то всё ещё продолжается.</p>
<ul class="g-list">
<li><span class="say">She hasn't gone yet.</span> = <span class="say">She's still here.</span> — Она ещё не ушла = Она всё ещё здесь.</li>
<li><span class="say">I haven't finished yet.</span> = <span class="say">I'm still working.</span></li>
</ul>
<div class="g-bad">She is yet here. · I yet play this game.</div>
<div class="g-good">She is <b>still</b> here. · I <b>still</b> play this game.</div>
<div class="mini" data-q="The download started an hour ago, and it's ___ going." data-o="yet|still|already" data-a="1" data-why="Процесс продолжается, ничего не изменилось → still."></div>
<div class="mini" data-q="Where is he? — I don't know. He isn't here ___." data-o="still|yet|just" data-a="1" data-why="Ещё нет (но должен прийти) в отрицании → yet в конце."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">She have finished.</div><div class="g-good">She <b>has</b> finished.</div>
<div class="g-bad">I have saw this film.</div><div class="g-good">I have <b>seen</b> this film.</div>
<div class="g-bad">I have lost my phone yesterday.</div><div class="g-good">I <b>lost</b> my phone yesterday.</div>
<div class="g-bad">Did you finish yet?</div><div class="g-good"><b>Have</b> you <b>finished</b> yet?</div>
<div class="g-bad">I have finished already it.</div><div class="g-good">I have <b>already finished</b> it.</div>
<div class="g-bad">I didn't decide yet.</div><div class="g-good">I <b>haven't decided</b> yet.</div>
<div class="g-bad">He is yet at work.</div><div class="g-good">He is <b>still</b> at work.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>have / has + 3-я форма</b> — прошлое с результатом сейчас; <b>just</b> и <b>already</b> — между have и глаголом, <b>yet</b> — в конце отрицания или вопроса, <b>still</b> — «всё ещё».</div>`
      }
    ],
    words: [
      ["just", "только что", "I've just woken up.", "Я только что проснулся."],
      ["already", "уже", "We've already met.", "Мы уже знакомы."],
      ["yet", "ещё (не); уже (в вопросе)", "Have you finished yet?", "Ты уже закончил?"],
      ["not yet", "ещё нет", "Are you ready? — Not yet.", "Ты готов? — Ещё нет."],
      ["still", "всё ещё, до сих пор", "I'm still waiting for his answer.", "Я всё ещё жду его ответа."],
      ["finish", "заканчивать", "I haven't finished the design yet.", "Я ещё не закончил дизайн."],
      ["go — went — gone", "идти, уходить — ушёл", "She's gone home.", "Она ушла домой."],
      ["see — saw — seen", "видеть — видел", "Have you seen my headphones?", "Ты не видел мои наушники?"],
      ["do — did — done", "делать — сделал", "I've done my homework.", "Я сделал домашнее задание."],
      ["eat — ate — eaten", "есть — съел", "We haven't eaten anything yet.", "Мы ещё ничего не ели."],
      ["take — took — taken", "брать — взял", "Somebody has taken my charger.", "Кто-то взял мою зарядку."],
      ["write — wrote — written", "писать — написал", "He's written a new song.", "Он написал новую песню."],
      ["break — broke — broken", "ломать — сломал", "I've broken my phone screen.", "Я разбил экран телефона."],
      ["forget — forgot — forgotten", "забывать — забыл", "I've forgotten my password.", "Я забыл свой пароль."],
      ["give — gave — given", "давать — дал", "The boss has given us a day off.", "Начальник дал нам выходной."],
      ["choose — chose — chosen", "выбирать — выбрал", "Have you chosen a character yet?", "Ты уже выбрал персонажа?"],
      ["fall — fell — fallen", "падать — упал", "Prices have fallen.", "Цены упали."],
      ["lose — lost — lost", "терять — потерял", "I've lost my keys again.", "Я опять потерял ключи."],
      ["send — sent — sent", "отправлять — отправил", "Have you sent the file yet?", "Ты уже отправил файл?"],
      ["pay — paid — paid", "платить — заплатил", "I haven't paid the bill yet.", "Я ещё не оплатил счёт."],
      ["fix", "чинить, исправлять", "Tom has just fixed the bug.", "Том только что исправил баг."],
      ["change", "менять, изменять", "Somebody has changed the colours.", "Кто-то поменял цвета."],
      ["decide", "решать", "We haven't decided yet.", "Мы ещё не решили."],
      ["install", "устанавливать", "I've just installed the update.", "Я только что установил обновление."],
      ["download", "скачивать", "Have you downloaded the new level yet?", "Ты уже скачал новый уровень?"],
      ["come out — came out — come out", "выходить (о фильме, игре)", "The new season has just come out.", "Новый сезон только что вышел."],
      ["arrive", "прибывать, приходить", "Your parcel has arrived.", "Твоя посылка пришла."],
      ["clean", "чистить, убирать", "I've cleaned the kitchen.", "Я убрал кухню."],
      ["reach", "достигать, доходить до", "She has already reached level 50.", "Она уже дошла до 50-го уровня."],
      ["episode", "серия, эпизод", "I've watched two episodes.", "Я посмотрел две серии."]
    ],
    texts: [
      {
        id: 't-a2-2-1', title: 'Release day', level: 'A2',
        text: `Today is a big day for our small studio. Our first game comes out tomorrow, and there is still a lot to do.
It's ten in the morning. Kate, our programmer, has just arrived with coffee for everybody. Tom has already fixed the bug in the main menu — he stayed late last night. Max, our artist, hasn't finished the new icons yet, but he says, "Give me one more hour."
I'm the designer, so I check everything. I've just opened the new build on my laptop. The game looks great, but there is a problem: somebody has changed the colour of the buttons! They're pink now. Who did it? Nobody knows.
"Have you sent the trailer to the bloggers yet?" our boss asks.
"Not yet," I say. "We haven't chosen the music yet."
"Hurry up! Some of them have already written to me."
At two o'clock we're still working. Max has finished the icons, and the buttons are blue again. Kate has uploaded the new build. We haven't eaten anything yet, so Tom has ordered pizza.
At six the boss comes into the room with a big smile. "Great news! The trailer has already got ten thousand views!" Everybody laughs. We're tired, but we're happy. Now we just need to wait for tomorrow.`,
        questions: [
          { q: 'Who has fixed the bug in the main menu?', o: ['Max', 'Tom', 'Kate'], a: 1 },
          { q: 'Why haven\'t they sent the trailer to the bloggers yet?', o: ['They haven\'t chosen the music', 'The buttons are pink', 'The boss is away'], a: 0 },
          { q: 'What has Tom ordered?', o: ['Coffee', 'New icons', 'Pizza'], a: 2 }
        ]
      },
      {
        id: 't-a2-2-2', title: 'No spoilers!', level: 'A2',
        text: `Liza: Hey, Dan! Have you watched the new season of "Dark Harbor" yet?
Dan: Not yet. I've only just finished the first episode. Don't tell me anything!
Liza: OK, OK. I'm not saying a word.
Dan: Have you already finished it?
Liza: Yes, I've already watched all eight episodes. I started on Friday and watched them all over the weekend.
Dan: Wow, that was fast!
Liza: I know. I'm still thinking about the last episode. It's so good.
Dan: Stop! I'm still at the start. And what about the game? Have you bought it yet?
Liza: Which game?
Dan: The "Dark Harbor" game. It has just come out.
Liza: Really? I didn't know. Is it good?
Dan: I don't know yet. I've downloaded it, but I haven't played it yet. My brother has already reached level ten. He says it's great.
Liza: Does your brother still live with you?
Dan: Yes, he still lives here. He hasn't found a flat yet.
Liza: Then he can show me the game! Can I come over on Saturday?
Dan: Sure. But please, not a word about the series. I haven't seen the ending yet!
Liza: Deal. My lips are sealed.`,
        questions: [
          { q: 'How many episodes has Dan watched?', o: ['One', 'Eight', 'None'], a: 0 },
          { q: 'Has Dan played the new game?', o: ['Yes, he has reached level ten', 'No, he has only downloaded it', 'No, he hasn\'t bought it'], a: 1 },
          { q: 'Why does Dan\'s brother still live with him?', o: ['He likes the game', 'He hasn\'t found a flat yet', 'He hasn\'t got a job'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Kate ___ gone to bed.', o: ['have', 'has', 'is'], a: 1, why: 'Kate — она (she) → has + 3-я форма.' },
      { t: 'choice', q: 'I have ___ this series. It\'s great!', o: ['saw', 'see', 'seen'], a: 2, why: 'После have — 3-я форма: see → saw → seen.' },
      { t: 'choice', q: 'We\'ve ___ the new level. Let\'s play!', o: ['downloaded', 'download', 'downloading'], a: 0, why: 'Правильный глагол: 3-я форма = -ed.' },
      { t: 'choice', q: '— Are you hungry? — No, I\'ve ___ had breakfast.', o: ['yet', 'just', 'still'], a: 1, why: 'Только что, совсем недавно → just между have и глаголом.' },
      { t: 'choice', q: 'Has the film started ___?', o: ['still', 'yet', 'just'], a: 1, why: 'Обычный вопрос «уже?» → yet в конце.' },
      { t: 'choice', q: 'Выберите правильный порядок:', o: ['I have finished already it.', 'I have already finished it.', 'I already have finished it.'], a: 1, why: 'already стоит между have и 3-й формой.' },
      { t: 'choice', q: 'Is Max ___ at the office? He was there at 8.', o: ['yet', 'still', 'already'], a: 1, why: 'Всё ещё, как было → still.' },
      { t: 'choice', q: 'Where is Anna? — She\'s ___ home.', o: ['went', 'gone', 'go'], a: 1, why: 'She\'s = she has + 3-я форма: go → gone.' },
      { t: 'gap', q: 'Oh no! I ___ my password. (forget)', a: ['have forgotten', "'ve forgotten"], why: 'Забыл — и не помню сейчас → have + forgotten.' },
      { t: 'gap', q: 'Tom ___ the bug yet. (not/fix)', a: ["hasn't fixed", 'has not fixed'], why: 'Ещё не → hasn\'t + 3-я форма, yet в конце.' },
      { t: 'gap', q: '___ you sent the file to the client yet?', a: ['Have'], why: 'Вопрос в Present Perfect: have выходит вперёд.' },
      { t: 'gap', q: 'Somebody has ___ my charger. (take)', a: ['taken'], why: 'take → took → taken.' },
      { t: 'gap', q: '— Has she called you? — No, she ___ .', a: ["hasn't", 'has not'], why: 'Краткий ответ повторяет помощник: No, she hasn\'t.' },
      { t: 'gap', q: 'I ate a whole pizza, but I\'m ___ hungry.', a: ['still'], why: 'Состояние не изменилось → still.' },
      { t: 'order', a: 'The stream has just started', ru: 'Стрим только что начался' },
      { t: 'order', a: 'Have you chosen a character yet', ru: 'Ты уже выбрал персонажа?' },
      { t: 'tr', q: 'Я ещё не решил.', a: ["i haven't decided yet", 'i have not decided yet'] },
      { t: 'tr', q: 'Мы уже видели этот фильм.', a: ["we've already seen this film", 'we have already seen this film', "we've already seen this movie", 'we have already seen this movie', "we've already seen that film", 'we have already seen that film', "we've already seen that movie", 'we have already seen that movie'] },
      { t: 'listen', say: 'I have lost my keys again.', a: ['i have lost my keys again', "i've lost my keys again"] }
    ],
    test: [
      { t: 'choice', q: 'fall → 3-я форма:', o: ['fell', 'fallen', 'falled'], a: 1, why: 'fall → fell → fallen.' },
      { t: 'choice', q: 'He\'s ___ a new song. (He has…)', o: ['wrote', 'written', 'writed'], a: 1, why: 'После has — 3-я форма: write → wrote → written.' },
      { t: 'choice', q: 'I ___ my phone yesterday, but I found it this morning.', o: ['have lost', 'lost', 'has lost'], a: 1, why: 'Есть yesterday и результата сейчас нет → Past Simple.' },
      { t: 'choice', q: 'Look! It ___ raining. Let\'s go out.', o: ['has stopped', 'have stopped', 'is stop'], a: 0, why: 'Прошлое действие с результатом сейчас; it → has stopped.' },
      { t: 'choice', q: 'Emma isn\'t here ___. She\'s on her way.', o: ['still', 'already', 'yet'], a: 2, why: 'Ещё нет (но скоро будет) в отрицании → yet в конце.' },
      { t: 'choice', q: 'She hasn\'t gone yet. = She\'s ___ here.', o: ['yet', 'still', 'already'], a: 1, why: 'Ещё не ушла = всё ещё здесь → still.' },
      { t: 'choice', q: 'Don\'t tell me! I ___ know.', o: ['already', 'yet', 'still not'], a: 0, why: 'Уже знаю (раньше, чем ты рассказал) → already перед глаголом.' },
      { t: 'choice', q: 'Выберите правильный вопрос:', o: ['Did you pay the bill yet?', 'Have you paid the bill yet?', 'Have you pay the bill yet?'], a: 1, why: 'С yet в значении «уже?» — Present Perfect: have + paid.' },
      { t: 'gap', q: 'The new update has just ___ out. Let\'s download it! (come)', a: ['come'], why: 'После has — 3-я форма: come → came → come.' },
      { t: 'gap', q: 'We ___ anything yet. Let\'s order pizza. (not/eat)', a: ["haven't eaten", 'have not eaten'], why: 'Ещё не ели → haven\'t + eaten.' },
      { t: 'gap', q: 'Where ___ Tom gone? — To the shop.', a: ['has'], why: 'Вопрос в Present Perfect с he → has.' },
      { t: 'gap', q: 'Do you ___ play that old game? — Yes, every weekend.', a: ['still'], why: 'Всё ещё, как раньше → still перед обычным глаголом.' }
    ]
  }
);
