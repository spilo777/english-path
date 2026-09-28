// Юниты A2 19–20: there was / there will be, it (время, погода, расстояние), пересказ She said that…; условия if + present / if I had…, придаточные who / which / that
COURSE.units.push(
  // ───────────────────────────── UNIT A2-19 ─────────────────────────────
  {
    id: 'a2-19', level: 'A2', num: 19, track: 'main',
    books: { red: [38, 39, 50] },
    title: 'There was, there will be; it; She said that…',
    summary: 'Научимся говорить «вчера была авария», «завтра будет ивент», «холодно», «далеко», «пора домой» — и пересказывать, что сказали другие: «Она сказала, что устала».',
    grammar: [
      {
        title: '1. Главная идея: английскому нужно «пустое» подлежащее',
        html: `
<div class="g-idea">По-русски предложение легко начинается без подлежащего: «Вчера была вечеринка», «Холодно», «Далеко». В английском так нельзя — в начале всегда кто-то стоит. Если «кого-то» нет, ставим слово-пустышку: <b>there</b> (что-то есть / было / будет) или <b>it</b> (время, погода, расстояние, оценка «легко, трудно»).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Вчера <span class="g-gap">_</span> была вечеринка.</p><p>Завтра <span class="g-gap">_</span> будет обновление.</p><p><span class="g-gap">_</span> Холодно и ветрено.</p><p><span class="g-gap">_</span> Далеко отсюда.</p><p>Она сказала, что устала.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>There was</b> a party yesterday.</span></p><p><span class="say"><b>There will be</b> an update tomorrow.</span></p><p><span class="say"><b>It's</b> cold and windy.</span></p><p><span class="say"><b>It's</b> a long way from here.</span></p><p><span class="say">She said she <b>was</b> tired.</span></p></div>
</div>
<p>И ещё одна тема юнита — <b>пересказ</b>: «Он сказал, что…». Тут у английского своя привычка: после <b>said</b> время обычно «съезжает» в прошлое, хотя по-русски мы его не меняем.</p>
<div class="g-tip">Запомните пару: <b>there</b> — «в мире что-то есть», <b>it</b> — «так обстоят дела» (время, погода, расстояние). По-русски на их месте просто пусто.</div>
<div class="mini" data-q="Как сказать «Сегодня холодно»?" data-o="It's cold today.|Is cold today.|There is cold today." data-a="0" data-why="Погода — всегда it: It's cold. Пропускать it нельзя."></div>`
      },
      {
        title: '2. There was, there were, there will be',
        html: `
<div class="g-idea">Вы уже знаете <b>there is / there are</b> — «есть, имеется». Для прошлого меняем is/are на <b>was/were</b>, для будущего ставим <b>will be</b>.</div>
<table>
<tr><th>Сейчас</th><th>В прошлом</th><th>В будущем</th></tr>
<tr><td>there <b>is</b> a bug</td><td>there <b class="g-v">was</b> a bug</td><td>there <b class="g-v">will be</b> a bug</td></tr>
<tr><td>there <b>are</b> two bugs</td><td>there <b class="g-v">were</b> two bugs</td><td>there <b class="g-v">will be</b> two bugs</td></tr>
</table>
<ul class="g-list">
<li><span class="say">There was a big event in the game last weekend.</span> — В игре на прошлых выходных был большой ивент.</li>
<li><span class="say">There were a lot of guests at Anna's birthday.</span> — На дне рождения Анны было много гостей.</li>
<li><span class="say">There will be a new season in autumn.</span> — Осенью будет новый сезон.</li>
<li><span class="say">I think there will be a lot of people at the festival.</span> — Думаю, на фестивале будет много народу.</li>
</ul>
<p>Отрицание и вопрос — как у was/were и will:</p>
<table>
<tr><th>Минус</th><th>Вопрос</th><th>Короткий ответ</th></tr>
<tr><td><span class="say">There wasn't a lift.</span></td><td><span class="say">Was there a lift?</span></td><td><span class="say">No, there wasn't.</span></td></tr>
<tr><td><span class="say">There weren't any seats.</span></td><td><span class="say">Were there any problems?</span></td><td><span class="say">Yes, there were.</span></td></tr>
<tr><td><span class="say">There won't be time.</span></td><td><span class="say">Will there be a sequel?</span></td><td><span class="say">Yes, there will.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I opened the chat, but there wasn't anything new.</span> — Я открыл чат, но ничего нового не было.</li>
<li><span class="say">Let's buy tickets now. There won't be any left on Friday.</span> — Давай купим билеты сейчас. В пятницу их уже не будет.</li>
</ul>
<div class="g-bad">In the room was a big TV.</div>
<div class="g-good"><b>There was</b> a big TV in the room. <span class="muted">— русский порядок «В комнате был…» не работает: начинаем с there</span></div>
<div class="g-bad">There was many people at the concert.</div>
<div class="g-good">There <b>were</b> many people at the concert. <span class="muted">— много людей → were</span></div>
<div class="g-bad">There will a meeting tomorrow.</div>
<div class="g-good">There will <b>be</b> a meeting tomorrow.</div>
<div class="g-tip">В будущем проще всего: <b>there will be</b> — одна форма и для одного, и для многих. А вот в прошлом смотрим на число: один — <b>was</b>, много — <b>were</b>.</div>
<div class="mini" data-q="___ a lot of players online last night." data-o="There was|There were|It was" data-a="1" data-why="Много игроков, прошлое → There were."></div>
<div class="mini" data-q="___ a meeting on Monday? — Yes, there will." data-o="Will there be|Will be there|There will be" data-a="0" data-why="Вопрос: will выходит вперёд — Will there be…?"></div>`
      },
      {
        title: '3. There has been, there have been',
        html: `
<div class="g-idea">Для новостей и итогов «к этому моменту» — Present Perfect: <b>there has been</b> (одно) / <b>there have been</b> (много). Коротко: <b>there's been</b>.</div>
<div class="g-formula"><span class="g-part">there</span><span class="g-plus">+</span><span class="g-part g-v">has / have been</span><span class="g-plus">+</span><span class="g-part">что</span></div>
<ul class="g-list">
<li><span class="say">Oh no! There's been a problem with the server. Nobody can log in.</span> — О нет! С сервером проблема. Никто не может зайти.</li>
<li><span class="say">There have been three updates this month.</span> — В этом месяце было уже три обновления.</li>
<li><span class="say">There have been a lot of changes in our team.</span> — В нашей команде было много перемен.</li>
<li><span class="say">Has there been any news from the client?</span> — От клиента были новости?</li>
</ul>
<p>Но если сказано, <b>когда</b> это было (yesterday, last week, in 2020), — только Past Simple, как в уроке a2-4:</p>
<table>
<tr><th>Результат сейчас</th><th>Точное время в прошлом</th></tr>
<tr><td><span class="say">There's been an accident. Call a doctor!</span></td><td><span class="say">There was an accident on the bridge yesterday.</span></td></tr>
<tr><td><span class="say">There have been two storms this week.</span></td><td><span class="say">There were two storms last week.</span></td></tr>
</table>
<div class="g-bad">There has been a fire in our building last night.</div>
<div class="g-good">There <b>was</b> a fire in our building last night. <span class="muted">— last night = законченное время</span></div>
<div class="mini" data-q="Oh no! ___ a problem with the game — it doesn't start." data-o="There's been|There was being|It has been" data-a="0" data-why="Новость, результат виден сейчас → there has been (there's been)."></div>`
      },
      {
        title: '4. It: время, дни, расстояние',
        html: `
<div class="g-idea">Когда говорим о <b>времени</b>, <b>днях и датах</b> и <b>расстоянии</b>, подлежащее — <b>it</b>. По-русски на его месте пусто.</div>
<table>
<tr><th>Тема</th><th>English</th><th>Русский</th></tr>
<tr><td>время</td><td><span class="say">What time is it? — It's half past six.</span></td><td>Который час? — Полседьмого.</td></tr>
<tr><td>время</td><td><span class="say">It's late. It's time to go home.</span></td><td>Поздно. Пора домой.</td></tr>
<tr><td>день</td><td><span class="say">What day is it today? — It's Friday.</span></td><td>Какой сегодня день? — Пятница.</td></tr>
<tr><td>дата</td><td><span class="say">It's the third of May.</span></td><td>Третье мая.</td></tr>
<tr><td>прошлое</td><td><span class="say">It was my birthday on Sunday.</span></td><td>В воскресенье был мой день рождения.</td></tr>
</table>
<p><b>It's time to</b> + глагол = «пора что-то делать»: <span class="say">It's time to start the stream.</span> — Пора начинать стрим.</p>
<p>Расстояние:</p>
<div class="g-formula"><span class="g-part g-v">How far is it</span><span class="g-plus">+</span><span class="g-part">from A</span><span class="g-plus">+</span><span class="g-part">to B?</span></div>
<ul class="g-list">
<li><span class="say">How far is it from your flat to the office?</span> — Далеко от твоей квартиры до офиса?</li>
<li><span class="say">It's about three kilometres.</span> — Около трёх километров.</li>
<li><span class="say">It's a long way from here. Let's take a taxi.</span> — Отсюда далеко. Давай возьмём такси.</li>
<li><span class="say">It isn't far. We can walk.</span> — Недалеко. Можем дойти пешком.</li>
</ul>
<div class="g-steps"><div class="g-h">far или a long way?</div><ol>
<li>В вопросе и с отрицанием — <b>far</b>: <span class="say">Is it far?</span> <span class="say">It isn't far.</span></li>
<li>В обычном утверждении — <b>a long way</b>: <span class="say">It's a long way.</span></li>
</ol></div>
<div class="g-bad">It's far from my home to the studio.</div>
<div class="g-good">It's <b>a long way</b> from my home to the studio.</div>
<div class="mini" data-q="The airport is ___ from the city. Take the train." data-o="a long way|far|long" data-a="0" data-why="Утверждение → a long way; far — для вопросов и отрицаний."></div>
<div class="mini" data-q="___ Wednesday today? — No, it's Thursday." data-o="Is it|It is|Is" data-a="0" data-why="День недели → it; в вопросе is выходит вперёд: Is it…?"></div>`
      },
      {
        title: '5. It: погода и «It\'s nice to…»; it или there',
        html: `
<div class="g-idea">Погода — тоже <b>it</b>. И когда мы оцениваем действие («легко», «приятно», «невозможно»), начинаем с <b>It's</b>, а само действие ставим после <b>to</b>.</div>
<ul class="g-list">
<li><span class="say">It's raining again.</span> — Опять идёт дождь. <span class="muted">(сейчас)</span></li>
<li><span class="say">It rains a lot here in autumn.</span> — Осенью здесь часто идут дожди. <span class="muted">(обычно)</span></li>
<li><span class="say">It snowed all night.</span> — Всю ночь шёл снег.</li>
<li><span class="say">It's windy and cloudy. It isn't very warm.</span> — Ветрено и пасмурно. Не очень тепло.</li>
<li><span class="say">It was foggy, so the flight was late.</span> — Был туман, поэтому рейс задержали.</li>
<li><span class="say">It gets dark at five in winter.</span> — Зимой темнеет в пять.</li>
</ul>
<p><b>it</b> или <b>there</b>? Смотрим, что идёт дальше:</p>
<table>
<tr><th>it + глагол / прилагательное</th><th>there + существительное</th></tr>
<tr><td><span class="say">It was very windy.</span></td><td><span class="say">There was a strong wind.</span></td></tr>
<tr><td><span class="say">It rains a lot in autumn.</span></td><td><span class="say">There's a lot of rain in autumn.</span></td></tr>
<tr><td><span class="say">It snowed last winter.</span></td><td><span class="say">There was a lot of snow last winter.</span></td></tr>
</table>
<p>Оценка действия:</p>
<div class="g-formula"><span class="g-part g-v">It's</span><span class="g-plus">+</span><span class="g-part">easy / hard / nice / impossible / safe…</span><span class="g-plus">+</span><span class="g-part g-v">to</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">It's nice to see you again!</span> — Рад снова тебя видеть!</li>
<li><span class="say">It's hard to find a good designer.</span> — Трудно найти хорошего дизайнера.</li>
<li><span class="say">It was impossible to beat that boss.</span> — Этого босса было невозможно победить.</li>
<li><span class="say">It isn't safe to walk here at night.</span> — Здесь небезопасно гулять ночью.</li>
<li><span class="say">Is it true that you're moving to Kazan?</span> — Правда, что ты переезжаешь в Казань?</li>
</ul>
<div class="g-bad">Is raining again. · Is true that he left?</div>
<div class="g-good"><b>It's</b> raining again. · Is <b>it</b> true that he left?</div>
<div class="g-bad">There is cold today. · It was a strong wind.</div>
<div class="g-good"><b>It's</b> cold today. · <b>There was</b> a strong wind.</div>
<div class="g-tip">it — как «оно» в фразе «оно как-то холодно»: слово ничего не значит, но стоит на своём месте. Никогда его не выбрасывайте.</div>
<div class="mini" data-q="___ a lot of snow last winter." data-o="There was|It was|It snowed" data-a="0" data-why="Дальше существительное (a lot of snow) → there was."></div>
<div class="mini" data-q="___ to learn a language without practice." data-o="It's hard|Is hard|There is hard" data-a="0" data-why="Оценка действия: It's + прилагательное + to + глагол."></div>`
      },
      {
        title: '6. She said that… — пересказываем чужие слова',
        html: `
<div class="g-idea">Когда пересказываем, что кто-то <b>сказал</b> (said — прошедшее время), глагол из его слов обычно делает <b>шаг назад в прошлое</b>. По-русски мы этого не делаем: «Она сказала, что устала / что она занята». Поэтому русскоговорящие часто ошибаются.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Кейт: «Я занята».</p><p>Кейт сказала, что она <b>занята</b>.</p><p class="muted">время не меняется</p></div>
  <div><div class="g-h">English</div><p><span class="say">Kate: “I'm busy.”</span></p><p><span class="say">Kate said that she <b>was</b> busy.</span></p><p class="muted">is → was</p></div>
</div>
<table>
<tr><th>Сказал дословно</th><th>Пересказ</th></tr>
<tr><td>“I <b>am</b> tired.”</td><td><span class="say">Max said he was tired.</span></td></tr>
<tr><td>“We <b>are</b> ready.”</td><td><span class="say">They said they were ready.</span></td></tr>
<tr><td>“I <b>like</b> the logo.”</td><td><span class="say">The client said she liked the logo.</span></td></tr>
<tr><td>“I <b>don't have</b> time.”</td><td><span class="say">Oleg said he didn't have time.</span></td></tr>
<tr><td>“I'<b>m working</b> from home.”</td><td><span class="say">Anna said she was working from home.</span></td></tr>
<tr><td>“I <b>can't</b> come.”</td><td><span class="say">Tom said he couldn't come.</span></td></tr>
<tr><td>“I'<b>ll</b> call you.”</td><td><span class="say">Lena said she would call me.</span></td></tr>
<tr><td>“I <b>have to</b> leave.”</td><td><span class="say">He said he had to leave.</span></td></tr>
<tr><td>“I'<b>ve finished</b> the icons.”</td><td><span class="say">Vera said she had finished the icons.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как пересказать</div><ol>
<li>Сдвиньте глагол на шаг назад: am/is → <b>was</b>, are → <b>were</b>, like → <b>liked</b>, don't → <b>didn't</b>, can → <b>could</b>, will → <b>would</b>, have to → <b>had to</b>, have done → <b>had done</b>.</li>
<li>Поменяйте «я, мой, ты» по смыслу: “I love <b>my</b> job” → <span class="say">She said she loved <b>her</b> job.</span> “<b>You</b> look tired” → <span class="say">He said <b>I</b> looked tired.</span></li>
<li><b>that</b> можно ставить, а можно и нет: <span class="say">He said (that) he was hungry.</span></li>
</ol></div>
<div class="g-bad">Max said that he is tired.</div>
<div class="g-good">Max said that he <b>was</b> tired.</div>
<div class="g-bad">She said she will send the file.</div>
<div class="g-good">She said she <b>would</b> send the file.</div>
<div class="mini" data-q="“I can't find my keys,” Kate said. → Kate said she ___ find her keys." data-o="can't|couldn't|didn't" data-a="1" data-why="can → could: couldn't."></div>
<div class="mini" data-q="“I'll be late.” → Tom said he ___ late." data-o="will be|would be|was be" data-a="1" data-why="will → would: he would be late."></div>`
      },
      {
        title: '7. Say или tell',
        html: `
<div class="g-idea">Оба слова — «сказать». Разница в том, как подключается человек, <b>которому</b> сказали. У <b>tell</b> человек идёт сразу, без предлога. У <b>say</b> человека можно не называть, а если называем — через <b>to</b>.</div>
<table>
<tr><th>say — said</th><th>tell — told</th></tr>
<tr><td><span class="say">He said that he was busy.</span></td><td><span class="say">He told me that he was busy.</span></td></tr>
<tr><td><span class="say">What did she say to you?</span></td><td><span class="say">What did she tell you?</span></td></tr>
<tr><td><span class="say">I said hello to Max.</span></td><td><span class="say">I told Max about the game.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part g-v">said</span><span class="g-plus">+</span><span class="g-part">(to кому)</span><span class="g-sep">·</span><span class="g-part g-v">told</span><span class="g-plus">+</span><span class="g-part">кому (me, Anna, us)</span></div>
<p>Устойчивые пары, их просто запомнить:</p>
<ul class="g-list">
<li><b>say</b>: <span class="say">say hello</span>, <span class="say">say goodbye</span>, <span class="say">say sorry</span>, <span class="say">say yes / no</span></li>
<li><b>tell</b>: <span class="say">tell the truth</span> (сказать правду), <span class="say">tell a lie</span> (соврать), <span class="say">tell a story</span>, <span class="say">tell a joke</span></li>
</ul>
<div class="g-bad">He said me that the build was ready.</div>
<div class="g-good">He <b>told</b> me that the build was ready. / He <b>said</b> that the build was ready.</div>
<div class="g-bad">She told that she was ill. · What did he tell to you?</div>
<div class="g-good">She <b>told me</b> that… / She <b>said</b> that… · What did he <b>tell you</b>?</div>
<div class="g-tip">tell «тянет за собой» человека: told <b>me</b>, told <b>Max</b>, told <b>us</b>. Нет человека после глагола — берите <b>say</b>.</div>
<div class="mini" data-q="She ___ me that the meeting was cancelled." data-o="said|told|say" data-a="1" data-why="Сразу после глагола человек (me) → told."></div>
<div class="mini" data-q="He ___ that he was on his way." data-o="told|said|told to" data-a="1" data-why="Человека нет → said."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Yesterday was a party at Tom's.</div><div class="g-good"><b>There was</b> a party at Tom's yesterday.</div>
<div class="g-bad">There was a lot of players online.</div><div class="g-good">There <b>were</b> a lot of players online.</div>
<div class="g-bad">There has been an accident last night.</div><div class="g-good">There <b>was</b> an accident last night.</div>
<div class="g-bad">Is very cold today.</div><div class="g-good"><b>It's</b> very cold today.</div>
<div class="g-bad">It was a strong wind.</div><div class="g-good"><b>There was</b> a strong wind.</div>
<div class="g-bad">It's far from here.</div><div class="g-good">It's <b>a long way</b> from here.</div>
<div class="g-bad">Anna said she can't come.</div><div class="g-good">Anna said she <b>couldn't</b> come.</div>
<div class="g-bad">He said me that he was tired.</div><div class="g-good">He <b>told me</b> that he was tired.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Что-то было / будет → <b>there was / were / will be</b>; время, погода, расстояние, «легко / трудно» → <b>it</b>; пересказ после said → шаг назад: <b>is → was, can → could, will → would</b>; <b>told me</b>, но <b>said (to me)</b>.</div>`
      }
    ],
    words: [
      ["there was / there were", "был, была, были (что-то где-то)", "There were ten people on the call.", "На созвоне было десять человек."],
      ["there will be", "будет (что-то где-то)", "There will be a new update next week.", "На следующей неделе будет новое обновление."],
      ["accident", "авария; несчастный случай", "There was an accident on the bridge.", "На мосту была авария."],
      ["fire", "пожар; огонь", "There was a fire in the building last night.", "Прошлой ночью в здании был пожар."],
      ["event", "событие, мероприятие; ивент", "There's a big event in the game this weekend.", "На этих выходных в игре большой ивент."],
      ["festival", "фестиваль", "There were a lot of people at the festival.", "На фестивале было много людей."],
      ["guest", "гость", "There will be twenty guests at the party.", "На вечеринке будет двадцать гостей."],
      ["noise", "шум", "There was a strange noise in the kitchen.", "На кухне был странный шум."],
      ["windy", "ветреный; ветрено", "It was very windy on the beach.", "На пляже было очень ветрено."],
      ["cloudy", "пасмурный, облачный", "It's cloudy, but it isn't raining.", "Пасмурно, но дождя нет."],
      ["foggy", "туманный", "It was foggy, so the flight was late.", "Был туман, поэтому рейс задержали."],
      ["wet", "мокрый, сырой", "It's wet outside. Put your hood up.", "На улице сыро. Надень капюшон."],
      ["dark", "тёмный; темно", "It gets dark very early in December.", "В декабре очень рано темнеет."],
      ["temperature", "температура", "What's the temperature today?", "Какая сегодня температура?"],
      ["degree", "градус; степень", "It's minus five degrees outside.", "На улице минус пять градусов."],
      ["weather forecast", "прогноз погоды", "The weather forecast says it will snow.", "Прогноз погоды говорит, что пойдёт снег."],
      ["distance", "расстояние", "What's the distance to the next town?", "Какое расстояние до следующего города?"],
      ["a long way", "далеко (в утверждении)", "It's a long way from my flat to the office.", "От моей квартиры до офиса далеко."],
      ["kilometre", "километр", "It's two kilometres to the station.", "До станции два километра."],
      ["nearby", "поблизости, рядом", "Is there a café nearby?", "Здесь поблизости есть кафе?"],
      ["impossible", "невозможный; невозможно", "It's impossible to sleep with this noise.", "С таким шумом невозможно спать."],
      ["true", "правдивый, верный; правда", "Is it true that you're leaving?", "Правда, что ты уходишь?"],
      ["It's time to…", "пора (что-то делать)", "It's time to go home.", "Пора домой."],
      ["explain", "объяснять", "He explained that the server was down.", "Он объяснил, что сервер лёг."],
      ["reply", "отвечать; ответ", "She replied that she was busy.", "Она ответила, что занята."],
      ["complain", "жаловаться", "Players complained that the game was too hard.", "Игроки жаловались, что игра слишком сложная."],
      ["mention", "упоминать", "She mentioned that she had a new job.", "Она упомянула, что у неё новая работа."],
      ["announce", "объявлять", "They announced that there would be a sequel.", "Они объявили, что будет продолжение."],
      ["lie", "лгать, врать; ложь", "He said he was ill, but he lied.", "Он сказал, что болен, но соврал."],
      ["the truth", "правда", "Tell me the truth. Did you break it?", "Скажи мне правду. Ты это сломал?"],
      ["cancel", "отменять", "The concert was cancelled because of the storm.", "Концерт отменили из-за грозы."]
    ],
    texts: [
      {
        id: 't-a2-19-1', title: 'A day at the game festival', level: 'A2',
        text: `Last weekend there was a big game festival in our city. My friend Oleg and I went there on Saturday.
It was cold and windy, and it was a long way from the metro to the festival hall — about two kilometres. When we got there, there was a huge queue at the door. There were hundreds of people in costumes, and it was impossible to find the entrance for guests.
Inside it was warm and loud. There were a lot of stands with new games, and there was a small stage in the middle. At four o'clock there was a surprise: a famous developer came on stage. He said that his studio was working on a sequel, and he told us that there would be a free demo in spring. Everybody screamed!
Then something went wrong. There was a problem with the electricity, and all the screens went black. A woman from the festival explained that there was a small fire in the kitchen. Nobody was hurt, but the evening show was cancelled.
On Sunday it rained all day, so we stayed at home. Oleg said he was tired but happy. I think there will be an even bigger festival next year, and we will go again.`,
        questions: [
          { q: 'What was the weather like on Saturday?', o: ['Sunny and hot', 'Cold and windy', 'Rainy all day'], a: 1 },
          { q: 'What did the developer say?', o: ['The festival was cancelled', 'He was tired', 'His studio was working on a sequel'], a: 2 },
          { q: 'Why did they stay at home on Sunday?', o: ['It rained all day', 'There was a fire', 'Oleg was ill'], a: 0 }
        ]
      },
      {
        id: 't-a2-19-2', title: 'What did the client say?', level: 'A2',
        text: `Max: Hi, Lena! How was the call with the client?
Lena: Long! There were five people from their team on the call.
Max: Five? What did they say about the new app design?
Lena: Well, the manager said that she liked the colours. But she told us that the buttons were too small.
Max: Hmm. Anything else?
Lena: Their developer said the icons didn't work on old phones. And he said there was a problem with the dark mode.
Max: Has there been any news about the deadline?
Lena: Yes. They said they couldn't wait until May. They need the design in April.
Max: April? That's impossible! It's already the tenth of March.
Lena: I know. I told them that we would do our best. And I said we had to find one more designer.
Max: What did they say to that?
Lena: They said it wasn't a problem. There will be more money in the budget.
Max: Really? Is it true, or did they just say it to be nice?
Lena: The manager told me she would send an email today. Let's see.
Max: OK. It's late — it's time to go home. Tomorrow will be a long day.
Lena: Yes. And the weather forecast says it will snow tonight, so leave early tomorrow!`,
        questions: [
          { q: 'What did the manager like?', o: ['The buttons', 'The colours', 'The icons'], a: 1 },
          { q: 'When does the client need the design?', o: ['In April', 'In May', 'In March'], a: 0 },
          { q: 'What will the manager send today?', o: ['A new design', 'More money', 'An email'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: '___ a lot of changes in the new version of the app.', o: ['It has been', 'There have been', 'There was being'], a: 1, why: 'Итог к настоящему моменту, много перемен → there have been.' },
      { t: 'choice', q: 'I opened the chat, but there ___ any new messages.', o: ['wasn\'t', 'weren\'t', 'won\'t'], a: 1, why: 'Прошлое, messages — много → there weren\'t.' },
      { t: 'choice', q: '___ a meeting tomorrow? — Yes, there will.', o: ['Will there be', 'Will be there', 'Is there will'], a: 0, why: 'Вопрос в будущем: Will there be…?' },
      { t: 'choice', q: '___ foggy this morning, so the bus was late.', o: ['There was', 'Was', 'It was'], a: 2, why: 'Погода + прилагательное (foggy) → it was.' },
      { t: 'choice', q: 'How ___ is it from here to the beach?', o: ['far', 'long way', 'a long way'], a: 0, why: 'В вопросе о расстоянии — How far is it…?' },
      { t: 'choice', q: 'Kate ___ me that she was moving to Kazan.', o: ['said', 'told', 'say'], a: 1, why: 'После глагола сразу человек (me) → told.' },
      { t: 'choice', q: '“I don\'t like the ending,” Max said. → Max said he ___ the ending.', o: ['doesn\'t like', 'not liked', 'didn\'t like'], a: 2, why: 'В пересказе don\'t like → didn\'t like.' },
      { t: 'choice', q: 'Is ___ that you won the tournament?', o: ['true', 'it true', 'there true'], a: 1, why: 'Нужно подлежащее it: Is it true that…?' },
      { t: 'gap', q: '___ raining again. Take an umbrella. (оно + есть)', a: ['It\'s', 'It is'], why: 'Погода — всегда it: It\'s raining.' },
      { t: 'gap', q: '___ there any problems at the concert yesterday?', a: ['Were'], why: 'Прошлое, problems — много → Were there…?' },
      { t: 'gap', q: '“I can help you.” → Anna said she ___ help me.', a: ['could'], why: 'В пересказе can → could.' },
      { t: 'gap', q: '“I will send the file.” → Tom said he ___ send the file.', a: ['would'], why: 'В пересказе will → would.' },
      { t: 'gap', q: 'It\'s ___ to sleep with this noise! (невозможно)', a: ['impossible'], why: 'It\'s + прилагательное + to + глагол.' },
      { t: 'gap', q: 'What did the doctor ___ you? (tell / say)', a: ['tell'], why: 'Человек (you) сразу после глагола → tell.' },
      { t: 'order', a: 'It was a long way to the station', ru: 'До станции было далеко' },
      { t: 'order', a: 'There will be a new level next week', ru: 'На следующей неделе будет новый уровень' },
      { t: 'tr', q: 'Вчера был сильный ветер.', a: ['there was a strong wind yesterday', 'yesterday there was a strong wind', 'it was very windy yesterday', 'yesterday it was very windy', 'it was really windy yesterday', 'yesterday it was really windy'] },
      { t: 'tr', q: 'Она сказала, что устала.', a: ['she said she was tired', 'she said that she was tired'] },
      { t: 'listen', say: 'Is it far from here?', a: ['is it far from here'] }
    ],
    test: [
      { t: 'choice', q: 'There ___ an accident on the highway yesterday.', o: ['has been', 'was', 'is'], a: 1, why: 'Есть точное время в прошлом (yesterday) → there was.' },
      { t: 'choice', q: 'Next year ___ two new maps in the game.', o: ['there will be', 'there are', 'it will be'], a: 0, why: 'Что-то появится в будущем → there will be (и для множественного числа тоже).' },
      { t: 'choice', q: 'It ___ a lot here in autumn.', o: ['is rain', 'rains', 'is rains'], a: 1, why: 'Обычная погода «вообще» → Present Simple: It rains.' },
      { t: 'choice', q: '___ a lot of rain last month.', o: ['It was', 'It rained', 'There was'], a: 2, why: 'Дальше существительное (a lot of rain) → there was.' },
      { t: 'gap', q: 'It\'s nice ___ you again! (see)', a: ['to see'], why: 'It\'s + прилагательное + to + глагол.' },
      { t: 'gap', q: '___ is it from Moscow to Kazan? (как далеко)', a: ['How far'], why: 'Вопрос о расстоянии: How far is it from… to…?' },
      { t: 'choice', q: '“We\'re playing online now.” → They said they ___ online.', o: ['are playing', 'played', 'were playing'], a: 2, why: 'В пересказе are playing → were playing.' },
      { t: 'gap', q: '“I\'ve finished the logo.” → Anna said she ___ finished the logo.', a: ['had'], why: 'В пересказе have finished → had finished.' },
      { t: 'choice', q: 'Выберите правильное предложение:', o: ['He said me that he was busy.', 'He told me that he was busy.', 'He told to me that he was busy.'], a: 1, why: 'tell + человек без предлога: told me.' },
      { t: 'gap', q: 'Don\'t ___ me the ending! I haven\'t watched it yet. (tell / say)', a: ['tell'], why: 'После глагола человек (me) → tell.' },
      { t: 'choice', q: '___ very dark in the room, and I couldn\'t find the door.', o: ['It was', 'There was', 'Was'], a: 0, why: 'Прилагательное (dark) → it was.' },
      { t: 'gap', q: 'Has ___ been any news from the client? (there / it)', a: ['there'], why: 'Вопрос «были ли новости» → Has there been…?' }
    ]
  },

  // ───────────────────────────── UNIT A2-20 ─────────────────────────────
  {
    id: 'a2-20', level: 'A2', num: 20, track: 'main',
    books: { red: [99, 100, 101, 102] },
    title: 'If we go… If I had… ; a person who… — условия и придаточные',
    summary: 'Научимся говорить «если пойдёт дождь, мы останемся дома», «если бы у меня были деньги, я бы…», «на твоём месте я бы…» и соединять фразы словом «который»: a person who…, the game I bought.',
    grammar: [
      {
        title: '1. Главная идея: «если», «если бы» и «который»',
        html: `
<div class="g-idea">В этом юните три русских слова, которые в английском работают по-своему. <b>Если</b> + будущее → в английском после if <b>настоящее время</b>. <b>Если бы</b> → прошедшая форма + <b>would</b>. <b>Который</b> → <b>who / which / that</b>, а иногда и вовсе ничего.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Если завтра <b>будет</b> дождь, мы останемся дома.</p><p>Если <b>бы</b> у меня <b>были</b> деньги, я <b>бы</b> купил PS5.</p><p>Девушка, <b>которая</b> нарисовала этот арт, живёт в Казани.</p><p>Игра, <b>которую</b> я купил, — отличная.</p></div>
  <div><div class="g-h">English</div><p><span class="say">If it <b>rains</b> tomorrow, we'll stay at home.</span></p><p><span class="say">If I <b>had</b> money, I<b>'d</b> buy a PS5.</span></p><p><span class="say">The girl <b>who</b> drew this art lives in Kazan.</span></p><p><span class="say">The game <span class="g-gap">_</span> I bought is great.</span></p></div>
</div>
<div class="g-tip">Ключ ко всему юниту: после <b>if</b> почти никогда не бывает <b>will</b> и <b>would</b>. Они живут в другой половине фразы.</div>
<div class="mini" data-q="Если ты позвонишь, я отвечу." data-o="If you call, I'll answer.|If you will call, I'll answer.|If you call, I answer." data-a="0" data-why="После if — настоящее (call), в другой половине — will (I'll answer)."></div>`
      },
      {
        title: '2. If we go… — реальное условие',
        html: `
<div class="g-idea">Говорим о том, что <b>вполне может</b> случиться. После <b>if</b> — Present Simple (как после when, before, until), а в другой половине — <b>will</b>, <b>can</b> или просьба.</div>
<div class="g-formula"><span class="g-part">If</span><span class="g-plus">+</span><span class="g-part g-v">настоящее время</span><span class="g-sep">·</span><span class="g-part g-v">will / can / просьба</span></div>
<ul class="g-list">
<li><span class="say">If we take a taxi, we'll be there in ten minutes.</span> — Если возьмём такси, будем там через десять минут.</li>
<li><span class="say">If you don't save, you'll lose everything.</span> — Если не сохранишься, потеряешь всё.</li>
<li><span class="say">If I have time tonight, I'll finish the icons.</span> — Если вечером будет время, я доделаю иконки.</li>
<li><span class="say">If you're tired, go to bed.</span> — Если устал, иди спать.</li>
<li><span class="say">If the courier comes, can you open the door?</span> — Если придёт курьер, откроешь дверь?</li>
<li><span class="say">If I'm late, start without me.</span> — Если я опоздаю, начинайте без меня.</li>
</ul>
<p><b>if</b> может стоять в начале или в середине. В начале — после условия ставим запятую, в середине — запятая не нужна:</p>
<ul class="g-list">
<li><span class="say">If you don't hurry, you'll miss the bus.</span></li>
<li><span class="say">You'll miss the bus if you don't hurry.</span></li>
</ul>
<p>В разговоре часто звучит одна if-половина:</p>
<ul class="g-list">
<li><span class="say">Are you coming to the stream? — Yes, if I finish work on time.</span> — Придёшь на стрим? — Да, если закончу работу вовремя.</li>
<li><span class="say">Is it OK if I sit here?</span> — Можно я здесь сяду?</li>
</ul>
<div class="g-bad">If it will rain, we'll stay at home.</div>
<div class="g-good">If it <b>rains</b>, we'll stay at home.</div>
<div class="g-bad">If you will see Max, tell him about the party.</div>
<div class="g-good">If you <b>see</b> Max, tell him about the party.</div>
<div class="mini" data-q="I'll call you if I ___ the file." data-o="will find|find|found" data-a="1" data-why="После if — настоящее время: if I find."></div>
<div class="mini" data-q="If you ___ hungry, there's soup in the fridge." data-o="will be|are|would be" data-a="1" data-why="После if — настоящее: if you are hungry."></div>`
      },
      {
        title: '3. If или when?',
        html: `
<div class="g-idea">По-русски «если» и «когда» тоже разные, но в английском эта разница строже. <b>if</b> — может быть, а может и нет. <b>when</b> — это точно случится, вопрос только во времени.</div>
<table>
<tr><th>if — не уверен</th><th>when — точно будет</th></tr>
<tr><td><span class="say">If I get the job, I'll buy a new monitor.</span></td><td><span class="say">When I get home, I'll have dinner.</span></td></tr>
<tr><td><span class="say">If it doesn't rain, we'll play football.</span></td><td><span class="say">When the film ends, let's order pizza.</span></td></tr>
<tr><td><span class="say">If you don't like the colours, I can change them.</span></td><td><span class="say">When you finish the level, save the game.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Are you going out later? — Maybe. If I go out, I'll buy some bread.</span> — Может быть. Если пойду, куплю хлеба.</li>
<li><span class="say">Are you going out later? — Yes. When I go out, I'll buy some bread.</span> — Да. Когда пойду, куплю хлеба.</li>
</ul>
<div class="g-bad">When I'm late, start without me. <span class="muted">— вы же не планируете опаздывать</span></div>
<div class="g-good"><b>If</b> I'm late, start without me.</div>
<div class="g-tip">Спросите себя: «А это точно будет?» Точно — <b>when</b>. Не знаю — <b>if</b>. И после обоих — настоящее время, без will.</div>
<div class="mini" data-q="I'm going to the shop. ___ I come back, we can play." data-o="If|When|Would" data-a="1" data-why="Я точно вернусь → when."></div>
<div class="mini" data-q="___ you don't like the logo, I can change it." data-o="If|When|Before" data-a="0" data-why="Может понравиться, а может нет → if."></div>`
      },
      {
        title: '4. If I had… I would… — «если бы»',
        html: `
<div class="g-idea">Когда мы <b>фантазируем</b> о том, чего сейчас нет, по-русски говорим «если бы… то бы». По-английски: после <b>if</b> — прошедшая форма (had, knew, lived), в другой половине — <b>would</b> + глагол. Прошедшая форма тут <b>не про прошлое</b>: она показывает «на самом деле не так».</div>
<div class="g-formula"><span class="g-part">If</span><span class="g-plus">+</span><span class="g-part g-v">had / knew / didn't have…</span><span class="g-sep">·</span><span class="g-part g-v">would / wouldn't / could</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">I don't have a car. If I had a car, I'd drive to work.</span> — Если бы у меня была машина, я бы ездил на работу на ней.</li>
<li><span class="say">If I knew Japanese, I'd play games without translation.</span> — Если бы я знал японский, играл бы без перевода.</li>
<li><span class="say">If we lived near the sea, we'd swim every day.</span> — Если бы мы жили у моря, мы бы плавали каждый день.</li>
<li><span class="say">She wouldn't be happy if she worked in an office.</span> — Она не была бы счастлива, если бы работала в офисе.</li>
<li><span class="say">If we had more time, we could finish the level.</span> — Если бы у нас было больше времени, мы могли бы пройти уровень.</li>
<li><span class="say">I'd come to the party if I could, but I have to work.</span> — Я бы пришёл, если бы мог, но мне надо работать.</li>
</ul>
<p><b>I'd, you'd, she'd, we'd</b> = I would, you would… Вопрос: <b>What would you do if…?</b></p>
<ul class="g-list">
<li><span class="say">What would you do if you won a million?</span> — Что бы ты сделал, если бы выиграл миллион?</li>
<li><span class="say">If you didn't have a job, what would you do?</span> — Если бы у тебя не было работы, чем бы ты занимался?</li>
</ul>
<div class="g-bad">If I would have money, I would buy a PS5.</div>
<div class="g-good">If I <b>had</b> money, I would buy a PS5. <span class="muted">— would только в одной половине</span></div>
<div class="g-bad">If I had money, I will buy a PS5.</div>
<div class="g-good">If I had money, I <b>would</b> buy a PS5.</div>
<div class="g-tip">Русское «бы» стоит в обеих частях фразы. В английском «бы» (would) — только в одной, а в if-части его работу делает прошедшая форма.</div>
<div class="mini" data-q="If I ___ more free time, I'd learn to draw." data-o="have|had|would have" data-a="1" data-why="Фантазия о настоящем → после if прошедшая форма: had."></div>
<div class="mini" data-q="If she knew the answer, she ___ us." data-o="will tell|would tell|told" data-a="1" data-why="Если бы… → в другой половине would + глагол."></div>`
      },
      {
        title: '5. If I were you; if I have или if I had',
        html: `
<div class="g-idea">В «если бы» с глаголом be можно сказать <b>if I was</b> или <b>if I were</b> — оба варианта нормальные. А фраза-совет <b>If I were you</b> («на твоём месте») — устойчивая, её лучше запомнить именно так.</div>
<ul class="g-list">
<li><span class="say">If I were you, I'd talk to the boss.</span> — На твоём месте я бы поговорил с начальником.</li>
<li><span class="say">I wouldn't buy that laptop if I were you.</span> — На твоём месте я бы не покупал этот ноутбук.</li>
<li><span class="say">If Max were here, he would know what to do.</span> — Если бы Макс был здесь, он бы знал, что делать.</li>
<li><span class="say">It would be nice if the weather was warmer.</span> — Было бы хорошо, если бы было потеплее.</li>
</ul>
<p>Сравните два «если» — возможное и воображаемое:</p>
<table>
<tr><th>if I have — может быть</th><th>if I had — на самом деле нет</th></tr>
<tr><td><span class="say">If I have time, I'll call Anna.</span><br><span class="muted">может, время будет</span></td><td><span class="say">If I had time, I'd call Anna.</span><br><span class="muted">времени нет</span></td></tr>
<tr><td><span class="say">I'll buy the game if it isn't expensive.</span><br><span class="muted">цену пока не знаю</span></td><td><span class="say">I'd buy the game if it wasn't so expensive.</span><br><span class="muted">она дорогая</span></td></tr>
<tr><td><span class="say">I'll help you if I can.</span></td><td><span class="say">I'd help you if I could, but I can't.</span></td></tr>
</table>
<div class="g-bad">If I am you, I would call her.</div>
<div class="g-good">If I <b>were</b> you, I would call her.</div>
<div class="mini" data-q="I don't know his number. If I ___ it, I'd call him." data-o="know|knew|would know" data-a="1" data-why="Номера на самом деле нет → если бы: if I knew."></div>
<div class="mini" data-q="Maybe I'll finish early. If I ___ early, I'll come to the party." data-o="finish|finished|would finish" data-a="0" data-why="Это возможно (maybe) → if + настоящее, will в другой части."></div>`
      },
      {
        title: '6. A person who…, a thing that / which…',
        html: `
<div class="g-idea">Русское «который» по-английски: <b>who</b> — для людей, <b>which</b> — для вещей и животных, <b>that</b> — для всех. Слово ставим сразу после того, о ком говорим.</div>
<table>
<tr><th>Слово</th><th>Для кого</th><th>Пример</th></tr>
<tr><td><b class="g-v">who</b></td><td>люди</td><td><span class="say">a designer who works with us</span></td></tr>
<tr><td><b class="g-v">which</b></td><td>вещи, животные</td><td><span class="say">a game which has no ending</span></td></tr>
<tr><td><b class="g-v">that</b></td><td>люди и вещи</td><td><span class="say">an app that helps you learn words</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">A streamer is a person who plays games online for viewers.</span> — Стример — это человек, который играет онлайн для зрителей.</li>
<li><span class="say">The woman who lives next door is a pilot.</span> — Женщина, которая живёт по соседству, — пилот.</li>
<li><span class="say">I have a friend who can fix any laptop.</span> — У меня есть друг, который может починить любой ноутбук.</li>
<li><span class="say">The game that won the prize is from Poland.</span> — Игра, которая получила приз, — из Польши.</li>
<li><span class="say">Where is the charger which was on the table?</span> — Где зарядка, которая лежала на столе?</li>
<li><span class="say">The guys who test our games are really funny.</span> — Ребята, которые тестируют наши игры, очень весёлые.</li>
</ul>
<p>Для людей <b>who</b> звучит естественнее, чем that. А <b>which</b> для людей — ошибка.</p>
<div class="g-bad">She's the girl which sings in our band.</div>
<div class="g-good">She's the girl <b>who</b> sings in our band.</div>
<div class="g-bad">I have a friend who he lives in London.</div>
<div class="g-good">I have a friend who lives in London. <span class="muted">— who уже заменяет he</span></div>
<div class="g-tip">По-русски перед «который» всегда запятая. В английском в таких фразах (когда уточняем, <b>какой именно</b> человек или вещь) запятых нет: <span class="say">The man who called me was angry.</span></div>
<div class="mini" data-q="I know a girl ___ speaks four languages." data-o="who|which|what" data-a="0" data-why="Девушка — человек → who."></div>
<div class="mini" data-q="This is the app ___ changed my life." data-o="who|that|what" data-a="1" data-why="Приложение — вещь → that (или which)."></div>`
      },
      {
        title: '7. The game I bought — «который» можно пропустить',
        html: `
<div class="g-idea">Если после «который» идёт <b>другой</b> человек, который что-то делает (I, you, we, Max), слово who / which / that можно выбросить. Так англичане и говорят чаще всего.</div>
<table>
<tr><th>Две фразы</th><th>Одна фраза</th></tr>
<tr><td>I bought a game. It's great.</td><td><span class="say">The game (that) I bought is great.</span></td></tr>
<tr><td>We met some people. They were funny.</td><td><span class="say">The people (who) we met were funny.</span></td></tr>
<tr><td>You recommended a series. I loved it.</td><td><span class="say">I loved the series (that) you recommended.</span></td></tr>
<tr><td>Anna drew a picture. Have you seen it?</td><td><span class="say">Have you seen the picture Anna drew?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Можно ли выбросить «который»?</div><ol>
<li>Посмотрите, что стоит сразу после него.</li>
<li>Другой человек или предмет (I, you, Kate, the boss) → <b>можно</b> выбросить: the game (that) <b>I</b> bought.</li>
<li>Сразу глагол → <b>нельзя</b>: the man <b>who called</b> me. «Который» сам делает действие.</li>
</ol></div>
<p>Предлог уезжает <b>в конец</b>, а если это место — можно сказать <b>where</b>:</p>
<ul class="g-list">
<li><span class="say">Who is the guy you were talking to?</span> — Кто тот парень, с которым ты разговаривал?</li>
<li><span class="say">This is the song I told you about.</span> — Вот песня, о которой я тебе рассказывал.</li>
<li><span class="say">The team I work with is small.</span> — Команда, с которой я работаю, маленькая.</li>
<li><span class="say">The hotel we stayed at was near the beach.</span> = <span class="say">The hotel where we stayed was near the beach.</span></li>
</ul>
<div class="g-bad">The film we watched it was boring.</div>
<div class="g-good">The film we watched was boring. <span class="muted">— it не повторяем</span></div>
<div class="g-bad">The man called me was angry.</div>
<div class="g-good">The man <b>who</b> called me was angry. <span class="muted">— сразу глагол → who обязателен</span></div>
<div class="mini" data-q="Did you like the pizza ___?" data-o="I ordered|I ordered it|who I ordered" data-a="0" data-why="После «которую» идёт I → слово можно убрать, а it не повторяем."></div>
<div class="mini" data-q="The man ___ helped me was very kind." data-o="who|(ничего)|which" data-a="0" data-why="Сразу глагол helped → нужен who."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">If it will rain, we'll stay at home.</div><div class="g-good">If it <b>rains</b>, we'll stay at home.</div>
<div class="g-bad">When I'm late, start without me.</div><div class="g-good"><b>If</b> I'm late, start without me.</div>
<div class="g-bad">If I would have a car, I would drive.</div><div class="g-good">If I <b>had</b> a car, I would drive.</div>
<div class="g-bad">If I had more money, I will travel.</div><div class="g-good">If I had more money, I <b>would</b> travel.</div>
<div class="g-bad">If I am you, I would wait.</div><div class="g-good">If I <b>were</b> you, I would wait.</div>
<div class="g-bad">A friend which helps me.</div><div class="g-good">A friend <b>who</b> helps me.</div>
<div class="g-bad">The series you recommended it is great.</div><div class="g-good">The series you recommended is great.</div>
<div class="g-bad">The girl lives upstairs is a pilot.</div><div class="g-good">The girl <b>who</b> lives upstairs is a pilot.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Может случиться → <b>if + настоящее, will</b>; «если бы» → <b>if + had / knew / were, would</b>; «который» → <b>who</b> (люди), <b>which</b> (вещи), <b>that</b> (все) — и его можно убрать, если дальше идёт другой человек: <b>the game I bought</b>.</div>`
      }
    ],
    words: [
      ["if", "если", "If it rains, we'll stay at home.", "Если пойдёт дождь, мы останемся дома."],
      ["would ('d)", "бы (would + глагол)", "I would buy a house by the sea.", "Я бы купил дом у моря."],
      ["If I were you…", "на твоём месте…", "If I were you, I'd take the job.", "На твоём месте я бы согласился на эту работу."],
      ["imagine", "представлять, воображать", "Imagine you had a million dollars.", "Представь, что у тебя миллион долларов."],
      ["rich", "богатый", "If I were rich, I'd travel all the time.", "Если бы я был богат, я бы всё время путешествовал."],
      ["lottery", "лотерея", "What would you do if you won the lottery?", "Что бы ты сделал, если бы выиграл в лотерею?"],
      ["earn", "зарабатывать", "If I earned more, I'd move to a bigger flat.", "Если бы я больше зарабатывал, я бы переехал в квартиру побольше."],
      ["salary", "зарплата", "I'd take the job if the salary was better.", "Я бы согласился на эту работу, если бы зарплата была лучше."],
      ["island", "остров", "If I lived on an island, I'd miss my friends.", "Если бы я жил на острове, я бы скучал по друзьям."],
      ["power", "сила, способность; энергия", "If you had one magic power, what would it be?", "Если бы у тебя была одна волшебная сила, какая бы это была?"],
      ["magic", "магия; волшебный", "A wizard is someone who uses magic.", "Волшебник — это тот, кто использует магию."],
      ["invisible", "невидимый", "If I were invisible, I'd go to every concert for free.", "Если бы я был невидимым, я бы ходил на все концерты бесплатно."],
      ["ghost", "призрак", "The ghost that lives in the castle is friendly.", "Призрак, который живёт в замке, дружелюбный."],
      ["miss", "опоздать на; пропустить; скучать", "If you don't hurry, you'll miss the train.", "Если не поторопишься, опоздаешь на поезд."],
      ["interview", "собеседование; интервью", "If the interview goes well, I'll start in May.", "Если собеседование пройдёт хорошо, я начну в мае."],
      ["decision", "решение", "The decision we made was right.", "Решение, которое мы приняли, было правильным."],
      ["recommend", "советовать, рекомендовать", "The series you recommended is great.", "Сериал, который ты посоветовал, отличный."],
      ["honest", "честный", "I like people who are honest.", "Мне нравятся честные люди."],
      ["customer", "покупатель, клиент", "A customer is a person who buys something.", "Покупатель — это человек, который что-то покупает."],
      ["colleague", "коллега", "The colleague I sit next to is from Minsk.", "Коллега, рядом с которым я сижу, из Минска."],
      ["stranger", "незнакомец", "A stranger who was waiting for the bus helped me.", "Мне помог незнакомец, который ждал автобус."],
      ["developer", "разработчик", "The developer who fixed the bug is only twenty.", "Разработчику, который починил баг, всего двадцать."],
      ["thief", "вор", "The thief who stole my bike was caught.", "Вора, который украл мой велосипед, поймали."],
      ["liar", "лжец, врун", "Don't trust him — he's a liar.", "Не верь ему — он врун."],
      ["tool", "инструмент", "Figma is a tool that designers use every day.", "Figma — инструмент, которым дизайнеры пользуются каждый день."],
      ["device", "устройство", "The device I use most is my phone.", "Устройство, которым я пользуюсь больше всего, — мой телефон."],
      ["feature", "функция, особенность", "The feature players asked for is finally here.", "Функция, которую просили игроки, наконец появилась."],
      ["machine", "машина, аппарат", "Is there a machine that sells tickets here?", "Здесь есть автомат, который продаёт билеты?"],
      ["villain", "злодей", "The villain who kidnapped the princess lives in a tower.", "Злодей, который похитил принцессу, живёт в башне."],
      ["prize", "приз, награда", "The game that won the prize is from Poland.", "Игра, которая получила приз, — из Польши."]
    ],
    texts: [
      {
        id: 't-a2-20-1', title: 'What would you do?', level: 'A2',
        text: `Kate: OK, a question for the chat while we wait. What would you do if you won a million dollars?
Max: Easy. If I had a million, I'd buy a house by the sea and a really good PC.
Kate: Only a PC? If I were you, I'd open a game studio.
Max: Hmm. If I opened a studio, I'd have to work all the time. No, thanks!
Kate: Fair. Next question. If you had one magic power, what would it be?
Max: I'd like to be invisible. If I were invisible, I could go to any concert for free.
Kate: That's not very honest! I'd choose to fly. Then I wouldn't need the metro.
Max: If you could fly, you'd never be late for work.
Kate: Exactly! Oh, look at the time. The next match starts soon. If we win it, we'll be in the final.
Max: And if we lose?
Kate: If we lose, we'll play again next week. But we won't lose!
Max: The team we're playing against is strong. The guy who plays mid is in the top hundred.
Kate: I know. But the plan we made yesterday is good. If everyone follows it, we'll be fine.
Max: OK. If I start to panic, just tell me to breathe.
Kate: Deal. Let's go!`,
        questions: [
          { q: 'What would Max buy with a million dollars?', o: ['A game studio', 'A car and a flat', 'A house by the sea and a PC'], a: 2 },
          { q: 'What magic power would Kate choose?', o: ['To fly', 'To be invisible', 'To be very strong'], a: 0 },
          { q: 'What will happen if they win the match?', o: ['They will play again next week', 'They will be in the final', 'They will win a million'], a: 1 }
        ]
      },
      {
        id: 't-a2-20-2', title: 'The people I work with', level: 'A2',
        text: `I work at a small studio that makes mobile games. There are only twelve of us, so I know everyone well.
Oleg is the man who started the studio. He is the person you go to if you have a big problem. Vera is our artist. The characters she draws are cute and a little bit strange — players love them. Dima is a developer who never sleeps. If there is a bug at three in the morning, Dima fixes it before breakfast.
I'm a UI designer. I make the buttons, menus and icons that players see every day. The tool I use most is Figma. The game we released last spring has two million downloads now, and the menu I designed for it won a small prize.
Of course, the job isn't perfect. The office we work in is a long way from my home, and the coffee machine that we have is terrible. If I could change one thing, I'd move the office closer to the metro. And if I were the boss, I'd buy a better coffee machine!
But I like the people I work with, and I like the games we make. If everything goes well, next year we'll start a bigger project — a game which has a real story. I can't wait.`,
        questions: [
          { q: 'Who started the studio?', o: ['Vera', 'Oleg', 'Dima'], a: 1 },
          { q: 'What does Dima do if there is a bug at night?', o: ['He calls Oleg', 'He goes to sleep', 'He fixes it before breakfast'], a: 2 },
          { q: 'What one thing would the writer change?', o: ['Where the office is', 'The people in the team', 'The tool he uses'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'If it ___ tomorrow, we\'ll play at home.', o: ['will rain', 'rains', 'rained'], a: 1, why: 'Реальное условие: после if — настоящее время.' },
      { t: 'choice', q: 'We\'ll miss the start of the match ___ we don\'t leave now.', o: ['if', 'when', 'who'], a: 0, why: 'Может случиться, а может нет → if.' },
      { t: 'choice', q: 'I\'m going to the shop. ___ I get back, let\'s cook dinner.', o: ['If', 'Which', 'When'], a: 2, why: 'Я точно вернусь → when.' },
      { t: 'choice', q: 'If I ___ a dog, I\'d walk it every day.', o: ['had', 'have', 'will have'], a: 0, why: 'Фантазия (собаки нет) → if + прошедшая форма: had.' },
      { t: 'choice', q: 'I don\'t know the answer. If I knew it, I ___ you.', o: ['will tell', 'tell', 'would tell'], a: 2, why: '«Если бы» → would + глагол.' },
      { t: 'choice', q: '___, I wouldn\'t buy that laptop. It\'s too slow.', o: ['If I am you', 'If I were you', 'If I would be you'], a: 1, why: 'Совет «на твоём месте» → If I were you.' },
      { t: 'choice', q: 'Do you know anyone ___ can fix my bike?', o: ['which', 'what', 'who'], a: 2, why: 'Речь о человеке → who.' },
      { t: 'choice', q: 'The game ___ is a bit boring.', o: ['I bought it yesterday', 'I bought yesterday', 'who I bought yesterday'], a: 1, why: 'После «которую» идёт I → слово можно убрать; it не повторяем.' },
      { t: 'gap', q: 'If you ___ hungry, there\'s pizza in the fridge. (be)', a: ['are'], why: 'Реальное условие: if + настоящее (are).' },
      { t: 'gap', q: 'If we lived in Spain, we ___ swim every day. (бы)', a: ['would', 'could'], why: '«Если бы» → would + глагол.' },
      { t: 'gap', q: 'I\'d help you if I ___, but I\'m busy. (can)', a: ['could'], why: 'В if-части «если бы» can → could.' },
      { t: 'gap', q: 'What ___ you do if you lost your phone? (бы)', a: ['would'], why: 'Вопрос-фантазия: What would you do if…?' },
      { t: 'gap', q: 'A cat is an animal ___ likes to sleep a lot. (который)', a: ['which', 'that'], why: 'Животное, не человек → which или that.' },
      { t: 'gap', q: 'This is the hotel ___ we stayed last summer. (где)', a: ['where'], why: 'О месте можно сказать where: the hotel where we stayed.' },
      { t: 'order', a: 'The series you recommended is great', ru: 'Сериал, который ты посоветовал, отличный' },
      { t: 'order', a: 'If I were you I would call her', ru: 'На твоём месте я бы ей позвонил' },
      { t: 'tr', q: 'Если у меня будет время, я тебе позвоню.', a: ['if i have time i will call you', 'if i have time i\'ll call you', 'i will call you if i have time', 'i\'ll call you if i have time'] },
      { t: 'tr', q: 'Если бы я был богатым, я бы путешествовал.', a: ['if i were rich i would travel', 'if i was rich i would travel', 'if i were rich i\'d travel', 'if i was rich i\'d travel', 'i would travel if i were rich', 'i would travel if i was rich', 'i\'d travel if i were rich', 'i\'d travel if i was rich'] },
      { t: 'listen', say: 'What would you do if you won?', a: ['what would you do if you won'] }
    ],
    test: [
      { t: 'choice', q: 'If you ___ the new level, tell me what you think.', o: ['will try', 'tried', 'try'], a: 2, why: 'Реальное условие: после if — настоящее время.' },
      { t: 'gap', q: 'If I ___ you, I\'d take the job. (be)', a: ['were', 'was'], why: '«На твоём месте» → If I were you (в разговоре и was).' },
      { t: 'choice', q: 'I\'ll buy the game if it ___ too expensive.', o: ['isn\'t', 'wasn\'t', 'won\'t be'], a: 0, why: 'Цена пока неизвестна, это возможно → if + настоящее.' },
      { t: 'choice', q: 'I\'d buy the game if it ___ so expensive, but it costs 70 dollars.', o: ['isn\'t', 'won\'t be', 'wasn\'t'], a: 2, why: 'Игра на самом деле дорогая → «если бы» → wasn\'t.' },
      { t: 'gap', q: 'If we ___ a car, we could go to the mountains this weekend. (have)', a: ['had'], why: '«Если бы» о настоящем → if + прошедшая форма: had.' },
      { t: 'choice', q: 'Is it OK ___ I open the window?', o: ['when', 'if', 'which'], a: 1, why: 'Просим разрешения: Is it OK if I…?' },
      { t: 'choice', q: 'The woman ___ lives upstairs is a pilot.', o: ['who', 'which', 'she'], a: 0, why: 'Человек, сразу глагол → who обязателен.' },
      { t: 'choice', q: 'The film we watched ___ boring.', o: ['it was', 'was', 'who was'], a: 1, why: 'Слово «который» опущено, it не повторяем: the film we watched was…' },
      { t: 'gap', q: 'Who is the guy you were talking ___? (предлог в конце)', a: ['to', 'with'], why: 'Предлог уходит в конец: the guy you were talking to.' },
      { t: 'choice', q: 'Выберите правильное предложение:', o: ['I have a friend who he plays the guitar.', 'I have a friend which plays the guitar.', 'I have a friend who plays the guitar.'], a: 2, why: 'Для человека — who, и he после него не нужен.' },
      { t: 'gap', q: 'If you don\'t hurry, you ___ the bus. (miss)', a: ['will miss', '\'ll miss'], why: 'Реальное условие: во второй половине will + глагол.' },
      { t: 'choice', q: 'Where ___ you live if you could live anywhere?', o: ['will', 'do', 'would'], a: 2, why: 'Фантазия (if you could) → would.' }
    ]
  }
);
