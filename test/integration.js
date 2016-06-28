import test from 'ava'
import webpack from 'webpack'
import MemoryFS from 'memory-fs'
import WebpackConf from '../src/index'

test.cb('it compiles a basic build', t => {
  const fs = new MemoryFS()

  const conf = new WebpackConf()
  conf.setEntry('./fixtures/entry1.js')
  conf.setOutputPath('/')
  conf.setOutputFilename('bundle.js')

  const compiler = webpack(conf.toConfig())
  compiler.outputFileSystem = fs

  compiler.run((err, stats) => {
    if (err) return t.end(err)
    if (stats.hasErrors()) return t.end(stats.errors)
    if (stats.hasWarnings()) return t.end(stats.warnings)
    t.end()
  })
})
