// Юниты B1 23–24: сравнения глубже (far better, no bigger, the more… the…, as … as, the best I've ever…), порядок слов и наречия в середине, still / any more / yet / already / even; предлоги времени и места глубже (during/for/while, by/until, on time/in time, in/at/on, to/into, устойчивые выражения) + итог B1
COURSE.units.push(
  // ───────────────────────────── UNIT B1-23 ─────────────────────────────
  {
    id: 'b1-23', level: 'B1', num: 23, track: 'main',
    books: { blue: [105, 106, 107, 108, 109, 110, 111, 112] },
    title: 'Сравнения глубже; порядок слов; still, any more, yet, even',
    summary: 'Научимся говорить, насколько что-то лучше (far better, slightly faster, no bigger), описывать изменения (better and better, the more… the more…), ставить always, probably, still и even на своё место и чувствовать разницу между still, yet, any more и no longer.',
    grammar: [
      {
        title: '1. Главная идея: сравнение — это не только «больше» и «меньше»',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-10): <b>cheaper, more expensive, the best, as … as, much bigger</b>. Порядок слов и <b>still / yet / already</b> — уроки A1-15 и A2-22. На B1 учимся говорить точнее: <b>насколько</b> больше, как что-то <b>меняется</b>, от чего <b>зависит</b> — и куда в предложении ставить маленькие, но важные слова: <b>always, probably, still, even</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Стало <b>гораздо</b> лучше.</p><p>Становится <b>всё</b> сложнее <b>и</b> сложнее.</p><p><b>Чем</b> раньше, <b>тем</b> лучше.</p><p>Я <b>больше</b> там не работаю.</p><p>Он <b>даже</b> не поздоровался.</p></div>
  <div><div class="g-h">English</div><p><span class="say">It's <b>far better</b> now.</span></p><p><span class="say">It's getting <b>harder and harder</b>.</span></p><p><span class="say"><b>The sooner the better</b>.</span></p><p><span class="say">I don't work there <b>any more</b>.</span></p><p><span class="say">He didn't <b>even</b> say hello.</span></p></div>
</div>
<div class="g-tip">Русское «больше» — одно слово на три случая: <b>more</b> (больше по количеству), <b>any more</b> (перестал: «больше не»), <b>even</b> + сравнение («ещё больше»). Каждый раз спрашивайте себя: сравниваю, перестал или «ещё сильнее»?</div>
<div class="mini" data-q="«Чем раньше, тем лучше»:" data-o="More soon, more good.|The sooner the better.|Sooner is the better." data-a="1" data-why="Конструкция the + сравнение, the + сравнение: the sooner the better."></div>`
      },
      {
        title: '2. Форма сравнения: тонкости и «насколько»',
        html: `
<div class="g-idea">Короткие слова → <b>-er</b>, длинные → <b>more</b>. Это вы знаете. Теперь — пограничные случаи и слова, которые показывают, <b>на сколько</b> больше: гораздо, чуть-чуть, вдвое.</div>
<table>
<tr><th>Случай</th><th>Как</th><th>Пример</th></tr>
<tr><td>2 слога на <b>-y</b></td><td>-ier</td><td><span class="say">earlier, easier, busier, luckier</span></td></tr>
<tr><td>наречие на <b>-ly</b></td><td>more …</td><td><span class="say">more slowly, more carefully, more quietly</span></td></tr>
<tr><td>quiet, simple, clever, narrow</td><td>оба варианта</td><td><span class="say">quieter</span> = <span class="say">more quiet</span></td></tr>
<tr><td>good / well · bad / badly</td><td>особые</td><td><span class="say">better · worse</span></td></tr>
<tr><td>far</td><td>особые</td><td><span class="say">further</span> (или farther)</td></tr>
</table>
<p><b>further</b> — это ещё и «дополнительный, дальнейший»: <span class="say">Let me know if you have any further questions.</span> — Пишите, если будут ещё вопросы. <span class="muted">(farther в этом смысле не бывает)</span></p>
<p>Перед сравнением можно поставить «усилитель»:</p>
<table>
<tr><th>Смысл</th><th>Слова</th><th>Пример</th></tr>
<tr><td>гораздо, намного</td><td><b>much, a lot, far</b></td><td><span class="say">The new version is far more stable.</span></td></tr>
<tr><td>чуть-чуть, немного</td><td><b>a bit, a little, slightly</b></td><td><span class="say">This font is slightly bigger than the other one.</span></td></tr>
<tr><td>ещё (и так уже)</td><td><b>even</b></td><td><span class="say">The sequel is even better.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I felt terrible in the morning, but I feel a lot better now.</span> — Утром было ужасно, но сейчас мне гораздо лучше.</li>
<li><span class="say">Could you talk a bit more slowly? My English isn't that good yet.</span> — Можешь говорить чуть медленнее?</li>
<li><span class="say">The bug is far more serious than we thought.</span> — Баг гораздо серьёзнее, чем мы думали.</li>
</ul>
<div class="g-bad">This laptop is very faster. · It's more better. · Speak slowlier.</div>
<div class="g-good">This laptop is <b>much</b> faster. · It's <b>much</b> better. · Speak <b>more slowly</b>.</div>
<div class="g-tip"><b>very</b> — только с обычной формой: very fast. Со сравнением — <b>much / far / a lot</b>: much faster.</div>
<div class="mini" data-q="Разница огромная: the new update is ___ than the old one." data-o="very better|far better|more better" data-a="1" data-why="Перед сравнением «гораздо» → far / much / a lot; very со сравнением не ставим."></div>
<div class="mini" data-q="Can you walk ___? I can't keep up." data-o="more slowly|slowlier|more slow" data-a="0" data-why="Наречие на -ly сравниваем через more: more slowly."></div>`
      },
      {
        title: '3. no better, any longer; better and better; the more… the more',
        html: `
<div class="g-idea">Три живые конструкции: <b>any / no + сравнение</b> — «ничуть не», <b>better and better</b> — «всё лучше и лучше», <b>the more…, the more…</b> — «чем больше…, тем больше…».</div>
<p><b>any / no + сравнение</b> = «ни капли, ничуть»:</p>
<ul class="g-list">
<li><span class="say">I've waited long enough. I'm not waiting any longer.</span> — Я больше ни минуты не жду.</li>
<li><span class="say">Their office is no bigger than ours.</span> = <span class="say">It isn't any bigger than ours.</span> — Их офис ничуть не больше нашего.</li>
<li><span class="say">Do you feel any better?</span> — Тебе хоть немного лучше?</li>
<li><span class="say">The Pro version is faster, and it's no more expensive.</span> — Pro-версия быстрее, и при этом ничуть не дороже.</li>
</ul>
<p><b>Повтор сравнения</b> = изменение идёт и идёт:</p>
<ul class="g-list">
<li><span class="say">Your English is getting better and better.</span> — Твой английский всё лучше и лучше.</li>
<li><span class="say">Graphics cards are getting more and more expensive.</span> — Видеокарты всё дороже и дороже. <span class="muted">(длинное слово: more and more + слово один раз)</span></li>
<li><span class="say">More and more people play indie games.</span> — Всё больше людей играют в инди-игры.</li>
</ul>
<p><b>the … the …</b> = одно зависит от другого:</p>
<div class="g-formula"><span class="g-part g-v">The + сравнение</span><span class="g-plus">+</span><span class="g-part">кто + глагол</span><span class="g-sep">·</span><span class="g-part g-v">the + сравнение</span><span class="g-plus">+</span><span class="g-part">кто + глагол</span></div>
<ul class="g-list">
<li><span class="say">The more I play, the more I like it.</span> — Чем больше играю, тем больше нравится.</li>
<li><span class="say">The longer you wait, the harder it gets.</span> — Чем дольше ждёшь, тем тяжелее.</li>
<li><span class="say">The more expensive the hotel, the better the service.</span> — Чем дороже отель, тем лучше сервис. <span class="muted">(глагол можно опустить)</span></li>
<li><span class="say">When should we start? — The sooner the better.</span> · <span class="say">A big screen? — Yes, the bigger the better.</span></li>
</ul>
<div class="g-bad">More I practise, more I improve.</div>
<div class="g-good"><b>The</b> more I practise, <b>the</b> better I get.</div>
<p><b>older</b> или <b>elder</b>? <b>elder / eldest</b> — только о членах семьи и только перед существительным: <span class="say">my elder brother</span>. Во всех остальных случаях — older.</p>
<div class="g-bad">My brother is elder than me. · He looks elder than he is.</div>
<div class="g-good">My brother is <b>older</b> than me. · He looks <b>older</b> than he is.</div>
<div class="mini" data-q="Хватит, я больше не жду! — I'm not waiting ___." data-o="no longer|any longer|more long" data-a="1" data-why="После not → any + сравнение: not … any longer."></div>
<div class="mini" data-q="The ___ you practise, the faster you get." data-o="much|more|most" data-a="1" data-why="Чем больше…, тем… → the more…, the + сравнение."></div>`
      },
      {
        title: '4. as … as, less than, twice as…, the same as, than me',
        html: `
<div class="g-idea"><b>not as … as</b> — «не такой… как». <b>as … as</b> в утверждении — «так же… как», «настолько…, насколько». Добавим <b>twice as</b>, <b>the same as</b> и то, какое местоимение ставить после than.</div>
<table>
<tr><th>Смысл</th><th>Конструкция</th><th>Пример</th></tr>
<tr><td>не такой, как</td><td>not as / not so … as</td><td><span class="say">The sequel isn't as good as the first game.</span></td></tr>
<tr><td>меньше, чем</td><td>less … than</td><td><span class="say">The metro was less crowded than usual.</span></td></tr>
<tr><td>настолько, насколько</td><td>as … as</td><td><span class="say">I came as fast as I could.</span></td></tr>
<tr><td>вдвое, втрое</td><td>twice / three times as … as</td><td><span class="say">It costs twice as much as my phone.</span></td></tr>
<tr><td>такой же, как</td><td>the same (…) as</td><td><span class="say">She's the same age as me.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Max isn't as old as he looks.</span> — Макс не такой старый, как выглядит. <span class="muted">(= выглядит старше)</span></li>
<li><span class="say">I don't play as much as I used to.</span> = <span class="say">I play less than I used to.</span> — Я играю меньше, чем раньше.</li>
<li><span class="say">Take as much as you want.</span> · <span class="say">Send it as soon as possible.</span> <span class="muted">(ASAP)</span></li>
<li><span class="say">Walking is just as quick as taking the bus.</span> — Пешком так же быстро, как на автобусе.</li>
<li><span class="say">Their flat is three times as big as ours.</span> = <span class="say">three times the size of ours</span>.</li>
<li><span class="say">You look the same as you did ten years ago.</span> — Ты выглядишь так же, как десять лет назад.</li>
</ul>
<p><b>not so … as</b> — только в отрицании. В утверждении и вопросе — только <b>as … as</b>.</p>
<p>После <b>than</b> и <b>as</b>: или <b>me / him / us</b>, или полностью <b>I am / he does / we have</b>. Просто «than I» звучит странно.</p>
<table>
<tr><th>Разговорно</th><th>Полно</th></tr>
<tr><td><span class="say">You're taller than me.</span></td><td><span class="say">You're taller than I am.</span></td></tr>
<tr><td><span class="say">I can't draw as well as her.</span></td><td><span class="say">I can't draw as well as she can.</span></td></tr>
<tr><td><span class="say">They earn more than us.</span></td><td><span class="say">They earn more than we do.</span></td></tr>
</table>
<div class="g-bad">My laptop is the same like yours. · I'm not so tall than you.</div>
<div class="g-good">My laptop is the same <b>as</b> yours. · I'm not <b>as</b> tall <b>as</b> you.</div>
<div class="mini" data-q="This keyboard costs ___ my old one — 100 dollars, not 50." data-o="twice as much as|twice more as|two times as much than" data-a="0" data-why="Вдвое → twice as much as."></div>
<div class="mini" data-q="Kate lives in the same street ___ me." data-o="like|as|that" data-a="1" data-why="«Такой же, как» → the same as."></div>`
      },
      {
        title: '5. The best I\'ve ever played: превосходная степень глубже',
        html: `
<div class="g-idea">«Самый» = <b>the -est / the most</b>. Тонкости: <b>in</b> или <b>of</b> после «самый», <b>one of the best</b> + множественное число и Present Perfect с <b>ever</b>.</div>
<table>
<tr><th>После «самый»</th><th>Когда</th><th>Пример</th></tr>
<tr><td><b>in</b></td><td>место, группа, компания</td><td><span class="say">the best player in the team</span> · <span class="say">the tallest building in the city</span></td></tr>
<tr><td><b>of</b></td><td>период времени</td><td><span class="say">the hottest day of the year</span> · <span class="say">the best day of my life</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">It's one of the best games of the decade.</span> — Одна из лучших игр десятилетия.</li>
<li><span class="say">She's one of the most talented designers I know.</span> — Одна из самых талантливых дизайнеров, кого я знаю.</li>
<li><span class="say">That's the funniest meme I've ever seen.</span> — Смешнее мема я не видел.</li>
<li><span class="say">What's the most difficult boss you've ever beaten?</span> — Какой самый сложный босс, которого ты побеждал?</li>
<li><span class="say">It's the best series I've watched for ages.</span> — Лучший сериал, что я видел за долгое время.</li>
</ul>
<p>Самый = лучше всех остальных: <span class="say">This café is the cheapest in the area.</span> = <span class="say">It's cheaper than all the others in the area.</span></p>
<p><b>eldest</b> — снова только про семью: <span class="say">their eldest son</span>, но <span class="say">the oldest building in town</span>.</p>
<div class="g-tip">Русское «лучший из всех, что я видел» → по-английски без «из всех»: <b>the best … I've ever seen</b>. А после <b>one of the</b> всегда множественное число: one of the best <b>games</b>.</div>
<div class="g-bad">the best player of the team · one of the best game · the best film I ever saw <span class="muted">(о жизненном опыте)</span></div>
<div class="g-good">the best player <b>in</b> the team · one of the best <b>games</b> · the best film I<b>'ve ever seen</b></div>
<div class="mini" data-q="It was the happiest day ___ my life." data-o="in|of|at" data-a="1" data-why="Период (жизнь, год, день) → of."></div>
<div class="mini" data-q="He's one of the richest ___ in the country." data-o="man|men|mans" data-a="1" data-why="one of the + самый + множественное число: men."></div>`
      },
      {
        title: '6. Порядок слов: что — сразу за глаголом; always, probably, all — в середине',
        html: `
<div class="g-idea">По-русски слова можно переставлять как угодно. По-английски у каждого своё место: <b>глагол + что</b> не разлучаем, <b>где</b> идёт перед <b>когда</b>, а маленькие наречия (always, also, probably, still, even, all, both) садятся <b>в середину</b>, рядом с глаголом.</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span><span class="g-plus">+</span><span class="g-part g-v">что</span><span class="g-plus">+</span><span class="g-part">как</span><span class="g-plus">+</span><span class="g-part">где</span><span class="g-plus">+</span><span class="g-part">когда</span></div>
<ul class="g-list">
<li><span class="say">I like this game very much.</span> — Мне очень нравится эта игра. <span class="muted">(не like very much this game)</span></li>
<li><span class="say">She speaks English fluently.</span> — Она свободно говорит по-английски.</li>
<li><span class="say">I lost my keys, and I also lost my headphones.</span> <span class="muted">(не lost also)</span></li>
<li><span class="say">Anna goes to the gym three times a week.</span> — где (to the gym) → когда (three times a week).</li>
<li><span class="say">We got home after midnight.</span> · <span class="say">After the stream, Dan gave me a lift home.</span> <span class="muted">(время можно вынести в начало)</span></li>
</ul>
<p>Куда ставить <b>always, usually, never, also, already, probably, still, just, even</b>:</p>
<table>
<tr><th>Глагол</th><th>Место</th><th>Пример</th></tr>
<tr><td>один глагол</td><td>перед ним</td><td><span class="say">He always forgets to save.</span></td></tr>
<tr><td>am / is / are / was / were</td><td>после</td><td><span class="say">You're always late.</span></td></tr>
<tr><td>два и больше слов</td><td>после первого</td><td><span class="say">I have never seen it.</span> · <span class="say">The match will probably be cancelled.</span></td></tr>
<tr><td>have to</td><td>перед have</td><td><span class="say">I always have to remind him.</span></td></tr>
<tr><td>вопрос</td><td>после подлежащего</td><td><span class="say">Do you still work there?</span></td></tr>
</table>
<p><b>probably</b> встаёт <b>перед</b> отрицанием: <span class="say">I probably won't come.</span> <span class="muted">(или I'll probably not come, но не I won't probably)</span></p>
<p><b>all</b> и <b>both</b> — тоже в середине: <span class="say">We all felt tired.</span> · <span class="say">They're both designers.</span> · <span class="say">My friends have all gone home.</span></p>
<p>В коротком ответе наречие стоит перед вспомогательным: <span class="say">He says he won't be late, but he always is.</span> — …но он всегда опаздывает. · <span class="say">I've never cheated, and I never will.</span></p>
<div class="g-bad">I have always to wait for him. · We felt all ill. · I won't probably call.</div>
<div class="g-good">I <b>always have to</b> wait for him. · We <b>all felt</b> ill. · I <b>probably won't</b> call.</div>
<div class="mini" data-q="Which is correct?" data-o="She plays very well chess.|She plays chess very well.|She very well plays chess." data-a="1" data-why="Глагол + что вместе: plays chess, потом как: very well."></div>
<div class="mini" data-q="Which is correct?" data-o="I can remember never her name.|I never can remember her name.|I can never remember her name." data-a="2" data-why="Два глагола (can remember) → наречие после первого: can never remember."></div>`
      },
      {
        title: '7. still, any more, no longer, yet, already — и even',
        html: `
<div class="g-idea"><b>still</b> — всё ещё продолжается. <b>not … any more / no longer</b> — перестало. <b>yet</b> — ещё не, но ждём. <b>already</b> — уже, раньше, чем ждали. <b>even</b> — «даже»: что-то удивительное.</div>
<table>
<tr><th>Слово</th><th>Где стоит</th><th>Пример</th></tr>
<tr><td><b>still</b> — всё ещё</td><td>середина</td><td><span class="say">It's noon and Max is still in bed.</span></td></tr>
<tr><td><b>not … any more</b> (any longer)</td><td>конец</td><td><span class="say">Lena doesn't work here any more.</span></td></tr>
<tr><td><b>no longer</b></td><td>середина</td><td><span class="say">Lena no longer works here.</span></td></tr>
<tr><td><b>already</b> — уже</td><td>середина или конец</td><td><span class="say">I've already finished.</span> · <span class="say">I've finished already.</span></td></tr>
<tr><td><b>yet</b> — ещё не / уже?</td><td>конец</td><td><span class="say">Have you decided yet?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">He has everything he wants, but he's still unhappy.</span> — …и всё равно несчастлив. <span class="muted">(still = «всё же, всё равно»)</span></li>
<li><span class="say">We used to be best friends, but we aren't any more.</span> — …а теперь уже нет.</li>
<li><span class="say">I've just had lunch and I'm already hungry.</span> — Только пообедал, а уже голоден.</li>
</ul>
<p><b>hasn't … yet</b> или <b>still hasn't</b>? Оба «ещё не», но still + not — с раздражением: «давно пора!»</p>
<ul class="g-list">
<li><span class="say">I sent him the invite yesterday. He hasn't replied yet.</span> — Пока не ответил (ответит).</li>
<li><span class="say">I sent him the invite two weeks ago, and he still hasn't replied!</span> — До сих пор не ответил!</li>
</ul>
<p><b>even</b> — «даже». Стоит перед тем, что удивляет, или в середине рядом с глаголом:</p>
<ul class="g-list">
<li><span class="say">She has a screen in every room, even the bathroom.</span> — …даже в ванной.</li>
<li><span class="say">Oleg has played every Zelda. He's even finished the very first one from 1986.</span> — Он даже прошёл самую первую, 1986 года.</li>
<li><span class="say">I can't cook. I can't even make toast.</span> — Я даже тост не могу сделать. <span class="muted">(not even, can't even, didn't even)</span></li>
<li><span class="say">The first season was great, but the second one is even better.</span> — Второй ещё лучше. <span class="muted">(even + сравнение = «ещё»)</span></li>
</ul>
<p><b>even though / even if / even when</b> + кто + глагол:</p>
<ul class="g-list">
<li><span class="say">Even though he can't drive, he bought a car.</span> — Хотя он не умеет водить, он купил машину. <span class="muted">(это факт)</span></li>
<li><span class="say">I'm going to the concert even if it rains.</span> — Пойду, даже если будет дождь. <span class="muted">(неважно, будет или нет)</span></li>
<li><span class="say">She never shouts, even when she loses.</span> — Даже когда проигрывает.</li>
</ul>
<div class="g-bad">Even he can't drive, he bought a car. · We are no more friends. · I haven't still called him.</div>
<div class="g-good"><b>Even though</b> he can't drive… · We are <b>no longer</b> friends. · I <b>still haven't</b> called him.</div>
<div class="mini" data-q="I invited her a month ago and she ___ answered!" data-o="didn't yet|still hasn't|hasn't still" data-a="1" data-why="Давно пора, раздражение → still + hasn't (still перед отрицанием)."></div>
<div class="mini" data-q="He didn't ___ say thank you." data-o="even|still|yet" data-a="0" data-why="«Даже не» → didn't even."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">This version is very better.</div><div class="g-good">This version is <b>much / far</b> better.</div>
<div class="g-bad">More you play, more you learn.</div><div class="g-good"><b>The</b> more you play, <b>the</b> more you learn.</div>
<div class="g-bad">My sister is elder than me.</div><div class="g-good">My sister is <b>older</b> than me.</div>
<div class="g-bad">My phone is the same like yours.</div><div class="g-good">My phone is the same <b>as</b> yours.</div>
<div class="g-bad">It's the best game of the world.</div><div class="g-good">It's the best game <b>in</b> the world.</div>
<div class="g-bad">I like very much this song.</div><div class="g-good">I like this song <b>very much</b>.</div>
<div class="g-bad">I won't probably come.</div><div class="g-good">I <b>probably won't</b> come.</div>
<div class="g-bad">I don't work there more.</div><div class="g-good">I don't work there <b>any more</b>. / I <b>no longer</b> work there.</div>
<div class="g-bad">Even she was tired, she finished the level.</div><div class="g-good"><b>Even though</b> she was tired, she finished the level.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>much / far / slightly</b> + сравнение · <b>no better, not any longer</b> · <b>better and better</b> · <b>the more…, the more…</b> · <b>as … as, twice as, the same as</b> · <b>the best … I've ever…</b> · наречия — в середину · <b>still</b> идёт, <b>any more</b> — перестало, <b>yet</b> — ждём, <b>even</b> — даже.</div>`
      }
    ],
    words: [
      ["compare", "сравнивать", "Let's compare the two versions.", "Давай сравним две версии."],
      ["similar", "похожий", "Their logo is very similar to ours.", "Их логотип очень похож на наш."],
      ["slightly", "слегка, чуть-чуть", "This one is slightly cheaper.", "Этот чуть дешевле."],
      ["far (+ сравнение)", "гораздо, намного", "The remake is far better than the original.", "Ремейк гораздо лучше оригинала."],
      ["twice", "дважды; вдвое", "It costs twice as much as last year.", "Это стоит вдвое дороже, чем в прошлом году."],
      ["further", "дальше; дополнительный", "Do you have any further questions?", "У вас есть ещё вопросы?"],
      ["elder", "старший (в семье)", "My elder brother lives in Kazan.", "Мой старший брат живёт в Казани."],
      ["improve", "улучшать(ся)", "My English is improving slowly.", "Мой английский медленно улучшается."],
      ["increase", "расти, увеличивать(ся)", "The number of players has increased a lot.", "Число игроков сильно выросло."],
      ["decrease", "уменьшаться, снижать", "Prices decreased after the sale.", "Цены снизились после распродажи."],
      ["reliable", "надёжный", "I need a more reliable laptop.", "Мне нужен ноутбук понадёжнее."],
      ["convenient", "удобный", "The new menu is far more convenient.", "Новое меню гораздо удобнее."],
      ["powerful", "мощный", "It's the most powerful PC I've ever had.", "Это самый мощный ПК, который у меня был."],
      ["impatient", "нетерпеливый", "The longer we waited, the more impatient we got.", "Чем дольше мы ждали, тем больше теряли терпение."],
      ["version", "версия", "Is the new version any better?", "Новая версия хоть сколько-то лучше?"],
      ["update", "обновление; обновлять", "The update is no bigger than 2 GB.", "Обновление не больше 2 ГБ."],
      ["performance", "производительность; выступление", "The performance is getting better and better.", "Производительность всё лучше и лучше."],
      ["previous", "предыдущий", "The previous version wasn't as stable.", "Предыдущая версия была не такой стабильной."],
      ["recently", "недавно", "Have you played anything good recently?", "Ты во что-нибудь хорошее играл недавно?"],
      ["definitely", "точно, определённо", "It's definitely the best episode of the season.", "Это точно лучшая серия сезона."],
      ["probably", "вероятно, наверное", "I probably won't finish it today.", "Я, наверное, не закончу это сегодня."],
      ["hardly ever", "почти никогда", "She hardly ever plays online.", "Она почти никогда не играет онлайн."],
      ["eventually", "в конце концов, в итоге", "Eventually they fixed the bug.", "В конце концов баг исправили."],
      ["gradually", "постепенно", "The game gradually gets harder.", "Игра постепенно становится сложнее."],
      ["no longer", "больше не", "He no longer streams at night.", "Он больше не стримит по ночам."],
      ["any more", "больше не (в конце)", "I don't play that game any more.", "Я больше не играю в эту игру."],
      ["still", "всё ещё; всё равно", "Do you still live in the same flat?", "Ты всё ещё живёшь в той же квартире?"],
      ["even", "даже; ещё (+ сравнение)", "The sequel is even better.", "Продолжение ещё лучше."],
      ["even though", "хотя, несмотря на то что", "Even though it was late, we played one more match.", "Хотя было поздно, мы сыграли ещё матч."],
      ["obvious", "очевидный", "The difference is obvious.", "Разница очевидна."],
      ["noticeable", "заметный", "The change is hardly noticeable.", "Изменение почти не заметно."]
    ],
    texts: [
      {
        id: 't-b1-23-1', title: 'Version 2.0: is it any better?', level: 'B1',
        text: `I played the first version of Starfall Tactics two years ago, and to be honest, I didn't like it very much. The art was beautiful, but the game was slow, the menus were confusing, and it crashed almost every evening. So when the studio released version 2.0 last week, I wasn't expecting much. I was wrong.

First of all, the new version is far smoother. On my old laptop the previous version ran at about thirty frames per second. Now it runs twice as fast, and the loading screens are much shorter. The download is slightly bigger, but it's no more expensive: everyone who owns the first version gets the update for free.

The designers have also completely changed the interface. As a UI designer, I always notice menus first, and these are some of the clearest menus I've ever seen in a strategy game. Even the settings screen looks good — and nobody ever looks at settings screens!

The battles are harder than before, but they're fairer. The more I play, the more I understand the new system, and the better my results get. My friend Oleg, who is a much more patient player than me, says the last mission is the hardest one in the whole game. I haven't reached it yet, so I can't say.

Of course, the game still isn't perfect. There are still a few bugs, and the story isn't as interesting as the gameplay. The studio promised to fix the sound problems a month ago, but they still haven't done it. And the characters' faces look the same as they did two years ago — a bit like plastic.

Two years ago I regretted buying this game. I don't regret it any more. Version 2.0 is one of the best updates of the year. If you gave up after the first version, give it another chance. The sooner the better — the new season starts on Friday.`,
        questions: [
          { q: 'How fast does version 2.0 run on the author\'s laptop?', o: ['Slightly faster than before', 'Twice as fast as before', 'The same as before'], a: 1 },
          { q: 'What does Oleg say about the last mission?', o: ['It is the hardest one in the game', 'It is easier than before', 'It has the best story'], a: 0 },
          { q: 'What problem still hasn\'t the studio fixed?', o: ['The menus', 'The price', 'The sound'], a: 2 }
        ]
      },
      {
        id: 't-b1-23-2', title: 'Five years later', level: 'B1',
        text: `Kira: Artem? Is that you? I haven't seen you for ages!
Artem: Kira! Wow, you haven't changed at all. You look exactly the same as you did at university.
Kira: You're too kind. You look… older. And your hair is shorter.
Artem: Much shorter. So, do you still work at that agency on Lenin Street?
Kira: No, I don't work there any more. I left two years ago. I'm a freelancer now.
Artem: Really? Is it better?
Kira: It's far more interesting, but it's not as stable. Some months I earn twice as much as before, and some months I earn a lot less. What about you? Are you still making mobile games?
Artem: Yes, still. Same studio, same office, same chair. But the projects are getting bigger and bigger. Our last game had three million players. My elder brother still can't believe it.
Kira: Three million? That's amazing! Is it the biggest project you've ever worked on?
Artem: By far. And the most stressful. We all worked at weekends before the release. I didn't even have time to play it myself.
Kira: Ha! You always say you'll stop working at weekends, but you never do.
Artem: I know, I know. I've already promised my girlfriend that I'll stop. I haven't told my boss yet, though.
Kira: Tell him soon. The sooner the better.
Artem: Probably. Listen, we're looking for a freelance UI designer right now. Even though you're not looking for a full-time job, would you be interested?
Kira: Maybe. Is the pay any better than at my old agency?
Artem: Much better. And the deadlines are no worse than anywhere else.
Kira: Then send me the details. The earlier I know, the easier it is for me to plan my month.
Artem: Deal. I'll send them tonight, even if I have to stay late at the office again.
Kira: Artem! You promised!`,
        questions: [
          { q: 'What does Kira do now?', o: ['She works at the same agency', 'She is a freelancer', 'She works at Artem\'s studio'], a: 1 },
          { q: 'What happened with Artem\'s last game?', o: ['It had three million players', 'It was cancelled', 'It was twice as expensive to make'], a: 0 },
          { q: 'Who hasn\'t Artem told about his promise yet?', o: ['His girlfriend', 'His elder brother', 'His boss'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "The new version is ___ than the old one — the difference is huge.", o: ["very faster", "far faster", "more faster"], a: 1, why: "«Гораздо» перед сравнением → far / much / a lot; very со сравнением не ставим." },
      { t: 'choice', q: "I've been waiting for an hour. I'm not waiting ___!", o: ["no longer", "any longer", "any long"], a: 1, why: "После not ставим any + сравнение: not … any longer." },
      { t: 'choice', q: "The ___ we start, the ___ we'll finish.", o: ["sooner … earlier", "soon … early", "sooner … more early"], a: 0, why: "the + сравнение, the + сравнение: the sooner…, the earlier…" },
      { t: 'choice', q: "Tokyo is one of the biggest cities ___ the world.", o: ["of", "in", "on"], a: 1, why: "После «самый» с местом → in: in the world." },
      { t: 'choice', q: "My sister is two years ___ than me.", o: ["elder", "older", "more old"], a: 1, why: "elder — только перед существительным (my elder sister); после be + than → older." },
      { t: 'choice', q: "Which sentence is correct?", o: ["I won't probably come tomorrow.", "I probably won't come tomorrow.", "I won't come probably tomorrow."], a: 1, why: "probably стоит перед отрицанием won't." },
      { t: 'choice', q: "Lena left the company in May. She ___ works here.", o: ["doesn't any more", "no longer", "not still"], a: 1, why: "no longer стоит в середине, перед глаголом; any more — в конце с don't/doesn't." },
      { t: 'choice', q: "He never shouts, ___ when his team loses.", o: ["even", "also", "still"], a: 0, why: "«Даже когда» → even when." },
      { t: 'gap', q: "The film was ___ than I expected — I almost fell asleep. (boring)", a: ["more boring"], why: "Длинное прилагательное → more + слово: more boring." },
      { t: 'gap', q: "This headset costs ___ my phone. (twice / much)", a: ["twice as much as"], why: "Вдвое больше по цене → twice as much as." },
      { t: 'gap', q: "I sent him the file a week ago, and he ___ replied! (still / not)", a: ["still hasn't", "still has not"], why: "Раздражение «до сих пор не» → still + hasn't: still стоит перед отрицанием." },
      { t: 'gap', q: "It's the best game I ___. (ever / play)", a: ["have ever played", "'ve ever played", "ve ever played"], why: "Самый + опыт за всю жизнь → Present Perfect с ever." },
      { t: 'gap', q: "Your hair is the same colour ___ mine.", a: ["as"], why: "«Такой же, как» → the same as." },
      { t: 'gap', q: "The more I practise, the ___ I get. (good)", a: ["better"], why: "the more…, the + сравнение: good → better." },
      { t: 'order', a: 'I always have to remind him', ru: 'Мне всегда приходится ему напоминать' },
      { t: 'order', a: 'We all went home after the match', ru: 'Мы все пошли домой после матча' },
      { t: 'tr', q: 'Я больше там не работаю.', a: ["i don't work there any more", "i don't work there anymore", "i do not work there any more", "i do not work there anymore", "i no longer work there", "i don't work there any longer", "i do not work there any longer"] },
      { t: 'tr', q: 'Он даже не поздоровался.', a: ["he didn't even say hello", "he did not even say hello", "he didn't even say hi", "he did not even say hi"] },
      { t: 'listen', say: 'The sooner the better', a: ['the sooner the better'] },
      { t: 'listen', say: "It's getting better and better", a: ["it's getting better and better", "it is getting better and better"] }
    ],
    test: [
      { t: 'choice', q: "You were ill yesterday. Do you feel ___ better today?", o: ["any", "no", "more"], a: 0, why: "В вопросе «хоть немного лучше?» → any better." },
      { t: 'gap', q: "The ___ the hotel, the better the service. (expensive)", a: ["more expensive"], why: "the + сравнение…, the + сравнение; глагол можно опустить." },
      { t: 'gap', q: "As I watched the trailer, I got ___ excited. (more)", a: ["more and more"], why: "Изменение идёт и идёт → повтор: more and more + длинное слово." },
      { t: 'choice', q: "Which sentence is correct?", o: ["She speaks very well English.", "She speaks English very well.", "She very well speaks English."], a: 1, why: "Глагол + что не разлучаем: speaks English, потом very well." },
      { t: 'choice', q: "We ___ tired after the long flight.", o: ["felt all", "all felt", "were feeling all"], a: 1, why: "all стоит в середине, перед одним глаголом: we all felt." },
      { t: 'choice', q: "Dan says he isn't nervous before streams, but he always ___.", o: ["does", "is", "be"], a: 1, why: "Короткое повторение is nervous → always is; наречие перед вспомогательным." },
      { t: 'gap', q: "Mike lost his job in March. He ___ looking for a new one. (still / be)", a: ["is still", "'s still", "s still"], why: "still ставим после am / is / are: is still looking." },
      { t: 'choice', q: "I got up at six, but Tom got up ___ earlier.", o: ["even", "very", "more"], a: 0, why: "«Ещё раньше» → even + сравнение." },
      { t: 'choice', q: "___ she can't drive, she has bought a car.", o: ["Even", "Even though", "Even if"], a: 1, why: "Это факт, дальше кто + глагол → even though; просто even так не работает." },
      { t: 'choice', q: "We're going to the beach tomorrow ___ it rains. We don't care about the weather.", o: ["if", "even if", "even though"], a: 1, why: "«Даже если» (неважно, будет или нет) → even if." },
      { t: 'gap', q: "Yesterday was the hottest day ___ the year.", a: ["of"], why: "Самый + период времени → of the year." },
      { t: 'choice', q: "I don't know as many people ___.", o: ["as you", "than you", "like you"], a: 0, why: "not as many … as: вторая часть — тоже as." }
    ]
  },

  // ───────────────────────────── UNIT B1-24 ─────────────────────────────
  {
    id: 'b1-24', level: 'B1', num: 24, track: 'main',
    books: { blue: [119, 120, 121, 122, 123, 124, 125, 126, 127] },
    title: 'Предлоги времени и места глубже + итог B1',
    summary: 'Разберёмся, где русские «в», «на», «к» и «до» превращаются в разные английские предлоги: during или while, by или until, on time или in time, in the picture и on the website, arrive at и arrive in, — а в конце соберём шпаргалку по всему уровню B1.',
    grammar: [
      {
        title: '1. Главная идея: предлог — это картинка, а не перевод',
        html: `
<div class="g-idea">Что вы уже знаете (уроки A1-14 и A2-15): <b>at 8, on Monday, in April</b>; <b>in</b> the box, <b>on</b> the table, <b>at</b> the bus stop; <b>until, during, while</b>. На B1 разбираем тонкие места. Главный секрет: не переводите русский предлог, а представьте <b>картинку</b> — точка, поверхность или «внутри».</div>
<table>
<tr><th>Картинка</th><th>Место</th><th>Время</th></tr>
<tr><td><b>at</b> — точка</td><td><span class="say">at the entrance</span>, <span class="say">at the traffic lights</span></td><td><span class="say">at 6 pm</span>, <span class="say">at the weekend</span></td></tr>
<tr><td><b>on</b> — поверхность, линия</td><td><span class="say">on the wall</span>, <span class="say">on the coast</span></td><td><span class="say">on Friday</span>, <span class="say">on my birthday</span></td></tr>
<tr><td><b>in</b> — внутри, период</td><td><span class="say">in the car</span>, <span class="say">in Berlin</span></td><td><span class="say">in June</span>, <span class="say">in the 90s</span></td></tr>
</table>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Встретимся <b>у</b> входа.</p><p>Кто это <b>на</b> фото?</p><p>Пришли макет <b>до</b> пятницы.</p><p>Я в офисе <b>до</b> семи.</p><p><b>В</b> конце концов мы помирились.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Let's meet <b>at</b> the entrance.</span></p><p><span class="say">Who's that <b>in</b> the photo?</span></p><p><span class="say">Send the layout <b>by</b> Friday.</span></p><p><span class="say">I'm at the office <b>until</b> seven.</span></p><p><span class="say"><b>In the end</b> we made up.</span></p></div>
</div>
<div class="g-tip">Русское «на фото» — это картинка «внутри рамки», поэтому <b>in</b> the photo. А «до пятницы» бывает двух видов: «не позже» (<b>by</b>) и «всё время до» (<b>until</b>).</div>
<div class="mini" data-q="Кто этот парень на картинке?" data-o="Who's that guy on the picture?|Who's that guy in the picture?|Who's that guy at the picture?" data-a="1" data-why="То, что изображено, — внутри рамки → in the picture."></div>`
      },
      {
        title: '2. Время: at, on, in — тонкости; on time или in time; at the end или in the end',
        html: `
<div class="g-idea">Базовое правило вы знаете. Теперь исключения и готовые пары, в которых путаются даже продвинутые.</div>
<table>
<tr><th>Говорим</th><th>Пример</th></tr>
<tr><td><b>at</b> the moment, at present, at the same time</td><td><span class="say">I'm busy at the moment.</span></td></tr>
<tr><td><b>at</b> the weekend <span class="muted">(брит.)</span> · <b>on</b> the weekend <span class="muted">(амер.)</span></td><td><span class="say">What are you doing at the weekend?</span></td></tr>
<tr><td><b>at</b> Christmas, но <b>on</b> Christmas Day</td><td><span class="say">We play board games at Christmas.</span></td></tr>
<tr><td><b>at</b> night (вообще) · <b>in</b> the night (в одну ночь)</td><td><span class="say">I work better at night.</span> · <span class="say">A noise woke me up in the night.</span></td></tr>
<tr><td><b>in</b> the morning, но <b>on</b> Friday morning</td><td><span class="say">See you on Sunday evening.</span></td></tr>
</table>
<p><b>Без предлога</b> перед next, last, this, every: <span class="say">See you next Friday.</span> · <span class="say">We moved last June.</span> А перед днём недели on часто просто опускают: <span class="say">See you Friday.</span></p>
<p><b>in + отрезок</b> = «через» или «за»:</p>
<ul class="g-list">
<li><span class="say">The stream starts in ten minutes.</span> — Стрим начнётся через десять минут. <span class="muted">(не after ten minutes)</span></li>
<li><span class="say">I learned Figma in two weeks.</span> — Я выучил Figma за две недели.</li>
</ul>
<table>
<tr><th>Пара</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>on time</b></td><td>точно по плану, не опоздав</td><td><span class="say">The train left on time.</span></td></tr>
<tr><td><b>in time</b> (for / to)</td><td>успеть, заранее</td><td><span class="say">Will you be home in time for dinner?</span></td></tr>
<tr><td><b>at the end</b> (of)</td><td>в конце чего-то</td><td><span class="say">at the end of the match</span></td></tr>
<tr><td><b>in the end</b></td><td>в итоге, в конце концов</td><td><span class="say">In the end we bought a PS5.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">We got to the station just in time.</span> — Успели в последний момент. <span class="muted">(противоположность — too late)</span></li>
<li><span class="say">At first I hated the new interface, but in the end I got used to it.</span> — Сначала… но в итоге… <span class="muted">(at first ↔ in the end)</span></li>
<li><span class="say">I'm going on holiday at the beginning of August.</span> — в начале августа <span class="muted">(at the beginning ↔ at the end)</span></li>
</ul>
<div class="g-bad">I'll call you after five minutes. · in the end of the month · on next Monday</div>
<div class="g-good">I'll call you <b>in</b> five minutes. · <b>at</b> the end of the month · next Monday</div>
<div class="mini" data-q="The meeting is at 10. Please be ___ time." data-o="in|on|at" data-a="1" data-why="Точно по плану, не опоздать → on time."></div>
<div class="mini" data-q="We argued for an hour, but ___ we agreed on the blue logo." data-o="at the end|in the end|on the end" data-a="1" data-why="В итоге, в конце концов → in the end."></div>`
      },
      {
        title: '3. during, for, while; by, until, by the time',
        html: `
<div class="g-idea"><b>during</b> — когда (+ существительное). <b>for</b> — сколько длилось. <b>while</b> — пока (+ кто + глагол). <b>until</b> — всё время до. <b>by</b> — не позже.</div>
<table>
<tr><th>Слово</th><th>После него</th><th>Пример</th></tr>
<tr><td><b>during</b> — во время</td><td>существительное</td><td><span class="say">I fell asleep during the film.</span></td></tr>
<tr><td><b>for</b> — в течение</td><td>отрезок времени</td><td><span class="say">I slept for two hours.</span></td></tr>
<tr><td><b>while</b> — пока</td><td>кто + глагол</td><td><span class="say">I fell asleep while I was watching the film.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">When did it happen? — During the tournament. How long did it last? — For three days.</span></li>
<li><span class="say">It rained in the night.</span> = <span class="say">It rained during the night.</span> <span class="muted">(с night, summer и т. п. можно и так, и так)</span></li>
<li><span class="say">What will you do while you're waiting?</span> — <span class="muted">после while о будущем — настоящее время, не will</span></li>
</ul>
<p><b>by</b> или <b>until</b>? Спросите себя: действие <b>длится</b> до этого момента или должно <b>случиться не позже</b>?</p>
<table>
<tr><th>until — длится до</th><th>by — не позже</th></tr>
<tr><td><span class="say">I'll be working until 7.</span></td><td><span class="say">I'll have finished by 7.</span></td></tr>
<tr><td><span class="say">Let's wait until the update comes out.</span></td><td><span class="say">The update should come out by Monday.</span></td></tr>
<tr><td><span class="say">Max is away until Friday.</span></td><td><span class="say">Max will be back by Friday.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I didn't get up until eleven.</span> — Я встал только в одиннадцать. <span class="muted">(not … until = «только в»)</span></li>
<li><span class="say">Where's Anna? She should be here by now.</span> — Она уже должна быть здесь.</li>
</ul>
<p><b>by the time</b> — «к тому времени, как»: пока шли, что-то уже случилось.</p>
<ul class="g-list">
<li><span class="say">By the time we get to the shop, it will be closed.</span> — будущее: by the time + настоящее время.</li>
<li><span class="say">By the time I logged in, the raid had already started.</span> — прошлое: + had done.</li>
<li><span class="say">I got there at midnight, but by then everyone had left.</span> — by then / by that time = «к тому моменту».</li>
</ul>
<div class="g-bad">It rained during three days. · during I was sleeping · Send it until Friday.</div>
<div class="g-good">It rained <b>for</b> three days. · <b>while</b> I was sleeping · Send it <b>by</b> Friday.</div>
<div class="mini" data-q="Please pay the invoice ___ 15 May — not later." data-o="until|by|during" data-a="1" data-why="Не позже определённой даты → by."></div>
<div class="mini" data-q="I got a call ___ I was driving." data-o="during|while|for" data-a="1" data-why="Дальше кто + глагол (I was driving) → while."></div>`
      },
      {
        title: '4. Место: in, at, on — точка, поверхность, внутри',
        html: `
<div class="g-idea">Большинство случаев решает картинка. Но у некоторых слов предлог просто надо запомнить — особенно там, где русский говорит «на».</div>
<table>
<tr><th>in</th><th>at</th><th>on</th></tr>
<tr><td>in the room, in the pool</td><td>at the bus stop, at the door</td><td>on the floor, on the ceiling</td></tr>
<tr><td>in a queue, in a row</td><td>at the traffic lights</td><td>on the left, on the right</td></tr>
<tr><td>in a photo, in a picture</td><td>at reception, at her desk</td><td>on page 5, on a list, on a menu</td></tr>
<tr><td>in a book, in a newspaper</td><td>at the top, at the bottom</td><td>on a map, on a website</td></tr>
<tr><td>in the sky, in the world</td><td>at the end of the street</td><td>on the second floor</td></tr>
<tr><td>in the country (за городом)</td><td>at the corner (улицы)</td><td>on the coast, on a river</td></tr>
</table>
<ul class="g-list">
<li><span class="say">There were a lot of people in the shop.</span> — внутри. <span class="say">Turn left at the shop.</span> — у магазина как точки на маршруте.</li>
<li><span class="say">There's water in the bottle and a label on the bottle.</span> — вода внутри, этикетка на поверхности.</li>
<li><span class="say">Someone is at the door.</span> — стоит у двери. <span class="say">There's a note on the door.</span> — висит на двери.</li>
<li><span class="say">I like to sit in the front row.</span> · <span class="say">She works in the marketing department.</span></li>
<li><span class="say">You'll find the rules on our website.</span> · <span class="say">Write your name at the top of the page.</span></li>
<li><span class="say">Our office is on the third floor.</span> · <span class="say">Sochi is on the coast.</span> · <span class="say">I bought coffee on the way to work.</span></li>
</ul>
<table>
<tr><th>Слово</th><th>Как</th><th>Пример</th></tr>
<tr><td>front / back машины</td><td><b>in</b></td><td><span class="say">The kids sat in the back.</span></td></tr>
<tr><td>front / back зала, здания</td><td><b>at</b></td><td><span class="say">We sat at the back of the cinema.</span></td></tr>
<tr><td>front / back листа, открытки</td><td><b>on</b></td><td><span class="say">Write the date on the back of the card.</span></td></tr>
<tr><td>угол комнаты</td><td><b>in</b></td><td><span class="say">The PC is in the corner of the room.</span></td></tr>
<tr><td>угол улицы</td><td><b>at / on</b></td><td><span class="say">There's a café on the corner.</span></td></tr>
</table>
<div class="g-bad">on the photo · on the sky · in the website · in the left · at the second floor</div>
<div class="g-good"><b>in</b> the photo · <b>in</b> the sky · <b>on</b> the website · <b>on</b> the left · <b>on</b> the second floor</div>
<div class="mini" data-q="The price is ___ the menu." data-o="in|on|at" data-a="1" data-why="Список, меню, сайт, страница → on."></div>
<div class="mini" data-q="We were ___ the back of the hall, so we couldn't see the stage." data-o="in|at|on" data-a="1" data-why="Задняя часть зала, здания, группы → at the back."></div>`
      },
      {
        title: '5. Здания, события, города, транспорт; to, into, arrive, get',
        html: `
<div class="g-idea"><b>at</b> — место как «функция» или событие (на работе, на вечеринке, на вокзале). <b>in</b> — внутри здания, в городе. Движение «куда» — <b>to</b>, «внутрь» — <b>into</b>.</div>
<table>
<tr><th>at</th><th>in</th></tr>
<tr><td>at home, at work, at school, at university</td><td>in bed, in hospital, in prison</td></tr>
<tr><td>at a party, at a concert, at a conference</td><td>in Paris, in a small town</td></tr>
<tr><td>at the station, at the airport</td><td>in the building (про само здание)</td></tr>
<tr><td>at Anna's, at the doctor's</td><td>It's cold in Anna's flat.</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I saw Oleg at a game conference last week.</span> — событие → at.</li>
<li><span class="say">We had dinner at the hotel. All the rooms in the hotel have a PS5.</span> — где ужинали (at) / внутри здания (in).</li>
<li><span class="say">I'll be home all evening.</span> = <span class="say">I'll be at home all evening.</span> Но: <span class="say">Let's eat at home.</span></li>
<li><span class="say">Does this train stop at Tver?</span> — город как точка на маршруте → at.</li>
</ul>
<p><b>Транспорт:</b> <span class="say">on a bus, on a train, on a plane, on a bike</span>, но <span class="say">in a car, in a taxi</span>. Сели «в» — <span class="say">get on the bus / get off the bus</span>, но <span class="say">get into a taxi / get out of a taxi</span>.</p>
<table>
<tr><th>Куда</th><th>Как</th><th>Пример</th></tr>
<tr><td>go, come, travel, return, a trip</td><td><b>to</b></td><td><span class="say">We're flying to Tokyo.</span> · <span class="say">Welcome to our studio!</span></td></tr>
<tr><td>была (опыт)</td><td><b>been to</b></td><td><span class="say">I've been to Japan twice.</span></td></tr>
<tr><td>arrive — город, страна</td><td><b>in</b></td><td><span class="say">We arrived in Berlin at night.</span></td></tr>
<tr><td>arrive — здание, событие</td><td><b>at</b></td><td><span class="say">We arrived at the hotel at 2 am.</span></td></tr>
<tr><td>get</td><td><b>to</b></td><td><span class="say">What time did you get to the party?</span></td></tr>
<tr><td>home</td><td>без предлога</td><td><span class="say">I got home late.</span></td></tr>
<tr><td>внутрь / наружу</td><td><b>into / out of</b></td><td><span class="say">She walked into the room.</span></td></tr>
</table>
<div class="g-bad">We arrived to Moscow. · I went to home. · Welcome in our team! · I was in the bus.</div>
<div class="g-good">We arrived <b>in</b> Moscow. · I went home. · Welcome <b>to</b> our team! · I was <b>on</b> the bus.</div>
<div class="mini" data-q="What time did you arrive ___ the office?" data-o="to|at|in" data-a="1" data-why="arrive + здание → at; arrive to не бывает."></div>
<div class="mini" data-q="I met Kate ___ a concert on Saturday." data-o="in|on|at" data-a="2" data-why="Событие (party, concert, conference) → at."></div>`
      },
      {
        title: '6. Устойчивые выражения: in the rain, on purpose, at the age of',
        html: `
<div class="g-idea">Эти сочетания не объясняются картинкой — их учат целиком, как одно слово. Хорошая новость: их немного, и они встречаются постоянно.</div>
<table>
<tr><th>in</th><th>on</th><th>at</th></tr>
<tr><td>in the rain, in the sun, in the shade, in the dark</td><td>on TV, on the radio, on the phone</td><td>at the age of 16 / at 16</td></tr>
<tr><td>in English, in dollars</td><td>on fire, on purpose</td><td>at 100 km an hour</td></tr>
<tr><td>in love (with), in a good / bad mood</td><td>on the whole (в целом)</td><td>at 100 degrees</td></tr>
<tr><td>in my opinion</td><td>on holiday, on business, on a trip</td><td></td></tr>
<tr><td></td><td>on strike, on a diet</td><td></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Don't sit in the sun — let's find a table in the shade.</span> — Не сиди на солнце, найдём столик в тени.</li>
<li><span class="say">How do you say "patch" in Russian?</span> — Как по-русски «патч»?</li>
<li><span class="say">You're in a good mood today! What happened?</span> — Ты сегодня в хорошем настроении!</li>
<li><span class="say">In my opinion, the first season was better.</span> — По-моему, первый сезон был лучше.</li>
<li><span class="say">I didn't delete your save on purpose, I promise!</span> — Я не специально удалил твоё сохранение!</li>
<li><span class="say">The project was hard, but on the whole I enjoyed it.</span> — Было тяжело, но в целом понравилось.</li>
<li><span class="say">My boss is away on business.</span> · <span class="say">No trains today — the drivers are on strike.</span></li>
<li><span class="say">She started coding at the age of twelve.</span> · <span class="say">We were driving at 130 km an hour.</span></li>
</ul>
<p>Можно и <b>for a holiday</b>, когда говорим, куда поехали: <span class="say">They've gone to Georgia for a holiday.</span></p>
<div class="g-tip">«Специально» — <b>on purpose</b>, «случайно» — <b>by accident / by chance</b>. «По-моему» — только <b>in my opinion</b>: русское «по» тут не помогает.</div>
<div class="g-bad">by my opinion · on English · I saw it in TV · at the rain</div>
<div class="g-good"><b>in</b> my opinion · <b>in</b> English · I saw it <b>on</b> TV · <b>in</b> the rain</div>
<div class="mini" data-q="Sorry! I didn't do it ___ purpose." data-o="by|on|with" data-a="1" data-why="«Специально» → on purpose."></div>
<div class="mini" data-q="My sister is away ___ holiday this week." data-o="in|at|on" data-a="2" data-why="on holiday, on business, on a trip — устойчивые сочетания с on."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I'll be back after ten minutes.</div><div class="g-good">I'll be back <b>in</b> ten minutes.</div>
<div class="g-bad">I'll see you on next Friday.</div><div class="g-good">I'll see you next Friday.</div>
<div class="g-bad">We played during three hours.</div><div class="g-good">We played <b>for</b> three hours.</div>
<div class="g-bad">Send me the file until Monday.</div><div class="g-good">Send me the file <b>by</b> Monday.</div>
<div class="g-bad">in the end of the month</div><div class="g-good"><b>at</b> the end of the month</div>
<div class="g-bad">Who's this on the photo?</div><div class="g-good">Who's this <b>in</b> the photo?</div>
<div class="g-bad">We arrived to London at night.</div><div class="g-good">We arrived <b>in</b> London at night.</div>
<div class="g-bad">What time did you get to home?</div><div class="g-good">What time did you get home?</div>
<div class="g-bad">On my opinion, it's too long.</div><div class="g-good"><b>In</b> my opinion, it's too long.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>during</b> + событие, <b>for</b> + срок, <b>while</b> + кто + глагол · <b>until</b> — длится до, <b>by</b> — не позже · <b>on time</b> — вовремя, <b>in time</b> — успеть · <b>at the end of</b> / <b>in the end</b> · <b>in</b> the photo, <b>on</b> the website, <b>at</b> the door · <b>arrive in</b> город, <b>arrive at</b> здание · go <b>home</b>.</div>`
      },
      {
        title: '8. Итог B1 — шпаргалка по уровню',
        html: `
<div class="g-idea">Поздравляем: вы прошли весь уровень B1 и большую часть синего Мерфи! Вот всё, что вы теперь умеете, — с номерами уроков, чтобы быстро вернуться и повторить.</div>
<p><b>Времена</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-1</td><td>Present Simple / Continuous, state verbs, always</td><td><span class="say">You're always interrupting me!</span></td></tr>
<tr><td>b1-2</td><td>Past Simple / Continuous, used to</td><td><span class="say">I was coding when the power went off.</span></td></tr>
<tr><td>b1-3</td><td>Present Perfect против Past Simple</td><td><span class="say">I've lost my keys. I lost them on Monday.</span></td></tr>
<tr><td>b1-4</td><td>have been doing; for / since</td><td><span class="say">I've been waiting for an hour.</span></td></tr>
<tr><td>b1-5</td><td>Past Perfect (+ Continuous)</td><td><span class="say">The film had started when we arrived.</span></td></tr>
</table>
<p><b>Будущее</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-6</td><td>I'm meeting / going to / will</td><td><span class="say">I'm meeting Max at six. I'll call you.</span></td></tr>
<tr><td>b1-7</td><td>will be doing, will have done; when I do</td><td><span class="say">By June I'll have finished the course.</span></td></tr>
</table>
<p><b>Модальные глаголы</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-8</td><td>can, could, be able to; must / can't (догадки)</td><td><span class="say">She must have forgotten.</span></td></tr>
<tr><td>b1-9</td><td>may, might; have to, mustn't, needn't</td><td><span class="say">You needn't bring anything.</span></td></tr>
<tr><td>b1-10</td><td>should, had better, it's time; would</td><td><span class="say">You'd better save the file.</span></td></tr>
</table>
<p><b>If / wish, пассив, косвенная речь, вопросы</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-11</td><td>if I do / if I did; I wish I knew</td><td><span class="say">If I were you, I'd take it.</span></td></tr>
<tr><td>b1-12</td><td>пассив во всех временах</td><td><span class="say">The servers are being updated.</span></td></tr>
<tr><td>b1-13</td><td>косвенная речь</td><td><span class="say">She asked me where I lived.</span></td></tr>
<tr><td>b1-14</td><td>вопросы, So do I, question tags</td><td><span class="say">You haven't seen it, have you?</span></td></tr>
</table>
<p><b>-ing или to</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-15</td><td>enjoy doing, decide to, want you to</td><td><span class="say">I want you to check it.</span></td></tr>
<tr><td>b1-16</td><td>remember, try, need, like, would rather</td><td><span class="say">Remember to save! I remember playing it.</span></td></tr>
</table>
<p><b>Существительные, артикли, кванторы, придаточные</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-17</td><td>исчисляемые, a / an и the</td><td><span class="say">I need some advice.</span></td></tr>
<tr><td>b1-18</td><td>school или the school; названия</td><td><span class="say">She's at university.</span></td></tr>
<tr><td>b1-19</td><td>noun + noun, 's и of; myself; there и it</td><td><span class="say">a friend of mine</span></td></tr>
<tr><td>b1-20</td><td>some, any, none, few, most, each, every</td><td><span class="say">None of us knew the answer.</span></td></tr>
<tr><td>b1-21</td><td>who, that, which — и без них</td><td><span class="say">The game I told you about is on sale.</span></td></tr>
</table>
<p><b>Прилагательные, сравнения, предлоги</b></p>
<table>
<tr><th>Урок</th><th>Тема</th><th>Пример</th></tr>
<tr><td>b1-22</td><td>bored / boring, so / such, too / enough</td><td><span class="say">It was such a boring film.</span></td></tr>
<tr><td>b1-23</td><td>сравнения, порядок слов, still / yet / even</td><td><span class="say">The more I play, the more I like it.</span></td></tr>
<tr><td>b1-24</td><td>предлоги времени и места</td><td><span class="say">Send it by Friday.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Самые важные «переключатели» B1</div><ol>
<li><b>Состояние или действие?</b> know, like, want, belong — обычно без -ing: I know, не I'm knowing.</li>
<li><b>Сколько длится до сейчас?</b> → have been doing + for / since. Раньше другого прошлого → had done.</li>
<li><b>Будущее в процессе / уже готово</b> → will be doing / will have done. После when, if, until, by the time — без will.</li>
<li><b>Догадка о прошлом</b> → must / can't / might + have done.</li>
<li><b>Нереальное сейчас</b> → if I had…, I'd…; I wish I knew — без would после if и wish.</li>
<li><b>Спрятанный вопрос и косвенная речь</b> → порядок утверждения: She asked where I lived.</li>
<li><b>После глагола</b> → проверьте: -ing (enjoy, finish) или to (decide, want)? remember / try / stop меняют смысл.</li>
</ol></div>
<div class="mini" data-q="When I logged in, the tournament ___ — I missed it." data-o="already started|had already started|has already started" data-a="1" data-why="Случилось раньше другого момента в прошлом → Past Perfect (урок b1-5)."></div>
<div class="mini" data-q="She told me she ___ tired." data-o="is being|was|has been being" data-a="1" data-why="Косвенная речь после told → сдвиг времени: is → was (урок b1-13)."></div>
<div class="g-sum"><div class="g-h">Весь B1 в одной строке</div>Вы умеете точно показывать время (<b>have been doing, had done, will have done</b>), строить догадки и советы (<b>must have, should, had better</b>), фантазировать (<b>if I were, I wish</b>), пересказывать чужие слова, выбирать между <b>-ing и to</b>, артиклями, кванторами и предлогами. Дальше — B2: те же темы на уровне нюансов, фразовые глаголы и сложные связки.</div>`
      }
    ],
    words: [
      ["during", "во время", "I fell asleep during the stream.", "Я уснул во время стрима."],
      ["while", "пока, в то время как", "Somebody called while I was out.", "Кто-то звонил, пока меня не было."],
      ["until", "до (тех пор, пока)", "Let's wait until the rain stops.", "Давай подождём, пока не кончится дождь."],
      ["by (+ время)", "к, не позже", "I need the designs by Monday.", "Мне нужны макеты к понедельнику."],
      ["by the time", "к тому времени, как", "By the time we arrived, the party had ended.", "К тому времени, как мы приехали, вечеринка закончилась."],
      ["on time", "вовремя (по плану)", "The flight left on time.", "Рейс вылетел вовремя."],
      ["in time", "вовремя, успеть", "We got there just in time.", "Мы успели в последний момент."],
      ["in the end", "в конце концов, в итоге", "In the end we chose the red logo.", "В итоге мы выбрали красный логотип."],
      ["at first", "сначала", "At first I didn't like him.", "Сначала он мне не понравился."],
      ["deadline", "дедлайн, крайний срок", "The deadline is at the end of the month.", "Дедлайн — в конце месяца."],
      ["appointment", "запись, встреча", "I have an appointment at 3 on Friday.", "У меня запись в пятницу на три."],
      ["schedule", "расписание, график", "The schedule is on the website.", "Расписание на сайте."],
      ["delay", "задержка; задерживать", "Sorry for the delay!", "Извините за задержку!"],
      ["platform", "платформа, перрон", "Meet me on platform 4.", "Встретимся на четвёртой платформе."],
      ["luggage", "багаж", "My luggage is still at the airport.", "Мой багаж всё ещё в аэропорту."],
      ["destination", "пункт назначения", "We reached our destination at night.", "Мы добрались до места ночью."],
      ["entrance", "вход", "I'll wait for you at the entrance.", "Я подожду тебя у входа."],
      ["reception", "стойка регистрации, ресепшен", "Leave the key at reception.", "Оставьте ключ на ресепшене."],
      ["conference", "конференция", "I met her at a conference in Berlin.", "Я познакомился с ней на конференции в Берлине."],
      ["row", "ряд", "We sat in the front row.", "Мы сидели в первом ряду."],
      ["queue", "очередь", "There was a long queue at the entrance.", "У входа была длинная очередь."],
      ["ceiling", "потолок", "There's a crack in the ceiling.", "На потолке трещина."],
      ["corner", "угол", "There's a café on the corner.", "На углу есть кафе."],
      ["coast", "побережье", "They live in a small town on the coast.", "Они живут в маленьком городке на побережье."],
      ["shade", "тень", "Let's sit in the shade.", "Давай сядем в тени."],
      ["on purpose", "специально, нарочно", "He didn't do it on purpose.", "Он сделал это не нарочно."],
      ["on the whole", "в целом", "On the whole, it was a good year.", "В целом год был хороший."],
      ["strike", "забастовка; ударять", "The pilots are on strike today.", "Пилоты сегодня бастуют."],
      ["mood", "настроение", "Why are you in such a bad mood?", "Почему ты в таком плохом настроении?"],
      ["opinion", "мнение", "In my opinion, the ending was perfect.", "По-моему, концовка была идеальной."],
      ["meanwhile", "тем временем", "Meanwhile, the others were waiting at the hotel.", "Тем временем остальные ждали в отеле."]
    ],
    texts: [
      {
        id: 't-b1-24-1', title: 'Three days in Berlin', level: 'B1',
        text: `Last month our studio sent me and my colleague Nika to a game design conference in Berlin. It was my first business trip abroad, and almost everything went wrong at first.

Our flight was supposed to leave at 7 am, so we arrived at the airport at five. Of course, the flight didn't leave on time. There was a two-hour delay, and we spent the whole morning in a queue at the café. Nika was in a terrible mood — she hates waiting. While we were waiting, I read the conference schedule on the website and planned which talks to see.

We finally arrived in Berlin at lunchtime. We got into a taxi, and the driver took us to our hotel, which was on a quiet street near the river. There was nobody at reception for ten minutes. Meanwhile, the first talk had already started. By the time we got to the conference, it had finished.

Luckily, the next day was much better. We got there early and sat in the front row. During the main talk, the speaker showed a picture of an old game menu. In the picture, all the buttons were on the left and the title was at the bottom of the screen. "This is how NOT to design a menu," she said, and everybody laughed. I recognised it immediately: it was the menu from our first game. Nika laughed so loudly that people at the back of the hall turned around.

At the end of the talk, I went to speak to the speaker. At first I was nervous, but in the end we talked for almost an hour. It turned out she had played our game on a train years ago and loved it — even though she hated the menu.

On the last evening we walked along the river in the rain. On the whole, it was a great trip. And now I have a new rule: when I travel to a conference, I arrive the day before.`,
        questions: [
          { q: 'Why did they miss the first talk?', o: ['Their flight was delayed and they arrived late', 'They went to the wrong hotel', 'They forgot about it'], a: 0 },
          { q: 'Where were the buttons in the picture of the old menu?', o: ['At the top of the screen', 'On the left', 'In the middle'], a: 1 },
          { q: 'What is the author\'s new rule?', o: ['Never sit in the front row', 'Always take a taxi', 'Arrive the day before a conference'], a: 2 }
        ]
      },
      {
        id: 't-b1-24-2', title: 'Release week', level: 'B1',
        text: `Olga: Hi, Tim! Are you busy at the moment?
Tim: A bit. I'm on the phone with the testers. What's up?
Olga: The publisher wants the final screenshots by Thursday. Can you do it?
Tim: By Thursday? I'll be working on the trailer until Wednesday evening. But I can start on Thursday morning.
Olga: That's too late. They need them in time for the press release, and it goes out on Thursday at noon.
Tim: OK, then I'll do the screenshots first. I'll send them to you in two days. Is that OK?
Olga: Perfect. Oh, and one more thing. In the old screenshots the logo is at the top, but on the new store page it has to be in the bottom right corner.
Tim: Got it. Anything else?
Olga: Yes. Where's the team dinner on Friday? I haven't seen it on the list.
Tim: It's at a Georgian restaurant on the corner of Pushkin Street, on the second floor. We're meeting at the entrance at seven.
Olga: Great. I'll come straight from the office, so I might not be there on time. Don't order the khachapuri without me!
Tim: I can't promise anything. By the time you arrive, we'll probably have eaten everything.
Olga: Then I'll leave early. By the way, did you break the coffee machine this morning?
Tim: Me? Not on purpose! I just pressed the big red button.
Olga: That's how everyone breaks it. Anyway, I'm going home at six today. I've been at the office since eight.
Tim: Lucky you. I'll be here at night again. Last week I stayed here until midnight three times.
Olga: Tim, you really should go home earlier. You'll be on holiday in a week — don't burn out before that.
Tim: In my opinion, holidays are for people who have finished their screenshots.
Olga: Then finish them! See you on Friday.`,
        questions: [
          { q: 'When does the publisher need the screenshots?', o: ['By Thursday', 'On Friday evening', 'In a week'], a: 0 },
          { q: 'Where is the team dinner?', o: ['At the office on the second floor', 'At a restaurant on the corner of Pushkin Street', 'In a café near the river'], a: 1 },
          { q: 'What happened to the coffee machine?', o: ['Olga broke it on purpose', 'Tim broke it by accident', 'The testers broke it'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "I fell asleep ___ the film.", o: ["during", "for", "while"], a: 0, why: "Дальше существительное (the film) и вопрос «когда?» → during." },
      { t: 'choice', q: "Please send me the designs ___ Friday — not later.", o: ["until", "by", "during"], a: 1, why: "«Не позже» → by." },
      { t: 'choice', q: "The train left at exactly 9:15 — it was ___ time.", o: ["in", "on", "at"], a: 1, why: "Точно по расписанию → on time." },
      { t: 'choice', q: "We had lots of problems with the old laptop. ___ we sold it.", o: ["At the end", "In the end", "On the end"], a: 1, why: "«В итоге, в конце концов» → in the end." },
      { t: 'choice', q: "Who's the girl ___ this photo?", o: ["on", "in", "at"], a: 1, why: "То, что изображено на фото или картинке, → in the photo." },
      { t: 'choice', q: "What time did you arrive ___ the airport?", o: ["to", "at", "in"], a: 1, why: "arrive + здание / место → at; arrive to не бывает." },
      { t: 'choice', q: "I'm sorry, I didn't break it ___ purpose.", o: ["by", "on", "in"], a: 1, why: "«Специально, нарочно» → on purpose." },
      { t: 'choice', q: "You'll find all the details ___ our website.", o: ["in", "on", "at"], a: 1, why: "Сайт, страница, список, меню → on." },
      { t: 'gap', q: "I'll be at the office ___ seven, then I'm going home.", a: ["until", "till"], why: "Нахожусь там всё время до семи → until (till)." },
      { t: 'gap', q: "___ the time we got to the cinema, the film had already started.", a: ["By", "by"], why: "«К тому времени, как» → by the time." },
      { t: 'gap', q: "Hurry up or we won't get there ___ time for the start.", a: ["in"], why: "Успеть к чему-то → in time for." },
      { t: 'gap', q: "The stream will start ___ ten minutes.", a: ["in"], why: "«Через» столько-то времени от сейчас → in." },
      { t: 'gap', q: "How do you say «дедлайн» ___ English?", a: ["in"], why: "Язык → in English, in Russian." },
      { t: 'gap', q: "She got ___ the taxi and told the driver the address.", a: ["into", "in"], why: "Сесть в машину или такси, то есть внутрь → get into (или get in)." },
      { t: 'order', a: 'What are you doing at the weekend', ru: 'Что ты делаешь на выходных?' },
      { t: 'order', a: 'We met at the end of the conference', ru: 'Мы познакомились в конце конференции' },
      { t: 'tr', q: 'Я буду работать до семи.', a: ["i will be working until seven", "i'll be working until seven", "i will be working till seven", "i'll be working till seven", "i will work until seven", "i'll work until seven", "i will work till seven", "i'll work till seven", "i will be working until 7", "i'll be working until 7", "i will work until 7", "i'll work until 7", "i'll be working till 7", "i'll work till 7"] },
      { t: 'tr', q: 'Мы добрались домой после полуночи.', a: ["we got home after midnight", "we arrived home after midnight", "we came home after midnight", "we reached home after midnight"] },
      { t: 'listen', say: "Let's meet at the entrance", a: ["let's meet at the entrance", "let us meet at the entrance"] },
      { t: 'listen', say: "I didn't do it on purpose", a: ["i didn't do it on purpose", "i did not do it on purpose"] }
    ],
    test: [
      { t: 'choice', q: "I ___ this series since Monday, and yesterday I ___ five episodes.", o: ["have been watching … watched", "am watching … have watched", "watch … was watching"], a: 0, why: "С понедельника до сейчас → have been doing (b1-4); вчера → Past Simple (b1-3)." },
      { t: 'gap', q: "By the time we arrived, the concert ___. (already / start)", a: ["had already started"], why: "Раньше другого момента в прошлом → had + V3 (b1-5); by the time (b1-24)." },
      { t: 'gap', q: "Don't call me at 8 — I ___ my stream then. (do)", a: ["will be doing", "'ll be doing", "ll be doing"], why: "В процессе в момент будущего → will be doing (b1-7)." },
      { t: 'choice', q: "Somebody ___ my coffee — the cup is empty!", o: ["must have drunk", "must drink", "should drink"], a: 0, why: "Уверенная догадка о прошлом → must have + V3 (b1-8)." },
      { t: 'gap', q: "I'd buy that monitor if it ___ so expensive. (not / be)", a: ["weren't", "wasn't", "were not", "was not"], why: "На самом деле дорого → если бы: if + прошедшая форма (b1-11)." },
      { t: 'gap', q: "The servers ___ right now, so the game is offline. (update)", a: ["are being updated"], why: "Пассив в процессе сейчас → are being + V3 (b1-12)." },
      { t: 'choice', q: "She asked me ___.", o: ["where did I live", "where I lived", "where do I live"], a: 1, why: "Косвенный вопрос → порядок утверждения и сдвиг времени: where I lived (b1-13, b1-14)." },
      { t: 'choice', q: "Let's start the stream now, ___?", o: ["shall we", "will we", "don't we"], a: 0, why: "После Let's хвостик — shall we? (b1-14)." },
      { t: 'choice', q: "I'll never forget ___ my first game. And please don't forget ___ the tickets!", o: ["playing … to buy", "to play … buying", "playing … buying"], a: 0, why: "forget doing — о воспоминании, forget to do — о том, что нужно сделать (b1-16)." },
      { t: 'choice', q: "She's ___ university now, and ___ of her friends study design too.", o: ["at … most", "in the … most of", "at … the most"], a: 0, why: "at university без the (b1-18, b1-24); most of her friends (b1-20)." },
      { t: 'choice', q: "This is the ___ game ___ I've ever played.", o: ["best … that", "better … what", "most good … which"], a: 0, why: "Самый + ever → the best (b1-23); после существительного — that / which, не what (b1-21)." },
      { t: 'choice', q: "The film was so ___ that I fell asleep ___ it.", o: ["bored … while", "boring … during", "boring … for"], a: 1, why: "Фильм вызывает скуку → boring (b1-22); во время + существительное → during (b1-24)." }
    ]
  }
);
