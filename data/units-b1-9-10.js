// Юниты B1 9–10: may/might (в т.ч. may have done, might as well), have to / must / mustn't / needn't (needn't have done);
// should (should have done, ought to, suggest that…), had better, it's time, would, вежливые просьбы и предложения
COURSE.units.push(
  // ───────────────────────────── UNIT B1-9 ─────────────────────────────
  {
    id: 'b1-9', level: 'B1', num: 9, track: 'main',
    books: { blue: [29, 30, 31, 32] },
    title: 'May, might; have to, must, mustn\'t, needn\'t',
    summary: 'Научимся тонко говорить о вероятности («он, может, уже ушёл», «придётся подождать», «можно и пешком») и о необходимости: «надо», «приходится», «нельзя», «не обязательно» и «зря я это сделал — не было нужды».',
    grammar: [
      {
        title: '1. Главная идея: «может быть» и «надо» — у каждого оттенка своё слово',
        html: `
<div class="g-idea">Базу вы знаете: <b>might / may</b> — «возможно» (урок a2-7), <b>must / have to / mustn't / don't have to</b> — «надо / нельзя / не обязательно» (урок a2-8). На B1 добавляем главное: как говорить о <b>возможном в прошлом</b> (<b>might have done</b>), как сказать «зря сделал, не надо было» (<b>needn't have done</b>), и чем на самом деле отличаются must и have to.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Он, может, <b>уже ушёл</b> домой.</p><p>Нам, возможно, <b>придётся</b> подождать.</p><p>Автобуса нет — <b>можно и пешком</b> пойти.</p><p>Зря ты волновался — <b>не нужно было</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">He <b>might have gone</b> home.</span></p><p><span class="say">We <b>might have to</b> wait.</span></p><p><span class="say">No bus. We <b>might as well</b> walk.</span></p><p><span class="say">You <b>needn't have worried</b>.</span></p></div>
</div>
<div class="g-tip">Русский выражает оттенки словами «может», «наверное», «зря», «придётся». Английский — формой глагола после модального: <b>might do</b> (сейчас/потом), <b>might have done</b> (в прошлом).</div>
<div class="mini" data-q="«Возможно, он забыл» (в прошлом):" data-o="He might forget.|He might have forgotten.|He might forgot." data-a="1" data-why="О прошлом: might + have + 3-я форма (forgotten)."></div>`
      },
      {
        title: '2. may / might сейчас: might be, might be doing, might know',
        html: `
<p>Когда мы <b>не уверены</b>, что происходит сейчас, после may/might ставим три вида глагола:</p>
<table>
<tr><th>Формула</th><th>Пример</th><th>Смысл</th></tr>
<tr><td>might <b>be</b> + где/какой</td><td><span class="say">Lena might be at the gym.</span></td><td>Может, она в зале.</td></tr>
<tr><td>might <b>be doing</b></td><td><span class="say">He might be streaming right now.</span></td><td>Может, он сейчас стримит.</td></tr>
<tr><td>might + глагол</td><td><span class="say">Ask Oleg. He might know.</span></td><td>Спроси Олега. Он, возможно, знает.</td></tr>
</table>
<p>Отрицание — просто <b>not</b> после модального: <span class="say">It may not be true.</span> — Может, это неправда. <span class="say">She might not know about the meeting.</span> — Может, она не знает о встрече. В разговоре встречается <b>mightn't</b>, а вот <b>mayn't</b> не говорят.</p>
<p><b>may</b> и <b>might</b> здесь почти одинаковы. may звучит чуть официальнее, might — чаще в разговоре.</p>
<div class="g-bad">It maybe true. · Maybe it true.</div>
<div class="g-good">It <b>may be</b> true. <span class="muted">(два слова: модальный + глагол)</span> · <b>Maybe</b> it's true. <span class="muted">(одно слово = perhaps)</span></div>
<div class="g-tip"><b>maybe</b> — наречие «может быть», стоит обычно в начале и не заменяет глагол. <b>may be</b> — это «может быть» + обязательный глагол be внутри.</div>
<div class="mini" data-q="Where's Kate? — She ___ in the meeting room." data-o="maybe|may be|may is" data-a="1" data-why="Нужен глагол: may + be. maybe — просто наречие без глагола."></div>
<div class="mini" data-q="Don't call Max now. He ___ a raid." data-o="might play|might be playing|might played" data-a="1" data-why="Про процесс прямо сейчас: might be + -ing."></div>`
      },
      {
        title: '3. might have done — «может, так и было» о прошлом',
        html: `
<div class="g-idea">Чтобы предположить, что <b>случилось раньше</b>, ставим <b>may / might + have + 3-я форма</b>. Это не прошедшее от might, это «сейчас я думаю, что тогда, возможно…».</div>
<div class="g-formula"><span class="g-part">may / might (not)</span><span class="g-plus">+</span><span class="g-part g-v">have</span><span class="g-plus">+</span><span class="g-part">done / been / been doing</span></div>
<ul class="g-list">
<li><span class="say">Anna didn't reply. She might have been asleep.</span> — Аня не ответила. Может, она спала.</li>
<li><span class="say">I can't find my headphones. I may have left them at the office.</span> — Может, я оставил их в офисе.</li>
<li><span class="say">He might not have seen your message.</span> — Может, он не видел твоё сообщение.</li>
<li><span class="say">They may have been playing online all night.</span> — Может, они всю ночь играли онлайн. <span class="muted">(процесс в прошлом)</span></li>
</ul>
<p><b>could</b> тоже значит «возможно»: <span class="say">It could be a bug.</span> <span class="say">You could have deleted the file by mistake.</span> Но в отрицании смысл меняется!</p>
<table>
<tr><th>Фраза</th><th>Смысл</th></tr>
<tr><td><span class="say">He might not have got my email.</span></td><td>Может, не получил (а может, и получил).</td></tr>
<tr><td><span class="say">He couldn't have got my email.</span></td><td>Не мог получить — это исключено.</td></tr>
</table>
<div class="g-tip">couldn't have / can't have = «исключено» (вы это видели в уроке b1-8). might not have = «возможно, нет». Разница как между «никак не мог» и «мог и не…».</div>
<div class="g-bad">He might forgot the password.</div>
<div class="g-good">He might <b>have forgotten</b> the password.</div>
<div class="mini" data-q="The server was down all day, so she ___ the update. It's impossible." data-o="might not have downloaded|couldn't have downloaded|may not download" data-a="1" data-why="«Исключено» → couldn't have + 3-я форма. might not have — только «возможно, нет»."></div>`
      },
      {
        title: '4. might о будущем: might have to, might be able to, might as well',
        html: `
<p>Про будущее may/might = «возможно, будет». Сравните уверенность:</p>
<table>
<tr><th>Уверен</th><th>Не уверен</th></tr>
<tr><td><span class="say">I'm going to buy a new monitor.</span></td><td><span class="say">I might buy a new monitor.</span></td></tr>
<tr><td><span class="say">I'll be working at eight.</span></td><td><span class="say">I might be working at eight.</span></td></tr>
<tr><td><span class="say">We're flying to Tbilisi in May.</span></td><td><span class="say">We might be flying to Tbilisi in May.</span></td></tr>
</table>
<p>Очень частые связки:</p>
<ul class="g-list">
<li><span class="say">We might have to wait a bit.</span> — Возможно, придётся подождать.</li>
<li><span class="say">I might be able to help you tomorrow.</span> — Может, смогу помочь завтра.</li>
<li><span class="say">There might not be enough time.</span> — Времени может не хватить.</li>
</ul>
<div class="g-idea"><b>might as well / may as well</b> — «можно и…, всё равно лучше варианта нет». Это не «возможно», а вывод: причин не делать нет.</div>
<ul class="g-list">
<li><span class="say">The next bus is in an hour. We might as well walk.</span> — Автобус через час. Можно и пешком.</li>
<li><span class="say">The game is on sale. I may as well buy it now.</span> — Игра со скидкой. Возьму уж сейчас.</li>
<li><span class="say">Nothing's on TV. We might as well go to bed.</span> — По телику ничего. Можно и спать лечь.</li>
</ul>
<p>Ещё тонкость: в <b>нереальной</b> ситуации с if говорят только <b>might</b>, не may: <span class="say">If they paid me more, I might stay.</span> — Если бы мне платили больше, я, может, и остался бы. (Подробнее про if — в уроке b1-11.)</p>
<div class="mini" data-q="The café is closed. We ___ go home." data-o="might as well|might be|may have" data-a="0" data-why="«Можно и…, лучше вариантов нет» → might as well + глагол."></div>
<div class="mini" data-q="«Возможно, нам придётся переделать макет»" data-o="We might must redo the layout.|We might have to redo the layout.|We might to redo the layout." data-a="1" data-why="Два модальных подряд нельзя: might + have to."></div>`
      },
      {
        title: '5. have to и must: кто решил, что надо',
        html: `
<p>Обе конструкции = «надо». Разница — <b>чьё это мнение</b>.</p>
<table>
<tr><th></th><th>must</th><th>have to</th></tr>
<tr><td>Смысл</td><td>я так считаю, я сам решил</td><td>так устроено, правило, обстоятельства</td></tr>
<tr><td>Пример</td><td><span class="say">I must call Mum. It's been weeks.</span></td><td><span class="say">I have to be at the office at nine.</span></td></tr>
<tr><td>Совет</td><td><span class="say">You must watch this series!</span></td><td><span class="say">You have to try this game!</span></td></tr>
</table>
<p>Для личного мнения и советов подходят оба. Для факта (расписание, работа, закон) — <b>have to</b>. А в <b>письменных правилах</b> и инструкциях — <b>must</b>: <span class="say">Files must be uploaded by Friday.</span> <span class="say">Passwords must contain eight characters.</span></p>
<p><b>have to</b> — обычный глагол, поэтому у него есть все времена и нужен do/does/did:</p>
<ul class="g-list">
<li><span class="say">Do you have to work on Saturdays?</span> <span class="muted">(не Have you to work?)</span></li>
<li><span class="say">She doesn't have to come.</span> <span class="muted">(не She hasn't to come)</span></li>
<li><span class="say">We had to restart the server twice.</span> — Пришлось. <span class="muted">(прошлое — только had to, не must)</span></li>
<li><span class="say">I'll have to buy a new laptop.</span> / <span class="say">I'm going to have to buy…</span> — Придётся.</li>
<li><span class="say">I haven't had to fix bugs at night for ages.</span> — Давно не приходилось.</li>
</ul>
<p>В разговоре часто <b>have got to</b> = have to: <span class="say">I've got to go.</span> — Мне пора. <span class="say">Have you got to work tomorrow?</span></p>
<div class="g-bad">Yesterday I must stay late.</div>
<div class="g-good">Yesterday I <b>had to</b> stay late.</div>
<div class="mini" data-q="It's my job: I ___ answer client emails every morning." data-o="must|have to|must to" data-a="1" data-why="Факт, обязанность по работе, а не личное мнение → have to."></div>
<div class="mini" data-q="The road was closed, so we ___ go another way." data-o="must|had to|have to" data-a="1" data-why="У must нет прошедшего; «пришлось» → had to."></div>`
      },
      {
        title: '6. mustn\'t, don\'t have to, needn\'t — три разных «не»',
        html: `
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>mustn't</b></td><td>нельзя, запрещено</td><td><span class="say">You mustn't share your password.</span></td></tr>
<tr><td><b>don't have to</b></td><td>не обязательно (но можно)</td><td><span class="say">You don't have to reply today.</span></td></tr>
<tr><td><b>needn't</b> / <b>don't need to</b></td><td>нет нужды (но можно)</td><td><span class="say">You needn't hurry.</span> = <span class="say">You don't need to hurry.</span></td></tr>
</table>
<p>Сравните на одной ситуации:</p>
<ul class="g-list">
<li><span class="say">You needn't tell Igor. I'll tell him myself.</span> — Не надо, я сам скажу.</li>
<li><span class="say">You mustn't tell Igor. It's a surprise.</span> — Нельзя говорить, это сюрприз.</li>
</ul>
<div class="g-formula"><span class="g-part g-v">needn't</span><span class="g-plus">+</span><span class="g-part">do</span><span class="g-sep">·</span><span class="g-part g-v">don't need</span><span class="g-plus">+</span><span class="g-part">to do</span></div>
<div class="g-bad">You needn't to wait. · You don't need wait.</div>
<div class="g-good">You <b>needn't wait</b>. · You <b>don't need to wait</b>.</div>
<div class="g-tip">needn't ведёт себя как модальный (как mustn't): без to. don't need to — как обычный глагол: с do и с to. <b>needn't</b> чаще в британском, <b>don't need to</b> — везде.</div>
<div class="mini" data-q="The meeting is optional. You ___ come." data-o="mustn't|don't have to|needn't to" data-a="1" data-why="Не обязательно, но можно → don't have to. После needn't to не ставят."></div>`
      },
      {
        title: '7. needn\'t have done или didn\'t need to — «зря» или «не было нужды»',
        html: `
<div class="g-idea">Оба про прошлое и оба про «не было необходимости». Но <b>needn't have done</b> значит: <b>сделал — а оказалось, зря</b>. А <b>didn't need to do</b> просто сообщает, что нужды не было, — сделал или нет, неважно (обычно не сделал).</div>
<table>
<tr><th>Фраза</th><th>Что было на самом деле</th></tr>
<tr><td><span class="say">We needn't have booked a table. The place was empty.</span></td><td>Забронировали — зря.</td></tr>
<tr><td><span class="say">We didn't need to book a table, so we didn't.</span></td><td>Не бронировали — и не нужно было.</td></tr>
<tr><td><span class="say">I didn't need to get up early, but I did anyway.</span></td><td>Встал рано, хотя мог не вставать.</td></tr>
</table>
<p><b>didn't have to</b> = didn't need to: <span class="say">I didn't have to pay for the course. It was free.</span></p>
<p>Сравните настоящее и прошлое:</p>
<ul class="g-list">
<li><span class="say">It'll be fine. You needn't worry.</span> — Всё будет хорошо, не волнуйся.</li>
<li><span class="say">It was fine. You needn't have worried.</span> — Всё обошлось. Зря ты волновался.</li>
</ul>
<div class="g-tip">Частая пара: <b>needn't have</b> + <b>could have</b>: <span class="say">You needn't have taken a taxi. You could have walked.</span> — Не нужно было брать такси, мог бы дойти пешком.</div>
<div class="g-bad">I needn't have gone, so I stayed at home.</div>
<div class="g-good">I <b>didn't need to</b> go, so I stayed at home.</div>
<div class="mini" data-q="I bought a new charger, but then found the old one. I ___ it." data-o="didn't need to buy|needn't have bought|mustn't have bought" data-a="1" data-why="Купил, а оказалось зря → needn't have + 3-я форма."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">It maybe a bug.</div><div class="g-good">It <b>may be</b> a bug. / <b>Maybe</b> it's a bug.</div>
<div class="g-bad">She might forgot about it.</div><div class="g-good">She might <b>have forgotten</b> about it.</div>
<div class="g-bad">We might must wait.</div><div class="g-good">We might <b>have to</b> wait.</div>
<div class="g-bad">Last night I must finish the design.</div><div class="g-good">Last night I <b>had to</b> finish the design.</div>
<div class="g-bad">Have you to work tomorrow?</div><div class="g-good"><b>Do you have to</b> work tomorrow?</div>
<div class="g-bad">You mustn't come — it's optional.</div><div class="g-good">You <b>don't have to</b> come — it's optional.</div>
<div class="g-bad">You needn't to explain.</div><div class="g-good">You <b>needn't explain</b>. / You <b>don't need to</b> explain.</div>
<div class="g-bad">The shop was open. I needn't have worried, so I didn't.</div><div class="g-good">I <b>didn't need to</b> worry, so I didn't.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>might do / might have done</b> — возможно сейчас / тогда · <b>might as well</b> — можно и… · <b>must</b> — я считаю, <b>have to</b> — так надо, <b>had to</b> — пришлось · <b>mustn't</b> — нельзя, <b>don't have to / needn't</b> — не обязательно · <b>needn't have done</b> — сделал зря.</div>`
      }
    ],
    words: [
      ['suppose', 'предполагать, полагать', 'I suppose he might be busy.', 'Полагаю, он, может, занят.'],
      ['possibly', 'возможно', 'He may possibly be late.', 'Он, возможно, опоздает.'],
      ['likely', 'вероятный; вероятно', 'It\'s likely to rain, so we might stay in.', 'Вероятно, будет дождь, так что мы, может, останемся дома.'],
      ['certain', 'уверенный, определённый', 'I\'m not certain, but she may have left.', 'Я не уверен, но она, может, ушла.'],
      ['doubt', 'сомнение; сомневаться', 'I doubt he\'ll come. He might be ill.', 'Сомневаюсь, что он придёт. Он, может, болеет.'],
      ['apparently', 'по-видимому, судя по всему', 'Apparently, the update has been delayed.', 'Судя по всему, обновление отложили.'],
      ['anyway', 'всё равно, в любом случае', 'I didn\'t need to go, but I went anyway.', 'Мне не надо было идти, но я всё равно пошёл.'],
      ['whatever', 'что бы ни, что угодно', 'You don\'t have to agree. Do whatever you want.', 'Не обязательно соглашаться. Делай что хочешь.'],
      ['obvious', 'очевидный', 'It\'s obvious — you must be tired.', 'Очевидно: ты, должно быть, устал.'],
      ['require', 'требовать', 'The job requires good English.', 'Эта работа требует хорошего английского.'],
      ['essential', 'необходимый, важнейший', 'A good mouse is essential for this game.', 'Хорошая мышь необходима для этой игры.'],
      ['duty', 'долг, обязанность', 'It\'s my duty to check every screen.', 'Моя обязанность — проверять каждый экран.'],
      ['permission', 'разрешение', 'You have to ask for permission first.', 'Сначала нужно спросить разрешения.'],
      ['allow', 'разрешать, позволять', 'We aren\'t allowed to use our phones here.', 'Нам здесь нельзя пользоваться телефонами.'],
      ['warn', 'предупреждать', 'I warned you — you mustn\'t click that link!', 'Я предупреждал: нельзя нажимать на ту ссылку!'],
      ['rush', 'спешить; спешка', 'You needn\'t rush. We have plenty of time.', 'Не нужно спешить. У нас полно времени.'],
      ['plenty', 'множество, достаточно', 'There\'s plenty of food, so you don\'t have to bring anything.', 'Еды полно, так что можно ничего не приносить.'],
      ['bother', 'утруждать себя, беспокоить', 'Don\'t bother cooking. We might as well order pizza.', 'Не утруждайся готовить. Можно просто заказать пиццу.'],
      ['afford', 'позволить себе (по деньгам)', 'I can\'t afford a new PC, so I\'ll have to wait.', 'Я не могу позволить себе новый ПК, придётся подождать.'],
      ['in case', 'на случай, если', 'Take an umbrella in case it rains.', 'Возьми зонт на случай дождя.'],
      ['otherwise', 'иначе, в противном случае', 'We have to leave now, otherwise we\'ll miss the train.', 'Надо выйти сейчас, иначе опоздаем на поезд.'],
      ['run out of', 'заканчиваться (о запасе)', 'We might run out of time.', 'У нас может закончиться время.'],
      ['stay up', 'не ложиться спать', 'You needn\'t have stayed up so late.', 'Зря ты так поздно не ложился.'],
      ['avoid', 'избегать', 'You must avoid this mistake.', 'Эту ошибку надо избегать.'],
      ['ignore', 'игнорировать', 'He might have ignored my message.', 'Может, он проигнорировал моё сообщение.'],
      ['waste', 'тратить впустую; трата', 'We needn\'t have waited. What a waste of time!', 'Зря мы ждали. Какая трата времени!'],
      ['due', 'ожидаемый по сроку, должный', 'The project is due on Friday, so I have to hurry.', 'Сдача проекта в пятницу, так что мне надо спешить.'],
      ['schedule', 'расписание, график', 'I have to check my schedule first.', 'Сначала мне нужно проверить своё расписание.'],
      ['option', 'вариант, опция', 'We don\'t have many options. We might as well try.', 'Вариантов немного. Можно и попробовать.'],
      ['handle', 'справляться (с чем-то)', 'Don\'t worry, I can handle it. You needn\'t help.', 'Не волнуйся, я справлюсь. Не нужно помогать.']
    ],
    texts: [
      {
        id: 't-b1-9-1', title: 'Where is Sam?', level: 'B1',
        text: `Nika: Has anyone heard from Sam? He was supposed to join the call at ten, and it's almost half past.
Artem: No idea. He might be stuck in traffic. He said yesterday that his car was making strange noises.
Nika: He doesn't drive to work on Mondays, though. He works from home. Maybe he's still asleep.
Artem: That's possible. He may have stayed up late playing that new strategy game. He told me he couldn't stop.
Nika: Or he might not have seen the calendar invite. I only sent it last night.
Artem: No, he couldn't have missed it. He replied "OK" at eleven. I saw it.
Nika: Hmm. Then he might be having problems with his internet again. Remember last week?
Artem: True. Anyway, we can't wait forever. We have to show the new menu screens to the client at twelve.
Nika: We might have to start without him. I'll take notes, so he doesn't have to watch the recording.
Artem: Good idea. But we mustn't change the colours on the main screen. Sam made them, and the client already approved them.
Nika: Of course. Oh, wait, here's a message from him. "Sorry! Power cut in my building. Using my phone. Don't wait for me."
Artem: Well, we needn't have worried. And we might as well begin now.
Nika: Yes. Let's go. We'll have to tell him everything later, though.
Artem: Fine. I've got to leave at one anyway, so let's be quick.
Nika: And next time I'll send the invite two days before. Then nobody will have to guess where anyone is.`,
        questions: [
          { q: 'Why did Sam miss the start of the call?', o: ['He was stuck in traffic', 'There was a power cut in his building', 'He didn\'t see the invite'], a: 1 },
          { q: 'Why is Artem sure Sam saw the invite?', o: ['Sam replied to it', 'Sam told him on the phone', 'Nika sent it twice'], a: 0 },
          { q: 'What mustn\'t they change?', o: ['The meeting time', 'The colours on the main screen', 'The client\'s logo'], a: 1 }
        ]
      },
      {
        id: 't-b1-9-2', title: 'Rules of the guild', level: 'B1',
        text: `Last spring I joined a guild in an online role-playing game. Before you can join, you have to read the guild rules and answer a few questions. At first I thought it was a joke, but the leader, a Polish player called Marek, takes it seriously.
The written rules are short and strict. Members must be online for at least two raids a week. Voice chat is required during raids. You mustn't sell guild items to other players, and you mustn't be rude in the chat. That's all.
There are also things you don't have to do, which surprised me. You don't have to use a microphone outside raids. You don't have to donate gold. You needn't even play every day. Marek says the game should be fun, not a second job.
Of course, in my first week I made mistakes. I thought I had to buy expensive armour before my first raid, so I spent all my gold on it. I needn't have bought it. The guild gives new players armour for free. I could have saved everything.
Then one evening I didn't need to log in, because there was no raid, so I went to the cinema with friends. When I came back, I saw forty messages. Apparently, somebody had tried to steal items from the guild bank, and everyone was looking for the thief. For a moment people thought it might have been me, because I was new and I wasn't online. Luckily, Marek checked the logs. It couldn't have been me: the thief had logged in from another country.
Now I've been in the guild for six months. I might become an officer next month. If so, I'll have to learn all the rules by heart.`,
        questions: [
          { q: 'What is required during raids?', o: ['Donating gold', 'Voice chat', 'Playing every day'], a: 1 },
          { q: 'Why needn\'t the writer have bought armour?', o: ['The guild gives it to new players for free', 'Armour is not allowed', 'The raid was cancelled'], a: 0 },
          { q: 'How did Marek know the writer wasn\'t the thief?', o: ['The writer told him', 'Friends from the cinema called him', 'The logs showed a login from another country'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Is that Olga\'s bag? — I\'m not sure. It ___ hers.', o: ['maybe', 'may be', 'may is'], a: 1, why: 'После модального нужен глагол: may + be. maybe — наречие без глагола.' },
      { t: 'choice', q: 'Don\'t call now. He ___ dinner.', o: ['might have', 'might be having', 'might had'], a: 1, why: 'Процесс прямо сейчас → might be + -ing.' },
      { t: 'choice', q: 'She didn\'t answer. She ___ asleep.', o: ['might be', 'might have been', 'might was'], a: 1, why: 'Предположение о прошлом → might have + 3-я форма (been).' },
      { t: 'choice', q: 'He was with me all evening, so he ___ the car. It\'s impossible.', o: ['might not have taken', 'couldn\'t have taken', 'needn\'t have taken'], a: 1, why: '«Исключено» → couldn\'t have done. might not have — лишь «возможно, нет».' },
      { t: 'choice', q: 'We\'ve missed the bus, and the next one is in an hour. We ___ walk.', o: ['might as well', 'must', 'might have'], a: 0, why: 'Лучшего варианта нет, «можно и…» → might as well + глагол.' },
      { t: 'choice', q: 'I ___ start work at 8:30 every day. That\'s the company rule.', o: ['must', 'have to', 'had to'], a: 1, why: 'Факт, правило компании, а не личное мнение → have to.' },
      { t: 'choice', q: 'It\'s a secret. You ___ tell anyone.', o: ['don\'t have to', 'needn\'t', 'mustn\'t'], a: 2, why: 'Запрет «нельзя» → mustn\'t.' },
      { t: 'choice', q: 'The file is small. You ___ compress it.', o: ['mustn\'t', 'don\'t need to', 'don\'t need'], a: 1, why: '«Нет нужды» → don\'t need to + глагол (с to).' },
      { t: 'gap', q: 'Where\'s my phone? I ___ it in the taxi! (may / leave)', a: ['may have left'], why: 'Предположение о прошлом: may + have + 3-я форма (left).' },
      { t: 'gap', q: 'The bus is often late. We ___ wait a few minutes. (might / have to)', a: ['might have to'], why: 'Два модальных подряд нельзя, поэтому «возможно, придётся» = might have to.' },
      { t: 'gap', q: 'The shop was closed, so I ___ go to another one. (have to)', a: ['had to'], why: 'У must нет прошедшего; «пришлось» → had to.' },
      { t: 'gap', q: '___ you have to wear a uniform at work? (do)', a: ['Do', 'do'], why: 'have to — обычный глагол, вопрос строится с do.' },
      { t: 'gap', q: 'The test was easy. I ___ so much! (needn\'t / study)', a: ['needn\'t have studied', 'need not have studied'], why: 'Сделал, а оказалось зря → needn\'t have + 3-я форма.' },
      { t: 'gap', q: 'Everything will be OK. You needn\'t ___. (worry)', a: ['worry'], why: 'После needn\'t — глагол без to.' },
      { t: 'order', a: 'He might not have seen my message', ru: 'Может, он не видел моё сообщение.' },
      { t: 'order', a: 'We might have to change the plan', ru: 'Возможно, нам придётся поменять план.' },
      { t: 'order', a: 'You don\'t have to come to the meeting', ru: 'Тебе не обязательно приходить на встречу.' },
      { t: 'tr', q: 'Зря ты волновался.', a: ['you needn\'t have worried', 'you need not have worried', 'you shouldn\'t have worried'] },
      { t: 'tr', q: 'Мне пришлось перезапустить игру.', a: ['i had to restart the game', 'i had to reboot the game'] },
      { t: 'listen', say: 'We might as well order a pizza', a: ['we might as well order a pizza', 'we might as well order pizza'] }
    ],
    test: [
      { t: 'choice', q: 'Why isn\'t Dima here? — He ___ about the party.', o: ['might not know', 'mustn\'t know', 'needn\'t know'], a: 0, why: 'Предположение «может, не знает» → might not + глагол.' },
      { t: 'choice', q: 'The streamer is quiet. He ___ reading the chat.', o: ['may be', 'maybe', 'may have'], a: 0, why: 'Процесс сейчас: may be + -ing.' },
      { t: 'choice', q: 'I can\'t find my keys. — You ___ them in the car.', o: ['might leave', 'might have left', 'might left'], a: 1, why: 'Возможное действие в прошлом → might have + 3-я форма.' },
      { t: 'choice', q: 'If they paid me better, I ___ work harder.', o: ['may', 'might', 'must'], a: 1, why: 'В нереальной ситуации с if — только might, не may.' },
      { t: 'choice', q: 'Seat belts ___ be worn at all times. (табличка в автобусе)', o: ['must', 'have to', 'had to'], a: 0, why: 'Письменные правила и инструкции → must.' },
      { t: 'choice', q: 'I didn\'t ___ pay for the ticket. My friend had a spare one.', o: ['must', 'have to', 'needn\'t'], a: 1, why: 'Прошлое «не нужно было» → didn\'t have to + глагол.' },
      { t: 'choice', q: 'We didn\'t need to cook, so we ___.', o: ['didn\'t', 'needn\'t have', 'did'], a: 0, why: 'didn\'t need to — нужды не было; по контексту так и не сделали.' },
      { t: 'choice', q: 'Sophie likes weekends because she ___ get up early.', o: ['mustn\'t', 'doesn\'t have to', 'hasn\'t to'], a: 1, why: '«Не обязательно» → doesn\'t have to; форма hasn\'t to неверна.' },
      { t: 'gap', q: 'Kate was in a bad mood. She ___ well. (may not / feel)', a: ['may not have been feeling', 'may not have felt'], why: 'Прошлое, возможно процесс: may not + have been + -ing (или have felt).' },
      { t: 'gap', q: 'I\'m free tomorrow, so I ___ help you. (might / be able to)', a: ['might be able to'], why: 'can не ставят после might → might be able to.' },
      { t: 'gap', q: 'I haven\'t ___ see a doctor for years. (have to)', a: ['had to'], why: 'Present Perfect от have to: haven\'t had to.' },
      { t: 'gap', q: 'We ___ a taxi. The station was only five minutes away. (needn\'t / take)', a: ['needn\'t have taken', 'need not have taken'], why: 'Взяли такси, а оказалось зря → needn\'t have + 3-я форма.' }
    ]
  },

  // ───────────────────────────── UNIT B1-10 ─────────────────────────────
  {
    id: 'b1-10', level: 'B1', num: 10, track: 'main',
    books: { blue: [33, 34, 35, 36, 37] },
    title: 'Should, had better, it\'s time; would; вежливые просьбы',
    summary: 'Научимся давать советы и упрекать («надо было раньше сказать»), предупреждать («лучше не надо»), торопить («пора бы уже»), воображать с would и вежливо просить, предлагать и спрашивать разрешения.',
    grammar: [
      {
        title: '1. Главная идея: совет, упрёк, воображение и вежливость',
        html: `
<div class="g-idea">Вы уже умеете советовать с <b>should</b> (урок a2-8) и просить с <b>Can you…? Could you…?</b> (a2-7). Теперь — оттенки: «<b>надо было</b>» (should have done), «<b>лучше бы…, а то</b>» (had better), «<b>пора бы уже</b>» (it's time you did), «<b>я бы…</b>» (would) и вежливые формулы, которые реально звучат в жизни.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p><b>Надо было</b> сказать раньше.</p><p><b>Лучше</b> возьми зонт, а то промокнешь.</p><p><b>Пора бы</b> тебе обновить резюме.</p><p><b>Я бы</b> не стал ему звонить.</p><p><b>Не против, если</b> я сяду здесь?</p></div>
  <div><div class="g-h">English</div><p><span class="say">You <b>should have told</b> me earlier.</span></p><p><span class="say">You<b>'d better take</b> an umbrella.</span></p><p><span class="say"><b>It's time you updated</b> your CV.</span></p><p><span class="say">I <b>wouldn't call</b> him.</span></p><p><span class="say"><b>Do you mind if</b> I sit here?</span></p></div>
</div>
<div class="g-tip">Русская частица «бы» почти всегда = <b>would</b>. А «надо было» = <b>should have</b> + 3-я форма.</div>
<div class="mini" data-q="«Я бы не стал это покупать»" data-o="I won't buy it.|I wouldn't buy it.|I didn't buy it." data-a="1" data-why="«бы» — воображаемая ситуация → would / wouldn't."></div>`
      },
      {
        title: '2. should глубже: «так должно быть», «надо было», ought to',
        html: `
<p>Кроме совета, <b>should</b> говорит, <b>как должно быть</b> по логике или по ожиданиям:</p>
<ul class="g-list">
<li><span class="say">Where's Pavel? He should be here by now.</span> — Он уже должен быть тут (а его нет — странно).</li>
<li><span class="say">The price is wrong. It should be ten euros, not twelve.</span> — Должно быть десять.</li>
<li><span class="say">She's practised a lot. She should win.</span> — Она должна выиграть (я этого жду).</li>
<li><span class="say">The patch is small. It shouldn't take long.</span> — Много времени не займёт.</li>
</ul>
<p><b>should have done</b> — «надо было» (не сделал, а жаль). <b>shouldn't have done</b> — «не надо было» (сделал — зря):</p>
<table>
<tr><th>Сейчас</th><th>О прошлом</th></tr>
<tr><td><span class="say">You look tired. You should go to bed.</span></td><td><span class="say">You should have gone to bed earlier.</span></td></tr>
<tr><td><span class="say">You shouldn't eat so much.</span></td><td><span class="say">I shouldn't have eaten that third burger.</span></td></tr>
</table>
<p>Ещё: <span class="say">They should have been here an hour ago.</span> — Они должны были прийти час назад.</p>
<p><b>ought to</b> = should, но с <b>to</b>: <span class="say">You ought to call her.</span> <span class="say">We ought not to be late.</span> <span class="say">You ought to have come!</span> Звучит чуть более книжно.</p>
<div class="g-tip">should — «стоит, хорошо бы», must / have to — «обязательно, других вариантов нет». <span class="say">You should apologise.</span> — мягкий совет. <span class="say">You must apologise.</span> — без вариантов.</div>
<div class="g-bad">I should told you. · You should to try it.</div>
<div class="g-good">I <b>should have told</b> you. · You <b>should try</b> it. / You <b>ought to try</b> it.</div>
<div class="mini" data-q="We lost, but we were the better team. We ___." data-o="should win|should have won|should won" data-a="1" data-why="Не случилось, а должно было → should have + 3-я форма."></div>
<div class="mini" data-q="I sent the file an hour ago. You ___ it by now." data-o="should have received|should receive|ought receive" data-a="0" data-why="«Уже должен был получить» к этому моменту → should have received."></div>`
      },
      {
        title: '3. suggest that…, it\'s important that…, if … should',
        html: `
<p>После глаголов <b>suggest, recommend, insist, demand, propose</b> и фраз <b>it's important / essential / vital / necessary that</b> можно сказать тремя способами:</p>
<ul class="g-list">
<li><span class="say">The lead suggested that we should test the prototype.</span></li>
<li><span class="say">The lead suggested that we test the prototype.</span> <span class="muted">(глагол в начальной форме, даже для he/she)</span></li>
<li><span class="say">The lead suggested that we tested the prototype.</span> <span class="muted">(обычное время, так чаще в британском)</span></li>
</ul>
<ul class="g-list">
<li><span class="say">It's essential that everyone be here on time.</span> = …that everyone should be / is here on time.</li>
<li><span class="say">The doctor recommended that he rest for a week.</span></li>
<li><span class="say">What do you suggest I do?</span> — Что посоветуешь сделать?</li>
</ul>
<div class="g-bad">What do you suggest me to do? · I suggest you to read this.</div>
<div class="g-good">What do you suggest <b>I do</b>? · I suggest <b>you read</b> this. / I suggest <b>reading</b> this.</div>
<p><b>should</b> после оценок <i>strange, funny, typical, natural, surprised</i>: <span class="say">It's strange that he should be late. He's always on time.</span> — Странно, что он опаздывает.</p>
<p><b>If … should</b> — «если вдруг» (менее вероятно): <span class="say">If you should have any questions, email me.</span> В официальных письмах — с инверсией: <span class="say">Should you have any questions, please contact us.</span></p>
<p class="muted">В британском разговоре <b>I should…</b> иногда = «я бы на твоём месте»: <i>I should wait a bit.</i> Сейчас чаще говорят <span class="say">I'd wait a bit.</span></p>
<div class="mini" data-q="What do you suggest ___?" data-o="me to do|I do|to me do" data-a="1" data-why="После suggest не бывает «кого + to». Правильно: suggest (that) I do."></div>`
      },
      {
        title: '4. had better — «лучше…, а то будет плохо»',
        html: `
<div class="g-idea"><b>I'd better do</b> = «лучше мне сделать, иначе будут проблемы». Это совет про <b>конкретную ситуацию сейчас</b> с намёком на опасность.</div>
<div class="g-formula"><span class="g-part">I / you / we …</span><span class="g-plus">+</span><span class="g-part g-v">'d better (not)</span><span class="g-plus">+</span><span class="g-part">глагол без to</span></div>
<ul class="g-list">
<li><span class="say">The meeting starts in five minutes. I'd better go.</span> — Мне лучше идти.</li>
<li><span class="say">You'd better save the file, or you'll lose everything.</span> — Лучше сохрани, а то потеряешь всё.</li>
<li><span class="say">Shall I take a jacket? — Yes, you'd better. It might get cold.</span></li>
<li><span class="say">We'd better not wake the baby.</span> — Нам лучше не будить малыша.</li>
</ul>
<p>Три ловушки:</p>
<div class="g-steps"><div class="g-h">had better — что запомнить</div><ol>
<li><b>'d</b> = <b>had</b> (не would!). Вопрос-хвостик: <span class="say">We'd better leave, hadn't we?</span></li>
<li>Выглядит как прошлое, но значит <b>сейчас или потом</b>: <span class="say">I'd better call him tomorrow.</span></li>
<li>После него глагол <b>без to</b>. Отрицание — <b>'d better not</b>.</li>
</ol></div>
<table>
<tr><th>should</th><th>had better</th></tr>
<tr><td>совет вообще, любая ситуация</td><td>конкретный случай + риск</td></tr>
<tr><td><span class="say">It's a great film. You should see it.</span></td><td><span class="say">It starts at eight. You'd better go now.</span></td></tr>
<tr><td><span class="say">You should go out more often.</span></td><td class="muted">не подходит — это совет вообще</td></tr>
</table>
<div class="g-bad">You'd better to hurry. · You'd not better go.</div>
<div class="g-good">You'd better <b>hurry</b>. · You'd better <b>not</b> go.</div>
<div class="mini" data-q="The battery is at 2%. You'd better ___ your phone." data-o="to charge|charge|charging" data-a="1" data-why="После had better — глагол без to."></div>`
      },
      {
        title: '5. It\'s time — «пора» и «давно пора бы»',
        html: `
<p>Два варианта. Нейтральный — с <b>to</b>:</p>
<ul class="g-list">
<li><span class="say">It's time to go.</span> — Пора идти.</li>
<li><span class="say">It's time for us to go.</span> — Нам пора идти.</li>
</ul>
<p>С упрёком «уже давно должен был» — <b>It's time + кто + прошедшая форма</b>, хотя смысл — <b>сейчас</b>:</p>
<div class="g-formula"><span class="g-part">It's (about / high) time</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">did / were</span></div>
<ul class="g-list">
<li><span class="say">It's late. It's time we went home.</span> — Пора нам домой.</li>
<li><span class="say">It's time you updated your portfolio.</span> — Пора бы тебе обновить портфолио.</li>
<li><span class="say">It's about time they fixed this bug.</span> — Давно пора бы починить этот баг.</li>
<li><span class="say">It's time something was done about the lag.</span> — Пора бы что-то сделать с лагами.</li>
</ul>
<div class="g-tip">Прошедшая форма тут — «сигнал нереальности»: этого ещё нет, а должно бы. Так же работает русское «пора бы <b>сделал</b>» — «бы» с прошедшим.</div>
<div class="g-bad">It's time we go home. · It's time you update it.</div>
<div class="g-good">It's time we <b>went</b> home. · It's time you <b>updated</b> it.</div>
<div class="mini" data-q="The kids are still up at midnight! It's time they ___ in bed." data-o="are|were|be" data-a="1" data-why="It's time + кто + прошедшая форма → were."></div>`
      },
      {
        title: '6. would: «я бы», «сказал, что…», «никак не хотел», «бывало»',
        html: `
<p>У <b>would</b> четыре главных роли.</p>
<p><b>1) Воображаемое</b> — «бы»: <span class="say">It would be nice to work from Bali.</span> <span class="say">I'd love to try VR.</span> <span class="say">Shall I tell him? — I wouldn't say anything.</span> — Я бы ничего не говорил.</p>
<p><b>would have done</b> — «бы» о прошлом, которое не случилось:</p>
<ul class="g-list">
<li><span class="say">You missed the concert. You would have loved it.</span> — Тебе бы понравилось.</li>
<li><span class="say">I don't know what we'd have done without you.</span> — Не знаю, что бы мы без тебя делали.</li>
</ul>
<table>
<tr><th>will — реально</th><th>would — нереально</th></tr>
<tr><td><span class="say">I'll call Lena. I have her number.</span></td><td><span class="say">I'd call Lena, but I don't have her number.</span></td></tr>
<tr><td><span class="say">I'll stay a bit longer.</span></td><td><span class="say">I'd stay longer, but I have to go.</span></td></tr>
</table>
<p><b>2) Прошедшее от will</b> в пересказе: <span class="say">Tom said he'd call me on Sunday.</span> <span class="say">She promised she wouldn't be late.</span></p>
<p><b>3) wouldn't = отказывался</b> (даже про вещи): <span class="say">I tried to help, but he wouldn't listen.</span> — Он никак не хотел слушать. <span class="say">The game wouldn't start.</span> — Игра никак не запускалась.</p>
<p><b>4) Регулярно в прошлом</b> — «бывало», как used to: <span class="say">When we were kids, we would play outside until dark.</span> Но только для действий, не состояний:</p>
<div class="g-bad">I would have a dog when I was a child.</div>
<div class="g-good">I <b>used to have</b> a dog when I was a child. <span class="muted">(have = владеть, это состояние)</span></div>
<div class="mini" data-q="The laptop ___ turn on, so I took it to a repair shop." data-o="won't|wouldn't|didn't would" data-a="1" data-why="Никак не включался в прошлом → wouldn't (отказ)."></div>
<div class="mini" data-q="It's a pity you didn't come. You ___ it." data-o="would enjoy|would have enjoyed|will enjoy" data-a="1" data-why="Воображаемое прошлое, которого не было → would have + 3-я форма."></div>`
      },
      {
        title: '7. Вежливо: просьбы, разрешение, предложения',
        html: `
<table>
<tr><th>Что делаем</th><th>Как сказать</th></tr>
<tr><td>Просим сделать</td><td><span class="say">Could you send me the link?</span> <span class="say">Do you think you could review my layout?</span> <span class="muted">(с Do you think — только could)</span></td></tr>
<tr><td>Просим вещь</td><td><span class="say">Can I have a latte, please?</span> <span class="say">Can I get the bill?</span> <span class="say">May I have the menu?</span></td></tr>
<tr><td>Просим разрешения</td><td><span class="say">Could I borrow your charger?</span> <span class="say">May I ask a question?</span> <span class="muted">(may — официальнее)</span></td></tr>
<tr><td>Мягче всего</td><td><span class="say">Do you mind if I open the window?</span> <span class="say">Is it all right if I leave early?</span> <span class="say">Would you mind if I opened it?</span> <span class="muted">(с would — ещё вежливее, глагол в прошедшей форме)</span></td></tr>
<tr><td>Предлагаем помощь</td><td><span class="say">Can I help you?</span> <span class="say">Can I get you a coffee?</span></td></tr>
<tr><td>Приглашаем, предлагаем</td><td><span class="say">Would you like some tea?</span> <span class="say">Would you like to join our team?</span></td></tr>
<tr><td>Говорим, что хотим</td><td><span class="say">I'd like to try this on.</span> <span class="say">I'd like some information about tours.</span></td></tr>
</table>
<p>Ответ на <b>Do you mind if…?</b> — осторожно: «Нет, не против» = <span class="say">No, not at all. Go ahead.</span> Если сказать <i>Yes</i>, это значит «да, я против».</p>
<div class="g-bad">Do you like some coffee? <span class="muted">— это «Ты вообще любишь кофе?»</span></div>
<div class="g-good"><b>Would you like</b> some coffee? <span class="muted">— «Хочешь кофе?» (предложение)</span></div>
<div class="g-bad">Do you think you can help me?</div>
<div class="g-good">Do you think you <b>could</b> help me?</div>
<div class="mini" data-q="Do you mind if I use your mouse? — ___ Go ahead." data-o="Yes, I do.|No, not at all.|Yes, please." data-a="1" data-why="Do you mind = «ты против?» Разрешаем — No, not at all."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">You should came yesterday.</div><div class="g-good">You <b>should have come</b> yesterday.</div>
<div class="g-bad">You ought call her.</div><div class="g-good">You <b>ought to</b> call her.</div>
<div class="g-bad">She suggested me to take a break.</div><div class="g-good">She suggested <b>that I take</b> a break. / She suggested <b>taking</b> a break.</div>
<div class="g-bad">We'd better to leave now.</div><div class="g-good">We'd better <b>leave</b> now.</div>
<div class="g-bad">You'd better learn languages in general.</div><div class="g-good">You <b>should</b> learn languages — it's useful.</div>
<div class="g-bad">It's time you go to bed.</div><div class="g-good">It's time you <b>went</b> to bed.</div>
<div class="g-bad">He said he will call me.</div><div class="g-good">He said he <b>would</b> call me.</div>
<div class="g-bad">Do you like a cup of tea?</div><div class="g-good"><b>Would you like</b> a cup of tea?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>should (have done)</b> — стоит / надо было · <b>suggest that I do</b> · <b>'d better do</b> — лучше, а то… · <b>it's time we went</b> — пора бы · <b>would</b> — «бы», «сказал, что», «никак не хотел», «бывало» · <b>Could you…? Could I…? Do you mind if…? Would you like…?</b></div>`
      }
    ],
    words: [
      ['advise', 'советовать', 'I\'d advise you to wait for the sale.', 'Я бы посоветовал подождать распродажи.'],
      ['suggest', 'предлагать, советовать', 'I suggest we take a short break.', 'Предлагаю сделать небольшой перерыв.'],
      ['recommend', 'рекомендовать', 'The doctor recommended that he rest.', 'Врач рекомендовал ему отдохнуть.'],
      ['insist', 'настаивать', 'She insisted that I stay for dinner.', 'Она настояла, чтобы я остался на ужин.'],
      ['apologize', 'извиняться', 'You should apologize to her.', 'Тебе стоит перед ней извиниться.'],
      ['regret', 'сожалеть; сожаление', 'I regret it. I shouldn\'t have said that.', 'Я жалею. Не надо было этого говорить.'],
      ['blame', 'винить', 'Don\'t blame me! You should have saved the game.', 'Не вини меня! Надо было сохранить игру.'],
      ['fault', 'вина, недостаток', 'It wasn\'t your fault.', 'Это была не твоя вина.'],
      ['admit', 'признавать', 'I have to admit it — you were right.', 'Надо признать: ты был прав.'],
      ['refuse', 'отказываться', 'He refused to help. He just wouldn\'t listen.', 'Он отказался помогать. Никак не хотел слушать.'],
      ['convince', 'убеждать', 'I couldn\'t convince him to stay.', 'Я не смог убедить его остаться.'],
      ['remind', 'напоминать', 'Could you remind me about the call?', 'Можешь напомнить мне про созвон?'],
      ['request', 'просьба, запрос; просить', 'I\'d like to make a request.', 'Я бы хотел обратиться с просьбой.'],
      ['favour', 'одолжение, услуга', 'Could you do me a favour?', 'Можешь сделать мне одолжение?'],
      ['mind', 'возражать, быть против', 'Do you mind if I sit here?', 'Вы не против, если я сяду здесь?'],
      ['lend', 'давать взаймы — lent', 'Could you lend me your charger?', 'Можешь одолжить мне зарядку?'],
      ['appreciate', 'ценить, быть признательным', 'I\'d really appreciate your help.', 'Я был бы очень признателен за помощь.'],
      ['bother', 'беспокоить', 'Sorry to bother you, but could you help me?', 'Простите за беспокойство, не могли бы вы помочь?'],
      ['tip', 'совет, чаевые', 'Here\'s a tip: you\'d better save often.', 'Совет: лучше сохраняйся почаще.'],
      ['opportunity', 'возможность, шанс', 'You should take this opportunity.', 'Тебе стоит воспользоваться этой возможностью.'],
      ['consider', 'обдумывать, рассматривать', 'You ought to consider other options.', 'Тебе следует рассмотреть другие варианты.'],
      ['honestly', 'честно', 'Honestly, I wouldn\'t buy it.', 'Честно, я бы это не покупал.'],
      ['personally', 'лично', 'Personally, I\'d choose the blue version.', 'Лично я выбрал бы синий вариант.'],
      ['seriously', 'серьёзно', 'It\'s time you took this seriously.', 'Пора бы тебе отнестись к этому серьёзно.'],
      ['whenever', 'всякий раз, когда', 'Whenever it rained, we would play board games.', 'Всякий раз, когда шёл дождь, мы играли в настолки.'],
      ['pity', 'жалость; жаль', 'It\'s a pity you missed it. You would have loved it.', 'Жаль, что ты пропустил. Тебе бы понравилось.'],
      ['mess', 'беспорядок, бардак', 'It\'s time somebody cleaned up this mess.', 'Пора бы кому-нибудь разобрать этот бардак.'],
      ['calm', 'спокойный; успокаивать', 'You\'d better stay calm.', 'Тебе лучше сохранять спокойствие.'],
      ['upset', 'расстроенный; расстраивать', 'She\'ll be upset if we don\'t invite her.', 'Она расстроится, если мы её не позовём.'],
      ['pretend', 'притворяться', 'I wouldn\'t pretend that everything is fine.', 'Я бы не стал притворяться, что всё хорошо.']
    ],
    texts: [
      {
        id: 't-b1-10-1', title: 'Advice from a senior designer', level: 'B1',
        text: `When I started my first job as a junior designer, my team lead, Irina, gave me a lot of advice. Some of it I followed immediately. Some of it I should have followed but didn't.
On my first day she said, "You'd better back up your files every evening. The old server crashes all the time." I thought she was exaggerating. Two weeks later the server went down and I lost three days of work. I should have listened to her. Irina didn't say "I told you so", but I knew she was thinking it.
She also said that I ought to ask questions more often. "Nobody expects you to know everything. If you're stuck, you should ask. It shouldn't take more than five minutes to get an answer." I was shy, so I would sit for hours with a problem instead of asking. Looking back, it would have been much easier to just go to her desk.
Once she suggested that I present my own screens to the client. I was terrified. "Do you think you could do it instead?" I asked. She wouldn't agree. "It's time you started talking to clients yourself," she said. "You'll be fine." She was right. The presentation went well, and the client asked if I would lead the next project.
Now I'm a senior designer, and I have my own junior. Yesterday she asked me, "Would you mind if I left early on Friday?" and I said, "No, not at all." Then she asked, "What do you suggest I read to get better?" I smiled and gave her the same advice Irina gave me. And, of course, the first tip was: "You'd better back up your files."`,
        questions: [
          { q: 'What happened two weeks after the first advice?', o: ['The server crashed and the writer lost work', 'The writer got a new job', 'Irina left the company'], a: 0 },
          { q: 'Why didn\'t the writer ask questions at first?', o: ['Irina was always busy', 'The writer was shy', 'Questions were not allowed'], a: 1 },
          { q: 'What was the first tip the writer gave the new junior?', o: ['Ask questions', 'Present to clients', 'Back up your files'], a: 2 }
        ]
      },
      {
        id: 't-b1-10-2', title: 'Game night', level: 'B1',
        text: `Max: Hi, come in! Would you like something to drink? We've got tea, juice and some very strange energy drink.
Lena: I'd like some tea, please. Oh, do you mind if I put my bag here?
Max: No, not at all. Can I take your jacket?
Lena: Thanks. So, where is everyone? Dan said he would bring the new board game.
Max: He should be here by now. He promised he wouldn't be late this time.
Lena: It's about time he bought a watch.
Max: Ha! Oh, there's a message. "Car won't start. Could you pick me up?"
Lena: Poor Dan. We'd better go and get him, hadn't we? Otherwise we'll never start.
Max: Well, his place is twenty minutes away. I suggest we order food first, so it arrives when we're back.
Lena: Good idea. Could you order the pizza? I'll call Dan and tell him we're coming.
Max: Sure. Can I have your phone for a second? Mine is almost dead.
Lena: Here you are. Hey, when we were students, we would play board games every Friday. Do you remember?
Max: Of course. And Dan would always lose and then refuse to play again.
Lena: He wouldn't stop talking about that game for weeks. Honestly, it would be nice to do this every Friday again.
Max: I agree. We should make it a tradition.
Lena: We should have done it years ago. OK, let's go and rescue Dan.
Max: Wait, would you mind taking the keys? I always forget them.
Lena: Sure. And next time Dan had better take a taxi.`,
        questions: [
          { q: 'What does Lena want to drink?', o: ['Juice', 'Tea', 'An energy drink'], a: 1 },
          { q: 'Why can\'t Dan come on his own?', o: ['His car won\'t start', 'He forgot the game', 'He is ill'], a: 0 },
          { q: 'What did the friends do every Friday when they were students?', o: ['Went to the cinema', 'Ordered pizza', 'Played board games'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'It\'s ten o\'clock. Nina ___ here by now. Where is she?', o: ['should be', 'should have', 'had better be'], a: 0, why: 'Как должно быть по ожиданиям, но нет → should be.' },
      { t: 'choice', q: 'I feel sick. I ___ so much cake.', o: ['shouldn\'t eat', 'shouldn\'t have eaten', 'wouldn\'t eat'], a: 1, why: 'Сделал, а было не надо → shouldn\'t have + 3-я форма.' },
      { t: 'choice', q: 'You ___ to see a doctor.', o: ['should', 'ought', 'had better'], a: 1, why: 'ought — единственный из них с to: ought to see.' },
      { t: 'choice', q: 'I suggest ___ the meeting to Monday.', o: ['you to move', 'that you move', 'you moving to'], a: 1, why: 'После suggest нет конструкции «кого + to». Можно suggest (that) you move.' },
      { t: 'choice', q: 'It might rain. We\'d better ___ an umbrella.', o: ['to take', 'take', 'taking'], a: 1, why: 'После had better глагол без to.' },
      { t: 'choice', q: 'It\'s midnight. It\'s time we ___ home.', o: ['go', 'went', 'will go'], a: 1, why: 'It\'s time + кто + прошедшая форма (смысл — сейчас).' },
      { t: 'choice', q: 'I tried to fix the printer, but it ___ work.', o: ['won\'t', 'wouldn\'t', 'didn\'t would'], a: 1, why: 'Никак не хотел работать в прошлом → wouldn\'t.' },
      { t: 'choice', q: '___ some cake? — Yes, please!', o: ['Do you like', 'Would you like', 'Are you like'], a: 1, why: 'Предлагаем → Would you like…? Do you like — «любишь ли вообще».' },
      { t: 'gap', q: 'You missed a great stream. You ___ it. (should / watch)', a: ['should have watched', 'ought to have watched'], why: 'Не сделал, а стоило бы → should have + 3-я форма.' },
      { t: 'gap', q: 'The bus leaves in five minutes. We ___ hurry. (had better)', a: ['\'d better', 'had better'], why: 'Конкретная ситуация, есть риск опоздать → had better / \'d better.' },
      { t: 'gap', q: 'You ___ go out tonight. You look ill. (\'d better / not)', a: ['\'d better not', 'had better not'], why: 'Отрицание had better: \'d better not + глагол.' },
      { t: 'gap', q: 'Ivan promised he ___ tell anyone. (would / not)', a: ['wouldn\'t', 'would not'], why: 'Прошедшее от won\'t в пересказе → wouldn\'t.' },
      { t: 'gap', q: '___ you mind if I opened the window? (would)', a: ['Would', 'would'], why: 'Вежливое Would you mind if I…? (после would часто прошедшая форма).' },
      { t: 'order', a: 'Do you think you could help me', ru: 'Как думаешь, ты мог бы мне помочь?' },
      { t: 'order', a: 'It\'s time you updated your portfolio', ru: 'Пора бы тебе обновить портфолио.' },
      { t: 'tr', q: 'Надо было сказать мне раньше.', a: ['you should have told me earlier', 'you should have told me before', 'you ought to have told me earlier'] },
      { t: 'tr', q: 'Я бы не стал ему звонить.', a: ['i wouldn\'t call him', 'i would not call him'] },
      { t: 'tr', q: 'Можно мне счёт, пожалуйста?', a: ['can i have the bill please', 'could i have the bill please', 'can i get the bill please', 'may i have the bill please', 'can i have the check please', 'could i have the check please'] },
      { t: 'listen', say: 'You\'d better save your game', a: ['you\'d better save your game', 'you had better save your game'] }
    ],
    test: [
      { t: 'choice', q: 'She\'s been training for months, so she ___ pass the test easily.', o: ['should', 'had better', 'would have'], a: 0, why: 'Ожидаем результат → should + глагол.' },
      { t: 'choice', q: 'It\'s essential that everyone ___ online by eight.', o: ['be', 'to be', 'being'], a: 0, why: 'После it\'s essential that можно начальную форму глагола (be) — даже для everyone.' },
      { t: 'choice', q: '___ you have any problems, please call our support team.', o: ['Would', 'Should', 'Had'], a: 1, why: 'Официальное «если вдруг» → Should you have…' },
      { t: 'choice', q: 'Which sentence gives general advice, not advice for a specific situation?', o: ['You\'d better go now, or you\'ll miss the train.', 'You should read more books.', 'We\'d better not be late today.'], a: 1, why: 'Совет вообще — should; had better — для конкретной ситуации с риском.' },
      { t: 'choice', q: 'We\'d better go, ___ we?', o: ['wouldn\'t', 'hadn\'t', 'didn\'t'], a: 1, why: '\'d better = had better, поэтому хвостик hadn\'t we.' },
      { t: 'choice', q: 'When I was little, my grandpa ___ tell me stories every night.', o: ['would', 'will', 'should'], a: 0, why: 'Регулярное действие в прошлом → would (= used to).' },
      { t: 'choice', q: 'I ___ a car when I lived in Moscow.', o: ['would have', 'used to have', 'would had'], a: 1, why: 'have (владеть) — состояние, с ним would для привычки не ставят → used to.' },
      { t: 'choice', q: 'I\'d help you, but I ___ time right now.', o: ['don\'t have', 'wouldn\'t have', 'didn\'t have'], a: 0, why: 'Реальная причина сейчас: I\'d help, but I don\'t have time.' },
      { t: 'gap', q: 'I don\'t know what we ___ without your help. (would / do)', a: ['would have done', '\'d have done'], why: 'Воображаемое прошлое → would have + 3-я форма.' },
      { t: 'gap', q: 'It\'s about time somebody ___ something about this bug. (do)', a: ['did'], why: 'It\'s (about) time + кто + прошедшая форма.' },
      { t: 'gap', q: 'You ___ to have told her the truth. (ought)', a: ['ought'], why: 'ought to have + 3-я форма = should have — «надо было».' },
      { t: 'gap', q: 'What do you suggest I ___? (do)', a: ['do', 'should do'], why: 'suggest (that) I do / I should do — без to.' }
    ]
  }
);
