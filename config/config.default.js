/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
console.log()
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591582907517_6452';

  // add your middleware config here
  config.middleware = [];
  // 模板配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
    cache: false,
  }
  config.mongoose = {
    url: 'mongodb://zkcp:zwwl@47.105.178.253:27017/zwwl',
    options: {
      useNewUrlParser: true ,
      useUnifiedTopology: true
    },
  }
  // 静态资源配置
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public/dist'),
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
