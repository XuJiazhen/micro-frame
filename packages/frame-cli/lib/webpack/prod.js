/* eslint-disable @typescript-eslint/no-var-requires */
const baseConfig = require('./base')

module.exports = (context, moduleName) => {
  return {
    ...baseConfig(context, moduleName, 'production'),
    optimization: {
      realContentHash: false,
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    }
  }
}
