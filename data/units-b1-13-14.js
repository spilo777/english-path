// Юниты B1 13–14: косвенная речь (сдвиг времён, когда не сдвигать, say/tell/explain, told me to, asked me where / if);
// вопросы глубже (who did / who told, отрицательные вопросы, where do you think), помощники, so/neither, I think so / I hope not, question tags
COURSE.units.push(
  // ───────────────────────────── UNIT B1-13 ─────────────────────────────
  {
    id: 'b1-13', level: 'B1', num: 13, track: 'main',
    books: { blue: [47, 48] },
    title: 'Косвенная речь: he said that…, he asked me where…',
    summary: 'Научимся пересказывать чужие слова без ошибок: сдвигать время (he said he had finished), понимать, когда сдвиг не нужен, менять tomorrow на the next day, пересказывать просьбы (she asked me not to…) и вопросы (he asked me where I lived, if I was busy).',
    grammar: [
      {
        title: '1. Главная идея: пересказ смотрит на всё из «сейчас» рассказчика',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-19): <b>He said (that) he was tired</b> — после said глагол делает шаг назад, и <b>say</b> ≠ <b>tell</b>. На B1 собираем полную картину: все сдвиги времён, случаи, когда сдвиг <b>не нужен</b>, что происходит с «завтра» и «здесь», как пересказать <b>просьбу</b> и <b>вопрос</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Макс сказал, что он <b>устал</b>.</p><p>Аня сказала, что уже <b>отправила</b> файл.</p><p>Она попросила меня <b>не опаздывать</b>.</p><p>Он спросил, где я <b>живу</b>.</p><p>Меня спросили, <b>есть ли</b> у меня права.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Max said he <b>was</b> tired.</span></p><p><span class="say">Anna said she <b>had</b> already <b>sent</b> the file.</span></p><p><span class="say">She <b>asked me not to be</b> late.</span></p><p><span class="say">He asked me where I <b>lived</b>.</span></p><p><span class="say">They asked me <b>if I had</b> a driving licence.</span></p></div>
</div>
<p>В русском время в пересказе «замирает» в моменте, когда человек говорил. В английском рассказчик смотрит из своего <b>сейчас</b>: слова были сказаны в прошлом — значит, и их содержание уезжает на шаг в прошлое.</p>
<div class="g-tip">Представьте, что said — это машина времени: всё, что едет за ней, отъезжает на одну остановку назад. is → was, has done → had done, will → would.</div>
<div class="mini" data-q="Kate: I'm working from home. → Kate said she ___ from home." data-o="is working|was working|has worked" data-a="1" data-why="После said Present Continuous сдвигается: am working → was working."></div>`
      },
      {
        title: '2. Полная карта сдвигов',
        html: `
<div class="g-idea">Каждое время отходит на один шаг назад. Модальные глаголы тоже меняются, кроме тех, что уже «прошедшие».</div>
<table>
<tr><th>Сказали</th><th>Пересказ</th><th>Пример пересказа</th></tr>
<tr><td>am / is / are</td><td><b>was / were</b></td><td><span class="say">She said the office was empty.</span></td></tr>
<tr><td>work / works</td><td><b>worked</b></td><td><span class="say">He said he worked nights.</span></td></tr>
<tr><td>am working</td><td><b>was working</b></td><td><span class="say">Liza said she was streaming.</span></td></tr>
<tr><td>have done / has done</td><td><b>had done</b></td><td><span class="say">Liza said she had lost her headset.</span></td></tr>
<tr><td>have been doing</td><td><b>had been doing</b></td><td><span class="say">He said he had been waiting for ages.</span></td></tr>
<tr><td>did</td><td><b>did</b> или <b>had done</b></td><td><span class="say">Max said they played until 3 a.m.</span></td></tr>
<tr><td>am going to</td><td><b>was going to</b></td><td><span class="say">Dan said he was going to quit the guild.</span></td></tr>
<tr><td>will</td><td><b>would</b></td><td><span class="say">She said she would send the link.</span></td></tr>
<tr><td>can</td><td><b>could</b></td><td><span class="say">He said he couldn't find the save file.</span></td></tr>
<tr><td>may</td><td><b>might</b></td><td><span class="say">The seller said I might need a bigger monitor.</span></td></tr>
<tr><td>must (обязан)</td><td><b>had to</b> или <b>must</b></td><td><span class="say">Support said I had to update the drivers.</span></td></tr>
</table>
<p><b>Не меняются</b>: would, could, should, might, had better, used to и Past Perfect — дальше назад ехать некуда.</p>
<ul class="g-list">
<li>“I should call my mum.” → <span class="say">He said he should call his mum.</span></li>
<li>“You'd better save the game.” → <span class="say">She said I'd better save the game.</span></li>
<li>“I had never seen snow before that trip.” → <span class="say">He said he had never seen snow before that trip.</span></li>
</ul>
<p>Past Simple можно оставить, а можно сдвинуть в Past Perfect — оба варианта нормальны. Сдвиг помогает, когда важно, что это было <b>раньше</b> другого:</p>
<ul class="g-list">
<li>“I didn't sleep, so I'm a zombie today.” → <span class="say">He said he hadn't slept, so he was a zombie.</span> <span class="muted">(или he didn't sleep)</span></li>
</ul>
<div class="g-steps"><div class="g-h">Как пересказать за 4 шага</div><ol>
<li>Найдите глагол в словах человека: <i>“I've finished the icons.”</i></li>
<li>Сдвиньте на шаг назад: have finished → <b>had finished</b>.</li>
<li>Поменяйте «я, мой, ты» по смыслу: I → <b>she</b>.</li>
<li>Проверьте слова времени и места (блок 4): <span class="say">Vera said she had finished the icons.</span></li>
</ol></div>
<div class="g-bad">He said he has finished the level.</div>
<div class="g-good">He said he <b>had finished</b> the level.</div>
<div class="mini" data-q="I can't open the file. → He said he ___ open the file." data-o="can't|couldn't|hadn't" data-a="1" data-why="can → could: can't → couldn't."></div>
<div class="mini" data-q="I've never played Dota. → She said she ___ Dota." data-o="never played|had never played|has never played" data-a="1" data-why="Present Perfect → Past Perfect: have played → had played."></div>`
      },
      {
        title: '3. Когда можно не сдвигать — и когда сдвиг обязателен',
        html: `
<div class="g-idea">Если сказанное <b>до сих пор правда</b>, настоящее время можно оставить. Сдвиг обязателен, когда ситуация <b>закончилась</b> или сказанное <b>оказалось неправдой</b>.</div>
<table>
<tr><th>Ситуация</th><th>Пересказ</th></tr>
<tr><td>Работа у Тома всё ещё скучная</td><td><span class="say">Tom said his new job is boring.</span><br><span class="muted">или was boring — оба верны</span></td></tr>
<tr><td>Хелен всё ещё хочет в Канаду</td><td><span class="say">Helen told me she wants to move to Canada.</span><br><span class="muted">или wanted — оба верны</span></td></tr>
<tr><td>Павел вскочил и ушёл</td><td><span class="say">Paul said he had to go.</span><br><span class="muted">не has to — он уже ушёл</span></td></tr>
<tr><td>Общая истина</td><td><span class="say">Our teacher said the Earth goes round the Sun.</span><br><span class="muted">можно и went</span></td></tr>
</table>
<p>Сказанное <b>оказалось неправдой</b> — только прошедшее. Дэн сказал вам: «Макс в Испании». Через час вы встречаете Макса в кино:</p>
<div class="g-bad">Max! Dan said you are in Spain!</div>
<div class="g-good"><span class="say">Max! Dan said you <b>were</b> in Spain!</span> <span class="muted">— очевидно, что не там</span></div>
<p>Очень живая фраза для споров — <b>But you said…</b> «Но ты же говорил…»:</p>
<ul class="g-list">
<li><span class="say">But you said you didn't like horror games!</span> — Но ты же говорил, что не любишь хорроры!</li>
<li><span class="say">I thought you said the meeting was at five.</span> — Я думал, ты сказал, что встреча в пять.</li>
</ul>
<p>Если глагол пересказа в <b>настоящем</b> — says, tells, the game says — сдвига нет вообще. Так пересказывают свежие новости, сообщения, правила:</p>
<ul class="g-list">
<li><span class="say">Max says he's running late.</span> — Макс пишет, что опаздывает.</li>
<li><span class="say">The forecast says it will snow tonight.</span> — В прогнозе сказано, что ночью будет снег.</li>
<li><span class="say">The game says the server is down for maintenance.</span> — Игра пишет, что сервер на обслуживании.</li>
<li><span class="say">Olga tells me you've finished the prototype.</span> — Ольга говорит, ты закончил прототип.</li>
</ul>
<div class="mini" data-q="Anna told you Kate was ill. Now you see Kate at a party: Anna said you ___ ill!" data-o="are|were|have been" data-a="1" data-why="Сказанное оказалось неправдой (Кейт здорова) → только прошедшее: were."></div>
<div class="mini" data-q="The notification ___ the update is ready." data-o="says|said|tells" data-a="0" data-why="Свежая информация перед глазами → says, и глагол после него не сдвигается."></div>`
      },
      {
        title: '4. Сдвигаются не только глаголы: tomorrow, here, this',
        html: `
<div class="g-idea">Если пересказываем в <b>другой день</b> или в <b>другом месте</b>, слова времени и места тоже «переезжают». Если день и место те же — ничего не меняем.</div>
<table>
<tr><th>Сказали</th><th>Пересказ позже</th></tr>
<tr><td>now</td><td><b>then</b>, at that moment</td></tr>
<tr><td>today / tonight</td><td><b>that day</b> / <b>that night</b></td></tr>
<tr><td>tomorrow</td><td><b>the next day</b>, the following day</td></tr>
<tr><td>yesterday</td><td><b>the day before</b>, the previous day</td></tr>
<tr><td>next week</td><td><b>the following week</b></td></tr>
<tr><td>two days ago</td><td><b>two days before</b></td></tr>
<tr><td>here / this</td><td><b>there</b> / <b>that</b></td></tr>
</table>
<ul class="g-list">
<li>В понедельник Макс: “I'll send it tomorrow.” В пятницу: <span class="say">Max said he would send it the next day, and he still hasn't!</span> — Макс сказал, что пришлёт на следующий день, а до сих пор не прислал!</li>
<li>Утром Катя: “I'll call you tomorrow.” Вечером того же дня: <span class="say">Kate said she'd call me tomorrow.</span> <span class="muted">— завтра ещё не наступило, tomorrow остаётся</span></li>
<li>В Казани Дэн: “I love it here.” Вы уже в Москве: <span class="say">Dan said he loved it there.</span></li>
</ul>
<p>Местоимения меняем по смыслу, глядя, <b>кто</b> сейчас рассказывает и <b>кому</b>:</p>
<ul class="g-list">
<li>Клиент — вам: “I like your logo.” → <span class="say">The client said he liked my logo.</span></li>
<li>Вы — Максу: “I'll help you.” → <span class="say">I told Max I would help him.</span></li>
</ul>
<div class="g-bad">Two weeks ago he said he would come tomorrow.</div>
<div class="g-good">Two weeks ago he said he would come <b>the next day</b>.</div>
<div class="mini" data-q="A year ago in Kazan, Dan said: I'm happy here. Now you're in Moscow: Dan said he was happy ___." data-o="here|there|then" data-a="1" data-why="Рассказываем в другом месте → here становится there."></div>`
      },
      {
        title: '5. say, tell, explain — кому и как',
        html: `
<div class="g-idea">Вы уже знаете: <b>tell</b> + человек сразу, <b>say</b> — без человека или через <b>to</b>. Глубже: большинство глаголов пересказа (explain, mention, admit, complain…) ведут себя как <b>say</b> — человек только через <b>to</b>.</div>
<table>
<tr><th>Глагол</th><th>С человеком</th><th>Пример</th></tr>
<tr><td><b>tell</b></td><td>tell <b>me</b></td><td><span class="say">She told me the build was ready.</span></td></tr>
<tr><td><b>say</b></td><td>say (sth) <b>to me</b></td><td><span class="say">She said goodbye to me and left.</span></td></tr>
<tr><td><b>explain</b></td><td>explain <b>to me</b></td><td><span class="say">He explained to me how the tool worked.</span></td></tr>
<tr><td><b>mention</b></td><td>mention <b>to me</b></td><td><span class="say">She mentioned that the team worked in English.</span></td></tr>
<tr><td><b>admit</b></td><td>admit (to me)</td><td><span class="say">He admitted that he had lied.</span></td></tr>
<tr><td><b>complain</b></td><td>complain <b>to me</b></td><td><span class="say">Players complained that the game was too hard.</span></td></tr>
<tr><td><b>promise</b></td><td>promise (<b>me</b>)</td><td><span class="say">He promised me he would reply.</span></td></tr>
<tr><td><b>remind</b></td><td>remind <b>me</b></td><td><span class="say">She reminded me that the call was at ten.</span></td></tr>
</table>
<p>Ещё полезные: <b>reply</b> (ответил), <b>add</b> (добавил), <b>whisper</b> (прошептал), <b>shout</b> (крикнул), <b>claim</b> (утверждал — может, неправда), <b>announce</b> (объявил):</p>
<ul class="g-list">
<li><span class="say">He claimed he had never seen the email.</span> — Он утверждал, что не видел письма.</li>
<li><span class="say">"And bring snacks," she added.</span> — «И возьми еды», — добавила она.</li>
<li><span class="say">The studio announced that the game would be free.</span> — Студия объявила, что игра будет бесплатной.</li>
</ul>
<div class="g-bad">He explained me the rules. · She said me that she was busy.</div>
<div class="g-good">He explained the rules <b>to me</b>. · She <b>told me</b> she was busy. / She said she was busy.</div>
<div class="g-tip">«Объясни мне» = <b>explain to me</b>, а не explain me. Это самая частая ошибка русскоговорящих даже на высоких уровнях. Проверка: можно ли вставить человека сразу? Только после <b>tell, promise, remind, warn</b>.</div>
<div class="mini" data-q="The lead ___ us that the deadline had moved." data-o="said|told|explained" data-a="1" data-why="Человек (us) стоит сразу после глагола → только told."></div>
<div class="mini" data-q="Can you explain ___?" data-o="me the task|the task to me|the task me" data-a="1" data-why="explain + что + to + кому: explain the task to me."></div>`
      },
      {
        title: '6. Просьбы и приказы: told me to…, asked me not to…',
        html: `
<div class="g-idea">Просьбу или приказ пересказываем через <b>tell / ask + человек + to + глагол</b>. «Не делай» → <b>not to</b>. Время тут сдвигать не нужно — у to-формы его нет.</div>
<div class="g-formula"><span class="g-part">told / asked</span><span class="g-plus">+</span><span class="g-part">кого</span><span class="g-plus">+</span><span class="g-part g-v">(not) to + глагол</span></div>
<table>
<tr><th>Сказали</th><th>Пересказ</th></tr>
<tr><td>“Hurry up!”</td><td><span class="say">I told him to hurry up.</span></td></tr>
<tr><td>“Don't touch my PC!”</td><td><span class="say">He told me not to touch his PC.</span></td></tr>
<tr><td>“Can you help me with the layout?”</td><td><span class="say">Olga asked me to help her with the layout.</span></td></tr>
<tr><td>“Please don't share the link.”</td><td><span class="say">Anna asked us not to share the link.</span></td></tr>
<tr><td>“Don't worry.”</td><td><span class="say">She said not to worry.</span> <span class="muted">(said — без человека)</span></td></tr>
<tr><td>“Don't press the red button.”</td><td><span class="say">The engineer warned us not to press the red button.</span></td></tr>
</table>
<p><b>told</b> — приказ, указание. <b>asked</b> — просьба. Вежливые вопросы «Можешь…?», «Не мог бы ты…?» — это тоже просьбы, их пересказываем через asked me to.</p>
<p>Не путайте три «ask»:</p>
<ul class="g-list">
<li><span class="say">She asked me to call her.</span> — попросила сделать <span class="muted">(ask + кого + to)</span></li>
<li><span class="say">She asked for the bill.</span> — попросила вещь <span class="muted">(ask for)</span></li>
<li><span class="say">She asked if I had called.</span> — спросила <span class="muted">(ask + if / вопросительное слово, блок 7)</span></li>
</ul>
<div class="g-bad">He said me to call him. · She told me don't be late. · He asked me help him.</div>
<div class="g-good">He <b>told me to call</b> him. · She told me <b>not to be</b> late. · He asked me <b>to help</b> him.</div>
<div class="mini" data-q="Don't be late, the coach said to us. → The coach told us ___ late." data-o="not to be|don't be|to don't be" data-a="0" data-why="Запрет → told + кого + not to + глагол."></div>`
      },
      {
        title: '7. Пересказ вопросов: he asked me where I lived',
        html: `
<div class="g-idea">В пересказанном вопросе <b>порядок слов как в обычном утверждении</b>: сначала кто, потом глагол. <b>do / does / did исчезают</b>, вопросительного знака нет. Время сдвигается, как в блоке 2.</div>
<div class="g-formula"><span class="g-part">asked (me) / wanted to know / wondered</span><span class="g-plus">+</span><span class="g-part g-v">where / why / how long…</span><span class="g-plus">+</span><span class="g-part">кто + глагол</span></div>
<table>
<tr><th>Вопрос на собеседовании</th><th>Пересказ другу</th></tr>
<tr><td>“Where are you working now?”</td><td><span class="say">She asked where I was working.</span></td></tr>
<tr><td>“What do you do in your free time?”</td><td><span class="say">She wanted to know what I did in my free time.</span></td></tr>
<tr><td>“Why did you leave your last job?”</td><td><span class="say">She asked why I had left my last job.</span></td></tr>
<tr><td>“How long have you been designing?”</td><td><span class="say">She asked how long I had been designing.</span></td></tr>
</table>
<p>Если в вопросе нет вопросительного слова (ответ «да / нет»), ставим <b>if</b> или <b>whether</b> — это русское «ли»:</p>
<table>
<tr><th>Вопрос</th><th>Пересказ</th></tr>
<tr><td>“Have you worked with Figma?”</td><td><span class="say">She asked if I had worked with Figma.</span></td></tr>
<tr><td>“Can you start on Monday?”</td><td><span class="say">She wanted to know whether I could start on Monday.</span></td></tr>
<tr><td>“Are you willing to travel?”</td><td><span class="say">He asked me if I was willing to travel.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Вопрос → пересказ</div><ol>
<li>Есть вопросительное слово? Берите его. Нет — ставьте <b>if / whether</b>.</li>
<li>Уберите do / does / did, поставьте «кто» перед глаголом.</li>
<li>Сдвиньте время на шаг назад.</li>
<li>В конце — точка, а не «?».</li>
</ol></div>
<div class="g-bad">She asked me where did I work. · He asked me do I like horror.</div>
<div class="g-good">She asked me where <b>I worked</b>. · He asked me <b>if I liked</b> horror.</div>
<div class="g-bad">He asked me that I was free.</div>
<div class="g-good">He asked me <b>if</b> I was free. <span class="muted">— после ask не бывает that</span></div>
<div class="mini" data-q="Do you play chess? → He asked me ___ chess." data-o="if I played|do I play|that I played" data-a="0" data-why="Вопрос да/нет → if + прямой порядок + сдвиг времени."></div>
<div class="mini" data-q="Where do you live? → She asked where ___." data-o="did I live|I lived|I did live" data-a="1" data-why="Порядок как в утверждении, do исчезает, время сдвигается: I lived."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">She said that she will call me.</div><div class="g-good">She said that she <b>would</b> call me.</div>
<div class="g-bad">He said he has lost his keys.</div><div class="g-good">He said he <b>had lost</b> his keys.</div>
<div class="g-bad">Dan said you are in Spain! <span class="muted">— а вы его видите здесь</span></div><div class="g-good">Dan said you <b>were</b> in Spain!</div>
<div class="g-bad">Last month he said he would do it tomorrow.</div><div class="g-good">Last month he said he would do it <b>the next day</b>.</div>
<div class="g-bad">He explained me the problem.</div><div class="g-good">He explained the problem <b>to me</b>.</div>
<div class="g-bad">She said me to wait.</div><div class="g-good">She <b>told me to</b> wait.</div>
<div class="g-bad">He told us don't worry.</div><div class="g-good">He told us <b>not to</b> worry.</div>
<div class="g-bad">She asked me where do I live?</div><div class="g-good">She asked me where <b>I lived</b>.</div>
<div class="g-bad">They asked do I have a car.</div><div class="g-good">They asked <b>if I had</b> a car.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Пересказ = шаг назад (<b>is → was, have done → had done, will → would, can → could</b>), кроме случаев, когда это всё ещё правда · <b>told me to / not to</b> · <b>asked where I lived / if I was</b> — без do и без «?».</div>`
      }
    ],
    words: [
      ["say — said", "сказать — сказал", "He said he was on his way.", "Он сказал, что уже едет."],
      ["tell — told", "сказать (кому-то), рассказать", "She told me she was busy.", "Она сказала мне, что занята."],
      ["ask", "спрашивать; просить", "He asked me where I worked.", "Он спросил, где я работаю."],
      ["explain", "объяснять", "He explained to me how the tool worked.", "Он объяснил мне, как работает инструмент."],
      ["admit", "признавать", "She admitted that she had forgotten.", "Она признала, что забыла."],
      ["mention", "упоминать", "He mentioned that the office was moving.", "Он упомянул, что офис переезжает."],
      ["promise", "обещать; обещание", "They promised they would reply soon.", "Они пообещали, что скоро ответят."],
      ["complain", "жаловаться", "Players complained that the boss was too hard.", "Игроки жаловались, что босс слишком сложный."],
      ["reply", "отвечать; ответ", "She replied that she was too tired.", "Она ответила, что слишком устала."],
      ["add", "добавлять", "He added that the demo was free.", "Он добавил, что демо бесплатное."],
      ["whisper", "шептать; шёпот", "She whispered that the teacher was coming.", "Она прошептала, что идёт учитель."],
      ["shout", "кричать", "The captain shouted to us to run.", "Капитан крикнул нам бежать."],
      ["claim", "утверждать, заявлять", "He claimed he had never seen the email.", "Он утверждал, что не видел письма."],
      ["announce", "объявлять, анонсировать", "The studio announced that the beta was over.", "Студия объявила, что бета закончилась."],
      ["remind", "напоминать", "She reminded me that the call was at ten.", "Она напомнила мне, что созвон в десять."],
      ["confirm", "подтверждать", "The manager confirmed that I had got the job.", "Менеджер подтвердил, что меня взяли."],
      ["deny", "отрицать", "He denied that he was the author.", "Он отрицал, что он автор."],
      ["repeat", "повторять", "Could you repeat what you said?", "Не могли бы вы повторить, что сказали?"],
      ["wonder", "интересоваться, задаваться вопросом", "She wondered why nobody had answered.", "Ей было интересно, почему никто не ответил."],
      ["whether", "ли", "He asked whether I could work on Saturday.", "Он спросил, могу ли я поработать в субботу."],
      ["apparently", "судя по всему, говорят", "Apparently, the sequel is already in development.", "Говорят, сиквел уже в разработке."],
      ["rumour", "слух", "It turned out the rumour wasn't true.", "Оказалось, слух был неправдой."],
      ["spread — spread", "распространять(ся)", "Who spread the rumour that I'd quit?", "Кто распустил слух, что я уволился?"],
      ["according to", "по словам, согласно", "According to Max, the raid starts at nine.", "По словам Макса, рейд начинается в девять."],
      ["truth", "правда", "Just tell me the truth.", "Просто скажи мне правду."],
      ["lie", "ложь; врать", "He told me a lie about the deadline.", "Он соврал мне про дедлайн."],
      ["interview", "собеседование; интервью", "The interview lasted an hour.", "Собеседование длилось час."],
      ["recruiter", "рекрутер", "The recruiter said they liked my portfolio.", "Рекрутер сказал, что им понравилось моё портфолио."],
      ["willing", "готовый (сделать), согласный", "They asked if I was willing to relocate.", "Меня спросили, готов ли я переехать."],
      ["previous", "предыдущий", "She said she had called the previous day.", "Она сказала, что звонила накануне."],
      ["following", "следующий", "He promised to call the following week.", "Он обещал позвонить на следующей неделе."]
    ],
    texts: [
      {
        id: 't-b1-13-1', title: 'The interview, retold', level: 'B1',
        text: `Yesterday I had a video interview with a game studio in Berlin, and my friend Nastya made me tell her everything. So here it is.

The call started with a recruiter called Mark. He said he had looked through my portfolio and that he really liked my mobile projects. Then he asked me where I was working now and why I wanted to leave. I explained that I had been at the same agency for four years and that I wanted to design games, not banking apps.

After that, the art director joined. She asked if I had ever designed a game interface. I admitted that I had never worked on a released game, but I told her about the inventory screen I had made for a friend's indie project. She said it was a good start. Then she wanted to know how I would test a menu with real players. I said I would watch people play without helping them, and she smiled.

Of course, they asked me the classic question: what my biggest weakness was. I told them I was a perfectionist. Mark laughed and said that every designer said that. Great.

Near the end, the art director mentioned that the whole team worked in English, and she asked whether I could give feedback in English during reviews. I said I could, although my hands were shaking a little.

Finally, Mark told me not to worry about the test task. He said it would take about six hours and that I would get it the next day. He also promised that they would reply within two weeks.

In the evening Nastya asked me if I was happy with the interview. Honestly? I think I was. And this morning the test task arrived, exactly as Mark had said. Now I only need to find six free hours.`,
        questions: [
          { q: 'What did Mark like in the portfolio?', o: ['The mobile projects', 'The banking apps', 'The drawings'], a: 0 },
          { q: 'What did the author admit?', o: ['That she couldn\'t speak English', 'That she had never worked on a released game', 'That she hated her agency'], a: 1 },
          { q: 'When did the test task arrive?', o: ['Two weeks later', 'The day after the interview', 'During the call'], a: 1 }
        ]
      },
      {
        id: 't-b1-13-2', title: 'But Max said…', level: 'B1',
        text: `Liza: Dan! What are you doing here? Max said you were in Kazan this week.
Dan: Kazan? No, I came back on Sunday. Max always gets things wrong. What else did he say?
Liza: He told me you had left our raid team. He said you were tired of losing to the same boss every Friday.
Dan: What? I never said that. I told him that I was tired, not that I was leaving! I only asked him to find someone for this Friday because I had to work late.
Liza: Oh. Well, he also said you had bought a new PC and that you were going to stream every night.
Dan: Half true. I said I might buy a new PC if I got a bonus. I didn't get one.
Liza: Classic Max. Last month he told everyone that the developers were going to delete our guild.
Dan: I remember! Someone asked him where he had read it, and he said he couldn't remember. Apparently, he saw it in a meme.
Liza: OK, so what's the truth? Are you coming on Friday or not?
Dan: I'm not sure yet. My boss asked me whether I could finish the mockups by Friday morning. I said I would try.
Liza: Then let's make a deal. If you finish, you come. And I'll tell Max not to spread any more rumours.
Dan: Good luck with that. By next week he'll be telling everyone I've been fired.
Liza: Ha! By the way, the game says the new raid opens tomorrow, so we really need you.
Dan: Fine. Tell the team I'll be there. And tell Max I said hello.
Liza: Will do. Oh, and he asked me if you still owed him five hundred roubles.
Dan: Tell him I've already paid him back! Twice!
Liza: I'll tell him. But he'll probably say you told him you'd pay next week.`,
        questions: [
          { q: 'Where did Max say Dan was?', o: ['At work', 'In Kazan', 'At home'], a: 1 },
          { q: 'What did Dan really tell Max?', o: ['That he was leaving the team', 'That he was tired', 'That he had bought a PC'], a: 1 },
          { q: 'Why might Dan miss the raid on Friday?', o: ['His boss asked him to finish the mockups', 'He is going to Kazan', 'His PC is broken'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Olga: "I\'m redesigning the app." → Olga said she ___ the app.', o: ['is redesigning', 'was redesigning', 'redesigns'], a: 1, why: 'После said am doing сдвигается в was doing.' },
      { t: 'choice', q: '"I\'ve already sent the invoice." → He said he ___ the invoice.', o: ['has already sent', 'had already sent', 'already sends'], a: 1, why: 'Present Perfect → Past Perfect: had sent.' },
      { t: 'choice', q: '"I may be late." → She said she ___ late.', o: ['will be', 'might be', 'can be'], a: 1, why: 'may в пересказе становится might.' },
      { t: 'choice', q: 'The lead ___ us that the release was delayed.', o: ['said', 'told', 'spoke'], a: 1, why: 'Человек (us) сразу после глагола → told.' },
      { t: 'choice', q: '"Please don\'t share the link," Anna said to me. → Anna asked me ___ the link.', o: ['don\'t share', 'not to share', 'to not sharing'], a: 1, why: 'Просьба «не делай» → asked + кого + not to + глагол.' },
      { t: 'choice', q: '"Where do you work?" → The girl at the party asked me where ___.', o: ['do I work', 'I worked', 'did I work'], a: 1, why: 'В пересказанном вопросе прямой порядок, без do, время сдвигается.' },
      { t: 'choice', q: 'Dan told you Max had broken his leg. Now you see Max at the gym: Dan said you ___ your leg!', o: ['have broken', 'had broken', 'break'], a: 1, why: 'Сказанное оказалось неправдой → обязательно прошедшее: had broken.' },
      { t: 'choice', q: 'He explained ___ how the new plugin worked.', o: ['me', 'to me', 'for me'], a: 1, why: 'explain + to + кому: explained to me.' },
      { t: 'gap', q: '"I\'ll call you back." → She said she ___ me back. (will call)', a: ['would call'], why: 'will в пересказе → would.' },
      { t: 'gap', q: '"Can you send me the files?" → He asked me ___ him the files. (send)', a: ['to send'], why: 'Просьба → asked + кого + to + глагол.' },
      { t: 'gap', q: '"Do you like horror games?" → She asked me ___ I liked horror games.', a: ['if', 'whether'], why: 'Вопрос да/нет пересказываем через if или whether.' },
      { t: 'gap', q: '"I can\'t come to the stream tonight." → Liza said she ___ come to the stream that night.', a: ['couldn\'t', 'could not'], why: 'can\'t → couldn\'t после said.' },
      { t: 'gap', q: 'My teacher ___ me to read more in English. (tell)', a: ['told'], why: 'Указание кому-то → told + кого + to.' },
      { t: 'gap', q: '"Have you ever been to Japan?" → He asked if I ___ ever been to Japan.', a: ['had'], why: 'have been → had been при пересказе.' },
      { t: 'order', a: 'She asked me where I had bought it', ru: 'Она спросила меня, где я это купил.' },
      { t: 'order', a: 'He told us not to wait for him', ru: 'Он сказал нам его не ждать.' },
      { t: 'tr', q: 'Он сказал, что устал.', a: ['he said he was tired', 'he said that he was tired', 'he told me he was tired', 'he told me that he was tired'] },
      { t: 'tr', q: 'Она спросила, играю ли я в шахматы.', a: ['she asked if i played chess', 'she asked whether i played chess', 'she asked me if i played chess', 'she asked me whether i played chess'] },
      { t: 'listen', say: 'She told me not to worry', a: ['she told me not to worry'] },
      { t: 'listen', say: 'He wanted to know where I was from', a: ['he wanted to know where i was from'] }
    ],
    test: [
      { t: 'choice', q: '"I\'m going to buy a new graphics card." → Dan said he ___ a new graphics card.', o: ['was going to buy', 'is going to buy', 'would going to buy'], a: 0, why: 'am going to → was going to.' },
      { t: 'gap', q: 'A month ago Kate said, "I\'ll finish it tomorrow." → Kate said she would finish it ___.', a: ['the next day', 'the following day'], why: 'Пересказываем в другой день → tomorrow становится the next day.' },
      { t: 'choice', q: 'The forecast ___ it will snow tonight.', o: ['says', 'said', 'tells'], a: 0, why: 'Свежая информация, глагол в настоящем → says, без сдвига.' },
      { t: 'choice', q: 'Sergey said goodbye ___ and left.', o: ['me', 'to me', 'us'], a: 1, why: 'say + что + to + кому: said goodbye to me.' },
      { t: 'gap', q: '"Don\'t touch the red wire!" → The engineer warned us ___ the red wire. (not / touch)', a: ['not to touch'], why: 'Запрет → warned + кого + not to + глагол.' },
      { t: 'choice', q: '"Why did you leave your last job?" → The interviewer asked me why ___.', o: ['did I leave', 'I had left', 'had I left'], a: 1, why: 'Прямой порядок (I + глагол), did исчезает, время сдвигается.' },
      { t: 'gap', q: '"We must restart the server." → The admin said they ___ restart the server. (два слова)', a: ['had to'], why: 'must (обязанность) в пересказе обычно → had to.' },
      { t: 'choice', q: 'Tom still wants to move to Canada. Which sentence is also correct?', o: ['Tom told me he wanted to move to Canada.', 'Tom said me he wants to move to Canada.', 'Tom told he wants to move to Canada.'], a: 0, why: 'Если всё ещё правда, можно и wants, и wanted; tell требует человека.' },
      { t: 'choice', q: '"Are you busy?" she asked. → She asked ___.', o: ['if I was busy', 'that I was busy', 'was I busy'], a: 0, why: 'Вопрос да/нет → if + прямой порядок; после ask не бывает that.' },
      { t: 'gap', q: '"I didn\'t see the message." → He said he ___ the message. (not / see)', a: ['hadn\'t seen', 'had not seen', 'didn\'t see', 'did not see'], why: 'Past Simple можно оставить или сдвинуть в Past Perfect.' },
      { t: 'choice', q: 'She ___ that she had forgotten about the meeting.', o: ['admitted me', 'admitted', 'told'], a: 1, why: 'admit, как say, не берёт человека сразу после себя.' },
      { t: 'choice', q: 'Пересказ: "Can you lend me your charger?"', o: ['He asked me to lend him my charger.', 'He asked me lend him my charger.', 'He said me to lend him my charger.'], a: 0, why: 'Просьба → asked + кого + to + глагол; местоимения меняются по смыслу.' }
    ]
  },

  // ───────────────────────────── UNIT B1-14 ─────────────────────────────
  {
    id: 'b1-14', level: 'B1', num: 14, track: 'main',
    books: { blue: [49, 50, 51, 52] },
    title: 'Вопросы, вспомогательные глаголы, I think so, question tags',
    summary: 'Научимся задавать любые вопросы без ошибок (Who told you? Where do you think he is?), правильно отвечать на «Разве ты не…?», спорить и соглашаться коротко (Yes, I did! So would I.), говорить I think so / I hope not и ставить хвостики даже в сложных случаях: Let\'s go, shall we? Nobody came, did they?',
    grammar: [
      {
        title: '1. Главная идея: всё держится на помощнике',
        html: `
<div class="g-idea">Что вы уже знаете: порядок слов в вопросах (урок A1-17), короткие ответы, So do I и хвостики isn't it (урок A2-11), Do you know where… (урок A2-21). На B1 разбираем тонкости. Почти всё в этом юните держится на одном герое — <b>вспомогательном глаголе</b> (помощнике): am, have, do, did, can, will, would…</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты давно ждёшь?</p><p>Кто тебе сказал?</p><p>Разве ты не слышал звонок?</p><p>Как думаешь, где он?</p><p>— Я был в Риме. — Я тоже.</p><p>Думаю, да. / Надеюсь, нет.</p><p>Ты не знаешь, где Катя?</p></div>
  <div><div class="g-h">English</div><p><span class="say">Have you been waiting long?</span></p><p><span class="say">Who told you?</span></p><p><span class="say">Didn't you hear the doorbell?</span></p><p><span class="say">Where do you think he is?</span></p><p><span class="say">I've been to Rome. — So have I.</span></p><p><span class="say">I think so. / I hope not.</span></p><p><span class="say">You don't know where Kate is, do you?</span></p></div>
</div>
<table>
<tr><th>Роль помощника</th><th>Пример</th></tr>
<tr><td>вопрос</td><td><span class="say">Have you finished?</span></td></tr>
<tr><td>короткий ответ, спор</td><td><span class="say">Yes, I have!</span></td></tr>
<tr><td>переспрос «Да ну?»</td><td><span class="say">Oh, have you?</span></td></tr>
<tr><td>я тоже</td><td><span class="say">So have I.</span></td></tr>
<tr><td>хвостик «да?»</td><td><span class="say">You've finished, haven't you?</span></td></tr>
</table>
<div class="g-tip">Помощник — как заместитель: он выходит вместо всего сказуемого, чтобы не повторять длинную фразу.</div>
<div class="mini" data-q="Do you like jazz? — Yes, I ___." data-o="do|like|am" data-a="0" data-why="Вопрос с do → короткий ответ тоже с do."></div>`
      },
      {
        title: '2. Вопросы глубже: кто сделал, кого, и предлог в конце',
        html: `
<div class="g-idea">В длинных формах вперёд выходит только <b>первый</b> помощник. А если вопросительное слово само — «кто / что сделал», то <b>do / did не нужно</b>.</div>
<ul class="g-list">
<li><span class="say">Have you been working all night?</span> — Ты всю ночь работал?</li>
<li><span class="say">Will you be streaming tomorrow?</span> — Ты завтра будешь стримить?</li>
<li><span class="say">When was this game released?</span> — Когда вышла эта игра?</li>
<li><span class="say">How long has she been living in Berlin?</span> — Сколько она уже живёт в Берлине?</li>
</ul>
<div class="g-bad">Is working Kate today?</div>
<div class="g-good">Is <b>Kate working</b> today? <span class="muted">— «кто» сразу после первого помощника</span></div>
<p><b>Кто сделал или кому сделали?</b> Сравните:</p>
<table>
<tr><th>Факт</th><th>Вопрос</th><th>Смысл</th></tr>
<tr><td>Somebody hacked Max.</td><td><span class="say">Who hacked Max?</span></td><td>кто взломал — без did</td></tr>
<tr><td>Max hacked somebody.</td><td><span class="say">Who did Max hack?</span></td><td>кого взломал — с did</td></tr>
<tr><td>Something happened.</td><td><span class="say">What happened?</span></td><td>что случилось</td></tr>
<tr><td>Diane said something.</td><td><span class="say">What did Diane say?</span></td><td>что сказала</td></tr>
</table>
<p>Так же со словами <b>which, whose, how many</b>, когда они — «кто действует»:</p>
<ul class="g-list">
<li><span class="say">Which team won the final?</span> — Какая команда выиграла финал?</li>
<li><span class="say">How many people came to the meetup?</span> — Сколько людей пришло на митап?</li>
<li><span class="say">Whose phone is ringing?</span> — Чей телефон звонит?</li>
<li><span class="say">Who wants more pizza?</span> — Кто хочет ещё пиццы?</li>
</ul>
<p><b>Предлог — в конце</b>, а не в начале, как в русском:</p>
<ul class="g-list">
<li><span class="say">Who does this headset belong to?</span> — Кому принадлежит эта гарнитура?</li>
<li><span class="say">What are you worried about?</span> — О чём ты переживаешь?</li>
<li><span class="say">Which job has Tina applied for?</span> — На какую вакансию подалась Тина?</li>
<li><span class="say">What was the weather like?</span> — Какая была погода?</li>
</ul>
<p>Предлог в начале с <b>whom</b> — очень официально, так пишут в документах: <span class="say">To whom should I address the letter?</span></p>
<div class="mini" data-q="Something fell off the shelf. → What ___ off the shelf?" data-o="fell|did fall|did it fall" data-a="0" data-why="What — само «что упало» → без did."></div>
<div class="mini" data-q="Кого ты пригласил? — Who ___ invite?" data-o="invited you|did you|you did" data-a="1" data-why="Who — «кого» (над ним действуют) → нужен did: Who did you invite?"></div>`
      },
      {
        title: '3. Отрицательные вопросы: «Разве ты не…?» и как на них отвечать',
        html: `
<div class="g-idea">Вопрос с <b>not</b> (Didn't you…? Isn't it…?) — не просто вопрос. Им показывают <b>удивление</b>, ждут <b>согласия</b> или что-то <b>предлагают</b>.</div>
<table>
<tr><th>Зачем</th><th>Пример</th><th>Перевод</th></tr>
<tr><td>удивление</td><td><span class="say">Didn't you hear the doorbell? I rang three times.</span></td><td>Ты что, не слышал звонок?</td></tr>
<tr><td>удивление</td><td><span class="say">Haven't you finished yet?</span></td><td>Ты ещё не закончил?</td></tr>
<tr><td>ждём «да»</td><td><span class="say">Haven't we met before?</span></td><td>Мы ведь раньше встречались?</td></tr>
<tr><td>ждём «да»</td><td><span class="say">Wasn't that ending amazing?</span></td><td>Правда, концовка — огонь?</td></tr>
<tr><td>предложение</td><td><span class="say">Why don't we order pizza?</span></td><td>Может, закажем пиццу?</td></tr>
<tr><td>настоящий вопрос</td><td><span class="say">Why wasn't Emma at the meeting?</span></td><td>Почему Эммы не было на встрече?</td></tr>
</table>
<p>После <b>why</b> порядок вопросительный, как всегда: <span class="say">Why didn't you tell me?</span> — не «Why you didn't tell me».</p>
<p><b>Ловушка ответа.</b> В английском yes / no отвечает на <b>факт</b>, а не на вопрос. Есть действие — Yes. Нет действия — No. В русском часто наоборот: «Да, не хочу».</p>
<table>
<tr><th>Вопрос</th><th>Факт</th><th>Ответ</th></tr>
<tr><td><span class="say">Don't you want to come?</span></td><td>хочу</td><td><span class="say">Yes, I do.</span></td></tr>
<tr><td>Don't you want to come?</td><td>не хочу</td><td><span class="say">No, I don't.</span></td></tr>
<tr><td><span class="say">Didn't you get my message?</span></td><td>получил</td><td><span class="say">Yes, I did. Sorry!</span></td></tr>
<tr><td>Didn't you get my message?</td><td>не получил</td><td><span class="say">No, I didn't.</span></td></tr>
</table>
<div class="g-bad">— Aren't you coming? — Yes, I'm not. <span class="muted">— «да, не иду»</span></div>
<div class="g-good">— Aren't you coming? — <b>No, I'm not.</b></div>
<div class="g-tip">Не угадывайте yes или no — сразу договаривайте короткий ответ: <b>No, I'm not</b> / <b>Yes, I am</b>. Помощник снимет любую путаницу.</div>
<div class="mini" data-q="Aren't you hungry? — (вы не голодны)" data-o="Yes, I am.|No, I'm not.|Yes, I'm not." data-a="1" data-why="Голода нет → No + отрицательный короткий ответ."></div>`
      },
      {
        title: '4. Вопрос внутри фразы: глубже, и Where do you think…?',
        html: `
<div class="g-idea">Вы уже знаете (урок A2-21): <b>Do you know where he lives?</b> — внутри длинной фразы порядок как в утверждении, без do / does / did, а «ли» = <b>if / whether</b>. Так же устроены пересказанные вопросы из урока B1-13. Теперь — больше «входов» и одна важная ловушка.</div>
<p>Фразы, после которых идёт вопрос с прямым порядком:</p>
<ul class="g-list">
<li><span class="say">Could you tell me when the call starts?</span> — Не подскажете, когда начинается созвон? <span class="muted">(вежливее прямого вопроса)</span></li>
<li><span class="say">Do you have any idea how much it will cost?</span> — Ты хоть примерно знаешь, сколько это будет стоить?</li>
<li><span class="say">I wonder why she left so early.</span> — Интересно, почему она ушла так рано.</li>
<li><span class="say">I can't remember where I parked the car.</span> — Не помню, где я припарковался.</li>
<li><span class="say">Please explain what you mean.</span> — Объясни, пожалуйста, что ты имеешь в виду.</li>
<li><span class="say">Nobody knows who wrote this code.</span> — Никто не знает, кто написал этот код. <span class="muted">(who — «кто сделал»: порядок и так прямой)</span></li>
</ul>
<p><b>whether</b> умеет больше, чем if: <b>whether or not</b> и <b>whether + to</b>:</p>
<ul class="g-list">
<li><span class="say">I don't know whether to buy it now or wait for a sale.</span> — Не знаю, купить сейчас или ждать скидку.</li>
<li><span class="say">I'm not sure whether or not he's coming.</span> — Не уверен, придёт он или нет.</li>
</ul>
<p>Знак «?» ставим, только если вся фраза — вопрос: <span class="say">Do you know where he is?</span> Но: <span class="say">I wonder where he is.</span> — точка.</p>
<p><b>Ловушка: think, suppose, guess, reckon.</b> С ними ответ — не «да / нет», а мнение. Поэтому вопросительное слово выходит в <b>самое начало</b>:</p>
<div class="g-formula"><span class="g-part g-v">Where / Who / What…</span><span class="g-plus">+</span><span class="g-part">do you think</span><span class="g-plus">+</span><span class="g-part">кто + глагол</span></div>
<ul class="g-list">
<li><span class="say">Where do you think he lives?</span> — Как думаешь, где он живёт?</li>
<li><span class="say">Who do you think will win?</span> — Кто, по-твоему, победит?</li>
<li><span class="say">What do you think happened?</span> — Что, по-твоему, случилось?</li>
<li><span class="say">How old do you reckon she is?</span> — Как думаешь, сколько ей лет?</li>
</ul>
<div class="g-bad">Do you think where he lives? · Can you tell me what time does it start?</div>
<div class="g-good"><b>Where do you think</b> he lives? · Can you tell me what time <b>it starts</b>?</div>
<div class="mini" data-q="___ will win the tournament?" data-o="Who do you think|Do you think who|Do you know who think" data-a="0" data-why="С think вопросительное слово выходит в начало: Who do you think…"></div>
<div class="mini" data-q="I wonder why ___ so angry." data-o="is she|she is|does she" data-a="1" data-why="Вопрос внутри фразы → прямой порядок: she is."></div>`
      },
      {
        title: '5. Помощник вместо повтора: спорим, удивляемся, соглашаемся',
        html: `
<div class="g-idea">Чтобы не повторять всю фразу, англичане оставляют только помощника. Так строятся короткие ответы, возражения, переспросы и «я тоже».</div>
<p><b>Вместо повтора:</b></p>
<ul class="g-list">
<li><span class="say">I wasn't tired, but my friends were.</span> — Я не устал, а друзья — да.</li>
<li><span class="say">I've never been to Japan, but Kate has.</span> — Я не был в Японии, а Катя была.</li>
<li><span class="say">Dan could help us, but he won't.</span> — Дэн мог бы помочь, но не станет.</li>
<li><span class="say">Does Olga live in Kazan? — She did, but she doesn't any more.</span> — Раньше жила, но уже нет.</li>
<li><span class="say">Please don't tell anyone. — I won't.</span> — Не скажу.</li>
</ul>
<p><b>Возражаем</b> — помощник с ударением, противоположный по знаку:</p>
<ul class="g-list">
<li><span class="say">You're cheating! — No, I'm not!</span> — Ты читеришь! — Нет!</li>
<li><span class="say">You didn't save the game. — Yes, I did!</span> — Ты не сохранил игру. — Сохранил!</li>
<li><span class="say">You never listen to me. — I do!</span> — Ты меня никогда не слушаешь. — Слушаю!</li>
</ul>
<p><b>Переспрос-реакция</b> «Да? Правда?» — помощник + местоимение, тот же знак, что у собеседника. Можно сразу показать несогласие:</p>
<ul class="g-list">
<li><span class="say">Lisa isn't coming tonight. — Isn't she? What's wrong?</span></li>
<li><span class="say">It rained every day of our trip. — Did it? What a shame!</span></li>
<li><span class="say">I love horror films. — Do you? I don't.</span> — Правда? А я нет.</li>
<li><span class="say">I didn't like the ending. — Didn't you? I did.</span> — Серьёзно? А мне понравилось.</li>
</ul>
<p><b>So / Neither / Nor</b> + помощник + кто — «я тоже / я тоже нет». Помощник должен совпадать по времени и виду:</p>
<table>
<tr><th>Фраза</th><th>Я тоже</th><th>Я тоже нет</th></tr>
<tr><td>I'd love a coffee. / I wouldn't go.</td><td><span class="say">So would I.</span></td><td><span class="say">Neither would I.</span></td></tr>
<tr><td>I've seen it. / I haven't finished.</td><td><span class="say">So have I.</span></td><td><span class="say">Nor have I.</span></td></tr>
<tr><td>I passed. / I didn't sleep.</td><td><span class="say">So did I.</span></td><td><span class="say">I didn't either.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I passed the exam and so did Max.</span> — Я сдал, и Макс тоже.</li>
<li><span class="say">Kate can't drive and neither can her brother.</span> — Катя не водит, и её брат тоже.</li>
<li>В разговоре проще: <span class="say">Me too.</span> / <span class="say">Me neither.</span></li>
</ul>
<div class="g-bad">I passed and so Max did. · I didn't like it. — So did I.</div>
<div class="g-good">I passed and <b>so did Max</b>. · I didn't like it. — <b>Neither did I</b>.</div>
<div class="mini" data-q="I'd like to live by the sea. — So ___ I." data-o="do|would|am" data-a="1" data-why="I'd = I would → и в ответе would."></div>
<div class="mini" data-q="You didn't lock the door! — Yes, I ___!" data-o="locked|did|do" data-a="1" data-why="Возражаем на Past Simple → Yes, I did."></div>`
      },
      {
        title: '6. I think so, I hope not — «думаю, да», «надеюсь, нет»',
        html: `
<div class="g-idea">Чтобы не повторять весь ответ, после <b>think, hope, expect, suppose, guess, be afraid</b> ставим <b>so</b>. «Думаю, да» = <b>I think so</b>.</div>
<ul class="g-list">
<li><span class="say">Is the server down? — I think so.</span> — Думаю, да.</li>
<li><span class="say">Will they release it this year? — I expect so.</span> — Скорее всего.</li>
<li><span class="say">Is this seat free? — I suppose so.</span> — Наверное.</li>
<li><span class="say">Is the sale over? — I'm afraid so.</span> — Боюсь, что да. <span class="muted">(I'm afraid = к сожалению, а не страх)</span></li>
</ul>
<p>Отрицание у этих глаголов разное — это главное, что нужно запомнить:</p>
<table>
<tr><th>Да</th><th>Нет</th></tr>
<tr><td>I think so · I expect so</td><td><span class="say">I don't think so</span> · <span class="say">I don't expect so</span></td></tr>
<tr><td>I hope so</td><td><span class="say">I hope not</span> <span class="muted">(не I don't hope so)</span></td></tr>
<tr><td>I'm afraid so</td><td><span class="say">I'm afraid not</span></td></tr>
<tr><td>I guess so · I suppose so</td><td><span class="say">I guess not</span> · <span class="say">I suppose not</span> / I don't suppose so</td></tr>
</table>
<p><b>Ловушка русского «думаю, что не…».</b> По-английски отрицание обычно переезжает к think:</p>
<ul class="g-list">
<li><span class="say">I don't think he'll come.</span> — Думаю, он не придёт.</li>
<li><span class="say">I don't think it's a good idea.</span> — По-моему, это плохая идея.</li>
<li><span class="say">I don't expect we'll finish today.</span> — Не думаю, что мы сегодня закончим.</li>
</ul>
<p>С <b>hope</b> всё наоборот — отрицание остаётся на месте: <span class="say">I hope it doesn't rain.</span></p>
<div class="g-bad">I don't hope so. · I think no. · I think he won't come.</div>
<div class="g-good">I <b>hope not</b>. · I <b>don't think so</b>. · I <b>don't think</b> he'll come.</div>
<div class="mini" data-q="Will it rain on Saturday? (вы не хотите дождя)" data-o="I hope not.|I don't hope so.|I hope no." data-a="0" data-why="Отрицание от I hope so → I hope not."></div>
<div class="mini" data-q="Is the shop still open? — К сожалению, нет:" data-o="I'm afraid not.|I'm afraid no.|I don't afraid." data-a="0" data-why="I'm afraid so → I'm afraid not."></div>`
      },
      {
        title: '7. Question tags глубже: особые случаи, интонация, просьбы',
        html: `
<div class="g-idea">Вы уже знаете (урок A2-11): плюс → хвостик с минусом, минус → с плюсом, помощник берём из фразы. Теперь — случаи, в которых ошибаются почти все, и как хвостик меняет смысл.</div>
<table>
<tr><th>Фраза</th><th>Хвостик</th><th>Почему</th></tr>
<tr><td><span class="say">There's a lot of lag today, isn't there?</span></td><td>isn't there</td><td>there остаётся</td></tr>
<tr><td><span class="say">Joe should pass, shouldn't he?</span></td><td>shouldn't he</td><td>модальный — как помощник</td></tr>
<tr><td><span class="say">He'd never met her before, had he?</span></td><td>had he</td><td>'d = had, never = минус</td></tr>
<tr><td><span class="say">You'd help me, wouldn't you?</span></td><td>wouldn't you</td><td>'d = would</td></tr>
<tr><td><span class="say">I'm right, aren't I?</span></td><td>aren't I</td><td>исключение</td></tr>
<tr><td><span class="say">Let's take a break, shall we?</span></td><td>shall we</td><td>после Let's</td></tr>
<tr><td><span class="say">Don't be late, will you?</span></td><td>will you</td><td>после Don't…</td></tr>
<tr><td><span class="say">Pass me the charger, could you?</span></td><td>could / will / would you</td><td>после просьбы</td></tr>
<tr><td><span class="say">Nobody called, did they?</span></td><td>did they</td><td>nobody = минус</td></tr>
<tr><td><span class="say">Nothing happened, did it?</span></td><td>did it</td><td>nothing = минус</td></tr>
<tr><td><span class="say">This is your laptop, isn't it?</span></td><td>isn't it</td><td>this / that → it</td></tr>
</table>
<p><b>Интонация меняет смысл.</b> Голос идёт <b>вниз</b> — вы не спрашиваете, а ждёте согласия. Голос идёт <b>вверх</b> — настоящий вопрос:</p>
<ul class="g-list">
<li><span class="say">It's a great map, isn't it?</span> ↘ — Классная карта, да? <span class="muted">(ответ: Yes, amazing.)</span></li>
<li><span class="say">You haven't seen my charger, have you?</span> ↗ — Ты не видел мою зарядку? <span class="muted">(правда не знаю)</span></li>
</ul>
<p><b>Минус + хвостик с плюсом</b> — очень вежливая просьба или вопрос «вдруг ты знаешь»:</p>
<ul class="g-list">
<li><span class="say">You couldn't do me a favour, could you?</span> — Ты не мог бы сделать мне одолжение?</li>
<li><span class="say">You don't know where Kate is, do you?</span> — Ты случайно не знаешь, где Катя?</li>
<li><span class="say">You haven't got a spare cable, have you?</span> — У тебя не найдётся лишнего кабеля?</li>
</ul>
<p>Ответ — снова по факту: <span class="say">You're not going out, are you? — Yes, I am.</span> = иду. <span class="say">No, I'm not.</span> = не иду.</p>
<div class="g-bad">Let's play, don't we? · Nobody came, didn't they? · I'm late, amn't I?</div>
<div class="g-good">Let's play, <b>shall we</b>? · Nobody came, <b>did they</b>? · I'm late, <b>aren't I</b>?</div>
<div class="mini" data-q="Nobody saw us, ___?" data-o="did they|didn't they|did he" data-a="0" data-why="nobody уже минус → хвостик с плюсом; о людях — they."></div>
<div class="mini" data-q="Let's take a break, ___?" data-o="don't we|shall we|will we" data-a="1" data-why="После Let's хвостик всегда shall we."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Who did tell you about it?</div><div class="g-good">Who <b>told</b> you about it?</div>
<div class="g-bad">About what are you talking?</div><div class="g-good">What are you talking <b>about</b>?</div>
<div class="g-bad">Why you didn't call me?</div><div class="g-good">Why <b>didn't you</b> call me?</div>
<div class="g-bad">— Don't you like it? — Yes, I don't.</div><div class="g-good">— Don't you like it? — <b>No, I don't.</b></div>
<div class="g-bad">Do you think where she is?</div><div class="g-good"><b>Where do you think</b> she is?</div>
<div class="g-bad">Could you tell me where is the station?</div><div class="g-good">Could you tell me where <b>the station is</b>?</div>
<div class="g-bad">I've been there. — So I have.</div><div class="g-good">I've been there. — <b>So have I.</b></div>
<div class="g-bad">I don't hope so.</div><div class="g-good">I <b>hope not</b>.</div>
<div class="g-bad">Let's go, don't we?</div><div class="g-good">Let's go, <b>shall we</b>?</div>
<div class="g-bad">Nobody noticed, didn't they?</div><div class="g-good">Nobody noticed, <b>did they</b>?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Всё решает помощник: <b>Who told you?</b> без did · <b>Where do you think…</b> · отвечаем по факту (<b>No, I'm not</b>) · <b>So would I / Neither did I</b> · <b>I think so / I hope not</b> · <b>Let's…, shall we? Nobody…, did they?</b></div>`
      }
    ],
    words: [
      ["suppose", "полагать, предполагать", "Is it free? — I suppose so.", "Это бесплатно? — Наверное."],
      ["guess", "угадывать; полагать", "Who do you guess will win?", "Как думаешь, кто победит?"],
      ["reckon", "считать, полагать (разг.)", "How much do you reckon it costs?", "Как думаешь, сколько это стоит?"],
      ["expect", "ожидать; полагать", "Will she call? — I expect so.", "Она позвонит? — Думаю, да."],
      ["hope", "надеяться; надежда", "Is it going to rain? — I hope not.", "Будет дождь? — Надеюсь, нет."],
      ["afraid", "боюсь, что… (вежливо); испуганный", "Is the sale over? — I'm afraid so.", "Распродажа закончилась? — Боюсь, что да."],
      ["neither", "тоже не; ни один (из двух)", "I can't swim. — Neither can I.", "Я не умею плавать. — Я тоже."],
      ["nor", "и не, тоже не", "I haven't seen it. — Nor have I.", "Я его не видел. — Я тоже."],
      ["either", "тоже (в отрицании)", "I didn't like it either.", "Мне тоже не понравилось."],
      ["belong to", "принадлежать", "Who does this headset belong to?", "Чья это гарнитура?"],
      ["apply for", "подавать заявку на", "Which job did you apply for?", "На какую вакансию ты подавался?"],
      ["favour", "одолжение, услуга", "You couldn't do me a favour, could you?", "Не сделаешь мне одолжение?"],
      ["lift", "подвезти; подвоз", "Could you give me a lift to the station?", "Не подвезёшь меня до станции?"],
      ["spare", "запасной, лишний", "You haven't got a spare cable, have you?", "У тебя не найдётся лишнего кабеля?"],
      ["mind", "возражать, быть против", "You don't mind if I sit here, do you?", "Ты ведь не против, если я сяду здесь?"],
      ["mean — meant", "иметь в виду; значить", "Please explain what you mean.", "Объясни, пожалуйста, что ты имеешь в виду."],
      ["actually", "вообще-то, на самом деле", "Actually, I did save the game.", "Вообще-то я сохранил игру."],
      ["definitely", "определённо, точно", "Are you coming? — Definitely!", "Ты придёшь? — Обязательно!"],
      ["obviously", "очевидно", "Obviously, nobody read the rules, did they?", "Очевидно, никто не читал правила, да?"],
      ["exactly", "точно, именно", "Do you know exactly where it is?", "Ты точно знаешь, где это?"],
      ["agree", "соглашаться", "I agree with you. — So do I.", "Я с тобой согласен. — Я тоже."],
      ["disagree", "не соглашаться", "I disagree. It wasn't boring, was it?", "Не согласен. Скучно ведь не было?"],
      ["doorbell", "дверной звонок", "Didn't you hear the doorbell?", "Ты что, не слышал звонок?"],
      ["tournament", "турнир", "Who do you think will win the tournament?", "Как думаешь, кто выиграет турнир?"],
      ["cheat", "жульничать, читерить", "You're cheating! — No, I'm not!", "Ты читеришь! — Нет!"],
      ["impatient", "нетерпеливый", "I'm too impatient, aren't I?", "Я слишком нетерпеливый, да?"],
      ["sense of humour", "чувство юмора", "She's got a great sense of humour, hasn't she?", "У неё отличное чувство юмора, правда?"],
      ["shame", "жаль; стыд", "It rained all week. — Did it? What a shame!", "Всю неделю шёл дождь. — Да? Как жаль!"],
      ["torch", "фонарик", "You couldn't turn on your torch, could you?", "Не включишь фонарик?"],
      ["split up", "разделиться; расстаться", "Why don't we split up?", "Может, разделимся?"],
      ["small talk", "светская беседа, разговор ни о чём", "I'm not good at small talk, are you?", "Я не мастер светских бесед, а ты?"]
    ],
    texts: [
      {
        id: 't-b1-14-1', title: 'Co-op night', level: 'B1',
        text: `Kate: You've played this map before, haven't you?
Max: Once, I think. Didn't we play it together last summer?
Kate: No, that was a different one. This one's new, isn't it?
Max: I suppose so. Anyway, you know where the key is, don't you?
Kate: I have no idea where it is. Where do you think they've hidden it?
Max: Somewhere in the tower, probably. I hope not, though. The tower is full of zombies.
Kate: Oh, come on. You're not scared of zombies, are you?
Max: No, I'm not! OK, maybe a little. I hate the sound they make.
Kate: So do I, actually. Right, who's got the medkits?
Max: I have. Wait, no, I haven't. I gave them to you, didn't I?
Kate: Did you? Oh, yes, you did. Sorry.
Max: Where do you think the other team is?
Kate: I'm not sure. I wonder whether they've found the key already.
Max: I don't think so. The gate is still closed, isn't it?
Kate: It is. Let's go through the forest, shall we?
Max: Why don't we split up? It'll be faster.
Kate: Every horror film starts like that, doesn't it?
Max: Ha! OK, OK, we'll stay together. Don't run off without me, will you?
Kate: I won't. Wait. Can you hear that?
Max: Hear what? I can't hear anything.
Kate: Neither can I now. That's what worries me.
Max: You couldn't turn on your torch, could you? Mine's broken.
Kate: Sure. Look, there are stairs. Who do you think built a tower in the middle of a forest?
Max: Somebody who likes zombies. Oh! There's the key! It was in the tower after all.
Kate: Was it? Brilliant.
Max: I'm a genius, aren't I?
Kate: You said you hoped it wasn't in the tower!
Max: Details. Nobody needs to know that, do they?
Kate: I'm afraid the whole stream heard it, Max.`,
        questions: [
          { q: 'Where was the key?', o: ['In the forest', 'In the tower', 'At the gate'], a: 1 },
          { q: 'Why didn\'t Max want to go into the tower?', o: ['It was full of zombies', 'It was too far', 'The gate was closed'], a: 0 },
          { q: 'Why did Max ask Kate to turn on her torch?', o: ['He lost his', 'His torch was broken', 'He was scared of the dark'], a: 1 }
        ]
      },
      {
        id: 't-b1-14-2', title: 'Tiny words, big job', level: 'B1',
        text: `When I joined an international design team last spring, I thought my English was fine. I could read documentation, write emails and understand most meetings. But in the kitchen, during small talk, I felt like a robot.

The problem wasn't big words. It was the tiny ones. My colleague Sam would say, "Nice weather today, isn't it?" and I would answer, "Yes, the weather is nice today." Technically correct, but it sounded like a textbook. After a few weeks I noticed that people simply said, "Yes, lovely, isn't it?" and moved on.

Then there were my questions. I used to ask, "Where is the meeting room?" or "What time does the call start?" That was fine, but my manager, who is very polite, always asked, "Do you know where the meeting room is?" or "Could you tell me when the call starts?" So I started copying her. It felt strange at first, because the word order changes, but now it's automatic.

The hardest part was answering negative questions. Once a colleague asked me, "Didn't you get my message?" I had got it, but I said "No," because in Russian that sounds like "No, you're right, sorry." She sent the message again. And again. After that I learned the rule: answer about the fact. If I got it, I say, "Yes, I did."

Now I collect small phrases like souvenirs: "I hope not." "I'm afraid so." "Neither do I." "Oh, are you?" "I don't think so." They cost nothing, but they make a conversation feel human.

Last week a new designer from Brazil joined us. At lunch she said, "I don't really understand small talk here." "Neither did I," I told her. "Give it a few weeks. You'll pick it up, won't you?" She laughed. I think she understood.`,
        questions: [
          { q: 'What was the author\'s problem at first?', o: ['Her small talk sounded like a textbook', 'She couldn\'t read documentation', 'She didn\'t understand meetings'], a: 0 },
          { q: 'How did the author learn polite questions?', o: ['From a textbook', 'By copying her manager', 'From Sam'], a: 1 },
          { q: 'What happened when she answered "No" to "Didn\'t you get my message?"', o: ['The colleague called her', 'The colleague sent the message again', 'The colleague laughed'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Somebody left the door open. → Who ___ the door open?', o: ['left', 'did leave', 'did left'], a: 0, why: 'Who — «кто сделал» → без did, глагол в прошедшем.' },
      { t: 'choice', q: 'What are you ___? — I\'m looking for my keys.', o: ['looking', 'looking for', 'for looking'], a: 1, why: 'Предлог в вопросе уходит в конец: What are you looking for?' },
      { t: 'choice', q: '"Don\'t you like sushi?" — (вы любите суши)', o: ['No, I do.', 'Yes, I do.', 'Yes, I don\'t.'], a: 1, why: 'Отвечаем по факту: люблю → Yes, I do.' },
      { t: 'choice', q: 'Could you tell me where ___?', o: ['is the station', 'the station is', 'does the station'], a: 1, why: 'Вопрос внутри фразы → прямой порядок: the station is.' },
      { t: 'choice', q: '"I\'ve never played Minecraft." — "___ I."', o: ['So have', 'Neither have', 'Neither did'], a: 1, why: 'Фраза с минусом (never) и have → Neither have I.' },
      { t: 'choice', q: '"Is the meeting cancelled?" (вы хотите, чтобы встреча была) — "___"', o: ['I don\'t hope so.', 'I hope not.', 'I hope no.'], a: 1, why: 'Отрицание от I hope so → I hope not.' },
      { t: 'choice', q: 'Let\'s order pizza, ___?', o: ['shall we', 'don\'t we', 'won\'t we'], a: 0, why: 'После Let\'s хвостик — shall we.' },
      { t: 'choice', q: 'You haven\'t seen my keys, ___?', o: ['haven\'t you', 'have you', 'did you'], a: 1, why: 'Минус (haven\'t) → хвостик с плюсом have you.' },
      { t: 'gap', q: '"Are you tired?" "No, but Max ___."', a: ['is'], why: 'Помощник заменяет повтор: Max is (tired).' },
      { t: 'gap', q: '"You didn\'t save the game!" "Yes, I ___!"', a: ['did'], why: 'Возражаем на Past Simple → Yes, I did.' },
      { t: 'gap', q: 'There\'s a lot of lag today, ___ there?', a: ['isn\'t', 'is not'], why: 'There is → хвостик isn\'t there.' },
      { t: 'gap', q: 'I wonder what time the shop ___. (close)', a: ['closes'], why: 'Вопрос внутри фразы → без does, глагол с -s: closes.' },
      { t: 'gap', q: '___ do you think will win? (кто)', a: ['Who', 'who'], why: 'С think вопросительное слово стоит в начале: Who do you think…' },
      { t: 'gap', q: 'Nobody called, ___ they?', a: ['did'], why: 'Nobody = минус → хвостик с плюсом, Past Simple → did.' },
      { t: 'order', a: 'Do you know where Kate works', ru: 'Ты не знаешь, где работает Катя?' },
      { t: 'order', a: 'Why didn\'t you tell me', ru: 'Почему ты мне не сказал?' },
      { t: 'tr', q: 'Я так не думаю.', a: ['i don\'t think so', 'i do not think so'] },
      { t: 'tr', q: '— Я не умею плавать. — Я тоже. (ответ на английском)', a: ['neither can i', 'nor can i', 'i can\'t either', 'i cannot either', 'me neither'] },
      { t: 'listen', say: 'You couldn\'t help me, could you?', a: ['you couldn\'t help me could you', 'you could not help me could you'] },
      { t: 'listen', say: 'I\'m afraid not', a: ['i\'m afraid not', 'i am afraid not'] }
    ],
    test: [
      { t: 'choice', q: 'What ___ to your phone? The screen is broken!', o: ['happened', 'did happen', 'did it happen'], a: 0, why: 'What — подлежащее («что случилось») → без did.' },
      { t: 'choice', q: 'Which job has Anna applied ___?', o: ['for', 'to', 'at'], a: 0, why: 'apply for a job; предлог стоит в конце вопроса.' },
      { t: 'gap', q: 'Why ___ Emma at the meeting yesterday? (not / be)', a: ['wasn\'t', 'was not'], why: 'Why + отрицательный вопрос: помощник wasn\'t перед Emma.' },
      { t: 'choice', q: 'Выберите правильный вопрос:', o: ['Do you think where he lives?', 'Where do you think he lives?', 'Where you think he lives?'], a: 1, why: 'С think вопросительное слово выходит в начало, дальше прямой порядок.' },
      { t: 'gap', q: 'I don\'t know ___ to buy the game now or wait for a sale.', a: ['whether'], why: 'Перед to можно только whether, if здесь не ставят.' },
      { t: 'choice', q: '"Lisa isn\'t coming tonight." — "___? What\'s wrong?"', o: ['Isn\'t she', 'Is she', 'Doesn\'t she'], a: 0, why: 'Переспрос повторяет знак и помощника собеседника: isn\'t → Isn\'t she?' },
      { t: 'gap', q: 'Kate can\'t drive, and neither ___ her brother.', a: ['can'], why: 'neither + тот же помощник (can) + кто.' },
      { t: 'choice', q: 'Думаю, он не придёт.', o: ['I think he won\'t come.', 'I don\'t think he\'ll come.', 'I think he doesn\'t come.'], a: 1, why: 'Отрицание обычно переезжает к think: I don\'t think he\'ll…' },
      { t: 'gap', q: '"Do you have a room for tonight?" (отель полон) — "I\'m ___ not."', a: ['afraid'], why: 'Вежливое «к сожалению, нет» → I\'m afraid not.' },
      { t: 'choice', q: 'I\'m late again, ___?', o: ['amn\'t I', 'aren\'t I', 'isn\'t I'], a: 1, why: 'Исключение: I\'m… → aren\'t I?' },
      { t: 'choice', q: 'Don\'t tell anyone, ___?', o: ['do you', 'will you', 'don\'t you'], a: 1, why: 'После Don\'t… хвостик — will you.' },
      { t: 'gap', q: 'He\'d never met her before, ___ he?', a: ['had'], why: '\'d met = had met, never = минус → хвостик had he.' }
    ]
  }
);
