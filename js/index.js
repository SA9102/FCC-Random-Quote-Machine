const QUOTES = [
  {
    id: 0,
    quote: "A kind word is a form of charity.",
    author: "Prophet Muhammad (ﷺ)",
  },
  {
    id: 1,
    quote:
      "Be kind, for whenever kindness becomes part of something, it beautifies it. Whenever it is taken from something, it leaves it tarnished.",
    author: "Prophet Muhammad (ﷺ)",
  },
  {
    id: 2,
    quote: "When you see a person who has been given more than you in money and beauty, look to those who have been given less.",
    author: "Prophet Muhammad (ﷺ)",
  },
  {
    id: 3,
    quote: "Little by little, one travels far.",
    author: "J. R. R. Tolkien",
  },
  {
    id: 4,
    quote: "If you only have a hammer, you tend to see every problem as a nail.",
    author: "Abraham Maslow",
  },
  {
    id: 5,
    quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton",
  },
  {
    id: 6,
    quote: "Few things in the world are more powerful than a positive push. A smile. A world of optimism and hope. A 'you can do it' when things are tough.",
    author: "Richard M. DeVos",
  },
  {
    id: 7,
    quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
  },
  {
    id: 8,
    quote: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    id: 9,
    quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
];

const getRandomInt = (initialIndex) => {
    let max = QUOTES.length
    let index = Math.floor(Math.random() * max);
    while (index === initialIndex) {
        index = Math.floor(Math.random() * max);
    }
    console.log(`INITIAL INDEX: ${initialIndex}`)
    console.log(`NEW INDEX: ${index}`)
    
    return index;
}

const chooseQuote = (initialIndex) => {
    const quoteIndex = getRandomInt(initialIndex)
    nextQuoteIndex = quoteIndex;
    const quote = QUOTES[quoteIndex].quote;
    const author = QUOTES[quoteIndex].author;
    return [quote, author]
}

const showNextQuote = (initialIndex) => {
    const [quote, author] = chooseQuote(initialIndex)
    $('#text').text(`"${quote}"`)
    $('#author').text(author)

    $('#text').css({
        opacity: 0,
        bottom: '2rem'
    })
    $('#author').css({
        opacity: 0,
        bottom: '-2rem'
    })
    $('#text').animate({
        bottom: '0',
        opacity: 1
    })
    $('#author').animate({
        bottom: '0',
        opacity: 1
    })
}

// When the 'new-quote' button is pressed
$("#new-quote").click(() => {
    // Make the quote text rise up and the author text go down, simultaneously.
    // Have both fade out while moving.
    $('#text').animate({
        bottom: '2rem',
        opacity: 0}, "slow")

    $('#author').animate({
        bottom: '-2rem',
        opacity: 0}, "slow", () => showNextQuote(nextQuoteIndex))
});

var nextQuoteIndex;
showNextQuote()