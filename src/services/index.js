const highscores = require('./highscores/highscores.service.js');
const multirooms = require('./multirooms/multirooms.service.js');
const rooms = require('./rooms/rooms.service.js');
const users = require('./users/users.service.js');
const quotes = require('./quotes/quotes.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(highscores);
  app.configure(multirooms);
  app.configure(rooms);
  app.configure(users);
  app.configure(quotes);
};
