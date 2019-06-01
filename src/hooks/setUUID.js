const uuid = require('uuid');

function assignUUID(item) {
  item.uuid = uuid.v4(); // eslint-disable-line no-param-reassign
}

module.exports = function setUUID() {
  return (hook, next) => {
    const data = hook.data;

    if (Array.isArray(data)) {
      data.map(item => assignUUID(item));
      return next();
    }

    assignUUID(data);
    return next();
  };
}