/* eslint-disable @typescript-eslint/no-var-requires */
const devConfig = require('./webpack/dev')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server/lib/Server')

// import ora from 'ora'
const fs = require('fs')
const path = require('node:path')

module.exports = (moduleName) => {
  const appsDir = path.resolve(process.cwd(), `packages/apps`)
  console.log('moduleName', moduleName)
  console.log('appsDir', appsDir)

  const moduleDir = path.resolve(`${appsDir}/${moduleName}`)
  const moduleExist = fs.existsSync(moduleDir)
  console.log('moduleExist', moduleExist)
  if (!moduleExist) return console.log(`错误：模块不存在`)
  const isNpmModule = fs.existsSync(`${appsDir}/${moduleName}/package.json`)
  if (!isNpmModule) return console.log(`错误：非 npm 模块`)
  console.log('isNpmModule', isNpmModule)
  console.log('moduleDir', moduleDir)
  // const spinner = ora('Webpack running dev ...')
  const config = devConfig(moduleDir, moduleName)
  const compiler = webpack(config)
  const devServerOptions = {
    hot: true,
    historyApiFallback: true,
    compress: true,
    open: true
    // static: 'dist',
    // devMiddleware: {
    //   stats: 'errors-only'
    // }
  }
  const server = new WebpackDevServer(compiler, devServerOptions)
  server.listen(8001, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8001')
  })
}
