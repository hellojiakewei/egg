'use strict';
module.exports = (router, controller) => {
  router.get('/*', controller.render.index);
};
