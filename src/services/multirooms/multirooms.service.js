const createService = require('feathers-mongoose');
const createModel = require('./multirooms.models');
const hooks = require('./multirooms.hooks');
const filters = require('./multirooms.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'multirooms',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/multirooms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('multirooms');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
