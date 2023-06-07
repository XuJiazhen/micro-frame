/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./base')

module.exports = (context, moduleName) => {
  return {
    ...baseConfig(context, moduleName, 'development')
    // devServer: {
    //   host: 'localhost',
    //   port: '9091',
    //   https: false
    // }
  }
}
