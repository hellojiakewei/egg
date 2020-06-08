'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    },
    routerPlus: {
        enable: true,
        package: 'egg-router-plus',
    },
};
