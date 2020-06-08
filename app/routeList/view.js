'use strict';
const view = require('./viewRouter');
module.exports = (app) => {
  const {router,controller} = app
  view(router, controller);
};
