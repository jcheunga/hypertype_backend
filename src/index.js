/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);

var arr = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote: "Atticus said to Jem one day, \"I'd rather you shot at tin cans in the backyard, but I know you'll go after birds. Shoot all the blue jays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird."
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    quote: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am."
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    quote: "We believe that we can change the things around us in accordance with our desires, we believe it because otherwise we can see no favourable outcome. We do not think of the outcome which generally comes to pass and is also favourable."
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    quote: "The most beautiful things in the world cannot be seen or touched, they are felt with the heart."
  },
  {
    title: "God Bless You, Mr. Rosewater",
    author: "Kurt Vonnegut",
    quote: "Hello babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here."
  },
  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    quote: "Why, sometimes I've believed as many as six impossible things before breakfast."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    quote: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me."
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    quote: "Just remember that the things you put into your head are there forever, he said. You might want to think about that. You forget some things, dont you? Yes."
  },
  {
    title: "Handle With Care",
    author: "Jodi Picoult",
    quote: "You can tell yourself that you would be willing to lose everything you have in order to get something you want. But it's a catch-22: all of those things you're willing to lose are what make you recognizable."
  },
  {
    title: "On The Road",
    author: "Jack Kerouac",
    quote: "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing."
  },
  {
    title: "Love in the Time of Cholera",
    author: "Gabriel Garcí­a Márquez",
    quote: "He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves."
  },
  {
    title: "American Psycho",
    author: "Bret Easton Ellis",
    quote: "There is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand."
  },
  {
    title: "Kafka On The Shore",
    author: "Haruki Murakami",
    quote: "Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts."
  },
  {
    title: "Different Seasons",
    author: "Stephen King",
    quote: "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them, words shrink things that seemed limitless when they were in your head to no more than living size when they're brought out."
  },
  {
    title: "The Chronology of Water",
    author: "Lidia Yuknavitch",
    quote: "I don't have any problem understanding why people flunk out of college or quit their jobs or cheat on each other or break the law or spray-paint walls."
  },
  {
    title: "The Glass Castle",
    author: "Jeannette Walls",
    quote: "I never believed in Santa Claus. None of us kids did. Mom and Dad refused to let us. They couldn't afford expensive presents and they didn't want us to think we weren't as good as other kids."
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    quote: "Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth."
  },
  {
    title: "Song of Solomon",
    author: "Toni Morrison",
    quote: "You think because he doesn't love you that you are worthless. You think that because he doesn't want you anymore that he is right, that his judgement and opinion of you are correct."
  },
  {
    title: "Slouching Towards Bethlehem",
    author: "Joan Didion",
    quote: "...I think we are well-advised to keep on nodding terms with the people we used to be, whether we find them attractive company or not."
  },
  {
    title: "White Oleander",
    author: "Janet Fitch",
    quote: "I don't let anyone touch me,\" I finally said. Why not? Why not? Because I was tired of men. Hanging in doorways, standing too close, their smell of beer or fifteen-year-old whiskey."
  },
  {
    title: "Looking for Alaska",
    author: "John Green",
    quote: "I wanted so badly to lie down next to her on the couch, to wrap my arms around her and sleep. Not fuck, like in those movies. Not even have sex."
  },
  {
    title: "Factotum",
    author: "Charles Bukowski",
    quote: "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind."
  },
  {
    title: "Richard Brautigan",
    author: "Sombrero Fallout",
    quote: "I will be very careful the next time I fall in love, she told herself. Also, she had made a promise to herself that she intended on keeping."
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    quote: "Usually we walk around constantly believing ourselves. \"I'm okay\" we say. \"I'm alright\". But sometimes the truth arrives on you and you can't get it off."
  },
  {
    title: "100 Love Sonnets",
    author: "Pablo Neruda",
    quote: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do."
  },
  {
    title: "The Invitation",
    author: "Oriah Mountain Dreamer",
    quote: "It doesn't interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart's longing."
  },
  {
    title: "The Call of Cthulhu",
    author: "H.P. Lovecraft",
    quote: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity."
  },
  {
    title: "The Guns of Avalon",
    author: "Roger Zelazny",
    quote: "In the mirrors of the many judgments, my hands are the color of blood. I sometimes fancy myself an evil which exists to oppose other evils; and on that great Day of which the prophets speak."
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    quote: "So much the worse for those who fear wine, for it is because they have bad thoughts which they are afraid the liquor will extract from their hearts..."
  }
];

// for (var i = 0; i < arr.length; i++) {
//   app.service('quotes').create({
//     title: arr[i].title,
//     quote: arr[i].quote,
//     author: arr[i].author
//   });
// }
