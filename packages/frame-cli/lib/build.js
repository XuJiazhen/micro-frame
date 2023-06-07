/* eslint-disable @typescript-eslint/no-var-requires */
const prodConfig = require('./webpack/prod')
const webpack = require('webpack')

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
  const config = prodConfig(moduleDir, moduleName)
  const compiler = webpack(config)

  compiler.run((err, stats) => {
    console.log(err)
    console.log(stats)
  })
}
