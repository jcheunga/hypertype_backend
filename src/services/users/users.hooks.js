'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const { hashPassword } = require('feathers-authentication-local').hooks;
const commonHooks  = require('feathers-hooks-common');

const setUUID  = require('../../hooks/setUUID');

const hooks = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), hooks.restrictToOwner() ],
    get: [ authenticate('jwt'), hooks.restrictToOwner() ],
    create: [
      setUUID(),
      hashPassword()
    ],
    update: [ authenticate('jwt'), hooks.restrictToOwner() ],
    patch: [ authenticate('jwt'), hooks.restrictToOwner() ],
    remove: [ authenticate('jwt'), hooks.restrictToOwner() ]
  },

  after: {
    all: [commonHooks.when(hook => hook.params.provider, commonHooks.discard('password'))],
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
