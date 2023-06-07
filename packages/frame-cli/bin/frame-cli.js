#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

// const program = require('commander')
const serve = require('../lib/serve')
const build = require('../lib/build')
const minimist = require('minimist')
const program = require('commander')

program
  .command('serve')
  .description('server <module-name>')
  .action(() => {
    if (minimist(process.argv.slice(3))._.length > 1) {
      console.log('警告：冗余参数将被忽略')
    }
    const [moduleName] = minimist(process.argv.slice(3))._
    serve(moduleName)
  })

program
  .command('build')
  .description('build <module-name>')
  .action(() => {
    if (minimist(process.argv.slice(3))._.length > 1) {
      console.log('警告：冗余参数将被忽略')
    }
    const [moduleName] = minimist(process.argv.slice(3))._
    build(moduleName)
  })

program.parse(process.argv)
