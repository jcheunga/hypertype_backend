'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');

const setUUID  = require('../../hooks/setUUID');

module.exports = {
  before: {
    all: [
      // authenticate('jwt')
    ],
    find: [],
    get: [],
    create: [
      setUUID()
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
