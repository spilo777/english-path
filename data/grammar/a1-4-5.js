// Юниты 4 и 5 — вопросы и отрицания в Present Simple; Present Continuous.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-4');
  if (!u) return;
  u.grammar = [
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
<p>Чтобы сказать «не», ставим <b>don't</b> или <b>doesn't</b> перед глаголом. Выбор — по тому же правилу, что и -s в прошлом юните.</p>
<table>
<tr><th>Кто</th><th>Помощник</th><th>Пример</th></tr>
<tr><td>I, you, we, they</td><td><b class="g-v">don't</b></td><td><span class="say">I don't know.</span></td></tr>
<tr><td>he, she, it</td><td><b class="g-v">doesn't</b></td><td><span class="say">She doesn't like tea.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">don't / doesn't</span><span class="g-plus">+</span><span class="g-part">глагол без -s</span></div>
<ul class="g-list">
<li><span class="say">We don't work on Sunday.</span> — Мы не работаем в воскресенье.</li>
<li><span class="say">He doesn't play games.</span> — Он не играет в игры.</li>
<li><span class="say">My cat doesn't sleep at night.</span> — Мой кот не спит ночью.</li>
<li><span class="say">I don't understand.</span> — Я не понимаю.</li>
</ul>
<p>don't = do not, doesn't = does not. В разговоре почти всегда говорят коротко.</p>
<div class="g-bad">She doesn't likes coffee.</div>
<div class="g-good">She doesn't <b>like</b> coffee.</div>
<div class="g-tip">Хвостик -s может быть только один. Если он уже «уехал» в does, у глагола его нет: do<b>es</b>n't + like.</div>
<div class="mini" data-q="Tom ___ speak Russian." data-o="don't|doesn't|isn't" data-a="1" data-why="Tom = he → doesn't. isn't — это для be, а speak — обычный глагол."></div>
<div class="mini" data-q="He doesn't ___ here." data-o="live|lives|living" data-a="0" data-why="После doesn't глагол без -s: live."></div>`
    },
    {
      title: '3. Вопрос: Do / Does в начале и короткие ответы',
      html: `
<p>Для вопроса ставим <b>Do</b> или <b>Does</b> в самое начало. Всё остальное — как в обычном предложении, только глагол опять без -s.</p>
<div class="g-formula"><span class="g-part g-v">Do / Does</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол без -s</span><span class="g-plus">+</span><span class="g-part">…?</span></div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You play games.</td><td><span class="say">Do you play games?</span></td></tr>
<tr><td>They live in Moscow.</td><td><span class="say">Do they live in Moscow?</span></td></tr>
<tr><td>He works from home.</td><td><span class="say">Does he work from home?</span></td></tr>
<tr><td>Anna likes this film.</td><td><span class="say">Does Anna like this film?</span></td></tr>
</table>
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
<div class="mini" data-q="___ your friend play games?" data-o="Do|Does|Is" data-a="1" data-why="your friend = he/she → Does."></div>
<div class="mini" data-q="Does she work here? — No, she ___." data-o="don't|doesn't|isn't" data-a="1" data-why="Спросили Does → отвечаем doesn't."></div>`
    },
    {
      title: '4. Вопросы со словами where, what, when',
      html: `
<p>Если нужно спросить не «да/нет», а <b>где? что? когда?</b> — вопросительное слово ставим перед do/does. Дальше всё как в обычном вопросе.</p>
<div class="g-formula"><span class="g-part">Where / What / When…</span><span class="g-plus">+</span><span class="g-part g-v">do / does</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<ul class="g-list">
<li><span class="say">Where do you live?</span> — Где ты живёшь?</li>
<li><span class="say">What do you do?</span> — Чем ты занимаешься? <span class="muted">(кем работаешь)</span></li>
<li><span class="say">When do you get up?</span> — Когда ты встаёшь?</li>
<li><span class="say">What time does the game start?</span> — Во сколько начинается игра?</li>
<li><span class="say">What music do you like?</span> — Какую музыку ты любишь?</li>
<li><span class="say">Where does Max work?</span> — Где работает Макс?</li>
</ul>
<div class="g-steps"><div class="g-h">Как построить вопрос за 3 шага</div><ol>
<li>Возьмите утверждение: <i>You live in Moscow.</i></li>
<li>Поставьте вперёд do/does: <i>Do you live in Moscow?</i></li>
<li>Уберите ответ и поставьте в начало вопросительное слово: <span class="say">Where do you live?</span></li>
</ol></div>
<div class="g-tip">В «What do you do?» два do: первый — помощник, второй — глагол «делать». Это нормально!</div>
<div class="g-bad">Where you live?</div>
<div class="g-good">Where <b>do</b> you live?</div>
<div class="mini" data-q="Когда он заканчивает работу?" data-o="When he finishes work?|When does he finish work?|When does he finishes work?" data-a="1" data-why="When + does + he + finish (без -s)."></div>`
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
<div class="mini" data-q="___ they like this series?" data-o="Do|Are|Does" data-a="0" data-why="like — обычный глагол → Do they like…?"></div>`
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
<div class="g-tip">o'clock — это «ровно, часов». Говорят только с целым часом: at five o'clock. Можно и без него: at five.</div>
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
<div class="g-bad">I am not understand.</div><div class="g-good">I <b>don't</b> understand.</div>
<div class="g-bad">Do you are hungry?</div><div class="g-good"><b>Are</b> you hungry?</div>
<div class="g-bad">Where you work?</div><div class="g-good">Where <b>do</b> you work?</div>
<div class="g-bad">I play in Friday.</div><div class="g-good">I play <b>on</b> Friday.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>С обычным глаголом — <b>Do you…? / Does he…?</b> и <b>don't / doesn't</b>, а глагол после них всегда без -s; с am/is/are помощник do не нужен.</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-5');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: «обычно» и «прямо сейчас» — разные времена',
      html: `
<div class="g-idea">По-русски «Я работаю» может значить и «я вообще работаю (у меня есть работа)», и «я работаю прямо сейчас, не мешай». По-английски это <b>два разных времени</b>. «Обычно» — Present Simple (юниты 3–4). «Сейчас, в этот момент» — <b>Present Continuous</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я работаю из дома. <span class="muted">(вообще)</span></p><p>Не могу, я работаю. <span class="muted">(сейчас)</span></p><p>Кот спит. <span class="muted">(сейчас)</span></p></div>
  <div><div class="g-h">English</div><p><span class="say">I work from home.</span></p><p><span class="say">Sorry, I'<b>m working</b>.</span></p><p><span class="say">The cat <b>is sleeping</b>.</span></p></div>
</div>
<div class="g-tip">Continuous = «продолжается». Представьте видео, поставленное на паузу: действие идёт прямо в этот кадр, оно началось раньше и ещё не закончилось.</div>
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
<li><span class="say">We're watching a series.</span> — Мы смотрим сериал.</li>
<li><span class="say">I'm waiting for you.</span> — Я тебя жду.</li>
<li><span class="say">Tom is cooking dinner.</span> — Том готовит ужин.</li>
</ul>
<div class="g-bad">I working now.</div>
<div class="g-good">I <b>am</b> working now.</div>
<div class="g-bad">She is work.</div>
<div class="g-good">She is work<b>ing</b>.</div>
<div class="g-tip">Нужны <b>обе части</b>, как две половинки билета: без am/is/are или без -ing предложение «не проходит».</div>
<div class="mini" data-q="They ___ a film at the moment." data-o="watching|are watching|are watch" data-a="1" data-why="Нужны обе части: are + watching."></div>
<div class="mini" data-q="Tom ___ cooking dinner." data-o="am|is|are" data-a="1" data-why="Tom = he → is."></div>`
    },
    {
      title: '3. Как пишется -ing',
      html: `
<p>Чаще всего просто добавляем <b>-ing</b>. Но есть три маленьких правила.</p>
<table>
<tr><th>Правило</th><th>Пример</th></tr>
<tr><td>Обычно: + ing</td><td>work → <span class="say">working</span>, play → <span class="say">playing</span>, read → <span class="say">reading</span></td></tr>
<tr><td>Немая -e на конце исчезает</td><td>write → <span class="say">writing</span>, make → <span class="say">making</span></td></tr>
<tr><td>Короткое слово на «гласная + согласная» — согласная удваивается</td><td>sit → <span class="say">sitting</span>, run → <span class="say">running</span>, stop → <span class="say">stopping</span></td></tr>
<tr><td>-ie → -ying</td><td>lie → <span class="say">lying</span></td></tr>
</table>
<div class="g-bad">writeing, siting</div>
<div class="g-good">writing, sitting</div>
<div class="g-tip">Удвоение нужно, чтобы гласная не «растянулась»: si<b>tt</b>ing звучит коротко, как sit. А play, snow — на y и w — не удваиваем: playing, snowing.</div>
<div class="mini" data-q="We are ___ in a café. (sit)" data-o="siting|sitting|sitteing" data-a="1" data-why="sit — короткое, гласная + согласная → tt: sitting."></div>
<div class="mini" data-q="She is ___ a message. (write)" data-o="writeing|writting|writing" data-a="2" data-why="Немая -e исчезает: write → writing."></div>`
    },
    {
      title: '4. Отрицание и вопрос — как с be',
      html: `
<div class="g-idea">Здесь уже есть am / is / are, поэтому всё строится как в юнитах 1–2: <b>not</b> после am/is/are, а в вопросе am/is/are идёт вперёд. Помощник <b>do не нужен</b>.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are + not</span><span class="g-plus">+</span><span class="g-part">-ing</span></div>
<div class="g-formula"><span class="g-part g-v">Am / Is / Are</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">-ing?</span></div>
<table>
<tr><th>Не</th><th>Вопрос</th><th>Ответ</th></tr>
<tr><td><span class="say">I'm not sleeping.</span></td><td><span class="say">Are you sleeping?</span></td><td><span class="say">No, I'm not.</span></td></tr>
<tr><td><span class="say">He isn't working.</span></td><td><span class="say">Is he working?</span></td><td><span class="say">Yes, he is.</span></td></tr>
<tr><td><span class="say">They aren't playing.</span></td><td><span class="say">Are they playing?</span></td><td><span class="say">No, they aren't.</span></td></tr>
</table>
<p>С вопросительным словом: <b>What / Where / Why</b> + am/is/are + кто + -ing.</p>
<ul class="g-list">
<li><span class="say">What are you doing?</span> — Что ты делаешь (сейчас)? <span class="muted">(самая частая фраза в чатах и играх)</span></li>
<li><span class="say">Who are you talking to?</span> — С кем ты разговариваешь?</li>
<li><span class="say">Why are you standing there?</span> — Почему ты там стоишь?</li>
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
<p>Задайте себе вопрос: это происходит <b>обычно, регулярно</b> или <b>прямо сейчас / сегодня, временно</b>?</p>
<table>
<tr><th>Обычно — Present Simple</th><th>Сейчас — Present Continuous</th></tr>
<tr><td><span class="say">I work from home.</span></td><td><span class="say">I'm working now.</span></td></tr>
<tr><td><span class="say">She usually wears jeans.</span></td><td><span class="say">Today she's wearing a dress.</span></td></tr>
<tr><td><span class="say">Max plays games every evening.</span></td><td><span class="say">Look! Max is playing.</span></td></tr>
<tr><td>every day, usually, often, on Monday</td><td>now, right now, at the moment, today, Look! Listen!</td></tr>
</table>
<div class="g-tip">Слова-подсказки работают как дорожные знаки: увидели <b>now / Look!</b> — ставьте -ing; увидели <b>every day / usually</b> — простую форму.</div>
<p><b>Глаголы-исключения.</b> Некоторые глаголы — это не действие, а состояние (что внутри головы). Их почти никогда не ставят с -ing, даже «прямо сейчас»: <b>like, love, want, need, know, understand</b>.</p>
<ul class="g-list">
<li><span class="say">I want a coffee now.</span> — Я хочу кофе сейчас.</li>
<li><span class="say">Do you understand me?</span> — Ты меня понимаешь?</li>
<li><span class="say">I like this game.</span> — Мне нравится эта игра.</li>
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
<div class="g-bad">I'm working from home every day.</div><div class="g-good">I <b>work</b> from home every day.</div>
<div class="g-bad">I'm liking this game.</div><div class="g-good">I <b>like</b> this game.</div>
<div class="g-bad">Rain is going.</div><div class="g-good">It's <b>raining</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Прямо сейчас — <b>am / is / are + -ing</b> (I'm working), обычно — простая форма (I work); в вопросе и с not работает be, а не do.</div>`
    }
  ];
})();
