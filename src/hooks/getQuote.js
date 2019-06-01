function getQuoteToType (quoteArr) {
  return quoteArr[getRandomNumberBetweenRange(0, quoteArr.length)];
}

function getRandomNumberBetweenRange(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = function getQuote() {
  return (hook, next) => {
    const data = hook.data;
    const app = hook.app;

    app.service("quotes")
      .find()
      .then((response) => {
        const selectedQuote = getQuoteToType(response.data);
        data.quoteData = {
          title: selectedQuote.title,
          author: selectedQuote.author,
          quote: selectedQuote.quote
        };

        return next();
      })
  };
}