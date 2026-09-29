window.LIBRARY = (window.LIBRARY || []).concat([
  // ===================== B1 =====================
  {
    id: 'dlg-b1-squad-voice', title: 'Plant the Bomb, Please', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Headset (audio)',
    about: 'Тактический шутер · голосовой чат команды',
    emoji: '🎧',
    ru: 'Команда в тактическом шутере пытается выиграть решающий раунд, пока новичок путается с бомбой',
    text: `Maya: Okay, team, this is the last round. If we win it, we win the match. Everyone ready?
Dex: Ready. I've bought armor and a smoke grenade.
Sam: Wait, who has the bomb? I can't see it on the map.
Kenji: Um... I think I have it. Is it the red thing in my backpack?
Maya: Yes, Kenji, that's the bomb. Please don't drop it this time.
Kenji: That happened once! Okay, twice.
Dex: Plan: we go to site B together. I'll throw the smoke, and you run in behind me.
Sam: I've just seen two enemies near the long corridor. They're waiting for us.
Maya: Good call. If they're at B, we switch to A. Turn around, everyone.
Kenji: Turn around? I've already walked halfway to B!
Maya: Then run back. Quickly, but quietly. Don't jump, they can hear you.
Dex: Smoke is out. Kenji, go, go! Plant it now!
Kenji: I'm planting... I'm planting... it's taking forever!
Sam: One enemy is coming from the left. I've got him. Keep going!
Kenji: Done! The bomb is planted! What do I do now?
Maya: Hide behind the boxes and don't move. Forty seconds, that's all we need.
Dex: They're trying to defuse it... Sam, now!
Sam: Got him! That's the last one!
Maya: We won! Kenji, you're officially forgiven for yesterday.
Kenji: I've never been so stressed in my life. Same time tomorrow?`,
    questions: [
      { q: "Why does the team change the plan and go to site A?", o: ["The bomb doesn't work at site B", "Sam has seen enemies waiting near B", "Kenji is lost"], a: 1 },
      { q: "What does Maya ask Kenji NOT to do while running back?", o: ["Talk on the voice chat", "Drop the grenade", "Jump, because the enemies can hear him"], a: 2 },
      { q: "What do we learn about Kenji?", o: ["He has dropped the bomb before", "He is the team leader", "He has never played this game"], a: 0 }
    ]
  },
  {
    id: 'dlg-b1-radio-night', title: 'Voice on the Radio', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Walkie-talkie',
    about: 'Хоррор · голос по рации в заброшенной больнице',
    emoji: '📻',
    ru: 'Героиня ищет выход из тёмной больницы, а голос по рации помогает ей — но можно ли ему верить?',
    text: `Radio: Hello? Is anyone there? If you can hear me, press the button and speak.
Nora: Yes! I can hear you. Who are you? Where am I?
Radio: My name is Walter. You're in the old hospital on Hill Street. I've been watching the cameras.
Nora: The cameras? Then you know how I got here. I don't remember anything.
Radio: Let's talk about that later. Right now you need to get out. Do you see a door with a green light?
Nora: Yes, at the end of the corridor. But the lights keep going on and off.
Radio: That's normal here. Walk slowly. If you hear music, stop and don't move.
Nora: Music? Why would there be music in an empty hospital?
Radio: Just trust me. Have you found a flashlight yet?
Nora: I've found one, but the battery is almost dead.
Radio: There are batteries in the nurse's office, second door on the right. Pick them up.
Nora: Okay, I've got them. Wait... I can hear a piano. Very quiet.
Radio: Stop. Turn off the flashlight. Don't breathe loudly.
Nora: Something is walking past the door. It's gone now. What was that?
Radio: A patient. Or what's left of one. Now go to the green door, quickly.
Nora: It's locked. There's a code panel.
Radio: The code is 1-9-8-4. I set it myself, a long time ago.
Nora: You set it? Walter... how long have you been in this hospital?
Radio: Longer than you think, Nora. Open the door.
Nora: Wait. I never told you my name.`,
    questions: [
      { q: "What should Nora do if she hears music?", o: ["Run to the green door", "Stop and not move", "Call Walter on the radio"], a: 1 },
      { q: "Where does Nora find batteries?", o: ["In the nurse's office", "Next to the piano", "Behind the green door"], a: 0 },
      { q: "Why does the ending feel scary?", o: ["The door does not open", "The flashlight dies", "Walter knows her name, but she never told him"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-docking', title: 'Permission to Dock', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'International Space Station',
    about: 'Космосим · диспетчер станции и пилот',
    emoji: '🚀',
    ru: 'Уставший пилот пытается пришвартоваться к станции, но диспетчер строго соблюдает правила',
    text: `Pilot: Orion Station, this is cargo ship Lucky Duck. Requesting permission to dock.
Control: Lucky Duck, this is Orion Control. Please send your pilot license and cargo list.
Pilot: Sending now. I've been flying for nine hours, so please be quick.
Control: Thank you. Your license has expired, Captain Reyes.
Pilot: Expired? Since when?
Control: Since last Tuesday. If you want to dock, you'll have to pay a fine of two hundred credits.
Pilot: Two hundred? I've only got two hundred and fifty. Can we talk about this?
Control: I'm sorry, Captain. I don't make the rules. I just read them out loud.
Pilot: Fine. Paying now. There you go.
Control: Payment received. Your cargo list says "farm supplies". What exactly is in the boxes?
Pilot: Seeds, fertilizer, and forty space chickens.
Control: Forty live chickens? Have they been checked by a doctor?
Pilot: They're chickens, not passengers. They're very healthy. Very loud, but healthy.
Control: Okay. You're cleared for landing pad seven. Slow down to fifty meters per second.
Pilot: Slowing down. Turning on landing lights.
Control: Lucky Duck, you're drifting to the left. Correct your course.
Pilot: I know, I know. The left engine has been acting strange since the asteroid field.
Control: Five meters... three... one. Docking complete. Welcome to Orion Station.
Pilot: Thanks. Is the station café still open?
Control: It's open, but no chickens inside, please.`,
    questions: [
      { q: "Why does Captain Reyes have to pay a fine?", o: ["His license has expired", "He is carrying illegal cargo", "He landed on the wrong pad"], a: 0 },
      { q: "What is the problem with the ship during landing?", o: ["The lights don't work", "It is drifting left because of the left engine", "It is flying too slowly"], a: 1 },
      { q: "What is special about the cargo?", o: ["It contains weapons", "It is empty", "It includes forty live chickens"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-support-bug', title: 'My Horse Is on the Roof', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Horse',
    about: 'Техподдержка игры · чат с игроком',
    emoji: '🐞',
    ru: 'Игрок жалуется в поддержку на странный баг с лошадью, а агент пытается разобраться',
    text: `Agent: Hello, and welcome to player support. My name is Lina. How can I help you today?
Player: Hi. My horse is on the roof of the church, and it won't come down.
Agent: I see. Can you tell me how the horse got there?
Player: I have no idea. I logged out next to the stable, and when I logged back in, it was on the roof.
Agent: Have you tried calling it with the whistle?
Player: Yes, I've tried ten times. It just looks at me and eats the roof.
Agent: Eats the roof? That's... new. Have you installed any mods recently?
Player: Only one. It makes the horses look more realistic.
Agent: That might be the problem. Could you turn off the mod and restart the game?
Player: Okay, give me a minute... I've turned it off. Restarting now.
Agent: Take your time.
Player: Right, I'm back. The horse is still on the roof, but now it's pink.
Agent: Pink? Did the mod change its color?
Player: No, it was brown before. I think the game is laughing at me.
Agent: Let's try something else. Go to Settings, then Help, and click "Reset Mount Position".
Player: Done. Wait... it worked! The horse is next to me. Thank you so much!
Agent: You're welcome! If it happens again, please send us a screenshot.
Player: Of course. One more question: can I keep it pink?
Agent: I'll pass your request to the developers. No promises, though.`,
    questions: [
      { q: "What did the player do shortly before the bug?", o: ["He bought a new horse", "He installed a mod", "He deleted his save file"], a: 1 },
      { q: "What finally fixes the problem?", o: ["The \"Reset Mount Position\" option", "Calling the horse with the whistle", "Reinstalling the game"], a: 0 },
      { q: "How does the player feel about the pink horse at the end?", o: ["He is angry about it", "He wants the developers to delete it", "He would like to keep it"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-coach-halftime', title: 'Half-Time Talk', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Association football',
    about: 'Футбольный менеджер · раздевалка в перерыве',
    emoji: '⚽',
    ru: 'Команда проигрывает 0:2, и тренер в перерыве пытается всё изменить',
    text: `Coach: Sit down, everyone. Two-nil. Can somebody explain what I've just watched?
Rico: Coach, their striker is really fast. We couldn't keep up with him.
Coach: I know he's fast. I told you about him on Monday. Who was supposed to mark him?
Tomas: Me. But I slipped on the wet grass. Twice.
Coach: Okay. Accidents happen. But we've given away too much space in the middle.
Rico: Maybe we should play more defensively?
Coach: No. If we sit back, they'll score again. We need to push forward.
Leo: Can I say something? The left side is completely open. Their defender keeps running up.
Coach: Good point, Leo. That's exactly where we attack. You'll switch to the left wing.
Leo: Me? I've never played on the left.
Coach: There's a first time for everything. You're left-footed, aren't you?
Leo: Yes, but I usually just stand in the middle and look confident.
Coach: Then look confident on the left. Tomas, you're coming off. Sorry.
Tomas: That's fair. My legs feel like jelly anyway.
Coach: Kai, you're going on. Stay close to their striker. Don't let him turn.
Kai: Got it, Coach. I'll stick to him like glue.
Coach: Listen, all of you. It's only half-time. If we score early, they'll start to panic.
Rico: And if we don't?
Coach: Then the chairman will fire me, and you'll have to explain it to your fans.
Leo: Right. Let's win this, guys!`,
    questions: [
      { q: "What is the main tactical change the coach makes?", o: ["The team will play more defensively", "The team will attack on the left side", "The goalkeeper will be replaced"], a: 1 },
      { q: "Why is Tomas taken off?", o: ["He argued with the coach", "He was injured badly", "He slipped and couldn't stop the striker"], a: 2 },
      { q: "What is Kai's job in the second half?", o: ["To stay close to their striker", "To take all the corners", "To play on the left wing"], a: 0 }
    ]
  },
  {
    id: 'dlg-b1-smuggler', title: 'A Bargain in the Dark', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Smuggling',
    about: 'RPG · торг с контрабандистом в порту',
    emoji: '🗝️',
    ru: 'Героиня торгуется с хитрым контрабандистом за карту, которая нужна для квеста',
    text: `Smuggler: Well, well. You don't look like a guard. What are you looking for?
Irina: I've heard you have a map of the old mines. I need it.
Smuggler: Maybe I do, maybe I don't. Maps like that are expensive.
Irina: How expensive?
Smuggler: Five hundred gold. And I don't give discounts to strangers.
Irina: Five hundred? That's more than my sword costs. I'll give you one hundred.
Smuggler: One hundred? Ha! For that, I'll draw you a map myself. With a crayon.
Irina: Two hundred. And I won't tell the guards about the boxes behind you.
Smuggler: What boxes? These are... fish. Very old fish.
Irina: Fish don't usually make ticking sounds.
Smuggler: Okay, okay. Keep your voice down. Three hundred, and we're friends.
Irina: Two hundred and fifty. And you throw in a torch. The mines are dark.
Smuggler: You drive a hard bargain. Have you done this before?
Irina: My mother sold carpets. I've been haggling since I was six.
Smuggler: Fine. Two fifty and a torch. But the map is a bit old. Some tunnels may have fallen in.
Irina: You're telling me that now? After I've agreed?
Smuggler: I'm a smuggler, not a saint. Here you are.
Irina: If this map is fake, I'll come back. And I'll bring the guards.
Smuggler: If you come back from those mines at all, I'll give you a discount next time.`,
    questions: [
      { q: "How does Irina get a lower price?", o: ["She shows her sword", "She threatens to tell the guards about his boxes", "She offers to work for him"], a: 1 },
      { q: "What is the final deal?", o: ["250 gold and a torch", "500 gold and no discount", "100 gold and a crayon map"], a: 0 },
      { q: "What does the smuggler tell her only after she agrees?", o: ["The map is in another city", "The guards are coming", "Some tunnels may have fallen in"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-raid-night', title: 'Raid Night', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Dragon',
    about: 'MMO · рейд гильдии на дракона',
    emoji: '🐉',
    ru: 'Гильдия в MMO в пятый раз пытается убить ледяного дракона, и лидер рейда объясняет тактику',
    text: `Leader: Okay, guild, attempt number five. Before we start, is everyone here?
Tank: Here. I've repaired my armor. It cost me half my gold.
Mage: Sorry, I'm here! My cat walked on the keyboard.
Leader: Right. Quick reminder. When the dragon flies up, ice falls from the ceiling. Spread out.
Mage: What happens if we don't spread out?
Leader: Then we all freeze and die. Like last time. And the time before. So focus. Tank, you keep the dragon facing the wall. Don't turn it towards us.
Tank: Got it. Wall. Not people.
Leader: Mage, you only use big spells when I say so. Otherwise the dragon will attack you.
Mage: Understood. Can I use the fireball now?
Leader: We haven't started yet. Okay, three, two, one... go!
Tank: I've got its attention! It's facing the wall.
Healer: Everyone's health is good. Keep going.
Leader: It's flying up! Spread out, spread out!
Mage: I moved! I didn't freeze! Can I use the fireball now?
Leader: Yes! Now! Everything you've got!
Healer: It's falling... it's down! We did it!
Tank: Finally. Did it drop anything good?
Leader: One pair of boots. And, of course, they're for the mage.`,
    questions: [
      { q: "What must players do when the dragon flies up?", o: ["Hide behind the tank", "Spread out to avoid falling ice", "Use their strongest spells"], a: 1 },
      { q: "Why did the mage come late?", o: ["His cat walked on the keyboard", "He was repairing his armor", "He was buying mana potions"], a: 0 },
      { q: "How many times has the guild tried this boss, including tonight?", o: ["Once", "Three times", "Five times"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-scientist-puzzle', title: 'The Four Crystals', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Laboratory',
    about: 'Приключение-головоломка · лаборатория учёного',
    emoji: '🔬',
    ru: 'Чудаковатый учёный-NPC объясняет игроку загадку с кристаллами, от которой зависит дверь в лабораторию',
    text: `Professor: Ah, a visitor! Careful, don't touch anything. Especially the blue jar.
Alex: Hello, Professor. I've come to open the door to the lower lab. The villagers say it's locked.
Professor: Locked? No, no. It's protected by a puzzle. I designed it myself. A brilliant puzzle.
Alex: Then maybe you can just tell me the answer?
Professor: And ruin all the fun? Absolutely not. But I'll give you some hints. There are four crystals: red, blue, green and yellow. You must put them in the right order.
Alex: And what happens if I get it wrong?
Professor: The room fills with bubbles. Harmless, but very embarrassing.
Alex: Fine. What are the hints?
Professor: First: the red crystal is never next to the blue one. They've hated each other for years.
Alex: Crystals can hate each other?
Professor: In my lab, yes. Second: the green crystal always comes right after the yellow one.
Alex: So yellow, then green. What else?
Professor: Third: blue is the first crystal. It likes to be the leader.
Alex: Blue first... and red can't be next to blue. So: blue, yellow, green, red?
Professor: Hmm. Try it and see.
Alex: I've put them in. Something is humming... the door is opening!
Professor: Wonderful! You're the first person who has solved it without bubbles.
Alex: How many people have tried?
Professor: Including me? Just two. I got bubbles.`,
    questions: [
      { q: "Which crystal must be first?", o: ["Red", "Blue", "Yellow"], a: 1 },
      { q: "What happens if you choose the wrong order?", o: ["The room fills with harmless bubbles", "The door closes forever", "The crystals break"], a: 0 },
      { q: "What is funny about the professor at the end?", o: ["He forgot the answer", "He locked himself in the lab", "He couldn't solve his own puzzle"], a: 2 }
    ]
  },

  // ===================== B2 =====================
  {
    id: 'dlg-b2-faction-talks', title: 'The Iron Chancellor', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Diplomacy',
    about: 'RPG · переговоры с лидером фракции',
    emoji: '⚖️',
    ru: 'Посланник героя пытается убедить холодного лидера фракции вступить в союз против общего врага',
    text: `Chancellor: So you're the envoy everyone keeps talking about. You've got five minutes. Make them count.
Envoy: Then I'll get straight to the point. The Ash Legion will reach your walls within a month. We want an alliance.
Chancellor: An alliance. How generous. And what exactly would my city get out of it, apart from dead soldiers?
Envoy: Survival, for a start. The Legion doesn't take prisoners, and it certainly doesn't sign trade agreements.
Chancellor: My walls have held for three hundred years. I'm not in the habit of panicking.
Envoy: With respect, your walls have never faced siege engines that size. I've seen them with my own eyes.
Chancellor: Eyes can be bought. So can reports. Why should I take your word for it?
Envoy: You shouldn't. Send your own scouts north. If I'm lying, you can throw me off the tallest tower.
Chancellor: Tempting offer. Say I believe you. Your queen once burned our grain ships. People here have long memories.
Envoy: That was twenty years ago, and she's paid for it ever since. Let bygones be bygones — or at least put them on hold.
Chancellor: You're asking me to swallow my pride for a queen who wouldn't lift a finger for us.
Envoy: I'm asking you to be practical. If we fight separately, the Legion picks us off one by one.
Chancellor: Practical. Fine. Then here are my terms: free access to your mountain ports for ten years.
Envoy: Ten is out of the question. I can offer five, plus our engineers to strengthen your gates.
Chancellor: Seven. And your engineers stay until the war is over, not a day less.
Envoy: Seven years, the engineers stay, and your cavalry joins us on the northern front.
Chancellor: You drive a hard bargain for someone who arrived on a borrowed horse.
Envoy: It's been a long road. The horse and I have both run out of patience.
Chancellor: Very well. I'll send the scouts tonight. If they confirm what you've said, we have a deal.
Envoy: And if they don't?
Chancellor: Then I hope you're fond of heights, envoy.`,
    questions: [
      { q: "Why is the Chancellor reluctant to trust the envoy's queen?", o: ["She once burned their grain ships", "She refused to pay for engineers", "She attacked their walls"], a: 0 },
      { q: "What does the final agreement depend on?", o: ["The queen apologizing in person", "The Chancellor's scouts confirming the threat", "The envoy paying in gold"], a: 1 },
      { q: "What does \"Let bygones be bygones\" mean here?", o: ["Let's start the war immediately", "Let's repeat the old agreement", "Let's forget past conflicts"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-interrogation', title: 'The Missing Hour', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Interrogation',
    about: 'Детектив · допрос свидетеля',
    emoji: '🕵️',
    ru: 'Детектив допрашивает вежливого дворецкого и ловит его на противоречии в показаниях',
    text: `Detective: Take a seat, Mr. Hale. This won't take long — assuming you tell me the truth.
Butler: I always tell the truth, Detective. It's practically part of my job description.
Detective: Good. The painting disappeared from the gallery between nine and ten last night. Where were you?
Butler: In the kitchen, polishing silver. As I do every Thursday, without fail.
Detective: Can anyone back that up?
Butler: The cook was there until half past nine. After that, I was on my own. Silver doesn't gossip, I'm afraid.
Detective: Funny. The cook says you left the kitchen at nine sharp and didn't come back.
Butler: The cook has been known to exaggerate. She once claimed she'd seen a ghost in the pantry.
Detective: Let's leave the ghost out of it. Your shoes — there's red clay on them. Where did that come from?
Butler: The garden, presumably. I took the dog out earlier in the evening.
Detective: The family doesn't own a dog, Mr. Hale.
Butler: ...The neighbour's dog. It wanders over. I'm fond of it.
Detective: Right. And the only place on the estate with red clay is right under the gallery window.
Butler: A coincidence, surely. Plenty of people walk past that window.
Detective: At ten at night, in the rain? You're either very unlucky or not very honest.
Butler: With respect, Detective, you're clutching at straws. Clay isn't a crime.
Detective: No, but lying to the police is. You've changed your story twice in five minutes.
Butler: I'm a butler, not a professional witness. My memory isn't what it used to be.
Detective: Then let me jog it. We found the painting's frame in the garden shed. Your gloves were next to it.
Butler: ...Those gloves could belong to anyone.
Detective: They have your initials stitched inside. Would you like to try that answer again?
Butler: Perhaps I'd like to speak to a lawyer. And perhaps a cup of tea.`,
    questions: [
      { q: "What is the first contradiction the detective points out?", o: ["The butler says he doesn't like dogs", "The cook says the butler left the kitchen at nine", "The butler was seen in the garden shed"], a: 1 },
      { q: "Why is the red clay on his shoes suspicious?", o: ["It is only found under the gallery window", "It matches the painting's colour", "It is from the neighbour's garden"], a: 0 },
      { q: "What does \"clutching at straws\" mean in this dialogue?", o: ["Working very carefully", "Asking too many questions", "Using weak evidence out of desperation"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-moba-draft', title: 'The Draft Argument', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Multiplayer online battle arena',
    about: 'MOBA · драфт героев и спор о стратегии',
    emoji: '🧙',
    ru: 'Пять незнакомцев выбирают героев в MOBA и спорят, стоит ли рисковать с необычным пиком',
    text: `Vex: Okay, before anyone locks in anything weird — what's the plan? They've already banned our two best supports.
Rook: I'm going mid with the fire mage. Non-negotiable. I've got two hundred games on her.
Juno: Fine by me. I'll take the jungle. Probably the wolf rider, unless someone has a better idea.
Pax: Actually, I was thinking of playing the pacifist monk. In the top lane.
Vex: The monk? The one who literally can't deal damage for the first ten minutes?
Pax: That's the whole point. He scales like crazy. Late game, he's basically unkillable.
Rook: Late game? Mate, if we fall behind early, there won't be a late game.
Pax: That's why the jungler helps me. Juno, you can camp top for a bit, right?
Juno: I'm not babysitting a lane for ten minutes. I've got my own farm to worry about.
Vex: Look, their team comp is super aggressive. Three assassins. They're going to dive us from minute one.
Nell: Can I jump in? I've been quiet, but I think we're overthinking this.
Vex: Go on, then.
Nell: If they've gone all-in on early aggression, we don't have to out-fight them. We just have to survive until they run out of steam.
Rook: So you're saying the monk isn't completely insane?
Nell: I'm saying he's a gamble, but not a crazy one — as long as we draft enough crowd control to peel for him.
Pax: Thank you! Someone gets it.
Vex: All right, I'll play the shield priestess, then. Lots of stuns, lots of protection. But if this goes south, Pax, it's on you.
Pax: Deal. If we lose, I'll take the blame in all-chat.
Juno: Okay, I'll gank top twice before ten minutes. Twice. Not a single time more.
Rook: And I'll try not to die to three assassins in the first five minutes. No promises.
Nell: I'll take the archer. Safe, long range, keeps them off our backline.
Vex: Everyone happy? Lock it in. Ten seconds left.
Pax: Locked. Monk is ready to heal the world.
Rook: Monk is ready to feed the enemy, more like. Let's go.`,
    questions: [
      { q: "Why is Vex worried about the monk?", o: ["He is too expensive", "He deals no damage early in the game", "Rook wants to play him"], a: 1 },
      { q: "What is Nell's main argument?", o: ["The team only needs to survive the enemy's early aggression", "They should ban the three assassins", "The monk should play mid instead"], a: 0 },
      { q: "What does \"if this goes south\" mean?", o: ["If the team moves to the bottom lane", "If the enemy surrenders", "If the plan fails"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-moral-choice', title: 'The Village or the Cure', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Village',
    about: 'RPG · моральный выбор с напарником',
    emoji: '🔥',
    ru: 'Герой и напарница спорят: спасти деревню от пожара или успеть забрать лекарство для целого города',
    text: `Mira: Look — the smoke. The village is on fire. The bandits must have set it alight on their way out.
Caden: And the caravan with the cure is heading east. If we don't catch it by sunset, it's gone for good.
Mira: There are people down there, Caden. Kids, old folks. We can't just walk past.
Caden: And there are thousands of sick people in the capital. That medicine is the only batch left.
Mira: So what, we do the maths? Twenty lives here versus a thousand there?
Caden: I hate it as much as you do. But yes. Somebody has to do the maths.
Mira: That's easy to say when you don't have to look them in the eye.
Caden: You think this is easy for me? I grew up in a village like that. I know exactly what we're walking away from.
Mira: Then why are you even considering it?
Caden: Because my village had no one coming to save it either. And I'm still angry about it. That's why I want this choice to count.
Mira: Okay. Then let's think outside the box. What if we split up?
Caden: Alone, neither of us stands a chance. Four bandits at the caravan, and a burning village with who knows what inside.
Mira: The villagers aren't helpless. If someone organises them, they can fight the fire themselves. They just need a leader.
Caden: You're suggesting we spend ten minutes there, not two hours.
Mira: Exactly. Get the well pumps working, get the kids out, then ride like the wind.
Caden: Ten minutes might be the difference between catching the caravan and missing it.
Mira: And it might be the difference between living with ourselves and not. I'm not prepared to carry that.
Caden: You know I've been outvoted by your conscience more times than I can count.
Mira: And you've never once regretted it.
Caden: I regretted the swamp.
Mira: Everyone regretted the swamp. Ten minutes, Caden. Starting now.
Caden: Fine. But if we miss that caravan, you're explaining it to the capital.`,
    questions: [
      { q: "Why does Caden understand the villagers' situation so well?", o: ["He was once a bandit", "He grew up in a similar village", "He used to be a doctor"], a: 1 },
      { q: "What compromise does Mira suggest?", o: ["Spend only ten minutes helping and organising the villagers", "Split up and go separately", "Ask the bandits to return the medicine"], a: 0 },
      { q: "What does \"think outside the box\" mean?", o: ["Look for hidden treasure", "Follow the usual rules", "Find a creative, unusual solution"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-streamer-chat', title: 'Reading the Chat', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Live streaming',
    about: 'Стрим · стример отвечает на сообщения чата',
    emoji: '🎥',
    ru: 'Стример играет в сложный соулслайк и параллельно отвечает на вопросы и подколки чата',
    text: `Streamer: Okay, chat, we're back. Attempt number forty-two on the Bell Knight. Let's be honest, I'm not feeling lucky.
NightOwl: skill issue lol
Streamer: NightOwl, thank you for your support, as always. Very helpful. Ten out of ten.
PixelPaws: how long have you been stuck on this boss?
Streamer: Since about eight o'clock. So... three hours? Don't tell my mum.
GrumpyToast: just use the big shield, it trivialises the fight
Streamer: I could use the big shield, but then I'd have to live with the shame. I've got standards.
NightOwl: standards didn't get you past phase two
Streamer: Fair point, actually. That one stung. Right, here we go. Dodge, dodge... and he's ringing the bell. That's the bad bit.
LunaByte: first time here, what game is this?
Streamer: Welcome, Luna! It's an indie soulslike about a knight who's cursed to die over and over. Very relatable content tonight.
PixelPaws: you're at half health, drink a potion!
Streamer: I'm saving them for phase two. Trust the process, Paws.
GrumpyToast: famous last words
Streamer: Okay, phase two. He's summoning the little bells. Why are there always little bells? Oh no. Oh no, no, no.
NightOwl: here we go again
Streamer: I got greedy. I went for one extra hit and he flattened me. Classic me.
LunaByte: is it always like this?
Streamer: Luna, you've joined on a special night. Usually it's worse.
PixelPaws: take a break, grab some water, come back with a clear head
Streamer: You know what, that's genuinely good advice. Five-minute break, then attempt forty-three.
GrumpyToast: big shield after the break?
Streamer: ...I'll think about it. No promises. Don't clip that.
NightOwl: already clipped`,
    questions: [
      { q: "Why doesn't the streamer want to use the big shield?", o: ["It is too heavy for his character", "He thinks it would be embarrassing", "It doesn't work in phase two"], a: 1 },
      { q: "What causes him to die in phase two?", o: ["He tried to get one extra hit", "He ran out of potions", "He was reading the chat"], a: 0 },
      { q: "What does GrumpyToast mean by \"famous last words\"?", o: ["The streamer is about to win", "The boss is saying its final line", "The streamer's confident plan will probably fail"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-final-boss', title: 'Before the Last Fight', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Tower',
    about: 'Экшен-RPG · монолог злодея и ответ героя',
    emoji: '👑',
    ru: 'Перед финальной битвой злодей объясняет, почему он прав, а героиня отвечает ему по-своему',
    text: `Veyl: So you've finally made it to the top of my tower. I must admit, I'm impressed. Most people give up at the stairs.
Aria: There were nine hundred of them. You could've installed a lift.
Veyl: Lifts are for people in a hurry. I've had centuries to wait. Sit, if you like. Before we start, let me explain.
Aria: Here we go. I had a feeling there'd be a speech.
Veyl: Look out of that window. Wars, hunger, kings who care about nothing but their crowns. The world is broken, and I'm the only one willing to fix it.
Aria: By freezing it. Turning every city into ice so nothing ever changes again.
Veyl: Nothing changes, so nothing gets worse. No more wars. No more loss. Is that really so monstrous?
Aria: No more music, either. No more first snow, no more bad jokes in taverns. You're not fixing the world. You're pressing pause and calling it peace.
Veyl: Pretty words. But you've seen what people do when they're free. You've buried friends because of it.
Aria: I have. And every one of them chose to fight for something. You're taking that choice away from everybody else.
Veyl: Choice is overrated. I once had a family. They chose to trust a king, and the king sold them out.
Aria: I'm sorry. Truly. But your grief doesn't give you the right to decide for the whole world.
Veyl: You sound just like my brother. He stood exactly where you're standing.
Aria: What happened to him?
Veyl: He's part of the eastern glacier now. It's rather beautiful, actually.
Aria: That's the most disturbing thing I've heard all week, and I spent Tuesday in a haunted swamp.
Veyl: Last chance, Aria. Join me, and you'll never lose anyone again.
Aria: Tempting. But I'd rather lose people than never have them in the first place.
Veyl: Then you leave me no choice.
Aria: Oh, there's always a choice. You've just been making the wrong one for three hundred years.
Veyl: Enough talk. Let's see if your courage is as sharp as your tongue.
Aria: Only one way to find out. And after this, I'm taking the stairs down. Slowly.`,
    questions: [
      { q: "What is Veyl's plan for the world?", o: ["To become king of every city", "To freeze everything so that nothing changes", "To start a new war"], a: 1 },
      { q: "What is Aria's main argument against him?", o: ["People should have the right to choose, even if they lose things", "Ice magic is too dangerous to control", "His brother would not agree with him"], a: 0 },
      { q: "What happened to Veyl's family?", o: ["They joined the hero's army", "They froze in the glacier by accident", "A king they trusted betrayed them"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-post-match', title: 'What Went Wrong', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Esports',
    about: 'Командный шутер · разбор проигрыша после матча',
    emoji: '📉',
    ru: 'Любительская киберспортивная команда разбирает запись проигранного матча и пытается не поругаться',
    text: `Captain: Okay, the replay's loaded. Before anyone starts pointing fingers, remember: we lost as a team.
Bo: Sure. But some of us lost a bit harder than others.
Captain: Bo. What did I literally just say? Anyway. Round one, we were fine. Round two, it all fell apart. Let's watch from the three-minute mark.
Zara: Right there. That's where we rushed the bridge without any intel. Whose call was that?
Bo: ...Mine. I had a gut feeling.
Zara: Your gut feeling got three of us wiped in eight seconds.
Bo: In fairness, in scrims that exact push worked like a charm.
Captain: In scrims, the other team wasn't expecting it. Tonight they'd clearly done their homework. They'd watched our last two matches.
Finn: That's actually the bigger issue. We've been running the same three strategies for a month. We're too predictable.
Zara: Agreed. And our comms went to pieces after we lost that fight. Everyone was talking over each other.
Finn: I couldn't hear a single callout. It was just noise and somebody's microwave.
Bo: That was my microwave. I was hungry.
Captain: No microwaves during officials. That's a new rule, effective immediately.
Zara: Can we also talk about the final round? We had the numbers advantage, four versus two, and still threw it.
Finn: Because we all chased the same guy. Nobody held the objective.
Captain: Yeah, that one's on me. I should've told someone to stay back. I got tunnel vision.
Bo: Look, I know I messed up with the bridge. I'll own that. But I think we're all a bit burnt out, too.
Captain: That's fair. We've been practising five nights a week. Maybe that's too much.
Zara: So what's the plan? We've got the rematch in two weeks.
Captain: Three things. New strategies, strict comms — one person calls, everyone else listens — and two days off this week.
Finn: Days off? Now we're talking.
Bo: And snacks are allowed, as long as they're silent?
Captain: Silent snacks only, Bo. Cold pizza, not popcorn.`,
    questions: [
      { q: "According to Finn, what is the team's biggest problem?", o: ["Their equipment is too old", "They use the same strategies too often and are predictable", "Bo makes too many calls"], a: 1 },
      { q: "What went wrong in the final round?", o: ["Everyone chased one enemy and nobody held the objective", "They were outnumbered four to two", "The captain disconnected"], a: 0 },
      { q: "What does \"worked like a charm\" mean?", o: ["It was a magic trick", "It was very lucky", "It worked perfectly"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-strategy-deal', title: 'Salt for Silence', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    wiki: 'Salt',
    about: 'Глобальная стратегия · дипломатическая сделка',
    emoji: '🗺️',
    ru: 'Два правителя в пошаговой стратегии заключают хитрую сделку, и каждый пытается перехитрить другого',
    text: `Queen Oda: Duke Marrow. Thank you for coming. I'd like to discuss a small matter of trade.
Duke Marrow: Trade? Last turn your cavalry was camped on my border. Forgive me if I'm a little suspicious.
Queen Oda: Training exercises. Purely routine. Now — you have salt, and I have iron. I think we can help each other.
Duke Marrow: I'm listening. But I'm not signing anything until I see the numbers.
Queen Oda: Ten units of salt per turn, in exchange for eight units of iron. For twenty turns.
Duke Marrow: Eight? Salt's worth a fortune since the coastal mines flooded. Twelve iron, or there's no deal.
Queen Oda: Twelve is daylight robbery. Nine, and I'll throw in a map of the northern passes.
Duke Marrow: I've already got that map. My scouts drew it three turns ago.
Queen Oda: Yours is out of date. There's been a landslide since then. My version shows the new route.
Duke Marrow: Hm. Interesting. Ten iron, the map, and a non-aggression pact for the same twenty turns.
Queen Oda: A pact? Why so nervous, Duke? Anyone would think you're planning something.
Duke Marrow: I'm planning to still exist in twenty turns. Call it a modest ambition.
Queen Oda: Fine. Ten iron, the map, the pact. But I want one extra clause.
Duke Marrow: Here it comes. There's always a catch.
Queen Oda: You don't sell salt to the Southern League. Not a single grain.
Duke Marrow: The Southern League are my best customers. You're asking me to shoot myself in the foot.
Queen Oda: I'm asking you to pick a side. They're arming themselves, and I'd rather they did it without your help.
Duke Marrow: And if I refuse?
Queen Oda: Then the deal's off, and my cavalry might need some more training exercises. Near your border, as it happens.
Duke Marrow: Subtle as a hammer, as always. All right. No salt to the South — but only for ten turns, not twenty.
Queen Oda: Fifteen, and we shake on it.
Duke Marrow: Fifteen. You've got yourself a deal. I'll send the first shipment next turn.
Queen Oda: Pleasure doing business with you, Duke. Truly.
Duke Marrow: I'm sure it is. I'll be counting my salt very carefully.`,
    questions: [
      { q: "Why does the Duke want a non-aggression pact?", o: ["He wants to attack the Southern League", "He doesn't trust the Queen, especially after her cavalry was on his border", "The Queen asked for it first"], a: 1 },
      { q: "What is the Queen's extra condition?", o: ["The Duke must not sell salt to the Southern League", "The Duke must give her his map", "The Duke must send soldiers"], a: 0 },
      { q: "What does \"shoot yourself in the foot\" mean?", o: ["Start a war", "Win a battle easily", "Do something that harms your own interests"], a: 2 }
    ]
  }
]);
