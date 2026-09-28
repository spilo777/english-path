// Юниты A2 3–4: Present Perfect — опыт (ever/never), how long, for/since/ago; Present Perfect или Past Simple
COURSE.units.push(
  // ───────────────────────────── UNIT A2-3 ─────────────────────────────
  {
    id: 'a2-3', level: 'A2', num: 3, track: 'main',
    books: { red: [17, 18, 19] },
    title: 'Have you ever…? How long? — for, since, ago',
    summary: 'Научимся спрашивать об опыте («Ты когда-нибудь был в Японии?») и говорить, сколько что-то уже длится: «Я знаю её десять лет», «Я учу английский с мая».',
    grammar: [
      {
        title: '1. Главная идея: время «от прошлого до сейчас»',
        html: `
<div class="g-idea">Есть время, которое <b>ещё не закончилось</b>: вся ваша жизнь до этой минуты или период, который начался в прошлом и идёт до сих пор. Для такого времени английский берёт <b>Present Perfect</b> (have + 3-я форма). А русский говорит то прошедшим, то даже настоящим временем — поэтому здесь ошибаются почти все.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты когда-нибудь <b>был</b> в Японии?</p><p>Я никогда не <b>играл</b> в Dota.</p><p>Я <b>знаю</b> Кейт десять лет.</p><p>Сколько ты здесь <b>живёшь</b>?</p></div>
  <div><div class="g-h">English</div><p><span class="say">Have you ever been to Japan?</span></p><p><span class="say">I have never played Dota.</span></p><p><span class="say">I have known Kate for ten years.</span></p><p><span class="say">How long have you lived here?</span></p></div>
</div>
<div class="g-formula"><span class="g-part">прошлое</span><span class="g-plus">→</span><span class="g-part g-v">have / has + 3-я форма</span><span class="g-plus">→</span><span class="g-part">сейчас</span></div>
<p>В этом юните два таких случая:</p>
<ul class="g-list">
<li><b>Опыт</b>: было ли это <b>хоть раз</b> в жизни? — <span class="say">Have you ever tried sushi?</span> — Ты когда-нибудь пробовал суши?</li>
<li><b>Сколько уже длится</b>: началось раньше и продолжается сейчас — <span class="say">I have lived in Moscow for three years.</span> — Я живу в Москве три года.</li>
</ul>
<div class="g-tip">Представьте Present Perfect как <b>мост</b> из прошлого в «сейчас». Если время ещё открыто (жизнь продолжается, вы всё ещё тут живёте) — идите по мосту: have + 3-я форма.</div>
<div class="mini" data-q="«Я живу в Москве три года» (и живу сейчас)" data-o="I live in Moscow for three years.|I have lived in Moscow for three years.|I lived in Moscow for three years." data-a="1" data-why="Началось в прошлом и длится до сих пор → have lived. Настоящее время здесь — русская ловушка."></div>`
      },
      {
        title: '2. Have you ever…? — опыт в жизни',
        html: `
<p><span class="muted">Вы уже знаете (юнит a2-2):</span> Present Perfect = <b>have / has + 3-я форма</b> глагола: <span class="say">I have played</span>, <span class="say">she has seen</span>, <span class="say">they haven't finished</span>. Коротко: I've, you've, he's, she's.</p>
<div class="g-idea">Когда спрашиваем или рассказываем про <b>опыт</b> — было это в жизни или нет, сколько раз, — время <b>не называем</b>. Важно не «когда», а «было ли вообще». Это Present Perfect.</div>
<div class="g-formula"><span class="g-part g-v">Have / Has</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">ever</span><span class="g-plus">+</span><span class="g-part g-v">3-я форма</span><span class="g-plus">…?</span></div>
<ul class="g-list">
<li><span class="say">Have you ever played Elden Ring?</span> — Ты когда-нибудь играл в Elden Ring?</li>
<li><span class="say">Yes, I have. I've finished it twice.</span> — Да. Я прошёл её два раза.</li>
<li><span class="say">Has your sister ever been to London?</span> — Твоя сестра была когда-нибудь в Лондоне?</li>
<li><span class="say">No, never.</span> / <span class="say">No, she hasn't.</span> — Нет, никогда. / Нет.</li>
<li><span class="say">I've never seen this series.</span> — Я никогда не смотрел этот сериал.</li>
<li><span class="say">Kate has had five jobs and has lived in three countries.</span> — У Кейт было пять работ, и она жила в трёх странах.</li>
<li><span class="say">I've seen this actor before, but I can't remember where.</span> — Я видел этого актёра раньше, но не помню где.</li>
</ul>
<p><b>Сколько раз</b> — тоже опыт, тоже Present Perfect:</p>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><span class="say">once</span></td><td>один раз</td></tr>
<tr><td><span class="say">twice</span></td><td>два раза</td></tr>
<tr><td><span class="say">three times</span>, <span class="say">many times</span></td><td>три раза, много раз</td></tr>
<tr><td><span class="say">How many times have you watched Friends?</span></td><td>Сколько раз ты смотрел «Друзей»?</td></tr>
</table>
<div class="g-steps"><div class="g-h">Где стоят ever и never</div><ol>
<li><b>ever</b> («когда-нибудь») — в вопросах, между кто и 3-й формой: Have you <b>ever</b> tried…?</li>
<li><b>never</b> («никогда») — между have и 3-й формой: I have <b>never</b> tried…</li>
<li>never уже значит «не». Второе «не» не нужно — в английском только <b>одно</b> отрицание.</li>
</ol></div>
<div class="g-bad">I haven't never been to Paris. · I never have been to Paris.</div>
<div class="g-good">I have <b>never</b> been to Paris. · I haven't <b>ever</b> been to Paris.</div>
<div class="g-tip">Русское «никогда <b>не</b>» — два отрицания. Английское <b>never</b> — одно слово, которое уже всё отрицает. Хотите сказать «не» — берите never <b>или</b> haven't, но не вместе.</div>
<div class="mini" data-q="Have you ___ played golf?" data-o="ever|never|yet" data-a="0" data-why="В вопросе об опыте — ever: «когда-нибудь»."></div>
<div class="mini" data-q="Я никогда не летал на самолёте." data-o="I haven't never flown on a plane.|I have never flown on a plane.|I never have flown on a plane." data-a="1" data-why="Одно отрицание: have + never + 3-я форма (flown)."></div>`
      },
      {
        title: '3. been или gone: вернулся или ещё там',
        html: `
<div class="g-idea">У глагола <b>go</b> две «перфектные» формы. <b>has gone</b> — уехал и <b>сейчас там</b>. <b>has been</b> — съездил и <b>уже вернулся</b>. Для опыта «был где-то» нужно именно <b>been to</b>.</div>
<table>
<tr><th>English</th><th>Что это значит</th></tr>
<tr><td><span class="say">Max has gone to Spain.</span></td><td>Макс уехал в Испанию. <span class="muted">(он сейчас там)</span></td></tr>
<tr><td><span class="say">Max has been to Spain.</span></td><td>Макс бывал в Испании. <span class="muted">(ездил и вернулся)</span></td></tr>
<tr><td><span class="say">Where has Kate gone?</span></td><td>Куда ушла Кейт? <span class="muted">(её здесь нет)</span></td></tr>
<tr><td><span class="say">Where have you been?</span></td><td>Где ты был? <span class="muted">(ты вернулся, вот ты)</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've been to Paris three times.</span> — Я был в Париже три раза.</li>
<li><span class="say">Have you been to the new cafe near the office?</span> — Ты был в новом кафе у офиса?</li>
<li><span class="say">My parents aren't at home. They've gone to the cinema.</span> — Родителей нет дома. Они ушли в кино.</li>
</ul>
<div class="g-bad">Max isn't in the office. He has been home.</div>
<div class="g-good">Max isn't in the office. He has <b>gone</b> home.</div>
<div class="g-bad">Have you ever been in Japan?</div>
<div class="g-good">Have you ever been <b>to</b> Japan?</div>
<div class="g-tip">been — как «сходил» туда и обратно: круг замкнулся. gone — «ушёл» — стрелка в одну сторону, человек ещё не вернулся.</div>
<div class="mini" data-q="Kate isn't here. She's ___ to the dentist." data-o="been|gone" data-a="1" data-why="Её нет, она сейчас у врача → gone."></div>
<div class="mini" data-q="I've ___ to Italy three times." data-o="been|gone" data-a="0" data-why="Опыт: ездил и вернулся → been to."></div>`
      },
      {
        title: '4. How long…? — «сколько уже» = have + 3-я форма',
        html: `
<div class="g-idea">«Я <b>знаю</b> её пять лет», «Мы <b>женаты</b> два года» — русский говорит в настоящем. Английский видит: это <b>началось в прошлом и продолжается</b> — значит, Present Perfect. Present Simple здесь — грубая ошибка.</div>
<div class="g-compare">
  <div><div class="g-h">Просто сейчас</div><p><span class="say">I know Lisa.</span></p><p><span class="say">Anna is in Paris.</span></p><p><span class="say">They are married.</span></p><p><span class="say">I have a PS5.</span></p><p><span class="say">Max lives in Kazan.</span></p></div>
  <div><div class="g-h">Сколько уже длится</div><p><span class="say">I have known Lisa for years.</span></p><p><span class="say">She has been in Paris since Monday.</span></p><p><span class="say">They have been married for five years.</span></p><p><span class="say">I have had it since 2021.</span></p><p><span class="say">He has lived there all his life.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">How long</span><span class="g-plus">+</span><span class="g-part g-v">have / has</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">3-я форма</span><span class="g-plus">…?</span></div>
<ul class="g-list">
<li><span class="say">How long have you known Kate?</span> — Сколько ты знаешь Кейт?</li>
<li><span class="say">How long has he had this laptop?</span> — Сколько у него этот ноутбук?</li>
<li><span class="say">How long have you been a designer?</span> — Сколько ты уже работаешь дизайнером?</li>
<li><span class="say">How long have they been married?</span> — Сколько они женаты?</li>
</ul>
<div class="g-bad">How long do you know her? · I know her for ten years.</div>
<div class="g-good">How long <b>have</b> you <b>known</b> her? · I<b>'ve known</b> her for ten years.</div>
<div class="g-bad">How long are you married?</div>
<div class="g-good">How long <b>have</b> you <b>been</b> married?</div>
<p>Если «сколько» нет — это просто настоящее: <span class="say">I know her very well.</span> — Я хорошо её знаю. <span class="say">Luke works in a studio now.</span> — Люк сейчас работает в студии.</p>
<div class="g-tip">Сигнал в русском: «<b>уже</b> … лет», «<b>с</b> …», «<b>сколько</b> ты…?» про то, что продолжается сейчас. Слышите такое — включайте have + 3-я форма.</div>
<div class="mini" data-q="They ___ married since 2020." data-o="are|have been|were" data-a="1" data-why="since 2020 — с тех пор до сейчас → have been."></div>
<div class="mini" data-q="How long ___ this phone?" data-o="do you have|have you had|are you having" data-a="1" data-why="Сколько уже длится → have + had (3-я форма от have)."></div>`
      },
      {
        title: '5. I have been doing — если это процесс',
        html: `
<div class="g-idea">«Я <b>учу</b> английский полгода», «Ты <b>ждёшь</b> уже двадцать минут» — это <b>процесс</b>, который идёт прямо сейчас (Present Continuous: I'm learning). Чтобы сказать, сколько он уже длится, берём <b>have been + -ing</b>.</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">have / has been</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span><span class="g-plus">+</span><span class="g-part">for / since…</span></div>
<table>
<tr><th>Сейчас идёт</th><th>Сколько уже идёт</th></tr>
<tr><td><span class="say">I'm learning English.</span></td><td><span class="say">I've been learning English for six months.</span></td></tr>
<tr><td><span class="say">It's raining.</span></td><td><span class="say">It's been raining all day.</span></td></tr>
<tr><td><span class="say">Max is streaming.</span></td><td><span class="say">He's been streaming since eight.</span></td></tr>
<tr><td><span class="say">Are you waiting?</span></td><td><span class="say">How long have you been waiting?</span></td></tr>
</table>
<p class="muted">Внимание: <b>she's been</b> = she <b>has</b> been, а не she is.</p>
<div class="g-steps"><div class="g-h">Что выбрать: have known или have been learning</div><ol>
<li>Глагол-<b>состояние</b> (be, know, have — «иметь», like) — без -ing: <span class="say">I've known him for years.</span></li>
<li>Глагол-<b>действие</b>, которое идёт (learn, play, wait, work, rain, stream, watch) — обычно have been + -ing: <span class="say">We've been playing since ten.</span></li>
<li><b>live</b> и <b>work</b> можно и так и так: <span class="say">I've lived here for two years.</span> = <span class="say">I've been living here for two years.</span></li>
</ol></div>
<div class="g-bad">I am learning English for two years.</div>
<div class="g-good">I <b>have been learning</b> English for two years.</div>
<div class="g-bad">I have been knowing her since school.</div>
<div class="g-good">I <b>have known</b> her since school.</div>
<div class="mini" data-q="Sorry I'm late! How long ___?" data-o="are you waiting|have you been waiting|did you wait" data-a="1" data-why="Ждёт до сих пор, спрашиваем «сколько уже» → have been + waiting."></div>
<div class="mini" data-q="We ___ this game since ten in the morning." data-o="play|are playing|have been playing" data-a="2" data-why="since ten — процесс идёт с десяти до сейчас → have been playing."></div>`
      },
      {
        title: '6. for или since',
        html: `
<div class="g-idea">Оба слова отвечают на «как долго?», но по-разному. <b>for</b> + <b>сколько времени</b> (отрезок). <b>since</b> + <b>с какого момента</b> (точка старта).</div>
<table>
<tr><th>for + отрезок</th><th>since + точка старта</th></tr>
<tr><td>for ten minutes</td><td>since nine o'clock</td></tr>
<tr><td>for three days</td><td>since Monday</td></tr>
<tr><td>for six months</td><td>since May</td></tr>
<tr><td>for five years</td><td>since 2019</td></tr>
<tr><td>for a long time, for ages</td><td>since Christmas, since school</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've worked at this studio for three years.</span> — Я работаю в этой студии три года.</li>
<li><span class="say">I've worked at this studio since 2023.</span> — Я работаю в этой студии с 2023 года.</li>
<li><span class="say">We've been waiting for the patch for two weeks.</span> — Мы ждём патч уже две недели.</li>
<li><span class="say">She's been online since six in the morning.</span> — Она в сети с шести утра.</li>
</ul>
<p>После <b>since</b> может идти целое предложение — в Past Simple (это точка в прошлом):</p>
<ul class="g-list">
<li><span class="say">I've played the guitar since I was ten.</span> — Я играю на гитаре с десяти лет.</li>
<li><span class="say">We've been friends since we met at university.</span> — Мы дружим с тех пор, как познакомились в универе.</li>
<li><span class="say">A lot of people have played it since it came out.</span> — С выхода игры в неё сыграло много людей.</li>
</ul>
<p>Со словом <b>all</b> предлог не нужен: <span class="say">I've lived here all my life.</span> — Я живу здесь всю жизнь. <span class="say">It's been raining all day.</span> — Весь день идёт дождь.</p>
<p>С отрицанием: <span class="say">I haven't played it for ages.</span> — Я сто лет в неё не играл. <span class="say">I haven't seen Max since Friday.</span> — Я не видел Макса с пятницы.</p>
<div class="g-bad">I've lived here since three years.</div>
<div class="g-good">I've lived here <b>for</b> three years.</div>
<div class="g-tip">Можно подставить «в течение» → <b>for</b>. Можно подставить «начиная с» → <b>since</b>. Число лет, дней, минут — всегда for; дата, день, час, событие — since.</div>
<div class="mini" data-q="I've worked here ___ March." data-o="for|since" data-a="1" data-why="March — точка старта → since."></div>
<div class="mini" data-q="We've been in the queue ___ forty minutes." data-o="for|since" data-a="0" data-why="Сорок минут — отрезок времени → for."></div>`
      },
      {
        title: '7. ago — «назад», и это уже Past Simple',
        html: `
<div class="g-idea"><b>ago</b> = «назад»: отсчитываем от сейчас и попадаем в <b>точку в прошлом</b>. Точка закончилась — значит, <b>Past Simple</b>, не Present Perfect. И ago ставится <b>после</b> срока.</div>
<div class="g-formula"><span class="g-part">срок</span><span class="g-plus">+</span><span class="g-part g-v">ago</span><span class="g-sep">·</span><span class="g-part">two days ago · an hour ago · ten years ago · a long time ago</span></div>
<ul class="g-list">
<li><span class="say">I started this job three years ago.</span> — Я начал работать здесь три года назад.</li>
<li><span class="say">When did you buy it? — A week ago.</span> — Когда ты это купил? — Неделю назад.</li>
<li><span class="say">The game came out a month ago.</span> — Игра вышла месяц назад.</li>
<li><span class="say">Life was very different a hundred years ago.</span> — Сто лет назад жизнь была совсем другой.</li>
</ul>
<p>Одна и та же ситуация — два способа сказать:</p>
<div class="g-compare">
  <div><div class="g-h">ago → Past Simple (когда?)</div><p><span class="say">Max came to Moscow three years ago.</span></p><p><span class="say">I met Kate ten years ago.</span></p><p><span class="say">I bought this laptop a year ago.</span></p></div>
  <div><div class="g-h">for → Present Perfect (сколько уже?)</div><p><span class="say">He has been in Moscow for three years.</span></p><p><span class="say">I've known Kate for ten years.</span></p><p><span class="say">I've had it for a year.</span></p></div>
</div>
<p><b>Ловушка «Как давно…?»</b> — по-русски одинаково, по-английски по-разному:</p>
<ul class="g-list">
<li>Как давно ты знаешь Кейт? <span class="muted">(знаешь до сих пор)</span> → <span class="say">How long have you known Kate?</span></li>
<li>Как давно ты купил ноутбук? <span class="muted">(покупка — точка)</span> → <span class="say">When did you buy your laptop?</span></li>
</ul>
<div class="g-bad">I have started three years ago. · I came here ago two years.</div>
<div class="g-good">I <b>started</b> three years ago. · I came here two years <b>ago</b>.</div>
<div class="mini" data-q="I met Max five years ___." data-o="ago|for|since" data-a="0" data-why="Встреча — точка в прошлом, «пять лет назад» → ago."></div>
<div class="mini" data-q="She ___ the studio two years ago." data-o="has joined|joined|joins" data-a="1" data-why="ago — законченная точка в прошлом → Past Simple: joined."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I know him for five years.</div><div class="g-good">I <b>have known</b> him for five years.</div>
<div class="g-bad">How long are you married?</div><div class="g-good">How long <b>have</b> you <b>been</b> married?</div>
<div class="g-bad">I live here since 2020.</div><div class="g-good">I<b>'ve lived</b> here since 2020.</div>
<div class="g-bad">I am learning English for a year.</div><div class="g-good">I<b>'ve been learning</b> English for a year.</div>
<div class="g-bad">I haven't never been to Paris.</div><div class="g-good">I<b>'ve never been</b> to Paris.</div>
<div class="g-bad">Max isn't here. He's been to the shop.</div><div class="g-good">Max isn't here. He's <b>gone</b> to the shop.</div>
<div class="g-bad">I've lived here since two years.</div><div class="g-good">I've lived here <b>for</b> two years.</div>
<div class="g-bad">I have bought it two weeks ago.</div><div class="g-good">I <b>bought</b> it two weeks ago.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Опыт (<b>ever / never</b>) и «сколько уже длится» (<b>How long? for / since</b>) → <b>have + 3-я форма</b> (или have been + -ing); точка в прошлом с <b>ago</b> → Past Simple.</div>`
      }
    ],
    words: [
      ["be — was/were — been", "быть — был — был (3-я форма)", "I've been to Italy twice.", "Я был в Италии два раза."],
      ["go — went — gone", "идти, ехать — пошёл — ушёл", "She has gone to the gym.", "Она ушла в спортзал."],
      ["ever", "когда-нибудь, когда-либо", "Have you ever played chess online?", "Ты когда-нибудь играл в шахматы онлайн?"],
      ["never", "никогда", "I've never seen this film.", "Я никогда не видел этот фильм."],
      ["before", "раньше, прежде", "I've heard this song before.", "Я слышал эту песню раньше."],
      ["once", "один раз, однажды", "I've been to Japan once.", "Я был в Японии один раз."],
      ["twice", "дважды, два раза", "She has finished the game twice.", "Она прошла игру дважды."],
      ["… times", "… раз (three times, many times)", "I've watched this series three times.", "Я смотрел этот сериал три раза."],
      ["abroad", "за границей, за границу", "Have you ever worked abroad?", "Ты когда-нибудь работал за границей?"],
      ["travel", "путешествовать; путешествие", "They have travelled a lot.", "Они много путешествовали."],
      ["visit", "посещать, навещать", "I've never visited London.", "Я никогда не был в Лондоне."],
      ["fly — flew — flown", "летать, лететь — летал — летал", "Have you ever flown in a helicopter?", "Ты когда-нибудь летал на вертолёте?"],
      ["ride — rode — ridden", "ездить верхом, кататься — ездил — ездил", "I've never ridden a horse.", "Я никогда не ездил на лошади."],
      ["climb", "подниматься, лезть", "Have you ever climbed a mountain?", "Ты когда-нибудь поднимался на гору?"],
      ["try", "пробовать, пытаться", "Have you tried this new app?", "Ты пробовал это новое приложение?"],
      ["meet — met — met", "встречать, знакомиться — встретил", "I've met a lot of interesting people.", "Я встретил много интересных людей."],
      ["know — knew — known", "знать — знал — знал", "I've known Max since school.", "Я знаю Макса со школы."],
      ["have — had — had", "иметь — имел — имел", "I've had this laptop for five years.", "У меня этот ноутбук пять лет."],
      ["win — won — won", "выигрывать — выиграл — выиграл", "Our team has won three times.", "Наша команда выигрывала три раза."],
      ["learn — learnt/learned", "учить, узнавать — учил", "I've been learning English for a year.", "Я учу английский год."],
      ["wait", "ждать", "How long have you been waiting?", "Сколько ты уже ждёшь?"],
      ["married", "женатый, замужем", "They've been married for ten years.", "Они женаты десять лет."],
      ["how long", "как долго, сколько времени", "How long have you lived here?", "Сколько ты здесь живёшь?"],
      ["for", "в течение (+ срок)", "I've worked here for two years.", "Я работаю здесь два года."],
      ["since", "с (какого-то момента), с тех пор как", "It's been raining since morning.", "Дождь идёт с утра."],
      ["ago", "назад", "I started this job a year ago.", "Я начал эту работу год назад."],
      ["a long time", "долго, давно", "I haven't seen her for a long time.", "Я давно её не видел."],
      ["for ages", "очень давно, целую вечность (разг.)", "I haven't played it for ages.", "Я сто лет в неё не играл."],
      ["all my life", "всю (мою) жизнь", "I've lived in this city all my life.", "Я живу в этом городе всю жизнь."],
      ["famous", "знаменитый, известный", "Have you ever met a famous person?", "Ты когда-нибудь встречал знаменитость?"],
      ["experience", "опыт; впечатление", "It was a great experience.", "Это был отличный опыт."]
    ],
    texts: [
      {
        id: 't-a2-3-1', title: 'Have you ever…?', level: 'A2',
        text: `Kate: Max, let's play a game at lunch. It's called "Have you ever…?" I ask, you answer. Honestly!
Max: OK, go.
Kate: Have you ever been abroad?
Max: Yes, many times. I've been to Turkey, Georgia and Japan.
Kate: Japan? Wow! When did you go there?
Max: Two years ago. There was a big game show in Tokyo, and our studio sent me there.
Kate: Cool! Have you ever met a famous person?
Max: Once. I met the voice actor of my favourite character at that show. What about you? Have you ever been to Asia?
Kate: No, never. Actually, I've never flown on a plane.
Max: Really? Never?
Kate: Never. I don't like planes. But I've travelled a lot by train. I've been to Kazan, Minsk and Saint Petersburg.
Max: OK, my turn. Have you ever broken a bone?
Kate: Yes, twice. I broke my arm when I was ten. And last winter I broke my leg on a snowboard.
Max: Ouch! Have you ever ridden a horse?
Kate: Yes, a few times. My grandparents have a farm.
Max: Last question. Have you ever finished Dark Souls?
Kate: No. I've tried many times, but I've never beaten the first boss.
Max: Ha! Me too. I've died there about a hundred times.`,
        questions: [
          { q: 'When did Max go to Japan?', o: ['Last year', 'Two years ago', 'He has never been there'], a: 1 },
          { q: 'Why hasn\'t Kate been to Asia?', o: ['She doesn\'t like planes', 'She doesn\'t like Asia', 'She has no money'], a: 0 },
          { q: 'How many times has Kate broken a bone?', o: ['Once', 'Twice', 'Never'], a: 1 }
        ]
      },
      {
        id: 't-a2-3-2', title: 'How long?', level: 'A2',
        text: `Anna is a UI designer. She is from Kazan, but she moved to Saint Petersburg five years ago. She has lived there for five years now, and she loves the city.
Anna has worked at a small game studio since 2023. She draws menus, icons and maps for mobile games. She has had the same laptop for six years. It's old and slow, but she doesn't want to buy a new laptop.
Her best friend is Lena. They met at school, so they have known each other for almost twenty years. Lena lives in Kazan, and they haven't seen each other since last summer. But they talk every day.
Anna has also been learning Japanese for six months. She hasn't been to Japan yet, but she has watched a lot of anime, and she knows about three hundred words.
In the evenings Anna streams on Twitch. She started her channel two years ago. Tonight she has been streaming since eight o'clock, and now it's eleven. She has been playing a new horror game for three hours, and her viewers have been writing in the chat all evening.
Lena sends a message: "How long have you been awake?"
Anna laughs and writes back: "Since six in the morning! Good night!"`,
        questions: [
          { q: 'How long has Anna lived in Saint Petersburg?', o: ['For two years', 'For five years', 'All her life'], a: 1 },
          { q: 'When did Anna start her channel?', o: ['Two years ago', 'Six months ago', 'In 2023'], a: 0 },
          { q: 'How long has Anna been playing the horror game tonight?', o: ['For an hour', 'Since six in the morning', 'For three hours'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Have you ___ been to Italy?', o: ['ever', 'never', 'yet'], a: 0, why: 'В вопросе об опыте «когда-нибудь» → ever.' },
      { t: 'choice', q: 'I\'ve ___ seen snow in my life.', o: ['never', 'ever', 'not'], a: 0, why: '«Никогда» в утверждении → never, одно отрицание.' },
      { t: 'choice', q: 'Tom isn\'t here. He\'s ___ to the gym.', o: ['been', 'gone', 'went'], a: 1, why: 'Тома нет, он сейчас в зале → has gone.' },
      { t: 'choice', q: 'I\'ve ___ to London twice.', o: ['been', 'gone', 'went'], a: 0, why: 'Опыт: съездил и вернулся → been to.' },
      { t: 'choice', q: 'I\'ve worked here ___ 2021.', o: ['for', 'since', 'ago'], a: 1, why: '2021 — точка старта → since.' },
      { t: 'choice', q: 'We\'ve been in the queue ___ half an hour.', o: ['for', 'since', 'ago'], a: 0, why: 'Полчаса — отрезок времени → for.' },
      { t: 'choice', q: 'How long ___ Kate?', o: ['do you know', 'have you known', 'are you knowing'], a: 1, why: 'Знаешь с прошлого до сейчас, «сколько уже» → have known.' },
      { t: 'choice', q: 'She came to Moscow three years ___.', o: ['ago', 'for', 'since'], a: 0, why: 'Точка в прошлом с Past Simple (came) → ago.' },
      { t: 'gap', q: 'They ___ married for ten years. (be)', a: ['have been'], why: 'Женаты до сих пор, «сколько уже» → have been.' },
      { t: 'gap', q: 'I ___ this laptop since 2020. (have)', a: ['have had'], why: 'since 2020 — с тех пор до сейчас → have + had.' },
      { t: 'gap', q: 'How long has she ___ in Berlin? (live)', a: ['lived', 'been living'], why: 'После has — 3-я форма (lived) или been + -ing.' },
      { t: 'gap', q: 'I ___ English for six months. (learn)', a: ['have been learning', 'have learnt', 'have learned'], why: 'Процесс идёт полгода до сейчас → have been learning.' },
      { t: 'gap', q: 'I ___ met a famous person. (никогда)', a: ['have never', 'haven\'t ever', 'have not ever'], why: 'have + never + 3-я форма, без второго «не».' },
      { t: 'gap', q: 'I started this job two years ___.', a: ['ago'], why: '«Два года назад» — срок + ago, глагол в Past Simple.' },
      { t: 'order', a: 'Have you ever been to Japan', ru: 'Ты когда-нибудь был в Японии?' },
      { t: 'order', a: 'How long have you known Max', ru: 'Сколько ты знаешь Макса?' },
      { t: 'tr', q: 'Я знаю её с 2015 года.', a: ['i have known her since 2015', 'i\'ve known her since 2015'] },
      { t: 'tr', q: 'Я никогда не был за границей.', a: ['i have never been abroad', 'i\'ve never been abroad', 'i haven\'t ever been abroad', 'i have not ever been abroad'] },
      { t: 'tr', q: 'Сколько ты здесь живёшь?', a: ['how long have you lived here', 'how long have you been living here'] },
      { t: 'listen', say: 'It has been raining all day.', a: ['it has been raining all day', 'it\'s been raining all day'] }
    ],
    test: [
      { t: 'choice', q: 'Has your brother ever ___ a horse?', o: ['ride', 'rode', 'ridden'], a: 2, why: 'После has — 3-я форма: ride — rode — ridden.' },
      { t: 'choice', q: 'How many times ___ this series?', o: ['did you ever watch', 'have you watched', 'are you watching'], a: 1, why: 'Сколько раз в жизни до сих пор — опыт → have watched.' },
      { t: 'choice', q: 'Where\'s Anna? — She\'s ___ out. She isn\'t here.', o: ['been', 'gone', 'go'], a: 1, why: 'Ушла и ещё не вернулась → has gone.' },
      { t: 'choice', q: 'Where have you ___? We were looking for you!', o: ['gone', 'been', 'go'], a: 1, why: 'Человек уже вернулся — «где ты был?» → Where have you been?' },
      { t: 'choice', q: 'I ___ Max since we were at school.', o: ['know', 'have known', 'knew'], a: 1, why: 'since — с того момента до сейчас → have known, а не know.' },
      { t: 'choice', q: 'Look, it\'s still snowing! It ___ since the morning.', o: ['snows', 'is snowing', 'has been snowing'], a: 2, why: 'Процесс идёт с утра до сейчас → has been + -ing.' },
      { t: 'choice', q: 'I haven\'t played this game ___ ages.', o: ['since', 'for', 'ago'], a: 1, why: 'for ages — «сто лет», отрезок времени → for.' },
      { t: 'choice', q: 'I ___ Kate at a party ten years ago. Now we are best friends.', o: ['have met', 'met', 'meet'], a: 1, why: 'ten years ago — точка в прошлом → Past Simple: met.' },
      { t: 'gap', q: 'Lena has lived in Kazan ___ she was five.', a: ['since'], why: 'since + предложение о точке старта (she was five).' },
      { t: 'gap', q: 'We ___ the office an hour ago. (leave)', a: ['left'], why: 'an hour ago — законченная точка → Past Simple: left.' },
      { t: 'gap', q: 'He ___ his PS5 for three years. (have)', a: ['has had'], why: 'Он — has, «сколько уже» → has + had.' },
      { t: 'gap', q: 'How long ___ you been waiting for the bus?', a: ['have'], why: 'How long + have + you + been + -ing.' }
    ]
  },

  // ───────────────────────────── UNIT A2-4 ─────────────────────────────
  {
    id: 'a2-4', level: 'A2', num: 4, track: 'main',
    books: { red: [20] },
    title: 'I have done или I did — Present Perfect и Past Simple',
    summary: 'Раз и навсегда разберёмся, когда «я потерял» — I\'ve lost, а когда — I lost: три вопроса-алгоритма, по которым выбор делается за секунду.',
    grammar: [
      {
        title: '1. Главная идея: одно русское прошедшее — два английских',
        html: `
<div class="g-idea">По-русски «я потерял ключи» звучит одинаково всегда. По-английски надо выбрать. Важно, <b>что есть сейчас</b> (результат, новость, опыт до сих пор) → <b>Present Perfect</b>. Важно, <b>когда и как это было</b> — момент в прошлом, который закончился → <b>Past Simple</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я потерял ключи. <span class="muted">(не могу войти)</span></p><p>Я потерял ключи вчера в кафе.</p><p>Ты видел Кейт? <span class="muted">(где она сейчас?)</span></p><p>Ты видел Кейт в субботу?</p></div>
  <div><div class="g-h">English</div><p><span class="say">I've lost my keys.</span></p><p><span class="say">I lost my keys in a cafe yesterday.</span></p><p><span class="say">Have you seen Kate?</span></p><p><span class="say">Did you see Kate on Saturday?</span></p></div>
</div>
<div class="g-tip"><b>Past Simple</b> — это фото в альбоме с датой: «вот мы в Сочи, лето 2022». <b>Present Perfect</b> — это ачивки в профиле игры: «Пройдено на максимальной сложности». Видно сейчас, а когда именно — не написано и не важно.</div>
<ul class="g-list">
<li><span class="say">I've finished the game!</span> — Я прошёл игру! <span class="muted">(ачивка: она пройдена)</span></li>
<li><span class="say">I finished the game last night at two a.m.</span> — Я прошёл игру вчера в два ночи. <span class="muted">(фото с датой)</span></li>
</ul>
<div class="mini" data-q="Смотри, я купил новую мышку! (она вот, у меня)" data-o="Look, I've bought a new mouse!|Look, I bought a new mouse last week!|Look, I buy a new mouse!" data-a="0" data-why="Новость, результат виден сейчас, времени нет → Present Perfect."></div>`
      },
      {
        title: '2. Алгоритм: три вопроса к предложению',
        html: `
<div class="g-idea">Не угадывайте — проверяйте по шагам. Первый же шаг, который сработал, даёт ответ.</div>
<div class="g-steps"><div class="g-h">Present Perfect или Past Simple?</div><ol>
<li><b>Есть законченное время?</b> yesterday, last week, in 2019, two days ago, on Saturday, at five o'clock, when I was a child — или вопрос <b>When…? / What time…?</b> → <b>Past Simple</b>. Стоп.</li>
<li><b>Есть слова «до сих пор»?</b> ever, never, just, already, yet, so far, for / since (и это продолжается), today, this week (ещё не кончились), How long…? → <b>Present Perfect</b>. Стоп.</li>
<li><b>Подсказок нет?</b> Спросите себя: мне важно <b>КОГДА и КАК</b> (рассказываю историю, подробности) или <b>ЧТО есть СЕЙЧАС</b> (результат, новость, опыт)? История → <b>Past Simple</b>. Сейчас → <b>Present Perfect</b>.</li>
</ol></div>
<table>
<tr><th>Past Simple</th><th>Present Perfect</th></tr>
<tr><td>yesterday, last…</td><td>ever, never</td></tr>
<tr><td>… ago</td><td>just, already, yet</td></tr>
<tr><td>in 2020, on Monday</td><td>for / since (до сих пор)</td></tr>
<tr><td>When…? What time…?</td><td>How long…?</td></tr>
<tr><td>when I was…</td><td>today, this week, so far</td></tr>
</table>
<p>Прогоним через алгоритм:</p>
<ul class="g-list">
<li>«Я <b>уже</b> видел этот фильм». Шаг 1 — нет. Шаг 2 — «уже» = already → <span class="say">I've already seen this film.</span></li>
<li>«Я видел его <b>в пятницу</b>». Шаг 1 — есть время → <span class="say">I saw it on Friday.</span></li>
<li>«Я сломал мышку!» Шаги 1–2 — нет. Шаг 3 — важно, что она не работает сейчас → <span class="say">I've broken my mouse!</span></li>
<li>«<b>Как</b> ты её сломал?» Шаг 3 — спрашиваем подробности истории → <span class="say">How did you break it?</span></li>
</ul>
<div class="mini" data-q="I ___ this film. Let's watch something else. (уже видел)" data-o="saw already|have already seen|already see" data-a="1" data-why="Шаг 2: already → Present Perfect."></div>
<div class="mini" data-q="We ___ a great film on Friday." data-o="have watched|watched" data-a="1" data-why="Шаг 1: on Friday — законченное время → Past Simple."></div>`
      },
      {
        title: '3. Законченное время → только Past Simple',
        html: `
<div class="g-idea">Если в предложении есть <b>момент в прошлом, который закончился</b>, Present Perfect <b>запрещён</b>. Даже если результат есть и сейчас. У Present Perfect «даты нет» — это его суть.</div>
<ul class="g-list">
<li><span class="say">I saw Anna yesterday.</span> — Я видел Анну вчера.</li>
<li><span class="say">We didn't have a holiday last year.</span> — В прошлом году у нас не было отпуска.</li>
<li><span class="say">Where were you on Sunday afternoon?</span> — Где ты был в воскресенье днём?</li>
<li><span class="say">What did you do last night? — I stayed at home.</span> — Что ты делал вчера вечером? — Сидел дома.</li>
</ul>
<div class="g-bad">I have seen Anna yesterday.</div>
<div class="g-good">I <b>saw</b> Anna yesterday.</div>
<div class="g-bad">We haven't had a holiday last year.</div>
<div class="g-good">We <b>didn't have</b> a holiday last year.</div>
<p>Вопросы <b>When…?</b> и <b>What time…?</b> сами спрашивают о точке в прошлом — поэтому тоже Past Simple:</p>
<ul class="g-list">
<li><span class="say">When did you buy your computer?</span> — Когда ты купил компьютер?</li>
<li><span class="say">What time did the stream start?</span> — Во сколько начался стрим?</li>
</ul>
<div class="g-bad">When have you bought your computer?</div>
<div class="g-good">When <b>did</b> you <b>buy</b> your computer?</div>
<div class="g-tip">Правило-щит: <b>когда?</b> и Present Perfect — враги. Если в предложении есть ответ на «когда?» или сам вопрос «когда?» — только Past Simple.</div>
<div class="mini" data-q="I ___ this series last month." data-o="have finished|finished" data-a="1" data-why="last month — законченное время → Past Simple."></div>
<div class="mini" data-q="When ___ the game?" data-o="have you bought|did you buy" data-a="1" data-why="When…? — вопрос о точке в прошлом → did + buy."></div>`
      },
      {
        title: '4. Время ещё идёт → Present Perfect',
        html: `
<div class="g-idea">Present Perfect — для периода, который <b>ещё не закончился</b>: вся жизнь, «до сих пор», «уже / ещё не», сегодня, эта неделя.</div>
<ul class="g-list">
<li><span class="say">Have you ever been to Japan?</span> — Ты когда-нибудь был в Японии? <span class="muted">(вся жизнь)</span></li>
<li><span class="say">Sam hasn't answered yet.</span> — Сэм ещё не ответил. <span class="muted">(всё ещё жду)</span></li>
<li><span class="say">I've known Max since school.</span> — Я знаю Макса со школы. <span class="muted">(до сих пор)</span></li>
<li><span class="say">I've drunk three coffees today.</span> — Я сегодня выпил три кофе. <span class="muted">(день не кончился)</span></li>
<li><span class="say">We've released two updates this month.</span> — В этом месяце мы выпустили два обновления.</li>
</ul>
<div class="g-compare">
  <div><div class="g-h">Present Perfect (период идёт)</div><p><span class="say">I've played a lot this week.</span></p><p><span class="say">My friend has written three books.</span></p><p><span class="say">This studio has made five games.</span></p></div>
  <div><div class="g-h">Past Simple (период закончился)</div><p><span class="say">I played a lot last week.</span></p><p><span class="say">Tolstoy wrote a lot of books.</span></p><p><span class="say">The studio made five games before it closed.</span></p></div>
</div>
<p>Писатель жив и ещё может писать — его «время» не закончилось → Present Perfect. Толстого уже нет, студия закрылась — время закончено → Past Simple.</p>
<p class="muted">Тонкость: this morning. В 10 утра утро ещё идёт → <span class="say">I've had two coffees this morning.</span> Вечером утро уже прошло → <span class="say">I had two coffees this morning.</span></p>
<div class="mini" data-q="My friend is a writer. She ___ three books." data-o="wrote|has written|writes" data-a="1" data-why="Она жива и пишет, время не закончилось → has written."></div>
<div class="mini" data-q="I ___ a lot of coffee this week." data-o="drank|have drunk|drink" data-a="1" data-why="this week ещё идёт → Present Perfect."></div>`
      },
      {
        title: '5. Новость → подробности: как звучит живой разговор',
        html: `
<div class="g-idea">В жизни времена идут парой. <b>Новость</b> сообщаем в Present Perfect — без даты. Как только начинаем <b>уточнять</b> — когда, где, как, что было дальше — переходим на <b>Past Simple</b>.</div>
<ul class="g-list">
<li><span class="say">I've lost my phone!</span> — Я потерял телефон! <span class="muted">(новость)</span></li>
<li><span class="say">Oh no! Where did you lose it?</span> — Где ты его потерял? <span class="muted">(подробности)</span></li>
<li><span class="say">I left it in a taxi. I was talking to Max and forgot it.</span> — Оставил в такси. Болтал с Максом и забыл.</li>
<li><span class="say">Have you called the taxi company?</span> — Ты позвонил в такси? <span class="muted">(результат есть?)</span></li>
<li><span class="say">Yes, I called them ten minutes ago.</span> — Да, позвонил десять минут назад. <span class="muted">(точка)</span></li>
</ul>
<p>То же с опытом: вопрос <b>Have you ever…?</b> → ответ «да» → подробности в Past Simple.</p>
<div class="g-formula"><span class="g-part g-v">Have you ever…?</span><span class="g-plus">→</span><span class="g-part">Yes, I have.</span><span class="g-plus">→</span><span class="g-part g-v">When / Where did you…?</span></div>
<ul class="g-list">
<li><span class="say">Have you ever been to Italy? — Yes, I have. I went there two years ago.</span> — Ты был в Италии? — Да, ездил два года назад.</li>
<li><span class="say">Did you like it? — Yes, it was amazing.</span> — Понравилось? — Да, было потрясающе.</li>
</ul>
<div class="g-bad">Yes, I have been there in 2019. It has been great.</div>
<div class="g-good">Yes, I <b>went</b> there in 2019. It <b>was</b> great.</div>
<div class="mini" data-q="— Have you ever been to Spain? — Yes, I ___ there last summer." data-o="have been|went|have gone" data-a="1" data-why="Подробность с last summer → Past Simple."></div>
<div class="mini" data-q="— I've broken my headphones. — Oh no! How ___ that?" data-o="have you done|did you do|you did" data-a="1" data-why="«Как это случилось?» — подробности истории → Past Simple."></div>`
      },
      {
        title: '6. Похожие пары: вся разница — в «сейчас»',
        html: `
<div class="g-idea">Одинаковые на вид предложения. Present Perfect говорит о <b>сейчас</b>, Past Simple — о <b>том моменте</b> в прошлом.</div>
<table>
<tr><th>Present Perfect</th><th>Past Simple</th></tr>
<tr><td><span class="say">I've lost my key.</span> <span class="muted">— не могу найти</span></td><td><span class="say">I lost my key last week.</span> <span class="muted">— может, уже нашёл</span></td></tr>
<tr><td><span class="say">Ben has gone home.</span> <span class="muted">— его здесь нет</span></td><td><span class="say">Ben went home an hour ago.</span></td></tr>
<tr><td><span class="say">Have you seen Kate?</span> <span class="muted">— где она?</span></td><td><span class="say">Did you see Kate on Saturday?</span></td></tr>
<tr><td><span class="say">Sam hasn't called yet.</span> <span class="muted">— жду</span></td><td><span class="say">Sam didn't call yesterday.</span></td></tr>
<tr><td><span class="say">Have you ever been to Spain?</span> <span class="muted">— за жизнь</span></td><td><span class="say">Did you go to Spain last year?</span></td></tr>
<tr><td><span class="say">We've lived in Moscow for six years.</span> <span class="muted">— живём и сейчас</span></td><td><span class="say">We lived in Kazan for six years.</span> <span class="muted">— теперь нет</span></td></tr>
</table>
<div class="g-tip">Слово <b>for</b> ничего не решает — оно бывает в обоих временах. Решает вопрос: <b>это продолжается сейчас?</b> Да → have lived. Нет, закончилось → lived.</div>
<div class="g-bad">I have lived in London for two years, but now I live in Berlin.</div>
<div class="g-good">I <b>lived</b> in London for two years, but now I live in Berlin.</div>
<div class="mini" data-q="I ___ at that studio for three years. Then I moved to a new company." data-o="have worked|worked" data-a="1" data-why="Та работа закончилась → Past Simple, даже с for."></div>`
      },
      {
        title: '7. В играх и сериалах',
        html: `
<div class="g-idea">Обратите внимание, как игры и сериалы переключают времена: статус и новости — Present Perfect, история и подробности — Past Simple.</div>
<ul class="g-list">
<li><span class="say">Quest completed: you have found the lost sword.</span> — Задание выполнено: вы нашли потерянный меч. <span class="muted">(статус)</span></li>
<li><span class="say">You've finally arrived! I sent you a letter three days ago.</span> — Наконец-то ты пришёл! Я отправил тебе письмо три дня назад.</li>
<li><span class="say">Achievement unlocked: you have died 100 times.</span> — Достижение: вы умерли 100 раз.</li>
<li><span class="say">Where have you been? — Long story. I missed the last train.</span> — Где ты пропадал? — Долгая история. Я опоздал на последний поезд.</li>
<li><span class="say">Where were you last night?</span> — Где ты был вчера вечером? <span class="muted">(есть время → Past Simple)</span></li>
</ul>
<p><b>Американский английский.</b> В сериалах из США вы часто услышите Past Simple там, где британцы скажут Present Perfect: <span class="say">Did you eat yet?</span>, <span class="say">I already saw it.</span>, <span class="say">I just got home.</span> Понимать это нужно, но сами говорите по правилу: <span class="say">Have you eaten yet?</span> — это правильно везде. А вот обратного нет: с yesterday, ago, last… Present Perfect <b>неправилен ни в Лондоне, ни в Нью-Йорке</b>.</p>
<div class="mini" data-q="Где ты был? Мы тебя искали! (ты вернулся, время не названо)" data-o="Where have you been?|Where have you gone?|Where you were?" data-a="0" data-why="Человек уже здесь, времени нет → Where have you been?"></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I have seen him yesterday.</div><div class="g-good">I <b>saw</b> him yesterday.</div>
<div class="g-bad">When have you arrived?</div><div class="g-good">When <b>did</b> you <b>arrive</b>?</div>
<div class="g-bad">I've finished the project at five o'clock.</div><div class="g-good">I <b>finished</b> the project at five o'clock.</div>
<div class="g-bad">Steve's cat has died two years ago.</div><div class="g-good">Steve's cat <b>died</b> two years ago.</div>
<div class="g-bad">Where have you been last night?</div><div class="g-good">Where <b>were</b> you last night?</div>
<div class="g-bad">I've been to Spain in 2018.</div><div class="g-good">I <b>went</b> to Spain in 2018.</div>
<div class="g-bad">Tolstoy has written a lot of books.</div><div class="g-good">Tolstoy <b>wrote</b> a lot of books.</div>
<div class="g-bad">I live here for five years.</div><div class="g-good">I<b>'ve lived</b> here for five years.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Есть <b>точка в прошлом</b> (когда? ago, yesterday, last…, in 2019) → <b>Past Simple</b>. Точки нет, важно <b>«сейчас» или «до сих пор»</b> → <b>Present Perfect</b>.</div>`
      }
    ],
    words: [
      ["see — saw — seen", "видеть — видел — видел", "Have you seen my headphones?", "Ты не видел мои наушники?"],
      ["lose — lost — lost", "терять, проигрывать — потерял", "I've lost my keys.", "Я потерял ключи."],
      ["find — found — found", "находить — нашёл", "They found my bag in the taxi.", "Мою сумку нашли в такси."],
      ["leave — left — left", "уходить; оставлять — ушёл; оставил", "I left my phone at home this morning.", "Я оставил телефон дома сегодня утром."],
      ["forget — forgot — forgotten", "забывать — забыл", "I've forgotten her name.", "Я забыл, как её зовут."],
      ["break — broke — broken", "ломать, разбивать — сломал", "Somebody has broken the printer.", "Кто-то сломал принтер."],
      ["hear — heard — heard", "слышать — слышал", "Have you heard the news?", "Ты слышал новости?"],
      ["write — wrote — written", "писать — написал", "She has written three books.", "Она написала три книги."],
      ["take — took — taken", "брать — взял", "Who has taken my charger?", "Кто взял мою зарядку?"],
      ["give — gave — given", "давать — дал", "The boss gave us a day off last Friday.", "Начальник дал нам выходной в прошлую пятницу."],
      ["speak — spoke — spoken", "говорить — говорил", "I've never spoken to him.", "Я ни разу с ним не говорил."],
      ["buy — bought — bought", "покупать — купил", "When did you buy this chair?", "Когда ты купил этот стул?"],
      ["sell — sold — sold", "продавать — продал", "The game has sold a million copies.", "Игра продалась миллионом копий."],
      ["come — came — come", "приходить — пришёл", "Your package has come!", "Твоя посылка пришла!"],
      ["do — did — done", "делать — сделал", "Have you done the task?", "Ты сделал задачу?"],
      ["send — sent — sent", "отправлять — отправил", "I sent the file an hour ago.", "Я отправил файл час назад."],
      ["happen", "случаться, происходить", "What has happened? You look sad.", "Что случилось? Ты грустный."],
      ["arrive", "прибывать, приезжать", "When did you arrive?", "Когда ты приехал?"],
      ["finish", "заканчивать", "I've finished the design.", "Я закончил дизайн."],
      ["call", "звонить; звать", "Have you called the client?", "Ты позвонил клиенту?"],
      ["release", "выпускать; релиз", "They released the game in 2020.", "Они выпустили игру в 2020 году."],
      ["update", "обновление; обновлять", "We've released a big update.", "Мы выпустили большое обновление."],
      ["news", "новости, новость", "I've got great news!", "У меня отличная новость!"],
      ["this week", "на этой неделе", "I've played a lot this week.", "Я много играл на этой неделе."],
      ["so far", "пока что, до сих пор", "So far we've done two levels.", "Пока что мы сделали два уровня."],
      ["die", "умирать", "My character has died again!", "Мой персонаж опять умер!"],
      ["close", "закрывать(ся)", "The studio closed in 2005.", "Студия закрылась в 2005 году."],
      ["change", "менять(ся); изменение", "You've changed your avatar!", "Ты сменил аватарку!"],
      ["studio", "студия", "She has worked at this studio for a year.", "Она работает в этой студии год."],
      ["company", "компания, фирма", "He left the company last spring.", "Он ушёл из компании прошлой весной."]
    ],
    texts: [
      {
        id: 't-a2-4-1', title: 'The lost tablet', level: 'A2',
        text: `Max: Hi, Kate. You look sad. What's happened?
Kate: I've lost my drawing tablet.
Max: Oh no! Where did you lose it?
Kate: I don't know. I had it on the metro this morning. I was drawing some ideas for the new level. Then I got off at my station and went to a cafe for breakfast.
Max: Have you called the cafe?
Kate: Yes, I called them an hour ago. They looked everywhere, but they haven't found it.
Max: Have you checked your bag? Really carefully?
Kate: Yes, twice. It isn't there. And I've already looked in my car.
Max: Did you have your name on it?
Kate: Yes, I put a sticker with my name and phone number on it last year.
Max: Good. Then somebody can call you. Have you checked your messages?
Kate: No, I haven't. Wait… I've got a new message! It's from the metro. "Hello! A passenger found your tablet on the train this morning and gave it to us. You can take it today."
Max: See? Your sticker has saved the day!
Kate: Yes! I can't believe it. Thank you, Max.
Max: No problem. So, have you had lunch yet?
Kate: No, I haven't eaten anything since breakfast!
Max: Then let's go. I know a great place.`,
        questions: [
          { q: 'Where did Kate have her tablet this morning?', o: ['At home', 'On the metro', 'In the office'], a: 1 },
          { q: 'When did Kate call the cafe?', o: ['An hour ago', 'Last year', 'She hasn\'t called them'], a: 0 },
          { q: 'Who found the tablet?', o: ['Max', 'The cafe', 'A passenger on the train'], a: 2 }
        ]
      },
      {
        id: 't-a2-4-2', title: 'Two studios', level: 'A2',
        text: `Pixel Fox is a small indie studio in Moscow. It opened in 2018. Since then, the team has made four games and has won two awards.
Their first game came out seven years ago. It was a little puzzle game about a fox in the city, and it sold very well. Last year they released "Night Train", a horror game, and players loved it. This year the team has released two big updates for it, and they haven't finished the third one yet. So far, over a million people have played their games.
Old Star was a different story. It was a famous studio in the nineties. It made eight games, and three of them won big prizes. People played them for years. But in 2005 the studio had money problems, and it closed. Its founder, Paul Grey, wrote a book about those years. He died in 2015.
I've played all four Pixel Fox games, and I've finished "Night Train" twice. I've never played an Old Star game, but my dad played them all when he was young. He still talks about them. Last weekend he found an old disc in a box and showed it to me. I haven't tried it yet, but I really want to!`,
        questions: [
          { q: 'When did Pixel Fox open?', o: ['In 2005', 'In 2018', 'Seven years ago'], a: 1 },
          { q: 'How many updates has Pixel Fox released this year?', o: ['One', 'Two', 'Three'], a: 1 },
          { q: 'What happened to Old Star in 2005?', o: ['It won a prize', 'It released a new game', 'It closed'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I ___ Anna yesterday.', o: ['have seen', 'saw', 'have saw'], a: 1, why: 'yesterday — законченное время → Past Simple.' },
      { t: 'choice', q: 'When ___ this game?', o: ['have you bought', 'did you buy', 'you bought'], a: 1, why: 'When…? спрашивает о точке в прошлом → did + buy.' },
      { t: 'choice', q: '___ Max? I need him right now.', o: ['Have you seen', 'Did you see', 'Do you see'], a: 0, why: 'Важно, где он сейчас, времени нет → Present Perfect.' },
      { t: 'choice', q: 'Shakespeare ___ a lot of plays.', o: ['has written', 'wrote', 'writes'], a: 1, why: 'Его жизнь закончилась — время закрыто → Past Simple.' },
      { t: 'choice', q: 'We ___ in Kazan for five years, but now we live in Moscow.', o: ['have lived', 'lived', 'live'], a: 1, why: 'Жизнь в Казани закончилась → Past Simple, даже с for.' },
      { t: 'choice', q: 'Kathy travels a lot. She ___ twenty countries.', o: ['visited', 'has visited', 'visits'], a: 1, why: 'Опыт за жизнь до сих пор, без даты → Present Perfect.' },
      { t: 'choice', q: 'I ___ my room in the morning, and then I went to the gym.', o: ['have cleaned', 'cleaned', 'was cleaned'], a: 1, why: 'Рассказ по порядку о прошлом (then I went) → Past Simple.' },
      { t: 'choice', q: 'Look! Somebody ___ the window!', o: ['broke yesterday', 'has broken', 'breaks'], a: 1, why: 'Новость, результат виден сейчас → Present Perfect.' },
      { t: 'gap', q: 'What time ___ you get up today? You look so tired.', a: ['did'], why: 'What time…? — вопрос о точке → Past Simple: did.' },
      { t: 'gap', q: 'Sam ___ my message yet. (not/answer)', a: ['hasn\'t answered', 'has not answered'], why: 'yet — «ещё не», жду до сих пор → Present Perfect.' },
      { t: 'gap', q: 'I ___ this film. Let\'s watch something else. (already/see)', a: ['have already seen'], why: 'already → have + already + seen.' },
      { t: 'gap', q: 'The stream ___ an hour ago. (start)', a: ['started', 'began'], why: 'ago — законченная точка → Past Simple.' },
      { t: 'gap', q: 'Where ___ you last night? I called you three times.', a: ['were'], why: 'last night — законченное время → were, а не have been.' },
      { t: 'gap', q: '— Have you finished the design? — Yes, I ___ it at five o\'clock. (finish)', a: ['finished'], why: 'at five o\'clock — точное время → Past Simple.' },
      { t: 'order', a: 'Where did you lose your phone', ru: 'Где ты потерял телефон?' },
      { t: 'order', a: 'I have never played this game', ru: 'Я никогда не играл в эту игру.' },
      { t: 'tr', q: 'Я уже видел этот сериал.', a: ['i have already seen this series', 'i\'ve already seen this series', 'i have already watched this series', 'i\'ve already watched this series', 'i have seen this series already', 'i\'ve seen this series already', 'i have watched this series already', 'i\'ve watched this series already'] },
      { t: 'tr', q: 'Я видел Кейт в субботу.', a: ['i saw kate on saturday'] },
      { t: 'tr', q: 'Когда ты купил этот ноутбук?', a: ['when did you buy this laptop'] },
      { t: 'listen', say: 'I\'ve lost my phone!', a: ['i\'ve lost my phone', 'i have lost my phone'] }
    ],
    test: [
      { t: 'choice', q: 'Steve\'s cat ___ two years ago.', o: ['has died', 'died', 'is dead'], a: 1, why: 'two years ago — точка в прошлом → Past Simple.' },
      { t: 'choice', q: '___ your homework yet?', o: ['Did you finish', 'Have you finished', 'Do you finish'], a: 1, why: 'yet — «уже / ещё не», время до сих пор → Present Perfect.' },
      { t: 'choice', q: 'Ben ___ home ten minutes ago.', o: ['has gone', 'went', 'has been'], a: 1, why: 'ten minutes ago — законченная точка → went.' },
      { t: 'choice', q: 'Where ___ on Sunday afternoon?', o: ['have you been', 'were you', 'has you been'], a: 1, why: 'on Sunday afternoon — законченное время → were you.' },
      { t: 'choice', q: 'This studio ___ five games, and now they are working on the sixth.', o: ['made', 'has made', 'makes'], a: 1, why: 'Студия работает, её время не закончилось → has made.' },
      { t: 'choice', q: 'I\'ve had three coffees today, but yesterday I ___ only one.', o: ['have had', 'had', 'have'], a: 1, why: 'yesterday закончился → Past Simple; today идёт → Present Perfect.' },
      { t: 'choice', q: '— Have you ever eaten sushi? — Yes, I ___ it in Tokyo two years ago.', o: ['have eaten', 'ate', 'have ate'], a: 1, why: 'Подробность с two years ago → Past Simple.' },
      { t: 'gap', q: 'We ___ a holiday last year. (not/have)', a: ['didn\'t have', 'did not have'], why: 'last year — законченное время → didn\'t have.' },
      { t: 'gap', q: 'I ___ at this studio since 2022. (work)', a: ['have worked', 'have been working'], why: 'since 2022 — до сих пор → Present Perfect.' },
      { t: 'gap', q: 'Max ___ his first game in 2019. (make)', a: ['made'], why: 'in 2019 — законченное время → Past Simple.' },
      { t: 'gap', q: 'This month the team ___ two updates. (release)', a: ['has released', 'have released'], why: 'this month ещё идёт → Present Perfect.' },
      { t: 'gap', q: '— Have you ever spoken to her? — Yes, I ___ to her at a party last week. (speak)', a: ['spoke'], why: 'last week — подробность с датой → Past Simple: spoke.' }
    ]
  }
);
