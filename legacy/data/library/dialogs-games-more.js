window.LIBRARY = (window.LIBRARY || []).concat([
  // ===================== A1 =====================
  {
    id: 'dlg-a1-char-creator', title: 'Make Your Hero', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · редактор персонажа',
    emoji: '🧝',
    ru: 'Игрок создаёт персонажа, а голос редактора помогает ему — и немного удивляется выбору',
    text: `Editor: Hello! Let's make your hero. What is your name?
Player: My name is Tom. No, my hero is Sir Pancake.
Editor: Sir Pancake. Okay. Choose a race, please.
Player: I want an elf. Elves are tall and fast.
Editor: Good choice. Now choose your hair.
Player: Can I have blue hair? Very long blue hair.
Editor: Yes, you can. Here it is. Do you like it?
Player: I love it! Now make him very big, please.
Editor: Big hair or a big body?
Player: Both. And give him a small hat. Let's play!`,
    questions: [
      { q: "What is the hero's name?", o: ["Tom", "Sir Pancake", "Elf"], a: 1 },
      { q: "Why does the player choose an elf?", o: ["Elves are tall and fast", "Elves have blue hair", "Elves are very big"], a: 0 },
      { q: "What does the player want at the end?", o: ["A big hat", "Short hair", "A small hat"], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-auction-house', title: 'At the Auction House', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'MMO · аукцион',
    emoji: '💰',
    ru: 'Новичок впервые продаёт вещи на аукционе в MMO, а служащий объясняет правила',
    text: `Clerk: Welcome to the auction house. Can I help you?
Mira: Yes, please. I want to sell this sword.
Clerk: Let me see. It is an old iron sword.
Mira: How much is it? One thousand gold?
Clerk: No, sorry. It is ten gold.
Mira: Ten? Oh no. And this green ring?
Clerk: The green ring is very rare. Players love it.
Mira: Really? Then I want five hundred gold for it.
Clerk: Good price. Put it here and wait.
Mira: Great! And please keep my old sword. It is a gift.`,
    questions: [
      { q: "What does Mira want to sell first?", o: ["A green ring", "An old iron sword", "A gift box"], a: 1 },
      { q: "How much is the sword?", o: ["Ten gold", "Five hundred gold", "One thousand gold"], a: 0 },
      { q: "Why is the green ring expensive?", o: ["It is old", "It is a gift", "It is very rare"], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-farm-neighbour', title: 'My Neighbour Needs Eggs', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Симулятор фермы · забор у соседей',
    emoji: '🥚',
    ru: 'Соседка по ферме просит яйца для торта и предлагает обмен',
    text: `Rosa: Good morning, neighbour! Are you busy?
Leo: Hi, Rosa! No, I am not busy. What do you need?
Rosa: I want to make a cake. Can I have six eggs?
Leo: Yes, of course. My chickens are very happy today.
Rosa: Thank you! I can give you apples for them.
Leo: Apples? Great. My pig loves apples.
Rosa: Your pig? Pigs don't eat cake, right?
Leo: My pig eats everything. Please don't tell him.
Rosa: Ha! Come to my house at six. Cake for everyone!
Leo: Thank you! I can come. But not my pig.`,
    questions: [
      { q: "Why does Rosa need eggs?", o: ["For her chickens", "To make a cake", "For breakfast"], a: 1 },
      { q: "What does Rosa give Leo?", o: ["Apples", "A pig", "Six eggs"], a: 0 },
      { q: "When can Leo come to Rosa's house?", o: ["In the morning", "At six", "Tomorrow"], a: 1 }
    ]
  },
  {
    id: 'dlg-a1-lost-ring', title: 'The Lost Ring', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · квест у реки',
    emoji: '💍',
    ru: 'Рыбак потерял кольцо у реки и просит героя помочь найти его',
    text: `Fisher: Help me, please! I can't find my ring.
Hero: Your ring? Where is it?
Fisher: I don't know. I fish here every day.
Hero: What color is it?
Fisher: It is gold, with a small red stone.
Hero: Look! A big fish. It has something in its mouth.
Fisher: That fish is my friend. His name is Bob.
Hero: Your friend has your ring. Can you ask him?
Fisher: Bob, give it back, please! Oh, thank you, Bob!
Hero: Nice. Bob is a good friend. Now give me gold, please.`,
    questions: [
      { q: "What does the fisher lose?", o: ["A fish", "A gold ring", "A red stone"], a: 1 },
      { q: "Who has the ring?", o: ["The hero", "Bob the fish", "A bird"], a: 1 },
      { q: "What does the hero want at the end?", o: ["Gold", "A fish", "The ring"], a: 0 }
    ]
  },
  {
    id: 'dlg-a1-survival-food', title: 'One Fish, Three Players', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Симулятор выживания · костёр на острове',
    emoji: '🐟',
    ru: 'Трое выживших на острове делят одну рыбу у костра',
    text: `Ann: I am so hungry. Do we have food?
Ben: We have one fish. Only one.
Kate: One fish for three people? That is a small dinner.
Ben: I can cut it. Three small pieces.
Ann: Wait! I have two coconuts in my bag.
Kate: Great! Coconuts are food and water.
Ben: Okay. Fish and coconuts for everyone.
Ann: Tomorrow I can make a fishing rod.
Kate: Good. And I can find more coconuts.
Ben: And I can sleep. Good night, team!`,
    questions: [
      { q: "How much fish do they have?", o: ["Three fish", "One fish", "No fish"], a: 1 },
      { q: "What does Ann have in her bag?", o: ["Two coconuts", "A fishing rod", "Water"], a: 0 },
      { q: "What can Ann do tomorrow?", o: ["Find coconuts", "Sleep", "Make a fishing rod"], a: 2 }
    ]
  },
  {
    id: 'dlg-a1-guild-invite', title: 'Join Our Guild!', level: 'A1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'MMO · площадь стартового города',
    emoji: '🛡️',
    ru: 'Глава маленькой гильдии зовёт новичка к себе в команду',
    text: `Kai: Hi! Do you have a guild?
Zoe: No, I don't. I am new here.
Kai: Do you want to join my guild? We are the Night Owls.
Zoe: Night Owls? Do you play at night?
Kai: Yes, we play every night. We fight monsters and talk a lot.
Zoe: How many players are in the guild?
Kai: Three. Me, my brother and our cat.
Zoe: Your cat? Can a cat play?
Kai: No, but he sits on the keyboard. Can you come tonight?
Zoe: Yes, I can. See you tonight, Night Owls!`,
    questions: [
      { q: "What is the name of the guild?", o: ["The Night Owls", "The Cats", "The Monsters"], a: 0 },
      { q: "When does the guild play?", o: ["In the morning", "Every night", "On Sundays"], a: 1 },
      { q: "What does the cat do?", o: ["It fights monsters", "It sits on the keyboard", "It talks a lot"], a: 1 }
    ]
  },

  // ===================== A2 =====================
  {
    id: 'dlg-a2-raid-voice', title: 'Five Minutes Before the Raid', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'MMO · голосовой чат перед рейдом',
    emoji: '🎙️',
    ru: 'Команда готовится к рейду в голосовом чате, но один игрок забыл кое-что важное',
    text: `Lena: Okay, everyone, the raid starts in five minutes. Can you all hear me?
Max: Yes, loud and clear.
Olga: I can hear you. But somebody's dog is barking.
Pete: Sorry, that's my dog. He wants a walk. I'm going to close the door.
Lena: Thanks. Now, did everyone repair their armor?
Max: Yes, I repaired it this morning. It cost me all my gold.
Olga: I bought ten health potions yesterday. I'm ready.
Lena: Great. Pete, you are our healer. Are you ready?
Pete: Um... Lena, I have a small problem.
Lena: What problem?
Pete: I changed my class last night. I'm a warrior now.
Max: You're going to heal us with a big axe?
Pete: No, but I'm going to hit the boss really hard.
Lena: Okay, new plan. Everyone, buy more potions. Now!`,
    questions: [
      { q: "Why is the dog barking?", o: ["It's hungry", "It wants a walk", "It doesn't like the raid"], a: 1 },
      { q: "What did Olga buy yesterday?", o: ["New armor", "Ten health potions", "A big axe"], a: 1 },
      { q: "What is Pete's problem?", o: ["He changed his class and can't heal now", "He has no internet", "He forgot his password"], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-rally-codriver', title: 'Left Three, Don\'t Cut', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Раллийный симулятор · в машине со штурманом',
    emoji: '🏎️',
    ru: 'Штурман диктует повороты гонщику на лесной трассе, а тот не всегда слушает',
    text: `Co-driver: Okay, we start in three, two, one... Go!
Driver: Here we go! This car is so fast!
Co-driver: Right four, then a long straight. Keep it fast.
Driver: Easy. What's next?
Co-driver: Left three over a bridge. Don't cut the corner!
Driver: Oops. I cut it a little. We hit a small tree.
Co-driver: A small tree? It was a big tree! We lost a mirror.
Driver: We don't need mirrors. We're going to win!
Co-driver: Careful! Water on the road. Slow down.
Driver: I didn't hear you. What did you say?
Co-driver: I said slow down! Too late. Now we're wet.
Driver: But we're still first, right?
Co-driver: We're second. And next time, please listen to me.`,
    questions: [
      { q: "What did the car hit?", o: ["A bridge", "A tree", "Another car"], a: 1 },
      { q: "What did they lose?", o: ["A wheel", "A mirror", "The map"], a: 1 },
      { q: "What is their position at the end?", o: ["First", "Second", "Last"], a: 1 }
    ]
  },
  {
    id: 'dlg-a2-detective-baker', title: 'Who Took the Pie?', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Детективный квест · пекарня',
    emoji: '🥧',
    ru: 'Юный детектив расспрашивает пекаря и его помощника о пропавшем пироге',
    text: `Detective: Good morning. I heard somebody took a pie from your shop.
Baker: Yes! A big cherry pie. I made it for the king.
Detective: When did you see it last?
Baker: At eight o'clock. I put it by the window. Then I went to get milk.
Detective: Who was in the shop?
Baker: Only my helper, Finn. Finn, come here!
Finn: Yes, sir? I didn't do anything. I was outside with the horses.
Detective: Really? Why is your shirt red, Finn?
Finn: Er... that's paint. I painted a fence yesterday.
Detective: And why is there a cherry in your hair?
Finn: Okay, okay. I ate one small piece. Only one!
Baker: One piece? The whole pie is gone!
Detective: Then somebody else took the rest. I'm going to check the horses.`,
    questions: [
      { q: "Who did the baker make the pie for?", o: ["For Finn", "For the king", "For the detective"], a: 1 },
      { q: "What did the detective see in Finn's hair?", o: ["Paint", "Milk", "A cherry"], a: 2 },
      { q: "What is the detective going to do next?", o: ["Check the horses", "Arrest Finn", "Buy a new pie"], a: 0 }
    ]
  },
  {
    id: 'dlg-a2-support-call', title: 'Where Is My Dragon?', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Техподдержка игры · звонок игрока',
    emoji: '📞',
    ru: 'Игрок звонит в поддержку, потому что его ездовой дракон пропал после обновления',
    text: `Support: Hello, this is game support. My name is Jess. How can I help you?
Player: Hi. My dragon is gone! I bought it last week.
Support: I'm sorry to hear that. When did you last see it?
Player: Yesterday evening. Then the game updated, and now it isn't there.
Support: Can you tell me your player name, please?
Player: It's DragonMaster99.
Support: Thank you. Let me check... Yes, I can see your dragon.
Player: Really? Where is it?
Support: It's in the stable in the old town. The update moved all pets there.
Player: Oh! I didn't go to the old town. I stayed at home and cried.
Support: Don't worry. It happened to many players today.
Player: Thank you so much! I'm going to fly there now.
Support: Have a nice flight! And give your dragon a snack.`,
    questions: [
      { q: "When did the player buy the dragon?", o: ["Yesterday", "Last week", "Last year"], a: 1 },
      { q: "Where is the dragon now?", o: ["In the stable in the old town", "In the player's home", "It was deleted"], a: 0 },
      { q: "Why did the dragon move?", o: ["The player sold it", "The update moved all pets", "It flew away"], a: 1 }
    ]
  },
  {
    id: 'dlg-a2-tennis-coach', title: 'Coach Wants a Better Serve', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Спортивный симулятор · теннисный корт',
    emoji: '🎾',
    ru: 'Тренер в теннисном симуляторе разбирает прошлый матч и готовит игрока к турниру',
    text: `Coach: Good morning, Alex. Let's talk about your last match.
Alex: I know, I know. I lost.
Coach: You lost, but you played well in the second set. What happened in the first set?
Alex: I was nervous. I missed a lot of easy balls.
Coach: Yes. And your serve was very slow.
Alex: So what are we going to do today?
Coach: We're going to practice your serve. One hundred serves.
Alex: One hundred? My arm is going to hurt.
Coach: Your arm is going to be strong. Throw the ball higher.
Alex: Like this? Oh! It went over the fence.
Coach: Not that high. Try again.
Alex: That one was good, right?
Coach: Very good. Ninety-nine more. The tournament is on Saturday.`,
    questions: [
      { q: "Why did Alex miss easy balls in the first set?", o: ["He was nervous", "He was tired", "His racket was broken"], a: 0 },
      { q: "What are they going to practice?", o: ["Running", "The serve", "The second set"], a: 1 },
      { q: "When is the tournament?", o: ["Today", "On Sunday", "On Saturday"], a: 2 }
    ]
  },
  {
    id: 'dlg-a2-kitchen-rush', title: 'Kitchen Chaos', level: 'A2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Кооп-симулятор кухни · ресторан',
    emoji: '🍳',
    ru: 'Двое игроков в кооперативном симуляторе кухни пытаются успеть выполнить заказы',
    text: `Mia: Three orders! Two burgers and one soup!
Jack: I'm going to cut the tomatoes. You cook the meat.
Mia: Okay. Where is the meat? I can't find it.
Jack: It's in the fridge. The fridge is on the left.
Mia: Got it. The pan is hot. Meat is cooking.
Jack: Tomatoes are ready. Where are the plates?
Mia: I washed them five minutes ago. They're next to the sink.
Jack: Oh no! Something is burning! Is that your meat?
Mia: No, that's the soup! Who started the soup?
Jack: Me. I forgot about it. Sorry!
Mia: Fire! Get the fire extinguisher!
Jack: Done. The fire is out. But the soup is black.
Mia: Okay, two burgers and no soup. One star is better than zero.`,
    questions: [
      { q: "Where is the meat?", o: ["Next to the sink", "In the fridge", "On the plates"], a: 1 },
      { q: "What burned?", o: ["The meat", "The tomatoes", "The soup"], a: 2 },
      { q: "Who forgot about the soup?", o: ["Jack", "Mia", "The customer"], a: 0 }
    ]
  },

  // ===================== B1 =====================
  {
    id: 'dlg-b1-speedrun-stream', title: 'Speedrun, Chat Is Watching', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Стрим · спидран с чатом',
    emoji: '⏱️',
    ru: 'Стример пытается побить свой рекорд в спидране, а чат комментирует каждую ошибку',
    text: `Rico: Okay, chat, this is attempt number forty-two. If I finish under twenty minutes, it's a new record.
Chat (Pixel_Pat): You've said that forty-one times already!
Rico: I know, Pat. But today I feel lucky. Timer's on. Go!
Chat (Mossy): Do the wall skip! Do the wall skip!
Rico: I'm doing it, I'm doing it... and I'm through! Have you ever seen a cleaner wall skip?
Chat (Pixel_Pat): Yes. Yesterday. From a different streamer.
Rico: Rude. Okay, now the lava level. If I jump too early, I die and start over.
Chat (NoobKing): what is a wall skip?? I've just joined
Rico: Welcome, NoobKing! It's a trick. You run into a wall at a weird angle and the game lets you through.
Chat (Mossy): FOCUS. The lava!
Rico: I'm focused. I'm totally focused. I've practised this jump a hundred... no, no, no!
Chat (Pixel_Pat): F in the chat.
Rico: Okay, I'm still alive, I just lost six seconds. We can make that up on the boss.
Chat (Mossy): You're two seconds ahead of your record. Don't give up!
Rico: Boss is down! Final door... and... nineteen minutes fifty-eight seconds!
Chat (NoobKing): is that good?
Rico: Good? That's a new world record, NoobKing! I'm never going to stream without you again.`,
    questions: [
      { q: "How many times had Rico tried before this attempt?", o: ["Twenty times", "Forty-one times", "Forty-two times"], a: 1 },
      { q: "What is a wall skip, according to Rico?", o: ["A trick to go through a wall", "A jump over lava", "A way to skip the boss"], a: 0 },
      { q: "What was the final time?", o: ["Twenty minutes exactly", "Nineteen minutes fifty-eight seconds", "Six seconds slower than the record"], a: 1 }
    ]
  },
  {
    id: 'dlg-b1-mirror-puzzle', title: 'Light Through the Mirrors', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Кооп-головоломка · башня с зеркалами',
    emoji: '🪞',
    ru: 'Два игрока в разных комнатах башни поворачивают зеркала, чтобы луч света открыл дверь',
    text: `Ivy: Can you hear me? I'm in a room with three mirrors and a big crystal.
Omar: Loud and clear. I'm on the floor below. There's a beam of light coming through a hole in my ceiling.
Ivy: Wait, I think the light comes from my room. If I turn this mirror, does anything change for you?
Omar: Yes! The light has moved to the left wall. Turn it back a bit.
Ivy: Like this? Now it should hit the second mirror.
Omar: It's on the second mirror, but it's bouncing into a painting. The painting is on fire now.
Ivy: Oops. Is that bad?
Omar: Well, it's not good. Hang on, I've found a lever behind the painting. Maybe that's part of the puzzle.
Ivy: Pull it and see what happens.
Omar: I've pulled it. Something clicked. Did anything open on your side?
Ivy: Yes, a small window. Sunlight is coming in. Now I have two beams.
Omar: Okay, if you point both beams at the crystal, maybe the door will open.
Ivy: I'm trying, but every time I move one mirror, the other beam goes off.
Omar: Try the third mirror. You haven't touched that one yet.
Ivy: You're right. Turning it... both beams are on the crystal!
Omar: The door down here has just opened! There's a chest inside.
Ivy: What's in it?
Omar: A note. It says: "Well done. Now do it again in the dark." Great.`,
    questions: [
      { q: "What happened when the light hit the painting?", o: ["The door opened", "The painting caught fire", "A window broke"], a: 1 },
      { q: "What did Omar find behind the painting?", o: ["A lever", "A chest", "A crystal"], a: 0 },
      { q: "What does the note in the chest say?", o: ["That the game is over", "That they have to do it again in the dark", "Where the treasure is"], a: 1 }
    ]
  },
  {
    id: 'dlg-b1-heist-plan', title: 'The Museum Job', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Стелс-экшен · планирование ограбления',
    emoji: '🗝️',
    ru: 'Команда в стелс-игре обсуждает план кражи картины из музея — и новичок задаёт неудобные вопросы',
    text: `Vera: Right, gather round. Tonight we take the painting from the city museum.
Nick: Which one? The one with the sad horse?
Vera: The one with the golden frame. Now listen. The guards change shift at midnight.
Sid: I've watched them for three nights. They always stop for coffee on the second floor.
Vera: Good. Sid, you turn off the cameras. Nick, you pick the lock on the back door.
Nick: I've never picked a lock in my life. Can't we just use the front door?
Vera: The front door has an alarm, Nick.
Nick: What if I just knock and say I'm a delivery guy?
Sid: At midnight? With a bag that says "tools"?
Nick: Fair point. Okay, I'll figure out the lock.
Vera: If anything goes wrong, we meet at the old bridge. Nobody waits for anybody.
Sid: What if the painting is too big for the bag?
Vera: It isn't. I've measured it. Sixty by eighty centimetres.
Nick: Can I ask one more question?
Vera: Quickly.
Nick: Why are we stealing a painting of a sad horse in a golden frame?
Vera: Because the client paid a lot, and because the horse is sad. We're going to give it a better home.`,
    questions: [
      { q: "When do the guards change shift?", o: ["At midnight", "At the old bridge", "Every three nights"], a: 0 },
      { q: "What is Nick's job in the plan?", o: ["To turn off the cameras", "To pick the lock on the back door", "To bring coffee to the guards"], a: 1 },
      { q: "Where will they meet if something goes wrong?", o: ["At the museum", "At the front door", "At the old bridge"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-city-advisor', title: 'The Mayor Has Questions', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Градостроительный симулятор · кабинет мэра',
    emoji: '🏙️',
    ru: 'Советник докладывает мэру о проблемах города, которые мэр сам и создал',
    text: `Advisor: Good morning, Mayor. I'm afraid I have some bad news.
Mayor: Again? What's happened this time?
Advisor: The citizens are unhappy. Traffic has doubled since you built the new stadium.
Mayor: But everyone loves football!
Advisor: They love football. They don't love sitting in traffic for two hours to get there.
Mayor: Fine. If we build a metro line to the stadium, will that help?
Advisor: It will, but it's expensive. We've already spent most of the budget on the giant statue.
Mayor: The statue of me? That was an investment in culture.
Advisor: It was an investment in your ego, sir. Also, the statue is blocking the main road.
Mayor: Okay, okay. What else?
Advisor: The factory has polluted the river, so the fishermen have moved to another city.
Mayor: Can't we just clean it up?
Advisor: We can, if we close the factory for a month. But then people will lose their jobs.
Mayor: Every option is bad! Why did I take this job?
Advisor: You pressed "New Game", sir.
Mayor: Right. Let's move the statue, build the metro and put filters on the factory.
Advisor: Excellent choice. And maybe no more statues for a while?
Mayor: Just one small one. In the park. Of my cat.`,
    questions: [
      { q: "Why has traffic doubled?", o: ["Because of the new stadium", "Because the factory closed", "Because of the metro"], a: 0 },
      { q: "Why have the fishermen left?", o: ["The statue blocked the road", "The factory polluted the river", "They lost their jobs"], a: 1 },
      { q: "What does the mayor still want to build at the end?", o: ["A second stadium", "A small statue of his cat", "A new factory"], a: 1 }
    ]
  },
  {
    id: 'dlg-b1-fishing-contest', title: 'The Legend of the Lake', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Уютный симулятор · рыболовный турнир',
    emoji: '🎣',
    ru: 'Двое игроков соревнуются на рыболовном турнире и слышат легенду о гигантской рыбе',
    text: `Old Tom: Welcome to the Summer Fishing Contest! You have one hour. The biggest fish wins.
June: One hour? I've been fishing here all week and caught only boots.
Rafe: Boots? I've caught a bicycle. Twice.
Old Tom: Then you're ready. And remember the legend: a giant fish lives in the middle of the lake.
June: Has anybody ever caught it?
Old Tom: Nobody. Many have tried. It broke my rod thirty years ago.
Rafe: Okay, I'm going to row out to the middle. Who's coming with me?
June: Not me. I'll stay near the shore. If you fall in, I'll call for help.
Rafe: Thanks for the support. Hey... something's pulling my line!
June: Don't pull too hard! Let it swim a bit, then reel it in slowly.
Rafe: It's huge! It's pulling the whole boat!
Old Tom: That's him! Hold on, lad!
Rafe: I can see it! It's... wearing a hat?
June: A fish wearing a hat? Are you sure you haven't fallen asleep?
Rafe: It's my hat! I lost it yesterday! And the fish has just swum away with it.
Old Tom: So the legend lives on. Congratulations, June. Your boot is the biggest catch of the day.`,
    questions: [
      { q: "What has Rafe caught twice?", o: ["Boots", "A bicycle", "A hat"], a: 1 },
      { q: "What happened to Old Tom thirty years ago?", o: ["He won the contest", "The giant fish broke his rod", "He fell into the lake"], a: 1 },
      { q: "Who wins the contest?", o: ["Rafe", "Old Tom", "June"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-skill-trainer', title: 'Reset My Skills, Please', level: 'B1', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'RPG · учитель навыков в гильдии магов',
    emoji: '📜',
    ru: 'Герой просит учителя сбросить навыки, потому что всё вложил не туда',
    text: `Master Elwin: Ah, a young adventurer. What brings you to the Mage Guild?
Hero: I need to reset my skills. I think I've made a terrible mistake.
Master Elwin: Tell me. What did you choose?
Hero: I've put all my points into cooking. I thought it was a fire spell.
Master Elwin: "Flaming Pancakes" is a cooking skill, yes. The flames are just for decoration.
Hero: I noticed. I threw one at a troll yesterday. He ate it and said thank you.
Master Elwin: At least he was polite. Resetting your skills costs five hundred gold.
Hero: Five hundred? I've only got two hundred. Can I pay you later?
Master Elwin: I don't do credit. But if you bring me three moon flowers, I'll do it for free.
Hero: Where do moon flowers grow?
Master Elwin: In the swamp, and they only open at night. Watch out for the frogs.
Hero: Frogs? Frogs aren't dangerous.
Master Elwin: These ones are the size of a horse.
Hero: Right. And if I can't find three flowers?
Master Elwin: Then you can always open a restaurant. You clearly have talent.
Hero: Very funny. I'll be back before sunrise.
Master Elwin: Take some pancakes. For the frogs.`,
    questions: [
      { q: "Why does the hero want to reset his skills?", o: ["He put all points into cooking by mistake", "He wants to become a troll", "He has too much gold"], a: 0 },
      { q: "How much gold does the hero have?", o: ["Five hundred", "Two hundred", "None"], a: 1 },
      { q: "What must the hero bring to get the reset for free?", o: ["Three frogs", "Three moon flowers", "Three pancakes"], a: 1 }
    ]
  },

  // ===================== B2 =====================
  {
    id: 'dlg-b2-esports-cast', title: 'Live from the Grand Final', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Киберспорт · комментаторская будка финала',
    emoji: '📺',
    ru: 'Двое комментаторов ведут решающую игру финала — с драмой, шутками и неожиданной развязкой',
    text: `Caster Jay: Welcome back, everyone, to game five of the grand final! It's all tied up, two-two, and this is winner takes all.
Caster Nia: You could cut the tension with a knife, Jay. Both teams look like they haven't slept in a week.
Caster Jay: Let's be honest, they probably haven't. Team Aurora are on the left, Iron Wolves on the right.
Caster Nia: And Aurora have picked a really unusual lineup. No tank, three assassins. Bold, to say the least.
Caster Jay: Either it's genius or it's a disaster. There's no in-between with this team.
Caster Nia: First blood already! Aurora's mid laner has caught the Wolves napping near the river.
Caster Jay: That was textbook. He waited in the bush for, what, thirty seconds? The patience on this guy!
Caster Nia: But the Wolves aren't panicking. They're playing the long game, farming safely and waiting for their late-game power spike.
Caster Jay: Smart. If this drags past twenty-five minutes, Aurora are in serious trouble. Assassins fall off hard.
Caster Nia: Twenty-two minutes on the clock and... oh, Aurora are going for the dragon. That's a massive gamble.
Caster Jay: They've got it! But the Wolves have been waiting for this. It's a trap!
Caster Nia: Team fight in the pit! Three down for Aurora... no, wait, their support is still alive with a sliver of health!
Caster Jay: She's running, she's juking, she's... through the wall! I can't believe what I'm seeing!
Caster Nia: That's the play of the tournament, hands down. And the Wolves have overextended to chase her.
Caster Jay: Aurora respawn, they collapse on the Wolves' base, and the Wolves are completely out of position!
Caster Nia: The core is going down! It's over! Team Aurora are your champions!
Caster Jay: Unbelievable. A three-assassin comp that shouldn't work, a support who refused to die, and the trophy is theirs.
Caster Nia: I've been casting for ten years, Jay, and I've lost my voice for the first time.
Caster Jay: You and me both. Folks, stick around for the trophy ceremony, and someone please get Nia a cup of tea.`,
    questions: [
      { q: "Why is Aurora's lineup unusual?", o: ["It has no tank and three assassins", "It has three tanks", "It has no support"], a: 0 },
      { q: "Why do the Wolves want the game to go past twenty-five minutes?", o: ["They are tired", "Their team gets stronger later in the game", "The dragon appears then"], a: 1 },
      { q: "What was the key moment of the match?", o: ["The Wolves killed the dragon", "Aurora's support escaped and the Wolves chased her too far", "Aurora's mid laner left the game"], a: 1 }
    ]
  },
  {
    id: 'dlg-b2-ban-appeal', title: 'I Swear It Was My Cat', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Техподдержка игры · апелляция по бану',
    emoji: '🚫',
    ru: 'Игрок звонит в поддержку, чтобы оспорить бан за «подозрительную активность»',
    text: `Agent: Thanks for calling player support, this is Dana. How can I help?
Marcus: Hi, Dana. I've been banned for three days and I honestly have no idea why.
Agent: I'm sorry about that. Let me pull up your account. Could I have your username?
Marcus: It's QuietStorm. Well, I'm not very quiet right now.
Agent: Okay, I've got it. The system flagged you for suspicious activity. Apparently you sold four hundred rare items in under a minute.
Marcus: Four hundred? That's insane. I don't even own four hundred items.
Agent: According to the logs, you did at 3 a.m. last Tuesday.
Marcus: At 3 a.m.? I was fast asleep. Hang on... did I leave my laptop open?
Agent: Is there anyone else who could've used it?
Marcus: My flatmate's cat loves sleeping on my keyboard. But she's a cat, not a hacker.
Agent: I've heard a lot of excuses in this job, but that's a new one.
Marcus: I know how it sounds. Look, I'm not trying to pull a fast one here.
Agent: To be fair, the pattern does look odd. All the items were sold for one gold each to the same buyer.
Marcus: One gold each? So somebody got my stuff for next to nothing. That sounds like someone hacked me, not like I'm cheating.
Agent: That's a fair point. Have you changed your password recently?
Marcus: Not in about... five years. I know, I know.
Agent: Okay, here's what I'll do. I'll escalate this to the security team, lift the ban for now, and freeze the buyer's account while they look into it.
Marcus: Seriously? That's brilliant. Will I get my items back?
Agent: If they confirm it was a hack, yes. In the meantime, please change your password and turn on two-factor authentication.
Marcus: Doing it right now. And I'm moving the cat.
Agent: Probably wise. Anything else I can help with?
Marcus: No, you've been a lifesaver. Thanks, Dana.`,
    questions: [
      { q: "Why was Marcus banned?", o: ["For using bad language in chat", "For selling hundreds of rare items very quickly", "For playing at 3 a.m."], a: 1 },
      { q: "What makes the agent think Marcus might have been hacked?", o: ["All items went to one buyer for one gold each", "The cat was seen on camera", "Marcus changed his password"], a: 0 },
      { q: "What will the agent do?", o: ["Keep the ban and close the case", "Lift the ban and pass the case to the security team", "Give Marcus new items immediately"], a: 1 }
    ]
  },
  {
    id: 'dlg-b2-last-rations', title: 'Four Cans, Five Survivors', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Симулятор выживания · бункер',
    emoji: '🥫',
    ru: 'Выжившие в бункере спорят, как делить последние консервы и кто пойдёт за припасами',
    text: `Hana: Right, let's not beat around the bush. We've got four cans of beans and five people.
Grey: And a jar of pickles. Nobody's touched it for a reason.
Hana: The radio says the storm's going to last another three days. We need a plan.
Dmitri: Simple. Whoever went out last time gets a double share. That's me, by the way.
Lou: Nice try. You went out for twenty minutes and came back with a garden gnome.
Dmitri: It's a morale gnome. Look at his little face.
Hana: Focus, people. If we split everything evenly, nobody starves, but nobody's got energy to go scavenging.
Grey: So what, we pick one person, feed them properly, and send them out?
Lou: That's actually not a bad shout. The old pharmacy's two blocks away. It might have supplies.
Priya: Might. Or it might have been cleaned out weeks ago. I'm not keen on risking someone for a maybe.
Hana: Fair enough, but sitting here won't magic up more beans either.
Dmitri: I'll go. I know the route, and I've got the fastest shoes.
Lou: You've also got the worst sense of direction. You got lost in the bunker last night.
Dmitri: That corridor has two identical doors! Anyone could've mixed them up.
Priya: Fine. Dmitri goes, but Lou goes with him. Two people, one can between them now, the rest stays here.
Grey: And if they're not back by sunset?
Hana: Then we assume the worst, lock the door and ration the pickles.
Grey: I'd honestly rather go outside.
Lou: Deal. Dmitri, leave the gnome.
Dmitri: Absolutely not. He's our lucky charm. We're in this together, gnome and all.`,
    questions: [
      { q: "What did Dmitri bring back last time?", o: ["Four cans of beans", "A garden gnome", "Medicine from the pharmacy"], a: 1 },
      { q: "Why is Priya unsure about going to the pharmacy?", o: ["It is too far away", "It may have been emptied already", "The storm is over"], a: 1 },
      { q: "What is the final plan?", o: ["Dmitri goes alone with all the food", "Nobody goes out until the storm ends", "Dmitri and Lou go together and share one can"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-manor-suspects', title: 'Three Suspects and a Clock', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Детективный квест · допрос в старинном поместье',
    emoji: '🕰️',
    ru: 'Сыщица по очереди расспрашивает дворецкого, садовника и племянницу о пропаже фамильного бриллианта',
    text: `Inspector Crane: Thank you all for staying. As you know, the Blackwood diamond disappeared from the study last night.
Butler: A dreadful business, Inspector. I've served this family for thirty years and nothing like this has ever happened.
Inspector Crane: Then you'll know the house well. Where were you between ten and eleven?
Butler: Polishing the silver in the pantry, as I do every Thursday. The cook can vouch for me.
Inspector Crane: The cook left at nine. Let's move on. Mr. Pike, you're the gardener, correct?
Gardener: That's right. And before you ask, I was in the greenhouse. My orchids don't water themselves.
Inspector Crane: At night? In the rain?
Gardener: Orchids are sensitive, Inspector. Not that anyone around here appreciates it.
Inspector Crane: Interesting. There are muddy footprints under the study window. Your size, I'd guess.
Gardener: Half the staff wear the same boots. That proves nothing and you know it.
Inspector Crane: Fair enough. Miss Blackwood, you inherit the house one day. Why steal from yourself?
Niece: Exactly my point. I was in my room reading. I didn't hear a thing.
Inspector Crane: Odd. The grandfather clock in the hallway chimed eleven very loudly. Everyone else heard it.
Niece: I... wear earplugs. The clock is unbearable.
Inspector Crane: Yet you knew it chimed at eleven, not ten. I never said which one I meant.
Niece: That's a wild guess. You're clutching at straws, Inspector.
Inspector Crane: Maybe. But the clock stopped at eleven-oh-five, and someone hid something inside it. Butler, would you open it, please?
Butler: Certainly... Good heavens. It's the diamond, wrapped in a lady's glove.
Gardener: Well, don't look at me. I've never owned a glove in my life. Look at these hands.
Niece: Fine! The family was going to sell it. I just wanted to keep it in the house.
Inspector Crane: Sentimental, perhaps. But hiding it in a clock was a little too clever for your own good.`,
    questions: [
      { q: "What was the butler doing between ten and eleven, according to him?", o: ["Watering orchids", "Polishing the silver", "Reading in his room"], a: 1 },
      { q: "How does the inspector catch the niece out?", o: ["She knew the clock chimed at eleven although she said she heard nothing", "Her footprints were under the window", "The cook saw her in the study"], a: 0 },
      { q: "Why did the niece hide the diamond?", o: ["She wanted to sell it", "She wanted to blame the gardener", "She didn't want the family to sell it"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-guild-poach', title: 'An Offer You Can Refuse', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'MMO · вербовка в топ-гильдию',
    emoji: '🤝',
    ru: 'Офицер топовой гильдии пытается переманить сильного хилера из маленькой дружной гильдии',
    text: `Rook: Hey, got a minute? I've been watching your healing numbers. They're off the charts.
Wren: Thanks, I guess. Who's asking?
Rook: Rook, recruitment officer for Crimson Vanguard. We're ranked third on the server.
Wren: I know who you are. You lot wiped out our raid last month for fun.
Rook: Water under the bridge. Business is business. We've got a spot opening up for a main healer.
Wren: I've already got a guild. Small, but we get on really well.
Rook: With respect, your guild's been stuck on the second boss for six weeks. You're carrying them.
Wren: That's a bit harsh. We're getting there. Slowly, but we're getting there.
Rook: Slowly's the word. With us, you'd have first pick on legendary loot and a guaranteed raid slot.
Wren: What's the catch? There's always a catch.
Rook: Four raids a week, strict attendance, and you'd need to sit through a trial period.
Wren: Four nights a week? I've got a life, you know. Well, sort of.
Rook: Nobody's twisting your arm. But opportunities like this don't come around often.
Wren: And what happens if I mess up during the trial?
Rook: We'd part ways, no hard feelings. We're competitive, not cruel.
Wren: That's reassuring. And would I be allowed to crack jokes in voice chat?
Rook: During boss fights? Absolutely not. Our leader takes it very seriously.
Wren: Then I think I'll pass. My guild laughs at my jokes, even the terrible ones.
Rook: Your call. But the offer stands for a week if you change your mind.
Wren: Appreciated. And hey, if you ever get bored of being serious, we're recruiting.`,
    questions: [
      { q: "Why does Rook want Wren in his guild?", o: ["Wren is a very good healer", "Wren is a strong tank", "Wren knows the second boss well"], a: 0 },
      { q: "What is the 'catch' in Rook's offer?", o: ["Wren has to pay gold", "Four raids a week, strict attendance and a trial period", "Wren has to leave the server"], a: 1 },
      { q: "Why does Wren finally refuse?", o: ["The loot is not good enough", "Rook's guild is too weak", "She values her friendly guild and freedom to joke"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-boss-bargain', title: 'Let\'s Talk Terms, Dark Lord', level: 'B2', cat: 'Диалоги из игр', kind: 'dialogue',
    about: 'Экшен-RPG · переговоры с боссом в его замке',
    emoji: '👑',
    ru: 'Вместо битвы героиня решает договориться с тёмным властелином — и находит его слабое место',
    text: `Lord Malgrin: So, you've finally made it to my throne room. I must admit, I expected someone taller.
Asha: And I expected fewer candles. Seriously, how do you pay for all of these?
Lord Malgrin: Silence! For a thousand years I have ruled these lands. Kings have fallen before me. Heroes have...
Asha: Crumbled to dust, yes, I read the sign at the entrance. Can we skip to the part where we negotiate?
Lord Malgrin: Negotiate? Heroes don't negotiate. They charge at me screaming and die.
Asha: Yeah, I'm not really a screaming type. Let's be practical. What do you actually want?
Lord Malgrin: What I want is total domination of the kingdom, obviously.
Asha: Right, but day to day. What's bugging you? You look like you haven't had a day off in centuries.
Lord Malgrin: ...The minions are useless. Half of them are on strike, and the other half keep falling into the lava.
Asha: So your real problem is staffing, not the kingdom.
Lord Malgrin: I suppose, if you put it that way. Running an evil empire is exhausting. Nobody tells you that.
Asha: Here's my offer. You give back the stolen crown, and I'll send you a guy from the village who's brilliant at organising people.
Lord Malgrin: And why would a villager work for the Dark Lord?
Asha: Because he runs the bakery and he's been dying to get out of it. Also, you'd pay him. Pay being the key word.
Lord Malgrin: Pay the minions? That's unheard of.
Asha: Which is exactly why they're on strike. Think of it as an investment in your evil workforce.
Lord Malgrin: Hmm. And if I refuse?
Asha: Then we fight, you probably lose, and you still have no staff. Lose-lose.
Lord Malgrin: You drive a hard bargain, little hero. Very well. Take the crown. But I'm keeping the candles.
Asha: Wouldn't dream of taking them. Pleasure doing business, Your Darkness.
Lord Malgrin: Wait. Does this baker do cinnamon rolls?`,
    questions: [
      { q: "What is Lord Malgrin's real problem, according to Asha?", o: ["He has no army", "He has problems with his staff", "He has lost his crown"], a: 1 },
      { q: "What does Asha offer him?", o: ["A skilled organiser from the village", "Gold from the king", "A thousand candles"], a: 0 },
      { q: "Why are the minions on strike?", o: ["There is too much lava", "They don't get paid", "They want more candles"], a: 1 }
    ]
  }
]);
