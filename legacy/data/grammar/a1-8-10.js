// Юниты 8–10 — was/were, Past Simple (утверждение), Past Simple (вопросы и отрицания).
// Стиль «как у Мерфи, только проще», эталон — a1-1.js.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-8');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: «был» по-английски — was или were',
      html: `
<div class="g-idea">Вы уже знаете: в английском нельзя без глагола. «Я дома» — <b>I am at home</b>. В прошлом правило то же, только вместо am / is / are ставим <b>was</b> или <b>were</b> («был, была, было, были»).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>был</b> дома.</p><p>Фильм <b>был</b> скучный.</p><p>Мы <b>были</b> на работе.</p><p>Вчера <span class="g-gap">_</span> холодно.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>was</b> at home.</span></p><p><span class="say">The film <b>was</b> boring.</span></p><p><span class="say">We <b>were</b> at work.</span></p><p><span class="say">It <b>was</b> cold yesterday.</span></p></div>
</div>
<p>Обратите внимание на последний пример. По-русски «вчера холодно» можно сказать почти без глагола («вчера <i>было</i> холодно»). По-английски глагол обязателен: <b>It was cold</b>.</p>
<div class="g-tip">Русское «было» в начале фразы («было весело», «было поздно») почти всегда = <b>It was</b>: <span class="say">It was fun.</span> <span class="say">It was late.</span></div>
<div class="mini" data-q="Было весело!" data-o="Was fun!|It was fun!|It fun!" data-a="1" data-why="Нужны и «кто» (it), и глагол (was): It was fun."></div>`
    },
    {
      title: '2. Какую форму ставить: was или were',
      html: `
<p>Всё как с am / is / are, только форм две, а не три.</p>
<table>
<tr><th>Сейчас</th><th>В прошлом</th><th>Пример</th></tr>
<tr><td>I <b>am</b></td><td>I <b class="g-v">was</b></td><td><span class="say">I was tired.</span></td></tr>
<tr><td>he / she / it <b>is</b></td><td>he / she / it <b class="g-v">was</b></td><td><span class="say">She was busy.</span></td></tr>
<tr><td>you / we / they <b>are</b></td><td>you / we / they <b class="g-v">were</b></td><td><span class="say">They were online.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">am, is</span><span class="g-plus">→</span><span class="g-part g-v">was</span><span class="g-sep">·</span><span class="g-part">are</span><span class="g-plus">→</span><span class="g-part g-v">were</span></div>
<ul class="g-list">
<li><span class="say">The meeting was long.</span> — Встреча была долгой.</li>
<li><span class="say">My friends were at the party.</span> — Мои друзья были на вечеринке.</li>
<li><span class="say">You were great in the game!</span> — Ты был крут в игре!</li>
</ul>
<div class="g-bad">You was at home.</div>
<div class="g-good">You were at home. <span class="muted">— с you всегда were, даже если «ты» один</span></div>
<div class="g-tip">Про чувства: <b>bored</b> — мне скучно (так чувствую я), <b>boring</b> — скучный (такой фильм, встреча). <span class="say">The series was boring. I was bored.</span> — Сериал был скучный. Мне было скучно.</div>
<div class="mini" data-q="Tom and Anna ___ at the cinema." data-o="was|were|are" data-a="1" data-why="Tom and Anna — двое (они = they) → were."></div>
<div class="mini" data-q="The film was long. I was ___." data-o="boring|bored" data-a="1" data-why="Про свои чувства — bored. Boring — про сам фильм."></div>`
    },
    {
      title: '3. Отрицание: wasn’t, weren’t',
      html: `
<div class="g-idea">Чтобы сказать «не был», просто добавьте <b>not</b> после was / were. Больше ничего не нужно.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">was not / were not</span><span class="g-plus">+</span><span class="g-part">остальное</span></div>
<table>
<tr><th>Полная форма</th><th>Коротко</th><th>Пример</th></tr>
<tr><td>was not</td><td><b>wasn't</b></td><td><span class="say">I wasn't at work.</span></td></tr>
<tr><td>were not</td><td><b>weren't</b></td><td><span class="say">They weren't there.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">The shop wasn't open.</span> — Магазин был не открыт.</li>
<li><span class="say">We weren't online last night.</span> — Нас не было в сети вчера вечером.</li>
<li><span class="say">The design wasn't bad.</span> — Дизайн был неплохой.</li>
</ul>
<div class="g-bad">I didn't was at home.</div>
<div class="g-good">I wasn't at home. <span class="muted">— с was / were помощник did не нужен</span></div>
<div class="mini" data-q="Её не было дома." data-o="She didn't at home.|She wasn't at home.|She weren't at home." data-a="1" data-why="she → was, отрицание → wasn't. Did здесь не нужен."></div>`
    },
    {
      title: '4. Вопрос: was / were — в начало',
      html: `
<div class="g-idea">В вопросе was / were меняется местами с «кто». По-русски мы спрашиваем голосом («Ты был дома?»), а по-английски — порядком слов.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты был дома?</p><p>Было весело?</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Were</b> you at home?</span></p><p><span class="say"><b>Was</b> it fun?</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">Was / Were</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">остальное</span><span class="g-plus">?</span></div>
<p>Коротко ответить — повторите was / were:</p>
<table>
<tr><th>Вопрос</th><th>Да</th><th>Нет</th></tr>
<tr><td><span class="say">Were you busy?</span></td><td>Yes, I was.</td><td>No, I wasn't.</td></tr>
<tr><td><span class="say">Was the game hard?</span></td><td>Yes, it was.</td><td>No, it wasn't.</td></tr>
<tr><td><span class="say">Were they angry?</span></td><td>Yes, they were.</td><td>No, they weren't.</td></tr>
</table>
<div class="g-bad">You were at home? <span class="muted">— порядок как в утверждении</span></div>
<div class="g-good">Were you at home?</div>
<div class="g-bad">Was you tired?</div>
<div class="g-good">Were you tired? <span class="muted">— you всегда с were</span></div>
<div class="mini" data-q="___ the shop open?" data-o="Did|Was|Were" data-a="1" data-why="the shop — одно (it) → Was. Did с be не используется."></div>
<div class="mini" data-q="Were they at school? — No, they ___." data-o="wasn't|weren't|didn't" data-a="1" data-why="В ответе повторяем глагол вопроса: were → weren't."></div>`
    },
    {
      title: '5. Где? Как? Кто? — вопросительные слова',
      html: `
<p>Вопросительное слово ставим <b>самым первым</b>, дальше — как в обычном вопросе.</p>
<div class="g-formula"><span class="g-part">Где / Как / Кто…</span><span class="g-plus">+</span><span class="g-part g-v">was / were</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">?</span></div>
<ul class="g-list">
<li><span class="say">Where were you yesterday?</span> — Где ты был вчера?</li>
<li><span class="say">How was the party?</span> — Как прошла вечеринка?</li>
<li><span class="say">How was your weekend?</span> — Как прошли выходные?</li>
<li><span class="say">What was the problem?</span> — В чём была проблема?</li>
<li><span class="say">Who was there?</span> — Кто там был?</li>
<li><span class="say">Why were you late?</span> — Почему ты опоздал?</li>
</ul>
<div class="g-tip"><b>How was…?</b> — самый полезный вопрос: «Как прошло…?» Как фильм, поездка, встреча, игра: <span class="say">How was the trip?</span></div>
<p><b>Родился</b> по-английски — это «был рождён»: <b>was / were born</b>.</p>
<ul class="g-list">
<li><span class="say">I was born in 1995.</span> — Я родился в 1995 году.</li>
<li><span class="say">Where were you born?</span> — Где ты родился?</li>
</ul>
<div class="g-bad">I born in Kazan.</div>
<div class="g-good">I was born in Kazan.</div>
<div class="g-bad">Where you were yesterday?</div>
<div class="g-good">Where were you yesterday?</div>
<div class="mini" data-q="Где ты родился?" data-o="Where you were born?|Where were you born?|Where did you born?" data-a="1" data-why="Вопросительное слово + were + you + born."></div>`
    },
    {
      title: '6. Когда это было: yesterday, last, ago',
      html: `
<p>Эти слова сразу показывают: речь о прошлом.</p>
<table>
<tr><th>Слово</th><th>Значит</th><th>Примеры</th></tr>
<tr><td><b>yesterday</b></td><td>вчера</td><td><span class="say">yesterday morning</span></td></tr>
<tr><td><b>last</b></td><td>прошлый</td><td><span class="say">last week</span>, <span class="say">last year</span></td></tr>
<tr><td><b>ago</b></td><td>… назад</td><td><span class="say">two days ago</span>, <span class="say">an hour ago</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I was at the office yesterday.</span> — Вчера я был в офисе.</li>
<li><span class="say">We were in Spain last summer.</span> — Прошлым летом мы были в Испании.</li>
<li><span class="say">She was here an hour ago.</span> — Она была здесь час назад.</li>
</ul>
<div class="g-steps"><div class="g-h">Три правила</div><ol>
<li><b>ago</b> всегда <b>после</b> срока: two days ago.</li>
<li>Перед <b>last</b> не нужен предлог: last week, а не «in last week».</li>
<li><b>last night</b> — это «вчера вечером», а не «последняя ночь».</li>
</ol></div>
<div class="g-bad">I was there ago two days.</div>
<div class="g-good">I was there two days ago.</div>
<div class="g-bad">We were in Rome in last year.</div>
<div class="g-good">We were in Rome last year.</div>
<div class="mini" data-q="Три года назад:" data-o="ago three years|three years ago|three years last" data-a="1" data-why="ago ставится после срока."></div>
<div class="mini" data-q="Were you online ___? (вчера вечером)" data-o="last night|yesterday night ago|in last evening" data-a="0" data-why="«Вчера вечером» — last night, без предлога."></div>`
    },
    {
      title: '7. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">Yesterday I at home.</div><div class="g-good">Yesterday I <b>was</b> at home.</div>
<div class="g-bad">They was at the party.</div><div class="g-good">They <b>were</b> at the party.</div>
<div class="g-bad">I didn't was busy.</div><div class="g-good">I <b>wasn't</b> busy.</div>
<div class="g-bad">Did you be at work?</div><div class="g-good"><b>Were</b> you at work?</div>
<div class="g-bad">I born in 1990.</div><div class="g-good">I <b>was born</b> in 1990.</div>
<div class="g-bad">I was boring at the meeting.</div><div class="g-good">I was <b>bored</b> at the meeting.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I / he / she / it was</b> · <b>you / we / they were</b> · не — <b>wasn't / weren't</b> · вопрос — <b>Was / Were</b> в начало, без did.</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-9');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: одна форма для всех',
      html: `
<div class="g-idea"><b>Past Simple</b> (простое прошедшее) — это обычное русское «сделал, играл, пошёл». Действие было и закончилось. И хорошая новость: форма глагола <b>одна для всех</b> — никаких окончаний по лицам и родам.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я игр<b>ал</b>.</p><p>Она игр<b>ала</b>.</p><p>Мы игр<b>али</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>played</b>.</span></p><p><span class="say">She <b>played</b>.</span></p><p><span class="say">We <b>played</b>.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">глагол в прошедшем</span><span class="g-plus">+</span><span class="g-part">остальное</span></div>
<ul class="g-list">
<li><span class="say">I worked yesterday.</span> — Я работал вчера.</li>
<li><span class="say">He watched the new series.</span> — Он посмотрел новый сериал.</li>
<li><span class="say">We went to the park.</span> — Мы ходили в парк.</li>
</ul>
<div class="g-tip">Помните -s у he / she в настоящем (she plays)? В прошедшем его <b>нет</b>: <b>she played</b>. Прошлое проще настоящего!</div>
<div class="mini" data-q="Вчера она работала." data-o="She workeds yesterday.|She worked yesterday.|She works yesterday." data-a="1" data-why="В прошедшем форма одна для всех: worked. Никакого -s."></div>`
    },
    {
      title: '2. Правильные глаголы: добавляем -ed',
      html: `
<div class="g-idea">У большинства глаголов прошедшее время делается просто: в конец добавляем <b>-ed</b>. Такие глаголы называют <b>правильными</b>.</div>
<ul class="g-list">
<li>work → <span class="say">worked</span> — работал</li>
<li>play → <span class="say">played</span> — играл</li>
<li>watch → <span class="say">watched</span> — смотрел</li>
<li>open → <span class="say">opened</span> — открыл</li>
</ul>
<p>Есть три маленьких правила написания:</p>
<table>
<tr><th>Если слово…</th><th>Делаем</th><th>Пример</th></tr>
<tr><td>кончается на <b>-e</b></td><td>+ <b>d</b></td><td>like → <span class="say">liked</span></td></tr>
<tr><td>согласная + <b>y</b></td><td>y → <b>ied</b></td><td>study → <span class="say">studied</span></td></tr>
<tr><td>гласная + <b>y</b></td><td>просто + <b>ed</b></td><td>play → <span class="say">played</span></td></tr>
<tr><td>короткое, на «согл.-гласн.-согл.»</td><td>удваиваем + <b>ed</b></td><td>stop → <span class="say">stopped</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как проверить себя</div><ol>
<li>На конце <b>e</b>? — Добавьте только <b>d</b>: live → lived, decide → decided.</li>
<li>На конце <b>y</b>? Посмотрите на букву перед ней. Согласная (study, try) → <b>ied</b>. Гласная (play, stay) → <b>ed</b>.</li>
<li>Слово короткое, как stop, plan? — Удвойте последнюю букву: stopped, planned.</li>
<li>Всё остальное — просто <b>-ed</b>.</li>
</ol></div>
<div class="g-bad">I studyed English. / He stoped the game.</div>
<div class="g-good">I studied English. / He stopped the game.</div>
<div class="mini" data-q="try → прошедшее:" data-o="tryed|tried|tryied" data-a="1" data-why="Перед y согласная r → y меняется на ied."></div>
<div class="mini" data-q="stay → прошедшее:" data-o="staied|stayed|stayd" data-a="1" data-why="Перед y гласная a → просто + ed."></div>`
    },
    {
      title: '3. Как читать -ed: [t], [d] или [ɪd]',
      html: `
<div class="g-idea">Пишется всегда <b>-ed</b>, а звучит по-разному. Главное: лишний слог «-ид» появляется <b>только после t и d</b>.</div>
<table>
<tr><th>Звучит</th><th>Когда</th><th>Примеры</th></tr>
<tr><td><b>[t]</b></td><td>после глухих: k, p, s, sh, ch, f</td><td><span class="say">worked</span>, <span class="say">stopped</span>, <span class="say">watched</span></td></tr>
<tr><td><b>[d]</b></td><td>после звонких и гласных</td><td><span class="say">played</span>, <span class="say">lived</span>, <span class="say">opened</span></td></tr>
<tr><td><b>[ɪd]</b></td><td>после <b>t</b> и <b>d</b></td><td><span class="say">wanted</span>, <span class="say">started</span>, <span class="say">needed</span></td></tr>
</table>
<div class="g-bad">worked — «воркид», played — «плэйид»</div>
<div class="g-good">worked — «воркт», played — «плэйд»</div>
<div class="g-tip">Приложите руку к горлу. Если последний звук глагола «не жужжит» (как в work, stop) — -ed звучит как <b>т</b>. Если «жужжит» (как в play, live) — как <b>д</b>. А после t / d без слога «-ид» просто не выговорить: want-<b>id</b>, start-<b>id</b>.</div>
<div class="mini" data-q="В каком слове -ed читается как [ɪd]?" data-o="watched|decided|played" data-a="1" data-why="decide кончается на звук d → появляется слог [ɪd]."></div>`
    },
    {
      title: '4. Неправильные глаголы: учим наизусть',
      html: `
<div class="g-idea">Самые частые глаголы (идти, есть, видеть, покупать…) не берут -ed, а меняются по-своему. Их просто запоминаем. Хорошая новость: их немного, и они всё время на слуху.</div>
<p>Легче учить <b>группами</b> — по тому, как они меняются:</p>
<table>
<tr><th>Как меняется</th><th>Глаголы</th></tr>
<tr><td>совсем новое слово</td><td>go → <span class="say">went</span>, do → <span class="say">did</span>, see → <span class="say">saw</span>, eat → <span class="say">ate</span></td></tr>
<tr><td>меняется гласная</td><td>come → <span class="say">came</span>, give → <span class="say">gave</span>, drink → <span class="say">drank</span>, begin → <span class="say">began</span>, win → <span class="say">won</span></td></tr>
<tr><td>на конце <b>-t</b></td><td>sleep → <span class="say">slept</span>, meet → <span class="say">met</span>, leave → <span class="say">left</span>, lose → <span class="say">lost</span></td></tr>
<tr><td>на конце <b>-ought</b></td><td>buy → <span class="say">bought</span>, think → <span class="say">thought</span></td></tr>
<tr><td>на конце <b>-d</b></td><td>have → <span class="say">had</span>, make → <span class="say">made</span>, say → <span class="say">said</span>, find → <span class="say">found</span>, tell → <span class="say">told</span></td></tr>
<tr><td>другие</td><td>get → <span class="say">got</span>, take → <span class="say">took</span>, know → <span class="say">knew</span>, write → <span class="say">wrote</span></td></tr>
</table>
<div class="g-tip"><b>read → read</b>: пишется одинаково, но в прошедшем читается «ред». <span class="say">Yesterday I read a book.</span></div>
<ul class="g-list">
<li><span class="say">I bought a new game.</span> — Я купил новую игру.</li>
<li><span class="say">She made a new logo.</span> — Она сделала новый логотип.</li>
<li><span class="say">We saw the last episode.</span> — Мы посмотрели последнюю серию.</li>
<li><span class="say">Our team won!</span> — Наша команда победила!</li>
<li><span class="say">I lost my phone.</span> — Я потерял телефон.</li>
</ul>
<div class="g-bad">I goed home. / She buyed a laptop.</div>
<div class="g-good">I went home. / She bought a laptop.</div>
<div class="mini" data-q="We ___ pizza last night. (eat)" data-o="eated|ate|eat" data-a="1" data-why="eat — неправильный глагол: eat → ate."></div>
<div class="mini" data-q="I ___ Anna in the park. (meet)" data-o="meeted|met|meet" data-a="1" data-why="meet → met: группа на -t."></div>`
    },
    {
      title: '5. was или went? Не смешивайте',
      html: `
<div class="g-idea"><b>was / were</b> — это тоже Past Simple, но только от глагола <b>be</b> («быть»). Его ставим, когда говорим <b>какой</b> или <b>где</b>. Когда есть действие — берём сам глагол в прошедшем. Вместе их не ставим.</div>
<table>
<tr><th>Какой? Где?</th><th>Что делал?</th></tr>
<tr><td><span class="say">I was at home.</span></td><td><span class="say">I stayed at home.</span></td></tr>
<tr><td><span class="say">It was fun.</span></td><td><span class="say">We had fun.</span></td></tr>
<tr><td><span class="say">She was in Paris.</span></td><td><span class="say">She went to Paris.</span></td></tr>
</table>
<div class="g-bad">I was go to the cinema. / I was played games.</div>
<div class="g-good">I went to the cinema. / I played games.</div>
<div class="g-tip">Русское «я был в кино» можно сказать двумя способами: <span class="say">I was at the cinema.</span> (где был) или <span class="say">I went to the cinema.</span> (куда ходил). А «был + глагол» — никогда.</div>
<div class="mini" data-q="Вчера я смотрел сериал." data-o="I was watch a series.|I watched a series.|I was watched a series." data-a="1" data-why="Есть действие (смотрел) → только watched, без was."></div>`
    },
    {
      title: '6. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">Yesterday I play games.</div><div class="g-good">Yesterday I <b>played</b> games.</div>
<div class="g-bad">She goed to work.</div><div class="g-good">She <b>went</b> to work.</div>
<div class="g-bad">He studyed design.</div><div class="g-good">He <b>studied</b> design.</div>
<div class="g-bad">We was watched a film.</div><div class="g-good">We <b>watched</b> a film.</div>
<div class="g-bad">worked — «вор-кид»</div><div class="g-good">worked — «воркт»</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Прошедшее — <b>одна форма для всех</b>: правильные + <b>-ed</b> (worked, played), неправильные учим наизусть (<b>went, saw, bought</b>), и никакого was перед глаголом.</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-10');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: помощник did',
      html: `
<div class="g-idea">В настоящем для вопросов и «не» был помощник <b>do / does</b>. В прошлом его заменяет <b>did</b> — одно слово для всех. Он сам показывает прошлое, поэтому основной глагол возвращается в <b>начальную форму</b> (как в словаре).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты ходил в кино?</p><p>Я не ходил.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Did</b> you <b>go</b> to the cinema?</span></p><p><span class="say">I <b>didn't go</b>.</span></p></div>
</div>
<table>
<tr><th>Сейчас</th><th>В прошлом</th></tr>
<tr><td><span class="say">Do you play?</span></td><td><span class="say">Did you play?</span></td></tr>
<tr><td><span class="say">She doesn't work.</span></td><td><span class="say">She didn't work.</span></td></tr>
</table>
<div class="g-tip">Представьте, что <b>did</b> «забирает» прошедшее время себе. Глаголу больше нечего нести — он становится простым: went → <b>go</b>, bought → <b>buy</b>.</div>
<div class="mini" data-q="Прошедшее от «Do you like it?»" data-o="Did you liked it?|Did you like it?|Do you liked it?" data-a="1" data-why="Прошлое показывает did, глагол — в начальной форме: like."></div>`
    },
    {
      title: '2. Отрицание: didn’t + начальная форма',
      html: `
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">didn't</span><span class="g-plus">+</span><span class="g-part">глагол (начальная форма)</span></div>
<table>
<tr><th>Было</th><th>Не было</th></tr>
<tr><td>I went.</td><td><span class="say">I didn't go.</span></td></tr>
<tr><td>She bought it.</td><td><span class="say">She didn't buy it.</span></td></tr>
<tr><td>We watched it.</td><td><span class="say">We didn't watch it.</span></td></tr>
</table>
<p><b>didn't</b> = did not. В разговоре почти всегда говорят коротко.</p>
<ul class="g-list">
<li><span class="say">I didn't see the last episode.</span> — Я не видел последнюю серию.</li>
<li><span class="say">He didn't finish the design.</span> — Он не закончил дизайн.</li>
<li><span class="say">We didn't win.</span> — Мы не выиграли.</li>
</ul>
<div class="g-bad">I didn't went. / I not went.</div>
<div class="g-good">I didn't go.</div>
<div class="g-tip">Правило одной «прошлости»: в предложении прошедшее время показывается <b>один раз</b>. Есть did — значит, дальше глагол простой.</div>
<div class="mini" data-q="She didn't ___ me yesterday." data-o="called|call|calls" data-a="1" data-why="После didn't — начальная форма: call."></div>
<div class="mini" data-q="Мы не купили билеты." data-o="We didn't bought tickets.|We didn't buy tickets.|We not bought tickets." data-a="1" data-why="didn't + buy. Не bought — прошлое уже в didn't."></div>`
    },
    {
      title: '3. Вопрос: Did в начале',
      html: `
<div class="g-formula"><span class="g-part g-v">Did</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол (начальная форма)</span><span class="g-plus">?</span></div>
<table>
<tr><th>Было</th><th>Вопрос</th></tr>
<tr><td>You saw the film.</td><td><span class="say">Did you see the film?</span></td></tr>
<tr><td>He won.</td><td><span class="say">Did he win?</span></td></tr>
<tr><td>They liked it.</td><td><span class="say">Did they like it?</span></td></tr>
</table>
<p>Короткий ответ — повторяем <b>did</b>, а не сам глагол:</p>
<ul class="g-list">
<li><span class="say">Did you have fun? — Yes, I did.</span> — Тебе было весело? — Да.</li>
<li><span class="say">Did she call? — No, she didn't.</span> — Она звонила? — Нет.</li>
</ul>
<div class="g-bad">You saw the film? / Did you saw the film?</div>
<div class="g-good">Did you see the film?</div>
<div class="g-bad">Did you like it? — Yes, I liked.</div>
<div class="g-good">Did you like it? — Yes, I did.</div>
<div class="mini" data-q="Did they win? — No, they ___." data-o="didn't|don't|weren't" data-a="0" data-why="Вопрос с did → и ответ с did: No, they didn't."></div>`
    },
    {
      title: '4. Что? Где? Когда? — вопросительные слова',
      html: `
<div class="g-idea">Схема та же, что в настоящем, только вместо do / does — <b>did</b>. Вопросительное слово — самое первое.</div>
<div class="g-formula"><span class="g-part">Слово-вопрос</span><span class="g-plus">+</span><span class="g-part g-v">did</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-plus">?</span></div>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td><span class="say">What did you do?</span></td><td>Что ты делал?</td></tr>
<tr><td><span class="say">Where did you go?</span></td><td>Куда ты ходил?</td></tr>
<tr><td><span class="say">When did you come back?</span></td><td>Когда ты вернулся?</td></tr>
<tr><td><span class="say">Who did you meet?</span></td><td>Кого ты встретил?</td></tr>
<tr><td><span class="say">Why did you leave?</span></td><td>Почему ты ушёл?</td></tr>
<tr><td><span class="say">How did you get there?</span></td><td>Как ты добрался?</td></tr>
<tr><td><span class="say">How long did you play?</span></td><td>Сколько ты играл?</td></tr>
</table>
<div class="g-tip">В <b>What did you do?</b> два разных «do»: did — помощник, do — глагол «делать». Это нормально, так и говорят.</div>
<div class="g-bad">Where you went? / Where did you went?</div>
<div class="g-good">Where did you go?</div>
<p>Одно исключение: если <b>who</b> или <b>what</b> — это сам «кто сделал», did не нужен.</p>
<ul class="g-list">
<li><span class="say">Who won?</span> — Кто победил? <span class="muted">(ответ: Tom won)</span></li>
<li><span class="say">Who did you meet?</span> — Кого ты встретил? <span class="muted">(ответ: I met Tom)</span></li>
</ul>
<div class="mini" data-q="___ did you go last summer?" data-o="What|Where|Who" data-a="1" data-why="«Куда ты ездил?» — Where."></div>
<div class="mini" data-q="Что ты делал вчера?" data-o="What you did yesterday?|What did you do yesterday?|What did you did yesterday?" data-a="1" data-why="What + did + you + do. Второй глагол — в начальной форме."></div>`
    },
    {
      title: '5. was / were или did?',
      html: `
<div class="g-idea">Как в настоящем: если в предложении есть <b>be</b> (was / were) — помощник не нужен. Did — только для остальных глаголов. Вместе они не встречаются.</div>
<table>
<tr><th>С be (какой? где?)</th><th>С действием</th></tr>
<tr><td><span class="say">Was it fun?</span></td><td><span class="say">Did you have fun?</span></td></tr>
<tr><td><span class="say">I wasn't at home.</span></td><td><span class="say">I didn't stay at home.</span></td></tr>
<tr><td><span class="say">Where were you?</span></td><td><span class="say">Where did you go?</span></td></tr>
<tr><td><span class="say">Was the game hard?</span></td><td><span class="say">Did you like the game?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как выбрать</div><ol>
<li>Найдите в русской фразе глагол.</li>
<li>Это «был / была / было»? → <b>was / were</b>.</li>
<li>Это действие (ходил, смотрел, купил)? → <b>did</b> + начальная форма.</li>
</ol></div>
<div class="g-bad">Did you were at home? / Did it fun?</div>
<div class="g-good">Were you at home? / Was it fun?</div>
<div class="g-bad">I wasn't go to work.</div>
<div class="g-good">I didn't go to work.</div>
<div class="mini" data-q="___ the weather good?" data-o="Did|Was|Were" data-a="1" data-why="«Погода была хорошая?» — это be (какая?), the weather = it → Was."></div>
<div class="mini" data-q="___ you watch the new series?" data-o="Did|Were|Was" data-a="0" data-why="watch — действие → Did."></div>`
    },
    {
      title: '6. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">I didn't saw him.</div><div class="g-good">I didn't <b>see</b> him.</div>
<div class="g-bad">I not went to the party.</div><div class="g-good">I <b>didn't go</b> to the party.</div>
<div class="g-bad">You liked the film?</div><div class="g-good"><b>Did</b> you <b>like</b> the film?</div>
<div class="g-bad">Where you went last summer?</div><div class="g-good">Where <b>did</b> you <b>go</b> last summer?</div>
<div class="g-bad">Did you were busy?</div><div class="g-good"><b>Were</b> you busy?</div>
<div class="g-bad">Did she call? — Yes, she called.</div><div class="g-good">Did she call? — Yes, she <b>did</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Вопрос — <b>Did + кто + глагол?</b>, отрицание — <b>didn't + глагол</b>; глагол после did всегда в начальной форме, а с was / were did не нужен.</div>`
    }
  ];
})();
