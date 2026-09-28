// Времена, часть 3: Past Perfect, Past Perfect Continuous, Future Continuous, Future Perfect, Future Perfect Continuous.
window.TENSES = (window.TENSES || []).concat([
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    ru: 'Прошедшее совершённое («предпрошедшее»)',
    time: 'past',
    aspect: 'perfect',
    level: 'B1',
    freq: 3,
    one: 'Ещё раньше, чем другое в прошлом',
    formula: {
      plus: "I / she / they <b>had worked</b> · коротко <b>'d worked</b>",
      minus: "I <b>hadn't worked</b> · she <b>hadn't worked</b>",
      q: '<b>Had</b> you <b>worked</b>? · <b>Had</b> she <b>worked</b>?'
    },
    markers: ['before', 'by the time', 'already', 'when', 'after', 'never … before', 'just'],
    compare: ['past-simple', 'present-perfect'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Мы рассказываем историю в прошлом. И вдруг нужно сказать о том, что случилось <b>ещё раньше</b>. Это «прошлое до прошлого» — <b>Past Perfect</b>. В русском мы просто говорим «уже» или «до этого», а в английском меняется сама форма глагола: <b>had + третья форма</b>.</div>
<ul class="g-list">
<li><b>Одно действие было раньше другого в прошлом.</b></li>
<li><span class="say">When I came home, my brother had eaten all the pizza.</span> — Когда я пришёл, брат уже съел всю пиццу. <span class="muted">(сначала съел, потом я пришёл)</span></li>
<li><span class="say">The film had started when we got to the cinema.</span> — Фильм уже начался, когда мы пришли в кино.</li>
<li><b>Причина в прошлом: почему так вышло.</b></li>
<li><span class="say">I couldn't log in because I had forgotten my password.</span> — Я не смог войти, потому что забыл пароль.</li>
<li><span class="say">She was sad because she had lost her phone.</span> — Она грустила, потому что потеряла телефон.</li>
<li><b>Опыт «до того момента» в прошлом.</b></li>
<li><span class="say">I had never played an RPG before 2020.</span> — До 2020 года я ни разу не играл в RPG.</li>
<li><span class="say">It was my first trip to London. I hadn't been there before.</span> — Это была моя первая поездка в Лондон. Я там раньше не был.</li>
</ul>
<div class="mini" data-q="When we arrived, the party ___." data-o="finished|had finished|has finished" data-a="1" data-why="Сначала вечеринка закончилась, потом мы пришли. Действие раньше другого в прошлом → had finished."></div>

<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">had</span><span class="g-plus">+</span><span class="g-part g-v">3-я форма глагола</span></div>
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I had finished.</span></td><td>Я (уже) закончил.</td></tr>
<tr><td>−</td><td><span class="say">I hadn't finished.</span></td><td>Я (ещё) не закончил.</td></tr>
<tr><td>?</td><td><span class="say">Had you finished?</span></td><td>Ты (уже) закончил?</td></tr>
</table>
<p><b>had</b> — одно для всех: I, you, he, she, we, they. Никаких has!</p>
<p><b>3-я форма:</b> у правильных глаголов + <b>-ed</b> (work → worked, play → played). У неправильных — третья колонка таблицы: go → <b>gone</b>, see → <b>seen</b>, eat → <b>eaten</b>, do → <b>done</b>, forget → <b>forgotten</b>.</p>
<p><b>Коротко:</b> I had → <b>I'd</b>, she had → <b>she'd</b>, had not → <b>hadn't</b>. <span class="say">She'd already left.</span> — Она уже ушла.</p>

<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>by the time</b> — к тому моменту, когда: <span class="say">By the time the boss arrived, we had started.</span> — К приходу босса мы уже начали.</li>
<li><b>already</b> — уже: <span class="say">The other team had already defeated the boss.</span> — Другая команда уже победила босса.</li>
<li><b>before / never … before</b> — раньше, до этого: <span class="say">I had never seen snow before.</span> — Я никогда раньше не видел снег.</li>
<li><b>after</b> — после того как: <span class="say">After she had saved the file, she closed Figma.</span> — Сохранив файл, она закрыла Figma.</li>
<li><b>just</b> — только что: <span class="say">The game had just started.</span> — Игра только что началась.</li>
</ul>

<h3>4. Не путать с Past Simple и Present Perfect</h3>
<div class="g-compare">
  <div><div class="g-h">Past Simple</div><p>События по порядку, как в кино.</p><p><span class="say">I came home and ate.</span></p><p>Пришёл → поел.</p></div>
  <div><div class="g-h">Past Perfect</div><p>Шаг назад: что было ещё раньше.</p><p><span class="say">When I came home, he had eaten.</span></p><p>Он поел → потом я пришёл.</p></div>
</div>
<p><b>Present Perfect</b> (have done) связан с <b>сейчас</b>. <b>Past Perfect</b> (had done) связан с моментом <b>в прошлом</b>.</p>
<div class="g-bad">When I called her, she has already left.</div>
<div class="g-good">When I called her, she had already left.</div>
<div class="g-bad">He was tired because he didn't sleep. <span class="muted">— хотим сказать «до этого не спал»</span></div>
<div class="g-good">He was tired because he hadn't slept.</div>
<div class="g-bad">She had lost her phone yesterday. <span class="muted">— просто факт, без другого события</span></div>
<div class="g-good">She lost her phone yesterday.</div>

<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">By the time we got there, the village had burned down.</span> — Когда мы добрались, деревня уже сгорела. <span class="muted">(кат-сцена)</span></li>
<li><span class="say">He told me he had seen the dragon before.</span> — Он сказал, что уже видел дракона. <span class="muted">(NPC)</span></li>
<li><span class="say">Sorry, I'd already left the lobby.</span> — Сорри, я уже вышел из лобби. <span class="muted">(чат)</span></li>
<li><span class="say">I realized I had made a terrible mistake.</span> — Я понял, что совершил ужасную ошибку. <span class="muted">(сериал)</span></li>
</ul>

<h3>6. Запомнить</h3>
<div class="g-tip">Представьте ленту времени и два флажка в прошлом. Тот, что <b>дальше назад</b>, получает <b>had</b>. «Had» — как кнопка «Назад» в истории.</div>
<div class="mini" data-q="I didn't watch the film because I ___ it before." data-o="had seen|have seen|saw" data-a="0" data-why="before + история в прошлом: видел ещё раньше, чем решил не смотреть → had seen."></div>
<div class="mini" data-q="By the time she woke up, we ___ breakfast." data-o="have made|had made|make" data-a="1" data-why="by the time + прошлое → к тому моменту уже → had made."></div>`,
    ex: [
      { q: "When I came home, the pizza was gone. My brother ___ it.", v: 'eat', o: ['had eaten', 'has eaten', 'is eating'], a: 0, why: "Сначала брат съел, потом я пришёл — действие раньше другого в прошлом → Past Perfect. has eaten связан с сейчас, а история в прошлом." },
      { q: "By the time the boss arrived, we ___ the meeting.", v: 'already start', o: ['have already started', 'had already started', 'already start'], a: 1, why: "by the time + arrived (прошлое) → к тому моменту уже → had started." },
      { q: "It was my first trip to London. I ___ there before.", v: 'not be', o: ["haven't been", "wasn't", "hadn't been"], a: 2, why: "before в истории о прошлом: до той поездки не был → hadn't been. haven't been — до сейчас, а это уже было." },
      { q: "She was sad because she ___ her phone.", v: 'lose', o: ['has lost', 'had lost', 'loses'], a: 1, why: "Причина грусти в прошлом случилась раньше → had lost." },
      { q: "___ you finished the level before the server went down?", v: '', o: ['Had', 'Have', 'Are'], a: 0, why: "before + went down (прошлое): закончил ли раньше этого момента → Had you finished." },
      { q: "When we got to the cinema, the film ___ already.", v: 'start', o: ['has started', 'starts', 'had started'], a: 2, why: "Фильм начался раньше, чем мы пришли (got — прошлое) → had started." },
      { q: "When I saw him last year, I didn't recognise him. He ___ a lot.", v: 'change', o: ['has changed', 'changes', 'had changed'], a: 2, why: "Не узнал (в прошлом), потому что он изменился ещё раньше → had changed." },
      { q: "Anna ___ Figma before she got this job.", v: 'never use', o: ['had never used', 'has never used', 'never uses'], a: 0, why: "never … before + got (прошлое): до того момента не пользовалась → had never used." },
      { q: "By 2020, the studio ___ three games.", v: 'release', o: ['have released', 'had released', 'release'], a: 1, why: "By 2020 — к моменту в прошлом → had released." },
      { q: "I couldn't log in because I ___ my password.", v: 'forget', o: ['had forgotten', 'have forgotten', 'forget'], a: 0, why: "Сначала забыл, потом не смог войти (couldn't — прошлое) → had forgotten." },
      { q: "The client was angry because we ___ the files on time.", v: 'not send', o: ["haven't sent", "don't send", "hadn't sent"], a: 2, why: "Причина злости в прошлом, случилась раньше → hadn't sent." },
      { q: "When we reached the boss room, the other team ___ the boss.", v: 'already defeat', o: ['has already defeated', 'had already defeated', 'already defeats'], a: 1, why: "Когда мы дошли (прошлое), они уже победили раньше → had already defeated." },
      { q: "He was tired because he ___ well for days.", v: 'not sleep', o: ["doesn't sleep", "hadn't slept", "hasn't slept"], a: 1, why: "Усталость в прошлом, а причина — ещё раньше → hadn't slept. hasn't slept — до сейчас." },
      { q: "The quest was easy because I ___ the guide.", v: 'read', o: ['had read', 'have read', 'am reading'], a: 0, why: "Сначала прочитал гайд, потом квест был лёгким (was — прошлое) → had read." }
    ]
  },
  {
    id: 'past-perfect-continuous',
    name: 'Past Perfect Continuous',
    ru: 'Прошедшее совершённое длительное',
    time: 'past',
    aspect: 'perfect-continuous',
    level: 'B2',
    freq: 1,
    one: 'Долго делал до момента в прошлом',
    formula: {
      plus: "I / she / they <b>had been working</b> · коротко <b>'d been working</b>",
      minus: "I <b>hadn't been working</b>",
      q: '<b>Had</b> you <b>been working</b>? · How long <b>had</b> she <b>been working</b>?'
    },
    markers: ['for two hours', 'since morning', 'all day', 'how long', 'before', 'when'],
    compare: ['past-perfect', 'past-continuous'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Честно: это время встречается <b>редко</b>. В основном в книгах и сериалах, когда рассказывают историю. Говорить им самому почти не нужно — достаточно <b>узнавать</b> его в тексте. Смысл простой: что-то <b>долго длилось</b> до определённого момента в прошлом.</div>
<ul class="g-list">
<li><b>Сколько времени длилось до момента в прошлом.</b></li>
<li><span class="say">We had been waiting for an hour when the bus came.</span> — Мы ждали уже час, когда пришёл автобус.</li>
<li><span class="say">She had been working for ten hours, so she was tired.</span> — Она работала десять часов, поэтому устала.</li>
<li><b>Видимый результат в прошлом: почему так было.</b></li>
<li><span class="say">His eyes were red. He had been playing all night.</span> — Глаза у него были красные. Он играл всю ночь.</li>
<li><span class="say">The ground was wet. It had been raining.</span> — Земля была мокрая. Шёл дождь.</li>
</ul>
<p>Подсказки: <b>for</b> (два часа), <b>since</b> (утра), <b>all day / all night</b>, <b>how long</b> + событие в прошлом.</p>

<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">had been</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I had been waiting.</span></td><td>Я (долго) ждал.</td></tr>
<tr><td>−</td><td><span class="say">I hadn't been waiting.</span></td><td>Я не ждал.</td></tr>
<tr><td>?</td><td><span class="say">Had you been waiting?</span></td><td>Ты (долго) ждал?</td></tr>
</table>
<p><b>had been</b> — для всех одинаково. Коротко: <b>I'd been</b>, <b>she'd been</b>. Правила -ing обычные: run → <b>running</b>, make → <b>making</b>.</p>

<h3>3. Не путать с Past Perfect и Past Continuous</h3>
<div class="g-compare">
  <div><div class="g-h">Past Perfect</div><p>Результат: сделал, закончил.</p><p><span class="say">She had painted the room.</span></p><p>Покрасила — комната готова.</p></div>
  <div><div class="g-h">Past Perfect Continuous</div><p>Процесс: долго делал.</p><p><span class="say">She had been painting.</span></p><p>Красила — вся в краске.</p></div>
</div>
<p><b>Past Continuous</b> (was doing) — процесс в одной точке прошлого, без «сколько уже». Если есть <b>for / since</b> до момента в прошлом — нужен <b>had been + -ing</b>.</p>
<div class="g-bad">We were waiting for an hour when the bus came.</div>
<div class="g-good">We had been waiting for an hour when the bus came.</div>
<div class="g-bad">I had been knowing him for years. <span class="muted">— know не бывает с -ing</span></div>
<div class="g-good">I had known him for years.</div>

<h3>4. Как узнать в тексте</h3>
<p>Видите <b>had been + -ing</b> — переводите обычным прошедшим, часто со словом «уже»: <span class="say">They'd been talking for hours.</span> — Они уже несколько часов разговаривали. В играх это обычно звучит в кат-сценах и дневниках: <span class="say">The guards had been watching us all along.</span> — Стража всё это время следила за нами.</p>
<div class="g-tip">Это «Past Perfect с часами»: had — шаг назад в прошлое, been + ing — стрелка часов крутилась долго. Узнали — и хватит, самому говорить не обязательно.</div>
<div class="mini" data-q="She was out of breath. She ___." data-o="had been running|has been running|runs" data-a="0" data-why="Результат в прошлом (задыхалась), до этого долго бегала → had been running."></div>
<div class="mini" data-q="We ___ for two hours before the boss finally died." data-o="were fighting|had been fighting|have been fighting" data-a="1" data-why="for two hours до момента в прошлом (died) → had been fighting."></div>`,
    ex: [
      { q: "She was tired because she ___ for ten hours.", v: 'work', o: ['has been working', 'had been working', 'was working'], a: 1, why: "for ten hours до момента в прошлом (was tired) → had been working. has been — до сейчас." },
      { q: "We ___ for an hour when the bus finally came.", v: 'wait', o: ['were waiting', 'have been waiting', 'had been waiting'], a: 2, why: "for an hour + came (прошлое): ждали уже час к тому моменту → had been waiting." },
      { q: "His eyes were red. He ___ games all night.", v: 'play', o: ['had been playing', 'has been playing', 'plays'], a: 0, why: "Видимый результат в прошлом (were red), до этого долгий процесс → had been playing." },
      { q: "How long ___ you been learning English before you moved to London?", v: '', o: ['have', 'did', 'had'], a: 2, why: "been learning + before you moved (прошлое) → had been learning." },
      { q: "The ground was wet. It ___.", v: 'rain', o: ['has been raining', 'had been raining', 'rains'], a: 1, why: "Мокрая земля — результат в прошлом (was), дождь шёл до этого → had been raining." },
      { q: "I ___ on that design for weeks before the client cancelled it.", v: 'work', o: ['had been working', 'have been working', 'am working'], a: 0, why: "for weeks до момента в прошлом (cancelled) → had been working." },
      { q: "They ___ for two years when they broke up.", v: 'date', o: ['had been dating', 'have been dating', 'date'], a: 0, why: "for two years до момента в прошлом (broke up) → had been dating." },
      { q: "When I finally called, Tom ___ for an hour. He was bored.", v: 'wait', o: ['was waiting', 'had been waiting', 'has been waiting'], a: 1, why: "for an hour к моменту звонка в прошлом → had been waiting. was waiting не показывает, сколько уже." },
      { q: "She ___ well before the exam, so she felt terrible.", v: 'not sleep', o: ["hasn't been sleeping", "doesn't sleep", "hadn't been sleeping"], a: 2, why: "Долгий период до экзамена в прошлом, результат — felt terrible → hadn't been sleeping." },
      { q: "We ___ the same boss for three hours before we finally beat it.", v: 'fight', o: ['have been fighting', 'had been fighting', 'fight'], a: 1, why: "for three hours до момента в прошлом (beat) → had been fighting." },
      { q: "The kitchen smelled great. Mom ___ since morning.", v: 'cook', o: ['had been cooking', 'has been cooking', 'cooks'], a: 0, why: "since morning + smelled (прошлое) → had been cooking." },
      { q: "I was out of breath because I ___.", v: 'run', o: ['have been running', 'am running', 'had been running'], a: 2, why: "Результат в прошлом (was out of breath), причина — долгий процесс до этого → had been running." },
      { q: "___ they been talking for long when the host joined the call?", v: '', o: ['Have', 'Were', 'Had'], a: 2, why: "been talking + joined (прошлое) → Had they been talking." },
      { q: "He ___ Spanish for five years before he went to Madrid.", v: 'study', o: ['has been studying', 'had been studying', 'studies'], a: 1, why: "for five years до момента в прошлом (went) → had been studying." }
    ]
  },
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    ru: 'Будущее длительное',
    time: 'future',
    aspect: 'continuous',
    level: 'B1',
    freq: 3,
    one: 'Буду в процессе в момент будущего',
    formula: {
      plus: "I / she / they <b>will be working</b> · коротко <b>'ll be working</b>",
      minus: "I <b>won't be working</b>",
      q: '<b>Will</b> you <b>be working</b>? · What <b>will</b> she <b>be doing</b>?'
    },
    markers: ['this time tomorrow', 'at 8 tonight', 'all evening', 'tomorrow at …', 'when you arrive', 'this time next year'],
    compare: ['future-simple', 'future-perfect'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Представьте, что вы делаете фото <b>завтра в 8 вечера</b>. Что на фото? Вы <b>в процессе</b>: играете, работаете, едете. Это <b>Future Continuous</b> — «буду делать» в конкретный момент будущего. В русском это просто «буду + глагол», а в английском важно показать, что действие <b>будет идти</b>.</div>
<ul class="g-list">
<li><b>В процессе в точный момент будущего.</b></li>
<li><span class="say">This time tomorrow I will be flying to Paris.</span> — Завтра в это время я буду лететь в Париж.</li>
<li><span class="say">Don't call at 9 — I'll be watching the match.</span> — Не звони в 9, я буду смотреть матч.</li>
<li><b>Весь период в будущем.</b></li>
<li><span class="say">I'll be streaming all evening.</span> — Я буду стримить весь вечер.</li>
<li><span class="say">We'll be working on this project all week.</span> — Мы будем работать над проектом всю неделю.</li>
<li><b>Вежливо спросить о планах.</b></li>
<li><span class="say">Will you be using the laptop tonight?</span> — Ты будешь сегодня пользоваться ноутбуком? <span class="muted">(мягче, чем Will you use…)</span></li>
</ul>
<div class="mini" data-q="At 10 tomorrow I ___ a shower, so I won't hear your call." data-o="will be having|have|had" data-a="0" data-why="Точный момент в будущем (at 10 tomorrow), буду в процессе → will be having."></div>

<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">will be</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I'll be working.</span></td><td>Я буду работать.</td></tr>
<tr><td>−</td><td><span class="say">I won't be working.</span></td><td>Я не буду работать.</td></tr>
<tr><td>?</td><td><span class="say">Will you be working?</span></td><td>Ты будешь работать?</td></tr>
</table>
<p><b>will be</b> — для всех одинаково. Коротко: <b>I'll</b>, <b>she'll</b>, <b>they'll</b>; will not → <b>won't</b>.</p>
<p><b>-ing:</b> play → <b>playing</b>, make → <b>making</b> (убираем e), run → <b>running</b> (удваиваем), lie → <b>lying</b>.</p>

<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>this time tomorrow / next week</b>: <span class="say">This time next week we'll be lying on a beach.</span> — Через неделю в это время мы будем лежать на пляже.</li>
<li><b>at + время</b>: <span class="say">At 3 pm I'll be giving a presentation.</span> — В 15:00 я буду выступать с презентацией.</li>
<li><b>all evening / all day</b>: <span class="say">She'll be coding all day.</span> — Она будет программировать весь день.</li>
<li><b>when you arrive / get home</b>: <span class="say">When you arrive, we'll be having dinner.</span> — Когда ты придёшь, мы будем ужинать.</li>
</ul>

<h3>4. Не путать с Future Simple и Future Perfect</h3>
<div class="g-compare">
  <div><div class="g-h">Future Simple</div><p>Решение, обещание, факт.</p><p><span class="say">I'll help you!</span></p><p>Сейчас решил — помогу.</p></div>
  <div><div class="g-h">Future Continuous</div><p>Процесс в момент будущего.</p><p><span class="say">At 8 I'll be helping Tom.</span></p><p>В 8 буду занят — помогаю.</p></div>
</div>
<p><b>Future Perfect</b> (will have done) — к моменту будущего <b>уже сделаю</b>. Future Continuous — в этот момент <b>ещё делаю</b>.</p>
<div class="g-bad">This time tomorrow I will fly to Paris.</div>
<div class="g-good">This time tomorrow I will be flying to Paris.</div>
<div class="g-bad">The bag is heavy? Wait, I'll be helping you! <span class="muted">— решение прямо сейчас</span></div>
<div class="g-good">The bag is heavy? Wait, I'll help you!</div>

<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">I'll be waiting for you at the gate.</span> — Я буду ждать тебя у ворот. <span class="muted">(NPC)</span></li>
<li><span class="say">In ten minutes we'll be fighting the final boss. Get ready!</span> — Через десять минут будем драться с финальным боссом. Готовьтесь! <span class="muted">(голосовой чат)</span></li>
<li><span class="say">We'll be updating the servers from 10 to 12.</span> — С 10 до 12 мы будем обновлять серверы. <span class="muted">(новость в игре)</span></li>
<li><span class="say">Will you be joining us tonight?</span> — Ты присоединишься к нам вечером? <span class="muted">(сериал, вежливо)</span></li>
</ul>

<h3>6. Запомнить</h3>
<div class="g-tip">Future Continuous — это <b>фото из будущего</b>: на снимке вы застыли посреди дела. Точное время + «буду в процессе» = <b>will be + -ing</b>.</div>
<div class="mini" data-q="Don't come at 7 — the kids ___ their homework." data-o="do|did|will be doing" data-a="2" data-why="В 7 (момент в будущем) дети будут в процессе → will be doing."></div>
<div class="mini" data-q="The phone is ringing! — OK, I ___ it." data-o="will be answering|will answer|answered" data-a="1" data-why="Решение прямо сейчас → Future Simple: I'll answer. Процесса в момент будущего тут нет."></div>`,
    ex: [
      { q: "Don't call me at 9 tonight — I ___ the match.", v: 'watch', o: ['will watch', 'watch', 'will be watching'], a: 2, why: "at 9 tonight — точный момент в будущем, я буду в процессе → will be watching." },
      { q: "This time tomorrow, we ___ on a beach.", v: 'lie', o: ['will be lying', 'will lie', 'are lying'], a: 0, why: "this time tomorrow → Future Continuous. are lying — это сейчас, will lie — просто факт без процесса." },
      { q: "At 3 pm tomorrow I ___ a presentation, so I can't talk.", v: 'give', o: ['will give', 'will be giving', 'give'], a: 1, why: "at 3 pm tomorrow — в этот момент буду занят процессом → will be giving." },
      { q: "___ you be using the laptop this evening? I need it.", v: '', o: ['Will', 'Are', 'Do'], a: 0, why: "Вежливый вопрос о планах: Will you be using…? После пропуска стоит be using — нужен will." },
      { q: "The bag is heavy? Wait, I ___ you!", v: 'help', o: ['will be helping', 'am helping', 'will help'], a: 2, why: "Решение прямо сейчас, в момент речи → Future Simple: I'll help. Процесса в момент будущего нет." },
      { q: "When you arrive, we ___ dinner, so just come in.", v: 'have', o: ['will have', 'will be having', 'have'], a: 1, why: "Когда придёшь, ужин уже будет идти → will be having. will have — начнём ужинать после твоего прихода." },
      { q: "This time next week, she ___ in our Paris office.", v: 'work', o: ['works', 'will be working', 'worked'], a: 1, why: "this time next week → в процессе в момент будущего → will be working." },
      { q: "I ___ all evening — ping me if you want to play.", v: 'stream', o: ['stream', 'streamed', 'will be streaming'], a: 2, why: "all evening — весь период в будущем → will be streaming." },
      { q: "At midnight I ___ games — I'll be sleeping.", v: 'not play', o: ["won't be playing", "don't play", "didn't play"], a: 0, why: "at midnight — момент в будущем; отрицание процесса → won't be playing." },
      { q: "Tomorrow from 10 to 12 the team ___ the servers, so the game will be offline.", v: 'update', o: ['updates', 'updated', 'will be updating'], a: 2, why: "from 10 to 12 tomorrow — период в будущем, всё это время идёт процесс → will be updating." },
      { q: "In an hour we ___ the final boss. Get ready!", v: 'fight', o: ['fought', 'will be fighting', 'fight'], a: 1, why: "In an hour — через час будем в процессе боя → will be fighting." },
      { q: "What ___ you be doing at 8 tonight?", v: '', o: ['will', 'are', 'do'], a: 0, why: "at 8 tonight + be doing → What will you be doing?" },
      { q: "Don't come at 7 — the kids ___ their homework.", v: 'do', o: ['will be doing', 'did', 'do'], a: 0, why: "at 7 — момент в будущем, дети будут заняты → will be doing." },
      { q: "This time next year, I ___ English every day at work.", v: 'speak', o: ['speak', 'spoke', 'will be speaking'], a: 2, why: "this time next year → Future Continuous: will be speaking." }
    ]
  },
  {
    id: 'future-perfect',
    name: 'Future Perfect',
    ru: 'Будущее совершённое',
    time: 'future',
    aspect: 'perfect',
    level: 'B2',
    freq: 2,
    one: 'Уже сделаю к моменту в будущем',
    formula: {
      plus: "I / she / they <b>will have worked</b> · коротко <b>'ll have worked</b>",
      minus: "I <b>won't have worked</b>",
      q: '<b>Will</b> you <b>have worked</b>? · <b>Will</b> she <b>have finished</b>?'
    },
    markers: ['by Friday', 'by tomorrow', 'by the time', 'by 2030', 'by then', 'in two hours'],
    compare: ['future-continuous', 'future-simple'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Future Perfect отвечает на вопрос: что будет <b>уже готово</b> к моменту в будущем? В русском мы говорим «к пятнице я <b>закончу</b>» или «уже сделаю». В английском для этого есть отдельная форма: <b>will have + третья форма</b>. Главное слово-сигнал — <b>by</b> («к»).</div>
<ul class="g-list">
<li><b>Результат к моменту в будущем.</b></li>
<li><span class="say">By Friday I will have finished the design.</span> — К пятнице я закончу дизайн.</li>
<li><span class="say">In two hours the download will have finished.</span> — Через два часа загрузка уже завершится.</li>
<li><b>Сколько всего будет к моменту в будущем.</b></li>
<li><span class="say">By 2030 they will have released ten games.</span> — К 2030 году они выпустят десять игр.</li>
<li><span class="say">Next year I'll have worked here for ten years.</span> — В следующем году будет десять лет, как я здесь работаю.</li>
<li><b>Что НЕ успеет случиться.</b></li>
<li><span class="say">He won't have got up by 8.</span> — К восьми он ещё не встанет.</li>
</ul>
<div class="mini" data-q="By Monday we ___ the new level." data-o="will have finished|finish|finished" data-a="0" data-why="By Monday — к моменту в будущем уже будет готово → will have finished."></div>

<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">will have</span><span class="g-plus">+</span><span class="g-part g-v">3-я форма глагола</span></div>
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I'll have finished.</span></td><td>Я (уже) закончу.</td></tr>
<tr><td>−</td><td><span class="say">I won't have finished.</span></td><td>Я (ещё) не закончу.</td></tr>
<tr><td>?</td><td><span class="say">Will you have finished?</span></td><td>Ты (уже) закончишь?</td></tr>
</table>
<p><b>will have</b> — для всех одинаково, никаких has. Даже для he/she: <span class="say">She will have left.</span></p>
<p><b>3-я форма:</b> finish → <b>finished</b>, go → <b>gone</b>, eat → <b>eaten</b>, be → <b>been</b>, do → <b>done</b>.</p>

<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>by + время</b> (к): <span class="say">by Friday, by 6 pm, by next year</span></li>
<li><b>by the time</b> (к тому времени, как): <span class="say">By the time you get home, I'll have cooked dinner.</span> — Когда ты придёшь, ужин уже будет готов.</li>
<li><b>by then</b> (к тому времени): <span class="say">Call me at 6. I'll have finished work by then.</span> — Позвони в 6, к тому времени я закончу работу.</li>
<li><b>in + срок</b> (через): <span class="say">In a month I'll have saved enough money.</span> — Через месяц я накоплю достаточно денег.</li>
</ul>

<h3>4. Не путать с Future Continuous и Future Simple</h3>
<div class="g-compare">
  <div><div class="g-h">Future Continuous</div><p>В этот момент ещё делаю.</p><p><span class="say">At 6 I'll be cooking.</span></p><p>В шесть — у плиты.</p></div>
  <div><div class="g-h">Future Perfect</div><p>К этому моменту уже сделал.</p><p><span class="say">By 6 I'll have cooked.</span></p><p>К шести — ужин готов.</p></div>
</div>
<p><b>Future Simple</b> (will do) — просто «сделаю», без привязки «уже к моменту».</p>
<p><span class="say">By Friday I will finish the design.</span> — тоже правильно и так часто говорят. <span class="say">By Friday I will have finished the design.</span> — подчёркивает, что к пятнице всё <b>уже будет готово</b>.</p>
<div class="g-bad">By the time you come, she will has left.</div>
<div class="g-good">By the time you come, she will have left.</div>
<div class="g-bad">By the time you will come, I'll have cooked. <span class="muted">— после by the time / when будущее не ставим</span></div>
<div class="g-good">By the time you come, I'll have cooked.</div>

<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">By the time they find us, we'll have escaped.</span> — Когда нас найдут, мы уже сбежим. <span class="muted">(кат-сцена)</span></li>
<li><span class="say">By sunrise the army will have reached the city.</span> — К рассвету армия дойдёт до города. <span class="muted">(NPC)</span></li>
<li><span class="say">Relax, I'll have fixed the bug by tomorrow.</span> — Спокойно, к завтрашнему дню я починю баг. <span class="muted">(сериал про айтишников)</span></li>
<li><span class="say">Hurry! By the time we get there, the shop will have closed.</span> — Быстрее! Пока доедем, магазин уже закроется.</li>
</ul>

<h3>6. Запомнить</h3>
<div class="g-tip">Слово <b>by</b> — как финишная ленточка. Всё, что пересекло ленточку к этому моменту, — <b>will have done</b>: «уже готово».</div>
<div class="mini" data-q="By 10 pm she ___ 200 emails." data-o="answers|will have answered|is answering" data-a="1" data-why="By 10 pm — к моменту в будущем уже будет сделано → will have answered."></div>
<div class="mini" data-q="At 10 tonight I ___ online — join me!" data-o="will have played|will be playing|played" data-a="1" data-why="at 10 tonight — в этот момент буду в процессе → Future Continuous. by здесь нет."></div>`,
    ex: [
      { q: "By Friday I ___ the whole design.", v: 'finish', o: ['will have finished', 'will be finishing', 'finish'], a: 0, why: "By Friday — к моменту в будущем уже готово → will have finished." },
      { q: "By the time you get home, I ___ dinner.", v: 'cook', o: ['cook', 'will be cooking', 'will have cooked'], a: 2, why: "by the time — к твоему приходу ужин уже будет готов → will have cooked." },
      { q: "By 2030 the studio ___ ten games.", v: 'release', o: ['will release', 'will have released', 'is releasing'], a: 1, why: "By 2030 — сколько всего будет к моменту в будущем → will have released." },
      { q: "Call me at 6. I ___ work by then.", v: 'finish', o: ['will be finishing', 'finish', 'will have finished'], a: 2, why: "by then — к шести уже закончу → will have finished." },
      { q: "By next month, we ___ together for five years.", v: 'be', o: ['will have been', 'will be', 'are'], a: 0, why: "By next month + for five years → итог к моменту в будущем → will have been." },
      { q: "Relax, the film ___ by the time we arrive — we'll see the start.", v: 'not start', o: ["won't be starting", "won't have started", "doesn't start"], a: 1, why: "by the time — к нашему приходу ещё не начнётся → won't have started." },
      { q: "___ you have saved enough money by the summer?", v: '', o: ['Do', 'Will', 'Have'], a: 1, why: "have saved + by the summer → Will you have saved?" },
      { q: "In two hours, the download ___.", v: 'finish', o: ['will have finished', 'finished', 'has finished'], a: 0, why: "In two hours — через два часа уже будет готово → will have finished." },
      { q: "By the end of the day, she ___ 200 emails.", v: 'answer', o: ['answers', 'is answering', 'will have answered'], a: 2, why: "By the end of the day → итог к моменту в будущем → will have answered." },
      { q: "By the time the guests arrive, the kids ___ all the cake!", v: 'eat', o: ['will have eaten', 'will be eating', 'ate'], a: 0, why: "by the time + all the cake — к приходу гостей торт уже съеден → will have eaten." },
      { q: "At 10 tonight I ___ online — come and join me.", v: 'play', o: ['will have played', 'will be playing', 'played'], a: 1, why: "at 10 tonight — в этот момент буду в процессе → Future Continuous. by нет, результата нет." },
      { q: "Next year I ___ here for ten years.", v: 'work', o: ['work', 'am working', 'will have worked'], a: 2, why: "Next year + for ten years → сколько будет к моменту в будущем → will have worked." },
      { q: "He ___ by 8 — he always wakes up late.", v: 'not get up', o: ["doesn't get up", "isn't getting up", "won't have got up"], a: 2, why: "by 8 — к восьми ещё не встанет → won't have got up." },
      { q: "Hurry! By the time we get there, the shop ___.", v: 'close', o: ['will have closed', 'closes', 'closed'], a: 0, why: "By the time we get there — к нашему приезду уже закроется → will have closed." }
    ]
  },
  {
    id: 'future-perfect-continuous',
    name: 'Future Perfect Continuous',
    ru: 'Будущее совершённое длительное',
    time: 'future',
    aspect: 'perfect-continuous',
    level: 'B2',
    freq: 1,
    one: 'Сколько уже буду делать к моменту',
    formula: {
      plus: "I / she / they <b>will have been working</b>",
      minus: "I <b>won't have been working</b>",
      q: '<b>Will</b> you <b>have been working</b>? · How long <b>will</b> you <b>have been working</b>?'
    },
    markers: ['by … for …', 'by June … for a year', 'next month … for three years', 'by the time … for', 'how long … by'],
    compare: ['future-perfect', 'future-continuous'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Скажу честно: это <b>самое редкое</b> время в английском. Носители чаще говорят проще. Вам достаточно его <b>узнавать</b>. Смысл: к моменту в будущем что-то будет длиться <b>уже столько-то времени</b>. Почти всегда рядом есть <b>by</b> (к) и <b>for</b> (в течение).</div>
<ul class="g-list">
<li><b>Сколько времени будет длиться к моменту в будущем.</b></li>
<li><span class="say">By June I will have been learning English for a year.</span> — К июню будет год, как я учу английский.</li>
<li><span class="say">Next month we'll have been working on this game for three years.</span> — В следующем месяце будет три года, как мы делаем эту игру.</li>
<li><b>Почему кто-то будет уставшим.</b></li>
<li><span class="say">At 5 I'll have been driving for eight hours, so I'll be tired.</span> — В пять часов я буду за рулём уже восемь часов, так что устану.</li>
</ul>

<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">will have been</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I'll have been waiting.</span></td><td>Я буду ждать уже…</td></tr>
<tr><td>−</td><td><span class="say">I won't have been waiting.</span></td><td>Я не буду ждать…</td></tr>
<tr><td>?</td><td><span class="say">Will you have been waiting?</span></td><td>Ты будешь ждать уже…?</td></tr>
</table>
<p>Четыре слова подряд: <b>will have been + -ing</b>. Для всех лиц одинаково.</p>

<h3>3. Не путать с Future Perfect и Future Continuous</h3>
<div class="g-compare">
  <div><div class="g-h">Future Perfect</div><p>Результат: сколько сделаю.</p><p><span class="say">By June I'll have read 10 books.</span></p><p>10 книг прочитано.</p></div>
  <div><div class="g-h">Future Perfect Continuous</div><p>Процесс: как долго буду делать.</p><p><span class="say">By June I'll have been reading for a year.</span></p><p>Год, как читаю.</p></div>
</div>
<p><b>Future Continuous</b> (will be doing) — просто «буду в процессе», без «уже столько-то». Есть <b>for + срок</b> и <b>by</b> — значит will have been + -ing.</p>
<div class="g-bad">By June I will learn English for a year.</div>
<div class="g-good">By June I will have been learning English for a year.</div>
<div class="g-bad">Next year I will have been knowing her for ten years. <span class="muted">— know без -ing</span></div>
<div class="g-good">Next year I will have known her for ten years.</div>

<h3>4. Как узнать в тексте</h3>
<p>Видите <b>will have been + -ing</b> — переводите «будет … как я делаю» или «буду делать уже …». Например, в игре: <span class="say">By the time you return, I'll have been guarding this gate for a hundred years.</span> — Когда ты вернёшься, я буду охранять эти ворота уже сто лет.</p>
<div class="g-tip">Это «Future Perfect с часами»: will have — финишная ленточка в будущем, been + ing — сколько уже крутится секундомер. Узнали — и достаточно.</div>
<div class="mini" data-q="By 10 pm they ___ this raid for six hours." data-o="play|will be playing|will have been playing" data-a="2" data-why="by 10 pm + for six hours → сколько будет длиться к моменту в будущем → will have been playing."></div>
<div class="mini" data-q="By June I ___ 10 books." data-o="will have read|will have been reading|read" data-a="0" data-why="10 книг — результат (сколько), не срок → Future Perfect: will have read."></div>`,
    ex: [
      { q: "By June, I ___ English for a year.", v: 'learn', o: ['will learn', 'will have been learning', 'am learning'], a: 1, why: "By June + for a year → сколько будет длиться к моменту в будущем → will have been learning." },
      { q: "Next month we ___ on this game for three years.", v: 'work', o: ['will have been working', 'will be working', 'work'], a: 0, why: "Next month + for three years → will have been working. will be working не показывает срок." },
      { q: "By the time you arrive, I ___ for two hours!", v: 'wait', o: ['will wait', 'wait', 'will have been waiting'], a: 2, why: "by the time + for two hours → will have been waiting." },
      { q: "In 2027 she ___ as a designer for ten years.", v: 'work', o: ['will have been working', 'worked', 'will work'], a: 0, why: "In 2027 + for ten years → срок к моменту в будущем → will have been working." },
      { q: "By midnight, they ___ this raid for six hours.", v: 'play', o: ['play', 'will have been playing', 'will be playing'], a: 1, why: "By midnight + for six hours → will have been playing. will be playing — без срока." },
      { q: "By the end of the season, the show ___ for twelve years.", v: 'run', o: ['runs', 'will run', 'will have been running'], a: 2, why: "By the end of the season + for twelve years → will have been running." },
      { q: "At 5 pm I ___ for eight hours, so I'll be really tired.", v: 'drive', o: ['drive', 'will drive', 'will have been driving'], a: 2, why: "At 5 pm + for eight hours → сколько уже буду за рулём → will have been driving." },
      { q: "How long ___ you have been living here by next year?", v: '', o: ['do', 'will', 'are'], a: 1, why: "have been living + by next year → How long will you have been living." },
      { q: "By 10 o'clock the kids ___ TV for three hours!", v: 'watch', o: ['will have been watching', 'watched', 'watch'], a: 0, why: "By 10 o'clock + for three hours → will have been watching." },
      { q: "In May, he ___ at this company for five years.", v: 'work', o: ['works', 'will have been working', 'worked'], a: 1, why: "In May + for five years → срок к моменту в будущем → will have been working." },
      { q: "By Friday, it ___ for a whole week.", v: 'rain', o: ['rains', 'will rain', 'will have been raining'], a: 2, why: "By Friday + for a whole week → will have been raining." },
      { q: "By the time the stream ends, I ___ for five hours.", v: 'stream', o: ['will have been streaming', 'stream', 'streamed'], a: 0, why: "By the time + for five hours → will have been streaming." },
      { q: "Next spring we ___ together for twenty years.", v: 'live', o: ['will have been living', 'live', 'lived'], a: 0, why: "Next spring + for twenty years → will have been living." },
      { q: "Next week I ___ Anki every day for a month.", v: 'use', o: ['use', 'will have been using', 'used'], a: 1, why: "Next week + for a month → сколько уже будет длиться → will have been using." }
    ]
  }
]);
