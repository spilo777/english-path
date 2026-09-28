// Времена, часть 2: Future Simple (will), be going to, Present Perfect, Present Perfect Continuous.
window.TENSES = (window.TENSES || []).concat([
  {
    id: 'future-simple',
    name: 'Future Simple — will',
    ru: 'Будущее простое',
    time: 'future',
    aspect: 'simple',
    level: 'A2',
    freq: 5,
    one: 'Решил сейчас, обещаю, думаю',
    formula: {
      plus: "I / you / she / they <b>will work</b> · коротко: I<b>'ll work</b>",
      minus: "I <b>won't work</b> <span class=\"muted\">(= will not)</span>",
      q: '<b>Will</b> you <b>work</b>? · <b>Will</b> she <b>work</b>?'
    },
    markers: ['tomorrow', 'next week', 'I think', 'I\'m sure', 'probably', 'maybe', 'soon'],
    compare: ['going-to', 'present-continuous'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea"><b>will</b> — это будущее, которое <b>не спланировано заранее</b>: решил прямо сейчас, пообещал, предложил помощь или просто думаю, что так будет. Русское «сделаю», «помогу», «наверное, выиграют».</div>
<ul class="g-list">
<li><b>Решение прямо сейчас</b> (секунду назад не думал об этом):</li>
<li><span class="say">The phone is ringing. — I'll answer it.</span> — Телефон звонит. — Я отвечу.</li>
<li><span class="say">It's cold. I'll close the window.</span> — Холодно. Закрою окно.</li>
<li><b>Обещание, предложение, просьба:</b></li>
<li><span class="say">I'll send you the file tonight.</span> — Скину тебе файл вечером.</li>
<li><span class="say">I'll help you with this level.</span> — Помогу тебе с этим уровнем.</li>
<li><span class="say">Will you help me, please?</span> — Поможешь мне, пожалуйста?</li>
<li><b>Мнение о будущем</b> (думаю, наверное, уверен):</li>
<li><span class="say">I think it will be a great game.</span> — Думаю, это будет классная игра.</li>
<li><span class="say">Maybe she'll come later.</span> — Может, она придёт позже.</li>
</ul>
<h3>2. Как строится</h3>
<div class="g-idea">Самое простое время в английском: <b>will</b> одно для всех, глагол — в начальной форме, никаких -s.</div>
<table>
<tr><th></th><th>Форма</th><th>Пример</th></tr>
<tr><td><b>+</b></td><td>will + глагол</td><td><span class="say">She will win.</span></td></tr>
<tr><td><b>−</b></td><td>won't + глагол</td><td><span class="say">She won't win.</span></td></tr>
<tr><td><b>?</b></td><td>Will + кто + глагол</td><td><span class="say">Will she win?</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">will / won't</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<p>Сокращения: I will → <b>I'll</b>, she will → <b>she'll</b>, will not → <b>won't</b> (звучит как «уоунт»).</p>
<div class="g-bad">She will wins.</div><div class="g-good">She will <b>win</b>. <span class="muted">— после will никаких -s</span></div>
<div class="g-bad">I will to call you.</div><div class="g-good">I will <b>call</b> you. <span class="muted">— после will нет to</span></div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>I think / I'm sure / probably / maybe</b> — <span class="say">I'm sure you'll like it.</span> — Уверен, тебе понравится.</li>
<li><b>tomorrow / next week / soon</b> — <span class="say">The update will be out soon.</span> — Обновление скоро выйдет.</li>
<li><b>I promise</b> — <span class="say">I promise I won't be late.</span> — Обещаю, не опоздаю.</li>
</ul>
<p class="muted">Важно: tomorrow и next week бывают и у going to, и у Present Continuous. Главное — не слово, а ситуация: план или решение сейчас?</p>
<h3>4. Не путать с going to и Present Continuous</h3>
<div class="g-compare">
<div><div class="g-h">will</div><p>Решил <b>сейчас</b>, обещаю, думаю.</p><p><span class="say">— We have no milk. — Oh, I'll buy some.</span></p><p class="muted">Только что решил.</p></div>
<div><div class="g-h">be going to</div><p><b>План</b> (решил раньше) или вижу признаки.</p><p><span class="say">I'm going to buy milk after work.</span></p><p class="muted">Решил ещё утром.</p></div>
</div>
<div class="g-compare">
<div><div class="g-h">will</div><p>Просто мысль о будущем.</p><p><span class="say">I think I'll see Anna next week.</span></p></div>
<div><div class="g-h">Present Continuous</div><p><b>Договорились</b>: время, место, билеты.</p><p><span class="say">I'm meeting Anna on Friday at 7.</span></p></div>
</div>
<div class="g-bad">— The door is open. — Ok, I close it.</div><div class="g-good">— Ok, I<b>'ll close</b> it. <span class="muted">— по-русски «закрою» звучит как настоящее, но это будущее</span></div>
<div class="g-bad">I will meet my friends tonight, we booked a table.</div><div class="g-good">I<b>'m meeting</b> my friends tonight. <span class="muted">— уже договорились → Present Continuous</span></div>
<div class="g-bad">Will you to come?</div><div class="g-good"><b>Will</b> you <b>come</b>?</div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">Don't worry, I'll cover you!</span> — Не бойся, я прикрою! <span class="muted">(напарник в шутере)</span></li>
<li><span class="say">Bring me the sword, and I'll show you the way.</span> — Принеси меч — и я покажу путь. <span class="muted">(NPC даёт квест)</span></li>
<li><span class="say">I'll be back in five, don't start without me.</span> — Вернусь через пять минут, без меня не начинайте. <span class="muted">(чат)</span></li>
<li><span class="say">You'll regret this!</span> — Ты об этом пожалеешь! <span class="muted">(злодей в кат-сцене)</span></li>
</ul>
<div class="g-tip">will = «<b>ну ладно, сделаю!</b>». Представьте, как рука сама тянется помочь: решение рождается прямо в момент разговора. Был план заранее — это уже going to.</div>
<div class="mini" data-q="— I can't open this jar. — Give it to me, I ___ it." data-o="am going to open|will open|open" data-a="1" data-why="Решил помочь прямо сейчас → will."></div>
<div class="mini" data-q="I think the new season ___ better." data-o="will be|is being|be" data-a="0" data-why="I think — мнение о будущем → will be."></div>`,
    ex: [
      { q: "The phone is ringing. — OK, I ___ it!", v: "answer", o: ["will answer", "am going to answer", "answer"], a: 0, why: "Решение в момент речи → will. going to — если бы решил заранее." },
      { q: "I think Real Madrid ___ the match tomorrow.", v: "win", o: ["is winning", "wins", "will win"], a: 2, why: "I think — мнение о будущем → will. Present Continuous — для договорённостей, а не мнений." },
      { q: "Don't worry, I ___ anyone your secret.", v: "not tell", o: ["won't tell", "am not telling", "don't tell"], a: 0, why: "Обещание → won't (will not)." },
      { q: "___ help me with this boss fight, please? It's too hard.", v: "", o: ["Do you", "Will you", "Are you helping"], a: 1, why: "Просьба о будущем → Will you…? Do you — про привычки." },
      { q: "Maybe the new season ___ better.", v: "be", o: ["is being", "will be", "is"], a: 1, why: "Maybe — предположение о будущем → will be." },
      { q: "I promise I ___ the design by Friday.", v: "finish", o: ["finish", "am finishing", "will finish"], a: 2, why: "I promise — обещание → will." },
      { q: "In 2050 people probably ___ cars themselves.", v: "not drive", o: ["won't drive", "aren't driving", "don't drive"], a: 0, why: "probably + далёкое будущее, прогноз-мнение → won't." },
      { q: "Wow, this bag is heavy! — Give it to me, I ___ it.", v: "carry", o: ["am carrying", "carry", "will carry"], a: 2, why: "Предложение помощи, решил сейчас → will." },
      { q: "Do you think Anna ___ the job?", v: "get", o: ["is getting", "will get", "gets"], a: 1, why: "Do you think — спрашиваем мнение о будущем → will." },
      { q: "I'm hungry. — Wait, I ___ you a sandwich.", v: "make", o: ["will make", "make", "am making"], a: 0, why: "Предложение, решение в моменте → will." },
      { q: "I'm too tired. I probably ___ online tonight.", v: "not be", o: ["am not being", "don't be", "won't be"], a: 2, why: "probably — предположение → won't be." },
      { q: "He's sure the update ___ all the bugs.", v: "fix", o: ["fixes", "will fix", "is fixing"], a: 1, why: "He's sure — уверенность насчёт будущего → will." },
      { q: "Can you send me the file? — Sure, I ___ it in five minutes.", v: "send", o: ["send", "will send", "sent"], a: 1, why: "Согласие на просьбу, обещание → will." },
      { q: "I'm sure you ___ this level. You're a good player!", v: "pass", o: ["are passing", "pass", "will pass"], a: 2, why: "I'm sure — мнение о будущем → will." }
    ]
  },
  {
    id: 'going-to',
    name: 'Be going to',
    ru: 'Собираюсь / план',
    time: 'future',
    aspect: 'going-to',
    level: 'A2',
    freq: 5,
    one: 'План заранее, видно по признакам',
    formula: {
      plus: "I <b>am going to work</b> · she <b>is going to work</b> · they<b>'re going to work</b>",
      minus: "I<b>'m not going to work</b> · he <b>isn't going to work</b>",
      q: '<b>Are</b> you <b>going to work</b>? · <b>Is</b> she <b>going to work</b>?'
    },
    markers: ['tonight', 'this weekend', 'next year', "I've decided", 'Look!', 'Careful!'],
    compare: ['future-simple', 'present-continuous'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea"><b>be going to</b> — это русское «<b>собираюсь</b>». Решение уже принято <b>раньше</b>, до разговора. А ещё — когда <b>видно</b>, что сейчас что-то случится.</div>
<ul class="g-list">
<li><b>План, намерение</b> (решил заранее):</li>
<li><span class="say">I'm going to learn Spanish next year.</span> — В следующем году собираюсь учить испанский.</li>
<li><span class="say">We're going to paint the kitchen this weekend.</span> — На выходных будем красить кухню.</li>
<li><span class="say">What are you going to do tonight?</span> — Что собираешься делать вечером?</li>
<li><b>Видно по признакам</b> — вот-вот случится:</li>
<li><span class="say">Look at those clouds! It's going to rain.</span> — Смотри, какие тучи! Сейчас пойдёт дождь.</li>
<li><span class="say">Careful! You're going to fall!</span> — Осторожно! Сейчас упадёшь!</li>
</ul>
<h3>2. Как строится</h3>
<div class="g-idea">Это наш старый знакомый <b>am / is / are</b> + going to + глагол. Меняется только am / is / are.</div>
<table>
<tr><th></th><th>Форма</th><th>Пример</th></tr>
<tr><td><b>+</b></td><td>am/is/are going to + глагол</td><td><span class="say">He's going to quit.</span></td></tr>
<tr><td><b>−</b></td><td>am/is/are not going to</td><td><span class="say">He isn't going to quit.</span></td></tr>
<tr><td><b>?</b></td><td>Am/Is/Are + кто + going to</td><td><span class="say">Is he going to quit?</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part">going to</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<div class="g-bad">I going to buy it.</div><div class="g-good">I <b>am</b> going to buy it. <span class="muted">— am/is/are нельзя терять</span></div>
<div class="g-bad">She is going to buys it.</div><div class="g-good">She is going to <b>buy</b> it. <span class="muted">— после to глагол без -s</span></div>
<p>В разговоре и в чатах часто говорят <b>gonna</b>: <span class="say">I'm gonna play tonight.</span> Понимать надо, писать в официальном письме — нет.</p>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>I've decided / I want to / my plan is</b> — <span class="say">I've decided. I'm going to buy a new PC.</span></li>
<li><b>Look! / Careful! / Oh no!</b> + признак — <span class="say">Oh no, the battery is at 1%. It's going to die.</span> — Батарея сядет.</li>
<li><b>tonight / this weekend / next year</b> — <span class="say">She's going to visit her parents this weekend.</span></li>
</ul>
<h3>4. Не путать с will и Present Continuous</h3>
<div class="g-compare">
<div><div class="g-h">be going to</div><p>Решил <b>раньше</b>.</p><p><span class="say">I'm going to call Max tonight.</span></p><p class="muted">План с утра.</p></div>
<div><div class="g-h">will</div><p>Решил <b>сейчас</b>.</p><p><span class="say">Max? OK, I'll call him.</span></p><p class="muted">Только что вспомнил.</p></div>
</div>
<div class="g-compare">
<div><div class="g-h">be going to</div><p>Прогноз по <b>признакам</b>.</p><p><span class="say">Look, he's going to score!</span></p></div>
<div><div class="g-h">will</div><p>Прогноз — просто <b>мнение</b>.</p><p><span class="say">I think he'll score today.</span></p></div>
</div>
<div class="g-compare">
<div><div class="g-h">be going to</div><p>Намерение: хочу и собираюсь.</p><p><span class="say">I'm going to see a doctor.</span></p></div>
<div><div class="g-h">Present Continuous</div><p>Уже <b>договорился</b>: есть время, место.</p><p><span class="say">I'm seeing the doctor at 10.</span></p></div>
</div>
<div class="g-bad">Look at the sky! It will rain.</div><div class="g-good">Look at the sky! It<b>'s going to</b> rain. <span class="muted">— видим тучи → going to</span></div>
<div class="g-bad">— The printer is broken. — I'm going to fix it! <span class="muted">(только что узнал)</span></div><div class="g-good">— I<b>'ll</b> fix it! <span class="muted">— решил в моменте → will</span></div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">The bridge is going to collapse — run!</span> — Мост сейчас рухнет — бежим! <span class="muted">(кат-сцена)</span></li>
<li><span class="say">We're gonna need a bigger team for this raid.</span> — Для этого рейда нам понадобится команда побольше. <span class="muted">(чат)</span></li>
<li><span class="say">What are you going to do with the artifact?</span> — Что ты собираешься делать с артефактом? <span class="muted">(NPC)</span></li>
<li><span class="say">I'm not going to lie, that was scary.</span> — Не буду врать, было страшно. <span class="muted">(сериал)</span></li>
</ul>
<div class="g-tip">going to — «уже <b>иду</b> к цели»: решение принято, человек уже в пути. Видишь тучи — дождь тоже «уже в пути».</div>
<div class="mini" data-q="She's saving money. She ___ a new laptop." data-o="will buy|is going to buy|buys" data-a="1" data-why="Копит деньги — план есть заранее → going to."></div>
<div class="mini" data-q="Careful! That glass ___!" data-o="is going to fall|will fall|falls" data-a="0" data-why="Видно, что сейчас упадёт — признак → going to."></div>`,
    ex: [
      { q: "I've decided. I ___ Spanish next year.", v: "learn", o: ["will learn", "am going to learn", "learn"], a: 1, why: "I've decided — решение принято заранее → going to. will — если бы решил только что." },
      { q: "Look at those black clouds! It ___.", v: "rain", o: ["will rain", "rains", "is going to rain"], a: 2, why: "Видим тучи — прогноз по признакам → going to. will — просто мнение без признаков." },
      { q: "She ___ a new laptop — she's saving money for it.", v: "buy", o: ["is going to buy", "will buy", "buys"], a: 0, why: "Копит деньги — план заранее → going to." },
      { q: "Why do you have all this paint? — I ___ my room.", v: "paint", o: ["will paint", "paint", "am going to paint"], a: 2, why: "Краску купил заранее — это план → going to." },
      { q: "Careful! That glass ___!", v: "fall", o: ["falls", "is going to fall", "will fall"], a: 1, why: "Видно, что сейчас упадёт → going to." },
      { q: "What ___ after work tonight? Do you have a plan?", v: "do", o: ["will you do", "are you going to do", "do you do"], a: 1, why: "Спрашиваем про план → going to. do you do — про привычки." },
      { q: "I ___ that game. Everybody says it's boring.", v: "not buy", o: ["am not going to buy", "didn't buy", "don't buy"], a: 0, why: "Решение уже принято (все говорят, что скучная) → not going to." },
      { q: "The score is 0:3 and there are two minutes left. We ___!", v: "lose", o: ["lose", "lost", "are going to lose"], a: 2, why: "Счёт и время — явные признаки → going to." },
      { q: "Tom ___ his job. He told me yesterday.", v: "quit", o: ["is going to quit", "quits", "quit"], a: 0, why: "Решил раньше и рассказал — намерение → going to." },
      { q: "Any plans for the weekend? ___ visit your parents?", v: "", o: ["Do you", "Are you going to", "Did you"], a: 1, why: "Спрашиваем про план на выходные → Are you going to…?" },
      { q: "She's very tired. She ___ asleep in a minute.", v: "fall", o: ["falls", "fell", "is going to fall"], a: 2, why: "Видно по признакам (очень устала) → going to." },
      { q: "My friends ___ a stream tonight — they wrote it in the chat.", v: "start", o: ["start", "are going to start", "started"], a: 1, why: "План, о котором уже объявили → going to." },
      { q: "My plan for Monday: I ___ all the icons in the UI kit.", v: "update", o: ["am going to update", "update", "updated"], a: 0, why: "My plan — план → going to." },
      { q: "They ___ married! Anna showed me the ring.", v: "get", o: ["get", "got", "are going to get"], a: 2, why: "Кольцо — признак и решение уже принято → going to." }
    ]
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    ru: 'Настоящее совершённое',
    time: 'present',
    aspect: 'perfect',
    level: 'A2',
    freq: 5,
    one: 'Сделал — и результат сейчас',
    formula: {
      plus: "I / you / we / they <b>have worked</b> · she <b>has worked</b> · I<b>'ve</b> / she<b>'s</b>",
      minus: "I <b>haven't worked</b> · she <b>hasn't worked</b>",
      q: '<b>Have</b> you <b>worked</b>? · <b>Has</b> she <b>worked</b>?'
    },
    markers: ['just', 'already', 'yet', 'ever', 'never', 'since', 'for', 'this week', 'so far'],
    compare: ['past-simple'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Действие было в прошлом, но нам важно <b>сейчас</b>: результат, опыт «в жизни». <b>Когда именно</b> — неважно или не сказано. По-русски это обычно «уже сделал», «когда-нибудь был», «ещё не видел».</div>
<ul class="g-list">
<li><b>Результат сейчас:</b></li>
<li><span class="say">I've lost my keys.</span> — Я потерял ключи. <span class="muted">(и сейчас их нет)</span></li>
<li><span class="say">She has finished the design.</span> — Она закончила макет. <span class="muted">(вот он, готов)</span></li>
<li><b>Опыт — хоть раз в жизни:</b></li>
<li><span class="say">Have you ever been to London?</span> — Ты когда-нибудь был в Лондоне?</li>
<li><span class="say">I've never played Dark Souls.</span> — Я ни разу не играл в Dark Souls.</li>
<li><b>С какого-то момента и до сих пор</b> (since / for):</li>
<li><span class="say">I've known Max for ten years.</span> — Я знаю Макса десять лет.</li>
<li><span class="say">They have lived here since 2020.</span> — Они живут здесь с 2020 года.</li>
</ul>
<h3>2. Как строится</h3>
<div class="g-idea">have / has + <b>третья форма глагола</b> (V3). has — только для he / she / it.</div>
<table>
<tr><th></th><th>Форма</th><th>Пример</th></tr>
<tr><td><b>+</b></td><td>have / has + V3</td><td><span class="say">He has won.</span></td></tr>
<tr><td><b>−</b></td><td>haven't / hasn't + V3</td><td><span class="say">He hasn't won.</span></td></tr>
<tr><td><b>?</b></td><td>Have / Has + кто + V3</td><td><span class="say">Has he won?</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">have / has</span><span class="g-plus">+</span><span class="g-part">V3</span></div>
<p><b>V3</b> у правильных глаголов = +ed: work → <b>worked</b>, play → <b>played</b>. Неправильные надо выучить (третья колонка таблицы):</p>
<table>
<tr><th>Глагол</th><th>V2 (прошлое)</th><th>V3</th></tr>
<tr><td>go</td><td>went</td><td><b>gone / been</b></td></tr>
<tr><td>see</td><td>saw</td><td><b>seen</b></td></tr>
<tr><td>do</td><td>did</td><td><b>done</b></td></tr>
<tr><td>eat</td><td>ate</td><td><b>eaten</b></td></tr>
<tr><td>break</td><td>broke</td><td><b>broken</b></td></tr>
<tr><td>make / buy / lose</td><td>made / bought / lost</td><td><b>made / bought / lost</b></td></tr>
</table>
<p>Сокращения: I have → <b>I've</b>, she has → <b>she's</b> (не путать с she is — смотрите на V3 после него).</p>
<div class="g-bad">She have finished.</div><div class="g-good">She <b>has</b> finished.</div>
<div class="g-bad">I have saw this film.</div><div class="g-good">I have <b>seen</b> this film. <span class="muted">— после have только V3</span></div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>just</b> — только что: <span class="say">I've just woken up.</span> — Я только что проснулся.</li>
<li><b>already</b> — уже: <span class="say">We've already seen this episode.</span> — Мы уже видели эту серию.</li>
<li><b>yet</b> — ещё (в отрицании) / уже (в вопросе), в конце фразы: <span class="say">I haven't finished yet.</span> <span class="say">Have you finished yet?</span></li>
<li><b>ever / never</b> — когда-нибудь / никогда: <span class="say">Have you ever tried sushi?</span></li>
<li><b>since</b> + точка (since Monday, since 2019) · <b>for</b> + отрезок (for two hours, for years).</li>
<li><b>this week / today / so far</b> — период ещё не закончился: <span class="say">I've drunk three coffees today.</span></li>
</ul>
<h3>4. Не путать с Past Simple — главная боль</h3>
<div class="g-idea">По-русски «я сделал» — одна форма. В английском их две. Вопрос один: <b>названо ли время в прошлом</b>, которое уже закончилось?</div>
<div class="g-compare">
<div><div class="g-h">Present Perfect</div><p>Время <b>не названо</b>, важен результат.</p><p><span class="say">I've done my homework.</span></p><p class="muted">Уже сделал — можно гулять.</p><p><span class="say">Have you seen Anna?</span></p><p class="muted">Хоть раз / в последнее время.</p></div>
<div><div class="g-h">Past Simple</div><p>Время <b>названо</b> или понятно: вчера, в 2020, ago, when?</p><p><span class="say">I did my homework yesterday.</span></p><p class="muted">Вчера сделал — история.</p><p><span class="say">When did you see Anna?</span></p><p class="muted">When — всегда Past Simple.</p></div>
</div>
<div class="g-steps"><div class="g-h">Как выбрать за 2 секунды</div><ol>
<li>Есть <b>yesterday, ago, last…, in 2019, when?</b> → Past Simple.</li>
<li>Есть <b>just, already, yet, ever, never</b> или важен результат сейчас → Present Perfect.</li>
<li>«Уже X лет / с такого-то года» (since / for) и это длится до сих пор → Present Perfect, хотя по-русски настоящее время.</li>
</ol></div>
<div class="g-bad">I have seen this film yesterday.</div><div class="g-good">I <b>saw</b> this film yesterday. <span class="muted">— yesterday → Past Simple</span></div>
<div class="g-bad">When have you bought it?</div><div class="g-good">When <b>did</b> you <b>buy</b> it?</div>
<div class="g-bad">I know him for five years.</div><div class="g-good">I<b>'ve known</b> him for five years. <span class="muted">— «знаю уже 5 лет» = Present Perfect</span></div>
<div class="g-bad">I live here since 2020.</div><div class="g-good">I<b>'ve lived</b> here since 2020.</div>
<div class="g-bad">Did you ever play Minecraft?</div><div class="g-good"><b>Have</b> you ever <b>played</b> Minecraft? <span class="muted">— опыт в жизни</span></div>
<div class="g-bad">I didn't finish yet.</div><div class="g-good">I <b>haven't finished</b> yet.</div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">You have found a hidden chest!</span> — Вы нашли тайник! <span class="muted">(сообщение в игре)</span></li>
<li><span class="say">Achievement unlocked: you've completed 50 quests.</span> — Достижение: выполнено 50 квестов.</li>
<li><span class="say">Have you seen my brother? He's been gone for days.</span> — Ты не видел моего брата? <span class="muted">(NPC)</span></li>
<li><span class="say">I've never seen anything like this.</span> — Никогда такого не видел. <span class="muted">(сериал)</span></li>
<li><span class="say">Has anyone done this raid yet?</span> — Кто-нибудь уже проходил этот рейд? <span class="muted">(чат)</span></li>
</ul>
<div class="g-tip">Present Perfect — это <b>фото «сейчас»</b> с последствиями прошлого: ключей нет, макет готов, опыт есть. Past Simple — <b>видео из прошлого</b> с датой в углу. Видишь дату — Past Simple.</div>
<div class="mini" data-q="I ___ this episode already." data-o="saw|have seen|see" data-a="1" data-why="already, время не названо → Present Perfect: have seen."></div>
<div class="mini" data-q="I ___ this episode last night." data-o="saw|have seen|see" data-a="0" data-why="last night — названо прошедшее время → Past Simple: saw."></div>`,
    ex: [
      { q: "Wait, I ___ the level yet.", v: "not finish", o: ["didn't finish", "haven't finished", "don't finish"], a: 1, why: "yet в отрицании → Present Perfect. didn't — если бы было «вчера»." },
      { q: "She ___ in Moscow since 2019.", v: "live", o: ["lived", "lives", "has lived"], a: 2, why: "since 2019 и до сих пор → Present Perfect. «Живёт с 2019» по-русски настоящее, но в английском — has lived." },
      { q: "I ___ to Japan. I'd love to go!", v: "never be", o: ["was never", "have never been", "am never"], a: 1, why: "Опыт за всю жизнь, never → Present Perfect." },
      { q: "Good news! We ___ the project!", v: "just finish", o: ["have just finished", "just finish", "are just finishing"], a: 0, why: "just — только что, результат сейчас → Present Perfect." },
      { q: "___ the new episode yet?", v: "watch", o: ["Did you watch", "Do you watch", "Have you watched"], a: 2, why: "yet в вопросе → Present Perfect." },
      { q: "My brother ___ his phone. Now he can't call anyone.", v: "break", o: ["broke", "has broken", "breaks"], a: 1, why: "Время не названо, важен результат сейчас (Now he can't) → Present Perfect." },
      { q: "I ___ Anna for ten years. We're best friends.", v: "know", o: ["have known", "knew", "know"], a: 0, why: "for ten years и до сих пор → Present Perfect. «Знаю 10 лет» ≠ I know for." },
      { q: "The designer ___ already sent the mockups.", v: "", o: ["have", "has", "is"], a: 1, why: "already → Present Perfect; designer = he/she → has." },
      { q: "It's the first time I ___ a boss on hard mode.", v: "beat", o: ["have beaten", "beat", "am beating"], a: 0, why: "It's the first time — опыт в жизни → Present Perfect." },
      { q: "How long ___ this laptop? — Since 2022.", v: "have", o: ["did you have", "do you have", "have you had"], a: 2, why: "How long + до сих пор (Since 2022) → Present Perfect." },
      { q: "We ___ three levels so far. Only two are left.", v: "complete", o: ["completed", "have completed", "complete"], a: 1, why: "so far — на данный момент → Present Perfect." },
      { q: "She ___ to the gym this week. She's too busy.", v: "not go", o: ["didn't go", "doesn't go", "hasn't gone"], a: 2, why: "this week ещё не закончилась → Present Perfect." },
      { q: "The kids ___ all the pizza! There's nothing for us.", v: "eat", o: ["have eaten", "ate", "eat"], a: 0, why: "Результат сейчас (пиццы нет), время не названо → Present Perfect." },
      { q: "I ___ this word many times, but I still forget it.", v: "hear", o: ["have heard", "hear", "was hearing"], a: 0, why: "many times за жизнь, время не названо → Present Perfect." }
    ]
  },
  {
    id: 'present-perfect-continuous',
    name: 'Present Perfect Continuous',
    ru: 'Настоящее совершённое длительное',
    time: 'present',
    aspect: 'perfect-continuous',
    level: 'B1',
    freq: 3,
    one: 'Делаю уже долго, до сих пор',
    formula: {
      plus: "I / you / they <b>have been working</b> · she <b>has been working</b>",
      minus: "I <b>haven't been working</b> · he <b>hasn't been working</b>",
      q: '<b>Have</b> you <b>been working</b>? · How long <b>has</b> she <b>been working</b>?'
    },
    markers: ['for', 'since', 'how long', 'all day', 'all morning', 'lately', 'recently'],
    compare: ['present-perfect', 'present-continuous'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Действие <b>началось в прошлом и длится до сих пор</b> (или только что закончилось), и нам важно, <b>как долго</b>. По-русски: «Я жду <b>уже час</b>» — у нас настоящее время, а в английском — это время.</div>
<ul class="g-list">
<li><b>Сколько уже длится</b> (for / since / how long):</li>
<li><span class="say">I've been waiting for an hour!</span> — Я жду уже час!</li>
<li><span class="say">How long have you been learning English?</span> — Сколько ты уже учишь английский?</li>
<li><span class="say">She has been working here since May.</span> — Она работает здесь с мая.</li>
<li><b>Только что закончилось — видны следы:</b></li>
<li><span class="say">You're wet. Have you been running?</span> — Ты мокрый. Бегал?</li>
<li><span class="say">I'm tired. I've been working all day.</span> — Устал. Работал весь день.</li>
</ul>
<h3>2. Как строится</h3>
<div class="g-idea">have / has + <b>been</b> + глагол с <b>-ing</b>. been — всегда одинаковое.</div>
<table>
<tr><th></th><th>Форма</th><th>Пример</th></tr>
<tr><td><b>+</b></td><td>have/has been + -ing</td><td><span class="say">It has been raining.</span></td></tr>
<tr><td><b>−</b></td><td>haven't/hasn't been + -ing</td><td><span class="say">I haven't been sleeping.</span></td></tr>
<tr><td><b>?</b></td><td>Have/Has + кто + been + -ing</td><td><span class="say">Have you been crying?</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">have / has been</span><span class="g-plus">+</span><span class="g-part">глагол-ing</span></div>
<p>-ing как в Present Continuous: play → playing, make → making (e уходит), run → running (буква удваивается).</p>
<div class="g-bad">I have been wait.</div><div class="g-good">I have been <b>waiting</b>.</div>
<div class="g-bad">She have been working.</div><div class="g-good">She <b>has</b> been working.</div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>for</b> + отрезок: <span class="say">for two hours, for a week</span></li>
<li><b>since</b> + точка начала: <span class="say">since 8 o'clock, since Monday</span></li>
<li><b>How long…?</b> — <span class="say">How long have you been playing?</span></li>
<li><b>all day / all morning / lately / recently</b> — <span class="say">I've been feeling great lately.</span> — В последнее время я чувствую себя отлично.</li>
</ul>
<h3>4. Не путать с Present Perfect и Present Continuous</h3>
<div class="g-compare">
<div><div class="g-h">Present Perfect Continuous</div><p>Важен <b>процесс</b> и сколько он длится.</p><p><span class="say">I've been reading this book for a week.</span></p><p class="muted">Читаю, ещё не дочитал.</p></div>
<div><div class="g-h">Present Perfect</div><p>Важен <b>результат</b> или сколько штук.</p><p><span class="say">I've read three books this month.</span></p><p class="muted">Прочитал, готово.</p></div>
</div>
<div class="g-compare">
<div><div class="g-h">Present Perfect Continuous</div><p>Сколько <b>уже</b> длится.</p><p><span class="say">It's been raining for hours.</span></p></div>
<div><div class="g-h">Present Continuous</div><p>Просто <b>сейчас</b>, без «сколько».</p><p><span class="say">It's raining.</span></p></div>
</div>
<div class="g-bad">I wait for you for an hour.</div><div class="g-good">I<b>'ve been waiting</b> for you for an hour.</div>
<div class="g-bad">I am learning English for two years.</div><div class="g-good">I<b>'ve been learning</b> English for two years. <span class="muted">— есть for → не Present Continuous</span></div>
<div class="g-bad">How long are you working here?</div><div class="g-good">How long <b>have</b> you <b>been working</b> here?</div>
<div class="g-bad">I've been knowing him for years.</div><div class="g-good">I<b>'ve known</b> him for years. <span class="muted">— know, like, want, have (иметь) не бывают с -ing → Present Perfect</span></div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">We've been searching for you for days!</span> — Мы ищем тебя уже несколько дней! <span class="muted">(NPC)</span></li>
<li><span class="say">I've been farming this dungeon all night and still no drop.</span> — Всю ночь фармлю это подземелье — и ничего не выпало. <span class="muted">(чат)</span></li>
<li><span class="say">How long have you been playing this game?</span> — Сколько ты уже играешь в эту игру? <span class="muted">(стрим)</span></li>
<li><span class="say">Someone has been following us.</span> — За нами кто-то следит. <span class="muted">(кат-сцена)</span></li>
</ul>
<div class="g-tip">Слышите по-русски «<b>уже</b> + сколько-то времени + настоящее» («жду уже час», «учу уже год») — это сигнал: have been + -ing. Русское настоящее тут обманывает.</div>
<div class="mini" data-q="Я жду тебя уже 20 минут! — I ___ for you for 20 minutes!" data-o="am waiting|have been waiting|wait" data-a="1" data-why="«уже 20 минут» + до сих пор → have been waiting."></div>
<div class="mini" data-q="I ___ five levels today." data-o="have been completing|have completed|am completing" data-a="1" data-why="Сколько штук сделано — результат → Present Perfect."></div>`,
    ex: [
      { q: "I ___ for you for an hour! Where are you?", v: "wait", o: ["am waiting", "have been waiting", "wait"], a: 1, why: "for an hour и до сих пор → Present Perfect Continuous. «Жду уже час» ≠ am waiting." },
      { q: "How long ___ English?", v: "learn", o: ["have you been learning", "are you learning", "do you learn"], a: 0, why: "How long + до сих пор → Present Perfect Continuous." },
      { q: "She's tired because she ___ all day.", v: "work", o: ["works", "is working", "has been working"], a: 2, why: "all day + видны последствия (устала) → Present Perfect Continuous." },
      { q: "Your hands are dirty! What ___?", v: "do", o: ["do you do", "have you been doing", "are you doing"], a: 1, why: "Следы недавнего процесса (грязные руки) → have been doing." },
      { q: "We ___ this game since 8 o'clock. Let's take a break!", v: "play", o: ["have been playing", "play", "are playing"], a: 0, why: "since 8 o'clock и до сих пор → Present Perfect Continuous." },
      { q: "It ___ all morning, the streets are wet.", v: "rain", o: ["rains", "is raining", "has been raining"], a: 2, why: "all morning + следы (мокрые улицы) → Present Perfect Continuous." },
      { q: "He ___ on this design for three weeks, and it's still not ready.", v: "work", o: ["works", "has been working", "is working"], a: 1, why: "for three weeks и ещё не готово — процесс длится → Present Perfect Continuous." },
      { q: "I ___ well lately. Too much work.", v: "not sleep", o: ["haven't been sleeping", "don't sleep", "am not sleeping"], a: 0, why: "lately — в последнее время, процесс → Present Perfect Continuous." },
      { q: "You're out of breath. ___?", v: "run", o: ["Do you run", "Are you running", "Have you been running"], a: 2, why: "Только что закончилось, видны следы (запыхался) → Have you been running?" },
      { q: "They ___ about the new season for days. It's so annoying!", v: "talk", o: ["talk", "have been talking", "are talking"], a: 1, why: "for days и до сих пор → Present Perfect Continuous." },
      { q: "Anna ___ to get tickets since morning. No luck yet.", v: "try", o: ["has been trying", "tries", "is trying"], a: 0, why: "since morning — сколько уже длится → Present Perfect Continuous." },
      { q: "I ___ this series since Monday — I'm on episode 8 now.", v: "watch", o: ["watch", "am watching", "have been watching"], a: 2, why: "since Monday, ещё не досмотрел → Present Perfect Continuous." },
      { q: "The music ___ for two hours! I can't sleep.", v: "play", o: ["plays", "has been playing", "is playing"], a: 1, why: "for two hours — важно, как долго → Present Perfect Continuous." },
      { q: "How long ___ in this team? — About a year.", v: "work", o: ["have you been working", "are you working", "did you work"], a: 0, why: "How long + до сих пор работаешь → Present Perfect Continuous. did — если бы уже ушёл." }
    ]
  }
]);
