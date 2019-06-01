const createService = require('feathers-mongoose');
const createModel = require('./highscores.models');
const hooks = require('./highscores.hooks');
const filters = require('./highscores.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'highscores',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/highscores', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('highscores');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
