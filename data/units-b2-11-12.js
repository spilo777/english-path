// Юниты B2 11–12: фразовые глаголы 1 (in, out, on, off: порядок слов, трёхсловные, пассив, существительные, work out / turn out / get on / put off) и фразовые глаголы 2 (up, down, away, back: grow up / bring up / make up / put up with / let down / get away with) + итог B2 (шпаргалка по уровню, итоговый тест)
COURSE.units.push(
  // ───────────────────────────── UNIT B2-11 ─────────────────────────────
  {
    id: 'b2-11', level: 'B2', num: 11, track: 'main',
    books: { blue: [137, 138, 139, 140, 141] },
    title: 'Фразовые глаголы 1: in, out, on, off',
    summary: 'Разберёмся, как частицы in, out, on, off меняют смысл глагола, где ставить объект в длинных и трёхсловных фразовых глаголах, как они ведут себя в пассиве — и выучим десятки живых глаголов из игр, сериалов и чатов: work out, turn out, find out, call off, put off, get on with, show off, rip off.',
    grammar: [
      {
        title: '1. Главная идея: частица — это английская приставка',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-17): фразовый глагол — это глагол + частица (<b>give up, log in, turn it off, run out of</b>), и местоимение встаёт в середину. На B2 идём глубже: у частицы есть <b>свой смысл</b>, один глагол часто имеет <b>несколько значений</b>, бывают глаголы из <b>трёх слов</b>, они живут в <b>пассиве</b> и превращаются в <b>существительные</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p><b>Вы</b>яснить, кто это был.</p><p><b>Вы</b>числить сумму.</p><p><b>От</b>менить матч.</p><p><b>От</b>ложить релиз.</p><p><b>За</b>дремать на лекции.</p><p><b>Про</b>должать играть.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Find <b>out</b> who it was.</span></p><p><span class="say">Work <b>out</b> the total.</span></p><p><span class="say">Call <b>off</b> the match.</span></p><p><span class="say">Put <b>off</b> the release.</span></p><p><span class="say">Doze <b>off</b> in a lecture.</span></p><p><span class="say">Carry <b>on</b> playing.</span></p></div>
</div>
<div class="g-tip">Русская приставка меняет глагол так же, как английская частица: <i>ходить → выходить</i> = <i>go → go out</i>. Удобно держать в голове пары: <b>вы- ≈ out</b> (выйти, выяснить, выбросить, вычеркнуть), <b>от- ≈ off</b> (отменить, отложить, отъехать, отключиться), <b>про- / дальше ≈ on</b> (продолжать, проехать дальше).</div>
<p>Частица бывает двух видов:</p>
<table>
<tr><th>Что делает частица</th><th>Пример</th><th>Перевод</th></tr>
<tr><td><b>направление</b> — смысл угадывается</td><td><span class="say">The bus was full, so we couldn't get on.</span></td><td>…не смогли сесть</td></tr>
<tr><td><b>направление</b></td><td><span class="say">He jumped in the car and drove off.</span></td><td>…и уехал</td></tr>
<tr><td><b>новый смысл</b> — надо учить</td><td><span class="say">How did you get on at the interview?</span></td><td>Как прошло собеседование?</td></tr>
<tr><td><b>новый смысл</b></td><td><span class="say">My English is enough to get by.</span></td><td>…чтобы как-то справляться</td></tr>
</table>
<div class="g-tip">Главный список частиц: <b>in, out, on, off, up, down, away, back</b> + реже <b>by, through, about, along, over, forward, round</b>. В этом уроке — первые четыре, в следующем — остальные.</div>
<div class="mini" data-q="«Мы отменили стрим из-за шторма»:" data-o="We called out the stream.|We called off the stream.|We put on the stream." data-a="1" data-why="Отменить = call off (от- ≈ off)."></div>
<div class="mini" data-q="«Я так и не выяснил, кто это написал»:" data-o="I never found out who wrote it.|I never knew out who wrote it.|I never found who wrote it out." data-a="0" data-why="Выяснить = find out (вы- ≈ out); объект-придаточное идёт после частицы."></div>`
      },
      {
        title: '2. Грамматика: где объект, три слова, пассив',
        html: `
<div class="g-idea">Правило «it — в середину» вы знаете. Теперь — всё остальное: <b>длинный объект</b>, глаголы из <b>трёх слов</b> и <b>пассив</b>.</div>
<table>
<tr><th>Тип</th><th>Как</th><th>Пример</th></tr>
<tr><td>без объекта</td><td>просто глагол + частица</td><td><span class="say">The plane took off.</span></td></tr>
<tr><td>объект — слово</td><td>до или после частицы</td><td><span class="say">Turn on the light.</span> = <span class="say">Turn the light on.</span></td></tr>
<tr><td>объект — it / them / me</td><td>только в середину</td><td><span class="say">Turn it on.</span></td></tr>
<tr><td>объект длинный</td><td>лучше после частицы</td><td><span class="say">Turn off all the lights in the kitchen.</span></td></tr>
<tr><td>три слова</td><td>объект — в самом конце</td><td><span class="say">I can't get out of it.</span></td></tr>
</table>
<p><b>Три слова</b>: фразовый глагол + предлог. Разрывать нельзя, местоимение — в конец:</p>
<ul class="g-list">
<li><span class="say">I'm looking forward to the new season.</span> — Жду не дождусь нового сезона.</li>
<li><span class="say">Slow down! I can't keep up with you.</span> — Я за тобой не успеваю.</li>
<li><span class="say">Why did you run away from me?</span> — Почему ты от меня убежал?</li>
<li><span class="say">I promised to help. I can't get out of it now.</span> — Теперь не отверчусь.</li>
<li><span class="say">We've run out of potions.</span> — У нас кончились зелья.</li>
<li><span class="say">She dropped out of university after a year.</span> — Она бросила университет через год.</li>
</ul>
<div class="g-tip">После <b>look forward to</b> — существительное или <b>-ing</b> (урок b2-3): <span class="say">I'm looking forward to seeing you.</span> Здесь to — предлог, а не часть инфинитива.</div>
<p><b>Пассив</b>: частица остаётся на месте, сразу после причастия.</p>
<ul class="g-list">
<li><span class="say">The final was called off because of the storm.</span> — Финал отменили.</li>
<li><span class="say">The experiment was carried out in 2024.</span> — Эксперимент провели в 2024.</li>
<li><span class="say">He said he was a bank manager, and I was completely taken in.</span> — Я полностью повёлся.</li>
<li><span class="say">Fifty euros for a cable? You got ripped off.</span> — Тебя развели.</li>
</ul>
<div class="g-bad">The match was called because of the rain. · I can't get out it. · I'm looking forward to see you.</div>
<div class="g-good">The match was called <b>off</b>. · I can't get <b>out of</b> it. · I'm looking forward to <b>seeing</b> you.</div>
<div class="mini" data-q="The tournament ___ because half the players were ill." data-o="was put off|was put it off|put off was" data-a="0" data-why="Пассив: was + put + off — частица сразу после причастия."></div>
<div class="mini" data-q="I didn't want to go, but I couldn't ___." data-o="get out it|get it out of|get out of it" data-a="2" data-why="Три слова (get out of) не разрываем, местоимение — в конце."></div>`
      },
      {
        title: '3. IN и OUT: внутрь, наружу — и не только',
        html: `
<div class="g-idea"><b>in</b> — внутрь (в комнату, машину, систему), <b>out</b> — наружу. Без объекта говорим <b>in / out</b>, с местом — <b>into / out of</b>.</div>
<table>
<tr><th>in</th><th>out</th><th>Смысл</th></tr>
<tr><td><span class="say">get in</span></td><td><span class="say">get out</span></td><td>сесть в / выйти из (машины)</td></tr>
<tr><td><span class="say">move in</span></td><td><span class="say">move out</span></td><td>въехать / съехать (с квартиры)</td></tr>
<tr><td><span class="say">check in</span></td><td><span class="say">check out</span></td><td>заселиться, зарегистрироваться / выписаться</td></tr>
<tr><td><span class="say">let somebody in</span></td><td><span class="say">let somebody out</span></td><td>впустить / выпустить</td></tr>
<tr><td><span class="say">break in</span></td><td>—</td><td>вломиться</td></tr>
<tr><td>—</td><td><span class="say">be locked out</span></td><td>не попасть домой (ключи внутри)</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I'm moving in on Friday.</span> = <span class="say">I'm moving into my new flat on Friday.</span></li>
<li><span class="say">She climbed out.</span> = <span class="say">She climbed out of the pool.</span></li>
<li><span class="say">I left my keys inside and got locked out.</span> — Ключи остались внутри, я не мог попасть домой.</li>
</ul>
<p>Другие глаголы с <b>in</b> — смысл уже не просто «внутрь»:</p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>fill in / fill out</b></td><td>заполнить (форму)</td><td><span class="say">Fill in the form and send it to HR.</span></td></tr>
<tr><td><b>drop in (on sb)</b></td><td>заскочить без договорённости</td><td><span class="say">Drop in if you're in the area.</span></td></tr>
<tr><td><b>join in</b></td><td>подключиться к тому, что уже идёт</td><td><span class="say">They were playing cards, so I joined in.</span></td></tr>
<tr><td><b>take sb in</b></td><td>обмануть, провести</td><td><span class="say">Don't be taken in by fake giveaways.</span></td></tr>
<tr><td><b>plug in</b></td><td>включить в розетку</td><td><span class="say">Is the router plugged in?</span></td></tr>
<tr><td><b>hand in</b></td><td>сдать (работу)</td><td><span class="say">Hand in your designs by Friday.</span></td></tr>
<tr><td><b>give in</b></td><td>уступить, сдаться</td><td><span class="say">He kept asking, and in the end I gave in.</span></td></tr>
</table>
<p>Другие глаголы с <b>out</b>:</p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>eat out</b></td><td>поесть в кафе, не дома</td><td><span class="say">Let's eat out tonight.</span></td></tr>
<tr><td><b>drop out (of)</b></td><td>бросить (учёбу, гонку), выбыть</td><td><span class="say">Two teams dropped out of the tournament.</span></td></tr>
<tr><td><b>get out of</b> sth</td><td>отвертеться от обещанного</td><td><span class="say">How did you get out of the meeting?</span></td></tr>
<tr><td><b>leave out</b></td><td>пропустить, не включить</td><td><span class="say">You left out my name. I feel left out.</span></td></tr>
<tr><td><b>cross out</b></td><td>вычеркнуть</td><td><span class="say">Cross out the names of people who can't come.</span></td></tr>
</table>
<div class="g-bad">I moved in my new flat. · I'll drop in you tomorrow.</div>
<div class="g-good">I moved <b>into</b> my new flat. · I'll drop in <b>on</b> you tomorrow. / I'll drop in <b>to see</b> you.</div>
<div class="g-tip"><b>feel left out</b> — «чувствовать себя лишним, будто тебя не позвали»: <span class="say">Everyone had a team except me. I felt left out.</span></div>
<div class="mini" data-q="The keys were inside, the door was shut — I was ___." data-o="locked in|locked out|checked out" data-a="1" data-why="Остался снаружи и не можешь войти = locked out."></div>
<div class="mini" data-q="The guy said he was from tech support, and I was completely ___." data-o="taken in|filled in|dropped in" data-a="0" data-why="Обманули, провели = take somebody in; в пассиве be taken in."></div>`
      },
      {
        title: '4. OUT глубже: work out, turn out, find out, sort out',
        html: `
<div class="g-idea"><b>out</b> часто значит «до результата»: выяснить, вычислить, разобраться, довести до конца. А ещё — «погаснуть, исчезнуть».</div>
<p><b>out = погасить, погаснуть:</b> <span class="say">All the lights went out.</span> — Погас весь свет. · <span class="say">Put out the fire!</span> — Потуши огонь! · <span class="say">Turn the lights out.</span> · <span class="say">Blow out the candles.</span> — Задуй свечи.</p>
<p><b>work out</b> — один глагол, пять значений:</p>
<table>
<tr><th>Значение</th><th>Пример</th></tr>
<tr><td>тренироваться</td><td><span class="say">I work out three times a week.</span> <span class="muted">(a workout — тренировка)</span></td></tr>
<tr><td>сложиться (хорошо)</td><td><span class="say">I hope everything works out for you.</span></td></tr>
<tr><td>не сложилось</td><td><span class="say">We tried working together, but it didn't work out.</span></td></tr>
<tr><td>получается (по деньгам)</td><td><span class="say">Ninety euros for three — that works out at thirty each.</span></td></tr>
<tr><td>вычислить; разобраться</td><td><span class="say">I can't work out why the build crashes.</span> = <span class="say">I can't figure out why…</span></td></tr>
</table>
<p>Другие важные глаголы с <b>out</b>:</p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>find out</b> (that / what / about)</td><td>узнать, выяснить</td><td><span class="say">I just found out that the game is free this week.</span></td></tr>
<tr><td><b>turn out</b> (to be / that)</td><td>оказаться (в итоге)</td><td><span class="say">The new guy turned out to be really funny.</span></td></tr>
<tr><td><b>carry out</b></td><td>провести, выполнить (план, опрос)</td><td><span class="say">We carried out a survey of 500 players.</span></td></tr>
<tr><td><b>point out</b> (to sb)</td><td>указать, обратить внимание</td><td><span class="say">Thanks for pointing out the typo.</span></td></tr>
<tr><td><b>sort out</b></td><td>уладить; разобрать</td><td><span class="say">Don't worry, I'll sort it out.</span></td></tr>
<tr><td><b>give out / hand out</b></td><td>раздать каждому</td><td><span class="say">They handed out free keys at the expo.</span></td></tr>
<tr><td><b>run out (of)</b></td><td>кончиться</td><td><span class="say">We ran out of time.</span> · <span class="say">Time ran out.</span></td></tr>
<tr><td><b>try out</b></td><td>опробовать</td><td><span class="say">We're trying out a new design tool.</span></td></tr>
</table>
<p><b>turn out</b> — три конструкции:</p>
<ul class="g-list">
<li><span class="say">He turned out to be right.</span> — Он оказался прав.</li>
<li><span class="say">It turned out that they had never met.</span> — Оказалось, что они никогда не встречались.</li>
<li><span class="say">The morning was grey, but the day turned out nice.</span> — День в итоге выдался хорошим.</li>
</ul>
<div class="g-bad">I knew about it only yesterday. <span class="muted">— «узнал вчера»</span> · It was turned out that he lied.</div>
<div class="g-good">I <b>found out</b> about it only yesterday. · It <b>turned out</b> that he had lied.</div>
<div class="g-tip">Русское «узнать» — два английских глагола: <b>know</b> — знать (состояние), <b>find out</b> — узнать (момент, когда информация пришла). «Я узнал вчера» — всегда <b>found out</b>.</div>
<div class="mini" data-q="Four of us, 80 euros in total. That ___ at 20 each." data-o="turns out|works out|finds out" data-a="1" data-why="Результат подсчёта (по деньгам) = work out at."></div>
<div class="mini" data-q="Everyone laughed at his theory, but it ___ right." data-o="turned out to be|turned out being|was turned out" data-a="0" data-why="Оказаться кем-то / каким-то = turn out to be."></div>`
      },
      {
        title: '5. ON и OFF (1): техника, события, одежда, «прочь»',
        html: `
<div class="g-idea"><b>on / off</b> — включено / выключено, идёт / отменено, на себе / снято. А <b>off</b> ещё значит «прочь, в путь».</div>
<p><b>Техника:</b> <span class="say">Is the heating on?</span> — Отопление включено? · <span class="say">Leave the lights on.</span> — Оставь свет включённым. · <span class="say">Let's put some music on.</span> · <span class="say">I'll put the kettle on.</span> — Поставлю чайник.</p>
<p><b>События:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>go on</b></td><td>происходить</td><td><span class="say">What's going on here?</span></td></tr>
<tr><td><b>be on</b></td><td>идти (в кино, по ТВ), состояться</td><td><span class="say">Is the match still on?</span></td></tr>
<tr><td><b>call off</b></td><td>отменить</td><td><span class="say">They called off the concert.</span></td></tr>
<tr><td><b>put off</b> (+ -ing)</td><td>отложить</td><td><span class="say">Stop putting off calling the client.</span></td></tr>
</table>
<p><b>Одежда и тело:</b> <span class="say">put on</span> (надеть; <b>put on weight</b> — набрать вес), <span class="say">try on</span> (примерить), <span class="say">take off</span> (снять).</p>
<ul class="g-list">
<li><span class="say">I've put on three kilos since the release.</span> — Я набрал три кило после релиза.</li>
<li><span class="say">Take off your shoes, please.</span> — Разуйтесь, пожалуйста.</li>
</ul>
<p><b>off = прочь, в путь:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>set off</b></td><td>отправиться в путь</td><td><span class="say">We set off at dawn.</span></td></tr>
<tr><td><b>take off</b></td><td>взлететь; резко стать популярным</td><td><span class="say">The game took off on TikTok.</span></td></tr>
<tr><td><b>see sb off</b></td><td>проводить (на вокзал)</td><td><span class="say">We went to the airport to see her off.</span></td></tr>
<tr><td><b>be off</b> (to)</td><td>уходить, уезжать</td><td><span class="say">I'm off to Berlin tomorrow.</span> · <span class="say">I'm off.</span> — Я пошёл.</td></tr>
<tr><td><b>drive / run / ride off</b></td><td>уехать / убежать / укатить</td><td><span class="say">She jumped on her bike and rode off.</span></td></tr>
</table>
<div class="g-bad">What is going? · I'm wearing my coat — выхожу через минуту. · We put off to decide.</div>
<div class="g-good">What's going <b>on</b>? · I'm <b>putting on</b> my coat. · We put off <b>deciding</b>.</div>
<div class="g-tip"><b>put on</b> — действие (надеть), <b>wear</b> — состояние (быть одетым). «Она надевает куртку» — putting on; «Она в куртке» — wearing.</div>
<div class="mini" data-q="The festival was ___ because of the storm warning." data-o="called off|set off|put on" data-a="0" data-why="Отменить = call off; пассив: was called off."></div>
<div class="mini" data-q="We can't keep putting off ___ a decision." data-o="make|to make|making" data-a="2" data-why="put off + -ing: откладывать что-то делать."></div>`
      },
      {
        title: '6. ON и OFF (2): продолжать, ладить, задремать, развести',
        html: `
<div class="g-idea"><b>on</b> часто значит «дальше, продолжать». У <b>off</b> — пучок значений: задремать, сработать, выпендриваться, отругать, доделать, развести на деньги, отбить охоту.</div>
<p><b>on = продолжать</b> (go on / carry on / keep on doing вы видели в B1):</p>
<ul class="g-list">
<li><span class="say">The party went on until four.</span> — Вечеринка продолжалась до четырёх.</li>
<li><span class="say">Please carry on with what you're doing.</span> — Продолжайте, я не мешаю.</li>
<li><span class="say">He keeps on sending me memes at 3 a.m.</span> — Он всё время шлёт мне мемы в три ночи. <span class="muted">(раздражает)</span></li>
<li><span class="say">Don't stop here — let's drive on to the next town.</span> — Поехали дальше.</li>
</ul>
<p><b>get on</b> — три смысла:</p>
<table>
<tr><th>Конструкция</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>get on</b></td><td>как успехи</td><td><span class="say">How are you getting on in your new job?</span></td></tr>
<tr><td><b>get on (well) with sb</b></td><td>ладить</td><td><span class="say">I get on really well with my team.</span></td></tr>
<tr><td><b>get on with sth</b></td><td>заняться делом, продолжить</td><td><span class="say">Right, I must get on with my work.</span></td></tr>
</table>
<p><b>off</b> — учим по одному:</p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>doze / drop / nod off</b></td><td>задремать</td><td><span class="say">I dozed off during the lecture.</span></td></tr>
<tr><td><b>go off</b></td><td>сработать (будильник); испортиться (еда)</td><td><span class="say">My alarm didn't go off.</span> · <span class="say">The milk has gone off.</span></td></tr>
<tr><td><b>show off</b></td><td>выпендриваться, хвастаться</td><td><span class="say">He's just showing off his new skin.</span></td></tr>
<tr><td><b>tell sb off</b></td><td>отругать</td><td><span class="say">My boss told me off for missing the deadline.</span></td></tr>
<tr><td><b>finish off</b></td><td>доделать; добить</td><td><span class="say">I'll finish it off tomorrow.</span> · <span class="say">Finish him off!</span></td></tr>
<tr><td><b>rip sb off</b></td><td>обдирать, развести на деньги</td><td><span class="say">Forty euros for that? You were ripped off.</span></td></tr>
<tr><td><b>put sb off</b> (sth / doing)</td><td>отбить охоту</td><td><span class="say">The long queue put us off.</span></td></tr>
</table>
<div class="g-tip"><b>put off</b> — два разных смысла: «отложить» (<span class="say">We put off the meeting.</span>) и «отбить желание» (<span class="say">What put you off applying?</span> — Что тебя отпугнуло от заявки?). Если объект — человек, почти всегда второе.</div>
<div class="g-bad">I get on with my brother good. · He keeps on to call me. · Carry on to work.</div>
<div class="g-good">I get on <b>well</b> with my brother. · He keeps (on) <b>calling</b> me. · Carry on <b>working</b>. / Carry on <b>with</b> your work.</div>
<div class="mini" data-q="Tanya and her sister don't ___. They argue all the time." data-o="get on|go on|carry on" data-a="0" data-why="Ладить = get on (with somebody)."></div>
<div class="mini" data-q="The reviews were so bad that they ___ me ___ buying the game." data-o="put … off|called … off|set … off" data-a="0" data-why="Отбить охоту = put somebody off (doing) something."></div>`
      },
      {
        title: '7. Большая таблица: in, out, on, off в играх, сериалах и чатах',
        html: `
<div class="g-idea">Эти глаголы вы будете слышать каждый день — в войс-чате, в комментариях, в сериалах. Смысл многих уже угадывается по частице.</div>
<p><b>Игры и стримы</b></p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>log on / log off</b></td><td>зайти / выйти из сети</td><td><span class="say">I'll log on after dinner.</span></td></tr>
<tr><td><b>hop on / jump in</b></td><td>быстро зайти (в игру, созвон)</td><td><span class="say">Hop on Discord, we're starting.</span></td></tr>
<tr><td><b>take out</b></td><td>убрать, уничтожить (врага)</td><td><span class="say">Take out the sniper first.</span></td></tr>
<tr><td><b>wipe out</b></td><td>уничтожить всех</td><td><span class="say">Our whole squad got wiped out.</span></td></tr>
<tr><td><b>knock out</b></td><td>вырубить, выбить из турнира</td><td><span class="say">We got knocked out in the semi-final.</span></td></tr>
<tr><td><b>hold off / fight off</b></td><td>сдерживать / отбиться</td><td><span class="say">Hold them off for ten seconds!</span></td></tr>
<tr><td><b>pull off</b></td><td>провернуть (сложное)</td><td><span class="say">I can't believe we pulled that off!</span></td></tr>
<tr><td><b>back off</b></td><td>отступить, отстать</td><td><span class="say">Back off, they have a tank!</span></td></tr>
<tr><td><b>kick off</b></td><td>начаться (матч, турнир)</td><td><span class="say">The finals kick off at eight.</span></td></tr>
<tr><td><b>cash out</b></td><td>вывести деньги / забрать выигрыш</td><td><span class="say">I cashed out before the crash.</span></td></tr>
</table>
<p><b>Сериалы и кино</b></p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>come out</b></td><td>выйти (о фильме, игре)</td><td><span class="say">The new season comes out in May.</span></td></tr>
<tr><td><b>drag on</b></td><td>затягиваться</td><td><span class="say">The middle of the season really drags on.</span></td></tr>
<tr><td><b>kill off</b></td><td>убить персонажа (о сценаристах)</td><td><span class="say">They killed off my favourite character!</span></td></tr>
<tr><td><b>write out</b></td><td>вывести из сериала</td><td><span class="say">The actor left, so they wrote him out.</span></td></tr>
<tr><td><b>catch on</b></td><td>стать популярным</td><td><span class="say">The show didn't catch on in Europe.</span></td></tr>
<tr><td><b>tune in</b></td><td>включить, смотреть трансляцию</td><td><span class="say">Tune in on Friday for the finale.</span></td></tr>
<tr><td><b>zone out</b></td><td>отключиться, «выпасть»</td><td><span class="say">Sorry, I zoned out. Who's that guy?</span></td></tr>
<tr><td><b>sell out</b></td><td>распродать; продаться (о человеке)</td><td><span class="say">The tickets sold out in an hour.</span></td></tr>
</table>
<p><b>Чаты и разговор</b></p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>check out</b></td><td>зацени, посмотри</td><td><span class="say">Check out this clip!</span></td></tr>
<tr><td><b>hang out</b></td><td>тусоваться</td><td><span class="say">Wanna hang out this weekend?</span></td></tr>
<tr><td><b>chill out</b></td><td>расслабься, успокойся</td><td><span class="say">Chill out, it's just a game.</span></td></tr>
<tr><td><b>freak out</b></td><td>запаниковать, психануть</td><td><span class="say">Don't freak out, but I deleted the file.</span></td></tr>
<tr><td><b>count me in / out</b></td><td>я в деле / я пас</td><td><span class="say">Pizza and a movie? Count me in!</span></td></tr>
<tr><td><b>back out (of)</b></td><td>отказаться от обещанного</td><td><span class="say">Two players backed out at the last minute.</span></td></tr>
<tr><td><b>reach out (to)</b></td><td>связаться, написать</td><td><span class="say">Feel free to reach out if you have questions.</span></td></tr>
<tr><td><b>call out</b></td><td>публично указать на ошибку</td><td><span class="say">He got called out for cheating.</span></td></tr>
<tr><td><b>stand out</b></td><td>выделяться</td><td><span class="say">Your portfolio really stands out.</span></td></tr>
</table>
<p><b>Существительные из фразовых глаголов</b> — пишутся слитно или через дефис, ударение на первую часть:</p>
<table>
<tr><th>Глагол</th><th>Существительное</th><th>Пример</th></tr>
<tr><td>work out</td><td><b>a workout</b> — тренировка</td><td><span class="say">a quick morning workout</span></td></tr>
<tr><td>rip off</td><td><b>a rip-off</b> — развод, обдираловка</td><td><span class="say">This DLC is a total rip-off.</span></td></tr>
<tr><td>show off</td><td><b>a show-off</b> — хвастун</td><td><span class="say">Don't be such a show-off.</span></td></tr>
<tr><td>spin off</td><td><b>a spin-off</b> — спин-офф</td><td><span class="say">a spin-off about the villain</span></td></tr>
<tr><td>check in / out</td><td><b>check-in / checkout</b></td><td><span class="say">Checkout is at noon.</span></td></tr>
<tr><td>turn out</td><td><b>a turnout</b> — явка</td><td><span class="say">a great turnout for the meetup</span></td></tr>
<tr><td>drop out</td><td><b>a dropout</b> — недоучка, бросивший</td><td><span class="say">a college dropout</span></td></tr>
<tr><td>burn out</td><td><b>burnout</b> — выгорание</td><td><span class="say">Designers often suffer from burnout.</span></td></tr>
<tr><td>shout out</td><td><b>a shout-out</b> — привет в эфире</td><td><span class="say">Shout-out to everyone in the chat!</span></td></tr>
<tr><td>knock out</td><td><b>a knockout</b> — нокаут; отпад</td><td><span class="say">a knockout stage</span></td></tr>
</table>
<div class="g-tip">Слушайте ударение: глагол — ударная <b>частица</b> (to work <b>OUT</b>), существительное — ударное <b>первое слово</b> (a <b>WORK</b>out). Так же: to rip <b>OFF</b> — a <b>RIP</b>-off.</div>
<div class="mini" data-q="Sorry, I can't make it tonight. Count me ___." data-o="in|out|off" data-a="1" data-why="«Я пас» = count me out; count me in — «я в деле»."></div>
<div class="mini" data-q="The new expansion ___ next Thursday." data-o="comes out|comes off|goes out" data-a="0" data-why="Выходить (о фильме, игре, альбоме) = come out."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Your music is too loud. Turn off it.</div><div class="g-good">Turn <b>it off</b>.</div>
<div class="g-bad">I knew about the sale only yesterday.</div><div class="g-good">I <b>found out</b> about the sale only yesterday.</div>
<div class="g-bad">It was turned out that the file was empty.</div><div class="g-good">It <b>turned out</b> that the file was empty.</div>
<div class="g-bad">I moved in my new flat last week.</div><div class="g-good">I moved <b>into</b> my new flat last week.</div>
<div class="g-bad">The concert was called because of the rain.</div><div class="g-good">The concert was called <b>off</b> because of the rain.</div>
<div class="g-bad">We postponed to decide. / We put off to decide.</div><div class="g-good">We put off <b>deciding</b>.</div>
<div class="g-bad">What is going here?</div><div class="g-good">What's going <b>on</b> here?</div>
<div class="g-bad">I get on with my boss good.</div><div class="g-good">I get on <b>well</b> with my boss.</div>
<div class="g-bad">I'm looking forward to play the new season.</div><div class="g-good">I'm looking forward to <b>playing</b> the new season.</div>
<div class="g-bad">We've run out coffee.</div><div class="g-good">We've run out <b>of</b> coffee.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Частица ≈ приставка: <b>out</b> — наружу и до результата (find out, work out, turn out, sort out), <b>in</b> — внутрь (move in, fill in, join in), <b>on</b> — включено и дальше (go on, carry on, get on with), <b>off</b> — прочь, отмена и отключение (set off, call off, put off, doze off); <b>it</b> — в середину, три слова — не разрываем, в пассиве частица остаётся: <b>was called off</b>.</div>`
      }
    ],
    words: [
      ["find out — found out", "узнать, выяснить", "I found out about it only yesterday.", "Я узнал об этом только вчера."],
      ["work out", "тренироваться; получиться; вычислить", "I can't work out what went wrong.", "Не могу понять, что пошло не так."],
      ["turn out (to be)", "оказаться", "The quiet guy turned out to be the best player.", "Тихий парень оказался лучшим игроком."],
      ["figure out", "разобраться, понять", "I finally figured out the puzzle.", "Я наконец разобрался с головоломкой."],
      ["carry out", "провести, выполнить", "We carried out a survey of our players.", "Мы провели опрос наших игроков."],
      ["point out", "указать, обратить внимание", "She pointed out a mistake in my layout.", "Она указала на ошибку в моём макете."],
      ["sort out", "уладить, разобраться", "Don't worry, we'll sort it out.", "Не волнуйся, мы это уладим."],
      ["run out of — ran out of", "закончиться (у кого-то)", "We ran out of time in the last round.", "В последнем раунде у нас кончилось время."],
      ["try out", "опробовать", "I want to try out the new build.", "Хочу опробовать новую сборку."],
      ["check out", "зацени; выписаться (из отеля)", "Check out this trailer!", "Зацени этот трейлер!"],
      ["leave out — left out", "пропустить, не включить", "You left out my name!", "Ты пропустил моё имя!"],
      ["drop out (of)", "бросить (учёбу), выбыть", "He dropped out of the tournament.", "Он выбыл из турнира."],
      ["get out of", "отвертеться, избежать", "I can't get out of the meeting.", "Я не могу отвертеться от встречи."],
      ["fill in / fill out", "заполнить (форму)", "Please fill in this form.", "Пожалуйста, заполните эту форму."],
      ["drop in (on)", "заскочить, заглянуть", "Drop in if you're nearby.", "Заскакивай, если будешь рядом."],
      ["join in", "присоединиться (к тому, что идёт)", "Everyone was singing, so I joined in.", "Все пели, и я присоединился."],
      ["plug in", "включить в розетку", "Is your charger plugged in?", "Твоя зарядка включена в розетку?"],
      ["go on", "происходить; продолжаться", "What's going on here?", "Что здесь происходит?"],
      ["carry on (with)", "продолжать", "Carry on, I'm just listening.", "Продолжайте, я просто слушаю."],
      ["get on (with)", "ладить; заниматься делом", "I get on well with my flatmate.", "Я хорошо лажу с соседом по квартире."],
      ["call off", "отменить", "The final was called off.", "Финал отменили."],
      ["put off", "отложить; отбить охоту", "Stop putting off the difficult tasks.", "Хватит откладывать сложные задачи."],
      ["set off — set off", "отправиться в путь", "We set off before sunrise.", "Мы отправились в путь до рассвета."],
      ["take off — took off", "взлететь; снять; резко стать популярным", "The game took off after one viral video.", "Игра взлетела после одного вирусного ролика."],
      ["see somebody off", "проводить", "My parents saw me off at the station.", "Родители проводили меня на вокзале."],
      ["put on weight", "набрать вес", "I put on two kilos over the holidays.", "Я набрал два кило за праздники."],
      ["doze off", "задремать", "I dozed off in the middle of the episode.", "Я задремал посреди серии."],
      ["go off — went off", "сработать (будильник); испортиться", "My alarm went off at six.", "Мой будильник зазвонил в шесть."],
      ["show off", "выпендриваться, хвастаться", "Stop showing off your new keyboard!", "Хватит хвастаться новой клавиатурой!"],
      ["tell somebody off — told off", "отругать", "The coach told us off for being late.", "Тренер отругал нас за опоздание."],
      ["rip somebody off", "обдирать, развести на деньги", "That shop rips tourists off.", "Этот магазин обдирает туристов."]
    ],
    texts: [
      {
        id: 't-b2-11-1', title: 'Launch night', level: 'B2',
        text: `Last Friday our studio launched its first online game, Night Harbour. I'm the UI designer on the team, and I want to describe what happened while I still remember every detail.

We had planned everything carefully. The servers were ready, the trailer was out, and more than twenty thousand people had signed up for launch night. At seven o'clock the whole team gathered at the office. Somebody put some music on, somebody else put the kettle on, and our producer, Vera, handed out pizza and energy drinks. The launch was at nine.

At half past eight the lights in the office suddenly went out. For a moment nobody said anything. Then our lead programmer, Kostya, started to freak out. It turned out that a cleaner had plugged in a huge heater in the corridor and the whole floor had lost power. Our servers were in a data centre, so the game itself was fine, but we couldn't log on to anything. Someone pointed out that we could still work from our phones, so we carried on like that for twenty minutes until the power came back on.

At nine the game went live. Within ten minutes, thirty thousand players had logged on — far more than we had expected. The login queue got longer and longer, and players started to complain in the chat. Some of them logged off and left angry reviews; one even called the game a total rip-off, although it's free. Kostya and I spent the next hour trying to work out what was going on. In the end we found out that one small setting was wrong. We sorted it out at about eleven, and the queue disappeared.

The funniest moment came at midnight. A famous streamer, who had promised to try the game out live, dozed off in the middle of his stream. His chat went crazy, and when he finally opened his eyes, he just went on playing as if nothing had happened. The clip got two million views, and suddenly everyone wanted to check our game out.

We didn't set off home until three in the morning. Nothing had been called off, nothing had been put off, and the game was working. Looking at the numbers on Saturday, I realised that the night had turned out much better than we had feared. Now I just have to get on with fixing the menus — the players have already pointed out six problems.`,
        questions: [
          { q: 'Why did the lights in the office go out?', o: ['The servers crashed', 'A cleaner plugged in a huge heater', 'Kostya turned them off'], a: 1 },
          { q: 'What caused the long login queue?', o: ['One wrong setting', 'A streamer', 'Too few servers in the data centre'], a: 0 },
          { q: 'What happened to the famous streamer?', o: ['He called off his stream', 'He fell asleep during his stream', 'He left an angry review'], a: 1 }
        ]
      },
      {
        id: 't-b2-11-2', title: 'Is the raid still on?', level: 'B2',
        text: `Max: Hey, is the raid still on for tonight? Lena said something about calling it off.
Lena: It's not called off, just put off. Den can't log on until ten.
Den: Sorry, guys. My boss told me off this morning, so I have to finish off a report first.
Max: Ouch. What happened?
Den: Long story. I left out half the data in a presentation, and nobody pointed it out until the client meeting. It turned out really badly.
Lena: That's awful. But don't freak out — everybody messes up sometimes.
Den: Thanks. Anyway, count me in for ten. Do we have enough potions? Last week we ran out of them in the middle of the boss fight.
Max: I bought fifty yesterday. And I tried out the new healer build. It works out really well — much better than the old one.
Lena: Great. Hey, do you remember that guy from the guild who kept on showing off his gold armour?
Max: Tarkan? What about him?
Lena: He's dropped out. He said our guild was too slow for him, and he's joined some pro team.
Den: Good. He never got on with anybody anyway. He just kept on telling people off in voice chat.
Max: True. Oh, and Lena, did you find out why the game kept crashing on your laptop?
Lena: Yes, I worked it out myself. The laptop wasn't plugged in, so it was running on battery, and the graphics card kept switching off.
Max: Ha! Classic. What about the new expansion? Has it come out yet?
Lena: It comes out next Thursday. I've already checked out the trailer. It looks amazing, but it costs forty euros, which is a bit of a rip-off.
Den: Forty? That puts me off a bit. I'll wait for a sale.
Max: Me too. I got ripped off last year with the deluxe edition, and I'm not doing that again.
Lena: OK, so ten o'clock. Den, don't doze off before then!
Den: No promises. If I'm not on at ten, go on without me and I'll join in later.
Max: Fine, but don't try to get out of it like last time. You said your internet had gone off, and then we saw you online in another game.
Den: That was one time!
Lena: Right, everyone, stop chatting. Den, get on with your report.
Den: Yes, boss. Logging off.`,
        questions: [
          { q: 'Why is the raid put off?', o: ['Max is ill', 'Den can\'t log on until ten', 'The new expansion comes out tonight'], a: 1 },
          { q: 'What has Tarkan done?', o: ['He has dropped out of the guild', 'He has bought fifty potions', 'He has become the guild leader'], a: 0 },
          { q: 'Why did the game keep crashing on Lena\'s laptop?', o: ['The laptop was too old', 'The laptop wasn\'t plugged in', 'The game was a rip-off'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "The concert was ___ because of the storm.", o: ["called off", "put on", "set off"], a: 0, why: "Отменить = call off; в пассиве частица остаётся после причастия: was called off." },
      { t: 'choice', q: "My laptop died because I forgot to ___.", o: ["plug it in", "plug in it", "plug it out"], a: 0, why: "Включить в розетку = plug in; местоимение it — в середину." },
      { t: 'choice', q: "Nobody told me about the update. I only ___ about it last night.", o: ["knew", "found out", "worked out"], a: 1, why: "Момент, когда узнал новость, = find out; know — просто знать." },
      { t: 'choice', q: "She tried freelancing, but it didn't ___, so she went back to the studio.", o: ["work out", "turn out", "carry out"], a: 0, why: "«Не сложилось» = didn't work out." },
      { t: 'choice', q: "Everyone thought Sam was lying, but he ___ to be right.", o: ["found out", "turned out", "worked out"], a: 1, why: "Оказаться (в итоге) = turn out to be." },
      { t: 'choice', q: "My brother and I don't really ___. We argue about everything.", o: ["get on", "go on", "carry on"], a: 0, why: "Ладить = get on (with somebody)." },
      { t: 'choice', q: "Stop ___ — nobody cares about your new skin!", o: ["showing off", "telling off", "putting off"], a: 0, why: "Хвастаться, выпендриваться = show off." },
      { t: 'choice', q: "They were playing a board game, so I ___.", o: ["joined in", "dropped in", "filled in"], a: 0, why: "Присоединиться к тому, что уже идёт, = join in." },
      { t: 'gap', q: "What's all that noise? What's ___? (go)", a: ["going on"], why: "Происходить = go on; вопрос в Continuous: What's going on?" },
      { t: 'gap', q: "Yesterday we ___ at five to avoid the traffic. (set)", a: ["set off"], why: "Отправиться в путь = set off; set — неправильный: set – set – set." },
      { t: 'gap', q: "Sixty euros for a phone case? I think I ___. (rip, пассив, прошлое)", a: ["was ripped off", "got ripped off"], why: "Пассив фразового глагола: was / got + ripped off." },
      { t: 'gap', q: "Please ___ the application form and send it to us. (fill)", a: ["fill in", "fill out"], why: "Заполнить форму = fill in или fill out." },
      { t: 'gap', q: "I promised to help them move, and now I can't ___ it. (get)", a: ["get out of"], why: "Отвертеться от чего-то = get out of + something; три слова не разрываем." },
      { t: 'gap', q: "Our plane ___ two hours late yesterday. (take)", a: ["took off"], why: "Взлетать = take off; take — неправильный: took." },
      { t: 'order', a: 'I dozed off during the meeting', ru: 'Я задремал во время встречи' },
      { t: 'order', a: 'Thanks for pointing it out to me', ru: 'Спасибо, что указал мне на это' },
      { t: 'tr', q: 'Мы отложили релиз до марта.', a: ["we put off the release until march", "we put the release off until march", "we put off the release till march", "we put the release off till march", "we postponed the release until march", "we postponed the release till march"] },
      { t: 'tr', q: 'Они не ладят друг с другом.', a: ["they don't get on with each other", "they do not get on with each other", "they don't get along with each other", "they do not get along with each other", "they don't get on", "they do not get on", "they don't get along", "they do not get along"] },
      { t: 'listen', say: 'Count me in', a: ['count me in'] },
      { t: 'listen', say: 'It turned out to be a bug', a: ['it turned out to be a bug'] }
    ],
    test: [
      { t: 'choice', q: "I'm really looking forward ___ the new season.", o: ["to", "for", "at"], a: 0, why: "Три слова: look forward to + существительное / -ing." },
      { t: 'choice', q: "These boots are too tight. I'm going to ___.", o: ["take off them", "take them off", "take them out"], a: 1, why: "Снять обувь = take off; them — в середину." },
      { t: 'gap', q: "An investigation into the crash will be ___ next month. (carry)", a: ["carried out"], why: "Провести расследование = carry out; в пассиве: will be carried out." },
      { t: 'choice', q: "Which sentence is correct?", o: ["I moved in my new flat on Monday.", "I moved into my new flat on Monday.", "I moved into on Monday."], a: 1, why: "С местом — into: move into a flat; без места — просто move in." },
      { t: 'choice', q: "He tried to ___ the exam by saying he was ill.", o: ["get out of", "drop out of", "leave out"], a: 0, why: "Отвертеться, избежать обещанного = get out of." },
      { t: 'gap', q: "I can't do 17 × 23 in my head. Can you ___? (work / it)", a: ["work it out"], why: "Вычислить = work out; местоимение it — в середину." },
      { t: 'choice', q: "Sorry I'm late — my alarm didn't ___.", o: ["go off", "go on", "set off"], a: 0, why: "Сработать, зазвонить (будильник) = go off." },
      { t: 'choice', q: "Enough chatting — let's ___ our work.", o: ["get on with", "get on", "go on to"], a: 0, why: "Заняться делом, продолжить = get on with + something." },
      { t: 'gap', q: "Our teacher ___ for being late yesterday. (tell / us)", a: ["told us off"], why: "Отругать = tell somebody off; us — в середину, told — прошедшее." },
      { t: 'choice', q: "The fire was ___ quickly by two neighbours.", o: ["put out", "put off", "taken out"], a: 0, why: "Потушить огонь = put out; out здесь — «погасить»." },
      { t: 'choice', q: "My flatmate keeps ___ my food from the fridge.", o: ["on eating", "eating on", "to eat on"], a: 0, why: "Повторяющееся раздражающее действие = keep on + -ing." },
      { t: 'gap', q: "The new game ___ next month — I've already pre-ordered it. (come)", a: ["comes out", "is coming out", "'s coming out", "will come out"], why: "Выходить (о фильме, игре) = come out; по расписанию подходит Present Simple." }
    ]
  },

  // ───────────────────────────── UNIT B2-12 ─────────────────────────────
  {
    id: 'b2-12', level: 'B2', num: 12, track: 'main',
    books: { blue: [142, 143, 144, 145] },
    title: 'Фразовые глаголы 2: up, down, away, back + итог B2',
    summary: 'Разберём частицы up, down, away, back — «до конца», «меньше и сломалось», «прочь» и «обратно, в ответ», выучим глаголы с несколькими значениями (bring up, make up, turn down, hold up), большие таблицы для игр, сериалов и чатов — и соберём весь уровень B2 в одну шпаргалку.',
    grammar: [
      {
        title: '1. Главная идея: у каждой частицы — своя картинка',
        html: `
<div class="g-idea">Что вы уже знаете (уроки A2-17 и b2-11): pick up, put down, give up, grow up, give back, throw away — и правило <b>it в середину</b>. Теперь запомним <b>картинку</b> каждой частицы — по ней можно угадать смысл незнакомого глагола.</div>
<table>
<tr><th>Частица</th><th>Картинка</th><th>Примеры</th></tr>
<tr><td><b>up</b></td><td>вверх; <b>до конца</b>, полностью; появиться</td><td><span class="say">stand up, use up, tidy up, turn up</span></td></tr>
<tr><td><b>down</b></td><td>вниз; <b>меньше</b>, тише; сломалось; на бумагу</td><td><span class="say">sit down, slow down, break down, write down</span></td></tr>
<tr><td><b>away</b></td><td><b>прочь</b>, исчезнуть; отдать, убрать</td><td><span class="say">run away, give away, throw away</span></td></tr>
<tr><td><b>back</b></td><td><b>обратно</b>; <b>в ответ</b></td><td><span class="say">come back, pay back, call back, smile back</span></td></tr>
</table>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p><b>До</b>ешь, я хочу помыть тарелку.</p><p><b>Сбавь</b> скорость!</p><p>Мне <b>отказали</b>.</p><p>Он <b>сбежал</b>.</p><p>Я тебе <b>перезвоню</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Eat <b>up</b>, I want to wash the plate.</span></p><p><span class="say">Slow <b>down</b>!</span></p><p><span class="say">I was turned <b>down</b>.</span></p><p><span class="say">He ran <b>away</b>.</span></p><p><span class="say">I'll call you <b>back</b>.</span></p></div>
</div>
<div class="g-tip"><b>up</b> — как русские «до-» и «за-» в смысле «доделать до конца»: <i>доесть</i> = eat up, <i>допить</i> = drink up, <i>заполнить бак</i> = fill up, <i>запереть</i> = lock up. <b>down</b> — «с-»: <i>сбавить, снизить, сломаться, списать (записать)</i>.</div>
<div class="mini" data-q="«Перезвони мне, когда освободишься»:" data-o="Call me back when you're free.|Call me again when you're free back.|Back call me when you're free." data-a="0" data-why="Перезвонить = call back (back — в ответ); местоимение me — в середину."></div>
<div class="mini" data-q="We've ___ all the paper. Can you buy some more?" data-o="used up|used down|used away" data-a="0" data-why="up = до конца, полностью: use up — израсходовать всё."></div>`
      },
      {
        title: '2. UP и DOWN: вверх-вниз, меньше, сломалось',
        html: `
<div class="g-idea">Сначала пары «вверх — вниз», потом <b>down</b> в трёх переносных смыслах: <b>разрушить</b>, <b>уменьшить</b>, <b>остановиться</b>.</div>
<table>
<tr><th>up</th><th>down</th><th>Смысл</th></tr>
<tr><td><span class="say">put up</span> (a poster)</td><td><span class="say">take down</span></td><td>повесить / снять со стены</td></tr>
<tr><td><span class="say">pick up</span></td><td><span class="say">put down</span></td><td>поднять / положить</td></tr>
<tr><td><span class="say">stand up</span></td><td><span class="say">sit / lie / bend down</span></td><td>встать / сесть, лечь, нагнуться</td></tr>
<tr><td><span class="say">turn up</span></td><td><span class="say">turn down</span></td><td>сделать громче (теплее) / тише</td></tr>
</table>
<p><b>down = разрушить:</b> <span class="say">They knocked down the old cinema.</span> — Старый кинотеатр снесли. · <span class="say">The house burnt down.</span> — Дом сгорел дотла. · <span class="say">Who cut down the tree?</span> · <span class="say">He was knocked down by a car.</span> — Его сбила машина.</p>
<p><b>down = меньше, спокойнее:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>slow down</b></td><td>сбавить скорость</td><td><span class="say">Slow down, you'll crash!</span></td></tr>
<tr><td><b>calm (sb) down</b></td><td>успокоиться / успокоить</td><td><span class="say">Calm down, it's just a game.</span></td></tr>
<tr><td><b>cut down (on)</b></td><td>сократить, меньше употреблять</td><td><span class="say">I'm cutting down on energy drinks.</span></td></tr>
</table>
<p><b>down = перестало работать:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>break down</b></td><td>сломаться (машина); развалиться (отношения, переговоры)</td><td><span class="say">Their marriage broke down after a year.</span></td></tr>
<tr><td><b>close / shut down</b></td><td>закрыться (бизнес); выключить (систему)</td><td><span class="say">The studio shut down last year.</span></td></tr>
</table>
<p><b>Ещё три важных:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>turn sb / sth down</b></td><td>отказать, отклонить</td><td><span class="say">They offered her the job, but she turned it down.</span></td></tr>
<tr><td><b>let sb down</b></td><td>подвести, разочаровать</td><td><span class="say">I trusted you, and you let me down.</span></td></tr>
<tr><td><b>write down</b></td><td>записать</td><td><span class="say">Write down the password somewhere safe.</span></td></tr>
</table>
<div class="g-tip"><b>turn down</b> — и «убавить звук», и «отказать». Представьте ручку громкости: чужое предложение вы «убавляете до нуля».</div>
<div class="g-bad">I was refused on the job. · The car was broken down on the way.</div>
<div class="g-good">I was <b>turned down</b> for the job. · The car <b>broke down</b> on the way. <span class="muted">(break down — без объекта, не пассив)</span></div>
<div class="mini" data-q="I applied to three studios, but they all ___." data-o="turned me down|let me down|put me down" data-a="0" data-why="Отказать кандидату = turn somebody down."></div>
<div class="mini" data-q="The old stadium ___ last year — now there's a shopping centre." data-o="was knocked down|knocked down was|was knocked" data-a="0" data-why="Здание снесли (пассив) = was knocked down; частица остаётся."></div>`
      },
      {
        title: '3. UP (1): вырасти, начать, появиться, догнать',
        html: `
<div class="g-idea"><b>up</b> — самая «богатая» частица. Здесь — глаголы про жизнь и события: вырасти, основать, увлечься, появиться, оказаться в итоге.</div>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>go / come / walk up (to)</b></td><td>подойти</td><td><span class="say">A fan came up to me and asked for a selfie.</span></td></tr>
<tr><td><b>grow up</b></td><td>вырасти (самому)</td><td><span class="say">I grew up in a small town.</span></td></tr>
<tr><td><b>bring up</b> a child</td><td>вырастить, воспитать</td><td><span class="say">She was brought up by her grandparents.</span></td></tr>
<tr><td><b>set up</b></td><td>основать, создать, настроить</td><td><span class="say">Two friends set up the studio in 2019.</span></td></tr>
<tr><td><b>take up</b></td><td>заняться (хобби); занимать (место, время)</td><td><span class="say">I took up climbing last year.</span> · <span class="say">The game takes up 90 GB.</span></td></tr>
<tr><td><b>turn up / show up</b></td><td>прийти, появиться</td><td><span class="say">We waited, but he never turned up.</span></td></tr>
<tr><td><b>tidy / clean / clear up</b></td><td>прибраться</td><td><span class="say">Who's going to tidy up after the party?</span></td></tr>
<tr><td><b>wash up</b></td><td>помыть посуду</td><td><span class="say">I'll cook if you wash up.</span></td></tr>
<tr><td><b>use up</b></td><td>израсходовать всё</td><td><span class="say">I've used up all my free trials.</span></td></tr>
<tr><td><b>fix up</b> a meeting</td><td>договориться о встрече</td><td><span class="say">Let's fix up a call for Monday.</span></td></tr>
<tr><td><b>catch up (with)</b></td><td>догнать</td><td><span class="say">Go on, I'll catch up with you.</span></td></tr>
<tr><td><b>keep up (with)</b></td><td>не отставать; продолжать так же</td><td><span class="say">Great work! Keep it up!</span></td></tr>
<tr><td><b>end up</b> (+ место / -ing)</td><td>в итоге оказаться, в итоге сделать</td><td><span class="say">We ended up sleeping at the airport.</span></td></tr>
<tr><td><b>make up / be made up of</b></td><td>составлять / состоять из</td><td><span class="say">Women make up half of our team.</span></td></tr>
<tr><td><b>give up</b> (-ing)</td><td>бросить, сдаться</td><td><span class="say">I gave up trying to explain.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Our team is made up of three designers and two developers.</span> — Наша команда состоит из трёх дизайнеров и двух разработчиков.</li>
<li><span class="say">I wanted to stay in, but I ended up going to the party.</span> — Хотел остаться дома, а в итоге пошёл на вечеринку.</li>
<li><span class="say">You're too fast — I can't keep up with you.</span> — Я за тобой не успеваю.</li>
</ul>
<div class="g-bad">My grandmother grew me up. · We ended up to sleep in the car. · I took up to run.</div>
<div class="g-good">My grandmother <b>brought</b> me <b>up</b>. · We ended up <b>sleeping</b> in the car. · I took up <b>running</b>.</div>
<div class="g-tip"><b>grow up</b> — вырос <i>сам</i> (без объекта), <b>bring up</b> — вырастили <i>тебя</i> (есть объект). После <b>end up, give up, take up</b> — всегда <b>-ing</b>.</div>
<div class="mini" data-q="We couldn't find a taxi and ended up ___ home." data-o="walking|to walk|walk" data-a="0" data-why="end up + -ing: «в итоге пришлось сделать»."></div>
<div class="mini" data-q="He ___ by his aunt after his parents moved abroad." data-o="was brought up|was grown up|was taken up" data-a="0" data-why="Воспитали (пассив) = be brought up; grow up — только «вырасти самому»."></div>`
      },
      {
        title: '4. UP (2): придумать, помириться, терпеть, задержать',
        html: `
<div class="g-idea">Здесь глаголы, у которых <b>несколько значений</b>. Особенно коварны <b>make up</b> и <b>bring up</b> — смысл решает контекст.</div>
<p><b>Один глагол — много смыслов:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>make up</b></td><td>выдумать</td><td><span class="say">He made up an excuse.</span></td></tr>
<tr><td><b>make up</b></td><td>помириться (with)</td><td><span class="say">They argued, but they made up the next day.</span></td></tr>
<tr><td><b>make up</b></td><td>возместить (for)</td><td><span class="say">I'll buy dinner to make up for it.</span></td></tr>
<tr><td><b>bring up</b></td><td>воспитать</td><td><span class="say">I was brought up in Omsk.</span></td></tr>
<tr><td><b>bring up</b></td><td>поднять тему</td><td><span class="say">Please don't bring up politics at dinner.</span></td></tr>
<tr><td><b>come up</b></td><td>всплыть (в разговоре)</td><td><span class="say">Your name came up at the meeting.</span></td></tr>
<tr><td><b>come up</b></td><td>come up <b>with</b> — придумать</td><td><span class="say">She always comes up with great ideas.</span></td></tr>
<tr><td><b>do up</b></td><td>застегнуть</td><td><span class="say">Do up your coat, it's cold.</span></td></tr>
<tr><td><b>do up</b></td><td>отремонтировать</td><td><span class="say">They've done up the office.</span></td></tr>
<tr><td><b>blow up</b></td><td>взорваться / взорвать</td><td><span class="say">The car blew up in the final scene.</span></td></tr>
<tr><td><b>blow up</b></td><td>вспылить</td><td><span class="say">He blew up at me for no reason.</span></td></tr>
<tr><td><b>blow up</b></td><td>разрываться от сообщений; завируситься (разг.)</td><td><span class="say">My phone is blowing up!</span> — Телефон разрывается!</td></tr>
<tr><td><b>hold up</b></td><td>задержать</td><td><span class="say">Sorry, I was held up in traffic.</span></td></tr>
<tr><td><b>hold up</b></td><td>ограбить (с оружием)</td><td><span class="say">Two men held up a bank.</span></td></tr>
</table>
<p><b>Остальные глаголы с up:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>put up with</b></td><td>терпеть, мириться</td><td><span class="say">I can't put up with this lag any more.</span></td></tr>
<tr><td><b>break up / split up (with)</b></td><td>расстаться</td><td><span class="say">She broke up with her boyfriend.</span></td></tr>
<tr><td><b>save up (for)</b></td><td>копить</td><td><span class="say">I'm saving up for a new monitor.</span></td></tr>
<tr><td><b>look up</b></td><td>посмотреть (в словаре, в сети)</td><td><span class="say">I looked it up on the wiki.</span></td></tr>
<tr><td><b>tear up</b></td><td>порвать в клочки</td><td><span class="say">He tore up the contract.</span></td></tr>
<tr><td><b>cheer (sb) up</b></td><td>взбодриться / подбодрить</td><td><span class="say">Cheer up! We'll win next time.</span></td></tr>
<tr><td><b>clear up</b></td><td>проясниться (о погоде)</td><td><span class="say">It rained all morning, but it cleared up later.</span></td></tr>
<tr><td><b>mix up / get mixed up</b></td><td>перепутать</td><td><span class="say">I always mix up the twins.</span></td></tr>
<tr><td><b>beat sb up</b></td><td>избить</td><td><span class="say">In the first episode he gets beaten up.</span></td></tr>
</table>
<div class="g-bad">I can't stand up with this noise. · She broke with her boyfriend. · I invented an excuse. <span class="muted">(invent — изобрести)</span></div>
<div class="g-good">I can't <b>put up with</b> this noise. · She <b>broke up</b> with her boyfriend. · I <b>made up</b> an excuse.</div>
<div class="g-tip"><b>put up with</b> — три слова, «терпеть через силу». Синоним одним словом — <b>stand</b> / <b>tolerate</b>: <span class="say">I can't stand it.</span></div>
<div class="mini" data-q="Sorry I'm late — I was ___ at the airport." data-o="held up|held on|hold up" data-a="0" data-why="Задержаться не по своей вине = be held up."></div>
<div class="mini" data-q="Don't worry, nobody believes him. He ___ the whole story." data-o="made up|came up|brought up" data-a="0" data-why="Выдумать, сочинить = make up."></div>`
      },
      {
        title: '5. AWAY и BACK: прочь, обратно, в ответ',
        html: `
<div class="g-idea"><b>away</b> — от дома, от человека, прочь. <b>back</b> — домой, обратно или <b>в ответ</b> на действие.</div>
<table>
<tr><th>away</th><th>back</th></tr>
<tr><td><span class="say">We're going away for the weekend.</span> — Уезжаем на выходные.</td><td><span class="say">We'll be back on Monday.</span> — Вернёмся в понедельник.</td></tr>
<tr><td><span class="say">She got in the car and drove away.</span></td><td><span class="say">We walked back to the hotel.</span></td></tr>
<tr><td><span class="say">The bird flew away.</span> · <span class="say">My ticket blew away.</span></td><td><span class="say">Put the book back on the shelf.</span></td></tr>
<tr><td><span class="say">Don't look away!</span> — Не отворачивайся!</td><td><span class="say">Can I have my charger back?</span></td></tr>
</table>
<p><b>Другие глаголы с away:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>keep away (from)</b></td><td>держаться подальше</td><td><span class="say">Keep away from the edge!</span></td></tr>
<tr><td><b>give away</b></td><td>отдать даром; выдать (секрет)</td><td><span class="say">They're giving away free keys.</span></td></tr>
<tr><td><b>put away</b></td><td>убрать на место</td><td><span class="say">Put your phone away.</span></td></tr>
<tr><td><b>throw away</b></td><td>выбросить</td><td><span class="say">Don't throw away the box.</span></td></tr>
<tr><td><b>get away</b></td><td>сбежать, вырваться</td><td><span class="say">The thief got away.</span></td></tr>
<tr><td><b>get away with</b></td><td>сойти с рук</td><td><span class="say">He cheated and got away with it.</span></td></tr>
</table>
<p><b>Другие глаголы с back:</b></p>
<table>
<tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>call / phone / ring back</b></td><td>перезвонить</td><td><span class="say">I'll call you back in five.</span></td></tr>
<tr><td><b>get back to sb</b></td><td>ответить позже</td><td><span class="say">I'll get back to you tomorrow.</span></td></tr>
<tr><td><b>wave / smile / shout / hit back</b></td><td>помахать / улыбнуться / крикнуть / ударить в ответ</td><td><span class="say">I waved, and she waved back.</span></td></tr>
<tr><td><b>look back (on)</b></td><td>оглядываться на прошлое</td><td><span class="say">Looking back, it was a great year.</span></td></tr>
<tr><td><b>pay (sb) back</b></td><td>вернуть долг</td><td><span class="say">I'll pay you back on Friday.</span></td></tr>
<tr><td><b>take back</b></td><td>вернуть (в магазин); забрать свои слова</td><td><span class="say">OK, I take it back.</span></td></tr>
</table>
<div class="g-bad">I'll call you again. <span class="muted">— «перезвоню»</span> · Return it back. · He got away it.</div>
<div class="g-good">I'll call you <b>back</b>. · <b>Give it back</b>. / <b>Return</b> it. · He got away <b>with</b> it.</div>
<div class="g-tip"><b>return</b> уже значит «вернуть», поэтому <i>return back</i> — масло масляное. Либо <b>return it</b>, либо <b>give it back</b>.</div>
<div class="mini" data-q="I emailed the studio a week ago, but they never ___." data-o="got back to me|got me back|came back me" data-a="0" data-why="Ответить (позже) = get back to somebody."></div>
<div class="mini" data-q="He copied my design and ___ it! Nobody noticed." data-o="got away with|got away|got back" data-a="0" data-why="Сойти с рук = get away with (что-то плохое)."></div>`
      },
      {
        title: '6. Большая таблица: up, down, away, back в играх, сериалах и чатах',
        html: `
<div class="g-idea">Самые частые глаголы с этими частицами в живом английском. Многие вы угадаете по картинке частицы.</div>
<p><b>Игры и стримы</b></p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>level up / power up</b></td><td>прокачаться / усилиться</td><td><span class="say">Level up before the next zone.</span></td></tr>
<tr><td><b>heal up / gear up</b></td><td>подлечиться / экипироваться</td><td><span class="say">Heal up and gear up, the boss is next.</span></td></tr>
<tr><td><b>queue up / team up</b></td><td>встать в очередь / объединиться</td><td><span class="say">Let's queue up for ranked.</span></td></tr>
<tr><td><b>back up</b></td><td>прикрыть; сделать бэкап</td><td><span class="say">Back me up, I'm going in!</span></td></tr>
<tr><td><b>sneak up on</b></td><td>подкрасться</td><td><span class="say">Someone sneaked up on me from behind.</span></td></tr>
<tr><td><b>I'm down / go down</b></td><td>я упал, меня вынесли</td><td><span class="say">I'm down! Revive me!</span></td></tr>
<tr><td><b>take down</b></td><td>завалить (врага)</td><td><span class="say">We took down the boss in one try.</span></td></tr>
<tr><td><b>tone down</b></td><td>ослабить, смягчить (нерф)</td><td><span class="say">They toned down the final boss.</span></td></tr>
<tr><td><b>fall back</b></td><td>отступить</td><td><span class="say">Fall back to the bridge!</span></td></tr>
<tr><td><b>run away / get away</b></td><td>убежать / вырваться</td><td><span class="say">Run away, you can't win this fight.</span></td></tr>
<tr><td><b>throw away</b> (a game)</td><td>слить (катку)</td><td><span class="say">We threw away a winning game.</span></td></tr>
<tr><td><b>come back</b></td><td>отыграться</td><td><span class="say">We were losing 0–5 and came back!</span></td></tr>
</table>
<p><b>Сериалы и кино</b></p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>build up</b></td><td>нагнетать, наращивать</td><td><span class="say">The tension builds up slowly.</span></td></tr>
<tr><td><b>set up</b> / <b>pay off</b></td><td>завязка / окупиться (о сюжете)</td><td><span class="say">It was set up in season one and paid off in the finale.</span></td></tr>
<tr><td><b>wrap up</b></td><td>завершить</td><td><span class="say">The season wraps up next week.</span></td></tr>
<tr><td><b>catch up on</b></td><td>наверстать</td><td><span class="say">I need to catch up on the last season.</span></td></tr>
<tr><td><b>give away</b></td><td>выдать, заспойлерить</td><td><span class="say">The trailer gives away the ending!</span></td></tr>
<tr><td><b>bring back</b></td><td>вернуть (персонажа)</td><td><span class="say">They brought back the old villain.</span></td></tr>
<tr><td><b>let down</b></td><td>разочаровать</td><td><span class="say">The finale really let me down.</span></td></tr>
<tr><td><b>break up / make up</b></td><td>расстаться / помириться</td><td><span class="say">They break up in every season and make up again.</span></td></tr>
</table>
<p><b>Чаты и разговор</b></p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>What's up? / What's up with…?</b></td><td>как дела? / что с…?</td><td><span class="say">What's up with the servers today?</span></td></tr>
<tr><td><b>hit me up</b></td><td>пиши, звони мне</td><td><span class="say">Hit me up when you're online.</span></td></tr>
<tr><td><b>catch up</b></td><td>пообщаться, давно не виделись</td><td><span class="say">Let's grab a coffee and catch up.</span></td></tr>
<tr><td><b>mess up / screw up</b></td><td>напортачить (screw up — грубее)</td><td><span class="say">Sorry, I messed up.</span></td></tr>
<tr><td><b>own up (to)</b></td><td>признаться (в своей ошибке)</td><td><span class="say">Just own up to it.</span></td></tr>
<tr><td><b>follow up (on)</b></td><td>вернуться к вопросу, напомнить</td><td><span class="say">Just following up on my last email.</span></td></tr>
<tr><td><b>sum up</b></td><td>подвести итог</td><td><span class="say">To sum up, we need more time.</span></td></tr>
<tr><td><b>be right back / BRB</b></td><td>сейчас вернусь</td><td><span class="say">Be right back, pizza's here.</span></td></tr>
<tr><td><b>back off / go away</b></td><td>отстань / уходи</td><td><span class="say">Back off, it's my loot!</span></td></tr>
</table>
<p><b>Существительные из фразовых глаголов</b></p>
<table>
<tr><th>Глагол</th><th>Существительное</th><th>Пример</th></tr>
<tr><td>set up</td><td><b>a setup</b> — сетап, настройка; подстава</td><td><span class="say">Nice gaming setup!</span></td></tr>
<tr><td>break up / down</td><td><b>a breakup</b> — расставание · <b>a breakdown</b> — поломка, срыв</td><td><span class="say">a painful breakup</span></td></tr>
<tr><td>come back</td><td><b>a comeback</b> — камбэк</td><td><span class="say">What a comeback!</span></td></tr>
<tr><td>give away</td><td><b>a giveaway</b> — розыгрыш</td><td><span class="say">Join our Steam key giveaway!</span></td></tr>
<tr><td>let down</td><td><b>a letdown</b> — разочарование</td><td><span class="say">The ending was a letdown.</span></td></tr>
<tr><td>mix up</td><td><b>a mix-up</b> — путаница</td><td><span class="say">Sorry, there was a mix-up with the files.</span></td></tr>
<tr><td>back up</td><td><b>a backup</b> — резервная копия</td><td><span class="say">Always keep a backup.</span></td></tr>
<tr><td>follow up / warm up</td><td><b>a follow-up · a warm-up</b></td><td><span class="say">a follow-up meeting</span></td></tr>
<tr><td>shut / lock / count down</td><td><b>a shutdown · a lockdown · a countdown</b></td><td><span class="say">The countdown has started.</span></td></tr>
<tr><td>hold up</td><td><b>a hold-up</b> — задержка; ограбление</td><td><span class="say">What's the hold-up?</span></td></tr>
</table>
<div class="mini" data-q="The trailer ___ the whole plot — don't watch it!" data-o="gives away|gives back|gives up" data-a="0" data-why="Выдать секрет, заспойлерить = give away."></div>
<div class="mini" data-q="We were losing 0–4, but then we ___ and won!" data-o="came back|came up|came away" data-a="0" data-why="Отыграться = come back (a comeback)."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">My grandmother grew me up.</div><div class="g-good">My grandmother <b>brought me up</b>.</div>
<div class="g-bad">I can't stand up with his jokes.</div><div class="g-good">I can't <b>put up with</b> his jokes.</div>
<div class="g-bad">We ended up to sleep at the station.</div><div class="g-good">We ended up <b>sleeping</b> at the station.</div>
<div class="g-bad">She broke with her boyfriend.</div><div class="g-good">She <b>broke up</b> with her boyfriend.</div>
<div class="g-bad">I'll call you again in five minutes. <span class="muted">— «перезвоню»</span></div><div class="g-good">I'll call you <b>back</b> in five minutes.</div>
<div class="g-bad">Please return back my charger.</div><div class="g-good">Please <b>give</b> my charger <b>back</b>. / Please <b>return</b> my charger.</div>
<div class="g-bad">He cheated and got away it.</div><div class="g-good">He cheated and got away <b>with</b> it.</div>
<div class="g-bad">If you don't know the word, look up it.</div><div class="g-good">Look <b>it up</b>.</div>
<div class="g-bad">They refused me for the job.</div><div class="g-good">They <b>turned me down</b> for the job.</div>
<div class="g-bad">My car was broken down.</div><div class="g-good">My car <b>broke down</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>up</b> — вверх и до конца (use up, grow up, give up, end up doing, put up with), <b>down</b> — вниз, меньше и сломалось (slow down, cut down on, break down, turn down, let down), <b>away</b> — прочь (give away, throw away, get away with), <b>back</b> — обратно и в ответ (call back, pay back, get back to); <b>it</b> — в середину: <b>look it up, turn it down</b>.</div>`
      },
      {
        title: '8. Итог B2 — шпаргалка по уровню',
        html: `
<div class="g-idea">Поздравляем: вы прошли весь уровень B2 и весь синий Мерфи (English Grammar in Use) — от первого до последнего юнита! Вот всё, что добавил B2, с номерами уроков, чтобы быстро вернуться и повторить.</div>
<p><b>Условия и сожаления</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b2-1</td><td>if I had known…; I wish I had…; wish + would</td><td><span class="say">If I'd known, I would have come.</span></td></tr>
</table>
<p><b>Пассив глубже</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b2-2</td><td>it is said that…, he is said to…; have something done</td><td><span class="say">He is said to be a genius. I had my laptop fixed.</span></td></tr>
</table>
<p><b>-ing, to и предлоги перед глаголом</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b2-3</td><td>предлог + -ing; be / get used to; insist on doing</td><td><span class="say">I'm used to working at night.</span></td></tr>
<tr><td>b2-4</td><td>no point in -ing, worth -ing; to / for / so that; afraid to / of</td><td><span class="say">It's not worth waiting.</span></td></tr>
<tr><td>b2-5</td><td>see somebody do / doing; -ing clauses</td><td><span class="say">I saw him leave. He hurt his hand playing tennis.</span></td></tr>
</table>
<p><b>Сложные предложения</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b2-6</td><td>whose, whom, where; с запятыми; -ing / -ed clauses</td><td><span class="say">Anna, whose brother streams, is here.</span></td></tr>
<tr><td>b2-7</td><td>although, in spite of, in case, unless, as long as</td><td><span class="say">Take a charger in case it dies.</span></td></tr>
<tr><td>b2-8</td><td>as, like, as if</td><td><span class="say">You look as if you haven't slept.</span></td></tr>
</table>
<p><b>Предлоги после слов</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b2-9</td><td>by; noun + предлог; adjective + предлог</td><td><span class="say">the reason for the delay; fed up with it</span></td></tr>
<tr><td>b2-10</td><td>verb + предлог: at, about, for, of, from, on…</td><td><span class="say">It depends on you. She apologised for it.</span></td></tr>
</table>
<p><b>Фразовые глаголы</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b2-11</td><td>in, out, on, off</td><td><span class="say">It turned out the match was called off.</span></td></tr>
<tr><td>b2-12</td><td>up, down, away, back</td><td><span class="say">I can't put up with it any more.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Самые важные «переключатели» B2</div><ol>
<li><b>Нереальное прошлое</b> → if I had done…, I would have done; I wish I had done (b2-1).</li>
<li><b>«Говорят, что…»</b> → it is said that… / he is said to have done; сделал не сам → have it done (b2-2).</li>
<li><b>После предлога</b> — всегда <b>-ing</b>: look forward to seeing, used to getting up, insist on paying (b2-3).</li>
<li><b>Цель</b>: to do / for + существительное / so that + can; afraid <b>to</b> (не решаюсь) ≠ afraid <b>of</b> (боюсь, что случится) (b2-4).</li>
<li><b>see him leave</b> — видел всё, <b>see him leaving</b> — застал в процессе (b2-5).</li>
<li><b>Запятые = дополнительная информация</b>: только who / which / whose, без that (b2-6).</li>
<li><b>although + предложение, despite + существительное / -ing</b>; <b>in case</b> — на всякий случай, <b>unless</b> = if not (b2-7).</li>
<li><b>like + существительное</b>, <b>as + предложение или роль</b>, <b>as if</b> — «будто» (b2-8).</li>
<li><b>Предлог учим вместе со словом</b>: reason for, interested in, depend on, apologise for (b2-9, b2-10).</li>
<li><b>Фразовые глаголы</b>: смысл — по картинке частицы, <b>it — в середину</b>, три слова не разрываем, в пассиве частица остаётся (b2-11, b2-12).</li>
</ol></div>
<div class="mini" data-q="If I ___ about the sale, I would have bought two copies." data-o="knew|had known|would know" data-a="1" data-why="Нереальное прошлое: if + had done, would have done (урок b2-1)."></div>
<div class="mini" data-q="The actor is said ___ the role three times before he said yes." data-o="to have turned down|that turned down|to turn down" data-a="0" data-why="«Говорят, что он (раньше) отказался» → is said to have + done (b2-2) + turn down (b2-12)."></div>
<div class="g-sum"><div class="g-h">Весь B2 в одной строке</div>Вы умеете жалеть о прошлом (<b>if I had known, I wish I had</b>), пересказывать слухи (<b>he is said to</b>), выбирать между <b>-ing и to</b> после предлогов и прилагательных, строить длинные предложения (<b>whose, although, in case, as if</b>), ставить нужный предлог после слова и свободно пользоваться фразовыми глаголами. Синий Мерфи пройден целиком. Дальше — C1 и зелёный Хьюингс: те же темы на уровне стиля и тонких оттенков.</div>`
      }
    ],
    words: [
      ["grow up — grew up", "вырасти", "I grew up in a small town by the sea.", "Я вырос в маленьком городке у моря."],
      ["bring up — brought up", "воспитать; поднять тему", "Please don't bring it up again.", "Пожалуйста, не поднимай эту тему снова."],
      ["set up — set up", "основать, создать; настроить", "They set up their own studio.", "Они основали свою студию."],
      ["take up — took up", "заняться (хобби); занимать", "I took up drawing last year.", "Я занялся рисованием в прошлом году."],
      ["turn up / show up", "прийти, появиться", "Only five people turned up.", "Пришли только пять человек."],
      ["end up (doing)", "в итоге оказаться, в итоге сделать", "We ended up watching the whole season.", "В итоге мы посмотрели весь сезон."],
      ["make up", "выдумать; помириться; составлять", "He made up a story about his dog.", "Он выдумал историю про свою собаку."],
      ["come up with", "придумать, предложить", "She came up with a brilliant idea.", "Она придумала блестящую идею."],
      ["put up with", "терпеть, мириться", "How do you put up with this noise?", "Как ты терпишь этот шум?"],
      ["catch up (with)", "догнать; наверстать", "Go ahead, I'll catch up with you.", "Иди вперёд, я тебя догоню."],
      ["keep up (with)", "не отставать", "I can't keep up with all the new releases.", "Я не успеваю за всеми новинками."],
      ["give up — gave up", "бросить, сдаться", "Don't give up, you're almost there!", "Не сдавайся, ты почти у цели!"],
      ["look up", "посмотреть (в словаре, в сети)", "I looked it up on the wiki.", "Я посмотрел это на вики."],
      ["break up — broke up", "расстаться", "They broke up after five years.", "Они расстались через пять лет."],
      ["cheer up", "подбодрить; взбодриться", "Cheer up! It's not the end of the world.", "Выше нос! Это не конец света."],
      ["hold up — held up", "задержать", "Sorry, I was held up at work.", "Извини, я задержался на работе."],
      ["mix up", "перепутать", "I always mix up their names.", "Я всегда путаю их имена."],
      ["blow up — blew up", "взорваться; вспылить", "The bridge blew up in the last scene.", "Мост взорвался в последней сцене."],
      ["save up (for)", "копить (на)", "I'm saving up for a trip to Japan.", "Я коплю на поездку в Японию."],
      ["calm down", "успокоиться", "Calm down, it's only a game.", "Успокойся, это всего лишь игра."],
      ["slow down", "сбавить скорость, замедлиться", "Slow down, I can't follow you.", "Помедленнее, я не успеваю за тобой."],
      ["cut down (on)", "сократить, меньше употреблять", "I'm trying to cut down on sugar.", "Я пытаюсь есть меньше сахара."],
      ["break down — broke down", "сломаться; не выдержать", "My car broke down on the motorway.", "Моя машина сломалась на трассе."],
      ["turn down", "отказать; убавить (звук)", "She turned down the offer.", "Она отказалась от предложения."],
      ["let somebody down — let down", "подвести, разочаровать", "Don't worry, I won't let you down.", "Не волнуйся, я тебя не подведу."],
      ["write down — wrote down", "записать", "Write down the address.", "Запиши адрес."],
      ["shut down — shut down", "закрыться; выключить", "The servers will shut down at midnight.", "Серверы выключат в полночь."],
      ["give away — gave away", "отдать даром; выдать (секрет)", "The trailer gave away the ending.", "Трейлер выдал концовку."],
      ["get away with — got away with", "сойти с рук", "He broke the rules and got away with it.", "Он нарушил правила, и ему это сошло с рук."],
      ["throw away — threw away", "выбросить", "Don't throw away the receipt.", "Не выбрасывай чек."],
      ["get back to somebody", "ответить позже, связаться", "I'll get back to you tomorrow.", "Я отвечу тебе завтра."],
      ["pay back — paid back", "вернуть долг", "I'll pay you back next week.", "Я верну тебе деньги на следующей неделе."]
    ],
    texts: [
      {
        id: 't-b2-12-1', title: 'Looking back on my first year', level: 'B2',
        text: `This week I looked back on my first year as a junior designer at a small game studio. I'm writing it all down now, before I start mixing things up.

I grew up in a small town where nobody worked in games. My parents brought me up to believe that design was a hobby, not a real job, so when I took up digital art at eighteen, they weren't very happy. Still, I kept it up. I saved up for a drawing tablet, watched hundreds of tutorials and looked up every English word I didn't understand.

A year ago two friends of mine set up a studio and offered me a job. I almost turned it down because the salary was low, but in the end I said yes, and I'm really glad I did.

The first months were hard. The team was small, and I had to keep up with people who had ten years of experience. My first big task was the inventory screen. I came up with three ideas, and our lead turned all of them down. I felt let down, and one evening I almost gave up. My flatmate cheered me up with pizza and told me to write down everything the lead had said. When I read my notes the next day, I finally understood the problem: I had mixed up two very different types of players.

Then, in March, our main server broke down two days before an important demo. We had to put up with twelve-hour days for a week, and I ended up sleeping on the office sofa twice. Somebody made up a rumour that the demo would be cancelled, and one investor nearly walked away. But nobody on the team let the others down. We turned up at the event on time, the demo didn't blow up in our faces, and people actually liked it.

Of course, I've made mistakes. Once I accidentally threw away a whole folder of icons, and our programmer had to get it back from a backup. He never brought it up again, which I really appreciated. I still haven't paid him back for the coffee he bought me that week.

So what have I learnt? Don't give up after the first no. Write everything down. Back up your files. And if someone lets you down, give them a second chance: it might turn out that they were having a terrible week too.

Next month I'm going to cut down on overtime and take up running. Let's see if I can keep that up.`,
        questions: [
          { q: 'Why did the author almost turn down the job?', o: ['The salary was low', 'The studio was far away', 'His parents didn\'t like games'], a: 0 },
          { q: 'What helped the author understand the lead\'s criticism?', o: ['An investor', 'His notes', 'A backup'], a: 1 },
          { q: 'What happened in March?', o: ['The demo was cancelled', 'The main server broke down', 'The author threw away the icons'], a: 1 }
        ]
      },
      {
        id: 't-b2-12-2', title: 'That finale', level: 'B2',
        text: `Sasha: So, did you watch the finale last night?
Ira: I did. I'm still trying to calm down. Just don't bring it up at work — half the office hasn't seen it yet.
Sasha: I won't. But honestly, I was so let down. They built it up for five seasons, and then Mira and Tom just break up in the last ten minutes?
Ira: I think it made sense. They'd been growing apart since season three. She kept giving up her plans for him, and he never backed her up.
Sasha: Maybe. But the writers could have come up with something better than a car that blows up for no reason.
Ira: Ha! Yes, that was silly. I think they ran out of money and needed to get rid of two characters quickly.
Sasha: And what about the twist with the brothers? I kept mixing them up the whole episode.
Ira: Everyone did. They look exactly the same. I had to look it up on the fan wiki afterwards.
Sasha: And the ending — she just gives away her company and drives away into the desert?
Ira: I actually loved that. She finally got away from everything. And in the last scene, when she looks back and smiles… I cried.
Sasha: You cry at everything. You cried at a cooking show last week.
Ira: That's not true… OK, it's a bit true.
Sasha: Anyway, I heard the actor who plays Tom turned down a spin-off.
Ira: Really? Good. I couldn't put up with another season of his sad face. But I think they should bring back Mira's sister. She was the best character, and they wrote her out for no reason.
Sasha: Agreed. By the way, are we still meeting up on Saturday?
Ira: Yes, but I might turn up a bit late. My car broke down again, and the mechanic hasn't got back to me yet.
Sasha: No problem. I'll pick you up if you want.
Ira: That would be great. I'll pay you back for the petrol.
Sasha: Don't be silly. You can pay me back by not talking about the finale all evening.
Ira: Deal. Although… I've just come up with a new theory about the last scene.
Sasha: Ira!
Ira: OK, OK. I'll write it down and save it for later.`,
        questions: [
          { q: 'Why does Ira ask Sasha not to talk about the finale at work?', o: ['Half the office hasn\'t seen it yet', 'Their boss hates the series', 'Ira cried at it'], a: 0 },
          { q: 'What did the actor who plays Tom do?', o: ['He wrote a new theory', 'He turned down a spin-off', 'He broke down his car'], a: 1 },
          { q: 'Why might Ira be late on Saturday?', o: ['She has to work', 'Her car broke down', 'She wants to watch the finale again'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "I was born in Minsk, but I ___ in Kazan.", o: ["grew up", "brought up", "set up"], a: 0, why: "Вырасти самому = grow up (без объекта); bring up — вырастить кого-то." },
      { t: 'choice', q: "They offered her a place in the team, but she ___.", o: ["turned it down", "let it down", "broke it down"], a: 0, why: "Отклонить предложение = turn down; it — в середину." },
      { t: 'choice', q: "The neighbours play drums every night. I can't ___ it any more!", o: ["put up with", "put up", "keep up with"], a: 0, why: "Терпеть = put up with — три слова, объект в конце." },
      { t: 'choice', q: "He didn't know the answer, so he just ___ something.", o: ["made up", "came up", "set up"], a: 0, why: "Выдумать, сочинить = make up." },
      { t: 'choice', q: "You can count on me. I won't ___.", o: ["let you down", "let down you", "turn you down"], a: 0, why: "Подвести = let somebody down; you — в середину." },
      { t: 'choice', q: "We waited for Mark for an hour, but he never ___.", o: ["turned up", "turned down", "took up"], a: 0, why: "Прийти, появиться = turn up (или show up)." },
      { t: 'choice', q: "He used a cheat in the tournament and ___ it!", o: ["got away with", "got back to", "got away"], a: 0, why: "Сойти с рук = get away with + что-то." },
      { t: 'choice', q: "Our art director ___ a brilliant name for the game.", o: ["came up with", "came up", "caught up with"], a: 0, why: "Придумать = come up with + идея." },
      { t: 'gap', q: "I drink five coffees a day. I need to ___ on caffeine. (cut)", a: ["cut down"], why: "Сократить потребление = cut down on + что-то." },
      { t: 'gap', q: "These headphones don't work. I'm going to ___ to the shop. (take / them)", a: ["take them back"], why: "Отнести обратно = take back; them — в середину." },
      { t: 'gap', q: "If you don't know a word, ___ in the dictionary. (look / it)", a: ["look it up"], why: "Посмотреть в словаре = look up; it — в середину." },
      { t: 'gap', q: "I'm ___ for a new graphics card. (save)", a: ["saving up"], why: "Копить на что-то = save up for; процесс сейчас — Continuous." },
      { t: 'gap', q: "Sorry, I'm in a meeting. I'll ___ in ten minutes. (call / you)", a: ["call you back"], why: "Перезвонить = call back; you — в середину." },
      { t: 'gap', q: "We started with 500 gold, but we've already ___ it all. (use)", a: ["used up"], why: "Израсходовать всё = use up (up = до конца)." },
      { t: 'order', a: 'She broke up with her boyfriend', ru: 'Она рассталась со своим парнем' },
      { t: 'order', a: "I'll get back to you tomorrow", ru: 'Я отвечу тебе завтра' },
      { t: 'tr', q: 'Не сдавайся!', a: ["don't give up", "do not give up"] },
      { t: 'tr', q: 'Я вырос в маленьком городе.', a: ["i grew up in a small town", "i grew up in a small city"] },
      { t: 'listen', say: 'Calm down, it is just a game', a: ["calm down, it is just a game", "calm down it is just a game", "calm down, it's just a game", "calm down it's just a game"] },
      { t: 'listen', say: 'Keep it up', a: ['keep it up'] }
    ],
    test: [
      { t: 'gap', q: "If I ___ about the sale, I would have bought it. (know)", a: ["had known", "'d known", "d known"], why: "Итог B2 · b2-1: нереальное прошлое — if + had done, would have done." },
      { t: 'choice', q: "I wish I ___ that message to my boss last night.", o: ["didn't send", "hadn't sent", "wouldn't send"], a: 1, why: "Итог B2 · b2-1: сожаление о прошлом → wish + had done." },
      { t: 'choice', q: "The famous director is said ___ three Hollywood offers.", o: ["to have turned down", "that he turned down", "to turn down"], a: 0, why: "Итог B2 · b2-2 + b2-12: «говорят, что отказался (раньше)» → is said to have + done; отказаться = turn down." },
      { t: 'gap', q: "We're ___ our kitchen done up next month. (have)", a: ["having"], why: "Итог B2 · b2-2 + b2-12: сделает мастер, а не мы → have something done; do up — отремонтировать." },
      { t: 'gap', q: "I'll never get used to ___ up at six. (get)", a: ["getting"], why: "Итог B2 · b2-3: в get used to слово to — предлог, после него -ing." },
      { t: 'choice', q: "The server is down. There's no point ___ to log in now.", o: ["to try", "in trying", "try"], a: 1, why: "Итог B2 · b2-4: there's no point in + -ing." },
      { t: 'choice', q: "I heard someone ___ at the door, so I went to check.", o: ["knocking", "to knock", "knocked"], a: 0, why: "Итог B2 · b2-5: hear somebody doing — услышал действие в процессе; to после hear не ставим." },
      { t: 'choice', q: "My neighbour, ___ son streams on Twitch, asked me to design a logo.", o: ["who", "whose", "that"], a: 1, why: "Итог B2 · b2-6: чей сын → whose; с запятыми that не используется." },
      { t: 'choice', q: "Save your progress ___ the game crashes.", o: ["in case", "unless", "as long as"], a: 0, why: "Итог B2 · b2-7: на случай, если = in case." },
      { t: 'choice', q: "He looks ___ he hasn't slept for days.", o: ["like as", "as if", "as"], a: 1, why: "Итог B2 · b2-8: выглядит так, будто… → look as if + предложение." },
      { t: 'choice', q: "I complained ___ the manager ___ the noise.", o: ["to … about", "at … for", "to … on"], a: 0, why: "Итог B2 · b2-10: complain to somebody about something." },
      { t: 'gap', q: "The final was ___ because of the storm, and nobody knew when it would take place. (call)", a: ["called off"], why: "Итог B2 · b2-11: отменить = call off; в пассиве частица остаётся после причастия." }
    ]
  }
);
