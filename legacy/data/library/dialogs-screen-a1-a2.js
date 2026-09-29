window.LIBRARY = (window.LIBRARY || []).concat([
  // ===================== A1 =====================
  {
    id: 'dlg-a1-scr-cafe-sitcom', title: 'The Wrong Coffee', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Ситком · кафе',
    emoji: '☕',
    wiki: 'Coffeehouse',
    ru: 'Друзья в любимом кафе: Макс опять получил чужой кофе, а у официантки есть секрет.',
    text: `Max: Excuse me. This is not my coffee.
Waitress: Is it tea?
Max: No. It is pink. And it has a cat on it.
Waitress: Oh! That is for Lily. Sorry!
Lily: My pink coffee! Thank you, Max.
Max: You drink pink coffee? Every day?
Lily: Yes. It makes me happy.
Max: Can I have a normal coffee, please?
Waitress: Sure. Black, no sugar?
Max: Yes, please. And a big cookie.
Waitress: Here you are. The cookie is free today.
Max: Free? Why? ... Wait. Why do you smile?`,
    questions: [
      { q: 'What is wrong with Max\'s coffee?', o: ['It is cold', 'It is not his coffee', 'It has no sugar'], a: 1 },
      { q: 'Who drinks pink coffee?', o: ['Lily', 'Max', 'The waitress'], a: 0 },
      { q: 'What does Max want with his coffee?', o: ['Tea', 'Milk', 'A big cookie'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-scr-office-printer', title: 'The Printer Is Angry', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Офисная комедия · копировальная',
    emoji: '🖨️',
    wiki: 'Photocopier',
    ru: 'Принтер в офисе снова сломан, а через пять минут встреча с боссом.',
    text: `Kate: Tom, help me, please! The printer does not work.
Tom: Again? Press the green button.
Kate: I press it. Nothing happens.
Tom: Open the door. Look inside.
Kate: I can see paper. Lots of paper.
Tom: Okay. Now close it and say "please".
Kate: To the printer? Are you serious?
Tom: Yes. It likes good manners.
Kate: Please, dear printer... Oh! It works!
Tom: See? Easy.
Kate: Wait. It prints my lunch order. Fifty times.
Tom: Hmm. The boss is here in five minutes.`,
    questions: [
      { q: 'What button does Tom tell Kate to press?', o: ['The red button', 'The green button', 'The big button'], a: 1 },
      { q: 'What does Kate say to the printer?', o: ['Please', 'Thank you', 'Hello'], a: 0 },
      { q: 'What does the printer print?', o: ['A report', 'A photo of the boss', 'Kate\'s lunch order'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-scr-detective-cake', title: 'Who Ate the Cake?', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Детектив · комната допросов',
    emoji: '🕵️',
    wiki: 'Chocolate cake',
    ru: 'Детектив допрашивает подозреваемого: из отеля пропал праздничный торт.',
    text: `Detective: Sit down, please. Your name?
Mr Green: Paul Green. I am a cook here.
Detective: A big cake is not in the kitchen. Where is it?
Mr Green: I do not know. I do not like cake.
Detective: Really? You are a cook.
Mr Green: I cook soup. Only soup.
Detective: Show me your hands, please.
Mr Green: Here. They are clean.
Detective: Yes. But your shirt is not clean.
Mr Green: This? It is... tomato soup.
Detective: Tomato soup is red. This is chocolate.
Mr Green: Okay, okay! But I am not the only one.`,
    questions: [
      { q: 'What is Mr Green\'s job?', o: ['He is a detective', 'He is a cook', 'He is a waiter'], a: 1 },
      { q: 'What does the detective see on his shirt?', o: ['Chocolate', 'Tomato soup', 'Coffee'], a: 0 },
      { q: 'What does Mr Green say at the end?', o: ['He is not guilty', 'He likes soup', 'Other people ate the cake too'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-scr-scifi-bridge', title: 'A Planet with Cats', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Sci-fi · мостик корабля',
    emoji: '🚀',
    wiki: 'Bridge (nautical)',
    ru: 'Экипаж звездолёта находит новую планету, и её жители очень похожи на котов.',
    text: `Captain: Robot, where are we?
Robot: Near a new planet, Captain. It is green.
Captain: Can people live there?
Robot: Yes. There is water and air.
Pilot: Captain, look! I can see houses.
Captain: Houses? Who lives there?
Robot: Small animals. They have four legs and long tails.
Pilot: They look like cats!
Captain: Are they dangerous?
Robot: No. They sleep twenty hours a day.
Pilot: I love this planet.
Robot: Captain, one problem. Their king wants our fish.`,
    questions: [
      { q: 'What colour is the planet?', o: ['Red', 'Blue', 'Green'], a: 2 },
      { q: 'How many hours a day do the animals sleep?', o: ['Twenty', 'Ten', 'Twelve'], a: 0 },
      { q: 'What does their king want?', o: ['The ship', 'The fish', 'The robot'], a: 1 }
    ]
  },
  {
    id: 'dlg-a1-scr-er-hiccups', title: 'A Very Loud Patient', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Медицинская драма · приёмный покой',
    emoji: '🏥',
    wiki: 'Emergency department',
    ru: 'Ночь в приёмном покое: у пациента икота уже три дня, и молодой врач ищет решение.',
    text: `Nurse: Doctor Reed, a new patient. Room three.
Doctor: What is the problem?
Nurse: Hiccups. For three days.
Doctor: Hello, sir. How do you feel?
Patient: I am tired. Hic! I cannot sleep. Hic!
Doctor: Drink this water, please. Slowly.
Patient: Okay... Hic! No. It does not help.
Doctor: Close your eyes. Count to ten.
Patient: One, two, three... Hic!
Nurse: Doctor, the boss is here. She is very angry.
Patient: The boss? Oh... My hiccups stop!
Doctor: Interesting. Nurse, call the boss every day.`,
    questions: [
      { q: 'How long does the patient have hiccups?', o: ['Three days', 'Three hours', 'Ten days'], a: 0 },
      { q: 'What does the doctor give the patient first?', o: ['Tea', 'Water', 'Medicine'], a: 1 },
      { q: 'Why do the hiccups stop?', o: ['He sleeps', 'He counts to ten', 'He hears about the angry boss'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-scr-school-new-girl', title: 'The New Girl', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Школьная драма · коридор',
    emoji: '🎒',
    wiki: 'Locker',
    ru: 'Первый день новенькой в школе: одноклассник помогает найти класс, но у неё странный рюкзак.',
    text: `Ben: Hi! Are you new here?
Mia: Yes. I am Mia. Today is my first day.
Ben: I am Ben. What is your first class?
Mia: Math. Room twelve. Where is it?
Ben: Go up the stairs. Turn left.
Mia: Thank you! Is the teacher nice?
Ben: Mr Brown? He is okay. But he hates phones.
Mia: I do not have a phone.
Ben: No phone? Really? Why?
Mia: My family does not use phones.
Ben: Cool. What is in your bag? It moves!
Mia: Oh, nothing. Nothing at all. See you later!`,
    questions: [
      { q: 'What is Mia\'s first class?', o: ['English', 'Math', 'Music'], a: 1 },
      { q: 'What does Mr Brown hate?', o: ['Phones', 'Bags', 'New students'], a: 0 },
      { q: 'What is strange about Mia\'s bag?', o: ['It is very big', 'It is pink', 'It moves'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-scr-cooking-show', title: 'Three Minutes Left', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Кулинарное шоу · студия',
    emoji: '👨‍🍳',
    wiki: 'Hourglass',
    ru: 'Кулинарный конкурс в прямом эфире: у участника три минуты, а блюдо идёт не по плану.',
    text: `Host: Three minutes left! Sam, what do you cook?
Sam: Fish with lemon and rice.
Host: Great! Is the fish ready?
Sam: Yes. Look. It is nice and white.
Host: And the rice?
Sam: The rice... Oh no. It is black!
Host: Black rice? Is it a new recipe?
Sam: Yes! Yes, it is. It is my special recipe.
Host: One minute left! Put it on the plate.
Judge: Hmm. Sam, can you tell me about this rice?
Sam: It is... smoky rice. Very modern.
Judge: I love it. Give me more.`,
    questions: [
      { q: 'What does Sam cook?', o: ['Chicken with rice', 'Fish with lemon and rice', 'Soup with fish'], a: 1 },
      { q: 'What is the problem with the rice?', o: ['It is black', 'It is cold', 'It is salty'], a: 0 },
      { q: 'What does the judge think?', o: ['He hates it', 'He does not eat it', 'He loves it'], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-scr-superhero-base', title: 'A Hero Who Cannot Fly', level: 'A1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Супергерои · штаб',
    emoji: '🦸',
    wiki: 'Superman',
    ru: 'В штабе супергероев новичок признаётся, что его суперсила — совсем не то, что все думали.',
    text: `Leader: Welcome to the team, Blue Flash!
Blue Flash: Thank you! I am very happy.
Leader: So, what can you do? Can you fly?
Blue Flash: No, I cannot fly.
Leader: Can you run very fast?
Blue Flash: No. I walk. Slowly.
Leader: Hmm. Are you very strong?
Blue Flash: Not really. I can open jars.
Leader: Then what is your super power?
Blue Flash: I can talk to all animals.
Leader: All animals? Even birds?
Blue Flash: Yes. And the birds say one thing: the bad guy is on your roof.`,
    questions: [
      { q: 'Can Blue Flash fly?', o: ['Yes, very fast', 'No, he cannot', 'Only at night'], a: 1 },
      { q: 'What is his super power?', o: ['He can talk to animals', 'He is very strong', 'He can run fast'], a: 0 },
      { q: 'Where is the bad guy?', o: ['In the kitchen', 'In the park', 'On the roof'], a: 2 }
    ]
  },

  // ===================== A2 =====================
  {
    id: 'dlg-a2-scr-romcom-airport', title: 'Two Bags, One Mistake', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Романтическая комедия · аэропорт',
    emoji: '✈️',
    wiki: 'Baggage reclaim',
    ru: 'Двое незнакомцев перепутали одинаковые чемоданы в аэропорту — и это только начало истории.',
    text: `Anna: Excuse me! I think you have my suitcase.
Jake: This one? No, it's mine. It's red with a yellow ribbon.
Anna: Mine is red with a yellow ribbon too.
Jake: Really? Okay, let's open it and check.
Anna: Wait! You can't just open my suitcase!
Jake: Well, I'm going to open my suitcase. Look... oh.
Anna: Yes. That's my pink dress. And my books.
Jake: I'm so sorry. I was in a hurry, and I took the wrong one.
Anna: So where is your suitcase now?
Jake: Maybe it went to the car park. Or to Paris.
Anna: Paris? Were you going to fly to Paris?
Jake: Yes. For a job interview. But my plane left ten minutes ago.
Anna: Oh no. I'm going to Paris too. On the next plane.
Jake: Then maybe I can buy you a coffee? To say sorry.
Anna: Okay. But I'm carrying my own suitcase.
Jake: Deal. By the way, why do you have a photo of me in your book?`,
    questions: [
      { q: 'Why did Jake take the wrong suitcase?', o: ['He was in a hurry', 'He wanted the pink dress', 'Anna gave it to him'], a: 0 },
      { q: 'Why was Jake going to fly to Paris?', o: ['For a holiday', 'For a job interview', 'To see his family'], a: 1 },
      { q: 'What surprising thing is in Anna\'s book?', o: ['A plane ticket', 'Money', 'A photo of Jake'], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-scr-fantasy-council', title: 'The Dragon Problem', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Фэнтези · совет королевства',
    emoji: '🐉',
    wiki: 'Round Table',
    ru: 'Королевский совет спорит, что делать с драконом, который поселился у стен замка.',
    text: `Queen: Sit down, everyone. We have a problem. A dragon arrived last night.
General: I saw it, Your Majesty. It's huge. I'm going to prepare the army.
Wizard: Wait. The army is a bad idea. Dragons hate loud noise.
Queen: Then what do you suggest?
Wizard: I'm going to talk to it. Dragons are very clever.
General: Talk? Last year a dragon ate my horse!
Wizard: Did you ask it nicely?
General: No, I shouted at it and threw a spear.
Wizard: Exactly. That was your mistake.
Queen: Enough! Wizard, did the dragon say anything?
Wizard: Yes. It came to my tower this morning. It was very polite.
Queen: And what does it want? Gold? Cows?
Wizard: No. It wants to be a member of this council.
General: A dragon on the council? Impossible!
Queen: Hmm. It can't be worse than you two.`,
    questions: [
      { q: 'What did the General want to do?', o: ['Talk to the dragon', 'Prepare the army', 'Leave the castle'], a: 1 },
      { q: 'What happened to the General last year?', o: ['A dragon ate his horse', 'He lost his spear', 'He became a wizard'], a: 0 },
      { q: 'What does the dragon want?', o: ['Gold', 'Cows', 'To be a member of the council'], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-scr-heist-plan', title: 'The Perfect Plan', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Ограбление · план',
    emoji: '💎',
    wiki: 'Bank vault',
    ru: 'Команда в последний раз обсуждает план кражи алмаза из музея, но у новичка много вопросов.',
    text: `Boss: Okay, team. Tomorrow night we're going to take the Blue Star diamond.
Nina: I visited the museum yesterday. There are two guards and ten cameras.
Boss: Good. Leo, what about the cameras?
Leo: I'm going to switch them off at 11:05. For five minutes only.
Boss: Five minutes is enough. Nina opens the window. I take the diamond.
Kid: Excuse me. Can I ask a question?
Boss: You're new. Quickly.
Kid: What do the two guards do at 11:05?
Nina: They always drink tea in the kitchen. I watched them for a week.
Kid: And how do we leave the museum?
Leo: In my van. I parked it behind the building this morning.
Kid: A white van with a big pizza on it?
Leo: Yes. How did you know?
Kid: Because the police took it an hour ago. You parked in a no-parking zone.
Boss: Leo...
Leo: Okay, okay. New plan. Does anyone have a bike?`,
    questions: [
      { q: 'How many guards are there in the museum?', o: ['Two', 'Five', 'Ten'], a: 0 },
      { q: 'What do the guards do at 11:05?', o: ['They watch the cameras', 'They go home', 'They drink tea in the kitchen'], a: 2 },
      { q: 'Why did the police take the van?', o: ['It was stolen', 'Leo parked in a no-parking zone', 'It had a diamond inside'], a: 1 }
    ]
  },
  {
    id: 'dlg-a2-scr-courtroom-parrot', title: 'The Only Witness', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Судебная драма · зал суда',
    emoji: '⚖️',
    wiki: 'Grey parrot',
    ru: 'В суде разбирают дело о пропавших деньгах, и адвокат вызывает очень необычного свидетеля.',
    text: `Judge: Mr Hall, you say you didn't take the money. Where were you on Friday night?
Mr Hall: I was at home, Your Honour. I watched TV and went to bed early.
Lawyer: Was anyone with you?
Mr Hall: No. Only my parrot, Captain.
Prosecutor: A parrot? That isn't a witness.
Lawyer: Your Honour, I'm going to call Captain as a witness.
Judge: This is very unusual... but okay. Bring the bird in.
Lawyer: Captain, where was Mr Hall on Friday?
Captain: Home! Home! Bad TV!
Prosecutor: Anyone can teach a bird to say that!
Lawyer: Captain, who came to the house on Friday?
Captain: Mike! Mike! Money in the box!
Judge: Mike? Who is Mike?
Mr Hall: Mike is my business partner. He visited me for five minutes.
Prosecutor: Um... Your Honour, can we take a short break?`,
    questions: [
      { q: 'What did Mr Hall do on Friday night?', o: ['He went to a restaurant', 'He watched TV and went to bed early', 'He visited Mike'], a: 1 },
      { q: 'Who is Captain?', o: ['A police officer', 'Mr Hall\'s lawyer', 'Mr Hall\'s parrot'], a: 2 },
      { q: 'Who is Mike?', o: ['Mr Hall\'s business partner', 'The judge', 'Mr Hall\'s brother'], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-scr-horror-old-house', title: 'Someone Upstairs', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Хоррор · старый дом',
    emoji: '🕯️',
    wiki: 'Candle',
    ru: 'Брат и сестра проводят первую ночь в старом доме, который купили родители. Наверху кто-то ходит.',
    text: `Emma: Josh, wake up! Did you hear that?
Josh: Hear what? It's three in the morning.
Emma: Steps. Upstairs. Somebody walked across the room.
Josh: There's nobody upstairs. Mum and Dad are in the city tonight.
Emma: I know. That's why I'm scared.
Josh: It's an old house. Old houses make noises.
Emma: Yesterday I found a little door in the kitchen. It was open this morning.
Josh: Maybe the wind opened it.
Emma: There's no wind tonight. Listen... again!
Josh: Okay, okay. I'm going to check. Give me the torch.
Emma: I'm not going to stay here alone. I'm coming with you.
Josh: Fine. But stay behind me.
Emma: Josh... the light in the attic is on.
Josh: We didn't turn it on. Nobody went up there.
Voice: Finally! Can someone bring me a sandwich? I waited for you all day!`,
    questions: [
      { q: 'Where are the parents tonight?', o: ['Upstairs', 'In the city', 'In the kitchen'], a: 1 },
      { q: 'What did Emma find yesterday?', o: ['A little door in the kitchen', 'An old photo', 'A torch'], a: 0 },
      { q: 'What does the voice in the attic want?', o: ['The torch', 'The house', 'A sandwich'], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-scr-spy-train', title: 'The Man in the Grey Coat', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Шпионский триллер · ночной поезд',
    emoji: '🕶️',
    wiki: 'Orient Express',
    ru: 'Шпионка встречает связного в ночном поезде, но секретный пароль идёт не совсем так.',
    text: `Agent: Excuse me. Is this seat free?
Man: It depends. Do you like green apples?
Agent: Only in winter. With honey.
Man: Good. Sit down. You're late.
Agent: The first train was cancelled. I took a taxi to the next station.
Man: Did anyone follow you?
Agent: A woman in a red hat. But I lost her at the station.
Man: Good. Here is the envelope. Don't open it on the train.
Agent: What's inside?
Man: A key and an address. Tomorrow you're going to meet our friend there.
Agent: And what are you going to do?
Man: I'm going to get off at the next stop and disappear.
Agent: Wait. The password. You said "green apples". Our password is "red apples".
Man: Red? Are you sure? They changed it last week?
Agent: Nobody changed it. So... who are you?
Man: Ah. Now that is a very good question.`,
    questions: [
      { q: 'Why was the agent late?', o: ['She lost her ticket', 'The first train was cancelled', 'She slept too long'], a: 1 },
      { q: 'What is in the envelope?', o: ['Money and a photo', 'A map', 'A key and an address'], a: 2 },
      { q: 'What is the real password?', o: ['Red apples', 'Green apples', 'Apples with honey'], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-scr-western-saloon', title: 'A Stranger in Town', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Вестерн · салун',
    emoji: '🤠',
    wiki: 'Tumbleweed',
    ru: 'В маленький городок приезжает незнакомец, и шериф хочет знать, зачем он здесь.',
    text: `Sheriff: You're new here, stranger. When did you arrive?
Stranger: This morning. I came on the old road from the south.
Sheriff: That road is dangerous. Bandits live near the river.
Stranger: I know. I met them.
Sheriff: You met them? And you're still alive?
Stranger: They were very hungry. I cooked them breakfast.
Bartender: Breakfast? For the bandits? Are you crazy?
Stranger: Maybe. But now they're my friends.
Sheriff: So why are you in our town?
Stranger: I'm going to open a restaurant. Right here, next to your saloon.
Bartender: A restaurant? Nobody here eats anything fancy.
Stranger: Everybody likes good food. Even bandits.
Sheriff: Hmm. And who is going to be your first customer?
Stranger: Look out of the window, Sheriff.
Sheriff: Oh no. The bandits! All ten of them!
Stranger: Relax. They only want pancakes.`,
    questions: [
      { q: 'Where do the bandits live?', o: ['In the saloon', 'Near the river', 'In the south'], a: 1 },
      { q: 'What is the stranger going to open?', o: ['A restaurant', 'A bank', 'A new saloon'], a: 0 },
      { q: 'What do the bandits want?', o: ['Money', 'The sheriff', 'Pancakes'], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-scr-pirate-map', title: 'Half a Map', level: 'A2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Приключения · пиратский корабль',
    emoji: '🏴‍☠️',
    wiki: 'Galleon',
    ru: 'Капитан пиратов и юнга изучают карту сокровищ, но у карты не хватает половины.',
    text: `Captain: Come here, boy. Look at this map. I won it in a card game last night.
Boy: It's beautiful, Captain. But where is the other half?
Captain: The other half? What other half?
Boy: The map is torn. Look, the island stops here.
Captain: Hmm. The old man in the tavern gave it to me like this.
Boy: Did he say anything about the treasure?
Captain: He said, "Follow the three palm trees." Then he laughed and left.
Cook: Captain, every island here has three palm trees.
Captain: Nobody asked you, Cook! Go and make dinner.
Cook: Dinner is fish. Again. We have only fish.
Boy: Captain, I'm going to look at the back of the map.
Captain: Why? The back is empty.
Boy: No, it isn't. There's a name here. "Rosa". And a bird.
Cook: Rosa? That's the name of my grandmother's ship!
Captain: Your grandmother was a pirate?
Cook: Yes. And I think she has the other half.`,
    questions: [
      { q: 'How did the Captain get the map?', o: ['He found it on an island', 'He won it in a card game', 'He bought it from the Cook'], a: 1 },
      { q: 'What did the old man say?', o: ['"Follow the three palm trees"', '"Look for the bird"', '"Ask for Rosa"'], a: 0 },
      { q: 'Who was the Cook\'s grandmother?', o: ['A cook', 'A sailor on the Captain\'s ship', 'A pirate'], a: 2 }
    ]
  }
]);
