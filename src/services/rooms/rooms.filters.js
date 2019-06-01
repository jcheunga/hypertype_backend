/* eslint no-console: 1 */
console.warn('You are using the default filter for the rooms service. For more information about event filters see https://docs.feathersjs.com/api/events.html#event-filtering'); // eslint-disable-line no-console

module.exports = function (data, connection, hook) { // eslint-disable-line no-unused-vars
  // console.log(data);
  // console.log(connection);
  // console.log(hook);
  return data;
};
