const test = require('ava')
const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const WebpackConf = require('../src/index')

test.cb('it compiles a basic build', t => {
  const fs = new MemoryFS()

  const conf = new WebpackConf()
  conf.setEntry('./fixtures/entry1.js')
  conf.setOutput({ path: '/', filename: 'test.js' })

  const compiler = webpack(conf.config)
  compiler.outputFileSystem = fs

  compiler.run((err, stats) => {
    if (err) return t.end(err)
    if (stats.hasErrors()) return t.end(stats.errors)
    if (stats.hasWarnings()) return t.end(stats.warnings)
    t.end()
  })
})
