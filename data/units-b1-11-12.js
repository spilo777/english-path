// Юниты B1 11–12: if I do / if I did, if I knew, I wish I knew; passive во всех временах: was being done, had been done, to be done, should have been done
COURSE.units.push(
  // ───────────────────────────── UNIT B1-11 ─────────────────────────────
  {
    id: 'b1-11', level: 'B1', num: 11, track: 'main',
    books: { blue: [38, 39] },
    title: 'If I do / if I did; I wish I knew',
    summary: 'Научимся выбирать между if I find и if I found по тому, насколько реален шанс, фантазировать о настоящем (if I knew, if it weren’t so cold) и говорить о сожалениях: I wish I knew, I wish I could.',
    grammar: [
      {
        title: '1. Главная идея: прошедшая форма после if — это «шаг от реальности», а не прошлое',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-20): <b>if I have</b> — «если будет», <b>if I had… I'd…</b> — «если бы». На B1 разбираемся глубже: выбор зависит не от грамматики, а от того, <b>как вы оцениваете шанс</b>. Одно и то же событие можно сказать обоими способами — и смысл будет разный. А ещё добавим <b>I wish</b> — «жаль, что…».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Если найду твои наушники, напишу. <span class="muted">(вполне может быть)</span></p><p>Если бы ты нашёл кошелёк на улице, что бы ты сделал? <span class="muted">(просто представляем)</span></p><p>Жаль, что я не знаю его ник.</p><p>Вот бы можно было летать!</p></div>
  <div><div class="g-h">English</div><p><span class="say">If I <b>find</b> your headphones, I'll text you.</span></p><p><span class="say">If you <b>found</b> a wallet in the street, what <b>would</b> you do?</span></p><p><span class="say">I wish I <b>knew</b> his nickname.</span></p><p><span class="say">I wish we <b>could</b> fly!</span></p></div>
</div>
<p>Во всех «нереальных» фразах форма прошедшая (found, knew, could), но говорим мы о <b>сейчас</b> или о <b>будущем</b>. Прошлое здесь — просто сигнал «это не по-настоящему».</p>
<div class="g-tip">Представьте, что прошедшая форма после <b>if</b> и <b>wish</b> — это шаг <b>в сторону</b> от реальности, а не шаг назад во времени.</div>
<div class="mini" data-q="I wish I knew the answer. Это про…" data-o="прошлое: я не знал ответ|сейчас: я не знаю ответ, и мне жаль|будущее: я узнаю ответ" data-a="1" data-why="После wish прошедшая форма говорит о настоящем: сейчас не знаю — жаль."></div>`
      },
      {
        title: '2. If I find или if I found: решает ваша оценка шанса',
        html: `
<div class="g-idea"><b>if + настоящее, will</b> — вы считаете, что это реально может случиться. <b>if + прошедшее, would</b> — вы этого не ждёте, это фантазия или «вряд ли».</div>
<table>
<tr><th>Ситуация</th><th>Реально → if + present</th><th>Вряд ли → if + past</th></tr>
<tr><td>Друг живёт рядом / в Канаде</td><td><span class="say">If Max comes on Friday, we'll play co-op.</span></td><td><span class="say">If Max came on Friday, we'd play co-op.</span></td></tr>
<tr><td>Продаю ноутбук / не собираюсь</td><td><span class="say">If I sell my laptop, I'll get about 300 dollars.</span></td><td><span class="say">If I sold my laptop, I wouldn't get much for it.</span></td></tr>
<tr><td>Объясняю дорогу / представляю аварию</td><td><span class="say">If you turn left, you'll see the metro.</span></td><td><span class="say">What would you do if the lift stopped between floors?</span></td></tr>
</table>
<p>Вот как один и тот же вопрос звучит в двух мирах:</p>
<ul class="g-list">
<li><span class="say">I think I left my charger at your place. If you find it, can you text me?</span> — Кажется, я оставил зарядку у тебя. Если найдёшь, напиши? <span class="muted">(скорее всего, найдёт)</span></li>
<li><span class="say">If you found a phone on the bus, would you give it to the driver?</span> — Если бы ты нашёл телефон в автобусе, отдал бы водителю? <span class="muted">(просто вопрос «на подумать»)</span></li>
</ul>
<p>Полезная разговорная фраза: <b>I'd be surprised if…</b> — «я бы удивился, если бы…». Так говорят, когда ждут <b>обратного</b>:</p>
<ul class="g-list">
<li><span class="say">I'd be surprised if the update came out on time.</span> — Я бы удивился, если бы обнова вышла вовремя. <span class="muted">(думаю, задержат)</span></li>
<li><span class="say">I'd be amazed if they didn't win the tournament.</span> — Я был бы поражён, если бы они не выиграли турнир. <span class="muted">(думаю, выиграют)</span></li>
<li><span class="say">If there was a zombie apocalypse tomorrow, who would you want on your team?</span> — Если бы завтра начался зомби-апокалипсис, кого бы ты взял в команду?</li>
</ul>
<div class="g-bad">If I win the lottery, I'll buy an island. <span class="muted">— звучит так, будто вы правда этого ждёте</span></div>
<div class="g-good">If I <b>won</b> the lottery, I<b>'d</b> buy an island. <span class="muted">— нормальная фантазия</span></div>
<div class="mini" data-q="You never buy lottery tickets. You say: If I ___ a million, I'd quit my job." data-o="win|won|will win" data-a="1" data-why="Вы этого не ждёте → if + прошедшая форма: won."></div>
<div class="mini" data-q="Anna often visits us. If she ___ tomorrow, I'll show her the new design." data-o="comes|came|would come" data-a="0" data-why="Вполне реально → if + настоящее, will во второй части."></div>`
      },
      {
        title: '3. would — только в одной половине; could и might вместо would',
        html: `
<div class="g-idea">В if-половине <b>would не ставим</b> никогда. Would живёт во второй половине. Вместо would там могут стоять <b>could</b> (смог бы) и <b>might</b> (может быть, стал бы).</div>
<div class="g-formula"><span class="g-part">If</span><span class="g-plus">+</span><span class="g-part g-v">прошедшая форма</span><span class="g-sep">·</span><span class="g-part g-v">would / could / might</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<table>
<tr><th>Слово</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>would</b></td><td>сделал бы (точно)</td><td><span class="say">If I had a better PC, I'd stream in 4K.</span></td></tr>
<tr><td><b>could</b></td><td>смог бы, была бы возможность</td><td><span class="say">If it stopped raining, we could go for a walk.</span></td></tr>
<tr><td><b>might</b></td><td>может быть, стал бы</td><td><span class="say">If I got a bonus, I might take a week off.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">If we left right now, we might catch the last train.</span> — Если бы мы вышли прямо сейчас, может, и успели бы на последнюю электричку.</li>
<li><span class="say">I'd be really angry if somebody hacked my account.</span> — Я бы очень разозлился, если бы кто-то взломал мой аккаунт.</li>
<li><span class="say">I'm not tired. If I went to bed now, I wouldn't sleep.</span> — Если бы я сейчас лёг, я бы не уснул.</li>
</ul>
<p><b>could</b> бывает в <b>обеих</b> половинах — с разным смыслом:</p>
<table>
<tr><th>Где</th><th>could =</th><th>Пример</th></tr>
<tr><td>вторая половина</td><td>would be able — «смог бы»</td><td><span class="say">She could get a job there…</span></td></tr>
<tr><td>if-половина</td><td>was able — «если бы умела»</td><td><span class="say">…if she could speak English.</span></td></tr>
</table>
<p><span class="say">She could get a job in that studio if she could speak English.</span> — Она могла бы получить работу в той студии, если бы говорила по-английски.</p>
<div class="g-bad">If somebody would steal my phone, I would call the police.</div>
<div class="g-good">If somebody <b>stole</b> my phone, I would call the police.</div>
<div class="mini" data-q="If you ___ a famous actor in a café, would you ask for a photo?" data-o="would meet|met|meet" data-a="1" data-why="В if-половине would не бывает: if + прошедшая форма met."></div>
<div class="mini" data-q="If I had more money, I ___ buy a car — I'm not sure." data-o="will|might|must" data-a="1" data-why="Не уверен, может быть → might."></div>`
      },
      {
        title: '4. Фантазия о настоящем: переворачиваем факт',
        html: `
<div class="g-idea">Часто «если бы» — это факт наоборот. Берём то, что есть на самом деле, и «переворачиваем»: не знаю → knew, должен → didn't have to, не может → could.</div>
<div class="g-steps"><div class="g-h">Как построить фразу из факта</div><ol>
<li>Факт: <span class="say">I don't know Korean.</span></li>
<li>Переворачиваем и делаем прошедшую форму: don't know → <b>knew</b>.</li>
<li>Добавляем вторую половину с would: <span class="say">If I knew Korean, I'd watch dramas without subtitles.</span></li>
</ol></div>
<table>
<tr><th>Факт сейчас</th><th>Если бы</th></tr>
<tr><td>I have to work tomorrow.</td><td><span class="say">If I didn't have to work tomorrow, I'd stay up and finish the season.</span></td></tr>
<tr><td>He can't drive.</td><td><span class="say">It would be really useful if he could drive.</span></td></tr>
<tr><td>This game is so expensive.</td><td><span class="say">I'd buy it if it wasn't so expensive.</span></td></tr>
<tr><td>There are so many bugs.</td><td><span class="say">If there weren't so many bugs, it would be a perfect game.</span></td></tr>
<tr><td>I want to go to the party.</td><td><span class="say">If I didn't want to go, I wouldn't go.</span></td></tr>
<tr><td>I don't have much time.</td><td><span class="say">There are lots of things I'd do if I had more time.</span></td></tr>
</table>
<p>Совет в форме вопроса: <span class="say">If you were in my position, what would you do?</span> — Как бы ты поступил на моём месте?</p>
<div class="g-bad">If I don't have to work tomorrow, I would stay up late. <span class="muted">— половины из разных миров</span></div>
<div class="g-good">If I <b>didn't have to</b> work tomorrow, I would stay up late.</div>
<div class="mini" data-q="I can't draw. → If I ___ draw, I'd make my own game." data-o="can|could|would" data-a="1" data-why="Факт can't → переворачиваем в could."></div>`
      },
      {
        title: '5. If I were или if I was',
        html: `
<div class="g-idea">После <b>if</b> и <b>wish</b> для «если бы» можно ставить <b>were</b> со всеми лицами — даже с I, he, she, it. <b>was</b> тоже правильно, но звучит разговорнее. В письме и на экзаменах надёжнее <b>were</b>.</div>
<table>
<tr><th>Разговорно</th><th>Нейтрально, в письме</th></tr>
<tr><td><span class="say">If I was you, I'd take the offer.</span></td><td><span class="say">If I were you, I'd take the offer.</span></td></tr>
<tr><td><span class="say">I'd go for a run if it wasn't so cold.</span></td><td><span class="say">I'd go for a run if it weren't so cold.</span></td></tr>
<tr><td><span class="say">I wish Anna was here.</span></td><td><span class="say">I wish Anna were here.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">If Anna were here, she'd fix this layout in five minutes.</span> — Будь Анна здесь, она бы поправила макет за пять минут.</li>
<li><span class="say">If the server were faster, we wouldn't lag all the time.</span> — Если бы сервер был быстрее, у нас бы не лагало постоянно.</li>
<li><span class="say">I wouldn't worry if I were in your shoes.</span> — На твоём месте я бы не переживал. <span class="muted">(in your shoes — идиома «на твоём месте»)</span></li>
</ul>
<div class="g-tip"><b>If I were you</b> — самая частая форма совета. Запомните её целиком, как одно слово.</div>
<div class="g-bad">If I would be rich, I'd travel. · If I am you, I'd call her.</div>
<div class="g-good">If I <b>were</b> rich, I'd travel. · If I <b>were</b> you, I'd call her.</div>
<div class="mini" data-q="I'd play with you if my internet ___ so slow." data-o="isn't|weren't|wouldn't be" data-a="1" data-why="Интернет на самом деле медленный → если бы: weren't (или wasn't)."></div>`
      },
      {
        title: '6. I wish I knew — «жаль, что…», «вот бы…»',
        html: `
<div class="g-idea"><b>wish</b> + прошедшая форма = мне жаль, что сейчас всё не так; хотелось бы иначе. Работает как if: та же прошедшая форма, тот же смысл «на самом деле нет».</div>
<div class="g-formula"><span class="g-part">I wish</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">knew / had / were / could / didn't have to</span></div>
<p>Главная ловушка: русское «жаль, что <b>не</b>…» → в английском <b>без not</b>. Ведь вы хотите, чтобы было <b>так</b>:</p>
<table>
<tr><th>Факт</th><th>Сожаление</th><th>Перевод</th></tr>
<tr><td>I don't know his number.</td><td><span class="say">I wish I knew his number.</span></td><td>Жаль, что я не знаю его номер.</td></tr>
<tr><td>I can't draw.</td><td><span class="say">I wish I could draw.</span></td><td>Жаль, что я не умею рисовать.</td></tr>
<tr><td>I have to get up early.</td><td><span class="say">I wish I didn't have to get up early.</span></td><td>Вот бы не вставать рано.</td></tr>
<tr><td>There are so many ads.</td><td><span class="say">I wish there weren't so many ads.</span></td><td>Вот бы было поменьше рекламы.</td></tr>
<tr><td>You live so far away.</td><td><span class="say">I wish you lived closer.</span></td><td>Жаль, что ты живёшь так далеко.</td></tr>
<tr><td>It's Monday.</td><td><span class="say">I wish it were Friday.</span></td><td>Вот бы сейчас была пятница.</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Do you ever wish you could fly?</span> — Тебе никогда не хотелось уметь летать?</li>
<li><span class="say">I wish I had a second monitor.</span> — Вот бы у меня был второй монитор.</li>
</ul>
<p><b>glad</b> или <b>wish</b>? glad — факт хороший, радуюсь. wish — факта нет, жалею:</p>
<ul class="g-list">
<li><span class="say">I'm glad I live near the park.</span> — Я рад, что живу рядом с парком. <span class="muted">(живу — и хорошо)</span></li>
<li><span class="say">I wish I lived near the park.</span> — Жаль, что я не живу рядом с парком. <span class="muted">(не живу)</span></li>
</ul>
<div class="g-bad">I wish I would have a cat. · I wish I know the answer.</div>
<div class="g-good">I wish I <b>had</b> a cat. · I wish I <b>knew</b> the answer.</div>
<div class="g-bad">I wish I didn't know his number. <span class="muted">— в смысле «жаль, что не знаю»</span></div>
<div class="g-good">I wish I <b>knew</b> his number.</div>
<div class="g-tip">Сожаления о прошлом («жаль, что я не купил») — это следующая ступень: <b>I wish I had bought</b>. Её разберём в уроке B2-1.</div>
<div class="mini" data-q="Жаль, что я не говорю по-японски." data-o="I wish I don't speak Japanese.|I wish I spoke Japanese.|I wish I didn't speak Japanese." data-a="1" data-why="Хотим, чтобы было так → wish + spoke, без not."></div>
<div class="mini" data-q="I love my job. I'm ___ I chose design." data-o="wish|glad|sorry" data-a="1" data-why="Факт хороший, радуемся → glad."></div>`
      },
      {
        title: '7. Живой английский: What if…, Suppose…, It would be great if…',
        html: `
<div class="g-idea">В жизни «если бы» часто начинается не с if. Те же правила: прошедшая форма = фантазия.</div>
<ul class="g-list">
<li><span class="say">What if we moved the button to the top?</span> — А что, если перенести кнопку наверх? <span class="muted">(мягкое предложение)</span></li>
<li><span class="say">What if it rains tomorrow?</span> — А если завтра дождь? <span class="muted">(реальное беспокойство → настоящее время)</span></li>
<li><span class="say">Suppose you got an offer from a big studio. Would you take it?</span> — Допустим, тебе предложили работу в большой студии. Согласился бы?</li>
<li><span class="say">Imagine you could live in any game world. Which one would you choose?</span> — Представь, что можешь жить в любом игровом мире. Какой бы выбрал?</li>
<li><span class="say">It would be great if you could send the files today.</span> — Было бы здорово, если бы ты прислал файлы сегодня. <span class="muted">(вежливая просьба)</span></li>
<li><span class="say">I wouldn't mind if we started a bit later.</span> — Я был бы не против начать чуть позже.</li>
<li><span class="say">Are you coming? — I would if I could.</span> — Пойдёшь? — Пошёл бы, если бы мог.</li>
</ul>
<p>Часто половину «если бы» вообще не произносят — она понятна из ситуации:</p>
<ul class="g-list">
<li><span class="say">I wouldn't do that.</span> — Я бы так не делал. <span class="muted">(= if I were you)</span></li>
<li><span class="say">That would be amazing!</span> — Это было бы потрясающе!</li>
</ul>
<div class="g-bad">What if we would change the colours?</div>
<div class="g-good">What if we <b>changed</b> the colours?</div>
<div class="mini" data-q="Suppose you ___ invisible for a day. What would you do?" data-o="are|were|would be" data-a="1" data-why="Suppose — та же фантазия, что и if → прошедшая форма were."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">If I would know the answer, I would tell you.</div><div class="g-good">If I <b>knew</b> the answer, I would tell you.</div>
<div class="g-bad">If I had more time, I will learn Korean.</div><div class="g-good">If I had more time, I <b>would</b> learn Korean.</div>
<div class="g-bad">I wish I can help you.</div><div class="g-good">I wish I <b>could</b> help you.</div>
<div class="g-bad">I wish I would have a bigger flat.</div><div class="g-good">I wish I <b>had</b> a bigger flat.</div>
<div class="g-bad">Жаль, что не знаю → I wish I didn't know.</div><div class="g-good">I wish I <b>knew</b>.</div>
<div class="g-bad">If I am you, I would ask for a raise.</div><div class="g-good">If I <b>were</b> you, I would ask for a raise.</div>
<div class="g-bad">I'm glad I lived here. <span class="muted">— про «сейчас живу»</span></div><div class="g-good">I'm glad I <b>live</b> here.</div>
<div class="g-bad">If I win the lottery, I'll buy a castle. <span class="muted">— если вы этого не ждёте</span></div><div class="g-good">If I <b>won</b> the lottery, I<b>'d</b> buy a castle.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Реально → <b>if I find, I'll…</b> · вряд ли / фантазия → <b>if I found, I'd / could / might…</b> · жалею о настоящем → <b>I wish I knew / had / were / could</b> — и никакого would после if и wish.</div>`
      }
    ],
    words: [
      ["wish", "желать; жалеть, что не…", "I wish I had more free time.", "Жаль, что у меня мало свободного времени."],
      ["imagine", "представлять, воображать", "Imagine you could stop time.", "Представь, что ты можешь остановить время."],
      ["suppose", "предполагать; допустим", "Suppose you lost your phone. What would you do?", "Допустим, ты потерял телефон. Что бы ты сделал?"],
      ["afford", "позволить себе (по деньгам)", "If I could afford it, I'd buy a new PC.", "Если бы я мог себе это позволить, купил бы новый ПК."],
      ["lottery", "лотерея", "I never play the lottery.", "Я никогда не играю в лотерею."],
      ["win — won", "выигрывать — выиграл", "If we won the match, we'd be in the final.", "Если бы мы выиграли матч, мы бы вышли в финал."],
      ["surprised", "удивлённый", "I'd be surprised if he came on time.", "Я бы удивился, если бы он пришёл вовремя."],
      ["amazed", "изумлённый, поражённый", "I was amazed by the graphics.", "Я был поражён графикой."],
      ["glad", "рад", "I'm glad I chose this job.", "Я рад, что выбрал эту работу."],
      ["pity", "жалость; жаль", "It's a pity you can't come.", "Жаль, что ты не можешь прийти."],
      ["regret", "сожалеть; сожаление", "I don't regret moving here.", "Я не жалею, что переехал сюда."],
      ["unlikely", "маловероятный", "It's unlikely that they'll fix it this week.", "Вряд ли они это починят на этой неделе."],
      ["expect", "ожидать, рассчитывать", "I don't expect to win.", "Я не рассчитываю выиграть."],
      ["chance", "шанс, возможность", "If I had the chance, I'd work in Japan.", "Если бы у меня был шанс, я бы поработал в Японии."],
      ["crowded", "переполненный, людный", "I wish the metro weren't so crowded.", "Вот бы в метро не было так тесно."],
      ["lonely", "одинокий", "If I lived alone, I'd feel lonely.", "Если бы я жил один, мне было бы одиноко."],
      ["borrow", "брать взаймы", "If I bought a car, I'd have to borrow money.", "Если бы я купил машину, пришлось бы занимать деньги."],
      ["lend — lent", "одалживать — одолжил", "Could you lend me your charger?", "Можешь одолжить мне зарядку?"],
      ["quit — quit", "бросать, уходить (с работы)", "If I quit my job, I'd travel for a year.", "Если бы я уволился, я бы год путешествовал."],
      ["abroad", "за границей, за границу", "Would you move abroad for a good job?", "Ты бы переехал за границу ради хорошей работы?"],
      ["fluently", "бегло, свободно", "I wish I spoke English fluently.", "Вот бы свободно говорить по-английски."],
      ["rich", "богатый", "If I were rich, I'd open a game studio.", "Если бы я был богат, я бы открыл игровую студию."],
      ["position", "положение, должность", "What would you do in my position?", "Что бы ты сделал на моём месте?"],
      ["offer", "предлагать; предложение", "If they offered me the job, I'd take it.", "Если бы мне предложили эту работу, я бы согласился."],
      ["accept", "принимать, соглашаться", "Would you accept the offer?", "Ты бы принял предложение?"],
      ["refuse", "отказываться", "I'd refuse if they asked me to work at night.", "Я бы отказался, если бы меня попросили работать ночью."],
      ["honest", "честный", "To be honest, I wish I had more money.", "Честно говоря, хотелось бы больше денег."],
      ["invisible", "невидимый", "If I were invisible, I'd go to every concert.", "Если бы я был невидимкой, ходил бы на все концерты."],
      ["skill", "навык, умение", "I wish I had better drawing skills.", "Жаль, что я не очень хорошо рисую."],
      ["advice", "совет (неисчисляемое)", "Thanks for the advice!", "Спасибо за совет!"]
    ],
    texts: [
      {
        id: 't-b1-11-1', title: 'Chat questions: what would you do?', level: 'B1',
        text: `Dan: Welcome back, chat! While Liza's game is loading, let's answer some of your questions. First one: "If you didn't stream, what would you do?"
Liza: Honestly? If I didn't stream, I'd probably work as a UI designer full-time. I still do some freelance work, but if I had more time, I'd take bigger projects.
Dan: I'd be a chef. Well, I wish I could cook. If I cooked the way I play, the kitchen would be on fire.
Liza: That's true. Next question: "Would you move abroad if you got a good offer?"
Dan: Hmm. If a studio in Canada offered me a job, I might go. But I'd miss my friends. If they came with me, I'd go tomorrow.
Liza: I wouldn't go. I'm glad I live here — my family is close and the coffee is cheap. Although I wish it weren't so cold in winter.
Dan: OK, next: "What would you do if you won the lottery?"
Liza: I'm not going to win, I never buy tickets! But if I won, I'd buy my parents a house by the sea and build a real studio with a soundproof room.
Dan: If I were rich, I'd buy every game on my wishlist and never finish any of them.
Liza: Classic Dan. Oh, someone asks: "Liza, can you teach us to draw?" I wish I had time for a whole course, really. But if I find a free weekend next month, I'll do a live drawing stream. That one is real — I promise.
Dan: See, chat? She said "if I find", not "if I found". That means she's actually planning it.
Liza: Ha! Last one: "If you could live in any game world, which one would you choose?"
Dan: Stardew Valley. No bosses, no deadlines, just vegetables.
Liza: I'd choose Skyrim. If I lived there, I could explore the mountains every day. Although, to be honest, I'd get lost in five minutes.
Dan: You get lost in our kitchen. OK, the game has loaded. Let's go!`,
        questions: [
          { q: 'What would Liza do if she didn\'t stream?', o: ['She would be a chef', 'She would work as a UI designer full-time', 'She would move to Canada'], a: 1 },
          { q: 'Why wouldn\'t Liza move abroad?', o: ['She is glad she lives near her family', 'She can\'t speak English', 'She doesn\'t like cold weather'], a: 0 },
          { q: 'Which plan is real, according to Dan?', o: ['Buying a house by the sea', 'Living in Skyrim', 'A live drawing stream'], a: 2 }
        ]
      },
      {
        id: 't-b1-11-2', title: 'My list of wishes (and a plan)', level: 'B1',
        text: `Every January I write a list of things I wish were different. This year I decided to look at it honestly and see which wishes could become plans.

I wish I spoke English fluently. At work I read documentation in English every day, but when a client calls, I freeze. If I spoke better, I could work with studios from anywhere in the world. So this is not just a wish any more. If I practise every evening, I'll be ready for calls by the summer.

I wish I didn't have to commute. The office is an hour away, and the metro is terribly crowded in the morning. If I worked from home three days a week, I'd have two extra hours a day. I'm going to ask my boss about it. Honestly, I'd be surprised if she said no, because half of the team already works remotely.

I wish I could draw faster. Sometimes I spend a whole day on one icon. My friend Kate always says, "If you weren't such a perfectionist, you'd finish in an hour." She's probably right, but if I changed that, would I still be me?

I wish my flat were bigger. That one is harder. If I moved to a bigger flat, I'd pay twice as much, and I can't afford it right now. So it stays on the list. Maybe next year.

And a few things I'm glad about: I'm glad I live near a park, I'm glad I have friends who play games with me every Friday, and I'm glad I chose this job, even on difficult days.

What about you? If you wrote a list like this today, what would be first on it?`,
        questions: [
          { q: 'What happens when a client calls the author?', o: ['She freezes', 'She calls Kate', 'She answers in Russian'], a: 0 },
          { q: 'Why would the author be surprised if her boss said no?', o: ['Because the boss is her friend', 'Because half of the team already works remotely', 'Because the office is closing'], a: 1 },
          { q: 'Why can\'t the author move to a bigger flat now?', o: ['She doesn\'t want to leave the park', 'She can\'t afford it', 'Her friends live nearby'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'You never buy tickets. You say: If I ___ the lottery, I\'d buy a house for my parents.', o: ['win', 'won', 'would win'], a: 1, why: 'Вы этого не ждёте → если бы: if + прошедшая форма.' },
      { t: 'choice', q: 'I think I left my charger at your place. If you ___ it, can you text me?', o: ['find', 'found', 'would find'], a: 0, why: 'Вполне реально найти → if + настоящее время.' },
      { t: 'choice', q: 'If I had a better microphone, I ___ start a podcast — I\'m not sure yet.', o: ['will', 'might', 'would have'], a: 1, why: '«Может быть, стал бы» → might + глагол.' },
      { t: 'choice', q: 'I wish I ___ to work on Saturday.', o: ['don\'t have', 'didn\'t have', 'wouldn\'t have'], a: 1, why: 'После wish о настоящем → прошедшая форма: didn\'t have to.' },
      { t: 'choice', q: 'Жаль, что я не умею играть на гитаре.', o: ['I wish I can play the guitar.', 'I wish I could play the guitar.', 'I wish I couldn\'t play the guitar.'], a: 1, why: 'can → could после wish, и без not: хотим, чтобы умели.' },
      { t: 'choice', q: 'I\'d go for a walk if it ___ so windy.', o: ['isn\'t', 'weren\'t', 'wouldn\'t be'], a: 1, why: 'На самом деле ветрено → если бы: weren\'t (или wasn\'t).' },
      { t: 'choice', q: 'I ___ I live near the office. It takes me five minutes to get there.', o: ['wish', 'am glad', 'would'], a: 1, why: 'Факт хороший и настоящий → glad + настоящее время.' },
      { t: 'choice', q: 'What would you do if somebody ___ your account?', o: ['would hack', 'hacked', 'hacks'], a: 1, why: 'В if-половине would не ставим → прошедшая форма hacked.' },
      { t: 'gap', q: 'If I ___ his number, I\'d call him right now. (know)', a: ['knew'], why: 'Номера нет → если бы: know → knew.' },
      { t: 'gap', q: 'I wish there ___ so many ads in this game. (not / be)', a: ['weren\'t', 'were not', 'wasn\'t', 'was not'], why: 'wish + прошедшая форма: there weren\'t.' },
      { t: 'gap', q: 'If we ___ now, we could catch the last train. (leave)', a: ['left'], why: '«Если бы вышли» → if + прошедшая форма: left.' },
      { t: 'gap', q: 'I\'d be surprised if Max ___ on time. He\'s always late. (come)', a: ['came'], why: 'I\'d be surprised if… + прошедшая форма: мы ждём обратного.' },
      { t: 'gap', q: 'Do you ever wish you ___ fly? (can)', a: ['could'], why: 'После wish can превращается в could.' },
      { t: 'gap', q: 'She could get that job if she ___ speak English. (can)', a: ['could'], why: 'В if-половине could = «если бы умела».' },
      { t: 'order', a: 'I wish I had more free time', ru: 'Жаль, что у меня мало свободного времени' },
      { t: 'order', a: 'What would you do in my position', ru: 'Что бы ты сделал на моём месте?' },
      { t: 'tr', q: 'Жаль, что ты живёшь так далеко.', a: ['i wish you lived closer', 'i wish you didn\'t live so far away', 'i wish you did not live so far away', 'i wish you didn\'t live so far', 'i wish you did not live so far', 'i wish you lived nearer'] },
      { t: 'tr', q: 'Если бы я не был таким уставшим, я бы пошёл на вечеринку.', a: ['if i wasn\'t so tired i would go to the party', 'if i weren\'t so tired i would go to the party', 'if i was not so tired i would go to the party', 'if i were not so tired i would go to the party', 'if i wasn\'t so tired i\'d go to the party', 'if i weren\'t so tired i\'d go to the party', 'if i was not so tired i\'d go to the party', 'if i were not so tired i\'d go to the party', 'i would go to the party if i wasn\'t so tired', 'i would go to the party if i weren\'t so tired', 'i\'d go to the party if i wasn\'t so tired', 'i\'d go to the party if i weren\'t so tired'] },
      { t: 'listen', say: 'I would if I could', a: ['i would if i could'] },
      { t: 'listen', say: 'If I were you, I would take the offer', a: ['if i were you i would take the offer', 'if i were you i\'d take the offer'] }
    ],
    test: [
      { t: 'choice', q: 'You often see Kate. You say to a friend: If I ___ Kate, I\'ll tell her to call you.', o: ['see', 'saw', 'would see'], a: 0, why: 'Вы часто её видите — это реально → if + настоящее, will.' },
      { t: 'choice', q: 'Nobody is going to press the red button. What would happen if somebody ___ it?', o: ['presses', 'pressed', 'would press'], a: 1, why: 'Этого не ждём → if + прошедшая форма; would только во второй половине.' },
      { t: 'gap', q: 'I can\'t afford a new PC. If I ___ one, I would have to borrow money. (buy)', a: ['bought'], why: 'Покупать не собираюсь → если бы: buy → bought.' },
      { t: 'choice', q: 'Вот бы сейчас была пятница!', o: ['I wish it is Friday!', 'I wish it were Friday!', 'I wish it would be Friday!'], a: 1, why: 'wish о настоящем → прошедшая форма were (или was), не would.' },
      { t: 'gap', q: 'I\'m so bored on this train. I wish I ___ something to read. (have)', a: ['had'], why: 'Сейчас нечего читать → wish + had.' },
      { t: 'choice', q: 'I love this city. I\'m glad I ___ here.', o: ['live', 'lived', 'would live'], a: 0, why: 'glad — о реальном хорошем факте → настоящее время.' },
      { t: 'choice', q: 'It\'s a pity he can\'t drive. It would be useful if he ___.', o: ['can', 'could', 'would'], a: 1, why: 'Факт can\'t → в «если бы» could.' },
      { t: 'gap', q: 'If there ___ an election tomorrow, who would you vote for? (be)', a: ['was', 'were'], why: 'Выборов завтра не будет → воображаем: if there was/were.' },
      { t: 'choice', q: 'If I got a bonus, I ___ buy a new monitor — or maybe I\'d save it.', o: ['will', 'might', 'must'], a: 1, why: 'Не уверен, возможно → might.' },
      { t: 'gap', q: 'I wouldn\'t send that message if I ___ you. (be)', a: ['were', 'was'], why: 'Совет «на твоём месте» → if I were you.' },
      { t: 'choice', q: 'Если бы мне не нужно было рано вставать, я бы досмотрел сериал.', o: ['If I didn\'t have to get up early, I\'d finish the series.', 'If I wouldn\'t have to get up early, I\'d finish the series.', 'If I don\'t have to get up early, I\'d finish the series.'], a: 0, why: 'Факт have to → didn\'t have to; would только во второй половине.' },
      { t: 'choice', q: 'What if we ___ the logo a bit bigger?', o: ['make', 'made', 'would make'], a: 1, why: 'What if… как мягкое предложение-фантазия → прошедшая форма made.' }
    ]
  },

  // ───────────────────────────── UNIT B1-12 ─────────────────────────────
  {
    id: 'b1-12', level: 'B1', num: 12, track: 'main',
    books: { blue: [42, 43] },
    title: 'Passive глубже: be done, been done, being done',
    summary: 'Научимся строить passive в любом времени: «когда я пришёл, комнату убирали» (was being cleaned), «к тому времени баг уже исправили» (had been fixed), «файл, наверное, удалили» (must have been deleted) — и не ставить в passive глаголы, которые его не терпят.',
    grammar: [
      {
        title: '1. Главная идея: одна схема на все времена',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-18): <b>is done, was done, is being done, has been done, will be done</b>, «кем» — через <b>by</b>. Дальше ничего нового не изобретаем: время всегда показывает <b>be</b>, а третья форма (V3) не меняется никогда. Научимся собирать passive в любом времени — даже в самых длинных.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Когда я пришёл, комнату <b>убирали</b>.</p><p>К вечеру баг уже <b>исправили</b>.</p><p>Файл, наверное, <b>удалили</b>.</p><p>Это <b>надо было проверить</b> раньше.</p><p>Я хочу, чтобы <b>меня оставили</b> в покое.</p></div>
  <div><div class="g-h">English</div><p><span class="say">When I arrived, the room <b>was being cleaned</b>.</span></p><p><span class="say">By the evening, the bug <b>had been fixed</b>.</span></p><p><span class="say">The file <b>must have been deleted</b>.</span></p><p><span class="say">It <b>should have been checked</b> earlier.</span></p><p><span class="say">I want <b>to be left</b> alone.</span></p></div>
</div>
<div class="g-tip">Русский passive часто прячется в форме без «кто»: «убирали», «исправили», «удалили». Видите такую — почти наверняка по-английски нужен passive.</div>
<div class="mini" data-q="Мой аккаунт взломали. (результат важен сейчас)" data-o="My account has hacked.|My account has been hacked.|My account hacked." data-a="1" data-why="Аккаунт не сам взломал → passive, результат сейчас → has been + V3."></div>`
      },
      {
        title: '2. Карта: как любое время превращается в passive',
        html: `
<table>
<tr><th>Время</th><th>Active</th><th>Passive</th></tr>
<tr><td>Present Simple</td><td>They test it.</td><td><span class="say">It <b>is tested</b>.</span></td></tr>
<tr><td>Present Continuous</td><td>They are testing it.</td><td><span class="say">It <b>is being tested</b>.</span></td></tr>
<tr><td>Past Simple</td><td>They tested it.</td><td><span class="say">It <b>was tested</b>.</span></td></tr>
<tr><td>Past Continuous</td><td>They were testing it.</td><td><span class="say">It <b>was being tested</b>.</span></td></tr>
<tr><td>Present Perfect</td><td>They have tested it.</td><td><span class="say">It <b>has been tested</b>.</span></td></tr>
<tr><td>Past Perfect</td><td>They had tested it.</td><td><span class="say">It <b>had been tested</b>.</span></td></tr>
<tr><td>will / can / must…</td><td>They will test it.</td><td><span class="say">It <b>will be tested</b>.</span></td></tr>
<tr><td>modal + have</td><td>They should have tested it.</td><td><span class="say">It <b>should have been tested</b>.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Собираем passive из любой фразы</div><ol>
<li>Определите время в active: <i>were testing</i> — Past Continuous.</li>
<li>Поставьте <b>be</b> в это же время: Past Continuous от be → <b>was / were being</b>.</li>
<li>Добавьте V3 основного глагола: <b>tested</b>.</li>
<li>Нужно сказать, кто сделал, — добавьте <b>by</b>: <span class="say">It was being tested by our QA team.</span></li>
</ol></div>
<div class="g-tip">В passive всегда на одну форму be больше: are testing → is <b>being</b> tested; have tested → has <b>been</b> tested; should have tested → should have <b>been</b> tested.</div>
<div class="mini" data-q="They had closed the shop. → The shop ___." data-o="had closed|had been closed|was being closed" data-a="1" data-why="Past Perfect от be → had been + V3."></div>`
      },
      {
        title: '3. Was being done — процесс в прошлом',
        html: `
<div class="g-idea"><b>was / were being + V3</b> — с чем-то <b>как раз что-то делали</b> в определённый момент в прошлом. Как Past Continuous, только в passive.</div>
<div class="g-formula"><span class="g-part">was / were</span><span class="g-plus">+</span><span class="g-part g-v">being</span><span class="g-plus">+</span><span class="g-part g-v">V3</span></div>
<ul class="g-list">
<li><span class="say">When I got to the office, the kitchen was being painted.</span> — Когда я пришёл в офис, кухню красили.</li>
<li><span class="say">While the server was being updated, nobody could log in.</span> — Пока обновляли сервер, никто не мог зайти.</li>
<li><span class="say">I had a feeling that we were being followed.</span> — У меня было чувство, что за нами следят.</li>
<li><span class="say">I didn't know that our conversation was being recorded.</span> — Я не знал, что наш разговор записывают.</li>
<li><span class="say">The game was being developed for seven years.</span> — Игру разрабатывали семь лет.</li>
</ul>
<p>Сравните — одна буква смысла:</p>
<table>
<tr><th>was cleaned</th><th>was being cleaned</th></tr>
<tr><td><span class="say">The room was cleaned yesterday.</span><br><span class="muted">убрали, готово</span></td><td><span class="say">When I came in, the room was being cleaned.</span><br><span class="muted">как раз убирали, в процессе</span></td></tr>
</table>
<div class="g-bad">When I came, the room was cleaning.</div>
<div class="g-good">When I came, the room <b>was being cleaned</b>. <span class="muted">— комната сама не убиралась</span></div>
<div class="mini" data-q="When we arrived, the stage ___, so the concert started late." data-o="was building|was being built|had built" data-a="1" data-why="В тот момент в процессе + сцену строили люди → was being + V3."></div>`
      },
      {
        title: '4. Had been done — сделано ещё раньше',
        html: `
<div class="g-idea"><b>had been + V3</b> — с чем-то это сделали <b>до</b> другого момента в прошлом. Как Past Perfect (урок B1-5), только в passive.</div>
<div class="g-formula"><span class="g-part">had</span><span class="g-plus">+</span><span class="g-part g-v">been</span><span class="g-plus">+</span><span class="g-part g-v">V3</span></div>
<ul class="g-list">
<li><span class="say">When we arrived at the party, all the pizza had been eaten.</span> — Когда мы пришли, всю пиццу уже съели.</li>
<li><span class="say">The vegetables didn't taste good. They had been cooked too long.</span> — Овощи были невкусные: их переварили.</li>
<li><span class="say">The laptop was five years old, but it hadn't been used much.</span> — Ноутбуку было пять лет, но им почти не пользовались.</li>
<li><span class="say">Later I found out that my account had been hacked a week before.</span> — Потом я узнал, что аккаунт взломали ещё за неделю до этого.</li>
<li><span class="say">By the time fans noticed, the post had been deleted.</span> — К тому времени, как фанаты заметили, пост уже удалили.</li>
</ul>
<table>
<tr><th>was stolen</th><th>had been stolen</th></tr>
<tr><td><span class="say">My bike was stolen last night.</span><br><span class="muted">просто событие в прошлом</span></td><td><span class="say">When I went outside, my bike had been stolen.</span><br><span class="muted">украли ещё до того, как я вышел</span></td></tr>
</table>
<div class="g-bad">When I checked, the file already deleted.</div>
<div class="g-good">When I checked, the file <b>had already been deleted</b>.</div>
<div class="mini" data-q="The windows were dirty. They ___ for months." data-o="hadn't cleaned|hadn't been cleaned|weren't cleaning" data-a="1" data-why="До того момента их не мыли (мыть должны люди) → hadn't been + V3."></div>`
      },
      {
        title: '5. To be done — passive после модальных и глаголов',
        html: `
<div class="g-idea">Там, где нужна начальная форма глагола (после <b>must, can, will, should</b>, после <b>to</b>), passive выглядит как <b>be + V3</b> или <b>to be + V3</b>.</div>
<div class="g-formula"><span class="g-part">must / can / will…</span><span class="g-plus">+</span><span class="g-part g-v">be V3</span><span class="g-sep">·</span><span class="g-part">want / need / going / have…</span><span class="g-plus">+</span><span class="g-part g-v">to be V3</span></div>
<ul class="g-list">
<li><span class="say">The lag is terrible. Something must be done.</span> — Лаги ужасные. Надо что-то делать.</li>
<li><span class="say">This bug can't be reproduced.</span> — Этот баг не воспроизводится.</li>
<li><span class="say">The music was so loud it could be heard from the street.</span> — Музыку было слышно даже с улицы.</li>
<li><span class="say">A mystery is something that can't be explained.</span> — Загадка — это то, что нельзя объяснить.</li>
<li><span class="say">This needs to be fixed before the release.</span> — Это нужно исправить до релиза.</li>
<li><span class="say">The meeting is going to be held online.</span> — Встречу проведут онлайн.</li>
<li><span class="say">Please go away. I want to be left alone.</span> — Уйди, пожалуйста. Я хочу, чтобы меня оставили в покое.</li>
<li><span class="say">I'd love to be invited to that festival.</span> — Я бы с радостью получил приглашение на этот фестиваль.</li>
</ul>
<p>Active или passive инфинитив — смысл противоположный:</p>
<table>
<tr><th>Active: я делаю</th><th>Passive: со мной делают</th></tr>
<tr><td><span class="say">I want to invite Max.</span><br><span class="muted">я приглашаю</span></td><td><span class="say">I want to be invited.</span><br><span class="muted">хочу, чтобы меня пригласили</span></td></tr>
<tr><td><span class="say">She expects to promote him.</span></td><td><span class="say">She expects to be promoted.</span><br><span class="muted">ждёт, что её повысят</span></td></tr>
</table>
<div class="g-bad">The report must finish by Friday. · I don't want to be disturb.</div>
<div class="g-good">The report must <b>be finished</b> by Friday. · I don't want to <b>be disturbed</b>.</div>
<div class="mini" data-q="The new version is going ___ next month." data-o="to release|to be released|be released" data-a="1" data-why="Версию выпускают люди, после going нужен to → to be + V3."></div>`
      },
      {
        title: '6. Should have been done, must have been done — догадки и упрёки о прошлом',
        html: `
<div class="g-idea">Вы уже знаете (уроки B1-8 и B1-10) <b>must have done, might have done, should have done</b>. В passive добавляем <b>been</b>: <b>модальный + have been + V3</b>.</div>
<div class="g-formula"><span class="g-part">must / might / should / can't</span><span class="g-plus">+</span><span class="g-part g-v">have been</span><span class="g-plus">+</span><span class="g-part g-v">V3</span></div>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Пример</th></tr>
<tr><td>must have been done</td><td>наверняка сделали</td><td><span class="say">The file is gone. It must have been deleted.</span></td></tr>
<tr><td>might / may / could have been done</td><td>возможно, сделали</td><td><span class="say">The letter might have been sent to the wrong address.</span></td></tr>
<tr><td>can't have been done</td><td>не может быть, чтобы сделали</td><td><span class="say">It can't have been tested — it crashes all the time.</span></td></tr>
<tr><td>should have been done</td><td>надо было сделать (а не сделали)</td><td><span class="say">This road should have been repaired years ago.</span></td></tr>
<tr><td>seem to have been done</td><td>похоже, сделали</td><td><span class="say">The problem seems to have been solved.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">We should have been warned about the changes.</span> — Нас должны были предупредить об изменениях.</li>
<li><span class="say">The fire might have been caused by an old cable.</span> — Пожар, возможно, случился из-за старого кабеля.</li>
<li><span class="say">The bug seems to have been added in the last update.</span> — Похоже, баг появился с последним обновлением.</li>
</ul>
<div class="g-bad">The file must have deleted. <span class="muted">— файл сам ничего не удалял</span></div>
<div class="g-good">The file must <b>have been deleted</b>.</div>
<div class="g-bad">It should have been send yesterday.</div>
<div class="g-good">It should have been <b>sent</b> yesterday. <span class="muted">— после been всегда V3</span></div>
<div class="mini" data-q="I haven't got the package. It ___ to the wrong address." data-o="might have sent|might have been sent|might been sent" data-a="1" data-why="Посылку отправляют люди → passive: might have been + V3."></div>
<div class="mini" data-q="Нас должны были пригласить!" data-o="We should have invited!|We should have been invited!|We should be invited!" data-a="1" data-why="Упрёк о прошлом + приглашают нас → should have been + V3."></div>`
      },
      {
        title: '7. Active или passive: глаголы-ловушки и русское «-ся»',
        html: `
<div class="g-idea">Не всякий глагол можно поставить в passive. Если у глагола нет объекта (с кем-то/чем-то), passive невозможен: <b>happen, disappear, die, arrive, fall, seem, exist</b>.</div>
<div class="g-bad">The accident was happened at night. · My keys were disappeared.</div>
<div class="g-good">The accident <b>happened</b> at night. · My keys <b>disappeared</b>.</div>
<p>Пары, где смысл зависит от выбора:</p>
<table>
<tr><th>Active — само, сам</th><th>Passive — кто-то сделал</th></tr>
<tr><td><span class="say">My phone disappeared.</span><br><span class="muted">пропал, неизвестно как</span></td><td><span class="say">My phone was stolen.</span><br><span class="muted">его украли</span></td></tr>
<tr><td><span class="say">She fell off her bike.</span><br><span class="muted">упала сама</span></td><td><span class="say">She was knocked off her bike.</span><br><span class="muted">её сбили</span></td></tr>
<tr><td><span class="say">He resigned.</span><br><span class="muted">ушёл сам</span></td><td><span class="say">He was fired.</span><br><span class="muted">его уволили</span></td></tr>
<tr><td><span class="say">The noise doesn't bother me.</span></td><td><span class="say">I'm not bothered by the noise.</span></td></tr>
<tr><td><span class="say">What do you call this tool?</span></td><td><span class="say">What is this tool called?</span></td></tr>
</table>
<p>Русское <b>«-ся»</b> бывает двух видов — проверьте, делает ли кто-то действие:</p>
<table>
<tr><th>Русский</th><th>English</th></tr>
<tr><td>Дверь открылась (сама, от ветра).</td><td><span class="say">The door opened.</span></td></tr>
<tr><td>Игра продаётся везде (её продают магазины).</td><td><span class="say">The game is sold everywhere.</span></td></tr>
<tr><td>Баг сейчас исправляется (его чинят).</td><td><span class="say">The bug is being fixed.</span></td></tr>
<tr><td>Как пишется это слово?</td><td><span class="say">How is this word spelled?</span></td></tr>
</table>
<p>В нейтральном английском вместо «они / люди / кто-то» обычно берут passive:</p>
<ul class="g-list">
<li>They cancelled all flights. → <span class="say">All flights were cancelled.</span></li>
<li>Somebody has moved the furniture. → <span class="say">The furniture has been moved.</span></li>
</ul>
<div class="mini" data-q="A strange thing ___ yesterday." data-o="was happened|happened|has been happened" data-a="1" data-why="happen не бывает в passive — у него нет объекта."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">When I came, the office was renovating.</div><div class="g-good">When I came, the office <b>was being renovated</b>.</div>
<div class="g-bad">When we arrived, all the tickets had sold.</div><div class="g-good">When we arrived, all the tickets <b>had been sold</b>.</div>
<div class="g-bad">The file must have deleted.</div><div class="g-good">The file must <b>have been deleted</b>.</div>
<div class="g-bad">We should have warned about it. <span class="muted">— про нас</span></div><div class="g-good">We should <b>have been warned</b> about it.</div>
<div class="g-bad">I want to leave alone.</div><div class="g-good">I want <b>to be left</b> alone.</div>
<div class="g-bad">The accident was happened at night.</div><div class="g-good">The accident <b>happened</b> at night.</div>
<div class="g-bad">It can't be explain.</div><div class="g-good">It can't be <b>explained</b>.</div>
<div class="g-bad">What do these flowers call?</div><div class="g-good">What <b>are</b> these flowers <b>called</b>?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Passive = <b>be в нужном времени + V3</b>: was <b>being</b> done · had <b>been</b> done · (to) <b>be</b> done · must / should have <b>been</b> done — а happen, disappear, die в passive не ставим.</div>`
      }
    ],
    words: [
      ["release", "выпускать; выход, релиз", "The update was finally released on Tuesday.", "Обновление наконец выпустили во вторник."],
      ["announce", "объявлять, анонсировать", "The sequel had been announced a year before.", "Сиквел анонсировали за год до этого."],
      ["delay", "задерживать; задержка", "The release has been delayed again.", "Релиз снова перенесли."],
      ["cancel", "отменять", "All flights were cancelled because of the fog.", "Все рейсы отменили из-за тумана."],
      ["ban", "запрещать; банить", "Two thousand cheaters have been banned.", "Две тысячи читеров забанили."],
      ["delete", "удалять", "My save file must have been deleted.", "Мой сейв, должно быть, удалили."],
      ["remove", "убирать, удалять", "The old menu has been removed.", "Старое меню убрали."],
      ["replace", "заменять", "The broken screen was replaced for free.", "Разбитый экран заменили бесплатно."],
      ["restore", "восстанавливать", "The folder is being restored right now.", "Папку прямо сейчас восстанавливают."],
      ["update", "обновлять; обновление", "The app is updated every two weeks.", "Приложение обновляют раз в две недели."],
      ["fix", "исправлять, чинить", "The bug had been fixed before the release.", "Баг исправили ещё до релиза."],
      ["repair", "ремонтировать; ремонт", "This road should have been repaired long ago.", "Эту дорогу давно надо было отремонтировать."],
      ["damage", "повреждать; урон", "The roof was damaged in a storm.", "Крышу повредило бурей."],
      ["injure", "ранить, травмировать", "Fortunately, nobody was injured.", "К счастью, никто не пострадал."],
      ["rescue", "спасать; спасение", "Everybody was rescued from the boat.", "Всех спасли с лодки."],
      ["arrest", "арестовывать", "The hacker was arrested last month.", "Хакера арестовали в прошлом месяце."],
      ["steal — stole — stolen", "красть — украл — украден", "When I came back, my bike had been stolen.", "Когда я вернулся, велосипед уже украли."],
      ["follow", "следовать, идти за", "I think we're being followed.", "Кажется, за нами следят."],
      ["record", "записывать; запись", "Our call was being recorded.", "Наш звонок записывали."],
      ["translate", "переводить (язык)", "The game will be translated into ten languages.", "Игру переведут на десять языков."],
      ["publish", "публиковать, издавать", "Her first comic was published last year.", "Её первый комикс издали в прошлом году."],
      ["approve", "одобрять, утверждать", "The design has to be approved by the client.", "Дизайн должен утвердить клиент."],
      ["reject", "отклонять, отвергать", "My first idea was rejected.", "Мою первую идею отклонили."],
      ["inform", "сообщать, информировать", "We should have been informed about it.", "Нам должны были об этом сообщить."],
      ["warn", "предупреждать", "Players were warned about the server work.", "Игроков предупредили о работах на сервере."],
      ["investigate", "расследовать, разбираться", "The problem is being investigated.", "Проблемой занимаются."],
      ["cause", "вызывать, быть причиной; причина", "The crash might have been caused by a driver.", "Сбой, возможно, вызвал драйвер."],
      ["employ", "нанимать, давать работу", "Two hundred people are employed by the studio.", "В студии работают двести человек."],
      ["disappear", "исчезать, пропадать", "My headphones have disappeared again.", "Мои наушники опять пропали."],
      ["happen", "происходить, случаться", "Nobody knows what happened.", "Никто не знает, что случилось."]
    ],
    texts: [
      {
        id: 't-b1-12-1', title: 'Patch day: what has been changed', level: 'B1',
        text: `The long-awaited update for the strategy game Sky Harbor was finally released on Tuesday, three weeks later than planned.

The patch had been announced in March, and fans had been promised new maps and better matchmaking. But in early April the release was suddenly delayed. According to the developers, a serious bug had been found during final testing: in some cases, save files were being deleted when players changed the language.

"We couldn't release it like that," said the lead designer, Maria Lopes. "Thousands of saves could have been lost. To be honest, the bug should have been noticed much earlier. It seems to have been added in an older update, and nobody saw it."

While the problem was being fixed, the team kept players informed on social media. Every few days, short videos were posted that showed what was being changed.

So what has been changed? First, the interface has been completely redesigned. The old menus, which had been criticised for years, have been replaced with a cleaner layout. Second, two new maps have been added, and three more are being developed right now. Third, cheating is taken much more seriously: more than two thousand accounts have already been banned this week.

Not everything has been solved, though. Some players say the game still crashes on older computers. The studio says the issue is being investigated and a small fix will be released next week.

"We know it has been a difficult month," Lopes added. "But a game is never really finished. It's always being improved. We just want every update to be tested properly before it is released."

Fans seem to be happy, at least for now. The patch has been downloaded more than a million times in two days.`,
        questions: [
          { q: 'Why was the release delayed?', o: ['The new maps weren\'t ready', 'A bug was deleting save files', 'The lead designer was ill'], a: 1 },
          { q: 'What has happened to the old menus?', o: ['They have been replaced', 'They are being translated', 'Nothing, they are the same'], a: 0 },
          { q: 'What is the studio doing about the crashes on older computers?', o: ['Nothing, it can\'t be fixed', 'The problem is being investigated', 'Old computers have been banned'], a: 1 }
        ]
      },
      {
        id: 't-b1-12-2', title: 'Where is our folder?', level: 'B1',
        text: `Kate: Max, have you seen the folder with the new icons? I can't find it anywhere.
Max: Wait, let me look. Hmm, the whole project looks different. The pages have been renamed too.
Kate: Renamed? Who did that? And where are my icons? They can't have been deleted. We've been working on them for two weeks!
Max: Calm down. They should have been backed up on Friday. That's the rule.
Kate: Should have been, yes. But Oleg was on holiday last week. I'm not sure the backup was done at all.
Max: So they might have been lost. Great.
Kate: Don't say that! Look, there's a message from the system: "Folder archived by admin."
Max: Archived? So it wasn't deleted. It was just moved somewhere. Let me write to the admin.
Kate: Why weren't we informed? We should have been warned before anything was moved.
Max: OK, he's answered. The company is moving to a new server, and all the old projects are being archived this week. Our folder was archived by mistake, because it had been created last year.
Kate: By mistake! Can it be restored?
Max: It's being restored right now. He says it will be done in ten minutes.
Kate: Fine. But this shouldn't have happened. Next time, I want to be told before anything is touched.
Max: I'll suggest that at the meeting. Oh, and by the way, the office printer has disappeared too.
Kate: Printers don't just disappear. It must have been taken for repairs.
Max: Or it was stolen by the marketing team. They've been complaining about their old one for months.
Kate: Ha! Anyway, is the folder back?
Max: Yes! Everything has been restored. Nothing was lost.
Kate: Thank goodness. Let's make our own backup. Today.`,
        questions: [
          { q: 'What really happened to the folder?', o: ['It was deleted by Oleg', 'It was archived by mistake', 'It was stolen by the marketing team'], a: 1 },
          { q: 'Why is Kate angry?', o: ['Nobody warned them before the folder was moved', 'Max deleted her icons', 'The printer was broken'], a: 0 },
          { q: 'What does Kate think happened to the printer?', o: ['It was stolen', 'It disappeared by itself', 'It must have been taken for repairs'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'When I arrived, the room ___, so I waited outside.', o: ['was cleaned', 'was being cleaned', 'had cleaned'], a: 1, why: 'В тот момент в процессе, убирали люди → was being + V3.' },
      { t: 'choice', q: 'The food was cold and dry. It ___ too long.', o: ['had been cooked', 'has cooked', 'was cooking'], a: 0, why: 'Раньше момента в прошлом и готовили люди → had been + V3.' },
      { t: 'choice', q: 'I can\'t find my save file. It might ___ by the update.', o: ['be deleted', 'have been deleted', 'have deleted'], a: 1, why: 'Догадка о прошлом в passive → might have been + V3.' },
      { t: 'choice', q: 'My keys ___ — I can\'t find them anywhere.', o: ['have disappeared', 'have been disappeared', 'were disappeared'], a: 0, why: 'disappear не бывает в passive: у него нет объекта.' },
      { t: 'choice', q: 'The situation is serious. Something must ___ before it\'s too late.', o: ['do', 'be done', 'been done'], a: 1, why: 'После must → be + V3.' },
      { t: 'choice', q: 'That car has been behind us for twenty minutes. I think we ___.', o: ['are following', 'are being followed', 'have followed'], a: 1, why: 'Следят за нами прямо сейчас → are being + V3.' },
      { t: 'choice', q: 'These flowers are beautiful. What ___?', o: ['do they call', 'are they called', 'are they calling'], a: 1, why: 'Цветы не называют сами → passive: What are they called?' },
      { t: 'choice', q: 'Please go away. I want ___ alone.', o: ['to leave', 'to be left', 'being left'], a: 1, why: 'Хочу, чтобы меня оставили → to be + V3.' },
      { t: 'gap', q: 'The office ___ when we arrived, so we worked in a café. (renovate)', a: ['was being renovated'], why: 'Процесс в момент прошлого + passive → was being + V3.' },
      { t: 'gap', q: 'By the time the police came, the money ___. (already / take)', a: ['had already been taken'], why: 'Сделали раньше другого прошлого события → had already been + V3.' },
      { t: 'gap', q: 'The report should ___ yesterday. (send)', a: ['have been sent'], why: 'Упрёк о прошлом в passive → should have been + V3 (sent).' },
      { t: 'gap', q: 'The new version is going ___ next month. (release)', a: ['to be released'], why: 'После going нужен to; игру выпускают → to be + V3.' },
      { t: 'gap', q: 'Tom ___ from his job last week. He was always late. (fire)', a: ['was fired'], why: 'Его уволили (не сам ушёл) → passive was + V3.' },
      { t: 'gap', q: 'Everything works now. The problem seems ___. (solve)', a: ['to have been solved'], why: 'seem + to have been + V3 — «похоже, уже решили».' },
      { t: 'order', a: 'The game was being tested at that time', ru: 'В то время игру тестировали' },
      { t: 'order', a: 'The files must have been deleted', ru: 'Файлы, должно быть, удалили' },
      { t: 'tr', q: 'Когда я пришёл, баг уже исправили.', a: ['when i came the bug had already been fixed', 'when i arrived the bug had already been fixed', 'when i came in the bug had already been fixed', 'the bug had already been fixed when i came', 'the bug had already been fixed when i arrived', 'when i got there the bug had already been fixed'] },
      { t: 'tr', q: 'Нас должны были предупредить.', a: ['we should have been warned', 'we should have been told', 'we should have been informed'] },
      { t: 'listen', say: 'Our conversation was being recorded', a: ['our conversation was being recorded'] },
      { t: 'listen', say: 'It can\'t be explained', a: ['it can\'t be explained', 'it cannot be explained', 'it can not be explained'] }
    ],
    test: [
      { t: 'choice', q: 'The car was three years old, but it ___ much.', o: ['hadn\'t used', 'hadn\'t been used', 'wasn\'t using'], a: 1, why: 'Машиной не пользовались до того момента → hadn\'t been + V3.' },
      { t: 'gap', q: 'When I last visited, a new stadium ___ near the station. (build)', a: ['was being built'], why: 'Стройка шла в тот момент прошлого → was being + V3.' },
      { t: 'choice', q: 'This error ___ — we\'ve tried everything.', o: ['can\'t explain', 'can\'t be explained', 'can\'t been explained'], a: 1, why: 'Ошибку объясняют люди → после can\'t нужно be + V3.' },
      { t: 'choice', q: 'The accident ___ at nine in the evening.', o: ['happened', 'was happened', 'has been happened'], a: 0, why: 'happen не ставится в passive.' },
      { t: 'gap', q: 'The letter hasn\'t arrived. It may ___ to the wrong address. (send)', a: ['have been sent'], why: 'Возможно, в прошлом отправили → may have been + V3.' },
      { t: 'choice', q: 'I didn\'t know that our call ___.', o: ['was recording', 'was being recorded', 'had recorded'], a: 1, why: 'Звонок записывали в тот момент → was being + V3.' },
      { t: 'choice', q: 'Maria had an accident. She ___ off her bike by a car.', o: ['fell', 'was knocked', 'knocked'], a: 1, why: 'Есть by a car — её сбили → passive was knocked.' },
      { t: 'gap', q: 'All flights ___ because of the fog yesterday. (cancel)', a: ['were cancelled', 'were canceled'], why: 'Рейсы отменили люди, yesterday → were + V3.' },
      { t: 'choice', q: 'The noise doesn\'t bother me. = I ___ by the noise.', o: ['am not bothered', 'don\'t bother', 'am not bothering'], a: 0, why: 'Переворачиваем в passive: I am not bothered by…' },
      { t: 'gap', q: 'I\'d like ___ to the final meeting. (invite)', a: ['to be invited'], why: 'Хочу, чтобы пригласили меня → to be + V3.' },
      { t: 'choice', q: 'Sue ___ her job because she didn\'t enjoy it any more.', o: ['resigned from', 'was resigned from', 'was fired from'], a: 0, why: 'Ушла сама (не нравилось) → active resigned; resign не бывает в passive.' },
      { t: 'gap', q: 'The windows were really dirty. They ___ for months. (not / clean)', a: ['hadn\'t been cleaned', 'had not been cleaned'], why: 'До того момента их не мыли → hadn\'t been + V3.' }
    ]
  }
);
