'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');

const setUUID  = require('../../hooks/setUUID');
const getQuote  = require('../../hooks/getQuote');

module.exports = {
  before: {
    all: [
      // authenticate('jwt')
    ],
    find: [],
    get: [],
    create: [
      setUUID(),
      getQuote()
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
