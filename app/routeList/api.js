'use strict';
const subUserRouter = require('./nodeapi/user');
module.exports = (app) => {
  const {router,controller} = app
  const subRouter = router.namespace('/nodeapi');
  subUserRouter(subRouter, controller);
};
