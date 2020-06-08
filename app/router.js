'use strict';

module.exports = app => {
    require('./routeList/api')(app)
    require('./routeList/view')(app)
};
