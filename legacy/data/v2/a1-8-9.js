// Уроки A1 (новая версия): a1-8 — was / were (to be в прошлом), a1-9 — Past Simple (утверждение, правильные и неправильные глаголы).
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── UNIT 8 ─────────────────────────────
    {
      id: 'a1-8', level: 'A1', num: 8, track: 'main',
      books: { red: [10] },
      title: 'I was, you were — to be в прошлом',
      summary: 'Как сказать «я был дома», «было весело», «мне было скучно» и спросить «где ты был вчера?»: was / were, wasn’t / weren’t, yesterday, last week, ago.',
      grammar: [
        {
          title: '1. Главная идея: «был» по-английски — was или were',
          html: `
<div class="g-idea">Вы уже знаете: в английском нельзя без глагола. «Я дома» — <b>I am at home</b>. В прошлом правило то же, только вместо am / is / are ставим <b>was</b> или <b>were</b> («был, была, было, были»).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>был</b> дома.</p><p>Фильм <b>был</b> скучный.</p><p>Мы <b>были</b> на работе.</p><p>Вчера <span class="g-gap">_</span> холодно.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>was</b> at home.</span></p><p><span class="say">The film <b>was</b> boring.</span></p><p><span class="say">We <b>were</b> at work.</span></p><p><span class="say">It <b>was</b> cold yesterday.</span></p></div>
</div>
<p>Посмотрите на последний пример. По-русски «вчера холодно» звучит почти без глагола. По-английски глагол и слово <b>it</b> обязательны: <b>It was cold</b>.</p>
<div class="g-tip">Русское «было» в начале фразы («было весело», «было поздно», «было холодно») почти всегда = <b>It was</b>: <span class="say">It was fun.</span> <span class="say">It was late.</span> <span class="say">It was cold.</span></div>
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
<tr><td>you / we / they <b>are</b></td><td>you / we / they <b class="g-v">were</b></td><td><span class="say">They were in the park.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">am, is</span><span class="g-plus">→</span><span class="g-part g-v">was</span><span class="g-sep">·</span><span class="g-part">are</span><span class="g-plus">→</span><span class="g-part g-v">were</span></div>
<ul class="g-list">
<li><span class="say">The party was nice.</span> — Вечеринка была классная.</li>
<li><span class="say">My friends were at the party.</span> — Мои друзья были на вечеринке.</li>
<li><span class="say">You were good in the game!</span> — Ты хорошо играл! <span class="muted">(дословно: был хорош в игре)</span></li>
<li><span class="say">The shoes were expensive.</span> — Ботинки были дорогие.</li>
</ul>
<p>Сравните сейчас и тогда:</p>
<ul class="g-list">
<li><span class="say">Today I am fine, but yesterday I was tired.</span> — Сегодня я в порядке, а вчера я устал.</li>
<li><span class="say">Last year my cat was two. Now it is three.</span> — В прошлом году коту было два. Сейчас ему три.</li>
</ul>
<div class="g-bad">You was at home.</div>
<div class="g-good">You were at home. <span class="muted">— с you всегда were, даже если «ты» один</span></div>
<div class="mini" data-q="Tom and Anna ___ at the cinema yesterday." data-o="was|were|are" data-a="1" data-why="Tom and Anna — двое (они = they) → were."></div>
<div class="mini" data-q="Last year my dog ___ one. Now it is two." data-o="was|were|is" data-a="0" data-why="Last year — прошлое; my dog = it → was."></div>`
        },
        {
          title: '3. «Мне было…»: возраст, чувства, погода',
          html: `
<div class="g-idea">По-русски говорим «<b>мне</b> было скучно», «<b>мне</b> было десять». В английском нет такого «мне»: начинаем с <b>I</b> и ставим <b>was</b>. Буквально: «Я был скучающий», «Я был десять».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Мне было скучно.</p><p>Мне было десять лет.</p><p>Мне было страшно.</p><p>Ей было грустно.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>was</b> bored.</span></p><p><span class="say">I <b>was</b> ten.</span></p><p><span class="say">I <b>was</b> scared.</span></p><p><span class="say">She <b>was</b> sad.</span></p></div>
</div>
<div class="g-bad">To me was boring. / I had ten years.</div>
<div class="g-good">I was bored. / I was ten.</div>
<ul class="g-list">
<li><span class="say">When I was ten, I was scared of dogs.</span> — Когда мне было десять, я боялся собак.</li>
<li><span class="say">We were hungry and tired.</span> — Мы были голодные и уставшие.</li>
<li><span class="say">Were you angry?</span> — Ты злился?</li>
</ul>
<div class="g-tip">Про чувства два похожих слова: <b>bored</b> — мне скучно (так чувствую <b>я</b>), <b>boring</b> — скучный (такой <b>фильм, вечер, игра</b>). <span class="say">The film was boring. I was bored.</span> — Фильм был скучный. Мне было скучно.</div>
<div class="mini" data-q="Мне было грустно." data-o="To me was sad.|I was sad.|It was sad me." data-a="1" data-why="Без «мне»: I + was + sad."></div>
<div class="mini" data-q="I was at home all day. I was ___." data-o="boring|bored" data-a="1" data-why="Про свои чувства — bored. Boring — про сам день или фильм."></div>`
        },
        {
          title: '4. Отрицание: wasn’t, weren’t',
          html: `
<div class="g-idea">Чтобы сказать «не был», просто добавьте <b>not</b> после was / were. Больше ничего не нужно.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">was not / were not</span><span class="g-plus">+</span><span class="g-part">остальное</span></div>
<table>
<tr><th>Полная форма</th><th>Коротко</th><th>Пример</th></tr>
<tr><td>was not</td><td><b>wasn't</b></td><td><span class="say">I wasn't at work.</span></td></tr>
<tr><td>were not</td><td><b>weren't</b></td><td><span class="say">They weren't there.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">The shop wasn't open.</span> — Магазин был закрыт. <span class="muted">(не был открыт)</span></li>
<li><span class="say">We weren't at home last night.</span> — Нас не было дома вчера вечером.</li>
<li><span class="say">The film wasn't boring.</span> — Фильм был нескучный.</li>
<li><span class="say">The shoes weren't expensive.</span> — Ботинки были недорогие.</li>
</ul>
<div class="g-bad">I not was at home.</div>
<div class="g-good">I wasn't at home. <span class="muted">— not ставим после was, а не перед ним</span></div>
<div class="g-tip">Помощник <b>do / does</b>, как в Present Simple, здесь не нужен. В отрицаниях и вопросах с am / is / are / was / were он не ставится.</div>
<div class="mini" data-q="Её не было дома." data-o="She not was at home.|She wasn't at home.|She weren't at home." data-a="1" data-why="she → was, отрицание → wasn't."></div>`
        },
        {
          title: '5. Вопрос: was / were — в начало',
          html: `
<div class="g-idea">В вопросе was / were меняется местами с «кто». По-русски мы спрашиваем голосом («Ты был дома?»), а по-английски — порядком слов.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты был дома?</p><p>Было весело?</p><p>Они были дорогие?</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Were</b> you at home?</span></p><p><span class="say"><b>Was</b> it fun?</span></p><p><span class="say"><b>Were</b> they expensive?</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">Was / Were</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">остальное</span><span class="g-plus">?</span></div>
<p>Коротко ответить — повторите was / were:</p>
<table>
<tr><th>Вопрос</th><th>Да</th><th>Нет</th></tr>
<tr><td><span class="say">Were you busy?</span></td><td>Yes, I was.</td><td>No, I wasn't.</td></tr>
<tr><td><span class="say">Was the museum open?</span></td><td>Yes, it was.</td><td>No, it wasn't.</td></tr>
<tr><td><span class="say">Were they angry?</span></td><td>Yes, they were.</td><td>No, they weren't.</td></tr>
</table>
<div class="g-bad">You were at home? <span class="muted">— порядок как в утверждении</span></div>
<div class="g-good">Were you at home?</div>
<div class="g-bad">Was you tired?</div>
<div class="g-good">Were you tired? <span class="muted">— you всегда с were</span></div>
<div class="mini" data-q="___ the shop open yesterday?" data-o="Is|Was|Were" data-a="1" data-why="the shop — одно (it), yesterday — прошлое → Was."></div>
<div class="mini" data-q="Were they at school? — No, they ___." data-o="wasn't|weren't|aren't" data-a="1" data-why="В ответе повторяем глагол вопроса: were → weren't."></div>`
        },
        {
          title: '6. Где? Как? Почему? — вопросительные слова и «родился»',
          html: `
<p>Вопросительное слово ставим <b>самым первым</b>, дальше — как в обычном вопросе.</p>
<div class="g-formula"><span class="g-part">Where / How / Why…</span><span class="g-plus">+</span><span class="g-part g-v">was / were</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">?</span></div>
<ul class="g-list">
<li><span class="say">Where were you yesterday?</span> — Где ты был вчера?</li>
<li><span class="say">How was the party?</span> — Как прошла вечеринка?</li>
<li><span class="say">How was your weekend?</span> — Как прошли выходные?</li>
<li><span class="say">Why were you late?</span> — Почему ты опоздал? <span class="muted">(why — почему)</span></li>
<li><span class="say">Who was there?</span> — Кто там был? <span class="muted">(who — кто)</span></li>
<li><span class="say">What was the answer?</span> — Какой был ответ?</li>
</ul>
<div class="g-tip"><b>How was…?</b> — самый полезный вопрос: «Как прошло…?» Про фильм, поездку, игру, выходные: <span class="say">How was the trip?</span></div>
<p><b>Родился</b> по-английски — это «был рождён»: <b>was / were born</b>.</p>
<ul class="g-list">
<li><span class="say">I was born in 1995.</span> — Я родился в 1995 году.</li>
<li><span class="say">Where were you born?</span> — Где ты родился?</li>
<li><span class="say">My friends were born in Kazan.</span> — Мои друзья родились в Казани.</li>
</ul>
<div class="g-bad">I born in Kazan.</div>
<div class="g-good">I was born in Kazan.</div>
<div class="g-bad">Where you were yesterday?</div>
<div class="g-good">Where were you yesterday?</div>
<div class="mini" data-q="Где ты родился?" data-o="Where you were born?|Where were you born?|Where you born?" data-a="1" data-why="Вопросительное слово + were + you + born."></div>`
        },
        {
          title: '7. Когда это было: yesterday, last, ago',
          html: `
<p>Эти слова сразу показывают: речь о прошлом, значит, нужен was / were.</p>
<table>
<tr><th>Слово</th><th>Значит</th><th>Примеры</th></tr>
<tr><td><b>yesterday</b></td><td>вчера</td><td><span class="say">yesterday morning</span>, <span class="say">yesterday evening</span></td></tr>
<tr><td><b>last</b></td><td>прошлый</td><td><span class="say">last week</span>, <span class="say">last month</span>, <span class="say">last Saturday</span></td></tr>
<tr><td><b>ago</b></td><td>… назад</td><td><span class="say">two days ago</span>, <span class="say">an hour ago</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I was at the office yesterday.</span> — Вчера я был в офисе.</li>
<li><span class="say">We were in Spain last year.</span> — В прошлом году мы были в Испании.</li>
<li><span class="say">She was here an hour ago.</span> — Она была здесь час назад.</li>
<li><span class="say">Where were you at eight o'clock this morning?</span> — Где ты был сегодня в восемь утра?</li>
</ul>
<div class="g-steps"><div class="g-h">Три правила</div><ol>
<li><b>ago</b> всегда <b>после</b> срока: two days ago.</li>
<li>Перед <b>last</b> не нужен предлог: last week, а не «in last week».</li>
<li><b>last night</b> — это «вчера вечером / прошлой ночью», а не «последняя ночь».</li>
</ol></div>
<div class="g-bad">I was there ago two days.</div>
<div class="g-good">I was there two days ago.</div>
<div class="g-bad">We were in Rome in last year.</div>
<div class="g-good">We were in Rome last year.</div>
<div class="mini" data-q="Три года назад:" data-o="ago three years|three years ago|three years last" data-a="1" data-why="ago ставится после срока."></div>
<div class="mini" data-q="Were you at home ___? (вчера вечером)" data-o="last night|yesterday ago|in last evening" data-a="0" data-why="«Вчера вечером» — last night, без предлога."></div>`
        },
        {
          title: '8. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">Yesterday I at home.</div><div class="g-good">Yesterday I <b>was</b> at home.</div>
<div class="g-bad">They was at the party.</div><div class="g-good">They <b>were</b> at the party.</div>
<div class="g-bad">I not was busy.</div><div class="g-good">I <b>wasn't</b> busy.</div>
<div class="g-bad">You were at work?</div><div class="g-good"><b>Were you</b> at work?</div>
<div class="g-bad">I had ten years.</div><div class="g-good">I <b>was</b> ten.</div>
<div class="g-bad">I born in 1990.</div><div class="g-good">I <b>was born</b> in 1990.</div>
<div class="g-bad">I was boring at home.</div><div class="g-good">I was <b>bored</b> at home.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I / he / she / it was</b> · <b>you / we / they were</b> · не — <b>wasn't / weren't</b> · вопрос — <b>Was / Were</b> в начало, без do.</div>`
        }
      ],
      words: [
        ['was', 'был, была, было (I, he, she, it)', 'I was at home.', 'Я был дома.'],
        ['were', 'были; был (you, we, they)', 'Where were you?', 'Где ты был?'],
        ['yesterday', 'вчера', 'It was cold yesterday.', 'Вчера было холодно.'],
        ['last', 'прошлый; последний', 'We were in Rome last year.', 'Мы были в Риме в прошлом году.'],
        ['last night', 'вчера вечером, прошлой ночью', 'Were you at home last night?', 'Ты был дома вчера вечером?'],
        ['ago', 'назад', 'I was there two days ago.', 'Я был там два дня назад.'],
        ['hour', 'час', 'She was here an hour ago.', 'Она была здесь час назад.'],
        ['month', 'месяц', 'Last month I was very busy.', 'В прошлом месяце я был очень занят.'],
        ['year', 'год', 'A year ago I was a student.', 'Год назад я был студентом.'],
        ['born', 'рождённый (was born — родился)', 'I was born in Kazan.', 'Я родился в Казани.'],
        ['then', 'тогда, потом', 'I was ten then.', 'Мне тогда было десять.'],
        ['party', 'вечеринка', 'How was the party?', 'Как прошла вечеринка?'],
        ['cinema', 'кинотеатр', 'We were at the cinema.', 'Мы были в кино.'],
        ['park', 'парк', 'The dogs were in the park.', 'Собаки были в парке.'],
        ['beach', 'пляж', 'The beach was very nice.', 'Пляж был очень хороший.'],
        ['museum', 'музей', 'The museum was closed.', 'Музей был закрыт.'],
        ['shop', 'магазин', 'Was the shop open?', 'Магазин был открыт?'],
        ['school', 'школа', 'We were at school together.', 'Мы вместе учились в школе.'],
        ['trip', 'поездка', 'The trip was fun.', 'Поездка была весёлой.'],
        ['there', 'там', 'Were you there?', 'Ты был там?'],
        ['open', 'открытый', 'The door was open.', 'Дверь была открыта.'],
        ['closed', 'закрытый', 'The shop was closed.', 'Магазин был закрыт.'],
        ['bored', 'скучающий (мне скучно)', 'I was bored at home.', 'Мне было скучно дома.'],
        ['boring', 'скучный', 'The film was boring.', 'Фильм был скучный.'],
        ['excited', 'взволнованный (в радостном ожидании)', 'We were so excited!', 'Мы были в таком восторге!'],
        ['angry', 'злой, сердитый', 'Was she angry?', 'Она злилась?'],
        ['sad', 'грустный', 'He was sad yesterday.', 'Вчера ему было грустно.'],
        ['scared', 'испуганный (scared of — боится)', 'I was scared of the dog.', 'Я боялся этой собаки.'],
        ['busy', 'занятой', 'Sorry, I was busy.', 'Извини, я был занят.'],
        ['fun', 'весело; веселье', 'It was so much fun!', 'Было очень весело!'],
        ['weather', 'погода', 'The weather was terrible.', 'Погода была ужасная.'],
        ['terrible', 'ужасный', 'The film was terrible.', 'Фильм был ужасный.']
      ],
      texts: [
        {
          id: 't-a1-8-1', title: 'Where were you?', level: 'A1',
          text: `Kate: Hi, Max! Where were you last night? You weren't in the game.
Max: Sorry! I was at a party.
Kate: Oh, nice! How was it?
Max: It was fun! The music was good, and the people were very nice.
Kate: Were Tom and Lisa there?
Max: Tom was there, but Lisa wasn't. She was at work.
Kate: At work? At ten o'clock in the evening?
Max: Yes, she was very busy. She was at the office with her laptop. She was tired and a bit angry.
Kate: Oh no! Is she OK now?
Max: Yes, she's fine now. And you? Were you at home?
Kate: Yes, I was. I was bored. The game wasn't fun without you and Tom!
Max: Sorry, Kate! Can we play this evening?
Kate: Sure! At eight o'clock.`,
          questions: [
            { q: 'Where was Max last night?', o: ['at home', 'at a party', 'at work'], a: 1 },
            { q: 'Why wasn\'t Lisa at the party?', o: ['She was at work.', 'She was bored.', 'She was at the cinema.'], a: 0 },
            { q: 'How was Kate last night?', o: ['She was excited.', 'She was bored.', 'She was scared.'], a: 1 }
          ]
        },
        {
          id: 't-a1-8-2', title: 'A year ago', level: 'A1',
          text: `A year ago I was in Spain with my friend Anna. We were there for a week.
The weather was hot and sunny. The beach was very nice, and the water was warm. We were on the beach every morning.
Our flat was small, but it was near the beach. The kitchen was small too, but the bedroom was big.
The cafés and restaurants weren't expensive, and the coffee was very good.
One day was terrible. It was cold, and the museum was closed. We were sad.
But Saturday was fun. The music on the beach was very good, and we were so excited!
Last month I was at the office every day. I was busy and tired. But Spain was so much fun, and now I am happy.`,
          questions: [
            { q: 'How was the weather in Spain?', o: ['cold', 'hot and sunny', 'terrible every day'], a: 1 },
            { q: 'Where was the flat?', o: ['near the beach', 'near the museum', 'near the station'], a: 0 },
            { q: 'Why were they sad one day?', o: ['The flat was small.', 'The museum was closed.', 'The cafés were expensive.'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ at home yesterday.', o: ['was', 'were', 'am'], a: 0, why: 'I → was; yesterday — прошлое.' },
        { t: 'choice', q: 'They ___ at the cinema last night.', o: ['was', 'were', 'are'], a: 1, why: 'they → were; last night — прошлое.' },
        { t: 'choice', q: '___ you tired yesterday?', o: ['Was', 'Were', 'Are'], a: 1, why: 'you всегда с were; yesterday — прошлое.' },
        { t: 'choice', q: 'She ___ at work last week. (не была)', o: ['wasn\'t', 'weren\'t', 'isn\'t'], a: 0, why: 'she → was, отрицание → wasn\'t.' },
        { t: 'choice', q: 'two days ___', o: ['last', 'ago', 'yesterday'], a: 1, why: '«… назад» — ago, ставится после срока.' },
        { t: 'choice', q: 'The film was ___. I was ___.', o: ['bored / boring', 'boring / bored', 'boring / boring'], a: 1, why: 'Фильм какой — boring; мои чувства — bored.' },
        { t: 'choice', q: 'Мне было десять.', o: ['I had ten years.', 'I was ten.', 'To me was ten.'], a: 1, why: 'Возраст — через be: I was ten.' },
        { t: 'choice', q: 'Where ___ Anna yesterday?', o: ['was', 'were', 'is'], a: 0, why: 'Anna — одна (she) → was; yesterday — прошлое.' },
        { t: 'gap', q: 'Was it fun? — Yes, it ___.', a: ['was'], why: 'В коротком ответе повторяем глагол вопроса: was.' },
        { t: 'gap', q: 'Were they at school? — No, they ___.', a: ['weren\'t', 'were not'], why: 'Вопрос с were → ответ No, they weren\'t.' },
        { t: 'gap', q: 'We were in Paris ___ year. (в прошлом)', a: ['last'], why: '«В прошлом году» — last year, без предлога.' },
        { t: 'gap', q: 'Where ___ you born?', a: ['were'], why: '«Родился» — was / were born; с you — were.' },
        { t: 'gap', q: 'I ___ scared of the dog. (был)', a: ['was'], why: 'I → was.' },
        { t: 'gap', q: 'The shops ___ open on Sunday. (не были)', a: ['weren\'t', 'were not'], why: 'The shops — много (they) → were → weren\'t.' },
        { t: 'order', a: 'Where were you yesterday', ru: 'Где ты был вчера?' },
        { t: 'order', a: 'The museum was closed', ru: 'Музей был закрыт.' },
        { t: 'tr', q: 'Я был занят.', a: ['i was busy'] },
        { t: 'tr', q: 'Как прошла вечеринка?', a: ['how was the party', 'how did the party go'] },
        { t: 'tr', q: 'Час назад она была здесь.', a: ['she was here an hour ago', 'an hour ago she was here', 'one hour ago she was here', 'she was here one hour ago'] },
        { t: 'listen', say: 'It was so much fun', a: ['it was so much fun'] }
      ],
      test: [
        { t: 'choice', q: 'My friends ___ at the party last Saturday.', o: ['was', 'were', 'are'], a: 1, why: 'My friends — много (they) → were; last Saturday — прошлое.' },
        { t: 'choice', q: 'Was the shop open? — No, it ___.', o: ['wasn\'t', 'weren\'t', 'isn\'t'], a: 0, why: 'Ответ повторяет глагол вопроса: was → wasn\'t.' },
        { t: 'choice', q: 'Вчера вечером:', o: ['last night', 'yesterday ago', 'in last evening'], a: 0, why: '«Вчера вечером» — last night, без предлога.' },
        { t: 'choice', q: 'Было холодно.', o: ['Was cold.', 'It was cold.', 'It cold.'], a: 1, why: 'Погода — через It + was.' },
        { t: 'choice', q: 'Where ___ born?', o: ['you were', 'were you', 'was you'], a: 1, why: 'В вопросе were идёт перед you; с you всегда were.' },
        { t: 'choice', q: 'Today I am fine, but yesterday I ___ tired.', o: ['am', 'was', 'were'], a: 1, why: 'yesterday — прошлое; I → was.' },
        { t: 'choice', q: 'I was at home all evening. It was ___.', o: ['bored', 'boring', 'excited'], a: 1, why: 'Про сам вечер (it) — boring; bored — про чувства человека.' },
        { t: 'gap', q: 'He ___ angry yesterday. (не был)', a: ['wasn\'t', 'was not'], why: 'he → was, отрицание → wasn\'t.' },
        { t: 'gap', q: 'I was in London three years ___.', a: ['ago'], why: '«Три года назад» — three years ago.' },
        { t: 'gap', q: '___ the weather good last week? (была)', a: ['was', 'Was'], why: 'the weather = it → Was в начале вопроса.' },
        { t: 'gap', q: 'Were you at home last night? — Yes, I ___.', a: ['was'], why: 'Вопрос с were you → ответ Yes, I was.' },
        { t: 'gap', q: '___ were you late? — Sorry, I was busy. (почему)', a: ['why', 'Why'], why: '«Почему» — why, стоит перед were.' }
      ]
    },

    // ───────────────────────────── UNIT 9 ─────────────────────────────
    {
      id: 'a1-9', level: 'A1', num: 9, track: 'main',
      books: { red: [11, 24] },
      title: 'I played, I went — Past Simple',
      summary: 'Как рассказать, что было вчера: правильные глаголы на -ed, как их писать и произносить, и самые частые неправильные глаголы.',
      grammar: [
        {
          title: '1. Главная идея: одна форма для всех',
          html: `
<div class="g-idea"><b>Past Simple</b> (простое прошедшее) — это обычное русское «сделал, играл, пошёл». Действие было и закончилось. И хорошая новость: форма глагола <b>одна для всех</b> — никаких окончаний по лицам и родам.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я игр<b>ал</b>.</p><p>Она игр<b>ала</b>.</p><p>Мы игр<b>али</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>played</b>.</span></p><p><span class="say">She <b>played</b>.</span></p><p><span class="say">We <b>played</b>.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">глагол в прошедшем</span><span class="g-plus">+</span><span class="g-part">остальное</span></div>
<p>Сравните с Present Simple:</p>
<table>
<tr><th>Обычно (сейчас)</th><th>Вчера (прошлое)</th></tr>
<tr><td><span class="say">I work every day.</span></td><td><span class="say">I worked yesterday.</span></td></tr>
<tr><td><span class="say">She plays tennis on Sundays.</span></td><td><span class="say">She played tennis last Sunday.</span></td></tr>
<tr><td><span class="say">We often go to the park.</span></td><td><span class="say">We went to the park yesterday.</span></td></tr>
</table>
<div class="g-tip">Помните -s у he / she в настоящем (she play<b>s</b>)? В прошедшем его <b>нет</b>: <b>she played</b>. Прошлое проще настоящего!</div>
<div class="mini" data-q="Вчера она работала." data-o="She workeds yesterday.|She worked yesterday.|She works yesterday." data-a="1" data-why="В прошедшем форма одна для всех: worked. Никакого -s."></div>`
        },
        {
          title: '2. Правильные глаголы: добавляем -ed',
          html: `
<div class="g-idea">У большинства глаголов прошедшее время делается просто: в конец добавляем <b>-ed</b>. Такие глаголы называют <b>правильными</b>.</div>
<ul class="g-list">
<li>work → <span class="say">worked</span> — работал</li>
<li>watch → <span class="say">watched</span> — смотрел</li>
<li>start → <span class="say">started</span> — начал</li>
<li>listen → <span class="say">listened</span> — слушал</li>
</ul>
<p>Есть четыре маленьких правила написания:</p>
<table>
<tr><th>Если слово…</th><th>Делаем</th><th>Пример</th></tr>
<tr><td>кончается на <b>-e</b></td><td>+ <b>d</b></td><td>like → <span class="say">liked</span>, dance → <span class="say">danced</span></td></tr>
<tr><td>согласная + <b>y</b></td><td>y → <b>ied</b></td><td>study → <span class="say">studied</span>, try → <span class="say">tried</span></td></tr>
<tr><td>гласная + <b>y</b></td><td>просто + <b>ed</b></td><td>play → <span class="say">played</span>, stay → <span class="say">stayed</span></td></tr>
<tr><td>короткое, «согл.-гласн.-согл.»</td><td>удваиваем + <b>ed</b></td><td>stop → <span class="say">stopped</span>, plan → <span class="say">planned</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как проверить себя</div><ol>
<li>На конце <b>e</b>? — Добавьте только <b>d</b>: live → lived, decide → decided.</li>
<li>На конце <b>y</b>? Посмотрите на букву перед ней. Согласная (study, try) → <b>ied</b>. Гласная (play, stay) → <b>ed</b>.</li>
<li>Слово из одного слога и кончается на «согласная-гласная-согласная», как stop (остановиться), plan (планировать)? — Удвойте последнюю букву: stopped, planned. (Но work, help — на две согласные: worked, helped.)</li>
<li>Слово длинное, как listen, open? — Не удваиваем: listened, opened.</li>
<li>Всё остальное — просто <b>-ed</b>.</li>
</ol></div>
<div class="g-bad">I studyed English. / The music stoped.</div>
<div class="g-good">I studied English. / The music stopped.</div>
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
<tr><td><b>[d]</b></td><td>после звонких и гласных</td><td><span class="say">played</span>, <span class="say">lived</span>, <span class="say">listened</span></td></tr>
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
<div class="g-idea">Самые частые глаголы (идти, есть, видеть, покупать…) не берут -ed, а меняются по-своему. Их просто запоминаем. Хорошая новость: их немного, и они всё время на слуху — в играх, сериалах, песнях.</div>
<p>Легче учить <b>группами</b> — по тому, как они меняются:</p>
<table>
<tr><th>Как меняется</th><th>Глаголы</th></tr>
<tr><td>совсем новое слово</td><td>go → <span class="say">went</span>, do → <span class="say">did</span>, see → <span class="say">saw</span>, eat → <span class="say">ate</span></td></tr>
<tr><td>меняется гласная</td><td>come → <span class="say">came</span>, give → <span class="say">gave</span>, drink → <span class="say">drank</span>, begin → <span class="say">began</span>, win → <span class="say">won</span>, get → <span class="say">got</span>, write → <span class="say">wrote</span>, swim → <span class="say">swam</span>, sing → <span class="say">sang</span></td></tr>
<tr><td>на конце <b>-t</b></td><td>sleep → <span class="say">slept</span>, meet → <span class="say">met</span>, leave → <span class="say">left</span>, lose → <span class="say">lost</span></td></tr>
<tr><td>на конце <b>-ought / -aught</b></td><td>buy → <span class="say">bought</span>, think → <span class="say">thought</span>, teach → <span class="say">taught</span></td></tr>
<tr><td>на конце <b>-d</b></td><td>have → <span class="say">had</span>, make → <span class="say">made</span>, say → <span class="say">said</span>, find → <span class="say">found</span>, tell → <span class="say">told</span></td></tr>
<tr><td>другие</td><td>take → <span class="say">took</span>, know → <span class="say">knew</span>, speak → <span class="say">spoke</span>, understand → <span class="say">understood</span></td></tr>
</table>
<div class="g-tip"><b>read → read</b>: пишется одинаково, но в прошедшем читается «ред». <span class="say">Yesterday I read a book.</span> А <b>get up → got up</b>: меняется только get. <span class="say">I got up at eight.</span></div>
<ul class="g-list">
<li><span class="say">I bought a new game.</span> — Я купил новую игру.</li>
<li><span class="say">She made coffee for me.</span> — Она сварила мне кофе.</li>
<li><span class="say">We saw a good film.</span> — Мы посмотрели хороший фильм.</li>
<li><span class="say">Tom won the game!</span> — Том выиграл!</li>
<li><span class="say">I lost my phone.</span> — Я потерял телефон.</li>
</ul>
<div class="g-bad">I goed home. / She buyed a laptop.</div>
<div class="g-good">I went home. / She bought a laptop.</div>
<div class="mini" data-q="We ___ at a café last night. (eat)" data-o="eated|ate|eat" data-a="1" data-why="eat — неправильный глагол: eat → ate."></div>
<div class="mini" data-q="I ___ Anna in the park. (meet)" data-o="meeted|met|meet" data-a="1" data-why="meet → met: группа на -t."></div>`
        },
        {
          title: '5. Три формы глагола: какая нужна сейчас',
          html: `
<div class="g-idea">В словарях и таблицах у глагола обычно <b>три формы</b>. Первая — начальная (work, go). Вторая — прошедшее время, <b>Past Simple</b>. Третья понадобится позже, для других времён. Сейчас нам нужна <b>только вторая</b>.</div>
<table>
<tr><th>1 — начальная</th><th>2 — Past Simple</th><th>3 — позже</th></tr>
<tr><td>work</td><td><b class="g-v">worked</b></td><td>worked</td></tr>
<tr><td>make</td><td><b class="g-v">made</b></td><td>made</td></tr>
<tr><td>buy</td><td><b class="g-v">bought</b></td><td>bought</td></tr>
<tr><td>go</td><td><b class="g-v">went</b></td><td>gone</td></tr>
<tr><td>see</td><td><b class="g-v">saw</b></td><td>seen</td></tr>
</table>
<ul class="g-list">
<li>У <b>правильных</b> глаголов 2-я и 3-я формы одинаковые: worked — worked.</li>
<li>У многих <b>неправильных</b> тоже: made — made, bought — bought, found — found.</li>
<li>Но у некоторых разные: went — gone, saw — seen, ate — eaten. Для «вчера» берём <b>вторую</b>.</li>
</ul>
<div class="g-bad">I gone home yesterday. / I seen this film.</div>
<div class="g-good">I went home yesterday. / I saw this film.</div>
<div class="g-tip">Gone и seen часто слышны в песнях и сериалах, но одни, без помощника, они «вчера» не значат. Рассказываете, что было, — берите вторую колонку.</div>
<div class="mini" data-q="Вчера я видел Тома." data-o="I seen Tom yesterday.|I saw Tom yesterday.|I see Tom yesterday." data-a="1" data-why="Для прошлого — вторая форма: see → saw. Seen — третья, она для других времён."></div>`
        },
        {
          title: '6. was или went? «У меня был…» = I had',
          html: `
<div class="g-idea"><b>was / were</b> — это тоже Past Simple, но только от глагола <b>be</b> («быть»). Его ставим, когда говорим <b>какой</b> или <b>где</b>. Когда есть действие — берём сам глагол в прошедшем. Вместе их не ставим.</div>
<table>
<tr><th>Какой? Где?</th><th>Что делал?</th></tr>
<tr><td><span class="say">I was at home.</span></td><td><span class="say">I stayed at home.</span></td></tr>
<tr><td><span class="say">She was in Paris.</span></td><td><span class="say">She went to Paris.</span></td></tr>
<tr><td><span class="say">The game was fun.</span></td><td><span class="say">We played the game.</span></td></tr>
</table>
<div class="g-bad">I was go to the cinema. / I was played games.</div>
<div class="g-good">I went to the cinema. / I played games.</div>
<p>Ещё одна ловушка: русское «<b>у меня был</b>» — это не was, а <b>had</b> (от have — иметь).</p>
<ul class="g-list">
<li><span class="say">I had a good day.</span> — У меня был хороший день.</li>
<li><span class="say">We had breakfast at nine.</span> — Мы позавтракали в девять.</li>
<li><span class="say">She had a lot of work.</span> — У неё было много работы.</li>
</ul>
<div class="g-tip">Русское «я был в кино» можно сказать двумя способами: <span class="say">I was at the cinema.</span> (где был) или <span class="say">I went to the cinema.</span> (куда ходил). А «был + глагол» — никогда.</div>
<div class="mini" data-q="Вчера я смотрел фильм." data-o="I was watch a film yesterday.|I watched a film yesterday.|I was watched a film yesterday." data-a="1" data-why="Есть действие (смотрел) → только watched, без was."></div>
<div class="mini" data-q="У меня был хороший день." data-o="I was a good day.|I had a good day.|To me was a good day." data-a="1" data-why="«У меня был» = I had."></div>`
        },
        {
          title: '7. Рассказываем историю: когда и что потом',
          html: `
<p>Слова-маркеры сразу показывают прошлое. Ставим их в конец или в начало предложения.</p>
<table>
<tr><th>Слово</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>yesterday</b></td><td>вчера</td><td><span class="say">I worked yesterday.</span></td></tr>
<tr><td><b>last</b> week / year</td><td>на прошлой неделе / в прошлом году</td><td><span class="say">We watched it last week.</span></td></tr>
<tr><td>two days <b>ago</b></td><td>два дня назад</td><td><span class="say">I started two years ago.</span></td></tr>
<tr><td><b>in</b> 2020</td><td>в 2020 году</td><td><span class="say">He lived in London in 2020.</span></td></tr>
<tr><td><b>then</b></td><td>потом, затем</td><td><span class="say">Then I went home.</span></td></tr>
</table>
<p>Мини-история — просто глаголы в прошедшем подряд:</p>
<ul class="g-list">
<li><span class="say">I got up at eight and had breakfast.</span> — Я встал в восемь и позавтракал.</li>
<li><span class="say">Then I went to the office.</span> — Потом я пошёл в офис.</li>
<li><span class="say">In the evening I met Anna, and we talked a lot.</span> — Вечером я встретил Анну, и мы много говорили.</li>
</ul>
<div class="g-bad">Yesterday I go to the park.</div>
<div class="g-good">Yesterday I went to the park. <span class="muted">— есть «вчера», значит, глагол в прошедшем</span></div>
<div class="g-tip">Вопросы («Ты ходил?») и отрицания («Я не ходил») в прошедшем — в следующем уроке. Там появится маленький помощник, и всё станет так же просто.</div>
<div class="mini" data-q="I had breakfast, ___ I went to work." data-o="then|ago|last" data-a="0" data-why="«Потом, затем» — then."></div>`
        },
        {
          title: '8. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">Yesterday I play games.</div><div class="g-good">Yesterday I <b>played</b> games.</div>
<div class="g-bad">She goed to work.</div><div class="g-good">She <b>went</b> to work.</div>
<div class="g-bad">He studyed design.</div><div class="g-good">He <b>studied</b> design.</div>
<div class="g-bad">We was watched a film.</div><div class="g-good">We <b>watched</b> a film.</div>
<div class="g-bad">I seen this film last week.</div><div class="g-good">I <b>saw</b> this film last week.</div>
<div class="g-bad">I was a good day.</div><div class="g-good">I <b>had</b> a good day.</div>
<div class="g-bad">worked — «вор-кид»</div><div class="g-good">worked — «воркт»</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Прошедшее — <b>одна форма для всех</b>: правильные + <b>-ed</b> (worked, studied, stopped), неправильные учим наизусть (<b>went, saw, bought</b>), берём вторую форму и не ставим was перед глаголом.</div>`
        }
      ],
      words: [
        ['go — went', 'идти, ехать — пошёл, поехал', 'We went to the cinema.', 'Мы ходили в кино.'],
        ['have — had', 'иметь — имел', 'I had a good day.', 'У меня был хороший день.'],
        ['see — saw', 'видеть — видел', 'I saw a good film.', 'Я посмотрел хороший фильм.'],
        ['get — got', 'получать — получил', 'I got a message from Tom.', 'Я получил сообщение от Тома.'],
        ['make — made', 'делать — сделал', 'She made coffee for me.', 'Она сварила мне кофе.'],
        ['do — did', 'делать — сделал', 'I did a lot of work yesterday.', 'Вчера я сделал много работы.'],
        ['come — came', 'приходить — пришёл', 'He came home late.', 'Он пришёл домой поздно.'],
        ['take — took', 'брать — взял', 'I took my laptop to the café.', 'Я взял ноутбук в кафе.'],
        ['say — said', 'сказать — сказал', 'She said hello.', 'Она поздоровалась.'],
        ['tell — told', 'рассказать — рассказал', 'He told me about the game.', 'Он рассказал мне об игре.'],
        ['eat — ate', 'есть — ел', 'We ate at a café.', 'Мы поели в кафе.'],
        ['drink — drank', 'пить — пил', 'I drank a lot of water.', 'Я выпил много воды.'],
        ['buy — bought', 'покупать — купил', 'I bought a new game.', 'Я купил новую игру.'],
        ['think — thought', 'думать — думал', 'I thought it was a good film.', 'Я думал, это хороший фильм.'],
        ['give — gave', 'давать — дал', 'She gave me a book.', 'Она дала мне книгу.'],
        ['find — found', 'находить — нашёл', 'I found my phone!', 'Я нашёл свой телефон!'],
        ['meet — met', 'встречать — встретил', 'I met Anna in the park.', 'Я встретил Анну в парке.'],
        ['write — wrote', 'писать — написал', 'He wrote a message to Kate.', 'Он написал сообщение Кейт.'],
        ['sleep — slept', 'спать — спал', 'I slept ten hours.', 'Я спал десять часов.'],
        ['leave — left', 'уходить — ушёл', 'She left at six.', 'Она ушла в шесть.'],
        ['begin — began', 'начинать — начал', 'The game began at nine.', 'Игра началась в девять.'],
        ['win — won', 'побеждать — победил', 'Tom won the game!', 'Том выиграл!'],
        ['lose — lost', 'проигрывать, терять — проиграл, потерял', 'I lost my phone.', 'Я потерял телефон.'],
        ['yesterday', 'вчера', 'I worked yesterday.', 'Я работал вчера.'],
        ['last night', 'вчера вечером, прошлой ночью', 'I played last night.', 'Я играл вчера вечером.'],
        ['last week', 'на прошлой неделе', 'We watched a new film last week.', 'На прошлой неделе мы посмотрели новый фильм.'],
        ['ago', 'назад', 'I started two years ago.', 'Я начал два года назад.'],
        ['then', 'потом, затем', 'I had breakfast, then I went to work.', 'Я позавтракал, потом пошёл на работу.'],
        ['stay', 'оставаться', 'We stayed at home.', 'Мы остались дома.'],
        ['decide', 'решать', 'I decided to learn English.', 'Я решил учить английский.'],
        ['try', 'пытаться, пробовать', 'I tried to call you.', 'Я пытался тебе позвонить.'],
        ['word', 'слово', 'I learned ten new words.', 'Я выучил десять новых слов.']
      ],
      texts: [
        {
          id: 't-a1-9-1', title: 'A long Saturday', level: 'A1',
          text: `Last Saturday I got up at ten. I was very tired after a busy week.
I made coffee and had breakfast. Then I played a new game. It was very good!
I played for four hours. I lost a lot, but then I won!
In the evening my friend Max came to my flat. We watched a film and drank tea. The film was boring, so we stopped it and played chess. Max won two games, and I won one.
At eight o'clock we went to the park. We met Anna there. She told us about her trip to Spain. She was there last month, and she loved it.
I came home at ten, read a book and went to sleep.`,
          questions: [
            { q: 'How was the film?', o: ['boring', 'very good', 'terrible and long'], a: 0 },
            { q: 'Who was in the park?', o: ['Tom', 'Anna', 'Lisa'], a: 1 },
            { q: 'When was Max at the flat?', o: ['in the morning', 'in the evening', 'at night'], a: 1 }
          ]
        },
        {
          id: 't-a1-9-2', title: 'How I started English', level: 'A1',
          text: `Two years ago I decided to learn English.
I bought a book and an app for my phone. I studied every evening after work.
It wasn't fun at the start. I understood only a bit, but I tried.
Then I started to play games in English. I saw a lot of new words there. I wrote them in a notebook and learned ten words every day. I listened to English music and watched films in English too.
Last week I talked to a man from Canada in a game. I understood him! We played together for an hour. Then he said, "Your English is good!"
I was so happy. Now I study every day, and I love it.`,
          questions: [
            { q: 'What is the text about?', o: ['learning English', 'a trip to Canada', 'a new phone'], a: 0 },
            { q: 'Ten new words — how often?', o: ['every day', 'every week', 'every month'], a: 0 },
            { q: 'Where was the man from?', o: ['Spain', 'Canada', 'London'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'Yesterday I ___ football.', o: ['play', 'played', 'plays'], a: 1, why: 'yesterday — прошлое: play + ed.' },
        { t: 'choice', q: 'go → прошедшее:', o: ['goed', 'gone', 'went'], a: 2, why: 'go — неправильный: went. Gone — третья форма, для других времён.' },
        { t: 'choice', q: 'study → прошедшее:', o: ['studyed', 'studied', 'studed'], a: 1, why: 'Перед y согласная d → y меняется на ied.' },
        { t: 'choice', q: 'stop → прошедшее:', o: ['stoped', 'stopped', 'stopt'], a: 1, why: 'Короткое слово «согл.-гласн.-согл.» → удваиваем p.' },
        { t: 'choice', q: 'В каком слове -ed читается как [ɪd]?', o: ['worked', 'played', 'wanted'], a: 2, why: 'want кончается на t → появляется слог [ɪd].' },
        { t: 'choice', q: 'She ___ a new phone last week.', o: ['buyed', 'bought', 'buys'], a: 1, why: 'buy — неправильный: bought; last week — прошлое.' },
        { t: 'choice', q: 'Вчера я смотрел фильм.', o: ['I was watch a film yesterday.', 'I watched a film yesterday.', 'I was watched a film yesterday.'], a: 1, why: 'Есть действие → просто watched, без was.' },
        { t: 'choice', q: 'Tom ___ to work every day. Yesterday he ___ at home.', o: ['goes / stayed', 'went / stays', 'go / stayed'], a: 0, why: 'every day → Present Simple (he goes); yesterday → прошедшее (stayed).' },
        { t: 'gap', q: 'I ___ a good film last night. (see)', a: ['saw'], why: 'see — неправильный: saw.' },
        { t: 'gap', q: 'We ___ at a café yesterday. (eat)', a: ['ate'], why: 'eat — неправильный: ate.' },
        { t: 'gap', q: 'He ___ in London in 2020. (live)', a: ['lived'], why: 'live кончается на e → только + d.' },
        { t: 'gap', q: 'Yesterday the game ___ at nine. (start)', a: ['started'], why: 'yesterday — прошлое; start — правильный: + ed.' },
        { t: 'gap', q: 'I met Anna two days ___. (назад)', a: ['ago'], why: '«Назад» — ago, после срока.' },
        { t: 'gap', q: 'She ___ English every evening last year. (study)', a: ['studied'], why: 'study: согласная + y → ied.' },
        { t: 'order', a: 'I went to the cinema with Tom', ru: 'Я ходил в кино с Томом.' },
        { t: 'order', a: 'We stayed at home all day', ru: 'Мы весь день просидели дома.' },
        { t: 'tr', q: 'Я купил новую игру.', a: ['i bought a new game'] },
        { t: 'tr', q: 'У меня был хороший день.', a: ['i had a good day', 'i had a nice day'] },
        { t: 'tr', q: 'Он пришёл домой поздно.', a: ['he came home late', 'he came back home late', 'he got home late'] },
        { t: 'listen', say: 'I got up at ten', a: ['i got up at ten', 'i got up at 10'] }
      ],
      test: [
        { t: 'choice', q: 'take → прошедшее:', o: ['taked', 'took', 'taken'], a: 1, why: 'take — неправильный: took. Taken — третья форма.' },
        { t: 'choice', q: 'Yesterday he ___ me about the game.', o: ['telled', 'told', 'tells'], a: 1, why: 'yesterday — прошлое; tell — неправильный: told.' },
        { t: 'choice', q: 'Вчера она осталась дома.', o: ['She was stay at home yesterday.', 'She stayed at home yesterday.', 'She staied at home yesterday.'], a: 1, why: 'Гласная + y → просто + ed; was перед глаголом не ставим.' },
        { t: 'choice', q: 'В каком слове -ed читается как [t]?', o: ['needed', 'lived', 'watched'], a: 2, why: 'watch кончается на глухой звук ch → -ed звучит [t].' },
        { t: 'choice', q: 'plan → прошедшее:', o: ['planed', 'planned', 'plannd'], a: 1, why: 'Короткое слово «согл.-гласн.-согл.» → удваиваем n.' },
        { t: 'choice', q: 'У нас был хороший вечер.', o: ['We were a good evening.', 'We had a good evening.', 'We was have a good evening.'], a: 1, why: '«У нас был» = we had.' },
        { t: 'gap', q: 'I ___ my phone yesterday. (lose)', a: ['lost'], why: 'lose — неправильный: lost.' },
        { t: 'gap', q: 'Yesterday they ___ a message from Tom. (get)', a: ['got'], why: 'get — неправильный: got.' },
        { t: 'gap', q: 'We ___ the game last night! (win)', a: ['won'], why: 'win — неправильный: won.' },
        { t: 'gap', q: 'I ___ to call you yesterday. (try)', a: ['tried'], why: 'try: согласная + y → ied.' },
        { t: 'gap', q: 'Last year I ___ a lot of books. (read)', a: ['read'], why: 'read — пишется так же, но звучит «ред».' },
        { t: 'gap', q: 'Yesterday she ___ the office at six. (leave)', a: ['left'], why: 'leave — неправильный: left.' }
      ]
    }
  ].forEach(put);
})();
