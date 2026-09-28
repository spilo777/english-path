// Юниты B1 5–6: Past Perfect и Past Perfect Continuous; будущее — present for future, going to, will/shall
COURSE.units.push(
  // ───────────────────────────── UNIT B1-5 ─────────────────────────────
  {
    id: 'b1-5', level: 'B1', num: 5, track: 'main',
    books: { blue: [15, 16] },
    title: 'I had done — Past Perfect и Past Perfect Continuous',
    summary: 'Научимся делать в рассказе «шаг назад»: «Когда я зашёл, рейд уже начался», «Я понял, что забыл зарядку», «Глаза болели — я всю ночь смотрел в экран».',
    grammar: [
      {
        title: '1. Главная идея: прошлое, которое было ещё раньше',
        html: `
<div class="g-idea">Вы уже рассказываете о прошлом (Past Simple, уроки a1-9 и b1-2). Иногда нужно сделать <b>шаг назад</b> — сказать, что что-то случилось <b>ещё раньше</b> этого момента. Для такого «прошлого до прошлого» в английском есть отдельное время — <b>Past Perfect: had + 3-я форма</b>.</div>
<p class="muted">Что вы уже знаете: <b>have done</b> (Present Perfect, уроки a2-2 и b1-3) — «уже сделано к сейчас». Past Perfect — то же самое, только «к тогда».</p>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Когда я зашёл в игру, друзья <b>уже начали</b> рейд.</p><p>Когда мы пришли, фильм <b>начался</b>. <span class="muted">(до нас или при нас? непонятно)</span></p><p>Я понял, что <b>оставил</b> зарядку дома.</p></div>
  <div><div class="g-h">English</div><p><span class="say">When I logged in, my friends <b>had</b> already <b>started</b> the raid.</span></p><p><span class="say">When we arrived, the film <b>had started</b>.</span> — уже шёл<br><span class="say">When we arrived, the film <b>started</b>.</span> — начался сразу после</p><p><span class="say">I realised I <b>had left</b> my charger at home.</span></p></div>
</div>
<table>
<tr><th>Что было</th><th>Порядок</th><th>Время</th></tr>
<tr><td>друзья начали рейд</td><td>1 — раньше</td><td><b class="g-v">had started</b></td></tr>
<tr><td>я зашёл в игру</td><td>2 — точка рассказа</td><td><b>logged in</b> (Past Simple)</td></tr>
</table>
<div class="g-tip">Представьте ленту времени в видеоредакторе. Past Simple — это место, где стоит «курсор» рассказа. Past Perfect — всё, что лежит на ленте <b>левее курсора</b>.</div>
<div class="mini" data-q="Когда я позвонил Ане, она уже ушла спать." data-o="When I called Anna, she went to bed.|When I called Anna, she had gone to bed.|When I called Anna, she has gone to bed." data-a="1" data-why="Легла ещё до звонка — шаг назад от точки рассказа: had + gone."></div>`
      },
      {
        title: '2. Форма: had + 3-я форма — одна для всех',
        html: `
<div class="g-formula"><span class="g-part">любое лицо</span><span class="g-plus">+</span><span class="g-part g-v">had</span><span class="g-plus">+</span><span class="g-part g-v">3-я форма (V3)</span></div>
<table>
<tr><th>Тип</th><th>Форма</th><th>Пример</th></tr>
<tr><td>+</td><td>had / <b>'d</b> + V3</td><td><span class="say">She'd finished the mockups.</span></td></tr>
<tr><td>−</td><td><b>hadn't</b> + V3</td><td><span class="say">We hadn't saved the game.</span></td></tr>
<tr><td>?</td><td><b>Had</b> + кто + V3?</td><td><span class="say">Had you played it before?</span></td></tr>
<tr><td>кратко</td><td>Yes, I had. / No, I hadn't.</td><td><span class="say">No, I hadn't.</span></td></tr>
</table>
<p>Наречия <b>already, just, never, ever</b> встают <b>между had и V3</b>, а <b>yet</b> — в конце:</p>
<ul class="g-list">
<li><span class="say">The stream had just ended.</span> — Стрим только что закончился.</li>
<li><span class="say">I'd never seen snow before.</span> — Я никогда раньше не видел снега.</li>
<li><span class="say">He hadn't answered yet.</span> — Он ещё не ответил.</li>
</ul>
<p><b>'d</b> бывает и <b>had</b>, и <b>would</b>. Смотрите на глагол после него:</p>
<ul class="g-list">
<li><span class="say">He'd gone.</span> — 3-я форма → <b>had</b> gone (он ушёл).</li>
<li><span class="say">He'd go.</span> — начальная форма → <b>would</b> go (он бы пошёл).</li>
</ul>
<p>И не пугайтесь <b>had had</b> — это нормальный Past Perfect от have: <span class="say">I wasn't hungry. I'd had a big lunch.</span> — Я не был голоден, я плотно пообедал.</p>
<div class="g-bad">When I came, he has already left.</div>
<div class="g-good">When I came, he <b>had</b> already <b>left</b>. <span class="muted">— рассказ в прошлом → had, а не has</span></div>
<div class="mini" data-q="She'd sent the file. Что значит ’d?" data-o="had|would|did" data-a="0" data-why="После ’d стоит 3-я форма sent → это had."></div>`
      },
      {
        title: '3. Когда Past Perfect нужен, а когда — нет',
        html: `
<div class="g-idea">Past Perfect — не «очень прошедшее», а инструмент для <b>прыжка назад</b>. Если события идут по порядку, хватает Past Simple.</div>
<table>
<tr><th>Ситуация</th><th>Пример</th></tr>
<tr><td>по порядку → Past Simple</td><td><span class="say">I got up, made coffee and launched the game.</span></td></tr>
<tr><td>прыжок назад → Past Perfect</td><td><span class="say">I launched the game. I'd bought it the day before.</span></td></tr>
</table>
<p>Сравните — смысл меняется от одной формы:</p>
<ul class="g-list">
<li><span class="say">When I called Kate, she left.</span> — Я позвонил, и она (после звонка) ушла.</li>
<li><span class="say">When I called Kate, she had left.</span> — Когда я позвонил, её уже не было.</li>
<li><span class="say">Was Tom there? — Yes, but he left soon after.</span> — Был, но скоро ушёл.</li>
<li><span class="say">Was Tom there? — No, he'd already left.</span> — Нет, уже ушёл.</li>
</ul>
<div class="g-steps"><div class="g-h">Где Past Perfect встречается чаще всего</div><ol>
<li>После «понял, заметил, обнаружил»: <span class="say">I noticed that somebody had moved my monitor.</span> <span class="say">We found out the shop had closed.</span></li>
<li>«Думал, что…», а оказалось иначе: <span class="say">I thought I'd saved the file, but I hadn't.</span></li>
<li>С <b>by the time</b> (к тому времени как): <span class="say">By the time we got there, the concert had finished.</span></li>
<li>Объяснение причины: <span class="say">She didn't come with us. She'd already seen the film.</span></li>
</ol></div>
<p>После <b>after, before, as soon as</b> порядок и так понятен, поэтому Past Perfect можно, но не обязательно: <span class="say">After I (had) finished the level, I went to bed.</span></p>
<div class="g-bad">Yesterday I had played a new game. It had been great.</div>
<div class="g-good">Yesterday I <b>played</b> a new game. It <b>was</b> great. <span class="muted">— нет «точки», от которой делать шаг назад</span></div>
<div class="g-tip">Русскоговорящие, выучив Past Perfect, начинают ставить его во все «давние» события. Проверка: есть ли в рассказе <b>другое прошлое событие</b>, которое было позже? Нет — значит, Past Simple.</div>
<div class="mini" data-q="Вчера я пришёл домой, поужинал и посмотрел две серии." data-o="I had come home, had dinner and watched…|I came home, had dinner and watched…|I have come home, had dinner and watched…" data-a="1" data-why="События по порядку — Past Simple. Здесь had dinner — это просто «поужинал»."></div>
<div class="mini" data-q="By the time I woke up, everyone ___." data-o="left|had left|has left" data-a="1" data-why="By the time + прошлое: всё, что случилось раньше, — had + V3."></div>`
      },
      {
        title: '4. have done → had done: «сейчас» переезжает в прошлое',
        html: `
<p>Всё, что вы знаете про Present Perfect (опыт, «только что», «уже», «давно не»), работает и в Past Perfect — только отсчёт идёт не от «сейчас», а от момента в прошлом.</p>
<table>
<tr><th>Сейчас — have done</th><th>Тогда — had done</th></tr>
<tr><td><span class="say">I've seen this guy before.</span></td><td><span class="say">I'd seen this guy before, but I couldn't remember where.</span></td></tr>
<tr><td><span class="say">We aren't hungry. We've just eaten.</span></td><td><span class="say">We weren't hungry. We'd just eaten.</span></td></tr>
<tr><td><span class="say">The flat is a mess. Nobody has cleaned it for weeks.</span></td><td><span class="say">The flat was a mess. Nobody had cleaned it for weeks.</span></td></tr>
<tr><td><span class="say">It's the first time I've tried VR.</span></td><td><span class="say">It was the first time I'd tried VR.</span></td></tr>
<tr><td><span class="say">They've never flown before.</span></td><td><span class="say">They were nervous. They'd never flown before.</span></td></tr>
</table>
<div class="g-bad">It was the first time I tried sushi.</div>
<div class="g-good">It was the first time I<b>'d tried</b> sushi. <span class="muted">— после it was the first time — Past Perfect</span></div>
<p>Живой английский: <span class="say">I'd never seen anything like it.</span> — Никогда такого не видел. <span class="say">It turned out he'd lied to everyone.</span> — Оказалось, он всем врал.</p>
<div class="mini" data-q="I didn't recognise Max. He ___ a beard." data-o="has grown|had grown|grew" data-a="1" data-why="Борода выросла до момента встречи в прошлом → had grown."></div>`
      },
      {
        title: '5. I had been doing — долгий процесс до момента в прошлом',
        html: `
<div class="g-idea"><b>had been + -ing</b> — процесс, который <b>длился какое-то время</b> до момента в прошлом. Часто мы видим его <b>следы</b>: мокрая земля, грязные руки, красные глаза.</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">had been</span><span class="g-plus">+</span><span class="g-part g-v">глагол + -ing</span></div>
<ul class="g-list">
<li><span class="say">The ground was wet. It had been raining.</span> — Земля была мокрая. Шёл дождь (и уже кончился).</li>
<li><span class="say">My eyes hurt. I'd been staring at the screen all night.</span> — Глаза болели: я всю ночь смотрел в экран.</li>
<li><span class="say">He was out of breath. He'd been running.</span> — Он запыхался: бежал.</li>
<li><span class="say">We'd been playing for two hours when the server crashed.</span> — Мы играли уже два часа, когда сервер упал.</li>
<li><span class="say">She hadn't been working there long, but she knew everyone.</span> — Она работала там недавно, но знала всех.</li>
</ul>
<table>
<tr><th>Форма</th><th>До какого момента</th><th>Пример</th></tr>
<tr><td>have been -ing</td><td>до <b>сейчас</b></td><td><span class="say">I've been waiting for 20 minutes.</span></td></tr>
<tr><td>had been -ing</td><td>до момента <b>в прошлом</b></td><td><span class="say">I'd been waiting for 20 minutes when the bus came.</span></td></tr>
<tr><td>was -ing</td><td><b>в тот самый</b> момент</td><td><span class="say">It was raining when we went out.</span></td></tr>
</table>
<div class="g-tip">Русское «Мы играли уже два часа, когда…» — это почти всегда <b>had been playing</b>. Слово «уже» + срок + «когда» — главный сигнал.</div>
<div class="mini" data-q="It wasn't raining when we left, but the road was wet. It ___." data-o="was raining|had been raining|has been raining" data-a="1" data-why="Дождь шёл раньше и закончился, остались следы → had been -ing."></div>`
      },
      {
        title: '6. had done или had been doing? И глаголы состояния',
        html: `
<table>
<tr><th>had done</th><th>had been doing</th></tr>
<tr><td>результат, сколько сделано</td><td>процесс, как долго</td></tr>
<tr><td><span class="say">She had drawn five icons.</span></td><td><span class="say">She had been drawing icons all day.</span></td></tr>
<tr><td><span class="say">I had read the book twice.</span></td><td><span class="say">I had been reading for an hour.</span></td></tr>
</table>
<p>Глаголы состояния (<b>know, have</b> — «иметь», <b>like, want, believe, understand, belong</b> — урок b1-1) в -ing не ставят даже здесь:</p>
<div class="g-bad">We had been knowing each other for years.</div>
<div class="g-good">We <b>had known</b> each other for years.</div>
<ul class="g-list">
<li><span class="say">I was surprised. She'd always had long hair.</span> — Я удивился: у неё всегда были длинные волосы.</li>
<li><span class="say">He'd wanted that job since he was a student.</span> — Он хотел эту работу со студенчества.</li>
</ul>
<p>С отрицанием и сроком обычно берут простую форму: <span class="say">I hadn't played for months.</span> — Я не играл несколько месяцев.</p>
<div class="mini" data-q="By the evening, I ___ 30 bugs." data-o="had fixed|had been fixing|was fixing" data-a="0" data-why="Сколько сделано (30 штук) — результат → had fixed."></div>
<div class="mini" data-q="When we opened the studio, we ___ each other for ten years." data-o="had been knowing|had known|were knowing" data-a="1" data-why="know — глагол состояния, в -ing не ставится → had known."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">When I arrived, the stream has already ended.</div><div class="g-good">When I arrived, the stream <b>had</b> already ended.</div>
<div class="g-bad">Last year I had visited Spain.</div><div class="g-good">Last year I <b>visited</b> Spain. <span class="muted">— просто прошлое, шагать назад не от чего</span></div>
<div class="g-bad">It was the first time I saw the sea.</div><div class="g-good">It was the first time I<b>'d seen</b> the sea.</div>
<div class="g-bad">I realised I forgot my password.</div><div class="g-good">I realised I<b>'d forgotten</b> my password.</div>
<div class="g-bad">We had been knowing him for years.</div><div class="g-good">We <b>had known</b> him for years.</div>
<div class="g-bad">We played for two hours when the server crashed.</div><div class="g-good">We<b>'d been playing</b> for two hours when the server crashed.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Есть момент в прошлом → что было раньше: <b>had + V3</b> (результат) или <b>had been + -ing</b> (долгий процесс); по порядку — просто Past Simple.</div>`
      }
    ],
    words: [
      ['break — broke — broken', 'ломать; взламывать', 'Someone had broken the lock.', 'Кто-то сломал замок.'],
      ['steal — stole — stolen', 'красть', 'I realised someone had stolen my bike.', 'Я понял, что кто-то украл мой велосипед.'],
      ['forget — forgot — forgotten', 'забывать', 'I\'d forgotten my password again.', 'Я опять забыл пароль.'],
      ['leave — left — left', 'оставлять; уходить', 'By the time I came, she had left.', 'К моему приходу она уже ушла.'],
      ['fall asleep — fell asleep — fallen asleep', 'заснуть', 'I had fallen asleep before the film ended.', 'Я заснул до конца фильма.'],
      ['grow — grew — grown', 'расти; отращивать', 'He had grown a beard.', 'Он отрастил бороду.'],
      ['realise', 'осознать, понять', 'I realised I had made a mistake.', 'Я понял, что ошибся.'],
      ['notice', 'заметить', 'Did you notice that he had changed?', 'Ты заметил, что он изменился?'],
      ['discover', 'обнаружить', 'We discovered that the file had disappeared.', 'Мы обнаружили, что файл исчез.'],
      ['turn out', 'оказаться', 'It turned out that he had lied.', 'Оказалось, что он соврал.'],
      ['by the time', 'к тому времени как', 'By the time we arrived, the show had started.', 'К нашему приходу шоу уже началось.'],
      ['as soon as', 'как только', 'As soon as I had saved the game, it crashed.', 'Как только я сохранил игру, она вылетела.'],
      ['apparently', 'как оказалось; судя по всему', 'Apparently, he had been working all night.', 'Судя по всему, он работал всю ночь.'],
      ['suddenly', 'вдруг, внезапно', 'Suddenly I remembered where I\'d seen her.', 'Вдруг я вспомнил, где её видел.'],
      ['disappear', 'исчезнуть', 'My coffee cup had disappeared.', 'Моя кружка исчезла.'],
      ['missing', 'пропавший, недостающий', 'One file was missing.', 'Одного файла не хватало.'],
      ['mystery', 'загадка, тайна', 'The ending was a real mystery.', 'Концовка была настоящей загадкой.'],
      ['clue', 'подсказка, улика', 'The clue had been there from the start.', 'Подсказка была там с самого начала.'],
      ['evidence', 'улики, доказательства', 'The detective had found new evidence.', 'Детектив нашёл новые улики.'],
      ['admit', 'признать, признаться', 'He admitted he had deleted it.', 'Он признался, что удалил это.'],
      ['regret', 'сожалеть', 'I regretted that I hadn\'t made a backup.', 'Я жалел, что не сделал копию.'],
      ['suspect', 'подозревать', 'I\'d suspected him from the start.', 'Я подозревал его с самого начала.'],
      ['exhausted', 'измотанный', 'She was exhausted — she\'d been working since six.', 'Она была без сил — работала с шести.'],
      ['out of breath', 'запыхавшийся', 'He was out of breath because he\'d been running.', 'Он запыхался, потому что бежал.'],
      ['soaked', 'промокший насквозь', 'We were soaked — we\'d been walking in the rain.', 'Мы промокли — гуляли под дождём.'],
      ['stuck', 'застрявший', 'I\'d been stuck on that level for a week.', 'Я уже неделю не мог пройти этот уровень.'],
      ['backup', 'резервная копия', 'Luckily, I had made a backup.', 'К счастью, я сделал резервную копию.'],
      ['delete', 'удалить', 'Somebody had deleted the folder.', 'Кто-то удалил папку.'],
      ['recognise', 'узнать (кого-то)', 'I didn\'t recognise her — she\'d cut her hair.', 'Я её не узнал — она подстриглась.'],
      ['plot twist', 'неожиданный поворот сюжета', 'What a plot twist! He had been the killer all along.', 'Вот это поворот! Он всё время был убийцей.'],
      ['calm down', 'успокоиться', 'By the evening I had calmed down.', 'К вечеру я успокоился.'],
      ['all along', 'всё это время, с самого начала', 'She had known the truth all along.', 'Она с самого начала знала правду.']
    ],
    texts: [
      {
        id: 't-b1-5-1', title: 'The day the file disappeared', level: 'B1',
        text: `Last Friday was one of the strangest days of my life. When I got to the office, I noticed that something was wrong. Somebody had moved my monitor, and my coffee cup had disappeared from the desk. At first I thought the cleaner had done it, but then I realised she hadn't been in for a week.
I turned on my computer and opened the project. My heart stopped. The file was empty. Three weeks of work had vanished. I had been designing that app for a client since the beginning of the month, and I hadn't made a single backup. I had never lost a file before, so I had no idea what to do.
I called Kirill, our developer. He sounded strange. "Did you open my file last night?" I asked. There was a long pause. Then he admitted that he had been working on my computer late in the evening because his laptop had broken down. He had tried to fix a small bug and had accidentally deleted everything.
I was angry, of course. But by the time he arrived at the office, I had calmed down a little. He looked terrible. His eyes were red, and it was clear that he hadn't slept at all. Apparently, he had been searching for a way to restore the file all night.
And then came the plot twist. It turned out that the program had saved an automatic copy every hour. Kirill had found it at six in the morning, but he had been too scared to call me. We opened the copy together. Everything was there, except for one icon that I had drawn on Thursday evening.
That day I learned two lessons. First, always make backups. Second, never let Kirill use your computer.`,
        questions: [
          { q: 'Why had Kirill used the computer?', o: ['His laptop had broken down.', 'He wanted to steal the design.', 'The cleaner had asked him to.'], a: 0 },
          { q: 'What had Kirill been doing all night?', o: ['Playing games.', 'Looking for a way to restore the file.', 'Drawing new icons.'], a: 1 },
          { q: 'What was missing from the automatic copy?', o: ['The whole project.', 'The coffee cup.', 'One icon from Thursday evening.'], a: 2 }
        ]
      },
      {
        id: 't-b1-5-2', title: 'That finale!', level: 'B1',
        text: `Lena: Did you watch the last episode of Northfall last night?
Max: Of course! I couldn't sleep afterwards. I'd been waiting for that finale for two years.
Lena: Me too. So, did you guess who the killer was?
Max: Not at all. I'd suspected the doctor since season one. When they showed her in the lab with the gun, I was sure.
Lena: Same here. But it turned out that she had been trying to save the victim, not kill him.
Max: Exactly. And the detective! I'd liked him from the very first episode. I'd never thought he could be the bad guy.
Lena: I know. When he opened that old box and the camera showed the photos, I suddenly realised he had been lying to everyone all along.
Max: And every clue had been there from the beginning. We just hadn't noticed them.
Lena: My sister had read the book, so she knew the ending. She'd promised not to tell me, and she kept her promise. I was proud of her.
Max: Lucky you. A guy in my Discord had watched a leaked version, and he posted a spoiler before I had even started the episode.
Lena: No way! What did you do?
Max: I'd only seen the first two words of his message, so I closed the app and didn't open it again until I had finished the episode.
Lena: Smart move. So, was it worth the wait?
Max: Absolutely. By the time the credits started, I had changed my mind about every single character.
Lena: Same. Now I want to watch the whole series again and find all the clues we'd missed.
Max: Let's do it together. But this time, no phones!`,
        questions: [
          { q: 'Who did Max suspect before the finale?', o: ['The detective.', 'The doctor.', 'Lena\'s sister.'], a: 1 },
          { q: 'How did Lena\'s sister know the ending?', o: ['She had read the book.', 'She had watched a leaked version.', 'Max had told her.'], a: 0 },
          { q: 'What did Max do when he saw the spoiler?', o: ['He read the whole message.', 'He stopped watching the series.', 'He closed the app.'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'When I logged in, my friends ___ the raid without me.', o: ['started', 'had started', 'have started'], a: 1, why: 'Сначала начали рейд, потом я зашёл → шаг назад: had + V3.' },
      { t: 'choice', q: 'Yesterday I ___ home, cooked pasta and watched two episodes.', o: ['had come', 'came', 'have come'], a: 1, why: 'События идут по порядку → Past Simple, Past Perfect не нужен.' },
      { t: 'choice', q: 'It was the first time I ___ a horror game in VR.', o: ['have played', 'had played', 'played'], a: 1, why: 'После it was the first time ставят Past Perfect.' },
      { t: 'choice', q: 'The streets were wet. It ___ all night.', o: ['was raining', 'has been raining', 'had been raining'], a: 2, why: 'Долгий процесс до момента в прошлом, видны следы → had been -ing.' },
      { t: 'choice', q: 'I was tired because I ___ bugs since the morning.', o: ['had been fixing', 'have been fixing', 'was fixed'], a: 0, why: 'Процесс длился до момента в прошлом (since the morning) → had been -ing.' },
      { t: 'choice', q: 'She\'d ___ the file before I asked. (’d = had)', o: ['send', 'sent', 'sending'], a: 1, why: 'had + 3-я форма: send → sent.' },
      { t: 'choice', q: 'Was Tom at the party when you arrived? — No, he ___.', o: ['already leaves', 'had already left', 'has already left'], a: 1, why: 'Ушёл до нашего прихода → had already left.' },
      { t: 'choice', q: 'We ___ each other for ten years before we started a studio together.', o: ['had been knowing', 'had known', 'have known'], a: 1, why: 'know — глагол состояния, в -ing не ставится → had known.' },
      { t: 'gap', q: 'By the time we arrived, the film ___. (start)', a: ['had started', 'had already started', '\'d started', '\'d already started'], why: 'By the time + прошлое → то, что случилось раньше, — had + V3.' },
      { t: 'gap', q: 'I realised I ___ my charger at home. (leave)', a: ['had left', '\'d left'], why: 'Оставил раньше, чем понял → had + left.' },
      { t: 'gap', q: 'They were nervous: they ___ on a plane before. (never / fly)', a: ['had never flown', '\'d never flown'], why: 'Опыт до момента в прошлом → had never + V3 (fly — flew — flown).' },
      { t: 'gap', q: 'My eyes hurt because I ___ at the screen for hours. (stare)', a: ['had been staring', '\'d been staring'], why: 'Долгий процесс до момента в прошлом + видимый след → had been -ing.' },
      { t: 'gap', q: 'I thought I ___ the file, but I hadn\'t. (save)', a: ['had saved', '\'d saved'], why: 'Думал, что уже сделано раньше → had + V3.' },
      { t: 'gap', q: 'We weren\'t hungry. We ___ a big lunch an hour before. (have)', a: ['had had', '\'d had'], why: 'Past Perfect от have — had had: первое had вспомогательное, второе — сам глагол.' },
      { t: 'order', a: 'I had never seen anything like it', ru: 'Я никогда не видел ничего подобного' },
      { t: 'order', a: 'I realised that I had lost my keys', ru: 'Я понял, что потерял ключи' },
      { t: 'tr', q: 'Когда я пришёл, игра уже закончилась.', a: ['when i came the game had already finished', 'when i came the game had already ended', 'when i arrived the game had already finished', 'when i arrived the game had already ended', 'when i got there the game had already finished', 'when i got there the game had already ended', 'when i came the match had already finished', 'when i arrived the match had already finished', 'when i got there the match had already finished', 'when i came the match had already ended', 'when i arrived the match had already ended', 'when i got there the match had already ended'] },
      { t: 'tr', q: 'Он устал, потому что весь день работал.', a: ['he was tired because he had been working all day', 'he was tired because he\'d been working all day', 'he was tired because he had worked all day', 'he was tired because he\'d worked all day', 'he was tired because he had been working the whole day', 'he was tired because he\'d been working the whole day'] },
      { t: 'listen', say: 'I had no idea what had happened', a: ['i had no idea what had happened', 'i\'d no idea what had happened'] },
      { t: 'listen', say: 'We had been playing for hours', a: ['we had been playing for hours', 'we\'d been playing for hours'] }
    ],
    test: [
      { t: 'choice', q: 'When I called Anna, she ___ to bed, so I called back in the morning.', o: ['went', 'had gone', 'has gone'], a: 1, why: 'Легла ещё до звонка → had gone.' },
      { t: 'choice', q: 'When I called Anna, she ___ the phone immediately.', o: ['answered', 'had answered', 'has answered'], a: 0, why: 'Ответила после звонка — события по порядку → Past Simple.' },
      { t: 'choice', q: 'We weren\'t hungry. We ___.', o: ['have just eaten', 'had just eaten', 'were just eating'], a: 1, why: 'Рассказ в прошлом, «только что» до того момента → had just + V3.' },
      { t: 'choice', q: 'When I saw Lena, her hands were covered in paint. She ___.', o: ['had painted all morning', 'had been painting', 'painted'], a: 1, why: 'Процесс до момента в прошлом и его следы → had been -ing.' },
      { t: 'choice', q: 'How long ___ there before you moved to Moscow?', o: ['have you lived', 'had you lived', 'did you living'], a: 1, why: 'Срок до момента в прошлом (до переезда) → Past Perfect.' },
      { t: 'choice', q: 'I was surprised to see her with short hair. She ___ long hair.', o: ['had always been having', 'had always had', 'has always had'], a: 1, why: 'have в значении «иметь» — глагол состояния → had had, не had been having.' },
      { t: 'gap', q: 'By the time the boss came, we ___ the whole design. (finish)', a: ['had finished', '\'d finished', 'had already finished', '\'d already finished'], why: 'By the time + прошлое → раньше этого момента: had + V3.' },
      { t: 'gap', q: 'The game crashed. I ___ for three hours without saving! (play)', a: ['had been playing', '\'d been playing'], why: 'Долгий процесс до момента в прошлом (for three hours) → had been -ing.' },
      { t: 'gap', q: 'I ___ him for years, so I trusted him. (know)', a: ['had known', '\'d known'], why: 'know не ставится в -ing → had known.' },
      { t: 'gap', q: 'The flat was a mess. Nobody ___ it for weeks. (clean)', a: ['had cleaned'], why: '«Давно не» до момента в прошлом → had + V3 (nobody уже даёт отрицание).' },
      { t: 'gap', q: 'When I got back, I found that someone ___ my coffee. (drink)', a: ['had drunk', '\'d drunk'], why: 'После found that — то, что случилось раньше: had + drunk.' },
      { t: 'gap', q: 'It wasn\'t raining when we left, but it ___, so the road was wet. (rain)', a: ['had been raining', '\'d been raining'], why: 'Дождь шёл раньше и кончился, остался след → had been -ing.' }
    ]
  },

  // ───────────────────────────── UNIT B1-6 ─────────────────────────────
  {
    id: 'b1-6', level: 'B1', num: 6, track: 'main',
    books: { blue: [19, 20, 21, 22, 23] },
    title: 'Будущее: present for future, going to, will',
    summary: 'Научимся выбирать форму будущего по смыслу: договорённость, расписание, решение заранее или прямо сейчас, прогноз по фактам или по мнению, планы, которые не сбылись.',
    grammar: [
      {
        title: '1. Главная идея: важно, КОГДА вы приняли решение',
        html: `
<div class="g-idea">В русском почти любое будущее можно сказать одной формой: «Я ей позвоню». В английском форма зависит от того, <b>когда появилось решение</b> и <b>на чём основан прогноз</b>. Базу вы уже знаете (уроки a2-5 и a2-6) — теперь разберём тонкости.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>— Тебе звонил Гарри. — Да? Я ему <b>позвоню</b>. <span class="muted">(узнал только что)</span></p><p>— Тебе звонил Гарри. — Знаю, я ему <b>позвоню</b>. <span class="muted">(решил раньше)</span></p><p>Я <b>встречаюсь</b> с Катей завтра.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Has he? OK, I<b>'ll call</b> him.</span></p><p><span class="say">Yes, I know. I<b>'m going to call</b> him.</span></p><p><span class="say">I<b>'m meeting</b> Kate tomorrow.</span></p></div>
</div>
<table>
<tr><th>Ситуация</th><th>Форма</th><th>Пример</th></tr>
<tr><td>договорились</td><td><b class="g-v">am/is/are -ing</b></td><td><span class="say">I'm seeing the dentist on Friday.</span></td></tr>
<tr><td>расписание</td><td><b class="g-v">Present Simple</b></td><td><span class="say">The servers open at ten.</span></td></tr>
<tr><td>решил заранее</td><td><b class="g-v">going to</b></td><td><span class="say">I'm going to learn Unity.</span></td></tr>
<tr><td>решаю сейчас</td><td><b class="g-v">will</b></td><td><span class="say">I'll take the blue one.</span></td></tr>
<tr><td>прогноз по фактам</td><td><b class="g-v">going to</b></td><td><span class="say">We're going to lose.</span></td></tr>
<tr><td>прогноз-мнение</td><td><b class="g-v">will</b></td><td><span class="say">I think you'll like it.</span></td></tr>
</table>
<div class="mini" data-q="— The printer isn't working. — Oh, really? I ___ at it." data-o="'ll look|'m going to look|look" data-a="0" data-why="Узнал только сейчас и тут же решил → will."></div>`
      },
      {
        title: '2. Настоящие времена для будущего — тонкости',
        html: `
<p><b>Present Continuous</b> — то, что уже <b>договорено</b> (есть время, люди, билеты). Здесь will звучит неестественно:</p>
<div class="g-bad">What will you do tonight? Alex will get married next month.</div>
<div class="g-good">What <b>are</b> you <b>doing</b> tonight? Alex <b>is getting</b> married next month.</div>
<div class="g-tip">Осторожно: <span class="say">What do you do?</span> — это «Кем ты работаешь?», а не «Что ты делаешь (вечером)?». Про планы — только <span class="say">What are you doing?</span></div>
<p>С глаголами движения -ing значит «вот прямо сейчас собираюсь»:</p>
<ul class="g-list">
<li><span class="say">I'm tired. I'm going to bed.</span> — Я спать. <span class="muted">(не I go to bed)</span></li>
<li><span class="say">Are you ready? — Yes, I'm coming!</span> — Иду! <span class="muted">(не I come)</span></li>
</ul>
<p><b>Present Simple</b> — расписания и программы (транспорт, кино, стримы, релизы):</p>
<ul class="g-list">
<li><span class="say">My train leaves at 6.40.</span> — Мой поезд уходит в 6:40.</li>
<li><span class="say">What time does the match start?</span> — Во сколько начинается матч?</li>
</ul>
<p>Про людей Present Simple можно, если план жёсткий, как расписание: <span class="say">I start my new job on Monday.</span> <span class="say">What time do you finish tomorrow?</span> Но для встреч и договорённостей обычнее -ing: <span class="say">What time are you meeting Kate?</span></p>
<p>Про экзамены, приёмы, уроки говорят просто <b>I have / I've got</b>: <span class="say">I've got an exam next week.</span></p>
<div class="mini" data-q="What ___ on Saturday evening? — I'm meeting some friends." data-o="do you do|are you doing|will you do" data-a="1" data-why="Спрашиваем о договорённостях → Present Continuous."></div>`
      },
      {
        title: '3. going to глубже: намерение, признаки, «собирался»',
        html: `
<p><b>going to</b> = я <b>уже решил</b>. Договорился ли с кем-то — неважно:</p>
<ul class="g-list">
<li><span class="say">Your shoes are dirty. — I know. I'm going to clean them.</span> — Знаю, почищу (решил, но ни с кем не договаривался).</li>
<li><span class="say">I'm just going to reply to this email.</span> — Я только отвечу на письмо (и сразу).</li>
</ul>
<table>
<tr><th>Фраза</th><th>Смысл</th></tr>
<tr><td><span class="say">I don't know what I'm doing tomorrow.</span></td><td>не знаю своих планов на завтра</td></tr>
<tr><td><span class="say">I don't know what I'm going to do.</span></td><td>не решил, как быть</td></tr>
</table>
<p>Часто разница между -ing и going to минимальна — подходят обе.</p>
<p>Прогноз <b>по признакам сейчас</b>: <span class="say">Look at the health bar — he's going to die!</span> <span class="say">I feel awful. I think I'm going to be sick.</span> <span class="say">Prices are going to go up.</span></p>
<p><b>was / were going to</b> — план или ожидание, которые <b>не сбылись</b>:</p>
<ul class="g-list">
<li><span class="say">We were going to fly, but we took the train in the end.</span> — Собирались лететь, но поехали поездом.</li>
<li><span class="say">I was just going to call you!</span> — Я как раз собирался тебе позвонить!</li>
<li><span class="say">I thought it was going to be hard, but it wasn't.</span> — Думал, будет сложно, а нет.</li>
<li><span class="say">Sorry, what were you going to say?</span> — Прости, что ты хотел сказать?</li>
</ul>
<div class="g-tip">В речи, песнях и чатах going to звучит как <b>gonna</b>: <span class="say">I'm gonna win.</span> Понимать надо, но в рабочих письмах пишите полностью.</div>
<div class="mini" data-q="We ___ buy a new sofa, but we spent the money on a trip." data-o="are going to|were going to|will" data-a="1" data-why="План в прошлом, который не состоялся → was/were going to."></div>`
      },
      {
        title: '4. I\'ll — решение, предложение, обещание; won\'t — отказ',
        html: `
<div class="g-idea"><b>I'll</b> объявляет решение, которое родилось <b>в эту секунду</b>. Present Simple тут нельзя.</div>
<div class="g-bad">Oh, I forgot to reply. I reply now.</div>
<div class="g-good">Oh, I forgot to reply. I<b>'ll reply</b> now.</div>
<table>
<tr><th>Зачем</th><th>Пример</th></tr>
<tr><td>решение</td><td><span class="say">I'll have the burger, please.</span></td></tr>
<tr><td>предложить помощь</td><td><span class="say">That box looks heavy. I'll help you.</span></td></tr>
<tr><td>согласиться</td><td><span class="say">Sure, I'll send it to you tonight.</span></td></tr>
<tr><td>пообещать</td><td><span class="say">I'll pay you back on Friday. I won't tell anyone.</span></td></tr>
</table>
<p>Очень частые обёртки: <span class="say">I think I'll order a pizza.</span> <span class="say">I don't think I'll go out tonight.</span> <span class="muted">— отрицание обычно ставят в «think», а не в will.</span></p>
<p><b>won't</b> — ещё и «отказывается», даже про вещи:</p>
<ul class="g-list">
<li><span class="say">I've tried to help, but she won't listen.</span> — Она не хочет слушать.</li>
<li><span class="say">The game won't launch.</span> — Игра никак не запускается.</li>
<li><span class="say">The door won't open.</span> — Дверь не открывается.</li>
</ul>
<p>Но для того, что <b>решено раньше</b>, will не берут: <span class="say">I'm going on holiday on Saturday.</span> <span class="muted">(не I'll go)</span>. Сравните: <span class="say">I'm meeting Kate tomorrow.</span> — договорились раньше; <span class="say">I'll meet you at ten, OK?</span> — договариваемся сейчас.</p>
<div class="mini" data-q="Мой ноутбук не включается (как ни пытаюсь)." data-o="My laptop doesn't turn on.|My laptop won't turn on.|My laptop isn't going to turn on." data-a="1" data-why="won't = «отказывается» что-то делать, даже про технику."></div>`
      },
      {
        title: '5. Will you…? и Shall I…? Shall we…?',
        html: `
<table>
<tr><th>Фраза</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>Will you…?</b></td><td>просьба: сделай, пожалуйста</td><td><span class="say">Will you turn the music down, please?</span></td></tr>
<tr><td><b>Shall I…?</b></td><td>предлагаю: хочешь, я…?</td><td><span class="say">Shall I close the window?</span></td></tr>
<tr><td><b>Shall we…?</b></td><td>предлагаю вместе</td><td><span class="say">Shall we start?</span></td></tr>
<tr><td><b>What / Where shall we…?</b></td><td>спрашиваю совета</td><td><span class="say">Where shall we have lunch?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Shall I shut the door?</span> — Закрыть дверь? (я могу)</li>
<li><span class="say">Will you shut the door?</span> — Закрой дверь. (хочу, чтобы ты)</li>
<li><span class="say">I've lost my passport. What shall I do?</span> — Что мне делать?</li>
</ul>
<p>В утверждениях <b>shall</b> встречается только с <b>I</b> и <b>we</b> — это формально и по-британски; в разговоре все говорят <b>I'll / we'll</b>. Отрицание — <b>shan't</b>.</p>
<ul class="g-list">
<li><span class="say">We shall probably go to Italy in June.</span> = <span class="say">We'll probably go to Italy.</span></li>
<li><span class="say">I shan't be here tomorrow.</span> = <span class="say">I won't be here tomorrow.</span></li>
</ul>
<div class="g-bad">She shall be angry.</div>
<div class="g-good">She <b>will</b> be angry. <span class="muted">— с he, she, they shall в обычной речи не используют</span></div>
<div class="mini" data-q="___ I help you with the bag?" data-o="Will|Shall|Do" data-a="1" data-why="Предлагаем свою помощь: Shall I…?"></div>`
      },
      {
        title: '6. Прогнозы с will: probably, I\'m sure, I wonder, I hope',
        html: `
<p><b>will</b> — то, что мы <b>думаем, знаем или ожидаем</b> о будущем (не план). Он любит слова-спутники:</p>
<ul class="g-list">
<li><span class="say">I'll probably be home late.</span> — Я, наверное, приду поздно.</li>
<li><span class="say">She probably won't come.</span> — Она, скорее всего, не придёт.</li>
<li><span class="say">Don't worry, I'm sure you'll pass.</span> — Уверен, ты сдашь.</li>
<li><span class="say">Do you think they'll like the new logo?</span> — Думаешь, им понравится лого?</li>
<li><span class="say">I wonder what will happen in season two.</span> — Интересно, что будет во втором сезоне.</li>
</ul>
<div class="g-formula"><span class="g-part">will</span><span class="g-plus">+</span><span class="g-part g-v">probably</span><span class="g-sep">·</span><span class="g-part g-v">probably</span><span class="g-plus">+</span><span class="g-part">won't</span></div>
<div class="g-bad">I probably will… / I won't probably…</div>
<div class="g-good">I<b>'ll probably</b>… / I <b>probably won't</b>…</div>
<p>После <b>I hope</b> обычно ставят <b>настоящее</b>, хотя речь о будущем:</p>
<ul class="g-list">
<li><span class="say">I hope it doesn't rain tomorrow.</span> — Надеюсь, завтра не будет дождя.</li>
<li><span class="say">I hope you enjoy the game.</span> — Надеюсь, игра тебе понравится.</li>
</ul>
<div class="g-tip">Форма с will после hope (I hope it won't rain) тоже встречается, но настоящее время звучит естественнее: слово hope само уже «смотрит в будущее».</div>
<p><b>will</b> бывает и про <b>сейчас</b> — как уверенная догадка: <span class="say">Don't call Dima now. He'll be busy.</span> — Он наверняка занят.</p>
<p>Сравните: <span class="say">I think Max is going to the party.</span> — он, по-моему, уже решил. <span class="say">I think Max will go to the party.</span> — по-моему, он решит пойти.</p>
<div class="mini" data-q="Не думаю, что экзамен будет трудным." data-o="I think the exam won't be difficult.|I don't think the exam will be difficult.|I don't think the exam is difficult." data-a="1" data-why="Отрицание ставят в think: I don't think … will."></div>`
      },
      {
        title: '7. will или going to: решение и прогноз',
        html: `
<table>
<tr><th></th><th>will</th><th>going to</th></tr>
<tr><td>решение</td><td>принято <b>сейчас</b></td><td>принято <b>раньше</b></td></tr>
<tr><td>пример</td><td><span class="say">Great idea! We'll invite everyone.</span></td><td><span class="say">We're going to invite everyone — I decided last week.</span></td></tr>
<tr><td>прогноз</td><td>на основе <b>мнения, опыта</b></td><td>на основе <b>фактов сейчас</b></td></tr>
<tr><td>пример</td><td><span class="say">Jane will be late. She's always late.</span></td><td><span class="say">We're going to be late. The meeting starts in five minutes!</span></td></tr>
</table>
<p>Когда прогноз — просто мнение, часто годятся обе формы: <span class="say">I think the weather will be nice.</span> = <span class="say">I think the weather is going to be nice.</span> <span class="say">These boots are good. They'll last for years.</span> = <span class="say">They're going to last for years.</span></p>
<p>А вот если «доказательство» прямо перед глазами — только going to:</p>
<div class="g-bad">Look at those clouds! It will rain.</div>
<div class="g-good">Look at those clouds! It<b>'s going to rain</b>.</div>
<div class="g-steps"><div class="g-h">Как выбрать за 3 секунды</div><ol>
<li>Договорились, есть время/место? → <b>-ing</b>. Расписание? → <b>Present Simple</b>.</li>
<li>Решил раньше или видно по фактам? → <b>going to</b>.</li>
<li>Решаю сейчас, предлагаю, обещаю, просто думаю? → <b>will</b>.</li>
</ol></div>
<div class="mini" data-q="— Anna is in hospital. — Yes, I know. I ___ her this evening." data-o="'ll visit|'m going to visit|visit" data-a="1" data-why="Уже знал и решил раньше → going to (или -ing)."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">What will you do tonight?</div><div class="g-good">What <b>are</b> you <b>doing</b> tonight?</div>
<div class="g-bad">The phone is ringing. I answer.</div><div class="g-good">The phone is ringing. I<b>'ll answer</b> it.</div>
<div class="g-bad">I think I won't go.</div><div class="g-good">I <b>don't think</b> I<b>'ll go</b>.</div>
<div class="g-bad">Alex will get married next month.</div><div class="g-good">Alex <b>is getting</b> married next month. <span class="muted">— уже договорено</span></div>
<div class="g-bad">I won't probably come.</div><div class="g-good">I <b>probably won't</b> come.</div>
<div class="g-bad">Look out! You will fall!</div><div class="g-good">Look out! You<b>'re going to fall</b>!</div>
<div class="g-bad">Will I open the window?</div><div class="g-good"><b>Shall</b> I open the window?</div>
<div class="g-bad">We are going to fly, but we took the train.</div><div class="g-good">We <b>were going to</b> fly, but we took the train.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Договорились — <b>-ing</b>, расписание — <b>Present Simple</b>, решил раньше или видно по фактам — <b>going to</b>, решаю сейчас, обещаю, думаю — <b>will</b>; не сбылось — <b>was going to</b>.</div>`
      }
    ],
    words: [
      ['arrange', 'договориться, организовать', 'We\'ve arranged to meet at seven.', 'Мы договорились встретиться в семь.'],
      ['appointment', 'запись, встреча (к врачу и т. п.)', 'I\'ve got a dentist appointment on Friday.', 'У меня запись к стоматологу в пятницу.'],
      ['book', 'бронировать', 'I\'m going to book a table for eight.', 'Я собираюсь забронировать столик на восьмерых.'],
      ['schedule', 'расписание, график', 'What\'s on your schedule tomorrow?', 'Что у тебя завтра по графику?'],
      ['deadline', 'крайний срок, дедлайн', 'The deadline is on Monday.', 'Дедлайн в понедельник.'],
      ['release', 'выпускать; релиз', 'The game comes out on Friday — the release is at ten.', 'Игра выходит в пятницу, релиз в десять.'],
      ['launch', 'запускать; запуск', 'Our app launches next Tuesday.', 'Наше приложение запускается в следующий вторник.'],
      ['cancel', 'отменить', 'I think they\'ll cancel the match.', 'Думаю, матч отменят.'],
      ['put off', 'откладывать', 'We\'re going to put off the meeting.', 'Мы собираемся перенести встречу.'],
      ['intend', 'намереваться', 'I intend to finish it this week.', 'Я намерен закончить это на этой неделе.'],
      ['expect', 'ожидать', 'I expect it\'ll be busy.', 'Думаю, будет много народу.'],
      ['predict', 'предсказывать', 'Nobody can predict what will happen.', 'Никто не может предсказать, что будет.'],
      ['forecast', 'прогноз', 'The forecast says it\'s going to snow.', 'По прогнозу будет снег.'],
      ['probably', 'наверное, вероятно', 'I\'ll probably be late.', 'Я, наверное, опоздаю.'],
      ['definitely', 'точно, определённо', 'I\'m definitely going to buy it.', 'Я точно это куплю.'],
      ['likely', 'вероятный', 'It\'s likely to rain later.', 'Скорее всего, позже пойдёт дождь.'],
      ['I bet', 'спорим, держу пари', 'I bet he\'ll be late again.', 'Спорим, он опять опоздает.'],
      ['wonder', 'интересоваться, задаваться вопросом', 'I wonder what the ending will be.', 'Интересно, какой будет концовка.'],
      ['hope', 'надеяться', 'I hope the servers don\'t crash.', 'Надеюсь, серверы не упадут.'],
      ['promise', 'обещать; обещание', 'I promise I won\'t tell anyone.', 'Обещаю, никому не скажу.'],
      ['offer', 'предлагать', 'He offered to help: "I\'ll carry it."', 'Он предложил помочь: «Я понесу».'],
      ['refuse', 'отказываться', 'She refused to answer. She won\'t talk to me.', 'Она отказалась отвечать. Она не хочет со мной говорить.'],
      ['agree', 'соглашаться', 'He agreed to send the files tonight.', 'Он согласился прислать файлы сегодня вечером.'],
      ['lend — lent', 'одалживать (кому-то)', 'I\'ll lend you my old laptop.', 'Я одолжу тебе свой старый ноутбук.'],
      ['look forward to', 'с нетерпением ждать', 'I\'m looking forward to the weekend.', 'Жду не дождусь выходных.'],
      ['catch up', 'встретиться и поболтать; наверстать', 'Shall we catch up next week?', 'Может, встретимся на следующей неделе?'],
      ['set up', 'настроить, организовать', 'I\'ll set up a channel for us.', 'Я создам для нас канал.'],
      ['run out of', 'закончиться (о запасе)', 'We\'re going to run out of time.', 'Нам не хватит времени.'],
      ['turn down', 'сделать тише; отклонить', 'Will you turn it down, please?', 'Сделай, пожалуйста, потише.'],
      ['take a day off', 'взять выходной', 'I was going to take a day off, but I couldn\'t.', 'Я собирался взять выходной, но не смог.'],
      ['celebrate', 'праздновать', 'We\'re going to celebrate on Tuesday.', 'Мы будем праздновать во вторник.'],
      ['on time', 'вовремя', 'Do you think we\'ll finish on time?', 'Думаешь, мы закончим вовремя?']
    ],
    texts: [
      {
        id: 't-b1-6-1', title: 'Game night', level: 'B1',
        text: `Anna: Hey, what are you doing on Saturday?
Dan: Nothing much in the morning. I'm meeting my brother for lunch, but I'm free after three. Why?
Anna: You know Starfall Legends comes out on Friday, right? The servers open at ten p.m.
Dan: Of course. I've pre-ordered it. I'm going to play all weekend.
Anna: Great. Oleg and I are going to start a new guild. Shall we all play together on Saturday evening?
Dan: Sure. What time shall we start?
Anna: Let's say seven. Oleg's train gets in at six, so he'll probably be home by seven.
Dan: OK. Oh wait, there's a problem. My laptop won't start. It's been dead since yesterday.
Anna: Oh no. I'll lend you my old one if you want. It's not great, but it'll run the game.
Dan: Really? Thanks! I'll give it back on Monday, I promise.
Anna: No problem. I'll bring it tomorrow. I'm going past your place anyway — I've got a dentist appointment near your house.
Dan: Perfect. Do you think the servers will crash on the first day?
Anna: Definitely. They always do. I'm sure it'll be total chaos. I just hope it doesn't last long.
Dan: By the way, I was going to take Monday off, but my boss said no. We've got a big presentation.
Anna: Ha! Then you're going to be very tired on Monday.
Dan: I know. I don't think I'll sleep much this weekend.
Anna: What are you going to play, by the way? A healer?
Dan: No, I think I'll try a tank this time. Something new.
Anna: Good choice. OK, I'll set up a Discord channel for us tonight. See you on Saturday!
Dan: See you! And thanks again for the laptop.`,
        questions: [
          { q: 'What is Dan doing on Saturday at lunchtime?', o: ['He\'s playing Starfall Legends.', 'He\'s meeting his brother.', 'He\'s going to the dentist.'], a: 1 },
          { q: 'Why does Anna offer her old laptop?', o: ['Dan\'s laptop won\'t start.', 'Dan wants a second laptop.', 'Her new laptop is broken.'], a: 0 },
          { q: 'What did Dan plan to do on Monday?', o: ['Play all day.', 'Give a presentation at home.', 'Take a day off.'], a: 2 }
        ]
      },
      {
        id: 't-b1-6-2', title: 'Launch week', level: 'B1',
        text: `Next Tuesday is a big day for our team: our app goes live at nine a.m. We have been working on it for eight months, and now everything is almost ready.
The plan is simple. On Monday we're having a final meeting with the client, and on Tuesday morning the marketing team is sending out the press release. I'm going to spend the weekend checking every screen one last time. My manager says I'm crazy, but I know myself: if I don't check, I won't sleep.
Everyone in the team has predictions. Pavel, our developer, thinks the servers will crash in the first hour. "Too many people will try to log in at once," he says. Maria, our project manager, is more optimistic. "I'm sure it'll be fine. We've tested everything twice." I don't think the launch will be perfect, but I hope nobody finds a serious bug on the first day.
Honestly, some things are already going wrong. The icons for the settings page still aren't finished, and the client has just sent a new list of changes. Look at the number of messages in the chat — it's going to be a long week.
A month ago we were going to launch before the summer, but the client decided to change the design of the main screen, so we put off the release. I thought it was going to be a disaster, but the new design is much better, and I'm glad we waited.
What will happen after the launch? Nobody knows. Maybe the app will become popular, maybe nobody will notice it at all. I wonder what the first reviews will say. But one thing is certain: on Tuesday evening we're going to a restaurant to celebrate. The table is booked for eight. Pavel has promised that he won't talk about work there. I bet he will.`,
        questions: [
          { q: 'What is the writer going to do at the weekend?', o: ['Check every screen again.', 'Go to a restaurant.', 'Meet the client.'], a: 0 },
          { q: 'What does Pavel predict?', o: ['The launch will be perfect.', 'The servers will crash.', 'Nobody will notice the app.'], a: 1 },
          { q: 'Why didn\'t they launch before the summer?', o: ['Pavel was ill.', 'The servers weren\'t ready.', 'The client changed the main screen design.'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'What ___ tonight? Do you want to play something?', o: ['will you do', 'are you doing', 'do you do'], a: 1, why: 'Спрашиваем о планах на вечер → Present Continuous; What do you do? — это про работу.' },
      { t: 'choice', q: 'My flight ___ at 6.40 tomorrow morning, so I need to get up early.', o: ['leaves', 'will leave', 'is going to leaving'], a: 0, why: 'Расписание транспорта → Present Simple.' },
      { t: 'choice', q: '— We haven\'t got any milk. — Really? I ___ some on my way home.', o: ['buy', '\'ll buy', '\'m buying'], a: 1, why: 'Решение родилось прямо сейчас → will.' },
      { t: 'choice', q: '— Why are you buying paint? — I ___ my room this weekend.', o: ['\'ll paint', '\'m going to paint', 'paint'], a: 1, why: 'Решил заранее, покупка краски — часть плана → going to.' },
      { t: 'choice', q: 'Look at his health bar! He ___.', o: ['will die', 'is going to die', 'dies'], a: 1, why: 'Прогноз по тому, что видно сейчас → going to.' },
      { t: 'choice', q: 'Как естественнее сказать про завтрашний дождь?', o: ['I hope it doesn\'t rain tomorrow.', 'I hope it shan\'t rain tomorrow.', 'I hope it isn\'t raining tomorrow.'], a: 0, why: 'После I hope про будущее обычно ставят Present Simple.' },
      { t: 'choice', q: '___ I open the window? It\'s hot in here.', o: ['Will', 'Shall', 'Do'], a: 1, why: 'Предлагаем что-то сделать сами → Shall I…?' },
      { t: 'choice', q: 'We ___ to fly, but the tickets were too expensive.', o: ['were going', 'are going', 'will go'], a: 0, why: 'План в прошлом, который не состоялся → was/were going to.' },
      { t: 'gap', q: 'Thanks for the money! I ___ you back on Friday, I promise. (pay)', a: ['will pay', '\'ll pay'], why: 'Обещание → will.' },
      { t: 'gap', q: 'I\'ve tried to help him, but he ___ listen. (отказывается)', a: ['won\'t', 'will not'], why: 'won\'t = «не хочет, отказывается».' },
      { t: 'gap', q: 'I don\'t think I ___ out tonight. I\'m too tired. (go)', a: ['will go', '\'ll go'], why: 'I don\'t think + will: отрицание стоит в think.' },
      { t: 'gap', q: 'Don\'t call Dima now. He ___ busy with the release. (be; уверенная догадка)', a: ['will be', '\'ll be'], why: 'will бывает и про «сейчас» — уверенная догадка.' },
      { t: 'gap', q: 'I ___ my new job on Monday. (start; план жёсткий, как расписание)', a: ['start', 'am starting', '\'m starting'], why: 'Жёсткий личный план → Present Simple (или -ing).' },
      { t: 'gap', q: 'I\'m sure you ___ the exam. Don\'t worry. (pass)', a: ['will pass', '\'ll pass'], why: 'I\'m sure + will: прогноз-мнение.' },
      { t: 'order', a: 'What time are you meeting Kate', ru: 'Во сколько ты встречаешься с Катей?' },
      { t: 'order', a: 'I don\'t think it will be difficult', ru: 'Не думаю, что это будет сложно' },
      { t: 'tr', q: 'Я помогу тебе с сумкой.', a: ['i\'ll help you with the bag', 'i will help you with the bag', 'i\'ll help you with your bag', 'i will help you with your bag'] },
      { t: 'tr', q: 'Что мне делать? (прошу совета)', a: ['what shall i do', 'what should i do', 'what do i do'] },
      { t: 'listen', say: 'Are you going to watch the stream tonight?', a: ['are you going to watch the stream tonight'] },
      { t: 'listen', say: 'The car won\'t start', a: ['the car won\'t start', 'the car will not start'] }
    ],
    test: [
      { t: 'choice', q: 'Alex ___ married next month. It\'s all arranged.', o: ['will get', 'is getting', 'gets'], a: 1, why: 'Договорённость → Present Continuous, не will.' },
      { t: 'choice', q: '— Gary has been trying to call you. — Yes, I know. I ___ him after lunch.', o: ['\'ll call', '\'m going to call', 'call'], a: 1, why: 'Уже знал и решил заранее → going to.' },
      { t: 'choice', q: '— Gary has been trying to call you. — Has he? OK, I ___ him now.', o: ['\'ll call', '\'m going to call', 'call'], a: 0, why: 'Узнал только что и решил сейчас → will.' },
      { t: 'choice', q: 'We ___ late! The meeting starts in five minutes and the office is twenty minutes away.', o: ['will be', 'are going to be', 'shall be'], a: 1, why: 'Прогноз по фактам, которые видны сейчас → going to.' },
      { t: 'choice', q: 'Jane ___ late again, I\'m sure. She\'s always late.', o: ['will be', 'is being', 'is going to being'], a: 0, why: 'Прогноз на основе того, что мы знаем о человеке → will.' },
      { t: 'choice', q: '___ you please turn the music down? I\'m working.', o: ['Shall', 'Will', 'Are'], a: 1, why: 'Просьба к другому человеку → Will you…?' },
      { t: 'gap', q: 'I ___ tomorrow, so we can go out somewhere. (not work; уже договорился)', a: ['\'m not working', 'am not working'], why: 'Договорённость на будущее → Present Continuous.' },
      { t: 'gap', q: '— Tina, are you ready? — Yes, I ___! (come)', a: ['\'m coming', 'am coming'], why: 'Глагол движения «прямо сейчас выхожу» → -ing, не I come.' },
      { t: 'gap', q: 'I ___ tell anyone what happened. I promise. (не буду)', a: ['won\'t', 'will not'], why: 'Обещание в отрицании → won\'t.' },
      { t: 'gap', q: 'I thought the exam ___ hard, but it was easy. (be; ожидание не сбылось)', a: ['was going to be', 'would be'], why: 'Ожидание в прошлом, которое не сбылось → was going to.' },
      { t: 'gap', q: 'Max ___ come to the party — he\'s got a deadline. (probably / will not)', a: ['probably won\'t', 'probably will not'], why: 'В отрицании probably стоит перед won\'t: probably won\'t.' },
      { t: 'gap', q: 'I ___ be here tomorrow. (не буду; формально, с shall)', a: ['shan\'t', 'shall not'], why: 'Отрицание shall — shan\'t; только с I и we.' }
    ]
  }
);
