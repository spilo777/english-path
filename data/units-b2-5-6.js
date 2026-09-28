// Юниты B2 5–6: see somebody do / doing, -ing clauses (having done, feeling tired); whose / whom / where, придаточные с дополнительной информацией (, which / , who), предлог + whom / which, all of whom, -ing / -ed clauses после существительного
COURSE.units.push(
  // ───────────────────────────── UNIT B2-5 ─────────────────────────────
  {
    id: 'b2-5', level: 'B2', num: 5, track: 'main',
    books: { blue: [67, 68] },
    title: 'See somebody do/doing; -ing clauses',
    summary: 'Научимся без «как» и «что» рассказывать, что мы видели и слышали (I saw him leave / I saw him leaving), и сжимать две фразы в одну с помощью -ing: Feeling tired, I went to bed · Having finished the mockup, she sent it.',
    grammar: [
      {
        title: '1. Главная идея: «я видел, как он ушёл» — без «как»',
        html: `
<div class="g-idea">Что вы уже знаете (уроки A2-14 и B1-15): после <b>make</b> и <b>let</b> второй глагол идёт «голым», без to: <span class="say">let me go</span>, <span class="say">make him laugh</span>. С глаголами восприятия — <b>see, hear, watch, feel</b> — работает та же схема. Русское «я видел, <b>как</b> он…» и «я слышал, <b>что</b> кто-то…» по-английски сжимается в три слова: кого видел + что он делал.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я видел, <b>как</b> Макс ушёл.</p><p>Я не слышал, <b>как</b> ты вошла.</p><p>Я почувствовал, <b>что</b> кто-то тронул меня за плечо.</p><p>Я видел, <b>как</b> Кейт ждала автобус.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I saw Max <b>leave</b>.</span></p><p><span class="say">I didn't hear you <b>come</b> in.</span></p><p><span class="say">I felt somebody <b>touch</b> my shoulder.</span></p><p><span class="say">I saw Kate <b>waiting</b> for a bus.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">see / hear / watch / feel</span><span class="g-plus">+</span><span class="g-part">кого (me, him, Tom)</span><span class="g-plus">+</span><span class="g-part g-v">do или doing</span></div>
<p>Обратите внимание: после глагола восприятия идёт <b>him, her, them</b>, а не he, she, they — это дополнение, «кого я видел».</p>
<div class="g-bad">I saw he leave.</div>
<div class="g-good">I saw <b>him</b> leave.</div>
<div class="g-tip">Вся разница между <b>leave</b> и <b>leaving</b> — как между целым видео и стоп-кадром. Об этом — следующие два блока.</div>
<div class="mini" data-q="Я не слышал, как ты вошла." data-o="I didn't hear that you came in.|I didn't hear you come in.|I didn't hear you to come in." data-a="1" data-why="hear + кого + глагол без to: hear you come in. Вариант с that звучит как «мне не сообщили»."></div>`
      },
      {
        title: '2. I saw him leave — видел действие целиком',
        html: `
<div class="g-idea">Глагол <b>без -ing и без to</b> (голая форма) — если вы видели или слышали действие <b>от начала до конца</b>. Часто это короткое действие или цепочка действий.</div>
<ul class="g-list">
<li><span class="say">I saw Max close his laptop and walk out.</span> — Я видел, как Макс закрыл ноутбук и вышел.</li>
<li><span class="say">Did you hear the door slam?</span> — Ты слышал, как хлопнула дверь?</li>
<li><span class="say">We watched the sun go down over the sea.</span> — Мы смотрели, как садится солнце над морем.</li>
<li><span class="say">I felt my phone vibrate in my pocket.</span> — Я почувствовал, как в кармане завибрировал телефон.</li>
<li><span class="say">Nobody noticed him leave the call.</span> — Никто не заметил, как он вышел из созвона.</li>
<li><span class="say">We listened to the boss explain the new rules.</span> — Мы выслушали, как начальник объяснял новые правила. <span class="muted">(от начала до конца)</span></li>
<li><span class="say">I saw the tower explode in the last scene.</span> — Я видел, как в последней сцене взорвалась башня.</li>
</ul>
<p>Список глаголов: <b>see, hear, watch, feel, notice, listen to</b>. Форма второго глагола <b>не меняется</b> — ни -s, ни -ed, даже в прошлом:</p>
<div class="g-bad">I saw him left. / I heard her sings.</div>
<div class="g-good">I saw him <b>leave</b>. / I heard her <b>sing</b>.</div>
<div class="g-bad">I saw him to jump over the fence.</div>
<div class="g-good">I saw him <b>jump</b> over the fence.</div>
<p>А <b>how</b> оставляйте для смысла «каким образом»: <span class="say">I saw how she did the trick, but I still can't repeat it.</span> — Я видел, <i>как именно</i> она сделала этот трюк.</p>
<div class="mini" data-q="Yesterday I saw a guy ___ off his bike." data-o="fell|fall|to fall" data-a="1" data-why="После saw + кого — голая форма: saw a guy fall. Прошлое показывает только saw."></div>`
      },
      {
        title: '3. I saw him leaving — застал в процессе',
        html: `
<div class="g-idea"><b>-ing</b> — если вы застали действие <b>посередине</b>: оно уже шло до вас и продолжалось после. Это как Past Continuous, только внутри фразы: <i>she was waiting — I saw her waiting</i>.</div>
<table>
<tr><th>Голая форма</th><th>-ing</th></tr>
<tr><td>всё действие, от начала до конца</td><td>кусочек, «стоп-кадр»</td></tr>
<tr><td><span class="say">I saw Tom cross the street.</span><br>видел, как он перешёл</td><td><span class="say">I saw Tom crossing the street.</span><br>проезжал мимо — он переходил</td></tr>
<tr><td><span class="say">I heard them leave.</span><br>услышал, что ушли</td><td><span class="say">I heard them arguing.</span><br>слышал, как ругались</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I could hear it raining all night.</span> — Всю ночь было слышно, как идёт дождь.</li>
<li><span class="say">Listen to the crowd cheering!</span> — Послушай, как ревёт толпа!</li>
<li><span class="say">I watched her playing for a few minutes and then went to bed.</span> — Я немного посмотрел, как она играет, и пошёл спать.</li>
</ul>
<p>Два глагола работают <b>только с -ing</b>: <b>smell</b> и <b>find</b> (застать, обнаружить).</p>
<ul class="g-list">
<li><span class="say">Can you smell something burning?</span> — Чувствуешь, что-то горит?</li>
<li><span class="say">When I came back, I found the cat sleeping on my keyboard.</span> — Когда я вернулся, кот спал на моей клавиатуре.</li>
<li><span class="say">We finally found Dan sitting in the car, eating chips.</span> — В итоге мы нашли Дэна: он сидел в машине и ел чипсы.</li>
</ul>
<div class="g-tip">Мгновенные действия (<b>explode, slam, fall, shout «Hi»</b>) почти всегда без -ing — их нельзя застать «посередине». Долгие (<b>rain, wait, play, talk</b>) — чаще с -ing. А иногда разницы нет: <span class="say">I've never seen her dance.</span> = <span class="say">I've never seen her dancing.</span></div>
<p>По-русски мы говорим «мне было слышно», «было видно». По-английски — <b>can / could</b> + see, hear, smell: <span class="say">I could see him hiding behind the car.</span></p>
<div class="mini" data-q="Я заглянул в комнату — брат играл в приставку. I saw my brother ___ on his console." data-o="play|playing|played" data-a="1" data-why="Застал в процессе: он уже играл → saw him playing."></div>
<div class="mini" data-q="We all heard the bomb ___. It was incredibly loud." data-o="explode|exploding|exploded" data-a="0" data-why="Взрыв — мгновенное действие целиком → голая форма explode."></div>`
      },
      {
        title: '4. Глубже: пассив, catch и spot, heard my name called',
        html: `
<div class="g-idea">Три вещи, которые часто встречаются в новостях, сериалах и играх и сбивают с толку даже тех, кто знает основное правило.</div>
<p><b>1. В пассиве появляется to.</b> Активно — без to, но стоит перевернуть фразу — и to возвращается (с -ing ничего не меняется):</p>
<table>
<tr><th>Активный</th><th>Пассив</th></tr>
<tr><td><span class="say">Someone saw him leave.</span></td><td><span class="say">He was seen to leave.</span></td></tr>
<tr><td><span class="say">Someone saw him leaving.</span></td><td><span class="say">He was seen leaving the building.</span></td></tr>
<tr><td><span class="say">They heard her say no.</span></td><td><span class="say">She was heard to say no.</span> <span class="muted">(книжно)</span></td></tr>
</table>
<p><b>2. catch, spot, keep, leave + кого + -ing</b> — такие глаголы работают только с -ing:</p>
<ul class="g-list">
<li><span class="say">I caught him reading my messages.</span> — Я застал его за чтением моих сообщений.</li>
<li><span class="say">I spotted a sniper hiding on the roof.</span> — Я заметил снайпера, который прятался на крыше.</li>
<li><span class="say">Sorry to keep you waiting.</span> — Простите, что заставил ждать.</li>
<li><span class="say">They left me standing in the rain.</span> — Они бросили меня стоять под дождём.</li>
</ul>
<p><b>3. see / hear + кого-что + 3-я форма</b> — действие совершил <b>кто-то другой</b> (пассивный смысл):</p>
<ul class="g-list">
<li><span class="say">I heard my name called.</span> — Я услышал, как меня позвали.</li>
<li><span class="say">I've never seen this done in Figma before.</span> — Я никогда не видел, чтобы такое делали в Figma.</li>
</ul>
<div class="g-bad">The suspect was seen leave the bank.</div>
<div class="g-good">The suspect was seen <b>to leave</b> / <b>leaving</b> the bank.</div>
<div class="mini" data-q="Two men were seen ___ the building at midnight." data-o="enter|to enter|entered" data-a="1" data-why="В пассиве (were seen) голая форма превращается в to + глагол."></div>
<div class="mini" data-q="Mum caught me ___ at 3 a.m." data-o="play|playing|to play" data-a="1" data-why="catch somebody doing — только -ing: застать за делом."></div>`
      },
      {
        title: '5. -ing clause: делаю одно — параллельно другое',
        html: `
<div class="g-idea">Если <b>один и тот же</b> человек делает два дела одновременно, вторую часть можно сжать в <b>-ing</b>. Это очень похоже на русское деепричастие: «сидела на кухне, <b>готовя</b> кофе». Только в английском это звучит естественно и в разговоре, а в русском — чуть книжно.</div>
<table>
<tr><th>Две фразы</th><th>Одна фраза</th></tr>
<tr><td>Kate is in the kitchen. She's making coffee.</td><td><span class="say">Kate is in the kitchen making coffee.</span></td></tr>
<tr><td>A guy ran out of the shop. He was shouting.</td><td><span class="say">A guy ran out of the shop shouting.</span></td></tr>
<tr><td>I sat on the sofa. I was scrolling my phone.</td><td><span class="say">I sat on the sofa scrolling my phone.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Don't just stand there doing nothing!</span> — Не стой просто так, сделай что-нибудь!</li>
<li><span class="say">She came in holding a huge box.</span> — Она вошла с огромной коробкой в руках.</li>
<li><span class="say">Be careful crossing the road.</span> — Будь осторожен, когда переходишь дорогу.</li>
</ul>
<p>Второй случай: одно действие случилось <b>во время</b> другого. -ing = «когда (я) делал»:</p>
<ul class="g-list">
<li><span class="say">Joe hurt his wrist playing volleyball.</span> — Джо повредил запястье, когда играл в волейбол.</li>
<li><span class="say">Did you cut yourself shaving?</span> — Ты порезался, когда брился?</li>
<li><span class="say">I lost my headphones running for the bus.</span> — Я потерял наушники, пока бежал на автобус.</li>
</ul>
<p>Можно добавить <b>while</b> или <b>when</b> — смысл тот же, но яснее:</p>
<ul class="g-list">
<li><span class="say">I learned a lot while working on this project.</span></li>
<li><span class="say">Be careful when using this tool — it deletes layers.</span></li>
</ul>
<div class="g-bad">I hurt my knee when played football.</div>
<div class="g-good">I hurt my knee <b>playing</b> football. / …<b>while playing</b>… / …<b>when I was playing</b>…</div>
<div class="mini" data-q="Он порезался, когда брился." data-o="He cut himself shaving.|He cut himself shaved.|He cut himself to shave." data-a="0" data-why="Одно случилось во время другого → -ing: shaving = когда брился."></div>`
      },
      {
        title: '6. Having done и Feeling tired — «сделав» и «так как»',
        html: `
<div class="g-idea">Что вы уже знаете (урок B1-15): <b>having done</b> — «то, что уже сделано». В начале предложения -ing часто означает <b>«сделав»</b> (одно раньше другого) или <b>«так как»</b> (причина). Это язык статей, книг, писем и субтитров — в разговоре чаще говорят проще.</div>
<p><b>Одно раньше другого</b> — having + 3-я форма, или after + -ing (урок B2-3):</p>
<ul class="g-list">
<li><span class="say">Having found a hotel, we went to look for somewhere to eat.</span> — Найдя отель, мы пошли искать, где поесть.</li>
<li><span class="say">Having finished the mockups, she sent them to the client.</span> — Закончив макеты, она отправила их клиенту.</li>
<li><span class="say">After finishing the mockups, she sent them to the client.</span> — то же самое.</li>
</ul>
<p><b>Причина</b> — -ing, being, not having, having seen:</p>
<table>
<tr><th>Книжно</th><th>Разговорно</th></tr>
<tr><td><span class="say">Feeling tired, I went to bed early.</span></td><td>I went to bed early because I felt tired.</td></tr>
<tr><td><span class="say">Being new to the team, he asked a lot of questions.</span></td><td>He asked a lot because he was new.</td></tr>
<tr><td><span class="say">Not having a car, she finds it hard to get around.</span></td><td>She doesn't have a car, so…</td></tr>
<tr><td><span class="say">Having seen the film twice, I didn't want to watch it again.</span></td><td>I'd already seen it twice, so…</td></tr>
</table>
<div class="g-steps"><div class="g-h">Три технических правила</div><ol>
<li>После такой части в начале предложения ставим <b>запятую</b>: <i>Feeling tired<b>,</b> I…</i></li>
<li>Отрицание — <b>not</b> перед -ing: <span class="say">Not knowing what to do, I called my sister.</span></li>
<li><b>having</b> + 3-я форма — если это закончилось <b>до</b> главного действия: <i>Having seen</i>, <i>Having lost</i>.</li>
</ol></div>
<div class="g-bad">Don't knowing the answer, I guessed.</div>
<div class="g-good"><b>Not knowing</b> the answer, I guessed.</div>
<div class="mini" data-q="___ the first season in one night, I couldn't wait for the second." data-o="Having watched|Watched|Have watched" data-a="0" data-why="Сначала посмотрел сезон, потом ждал второй → having + 3-я форма."></div>
<div class="mini" data-q="___ what to say, I just smiled." data-o="Not knowing|Don't knowing|Knowing not" data-a="0" data-why="Отрицание в -ing clause — not перед -ing."></div>`
      },
      {
        title: '7. Ловушка: у -ing должен быть тот же «хозяин»',
        html: `
<div class="g-idea">Помните Чехова: «Подъезжая к сей станции и глядя на природу в окно, <b>у меня слетела шляпа</b>»? Это смешно, потому что подъезжала не шляпа. В английском правило такое же строгое: -ing в начале относится к <b>тому, кто стоит сразу после запятой</b>.</div>
<div class="g-steps"><div class="g-h">Проверка за секунду</div><ol>
<li>Найдите подлежащее сразу после запятой.</li>
<li>Спросите: это <b>оно</b> делало действие на -ing?</li>
<li>Нет — перестройте фразу или верните when / because + полное предложение.</li>
</ol></div>
<div class="g-bad">Walking home, the rain started.</div>
<div class="g-good">Walking home, <b>I</b> got caught in the rain. / <b>While I was walking</b> home, it started to rain.</div>
<div class="g-bad">Having finished the design, the client called me.</div>
<div class="g-good">Having finished the design, <b>I</b> called the client.</div>
<div class="g-bad">Being a beginner, the game was too hard for me.</div>
<div class="g-good">Being a beginner, <b>I</b> found the game too hard.</div>
<div class="g-tip">Носители тоже иногда так ошибаются в речи, но в тексте, в резюме или в письме заказчику это выглядит как шляпа у Чехова. Сомневаетесь — пишите через <b>because / when / after</b>.</div>
<div class="mini" data-q="Какое предложение правильное?" data-o="Looking out of the window, a dragon appeared.|Looking out of the window, I saw a dragon.|Looking out of the window, it was a dragon." data-a="1" data-why="В окно смотрел я, значит после запятой должно стоять I."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I saw him to leave the office.</div><div class="g-good">I saw him <b>leave</b> the office.</div>
<div class="g-bad">I heard she came in.</div><div class="g-good">I heard <b>her come</b> in.</div>
<div class="g-bad">I saw Tom crossed the street.</div><div class="g-good">I saw Tom <b>cross</b> / <b>crossing</b> the street.</div>
<div class="g-bad">Can you smell something burn?</div><div class="g-good">Can you smell something <b>burning</b>?</div>
<div class="g-bad">He was seen leave the bank.</div><div class="g-good">He was seen <b>to leave</b> / <b>leaving</b> the bank.</div>
<div class="g-bad">I hurt my back when carried the sofa.</div><div class="g-good">I hurt my back <b>carrying</b> the sofa.</div>
<div class="g-bad">Don't having a car, I walk everywhere.</div><div class="g-good"><b>Not having</b> a car, I walk everywhere.</div>
<div class="g-bad">Finishing work, the phone rang.</div><div class="g-good"><b>When I had finished</b> work, the phone rang.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>saw him leave</b> — целиком · <b>saw him leaving</b> — в процессе · <b>was seen to leave</b> в пассиве · <b>Feeling tired, I…</b> / <b>Having finished, I…</b> — и у -ing тот же хозяин, что после запятой.</div>`
      }
    ],
    words: [
      ['notice', 'замечать', 'Did anyone notice him leave?', 'Кто-нибудь заметил, как он ушёл?'],
      ['spot', 'заметить, засечь', 'I spotted an enemy hiding behind the wall.', 'Я засёк врага, который прятался за стеной.'],
      ['catch — caught', 'поймать; застать', 'She caught me eating her pizza.', 'Она застала меня за поеданием её пиццы.'],
      ['overhear — overheard', 'случайно услышать, подслушать', 'I overheard my boss talking about me.', 'Я случайно услышал, как начальник говорил обо мне.'],
      ['witness', 'свидетель; стать свидетелем', 'A witness saw the car drive away.', 'Свидетель видел, как машина уехала.'],
      ['stare (at)', 'пристально смотреть, пялиться', 'He sat there staring at the screen.', 'Он сидел, уставившись в экран.'],
      ['glance (at)', 'взглянуть мельком', 'She glanced at her phone and smiled.', 'Она мельком взглянула на телефон и улыбнулась.'],
      ['whisper', 'шептать; шёпот', 'I heard someone whisper my name.', 'Я услышал, как кто-то прошептал моё имя.'],
      ['slam', 'хлопнуть (дверью), захлопнуть', 'We heard the door slam downstairs.', 'Мы услышали, как внизу хлопнула дверь.'],
      ['crawl', 'ползти', 'I felt something crawling up my leg.', 'Я почувствовал, как что-то ползёт по ноге.'],
      ['explode', 'взрываться', 'We watched the ship explode.', 'Мы смотрели, как взрывается корабль.'],
      ['vibrate', 'вибрировать', 'I felt my phone vibrate.', 'Я почувствовал, как завибрировал телефон.'],
      ['burn — burnt', 'гореть; жечь', 'Can you smell something burning?', 'Чувствуешь, что-то горит?'],
      ['sneak', 'красться, прокрадываться', 'I saw the cat sneak into the kitchen.', 'Я видел, как кот прокрался на кухню.'],
      ['rush', 'мчаться, спешить', 'She rushed out of the room crying.', 'Она выбежала из комнаты в слезах.'],
      ['shout', 'кричать', 'A man ran past shouting something.', 'Мимо пробежал мужчина, что-то крича.'],
      ['footsteps', 'шаги (звук)', 'I could hear footsteps coming closer.', 'Мне было слышно, как приближаются шаги.'],
      ['approach', 'приближаться (к)', 'We saw a storm approaching.', 'Мы видели, как приближается буря.'],
      ['cut yourself', 'порезаться', 'I cut myself chopping onions.', 'Я порезался, когда резал лук.'],
      ['twist your ankle', 'подвернуть ногу', 'He twisted his ankle running down the stairs.', 'Он подвернул ногу, сбегая по лестнице.'],
      ['injure', 'травмировать, ранить', 'She was injured skiing.', 'Она получила травму, катаясь на лыжах.'],
      ['be careful', 'быть осторожным', 'Be careful using that knife.', 'Осторожнее с этим ножом.'],
      ['while', 'пока, в то время как', 'I learned a lot while working here.', 'Я многому научился, пока работал здесь.'],
      ['wander (around)', 'бродить, гулять без цели', 'We spent the day wandering around the old town.', 'Мы весь день бродили по старому городу.'],
      ['get lost', 'заблудиться', 'Not having a map, we got lost.', 'Не имея карты, мы заблудились.'],
      ['keep someone waiting', 'заставлять ждать', 'Sorry to keep you waiting.', 'Извините, что заставил вас ждать.'],
      ['suspect', 'подозреваемый; подозревать', 'The suspect was seen leaving the bank.', 'Подозреваемого видели, когда он выходил из банка.'],
      ['realise', 'понимать, осознавать', 'Having read the task again, I realised my mistake.', 'Перечитав задание, я понял свою ошибку.'],
      ['exhausted', 'измотанный, без сил', 'Feeling exhausted, I skipped the party.', 'Чувствуя себя без сил, я пропустил вечеринку.'],
      ['unemployed', 'безработный', 'Being unemployed, he had a lot of free time.', 'Будучи безработным, он имел много свободного времени.']
    ],
    texts: [
      {
        id: 't-b2-5-1', title: 'The night I heard something in the attic', level: 'B2',
        text: `I don't usually play horror games alone, but last Friday my flatmate was away, and having finished a very long week of work, I wanted something that would make me forget about deadlines. So I turned off the lights, put on my headphones and started a game called The Quiet House.

The idea is simple. You're alone in an old house, and you have to find out what happened to the family who lived there. There's no music, just sounds. After twenty minutes I could hear the wind blowing outside and the floor creaking under my feet. At one point I heard a door slam somewhere upstairs, and I actually jumped out of my chair.

Walking along a dark corridor, I noticed something strange. In a mirror at the end of it, I saw a little girl standing behind me. I turned round. Nobody. I looked back at the mirror and watched her slowly raise her hand and point at the ceiling. Then she disappeared.

That's when it happened. Not in the game — in my flat. I took off my headphones and heard footsteps above my head. Real footsteps. I live on the top floor, and above me there's only an old attic that nobody uses.

Not knowing what to do, I sat there staring at the ceiling. I could hear someone walking slowly from one side to the other. Then I heard something heavy fall on the floor. Feeling like the hero of a very bad film, I took a torch, went out onto the landing and climbed the ladder.

I opened the attic door and saw two green eyes shining in the dark. It was my neighbour's cat. She had sneaked in through a broken window and was sitting on an old box, eating a pigeon. The box she had knocked over was full of Christmas decorations.

Having carried the cat back to her owner, I went home and finished the game. I have to admit it wasn't so scary anymore. The real attic was much better at horror than any designer.

The next morning I saw my neighbour fixing the window. I didn't tell her what her cat had been eating.`,
        questions: [
          { q: 'Why did the author decide to play a horror game?', o: ['His flatmate asked him to', 'He wanted to forget about work', 'He was writing a review'], a: 1 },
          { q: 'What did he see in the mirror?', o: ['A girl pointing at the ceiling', 'A cat eating a pigeon', 'His flatmate standing behind him'], a: 0 },
          { q: 'What was making the noise in the attic?', o: ['The wind', 'A neighbour', 'A cat'], a: 2 }
        ]
      },
      {
        id: 't-b2-5-2', title: 'Three days in Porto with a camera', level: 'B2',
        text: `Having spent the whole spring designing screens for a banking app, I promised myself a real break: three days in Porto, no laptop, just a camera and comfortable shoes. Here are some notes I wrote in the evenings, sitting on the balcony of my tiny rented flat.

Day one. I arrived at night, and not speaking a word of Portuguese, I spent twenty minutes trying to explain to a taxi driver where I was staying. In the end I just showed him a photo of the street. Having found the flat, I fell asleep immediately, still wearing my jacket.

In the morning I woke up to the sound of seagulls screaming on the roof. I spent the whole day wandering around the old town, taking pictures of doors, tiles and shop signs. Designers can't help it: I saw a handwritten menu in a café window and stood there for five minutes studying the typography. The waiter came out holding a coffee and asked if I wanted one too. I did.

Day two. Walking up one of the steep streets, I twisted my ankle on the old stones. Nothing serious, but I had to sit on some steps for half an hour. It was the best half hour of the trip. I watched an old man repair a fishing net, heard a woman singing somewhere behind an open window, and saw two kids race each other down the hill on a shopping trolley. Nobody was in a hurry.

In the evening I sat by the river eating grilled sardines and watching the sun go down behind the bridge. I felt my phone vibrate in my pocket. A client. Feeling very brave, I didn't answer.

Day three. Being a little tired of walking, I took the old yellow tram to the ocean. I spent the afternoon on the beach reading a paper book, which I hadn't done for years. On the way back I caught myself looking at the tram's timetable and thinking how I would redesign it. Old habits.

Now I'm home, looking through almost four hundred photos. My favourite is the one I took without thinking: the old man with his net, smiling, having noticed me taking his picture.`,
        questions: [
          { q: 'How did the author explain to the taxi driver where he was staying?', o: ['He spoke Portuguese', 'He showed a photo of the street', 'He called the owner of the flat'], a: 1 },
          { q: 'What happened on day two?', o: ['He lost his camera', 'He twisted his ankle', 'He missed the tram'], a: 1 },
          { q: 'What did he do when the client called?', o: ['He didn\'t answer', 'He went back to the flat', 'He sent a message'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I saw the delivery guy ___ the box at the door and drive off.', o: ['leave', 'to leave', 'left'], a: 0, why: 'Видел всё действие целиком → голая форма после saw + кого.' },
      { t: 'choice', q: 'When I walked past the meeting room, I heard them ___ about the budget.', o: ['argue', 'arguing', 'argued'], a: 1, why: 'Проходил мимо и застал спор в процессе → -ing.' },
      { t: 'choice', q: 'Can you smell something ___?', o: ['burn', 'burning', 'burnt'], a: 1, why: 'После smell + что-то — только -ing.' },
      { t: 'choice', q: 'I didn\'t hear ___ come in.', o: ['you', 'that you', 'you to'], a: 0, why: 'hear + кого + голый глагол, без that и без to.' },
      { t: 'choice', q: 'The singer was heard ___ that she was leaving the band.', o: ['say', 'to say', 'said'], a: 1, why: 'Пассив (was heard) → голая форма превращается в to + глагол.' },
      { t: 'choice', q: 'Joe broke his arm ___ off a ladder.', o: ['fell', 'falling', 'to fall'], a: 1, why: 'Травма случилась во время падения → -ing clause: falling = когда упал.' },
      { t: 'choice', q: '___ tired, I went to bed at nine.', o: ['Felt', 'Feeling', 'To feel'], a: 1, why: 'Причина в начале предложения → -ing: Feeling tired = так как устал.' },
      { t: 'choice', q: 'Какое предложение правильное?', o: ['Opening the fridge, the smell was terrible.', 'Opening the fridge, I noticed a terrible smell.', 'Opening the fridge, it smelled terrible.'], a: 1, why: 'Холодильник открывал я → после запятой должно стоять I.' },
      { t: 'gap', q: 'We watched the rocket ___ into the sky. (disappear)', a: ['disappear'], why: 'Видели от начала до конца → голая форма.' },
      { t: 'gap', q: 'When I got home, I found my brother ___ on my bed. (sleep)', a: ['sleeping'], why: 'find somebody doing — только -ing.' },
      { t: 'gap', q: '___ finished the report, she went home. (have)', a: ['Having', 'having'], why: 'Одно раньше другого → having + 3-я форма.' },
      { t: 'gap', q: '___ knowing the way, we asked a local. (не)', a: ['Not', 'not'], why: 'Отрицание в -ing clause — not перед -ing.' },
      { t: 'gap', q: 'Be careful ___ the road here. (cross)', a: ['crossing', 'when crossing', 'while crossing'], why: 'Два дела одновременно, тот же человек → -ing (можно с when / while).' },
      { t: 'gap', q: 'She caught her son ___ her credit card. (use)', a: ['using'], why: 'catch somebody doing — застать за делом, только -ing.' },
      { t: 'order', a: 'I felt something crawl up my arm', ru: 'Я почувствовал, как что-то проползло по руке' },
      { t: 'order', a: 'She came in holding a huge box', ru: 'Она вошла с огромной коробкой в руках' },
      { t: 'tr', q: 'Я видел, как он закрыл ноутбук и ушёл.', a: ['i saw him close the laptop and leave', 'i saw him close his laptop and leave', 'i saw him close the laptop and go', 'i saw him close his laptop and go', 'i saw him close the laptop and walk out', 'i saw him close his laptop and walk out'] },
      { t: 'tr', q: 'Всю ночь было слышно, как идёт дождь.', a: ['i could hear it raining all night', 'we could hear it raining all night', 'you could hear it raining all night', 'i could hear the rain all night'] },
      { t: 'listen', say: 'Sorry to keep you waiting', a: ['sorry to keep you waiting'] }
    ],
    test: [
      { t: 'choice', q: 'I saw a man ___ over in the street, so I ran to help him.', o: ['fall', 'fell', 'to fall'], a: 0, why: 'Падение — короткое действие целиком → голая форма; прошлое уже в saw.' },
      { t: 'choice', q: 'As I drove past the park, I saw Anna ___ her dog.', o: ['walk', 'walking', 'walked'], a: 1, why: 'Проезжал мимо — застал в процессе → -ing.' },
      { t: 'choice', q: 'The two men were seen ___ into a black car.', o: ['get', 'to get', 'got'], a: 1, why: 'Пассив were seen → to + глагол (или getting).' },
      { t: 'gap', q: 'I spotted a sniper ___ on the roof. (hide)', a: ['hiding'], why: 'spot somebody doing — заметил в процессе, только -ing.' },
      { t: 'choice', q: '___ the film twice, I didn\'t want to see it again.', o: ['Seeing', 'Having seen', 'Saw'], a: 1, why: 'Посмотрел раньше, чем решил → having + 3-я форма.' },
      { t: 'gap', q: '___ unemployed, he doesn\'t have much money. (be)', a: ['Being', 'being'], why: 'Причина → Being = так как он безработный.' },
      { t: 'choice', q: 'Какое предложение правильное?', o: ['Having lost the match, the fans were angry at us.', 'Having lost the match, we were angry.', 'Having lost the match, it was a bad day.'], a: 1, why: 'Проиграли мы → после запятой должно стоять we.' },
      { t: 'gap', q: 'I heard my name ___ and turned round. (call)', a: ['called'], why: 'Позвал кто-то другой (пассивный смысл) → 3-я форма: heard my name called.' },
      { t: 'choice', q: 'I hurt my back ___ the new sofa upstairs.', o: ['when carried', 'carrying', 'to carry'], a: 1, why: 'Травма во время действия → -ing; when + голая форма прошлого без подлежащего нельзя.' },
      { t: 'choice', q: 'We listened to the old man ___ his whole story.', o: ['tell', 'to tell', 'told'], a: 0, why: 'Выслушали всю историю от начала до конца → голая форма.' },
      { t: 'gap', q: 'Don\'t just sit there ___ nothing! (do)', a: ['doing'], why: 'Два состояния одновременно у одного человека → -ing clause.' },
      { t: 'choice', q: '___ a car, she takes the bus everywhere.', o: ['Not having', 'Don\'t having', 'Having not a'], a: 0, why: 'Причина с отрицанием → Not + having.' }
    ]
  },

  // ───────────────────────────── UNIT B2-6 ─────────────────────────────
  {
    id: 'b2-6', level: 'B2', num: 6, track: 'main',
    books: { blue: [94, 95, 96, 97] },
    title: 'Придаточные 3–5: whose, whom, where; дополнительная информация; -ing/-ed clauses',
    summary: 'Научимся говорить «у которого», «где», «в тот день, когда», отличать уточнение от «кстати» с запятыми (my brother, who lives in Berlin), строить all of whom и , which surprised everyone — и сжимать придаточные до the guy talking to Tom и the game made by two people.',
    grammar: [
      {
        title: '1. Главная идея: «какой именно» или «кстати, …»',
        html: `
<div class="g-idea">Что вы уже знаете (урок B1-21): who / that / which склеивают две фразы, «который» можно выбросить (<span class="say">the game I bought</span>), а предлог уходит в конец (<span class="say">the guy I work with</span>). Теперь главное открытие B2: придаточные бывают <b>двух типов</b>. Первый отвечает на вопрос «какой именно?». Второй просто <b>добавляет информацию</b> — «кстати, …». По-русски запятая стоит всегда, а в английском именно запятая показывает тип.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Женщина, которая живёт по соседству, — врач.</p><p>Мой брат Бен, который живёт в Гонконге, — архитектор.</p><p>Обе фразы с запятыми.</p></div>
  <div><div class="g-h">English</div><p><span class="say">The woman who lives next door is a doctor.</span> <span class="muted">— какая именно? Без запятых.</span></p><p><span class="say">My brother Ben, who lives in Hong Kong, is an architect.</span> <span class="muted">— и так ясно, кто; просто добавка. С запятыми.</span></p></div>
</div>
<div class="g-tip">Придаточное с запятыми можно <b>вырезать</b> — и фраза не потеряет смысла: <i>My brother Ben is an architect.</i> Первый тип вырезать нельзя: <i>The woman is a doctor</i> — какая женщина?</div>
<div class="mini" data-q="Где нужны запятые?" data-o="The man who called you is here.|Elon Musk who founded SpaceX was born in South Africa.|People who talk in cinemas annoy me." data-a="1" data-why="Илон Маск и так понятно кто — who founded SpaceX лишь добавляет факт, значит нужны запятые."></div>`
      },
      {
        title: '2. whose — «чей», «у которого»',
        html: `
<div class="g-idea"><b>whose</b> заменяет <b>his, her, their, its</b> в придаточном. По-русски это «<b>у которого</b>», «<b>чей</b>», «<b>которого (кого-то)</b>». После whose всегда идёт существительное.</div>
<table>
<tr><th>Две фразы</th><th>Одна фраза</th></tr>
<tr><td>We helped some people. <b>Their</b> car had broken down.</td><td><span class="say">We helped some people whose car had broken down.</span></td></tr>
<tr><td>I follow a streamer. <b>His</b> cat always sits on the keyboard.</td><td><span class="say">I follow a streamer whose cat always sits on the keyboard.</span></td></tr>
<tr><td>I met a girl. I went to school with <b>her</b> brother.</td><td><span class="say">I met a girl whose brother I went to school with.</span></td></tr>
</table>
<p>Сравните who и whose:</p>
<ul class="g-list">
<li><span class="say">I met a man who knows you.</span> — …который знает тебя. <span class="muted">(он знает)</span></li>
<li><span class="say">I met a man whose sister knows you.</span> — …сестра которого знает тебя. <span class="muted">(его сестра знает)</span></li>
</ul>
<p>whose можно и для компаний, стран, вещей: <span class="say">It's a studio whose games are all about cats.</span> — Это студия, все игры которой — про котов.</p>
<div class="g-bad">I have a friend who's brother is a pilot.</div>
<div class="g-good">I have a friend <b>whose</b> brother is a pilot.</div>
<p><b>who's</b> звучит так же, но это <b>who is / who has</b>: <span class="say">I have a friend who's learning Korean.</span> <span class="say">I have a friend who's just moved to Seoul.</span></p>
<div class="g-bad">A designer whose his work I love.</div>
<div class="g-good">A designer <b>whose work</b> I love. <span class="muted">— whose уже значит «его»</span></div>
<div class="mini" data-q="That's the guy ___ laptop was stolen." data-o="who|whose|who's" data-a="1" data-why="Его ноутбук → whose + существительное."></div>
<div class="mini" data-q="I know someone ___ working at Valve." data-o="whose|who's|whom" data-a="1" data-why="who's = who is: someone who is working."></div>`
      },
      {
        title: '3. whom, where, the day, the reason',
        html: `
<p><b>whom</b> — «которого, которому» (когда человек — дополнение). Это <b>официально</b>: письма, статьи, новости. В разговоре говорят who или вообще ничего:</p>
<table>
<tr><th>Официально</th><th>В жизни</th></tr>
<tr><td><span class="say">a person whom I admire</span></td><td><span class="say">a person I admire</span></td></tr>
<tr><td><span class="say">friends with whom you can relax</span></td><td><span class="say">friends you can relax with</span></td></tr>
</table>
<p><b>where</b> — для места, «где, в котором»:</p>
<ul class="g-list">
<li><span class="say">I went back to the town where I grew up.</span> — Я вернулся в город, где вырос.</li>
<li><span class="say">The café where we met has closed.</span> — Кафе, где мы познакомились, закрылось.</li>
<li><span class="say">I'd love to live somewhere where it's warm all year.</span></li>
</ul>
<div class="g-bad">The city where I visited last year.</div>
<div class="g-good">The city <b>(that)</b> I visited last year. <span class="muted">— visit что? город; «где» тут нет</span></div>
<div class="g-tip">Проверка: если внутри можно сказать <b>there</b> (I grew up <i>there</i>) — ставьте where. Если там <b>it</b> (I visited <i>it</i>) — that / which или ничего.</div>
<p><b>the day, the time, the year</b> — обычно без слова: <span class="say">That's the day I'm flying to Oslo.</span> <span class="say">The last time I saw her, she had blue hair.</span> Можно that или when.</p>
<p><b>the reason</b> — без слова, с that или с why: <span class="say">The reason I'm calling is to ask for your advice.</span> = The reason why I'm calling…</p>
<div class="mini" data-q="This is the office ___ I worked for three years." data-o="where|which|whom" data-a="0" data-why="I worked there — место, внутри можно сказать there → where."></div>
<div class="mini" data-q="Как сказать разговорно: «человек, которым я восхищаюсь»?" data-o="a person whom I admire|a person I admire|a person which I admire" data-a="1" data-why="Whom — официально; в разговоре слово просто опускают. Which для людей нельзя."></div>`
      },
      {
        title: '4. Добавка с запятыми: , who / , which',
        html: `
<div class="g-idea">У придаточного-«добавки» три жёстких правила — и все три противоположны тому, что вы учили в B1-21.</div>
<table>
<tr><th></th><th>Какой именно</th><th>Добавка</th></tr>
<tr><td>запятые</td><td>нет</td><td><b>да</b></td></tr>
<tr><td>that</td><td>можно</td><td><b>нельзя</b></td></tr>
<tr><td>убрать слово</td><td>можно (если не подлежащее)</td><td><b>нельзя</b></td></tr>
</table>
<ul class="g-list">
<li><span class="say">John, who speaks four languages, works as a guide.</span> — Джон, который говорит на четырёх языках, работает гидом.</li>
<li><span class="say">Anna told me about her new job, which she's enjoying a lot.</span></li>
<li><span class="say">We stayed at the Park Hotel, which a friend had recommended.</span></li>
<li><span class="say">This morning I met Chris, who I hadn't seen for ages.</span> <span class="muted">(можно whom)</span></li>
<li><span class="say">Kate has just been to Sweden, where her daughter lives.</span></li>
<li><span class="say">Lisa, whose car had broken down, was in a terrible mood.</span></li>
</ul>
<div class="g-bad">We played Hades, that I'd recommended to everyone.</div>
<div class="g-good">We played Hades, <b>which</b> I'd recommended to everyone.</div>
<p>Запятая меняет смысл:</p>
<ul class="g-list">
<li><span class="say">My sister who lives in Berlin is a designer.</span> — у меня несколько сестёр, говорю о той, что в Берлине.</li>
<li><span class="say">My sister, who lives in Berlin, is a designer.</span> — сестра одна; «кстати, она в Берлине».</li>
</ul>
<div class="mini" data-q="Our office, ___ is on the tenth floor, has a great view." data-o="that|which|—" data-a="1" data-why="Добавка с запятыми: that нельзя, слово убрать нельзя → which."></div>`
      },
      {
        title: '5. Предлог + whom / which; all of whom, none of which',
        html: `
<div class="g-idea">В официальном английском предлог встаёт <b>перед</b> whom / which — прямо как в русском «<b>с которым</b>», «<b>без которой</b>». В разговоре предлог уходит в конец, и тогда <b>whom не говорят</b>.</div>
<table>
<tr><th>Официально</th><th>Разговорно</th></tr>
<tr><td><span class="say">Mr Lee, to whom I spoke yesterday, agreed.</span></td><td><span class="say">Mr Lee, who I spoke to yesterday, agreed.</span></td></tr>
<tr><td><span class="say">the studio for which she works</span></td><td><span class="say">the studio she works for</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Luckily we had a map, without which we would have got lost.</span> — …без которой мы бы заблудились.</li>
<li><span class="say">She works for a company called Nimbus, which I'd never heard of.</span></li>
</ul>
<div class="g-bad">Mr Lee, whom I spoke to, agreed.</div>
<div class="g-good">Mr Lee, <b>to whom</b> I spoke, agreed. / Mr Lee, <b>who</b> I spoke <b>to</b>, agreed.</div>
<p><b>Число / часть + of whom (люди) / of which (вещи)</b> — «из которых»:</p>
<ul class="g-list">
<li><span class="say">Helen has three brothers, all of whom are married.</span> — …все из которых женаты.</li>
<li><span class="say">They asked me a lot of questions, most of which I couldn't answer.</span></li>
<li><span class="say">I tried on three jackets, none of which fitted me.</span></li>
<li><span class="say">Two men, neither of whom I'd seen before, walked into the office.</span></li>
<li><span class="say">We have four monitors, two of which we never use.</span></li>
<li><span class="say">We stayed in a lovely hotel, the name of which I've forgotten.</span></li>
</ul>
<div class="g-bad">I have ten followers, most of them are bots.</div>
<div class="g-good">I have ten followers, <b>most of whom</b> are bots. <span class="muted">(или: …ten followers. Most of them are bots.)</span></div>
<div class="mini" data-q="I bought five games in the sale, ___ I haven't even installed." data-o="most of them|most of which|most of whom" data-a="1" data-why="Вещи + «из которых» внутри одного предложения → of which."></div>`
      },
      {
        title: '6. , which — про всю фразу целиком',
        html: `
<div class="g-idea">Иногда «что» относится не к одному слову, а к <b>всему событию</b>: «Джо получил работу, <b>что</b> всех удивило». По-английски тут только <b>, which</b> — и никогда не what.</div>
<div class="g-formula"><span class="g-part">целая фраза</span><span class="g-plus">,</span><span class="g-part g-v">which</span><span class="g-plus">+</span><span class="g-part">комментарий</span></div>
<ul class="g-list">
<li><span class="say">Joe got the job, which surprised everyone.</span> — Джо получил работу, что всех удивило.</li>
<li><span class="say">Sarah couldn't come, which was a shame.</span> — Сара не смогла прийти, и это обидно.</li>
<li><span class="say">The weather was great, which we hadn't expected.</span> — Погода была отличная, чего мы не ожидали.</li>
<li><span class="say">The patch deleted everyone's saves, which made the players furious.</span></li>
<li><span class="say">He said he'd send the files by Monday, which means Wednesday.</span> — …а это значит, в среду.</li>
</ul>
<div class="g-bad">The server went down, what was annoying.</div>
<div class="g-good">The server went down, <b>which</b> was annoying.</div>
<div class="g-tip">В живой речи <b>, which is…</b> — любимый способ добавить свою оценку: <span class="say">…which is fine</span>, <span class="say">…which is crazy</span>, <span class="say">…which is why I left</span>.</div>
<div class="mini" data-q="My flight was cancelled, ___ meant I missed the meeting." data-o="what|which|that" data-a="1" data-why="Комментарий ко всей фразе → , which (не what и не that)."></div>`
      },
      {
        title: '7. the woman talking to Tom, the game made by two people',
        html: `
<div class="g-idea">Придаточное можно сжать: убираем <b>who is / that was</b> — и остаётся <b>-ing</b> (активный смысл: сам делает) или <b>3-я форма</b> (пассивный смысл: с ним сделали). В B2-5 -ing относился к действию; здесь он описывает <b>существительное</b>, как русское причастие «разговаривающий», «сделанный».</div>
<table>
<tr><th>Полностью</th><th>Сжато</th></tr>
<tr><td>the woman who is talking to Tom</td><td><span class="say">the woman talking to Tom</span></td></tr>
<tr><td>people who were waiting outside</td><td><span class="say">people waiting outside</span></td></tr>
<tr><td>the boy who was injured in the accident</td><td><span class="say">the boy injured in the accident</span></td></tr>
<tr><td>a game that was made by two people</td><td><span class="say">a game made by two people</span></td></tr>
</table>
<p><b>-ing</b> — и для «прямо сейчас», и для «всегда»:</p>
<ul class="g-list">
<li><span class="say">Police investigating the robbery want to talk to you.</span> — Полиция, расследующая ограбление…</li>
<li><span class="say">I was woken up by a dog barking.</span> — Меня разбудил лай собаки.</li>
<li><span class="say">The road connecting the two villages is very narrow.</span> <span class="muted">(всегда соединяет)</span></li>
<li><span class="say">I have a room overlooking the park.</span> — У меня комната с видом на парк.</li>
<li><span class="say">Name a game beginning with Z.</span></li>
</ul>
<p><b>3-я форма</b> — пассивный смысл; помните про неправильные (stolen, made, built, written):</p>
<ul class="g-list">
<li><span class="say">The money stolen in the robbery was never found.</span></li>
<li><span class="say">Most of the phones made in this factory are exported.</span></li>
<li><span class="say">He showed me some sketches drawn by his grandfather.</span></li>
</ul>
<p>С <b>there is / there was</b>: <span class="say">There were some kids swimming in the river.</span> · <span class="say">Is there anybody waiting?</span> · <span class="say">There was a red car parked outside.</span> А <b>left</b> = «оставшийся»: <span class="say">There's only one slice left.</span></p>
<div class="g-bad">The man was sitting next to me snored all flight.</div>
<div class="g-good">The man <b>sitting</b> next to me snored all flight. / The man <b>who was sitting</b>…</div>
<div class="g-bad">A game making by two people.</div>
<div class="g-good">A game <b>made</b> by two people. <span class="muted">— игру сделали, она сама не делает</span></div>
<div class="mini" data-q="The bridge ___ in 1890 is still in use." data-o="building|built|was built" data-a="1" data-why="Мост построили (пассивный смысл) → 3-я форма: built."></div>
<div class="mini" data-q="Who's the guy ___ to Anna?" data-o="talking|talked|talks" data-a="0" data-why="Парень сам разговаривает прямо сейчас → -ing."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I have a colleague who's cat is on every call.</div><div class="g-good">I have a colleague <b>whose</b> cat is on every call.</div>
<div class="g-bad">The town where I visited was tiny.</div><div class="g-good">The town <b>(that)</b> I visited was tiny.</div>
<div class="g-bad">My mum that is a teacher lives in Tver.</div><div class="g-good">My mum<b>, who</b> is a teacher<b>,</b> lives in Tver.</div>
<div class="g-bad">We watched Arcane, I loved.</div><div class="g-good">We watched Arcane, <b>which</b> I loved.</div>
<div class="g-bad">She has two cats, both of them sleep all day.</div><div class="g-good">She has two cats, <b>both of which</b> sleep all day.</div>
<div class="g-bad">The team won, what nobody expected.</div><div class="g-good">The team won, <b>which</b> nobody expected.</div>
<div class="g-bad">The man whom I spoke to…</div><div class="g-good">The man <b>I spoke to</b>… / The man <b>to whom</b> I spoke…</div>
<div class="g-bad">The car stealing last night was found.</div><div class="g-good">The car <b>stolen</b> last night was found.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>whose</b> + существительное · <b>where</b> = there · запятые = добавка: <b>, who / , which</b>, без that · <b>all of whom / none of which</b> · <b>, which</b> про всю фразу · <b>the guy talking</b> / <b>the game made</b>.</div>`
      }
    ],
    words: [
      ['whose', 'чей; у которого', 'I met a girl whose dad is a pilot.', 'Я познакомился с девушкой, у которой папа — пилот.'],
      ['whom', 'которого, которому (офиц.)', 'The man to whom I spoke was very polite.', 'Человек, с которым я говорил, был очень вежлив.'],
      ['admire', 'восхищаться', 'She’s an artist whose work I really admire.', 'Это художница, чьей работой я искренне восхищаюсь.'],
      ['grow up — grew up', 'вырасти, взрослеть', 'This is the street where I grew up.', 'Это улица, где я вырос.'],
      ['hometown', 'родной город', 'My hometown, which has only 20,000 people, has three cinemas.', 'В моём родном городе, где всего 20 000 жителей, три кинотеатра.'],
      ['flatmate', 'сосед по квартире', 'My flatmate, who works nights, sleeps all day.', 'Мой сосед по квартире, который работает по ночам, весь день спит.'],
      ['founder', 'основатель', 'The founder of the studio, whose first game failed, never gave up.', 'Основатель студии, чья первая игра провалилась, не сдался.'],
      ['launch', 'запускать; запуск, выход', 'The game was launched in May, which was a mistake.', 'Игру выпустили в мае, и это было ошибкой.'],
      ['proud (of)', 'гордый; гордиться', 'He showed me his new app, of which he’s very proud.', 'Он показал мне своё новое приложение, которым очень гордится.'],
      ['get on (well) with', 'ладить с', 'I share a desk with Oleg, who I get on really well with.', 'Я сижу за одним столом с Олегом, с которым отлично лажу.'],
      ['invite', 'приглашать', 'The wedding, to which only family were invited, was lovely.', 'Свадьба, на которую пригласили только родных, была чудесной.'],
      ['overlook', 'выходить окнами на', 'We got a room overlooking the sea.', 'Нам дали номер с видом на море.'],
      ['connect', 'соединять', 'The bridge connecting the two islands is closed.', 'Мост, соединяющий два острова, закрыт.'],
      ['surround', 'окружать', 'It’s a village surrounded by mountains.', 'Это деревня, окружённая горами.'],
      ['cause', 'причина; вызывать', 'There was a fire, the cause of which is still unknown.', 'Был пожар, причина которого до сих пор неизвестна.'],
      ['damage', 'повреждать; ущерб', 'The houses damaged in the storm are being repaired.', 'Дома, повреждённые бурей, ремонтируют.'],
      ['steal — stole — stolen', 'красть', 'The bike stolen from our yard was found.', 'Велосипед, украденный из нашего двора, нашли.'],
      ['hire', 'нанимать', 'They hired two artists, both of whom are from Kazan.', 'Они наняли двух художников, оба из Казани.'],
      ['candidate', 'кандидат', 'Ten candidates applied, none of whom was suitable.', 'Подали заявки десять кандидатов, и ни один не подошёл.'],
      ['suitable', 'подходящий', 'We need a place where it’s quiet and suitable for recording.', 'Нам нужно тихое место, подходящее для записи.'],
      ['majority', 'большинство', 'The majority of people working here are under thirty.', 'Большинству людей, работающих здесь, нет тридцати.'],
      ['neither of', 'ни один из (двух)', 'I asked two friends, neither of whom knew the answer.', 'Я спросил двух друзей, и ни один не знал ответа.'],
      ['left', 'оставшийся', 'There are only two tickets left.', 'Осталось всего два билета.'],
      ['park', 'парковать', 'There was a van parked outside my house.', 'У моего дома стоял фургон.'],
      ['a shame', 'жаль, обидно', 'He couldn’t come, which was a shame.', 'Он не смог прийти, и это обидно.'],
      ['unexpected', 'неожиданный', 'The ending, which was totally unexpected, made me cry.', 'Концовка, совершенно неожиданная, довела меня до слёз.'],
      ['fortunately', 'к счастью', 'Fortunately, we had a map, without which we’d have got lost.', 'К счастью, у нас была карта, без которой мы бы заблудились.'],
      ['in charge (of)', 'отвечающий за, главный', 'The woman in charge of the project, whose name I forget, was great.', 'Женщина, руководившая проектом, чьё имя я забыл, была отличной.'],
      ['location', 'место, локация', 'The location where they filmed the series is in Scotland.', 'Место, где снимали сериал, находится в Шотландии.'],
      ['bark', 'лаять', 'I was woken up by a dog barking.', 'Меня разбудил лай собаки.']
    ],
    texts: [
      {
        id: 't-b2-6-1', title: 'The studio in the old bakery', level: 'B2',
        text: `If you've played Lantern Road, which came out last year and sold over a million copies, you probably imagine a big studio with glass walls. In fact, the game was made by seven people working in an old bakery in a small Scottish town called Kelby, where the founder, Maya Ross, grew up.

Maya, whose parents ran the bakery for thirty years, started making games at the age of fourteen. "The first game I made was about a cat delivering bread," she laughs. "Nobody played it except my mum, who still says it's the best game ever made."

After university she worked in London for a big company, the name of which she prefers not to mention. "I learned a lot there, but I was one of four hundred people, most of whom never knew what the others were doing." When her parents retired, she moved back to Kelby and turned the bakery into an office.

The team she hired is small and unusual. There are two artists, both of whom used to work in animation, a programmer who had never made a game before, and a composer whose music you may have heard in a popular TV series. The person in charge of the story is Maya's old school friend Tom, with whom she shares a desk by the window.

Their office, which still smells slightly of bread, has a view overlooking the harbour. On the wall there is a huge map drawn by one of the artists, covered in notes and coffee stains. "That map is the reason the game works," says Maya. "Every place you visit in Lantern Road is a real place in Kelby."

The launch was not easy. The first version had a bug that deleted the saves of players using old laptops, which made a lot of people angry. The team worked for three nights without sleep, during which Tom, according to Maya, ate forty-two sandwiches.

Today, people from all over the world come to Kelby to see the locations from the game, which the town is very happy about. The old baker's sign is still above the door. "Some visitors ask if we still sell bread," Maya says. "Sadly, there's none left. Only games."`,
        questions: [
          { q: 'Where did Maya Ross grow up?', o: ['In London', 'In Kelby', 'In a big city with glass buildings'], a: 1 },
          { q: 'Who is in charge of the story?', o: ['Maya\'s mum', 'One of the artists', 'Maya\'s school friend Tom'], a: 2 },
          { q: 'What problem did the game have at launch?', o: ['A bug deleted some players\' saves', 'The music was too quiet', 'The map was wrong'], a: 0 }
        ]
      },
      {
        id: 't-b2-6-2', title: 'Who is everyone in this photo?', level: 'B2',
        text: `Liza: OK, you promised to explain this photo. I've looked at it five times and I know nobody except you.
Nick: Right. This was taken at Dan's birthday, which was the night before I left for Portugal. That's why I look so tired.
Liza: Who's the tall guy standing next to the fridge?
Nick: That's Sam, Dan's flatmate. He's the one whose band played at the party. Terrible music, lovely person.
Liza: And the girl talking to him? The one holding the cake?
Nick: That's Vera, who I studied design with. She's now at a studio whose games you play every day, actually. She can't tell me what she's working on, which drives me crazy.
Liza: And those two on the sofa, both of whom look very bored?
Nick: Ha! That's Dan's parents. They came for an hour and stayed until two in the morning. His dad, who is a retired pilot, told me the same story three times.
Liza: What about the man sitting in the corner? He looks like he doesn't know anyone either.
Nick: That's the funny part. Nobody knew him. He came in with a group of people, none of whom had been invited, and ate half of the pizza. Later we found out he lived in the flat below and had come up to complain about the noise.
Liza: And he stayed?
Nick: He stayed, which nobody expected. By midnight he was singing with Sam's band.
Liza: Where was this? It doesn't look like Dan's old flat.
Nick: No, it's the place where he lives now. It's a flat overlooking the river, with a kitchen the size of my whole apartment.
Liza: And what's that thing hanging from the ceiling?
Nick: A piñata made by Vera. It was shaped like Dan's boss. The reason I'm not showing you the next photo is that Dan's boss was also at the party.
Liza: No way!
Nick: Yes. He arrived just as everyone was hitting it with a stick. Fortunately, he has a good sense of humour, without which Dan would be looking for a new job now.
Liza: That is the best party story I've heard all year.
Nick: The last time I saw Dan, he was still apologising.`,
        questions: [
          { q: 'Who is Sam?', o: ['Dan\'s boss', 'Dan\'s flatmate whose band played', 'Nick\'s university friend'], a: 1 },
          { q: 'Why did the man in the corner come to the party at first?', o: ['To complain about the noise', 'To play with the band', 'To bring a pizza'], a: 0 },
          { q: 'What was the piñata shaped like?', o: ['A cake', 'Dan\'s father', 'Dan\'s boss'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I follow a streamer ___ dog always steals the show.', o: ['who', 'whose', 'who\'s'], a: 1, why: 'Его собака → whose + существительное.' },
      { t: 'choice', q: 'I have a cousin ___ just moved to Canada.', o: ['whose', 'who\'s', 'whom'], a: 1, why: 'who\'s = who has: who has just moved.' },
      { t: 'choice', q: 'That\'s the hospital ___ I was born.', o: ['which', 'where', 'whom'], a: 1, why: 'I was born there — место → where.' },
      { t: 'choice', q: 'Our designer, ___ lives in Minsk, works remotely.', o: ['that', 'who', '—'], a: 1, why: 'Добавка с запятыми: that нельзя, слово нельзя пропустить → who.' },
      { t: 'choice', q: 'Our team missed the deadline, ___ made the client angry.', o: ['what', 'which', 'that'], a: 1, why: 'Комментарий ко всей фразе → , which.' },
      { t: 'choice', q: 'She has three sisters, ___ are older than her.', o: ['all of them', 'all of whom', 'all of which'], a: 1, why: 'Люди + «из которых» внутри одного предложения → of whom.' },
      { t: 'choice', q: 'Who\'s the woman ___ to your boss?', o: ['talking', 'talked', 'is talking'], a: 0, why: 'Сжатое придаточное: the woman (who is) talking — сама говорит → -ing.' },
      { t: 'choice', q: 'Most of the furniture ___ in this factory is sold abroad.', o: ['making', 'made', 'makes'], a: 1, why: 'Мебель делают (пассивный смысл) → 3-я форма made.' },
      { t: 'gap', q: 'The reason ___ I left early is simple: I was exhausted. (почему)', a: ['why', 'that'], why: 'После the reason можно why, that или ничего.' },
      { t: 'gap', q: 'Mr Park, to ___ I sent the invoice, hasn\'t replied. (которому)', a: ['whom'], why: 'Предлог перед словом о человеке → только whom.' },
      { t: 'gap', q: 'He bought three games, none of ___ he has played. (которых)', a: ['which'], why: 'Вещи + none of → none of which.' },
      { t: 'gap', q: 'There\'s only one cookie ___. (оставшийся)', a: ['left'], why: 'left = оставшийся: there\'s only one left.' },
      { t: 'gap', q: 'The police found the car ___ last week. (steal)', a: ['stolen'], why: 'Машину украли (пассивный смысл) → 3-я форма stolen.' },
      { t: 'gap', q: 'I have a room ___ the garden. (overlook)', a: ['overlooking'], why: 'Комната «выходит» на сад постоянно → -ing clause.' },
      { t: 'order', a: 'I went back to the town where I grew up', ru: 'Я вернулся в город, где вырос' },
      { t: 'order', a: 'The man sitting next to me snored', ru: 'Мужчина, сидевший рядом со мной, храпел' },
      { t: 'tr', q: 'Я познакомился с девушкой, у которой брат — пилот.', a: ['i met a girl whose brother is a pilot', 'i\'ve met a girl whose brother is a pilot', 'i have met a girl whose brother is a pilot'] },
      { t: 'tr', q: 'Сара не смогла прийти, что было обидно.', a: ['sarah couldn\'t come, which was a shame', 'sarah could not come, which was a shame', 'sarah couldn\'t come which was a shame', 'sarah could not come which was a shame', 'sarah couldn\'t come, which was a pity', 'sarah couldn\'t come which was a pity'] },
      { t: 'listen', say: 'Helen has three brothers, all of whom are married', a: ['helen has three brothers, all of whom are married', 'helen has three brothers all of whom are married', 'helen has 3 brothers, all of whom are married', 'helen has 3 brothers all of whom are married'] }
    ],
    test: [
      { t: 'choice', q: 'I met a man ___ sister works with you.', o: ['who', 'whose', 'who\'s'], a: 1, why: 'Его сестра → whose + существительное.' },
      { t: 'choice', q: 'The city ___ we visited last summer was beautiful.', o: ['where', 'that', 'in which'], a: 1, why: 'visit что? it — не место «где», поэтому that (или ничего), а не where.' },
      { t: 'choice', q: 'Какое предложение правильное?', o: ['My dad, that is a doctor, works nights.', 'My dad, who is a doctor, works nights.', 'My dad who is a doctor works nights.'], a: 1, why: 'Папа один → добавка с запятыми и who, that нельзя.' },
      { t: 'gap', q: 'We stayed at the Grand Hotel, ___ a friend had recommended. (который)', a: ['which'], why: 'Добавка с запятой → which; убрать слово или поставить that нельзя.' },
      { t: 'choice', q: 'Kate showed me photos of her son, of ___ she\'s very proud.', o: ['who', 'whom', 'which'], a: 1, why: 'Предлог перед словом о человеке → whom.' },
      { t: 'choice', q: 'Какое предложение звучит естественно в разговоре?', o: ['The guy whom I was talking to', 'The guy I was talking to', 'The guy to who I was talking'], a: 1, why: 'В разговоре слово опускают, а предлог в конце; whom с предлогом в конце не используют.' },
      { t: 'gap', q: 'Ten people applied for the job, ___ of whom had any experience. (ни один)', a: ['none'], why: 'none of whom = ни один из которых.' },
      { t: 'choice', q: 'The patch fixed nothing, ___ was really annoying.', o: ['what', 'that', 'which'], a: 2, why: ', which относится ко всей фразе; what здесь невозможен.' },
      { t: 'gap', q: 'That\'s the day ___ we got married. (когда)', a: ['when', 'that'], why: 'После the day — when, that или ничего.' },
      { t: 'choice', q: 'Police ___ the crime are looking for two men.', o: ['investigating', 'investigated', 'who investigating'], a: 0, why: 'Полиция сама расследует → -ing clause без who is.' },
      { t: 'gap', q: 'The boy ___ in the accident is in hospital. (injure)', a: ['injured'], why: 'Мальчика травмировали — пассивный смысл → 3-я форма.' },
      { t: 'choice', q: 'There was a strange car ___ outside our house all night.', o: ['parking', 'parked', 'park'], a: 1, why: 'Машина припаркована (с ней это сделали) → there was + 3-я форма.' }
    ]
  }
);
