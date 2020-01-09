/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1577782603774_7771';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.io = {
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ ], // 针对消息的处理暂时不实现
      },
    },
  
    // cluster 模式下，通过 redis 实现数据共享
    redis: {
      host: '127.0.0.1',
      port: 6379,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
