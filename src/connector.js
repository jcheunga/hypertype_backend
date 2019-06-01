// import mongoose from 'mongoose';
const mongoose = require('mongoose');

module.exports = function connector(config) {
  const { host, port, name, username, password } = config;
  const uri = ['mongodb://', username, ':', password, '@', host, ':', port, '/', name].join('');
  // const uri = ['mongodb://', host, ':', port, '/', name].join('');
  mongoose.Promise = global.Promise;
  return mongoose.connect(uri);
}
