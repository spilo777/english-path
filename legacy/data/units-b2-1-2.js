// Юниты B2 1–2: if I had known / I wish I had known, wish + would, wish vs hope; passive с двумя объектами, being done, get-passive, it is said that / he is said to, supposed to, have something done
COURSE.units.push(
  // ───────────────────────────── UNIT B2-1 ─────────────────────────────
  {
    id: 'b2-1', level: 'B2', num: 1, track: 'main',
    books: { blue: [40, 41] },
    title: 'If I had known… I wish I had…; wish',
    summary: 'Научимся «переписывать» прошлое: если бы я знал — я бы пришёл (if I had known, I would have come), жалеть о сделанном и несделанном (I wish I hadn’t sent it), жаловаться (I wish you would stop) и не путать wish с hope.',
    grammar: [
      {
        title: '1. Главная идея: «если бы» о прошлом — историю уже не изменить',
        html: `
<div class="g-idea">Что вы уже знаете: <b>if I knew, I would…</b> — «если бы» о настоящем (урок B1-11) и <b>would have done</b> — «сделал бы, но не сделал» (урок B1-10). Теперь соединяем: <b>if + had done, would have done</b> — фантазия о прошлом, которое уже не изменить. И то же самое после <b>wish</b>: <b>I wish I had done</b> — «жаль, что я не сделал».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Если бы я знал, что ты в больнице, я бы приехал.</p><p>Если бы я сохранился, я бы не потерял прогресс.</p><p>Жаль, что я не купил её на распродаже.</p><p>Вот бы дождь уже кончился!</p></div>
  <div><div class="g-h">English</div><p><span class="say">If I <b>had known</b> you were in hospital, I <b>would have come</b>.</span></p><p><span class="say">If I<b>'d saved</b>, I <b>wouldn't have lost</b> my progress.</span></p><p><span class="say">I wish I <b>had bought</b> it in the sale.</span></p><p><span class="say">I wish it <b>would stop</b> raining!</span></p></div>
</div>
<p>В русском «если бы» одно на всё — и на сейчас, и на прошлое. В английском время слышно по форме:</p>
<table>
<tr><th>Когда</th><th>Если бы…</th><th>Пример</th></tr>
<tr><td>сейчас</td><td>if + <b>past</b>, would do</td><td><span class="say">If I was hungry, I'd eat something.</span></td></tr>
<tr><td>в прошлом</td><td>if + <b>had done</b>, would <b>have</b> done</td><td><span class="say">If I'd been hungry, I'd have eaten something.</span></td></tr>
</table>
<div class="g-tip">Правило «шаг от реальности» из B1-11 работает и тут: чтобы уйти от реального прошлого, делаем ещё шаг назад — Past Simple превращается в <b>Past Perfect</b> (had done).</div>
<div class="mini" data-q="If I had known about the party, I would have come. Я…" data-o="знал и пришёл|не знал и не пришёл|узнаю и приду" data-a="1" data-why="had known / would have come — фантазия о прошлом: на самом деле не знал и не пришёл."></div>`
      },
      {
        title: '2. Формула: If I had done…, I would have done…',
        html: `
<div class="g-formula"><span class="g-part">If</span><span class="g-plus">+</span><span class="g-part g-v">had + V3</span><span class="g-sep">·</span><span class="g-part g-v">would have + V3</span></div>
<div class="g-steps"><div class="g-h">Собираем из реального факта</div><ol>
<li>Факт: <span class="say">I didn't see you in the street, so I didn't say hello.</span></li>
<li>Переворачиваем обе части: didn't see → <b>had seen</b>, didn't say → <b>would have said</b>.</li>
<li>Готово: <span class="say">If I had seen you, I would have said hello.</span></li>
</ol></div>
<table>
<tr><th>Факт</th><th>Если бы…</th></tr>
<tr><td>They were tired, so they stayed in.</td><td><span class="say">They would have gone out if they hadn't been so tired.</span></td></tr>
<tr><td>I didn't have a camera.</td><td><span class="say">I'd have taken a picture if I'd had a camera.</span> <span class="muted">(had had — это нормально!)</span></td></tr>
<tr><td>You weren't looking.</td><td><span class="say">If you'd been looking, you wouldn't have walked into the door.</span></td></tr>
<tr><td>Max disconnected.</td><td><span class="say">We would have won if Max hadn't disconnected.</span></td></tr>
</table>
<p>Вопрос: <span class="say">What would you have done if you'd been in my place?</span> — Что бы ты сделал на моём месте?</p>
<p><b>'d</b> бывает и <b>had</b>, и <b>would</b>. Отличаем по тому, что идёт дальше:</p>
<ul class="g-list">
<li><b>'d + V3</b> = had: <span class="say">If I'd seen</span> = If I had seen</li>
<li><b>'d + have / 'd + глагол</b> = would: <span class="say">I'd have said</span> = I would have said</li>
</ul>
<div class="g-bad">If I would have known, I would have come.</div>
<div class="g-good">If I <b>had known</b>, I would have come. <span class="muted">— would живёт только во второй половине</span></div>
<div class="g-tip">В речи would have звучит как <b>«вудэв»</b> — <span class="say">would've</span>, <span class="say">wouldn't've</span>. Носители иногда пишут «would of» — это ошибка: правильно только <b>would have</b>.</div>
<div class="mini" data-q="If you ___ me, I would have helped you." data-o="told|had told|would have told" data-a="1" data-why="Прошлое, которое не случилось; в if-половине had + V3."></div>
<div class="mini" data-q="If I'd had more time… Здесь 'd — это…" data-o="would|had|did" data-a="1" data-why="'d + V3 (had) → это had: If I had had more time."></div>`
      },
      {
        title: '3. Would have, could have, might have',
        html: `
<div class="g-idea">Во второй половине вместо <b>would have</b> можно поставить <b>could have</b> (смогли бы) или <b>might have</b> (может быть, и…). Так вы показываете, насколько уверены.</div>
<table>
<tr><th>Форма</th><th>Смысл</th><th>If the weather hadn't been so bad…</th></tr>
<tr><td><b>would have</b></td><td>точно сделали бы</td><td><span class="say">…we would have gone to the beach.</span></td></tr>
<tr><td><b>could have</b></td><td>была бы возможность</td><td><span class="say">…we could have gone to the beach.</span></td></tr>
<tr><td><b>might have</b></td><td>может быть, пошли бы</td><td><span class="say">…we might have gone to the beach.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">If you'd told me earlier, I could have changed my plans.</span> — Если бы ты сказал раньше, я мог бы поменять планы.</li>
<li><span class="say">If we'd left ten minutes earlier, we might have caught the train.</span> — Выйди мы на десять минут раньше, может, и успели бы.</li>
<li><span class="say">If the boss had had more health, we couldn't have beaten him.</span> — Будь у босса больше здоровья, мы бы его не победили.</li>
</ul>
<p>Бывает, что if-половину не произносят — она понятна:</p>
<ul class="g-list">
<li><span class="say">You should have called me. I would have come.</span> — Надо было позвонить. Я бы приехал.</li>
<li><span class="say">That could have been a disaster.</span> — Это могло закончиться катастрофой.</li>
<li><span class="say">I wouldn't have done that.</span> — Я бы так не сделал.</li>
</ul>
<div class="g-bad">If we left earlier, we would catch the train. <span class="muted">— про вчерашний вечер</span></div>
<div class="g-good">If we <b>had left</b> earlier, we <b>might have caught</b> the train.</div>
<div class="mini" data-q="If the servers hadn't crashed, we ___ finished the raid — but I'm not sure." data-o="would have|might have|will have" data-a="1" data-why="Не уверены → might have + V3."></div>`
      },
      {
        title: '4. Смешанные: прошлое → сейчас, характер → прошлое',
        html: `
<div class="g-idea">Половины можно смешивать, если причина и результат в разных временах. Это очень частый приём в живой речи — и на B2 его ждут.</div>
<table>
<tr><th>Тип</th><th>Формула</th><th>Пример</th></tr>
<tr><td>прошлое → результат <b>сейчас</b></td><td>if + had done, <b>would do</b></td><td><span class="say">If I'd gone to bed earlier, I wouldn't be so tired now.</span></td></tr>
<tr><td>всегда так → результат <b>в прошлом</b></td><td>if + past, <b>would have done</b></td><td><span class="say">If I were more careful, I wouldn't have lost my keys.</span></td></tr>
</table>
<p>Сравните — одна причина, разные последствия:</p>
<ul class="g-list">
<li><span class="say">If I'd gone to the party last night, I would be tired now.</span> — …я бы сейчас был уставший. <span class="muted">(результат сейчас)</span></li>
<li><span class="say">If I'd gone to the party last night, I would have met lots of people.</span> — …я бы познакомился с кучей людей. <span class="muted">(результат тогда)</span></li>
<li><span class="say">If I had taken that job in Berlin, I would be living in Germany now.</span> — Если бы я тогда согласился на работу в Берлине, сейчас жил бы в Германии.</li>
<li><span class="say">If she didn't speak English, she wouldn't have got the job.</span> — Если бы она не говорила по-английски <span class="muted">(а она говорит)</span>, её бы не взяли.</li>
</ul>
<div class="g-steps"><div class="g-h">Как выбрать форму</div><ol>
<li>Спросите про каждую половину: <b>когда</b> это (было бы)?</li>
<li>Прошлое → had done / would have done. Сейчас или всегда → past / would do.</li>
<li>Слова-подсказки: <b>now, today, still</b> — результат сейчас; <b>yesterday, last year, then</b> — прошлое.</li>
</ol></div>
<div class="mini" data-q="I didn't learn to code at uni. If I had, I ___ a developer now." data-o="would have been|would be|had been" data-a="1" data-why="Причина в прошлом, результат сейчас (now) → would + глагол."></div>`
      },
      {
        title: '5. I wish I had… — сожаление о прошлом',
        html: `
<div class="g-idea"><b>I wish + had done</b> = жаль, что это <b>не</b> случилось. <b>I wish + hadn't done</b> = жаль, что это случилось. Тот же Past Perfect, что и в if-половине.</div>
<table>
<tr><th>Что было</th><th>Сожаление</th><th>Перевод</th></tr>
<tr><td>I didn't know.</td><td><span class="say">I wish I'd known.</span></td><td>Жаль, что я не знал.</td></tr>
<tr><td>I ate too much.</td><td><span class="say">I wish I hadn't eaten so much.</span></td><td>Зря я столько съел.</td></tr>
<tr><td>I sent that message.</td><td><span class="say">I wish I hadn't sent it.</span></td><td>Лучше бы я его не отправлял.</td></tr>
<tr><td>It was cold.</td><td><span class="say">I wish it had been warmer.</span></td><td>Жаль, что не было теплее.</td></tr>
<tr><td>I couldn't go.</td><td><span class="say">I wish I could have gone.</span></td><td>Жаль, что я не смог пойти.</td></tr>
</table>
<p>Вопрос: <span class="say">Do you ever wish you'd studied something else?</span> — Ты не жалеешь, что не выбрал другую специальность?</p>
<p>Три времени после wish — одна логика «на шаг назад»:</p>
<ul class="g-list">
<li>сейчас: <span class="say">I wish I knew.</span> — Жаль, что я не знаю.</li>
<li>прошлое: <span class="say">I wish I had known.</span> — Жаль, что я не знал.</li>
<li>умение: <span class="say">I wish I could come.</span> / прошлое: <span class="say">I wish I could have come.</span></li>
</ul>
<p><b>If only…</b> — то же, что I wish, только эмоциональнее («эх, если бы…»):</p>
<ul class="g-list">
<li><span class="say">If only I had backed up my files!</span> — Эх, если бы я сделал бэкап!</li>
<li><span class="say">If only we had more time.</span> — Если бы только у нас было больше времени.</li>
</ul>
<p><b>glad</b> — случилось, и хорошо. <b>wish</b> — не случилось, жаль:</p>
<ul class="g-list">
<li><span class="say">I'm glad I saw that film.</span> — Рад, что посмотрел. <span class="muted">(посмотрел)</span></li>
<li><span class="say">I wish I'd seen that film.</span> — Жаль, что не посмотрел. <span class="muted">(не посмотрел)</span></li>
</ul>
<div class="g-bad">I wish I would have known. · I wish I didn't send it yesterday.</div>
<div class="g-good">I wish I <b>had known</b>. · I wish I <b>hadn't sent</b> it yesterday.</div>
<div class="g-tip">Русское «зря я…» почти всегда = <b>I wish I hadn't…</b> или <b>I shouldn't have…</b>: <span class="say">I shouldn't have said that.</span> = <span class="say">I wish I hadn't said that.</span></div>
<div class="mini" data-q="Зря я купил эти кроссовки." data-o="I wish I didn't buy these trainers.|I wish I hadn't bought these trainers.|I wish I wouldn't buy these trainers." data-a="1" data-why="Сожаление о прошлом → wish + hadn't + V3."></div>
<div class="mini" data-q="The concert was great. I'm ___ I went." data-o="glad|wish|sorry" data-a="0" data-why="Пошёл, и это хорошо → glad + обычное прошедшее."></div>`
      },
      {
        title: '6. Wish или hope: пожелания другим',
        html: `
<div class="g-idea"><b>wish</b> + человек + существительное — пожелать кому-то что-то: <b>wish you luck</b>. Но пожелать, чтобы что-то <b>случилось</b>, — это <b>hope</b> + обычное время.</div>
<table>
<tr><th>wish + кому + что</th><th>hope + что случится</th></tr>
<tr><td><span class="say">I wish you all the best.</span></td><td><span class="say">I hope everything goes well.</span></td></tr>
<tr><td><span class="say">She wished me luck before the exam.</span></td><td><span class="say">I hope you pass.</span></td></tr>
<tr><td><span class="say">We wish you a pleasant stay.</span></td><td><span class="say">We hope you enjoy your stay.</span></td></tr>
<tr><td><span class="say">I wish you every success in your new job.</span></td><td><span class="say">I hope it works out for you.</span></td></tr>
</table>
<p>Русское «желаю, чтобы…», «надеюсь, что…» — это <b>hope</b>:</p>
<ul class="g-list">
<li><span class="say">I hope you feel better soon.</span> — Желаю скорее поправиться.</li>
<li><span class="say">I hope the patch fixes the lag.</span> — Надеюсь, патч исправит лаги. <span class="muted">(реально может случиться)</span></li>
<li><span class="say">I wish the patch fixed the lag.</span> — Жаль, что патч не исправляет лаги. <span class="muted">(не исправляет)</span></li>
</ul>
<div class="g-bad">I wish you feel better soon. · I wish you enjoy the game.</div>
<div class="g-good">I <b>hope</b> you feel better soon. · I <b>hope</b> you enjoy the game.</div>
<div class="g-tip">hope — смотрим вперёд с надеждой: может случиться. wish (+ прошедшая форма) — смотрим на то, чего нет. wish + кому + что — открытка с пожеланием.</div>
<div class="mini" data-q="Your exam is tomorrow? I ___ it goes well!" data-o="wish|hope|want" data-a="1" data-why="Желаем, чтобы что-то случилось → hope + обычное время."></div>`
      },
      {
        title: '7. I wish … would — «ну когда же уже…»',
        html: `
<div class="g-idea"><b>I wish + кто-то/что-то + would</b> — хочу, чтобы что-то <b>изменилось или случилось</b>, но не верю, что так будет. Часто это жалоба.</div>
<div class="g-formula"><span class="g-part">I wish</span><span class="g-plus">+</span><span class="g-part">it / you / somebody</span><span class="g-plus">+</span><span class="g-part g-v">would (not) + глагол</span></div>
<ul class="g-list">
<li><span class="say">It's been raining all day. I wish it would stop.</span> — Когда же он уже кончится.</li>
<li><span class="say">The phone has been ringing for ages. I wish somebody would answer it.</span> — Ну возьмите же кто-нибудь трубку.</li>
<li><span class="say">I wish you'd do something instead of scrolling your phone.</span> — Лучше бы ты занялся делом, а не листал ленту.</li>
<li><span class="say">I wish the devs would add a skip button.</span> — Вот бы разработчики добавили кнопку пропуска.</li>
</ul>
<p><b>I wish you wouldn't…</b> — «перестань, пожалуйста» про то, что человек делает снова и снова:</p>
<ul class="g-list">
<li><span class="say">I wish you wouldn't keep interrupting me.</span> — Перестань меня всё время перебивать.</li>
<li><span class="say">I wish people wouldn't spoil the ending in the comments.</span> — Вот бы люди не спойлерили концовку в комментах.</li>
</ul>
<p>Важно: would — только про <b>действие, изменение</b>. Про положение дел (быть, иметь) — прошедшая форма:</p>
<table>
<tr><th>Хочу, чтобы случилось</th><th>Хочу, чтобы было так</th></tr>
<tr><td><span class="say">I wish Sarah would come.</span></td><td><span class="say">I wish Sarah were here.</span></td></tr>
<tr><td><span class="say">I wish somebody would buy me a car.</span></td><td><span class="say">I wish I had a car.</span></td></tr>
</table>
<div class="g-bad">I wish I would have a car. · I wish Sarah would be here.</div>
<div class="g-good">I wish I <b>had</b> a car. · I wish Sarah <b>were</b> here.</div>
<div class="g-tip">С <b>I</b> would после wish почти не бывает: если вы хотите что-то сделать сами — просто сделайте. Жалуются на других: <b>I wish you would…</b>, <b>I wish it would…</b></div>
<div class="mini" data-q="My neighbour plays loud music every night. I wish he ___ that." data-o="didn't do|wouldn't do|hadn't done" data-a="1" data-why="Жалоба на то, что человек делает снова и снова → wish + wouldn't."></div>
<div class="mini" data-q="Our flat is tiny. I wish it ___ bigger." data-o="would be|were|had" data-a="1" data-why="Положение дел, а не изменение → прошедшая форма were (или was)."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">If I would have known, I would have come.</div><div class="g-good">If I <b>had known</b>, I would have come.</div>
<div class="g-bad">If I knew about the sale yesterday, I would buy two copies.</div><div class="g-good">If I <b>had known</b> about the sale yesterday, I <b>would have bought</b> two copies.</div>
<div class="g-bad">I wish I would have listened to you.</div><div class="g-good">I wish I <b>had listened</b> to you.</div>
<div class="g-bad">I wish I didn't say that yesterday.</div><div class="g-good">I wish I <b>hadn't said</b> that yesterday.</div>
<div class="g-bad">I wish you feel better soon.</div><div class="g-good">I <b>hope</b> you feel better soon.</div>
<div class="g-bad">I wish I would have more free time.</div><div class="g-good">I wish I <b>had</b> more free time.</div>
<div class="g-bad">I wish you don't interrupt me all the time.</div><div class="g-good">I wish you <b>wouldn't</b> interrupt me all the time.</div>
<div class="g-bad">If I'd gone to bed earlier, I wouldn't have been tired now.</div><div class="g-good">If I'd gone to bed earlier, I <b>wouldn't be</b> tired now.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Прошлое наоборот → <b>if I had done, I would / could / might have done</b> · жаль, что было (не было) → <b>I wish I had (hadn't) done</b> · «ну когда уже» → <b>I wish you would…</b> · пожелание другому → <b>wish you luck</b>, но <b>I hope you…</b></div>`
      }
    ],
    words: [
      ["regret", "сожалеть; сожаление", "I don't regret quitting that job.", "Я не жалею, что ушёл с той работы."],
      ["if only", "если бы только, эх, если бы", "If only I had saved the game!", "Эх, если бы я сохранился!"],
      ["mistake", "ошибка", "Not saving was a big mistake.", "Не сохраниться было большой ошибкой."],
      ["fault", "вина", "It wasn't your fault.", "Это была не твоя вина."],
      ["blame", "винить", "Don't blame yourself — it could have happened to anyone.", "Не вини себя — это могло случиться с кем угодно."],
      ["avoid", "избегать", "The problem could have been avoided.", "Этой проблемы можно было избежать."],
      ["back up", "делать резервную копию", "I wish I had backed up my files.", "Жаль, что я не сделал бэкап файлов."],
      ["progress", "прогресс, продвижение", "I lost ninety hours of progress.", "Я потерял девяносто часов прогресса."],
      ["power cut", "отключение электричества", "If there hadn't been a power cut, I'd have finished.", "Если бы не отключили свет, я бы закончил."],
      ["forget — forgot — forgotten", "забывать", "I'd have forgotten if you hadn't reminded me.", "Я бы забыл, если бы ты не напомнил."],
      ["remind", "напоминать", "Thanks for reminding me about her birthday.", "Спасибо, что напомнил про её день рождения."],
      ["warn", "предупреждать", "If you'd warned me, I wouldn't have gone.", "Если бы ты предупредил, я бы не пошёл."],
      ["notice", "замечать", "I wish I'd noticed the typo before printing.", "Жаль, что я не заметил опечатку до печати."],
      ["choose — chose — chosen", "выбирать", "Do you wish you'd chosen a different career?", "Ты не жалеешь, что не выбрал другую профессию?"],
      ["apply for", "подавать заявку (на работу)", "If I'd applied for that job, I might have got it.", "Если бы я подал заявку, может, меня бы и взяли."],
      ["interview", "собеседование", "I missed the interview because of an old email address.", "Я пропустил собеседование из-за старого адреса почты."],
      ["recruiter", "рекрутер", "The recruiter said they had already chosen someone.", "Рекрутер сказал, что уже выбрали другого."],
      ["confident", "уверенный в себе", "I wish I were as confident as you.", "Вот бы мне твою уверенность."],
      ["careless", "небрежный, неосторожный", "If I weren't so careless, I wouldn't have lost my keys.", "Не будь я таким растяпой, я бы не потерял ключи."],
      ["luckily", "к счастью", "Luckily, the file had been saved.", "К счастью, файл успел сохраниться."],
      ["unfortunately", "к сожалению", "Unfortunately, I couldn't come to the wedding.", "К сожалению, я не смог прийти на свадьбу."],
      ["in time", "вовремя, успеть (до)", "If we'd left earlier, we'd have got there in time.", "Если бы мы вышли раньше, мы бы успели."],
      ["instead", "вместо (этого)", "I wish I'd gone to bed instead of playing.", "Лучше бы я лёг спать, а не играл."],
      ["interrupt", "перебивать, прерывать", "I wish you wouldn't interrupt me.", "Перестань меня перебивать."],
      ["complain", "жаловаться", "I wish you'd stop complaining.", "Хватит уже жаловаться."],
      ["luck", "удача", "She wished me luck before the match.", "Она пожелала мне удачи перед матчем."],
      ["success", "успех", "We wish you every success.", "Желаем вам всяческих успехов."],
      ["hope", "надеяться", "I hope you enjoy your stay.", "Надеюсь, вам у нас понравится."],
      ["storm", "буря, гроза", "If it hadn't been for the storm, we'd have flown home.", "Если бы не буря, мы бы улетели домой."],
      ["in hindsight", "задним числом, оглядываясь назад", "In hindsight, I should have asked for help.", "Оглядываясь назад, надо было попросить помощи."]
    ],
    texts: [
      {
        id: 't-b2-1-1', title: 'Ninety hours, gone', level: 'B2',
        text: `Last weekend I lost ninety hours of progress in my favourite RPG, and I'm still thinking about all the ways it could have been avoided.

It happened on Saturday night. I had just beaten the hardest boss in the game, and I was so excited that I forgot to save. Then the power went off for ten seconds. When my PC restarted, the game loaded a save from three days earlier. If I had saved after the fight, I would have lost only a few minutes. If I had turned on cloud saves when the game asked me, I wouldn't have lost anything at all. I remember clicking "Not now". I wish I hadn't clicked it.

My brother wasn't very sympathetic. "If you'd bought the battery I recommended last year, this wouldn't have happened," he said. He's right, of course. A small backup battery keeps your computer on for a few minutes when the power goes off, and it costs about as much as a new game. If I'd spent the money on that instead of on skins, I would be playing the final chapter right now instead of fighting the same boss again.

To be fair, it wasn't all my fault. The whole street lost power because of a storm. If the storm hadn't been so strong, the lights might have stayed on. And if the developers had added an autosave after boss fights, like most modern games do, I could have simply loaded it. I wish they had thought about players like me.

The funny thing is that I would have saved if I hadn't been so tired. I'd been playing for six hours without a break. If I'd been thinking clearly, I would have pressed the save button automatically, as I always do.

So what have I learned? I've turned on cloud saves. I've ordered the battery. And I've stopped saying "I'll do it later". My brother says he wishes I would listen to him more often. I wish he would stop reminding me that he was right.

The good news? I beat the boss again yesterday, on my first try. If I hadn't fought him before, I would never have managed it so quickly. So maybe those lost hours weren't completely wasted. Still, if only that storm had come on a different night!`,
        questions: [
          { q: 'What would have happened if the author had saved after the fight?', o: ['He would have lost only a few minutes', 'He would have lost everything', 'He would have beaten the boss twice'], a: 0 },
          { q: 'Why didn\'t the author save the game?', o: ['The game didn\'t let him', 'He was excited and very tired', 'His brother turned off the PC'], a: 1 },
          { q: 'What does the author wish his brother would do?', o: ['Stop reminding him that he was right', 'Buy him a new game', 'Play the game with him'], a: 0 }
        ]
      },
      {
        id: 't-b2-1-2', title: 'The interview that never happened', level: 'B2',
        text: `Kate: So? How did the interview go? I've been waiting all day.
Tom: It didn't happen. I missed it.
Kate: What? How?
Tom: They sent the invitation to my old email address. I found it this morning, and the interview was yesterday at eleven. If I'd checked that inbox, I would have seen it a week ago.
Kate: Oh no. Did you call them?
Tom: I did. The recruiter was nice, but they'd already chosen someone. She said that if I had written a few days earlier, they might have been able to move the date.
Kate: I'm so sorry. I know how much you wanted to work there.
Tom: The worst part is that I almost applied in March. I had the portfolio ready. I wish I hadn't waited. I kept thinking it wasn't good enough.
Kate: Tom, your portfolio has been good enough for two years. I wish you would stop saying that about your work.
Tom: I know, I know. If I weren't such a perfectionist, I'd have sent it immediately.
Kate: Exactly. And honestly, if you'd sent it in March, you would be working there now, not complaining to me in a café.
Tom: Thanks, that makes me feel much better.
Kate: Sorry! I didn't mean it like that. What I mean is: this wasn't about your skills. It was an old email address. That could have happened to anyone.
Tom: I suppose so. I just wish I could have at least talked to them.
Kate: Then write to the recruiter again. Tell her you'd love to be considered for the next position. Studios like that hire every few months.
Tom: You think that would work?
Kate: It can't hurt. And this time, update your email address everywhere. Please.
Tom: Already done. I've also deleted that old account, so it can't ruin my life again.
Kate: Good. And when you get the next interview, I'll come round and make sure you're awake.
Tom: Ha. I wish I had your confidence.
Kate: You'll have it after the next interview. I wish you luck, and I really hope they call you soon.
Tom: Thanks, Kate. If I hadn't talked to you, I'd have spent the whole evening feeling sorry for myself.
Kate: That's what friends are for. Now, are you going to finish that cake, or shall I?`,
        questions: [
          { q: 'Why did Tom miss the interview?', o: ['He overslept', 'The invitation went to his old email address', 'The studio cancelled it'], a: 1 },
          { q: 'What does Kate wish Tom would do?', o: ['Stop criticising his own work', 'Move to another city', 'Make a new portfolio'], a: 0 },
          { q: 'What does Kate advise Tom to do?', o: ['Forget about the studio', 'Write to the recruiter again', 'Call the studio every day'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "If I ___ about the sale, I would have bought two copies.", o: ['knew', 'had known', 'would have known'], a: 1, why: "Прошлое, которого не было → if + had + V3." },
      { t: 'choice', q: "I'd have called you if I ___ your number.", o: ['had had', 'would have', 'have had'], a: 0, why: "Past Perfect от have → had had: первое had — вспомогательный, второе — V3." },
      { t: 'choice', q: "If we had left earlier, we ___ the train — but I'm not sure, the traffic was terrible.", o: ['would have caught', 'might have caught', 'will catch'], a: 1, why: "Не уверены → might have + V3." },
      { t: 'choice', q: "I played until 4 a.m. If I'd gone to bed earlier, I ___ so tired now.", o: ["wouldn't have been", "wouldn't be", "won't be"], a: 1, why: "Причина в прошлом, результат сейчас (now) → would + глагол." },
      { t: 'choice', q: "Everyone says the concert was amazing. I wish I ___.", o: ['went', 'had gone', 'would go'], a: 1, why: "Сожаление о прошлом → wish + had + V3." },
      { t: 'choice', q: "Good luck tomorrow! I ___ you pass.", o: ['wish', 'hope', 'want'], a: 1, why: "Желаем, чтобы что-то случилось → hope + обычное время." },
      { t: 'choice', q: "It's been raining for three days. I wish it ___.", o: ['stopped', 'would stop', 'had stopped'], a: 1, why: "Хотим изменения, но не верим в него → wish + would." },
      { t: 'choice', q: "I don't have a second monitor. I wish I ___ one.", o: ['would have', 'had', 'had had'], a: 1, why: "Положение дел сейчас → wish + прошедшая форма had, не would." },
      { t: 'gap', q: "I wish I ___ that message. Now everyone in the chat has seen it. (not / send)", a: ["hadn't sent", 'had not sent'], why: "Жаль, что случилось в прошлом → wish + hadn't + V3." },
      { t: 'gap', q: "If you ___ where you were going, you wouldn't have walked into the door. (look)", a: ['had been looking', "'d been looking", 'had looked', "'d looked"], why: "Прошлое наоборот → if + had (been) + форма глагола." },
      { t: 'gap', q: "He really wanted to come. I'm sure he ___ if he had had time. (come)", a: ['would have come', "'d have come", "would've come"], why: "Вторая половина «если бы» о прошлом → would have + V3." },
      { t: 'gap', q: "I wish you ___ interrupting me all the time! (not / keep)", a: ["wouldn't keep", 'would not keep'], why: "Жалоба на повторяющееся действие → wish + wouldn't." },
      { t: 'gap', q: "I heard the trip was amazing. I wish I ___ gone with you. (can)", a: ['could have'], why: "Не смог в прошлом → wish + could have + V3." },
      { t: 'gap', q: "If the weather ___ better, we would have gone to the beach. (be)", a: ['had been', "'d been"], why: "if-половина о прошлом → had been." },
      { t: 'order', a: 'I wish I had listened to you', ru: 'Жаль, что я тебя не послушал' },
      { t: 'order', a: 'What would you have done in my place', ru: 'Что бы ты сделал на моём месте?' },
      { t: 'tr', q: 'Если бы я знал, я бы пришёл.', a: ['if i had known i would have come', "if i'd known i would have come", "if i had known i'd have come", "if i'd known i'd have come", "if i had known i would've come", "if i'd known i would've come", 'i would have come if i had known', "i would have come if i'd known", "i'd have come if i'd known", "i'd have come if i had known", "i would've come if i had known", "i would've come if i'd known"] },
      { t: 'tr', q: 'Жаль, что я не купил эту игру на распродаже.', a: ['i wish i had bought this game in the sale', "i wish i'd bought this game in the sale", 'i wish i had bought this game on sale', "i wish i'd bought this game on sale", 'i wish i had bought this game during the sale', "i wish i'd bought this game during the sale", 'i wish i had bought that game in the sale', "i wish i'd bought that game in the sale", 'i wish i had bought that game on sale', "i wish i'd bought that game on sale", 'i wish i had bought the game in the sale', "i wish i'd bought the game in the sale", 'i wish i had bought the game on sale', "i wish i'd bought the game on sale"] },
      { t: 'listen', say: 'If only I had known', a: ['if only i had known', "if only i'd known"] },
      { t: 'listen', say: 'I wish it would stop raining', a: ['i wish it would stop raining', "i wish it'd stop raining"] }
    ],
    test: [
      { t: 'choice', q: "If I ___ the tutorial, I wouldn't have got stuck on the first level.", o: ['had watched', 'watched', 'would have watched'], a: 0, why: "Прошлое наоборот → if + had + V3; would в if-половине не бывает." },
      { t: 'gap', q: "We ___ the match if Max hadn't disconnected. (win)", a: ['would have won', "'d have won", "would've won"], why: "Результат в прошлом, которого не было → would have + V3." },
      { t: 'choice', q: "In «I'd have told you», 'd means:", o: ['had', 'would', 'did'], a: 1, why: "'d + have = would: I would have told you." },
      { t: 'choice', q: "I'm a careless person. If I were more careful, I ___ my keys yesterday.", o: ["wouldn't lose", "wouldn't have lost", "hadn't lost"], a: 1, why: "Черта характера (всегда) → результат в прошлом: would have + V3." },
      { t: 'gap', q: "I feel sick. I wish I ___ that third slice of pizza. (not / eat)", a: ["hadn't eaten", 'had not eaten'], why: "Зря съел → wish + hadn't + V3." },
      { t: 'choice', q: "I wish Anna ___ here now — she'd know what to do.", o: ['would be', 'were', 'had been'], a: 1, why: "Положение дел сейчас → wish + were (was), не would be." },
      { t: 'choice', q: "Happy birthday! I ___ you all the best.", o: ['hope', 'wish', 'want'], a: 1, why: "wish + кому + что — пожелание: wish you all the best." },
      { t: 'choice', q: "Sorry you're ill. I hope you ___ better soon.", o: ['feel', 'felt', 'would feel'], a: 0, why: "После hope — обычное время: реальная надежда." },
      { t: 'gap', q: "You always leave your mug on my desk. I wish you ___ that. (not / do)", a: ["wouldn't do", 'would not do'], why: "Раздражает повторяющееся действие → wish + wouldn't." },
      { t: 'choice', q: "I'm glad I ___ this course — it changed my career.", o: ['took', 'had taken', 'would take'], a: 0, why: "glad — о реальном прошлом → обычный Past Simple." },
      { t: 'gap', q: "If it hadn't rained, we ___ outside — maybe. (might / play)", a: ['might have played'], why: "«Может быть, и…» о прошлом → might have + V3." },
      { t: 'choice', q: "I couldn't come to your stream. I wish I ___.", o: ['could', 'could have', 'can'], a: 1, why: "Не смог в прошлом → I wish I could have (come)." }
    ]
  },

  // ───────────────────────────── UNIT B2-2 ─────────────────────────────
  {
    id: 'b2-2', level: 'B2', num: 2, track: 'main',
    books: { blue: [44, 45, 46] },
    title: 'Passive 3; it is said that…; have something done',
    summary: 'Научимся говорить «мне предложили работу» (I was offered a job), «терпеть не могу, когда мне указывают» (being told), пересказывать слухи как в новостях (he is said to have…), понимать supposed to и рассказывать, что сделали для вас: I had my hair cut.',
    grammar: [
      {
        title: '1. Главная идея: три способа не называть того, кто сделал',
        html: `
<div class="g-idea">Что вы уже знаете: passive во всех временах (уроки A2-18 и B1-12) и <b>I was born</b>. Теперь — три очень живые конструкции: <b>мне дали</b> (I was given), <b>говорят, что он…</b> (he is said to…) и <b>мне сделали</b> (I had it done). По-русски во всех трёх нет того, кто делает, — и по-английски тоже.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Мне предложили работу.</p><p>Терпеть не могу, когда мне указывают.</p><p>Говорят, ему 108 лет.</p><p>Фильм вроде хороший.</p><p>Я подстригся. <span class="muted">(в парикмахерской)</span></p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>was offered</b> a job.</span></p><p><span class="say">I hate <b>being told</b> what to do.</span></p><p><span class="say">He <b>is said to be</b> 108.</span></p><p><span class="say">The film <b>is supposed to be</b> good.</span></p><p><span class="say">I <b>had my hair cut</b>.</span></p></div>
</div>
<div class="g-tip">Русское «мне», «меня», «говорят», «сделал(а) себе» — сигнал: в английском, скорее всего, нужен passive или have something done.</div>
<div class="mini" data-q="Мне дали неделю на проект." data-o="To me was given a week.|I was given a week.|I gave a week." data-a="1" data-why="«Мне» становится подлежащим: I was given."></div>`
      },
      {
        title: '2. I was given, I was offered — «мне дали», «мне предложили»',
        html: `
<div class="g-idea">У некоторых глаголов два объекта: <b>кому</b> и <b>что</b>. <span class="say">They gave me a watch.</span> В passive можно начать с любого, но обычно начинают с <b>человека</b>.</div>
<table>
<tr><th>Active</th><th>Passive: человек (чаще)</th><th>Passive: вещь</th></tr>
<tr><td>They gave me this watch.</td><td><span class="say">I was given this watch.</span></td><td><span class="say">This watch was given to me.</span></td></tr>
<tr><td>They've offered her the job.</td><td><span class="say">She's been offered the job.</span></td><td><span class="say">The job has been offered to her.</span></td></tr>
</table>
<p>Такие глаголы: <b>give, offer, ask, tell, show, pay, send, teach, promise, lend</b>.</p>
<ul class="g-list">
<li><span class="say">I've been offered a job in Berlin, but I'm not sure I want it.</span> — Мне предложили работу в Берлине.</li>
<li><span class="say">You'll be given two weeks to finish the redesign.</span> — Вам дадут две недели на редизайн.</li>
<li><span class="say">I didn't see the original file — I was only shown a screenshot.</span> — Мне показали только скриншот.</li>
<li><span class="say">He's paid a lot to do very little.</span> — Ему много платят за почти ничего.</li>
<li><span class="say">We weren't told about the meeting.</span> — Нам не сказали про встречу.</li>
<li><span class="say">I was asked some really tough questions at the interview.</span> — Мне задали очень трудные вопросы на собеседовании.</li>
</ul>
<p>Ловушка: у <b>explain, describe, suggest, say, recommend</b> человек <b>не</b> может стоять в начале. Только вещь + <b>to</b>:</p>
<div class="g-bad">I was explained the rules. · We were suggested a new plan.</div>
<div class="g-good">The rules <b>were explained to me</b>. · A new plan <b>was suggested to us</b>.</div>
<div class="g-tip">Проверка: можно сказать <i>explain <b>me</b> something</i>? Нет — только explain something <b>to me</b>. Значит, и в passive «I was explained» нельзя.</div>
<div class="mini" data-q="Мне прислали ссылку." data-o="I was sent a link.|To me was sent a link.|I sent a link." data-a="0" data-why="send — два объекта, человек в начале: I was sent."></div>
<div class="mini" data-q="Мне всё объяснили." data-o="I was explained everything.|Everything was explained to me.|Everything explained me." data-a="1" data-why="explain не допускает человека в начале → Everything was explained to me."></div>`
      },
      {
        title: '3. Being done: «когда меня…», «чтобы меня не…»',
        html: `
<div class="g-idea">Где нужна <b>-ing</b>-форма (после like, hate, remember, avoid, после предлогов), passive выглядит как <b>being + V3</b>.</div>
<div class="g-formula"><span class="g-part">hate / like / avoid / without…</span><span class="g-plus">+</span><span class="g-part g-v">being + V3</span></div>
<table>
<tr><th>Active: я делаю</th><th>Passive: со мной делают</th></tr>
<tr><td><span class="say">I don't like telling people what to do.</span></td><td><span class="say">I don't like being told what to do.</span></td></tr>
<tr><td><span class="say">She enjoys interviewing people.</span></td><td><span class="say">She hates being interviewed.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Steve hates being kept waiting.</span> — Стив терпеть не может, когда его заставляют ждать.</li>
<li><span class="say">I remember being taken to the cinema for the first time.</span> — Помню, как меня впервые повели в кино.</li>
<li><span class="say">We got into the base without being seen.</span> — Мы пробрались на базу незаметно.</li>
<li><span class="say">How do you avoid being bitten by mosquitoes?</span> — Как не быть покусанным комарами?</li>
<li><span class="say">There's nothing worse than being ignored in a group chat.</span> — Нет ничего хуже, чем когда тебя игнорируют в общем чате.</li>
<li><span class="say">I'm tired of being treated like a beginner.</span> — Я устал, что ко мне относятся как к новичку.</li>
</ul>
<div class="g-bad">I hate when people tell me what to do. <span class="muted">— возможно, но длинно</span></div>
<div class="g-good">I hate <b>being told</b> what to do.</div>
<div class="g-bad">He left without seeing. <span class="muted">— в смысле «незаметно»</span></div>
<div class="g-good">He left without <b>being seen</b>.</div>
<div class="mini" data-q="Nobody likes ___ at in public." data-o="laughing|being laughed|be laughed" data-a="1" data-why="Над нами смеются + после like нужна -ing → being + V3."></div>`
      },
      {
        title: '4. Born, get-passive и get lost',
        html: `
<div class="g-idea"><b>I was born</b> — всегда passive в прошлом (напоминание). А в разговоре вместо <b>be</b> часто ставят <b>get</b>: <b>got hurt, got banned, get invited</b>. Get — только когда что-то <b>происходит</b>, особенно неожиданно или неприятно.</div>
<ul class="g-list">
<li><span class="say">Where were you born?</span> — Где ты родился? <span class="muted">(не Where are you born)</span></li>
<li><span class="say">How many babies are born every day?</span> — Сколько детей рождается каждый день? <span class="muted">(вообще, в настоящем — are)</span></li>
</ul>
<table>
<tr><th>be</th><th>get — живее</th><th>Перевод</th></tr>
<tr><td>Nobody was hurt.</td><td><span class="say">Nobody got hurt.</span></td><td>Никто не пострадал.</td></tr>
<tr><td>I'm not invited to many parties.</td><td><span class="say">I don't get invited to many parties.</span></td><td>Меня мало куда зовут.</td></tr>
<tr><td>He was banned for cheating.</td><td><span class="say">He got banned for cheating.</span></td><td>Его забанили за читы.</td></tr>
<tr><td>My bike was stolen.</td><td><span class="say">My bike got stolen.</span></td><td>У меня украли велосипед.</td></tr>
</table>
<p>Геймерские классические: <span class="say">I got killed.</span> <span class="say">We got kicked from the server.</span> <span class="say">She got promoted.</span> <span class="say">They got caught.</span></p>
<p>Если это <b>состояние</b>, а не событие, — get нельзя:</p>
<div class="g-bad">Jessica gets liked by everybody. · Little got known about him.</div>
<div class="g-good">Jessica <b>is liked</b> by everybody. · Little <b>was known</b> about him.</div>
<p>И выражения с get, которые только выглядят как passive: <b>get married</b> (пожениться), <b>get divorced</b> (развестись), <b>get dressed</b> (одеться), <b>get changed</b> (переодеться), <b>get lost</b> (заблудиться; грубо — «отвали»).</p>
<ul class="g-list">
<li><span class="say">We got lost in the old town.</span> — Мы заблудились в старом городе.</li>
<li><span class="say">Give me five minutes to get changed.</span> — Дай мне пять минут переодеться.</li>
</ul>
<div class="mini" data-q="Где родилась твоя мама?" data-o="Where is your mum born?|Where was your mum born?|Where did your mum born?" data-a="1" data-why="Рождение — прошлое событие → was born."></div>
<div class="mini" data-q="Be careful with that knife — you'll ___ hurt." data-o="get|be got|getting" data-a="0" data-why="Событие, неожиданное и неприятное → get + V3."></div>`
      },
      {
        title: '5. It is said that… / He is said to… — язык новостей и слухов',
        html: `
<div class="g-idea">Чтобы передать, что <b>говорят, считают, ожидают</b> люди, есть две конструкции. Смысл одинаковый: «Говорят, что ему 108 лет».</div>
<div class="g-formula"><span class="g-part">It is said</span><span class="g-plus">+</span><span class="g-part">that he is 108</span><span class="g-sep">·</span><span class="g-part">He is said</span><span class="g-plus">+</span><span class="g-part g-v">to be</span><span class="g-part">108</span></div>
<p>Глаголы: <b>said, believed, thought, known, expected, reported, considered, understood, alleged</b> (якобы, по заявлению).</p>
<p>Во второй конструкции время живёт в инфинитиве:</p>
<table>
<tr><th>Когда</th><th>Форма</th><th>Пример</th></tr>
<tr><td>сейчас, обычно</td><td><b>to do / to be</b></td><td><span class="say">She is said to run ten kilometres a day.</span></td></tr>
<tr><td>прямо сейчас</td><td><b>to be doing</b></td><td><span class="say">The boy is believed to be wearing a red jacket.</span></td></tr>
<tr><td>в будущем</td><td><b>to do</b> (с expected)</td><td><span class="say">The strike is expected to end soon.</span></td></tr>
<tr><td>в прошлом</td><td><b>to have done</b></td><td><span class="say">He is alleged to have stolen a car.</span></td></tr>
<tr><td>в прошлом, passive</td><td><b>to have been done</b></td><td><span class="say">Two people are reported to have been injured.</span></td></tr>
</table>
<p>С there: <span class="say">There is said to be a secret tunnel under the castle.</span> — Говорят, под замком есть тайный тоннель.</p>
<div class="g-steps"><div class="g-h">Как переделать It is said that… в He is said to…</div><ol>
<li>Возьмите подлежащее из that-части: <i>It is thought that <b>the thieves</b> got in through the roof.</i></li>
<li>Поставьте его в начало + is/are + thought: <b>The thieves are thought</b>…</li>
<li>Глагол that-части → инфинитив: got (прошлое) → <b>to have got</b>: <span class="say">The thieves are thought to have got in through the roof.</span></li>
</ol></div>
<p>В разговоре то же самое звучит проще: <span class="say">Apparently, he's 108.</span> <span class="say">They say he's 108.</span> А в новостях — наречия <b>reportedly</b> (по сообщениям) и <b>allegedly</b> (якобы): <span class="say">The game was reportedly delayed again.</span></p>
<div class="g-bad">He is said that he is rich. · She is believed to leave the studio last year.</div>
<div class="g-good"><b>It</b> is said that he is rich. · She is believed <b>to have left</b> the studio last year.</div>
<div class="mini" data-q="It is reported that the company lost a lot of money. → The company is reported ___ a lot of money." data-o="to lose|to have lost|losing" data-a="1" data-why="Потеряли в прошлом → to have + V3."></div>`
      },
      {
        title: '6. Supposed to: «вроде бы» и «должен был»',
        html: `
<div class="g-idea">У <b>be supposed to</b> два смысла. 1) Как said to: «говорят, вроде бы». 2) «По плану / по правилам должно быть так» — а на деле часто иначе.</div>
<table>
<tr><th>Смысл</th><th>Пример</th><th>Перевод</th></tr>
<tr><td>говорят, вроде</td><td><span class="say">That film is supposed to be really good.</span></td><td>Говорят, фильм отличный.</td></tr>
<tr><td>говорят (о прошлом)</td><td><span class="say">Fireworks are supposed to have been invented in China.</span></td><td>Фейерверки вроде бы изобрели в Китае.</td></tr>
<tr><td>по плану</td><td><span class="say">The plan is supposed to be a secret.</span></td><td>План вообще-то секретный.</td></tr>
<tr><td>должен был (но нет)</td><td><span class="say">Jane was supposed to call me last night.</span></td><td>Джейн должна была позвонить вчера.</td></tr>
<tr><td>по расписанию</td><td><span class="say">I'm supposed to be meeting Chris in ten minutes.</span></td><td>У меня через десять минут встреча с Крисом.</td></tr>
</table>
<p><b>not supposed to</b> = нельзя, не положено, не рекомендуется:</p>
<ul class="g-list">
<li><span class="say">You're not supposed to park here. It's for residents only.</span> — Здесь нельзя парковаться.</li>
<li><span class="say">He's not supposed to lift anything heavy after the operation.</span> — Ему нельзя поднимать тяжёлое.</li>
<li><span class="say">What are you doing at work? You're supposed to be on holiday!</span> — Ты же в отпуске!</li>
</ul>
<p>Живая фраза: <span class="say">What's that supposed to mean?</span> — Это ты к чему? / Это что значит? <span class="muted">(обиженно)</span></p>
<div class="g-bad">You are not suppose to smoke here. · He supposed to come at six.</div>
<div class="g-good">You are not <b>supposed</b> to smoke here. · He <b>was supposed</b> to come at six.</div>
<div class="g-tip">В речи <b>-d</b> в supposed почти не слышно («сэпоуста»), но писать его надо всегда. И без <b>be</b> (am/is/was) конструкция не работает.</div>
<div class="mini" data-q="Our guests ___ at 7, but they came at 9." data-o="supposed to arrive|were supposed to arrive|are supposed arriving" data-a="1" data-why="Должны были по плану, но нет → was/were supposed to + глагол."></div>`
      },
      {
        title: '7. Have something done — «мне сделали», «я сделал себе»',
        html: `
<div class="g-idea"><b>have + что + V3</b> — вы <b>организовали</b>, чтобы кто-то сделал это для вас (обычно за деньги). По-русски мы говорим «я подстригся», «я починил машину», хотя сами ничего не делали. По-английски так нельзя — нужен have something done.</div>
<div class="g-formula"><span class="g-part">have (в нужном времени)</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part g-v">V3</span></div>
<table>
<tr><th>Сам</th><th>Кто-то для меня</th></tr>
<tr><td><span class="say">Lisa repaired the roof.</span><br><span class="muted">сама залезла и починила</span></td><td><span class="say">Lisa had the roof repaired.</span><br><span class="muted">вызвала мастера</span></td></tr>
<tr><td><span class="say">I made these curtains.</span></td><td><span class="say">I had these curtains made.</span></td></tr>
</table>
<p>Меняется только <b>have</b>, порядок слов всегда один:</p>
<ul class="g-list">
<li><span class="say">How often do you have your car serviced?</span> — Как часто ты делаешь ТО машины?</li>
<li><span class="say">We're having the kitchen redone next month.</span> — В следующем месяце нам переделывают кухню.</li>
<li><span class="say">Your hair looks great. Did you have it cut?</span> — Классная стрижка. Ты подстриглась?</li>
<li><span class="say">You should have that tooth checked.</span> — Тебе стоит показать этот зуб врачу.</li>
<li><span class="say">I don't like having my photo taken.</span> — Не люблю, когда меня фотографируют.</li>
</ul>
<p><b>get something done</b> — то же самое, разговорнее: <span class="say">I need to get my laptop fixed.</span> — Мне надо отдать ноутбук в ремонт.</p>
<p>Второй смысл: с вами что-то <b>случилось</b> (обычно плохое) — никто ничего не заказывал:</p>
<ul class="g-list">
<li><span class="say">I had my phone stolen on the metro.</span> — У меня украли телефон в метро.</li>
<li><span class="say">He had his nose broken in a fight.</span> — Ему сломали нос в драке.</li>
<li><span class="say">Have you ever had your account hacked?</span> — Тебя когда-нибудь взламывали?</li>
</ul>
<div class="g-bad">I cut my hair yesterday. <span class="muted">— звучит, будто сами ножницами</span> · I had repaired my car.</div>
<div class="g-good">I <b>had my hair cut</b> yesterday. · I had <b>my car repaired</b>. <span class="muted">— сначала что, потом V3</span></div>
<div class="mini" data-q="Мы покрасили квартиру (наняли мастеров) в прошлом месяце." data-o="We painted the flat last month.|We had the flat painted last month.|We had painted the flat last month." data-a="1" data-why="Делали другие по нашей просьбе → had + что + V3."></div>
<div class="mini" data-q="She had her bag stolen. Это значит…" data-o="она попросила украсть сумку|у неё украли сумку|она украла сумку" data-a="1" data-why="Второй смысл have something done — с человеком что-то случилось."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">To me was given a new laptop.</div><div class="g-good">I <b>was given</b> a new laptop.</div>
<div class="g-bad">I was explained the task.</div><div class="g-good">The task <b>was explained to me</b>.</div>
<div class="g-bad">I hate being tell what to do.</div><div class="g-good">I hate being <b>told</b> what to do.</div>
<div class="g-bad">Where are you born?</div><div class="g-good">Where <b>were</b> you born?</div>
<div class="g-bad">He is said that he is a millionaire.</div><div class="g-good"><b>It</b> is said that he is a millionaire. / He is said <b>to be</b> a millionaire.</div>
<div class="g-bad">She is believed to leave the country last week.</div><div class="g-good">She is believed <b>to have left</b> the country last week.</div>
<div class="g-bad">You are not suppose to eat here.</div><div class="g-good">You are not <b>supposed</b> to eat here.</div>
<div class="g-bad">I had cut my hair. <span class="muted">— в парикмахерской</span></div><div class="g-good">I had <b>my hair cut</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Мне сделали → <b>I was given / offered / told</b> · со мной делают → <b>being done</b> · говорят → <b>it is said that… / he is said to (have) …</b> · по плану / вроде → <b>supposed to</b> · сделали для меня → <b>have / get something done</b>.</div>`
      }
    ],
    words: [
      ["rumour", "слух", "There's a rumour that the studio is closing.", "Ходит слух, что студия закрывается."],
      ["allegedly", "якобы, по заявлениям", "He allegedly used cheats in the final.", "Он якобы использовал читы в финале."],
      ["reportedly", "по сообщениям", "The sequel is reportedly in development.", "По сообщениям, сиквел в разработке."],
      ["claim", "утверждать; заявление", "The video is claimed to show the first level.", "Утверждается, что на видео первый уровень."],
      ["confirm", "подтверждать", "Nothing has been confirmed yet.", "Пока ничего не подтверждено."],
      ["deny", "отрицать", "The studio denies the rumours.", "Студия отрицает слухи."],
      ["leak", "утечка; сливать", "The trailer was leaked a week early.", "Трейлер слили за неделю до премьеры."],
      ["consider", "считать; рассматривать", "She is considered one of the best designers in the city.", "Её считают одним из лучших дизайнеров города."],
      ["estimate", "оценивать; оценка", "The game is estimated to have cost 50 million dollars.", "Предполагается, что игра стоила 50 миллионов."],
      ["be supposed to", "должен (по плану); вроде бы", "You're supposed to be on holiday!", "Ты же должен быть в отпуске!"],
      ["apparently", "судя по всему, говорят", "Apparently, the finale is amazing.", "Говорят, финал потрясающий."],
      ["hire", "нанимать", "The studio is reported to have hired thirty people.", "Сообщается, что студия наняла тридцать человек."],
      ["promote", "повышать (в должности)", "She got promoted after the release.", "Её повысили после релиза."],
      ["ban", "банить, запрещать; бан", "He got banned for a week.", "Его забанили на неделю."],
      ["treat", "обращаться (с кем-то)", "I don't like being treated like a child.", "Не люблю, когда со мной обращаются как с ребёнком."],
      ["ignore", "игнорировать", "I hate being ignored in the chat.", "Ненавижу, когда меня игнорируют в чате."],
      ["injure", "ранить, травмировать", "Two people are reported to have been injured.", "Сообщается, что два человека пострадали."],
      ["steal — stole — stolen", "красть", "I had my bike stolen on the first day.", "У меня украли велосипед в первый же день."],
      ["repair", "ремонтировать", "Where can I have my phone repaired?", "Где можно починить телефон?"],
      ["install", "устанавливать", "The internet was finally installed on Friday.", "Интернет наконец провели в пятницу."],
      ["service", "обслуживать (машину, технику)", "I have my car serviced once a year.", "Я делаю ТО машины раз в год."],
      ["deliver", "доставлять", "We had the sofa delivered on Sunday.", "Нам привезли диван в воскресенье."],
      ["decorate", "делать ремонт (отделку)", "We're having the bedroom decorated.", "Нам делают ремонт в спальне."],
      ["landlord", "арендодатель, хозяин квартиры", "The landlord is supposed to fix the heating.", "Хозяин квартиры должен починить отопление."],
      ["haircut", "стрижка", "Nice haircut! Where did you have it done?", "Классная стрижка! Где делал?"],
      ["charge", "брать плату", "They charged me for a connection I didn't have.", "С меня брали плату за подключение, которого не было."],
      ["on hold", "на линии, в режиме ожидания", "I was kept on hold for forty minutes.", "Меня держали на линии сорок минут."],
      ["value", "оценивать стоимость; ценность", "You should have that lamp valued.", "Тебе стоит отдать эту лампу на оценку."],
      ["viral", "вирусный", "The video went viral overnight.", "Видео за ночь стало вирусным."],
      ["get lost", "заблудиться", "We got lost in the old town.", "Мы заблудились в старом городе."]
    ],
    texts: [
      {
        id: 't-b2-2-1', title: 'Northern Lights 2: what we know (and what we don\'t)', level: 'B2',
        text: `The sequel to last year's surprise hit Northern Lights is expected to be announced next month, according to several sources close to the studio. Nothing has been confirmed officially, but a lot has been said about the game in the past few weeks, so here is what we know, and what we only think we know.

First, the release date. The game is widely believed to be coming out next spring. It is said that the studio wanted to release it before Christmas, but the plan was changed after the team was given more time by the publisher. Several developers are reported to have been working at weekends to keep the project on schedule, although the studio denies this.

Second, the setting. The sequel is rumoured to take place in the same frozen world, but two hundred years later. According to one leaked document, there is said to be a huge underground city that players can explore. The document is thought to have been written by a level designer, but it is not known how it was leaked. The studio has not commented, and fans have been told to "wait for the official news".

Third, the story. Ada, the hero of the first game, is supposed to return, but only as an old woman. Players are expected to control her granddaughter instead. Some fans are not happy about this. "I wish they had asked the community first," one wrote on a forum.

There is also news about the team. The original lead writer, Mark Holt, is known to have left the studio last year. He is said to be working on a new project in Canada, but he refuses to talk about it. Meanwhile, the studio is reported to have hired thirty new people, including several artists who were offered jobs after their fan art went viral. One of them told us: "I was shown the concept art on my first day, and I couldn't sleep that night. It's beautiful."

Finally, a warning. Fake trailers are being shared online every day. One video, which is claimed to show the first level, has been viewed more than two million times. It is supposed to be a leak, but it is almost certainly fan-made: the logo is wrong. If you want real information, wait for the official announcement. It is supposed to happen on 14 March, but with this studio, you never know.`,
        questions: [
          { q: 'When is the game believed to be coming out?', o: ['Before Christmas', 'Next spring', 'In two hundred years'], a: 1 },
          { q: 'What is said about Mark Holt?', o: ['He is working on a new project in Canada', 'He wrote the leaked document', 'He was offered a job after his fan art went viral'], a: 0 },
          { q: 'Why is the popular video probably fake?', o: ['It is too short', 'The logo is wrong', 'It was made by the studio'], a: 1 }
        ]
      },
      {
        id: 't-b2-2-2', title: 'New flat, new problems', level: 'B2',
        text: `Leo: Wow, the flat looks amazing! Did you paint the walls yourself?
Mia: Are you joking? I had them painted. I tried to do the kitchen myself, and it took me a whole weekend to finish one wall. After that, we got a painter in.
Leo: Smart. And the floor? It looks brand new.
Mia: It is. We had the old carpet taken out and a new floor put in. The landlord paid for half of it.
Leo: Lucky you. My landlord is supposed to fix our heating, but he's been "coming next week" since October.
Mia: That's terrible. You're not supposed to leave people without heating in winter. Isn't that against the law?
Leo: It is, but he's said to be the slowest landlord in the city. Anyway, how was the move?
Mia: Honestly? A disaster. On the very first day, I had my bike stolen. I left it outside for twenty minutes while we were carrying boxes. Twenty minutes!
Leo: No way. Did you report it?
Mia: Yes, but I was told that bikes get stolen round here every day and there wasn't much the police could do.
Leo: That's awful. What else went wrong?
Mia: The internet. We were promised it would be installed on Monday. It was finally installed on Friday, so I worked from a café all week. And I was being charged for a connection I didn't have!
Leo: Did you complain?
Mia: Of course. I called them five times, and in the end I was given a month free. I hate being kept on hold for forty minutes, but it worked.
Leo: Well, at least that got done. And this lamp? It's beautiful.
Mia: Thanks! It's supposed to be a design classic. I found it at a flea market. It didn't work, so I had it rewired. The man at the repair shop said it's thought to be from the sixties.
Leo: You should get it valued. It might be worth a fortune.
Mia: Maybe one day. Right now I just need to get the curtains sorted. I'm having them made by a friend of my mum's, and they're supposed to be ready by Saturday.
Leo: So when's the housewarming party?
Mia: Next Friday, if the curtains arrive. You'll be invited, don't worry. Just don't come by bike.`,
        questions: [
          { q: 'Who painted most of the walls in Mia\'s flat?', o: ['Mia herself', 'A painter', 'The landlord'], a: 1 },
          { q: 'What happened on Mia\'s first day?', o: ['Her bike was stolen', 'The lamp broke', 'The heating stopped working'], a: 0 },
          { q: 'Why did Mia work from a café for a week?', o: ['She liked the coffee there', 'The internet hadn\'t been installed yet', 'Her flat was being painted'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "I ___ a new laptop by my company last week.", o: ['gave', 'was given', 'was giving'], a: 1, why: "Мне дали → человек в начале + was given." },
      { t: 'choice', q: "I don't like ___ what to do.", o: ['telling', 'being told', 'be told'], a: 1, why: "Мне говорят + после like нужна -ing → being + V3." },
      { t: 'choice', q: "Where ___ your parents born?", o: ['are', 'were', 'did'], a: 1, why: "Рождение — событие в прошлом → were born." },
      { t: 'choice', q: "Luckily, nobody ___ hurt in the accident.", o: ['got', 'get', 'was got'], a: 0, why: "Событие → get-passive в прошедшем: got hurt." },
      { t: 'choice', q: "The CEO is said ___ the company next year.", o: ['to leave', 'leaving', 'that he leaves'], a: 0, why: "He is said + to + глагол; будущее/обычное → to leave." },
      { t: 'choice', q: "The castle is believed ___ in the 12th century.", o: ['to build', 'to be built', 'to have been built'], a: 2, why: "Построили (passive) в прошлом → to have been + V3." },
      { t: 'choice', q: "You're not ___ to use your phone during the exam.", o: ['suppose', 'supposed', 'supposing'], a: 1, why: "Устойчивая форма be supposed to — всегда с -d." },
      { t: 'choice', q: "I don't cut my hair myself. I ___ every month.", o: ['cut it', 'have it cut', 'have cut it'], a: 1, why: "Делает мастер → have + что + V3: have it cut." },
      { t: 'gap', q: "We ___ the flat painted last month. (have)", a: ['had'], why: "have something done в прошлом → had + что + V3." },
      { t: 'gap', q: "It ___ that the game will be released in May. (expect)", a: ['is expected', "'s expected"], why: "It is + V3 + that… — «ожидается, что»." },
      { t: 'gap', q: "He is said ___ a million copies of his first game. (sell)", a: ['to have sold'], why: "Продал в прошлом → to have + V3." },
      { t: 'gap', q: "I ___ my phone stolen on the metro yesterday. (have)", a: ['had'], why: "Со мной случилось → had + что + V3." },
      { t: 'gap', q: "She was supposed ___ at seven, but she was late. (arrive)", a: ['to arrive'], why: "be supposed + to + глагол = должна была по плану." },
      { t: 'gap', q: "I ___ a lot of difficult questions at the interview. (ask)", a: ['was asked', 'got asked'], why: "Мне задавали → человек в начале: was asked." },
      { t: 'order', a: 'Where do you have your hair cut', ru: 'Где ты стрижёшься?' },
      { t: 'order', a: 'The film is supposed to be good', ru: 'Говорят, фильм хороший' },
      { t: 'tr', q: 'Мне предложили работу в Лондоне.', a: ['i was offered a job in london', "i've been offered a job in london", 'i have been offered a job in london', 'i got offered a job in london', 'i was offered work in london'] },
      { t: 'tr', q: 'Мне нужно отдать ноутбук в ремонт.', a: ['i need to have my laptop repaired', 'i need to get my laptop repaired', 'i need to have my laptop fixed', 'i need to get my laptop fixed', 'i have to have my laptop repaired', 'i have to get my laptop repaired', 'i have to have my laptop fixed', 'i have to get my laptop fixed', 'i need to take my laptop in for repair', 'i need to take my laptop for repair', 'i need to take my laptop to be repaired', 'i need to take my laptop in to be repaired'] },
      { t: 'listen', say: 'I was told to wait here', a: ['i was told to wait here'] },
      { t: 'listen', say: "It's supposed to be a secret", a: ["it's supposed to be a secret", 'it is supposed to be a secret'] }
    ],
    test: [
      { t: 'choice', q: "The winners ___ their prizes on stage tomorrow.", o: ['will give', 'will be given', 'will be giving'], a: 1, why: "Победителям дадут → человек в начале + will be given." },
      { t: 'choice', q: "Мне объяснили правило.", o: ['I was explained the rule.', 'The rule was explained to me.', 'The rule explained to me.'], a: 1, why: "explain не допускает человека в начале → The rule was explained to me." },
      { t: 'gap', q: "Steve hates ___ waiting. (keep)", a: ['being kept'], why: "Его заставляют ждать + после hate -ing → being + V3." },
      { t: 'choice', q: "Our cat ___ by everybody in the building.", o: ['gets liked', 'is liked', 'gets like'], a: 1, why: "Нравиться — состояние, не событие → только be, не get." },
      { t: 'gap', q: "The two suspects are reported ___ the country last night. (leave)", a: ['to have left'], why: "Уехали в прошлом → to have + V3." },
      { t: 'choice', q: "There ___ a hidden level in this game.", o: ['is said to be', 'is said that', 'says to be'], a: 0, why: "С there: There is said to be… — «говорят, есть»." },
      { t: 'choice', q: "I'd better hurry. I'm supposed ___ Chris in ten minutes.", o: ['meet', 'to be meeting', 'meeting'], a: 1, why: "Встреча по плану / расписанию → supposed to be + -ing (в этом значении как Present Continuous для планов)." },
      { t: 'gap', q: "My sister is ___ her wedding dress made in Italy. (have)", a: ['having'], why: "Сейчас в процессе → is having + что + V3." },
      { t: 'choice', q: "Лиза покрасила забор (наняла маляра).", o: ['Lisa painted the fence.', 'Lisa had painted the fence.', 'Lisa had the fence painted.'], a: 2, why: "Делал другой по её просьбе → had + что + V3; had painted — это Past Perfect." },
      { t: 'choice', q: "He had his nose broken in a fight. This means:", o: ['He asked someone to break his nose', 'Somebody broke his nose', 'He broke somebody\'s nose'], a: 1, why: "have something done во втором смысле — с человеком случилось плохое." },
      { t: 'gap', q: "The suspect is believed ___ a black jacket at the time of the robbery. (wear)", a: ['to have been wearing'], why: "Был одет в тот момент в прошлом → to have been + -ing." },
      { t: 'choice', q: "We got into the concert without ___.", o: ['seeing', 'being seen', 'be seen'], a: 1, why: "Нас не увидели + после предлога -ing → being + V3." }
    ]
  }
);
