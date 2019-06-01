const createService = require('feathers-mongoose');
const createModel = require('./quotes.models');
const hooks = require('./quotes.hooks');
const filters = require('./quotes.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'quotes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/quotes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('quotes');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
