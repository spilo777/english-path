// Юниты B2 3–4: предлог + -ing, be/get used to, verb + preposition + -ing; no point in, worth, to / for / so that, adjective + to, afraid to / afraid of
COURSE.units.push(
  // ───────────────────────────── UNIT B2-3 ─────────────────────────────
  {
    id: 'b2-3', level: 'B2', num: 3, track: 'main',
    books: { blue: [60, 61, 62] },
    title: 'Предлог + -ing; be/get used to; insist on doing',
    summary: 'Разберём железное правило «после предлога — только -ing» (instead of waiting, without saying a word, by clicking), коварное to-предлог в look forward to и object to, научимся говорить «я привык» и «привыкаю» (be / get used to) и уверенно строить insist on paying, thank you for coming, accuse him of cheating.',
    grammar: [
      {
        title: '1. Главная идея: после предлога глагол — только с -ing',
        html: `
<div class="g-idea">Что вы уже знаете (A2-17 и B1-15): есть сочетания <b>afraid of, good at, interested in</b>, а после enjoy, avoid, finish идёт -ing. Теперь общее правило, которое закрывает сотни случаев: если после <b>любого предлога</b> нужен глагол, он стоит в форме <b>-ing</b>. Никакого to, никакой голой формы.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Спасибо, <span class="g-gap">_</span> что помог.</p><p>Вместо того чтобы спать, я играл.</p><p>Я устал от того, что меня перебивают.</p><p>Он ушёл, не сказав ни слова.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Thanks for <b>helping</b>.</span></p><p><span class="say">Instead of <b>sleeping</b>, I played.</span></p><p><span class="say">I'm tired of <b>being</b> interrupted.</span></p><p><span class="say">He left without <b>saying</b> a word.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">предлог</span><span class="g-sep">·</span><span class="g-part">in, at, of, for, about, with, without, by, before, after, instead of…</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<p>В русском после предлога приходится вставлять «костыль»: <i>от того, что</i>, <i>за то, что</i>, <i>вместо того чтобы</i>. В английском эту работу делает окончание <b>-ing</b>: оно превращает глагол в «действие-существительное», и предлог спокойно к нему цепляется.</p>
<div class="g-tip">Проверка за секунду: предлог стоит прямо перед глаголом? Значит, глагол с <b>-ing</b>. Всегда. Исключений нет — есть только слова, которые <i>выглядят</i> как частица to, а на деле предлог (блок 4).</div>
<div class="mini" data-q="Thank you for ___ me with the layout." data-o="help|to help|helping" data-a="2" data-why="После предлога for глагол только с -ing."></div>`
      },
      {
        title: '2. Прилагательное или существительное + предлог + -ing',
        html: `
<p>Многие устойчивые сочетания заканчиваются предлогом. Если дальше действие — берём -ing.</p>
<table>
<tr><th>Сочетание</th><th>Пример</th></tr>
<tr><td>interested <b>in</b></td><td><span class="say">Are you interested in joining our team?</span></td></tr>
<tr><td>good / bad <b>at</b></td><td><span class="say">I'm bad at remembering names.</span></td></tr>
<tr><td>fed up <b>with</b> / tired <b>of</b></td><td><span class="say">I'm fed up with fixing other people's bugs.</span></td></tr>
<tr><td>keen <b>on</b> / capable <b>of</b></td><td><span class="say">She's capable of finishing it tonight.</span></td></tr>
<tr><td>the advantage / idea <b>of</b></td><td><span class="say">What's the advantage of having two monitors?</span></td></tr>
<tr><td>the reason <b>for</b> / thanks <b>for</b></td><td><span class="say">Thanks for inviting me.</span></td></tr>
<tr><td>How / What <b>about</b></td><td><span class="say">How about ordering sushi?</span></td></tr>
<tr><td><b>instead of</b> · <b>apart from</b></td><td><span class="say">Instead of complaining, let's fix it.</span></td></tr>
<tr><td><b>despite</b> / <b>in spite of</b></td><td><span class="say">Despite feeling ill, he streamed for four hours.</span></td></tr>
</table>
<p><b>Чужой исполнитель.</b> Если действие делает не тот, о ком предложение, ставим человека прямо перед -ing:</p>
<ul class="g-list">
<li><span class="say">I'm fed up with people telling me what to do.</span> — Меня достало, что мне говорят, что делать.</li>
<li><span class="say">Instead of Max doing the icons, let's give them to Lena.</span> — Вместо того чтобы иконки делал Макс, отдадим их Лене.</li>
<li><span class="say">Despite the game being ten years old, it still looks great.</span> — Хотя игре десять лет, она отлично выглядит.</li>
</ul>
<div class="g-bad">Thanks for help me. · Despite of the rain… · I'm good in drawing.</div>
<div class="g-good">Thanks for <b>helping</b> me. · <b>Despite</b> the rain / <b>In spite of</b> the rain… · I'm good <b>at</b> drawing.</div>
<div class="g-tip"><b>despite</b> — одно слово, без of. <b>in spite of</b> — три слова, с of. «despite of» не бывает.</div>
<div class="mini" data-q="How about ___ a break? We've been working for three hours." data-o="to take|taking|take" data-a="1" data-why="How about — предлог about → -ing."></div>
<div class="mini" data-q="___ training every day, he lost the match." data-o="Despite of|In spite|Despite" data-a="2" data-why="despite без of; in spite требует of."></div>`
      },
      {
        title: '3. before, after, by, without + -ing',
        html: `
<p>Четыре предлога особенно часто стоят прямо перед глаголом.</p>
<table>
<tr><th>Предлог</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>before -ing</b></td><td>перед тем как</td><td><span class="say">Save the file before closing it.</span></td></tr>
<tr><td><b>after -ing</b></td><td>после того как</td><td><span class="say">After finishing the course, she got a job.</span></td></tr>
<tr><td><b>by -ing</b></td><td>каким способом, «тем, что»</td><td><span class="say">You can zoom in by pressing Ctrl.</span></td></tr>
<tr><td><b>without -ing</b></td><td>не делая, «не + деепричастие»</td><td><span class="say">He left without saying goodbye.</span></td></tr>
</table>
<p>С before и after можно и полным предложением — смысл тот же: <span class="say">Before I went out, I called Sam.</span> = <span class="say">Before going out, I called Sam.</span></p>
<p><b>by -ing</b> отвечает на вопрос «как? каким образом?». Бывает с not и в пассиве:</p>
<ul class="g-list">
<li><span class="say">I improved my English by watching series without subtitles.</span> — Я подтянул английский, смотря сериалы без субтитров.</li>
<li><span class="say">He broke the build by not testing his code.</span> — Он сломал сборку тем, что не протестировал код.</li>
<li><span class="say">Most crashes are caused by players using old drivers.</span> — Большинство вылетов из-за того, что игроки ставят старые драйверы.</li>
</ul>
<p><b>without -ing</b> — это ваше русское деепричастие с «не»: не глядя, не спросив, не останавливаясь.</p>
<ul class="g-list">
<li><span class="say">She typed the password without looking.</span> — Она набрала пароль, не глядя.</li>
<li><span class="say">I need to work without people disturbing me.</span> = <span class="say">…without being disturbed.</span> — Мне нужно работать, чтобы меня не отвлекали.</li>
<li><span class="say">I have enough bugs of my own without having to fix yours.</span> — У меня своих багов хватает, ещё и твои чинить.</li>
</ul>
<div class="g-bad">After finishing the level, the boss appeared. <span class="muted">— как будто босс прошёл уровень</span></div>
<div class="g-good">After finishing the level, <b>I</b> met the boss. / After I finished the level, the boss appeared.</div>
<div class="g-tip">У before / after / by / without + -ing «исполнитель» — это подлежащее главной части. Если это разные люди или предметы, используйте полное предложение.</div>
<div class="mini" data-q="You can undo the last step ___ Ctrl+Z." data-o="by pressing|with press|by press" data-a="0" data-why="Способ «каким образом» → by + -ing."></div>
<div class="mini" data-q="He signed the contract ___ it." data-o="without read|without reading|not reading" data-a="1" data-why="«Не прочитав» → without + -ing."></div>`
      },
      {
        title: '4. Коварное to: когда to — предлог',
        html: `
<div class="g-idea">Обычно <b>to</b> — частица перед глаголом: want to go, decide to buy. Но иногда to — это <b>предлог</b>, как in или for. И тогда после него — <b>-ing</b>.</div>
<table>
<tr><th>to — предлог</th><th>Пример</th></tr>
<tr><td>look forward <b>to</b></td><td><span class="say">I'm looking forward to seeing you.</span></td></tr>
<tr><td>prefer X <b>to</b> Y</td><td><span class="say">I prefer drawing to writing.</span></td></tr>
<tr><td>object <b>to</b></td><td><span class="say">I object to working on weekends.</span></td></tr>
<tr><td>be / get used <b>to</b></td><td><span class="say">I'm used to working at night.</span></td></tr>
<tr><td>when it comes <b>to</b></td><td><span class="say">When it comes to choosing fonts, she's the best.</span></td></tr>
<tr><td>be committed <b>to</b></td><td><span class="say">We're committed to making the game accessible.</span></td></tr>
<tr><td>in addition <b>to</b></td><td><span class="say">In addition to designing, she writes code.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как понять, что to — предлог</div><ol>
<li>Поставьте после to слово <b>it</b> или существительное.</li>
<li>Звучит нормально (<i>I'm looking forward to <b>it</b></i>, <i>I object to <b>this</b></i>)? Значит, to — предлог → <b>-ing</b>.</li>
<li>Звучит дико (<i>I want to <b>it</b></i>, <i>I decided to <b>this</b></i>)? Значит, частица → голый глагол.</li>
</ol></div>
<div class="g-bad">I look forward to hear from you.</div>
<div class="g-good">I look forward to <b>hearing</b> from you. <span class="muted">— стандартный финал делового письма</span></div>
<div class="mini" data-q="We're really looking forward to ___ the new update." data-o="try|trying|tried" data-a="1" data-why="В look forward to слово to — предлог → -ing."></div>
<div class="mini" data-q="I don't object to ___ late if it's really necessary." data-o="stay|staying|stayed" data-a="1" data-why="object to — to здесь предлог (object to it) → -ing."></div>`
      },
      {
        title: '5. be used to и get used to — «привык» и «привыкаю»',
        html: `
<p>Что вы уже знаете (B1-2): <span class="say">I'm used to working at night</span> = я привык работать ночью. Теперь полностью.</p>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>be used to</b></td><td>уже привык, мне это не странно</td><td><span class="say">I'm used to the noise.</span></td></tr>
<tr><td><b>get used to</b></td><td>привыкать, процесс</td><td><span class="say">You'll get used to it.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">be / get used to</span><span class="g-plus">+</span><span class="g-part g-v">существительное / it / -ing</span></div>
<p>Глагол <b>be</b> и <b>get</b> меняются по временам как обычно — used to остаётся:</p>
<ul class="g-list">
<li><span class="say">I wasn't used to driving on the left.</span> — Я не привык к левостороннему движению.</li>
<li><span class="say">I'm slowly getting used to the new interface.</span> — Постепенно привыкаю к новому интерфейсу.</li>
<li><span class="say">Have you got used to your new keyboard yet?</span> — Уже привык к новой клавиатуре?</li>
<li><span class="say">It took me a month to get used to waking up at six.</span> — Я месяц привыкал вставать в шесть.</li>
<li><span class="say">I'll never get used to this heat.</span> — Никогда не привыкну к этой жаре.</li>
<li><span class="say">I'm the boss here. I'm not used to being told what to do.</span> — Я не привык, чтобы мне указывали. <span class="muted">(пассив: being + V3)</span></li>
<li><span class="say">She's used to me working late.</span> — Она привыкла, что я работаю допоздна. <span class="muted">(чужой исполнитель)</span></li>
</ul>
<p><b>Не путайте с used to do</b> — «раньше делал, теперь нет». Там нет be / get, после to голый глагол, и это только прошлое:</p>
<table>
<tr><th>Фраза</th><th>Смысл</th></tr>
<tr><td><span class="say">I used to live alone.</span></td><td>раньше жил один (теперь нет)</td></tr>
<tr><td><span class="say">I'm used to living alone.</span></td><td>я привык жить один</td></tr>
<tr><td><span class="say">I got used to living alone.</span></td><td>я привык (со временем)</td></tr>
</table>
<div class="g-tip">Есть <b>be</b> или <b>get</b> перед used — значит «привык», и после to стоит <b>-ing</b> или существительное. Нет — значит «раньше», и после to голый глагол. Произносятся обе одинаково: [юːстə].</div>
<div class="mini" data-q="The new office is noisy, but I'm sure we'll ___ it." data-o="used to|get used to|be use to" data-a="1" data-why="Процесс привыкания в будущем → will get used to."></div>
<div class="mini" data-q="Lena grew up in Murmansk, so she ___ the cold." data-o="is used to|used to|is used" data-a="0" data-why="Ей это не странно сейчас → be used to + существительное."></div>`
      },
      {
        title: '6. Глагол + предлог + -ing: insist on, succeed in, feel like',
        html: `
<p>У многих глаголов есть «свой» предлог. Если после него действие — снова -ing.</p>
<table>
<tr><th>Глагол + предлог</th><th>Пример</th></tr>
<tr><td>insist <b>on</b></td><td><span class="say">He insisted on paying for dinner.</span></td></tr>
<tr><td>succeed <b>in</b></td><td><span class="say">Did you succeed in fixing the bug?</span></td></tr>
<tr><td>feel <b>like</b></td><td><span class="say">I don't feel like going out tonight.</span></td></tr>
<tr><td>think <b>of / about</b></td><td><span class="say">I'm thinking of changing jobs.</span></td></tr>
<tr><td>dream <b>of</b></td><td><span class="say">She dreams of making her own game.</span></td></tr>
<tr><td>approve <b>of</b></td><td><span class="say">My parents don't approve of me gaming all night.</span></td></tr>
<tr><td>decide <b>against</b></td><td><span class="say">We decided against buying a car.</span></td></tr>
<tr><td>apologise <b>for</b></td><td><span class="say">I apologise for being late.</span></td></tr>
<tr><td>talk / complain <b>about</b></td><td><span class="say">They complained about waiting so long.</span></td></tr>
<tr><td>concentrate / rely <b>on</b></td><td><span class="say">Concentrate on finishing the main screen.</span></td></tr>
</table>
<p>Ловушки для русскоговорящих — там, где по-русски «чтобы» или инфинитив:</p>
<ul class="g-list">
<li>«Я думаю пойти» → <span class="say">I'm thinking of going.</span> <span class="muted">(не think to go)</span></li>
<li>«Мечтаю поехать» → <span class="say">I dream of going.</span> <span class="muted">(не dream to go)</span></li>
<li>«Ему удалось» → <span class="say">He succeeded in finding it.</span> = <span class="say">He managed to find it.</span> <span class="muted">(succeed — с in, manage — с to)</span></li>
<li>«Настаиваю, чтобы ты пришёл» → <span class="say">I insist on you coming.</span> = <span class="say">I insist that you come.</span></li>
<li>«Хочется спать» → <span class="say">I feel like sleeping.</span> <span class="muted">(feel like = «хочется», не «чувствую себя как»)</span></li>
</ul>
<div class="g-bad">I'm thinking to buy a new PC. · She succeeded to pass the exam. · He insisted to pay.</div>
<div class="g-good">I'm thinking <b>of buying</b> a new PC. · She succeeded <b>in passing</b> the exam. · He insisted <b>on paying</b>.</div>
<div class="mini" data-q="I'm so tired. I don't feel like ___ anything today." data-o="to do|doing|do" data-a="1" data-why="feel like + -ing = хочется / не хочется."></div>
<div class="mini" data-q="After three hours, we finally succeeded ___ the server." data-o="to restart|in restarting|restarting" data-a="1" data-why="succeed in + -ing (или managed to restart)."></div>`
      },
      {
        title: '7. Глагол + кто-то + предлог + -ing: thank, accuse, prevent',
        html: `
<p>Здесь между глаголом и предлогом стоит <b>человек</b> — тот, кого благодарят, обвиняют, кому мешают.</p>
<div class="g-formula"><span class="g-part">глагол</span><span class="g-plus">+</span><span class="g-part">кого</span><span class="g-plus">+</span><span class="g-part">предлог</span><span class="g-plus">+</span><span class="g-part g-v">-ing</span></div>
<table>
<tr><th>Конструкция</th><th>Пример</th></tr>
<tr><td>thank sb <b>for</b></td><td><span class="say">I thanked her for helping me.</span></td></tr>
<tr><td>congratulate sb <b>on</b></td><td><span class="say">We congratulated Max on winning.</span></td></tr>
<tr><td>accuse sb <b>of</b></td><td><span class="say">They accused him of cheating.</span></td></tr>
<tr><td>suspect sb <b>of</b></td><td><span class="say">Nobody suspected her of lying.</span></td></tr>
<tr><td>blame sb <b>for</b></td><td><span class="say">Don't blame me for losing the file.</span></td></tr>
<tr><td>prevent / stop sb <b>from</b></td><td><span class="say">The update prevented us from logging in.</span></td></tr>
<tr><td>talk sb <b>into / out of</b></td><td><span class="say">She talked me into buying it.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">You can't stop me (from) doing what I love.</span> — после stop <b>from</b> можно опустить.</li>
<li><span class="say">He accused me of not paying attention.</span> — с отрицанием: <b>of not -ing</b>.</li>
<li><span class="say">He was accused of stealing the code.</span> — Его обвинили в краже кода. <span class="muted">(пассив — очень частый)</span></li>
<li><span class="say">The player was suspected of using bots.</span> — Игрока подозревали в использовании ботов.</li>
</ul>
<p><b>apologise</b> — особый случай: извиняются <b>перед</b> кем-то (to) <b>за</b> что-то (for). Без to нельзя:</p>
<div class="g-bad">I apologised him for being rude. · They congratulated me with the release.</div>
<div class="g-good">I apologised <b>to</b> him <b>for</b> being rude. · They congratulated me <b>on</b> the release.</div>
<div class="g-tip">Русское «поздравить <b>с</b>» → <b>on</b>, «обвинить <b>в</b>» → <b>of</b>, «помешать» → <b>from</b>. Предлоги не совпадают — учите блоком.</div>
<div class="mini" data-q="The heavy rain stopped us ___ the concert." data-o="to enjoy|from enjoying|of enjoying" data-a="1" data-why="stop / prevent sb from + -ing."></div>
<div class="mini" data-q="Everyone congratulated Anna ___ her first game." data-o="with releasing|on releasing|for release" data-a="1" data-why="congratulate sb on + -ing (не with)."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Thank you for help me.</div><div class="g-good">Thank you for <b>helping</b> me.</div>
<div class="g-bad">Instead of to wait, let's start.</div><div class="g-good">Instead of <b>waiting</b>, let's start.</div>
<div class="g-bad">I look forward to see you.</div><div class="g-good">I look forward to <b>seeing</b> you.</div>
<div class="g-bad">I'm used to work at night.</div><div class="g-good">I'm used to <b>working</b> at night.</div>
<div class="g-bad">I used to getting up early. <span class="muted">— о сегодняшней привычке</span></div><div class="g-good">I'm used to getting up early.</div>
<div class="g-bad">I'm thinking to move to Tbilisi.</div><div class="g-good">I'm thinking <b>of moving</b> to Tbilisi.</div>
<div class="g-bad">He insisted to pay.</div><div class="g-good">He insisted <b>on paying</b>.</div>
<div class="g-bad">I apologised her.</div><div class="g-good">I apologised <b>to</b> her.</div>
<div class="g-bad">They accused him in cheating.</div><div class="g-good">They accused him <b>of</b> cheating.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>после <b>любого предлога</b> — -ing (включая to в look forward to, object to) · <b>be used to</b> = привык, <b>get used to</b> = привыкаю · insist <b>on</b>, succeed <b>in</b>, thank sb <b>for</b>, accuse sb <b>of</b>, prevent sb <b>from</b> + -ing.</div>`
      }
    ],
    words: [
      ["insist on", "настаивать на", "My friend always insists on paying.", "Мой друг всегда настаивает на том, чтобы заплатить."],
      ["succeed in", "преуспеть, суметь", "We succeeded in launching on time.", "Нам удалось запуститься вовремя."],
      ["apologise (for)", "извиняться (за)", "He apologised for being late.", "Он извинился за опоздание."],
      ["accuse (of)", "обвинять (в)", "They accused him of cheating.", "Его обвинили в читерстве."],
      ["suspect (of)", "подозревать (в)", "The player was suspected of using bots.", "Игрока подозревали в использовании ботов."],
      ["blame (for)", "винить (в)", "Don't blame yourself for losing.", "Не вини себя за проигрыш."],
      ["congratulate (on)", "поздравлять (с)", "We congratulated her on getting the job.", "Мы поздравили её с новой работой."],
      ["prevent (from)", "мешать, предотвращать", "The bug prevented players from saving.", "Баг не давал игрокам сохраняться."],
      ["approve of", "одобрять", "My mum doesn't approve of me skipping breakfast.", "Мама не одобряет, что я не завтракаю."],
      ["decide against", "решить не делать", "We decided against moving the release.", "Мы решили не переносить релиз."],
      ["feel like", "хотеться", "I don't feel like cooking tonight.", "Сегодня не хочется готовить."],
      ["dream of", "мечтать о", "He dreams of working at a big studio.", "Он мечтает работать в крупной студии."],
      ["look forward to", "ждать с нетерпением", "I'm looking forward to meeting the team.", "Жду не дождусь знакомства с командой."],
      ["object to", "возражать против", "I object to working unpaid overtime.", "Я против бесплатных переработок."],
      ["be used to", "привыкнуть, быть привычным", "I'm used to working from home.", "Я привык работать из дома."],
      ["get used to", "привыкать", "You'll get used to the new layout.", "Ты привыкнешь к новой раскладке."],
      ["instead of", "вместо (того чтобы)", "Instead of arguing, let's test both versions.", "Вместо того чтобы спорить, протестируем обе версии."],
      ["despite", "несмотря на", "Despite being tired, she kept drawing.", "Несмотря на усталость, она продолжала рисовать."],
      ["fed up with", "сытый по горло, достало", "I'm fed up with waiting for feedback.", "Меня достало ждать отзыва."],
      ["capable of", "способный на", "This laptop isn't capable of running the game.", "Этот ноутбук не потянет игру."],
      ["keen on", "увлечённый, очень хотеть", "She's keen on learning 3D.", "Она загорелась изучать 3D."],
      ["rely on", "полагаться на", "You can't rely on autosave.", "На автосохранение полагаться нельзя."],
      ["concentrate on", "сосредоточиться на", "Concentrate on finishing one screen.", "Сосредоточься на том, чтобы закончить один экран."],
      ["complain about", "жаловаться на", "Players complained about waiting in queues.", "Игроки жаловались на очереди."],
      ["when it comes to", "когда речь заходит о", "When it comes to colours, trust Lena.", "Когда дело доходит до цветов, доверься Лене."],
      ["adapt (to)", "приспосабливаться (к)", "It took me a while to adapt to the new city.", "Мне понадобилось время, чтобы привыкнуть к новому городу."],
      ["strange", "странный, непривычный", "Everything felt strange at first.", "Сначала всё было непривычно."],
      ["forgive — forgave", "прощать — простил", "Forgive me for not calling.", "Прости, что не позвонил."],
      ["cheat", "жульничать, читерить", "Nobody likes players who cheat.", "Никто не любит читеров."],
      ["pace", "темп", "I'm not used to such a slow pace of life.", "Я не привык к такому медленному темпу жизни."]
    ],
    texts: [
      {
        id: 't-b2-3-1', title: 'Six months in Lisbon', level: 'B2',
        text: `Six months ago I moved from Novosibirsk to Lisbon to work for a small game studio. Before leaving, I was sure the hardest part would be the language. I was wrong. The language was easy compared to everything else I had to get used to.

First, the light. I'm used to long dark winters, so living in a city where the sun shines almost every day felt strange. In the first weeks I couldn't fall asleep without closing all the curtains. Now I've got used to waking up with the sun, and I can't imagine going back.

Second, the pace of work. In my old job, everybody insisted on answering messages within five minutes. Here my manager, Rita, prefers talking face to face to sending ten messages in the chat. At first I thought she was just avoiding work. Then I realised that the team simply isn't used to rushing. They get things done by planning carefully, not by staying late. It took me two months to stop apologising for leaving the office at six.

Third, lunch. At home I usually ate at my desk while working. Here nobody approves of that. On my second day, a colleague took my laptop away and said, "We don't eat without talking." I'm still getting used to hour-long lunches, but I have to admit they're good for the team. We solve more problems over soup than in meetings.

Some things I will never get used to. The hills, for example. The city is built on seven of them, and my legs haven't forgiven me yet. And the trams: I'm fed up with tourists taking selfies in the doorway when I'm trying to get to work.

The funny thing is that my brain still lives in two time zones. My friends back home keep calling me at midnight, and I can't blame them for forgetting. I've thought about asking them to check the time before calling, but I don't feel like being the boring friend.

Was it the right decision? Yes. I used to spend my evenings staring at a screen, too tired to go out. Now I go surfing on Saturdays — badly, but still. I succeeded in finding a flat with a view of the river, and I'm looking forward to showing it to my parents next month. Mum is already worried about the hills. I told her she'll get used to them quickly. I'm not sure she believed me.`,
        questions: [
          { q: 'What was surprisingly hard for the author in Lisbon?', o: ['The language', 'Getting used to the light and the pace of life', 'Finding a job'], a: 1 },
          { q: 'How does the team in Lisbon get things done?', o: ['By planning carefully', 'By staying late', 'By answering messages fast'], a: 0 },
          { q: 'Why don\'t the author\'s friends call at a better time?', o: ['They are angry with him', 'They forget about the time difference', 'They work at night'], a: 1 }
        ]
      },
      {
        id: 't-b2-3-2', title: 'The clip', level: 'B2',
        text: `Nina: Have you seen the forum? Somebody has accused Kai of cheating in yesterday's final.
Max: What? Based on what?
Nina: A clip. He hits three headshots in a row, and people say nobody is capable of doing that without some kind of program.
Max: That's ridiculous. He's been practising that move for months. I remember him complaining about his wrist every evening.
Nina: I know. But the organisers are taking it seriously. They want to prevent us from playing in the next tournament until they've checked his PC.
Max: Can they really stop a whole team from playing because of one clip?
Nina: Apparently they can. Kai is furious. He insists on streaming his next practice with a camera on his hands, so everybody can see what he's doing.
Max: Good idea. Instead of arguing on the forum, just show them.
Nina: That's what I told him. Honestly, I'm tired of people attacking players every time they win something.
Max: Welcome to esports. When it comes to online drama, nobody is interested in checking the facts.
Nina: Our coach thinks we should post a statement. Something like "We thank everyone for supporting us" and so on.
Max: Fine, but I object to apologising for something we didn't do.
Nina: Nobody's apologising. We'll just explain.

Two days later.

Nina: Max! The organisers have finished checking Kai's PC. He's clean.
Max: I told you! Did they apologise to him for the accusation?
Nina: Not exactly. They congratulated him on "a remarkable performance". But they did say sorry to the team for delaying the results.
Max: Typical. And the guy who posted the clip?
Nina: He deleted it. Now he's suspected of being a fan of the other team — he created his account on the day of the final.
Max: Of course he is. How's Kai?
Nina: Better. He says he's used to people hating him online, but being called a cheater was different. He's thinking of taking a week off.
Max: He should. He deserves a break after all that.
Nina: And he's decided against doing the hand-cam stream. He says he doesn't feel like proving anything to anyone.
Max: Fair enough. So, are we still playing on Saturday?
Nina: Of course. I'm really looking forward to beating them properly this time.
Max: Without anyone accusing us of anything, hopefully.`,
        questions: [
          { q: 'What was Kai accused of?', o: ['Missing the final', 'Cheating', 'Posting a fake clip'], a: 1 },
          { q: 'What did the organisers do after checking his PC?', o: ['They banned the team', 'They congratulated Kai on his performance', 'They apologised to Kai for the accusation'], a: 1 },
          { q: 'Why did Kai decide against the hand-cam stream?', o: ['He doesn\'t feel like proving anything', 'His camera is broken', 'The coach didn\'t approve of it'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: "choice", q: "What's the advantage of ___ a second monitor?", o: ["have", "to have", "having"], a: 2, why: "После предлога of глагол только с -ing." },
      { t: "choice", q: "I'm really looking forward to ___ the final episode.", o: ["watch", "watching", "watched"], a: 1, why: "В look forward to слово to — предлог → -ing." },
      { t: "choice", q: "Kate is from Norway, so she ___ cold weather.", o: ["used to", "is used to", "uses to"], a: 1, why: "Ей это привычно сейчас → be used to + существительное." },
      { t: "choice", q: "The new chair felt strange, but I soon ___ it.", o: ["got used to", "used to", "was used"], a: 0, why: "Процесс привыкания в прошлом → got used to." },
      { t: "choice", q: "He insisted ___ me to the airport.", o: ["to drive", "on driving", "for driving"], a: 1, why: "insist on + -ing." },
      { t: "choice", q: "She was accused ___ the design from another studio.", o: ["in copying", "for copying", "of copying"], a: 2, why: "accuse sb of + -ing (в пассиве тоже of)." },
      { t: "choice", q: "You can rename a layer ___ on it twice.", o: ["by clicking", "with clicking", "by click"], a: 0, why: "Способ «как?» → by + -ing." },
      { t: "choice", q: "I apologised ___ forgetting her birthday.", o: ["her for", "to her for", "to her about"], a: 1, why: "apologise to sb for + -ing." },
      { t: "gap", q: "Thanks for ___ me the link. (send)", a: ["sending"], why: "После предлога for → -ing." },
      { t: "gap", q: "I'm not used to ___ so early. (get up)", a: ["getting up"], why: "be used to + -ing (to здесь предлог)." },
      { t: "gap", q: "Instead of ___ a taxi, we walked home. (take)", a: ["taking"], why: "instead of + -ing." },
      { t: "gap", q: "He left the meeting without ___ a word. (say)", a: ["saying"], why: "«Не сказав» → without + -ing." },
      { t: "gap", q: "I'm thinking ___ a new laptop. (buy)", a: ["of buying", "about buying"], why: "think of / about + -ing, не think to." },
      { t: "gap", q: "The noise prevented me ___. (sleep)", a: ["from sleeping"], why: "prevent sb from + -ing." },
      { t: "order", a: "I don't feel like going out tonight", ru: "Мне не хочется никуда идти сегодня вечером." },
      { t: "order", a: "It took me a month to get used to it", ru: "Мне понадобился месяц, чтобы к этому привыкнуть." },
      { t: "tr", q: "Я привык работать по ночам.", a: ["i'm used to working at night", "i am used to working at night", "i'm used to working at nights", "i am used to working at nights", "i've got used to working at night", "i have got used to working at night"] },
      { t: "tr", q: "Спасибо, что пришли.", a: ["thank you for coming", "thanks for coming"] },
      { t: "listen", say: "I look forward to hearing from you", a: ["i look forward to hearing from you"] }
    ],
    test: [
      { t: "choice", q: "___ being the youngest in the team, she leads every meeting.", o: ["Despite of", "Despite", "In spite"], a: 1, why: "despite без of; in spite требует of." },
      { t: "gap", q: "I'm fed up with people ___ me how to design. (tell)", a: ["telling"], why: "Предлог + чужой исполнитель + -ing: with people telling." },
      { t: "choice", q: "When it comes to ___ bugs, Alex is the fastest.", o: ["fix", "fixing", "fixed"], a: 1, why: "when it comes to — to предлог → -ing." },
      { t: "choice", q: "I ___ play football every weekend, but now I don't have time.", o: ["am used to", "used to", "got used to"], a: 1, why: "Раньше делал, теперь нет → used to + глагол." },
      { t: "gap", q: "I'm the lead here. I'm not used to ___ what to do. (tell — пассив)", a: ["being told"], why: "be used to + пассивное -ing: being + V3." },
      { t: "choice", q: "Our neighbours don't approve ___ us having parties.", o: ["about", "of", "on"], a: 1, why: "approve of + (кто-то) + -ing." },
      { t: "gap", q: "After two weeks, I finally succeeded ___ the level. (pass)", a: ["in passing"], why: "succeed in + -ing." },
      { t: "choice", q: "We thought about moving the deadline but decided ___ it.", o: ["against", "not", "from"], a: 0, why: "decide against (doing) sth = решить не делать." },
      { t: "gap", q: "Everybody congratulated me ___ my first release. (on / with)", a: ["on"], why: "congratulate sb on sth — не with." },
      { t: "choice", q: "She talked me ___ buying that expensive tablet. I'm glad I didn't buy it.", o: ["into", "out of", "from"], a: 1, why: "talk sb out of doing = отговорить." },
      { t: "choice", q: "After ___ the file, the program crashed.", o: ["I had saved", "saving", "to save"], a: 0, why: "Разные исполнители (я и программа) → полное предложение, не after -ing." },
      { t: "gap", q: "Don't blame me ___ the file. It was already broken. (lose)", a: ["for losing"], why: "blame sb for + -ing." }
    ]
  },

  // ───────────────────────────── UNIT B2-4 ─────────────────────────────
  {
    id: 'b2-4', level: 'B2', num: 4, track: 'main',
    books: { blue: [63, 64, 65, 66] },
    title: 'No point in -ing; to, for, so that; afraid to / afraid of',
    summary: 'Научимся говорить «нет смысла», «стоит того», «с трудом», «трачу время на», точно выражать цель (to, in order to, for, so that), строить This game is hard to put down и It was kind of you to help, и различать afraid to / afraid of, interested in / interested to, sorry for / sorry to.',
    grammar: [
      {
        title: '1. Главная идея: «смысл», «стоит», «чтобы» — готовые рамки',
        html: `
<div class="g-idea">Что вы уже знаете (A2-16, B2-3): to = «чтобы», после предлога -ing. В этом юните — готовые <b>рамки</b>, в которые вставляется глагол. Русский тут не поможет: у нас везде инфинитив, а в английском у каждой рамки своя форма.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Нет смысла ждать.</p><p>Этот фильм стоит посмотреть.</p><p>Я с трудом нашёл отель.</p><p>Я говорил тихо, чтобы никто не услышал.</p></div>
  <div><div class="g-h">English</div><p><span class="say">There's no point in <b>waiting</b>.</span></p><p><span class="say">This film is worth <b>watching</b>.</span></p><p><span class="say">I had trouble <b>finding</b> a hotel.</span></p><p><span class="say">I spoke quietly <b>so that nobody would hear</b>.</span></p></div>
</div>
<table>
<tr><th>Рамка</th><th>Форма</th></tr>
<tr><td>no point in, worth, trouble, spend time</td><td><b>-ing</b></td></tr>
<tr><td>цель: to, in order to</td><td><b>to + глагол</b></td></tr>
<tr><td>цель с подлежащим: so that</td><td><b>целое предложение</b></td></tr>
</table>
<div class="g-tip">Учите рамку целиком, как одно слово: <b>no-point-in-doing</b>, <b>worth-doing</b>, <b>so-that-I-can</b>.</div>
<div class="mini" data-q="Нет смысла спорить." data-o="There's no point to argue.|There's no point in arguing.|No sense arguing." data-a="1" data-why="there's no point in + -ing."></div>`
      },
      {
        title: '2. no point in, no use, worth: «нет смысла» и «стоит того»',
        html: `
<table>
<tr><th>Фраза</th><th>Смысл</th><th>Пример</th></tr>
<tr><td>there's no point <b>in</b> -ing</td><td>нет смысла</td><td><span class="say">There's no point in buying it if you never play.</span></td></tr>
<tr><td>it's no use -ing</td><td>бесполезно</td><td><span class="say">It's no use worrying about it now.</span></td></tr>
<tr><td>it's no good -ing</td><td>без толку</td><td><span class="say">It's no good shouting at the printer.</span></td></tr>
<tr><td>what's the point <b>of</b> -ing?</td><td>какой смысл?</td><td><span class="say">What's the point of having a gym card if you never go?</span></td></tr>
</table>
<div class="g-bad">What's the point in… · There's no point of…</div>
<div class="g-good"><b>no</b> point <b>in</b> · <b>the</b> point <b>of</b> <span class="muted">— «no» дружит с in, «the» — с of</span></div>
<p><b>worth</b> — «стоит (того)». Три варианта:</p>
<ul class="g-list">
<li><span class="say">It's worth spending a few days in Kyoto.</span> — Стоит провести в Киото пару дней.</li>
<li><span class="say">The game is worth playing.</span> — В эту игру стоит поиграть. <span class="muted">(предмет + worth + -ing, без it в конце)</span></li>
<li><span class="say">Was the course expensive? — Yes, but it was worth it.</span> — Да, но оно того стоило.</li>
<li><span class="say">The idea is worth thinking about.</span> — Над идеей стоит подумать.</li>
<li><span class="say">The flight was at six, so it wasn't worth going to bed.</span> — Не было смысла ложиться.</li>
<li><span class="say">There was nothing worth buying.</span> — Там не было ничего стоящего.</li>
</ul>
<div class="g-bad">This book is worth to read. · This game is worth playing it.</div>
<div class="g-good">This book is worth <b>reading</b>. · This game is worth <b>playing</b>.</div>
<div class="g-tip">worth ведёт себя как предлог — значит, после него -ing. А «стоит + деньги» — тоже worth: <span class="say">This card is worth fifty dollars.</span></div>
<div class="mini" data-q="The new season isn't worth ___. It's boring." data-o="to watch|watching|watching it" data-a="1" data-why="предмет + is worth + -ing, без it в конце."></div>
<div class="mini" data-q="What's the point ___ a plan if nobody follows it?" data-o="in making|of making|to make" data-a="1" data-why="the point of + -ing; no point in."></div>`
      },
      {
        title: '3. have trouble, spend time, waste time, busy + -ing',
        html: `
<p><b>С трудом, проблемы с…</b> — have trouble / difficulty / a problem + <b>-ing</b>:</p>
<ul class="g-list">
<li><span class="say">I had no trouble finding the office.</span> — Я без проблем нашёл офис.</li>
<li><span class="say">Do you have difficulty understanding British accents?</span> — Тебе трудно понимать британский акцент?</li>
<li><span class="say">Did you have a problem getting a visa?</span> — Были проблемы с визой?</li>
</ul>
<div class="g-bad">I had trouble to find a parking place.</div>
<div class="g-good">I had trouble <b>finding</b> a parking place.</div>
<p><b>Тратить время на</b> — spend / waste + время + <b>-ing</b> (без предлога!):</p>
<ul class="g-list">
<li><span class="say">I spent the whole evening choosing a font.</span> — Я весь вечер выбирал шрифт.</li>
<li><span class="say">Don't waste time arguing about colours.</span> — Не трать время на споры о цветах.</li>
<li><span class="say">How much time do you spend commuting?</span> — Сколько времени уходит на дорогу?</li>
</ul>
<p><b>Занят чем-то</b> — be busy + <b>-ing</b>: <span class="say">Sorry, I'm busy fixing a bug.</span> — Прости, я занят — чиню баг.</p>
<p><b>go + -ing</b> — для спорта и развлечений (A2-14): <span class="say">go swimming, go hiking, go skiing, go shopping</span>. С Present Perfect — <b>been</b>: <span class="say">Have you ever been surfing?</span></p>
<div class="g-bad">I spent two hours for doing the task. · I'm busy with doing homework.</div>
<div class="g-good">I spent two hours <b>doing</b> the task. · I'm busy <b>doing</b> homework.</div>
<div class="mini" data-q="I wasted the whole weekend ___ a boring series." data-o="to watch|on watch|watching" data-a="2" data-why="waste + время + -ing, без предлога."></div>`
      },
      {
        title: '4. Цель: to, in order to, for + существительное',
        html: `
<p><b>to + глагол</b> — «чтобы», зачем. <b>in order to</b> — то же самое, но официальнее; удобно, когда нужно «чтобы не»:</p>
<ul class="g-list">
<li><span class="say">I called the hotel to check the booking.</span> — Я позвонил в отель, чтобы проверить бронь.</li>
<li><span class="say">This email is to confirm your order.</span> — Это письмо подтверждает ваш заказ.</li>
<li><span class="say">We left early in order not to miss the train.</span> — Мы вышли рано, чтобы не опоздать на поезд.</li>
</ul>
<p><b>to</b> после существительного — «такой, который можно / нужно»:</p>
<table>
<tr><th>Фраза</th><th>Смысл</th></tr>
<tr><td><span class="say">a place to park</span></td><td>где припарковаться</td></tr>
<tr><td><span class="say">something to eat</span></td><td>что-нибудь поесть</td></tr>
<tr><td><span class="say">a lot of work to do</span></td><td>много работы</td></tr>
<tr><td><span class="say">time / money / a chance to do</span></td><td>время, деньги, шанс сделать</td></tr>
<tr><td><span class="say">the courage / energy to do</span></td><td>смелость, силы сделать</td></tr>
</table>
<p>Если глаголу нужен предлог, он уходит <b>в конец</b>: <span class="say">a chair to sit on</span>, <span class="say">someone to talk to</span>, <span class="say">something to open this bottle with</span>.</p>
<p><b>for</b> или <b>to</b>?</p>
<table>
<tr><th>for + существительное</th><th>to + глагол</th></tr>
<tr><td><span class="say">We stopped for coffee.</span></td><td><span class="say">We stopped to get coffee.</span></td></tr>
<tr><td><span class="say">I ran for the bus.</span></td><td><span class="say">I ran to catch the bus.</span></td></tr>
</table>
<ul class="g-list">
<li><b>for + -ing</b> — только назначение предмета: <span class="say">This brush is for cleaning the keyboard.</span></li>
<li><b>for sb to do</b> — «чтобы кто-то…»: <span class="say">There was no room for us to sit.</span></li>
<li><b>What … for?</b> — «зачем?», «для чего?»: <span class="say">What's this button for?</span> <span class="say">What did you do that for?</span></li>
</ul>
<div class="g-bad">I went to the shop for buying snacks. · There's nobody to talk.</div>
<div class="g-good">I went to the shop <b>to buy</b> snacks. · There's nobody to talk <b>to</b>.</div>
<div class="g-tip">Зачем <b>человек</b> что-то делает → <b>to</b>. Для чего <b>вещь</b> → <b>for -ing</b>.</div>
<div class="mini" data-q="I went to the kitchen ___ some tea." data-o="for making|to make|for make" data-a="1" data-why="Зачем я пошёл (цель человека) → to + глагол."></div>
<div class="mini" data-q="I'm bored. I need someone to talk ___." data-o="—|to|with it" data-a="1" data-why="talk to sb → предлог уходит в конец: someone to talk to."></div>`
      },
      {
        title: '5. so that — цель, когда нужно своё подлежащее',
        html: `
<div class="g-idea"><b>so that</b> + целое предложение — когда в цели есть <b>can / could / will / would</b> или другой человек. Это русское «чтобы (кто-то) мог…», «чтобы не…».</div>
<div class="g-formula"><span class="g-part">действие</span><span class="g-plus">+</span><span class="g-part g-v">so that</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">can / will</span><span class="g-sep">·</span><span class="g-part">в прошлом</span><span class="g-part g-v">could / would</span></div>
<ul class="g-list">
<li><span class="say">I'm learning English so that I can play without subtitles.</span> — Учу английский, чтобы играть без субтитров.</li>
<li><span class="say">We moved closer to the office so that we could walk to work.</span> — Мы переехали ближе к офису, чтобы ходить пешком.</li>
<li><span class="say">I set two alarms so that I wouldn't oversleep.</span> — Я поставил два будильника, чтобы не проспать.</li>
<li><span class="say">Speak slowly so that everyone understands.</span> — Говори медленно, чтобы все поняли.</li>
<li><span class="say">I'll send you the file so you can check it.</span> — <b>that</b> в разговоре часто пропускают.</li>
</ul>
<table>
<tr><th>Цель</th><th>Как сказать</th></tr>
<tr><td>я → я</td><td><span class="say">I left early to catch the bus.</span></td></tr>
<tr><td>я → другой человек</td><td><span class="say">I left early so that Mum could rest.</span></td></tr>
<tr><td>«чтобы не»</td><td><span class="say">I wrote it down so that I wouldn't forget.</span></td></tr>
</table>
<div class="g-bad">I wore a hat for not getting cold. · I gave him my number for him to can call me.</div>
<div class="g-good">I wore a hat <b>so that I wouldn't</b> get cold. · I gave him my number <b>so that he could</b> call me.</div>
<div class="g-tip">Русское «чтобы не…» почти всегда → <b>so that … won't / wouldn't</b> или <b>in order not to</b>. «for not + -ing» в этом смысле не бывает.</div>
<div class="mini" data-q="I turned down the music so that the baby ___ sleep." data-o="can|could|will can" data-a="1" data-why="Прошлое, другой человек → so that + could."></div>
<div class="mini" data-q="Write it down ___ you don't forget." data-o="for|so that|to" data-a="1" data-why="После — целое предложение (you don't forget) → so that."></div>`
      },
      {
        title: '6. Прилагательное + to: hard to find, kind of you, glad to hear',
        html: `
<p><b>Предмет + is + прилагательное + to</b> — очень английская конструкция. Главное: в конце <b>не повторяем</b> предмет.</p>
<table>
<tr><th>Через it</th><th>Через предмет</th></tr>
<tr><td><span class="say">It's hard to understand him.</span></td><td><span class="say">He's hard to understand.</span></td></tr>
<tr><td><span class="say">It's safe to drink this water.</span></td><td><span class="say">This water is safe to drink.</span></td></tr>
<tr><td><span class="say">It's easy to use this app.</span></td><td><span class="say">This app is easy to use.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">This game is impossible to put down.</span> — От этой игры невозможно оторваться.</li>
<li><span class="say">That's a difficult question to answer.</span> — На этот вопрос трудно ответить. <span class="muted">(прилагательное + существительное + to)</span></li>
<li><span class="say">She's interesting to talk to.</span> — С ней интересно поговорить.</li>
</ul>
<div class="g-bad">This interface is easy to use it.</div>
<div class="g-good">This interface is easy to use.</div>
<p><b>It's kind of you to…</b> — оценка поступка человека: kind, nice, silly, stupid, unfair, careless, generous, typical <b>of</b> sb <b>to</b> do.</p>
<ul class="g-list">
<li><span class="say">It was kind of you to help me move.</span> — Очень мило, что ты помог с переездом.</li>
<li><span class="say">It was careless of me to leave the laptop in the car.</span> — Беспечно было оставить ноутбук в машине.</li>
</ul>
<p><b>Реакция на новость</b>: sorry, glad, pleased, surprised, relieved, disappointed + <b>to hear / see / find</b>:</p>
<ul class="g-list">
<li><span class="say">I was surprised to see him at the party.</span> — Я удивился, увидев его на вечеринке.</li>
<li><span class="say">We were relieved to hear the server was back.</span> — Мы выдохнули, узнав, что сервер снова работает.</li>
</ul>
<p><b>the first / last / only / next + to</b> и <b>sure / likely / bound to</b>:</p>
<ul class="g-list">
<li><span class="say">She was the first to finish the game.</span> — Она первой прошла игру.</li>
<li><span class="say">He was the only one to notice the bug.</span> — Он единственный заметил баг.</li>
<li><span class="say">The servers are bound to crash on release day.</span> — Серверы точно упадут в день релиза.</li>
<li><span class="say">It's not likely to rain tomorrow.</span> — Завтра дождь вряд ли будет.</li>
</ul>
<div class="mini" data-q="The instructions were very hard ___." data-o="to follow them|to follow|following" data-a="1" data-why="Предмет + hard to + глагол, без повторного them."></div>
<div class="mini" data-q="It was nice ___ you to remember my birthday." data-o="for|of|from" data-a="1" data-why="Оценка поступка: nice / kind of sb to do."></div>`
      },
      {
        title: '7. afraid to / afraid of, interested in / to, sorry for / to',
        html: `
<div class="g-idea">У некоторых прилагательных есть и <b>to</b>, и <b>предлог + -ing</b> — с разным смыслом.</div>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>afraid to do</b></td><td>боюсь и поэтому не делаю</td><td><span class="say">I was afraid to tell the client.</span></td></tr>
<tr><td><b>afraid of -ing</b></td><td>боюсь, что это случится</td><td><span class="say">I was afraid of losing the file.</span></td></tr>
</table>
<p>Часто вместе: <span class="say">I was afraid to touch the old server because I was afraid of breaking something.</span> — Я боялся трогать сервер, потому что боялся что-нибудь сломать.</p>
<ul class="g-list">
<li><span class="say">We walked slowly. We were afraid of slipping.</span> <span class="muted">— не afraid to slip: поскользнуться не решают</span></li>
<li><span class="say">Don't be afraid to ask questions.</span> — Не бойся задавать вопросы.</li>
</ul>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>interested in -ing</b></td><td>хочу, подумываю</td><td><span class="say">Are you interested in joining the project?</span></td></tr>
<tr><td><b>interested to hear / know / see</b></td><td>мне было / будет интересно узнать</td><td><span class="say">I'd be interested to know what you think.</span></td></tr>
<tr><td><b>sorry for -ing</b></td><td>извиняюсь за сделанное</td><td><span class="say">Sorry for shouting yesterday.</span></td></tr>
<tr><td><b>sorry to …</b></td><td>жаль (новость); извините, что (сейчас)</td><td><span class="say">Sorry to hear that. · Sorry to bother you.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I'll be sorry to leave this team.</span> — Мне будет жаль уходить из этой команды.</li>
<li><span class="say">I'm sorry I was rude.</span> = <span class="say">I'm sorry for being rude.</span></li>
</ul>
<p><b>Итоговая сверка</b> — to или предлог + -ing:</p>
<table>
<tr><th>+ to</th><th>+ предлог + -ing</th></tr>
<tr><td>want, hope, plan, promise to</td><td>think of, dream of -ing</td></tr>
<tr><td>manage / fail to</td><td>succeed in -ing</td></tr>
<tr><td>allow sb to</td><td>prevent sb from -ing</td></tr>
<tr><td>would like to</td><td>look forward to -ing</td></tr>
</table>
<div class="g-bad">I'm interested to buy your old tablet. · Sorry for hear that.</div>
<div class="g-good">I'm interested <b>in buying</b> your old tablet. · Sorry <b>to hear</b> that.</div>
<div class="mini" data-q="I held the cup with both hands. I was afraid ___ it." data-o="to drop|of dropping|dropping" data-a="1" data-why="Боюсь, что это случится само → afraid of + -ing."></div>
<div class="mini" data-q="I'm sorry ___ you, but the printer isn't working." data-o="for bothering|to bother|bother" data-a="1" data-why="Извиняюсь в момент действия → sorry to bother."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">There's no point to wait.</div><div class="g-good">There's no point <b>in waiting</b>.</div>
<div class="g-bad">This film is worth to see.</div><div class="g-good">This film is worth <b>seeing</b>.</div>
<div class="g-bad">I had difficulty to understand him.</div><div class="g-good">I had difficulty <b>understanding</b> him.</div>
<div class="g-bad">I spent an hour for fixing it.</div><div class="g-good">I spent an hour <b>fixing</b> it.</div>
<div class="g-bad">I came here for studying design.</div><div class="g-good">I came here <b>to study</b> design.</div>
<div class="g-bad">I hurried for not being late.</div><div class="g-good">I hurried <b>so that I wouldn't be</b> late.</div>
<div class="g-bad">This app is easy to use it.</div><div class="g-good">This app is easy to use.</div>
<div class="g-bad">It was kind from you to call.</div><div class="g-good">It was kind <b>of</b> you to call.</div>
<div class="g-bad">We walked carefully. We were afraid to fall.</div><div class="g-good">We were afraid <b>of falling</b>.</div>
<div class="g-bad">I'm sorry to be late yesterday.</div><div class="g-good">I'm sorry <b>for being</b> late yesterday. / I'm sorry I was late.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>no point <b>in</b> / worth / trouble / spend time + <b>-ing</b> · цель: <b>to</b>, <b>for</b> + существительное, <b>so that</b> + can / could · easy <b>to use</b> (без it) · kind <b>of</b> you to · afraid <b>to</b> = не решаюсь, afraid <b>of -ing</b> = боюсь, что случится.</div>`
      }
    ],
    words: [
      ["point", "смысл; суть", "There's no point in arguing.", "Нет смысла спорить."],
      ["worth", "стоящий, стоит (того)", "This book is worth reading.", "Эту книгу стоит прочитать."],
      ["it's no use", "бесполезно", "It's no use crying about it.", "Бесполезно об этом плакать."],
      ["trouble", "трудность, проблема", "I had trouble finding a charger.", "Я с трудом нашёл зарядку."],
      ["difficulty", "трудность", "She has difficulty sleeping on planes.", "Ей трудно спать в самолёте."],
      ["spend — spent", "тратить (время, деньги)", "I spent all day editing the video.", "Я весь день монтировал видео."],
      ["waste", "тратить впустую", "Stop wasting time scrolling.", "Хватит тратить время на скроллинг."],
      ["busy", "занятой", "He's busy preparing the presentation.", "Он занят подготовкой презентации."],
      ["purpose", "цель, назначение", "What's the purpose of this button?", "Какое назначение у этой кнопки?"],
      ["in order to", "для того чтобы", "We met in order to discuss the budget.", "Мы встретились, чтобы обсудить бюджет."],
      ["so that", "чтобы (+ предложение)", "Speak louder so that everyone can hear.", "Говори громче, чтобы всем было слышно."],
      ["opportunity", "возможность", "I had the opportunity to work abroad.", "У меня была возможность поработать за границей."],
      ["courage", "смелость", "I didn't have the courage to ask her.", "Мне не хватило смелости спросить её."],
      ["energy", "энергия, силы", "I don't have the energy to cook.", "У меня нет сил готовить."],
      ["afraid", "боящийся", "Don't be afraid to make mistakes.", "Не бойся ошибаться."],
      ["relieved", "испытывающий облегчение", "I was relieved to hear the news.", "Я с облегчением услышал новость."],
      ["disappointed", "разочарованный", "We were disappointed to see the ending.", "Концовка нас разочаровала."],
      ["surprised", "удивлённый", "I was surprised to find it so cheap.", "Я удивился, что это так дёшево."],
      ["careless", "небрежный, беспечный", "It was careless of me to forget it.", "Беспечно было с моей стороны это забыть."],
      ["generous", "щедрый", "It's generous of you to pay.", "Щедро с твоей стороны заплатить."],
      ["bound to", "обязательно, точно", "The queue is bound to be long.", "Очередь точно будет длинной."],
      ["likely", "вероятный, вероятно", "Prices are likely to go up.", "Цены, вероятно, вырастут."],
      ["bother", "беспокоить", "Sorry to bother you so late.", "Извините, что беспокою так поздно."],
      ["sketch", "набросок; делать наброски", "I sketch ideas on paper first.", "Сначала я делаю наброски на бумаге."],
      ["queue", "очередь; стоять в очереди", "Is it worth queuing for two hours?", "Стоит ли стоять в очереди два часа?"],
      ["recruiter", "рекрутер", "I was afraid to talk to the recruiter.", "Я боялся заговорить с рекрутером."],
      ["portfolio", "портфолио", "Update your portfolio before applying.", "Обнови портфолио, прежде чем откликаться."],
      ["commute", "дорога на работу; ездить на работу", "I spend an hour commuting every day.", "Я трачу час на дорогу каждый день."],
      ["put down", "отложить, оторваться", "This book is impossible to put down.", "От этой книги невозможно оторваться."],
      ["confirm", "подтверждать", "This email is to confirm your booking.", "Это письмо подтверждает вашу бронь."]
    ],
    texts: [
      {
        id: 't-b2-4-1', title: 'Is it worth drawing by hand?', level: 'B2',
        text: `Every few months a junior designer asks me the same question: is there any point in learning to draw by hand when we have Figma, tablets and AI tools? My answer is always yes — but not for the reason they expect.

I started drawing on paper at school, mostly to avoid listening to my maths teacher. Later, when I got my first design job, I thought there was no point in carrying a sketchbook. Everything happened on the screen anyway. For two years I spent hours moving rectangles around without drawing a single line by hand.

Then I had trouble with a big project. The client wanted a new onboarding for a fitness app, and every idea I made looked the same. My art director watched me for a while and said, "It's no use moving the same boxes again. Close the laptop and take a pen." I was afraid to show her my sketches, because my drawing was terrible. But in thirty minutes I had twenty rough ideas, and three of them were actually good.

That's the real reason it's worth drawing by hand. Paper is fast and cheap, so you're not afraid of making mistakes. On a screen, every idea looks finished too early, and you waste time making it pretty instead of making it right.

You don't need to be an artist. My sketches are only for me, and they're not supposed to be beautiful. A pen and a cheap notebook are all you need to start. I keep one in my bag so that I can sketch on the train, and I use a thick marker so that I won't get lost in details.

Is it worth buying an expensive tablet for this? Not at first. Many beginners spend a lot of money on equipment and then have difficulty finding time to use it. Start with paper, and if you still enjoy it after three months, a tablet will be worth it.

A few practical tips. Set a timer for ten minutes to stop yourself from polishing. Draw the same screen five different ways. And don't be afraid to show your ugly sketches to colleagues. They're the easiest things to discuss in a meeting, because nobody is afraid to criticise them.

So what's the point of all this? Ideas first, pixels later. I'm sorry to say it, but no plugin will do the thinking for you.`,
        questions: [
          { q: 'Why was the author afraid to show the sketches?', o: ['His drawing was terrible', 'The client didn\'t like paper', 'He had no time'], a: 0 },
          { q: 'Why does the author keep a notebook in his bag?', o: ['So that he can sketch on the train', 'To show it to clients', 'To take notes at meetings'], a: 0 },
          { q: 'What does the author say about buying an expensive tablet?', o: ['It\'s the first thing to buy', 'It isn\'t worth it at first', 'It\'s no use at all'], a: 1 }
        ]
      },
      {
        id: 't-b2-4-2', title: 'Planning the convention', level: 'B2',
        text: `Anya: So, are we really going to the game convention in Cologne? I need to know so that I can ask for days off.
Oleg: Definitely. I've already found a hostel. It's cheap, and there's a room to leave our bags in on the last day.
Anya: Great. Is it worth buying tickets for all four days?
Oleg: I don't think so. There's no point in going on Sunday. The big studios leave early, and it's always crowded. Three days is enough.
Anya: OK. And honestly, what's the point of queuing for six hours to play a demo for fifteen minutes?
Oleg: Ha! For some games it's worth it. But I agree, we shouldn't waste whole days standing in lines. Let's make a list of talks so that we don't miss anything important.
Anya: I want to go to the art panel. They're showing how they designed the characters for that dark fantasy game. I'd be interested to hear how they work with concept artists.
Oleg: Me too. Oh, and I'm thinking of bringing my portfolio. I'd like to show it to a few studios.
Anya: You should! Why do you look worried?
Oleg: Honestly, I'm afraid to talk to recruiters. My English is fine for games, but I'm afraid of freezing in the middle of a sentence.
Anya: Everyone is nervous. Prepare a short introduction so that you don't have to improvise. And print some business cards to give people after the conversation.
Oleg: Good idea. Do we need anything else?
Anya: A power bank for charging our phones — we'll be using them all day. And comfortable shoes. Last time my feet hurt so much that I had difficulty walking back to the hostel.
Oleg: Noted. By the way, it was really kind of you to help me with the portfolio last week.
Anya: No problem. I was glad to see how much it had improved. You're bound to get some interest.
Oleg: I hope so. And sorry for being so slow with the booking. I know you wanted to book in March.
Anya: It's fine. I was surprised to find anything cheap at all, to be honest.
Oleg: Last question: shall we fly or take the train?
Anya: The train is easier to organise, and the view is worth seeing. Plus, it's likely to be cheaper if we book now.
Oleg: The train it is. I'll book tonight so that we can get seats by the window.
Anya: Perfect. Now I just need to find something warm to wear. It's always raining there in August, isn't it?
Oleg: Not always. But take an umbrella anyway, just to be safe.`,
        questions: [
          { q: 'Why don\'t they want to go on Sunday?', o: ['Tickets are too expensive', 'Big studios leave early and it\'s crowded', 'The hostel is closed'], a: 1 },
          { q: 'What is Oleg afraid of?', o: ['Freezing in the middle of a sentence', 'Losing his portfolio', 'Missing the train'], a: 0 },
          { q: 'Why will Oleg book the train tonight?', o: ['So that they can get seats by the window', 'Because the train is faster', 'To save time at the station'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: "choice", q: "There's no point ___ a gym card if you never go.", o: ["to buy", "in buying", "of buying"], a: 1, why: "there's no point in + -ing." },
      { t: "choice", q: "The museum is really worth ___.", o: ["to visit", "visiting", "visiting it"], a: 1, why: "предмет + is worth + -ing, без повторного it." },
      { t: "choice", q: "I had trouble ___ the password.", o: ["to remember", "remembering", "remember"], a: 1, why: "have trouble + -ing." },
      { t: "choice", q: "We stopped ___ petrol on the way.", o: ["for", "to", "for getting"], a: 0, why: "Перед существительным (petrol) → for." },
      { t: "choice", q: "I wore headphones ___ nobody would disturb me.", o: ["to", "so that", "for"], a: 1, why: "Дальше целое предложение с would → so that." },
      { t: "choice", q: "This question is difficult ___.", o: ["to answer it", "to answer", "answering"], a: 1, why: "Предмет + adjective + to + глагол, без it в конце." },
      { t: "choice", q: "It was very kind ___ you to wait for me.", o: ["for", "of", "from"], a: 1, why: "Оценка поступка: kind of sb to do." },
      { t: "choice", q: "The ice was thin, and we were afraid ___.", o: ["to fall", "of falling", "falling"], a: 1, why: "Боимся, что случится само → afraid of + -ing." },
      { t: "gap", q: "Don't waste time ___ about it. (worry)", a: ["worrying"], why: "waste time + -ing, без предлога." },
      { t: "gap", q: "It's no use ___ him. He never answers. (call)", a: ["calling"], why: "it's no use + -ing." },
      { t: "gap", q: "I need a chair to sit ___. (предлог)", a: ["on"], why: "sit on a chair → предлог уходит в конец: a chair to sit on." },
      { t: "gap", q: "I'm sorry ___ that you lost your job. (hear)", a: ["to hear"], why: "Реакция на новость → sorry to hear." },
      { t: "gap", q: "Are you interested ___ our new project? (join)", a: ["in joining"], why: "interested in + -ing = хочу, подумываю." },
      { t: "gap", q: "She's bound ___ the competition. She's the best. (win)", a: ["to win"], why: "be bound to + глагол = точно, обязательно." },
      { t: "order", a: "I spent the whole evening choosing a font", ru: "Я весь вечер выбирал шрифт." },
      { t: "order", a: "Is it worth buying the full version", ru: "Стоит ли покупать полную версию?" },
      { t: "order", a: "He was the only one to notice", ru: "Он единственный заметил." },
      { t: "tr", q: "Нет смысла ждать.", a: ["there's no point in waiting", "there is no point in waiting", "it's no use waiting", "it is no use waiting", "it's no good waiting", "it is no good waiting"] },
      { t: "tr", q: "Эту игру стоит пройти.", a: ["this game is worth playing", "this game is worth finishing", "this game is worth completing", "this game is worth beating", "it's worth playing this game", "it is worth playing this game", "it's worth finishing this game", "it is worth finishing this game"] },
      { t: "listen", say: "Sorry to bother you, but the printer isn't working", a: ["sorry to bother you but the printer isn't working", "sorry to bother you, but the printer isn't working", "sorry to bother you but the printer is not working", "sorry to bother you, but the printer is not working"] }
    ],
    test: [
      { t: "choice", q: "What's the point ___ a meeting if nobody reads the notes?", o: ["in having", "of having", "to have"], a: 1, why: "the point of + -ing; no point in." },
      { t: "gap", q: "The flight was at 5 a.m., so it wasn't worth ___ to bed. (go)", a: ["going"], why: "it's (not) worth + -ing." },
      { t: "choice", q: "Is the new update worth ___? — Yes, it's definitely worth ___.", o: ["installing / it", "to install / it", "installing / to"], a: 0, why: "worth + -ing; «стоит того» = worth it." },
      { t: "gap", q: "Sorry, I can't talk now. I'm busy ___ dinner. (cook)", a: ["cooking"], why: "be busy + -ing." },
      { t: "choice", q: "This brush is ___ the keyboard.", o: ["to clean", "for cleaning", "for clean"], a: 1, why: "Назначение предмета → for + -ing." },
      { t: "choice", q: "I left the door open so that the cat ___ come in.", o: ["can", "could", "would can"], a: 1, why: "Прошлое + so that → could." },
      { t: "gap", q: "We left early in order ___ the traffic. (not / get stuck in)", a: ["not to get stuck in"], why: "Цель «чтобы не» → in order not to + глагол." },
      { t: "choice", q: "I didn't have the courage ___ him the truth.", o: ["telling", "to tell", "for telling"], a: 1, why: "courage / time / chance + to + глагол." },
      { t: "choice", q: "Lena was the last ___ the office.", o: ["leaving", "to leave", "who leave"], a: 1, why: "the first / last / only + to + глагол." },
      { t: "choice", q: "I'd be interested ___ what the client thinks.", o: ["in knowing", "to know", "knowing"], a: 1, why: "Мне будет интересно узнать → interested to know." },
      { t: "gap", q: "I was afraid ___ him because he'd be angry. (tell)", a: ["to tell"], why: "Боялся и поэтому не сделал → afraid to + глагол." },
      { t: "gap", q: "I'm sorry ___ at you yesterday. (shout)", a: ["for shouting", "about shouting"], why: "Извинение за прошлое → sorry for + -ing." }
    ]
  }
);
