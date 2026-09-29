// Юниты B1 7–8: will be doing, will have done, when I do / when I've done, if и when; can, could, be able to, could have, must и can't (догадки)
COURSE.units.push(
  // ───────────────────────────── UNIT B1-7 ─────────────────────────────
  {
    id: 'b1-7', level: 'B1', num: 7, track: 'main',
    books: { blue: [24, 25] },
    title: 'Will be doing, will have done; when I do / when I\'ve done',
    summary: 'Научимся говорить «завтра в это время я буду лететь», «к пятнице я уже закончу» и правильно строить «когда приеду», «как только закончу», «если опоздаю» — без лишнего will.',
    grammar: [
      {
        title: '1. Главная идея: будущее «в процессе» и будущее «уже готово»',
        html: `
<div class="g-idea">Вы уже знаете <b>will</b> (урок A2-6), going to и Present Continuous для планов (B1-6), а ещё Past Continuous и Past Perfect (A2-1, B1-5). Теперь переносим те же две идеи в будущее: «в тот момент я буду <b>в процессе</b>» и «к тому моменту это <b>уже будет сделано</b>».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Завтра в восемь я <b>буду сидеть</b> в самолёте.</p><p>К пятнице я <b>уже закончу</b> макеты.</p><p><b>Когда приеду</b>, позвоню.</p></div>
  <div><div class="g-h">English</div><p><span class="say">At eight tomorrow I'<b>ll be sitting</b> on a plane.</span></p><p><span class="say">By Friday I'<b>ll have finished</b> the mockups.</span></p><p><span class="say">I'll call you <b>when I arrive</b>.</span></p></div>
</div>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b class="g-v">will be + -ing</b></td><td>в тот момент буду в процессе</td><td><span class="say">I'll be working.</span></td></tr>
<tr><td><b class="g-v">will have + V3</b></td><td>к тому моменту уже сделаю</td><td><span class="say">I'll have finished.</span></td></tr>
<tr><td><b class="g-v">when + Present</b></td><td>«когда…» про будущее</td><td><span class="say">when I arrive</span></td></tr>
</table>
<div class="g-tip">Русский глагол сам делится на «буду делать» и «сделаю». Английскому для этого нужны формы: <b>will be doing</b> ≈ «буду делать (в процессе)», <b>will have done</b> ≈ «уже сделаю к сроку».</div>
<div class="mini" data-q="«К полуночи я уже пройду игру» — какая форма?" data-o="I'll be finishing the game by midnight.|I'll have finished the game by midnight.|I finish the game by midnight." data-a="1" data-why="«Уже, к сроку» — результат готов → will have + V3."></div>`
      },
      {
        title: '2. will be doing — «буду в процессе» в момент будущего',
        html: `
<div class="g-idea"><b>will be doing</b> (Future Continuous) — вы будете <b>посередине</b> действия в определённый момент будущего. Оно началось раньше и ещё не закончилось.</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">will be</span><span class="g-plus">+</span><span class="g-part">глагол-ing</span><span class="g-sep">·</span><span class="g-part">won't be + -ing</span></div>
<p>Сравните один и тот же момент в трёх временах:</p>
<table>
<tr><th>Когда</th><th>Пример</th></tr>
<tr><td>вчера в 10</td><td><span class="say">At ten yesterday I was drawing icons.</span></td></tr>
<tr><td>сейчас</td><td><span class="say">It's ten now. I'm drawing icons.</span></td></tr>
<tr><td>завтра в 10</td><td><span class="say">At ten tomorrow I'll be drawing icons.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">This time next week we'll be lying on a beach.</span> — Через неделю в это время мы будем лежать на пляже.</li>
<li><span class="say">Don't call me between eight and ten. I'll be streaming.</span> — Не звони с восьми до десяти. Я буду на стриме.</li>
<li><span class="say">Will you be sleeping when I get home?</span> — Ты будешь уже спать, когда я приду?</li>
<li><span class="say">If you apply for that job, you'll be wasting your time.</span> — Если подашься на ту работу, только время потратишь.</li>
</ul>
<p><b>will be doing</b> или просто <b>will do</b>? Первое — действие уже идёт в тот момент, второе — начнётся после:</p>
<ul class="g-list">
<li><span class="say">When Max comes, we'll be playing.</span> — Когда Макс придёт, мы уже будем играть <span class="muted">(начали до него)</span>.</li>
<li><span class="say">When Max comes, we'll play.</span> — Когда Макс придёт, мы начнём играть <span class="muted">(после его прихода)</span>.</li>
</ul>
<div class="g-bad">Tomorrow at nine I will work on the logo.</div>
<div class="g-good">Tomorrow at nine I'<b>ll be working</b> on the logo. <span class="muted">— в 9 я буду в процессе</span></div>
<div class="mini" data-q="Don't come at seven — at that time we ___ dinner." data-o="'ll have had|'ll be having|have had" data-a="1" data-why="В 7 ужин будет идти, мы в процессе → will be + -ing."></div>`
      },
      {
        title: '3. will be doing — «так и так будет»: планы, новости, вежливые вопросы',
        html: `
<div class="g-idea">Второе значение <b>will be doing</b>: действие <b>просто случится</b> в будущем в обычном ходе событий — всё уже запланировано. Здесь оно близко к going to и Present Continuous (урок B1-6), но звучит спокойнее и «официальнее».</div>
<ul class="g-list">
<li><span class="say">Later in the stream I'll be talking to the lead designer.</span> — Позже на стриме я поговорю с ведущим дизайнером.</li>
<li><span class="say">The studio will be releasing a new trailer tomorrow.</span> — Студия завтра выпустит новый трейлер.</li>
<li><span class="say">Our best player is ill, so he won't be playing on Saturday.</span> — Наш лучший игрок болен, в субботу он играть не будет.</li>
<li><span class="say">Ladies and gentlemen, we'll be landing in twenty minutes.</span> — Дамы и господа, через двадцать минут мы совершим посадку.</li>
<li><span class="say">I'll be going to the shop later. Do you need anything?</span> — Я позже всё равно пойду в магазин. Тебе что-нибудь нужно?</li>
</ul>
<p>Очень полезный живой приём — <b>вежливо узнать планы</b>, не давя на человека:</p>
<table>
<tr><th>Вопрос</th><th>Как звучит</th></tr>
<tr><td><span class="say">Will you use the car tonight?</span></td><td>прямо, почти просьба</td></tr>
<tr><td><span class="say">Will you be using the car tonight?</span></td><td>мягко: «какие у тебя планы?»</td></tr>
</table>
<p>Например: <span class="say">Will you be using your laptop this evening? Mine is broken.</span> — Ты вечером будешь пользоваться ноутбуком? Мой сломался.</p>
<div class="g-tip">Вопрос с <b>will you be -ing</b> — это «как у тебя по планам?», а не «сделаешь ли ты для меня?». Поэтому он звучит вежливо: собеседнику легко ответить «нет».</div>
<div class="mini" data-q="Как вежливо спросить коллегу о планах: «Ты будешь пользоваться переговоркой после обеда?»" data-o="Will you be using the meeting room after lunch?|Do you use the meeting room after lunch?|Are you use the meeting room after lunch?" data-a="0" data-why="Вежливо узнаём планы → Will you be + -ing."></div>`
      },
      {
        title: '4. will have done — «к тому моменту уже»',
        html: `
<div class="g-idea"><b>will have done</b> (Future Perfect) — действие <b>закончится до</b> какого-то момента в будущем. Почти всегда рядом стоит <b>by</b>: <b>by Friday</b> (к пятнице), <b>by then</b> (к тому времени), <b>by the time…</b> (к тому времени, как…).</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">will have</span><span class="g-plus">+</span><span class="g-part">V3</span><span class="g-sep">·</span><span class="g-part">won't have + V3</span></div>
<ul class="g-list">
<li><span class="say">By Friday I'll have finished all the screens.</span> — К пятнице я закончу все экраны.</li>
<li><span class="say">Don't come at nine. Anna won't be at home — she'll have gone to work.</span> — Не приходи в девять. Анны не будет — она уже уйдёт на работу.</li>
<li><span class="say">We're late. The film will already have started by the time we get there.</span> — Мы опаздываем. Когда доберёмся, фильм уже начнётся.</li>
<li><span class="say">The meeting is at three. I won't have read the brief by then.</span> — Встреча в три. К тому времени я ещё не прочитаю бриф.</li>
<li><span class="say">Will you have fixed the bug by tomorrow?</span> — Ты исправишь баг к завтрашнему дню?</li>
</ul>
<p>С глаголами состояния — «к тому моменту будет уже столько-то лет»:</p>
<table>
<tr><th>Время</th><th>Пример</th></tr>
<tr><td>сейчас (Present Perfect)</td><td><span class="say">I've been a designer for four years.</span></td></tr>
<tr><td>в будущем (Future Perfect)</td><td><span class="say">Next June I'll have been a designer for five years.</span></td></tr>
<tr><td>в прошлом (Past Perfect)</td><td><span class="say">When I got this job, I'd been a designer for two years.</span></td></tr>
</table>
<div class="g-bad">By Monday I will finish the project. <span class="muted">— можно, но не подчёркивает «уже готово»</span></div>
<div class="g-good">By Monday I'<b>ll have finished</b> the project.</div>
<div class="g-tip">Для процесса «уже столько-то времени к моменту» есть и <b>will have been doing</b>: <span class="say">By May I'll have been working here for a year.</span> Встречается редко, но узнавать полезно.</div>
<div class="mini" data-q="The game starts at 8. If we arrive at 8.30, it ___." data-o="will start|'ll have started|'ll be starting" data-a="1" data-why="К 8.30 начало уже произойдёт → will have + V3."></div>
<div class="mini" data-q="Next year they ___ married for ten years." data-o="will be|will have been|are" data-a="1" data-why="Сколько лет будет к моменту в будущем → will have been."></div>`
      },
      {
        title: '5. When I arrive — без will после when, until, as soon as',
        html: `
<div class="g-idea">В предложении «Позвоню, <b>когда приеду</b>» две части. Главная — с <b>will</b> (или повелительное, going to, can, must). А часть со словами времени — <b>when, after, before, while, as soon as, until / till, once, by the time</b> — стоит в <b>настоящем</b>, хотя речь о будущем.</div>
<div class="g-formula"><span class="g-part">I'll call you</span><span class="g-plus">+</span><span class="g-part g-v">when / as soon as / after…</span><span class="g-plus">+</span><span class="g-part">I arrive (Present)</span></div>
<ul class="g-list">
<li><span class="say">I'll send you the file as soon as I get home.</span> — Пришлю файл, как только приду домой.</li>
<li><span class="say">Wait here until I come back.</span> — Жди здесь, пока я не вернусь.</li>
<li><span class="say">What will you do while I'm away?</span> — Что ты будешь делать, пока меня нет?</li>
<li><span class="say">Before you leave, turn off the PC.</span> — Перед тем как уйдёшь, выключи компьютер.</li>
<li><span class="say">When you're in Kazan again, you must visit us.</span> — Когда снова будешь в Казани, обязательно заходи.</li>
<li><span class="say">I wonder where I'll be when I'm forty.</span> — Интересно, где я буду, когда мне будет сорок.</li>
<li><span class="say">By the time the patch comes out, I'll have reached level 60.</span> — К выходу патча я уже дойду до 60-го уровня.</li>
</ul>
<div class="g-bad">I'll call you when I will arrive.</div>
<div class="g-good">I'll call you when I <b>arrive</b>.</div>
<div class="g-bad">Wait until the download will finish.</div>
<div class="g-good">Wait until the download <b>finishes</b>.</div>
<p><b>Ловушка:</b> <b>until</b> — это «пока не…», но отрицания в английском нет: <span class="say">I'll wait until you're ready.</span> — Подожду, пока ты <i>не</i> будешь готов.</p>
<p><b>Но!</b> Если when — это вопрос «когда?» (что-то <i>неизвестно</i>), will остаётся: <span class="say">I don't know when the update will come out.</span> — Не знаю, когда выйдет обновление. Здесь when — не «в момент, когда», а «когда именно?».</p>
<div class="g-tip">Правило: «в момент, когда / пока / как только» → Present. «Не знаю, когда…» (спрашиваем о времени) → will.</div>
<div class="mini" data-q="Let's wait until it ___ raining." data-o="will stop|stops|stopped" data-a="1" data-why="После until про будущее — Present: stops."></div>
<div class="mini" data-q="Do you know when Kate ___ back? She hasn't bought a ticket yet." data-o="comes|will come|came" data-a="1" data-why="Это вопрос «когда именно?» (неизвестно) → will сохраняется."></div>`
      },
      {
        title: '6. When I\'ve done — «когда уже сделаю»',
        html: `
<div class="g-idea">После <b>when, after, until, as soon as, once</b> можно поставить <b>Present Perfect</b> (have done). Это подчёркивает: сначала одно <b>полностью закончится</b>, потом начнётся другое.</div>
<ul class="g-list">
<li><span class="say">Can I borrow the book when you've finished it?</span> — Можно взять книгу, когда ты её дочитаешь?</li>
<li><span class="say">When I've sent the report, we can go for lunch.</span> — Когда отправлю отчёт, можем пойти обедать <span class="muted">(сначала отчёт, потом обед)</span>.</li>
<li><span class="say">Don't say anything until he has left.</span> — Ничего не говори, пока он не уйдёт.</li>
<li><span class="say">Once you've tried this game, you won't stop.</span> — Стоит попробовать эту игру — не остановишься.</li>
</ul>
<p>Если два действия идут <b>одновременно</b>, Present Perfect не нужен:</p>
<div class="g-bad">When I've called Kate, I'll ask her about the party. <span class="muted">— спрашивать буду во время звонка</span></div>
<div class="g-good">When I <b>call</b> Kate, I'll ask her about the party.</div>
<p>Часто подходит и то и другое — смысл почти тот же:</p>
<ul class="g-list">
<li><span class="say">I'll join as soon as I finish.</span> = <span class="say">I'll join as soon as I've finished.</span></li>
<li><span class="say">You'll feel better after you eat something.</span> = <span class="say">You'll feel better after you've eaten something.</span></li>
</ul>
<div class="g-tip">Русское «когда <b>сделаю</b>» (совершенный вид, «уже») часто хорошо ложится на <b>when I've done</b>, а «когда <b>буду делать</b>» — на <b>when I do / when I'm doing</b>.</div>
<div class="mini" data-q="You can play when you ___ your homework. (сначала домашка)" data-o="will do|'ve done|'ll have done" data-a="1" data-why="После when нельзя will; «сначала закончишь» → Present Perfect: you've done."></div>`
      },
      {
        title: '7. If или when: «если» против «когда»',
        html: `
<div class="g-idea">После <b>if</b> тоже ставим настоящее время вместо will (это вы помните по уроку A2-20). Разница по смыслу: <b>when</b> — это точно случится, <b>if</b> — может, случится, а может, нет.</div>
<table>
<tr><th>Уверенность</th><th>Пример</th></tr>
<tr><td>точно иду</td><td><span class="say">I'm going out later. When I go out, I'll buy some milk.</span></td></tr>
<tr><td>может, пойду</td><td><span class="say">I might go out later. If I go out, I'll buy some milk.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Don't worry if I'm late tonight.</span> — Не волнуйся, если я сегодня задержусь.</li>
<li><span class="say">If it's raining in the evening, we won't go out.</span> — Если вечером будет дождь, мы не пойдём гулять.</li>
<li><span class="say">If they don't come soon, I'm not going to wait.</span> — Если они скоро не придут, я ждать не стану.</li>
<li><span class="say">I'll be angry if it happens again.</span> — Я разозлюсь, если это повторится.</li>
</ul>
<div class="g-bad">When I lose, I'll delete the game. <span class="muted">— звучит, будто проигрыш неизбежен</span></div>
<div class="g-good"><b>If</b> I lose, I'll delete the game.</div>
<div class="g-bad">If I will have time, I'll help you.</div>
<div class="g-good">If I <b>have</b> time, I'll help you.</div>
<p><b>Как и с when:</b> если <b>if</b> значит «ли», will остаётся: <span class="say">I don't know if Max will come.</span> — Не знаю, придёт <i>ли</i> Макс.</p>
<div class="g-tip">Проверка: можно ли заменить на «ли»? Да → will можно. Это «если / когда / как только» → только Present.</div>
<div class="mini" data-q="___ I see Tom tomorrow, I'll give him the key. (не уверен, что увижу)" data-o="When|If|Until" data-a="1" data-why="Не уверены, что встреча будет → if."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I'll text you when I will get home.</div><div class="g-good">I'll text you when I <b>get</b> home.</div>
<div class="g-bad">At midnight I will sleep, so don't call. <span class="muted">— «в процессе»</span></div><div class="g-good">At midnight I'<b>ll be sleeping</b>, so don't call.</div>
<div class="g-bad">By July I will have finish the course.</div><div class="g-good">By July I'll have <b>finished</b> the course.</div>
<div class="g-bad">Wait until I will be ready.</div><div class="g-good">Wait until I'<b>m</b> ready.</div>
<div class="g-bad">If it will rain, we'll stay at home.</div><div class="g-good">If it <b>rains</b>, we'll stay at home.</div>
<div class="g-bad">Don't worry when I'm late.</div><div class="g-good">Don't worry <b>if</b> I'm late.</div>
<div class="g-bad">I don't know when he comes back. <span class="muted">— вопрос «когда?»</span></div><div class="g-good">I don't know when he <b>will come</b> back.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>will be doing</b> — буду в процессе · <b>will have done</b> — к сроку уже сделаю · после <b>when / until / as soon as / if</b> — Present или Present Perfect, а не will.</div>`
      }
    ],
    words: [
      ['by', 'к (сроку), не позже', 'I\'ll have finished it by Friday.', 'Я закончу это к пятнице.'],
      ['by the time', 'к тому времени, как', 'By the time you arrive, we\'ll have eaten.', 'К тому времени, как ты приедешь, мы уже поедим.'],
      ['by then', 'к тому времени', 'The shop closes at six. By then I\'ll be home.', 'Магазин закрывается в шесть. К тому времени я буду дома.'],
      ['this time tomorrow', 'завтра в это же время', 'This time tomorrow I\'ll be flying to Spain.', 'Завтра в это время я буду лететь в Испанию.'],
      ['in ten years\' time', 'через десять лет', 'Where will you be living in ten years\' time?', 'Где ты будешь жить через десять лет?'],
      ['as soon as', 'как только', 'Call me as soon as you land.', 'Позвони, как только приземлишься.'],
      ['until', 'до, пока не', 'Wait until the update finishes.', 'Подожди, пока обновление не закончится.'],
      ['once', 'как только, стоит только', 'Once you\'ve tried it, you\'ll love it.', 'Стоит попробовать — полюбишь.'],
      ['while', 'пока, в то время как', 'Water my plants while I\'m away.', 'Поливай мои цветы, пока меня нет.'],
      ['deadline', 'крайний срок, дедлайн', 'By the deadline we\'ll have tested everything.', 'К дедлайну мы всё протестируем.'],
      ['release', 'выпускать; релиз', 'The studio will be releasing the game in May.', 'Студия выпустит игру в мае.'],
      ['launch', 'запускать; запуск', 'After the launch we\'ll have a party.', 'После запуска у нас будет вечеринка.'],
      ['update', 'обновление; обновлять', 'I\'ll play when the update comes out.', 'Я поиграю, когда выйдет обновление.'],
      ['complete', 'завершать; полный', 'Will you have completed the tasks by noon?', 'Ты завершишь задачи к полудню?'],
      ['arrive', 'прибывать, приезжать', 'The film will have started when we arrive.', 'Когда мы приедем, фильм уже начнётся.'],
      ['land', 'приземляться', 'We\'ll be landing in ten minutes.', 'Через десять минут мы приземлимся.'],
      ['get back', 'возвращаться', 'Will you still be here when I get back?', 'Ты ещё будешь здесь, когда я вернусь?'],
      ['away', 'в отъезде, не на месте', 'Who will feed the cat while you\'re away?', 'Кто будет кормить кошку, пока тебя нет?'],
      ['retire', 'уходить на пенсию', 'By the time I retire, I\'ll have made a hundred games.', 'К пенсии я сделаю сто игр.'],
      ['graduate', 'окончить вуз; выпускник', 'She\'ll be working here when she graduates.', 'Она будет работать здесь, когда окончит вуз.'],
      ['schedule', 'расписание, график', 'According to the schedule, we\'ll be testing all week.', 'По графику мы всю неделю будем тестировать.'],
      ['expect', 'ожидать', 'I expect we\'ll have sold a million copies by June.', 'Думаю, к июню мы продадим миллион копий.'],
      ['pack', 'собирать вещи', 'I\'ll call you when I\'ve packed.', 'Я позвоню, когда соберу вещи.'],
      ['hurry', 'спешить', 'If we don\'t hurry, we\'ll miss the train.', 'Если не поспешим, опоздаем на поезд.'],
      ['miss', 'пропустить, опоздать на', 'Hurry, or we\'ll miss the bus!', 'Быстрее, а то опоздаем на автобус!'],
      ['stream', 'стримить; стрим', 'Don\'t call at nine. I\'ll be streaming.', 'Не звони в девять. Я буду на стриме.'],
      ['borrow', 'брать на время', 'Can I borrow it when you\'ve finished?', 'Можно взять, когда ты закончишь?'],
      ['wonder', 'интересоваться, задаваться вопросом', 'I wonder where I\'ll be when I\'m forty.', 'Интересно, где я буду, когда мне будет сорок.'],
      ['waste', 'тратить впустую', 'You\'ll be wasting your time if you wait.', 'Ты только зря потратишь время, если будешь ждать.'],
      ['on time', 'вовремя', 'If we leave now, we\'ll get there on time.', 'Если выйдем сейчас, приедем вовремя.']
    ],
    texts: [
      {
        id: 't-b1-7-1', title: 'Launch week', level: 'B1',
        text: `Our small studio is releasing its first game next Friday, and my calendar looks like a battle plan.
This time next week I'll be sitting in front of three screens, watching the sales numbers and reading the first reviews. My colleague Oleg will be answering players on Discord, and our producer, Irina, will be talking to journalists all day. Nobody will be sleeping much.
But before that, there is a lot to do. By Monday evening I'll have finished the last icons for the shop. As soon as I send them, Oleg will add them to the build. If he finds any problems, he'll tell me immediately, and I'll fix them before I go home. On Tuesday the testers will be playing the game from morning till night. By Wednesday they'll have found most of the bugs, I hope.
Irina has a strict rule: nobody leaves on Thursday until the final version has been uploaded. So on Thursday we'll probably be eating pizza at the office at midnight.
I often wonder how I'll feel when the game finally comes out. Happy? Scared? Probably both. If the reviews are bad, I'll be upset for a day or two. But when I've rested, I'll start thinking about the next project.
One thing I know for sure: by the time the game is released, I'll have been working on it for two years. That's a long time. Some of my friends will have forgotten what I look like!
So if you don't hear from me this week, don't worry. I'll call you once the launch is over. And when you buy the game, please leave a nice review.`,
        questions: [
          { q: 'What will the writer be doing this time next week?', o: ['Drawing new icons', 'Watching sales numbers and reading reviews', 'Travelling with friends'], a: 1 },
          { q: 'What will happen by Monday evening?', o: ['The testers will have found all the bugs.', 'The writer will have finished the last icons.', 'The game will have come out.'], a: 1 },
          { q: 'How long will the writer have been working on the game by the release?', o: ['One year', 'Two years', 'Six months'], a: 1 }
        ]
      },
      {
        id: 't-b1-7-2', title: 'Road trip plans', level: 'B1',
        text: `Anna: Hi, Max. Will you be using your car on Saturday? Mine is at the garage.
Max: No, I'll be working from home all weekend. Why?
Anna: Kate and I want to drive to the lake. We'll leave early, before it gets hot.
Max: Sure, you can take it. But I'll need it back by Sunday evening. On Monday I'm driving to a client.
Anna: No problem. We'll have brought it back by six on Sunday.
Max: Great. When you get to the lake, send me a photo. I'll be sitting at my desk, and I'll be very jealous.
Anna: Ha! I will. By the way, what time will you be finishing on Friday? We could pick up the keys then.
Max: Probably around seven. If I finish earlier, I'll text you.
Anna: Perfect. And don't worry, I'll fill up the tank before I bring it back.
Max: Thanks. Oh, and one more thing. The radio doesn't work until the engine has warmed up. Just wait a few minutes.
Anna: Got it. Kate says she'll drive when I get tired.
Max: Fine, but only if she has her licence with her this time!
Anna: She will, I promise. Do you know if the road to the lake will be open? I read they were repairing it.
Max: I'm not sure. Check the map app as soon as you leave. If it's closed, take the road through the forest.
Anna: OK. What will you be doing on Saturday evening?
Max: Honestly? By then I'll have finished the presentation, so I'll probably be lying on the sofa and watching a series.
Anna: Sounds like a plan. See you on Friday!`,
        questions: [
          { q: 'Why does Anna need Max\'s car?', o: ['Her car is at the garage.', 'She doesn\'t have a licence.', 'Max is going away.'], a: 0 },
          { q: 'When does Max need the car back?', o: ['By Saturday morning', 'By Sunday evening', 'By Monday evening'], a: 1 },
          { q: 'What will Max probably be doing on Saturday evening?', o: ['Driving to a client', 'Swimming in the lake', 'Lying on the sofa and watching a series'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Don\'t call me at nine tomorrow. I ___ a meeting with the client.', o: ['\'ll have had', '\'ll be having', 'have had'], a: 1, why: 'В девять встреча будет идти, я в процессе → will be + -ing.' },
      { t: 'choice', q: 'By the end of the month we ___ the whole interface.', o: ['\'ll have redesigned', '\'ll be redesigning', 'redesign'], a: 0, why: 'By + срок, результат готов → will have + V3.' },
      { t: 'choice', q: 'I\'ll send you the link as soon as the stream ___.', o: ['will start', 'starts', 'is going to start'], a: 1, why: 'После as soon as про будущее — Present: starts.' },
      { t: 'choice', q: '___ you be using the printer this afternoon? I need to print a poster.', o: ['Do', 'Will', 'Are'], a: 1, why: 'Вежливо узнаём планы: Will you be + -ing.' },
      { t: 'choice', q: 'Don\'t worry ___ I\'m a bit late. The traffic is bad.', o: ['when', 'if', 'until'], a: 1, why: 'Опоздание не точно, только возможно → if.' },
      { t: 'choice', q: 'Can I have the controller when you ___ this level?', o: ['\'ve finished', '\'ll finish', '\'ll have finished'], a: 0, why: 'Сначала закончишь, потом отдашь → when + Present Perfect, без will.' },
      { t: 'choice', q: 'Hurry! By the time we get there, the concert ___.', o: ['will already start', 'will already have started', 'already starts'], a: 1, why: 'К моменту нашего прихода начало уже произойдёт → will have + V3.' },
      { t: 'choice', q: 'I don\'t know when the new season ___ out. They haven\'t announced the date yet.', o: ['comes', 'will come', 'has come'], a: 1, why: 'Здесь when = «когда именно?» (неизвестно) → will сохраняется.' },
      { t: 'gap', q: 'This time next week I ___ on a beach in Turkey. (lie)', a: ['will be lying', '\'ll be lying'], why: 'Момент в будущем + действие в процессе → will be + -ing.' },
      { t: 'gap', q: 'Wait here until I ___ back. (come)', a: ['come'], why: 'После until про будущее — Present: come.' },
      { t: 'gap', q: 'By 2030 I ___ in this city for ten years. (live)', a: ['will have lived', '\'ll have lived', 'will have been living', '\'ll have been living'], why: 'Сколько лет к моменту в будущем → will have + V3.' },
      { t: 'gap', q: 'If it ___ tomorrow, we\'ll play at home. (rain)', a: ['rains'], why: 'После if про будущее — Present, he/it → -s.' },
      { t: 'gap', q: 'Our goalkeeper is injured, so he ___ in the final. (not / play)', a: ['won\'t be playing', 'will not be playing', 'won\'t play', 'will not play'], why: 'Так сложились обстоятельства, «не будет играть» → won\'t be + -ing (won\'t play тоже верно).' },
      { t: 'gap', q: 'Sarah ___ home by nine — she always leaves at 8.30. (leave)', a: ['will have left', '\'ll have left'], why: 'К девяти уход уже произойдёт → will have + V3.' },
      { t: 'order', a: 'I will call you when I arrive', ru: 'Я позвоню тебе, когда приеду.' },
      { t: 'order', a: 'Will you be using your laptop tonight', ru: 'Ты будешь пользоваться ноутбуком сегодня вечером?' },
      { t: 'tr', q: 'К понедельнику я закончу макет.', a: ['i will have finished the mockup by monday', 'i\'ll have finished the mockup by monday', 'by monday i will have finished the mockup', 'by monday i\'ll have finished the mockup', 'i will have finished the layout by monday', 'i\'ll have finished the layout by monday', 'by monday i will have finished the layout', 'by monday i\'ll have finished the layout', 'i will have finished the mock-up by monday', 'i\'ll have finished the mock-up by monday', 'by monday i will have finished the mock-up', 'by monday i\'ll have finished the mock-up', 'i will finish the mockup by monday', 'i\'ll finish the mockup by monday', 'by monday i will finish the mockup', 'by monday i\'ll finish the mockup', 'i will finish the layout by monday', 'i\'ll finish the layout by monday', 'by monday i\'ll finish the layout'] },
      { t: 'tr', q: 'Завтра в восемь я буду работать.', a: ['at eight tomorrow i will be working', 'at eight tomorrow i\'ll be working', 'tomorrow at eight i will be working', 'tomorrow at eight i\'ll be working', 'i will be working at eight tomorrow', 'i\'ll be working at eight tomorrow', 'i will be working tomorrow at eight', 'i\'ll be working tomorrow at eight', 'at 8 tomorrow i\'ll be working', 'tomorrow at 8 i\'ll be working', 'i\'ll be working at 8 tomorrow', 'at 8 tomorrow i will be working', 'tomorrow at 8 i will be working', 'i will be working at 8 tomorrow', 'i will be working tomorrow at 8', 'i\'ll be working tomorrow at 8'] },
      { t: 'listen', say: 'I\'ll text you as soon as I get home.', a: ['i\'ll text you as soon as i get home', 'i will text you as soon as i get home'] }
    ],
    test: [
      { t: 'choice', q: 'When Max arrives, we ___ dinner, so he can join us at the table.', o: ['\'ll be having', '\'ll have had', 'have'], a: 0, why: 'Когда он придёт, ужин будет идти → will be + -ing.' },
      { t: 'choice', q: 'When Max arrives, we ___ dinner, so there will be nothing left for him.', o: ['\'ll be having', '\'ll have had', '\'re having'], a: 1, why: 'Ужин закончится до его прихода → will have + V3.' },
      { t: 'choice', q: 'I\'ll lend you the book after I ___ it.', o: ['will read', '\'ve read', '\'ll have read'], a: 1, why: 'После after нельзя will; сначала дочитаю → Present Perfect.' },
      { t: 'choice', q: 'Which sentence is correct?', o: ['When I call Anna, I\'ll ask her about the tickets.', 'When I\'ve called Anna, I\'ll ask her about the tickets.', 'When I\'ll call Anna, I\'ll ask her about the tickets.'], a: 0, why: 'Спрашиваю во время звонка — действия одновременно → Present Simple, не Perfect.' },
      { t: 'choice', q: 'I\'m going to the supermarket later. ___ I go, I\'ll buy some coffee.', o: ['If', 'When', 'Until'], a: 1, why: 'Поход точно будет → when.' },
      { t: 'choice', q: 'Ladies and gentlemen, in a few minutes we ___ our descent.', o: ['will be starting', 'will have started', 'start'], a: 0, why: 'Плановое событие, спокойный «официальный» тон → will be + -ing.' },
      { t: 'choice', q: 'Max has been really busy. I wonder if he ___ to the party tomorrow.', o: ['comes', 'will come', 'would'], a: 1, why: 'if = «ли» (вопрос, неизвестно) → will можно и нужно.' },
      { t: 'gap', q: 'I\'m sure you ___ me when you see me — I\'ve changed a lot. (not / recognise)', a: ['won\'t recognise', 'will not recognise', 'won\'t recognize', 'will not recognize'], why: 'Главная часть — будущее с will; will стоит в главной, а не после when.' },
      { t: 'gap', q: 'Don\'t turn off the PC before the update ___. (finish)', a: ['finishes', 'has finished', '\'s finished'], why: 'После before — Present Simple или Present Perfect, не will.' },
      { t: 'gap', q: 'By the time you read this letter, I ___ the country. (leave)', a: ['will have left', '\'ll have left'], why: 'К моменту в будущем действие уже завершится → will have + V3.' },
      { t: 'gap', q: '___ you be coming to the office tomorrow? I\'d like to show you the new screens.', a: ['Will'], why: 'Вежливо узнаём планы: Will you be + -ing.' },
      { t: 'gap', q: 'We\'ll start the raid once everybody ___ online. (be)', a: ['is'], why: 'После once про будущее — Present: everybody is.' }
    ]
  },

  // ───────────────────────────── UNIT B1-8 ─────────────────────────────
  {
    id: 'b1-8', level: 'B1', num: 8, track: 'main',
    books: { blue: [26, 27, 28] },
    title: 'Can, could, be able to; could have; must и can\'t (догадки)',
    summary: 'Научимся различать «умел» и «сумел» (could и managed to), говорить «мог бы, но не сделал» (could have), предлагать «можем сходить…» и делать уверенные догадки: «ты, должно быть, устал», «он не мог этого сказать».',
    grammar: [
      {
        title: '1. Главная идея: одно русское «мочь» — много английских оттенков',
        html: `
<div class="g-idea">Вы уже знаете <b>can / can't</b> (A1-7), <b>could</b> для прошлого и вежливых просьб, <b>might</b> (A2-7). Теперь тонкости: как сказать «<b>сумел</b>» (не всегда could!), «<b>мог бы, но не сделал</b>», «<b>можем</b> сходить в кино» и как делать догадки «<b>должно быть</b>» и «<b>не может быть</b>».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>смог</b> найти ключи.</p><p>Ты <b>мог бы</b> мне сказать!</p><p><b>Можем</b> сходить в кино.</p><p>Ты, <b>должно быть</b>, устал.</p><p>Он <b>не мог</b> этого сказать.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>managed to</b> find the keys.</span></p><p><span class="say">You <b>could have</b> told me!</span></p><p><span class="say">We <b>could</b> go to the cinema.</span></p><p><span class="say">You <b>must</b> be tired.</span></p><p><span class="say">He <b>can't have</b> said that.</span></p></div>
</div>
<table>
<tr><th>Форма</th><th>Смысл</th></tr>
<tr><td><b class="g-v">be able to</b></td><td>«мочь» там, где can не встаёт</td></tr>
<tr><td><b class="g-v">managed to</b></td><td>сумел в конкретный раз</td></tr>
<tr><td><b class="g-v">could + глагол</b></td><td>умел; или «можно бы», «вдруг»</td></tr>
<tr><td><b class="g-v">could have + V3</b></td><td>мог бы, но не случилось</td></tr>
<tr><td><b class="g-v">must / can't</b></td><td>точно так / точно не так (догадка)</td></tr>
</table>
<div class="mini" data-q="«Ты мог бы мне сказать!» (но не сказал)" data-o="You could tell me!|You could have told me!|You can have told me!" data-a="1" data-why="Возможность была в прошлом, но не использована → could have + V3."></div>`
      },
      {
        title: '2. can и be able to: все формы',
        html: `
<div class="g-idea"><b>can</b> — это умение, возможность или разрешение. Но у can всего две формы: <b>can</b> и <b>could</b>. Там, где нужна другая форма (будущее, Perfect, после другого модального, после to), берём <b>be able to</b>.</div>
<ul class="g-list">
<li><span class="say">You can see the sea from our window.</span> — Из нашего окна видно море <span class="muted">(возможность)</span>.</li>
<li><span class="say">You can use my charger.</span> — Можешь взять мою зарядку <span class="muted">(разрешение)</span>.</li>
<li><span class="say">The word "play" can be a noun or a verb.</span> — Слово play может быть существительным или глаголом <span class="muted">(так бывает)</span>.</li>
</ul>
<table>
<tr><th>Нужно</th><th>Форма</th><th>Пример</th></tr>
<tr><td>будущее</td><td><b>will be able to</b></td><td><span class="say">Soon you'll be able to read without a dictionary.</span></td></tr>
<tr><td>Present Perfect</td><td><b>have been able to</b></td><td><span class="say">I haven't been able to sleep lately.</span></td></tr>
<tr><td>после might / must / should</td><td><b>might be able to</b></td><td><span class="say">Tom might be able to help us.</span></td></tr>
<tr><td>после used to / want / like</td><td><b>to be able to</b></td><td><span class="say">I'd love to be able to draw like her.</span></td></tr>
<tr><td>-ing</td><td><b>being able to</b></td><td><span class="say">I love being able to work from home.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I used to be able to play for ten hours without a break.</span> — Раньше я мог играть по десять часов без перерыва.</li>
<li><span class="say">Applicants must be able to speak English.</span> — Кандидаты должны уметь говорить по-английски.</li>
</ul>
<div class="g-bad">I will can help you tomorrow.</div>
<div class="g-good">I'<b>ll be able to</b> help you tomorrow. <span class="muted">(или просто I can help you tomorrow)</span></div>
<div class="g-tip">Два модальных глагола подряд не бывают: <s>will can</s>, <s>must can</s>, <s>might can</s>. Второй всегда превращается в <b>be able to</b>.</div>
<div class="mini" data-q="I ___ log in since the update." data-o="can't|haven't been able to|couldn't be able to" data-a="1" data-why="Нужен Present Perfect (since) — у can его нет → haven't been able to."></div>`
      },
      {
        title: '3. could или managed to: «умел» и «сумел»',
        html: `
<div class="g-idea"><b>could</b> в прошлом — это <b>общее умение</b> («умел вообще») или «было можно». А чтобы сказать «<b>сумел, получилось</b> в конкретной ситуации», берём <b>managed to</b> или <b>was / were able to</b>. Это главная ловушка для русскоговорящих: «смог» ≠ could.</div>
<table>
<tr><th>Смысл</th><th>Пример</th></tr>
<tr><td>умел вообще</td><td><span class="say">My grandad could fix any radio.</span></td></tr>
<tr><td>было разрешено</td><td><span class="say">At my old job we could work from anywhere.</span></td></tr>
<tr><td>сумел в этот раз</td><td><span class="say">The boss was hard, but we managed to beat him.</span></td></tr>
<tr><td>сумел в этот раз</td><td><span class="say">The server crashed, but I was able to save the file.</span></td></tr>
</table>
<div class="g-bad">I lost my phone yesterday, but I could find it in the evening.</div>
<div class="g-good">I lost my phone yesterday, but I <b>managed to</b> find it in the evening.</div>
<p>А вот отрицание <b>couldn't</b> подходит <b>везде</b> — и для «не умел», и для «не сумел в этот раз»:</p>
<ul class="g-list">
<li><span class="say">My grandad couldn't swim.</span> — Дедушка не умел плавать.</li>
<li><span class="say">I tried for an hour, but I couldn't beat the boss.</span> — Я целый час пытался, но не смог победить босса.</li>
</ul>
<p><b>Исключение:</b> с глаголами восприятия и понимания — <b>see, hear, smell, taste, feel, remember, understand</b> — could нормально и для конкретного момента:</p>
<ul class="g-list">
<li><span class="say">When I opened the door, I could smell smoke.</span> — Когда я открыл дверь, почувствовал запах дыма.</li>
<li><span class="say">I was at the back, so I couldn't hear the speaker.</span> — Я сидел сзади и не слышал докладчика.</li>
<li><span class="say">I could understand every word of the podcast!</span> — Я понимал каждое слово подкаста!</li>
</ul>
<div class="g-tip"><b>managed to</b> = «с трудом, но справился». Если в русском можно сказать «удалось» — почти всегда нужен managed to, а не could.</div>
<div class="mini" data-q="The fire spread fast, but everyone ___ escape." data-o="could|was able to|can" data-a="1" data-why="Конкретный случай, «удалось» → was able to / managed to, не could."></div>
<div class="mini" data-q="From the hotel we ___ see the mountains." data-o="could|managed to|were able" data-a="0" data-why="С see — could подходит даже для конкретного момента."></div>`
      },
      {
        title: '4. could — не только прошлое: «можно бы», «вдруг», «я бы мог»',
        html: `
<div class="g-idea"><b>could</b> часто говорит о <b>настоящем и будущем</b>. Три главных значения: мягкое предложение, нереальное «я бы мог», и «вполне возможно».</div>
<p><b>а) Предложения и идеи</b> — мягче, чем can:</p>
<ul class="g-list">
<li><span class="say">What shall we do tonight? — We could watch the new episode.</span> — Что будем делать вечером? — Можем посмотреть новую серию.</li>
<li><span class="say">You could ask Kate. She knows Figma really well.</span> — Можешь спросить Кейт. Она отлично знает Фигму.</li>
</ul>
<p><b>б) Нереальное, преувеличение</b> — только could, не can:</p>
<ul class="g-list">
<li><span class="say">I'm so tired I could sleep for a week.</span> — Я так устал, что проспал бы неделю.</li>
<li><span class="say">This place is amazing. I could stay here forever.</span> — Тут потрясающе. Я бы остался здесь навсегда.</li>
</ul>
<p><b>в) «Вполне возможно» про конкретную ситуацию</b> — could, а can — «так бывает вообще»:</p>
<table>
<tr><th>can — в целом</th><th>could — сейчас / в будущем</th></tr>
<tr><td><span class="say">Online games can be addictive.</span></td><td><span class="say">This game could be a hit.</span></td></tr>
<tr><td><span class="say">The weather can change fast here.</span></td><td><span class="say">It's sunny, but it could rain later.</span></td></tr>
</table>
<div class="g-bad">The story can be true, but I doubt it.</div>
<div class="g-good">The story <b>could</b> be true, but I doubt it.</div>
<p><b>couldn't</b> в настоящем = «было бы невозможно для меня»:</p>
<ul class="g-list">
<li><span class="say">I couldn't live without the internet.</span> — Я бы не смог жить без интернета.</li>
<li><span class="say">Everything is great. Things couldn't be better!</span> — Всё отлично. Лучше и быть не может!</li>
<li><span class="say">I couldn't run ten kilometres now.</span> — Сейчас я бы не пробежал десять километров. <span class="muted">(ср.: <span class="say">I couldn't run yesterday</span> — вчера не смог)</span></li>
</ul>
<div class="mini" data-q="«Я так голоден, что съел бы слона»" data-o="I'm so hungry I can eat an elephant.|I'm so hungry I could eat an elephant.|I'm so hungry I must eat an elephant." data-a="1" data-why="Нереальное, преувеличение → could, не can."></div>`
      },
      {
        title: '5. could have done — «мог бы, но не…»',
        html: `
<div class="g-idea"><b>could have + V3</b> — в прошлом что-то было <b>возможно, но не случилось</b>. По-русски — «мог бы», «мог(ла) бы и…», «чуть не».</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">could have</span><span class="g-plus">+</span><span class="g-part">V3</span><span class="g-sep">·</span><span class="g-part">couldn't have + V3</span></div>
<ul class="g-list">
<li><span class="say">Why did you take a taxi? I could have picked you up.</span> — Зачем ты взял такси? Я мог бы тебя забрать.</li>
<li><span class="say">You could have told me the meeting was cancelled!</span> — Мог бы и сказать, что встречу отменили! <span class="muted">(упрёк)</span></li>
<li><span class="say">He was lucky. He could have broken his leg.</span> — Ему повезло. Он мог сломать ногу.</li>
<li><span class="say">We could have won, but our healer disconnected.</span> — Мы могли выиграть, но наш хилер отключился.</li>
<li><span class="say">I could have gone to art school, but I chose design.</span> — Я мог бы пойти в художку, но выбрал дизайн.</li>
</ul>
<p>Сравните настоящее и прошлое:</p>
<table>
<tr><th>Сейчас</th><th>В прошлом</th></tr>
<tr><td><span class="say">It's bad, but it could be worse.</span></td><td><span class="say">It was bad, but it could have been worse.</span></td></tr>
<tr><td><span class="say">Things couldn't be better.</span></td><td><span class="say">The trip couldn't have been better.</span></td></tr>
</table>
<div class="g-bad">You could tell me yesterday! <span class="muted">— про упущенную возможность</span></div>
<div class="g-good">You <b>could have told</b> me yesterday!</div>
<div class="g-tip">В речи could have звучит как <b>«куд-ов»</b> — could've. Поэтому даже носители иногда пишут <s>could of</s>. Это ошибка: правильно <b>could have</b>.</div>
<div class="mini" data-q="Why did you stay at a hotel? You ___ with us." data-o="could stay|could have stayed|can have stayed" data-a="1" data-why="Была возможность в прошлом, но не использовали → could have + V3."></div>`
      },
      {
        title: '6. must и can\'t — «должно быть» и «не может быть»',
        html: `
<div class="g-idea">Кроме «надо» (A2-8), <b>must</b> умеет делать <b>уверенную догадку</b>: «я почти уверен, что это так». Противоположность — <b>can't</b>: «я уверен, что это не так». Это как детектив: есть факты → делаем вывод.</div>
<table>
<tr><th>Уверенность</th><th>Слово</th><th>Пример</th></tr>
<tr><td>почти 100% да</td><td><b class="g-v">must</b></td><td><span class="say">He must be at home.</span></td></tr>
<tr><td>возможно</td><td><b>might / could / may</b></td><td><span class="say">He might be at home.</span></td></tr>
<tr><td>почти 100% нет</td><td><b class="g-v">can't</b></td><td><span class="say">He can't be at home.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part g-v">must / can't</span><span class="g-plus">+</span><span class="g-part">be / be + -ing / know / have…</span></div>
<ul class="g-list">
<li><span class="say">You've been coding all day. You must be exhausted.</span> — Ты весь день программировал. Ты, должно быть, вымотан.</li>
<li><span class="say">Kate isn't answering. She must be driving.</span> — Кейт не отвечает. Наверняка она за рулём.</li>
<li><span class="say">He does the same task every day. He must get bored.</span> — Он каждый день делает одно и то же. Ему, должно быть, скучно.</li>
<li><span class="say">You've just had lunch. You can't be hungry again!</span> — Ты только что пообедал. Не может быть, что ты опять голоден!</li>
<li><span class="say">That can't be Tom. Tom is in Spain.</span> — Это не может быть Том. Том в Испании.</li>
<li><span class="say">Max says he'll pay? You must be joking!</span> — Макс сказал, что заплатит? Шутишь, что ли!</li>
</ul>
<div class="g-bad">You've just woken up. You mustn't be tired.</div>
<div class="g-good">You've just woken up. You <b>can't</b> be tired.</div>
<div class="g-tip"><b>mustn't</b> = «нельзя» (запрет), а не «не может быть». Для отрицательной догадки — всегда <b>can't</b>. <span class="muted">(В американском английском иногда слышно must not для догадки, но can't понятен везде.)</span></div>
<div class="mini" data-q="This restaurant is always empty. The food ___ be very good." data-o="must|mustn't|can't" data-a="2" data-why="Уверены, что НЕ так → can't (не mustn't)."></div>`
      },
      {
        title: '7. must have done и can\'t have done — догадки о прошлом',
        html: `
<div class="g-idea">Догадка о том, что <b>уже случилось</b>: <b>must have + V3</b> — «наверняка было», <b>can't have / couldn't have + V3</b> — «не может быть, чтобы было».</div>
<div class="g-formula"><span class="g-part g-v">must have / can't have</span><span class="g-plus">+</span><span class="g-part">V3 · been · been + -ing</span></div>
<ul class="g-list">
<li><span class="say">Nobody is answering the door. They must have gone out.</span> — Никто не открывает. Наверно, ушли.</li>
<li><span class="say">I can't find my wallet. I must have left it in the café.</span> — Не могу найти кошелёк. Видимо, оставил в кафе.</li>
<li><span class="say">You lived next to the stadium? It must have been noisy.</span> — Ты жил рядом со стадионом? Там, наверно, было шумно.</li>
<li><span class="say">I didn't hear the phone. I must have been sleeping.</span> — Я не слышал телефон. Наверно, спал.</li>
<li><span class="say">Anna hasn't replied. She can't have seen my message.</span> — Анна не ответила. Не может быть, чтобы она видела сообщение.</li>
<li><span class="say">He walked into the glass door. He couldn't have been looking.</span> — Он врезался в стеклянную дверь. Явно не смотрел, куда идёт.</li>
</ul>
<table>
<tr><th>Настоящее</th><th>Прошлое</th></tr>
<tr><td><span class="say">She must be at work.</span></td><td><span class="say">She must have been at work.</span></td></tr>
<tr><td><span class="say">He can't know the answer.</span></td><td><span class="say">He can't have known the answer.</span></td></tr>
</table>
<div class="g-bad">He must went home.</div>
<div class="g-good">He <b>must have gone</b> home.</div>
<div class="g-tip">Три формы с have + V3 — удобная тройка: <b>must have</b> (наверняка было), <b>could / might have</b> (могло быть или мог бы), <b>can't / couldn't have</b> (не могло быть).</div>
<div class="mini" data-q="The ground is wet. It ___ in the night." data-o="must rain|must have rained|can't have rained" data-a="1" data-why="Вывод о прошлом по факту (мокро) → must have + V3."></div>
<div class="mini" data-q="Sarah hasn't called. She ___ got my message." data-o="mustn't have|can't have|must" data-a="1" data-why="Уверены, что не получила → can't have + V3."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I will can come on Friday.</div><div class="g-good">I'<b>ll be able to</b> come on Friday.</div>
<div class="g-bad">After two hours we could finally find the hotel.</div><div class="g-good">After two hours we <b>managed to</b> find the hotel.</div>
<div class="g-bad">I'm so happy I can dance all night. <span class="muted">— нереальное</span></div><div class="g-good">I'm so happy I <b>could</b> dance all night.</div>
<div class="g-bad">You could call me! <span class="muted">— упрёк о прошлом</span></div><div class="g-good">You <b>could have called</b> me!</div>
<div class="g-bad">She mustn't be at home — her car isn't here.</div><div class="g-good">She <b>can't</b> be at home — her car isn't here.</div>
<div class="g-bad">They must forget about the meeting yesterday.</div><div class="g-good">They <b>must have forgotten</b> about the meeting.</div>
<div class="g-bad">I haven't could sleep this week.</div><div class="g-good">I <b>haven't been able to</b> sleep this week.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>be able to</b> — где can не встаёт · «сумел» = <b>managed to</b> · <b>could</b> — «можно бы», «я бы мог» · <b>could have done</b> — мог, но не случилось · <b>must</b> / <b>can't</b> (+ have done) — уверенные догадки.</div>`
      }
    ],
    words: [
      ['be able to', 'быть в состоянии, мочь', 'I\'ll be able to help you tomorrow.', 'Завтра я смогу тебе помочь.'],
      ['manage to', 'суметь, справиться', 'We managed to beat the final boss.', 'Нам удалось победить финального босса.'],
      ['succeed (in)', 'добиться успеха, преуспеть', 'She succeeded in getting the job.', 'Ей удалось получить эту работу.'],
      ['ability', 'способность, умение', 'You must have the ability to work in a team.', 'Нужно уметь работать в команде.'],
      ['escape', 'сбежать, спастись', 'The fire spread, but everyone was able to escape.', 'Огонь распространился, но все смогли спастись.'],
      ['afford', 'позволить себе (по деньгам)', 'I couldn\'t afford a new PC last year.', 'В прошлом году я не мог позволить себе новый ПК.'],
      ['recognise', 'узнавать', 'I couldn\'t recognise you with a beard!', 'Я не узнал тебя с бородой!'],
      ['solve', 'решать (задачу, загадку)', 'It was hard, but we managed to solve the puzzle.', 'Было трудно, но мы решили головоломку.'],
      ['persuade', 'убедить, уговорить', 'We managed to persuade Max to join us.', 'Нам удалось уговорить Макса присоединиться.'],
      ['beat — beat — beaten', 'победить, обыграть', 'I couldn\'t beat him, but I tried.', 'Я не смог его обыграть, но пытался.'],
      ['suggest', 'предлагать', 'Can I suggest something? We could meet on Friday.', 'Можно предложить? Мы могли бы встретиться в пятницу.'],
      ['realistic', 'реалистичный', 'Is it realistic? — It could work.', 'Это реально? — Может сработать.'],
      ['unfair', 'несправедливый', 'Life can be unfair sometimes.', 'Жизнь иногда бывает несправедливой.'],
      ['worse', 'хуже', 'It was bad, but it could have been worse.', 'Было плохо, но могло быть и хуже.'],
      ['lucky', 'везучий', 'You were lucky. You could have fallen.', 'Тебе повезло. Ты мог упасть.'],
      ['regret', 'сожалеть', 'I regret it. I could have studied harder.', 'Жалею. Мог бы учиться усерднее.'],
      ['certain', 'уверенный, определённый', 'I\'m certain he\'s at home.', 'Я уверен, что он дома.'],
      ['obviously', 'очевидно', 'He obviously can\'t have read the brief.', 'Он явно не читал бриф.'],
      ['guess', 'догадываться; догадка', 'My guess is they must have left early.', 'Я думаю, они ушли пораньше.'],
      ['evidence', 'доказательства, улики', 'There\'s no evidence. It can\'t have been him.', 'Улик нет. Это не мог быть он.'],
      ['clue', 'подсказка, улика', 'The detective found a clue.', 'Детектив нашёл улику.'],
      ['suspect', 'подозревать; подозреваемый', 'I suspect the cat broke the vase.', 'Подозреваю, что вазу разбил кот.'],
      ['mystery', 'загадка, тайна', 'It\'s a mystery. Where could it be?', 'Это загадка. Где оно может быть?'],
      ['explanation', 'объяснение', 'There must be an explanation.', 'Должно быть какое-то объяснение.'],
      ['notice', 'замечать', 'You must have noticed the new logo.', 'Ты наверняка заметил новый логотип.'],
      ['drop', 'ронять', 'I must have dropped my keys somewhere.', 'Наверно, я где-то уронил ключи.'],
      ['exhausted', 'измотанный', 'You must be exhausted after the flight.', 'Ты, должно быть, вымотан после перелёта.'],
      ['impossible', 'невозможный', 'That\'s impossible. You can\'t be serious.', 'Это невозможно. Ты шутишь.'],
      ['be joking', 'шутить', 'You must be joking!', 'Ты, должно быть, шутишь!'],
      ['sense', 'смысл; чувство', 'It doesn\'t make sense. He can\'t have done it.', 'Это бессмысленно. Он не мог этого сделать.']
    ],
    texts: [
      {
        id: 't-b1-8-1', title: 'The mystery of the missing tablet', level: 'B1',
        text: `On Monday morning I came to the office and couldn't find my drawing tablet. It wasn't on my desk or in my bag. I was sure I had left it there on Friday evening.
"Somebody must have taken it," I said to Oleg.
"Nobody could have taken it," he answered. "The office was locked all weekend. The cleaners can't have been here either — they come on Tuesdays."
I looked everywhere. I was able to find my old headphones, three pens and a sandwich from last week, but not the tablet.
Then Irina came in with a coffee. "You look terrible," she said. "You must have had a bad weekend."
"My tablet has disappeared," I said. "I'll have to draw with a mouse today. I could cry."
Irina thought for a moment. "Wait. Did you go to the meeting room on Friday? We had the call with the client there. You could have left it on the big table."
"No, I can't have left it there. I remember putting it in my bag."
"Are you certain?"
I wasn't. So we went to the meeting room. The tablet wasn't on the table, but it was under a chair. It must have fallen when I stood up to shake hands with the client.
I was so happy I could have hugged the chair. The tablet was fine, too. It could have broken, but the carpet was soft.
"See?" said Irina. "There's always a simple explanation."
Since then I've been able to work normally again. But now I always check the meeting room before I leave. And Oleg has started calling me "the great detective".`,
        questions: [
          { q: 'Why couldn\'t the cleaners have taken the tablet?', o: ['They only come on Tuesdays.', 'They don\'t clean the office.', 'They were on holiday.'], a: 0 },
          { q: 'Where did they finally find the tablet?', o: ['In the writer\'s bag', 'Under a chair in the meeting room', 'On Irina\'s desk'], a: 1 },
          { q: 'Why wasn\'t the tablet broken?', o: ['It was in a case.', 'The carpet was soft.', 'Oleg caught it.'], a: 1 }
        ]
      },
      {
        id: 't-b1-8-2', title: 'After the tournament', level: 'B1',
        text: `Kate: So? How was the tournament? You must be exhausted. You played for eight hours!
Max: I am. And we lost in the final. We could have won, you know.
Kate: What happened?
Max: In the first match everything went well. The other team was strong, but we managed to beat them in the last minute.
Kate: Nice! And then?
Max: Then in the final our internet went down for two minutes. I couldn't see anything, and I couldn't hear my team.
Kate: Oh no. That must have been awful.
Max: It was. When I was able to reconnect, we had already lost the base.
Kate: Couldn't the organisers stop the game?
Max: They could have, but they didn't. They said the rules don't allow it.
Kate: That's so unfair. Well, it could have been worse. You still got second place, right?
Max: True. And second place is two hundred dollars. I can't complain about that.
Kate: Wait, you won money? You must be joking!
Max: No, really. It's the first time I've been able to make money from games.
Kate: So what are you going to do now?
Max: I'd like to be able to play in bigger tournaments. But first I need a better internet connection. My provider can be really slow in the evenings.
Kate: You could call them tomorrow and ask about a faster plan.
Max: Good idea. Or I could move in with you. Your internet never goes down.
Kate: Ha! You can't be serious.
Max: I'm half serious. Anyway, next time we'll win. I'm sure we'll be able to.`,
        questions: [
          { q: 'Why did Max\'s team lose the final?', o: ['The other team was stronger.', 'His internet went down.', 'He fell asleep.'], a: 1 },
          { q: 'What did Max get for second place?', o: ['Two hundred dollars', 'A new PC', 'Nothing'], a: 0 },
          { q: 'What does Kate suggest?', o: ['To stop playing', 'To call the provider about a faster plan', 'To move to another city'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I\'m sorry, I ___ come to your stream tomorrow. I\'ll be at a conference.', o: ['won\'t be able to', 'won\'t can', 'couldn\'t'], a: 0, why: 'У can нет будущего с will → won\'t be able to.' },
      { t: 'choice', q: 'The level was very hard, but in the end we ___ finish it.', o: ['could', 'managed to', 'can'], a: 1, why: 'Удалось в конкретный раз → managed to / was able to, не could.' },
      { t: 'choice', q: 'What shall we do this weekend? — We ___ go to the game expo.', o: ['must', 'could', 'can\'t'], a: 1, why: 'Мягкое предложение → We could…' },
      { t: 'choice', q: 'You\'ve been flying for twelve hours. You ___ be tired.', o: ['must', 'can\'t', 'mustn\'t'], a: 0, why: 'Логичный вывод «наверняка так» → must.' },
      { t: 'choice', q: 'That ___ be Anna\'s car. She sold it last year.', o: ['must', 'mustn\'t', 'can\'t'], a: 2, why: 'Уверены, что не так → can\'t; mustn\'t — это запрет.' },
      { t: 'choice', q: 'Why did you walk home in the rain? You ___ a taxi.', o: ['could take', 'could have taken', 'must have taken'], a: 1, why: 'Была возможность, но не использовал → could have + V3.' },
      { t: 'choice', q: 'I ___ hear music from the next room all night.', o: ['could', 'managed to', 'was able'], a: 0, why: 'С hear/see/smell could подходит и для конкретного случая.' },
      { t: 'choice', q: 'I\'ve lost my keys. I ___ them on the bus.', o: ['must drop', 'must have dropped', 'can\'t have dropped'], a: 1, why: 'Вывод о прошлом «наверняка было» → must have + V3.' },
      { t: 'gap', q: 'I ___ to sleep well since I started this project. (not / be able)', a: ['haven\'t been able', 'have not been able'], why: 'Present Perfect (since) от can → have been able to.' },
      { t: 'gap', q: 'I\'m so bored I ___ scream. (преувеличение)', a: ['could'], why: 'Нереальное, преувеличение → could, не can.' },
      { t: 'gap', q: 'The trip was perfect. It ___ better. (not / be)', a: ['couldn\'t have been', 'could not have been'], why: 'Прошлое: «лучше быть не могло» → couldn\'t have been.' },
      { t: 'gap', q: 'Max isn\'t answering. He ___ asleep. (наверняка)', a: ['must be'], why: 'Уверенная догадка о настоящем → must be.' },
      { t: 'gap', q: 'Anna didn\'t come to the party. She ___ my invitation. (not / get)', a: ['can\'t have got', 'cannot have got', 'couldn\'t have got', 'could not have got', 'can\'t have gotten', 'couldn\'t have gotten'], why: 'Уверены, что не получила (прошлое) → can\'t / couldn\'t have + V3.' },
      { t: 'gap', q: 'I\'d love to ___ play the guitar. (уметь)', a: ['be able to'], why: 'После would love to нужен инфинитив → be able to.' },
      { t: 'order', a: 'You could have told me earlier', ru: 'Ты мог бы сказать мне раньше.' },
      { t: 'order', a: 'She must have forgotten about it', ru: 'Она, наверно, забыла об этом.' },
      { t: 'tr', q: 'Тебе удалось найти ключи?', a: ['did you manage to find the keys', 'did you manage to find your keys', 'were you able to find the keys', 'were you able to find your keys', 'did you manage to find the key', 'did you manage to find your key', 'were you able to find the key', 'were you able to find your key', 'have you managed to find the keys', 'have you managed to find your keys', 'have you been able to find the keys', 'have you been able to find your keys'] },
      { t: 'tr', q: 'Ты, должно быть, шутишь.', a: ['you must be joking', 'you must be kidding'] },
      { t: 'listen', say: 'It could have been worse.', a: ['it could have been worse', 'it could\'ve been worse'] }
    ],
    test: [
      { t: 'choice', q: 'My grandmother ___ speak three languages when she was young.', o: ['could', 'managed to', 'was able'], a: 0, why: 'Общее умение в прошлом → could.' },
      { t: 'choice', q: 'The concert was almost sold out, but I ___ buy the last ticket.', o: ['could', 'was able to', 'can'], a: 1, why: 'Удалось в конкретный раз → was able to / managed to.' },
      { t: 'choice', q: 'I tried to call you, but I ___ get through.', o: ['couldn\'t', 'didn\'t manage', 'can\'t'], a: 0, why: 'Отрицание couldn\'t подходит и для конкретного случая.' },
      { t: 'choice', q: 'Don\'t touch that wire! You ___ get hurt.', o: ['should', 'could', 'must'], a: 1, why: 'Возможно в этой ситуации (опасность) → could.' },
      { t: 'choice', q: 'Which sentence means «Я бы не смог жить в большом городе»?', o: ['I can\'t live in a big city.', 'I couldn\'t live in a big city.', 'I couldn\'t have lived in a big city yesterday.'], a: 1, why: 'couldn\'t в настоящем = «было бы невозможно для меня».' },
      { t: 'choice', q: 'He walked into a wall. He ___ looking where he was going.', o: ['can\'t have been', 'mustn\'t have been', 'can\'t be'], a: 0, why: 'Отрицательная догадка о прошлом процессе → can\'t have been + -ing.' },
      { t: 'choice', q: 'Where is Oleg? — I don\'t know. He ___ be in the kitchen, or maybe he\'s gone out.', o: ['must', 'could', 'can\'t'], a: 1, why: 'Не уверены, одна из версий → could (might).' },
      { t: 'gap', q: 'You ___ me you were in town! We could have met. (tell)', a: ['could have told', 'could\'ve told'], why: 'Упрёк: возможность была, но не использовали → could have + V3.' },
      { t: 'gap', q: 'They live in a huge house. They ___ a lot of money. (have, наверняка)', a: ['must have'], why: 'Вывод о настоящем → must + глагол (have).' },
      { t: 'gap', q: 'The streets are wet. It ___ in the night. (rain, наверняка)', a: ['must have rained', 'must\'ve rained'], why: 'Вывод о прошлом по факту → must have + V3.' },
      { t: 'gap', q: 'Tom ___ help us tomorrow — he\'ll check his schedule. (might / be able)', a: ['might be able to'], why: 'Два модальных подряд нельзя → might be able to.' },
      { t: 'gap', q: 'I used to ___ run 10 km, but not any more. (уметь)', a: ['be able to'], why: 'После used to нужен инфинитив, у can его нет → be able to.' }
    ]
  }
);
