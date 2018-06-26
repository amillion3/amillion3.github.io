const events = require('./events');

const initializer = () => {
  events.bindEvents();
};

module.exports = {
  initializer,
};
