// Юниты A2 21–22: сложные вопросы (предлог в конце, What's it like?, Do you know where…?, if/whether);
// still/yet/already глубже, give it to me, the + названия мест + итог A2
COURSE.units.push(
  // ───────────────────────────── UNIT A2-21 ─────────────────────────────
  {
    id: 'a2-21', level: 'A2', num: 21, track: 'main',
    books: { red: [46, 49] },
    title: 'Сложные вопросы: Who is she talking to? Do you know where…?',
    summary: 'Научимся спрашивать «С кем ты говоришь?», «Какой он?» и вежливо: «Не подскажете, где…?», «Ты не знаешь, придёт ли он?» — без ошибок в порядке слов.',
    grammar: [
      {
        title: '1. Главная идея: предлог уезжает в конец, а спрятанный вопрос теряет вопросительный порядок',
        html: `
<div class="g-idea">В русском предлог стоит в начале вопроса: «<b>С кем</b>…?», «<b>О чём</b>…?». В английском первым идёт вопросительное слово, а предлог <b>уезжает в самый конец</b>. И второе правило: если вопрос спрятан внутри другой фразы («Ты знаешь, где…?», «Не помню, где…»), слова в нём стоят <b>как в утверждении</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p><b>С кем</b> ты разговариваешь?</p><p><b>О чём</b> этот сериал?</p><p><b>Какая</b> там погода?</p><p>Ты знаешь, <b>где Макс</b>?</p><p>Не помню, <b>где он живёт</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Who</b> are you talking <b>to</b>?</span></p><p><span class="say"><b>What</b> is this series <b>about</b>?</span></p><p><span class="say"><b>What</b>'s the weather <b>like</b> there?</span></p><p><span class="say">Do you know where <b>Max is</b>?</span></p><p><span class="say">I don't remember where <b>he lives</b>.</span></p></div>
</div>
<div class="g-tip">Предлог «прилипает» к своему глаголу: <b>talk to</b>, <b>wait for</b>, <b>listen to</b>. Глагол в вопросе стоит ближе к концу — и предлог едет вместе с ним.</div>
<div class="mini" data-q="«О чём ты думаешь?»" data-o="About what are you thinking?|What are you thinking about?|What you are thinking about?" data-a="1" data-why="Вопросительное слово в начале, предлог about — в конце, порядок вопроса: are you thinking."></div>`
      },
      {
        title: '2. Who are you talking to? — предлог в конце вопроса',
        html: `
<p>Вы уже умеете строить вопросы с who, what, where (урок a1-17). Теперь добавим глаголы, у которых есть «свой» предлог.</p>
<div class="g-formula"><span class="g-part">Who / What / Where / Which…</span><span class="g-plus">+</span><span class="g-part">помощник</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-plus">+</span><span class="g-part g-v">ПРЕДЛОГ ?</span></div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>Anna is talking to somebody.</td><td><span class="say">Who is Anna talking to?</span></td></tr>
<tr><td>He's waiting for someone.</td><td><span class="say">Who is he waiting for?</span></td></tr>
<tr><td>They're arguing about something.</td><td><span class="say">What are they arguing about?</span></td></tr>
<tr><td>This mouse belongs to somebody.</td><td><span class="say">Who does this mouse belong to?</span></td></tr>
<tr><td>The cat is afraid of something.</td><td><span class="say">What is the cat afraid of?</span></td></tr>
</table>
<p>Частые пары «глагол + предлог» — все они дают предлог в конце вопроса:</p>
<ul class="g-list">
<li><span class="say">What are you working on?</span> — Над чем ты работаешь? <span class="muted">(work on)</span></li>
<li><span class="say">What kind of music do you listen to?</span> — Какую музыку ты слушаешь? <span class="muted">(listen to)</span></li>
<li><span class="say">Which server do you play on?</span> — На каком сервере ты играешь?</li>
<li><span class="say">Who did you go to the cinema with?</span> — С кем ты ходил в кино?</li>
<li><span class="say">What are you interested in?</span> — Чем ты интересуешься?</li>
<li><span class="say">Where are you from?</span> — Откуда ты?</li>
<li><span class="say">Which company does she work for?</span> — На какую компанию она работает?</li>
<li><span class="say">What did you pay for?</span> — За что ты заплатил?</li>
</ul>
<div class="g-bad">With who are you playing? · About what is the film?</div>
<div class="g-good"><b>Who</b> are you playing <b>with</b>? · <b>What</b> is the film <b>about</b>?</div>
<p class="muted">В книгах встречается «With whom are you playing?» — это очень официально. В разговоре, в чатах и в играх так почти не говорят.</p>
<div class="mini" data-q="«Над каким проектом ты работаешь?»" data-o="On which project are you working?|Which project are you working on?|Which project you are working on?" data-a="1" data-why="Which project в начале, on — в конце, порядок вопроса: are you working."></div>
<div class="mini" data-q="The podcast was about something. → What ___?" data-o="was the podcast about|about was the podcast|the podcast was about" data-a="0" data-why="Вопрос: was + подлежащее, предлог about — последним."></div>`
      },
      {
        title: '3. Who with? What for? — короткие вопросы-реакции',
        html: `
<div class="g-idea">В живом разговоре часто не повторяют всю фразу, а спрашивают двумя словами: <b>вопросительное слово + предлог</b>. Порядок тот же — предлог в конце.</div>
<table>
<tr><th>Фраза</th><th>Реакция</th><th>По-русски</th></tr>
<tr><td><span class="say">I'm going to a concert tonight.</span></td><td><span class="say">Who with?</span></td><td>С кем?</td></tr>
<tr><td><span class="say">We need to talk.</span></td><td><span class="say">What about?</span></td><td>О чём?</td></tr>
<tr><td><span class="say">I'm saving money.</span></td><td><span class="say">What for?</span></td><td>Для чего? Зачем?</td></tr>
<tr><td><span class="say">I got a strange email.</span></td><td><span class="say">Who from?</span></td><td>От кого?</td></tr>
<tr><td><span class="say">The new guy is really nice.</span></td><td><span class="say">Where from?</span></td><td>Откуда он?</td></tr>
</table>
<p><b>What … for?</b> — это «зачем, с какой целью». Можно и полным вопросом:</p>
<ul class="g-list">
<li><span class="say">What is this button for?</span> — Для чего эта кнопка?</li>
<li><span class="say">What did you do that for?</span> — Зачем ты это сделал? <span class="muted">(часто с упрёком)</span></li>
<li><span class="say">What do you need a second monitor for?</span> — Зачем тебе второй монитор?</li>
</ul>
<div class="g-bad">For what? · With who?</div>
<div class="g-good"><b>What for?</b> · <b>Who with?</b></div>
<div class="g-tip">Как эхо: сначала «кто/что», потом предлог. Who with? What about? — всегда в этом порядке.</div>
<div class="mini" data-q="I'm learning Japanese. — ___? — To play games without translation." data-o="For what|What for|Why for" data-a="1" data-why="Зачем? = What for? — предлог for стоит в конце."></div>`
      },
      {
        title: '4. What is it like? — «Какой он? Как там?»',
        html: `
<div class="g-idea">Чтобы попросить описать человека, место или вещь («Какой он?», «Как там?»), говорят <b>What is … like?</b> Здесь <b>like</b> — не «нравиться», а предлог «похожий на». Поэтому он стоит в конце, как любой предлог.</div>
<div class="g-formula"><span class="g-part">What</span><span class="g-plus">+</span><span class="g-part g-v">is / are / was / were</span><span class="g-plus">+</span><span class="g-part">кто / что</span><span class="g-plus">+</span><span class="g-part g-v">like ?</span></div>
<ul class="g-list">
<li><span class="say">What's your new boss like?</span> — Какой у тебя новый начальник? — <span class="say">She's strict but fair.</span></li>
<li><span class="say">What are your neighbours like?</span> — Какие у тебя соседи? — <span class="say">Quiet, thank God.</span></li>
<li><span class="say">What was the weather like in Sochi?</span> — Какая была погода в Сочи? — <span class="say">It was sunny every day.</span></li>
<li><span class="say">What's the new Zelda like? Is it worth it?</span> — Ну как новая Zelda? Стоит того?</li>
<li><span class="say">What were the lessons like?</span> — Как тебе были уроки?</li>
</ul>
<p>Не путайте похожие вопросы — у них разный смысл:</p>
<table>
<tr><th>Вопрос</th><th>О чём спрашиваем</th></tr>
<tr><td><span class="say">What is he like?</span></td><td>какой он (характер, впечатление)</td></tr>
<tr><td><span class="say">What does he look like?</span></td><td>как он выглядит</td></tr>
<tr><td><span class="say">What does he like?</span></td><td>что ему нравится</td></tr>
<tr><td><span class="say">How is he?</span></td><td>как он (дела, здоровье)</td></tr>
</table>
<div class="g-bad">How is the weather like? · What is she look like?</div>
<div class="g-good"><b>What</b> is the weather like? <span class="muted">(или просто How is the weather?)</span> · What <b>does</b> she look like?</div>
<div class="g-tip">Русское «Какой он?» — почти всегда <b>What is he like?</b>, а не How is he. How с like вместе не ставим.</div>
<div class="mini" data-q="«Какая там еда?»" data-o="How is the food like?|What is the food like?|What does the food like?" data-a="1" data-why="Просим описание → What + is + the food + like."></div>
<div class="mini" data-q="«Как выглядит твой брат?»" data-o="What is your brother like?|What does your brother look like?|How does your brother look like?" data-a="1" data-why="Внешность → What does … look like? (What is he like? — про характер)."></div>`
      },
      {
        title: '5. Do you know where…? — вопрос внутри фразы',
        html: `
<div class="g-idea">Когда вопрос стоит после «Ты знаешь…», «Скажи…», «Не помню…», он <b>перестаёт быть вопросом</b>: сначала идёт <b>кто</b>, потом <b>глагол</b> — как в обычном утверждении.</div>
<table>
<tr><th>Прямой вопрос</th><th>Вопрос внутри фразы</th></tr>
<tr><td><span class="say">Where is Max?</span></td><td><span class="say">Do you know where Max is?</span></td></tr>
<tr><td><span class="say">What time is it?</span></td><td><span class="say">Can you tell me what time it is?</span></td></tr>
<tr><td><span class="say">How old is she?</span></td><td><span class="say">I don't know how old she is.</span></td></tr>
<tr><td><span class="say">Where can I park?</span></td><td><span class="say">Do you know where I can park?</span></td></tr>
<tr><td><span class="say">When are they coming?</span></td><td><span class="say">I'm not sure when they're coming.</span></td></tr>
<tr><td><span class="say">Where have they gone?</span></td><td><span class="say">Do you know where they've gone?</span></td></tr>
<tr><td><span class="say">What was he doing?</span></td><td><span class="say">I don't remember what he was doing.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как собрать</div><ol>
<li>Возьмите обычный вопрос: <i>Where is the meeting room?</i></li>
<li>Поставьте начало: <i>Do you know…</i></li>
<li>После вопросительного слова — <b>кто + глагол</b>: <i>where the meeting room is</i>.</li>
<li>Знак вопроса — только если начало само вопрос: <span class="say">Do you know where the meeting room is?</span> но <span class="say">I don't know where the meeting room is.</span></li>
</ol></div>
<p>Частые «начала»:</p>
<ul class="g-list">
<li><span class="say">Do you know…?</span> — Ты не знаешь…? · <span class="say">Do you remember…?</span> — Помнишь…?</li>
<li><span class="say">Can you tell me…? / Could you tell me…?</span> — Не подскажете…? <span class="muted">(could — вежливее)</span></li>
<li><span class="say">I don't know…</span> · <span class="say">I'm not sure…</span> · <span class="say">I have no idea…</span> — понятия не имею</li>
<li><span class="say">I wonder…</span> — Интересно… <span class="muted">(«я задаюсь вопросом»)</span></li>
</ul>
<div class="g-bad">Do you know where is the station? · I don't know how old is he.</div>
<div class="g-good">Do you know where <b>the station is</b>? · I don't know how old <b>he is</b>.</div>
<div class="mini" data-q="Could you tell me where ___?" data-o="is the lift|the lift is|the lift" data-a="1" data-why="Вопрос внутри фразы → порядок утверждения: the lift is."></div>`
      },
      {
        title: '6. Без do, does, did: I don\'t know where he lives',
        html: `
<div class="g-idea">В спрятанном вопросе помощник <b>do / does / did исчезает</b>. Глагол возвращает свою обычную форму: <b>-s</b> в Present Simple для he/she/it, <b>прошедшую</b> форму в Past Simple.</div>
<table>
<tr><th>Прямой вопрос</th><th>Вопрос внутри фразы</th></tr>
<tr><td><span class="say">Where does he live?</span></td><td><span class="say">I don't know where he lives.</span></td></tr>
<tr><td><span class="say">What does Kate want?</span></td><td><span class="say">Do you know what Kate wants?</span></td></tr>
<tr><td><span class="say">Why did she leave?</span></td><td><span class="say">Do you know why she left?</span></td></tr>
<tr><td><span class="say">Where did I put my keys?</span></td><td><span class="say">I can't remember where I put my keys.</span></td></tr>
<tr><td><span class="say">How do you say it in English?</span></td><td><span class="say">I don't know how you say it in English.</span></td></tr>
<tr><td><span class="say">What did you say?</span></td><td><span class="say">Sorry, I didn't hear what you said.</span></td></tr>
</table>
<p>Если <b>who / what</b> — это сам «деятель» (подлежащее), помощника не было и в прямом вопросе, так что ничего не меняется:</p>
<ul class="g-list">
<li><span class="say">Who broke the build? → Nobody knows who broke the build.</span> — Никто не знает, кто сломал сборку.</li>
<li><span class="say">What happened? → Tell me what happened.</span> — Расскажи, что случилось.</li>
</ul>
<div class="g-bad">Can you tell me where does she work? · I don't know what did he say.</div>
<div class="g-good">Can you tell me where she <b>works</b>? · I don't know what he <b>said</b>.</div>
<div class="g-tip">Проверка: закройте пальцем начало фразы. Остаток должен звучать как обычное утверждение: «…where she works», «…what he said».</div>
<div class="mini" data-q="Do you know what time the shop ___?" data-o="does close|closes|close" data-a="1" data-why="does исчезает, а -s переходит к глаголу: the shop closes."></div>
<div class="mini" data-q="I don't remember where ___ my password." data-o="did I write|I wrote|I did write" data-a="1" data-why="did исчезает, глагол в прошедшей форме: I wrote."></div>`
      },
      {
        title: '7. Вопросы «да/нет»: if и whether = «ли»',
        html: `
<div class="g-idea">Если в вопросе нет вопросительного слова (Is…? Do…? Can…? Have…?), внутри фразы ставим <b>if</b> или <b>whether</b>. По-русски это частица <b>«ли»</b>. Дальше — снова порядок утверждения.</div>
<table>
<tr><th>Прямой вопрос</th><th>Вопрос внутри фразы</th></tr>
<tr><td><span class="say">Is Max online?</span></td><td><span class="say">Do you know if Max is online?</span></td></tr>
<tr><td><span class="say">Can Anna come?</span></td><td><span class="say">I don't know if Anna can come.</span></td></tr>
<tr><td><span class="say">Did anybody call?</span></td><td><span class="say">Do you know whether anybody called?</span></td></tr>
<tr><td><span class="say">Have they got a PS5?</span></td><td><span class="say">I wonder if they've got a PS5.</span></td></tr>
<tr><td><span class="say">Is the game free?</span></td><td><span class="say">I'm not sure whether it's free or not.</span></td></tr>
</table>
<p><b>whether</b> = if, только чуть официальнее; часто с <b>or not</b>.</p>
<div class="g-bad">Do you know is he at home? · I don't know does she like sushi.</div>
<div class="g-good">Do you know <b>if he is</b> at home? · I don't know <b>if she likes</b> sushi.</div>
<div class="g-tip">Не путайте два if. <b>if = «если»</b> (урок a2-20): после него нет will — <span class="say">If it rains, we'll stay home.</span> <b>if = «ли»</b>: will можно и нужно — <span class="say">I don't know if it will rain tomorrow.</span> — Не знаю, пойдёт ли завтра дождь.</div>
<p>Ещё удобный приём: <b>вопросительное слово + to + глагол</b> = «что/как/куда мне делать»:</p>
<ul class="g-list">
<li><span class="say">I don't know what to do.</span> — Не знаю, что делать.</li>
<li><span class="say">Can you tell me how to get to the station?</span> — Не подскажете, как пройти к вокзалу?</li>
<li><span class="say">I can't decide which game to buy.</span> — Не могу решить, какую игру купить.</li>
</ul>
<div class="mini" data-q="«Я не знаю, понравится ли ей подарок.»" data-o="I don't know if she likes the present.|I don't know if she will like the present.|I don't know will she like the present." data-a="1" data-why="if = «ли», речь о будущем → will можно: if she will like."></div>
<div class="mini" data-q="Can you tell me ___ this app is free?" data-o="is|if|what" data-a="1" data-why="Вопрос «да/нет» (Is it free?) → внутри фразы if."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">With who do you live?</div><div class="g-good"><b>Who</b> do you live <b>with</b>?</div>
<div class="g-bad">About what are you talking?</div><div class="g-good"><b>What</b> are you talking <b>about</b>?</div>
<div class="g-bad">For what do you need it?</div><div class="g-good"><b>What</b> do you need it <b>for</b>?</div>
<div class="g-bad">How is your new job like?</div><div class="g-good"><b>What</b> is your new job like?</div>
<div class="g-bad">What is he look like?</div><div class="g-good">What <b>does</b> he look like?</div>
<div class="g-bad">Do you know where is Anna?</div><div class="g-good">Do you know where <b>Anna is</b>?</div>
<div class="g-bad">I don't know where does he work.</div><div class="g-good">I don't know where he <b>works</b>.</div>
<div class="g-bad">Can you tell me what did she say?</div><div class="g-good">Can you tell me what she <b>said</b>?</div>
<div class="g-bad">I don't know is it free.</div><div class="g-good">I don't know <b>if it is</b> free.</div>
<div class="g-bad">I wonder where are they?</div><div class="g-good">I wonder where <b>they are</b>. <span class="muted">— это не вопрос, в конце точка</span></div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Предлог — в конец: <b>Who are you talking to? What's it like?</b> Спрятанный вопрос — порядок утверждения и без do/did: <b>Do you know where he lives? I don't know if she's coming.</b></div>`
      }
    ],
    words: [
      ['talk to', 'разговаривать с', 'Who are you talking to?', 'С кем ты разговариваешь?'],
      ['talk about', 'говорить о', 'What are they talking about?', 'О чём они говорят?'],
      ['listen to', 'слушать', 'What are you listening to?', 'Что ты слушаешь?'],
      ['look at', 'смотреть на', 'What are you looking at?', 'На что ты смотришь?'],
      ['wait for', 'ждать (кого-то, что-то)', 'Who are you waiting for?', 'Кого ты ждёшь?'],
      ['belong to', 'принадлежать', 'Who does this bag belong to?', 'Чья это сумка?'],
      ['be afraid of', 'бояться', 'What are you afraid of?', 'Чего ты боишься?'],
      ['be interested in', 'интересоваться', 'What are you interested in?', 'Чем ты интересуешься?'],
      ['think about', 'думать о', 'What are you thinking about?', 'О чём ты думаешь?'],
      ['worry about', 'волноваться о', 'What are you worried about?', 'О чём ты волнуешься?'],
      ['work on', 'работать над', 'What are you working on now?', 'Над чем ты сейчас работаешь?'],
      ['pay for', 'платить за', 'Who paid for the pizza?', 'Кто заплатил за пиццу?'],
      ['depend on', 'зависеть от', 'It depends on the weather.', 'Это зависит от погоды.'],
      ['agree with', 'соглашаться с', 'Who do you agree with?', 'С кем ты согласен?'],
      ['come from', 'быть родом из', 'Where does she come from?', 'Откуда она родом?'],
      ['like (What is it like?)', 'какой (похожий на)', 'What\'s your new flat like?', 'Какая у тебя новая квартира?'],
      ['look like', 'выглядеть как, быть похожим', 'What does your brother look like?', 'Как выглядит твой брат?'],
      ['wonder', 'интересоваться, задаваться вопросом', 'I wonder where he is.', 'Интересно, где он.'],
      ['whether', 'ли', 'I\'m not sure whether it\'s free.', 'Я не уверен, бесплатно ли это.'],
      ['if', 'ли; если', 'Do you know if Max is online?', 'Ты не знаешь, Макс в сети?'],
      ['remember', 'помнить', 'I don\'t remember where I put it.', 'Не помню, куда я это положил.'],
      ['explain', 'объяснять', 'Can you explain how it works?', 'Можешь объяснить, как это работает?'],
      ['sure', 'уверенный', 'I\'m not sure when they\'re coming.', 'Не уверен, когда они приедут.'],
      ['idea', 'идея; понятие', 'I have no idea what he wants.', 'Понятия не имею, чего он хочет.'],
      ['exactly', 'точно, именно', 'I don\'t know exactly where it is.', 'Я точно не знаю, где это.'],
      ['actually', 'на самом деле', 'Do you actually know who made it?', 'Ты правда знаешь, кто это сделал?'],
      ['happen', 'случаться', 'Tell me what happened.', 'Расскажи, что случилось.'],
      ['mean', 'значить, иметь в виду', 'Do you know what this word means?', 'Ты знаешь, что значит это слово?'],
      ['find out', 'узнать, выяснить', 'Can you find out when the stream starts?', 'Можешь узнать, когда начинается стрим?'],
      ['weather', 'погода', 'What was the weather like?', 'Какая была погода?'],
      ['neighbour', 'сосед', 'What are your neighbours like?', 'Какие у тебя соседи?']
    ],
    texts: [
      {
        id: 't-a2-21-1', title: 'First day at the studio', level: 'A2',
        text: `Nina: Hi! You're the new designer, aren't you? I'm Nina.
Leo: Hi, Nina. Yes, I'm Leo. It's my first day. Do you know where the kitchen is? I really need coffee.
Nina: Sure, it's next to the meeting room. The coffee machine is a bit strange, though. I'll show you how it works.
Leo: Thanks! So what are you working on right now?
Nina: A mobile game about pirates. I'm drawing the islands.
Leo: Sounds fun. Who are you working with?
Nina: With Tom and Kate. Tom is great. Kate is very strict, but she's fair.
Leo: And what's the boss like?
Nina: Mark? He's friendly, but he talks a lot. Our meetings are always too long.
Leo: Good to know. By the way, do you know if there is a gym near here?
Nina: I'm not sure whether it's still open, but there was one on Green Street.
Leo: OK. And one more question. Who does this laptop belong to? It was on my desk.
Nina: I have no idea who left it there. Ask Mark — he knows everything.
Leo: What is he doing now?
Nina: I don't know what he's doing, but I can hear him. He's on a call. Let's get that coffee first!`,
        questions: [
          { q: 'What is Nina working on?', o: ['A game about pirates', 'A website for a gym', 'A film about islands'], a: 0 },
          { q: 'What is Kate like?', o: ['Friendly but talkative', 'Strict but fair', 'Quiet and shy'], a: 1 },
          { q: 'Who, in Nina\'s opinion, can answer the question about the laptop?', o: ['Tom', 'Kate', 'Mark'], a: 2 }
        ]
      },
      {
        id: 't-a2-21-2', title: 'Who is Pixel Ghost?', level: 'A2',
        text: `There is a streamer on the internet called Pixel Ghost. He plays old horror games every night, and thousands of people watch him. But nobody knows who he is.
His fans have a lot of questions. Where does he live? How old is he? What does he look like? He never shows his face, and he never says where he comes from. People in the chat often ask him, "Where are you from?" He always answers, "From the dark!" and laughs.
Some fans think they know what his real name is. Others say they know which city he lives in, because once you could hear a train announcement behind him. But they are not sure if that is true.
My friend Dasha is a big fan. Last week she asked me, "Do you know what software he uses for his voice?" I had no idea what to say. Then she asked, "I wonder whether he works in a normal office during the day. What do you think?"
I think the mystery is part of the show. People don't really want to know what his face is like. They want to know what he is going to play next and who he is talking to when he whispers "Are you there?" in the middle of the night.`,
        questions: [
          { q: 'What does Pixel Ghost play?', o: ['New shooters', 'Old horror games', 'Racing games'], a: 1 },
          { q: 'What does he answer when people ask where he is from?', o: ['From the dark', 'From a big city', 'From the internet'], a: 0 },
          { q: 'Why do some fans think they know his city?', o: ['He showed a map', 'They heard a train announcement', 'He told his real name'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Who does this backpack belong ___?', o: ['to', 'of', 'with'], a: 0, why: 'belong to — «принадлежать кому-то»; предлог to остаётся в конце вопроса.' },
      { t: 'choice', q: '«Над чем ты работаешь?»', o: ['On what are you working?', 'What are you working on?', 'What you are working on?'], a: 1, why: 'What в начале, вопросительный порядок are you, предлог on — в конце.' },
      { t: 'choice', q: 'I need to borrow some money. — What ___?', o: ['for', 'about', 'from'], a: 0, why: 'What for? = зачем, для чего.' },
      { t: 'choice', q: 'What\'s your new flat ___? — It\'s small but cosy.', o: ['like', 'look like', 'likes'], a: 0, why: 'Просим описание → What is … like? (like — предлог).' },
      { t: 'choice', q: 'What does your sister ___? — She\'s tall with short dark hair.', o: ['like', 'look like', 'looks like'], a: 1, why: 'Про внешность → What does … look like? После does — без -s.' },
      { t: 'choice', q: 'Do you know where ___?', o: ['does Max live', 'Max lives', 'lives Max'], a: 1, why: 'Вопрос внутри фразы: без does, порядок утверждения, -s у глагола.' },
      { t: 'choice', q: 'Can you tell me what time ___?', o: ['is it', 'it is', 'does it'], a: 1, why: 'Внутри фразы сначала кто (it), потом глагол (is).' },
      { t: 'choice', q: 'I don\'t know ___ Anna is coming to the party.', o: ['if', 'that', 'what'], a: 0, why: 'Прямой вопрос «Is Anna coming?» без вопросительного слова → if = «ли».' },
      { t: 'gap', q: 'Who did you go to the cinema ___? (с)', a: ['with'], why: 'go with somebody → предлог with в конце вопроса.' },
      { t: 'gap', q: 'What is this series ___? — It\'s about a robot detective. (о)', a: ['about'], why: '«О чём?» = What … about? — about в конце.' },
      { t: 'gap', q: 'What ___ the weather like in Sochi last week? (be)', a: ['was'], why: 'Прошлое, the weather — одно → What was … like?' },
      { t: 'gap', q: 'I can\'t remember where I ___ my headphones. (put, прошлое)', a: ['put'], why: 'did исчезает, глагол в прошедшей форме: put — put.' },
      { t: 'gap', q: 'Do you know what Kate ___ for her birthday? (want)', a: ['wants'], why: 'Без does, но -s переходит к глаголу: Kate wants.' },
      { t: 'gap', q: 'I have no idea what ___. (делать — to + глагол)', a: ['to do'], why: 'Вопросительное слово + to + глагол = «что делать».' },
      { t: 'order', a: 'Who are you waiting for', ru: 'Кого ты ждёшь?' },
      { t: 'order', a: 'Do you know where the station is', ru: 'Ты не знаешь, где вокзал?' },
      { t: 'order', a: 'I wonder if he got my message', ru: 'Интересно, получил ли он моё сообщение' },
      { t: 'tr', q: 'О чём ты думаешь?', a: ['what are you thinking about'] },
      { t: 'tr', q: 'Какая там погода?', a: ['what is the weather like there', 'what\'s the weather like there', 'how is the weather there', 'how\'s the weather there'] },
      { t: 'listen', say: 'Could you tell me where the lift is?', a: ['could you tell me where the lift is'] }
    ],
    test: [
      { t: 'choice', q: 'The parcel is from someone. → Who ___ from?', o: ['is the parcel', 'the parcel is', 'does the parcel'], a: 0, why: 'Обычный вопрос: is + подлежащее, предлог from — в конце.' },
      { t: 'choice', q: 'What are you afraid ___?', o: ['from', 'of', 'about'], a: 1, why: 'be afraid of — «бояться чего-то».' },
      { t: 'gap', q: 'What kind of podcasts do you listen ___?', a: ['to'], why: 'listen to → to остаётся в конце вопроса.' },
      { t: 'choice', q: '«Какой он, твой новый тимлид?»', o: ['How is your new team lead like?', 'What is your new team lead like?', 'What does your new team lead like?'], a: 1, why: 'Описание человека → What is … like? How с like не ставим.' },
      { t: 'choice', q: 'What does he like? — это:', o: ['Что ему нравится?', 'Какой он?', 'Как он выглядит?'], a: 0, why: 'Здесь like — глагол «нравиться» (с does). «Какой он» — What is he like?' },
      { t: 'gap', q: 'Could you tell me how much this keyboard ___? (cost)', a: ['costs'], why: 'Внутри фразы нет does, поэтому -s у глагола: this keyboard costs.' },
      { t: 'choice', q: 'I\'m not sure where ___.', o: ['have they gone', 'they have gone', 'did they go'], a: 1, why: 'Спрятанный вопрос → порядок утверждения: they have gone.' },
      { t: 'gap', q: 'Sorry, I didn\'t hear what you ___. (say)', a: ['said'], why: 'What did you say? → внутри фразы did исчезает: what you said.' },
      { t: 'choice', q: 'Do you know ___ they\'ve got a PS5 or not?', o: ['whether', 'what', 'that'], a: 0, why: 'Вопрос «да/нет» + or not → whether (= if, «ли»).' },
      { t: 'choice', q: '«Не знаю, придёт ли он завтра.»', o: ['I don\'t know if he comes tomorrow.', 'I don\'t know if he will come tomorrow.', 'I don\'t know will he come tomorrow.'], a: 1, why: 'if = «ли» (не «если») → будущее через will можно; порядок утверждения.' },
      { t: 'choice', q: 'Nobody knows who ___ the window.', o: ['did break', 'broke', 'breaks'], a: 1, why: 'who — сам деятель, помощника нет: who broke.' },
      { t: 'gap', q: 'I\'m learning to code. — Really? What ___? (для чего — 1 слово)', a: ['for'], why: 'What for? = зачем, с какой целью.' }
    ]
  },

  // ───────────────────────────── UNIT A2-22 ─────────────────────────────
  {
    id: 'a2-22', level: 'A2', num: 22, track: 'main',
    books: { red: [96, 73] },
    title: 'Still, yet, already; Give it to me; the + названия мест',
    summary: 'Научимся говорить «до сих пор не…» и «больше не…», правильно ставить «кому» и «что» после give, send, show и понимать, когда у названий мест есть the. И подведём итог всего A2.',
    grammar: [
      {
        title: '1. Главная идея: три места, где русская интуиция подводит',
        html: `
<div class="g-idea">В последнем уроке A2 — три темы, на которых спотыкаются даже те, кто давно учит английский: <b>still / yet / already</b> в разных временах, <b>порядок «кому» и «что»</b> после give, send, show и <b>the</b> в названиях мест.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>до сих пор не</b> закончил.</p><p>Дай <b>её мне</b>.</p><p>Я дал <b>Саше ключи</b>.</p><p>Мы летали над <span class="g-gap">_</span> Атлантикой.</p><p><span class="g-gap">_</span> Москва — столица <span class="g-gap">_</span> России.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>still haven't</b> finished.</span></p><p><span class="say">Give <b>it to me</b>.</span></p><p><span class="say">I gave <b>Sasha the keys</b>.</span></p><p><span class="say">We flew over <b>the</b> Atlantic.</span></p><p><span class="say">Moscow is the capital of Russia.</span></p></div>
</div>
<div class="g-tip">В русском артиклей нет вообще, а порядок слов свободный. В английском у таких мелочей строгие правила — но их немного, и они логичные.</div>
<div class="mini" data-q="«Дай его мне» (про телефон)" data-o="Give me it.|Give it to me.|Give to me it." data-a="1" data-why="Если «что» — it, говорим give it to me."></div>`
      },
      {
        title: '2. still, yet, already — повторяем и углубляем',
        html: `
<p>Что вы уже знаете (урок a2-2): <b>still</b> — всё ещё, <b>yet</b> — «ещё не» / «уже?» в конце отрицания и вопроса, <b>already</b> — уже, раньше, чем ждали.</p>
<table>
<tr><th>Слово</th><th>Где стоит</th><th>Пример</th></tr>
<tr><td><b>still</b></td><td>перед глаголом, после be</td><td><span class="say">I still use my old tablet.</span> <span class="say">She's still asleep.</span></td></tr>
<tr><td><b>yet</b></td><td>в конце (минус и вопрос)</td><td><span class="say">Has the patch come out yet?</span></td></tr>
<tr><td><b>already</b></td><td>перед глаголом, после be</td><td><span class="say">He's already here!</span> <span class="say">I already know.</span></td></tr>
</table>
<p><b>Новое 1. still + отрицание</b> = «до сих пор не…», «всё никак не…». still стоит <b>перед</b> haven't / don't / can't. Оттенок: уже пора бы!</p>
<ul class="g-list">
<li><span class="say">I haven't finished yet.</span> — Я ещё не закончил. <span class="muted">(спокойно)</span></li>
<li><span class="say">I still haven't finished.</span> — Я до сих пор не закончил. <span class="muted">(долго, раздражает)</span></li>
<li><span class="say">He still doesn't know the rules.</span> — Он до сих пор не знает правил.</li>
<li><span class="say">I still can't beat this boss!</span> — Я всё никак не могу победить этого босса!</li>
</ul>
<p><b>Новое 2. Not yet</b> — готовый короткий ответ: <span class="say">Are you ready? — Not yet.</span> — Ещё нет.</p>
<p><b>Новое 3. already в вопросе</b> — удивление «уже?!»: <span class="say">Are you leaving already?</span> — Ты уже уходишь?! <span class="say">Is it midnight already?</span></p>
<p><b>Новое 4. Противоположность still</b> — <b>not … any more</b> (= not … any longer) — «больше не»:</p>
<ul class="g-list">
<li><span class="say">I don't play that game any more.</span> — Я больше не играю в эту игру.</li>
<li><span class="say">She doesn't live here any longer.</span> — Она здесь больше не живёт.</li>
</ul>
<div class="g-bad">I haven't still finished. · I don't play it more.</div>
<div class="g-good">I <b>still haven't</b> finished. · I don't play it <b>any more</b>.</div>
<div class="mini" data-q="It's been two weeks, and he ___ answered my email." data-o="yet hasn't|still hasn't|hasn't still" data-a="1" data-why="still + отрицание: still стоит перед hasn't."></div>
<div class="mini" data-q="I used to watch anime, but I don't watch it ___." data-o="still|yet|any more" data-a="2" data-why="«Больше не» = not … any more."></div>`
      },
      {
        title: '3. Give me the book / Give the book to me — два порядка',
        html: `
<div class="g-idea">После <b>give, lend, send, show, pass, bring, offer, sell, tell, teach, pay</b> можно поставить слова в двух порядках: <b>кому + что</b> (без предлога) или <b>что + to + кому</b>.</div>
<div class="g-formula"><span class="g-part g-v">give</span><span class="g-plus">+</span><span class="g-part">кому</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-sep">·</span><span class="g-part g-v">give</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part">to кому</span></div>
<table>
<tr><th>кому + что</th><th>что + to + кому</th></tr>
<tr><td><span class="say">I gave Sasha the keys.</span></td><td><span class="say">I gave the keys to Sasha.</span></td></tr>
<tr><td><span class="say">Can you send me the file?</span></td><td><span class="say">Can you send the file to me?</span></td></tr>
<tr><td><span class="say">She showed us her portfolio.</span></td><td><span class="say">She showed her portfolio to us.</span></td></tr>
<tr><td><span class="say">Could you lend me your charger?</span></td><td><span class="say">Could you lend your charger to me?</span></td></tr>
<tr><td><span class="say">Pass me the salt, please.</span></td><td><span class="say">Pass the salt to Dad.</span></td></tr>
</table>
<p>Какой выбрать? Обычно в конец ставят то, что <b>важнее / новее</b>: <span class="say">I gave the keys to Sasha, not to Masha.</span> — важно, кому. <span class="say">I gave Sasha the keys, not the money.</span> — важно, что.</p>
<p>С <b>buy, get, make, find</b> вместо to — <b>for</b>:</p>
<ul class="g-list">
<li><span class="say">I bought my mum some flowers.</span> = <span class="say">I bought some flowers for my mum.</span></li>
<li><span class="say">I'm going to the shop. Can I get you anything?</span> — Тебе что-нибудь взять?</li>
<li><span class="say">Anna made us dinner.</span> = <span class="say">Anna made dinner for us.</span></li>
</ul>
<div class="g-bad">I gave to Sasha the keys. · I bought a present to my brother.</div>
<div class="g-good">I gave <b>Sasha the keys</b>. / I gave the keys <b>to Sasha</b>. · I bought a present <b>for</b> my brother.</div>
<div class="mini" data-q="Can you ___ the link?" data-o="send to me|send me|send for me" data-a="1" data-why="кому + что без предлога: send me the link."></div>
<div class="mini" data-q="I bought a new mouse ___ my brother." data-o="to|for|—" data-a="1" data-why="buy something for somebody — с buy/get/make предлог for."></div>`
      },
      {
        title: '4. it и them — только «give it to me»; lend или borrow',
        html: `
<div class="g-idea">Если «что» — это <b>it</b> или <b>them</b>, выбираем порядок с to: <b>give it to me</b>, <b>send them to her</b>.</div>
<ul class="g-list">
<li><span class="say">That's my charger. Give it to me.</span> — Это моя зарядка. Дай её мне.</li>
<li><span class="say">These are Kate's headphones. Can you give them to her?</span> — Передашь их ей?</li>
<li><span class="say">I've finished the mockups. I'll send them to you tonight.</span> — Пришлю их тебе вечером.</li>
<li><span class="say">Where's my book? — I lent it to Max.</span> — Я одолжил её Максу.</li>
<li><span class="say">Who did you give it to?</span> — Кому ты это отдал? <span class="muted">(предлог в конце — урок a2-21)</span></li>
</ul>
<div class="g-bad">Give me it. · I sent him them. · Give to me it.</div>
<div class="g-good">Give <b>it to me</b>. · I sent <b>them to him</b>.</div>
<p class="muted">Если «что» — обычное слово, а «кому» — местоимение, первый порядок отличный: <span class="say">Give him the book.</span></p>
<p>Ловушка для русскоговорящих — «одолжить». В английском два разных глагола:</p>
<table>
<tr><th>Глагол</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>lend</b> — lent</td><td>дать на время (кому)</td><td><span class="say">Can you lend me your pen?</span></td></tr>
<tr><td><b>borrow</b></td><td>взять на время (у кого — from)</td><td><span class="say">Can I borrow your pen?</span> <span class="say">I borrowed it from Anna.</span></td></tr>
</table>
<div class="g-bad">Can you borrow me your pen?</div>
<div class="g-good">Can you <b>lend</b> me your pen? / Can I <b>borrow</b> your pen?</div>
<div class="g-tip"><b>Lend</b> — от тебя, <b>borrow</b> — к тебе. «Лендишь» — отдаёшь, «бороу» — берёшь.</div>
<div class="mini" data-q="These are Anna's keys. Can you give ___?" data-o="her them|them to her|to her them" data-a="1" data-why="«что» = them → порядок с to: give them to her."></div>
<div class="mini" data-q="«Можно одолжить твою зарядку?»" data-o="Can you borrow me your charger?|Can I borrow your charger?|Can I lend your charger?" data-a="1" data-why="Я беру на время → borrow."></div>`
      },
      {
        title: '5. Названия мест без the',
        html: `
<div class="g-idea">Большинство названий мест — <b>без the</b>: страны, города, улицы, площади, аэропорты. Вы уже знаете, что имена людей идут без артикля (урок a1-13), — названия мест обычно ведут себя так же.</div>
<table>
<tr><th>Что</th><th>Примеры (без the)</th></tr>
<tr><td>континенты</td><td><span class="say">Europe, Asia, South America</span></td></tr>
<tr><td>страны, штаты, области</td><td><span class="say">Russia, Japan, Brazil, Texas</span></td></tr>
<tr><td>города</td><td><span class="say">Kazan, Tokyo, Berlin</span></td></tr>
<tr><td>улицы, площади, парки</td><td><span class="say">Tverskaya Street, Red Square, Gorky Park</span></td></tr>
<tr><td>один остров, одна гора</td><td><span class="say">Sicily, Bali, Elbrus, Everest</span></td></tr>
<tr><td>озёра со словом Lake</td><td><span class="say">Lake Baikal, Lake Como</span></td></tr>
<tr><td>аэропорты, вокзалы</td><td><span class="say">Sheremetyevo Airport, King's Cross Station</span></td></tr>
<tr><td>университеты «Город + University»</td><td><span class="say">Moscow State University, Harvard University</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Japan is an island country in Asia.</span> — Япония — островная страна в Азии.</li>
<li><span class="say">We live on Lenina Street, near Central Park.</span></li>
<li><span class="say">My flight leaves from Pulkovo Airport.</span></li>
</ul>
<div class="g-bad">I want to visit the Japan. · I live in the Tverskaya Street.</div>
<div class="g-good">I want to visit <b>Japan</b>. · I live <b>on Tverskaya Street</b>.</div>
<div class="mini" data-q="___ Brazil is the biggest country in South America." data-o="The|A|— (ничего)" data-a="2" data-why="Обычное название страны — без артикля."></div>`
      },
      {
        title: '6. Названия мест с the',
        html: `
<div class="g-idea">the появляется в четырёх случаях: в названии есть <b>слово-«объединение»</b> (Republic, Kingdom, States), название во <b>множественном числе</b>, это <b>вода</b> (океан, море, река), это <b>здание, куда ходят</b> (отель, музей, театр, кино) — и конструкция <b>the … of …</b>.</div>
<table>
<tr><th>Что</th><th>Примеры (с the)</th></tr>
<tr><td>Republic, Kingdom, States, Emirates</td><td><span class="say">the Czech Republic, the UK, the USA, the United Arab Emirates</span></td></tr>
<tr><td>множественное число</td><td><span class="say">the Netherlands, the Philippines, the Alps, the Urals, the Canary Islands</span></td></tr>
<tr><td>океаны, моря, реки, каналы</td><td><span class="say">the Pacific, the Black Sea, the Volga, the Thames, the Panama Canal</span></td></tr>
<tr><td>пустыни</td><td><span class="say">the Sahara, the Gobi</span></td></tr>
<tr><td>отели, музеи, театры, кинотеатры, галереи</td><td><span class="say">the Hilton, the Hermitage, the Bolshoi Theatre, the Louvre</span></td></tr>
<tr><td>the … of …</td><td><span class="say">the Tower of London, the University of Tokyo, the Gulf of Finland</span></td></tr>
<tr><td>части света и страны</td><td><span class="say">the north of Italy, the south of France</span></td></tr>
</table>
<p>Сравните пары — разница только в форме названия:</p>
<ul class="g-list">
<li><span class="say">Moscow State University</span> — но <span class="say">the University of Moscow</span></li>
<li><span class="say">Everest</span> (одна гора) — но <span class="say">the Himalayas</span> (горы)</li>
<li><span class="say">Bali</span> (один остров) — но <span class="say">the Maldives</span> (острова)</li>
<li><span class="say">the north of Italy</span> — но <span class="say">northern Italy</span> (без the)</li>
</ul>
<div class="g-bad">I've been to Netherlands. · We swam in Black Sea. · I saw it in Hermitage.</div>
<div class="g-good">I've been to <b>the</b> Netherlands. · We swam in <b>the</b> Black Sea. · I saw it in <b>the</b> Hermitage.</div>
<div class="g-tip">Запомните четыре «the»: <b>много</b> (the Alps), <b>вода</b> (the Volga), <b>of</b> (the Tower of London) и места, <b>куда идут с билетом</b> (the Louvre, the Hilton).</div>
<div class="mini" data-q="The Amazon flows into ___ Atlantic Ocean." data-o="the|a|— (ничего)" data-a="0" data-why="Океаны, моря и реки — с the."></div>
<div class="mini" data-q="We went skiing in ___ Alps." data-o="the|a|— (ничего)" data-a="0" data-why="Горы во множественном числе — с the."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I haven't still called him.</div><div class="g-good">I <b>still haven't</b> called him. / I haven't called him <b>yet</b>.</div>
<div class="g-bad">She is yet at the office.</div><div class="g-good">She is <b>still</b> at the office.</div>
<div class="g-bad">I don't smoke more.</div><div class="g-good">I don't smoke <b>any more</b>.</div>
<div class="g-bad">Give me it, please.</div><div class="g-good">Give <b>it to me</b>, please.</div>
<div class="g-bad">She explained me the rules.</div><div class="g-good">She explained the rules <b>to me</b>. <span class="muted">— explain только с to</span></div>
<div class="g-bad">Can you borrow me 100 roubles?</div><div class="g-good">Can you <b>lend</b> me 100 roubles?</div>
<div class="g-bad">The Russia is bigger than the Canada.</div><div class="g-good"><b>Russia</b> is bigger than <b>Canada</b>.</div>
<div class="g-bad">We stayed in Hilton near Thames.</div><div class="g-good">We stayed in <b>the</b> Hilton near <b>the</b> Thames.</div>
</div>
<div class="mini" data-q="«Он объяснил мне задачу.»" data-o="He explained me the task.|He explained the task to me.|He explained to me it." data-a="1" data-why="explain не любит порядок «кому + что»: explain something to somebody."></div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I still haven't…</b> = до сих пор не, <b>not … any more</b> = больше не · <b>give me the book</b> или <b>give the book to me</b>, но только <b>give it to me</b> · места без the, кроме <b>много, вода, of, «с билетом»</b>.</div>`
      },
      {
        title: '8. Итог A2 — шпаргалка по уровню',
        html: `
<div class="g-idea">Поздравляем: вы прошли весь уровень A2 и весь красный Мерфи! Вот всё, что вы теперь умеете, — с номерами уроков, чтобы быстро вернуться и повторить.</div>
<p><b>Времена и будущее</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>a2-1</td><td>Past Continuous: was/were + -ing</td><td><span class="say">I was playing when the power went off.</span></td></tr>
<tr><td>a2-2</td><td>Present Perfect: just, already, yet</td><td><span class="say">I've just sent it.</span></td></tr>
<tr><td>a2-3</td><td>ever / never, for / since, ago</td><td><span class="say">I've known him since 2019.</span></td></tr>
<tr><td>a2-4</td><td>Present Perfect или Past Simple</td><td><span class="say">I've lost my keys. I lost them yesterday.</span></td></tr>
<tr><td>a2-5</td><td>планы: I'm meeting… / going to</td><td><span class="say">I'm going to learn Blender.</span></td></tr>
<tr><td>a2-6</td><td>will / shall: решение, обещание, прогноз</td><td><span class="say">I'll help you. Shall I open it?</span></td></tr>
</table>
<p><b>Модальные глаголы и привычки</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>a2-7</td><td>might / can / could</td><td><span class="say">It might rain. I couldn't sleep.</span></td></tr>
<tr><td>a2-8</td><td>must / mustn't / have to / should</td><td><span class="say">You don't have to pay. You mustn't cheat.</span></td></tr>
<tr><td>a2-9</td><td>used to; be, have, do</td><td><span class="say">I used to play every day.</span></td></tr>
</table>
<p><b>Сравнения, количество, короткие ответы</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>a2-10</td><td>older, the oldest, as … as</td><td><span class="say">It's the best game I've ever played.</span></td></tr>
<tr><td>a2-11</td><td>too / enough, So do I, хвостики</td><td><span class="say">It's too late. — Isn't it?</span></td></tr>
<tr><td>a2-12</td><td>nobody, anything, no / none, every / all</td><td><span class="say">None of my friends play chess.</span></td></tr>
<tr><td>a2-13</td><td>one / ones, both, either, a few, a little</td><td><span class="say">I've got a few ideas.</span></td></tr>
<tr><td>a2-14</td><td>myself; go / get / do / make / have</td><td><span class="say">I made it myself.</span></td></tr>
<tr><td>a2-15</td><td>until, since, during, while</td><td><span class="say">Wait until I come back.</span></td></tr>
</table>
<p><b>Конструкции и сложные предложения</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>a2-16</td><td>-ing и to после глаголов</td><td><span class="say">I enjoy drawing. I want to learn.</span></td></tr>
<tr><td>a2-17</td><td>глаголы с предлогами, фразовые</td><td><span class="say">Don't give up! Turn it off.</span></td></tr>
<tr><td>a2-18</td><td>пассив: is done, was done</td><td><span class="say">The game was made in Poland.</span></td></tr>
<tr><td>a2-19</td><td>there was / will be; it; косвенная речь</td><td><span class="say">She said that she was tired.</span></td></tr>
<tr><td>a2-20</td><td>условия; придаточные who / which / that</td><td><span class="say">If I had time, I'd travel.</span></td></tr>
<tr><td>a2-21</td><td>сложные вопросы</td><td><span class="say">Do you know where he lives?</span></td></tr>
<tr><td>a2-22</td><td>still / any more; give it to me; the + места</td><td><span class="say">Give it to me.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Самые важные «переключатели» A2</div><ol>
<li><b>Когда?</b> Есть «вчера, в 2020, ago» → Past Simple. Время не названо, важен результат сейчас → Present Perfect.</li>
<li><b>Процесс в прошлом</b>, который прервали → was / were + -ing.</li>
<li><b>Будущее:</b> договорились → I'm meeting; собираюсь → going to; решил сейчас → will.</li>
<li><b>После if = «если»</b> — без will: If it rains… Нереальное → If I had…, I would…</li>
<li><b>Спрятанный вопрос</b> — порядок утверждения: I don't know where she is.</li>
</ol></div>
<div class="mini" data-q="I ___ this series three times. I first ___ it in 2021." data-o="watched … have watched|have watched … watched|have watched … have watched" data-a="1" data-why="Опыт без времени → Present Perfect; конкретный год → Past Simple."></div>
<div class="mini" data-q="If I ___ a bigger flat, I would buy a piano." data-o="have|had|will have" data-a="1" data-why="Нереальное условие → if + прошедшая форма, дальше would."></div>
<div class="g-sum"><div class="g-h">Весь A2 в одной строке</div>Вы умеете рассказывать о прошлом (<b>was doing, have done, did, used to</b>), о будущем (<b>I'm meeting, going to, will, might</b>), сравнивать, советовать, строить пассив, условия и сложные вопросы. Дальше — B1 и синий Мерфи: те же темы, но глубже.</div>`
      }
    ],
    words: [
      ['give — gave', 'давать — дал', 'Give it to me, please.', 'Дай мне это, пожалуйста.'],
      ['lend — lent', 'одалживать (давать на время)', 'I lent Max my charger.', 'Я одолжил Максу зарядку.'],
      ['borrow', 'брать на время, занимать', 'Can I borrow your pen?', 'Можно одолжить твою ручку?'],
      ['send — sent', 'отправлять — отправил', 'I sent the file to the client.', 'Я отправил файл клиенту.'],
      ['show — showed', 'показывать — показал', 'She showed us her portfolio.', 'Она показала нам своё портфолио.'],
      ['pass', 'передавать', 'Can you pass me the salt?', 'Передай мне соль, пожалуйста.'],
      ['bring — brought', 'приносить — принёс', 'Bring it to me tomorrow.', 'Принеси мне это завтра.'],
      ['offer', 'предлагать', 'They offered me a job.', 'Мне предложили работу.'],
      ['sell — sold', 'продавать — продал', 'I sold my old PC to a friend.', 'Я продал старый ПК другу.'],
      ['explain', 'объяснять', 'Can you explain it to me?', 'Можешь объяснить мне это?'],
      ['still', 'всё ещё; до сих пор', 'I still haven\'t finished the level.', 'Я до сих пор не прошёл уровень.'],
      ['yet', 'ещё (не); уже (в вопросе)', 'Are you ready? — Not yet.', 'Ты готов? — Ещё нет.'],
      ['already', 'уже', 'Are you leaving already?', 'Ты уже уходишь?'],
      ['any more', 'больше не (с not)', 'I don\'t play it any more.', 'Я больше в это не играю.'],
      ['continent', 'континент', 'Asia is the biggest continent.', 'Азия — самый большой континент.'],
      ['ocean', 'океан', 'We flew over the Pacific Ocean.', 'Мы летели над Тихим океаном.'],
      ['sea', 'море', 'We swam in the Black Sea.', 'Мы купались в Чёрном море.'],
      ['river', 'река', 'The Volga is the longest river in Europe.', 'Волга — самая длинная река в Европе.'],
      ['lake', 'озеро', 'Lake Baikal is very deep.', 'Байкал очень глубокий.'],
      ['mountains', 'горы', 'We went skiing in the Alps.', 'Мы катались на лыжах в Альпах.'],
      ['island', 'остров', 'Sicily is a big island.', 'Сицилия — большой остров.'],
      ['desert', 'пустыня', 'It rarely rains in the Sahara.', 'В Сахаре редко идут дожди.'],
      ['coast', 'побережье', 'We drove along the coast.', 'Мы ехали вдоль побережья.'],
      ['capital', 'столица', 'Tokyo is the capital of Japan.', 'Токио — столица Японии.'],
      ['north', 'север', 'I\'ve been to the north of Italy.', 'Я был на севере Италии.'],
      ['south', 'юг', 'They live in the south of France.', 'Они живут на юге Франции.'],
      ['abroad', 'за границей, за границу', 'Have you ever worked abroad?', 'Ты когда-нибудь работал за границей?'],
      ['square', 'площадь', 'Meet me in Red Square.', 'Встретимся на Красной площади.'],
      ['castle', 'замок', 'We visited an old castle in Scotland.', 'Мы посетили старый замок в Шотландии.'],
      ['gallery', 'галерея', 'The gallery is closed on Mondays.', 'Галерея закрыта по понедельникам.'],
      ['border', 'граница', 'We crossed the border at night.', 'Мы пересекли границу ночью.']
    ],
    texts: [
      {
        id: 't-a2-22-1', title: 'Packing for the trip', level: 'A2',
        text: `Masha: Are you ready? The taxi is coming in twenty minutes.
Dima: Not yet. I still can't find my passport.
Masha: Your passport? Did you give it to your brother? He borrowed your bag last week.
Dima: No, I gave him the bag, not the passport. Wait… Oh no. Is it in the bag?
Masha: Call him. Ask him to bring it to us. Quickly!
Dima: OK. Can you pass me my phone? It's on the table.
Masha: Here you are. And where are the tickets? Have you printed them yet?
Dima: I've already sent them to you. Check your email.
Masha: Oh, right, I've got them. Great. Did you lend Kolya your camera?
Dima: No, I didn't. I don't lend it to anybody any more. Last time he lent it to his friend, and it came back broken.
Masha: Fair enough. And the charger for my laptop? I can't see it.
Dima: It's still in the kitchen. I'll bring it to you.
Masha: Thanks. And please don't forget the present for Aunt Lena. We bought her that nice scarf.
Dima: It's already in my suitcase. OK, my brother says he's got the passport. He's coming.
Masha: He still hasn't left home, has he?
Dima: He's already in the car. Relax!`,
        questions: [
          { q: 'Where is Dima\'s passport?', o: ['In the kitchen', 'In the bag at his brother\'s', 'In his suitcase'], a: 1 },
          { q: 'How did Dima give Masha the tickets?', o: ['He printed them', 'He sent them by email', 'He gave them to his brother'], a: 1 },
          { q: 'Why doesn\'t Dima lend his camera any more?', o: ['It came back broken', 'He sold it', 'It is too expensive'], a: 0 }
        ]
      },
      {
        id: 't-a2-22-2', title: 'A designer\'s summer route', level: 'A2',
        text: `Last summer my girlfriend and I travelled around Europe for three weeks. I'm a designer, so I can work from anywhere — I just need my laptop and good Wi-Fi.
We started in the Netherlands. In Amsterdam we stayed at a small hotel near Dam Square and spent a whole day in the Rijksmuseum. I bought my sister a poster there. Then we took a train to Germany and went down the Rhine by boat. The river was beautiful, but it was very hot.
After that we went to Switzerland and the Alps. We still talk about the mountains — they were amazing. From there we went to the north of Italy. We swam in Lake Como and visited Milan. I wanted to see the Last Supper, but we didn't have tickets, so I still haven't seen it.
The last stop was Croatia. We spent five days on the coast of the Adriatic Sea. I sent my boss photos of my "office" on the beach. He didn't reply. Maybe he was jealous!
Now we're planning the next trip: the Canary Islands or maybe the United States. We haven't decided yet. And my passport? It's already in my bag. I'm not going to lend it to anybody.`,
        questions: [
          { q: 'Where did they start their trip?', o: ['In Italy', 'In the Netherlands', 'In Croatia'], a: 1 },
          { q: 'Why didn\'t he see the Last Supper?', o: ['It was closed', 'They didn\'t have tickets', 'It was too hot'], a: 1 },
          { q: 'What did he send to his boss?', o: ['A poster', 'Photos of his "office" on the beach', 'His new design'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I ordered pizza an hour ago, and it ___.', o: ['still hasn\'t come', 'hasn\'t still come', 'yet hasn\'t come'], a: 0, why: 'still + отрицание: still стоит перед hasn\'t — «до сих пор не».' },
      { t: 'choice', q: 'Are you ready? — Not ___. Give me five minutes.', o: ['already', 'still', 'yet'], a: 2, why: 'Короткий ответ «ещё нет» — Not yet.' },
      { t: 'choice', q: 'You\'re leaving ___? It\'s only nine!', o: ['yet', 'already', 'still'], a: 1, why: 'Удивление «уже?!», раньше, чем ждали → already.' },
      { t: 'choice', q: 'Where is my charger? — I gave ___.', o: ['it to Max', 'Max it', 'to Max it'], a: 0, why: 'Когда «что» — it, порядок: give it to somebody.' },
      { t: 'choice', q: 'Can you ___ me your notes from the meeting?', o: ['borrow', 'lend', 'take'], a: 1, why: 'Дать на время кому-то → lend (borrow — взять).' },
      { t: 'choice', q: 'Could you pass ___, please?', o: ['me the salt', 'to me the salt', 'the salt me'], a: 0, why: 'Кому + что без предлога: pass me the salt.' },
      { t: 'choice', q: 'We went skiing in ___ Urals last winter.', o: ['the', 'a', '— (ничего)'], a: 0, why: 'Горы во множественном числе (Urals) → the.' },
      { t: 'choice', q: '___ Canada is bigger than the USA.', o: ['The', 'A', '— (ничего)'], a: 2, why: 'Обычное название страны — без the (у the USA есть States).' },
      { t: 'gap', q: 'I ___ play this game, but not every day. (всё ещё)', a: ['still'], why: 'still стоит перед обычным глаголом: I still play.' },
      { t: 'gap', q: 'I don\'t live in Omsk ___. I moved to Moscow. (больше не — 2 слова)', a: ['any more', 'anymore', 'any longer'], why: '«Больше не» = not … any more / any longer.' },
      { t: 'gap', q: 'These are your keys. I\'ll give ___ tomorrow. (их тебе)', a: ['them to you'], why: '«что» = them → порядок с to: give them to you.' },
      { t: 'gap', q: 'The Volga flows into ___ Caspian Sea. (артикль)', a: ['the'], why: 'Моря, реки, океаны — с the.' },
      { t: 'gap', q: 'Can I ___ your pen for a minute? (одолжить — взять)', a: ['borrow'], why: 'Взять на время у кого-то → borrow.' },
      { t: 'gap', q: 'She showed ___ her new portfolio. (нам)', a: ['us'], why: 'Кому + что без предлога: showed us her portfolio.' },
      { t: 'order', a: 'Can you send the file to me', ru: 'Можешь прислать мне файл?' },
      { t: 'order', a: 'I still haven\'t watched the final episode', ru: 'Я до сих пор не посмотрел последнюю серию' },
      { t: 'order', a: 'We stayed at the Hilton near the river', ru: 'Мы жили в «Хилтоне» у реки' },
      { t: 'tr', q: 'Дай мне его, пожалуйста. (про телефон)', a: ['give it to me please', 'please give it to me', 'can you give it to me please', 'could you give it to me please'] },
      { t: 'tr', q: 'Я был в Нидерландах.', a: ['i have been to the netherlands', 'i\'ve been to the netherlands', 'i was in the netherlands'] },
      { t: 'listen', say: 'Have you been to the north of Italy?', a: ['have you been to the north of italy', 'have you ever been to the north of italy'] }
    ],
    test: [
      { t: 'choice', q: 'I ___ when my cat ___ on the keyboard.', o: ['was streaming … jumped', 'streamed … was jumping', 'was streaming … was jumping'], a: 0, why: 'Длинный процесс в прошлом → was streaming; короткое событие, которое его прервало → Past Simple (a2-1).' },
      { t: 'choice', q: 'I ___ my phone yesterday, and I ___ it yet.', o: ['lost … haven\'t found', 'have lost … didn\'t find', 'lost … didn\'t find'], a: 0, why: 'yesterday → Past Simple; yet (до сих пор) → Present Perfect (a2-4).' },
      { t: 'choice', q: 'Look at those black clouds! It ___ rain.', o: ['is going to', 'will', 'is raining'], a: 0, why: 'Прогноз по тому, что видим сейчас → going to (a2-5).' },
      { t: 'choice', q: 'You ___ pay for this app. It\'s free.', o: ['mustn\'t', 'don\'t have to', 'can\'t'], a: 1, why: 'Нет необходимости → don\'t have to; mustn\'t — это запрет (a2-8).' },
      { t: 'gap', q: 'I ___ play Minecraft every day, but now I don\'t. (use — 2 слова)', a: ['used to'], why: 'Привычка в прошлом, которой сейчас нет → used to + глагол (a2-9).' },
      { t: 'choice', q: 'This chair is ___ for me. I need a bigger one.', o: ['too small', 'small enough', 'smaller'], a: 0, why: 'Размер мешает, это проблема → too + прилагательное (a2-11).' },
      { t: 'choice', q: 'There were only ___ people at the meetup — four or five.', o: ['a few', 'a little', 'much'], a: 0, why: 'people считаются, «несколько» → a few (a2-13).' },
      { t: 'choice', q: 'My brother gave up ___ online games when he got a job.', o: ['play', 'to play', 'playing'], a: 2, why: 'Фразовый глагол give up = бросить; после него -ing (a2-16, a2-17).' },
      { t: 'gap', q: 'This game ___ by a small studio in 2015. (make — пассив)', a: ['was made'], why: 'Действие в прошлом, важен результат, а не деятель → was + 3-я форма (a2-18).' },
      { t: 'choice', q: 'If I ___ you, I would take that job.', o: ['am', 'were', 'will be'], a: 1, why: 'Нереальное условие, совет → If I were you… would (a2-20).' },
      { t: 'gap', q: 'The girl ___ sits next to me is a 3D artist. (который)', a: ['who', 'that'], why: 'О человеке → who (или that) в придаточном (a2-20).' },
      { t: 'choice', q: 'Anna asked, "Where is the station?" → She wanted to know where ___.', o: ['is the station', 'the station was', 'was the station'], a: 1, why: 'Спрятанный вопрос — порядок утверждения, а в пересказе о прошлом is → was (a2-19, a2-21).' }
    ]
  }
);
