'use strict';
/**
 * @description
 */

module.exports = (router, controller) => {
    router.get('/user/list', controller.user.list);
    router.get('/user/save', controller.user.save);
};
