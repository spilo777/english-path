// Юниты A2 9–10: used to; be/have/do; неправильные глаголы (три формы) · сравнения: older, more expensive, not as…as, the oldest
COURSE.units.push(
  // ───────────────────────────── UNIT 9 ─────────────────────────────
  {
    id: 'a2-9', level: 'A2', num: 9, track: 'main',
    books: { red: [23, 36] },
    title: 'Used to; be, have, do; неправильные глаголы',
    summary: 'Научимся говорить «раньше я играл, а теперь нет», безошибочно выбирать помощника be, have или do и выучим три формы 66 самых частых неправильных глаголов.',
    grammar: [
      {
        title: '1. Главная идея: used to — «раньше было, а теперь нет»',
        html: `
<div class="g-idea">По-русски мы говорим: «<b>Раньше</b> я играл в «Доту» каждый вечер». Слово «раньше» сразу показывает: сейчас уже не так. По-английски для этого есть готовая конструкция <b>used to</b> + начальная форма глагола. Она одна для всех лиц.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Раньше я играл в «Доту» каждый вечер.</p><p>Раньше она работала в типографии.</p><p>Раньше у нас была PS3.</p><p>Раньше этот сериал был смешным.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>used to play</b> Dota every evening.</span></p><p><span class="say">She <b>used to work</b> in a print shop.</span></p><p><span class="say">We <b>used to have</b> a PS3.</span></p><p><span class="say">This series <b>used to be</b> funny.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">кто (любой)</span><span class="g-plus">+</span><span class="g-part g-v">used to</span><span class="g-plus">+</span><span class="g-part">глагол в начальной форме</span></div>
<p>used to подходит и для <b>повторявшихся действий</b> (play, go, draw), и для <b>состояний</b> (be, have, like, live, know):</p>
<ul class="g-list">
<li><span class="say">I used to draw comics at school.</span> — В школе я рисовал комиксы.</li>
<li><span class="say">Max used to live in Kazan.</span> — Раньше Макс жил в Казани.</li>
<li><span class="say">I used to like horror films, but now they bore me.</span> — Раньше я любил ужастики, а теперь мне с ними скучно.</li>
<li><span class="say">There used to be a café here.</span> — Здесь раньше было кафе.</li>
</ul>
<div class="g-tip">Произносится <b>«юстэ»</b>: s глухая, d не слышно — <span class="say">used to</span>. Мысленно переводите used to словами «раньше… а теперь нет».</div>
<div class="mini" data-q="Раньше я жил в Казани." data-o="I use to live in Kazan.|I used to live in Kazan.|I used to lived in Kazan." data-a="1" data-why="В утверждении — used to (с d), дальше глагол в начальной форме: live."></div>`
      },
      {
        title: '2. Отрицание и вопрос: didn’t use to, Did you use to…?',
        html: `
<div class="g-idea">В отрицании и вопросе used to ведёт себя как обычный глагол в Past Simple: нужен помощник <b>did</b>. А раз did уже показал прошлое, буква <b>d</b> у used пропадает: <b>use to</b>. Точно так же, как мы говорим didn’t <b>go</b>, а не didn’t went.</div>
<table>
<tr><th></th><th>Как строим</th><th>Пример</th></tr>
<tr><td><b>+</b></td><td>used to + глагол</td><td><span class="say">I used to play chess.</span></td></tr>
<tr><td><b>−</b></td><td>didn’t <b class="g-v">use</b> to + глагол</td><td><span class="say">I didn't use to play chess.</span></td></tr>
<tr><td><b>?</b></td><td>Did … <b class="g-v">use</b> to + глагол?</td><td><span class="say">Did you use to play chess?</span></td></tr>
</table>
<p>Короткие ответы — как в Past Simple: <span class="say">Yes, I did.</span> / <span class="say">No, I didn't.</span></p>
<ul class="g-list">
<li><span class="say">I didn't use to like coffee.</span> — Раньше я не любил кофе.</li>
<li><span class="say">Did you use to have long hair?</span> — У тебя раньше были длинные волосы?</li>
<li><span class="say">What games did you use to play?</span> — В какие игры ты раньше играл?</li>
<li><span class="say">Where did you use to work before this studio?</span> — Где ты работал до этой студии?</li>
</ul>
<p>В живой речи вместо didn’t use to часто говорят <b>never used to</b> — «раньше никогда не…»:</p>
<ul class="g-list"><li><span class="say">I never used to watch anime.</span> — Раньше я никогда не смотрел аниме.</li></ul>
<div class="g-bad">I didn't used to like it. · Did you used to live here?</div>
<div class="g-good">I didn't <b>use</b> to like it. · Did you <b>use</b> to live here?</div>
<div class="mini" data-q="___ you use to play football at school?" data-o="Did|Do|Were" data-a="0" data-why="Вопрос с used to строится через did."></div>
<div class="mini" data-q="She didn't ___ to wear glasses." data-o="use|used|using" data-a="0" data-why="После didn't — use без d: прошлое уже показал did."></div>`
      },
      {
        title: '3. used to — только о прошлом',
        html: `
<div class="g-idea">used to существует <b>только в прошлом</b>. Формы «use to» для настоящего нет. Про привычки сейчас говорим Present Simple, часто со словом <b>usually</b> (обычно).</div>
<table>
<tr><th>Раньше</th><th>Сейчас</th></tr>
<tr><td><span class="say">I used to play tennis.</span></td><td><span class="say">These days I play football.</span></td></tr>
<tr><td><span class="say">I used to get up at ten.</span></td><td><span class="say">Now I usually get up at seven.</span></td></tr>
<tr><td><span class="say">She used to work in an office.</span></td><td><span class="say">She works from home now.</span></td></tr>
</table>
<div class="g-bad">I use to drink coffee in the morning.</div>
<div class="g-good">I <b>usually</b> drink coffee in the morning.</div>
<p><b>used to или Past Simple?</b> Past Simple говорит просто «было». used to добавляет смысл «долго, много раз — а теперь нет». Про один случай или конкретный день used to не подходит:</p>
<table>
<tr><th>Ситуация</th><th>Как сказать</th></tr>
<tr><td>один раз, вчера</td><td><span class="say">I watched a horror film last night.</span></td></tr>
<tr><td>часто, давно, теперь нет</td><td><span class="say">I used to watch horror films every weekend.</span></td></tr>
<tr><td>сколько раз — Past Simple</td><td><span class="say">I went to Spain three times.</span></td></tr>
</table>
<div class="g-bad">I used to go to the cinema yesterday.</div>
<div class="g-good">I <b>went</b> to the cinema yesterday.</div>
<div class="g-tip">Не путайте с <b>be used to</b>: <span class="say">I'm used to it.</span> — «Я привык». Это другое выражение, с be. Его разберём позже. Пока запомните: <b>used to + глагол</b> = «раньше».</div>
<div class="mini" data-q="Now I ___ coffee every morning." data-o="used to drink|use to drink|usually drink" data-a="2" data-why="Привычка сейчас — Present Simple (usually drink). used to — только о прошлом."></div>
<div class="mini" data-q="Last night I ___ a horror film." data-o="used to watch|watched|use to watch" data-a="1" data-why="Один раз, вчера вечером — Past Simple: watched."></div>`
      },
      {
        title: '4. be, have, do — три помощника английских времён',
        html: `
<div class="g-idea">Во многих временах работает помощник. Их всего три: <b>be</b>, <b>have</b> и <b>do</b>. У каждого — своя «пара», своя форма глагола. Знаете пару — знаете время.</div>
<table>
<tr><th>Помощник</th><th>Форма глагола</th><th>Пример</th></tr>
<tr><td><b class="g-v">be</b>: am/is/are, was/were</td><td><b>-ing</b></td><td><span class="say">I'm working.</span> <span class="say">We were playing.</span></td></tr>
<tr><td><b class="g-v">have</b>: have/has</td><td><b>3-я форма</b></td><td><span class="say">She has finished.</span> <span class="say">I've seen it.</span></td></tr>
<tr><td><b class="g-v">do</b>: do/does/did</td><td><b>начальная</b></td><td><span class="say">Do you work?</span> <span class="say">I didn't go.</span></td></tr>
</table>
<p>Есть и четвёртая пара: <b>be + 3-я форма</b> — «это делают, это сделали» (страдательный залог). <span class="say">This game was made in Poland.</span> — Эта игра сделана в Польше. Подробно — в отдельном уроке, пока просто узнавайте.</p>
<div class="g-steps"><div class="g-h">Как построить вопрос или отрицание</div><ol>
<li>Посмотрите на утверждение: есть ли там am/is/are, was/were, have/has?</li>
<li>Есть — это и есть помощник. Для вопроса он встаёт вперёд, для отрицания получает not.</li>
<li>Нет — значит, это Present Simple или Past Simple. Зовём do / does / did, а глагол ставим в начальную форму.</li>
</ol></div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th><th>Отрицание</th></tr>
<tr><td>She is streaming.</td><td><span class="say">Is she streaming?</span></td><td><span class="say">She isn't streaming.</span></td></tr>
<tr><td>They were sleeping.</td><td><span class="say">Were they sleeping?</span></td><td><span class="say">They weren't sleeping.</span></td></tr>
<tr><td>You have played it.</td><td><span class="say">Have you played it?</span></td><td><span class="say">You haven't played it.</span></td></tr>
<tr><td>He works from home.</td><td><span class="say">Does he work from home?</span></td><td><span class="say">He doesn't work from home.</span></td></tr>
<tr><td>Our team won.</td><td><span class="say">Did our team win?</span></td><td><span class="say">Our team didn't win.</span></td></tr>
</table>
<div class="mini" data-q="What ___ you doing at ten last night?" data-o="did|were|have" data-a="1" data-why="doing (-ing) — пара be; в прошлом с you → were."></div>
<div class="mini" data-q="___ you finished the design yet?" data-o="Did|Have|Are" data-a="1" data-why="finished + yet — Present Perfect: have + 3-я форма."></div>`
      },
      {
        title: '5. Ловушки: не смешиваем be, have и do',
        html: `
<div class="g-idea">Главная ошибка — взять помощника от одного времени, а глагол — от другого. Проверяйте пару: be → -ing, have → 3-я форма, do → начальная.</div>
<div class="g-bad">Are you like this game?</div><div class="g-good"><b>Do</b> you like this game? <span class="muted">— like обычный глагол, -ing нет → do</span></div>
<div class="g-bad">Do you working today?</div><div class="g-good"><b>Are</b> you working today? <span class="muted">— есть -ing → be</span></div>
<div class="g-bad">Have you finish?</div><div class="g-good">Have you <b>finished</b>? <span class="muted">— после have → 3-я форма</span></div>
<div class="g-bad">Did you finished?</div><div class="g-good">Did you <b>finish</b>? <span class="muted">— после did → начальная форма</span></div>
<p><b>Ловушка для русскоговорящих:</b> «Я согласен» по-английски — это обычный глагол <b>agree</b>, а не «be + прилагательное». Так же <b>I work</b>, а не «I am work».</p>
<div class="g-bad">I am agree. · I'm work in a studio.</div>
<div class="g-good"><span class="say">I agree.</span> · <span class="say">I work in a studio.</span></div>
<p><b>be, have, do бывают и обычными глаголами</b> — «быть», «иметь», «делать». Тогда они живут по обычным правилам:</p>
<ul class="g-list">
<li><span class="say">Were you at home yesterday?</span> — Ты был дома вчера? <span class="muted">(be сам себе помощник)</span></li>
<li><span class="say">Do you have a PS5?</span> — У тебя есть PS5? · <span class="say">I didn't have time.</span> — У меня не было времени.</li>
<li><span class="say">What did you do at the weekend?</span> — Что ты делал на выходных? · <span class="say">I haven't done it yet.</span> — Я это ещё не сделал.</li>
</ul>
<div class="g-tip">В вопросе <span class="say">Have you had lunch?</span> два have: первый — помощник, второй — глагол «иметь / есть (еду)» в 3-й форме. Это нормально, как did … do.</div>
<div class="mini" data-q="Как сказать «Я не согласен»?" data-o="I am not agree.|I don't agree.|I not agree." data-a="1" data-why="agree — обычный глагол, в Present Simple отрицание через don't."></div>`
      },
      {
        title: '6. Три формы глагола. Неправильные, где 2-я = 3-я',
        html: `
<div class="g-idea">У каждого глагола три формы. <b>1-я</b> — начальная (see). <b>2-я</b> — Past Simple (saw). <b>3-я</b> — для have: have <b>seen</b> (и для be: was made). У правильных глаголов 2-я и 3-я одинаковые: <b>-ed</b>. У неправильных их надо учить. Хорошая новость: у большинства частых неправильных 2-я и 3-я <b>тоже совпадают</b>.</div>
<div class="g-formula"><span class="g-part">I <b>bought</b> it yesterday.</span><span class="g-sep">·</span><span class="g-part g-v">I have <b>bought</b> it.</span><span class="g-sep">·</span><span class="g-part">It was <b>bought</b> online.</span></div>
<p><b>Группа 1. Все три формы одинаковые</b></p>
<table>
<tr><th>Все формы</th><th>Перевод</th></tr>
<tr><td><span class="say">cut</span></td><td>резать</td></tr>
<tr><td><span class="say">put</span></td><td>класть, ставить</td></tr>
<tr><td><span class="say">let</span></td><td>позволять</td></tr>
<tr><td><span class="say">hit</span></td><td>ударять</td></tr>
<tr><td><span class="say">cost</span></td><td>стоить</td></tr>
<tr><td><span class="say">shut</span></td><td>закрывать</td></tr>
<tr><td><span class="say">hurt</span></td><td>ранить, болеть</td></tr>
<tr><td><span class="say">read</span></td><td>читать</td></tr>
</table>
<div class="g-tip"><b>read</b> пишется одинаково, но звучит по-разному: сейчас — <b>«рид»</b>, в прошлом — <b>«ред»</b>: <span class="say">I read a book yesterday.</span></div>
<p><b>Группа 2. -ought / -aught — все звучат как «о:т»</b></p>
<table>
<tr><th>1-я</th><th>2-я = 3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">buy</span></td><td><span class="say">bought</span></td><td>покупать</td></tr>
<tr><td><span class="say">bring</span></td><td><span class="say">brought</span></td><td>приносить</td></tr>
<tr><td><span class="say">think</span></td><td><span class="say">thought</span></td><td>думать</td></tr>
<tr><td><span class="say">fight</span></td><td><span class="say">fought</span></td><td>драться, сражаться</td></tr>
<tr><td><span class="say">catch</span></td><td><span class="say">caught</span></td><td>ловить</td></tr>
<tr><td><span class="say">teach</span></td><td><span class="say">taught</span></td><td>учить (кого-то)</td></tr>
</table>
<p><b>Группа 3. На -t</b></p>
<table>
<tr><th>1-я</th><th>2-я = 3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">sleep</span></td><td><span class="say">slept</span></td><td>спать</td></tr>
<tr><td><span class="say">keep</span></td><td><span class="say">kept</span></td><td>хранить, держать</td></tr>
<tr><td><span class="say">feel</span></td><td><span class="say">felt</span></td><td>чувствовать</td></tr>
<tr><td><span class="say">leave</span></td><td><span class="say">left</span></td><td>уходить, оставлять</td></tr>
<tr><td><span class="say">meet</span></td><td><span class="say">met</span></td><td>встречать</td></tr>
<tr><td><span class="say">send</span></td><td><span class="say">sent</span></td><td>отправлять</td></tr>
<tr><td><span class="say">spend</span></td><td><span class="say">spent</span></td><td>тратить, проводить</td></tr>
<tr><td><span class="say">lose</span></td><td><span class="say">lost</span></td><td>терять, проигрывать</td></tr>
<tr><td><span class="say">build</span></td><td><span class="say">built</span></td><td>строить</td></tr>
</table>
<p><b>Группа 4. На -d</b></p>
<table>
<tr><th>1-я</th><th>2-я = 3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">have</span></td><td><span class="say">had</span></td><td>иметь</td></tr>
<tr><td><span class="say">make</span></td><td><span class="say">made</span></td><td>делать, создавать</td></tr>
<tr><td><span class="say">say</span></td><td><span class="say">said</span></td><td>сказать</td></tr>
<tr><td><span class="say">pay</span></td><td><span class="say">paid</span></td><td>платить</td></tr>
<tr><td><span class="say">hear</span></td><td><span class="say">heard</span></td><td>слышать</td></tr>
<tr><td><span class="say">sell</span></td><td><span class="say">sold</span></td><td>продавать</td></tr>
<tr><td><span class="say">tell</span></td><td><span class="say">told</span></td><td>рассказывать</td></tr>
<tr><td><span class="say">find</span></td><td><span class="say">found</span></td><td>находить</td></tr>
<tr><td><span class="say">understand</span></td><td><span class="say">understood</span></td><td>понимать</td></tr>
</table>
<p><b>Группа 5. Короткие: меняется одна гласная</b></p>
<table>
<tr><th>1-я</th><th>2-я = 3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">get</span></td><td><span class="say">got</span></td><td>получать, становиться</td></tr>
<tr><td><span class="say">sit</span></td><td><span class="say">sat</span></td><td>сидеть</td></tr>
<tr><td><span class="say">win</span></td><td><span class="say">won</span></td><td>побеждать</td></tr>
</table>
<div class="g-tip">said и paid читаются <b>«сэд»</b> и <b>«пэйд»</b>, а heard — <b>«хёрд»</b>, не «хирд».</div>
<div class="mini" data-q="She has ___ me about the new project." data-o="told|telled|tell" data-a="0" data-why="tell — told — told: 2-я и 3-я одинаковые, -ed не добавляем."></div>
<div class="mini" data-q="I have ___ a new keyboard." data-o="buyed|bought|buy" data-a="1" data-why="have + 3-я форма; buy — bought — bought."></div>`
      },
      {
        title: '7. Неправильные, где все три формы разные',
        html: `
<div class="g-idea">Здесь 3-я форма отличается от 2-й. Подсказка: 3-я форма часто получает <b>-n / -en</b>. Учите глаголы группами — они похожи между собой.</div>
<p><b>Группа 6. 2-я на «о», 3-я + -en</b></p>
<table>
<tr><th>1-я</th><th>2-я</th><th>3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">speak</span></td><td><span class="say">spoke</span></td><td><span class="say">spoken</span></td><td>говорить</td></tr>
<tr><td><span class="say">break</span></td><td><span class="say">broke</span></td><td><span class="say">broken</span></td><td>ломать</td></tr>
<tr><td><span class="say">choose</span></td><td><span class="say">chose</span></td><td><span class="say">chosen</span></td><td>выбирать</td></tr>
<tr><td><span class="say">steal</span></td><td><span class="say">stole</span></td><td><span class="say">stolen</span></td><td>красть</td></tr>
<tr><td><span class="say">forget</span></td><td><span class="say">forgot</span></td><td><span class="say">forgotten</span></td><td>забывать</td></tr>
<tr><td><span class="say">wake</span></td><td><span class="say">woke</span></td><td><span class="say">woken</span></td><td>будить, просыпаться</td></tr>
<tr><td><span class="say">drive</span></td><td><span class="say">drove</span></td><td><span class="say">driven</span></td><td>водить машину</td></tr>
<tr><td><span class="say">ride</span></td><td><span class="say">rode</span></td><td><span class="say">ridden</span></td><td>ездить верхом, на велосипеде</td></tr>
<tr><td><span class="say">write</span></td><td><span class="say">wrote</span></td><td><span class="say">written</span></td><td>писать</td></tr>
</table>
<p><b>Группа 7. -ew → -own</b></p>
<table>
<tr><th>1-я</th><th>2-я</th><th>3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">know</span></td><td><span class="say">knew</span></td><td><span class="say">known</span></td><td>знать</td></tr>
<tr><td><span class="say">grow</span></td><td><span class="say">grew</span></td><td><span class="say">grown</span></td><td>расти</td></tr>
<tr><td><span class="say">throw</span></td><td><span class="say">threw</span></td><td><span class="say">thrown</span></td><td>бросать</td></tr>
<tr><td><span class="say">fly</span></td><td><span class="say">flew</span></td><td><span class="say">flown</span></td><td>летать</td></tr>
<tr><td><span class="say">draw</span></td><td><span class="say">drew</span></td><td><span class="say">drawn</span></td><td>рисовать</td></tr>
<tr><td><span class="say">show</span></td><td><span class="say">showed</span></td><td><span class="say">shown</span></td><td>показывать</td></tr>
<tr><td><span class="say">wear</span></td><td><span class="say">wore</span></td><td><span class="say">worn</span></td><td>носить (одежду)</td></tr>
</table>
<p><b>Группа 8. 3-я = 1-я + -n / -en</b></p>
<table>
<tr><th>1-я</th><th>2-я</th><th>3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">take</span></td><td><span class="say">took</span></td><td><span class="say">taken</span></td><td>брать</td></tr>
<tr><td><span class="say">give</span></td><td><span class="say">gave</span></td><td><span class="say">given</span></td><td>давать</td></tr>
<tr><td><span class="say">see</span></td><td><span class="say">saw</span></td><td><span class="say">seen</span></td><td>видеть</td></tr>
<tr><td><span class="say">eat</span></td><td><span class="say">ate</span></td><td><span class="say">eaten</span></td><td>есть</td></tr>
<tr><td><span class="say">fall</span></td><td><span class="say">fell</span></td><td><span class="say">fallen</span></td><td>падать</td></tr>
</table>
<p><b>Группа 9. i – a – u (и родственники)</b></p>
<table>
<tr><th>1-я</th><th>2-я</th><th>3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">begin</span></td><td><span class="say">began</span></td><td><span class="say">begun</span></td><td>начинать</td></tr>
<tr><td><span class="say">drink</span></td><td><span class="say">drank</span></td><td><span class="say">drunk</span></td><td>пить</td></tr>
<tr><td><span class="say">swim</span></td><td><span class="say">swam</span></td><td><span class="say">swum</span></td><td>плавать</td></tr>
<tr><td><span class="say">sing</span></td><td><span class="say">sang</span></td><td><span class="say">sung</span></td><td>петь</td></tr>
<tr><td><span class="say">run</span></td><td><span class="say">ran</span></td><td><span class="say">run</span></td><td>бегать</td></tr>
<tr><td><span class="say">come</span></td><td><span class="say">came</span></td><td><span class="say">come</span></td><td>приходить</td></tr>
<tr><td><span class="say">become</span></td><td><span class="say">became</span></td><td><span class="say">become</span></td><td>становиться</td></tr>
</table>
<div class="g-tip">run, come, become — хитрецы: 3-я форма <b>совпадает с 1-й</b>. <span class="say">She has become a streamer.</span> — Она стала стримером.</div>
<p><b>Группа 10. Особые — самые частые, учим первыми</b></p>
<table>
<tr><th>1-я</th><th>2-я</th><th>3-я</th><th>Перевод</th></tr>
<tr><td><span class="say">be</span></td><td><span class="say">was / were</span></td><td><span class="say">been</span></td><td>быть</td></tr>
<tr><td><span class="say">go</span></td><td><span class="say">went</span></td><td><span class="say">gone</span></td><td>идти, ехать</td></tr>
<tr><td><span class="say">do</span></td><td><span class="say">did</span></td><td><span class="say">done</span></td><td>делать</td></tr>
</table>
<div class="g-bad">I have wrote the text. · I seen this film.</div>
<div class="g-good">I have <b>written</b> the text. · I <b>saw</b> this film. / I <b>have seen</b> this film.</div>
<div class="g-tip">3-я форма никогда не стоит одна: перед ней всегда have/has (или be). Одна — только 2-я: <b>I saw</b>, но <b>I have seen</b>.</div>
<div class="mini" data-q="Have you ever ___ a horse?" data-o="rode|ridden|ride" data-a="1" data-why="have + 3-я форма: ride — rode — ridden."></div>
<div class="mini" data-q="Someone has ___ my password!" data-o="stole|stolen|steal" data-a="1" data-why="has + 3-я форма: steal — stole — stolen."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I use to play Dota.</div><div class="g-good">I <b>used</b> to play Dota.</div>
<div class="g-bad">Did you used to live here?</div><div class="g-good">Did you <b>use</b> to live here?</div>
<div class="g-bad">I use to get up at seven every day.</div><div class="g-good">I <b>usually</b> get up at seven every day.</div>
<div class="g-bad">I used to go to the gym yesterday.</div><div class="g-good">I <b>went</b> to the gym yesterday.</div>
<div class="g-bad">I am agree.</div><div class="g-good">I <b>agree</b>.</div>
<div class="g-bad">Are you like sushi?</div><div class="g-good"><b>Do</b> you like sushi?</div>
<div class="g-bad">Have you finish the level?</div><div class="g-good">Have you <b>finished</b> the level?</div>
<div class="g-bad">I have saw this series.</div><div class="g-good">I have <b>seen</b> this series.</div>
<div class="g-bad">He buyed a new PC.</div><div class="g-good">He <b>bought</b> a new PC.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>used to + глагол</b> = «раньше, а теперь нет» (didn’t <b>use</b> to, Did you <b>use</b> to?) · <b>be + -ing</b>, <b>have + 3-я форма</b>, <b>do + начальная</b> · неправильные глаголы учим группами.</div>`
      }
    ],
    words: [
      ["used to", "раньше (делал), бывало", "I used to play games all night.", "Раньше я играл ночи напролёт."],
      ["any more", "больше не (в отрицании)", "I don't play Dota any more.", "Я больше не играю в «Доту»."],
      ["these days", "в наши дни, теперь", "These days I work from home.", "Теперь я работаю из дома."],
      ["childhood", "детство", "I had a Game Boy in my childhood.", "В детстве у меня был Game Boy."],
      ["habit", "привычка", "I used to have a bad habit: I slept till noon.", "У меня была плохая привычка: я спал до полудня."],
      ["change", "менять(ся); перемена", "My life has changed a lot.", "Моя жизнь сильно изменилась."],
      ["still", "всё ещё", "I still remember my first game.", "Я всё ещё помню свою первую игру."],
      ["agree", "соглашаться, быть согласным", "I don't agree with you.", "Я с тобой не согласен."],
      ["break — broke — broken", "ломать", "My brother broke the controller.", "Брат сломал геймпад."],
      ["choose — chose — chosen", "выбирать", "Have you chosen a character?", "Ты выбрал персонажа?"],
      ["forget — forgot — forgotten", "забывать", "I've forgotten my password.", "Я забыл свой пароль."],
      ["fall — fell — fallen", "падать", "I fell off my bike yesterday.", "Я вчера упал с велосипеда."],
      ["steal — stole — stolen", "красть", "Someone has stolen my account!", "Кто-то украл мой аккаунт!"],
      ["catch — caught — caught", "ловить, поймать; успеть (на транспорт)", "We caught the last train.", "Мы успели на последний поезд."],
      ["teach — taught — taught", "учить, преподавать", "My dad taught me to play chess.", "Папа научил меня играть в шахматы."],
      ["fight — fought — fought", "драться, сражаться", "We fought the final boss for an hour.", "Мы сражались с финальным боссом час."],
      ["bring — brought — brought", "приносить, привозить", "Have you brought the charger?", "Ты принёс зарядку?"],
      ["keep — kept — kept", "хранить, держать, продолжать", "I have kept all my old consoles.", "Я сохранил все свои старые приставки."],
      ["feel — felt — felt", "чувствовать (себя)", "I felt tired after work.", "После работы я чувствовал себя уставшим."],
      ["spend — spent — spent", "тратить; проводить (время)", "I've spent too much money on skins.", "Я потратил слишком много денег на скины."],
      ["build — built — built", "строить", "We built a huge castle in Minecraft.", "Мы построили огромный замок в «Майнкрафте»."],
      ["sell — sold — sold", "продавать", "She sold her old laptop.", "Она продала свой старый ноутбук."],
      ["hear — heard — heard", "слышать", "Have you heard the news?", "Ты слышал новости?"],
      ["pay — paid — paid", "платить", "I paid ten dollars for this game.", "Я заплатил за эту игру десять долларов."],
      ["understand — understood — understood", "понимать", "I didn't understand the ending.", "Я не понял концовку."],
      ["drive — drove — driven", "водить (машину), ехать", "Have you ever driven a car?", "Ты когда-нибудь водил машину?"],
      ["speak — spoke — spoken", "говорить (на языке), разговаривать", "I've never spoken English with a native speaker.", "Я никогда не говорил по-английски с носителем."],
      ["throw — threw — thrown", "бросать", "He threw the phone on the bed.", "Он бросил телефон на кровать."],
      ["wear — wore — worn", "носить (одежду, очки)", "I used to wear glasses.", "Раньше я носил очки."],
      ["cost — cost — cost", "стоить", "My first PC cost a lot.", "Мой первый компьютер стоил очень дорого."],
      ["hurt — hurt — hurt", "ранить, болеть", "I've hurt my hand.", "Я повредил руку."]
    ],
    texts: [
      {
        id: 't-a2-9-1', title: 'Then and now', level: 'A2',
        text: `Five years ago my life was very different. I used to work in a small print shop in Kazan. I didn't use to design apps or websites — I made posters and business cards. The pay wasn't great, and I used to spend two hours a day on the bus.
In the evenings I used to play games until three in the morning. My favourite game was World of Warcraft. My friends and I used to raid every Friday, and we never missed a night. I didn't use to cook — I ate pizza almost every day!
Then everything changed. A friend showed me Figma, and I fell in love with UI design. I took an online course, built a portfolio and sent it to twenty studios. Only one studio answered, but that was enough.
Now I work for a game studio in Moscow. I have designed menus for three games, and I have met a lot of cool people. I usually get up at eight, and I don't play games at night any more. I still love WoW, but I haven't played it for a year.
Do I miss my old life? Sometimes. But I'm happier now, and I have finally learned to cook pasta.`,
        questions: [
          { q: 'Where did the writer use to work?', o: ['In a print shop', 'In a game studio', 'In a café'], a: 0 },
          { q: 'What did he use to do on Fridays?', o: ['He used to cook', 'He used to raid in WoW with friends', 'He used to go to the cinema'], a: 1 },
          { q: 'How many studios answered him?', o: ['Twenty', 'Three', 'One'], a: 2 }
        ]
      },
      {
        id: 't-a2-9-2', title: 'An old console', level: 'A2',
        text: `Max: Look what I found at my parents' flat — my old PlayStation 2!
Kate: No way! Does it still work?
Max: I don't know. I haven't tried it yet. When I was a kid, I used to play it every day after school.
Kate: What games did you use to play?
Max: Mostly racing games. And Tekken — my brother and I used to fight for hours. He always won.
Kate: Did you use to argue a lot?
Max: All the time! Once he threw a controller at the TV and broke the screen. Our dad was so angry.
Kate: Ha! I didn't use to have a console. My parents thought games were bad for kids.
Max: So what did you do?
Kate: I used to go to my friend's house. She had a Game Boy, and we used to share it. I've forgotten most of the games, but I still remember Pokémon.
Max: Have you ever played Tekken?
Kate: Never.
Max: Then come over on Saturday. I'll bring some old games, and we'll see if this thing still works.
Kate: Deal. But I'm warning you: I learn fast!`,
        questions: [
          { q: 'Who used to win at Tekken?', o: ['Max', 'Max\'s brother', 'Kate'], a: 1 },
          { q: 'Why didn\'t Kate have a console?', o: ['It was too expensive', 'Her parents thought games were bad for kids', 'She didn\'t like games'], a: 1 },
          { q: 'What did Kate\'s friend have?', o: ['A PlayStation', 'A Game Boy', 'A PC'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'When I was a kid, I ___ cartoons every morning.', o: ['use to watch', 'used to watch', 'used to watched'], a: 1, why: 'В утверждении — used to (с d) + глагол в начальной форме.' },
      { t: 'choice', q: '___ you use to play football at school?', o: ['Were', 'Do', 'Did'], a: 2, why: 'Вопрос с used to строится через did — это прошлое.' },
      { t: 'choice', q: 'I ___ to like coffee, but now I love it.', o: ['didn\'t use', 'didn\'t used', 'don\'t use'], a: 0, why: 'После didn\'t — use без d: прошлое уже показал did.' },
      { t: 'choice', q: 'These days I ___ work from home.', o: ['use to', 'usually', 'used to'], a: 1, why: 'Привычка сейчас — Present Simple с usually; «use to» для настоящего не бывает.' },
      { t: 'choice', q: '___ you finished the design yet?', o: ['Did', 'Have', 'Are'], a: 1, why: 'finished — 3-я форма, её пара — have (Present Perfect).' },
      { t: 'choice', q: '___ your brother like horror films?', o: ['Is', 'Does', 'Has'], a: 1, why: 'like — обычный глагол в Present Simple, he → does.' },
      { t: 'choice', q: 'What ___ you doing at ten last night?', o: ['did', 'were', 'have'], a: 1, why: 'doing (-ing) — пара be; прошлое, you → were.' },
      { t: 'choice', q: 'I have ___ this film three times.', o: ['saw', 'seen', 'see'], a: 1, why: 'После have — 3-я форма: see — saw — seen.' },
      { t: 'gap', q: 'My sister ___ to have a cat, but now she has a dog. (use)', a: ['used'], why: 'Утверждение о прошлом, которого больше нет → used to.' },
      { t: 'gap', q: 'Somebody has ___ my bike! (steal)', a: ['stolen'], why: 'has + 3-я форма: steal — stole — stolen.' },
      { t: 'gap', q: 'I ___ my headphones at home yesterday. (leave)', a: ['left'], why: 'yesterday — Past Simple, 2-я форма: leave — left.' },
      { t: 'gap', q: 'We have ___ a lot of money on games this year. (spend)', a: ['spent'], why: 'have + 3-я форма: spend — spent — spent.' },
      { t: 'gap', q: 'I ___ agree with you. (не)', a: ['don\'t', 'do not'], why: 'agree — обычный глагол, поэтому отрицание don\'t, а не am not.' },
      { t: 'gap', q: 'Have you ever ___ a car? (drive)', a: ['driven'], why: 'have + 3-я форма: drive — drove — driven.' },
      { t: 'order', a: 'I used to live near the sea', ru: 'Раньше я жил у моря' },
      { t: 'order', a: 'Did you use to play the guitar', ru: 'Ты раньше играл на гитаре?' },
      { t: 'order', a: 'She has forgotten her password', ru: 'Она забыла свой пароль' },
      { t: 'tr', q: 'Раньше я не любил сериалы.', a: ['i didn\'t use to like series', 'i did not use to like series', 'i didn\'t use to like tv series', 'i did not use to like tv series', 'i never used to like series', 'i never used to like tv series', 'i didn\'t use to like tv shows', 'i did not use to like tv shows', 'i never used to like tv shows'] },
      { t: 'tr', q: 'Раньше у нас была собака.', a: ['we used to have a dog', 'we had a dog before'] },
      { t: 'listen', say: 'I used to play this game every day', a: ['i used to play this game every day'] }
    ],
    test: [
      { t: 'choice', q: 'Раньше Макс был худым.', o: ['Max use to be thin.', 'Max used to be thin.', 'Max was used to thin.'], a: 1, why: 'Состояние в прошлом, которого нет сейчас → used to + be.' },
      { t: 'choice', q: 'Where did you ___ before you moved here?', o: ['use to live', 'used to live', 'used to lived'], a: 0, why: 'После did — use to (без d) + начальная форма.' },
      { t: 'choice', q: 'I ___ to the cinema last Saturday.', o: ['used to go', 'went', 'use to go'], a: 1, why: 'Один конкретный раз в прошлом → Past Simple, а не used to.' },
      { t: 'choice', q: 'Now I ___ go to bed after midnight.', o: ['used to', 'use to', 'usually'], a: 2, why: 'Привычка в настоящем → Present Simple (usually); used to — только о прошлом.' },
      { t: 'choice', q: 'I ___ with you. It\'s a great idea!', o: ['am agree', 'agree', 'is agree'], a: 1, why: 'agree — обычный глагол, be перед ним не нужен.' },
      { t: 'choice', q: '___ you ever broken a bone?', o: ['Did', 'Have', 'Were'], a: 1, why: 'broken — 3-я форма, её помощник — have.' },
      { t: 'choice', q: 'The film ___ start at eight. It started at nine.', o: ['didn\'t', 'wasn\'t', 'hasn\'t'], a: 0, why: 'start — обычный глагол в Past Simple → отрицание didn\'t + начальная форма.' },
      { t: 'gap', q: 'I\'ve ___ the new Zelda. It\'s great! (buy)', a: ['bought'], why: 'have + 3-я форма: buy — bought — bought.' },
      { t: 'gap', q: 'She ___ off her bike yesterday. (fall)', a: ['fell'], why: 'yesterday — Past Simple, 2-я форма: fall — fell — fallen.' },
      { t: 'gap', q: 'Have you ___ your homework? (do)', a: ['done'], why: 'have + 3-я форма: do — did — done.' },
      { t: 'gap', q: 'We ___ use to have a car. (не)', a: ['didn\'t', 'did not'], why: 'Отрицание used to → didn\'t use to.' },
      { t: 'gap', q: 'Are you ___ to music right now? (listen)', a: ['listening'], why: 'Помощник be (are) требует форму -ing.' }
    ]
  },

  // ───────────────────────────── UNIT 10 ─────────────────────────────
  {
    id: 'a2-10', level: 'A2', num: 10, track: 'main',
    books: { red: [87, 88, 89, 90] },
    title: 'Older, the oldest — сравнения',
    summary: 'Научимся сравнивать: «быстрее», «намного дороже, чем», «не такой сложный, как», «самая лучшая игра, в которую я играл».',
    grammar: [
      {
        title: '1. Главная идея: сравнить — значит добавить -er или more',
        html: `
<div class="g-idea">В русском два способа сравнить: «быстр<b>ее</b>» и «<b>более</b> удобный». В английском так же: <b>короткие</b> слова получают окончание <b>-er</b>, перед <b>длинными</b> ставим <b>more</b>. А «чем» — это <b>than</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Этот ноутбук быстрее.</p><p>Эта клавиатура дороже.</p><p>Новая часть интереснее, чем старая.</p><p>Это самая лучшая игра года.</p></div>
  <div><div class="g-h">English</div><p><span class="say">This laptop is <b>faster</b>.</span></p><p><span class="say">This keyboard is <b>more expensive</b>.</span></p><p><span class="say">The new part is <b>more interesting than</b> the old one.</span></p><p><span class="say">It's <b>the best</b> game of the year.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">короткое слово + <b class="g-v">-er</b></span><span class="g-sep">·</span><span class="g-part"><b class="g-v">more</b> + длинное слово</span><span class="g-plus">+</span><span class="g-part">than…</span></div>
<div class="g-tip">Никогда не используйте оба способа сразу. В русском «более быстрее» — ошибка, в английском <b>more faster</b> — тоже.</div>
<div class="mini" data-q="Как сказать «Сегодня холоднее»?" data-o="Today is more cold.|It's colder today.|It's more colder today." data-a="1" data-why="cold — короткое слово → colder; погода — через it."></div>`
      },
      {
        title: '2. -er или more: как выбрать',
        html: `
<div class="g-idea">Считайте слоги (гласные звуки). <b>Один слог</b> → -er. <b>Два слога на -y</b> → -ier. Все остальные <b>длинные</b> → more.</div>
<table>
<tr><th>Какое слово</th><th>Что делаем</th><th>Пример</th></tr>
<tr><td>1 слог: old, cheap, fast, tall</td><td>+ <b>-er</b></td><td><span class="say">older</span>, <span class="say">cheaper</span></td></tr>
<tr><td>кончается на -e: nice, late, large</td><td>+ <b>-r</b></td><td><span class="say">nicer</span>, <span class="say">later</span></td></tr>
<tr><td>согласная-гласная-согласная: big, hot, thin</td><td>удваиваем согласную</td><td><span class="say">bigger</span>, <span class="say">hotter</span></td></tr>
<tr><td>на -y: easy, busy, funny, early, heavy</td><td>y → <b>-ier</b></td><td><span class="say">easier</span>, <span class="say">busier</span></td></tr>
<tr><td>2 слога и больше: modern, boring, famous, expensive</td><td><b>more</b> + слово</td><td><span class="say">more modern</span>, <span class="say">more famous</span></td></tr>
</table>
<p><b>Особые слова</b> — их надо просто запомнить:</p>
<table>
<tr><th>Слово</th><th>Сравнение</th></tr>
<tr><td>good / well — хороший / хорошо</td><td><span class="say">better</span> — лучше</td></tr>
<tr><td>bad / badly — плохой / плохо</td><td><span class="say">worse</span> — хуже</td></tr>
<tr><td>far — далеко</td><td><span class="say">further</span> (или farther) — дальше</td></tr>
</table>
<p><b>Наречия</b> (как делаем) сравниваются так же. Короткие (hard, fast, early) получают -er, наречия на -ly и often — more. Исключение: <b>early → earlier</b> (это не «наречие на -ly», -ly здесь часть слова):</p>
<ul class="g-list">
<li><span class="say">Kate works harder than me.</span> — Кейт работает усерднее меня.</li>
<li><span class="say">Can you come earlier?</span> — Можешь прийти пораньше?</li>
<li><span class="say">Please speak more slowly.</span> — Говорите, пожалуйста, медленнее.</li>
<li><span class="say">I want to play more often.</span> — Я хочу играть чаще.</li>
</ul>
<div class="g-tip">Несколько частых двусложных слов тоже обычно берут -er: <b>quiet → quieter</b>, <b>simple → simpler</b>, <b>clever → cleverer</b>, <b>narrow → narrower</b>.</div>
<div class="g-bad">more cheap · more easy · gooder</div>
<div class="g-good"><b>cheaper</b> · <b>easier</b> · <b>better</b></div>
<div class="mini" data-q="busy → ?" data-o="busier|more busy|busyer" data-a="0" data-why="Два слога на -y → y меняем на i и добавляем -er."></div>
<div class="mini" data-q="comfortable → ?" data-o="comfortabler|more comfortable|comfortablier" data-a="1" data-why="Длинное слово (4 слога) → more comfortable."></div>`
      },
      {
        title: '3. than — «чем»; much bigger, a bit older',
        html: `
<div class="g-idea">С чем сравниваем — ставим после слова <b>than</b> («чем»). Если нужно «намного» или «чуть-чуть» — перед сравнением ставим <b>much / a lot</b> или <b>a bit</b>.</div>
<div class="g-formula"><span class="g-part">X is</span><span class="g-plus">+</span><span class="g-part g-v">faster / more expensive</span><span class="g-plus">+</span><span class="g-part">than Y</span></div>
<ul class="g-list">
<li><span class="say">My PC is faster than yours.</span> — Мой компьютер быстрее твоего.</li>
<li><span class="say">The café is more crowded than usual.</span> — В кафе больше народу, чем обычно.</li>
<li><span class="say">I feel better than yesterday.</span> — Я чувствую себя лучше, чем вчера.</li>
<li><span class="say">It's cheaper to buy games on sale.</span> — Дешевле покупать игры на распродаже.</li>
<li><span class="say">Is it faster to go by metro or by taxi?</span> — Быстрее на метро или на такси?</li>
</ul>
<p><b>than me или than I am?</b> В разговоре после than обычно <b>me, him, her, us, them</b>. Можно и полностью — с глаголом:</p>
<table>
<tr><th>Коротко (разговор)</th><th>Полностью</th></tr>
<tr><td><span class="say">She's taller than me.</span></td><td><span class="say">She's taller than I am.</span></td></tr>
<tr><td><span class="say">He plays better than her.</span></td><td><span class="say">He plays better than she does.</span></td></tr>
<tr><td><span class="say">You got up earlier than us.</span></td><td><span class="say">You got up earlier than we did.</span></td></tr>
</table>
<p><b>more than / less than</b> — «больше / меньше, чем», в том числе с числами:</p>
<ul class="g-list">
<li><span class="say">The game costs more than seventy dollars.</span> — Игра стоит больше семидесяти долларов.</li>
<li><span class="say">The episode was less than twenty minutes.</span> — Серия шла меньше двадцати минут.</li>
<li><span class="say">You play more than me.</span> — Ты играешь больше меня.</li>
</ul>
<table>
<tr><th>Насколько</th><th>Пример</th></tr>
<tr><td><b>much / a lot</b> — намного</td><td><span class="say">Moscow is much bigger than Kazan.</span></td></tr>
<tr><td><b>a bit / a little</b> — немного</td><td><span class="say">Max is a bit older than Kate.</span></td></tr>
</table>
<div class="g-bad">This game is very better. · My laptop is lighter then yours.</div>
<div class="g-good">This game is <b>much</b> better. · My laptop is lighter <b>than</b> yours.</div>
<div class="g-tip"><b>than</b> [зэн] — «чем», <b>then</b> [зэн] — «потом». Звучат почти одинаково, пишутся по-разному. Сравнение — всегда th<b>a</b>n.</div>
<div class="mini" data-q="Kate draws better ___ me." data-o="than|then|as" data-a="0" data-why="После сравнения (better) «чем» — than."></div>
<div class="mini" data-q="The new game is ___ better." data-o="very|much|more" data-a="1" data-why="«Намного лучше» — much better; very со сравнением не ставят."></div>`
      },
      {
        title: '4. not as … as — «не такой… как»; the same as',
        html: `
<div class="g-idea">Часто вежливее сказать «не такой быстрый, как», чем «медленнее». Для этого — <b>not as + обычное слово + as</b>. Без -er и без more!</div>
<div class="g-formula"><span class="g-part">not as</span><span class="g-plus">+</span><span class="g-part g-v">big / expensive</span><span class="g-plus">+</span><span class="g-part">as</span></div>
<table>
<tr><th>not as … as</th><th>То же самое через than</th></tr>
<tr><td><span class="say">Kazan isn't as big as Moscow.</span></td><td><span class="say">Moscow is bigger than Kazan.</span></td></tr>
<tr><td><span class="say">The sequel isn't as good as the first game.</span></td><td><span class="say">The first game is better.</span></td></tr>
<tr><td><span class="say">I don't play as often as you.</span></td><td><span class="say">You play more often than me.</span></td></tr>
</table>
<p><b>as … as</b> без not — «такой же… как»: <span class="say">Your drawing is as good as mine.</span> — Твой рисунок такой же хороший, как мой.</p>
<p>Про количество — <b>as much as</b> (неисчисляемое) и <b>as many as</b> (штуки):</p>
<ul class="g-list">
<li><span class="say">I don't have as much free time as you.</span> — У меня не так много свободного времени, как у тебя.</li>
<li><span class="say">I don't know as many people as Max.</span> — Я знаю не так много людей, как Макс.</li>
<li><span class="say">I don't go out as much as you.</span> — Я выхожу из дома не так часто, как ты.</li>
</ul>
<p>После as — тоже <b>me / him / her</b> или с глаголом: <span class="say">She isn't as old as me.</span> = <span class="say">She isn't as old as I am.</span></p>
<p><b>the same as</b> — «такой же, как», «то же, что»: </p>
<ul class="g-list">
<li><span class="say">The weather today is the same as yesterday.</span> — Погода сегодня такая же, как вчера.</li>
<li><span class="say">My chair is the same colour as yours.</span> — Мой стул того же цвета, что и твой.</li>
<li><span class="say">I finished at the same time as Kate.</span> — Я закончил одновременно с Кейт.</li>
</ul>
<div class="g-bad">not as fast than · older as Moscow · the same like yours</div>
<div class="g-good">not as fast <b>as</b> · older <b>than</b> Moscow · the same <b>as</b> yours</div>
<div class="g-tip">Запомните пары: <b>-er / more … than</b> и <b>as … as</b>. Не смешивайте их: сравнение с -er всегда дружит с than, а as — с as.</div>
<div class="mini" data-q="My laptop isn't as ___ as yours." data-o="fast|faster|fastest" data-a="0" data-why="Между as … as — обычная форма слова, без -er."></div>
<div class="mini" data-q="My phone is the same ___ yours." data-o="like|as|than" data-a="1" data-why="«Такой же, как» — the same as."></div>`
      },
      {
        title: '5. the oldest, the most expensive — «самый»',
        html: `
<div class="g-idea">Когда что-то лучше (больше, дороже) <b>всех</b> остальных — это «самый». Короткие слова: <b>the + -est</b>. Длинные: <b>the most</b> + слово. Слово <b>the</b> обязательно.</div>
<table>
<tr><th>Слово</th><th>Сравнение</th><th>«Самый»</th></tr>
<tr><td>old</td><td>older</td><td><span class="say">the oldest</span></td></tr>
<tr><td>nice</td><td>nicer</td><td><span class="say">the nicest</span></td></tr>
<tr><td>big</td><td>bigger</td><td><span class="say">the biggest</span></td></tr>
<tr><td>easy</td><td>easier</td><td><span class="say">the easiest</span></td></tr>
<tr><td>expensive</td><td>more expensive</td><td><span class="say">the most expensive</span></td></tr>
<tr><td>good</td><td>better</td><td><span class="say">the best</span></td></tr>
<tr><td>bad</td><td>worse</td><td><span class="say">the worst</span></td></tr>
<tr><td>far</td><td>further</td><td><span class="say">the furthest</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">It's the biggest map in the game.</span> — Это самая большая карта в игре.</li>
<li><span class="say">Kate is the best player in our team.</span> — Кейт — лучший игрок в нашей команде.</li>
<li><span class="say">Where is the nearest metro station?</span> — Где ближайшая станция метро?</li>
<li><span class="say">Money isn't the most important thing in life.</span> — Деньги — не самое важное в жизни.</li>
<li><span class="say">Max is good, but Kate is the best.</span> — Макс хорош, но Кейт лучше всех. <span class="muted">(можно без существительного)</span></li>
</ul>
<p><b>«Самый … в»</b> — <b>in</b> + место или группа: in the world, in the team, in the city. Но: <b>of the year</b>, <b>of all</b>.</p>
<p><b>«Самый … из всех, что я…»</b> — the best / the worst + <b>I've ever</b> + 3-я форма. Это Present Perfect, вы его уже знаете:</p>
<ul class="g-list">
<li><span class="say">It's the worst film I've ever seen.</span> — Это худший фильм, что я видел.</li>
<li><span class="say">This is the most beautiful game I've ever played.</span> — Это самая красивая игра, в которую я играл.</li>
<li><span class="say">What's the most expensive thing you've ever bought?</span> — Какая самая дорогая вещь, которую ты покупал?</li>
</ul>
<p><b>«Один из самых»</b> — one of the + -est + <b>множественное число</b>: <span class="say">It's one of the best games of the year.</span></p>
<div class="g-bad">He is best player. · the most best · the biggest city of Russia · one of the best game</div>
<div class="g-good">He is <b>the</b> best player. · <b>the best</b> · the biggest city <b>in</b> Russia · one of the best <b>games</b></div>
<div class="mini" data-q="This is ___ game I've ever played." data-o="the better|the best|best" data-a="1" data-why="«Самый» + I've ever → the best, с the."></div>
<div class="mini" data-q="Kate is the fastest player ___ our team." data-o="of|in|than" data-a="1" data-why="Самый в группе или месте → in our team."></div>`
      },
      {
        title: '6. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">This keyboard is more cheaper.</div><div class="g-good">This keyboard is <b>cheaper</b>.</div>
<div class="g-bad">Moscow is very bigger than Kazan.</div><div class="g-good">Moscow is <b>much</b> bigger than Kazan.</div>
<div class="g-bad">My brother is older as me.</div><div class="g-good">My brother is older <b>than</b> me.</div>
<div class="g-bad">This level isn't as easy than the first.</div><div class="g-good">This level isn't as easy <b>as</b> the first.</div>
<div class="g-bad">It's the most best game.</div><div class="g-good">It's <b>the best</b> game.</div>
<div class="g-bad">He's the tallest of the class.</div><div class="g-good">He's the tallest <b>in</b> the class.</div>
<div class="g-bad">It's one of the best film of the year.</div><div class="g-good">It's one of the best <b>films</b> of the year.</div>
<div class="g-bad">My hoodie is the same like yours.</div><div class="g-good">My hoodie is the same <b>as</b> yours.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Короткое <b>-er</b>, длинное <b>more</b> + <b>than</b> · <b>much / a bit</b> + сравнение · <b>not as … as</b> · «самый» — <b>the -est / the most</b> + <b>in</b>.</div>`
      }
    ],
    words: [
      ["than", "чем", "My new PC is faster than my old one.", "Мой новый компьютер быстрее старого."],
      ["as … as", "такой же… как", "Your drawing is as good as mine.", "Твой рисунок такой же хороший, как мой."],
      ["not as … as", "не такой… как", "The sequel isn't as good as the first game.", "Продолжение не такое хорошее, как первая игра."],
      ["the same as", "такой же, как; то же, что", "My phone is the same as yours.", "У меня такой же телефон, как у тебя."],
      ["more", "больше; более", "This course is more interesting.", "Этот курс интереснее."],
      ["most", "самый (с длинными словами); больше всего", "It's the most popular game in the world.", "Это самая популярная игра в мире."],
      ["less", "меньше; менее", "The episode was less than twenty minutes.", "Серия длилась меньше двадцати минут."],
      ["better", "лучше", "I feel better today.", "Сегодня мне лучше."],
      ["best", "лучший; лучше всего", "She's the best designer in our studio.", "Она лучший дизайнер в нашей студии."],
      ["worse", "хуже", "The ending was worse than I expected.", "Концовка была хуже, чем я ожидал."],
      ["worst", "худший; хуже всего", "It's the worst film I've ever seen.", "Это худший фильм, что я видел."],
      ["further", "дальше", "The station is further than I thought.", "Станция дальше, чем я думал."],
      ["much (+ -er)", "намного", "This one is much cheaper.", "Этот намного дешевле."],
      ["a bit", "немного, чуть-чуть", "Max is a bit older than me.", "Макс немного старше меня."],
      ["compare", "сравнивать", "Let's compare these two laptops.", "Давай сравним эти два ноутбука."],
      ["difference", "разница", "What's the difference between them?", "Какая между ними разница?"],
      ["cheap", "дешёвый", "It's cheaper to buy games on sale.", "Дешевле покупать игры на распродаже."],
      ["expensive", "дорогой", "This is the most expensive keyboard in the shop.", "Это самая дорогая клавиатура в магазине."],
      ["heavy", "тяжёлый", "My old laptop was much heavier.", "Мой старый ноутбук был намного тяжелее."],
      ["light", "лёгкий; свет", "The new model is lighter.", "Новая модель легче."],
      ["powerful", "мощный", "I need a more powerful computer.", "Мне нужен более мощный компьютер."],
      ["loud", "громкий", "This fan is louder than the old one.", "Этот вентилятор громче старого."],
      ["quiet", "тихий", "It's the quietest café in the city.", "Это самое тихое кафе в городе."],
      ["bright", "яркий", "The new screen is brighter.", "Новый экран ярче."],
      ["comfortable", "удобный", "This chair isn't as comfortable as my old one.", "Этот стул не такой удобный, как мой старый."],
      ["dangerous", "опасный", "It's the most dangerous level in the game.", "Это самый опасный уровень в игре."],
      ["safe", "безопасный", "It's safer to keep your password offline.", "Безопаснее хранить пароль не в интернете."],
      ["huge", "огромный", "The map in part two is huge.", "Карта во второй части огромная."],
      ["crowded", "переполненный, людный", "The metro is more crowded than usual.", "В метро больше народу, чем обычно."],
      ["famous", "знаменитый, известный", "He's more famous than his brother.", "Он известнее своего брата."],
      ["strong", "сильный", "The final boss is the strongest enemy.", "Финальный босс — самый сильный враг."]
    ],
    texts: [
      {
        id: 't-a2-10-1', title: 'A new laptop', level: 'A2',
        text: `Anna: I need a new laptop for work. My old one is getting slower every day.
Max: What are you choosing between?
Anna: Two models. The first one is cheaper — about eight hundred dollars. The second one costs more than a thousand.
Max: Is the expensive one much better?
Anna: It's faster, and the screen is bigger and brighter. For Figma that's important.
Max: And the cheaper one?
Anna: It's lighter, so it's easier to carry. But it isn't as powerful as the other one, and the battery isn't as good.
Max: How much lighter is it?
Anna: Only a bit — about three hundred grams.
Max: Then take the faster one. You spend eight hours a day in front of it. Three hundred grams is nothing.
Anna: That's true. But the faster one is also louder. I hate noisy fans.
Max: My laptop is the loudest machine in the world, and I'm still alive!
Anna: Ha-ha. OK, I think a better screen is more important than a quiet fan.
Max: Good choice. And now you can give me your old one!
Anna: It's slower than a turtle, Max.
Max: It's still faster than mine.`,
        questions: [
          { q: 'Why does Anna need a new laptop?', o: ['Her old one is slow', 'She lost her old one', 'She wants to play games'], a: 0 },
          { q: 'Which laptop is lighter?', o: ['The expensive one', 'The cheaper one', 'They are the same'], a: 1 },
          { q: 'What does Anna think is more important?', o: ['A light laptop', 'A low price', 'A better screen'], a: 2 }
        ]
      },
      {
        id: 't-a2-10-2', title: 'Is the sequel better?', level: 'A2',
        text: `Last month the second part of Sky Knights came out, and all my friends ask me the same question: is it better than the first game?
In many ways, yes. The world is much bigger — it takes about two hours to cross the map on foot. The graphics are more beautiful, and the fights are faster and more exciting. The main hero is also funnier than before. I laughed more than I expected.
But the sequel isn't as good as the original in one important way: the story. The first game had the most interesting villain I've ever seen. The new villain is louder and scarier, but he isn't as smart, and his plan is the same as in a hundred other games.
The game is also harder. The first boss is more difficult than the last boss of part one! Some players love that, but my friend Kate stopped playing after the first day.
So is it the best game of the year? For me, it's one of the best, but not the best. The best game I've played this year is still a small indie game from a team of three people. Sometimes smaller is better.`,
        questions: [
          { q: 'Which world is bigger?', o: ['The world in part two', 'The world in part one', 'They are the same'], a: 0 },
          { q: 'What is better in the first game?', o: ['The graphics', 'The story', 'The fights'], a: 1 },
          { q: 'What is the best game of the year for the writer?', o: ['Sky Knights 2', 'The first Sky Knights', 'A small indie game'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'My new monitor is ___ than the old one.', o: ['big', 'bigger', 'more big'], a: 1, why: 'Короткое слово → -er; согласная-гласная-согласная → g удваивается.' },
      { t: 'choice', q: 'This course is ___ than the last one.', o: ['more interesting', 'interestinger', 'most interesting'], a: 0, why: 'Длинное слово → more; сравниваем два курса, не «самый».' },
      { t: 'choice', q: 'Today I feel ___ than yesterday.', o: ['good', 'gooder', 'better'], a: 2, why: 'good / well → better — особая форма.' },
      { t: 'choice', q: 'Kate is ___ player in our team.', o: ['the best', 'the better', 'best'], a: 0, why: 'Лучше всех в команде → «самый»: the best, с the.' },
      { t: 'choice', q: 'My room isn\'t as big ___ yours.', o: ['than', 'as', 'like'], a: 1, why: 'Пара not as … as — второе слово тоже as.' },
      { t: 'choice', q: 'The new phone is ___ more expensive than the old one.', o: ['very', 'much', 'more'], a: 1, why: '«Намного» перед сравнением — much, не very.' },
      { t: 'choice', q: 'It\'s the ___ day of the year.', o: ['hotest', 'hottest', 'most hot'], a: 1, why: 'hot — согласная-гласная-согласная → t удваивается: the hottest.' },
      { t: 'choice', q: 'Tom runs faster than ___.', o: ['me', 'my', 'mine'], a: 0, why: 'После than в разговоре — me (или than I do).' },
      { t: 'gap', q: 'This level is ___ than the first one. (easy)', a: ['easier'], why: 'На -y → y меняется на i + -er.' },
      { t: 'gap', q: 'What\'s the ___ film you\'ve ever seen? (bad)', a: ['worst'], why: 'bad — worse — the worst: особая форма.' },
      { t: 'gap', q: 'Max is 1.80 m, Tom is 1.75 m. Tom isn\'t as ___ as Max. (tall)', a: ['tall'], why: 'Между as … as — обычная форма без -er.' },
      { t: 'gap', q: 'Please drive ___. (carefully — сравнение)', a: ['more carefully'], why: 'Наречие на -ly → more carefully.' },
      { t: 'gap', q: 'My keyboard is the same ___ yours.', a: ['as'], why: '«Такой же, как» — the same as.' },
      { t: 'gap', q: 'This game costs ___ than seventy dollars. (больше)', a: ['more'], why: '«Больше, чем» с числом — more than.' },
      { t: 'order', a: 'This laptop is lighter than mine', ru: 'Этот ноутбук легче моего' },
      { t: 'order', a: 'It is the biggest city in Russia', ru: 'Это самый большой город в России' },
      { t: 'order', a: 'I do not play as often as you', ru: 'Я играю не так часто, как ты' },
      { t: 'tr', q: 'Твой план лучше моего.', a: ['your plan is better than mine', 'your plan\'s better than mine', 'your plan is better than my plan'] },
      { t: 'tr', q: 'Москва намного больше, чем Казань.', a: ['moscow is much bigger than kazan', 'moscow is a lot bigger than kazan', 'moscow is far bigger than kazan', 'moscow is much larger than kazan', 'moscow is a lot larger than kazan', 'moscow\'s much bigger than kazan', 'moscow\'s a lot bigger than kazan'] },
      { t: 'listen', say: 'This is the best game I have ever played', a: ['this is the best game i have ever played', 'this is the best game i\'ve ever played'] }
    ],
    test: [
      { t: 'choice', q: 'busy → сравнение:', o: ['busyer', 'busier', 'more busy'], a: 1, why: 'Два слога на -y → -ier: busier.' },
      { t: 'choice', q: 'This chair is ___ than that one.', o: ['more comfortable', 'comfortabler', 'most comfortable'], a: 0, why: 'Длинное слово + than → more comfortable.' },
      { t: 'choice', q: 'The film was ___ than I expected.', o: ['a bit longer', 'a bit more long', 'very longer'], a: 0, why: 'long — короткое → longer; «немного» — a bit, не very.' },
      { t: 'choice', q: 'Moscow is bigger ___ Kazan.', o: ['as', 'than', 'that'], a: 1, why: 'После сравнения с -er — than.' },
      { t: 'choice', q: 'It\'s the tallest building ___ the city.', o: ['of', 'in', 'than'], a: 1, why: '«Самый» в месте → in the city.' },
      { t: 'choice', q: 'This is one of the best ___ of the year.', o: ['game', 'games', 'gaming'], a: 1, why: 'one of the best + множественное число.' },
      { t: 'choice', q: 'My English isn\'t as ___ as yours.', o: ['good', 'better', 'best'], a: 0, why: 'Между as … as — обычная форма: good.' },
      { t: 'choice', q: 'Which is ___ — a bug in the game or a bug in your code?', o: ['worse', 'worst', 'badder'], a: 0, why: 'Сравниваем два варианта: bad → worse.' },
      { t: 'gap', q: 'Is it ___ to go by train or by car? (cheap)', a: ['cheaper'], why: 'Сравниваем два способа, короткое слово → -er.' },
      { t: 'gap', q: 'He\'s the ___ person I know. (funny)', a: ['funniest'], why: '«Самый» + слово на -y → the funniest.' },
      { t: 'gap', q: 'I don\'t have as ___ free time as you. (много)', a: ['much'], why: 'free time — неисчисляемое → as much as.' },
      { t: 'gap', q: 'The station is ___ than I thought. (far)', a: ['further', 'farther'], why: 'far → further / farther — особая форма.' }
    ]
  }
);
