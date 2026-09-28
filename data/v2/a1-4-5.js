// Уроки A1 (новая версия): a1-4 — вопросы и отрицания в Present Simple; a1-5 — Present Continuous.
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── UNIT 4 ─────────────────────────────
    {
      id: 'a1-4', level: 'A1', num: 4, track: 'main',
      books: { red: [6, 7] },
      title: 'Do you…? I don\'t — вопросы и отрицания в Present Simple',
      summary: 'Как спросить «Ты играешь?», «Где ты живёшь?» и сказать «Я не пью кофе» — плюс дни недели и время.',
      grammar: [
        {
          title: '1. Главная идея: помощник do',
          html: `
<div class="g-idea">По-русски вопрос от утверждения отличается только интонацией: «Ты играешь.» — «Ты играешь?». По-английски так <b>нельзя</b>. С обычными глаголами (work, play, like…) для вопроса и для «не» нужен <b>помощник do</b>. Сам он ничего не значит — просто показывает: «это вопрос» или «это отрицание».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты <span class="g-gap">_</span> играешь в игры?</p><p>Я <span class="g-gap">_</span> не пью кофе.</p><p>Она <span class="g-gap">_</span> не работает здесь.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Do</b> you play games?</span></p><p><span class="say">I <b>don't</b> drink coffee.</span></p><p><span class="say">She <b>doesn't</b> work here.</span></p></div>
</div>
<div class="g-tip">Представьте, что do — это «слуга». Он выходит вперёд, когда вы спрашиваете, и встаёт рядом с not, когда вы отрицаете. А сам глагол остаётся в простой форме, как в словаре.</div>
<div class="mini" data-q="Как спросить «Ты говоришь по-английски?»" data-o="You speak English?|Do you speak English?|Are you speak English?" data-a="1" data-why="Обычный глагол speak → нужен помощник: Do you speak…?"></div>`
        },
        {
          title: '2. Отрицание: don\'t и doesn\'t',
          html: `
<p>Чтобы сказать «не», ставим <b>don't</b> или <b>doesn't</b> перед глаголом. Выбор — по тому же правилу, что и -s в прошлом уроке.</p>
<table>
<tr><th>Кто</th><th>Помощник</th><th>Пример</th></tr>
<tr><td>I, you, we, they</td><td><b class="g-v">don't</b></td><td><span class="say">I don't know.</span></td></tr>
<tr><td>he, she, it, Tom, my cat</td><td><b class="g-v">doesn't</b></td><td><span class="say">She doesn't like tea.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">don't / doesn't</span><span class="g-plus">+</span><span class="g-part">глагол без -s</span></div>
<ul class="g-list">
<li><span class="say">We don't work on Sunday.</span> — Мы не работаем в воскресенье.</li>
<li><span class="say">He doesn't play games.</span> — Он не играет в игры.</li>
<li><span class="say">My cat doesn't sleep at night.</span> — Мой кот не спит ночью.</li>
<li><span class="say">I drink tea, but I don't drink coffee.</span> — Я пью чай, но не пью кофе.</li>
<li><span class="say">I don't watch films very often.</span> — Я не очень часто смотрю фильмы.</li>
</ul>
<p>don't = do not, doesn't = does not. В разговоре почти всегда говорят коротко.</p>
<p><b>Две особые пары.</b> После doesn't глагол <b>has</b> снова становится <b>have</b>, а <b>does</b> (делает) — <b>do</b>. Глагол do при этом не пропадает: в предложении два do.</p>
<ul class="g-list">
<li><span class="say">Anna doesn't have a car.</span> — У Анны нет машины.</li>
<li><span class="say">Max doesn't do sport.</span> — Макс не занимается спортом.</li>
</ul>
<div class="g-bad">She doesn't likes coffee.</div>
<div class="g-good">She doesn't <b>like</b> coffee.</div>
<div class="g-bad">He doesn't has a dog.</div>
<div class="g-good">He doesn't <b>have</b> a dog.</div>
<div class="g-tip">Хвостик -s может быть только один. Если он уже «уехал» в does, у глагола его нет: do<b>es</b>n't + like.</div>
<div class="mini" data-q="Tom ___ speak English." data-o="don't|doesn't|isn't" data-a="1" data-why="Tom = he → doesn't. isn't — это для be, а speak — обычный глагол."></div>
<div class="mini" data-q="He doesn't ___ here." data-o="live|lives|living" data-a="0" data-why="После doesn't глагол без -s: live."></div>`
        },
        {
          title: '3. Вопрос: Do / Does в начале и короткие ответы',
          html: `
<p>Для вопроса ставим <b>Do</b> или <b>Does</b> в самое начало. Потом — <b>кто</b>, потом глагол без -s. Порядок всегда один и тот же.</p>
<div class="g-formula"><span class="g-part g-v">Do / Does</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол без -s</span><span class="g-plus">+</span><span class="g-part">…?</span></div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You play games.</td><td><span class="say">Do you play games?</span></td></tr>
<tr><td>Your friends live here.</td><td><span class="say">Do your friends live here?</span></td></tr>
<tr><td>He works from home.</td><td><span class="say">Does he work from home?</span></td></tr>
<tr><td>Anna works on Sunday.</td><td><span class="say">Does Anna work on Sunday?</span></td></tr>
</table>
<div class="g-bad">Does work Anna on Sunday?</div>
<div class="g-good">Does <b>Anna work</b> on Sunday?</div>
<p>Слова always, usually, often стоят после «кто», как в обычном предложении: <span class="say">Do you usually get up early?</span> — Ты обычно встаёшь рано?</p>
<p><b>Короткие ответы.</b> Англичане редко отвечают одним «Yes» — они повторяют помощника:</p>
<table>
<tr><th>Вопрос</th><th>Да</th><th>Нет</th></tr>
<tr><td>Do you…?</td><td><span class="say">Yes, I do.</span></td><td><span class="say">No, I don't.</span></td></tr>
<tr><td>Does she…?</td><td><span class="say">Yes, she does.</span></td><td><span class="say">No, she doesn't.</span></td></tr>
<tr><td>Do they…?</td><td><span class="say">Yes, they do.</span></td><td><span class="say">No, they don't.</span></td></tr>
</table>
<div class="g-bad">Do you like music? — Yes, I like.</div>
<div class="g-good">Do you like music? — Yes, I <b>do</b>.</div>
<div class="g-tip">В коротком ответе повторяем то слово, с которого начался вопрос: спросили <b>Do</b> — отвечаем <b>do</b>, спросили <b>Does</b> — отвечаем <b>does</b>.</div>
<div class="mini" data-q="___ your friend play games?" data-o="Do|Does|Is" data-a="1" data-why="your friend — один человек (he/she) → Does."></div>
<div class="mini" data-q="Does she work here? — No, she ___." data-o="don't|doesn't|isn't" data-a="1" data-why="Спросили Does → отвечаем doesn't."></div>`
        },
        {
          title: '4. Вопросы со словами where, what, when, how often',
          html: `
<p>Если нужно спросить не «да/нет», а <b>где? что? когда? как часто?</b> — вопросительное слово ставим перед do/does. Дальше всё как в обычном вопросе.</p>
<div class="g-formula"><span class="g-part">Where / What / When…</span><span class="g-plus">+</span><span class="g-part g-v">do / does</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">Where do you live?</span> — Где ты живёшь?</li>
<li><span class="say">When do you get up?</span> — Когда ты встаёшь?</li>
<li><span class="say">What time does the film start?</span> — Во сколько начинается фильм?</li>
<li><span class="say">How often do you play?</span> — Как часто ты играешь?</li>
<li><span class="say">What do you usually do at the weekend?</span> — Что ты обычно делаешь на выходных?</li>
<li><span class="say">What does this word mean?</span> — Что значит это слово?</li>
<li><span class="say">Where does Max work?</span> — Где работает Макс?</li>
</ul>
<div class="g-steps"><div class="g-h">Как построить вопрос за 3 шага</div><ol>
<li>Возьмите утверждение: <i>You live in Moscow.</i></li>
<li>Поставьте вперёд do/does: <i>Do you live in Moscow?</i></li>
<li>Уберите ответ и поставьте в начало вопросительное слово: <span class="say">Where do you live?</span></li>
</ol></div>
<p><b>What do you do?</b> — это не «что ты делаешь сейчас», а «<b>кем ты работаешь?</b>». Первый do — помощник, второй — глагол «делать». Ответ: <span class="say">I'm a designer.</span> или <span class="say">I work in an office.</span></p>
<div class="g-bad">Where you live?</div>
<div class="g-good">Where <b>do</b> you live?</div>
<div class="mini" data-q="Когда он заканчивает работу?" data-o="When he finishes work?|When does he finish work?|When does he finishes work?" data-a="1" data-why="When + does + he + finish (без -s)."></div>
<div class="mini" data-q="«What do you do?» — это вопрос…" data-o="о работе|о том, что человек делает сейчас|о погоде" data-a="0" data-why="What do you do? = What is your job? — кем ты работаешь."></div>`
        },
        {
          title: '5. be или do? Главная путаница',
          html: `
<div class="g-idea">У английского глагола есть два «режима». Если в предложении <b>am / is / are</b> — помощник do <b>не нужен</b>. Если обычный глагол (work, like, play) — <b>нужен</b>. Вместе они не встречаются никогда.</div>
<table>
<tr><th></th><th>С be</th><th>С обычным глаголом</th></tr>
<tr><td>Вопрос</td><td><span class="say">Are you tired?</span></td><td><span class="say">Do you work?</span></td></tr>
<tr><td>Не</td><td><span class="say">She isn't at home.</span></td><td><span class="say">She doesn't live here.</span></td></tr>
<tr><td>Ответ</td><td><span class="say">Yes, I am.</span></td><td><span class="say">Yes, I do.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Проверка за секунду</div><ol>
<li>Найдите в предложении глагол-действие (work, like, play, know…).</li>
<li>Есть действие → do / does / don't / doesn't.</li>
<li>Действия нет (кто? какой? где?) → am / is / are.</li>
</ol></div>
<div class="g-bad">Do you are a designer?</div>
<div class="g-good"><b>Are</b> you a designer?</div>
<div class="g-bad">I am not like this game.</div>
<div class="g-good">I <b>don't</b> like this game.</div>
<div class="g-bad">Is he play games?</div>
<div class="g-good"><b>Does</b> he play games?</div>
<div class="g-tip">Русское «не» так и тянет сказать «am not». Но am not — это только «я не <i>какой-то</i> / не <i>где-то</i>»: I'm not tired. «Я не <i>делаю</i>» — всегда don't.</div>
<div class="mini" data-q="___ they at home?" data-o="Do|Are|Does" data-a="1" data-why="at home — «где?», действия нет → be: Are they…?"></div>
<div class="mini" data-q="___ they like this film?" data-o="Do|Are|Does" data-a="0" data-why="like — обычный глагол, they → Do they like…?"></div>`
        },
        {
          title: '6. Дни недели и время: in, on, at',
          html: `
<p>Дни недели пишутся <b>с большой буквы</b>: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.</p>
<p>Перед временем ставим маленькие слова <b>in / on / at</b>. Русское «в» переводится по-разному:</p>
<table>
<tr><th>Слово</th><th>Когда</th><th>Пример</th></tr>
<tr><td><b class="g-v">at</b></td><td>точное время, ночь</td><td><span class="say">at seven o'clock</span>, <span class="say">at night</span></td></tr>
<tr><td><b class="g-v">on</b></td><td>день недели</td><td><span class="say">on Monday</span>, <span class="say">on Friday evening</span></td></tr>
<tr><td><b class="g-v">in</b></td><td>часть дня</td><td><span class="say">in the morning</span>, <span class="say">in the evening</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I get up at seven o'clock.</span> — Я встаю в семь часов.</li>
<li><span class="say">We play on Saturday.</span> — Мы играем в субботу.</li>
<li><span class="say">She drinks coffee in the morning.</span> — Она пьёт кофе утром.</li>
<li><span class="say">What do you do at the weekend?</span> — Что ты делаешь на выходных? <span class="muted">(в Америке: on the weekend)</span></li>
</ul>
<div class="g-formula"><span class="g-part">at</span> — точка на часах <span class="g-sep">·</span> <span class="g-part">on</span> — день в календаре <span class="g-sep">·</span> <span class="g-part">in</span> — кусок дня</div>
<div class="g-bad">I work in Monday.</div>
<div class="g-good">I work <b>on</b> Monday.</div>
<div class="g-tip">o'clock — это «ровно, часов». Говорят только с целым часом: at five o'clock. Можно и без него: at five. Если есть день недели, побеждает on: <i>on Friday evening</i>, а не in.</div>
<div class="mini" data-q="The film starts ___ eight o'clock." data-o="in|on|at" data-a="2" data-why="Точное время → at."></div>
<div class="mini" data-q="See you ___ Tuesday!" data-o="in|on|at" data-a="1" data-why="День недели → on."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">You play games?</div><div class="g-good"><b>Do</b> you play games?</div>
<div class="g-bad">He don't work here.</div><div class="g-good">He <b>doesn't</b> work here.</div>
<div class="g-bad">Does she speaks English?</div><div class="g-good">Does she <b>speak</b> English?</div>
<div class="g-bad">She doesn't has a car.</div><div class="g-good">She doesn't <b>have</b> a car.</div>
<div class="g-bad">I am not understand.</div><div class="g-good">I <b>don't</b> understand.</div>
<div class="g-bad">Do you are hungry?</div><div class="g-good"><b>Are</b> you hungry?</div>
<div class="g-bad">Where you work?</div><div class="g-good">Where <b>do</b> you work?</div>
<div class="g-bad">Does work Max at home?</div><div class="g-good">Does <b>Max work</b> at home?</div>
<div class="g-bad">I play in Friday.</div><div class="g-good">I play <b>on</b> Friday.</div>
</div>
<div class="g-sum"><div class="g-h">Итог урока в одной строке</div>С обычным глаголом — <b>Do you…? / Does he…?</b> и <b>don't / doesn't</b>, а глагол после них всегда без -s; с am/is/are помощник do не нужен.</div>`
        }
      ],
      words: [
        ['do', 'делать; вспомогательный глагол', 'What do you do?', 'Чем ты занимаешься?'],
        ['don\'t', 'не (do not)', 'I don\'t know.', 'Я не знаю.'],
        ['doesn\'t', 'не (does not, для he/she/it)', 'She doesn\'t like tea.', 'Она не любит чай.'],
        ['know', 'знать', 'Do you know him?', 'Ты его знаешь?'],
        ['understand', 'понимать', 'I don\'t understand.', 'Я не понимаю.'],
        ['mean', 'значить, иметь в виду', 'What does this word mean?', 'Что значит это слово?'],
        ['word', 'слово', 'I know this word.', 'Я знаю это слово.'],
        ['start', 'начинать(ся)', 'The film starts at eight.', 'Фильм начинается в восемь.'],
        ['finish', 'заканчивать(ся)', 'I finish work at six.', 'Я заканчиваю работу в шесть.'],
        ['when', 'когда', 'When do you play?', 'Когда ты играешь?'],
        ['time', 'время; раз', 'What time is it?', 'Который час?'],
        ['o\'clock', 'ровно (о времени)', 'It is five o\'clock.', 'Сейчас пять часов.'],
        ['Monday', 'понедельник', 'I work on Monday.', 'Я работаю в понедельник.'],
        ['Tuesday', 'вторник', 'See you on Tuesday.', 'Увидимся во вторник.'],
        ['Wednesday', 'среда', 'We play on Wednesday.', 'Мы играем в среду.'],
        ['Thursday', 'четверг', 'I don\'t work on Thursday.', 'Я не работаю в четверг.'],
        ['Friday', 'пятница', 'I love Friday!', 'Обожаю пятницу!'],
        ['Saturday', 'суббота', 'On Saturday I sleep late.', 'В субботу я сплю долго.'],
        ['Sunday', 'воскресенье', 'Do you work on Sunday?', 'Ты работаешь в воскресенье?'],
        ['week', 'неделя', 'I study five days a week.', 'Я учусь пять дней в неделю.'],
        ['weekend', 'выходные', 'What do you do at the weekend?', 'Что ты делаешь на выходных?'],
        ['film', 'фильм', 'Do you like this film?', 'Тебе нравится этот фильм?'],
        ['music', 'музыка', 'What music do you like?', 'Какую музыку ты любишь?'],
        ['listen', 'слушать', 'She listens to music.', 'Она слушает музыку.'],
        ['sport', 'спорт', 'He doesn\'t do sport.', 'Он не занимается спортом.'],
        ['question', 'вопрос', 'I have a question.', 'У меня есть вопрос.'],
        ['answer', 'ответ; отвечать', 'I know the answer.', 'Я знаю ответ.'],
        ['need', 'нуждаться, нужно', 'I need help.', 'Мне нужна помощь.'],
        ['help', 'помощь; помогать', 'Do you need help?', 'Тебе нужна помощь?'],
        ['often', 'часто', 'How often do you play?', 'Как часто ты играешь?'],
        ['city', 'город', 'Do you live in a big city?', 'Ты живёшь в большом городе?'],
        ['together', 'вместе', 'We play together.', 'Мы играем вместе.']
      ],
      texts: [
        {
          id: 't-a1-4-1', title: 'A new friend', level: 'A1',
          text: `Kate: Hi! Are you new here?
Max: Yes, I am. I'm Max. Nice to meet you.
Kate: Nice to meet you too. I'm Kate. Where do you live, Max?
Max: I live in Moscow. And you?
Kate: I live in London. It's a big city. What do you do?
Max: I'm a designer. I work from home. And you?
Kate: I'm a teacher. Do you play games every day?
Max: Yes, I do. I usually play in the evening. Do you?
Kate: No, I don't. I work a lot, and I don't have time. I play at the weekend.
Max: What time do you usually play?
Kate: On Saturday at eight o'clock. Do you want to play together?
Max: Yes! But my English isn't very good. I don't understand every word.
Kate: That's OK. I don't need good English. I need a friend in the game!`,
          questions: [
            { q: 'What does Max do?', o: ['He is a teacher.', 'He is a designer.', 'He is a student.'], a: 1 },
            { q: 'Does Kate play games every day?', o: ['Yes, she does.', 'No, she doesn\'t.', 'Yes, she is.'], a: 1 },
            { q: 'When does Kate usually play?', o: ['On Saturday at eight', 'Every morning', 'On Monday at night'], a: 0 }
          ]
        },
        {
          id: 't-a1-4-2', title: 'Anna\'s week', level: 'A1',
          text: `Anna is a teacher. She works from Monday to Friday. She doesn't work at the weekend.
She gets up at six o'clock. She doesn't drink coffee in the morning. She drinks tea.
On Monday and Wednesday she does sport in the evening. On Tuesday and Thursday she studies English. She doesn't understand every word, but she likes English films.
On Friday evening she watches a film with her friends. They don't watch it in the city. They watch it at Anna's house.
On Saturday she sleeps late. She doesn't get up early. On Sunday she reads and listens to music.
Does Anna play games? No, she doesn't. Her friend Max plays every day, and he often plays with his friends from London. Anna doesn't. She doesn't have time for games.
Does Anna like her week? Yes, she does!`,
          questions: [
            { q: 'What does Anna drink in the morning?', o: ['coffee', 'tea', 'coffee and tea'], a: 1 },
            { q: 'What does Anna do on Tuesday and Thursday?', o: ['She does sport.', 'She watches a film.', 'She studies English.'], a: 2 },
            { q: 'Does Anna play games?', o: ['Yes, every day.', 'No, she doesn\'t.', 'Yes, at the weekend.'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ drink coffee in the evening.', o: ['don\'t', 'doesn\'t', 'am not'], a: 0, why: 'I + обычный глагол → don\'t; am not с глаголом-действием не ставят.' },
        { t: 'choice', q: 'My friend ___ play games.', o: ['don\'t', 'doesn\'t', 'isn\'t'], a: 1, why: 'my friend — один человек (he/she) → doesn\'t.' },
        { t: 'choice', q: '___ you speak English?', o: ['Are', 'Do', 'Does'], a: 1, why: 'speak — обычный глагол, you → Do.' },
        { t: 'choice', q: '___ Kate live in London?', o: ['Do', 'Does', 'Is'], a: 1, why: 'Kate = she, live — обычный глагол → Does.' },
        { t: 'choice', q: '___ you hungry?', o: ['Do', 'Does', 'Are'], a: 2, why: 'hungry — «какой?», действия нет → be: Are you…?' },
        { t: 'choice', q: 'She doesn\'t ___ a car.', o: ['have', 'has', 'having'], a: 0, why: 'После doesn\'t — начальная форма: have, а не has.' },
        { t: 'choice', q: 'Do Max and Kate play together? — Yes, ___.', o: ['they do', 'they are', 'they does'], a: 0, why: 'Спросили Do → отвечаем do; Max and Kate = they.' },
        { t: 'choice', q: 'Как спросить «Как часто ты играешь?»', o: ['How often you play?', 'How often do you play?', 'How often are you play?'], a: 1, why: 'Вопросительное слово + do + you + play.' },
        { t: 'gap', q: 'Do you know the answer? — No, I ___.', a: ['don\'t', 'do not'], why: 'Спросили Do you → отвечаем I don\'t.' },
        { t: 'gap', q: 'Does Max work from home? — Yes, he ___.', a: ['does'], why: 'Спросили Does → в ответе does.' },
        { t: 'gap', q: 'I finish work ___ six o\'clock.', a: ['at'], why: 'Точное время → at.' },
        { t: 'gap', q: 'We don\'t work ___ Sunday.', a: ['on'], why: 'День недели → on.' },
        { t: 'gap', q: 'What ___ this word mean?', a: ['does'], why: 'this word = it → does; mean без -s.' },
        { t: 'gap', q: 'Anna ___ like coffee. (не)', a: ['doesn\'t', 'does not'], why: 'Anna = she → doesn\'t.' },
        { t: 'order', a: 'Where does your friend live', ru: 'Где живёт твой друг?' },
        { t: 'order', a: 'What do you usually do at the weekend', ru: 'Что ты обычно делаешь на выходных?' },
        { t: 'tr', q: 'Я не понимаю этот вопрос.', a: ['i don\'t understand this question', 'i do not understand this question', 'i don\'t understand the question', 'i do not understand the question'] },
        { t: 'tr', q: 'Ты часто играешь в игры?', a: ['do you often play games', 'do you play games often'] },
        { t: 'listen', say: 'What time does the film start?', a: ['what time does the film start'] },
        { t: 'listen', say: 'She doesn\'t need help.', a: ['she doesn\'t need help', 'she does not need help'] }
      ],
      test: [
        { t: 'choice', q: '___ they at home now?', o: ['Do', 'Are', 'Does'], a: 1, why: 'at home — «где?», действия нет → Are.' },
        { t: 'choice', q: 'Does she like music? — Yes, she ___.', o: ['is', 'do', 'does'], a: 2, why: 'Вопрос с Does → короткий ответ does.' },
        { t: 'choice', q: 'Max ___ sport. (не занимается)', o: ['doesn\'t do', 'doesn\'t', 'don\'t do'], a: 0, why: 'Нужны и помощник doesn\'t, и сам глагол do; Max = he.' },
        { t: 'choice', q: 'Где работают твои друзья?', o: ['Where do your friends work?', 'Where does your friends work?', 'Where your friends work?'], a: 0, why: 'your friends = they → do; без помощника вопрос нельзя.' },
        { t: 'choice', q: '«What do you do?» значит:', o: ['Что ты делаешь сейчас?', 'Кем ты работаешь?', 'Что ты любишь?'], a: 1, why: 'What do you do? — вопрос о работе.' },
        { t: 'choice', q: 'I ___ hungry, and I ___ want breakfast.', o: ['am not / don\'t', 'don\'t / am not', 'am not / am not'], a: 0, why: 'hungry — с be (am not), want — обычный глагол (don\'t).' },
        { t: 'gap', q: '___ Max and Kate play together? (Вопрос)', a: ['do'], why: 'Max and Kate = they → Do.' },
        { t: 'gap', q: 'Where ___ Anna work?', a: ['does'], why: 'Anna = she → does.' },
        { t: 'gap', q: 'He doesn\'t ___ a dog. (have)', a: ['have'], why: 'После doesn\'t — have, а не has.' },
        { t: 'gap', q: 'See you ___ Friday evening!', a: ['on'], why: 'Есть день недели → on, даже с evening.' },
        { t: 'gap', q: 'I drink tea ___ the morning.', a: ['in'], why: 'Часть дня → in the morning.' },
        { t: 'gap', q: 'How often ___ you listen to music?', a: ['do'], why: 'you + обычный глагол → do.' }
      ]
    },

    // ───────────────────────────── UNIT 5 ─────────────────────────────
    {
      id: 'a1-5', level: 'A1', num: 5, track: 'main',
      books: { red: [3, 4, 8] },
      title: 'I am working — Present Continuous',
      summary: 'Как сказать, что происходит прямо сейчас, и не путать «сейчас» с «обычно». Одежда и погода.',
      grammar: [
        {
          title: '1. Главная идея: «обычно» и «прямо сейчас» — разные времена',
          html: `
<div class="g-idea">По-русски «Я работаю» может значить и «я вообще работаю (у меня есть работа)», и «я работаю прямо сейчас, не мешай». По-английски это <b>два разных времени</b>. «Обычно» — Present Simple (уроки 3–4). «Сейчас, в этот момент» — <b>Present Continuous</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я работаю из дома. <span class="muted">(вообще)</span></p><p>Тихо, я работаю. <span class="muted">(сейчас)</span></p><p>Кот спит. <span class="muted">(сейчас)</span></p></div>
  <div><div class="g-h">English</div><p><span class="say">I work from home.</span></p><p><span class="say">Sorry, I'<b>m working</b>.</span></p><p><span class="say">The cat <b>is sleeping</b>.</span></p></div>
</div>
<div class="g-tip">Continuous = «продолжается». Представьте видео на паузе: действие идёт прямо в этом кадре, оно началось раньше и ещё не закончилось.</div>
<div class="mini" data-q="Не звони, я сейчас играю." data-o="I play now.|I'm playing now.|I playing now." data-a="1" data-why="Прямо сейчас → am + playing."></div>`
        },
        {
          title: '2. Формула: am / is / are + глагол с -ing',
          html: `
<p>Present Continuous собирается из <b>двух частей</b>: знакомый глагол be (am / is / are) и основной глагол с окончанием <b>-ing</b>.</p>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">глагол + ing</span></div>
<table>
<tr><th>Кто</th><th>Полно</th><th>Коротко</th></tr>
<tr><td>I</td><td><span class="say">I am working.</span></td><td><span class="say">I'm working.</span></td></tr>
<tr><td>he, she, it</td><td><span class="say">She is reading.</span></td><td><span class="say">She's reading.</span></td></tr>
<tr><td>you, we, they</td><td><span class="say">They are playing.</span></td><td><span class="say">They're playing.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Max is making a new design.</span> — Макс делает новый дизайн.</li>
<li><span class="say">We're watching a film.</span> — Мы смотрим фильм.</li>
<li><span class="say">I'm waiting for you.</span> — Я тебя жду.</li>
<li><span class="say">Tom is cooking breakfast.</span> — Том готовит завтрак.</li>
<li><span class="say">Look, Kate is coming!</span> — Смотри, Кейт идёт!</li>
</ul>
<div class="g-bad">I working now.</div>
<div class="g-good">I <b>am</b> working now.</div>
<div class="g-bad">She is work.</div>
<div class="g-good">She is work<b>ing</b>.</div>
<div class="g-tip">Нужны <b>обе части</b>, как две половинки билета: без am/is/are или без -ing предложение «не проходит».</div>
<div class="mini" data-q="They ___ a film at the moment." data-o="watching|are watching|are watch" data-a="1" data-why="Нужны обе части: are + watching."></div>
<div class="mini" data-q="Tom ___ cooking." data-o="am|is|are" data-a="1" data-why="Tom = he → is."></div>`
        },
        {
          title: '3. Как пишется -ing',
          html: `
<p>Чаще всего просто добавляем <b>-ing</b>. Но есть три маленьких правила.</p>
<table>
<tr><th>Правило</th><th>Пример</th></tr>
<tr><td>Обычно: + ing</td><td>work → <span class="say">working</span>, play → <span class="say">playing</span>, read → <span class="say">reading</span></td></tr>
<tr><td>Немая -e на конце исчезает</td><td>write → <span class="say">writing</span>, make → <span class="say">making</span>, come → <span class="say">coming</span></td></tr>
<tr><td>Короткое слово на «гласная + согласная» — согласная удваивается</td><td>sit → <span class="say">sitting</span>, run → <span class="say">running</span>, swim <span class="muted">(плавать)</span> → <span class="say">swimming</span></td></tr>
<tr><td>-ie → -ying</td><td>lie <span class="muted">(лежать)</span> → <span class="say">lying</span></td></tr>
</table>
<div class="g-bad">writeing, siting, comeing</div>
<div class="g-good">writing, sitting, coming</div>
<div class="g-tip">Удвоение нужно, чтобы гласная не «растянулась»: si<b>tt</b>ing звучит коротко, как sit. А на y и w не удваиваем: playing, snowing. И длинные слова (listen, answer) тоже не удваиваем: listening.</div>
<div class="mini" data-q="We are ___ at the table. (sit)" data-o="siting|sitting|sitteing" data-a="1" data-why="sit — короткое, гласная + согласная → tt: sitting."></div>
<div class="mini" data-q="She is ___ a message. (write)" data-o="writeing|writting|writing" data-a="2" data-why="Немая -e исчезает: write → writing, одна t."></div>`
        },
        {
          title: '4. Отрицание, вопрос и короткий ответ — как с be',
          html: `
<div class="g-idea">Здесь уже есть am / is / are, поэтому всё строится как в уроках 1–2: <b>not</b> после am/is/are, а в вопросе am/is/are идёт вперёд. Помощник <b>do не нужен</b>.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are + not</span><span class="g-plus">+</span><span class="g-part">-ing</span></div>
<p>Коротко можно двумя способами: <span class="say">She isn't working.</span> = <span class="say">She's not working.</span> · <span class="say">You aren't listening.</span> = <span class="say">You're not listening.</span> Но с I — только <span class="say">I'm not</span>.</p>
<div class="g-formula"><span class="g-part g-v">Am / Is / Are</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">-ing?</span></div>
<table>
<tr><th>Не</th><th>Вопрос</th><th>Ответ</th></tr>
<tr><td><span class="say">I'm not sleeping.</span></td><td><span class="say">Are you sleeping?</span></td><td><span class="say">No, I'm not.</span></td></tr>
<tr><td><span class="say">He isn't working.</span></td><td><span class="say">Is he working?</span></td><td><span class="say">Yes, he is.</span></td></tr>
<tr><td><span class="say">They aren't playing.</span></td><td><span class="say">Are they playing?</span></td><td><span class="say">No, they aren't.</span></td></tr>
</table>
<p><b>Порядок слов.</b> Кто бы ни стоял на месте «кто» — одно слово или несколько, — он встаёт <b>между</b> is/are и -ing:</p>
<div class="g-bad">Is working Max today?</div>
<div class="g-good">Is <b>Max</b> working today?</div>
<p>С вопросительным словом: <b>What / Where / Who</b> + am/is/are + кто + -ing.</p>
<ul class="g-list">
<li><span class="say">What are you doing?</span> — Что ты делаешь (сейчас)? <span class="muted">(самая частая фраза в чатах и играх)</span></li>
<li><span class="say">Where are your friends going?</span> — Куда идут твои друзья?</li>
<li><span class="say">Who are you waiting for?</span> — Кого ты ждёшь?</li>
<li><span class="say">Who are you talking to?</span> — С кем ты разговариваешь?</li>
</ul>
<div class="g-bad">Do you sleeping?</div>
<div class="g-good"><b>Are</b> you sleeping?</div>
<div class="g-bad">He doesn't working.</div>
<div class="g-good">He <b>isn't</b> working.</div>
<div class="mini" data-q="___ he working at the moment?" data-o="Do|Does|Is" data-a="2" data-why="Есть -ing → нужен be: Is he working?"></div>
<div class="mini" data-q="Are you sleeping? — No, I ___." data-o="don't|am not|isn't" data-a="1" data-why="Спросили Are you → отвечаем I'm not / I am not."></div>`
        },
        {
          title: '5. Сейчас или обычно? Как выбрать',
          html: `
<p>Задайте себе вопрос: это происходит <b>обычно, регулярно</b> или <b>прямо сейчас, в этот момент</b>?</p>
<table>
<tr><th>Обычно — Present Simple</th><th>Сейчас — Present Continuous</th></tr>
<tr><td><span class="say">I work from home.</span></td><td><span class="say">I'm working now.</span></td></tr>
<tr><td><span class="say">She usually wears jeans.</span></td><td><span class="say">Today she's wearing a dress.</span></td></tr>
<tr><td><span class="say">Max plays games every evening.</span></td><td><span class="say">Look! Max is playing.</span></td></tr>
<tr><td><span class="say">It often rains here.</span></td><td><span class="say">It's raining.</span></td></tr>
<tr><td>every day, usually, often, never, on Monday</td><td>now, right now, at the moment, Look! Listen!</td></tr>
</table>
<div class="g-tip">Слова-подсказки работают как дорожные знаки: увидели <b>now / Look!</b> — ставьте -ing; увидели <b>every day / usually</b> — простую форму.</div>
<p><b>Два похожих вопроса — разный смысл:</b></p>
<ul class="g-list">
<li><span class="say">What do you do?</span> — Кем ты работаешь? <span class="muted">(вообще)</span></li>
<li><span class="say">What are you doing?</span> — Что ты делаешь? <span class="muted">(сейчас)</span></li>
</ul>
<p><b>Глаголы-исключения.</b> Некоторые глаголы — это не действие, а состояние (что у нас в голове). Их не ставят с -ing, даже «прямо сейчас»: <b>like, love, want, need, know, understand, mean</b>, а ещё remember <span class="muted">(помнить)</span>.</p>
<ul class="g-list">
<li><span class="say">I want a coffee now.</span> — Я хочу кофе сейчас.</li>
<li><span class="say">Do you understand me?</span> — Ты меня понимаешь?</li>
<li><span class="say">I'm tired. I need help.</span> — Я устал. Мне нужна помощь.</li>
</ul>
<div class="g-bad">I'm wanting a coffee.</div>
<div class="g-good">I <b>want</b> a coffee.</div>
<div class="g-bad">I'm knowing the answer.</div>
<div class="g-good">I <b>know</b> the answer.</div>
<div class="mini" data-q="Max ___ from home every day." data-o="works|is working|working" data-a="0" data-why="every day — это «обычно» → Present Simple: works."></div>
<div class="mini" data-q="Look! The cat ___ on my laptop." data-o="sleeps|is sleeping|sleeping" data-a="1" data-why="Look! — прямо сейчас → is sleeping."></div>`
        },
        {
          title: '6. Погода и одежда',
          html: `
<p><b>Погода</b> — всегда через <b>it</b>. Состояние — с is, а дождь и снег, которые идут <i>сейчас</i>, — Present Continuous.</p>
<ul class="g-list">
<li><span class="say">It's cold.</span> — Холодно. <span class="say">It's sunny today.</span> — Сегодня солнечно.</li>
<li><span class="say">It's raining.</span> — Идёт дождь. <span class="say">Look, it's snowing!</span> — Смотри, идёт снег!</li>
<li><span class="say">It isn't raining now.</span> — Сейчас дождя нет.</li>
<li><span class="say">What's the weather like?</span> — Какая погода?</li>
</ul>
<div class="g-bad">Rain is going.</div>
<div class="g-good">It's <b>raining</b>.</div>
<p><b>Одежда.</b> «На нём куртка», «она в платье» — по-английски: кто-то <b>wearing</b> что-то (носит прямо сейчас).</p>
<ul class="g-list">
<li><span class="say">He is wearing a black jacket.</span> — На нём чёрная куртка.</li>
<li><span class="say">I'm wearing jeans.</span> — Я в джинсах.</li>
<li><span class="say">She usually wears a T-shirt, but today she's wearing a dress.</span> — Обычно она носит футболку, но сегодня на ней платье.</li>
</ul>
<div class="g-tip">Русское «идёт дождь» дословно не переводим. Дождь по-английски не «идёт», а «дождит»: it's rain<b>ing</b>, it's snow<b>ing</b>.</div>
<div class="mini" data-q="Идёт снег!" data-o="Snow is going!|It's snowing!|It snows now!" data-a="1" data-why="Погода → it; прямо сейчас → is snowing."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">I working now.</div><div class="g-good">I<b>'m</b> working now.</div>
<div class="g-bad">She is sit on the chair.</div><div class="g-good">She is <b>sitting</b> on the chair.</div>
<div class="g-bad">Do you watching a film?</div><div class="g-good"><b>Are</b> you watching a film?</div>
<div class="g-bad">What you are doing?</div><div class="g-good">What <b>are you</b> doing?</div>
<div class="g-bad">Is working Tom now?</div><div class="g-good">Is <b>Tom working</b> now?</div>
<div class="g-bad">I'm working from home every day.</div><div class="g-good">I <b>work</b> from home every day.</div>
<div class="g-bad">I'm liking this game.</div><div class="g-good">I <b>like</b> this game.</div>
<div class="g-bad">Rain is going.</div><div class="g-good">It's <b>raining</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог урока в одной строке</div>Прямо сейчас — <b>am / is / are + -ing</b> (I'm working), обычно — простая форма (I work); в вопросе и с not работает be, а не do; like, want, know — без -ing.</div>`
        }
      ],
      words: [
        ['now', 'сейчас', 'I am busy now.', 'Я сейчас занят.'],
        ['right now', 'прямо сейчас', 'She is sleeping right now.', 'Она прямо сейчас спит.'],
        ['at the moment', 'в данный момент', 'He is not working at the moment.', 'Он сейчас не работает.'],
        ['today', 'сегодня', 'Today I am working from home.', 'Сегодня я работаю из дома.'],
        ['look', 'смотреть; смотри!', 'Look! It\'s snowing!', 'Смотри! Идёт снег!'],
        ['wait', 'ждать', 'I am waiting for you.', 'Я жду тебя.'],
        ['come', 'приходить, идти (сюда)', 'Look, Kate is coming!', 'Смотри, Кейт идёт!'],
        ['run', 'бегать, бежать', 'The dog is running in the room.', 'Собака бегает по комнате.'],
        ['sit', 'сидеть', 'We are sitting at the table.', 'Мы сидим за столом.'],
        ['stand', 'стоять', 'Tom is standing at the window.', 'Том стоит у окна.'],
        ['write', 'писать', 'She is writing a message.', 'Она пишет сообщение.'],
        ['talk', 'разговаривать', 'Who are you talking to?', 'С кем ты разговариваешь?'],
        ['call', 'звонить; звонок', 'Anna is calling you.', 'Анна тебе звонит.'],
        ['cook', 'готовить (еду)', 'Tom is cooking breakfast.', 'Том готовит завтрак.'],
        ['make', 'делать, создавать', 'Max is making a new design.', 'Макс делает новый дизайн.'],
        ['message', 'сообщение', 'I am writing a message.', 'Я пишу сообщение.'],
        ['busy', 'занятой', 'Sorry, I\'m busy now.', 'Извини, я сейчас занят.'],
        ['wear', 'носить, быть одетым в', 'She is wearing a red dress.', 'На ней красное платье.'],
        ['clothes', 'одежда', 'These clothes are new.', 'Эта одежда новая.'],
        ['T-shirt', 'футболка', 'He usually wears a T-shirt.', 'Он обычно носит футболку.'],
        ['jeans', 'джинсы', 'I am wearing jeans.', 'Я в джинсах.'],
        ['jacket', 'куртка, пиджак', 'Where is my jacket? It\'s cold.', 'Где моя куртка? Холодно.'],
        ['coat', 'пальто', 'Where is my coat?', 'Где моё пальто?'],
        ['shoes', 'обувь, туфли', 'These shoes are expensive.', 'Эти туфли дорогие.'],
        ['hat', 'шапка, шляпа', 'He is wearing a black hat.', 'На нём чёрная шапка.'],
        ['dress', 'платье', 'I like your dress!', 'Мне нравится твоё платье!'],
        ['weather', 'погода', 'What\'s the weather like?', 'Какая погода?'],
        ['rain', 'дождь; идёт дождь', 'It is raining again.', 'Опять идёт дождь.'],
        ['snow', 'снег; идёт снег', 'Look, it\'s snowing!', 'Смотри, идёт снег!'],
        ['sunny', 'солнечный', 'It is sunny today.', 'Сегодня солнечно.'],
        ['warm', 'тёплый', 'It is warm in the room.', 'В комнате тепло.'],
        ['window', 'окно', 'I am looking out of the window.', 'Я смотрю в окно.']
      ],
      texts: [
        {
          id: 't-a1-5-1', title: 'What are you doing?', level: 'A1',
          text: `Kate: Hi, Max! What are you doing?
Max: Hi! I'm working. I'm making a new design for a game.
Kate: At nine o'clock in the evening?
Max: Yes. I usually finish at six, but today I'm very busy.
Kate: Are you working at home?
Max: No, I'm not. I'm sitting in the office. My laptop is on the table, and I'm drinking tea.
Kate: Are your friends there with you?
Max: No, they aren't. They're at home.
Kate: I'm not working today. I'm playing our game with Tom and Anna. They're waiting for you!
Max: Sorry! I'm finishing now. Is Tom playing too?
Kate: No, he isn't. He's talking and eating. He isn't listening to me!
Max: Ha! OK, I'm coming.
Kate: OK. We're waiting!`,
          questions: [
            { q: 'Where is Max sitting?', o: ['at home', 'in the office', 'in the game'], a: 1 },
            { q: 'What is Max drinking?', o: ['coffee', 'coffee and tea', 'tea'], a: 2 },
            { q: 'Who is playing the game with Kate?', o: ['Tom and Anna', 'Max', 'Luna'], a: 0 }
          ]
        },
        {
          id: 't-a1-5-2', title: 'A rainy Saturday', level: 'A1',
          text: `It is Saturday. On Saturday Anna usually does sport with her friends. But today it is raining, and it is cold.
Anna is at home. She is sitting on a chair and looking out of the window. She isn't doing sport today.
Her cat Luna is sleeping on the table. Tom is cooking breakfast. He is making coffee too.
Anna is wearing her old jeans and a big T-shirt. She isn't wearing shoes. It is warm in the room.
Anna's phone is on the table. Kate is calling!
"Hi, Anna! What are you doing?"
"I'm at home. I'm reading a book and waiting for breakfast. Tom is cooking. And you? Are you working?"
"No, I'm not. I'm in London, and it isn't raining here. It's sunny and warm!"
Anna looks at the rain. She wants to be in London!`,
          questions: [
            { q: 'What does Anna usually do on Saturday?', o: ['She reads a book.', 'She does sport with friends.', 'She works.'], a: 1 },
            { q: 'What is Tom doing?', o: ['He is sleeping.', 'He is calling Kate.', 'He is cooking breakfast.'], a: 2 },
            { q: 'What is the weather like in London?', o: ['It\'s sunny.', 'It\'s raining.', 'It\'s snowing.'], a: 0 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ working now.', o: ['am', 'is', 'are'], a: 0, why: 'I → am.' },
        { t: 'choice', q: 'Look! The dog ___ on my bag.', o: ['sleeps', 'is sleeping', 'sleeping'], a: 1, why: 'Look! — прямо сейчас → is + sleeping.' },
        { t: 'choice', q: 'Kate usually ___ tea in the morning.', o: ['drinks', 'is drinking', 'drinking'], a: 0, why: 'usually — «обычно» → Present Simple: drinks.' },
        { t: 'choice', q: 'We ___ a film right now.', o: ['watch', 'are watching', 'watching'], a: 1, why: 'right now → are + watching; без are нельзя.' },
        { t: 'choice', q: 'I ___ a coffee now.', o: ['want', 'am wanting', 'wanting'], a: 0, why: 'want — глагол-состояние, с -ing не ставится.' },
        { t: 'choice', q: '___ Tom cooking?', o: ['Do', 'Does', 'Is'], a: 2, why: 'Есть -ing → вопрос с be: Is Tom cooking?' },
        { t: 'choice', q: 'Правильный порядок:', o: ['Is working Max today?', 'Is Max working today?', 'Max is working today?'], a: 1, why: 'Is + кто + -ing: Is Max working?' },
        { t: 'choice', q: '«Что ты делаешь (прямо сейчас)?»', o: ['What do you do?', 'What are you doing?', 'What you are doing?'], a: 1, why: 'Сейчас → What are you doing?; What do you do? — о работе.' },
        { t: 'gap', q: 'Max is ___ a new design. (make)', a: ['making'], why: 'Немая -e исчезает: make → making.' },
        { t: 'gap', q: 'The dog is ___ in the room. (run)', a: ['running'], why: 'run — короткое, гласная + согласная → nn: running.' },
        { t: 'gap', q: 'Tom ___ cooking breakfast.', a: ['is'], why: 'Tom = he → is + -ing.' },
        { t: 'gap', q: 'Are you sleeping? — No, I\'m ___.', a: ['not'], why: 'Короткий ответ с be: No, I\'m not.' },
        { t: 'gap', q: 'Look! It\'s ___! (идёт снег)', a: ['snowing'], why: 'Погода сейчас → it\'s + snowing.' },
        { t: 'gap', q: 'We ___ waiting for you. (не)', a: ['aren\'t', 'are not'], why: 'Отрицание с be: we + aren\'t + -ing, do не нужен.' },
        { t: 'order', a: 'What are you doing', ru: 'Что ты делаешь (сейчас)?' },
        { t: 'order', a: 'He is wearing a black jacket', ru: 'На нём чёрная куртка' },
        { t: 'tr', q: 'Я сейчас работаю.', a: ['i am working now', 'i\'m working now', 'i am working', 'i\'m working', 'now i am working', 'now i\'m working'] },
        { t: 'tr', q: 'Идёт дождь.', a: ['it is raining', 'it\'s raining'] },
        { t: 'tr', q: 'Она не спит.', a: ['she is not sleeping', 'she isn\'t sleeping', 'she\'s not sleeping'] },
        { t: 'listen', say: 'I am waiting for you', a: ['i am waiting for you', 'i\'m waiting for you'] }
      ],
      test: [
        { t: 'choice', q: 'She usually ___ jeans, but today she ___ a dress.', o: ['wears / is wearing', 'is wearing / wears', 'wear / wearing'], a: 0, why: 'usually → wears; today, сейчас → is wearing.' },
        { t: 'choice', q: '___ your friends playing now?', o: ['Do', 'Are', 'Is'], a: 1, why: 'your friends = they, есть -ing → Are.' },
        { t: 'choice', q: 'I ___ this game.', o: ['like', 'am liking', 'liking'], a: 0, why: 'like — глагол-состояние, без -ing.' },
        { t: 'choice', q: 'Who ___ you waiting for?', o: ['do', 'are', 'is'], a: 1, why: 'waiting — -ing → be; you → are.' },
        { t: 'choice', q: 'What ___ Anna do? — She\'s a teacher.', o: ['is', 'does', 'do'], a: 1, why: 'Вопрос о работе (вообще) → Present Simple: What does Anna do?' },
        { t: 'choice', q: 'Is it raining? — No, it ___.', o: ['isn\'t', 'doesn\'t', 'don\'t'], a: 0, why: 'Спросили Is → отвечаем isn\'t.' },
        { t: 'gap', q: 'They ___ playing games right now.', a: ['are'], why: 'they → are + -ing.' },
        { t: 'gap', q: 'We are ___ in the office. (sit)', a: ['sitting'], why: 'sit → sitting, t удваивается.' },
        { t: 'gap', q: 'Where are you ___? (go)', a: ['going'], why: 'Сейчас → are + going; go просто + ing.' },
        { t: 'gap', q: 'Sorry, I ___ understand you. (не)', a: ['don\'t', 'do not'], why: 'understand — состояние, не бывает с -ing → Present Simple: don\'t understand.' },
        { t: 'gap', q: 'Are you listening to me? — Yes, I ___.', a: ['am'], why: 'Спросили Are you → отвечаем I am.' },
        { t: 'gap', q: 'Look! Tom ___ a hat. (wear)', a: ['is wearing'], why: 'Look! — сейчас → is + wearing.' }
      ]
    }
  ].forEach(put);
})();
