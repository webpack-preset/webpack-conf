const test = require('ava')
const WebpackConf = require('../src/index')

test('it exports a class', t => {
  const webpack = new WebpackConf()
  t.is(typeof webpack, 'object')
  t.truthy(webpack instanceof WebpackConf)
})

test('it has a default config', t => {
  const webpack = new WebpackConf()
  const conf = webpack.toConfig()

  t.is(typeof conf, 'object')
  t.is(typeof conf.entry, 'object')
  t.is(typeof conf.output, 'object')
  t.is(typeof conf.module, 'object')
  t.is(typeof conf.module.loaders, 'object')
  t.is(typeof conf.plugins, 'object')

  t.deepEqual(conf.entry, { main: 'index.js' })
  t.deepEqual(conf.output, { filename: 'bundle.js' })
  t.deepEqual(conf.module.loaders, [])
  t.deepEqual(conf.plugins, [])
})
