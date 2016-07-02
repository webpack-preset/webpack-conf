const test = require('ava')
const WebpackConf = require('../src/index')

test('it exports a class', t => {
  const webpack = new WebpackConf()
  t.is(typeof webpack, 'object')
  t.truthy(webpack instanceof WebpackConf)
})

test('it has a default config', t => {
  const webpack = new WebpackConf()
  const conf = webpack.config

  t.is(typeof conf, 'object')
  t.is(typeof conf.entry, 'object')
  t.is(typeof conf.output, 'object')
  t.is(typeof conf.module, 'object')
  t.truthy(Array.isArray(conf.module.loaders))
  t.truthy(Array.isArray(conf.plugins))

  t.deepEqual(conf.entry, { main: 'index.js' })
  t.deepEqual(conf.output, { filename: 'bundle.js' })
  t.deepEqual(conf.module.loaders, [])
  t.deepEqual(conf.plugins, [])
})

test('it loads an existing config', t => {
  const webpack = new WebpackConf()
  webpack.loadConfig({
    entry: 'test.js',
    output: { path: '/dev/null', filename: 'test.js' },
    module: { loaders: [] },
    plugins: []
  })

  const conf = webpack.config

  t.is(typeof conf, 'object')
  t.is(typeof conf.entry, 'string')
  t.is(typeof conf.output, 'object')
  t.is(typeof conf.module, 'object')
  t.truthy(Array.isArray(conf.module.loaders))
  t.truthy(Array.isArray(conf.plugins))

  t.is(conf.entry, 'test.js')
  t.deepEqual(conf.output, { path: '/dev/null', filename: 'test.js' })
  t.deepEqual(conf.module.loaders, [])
  t.deepEqual(conf.plugins, [])
})

test('it blocks loading an invalid config', t => {
  const webpack = new WebpackConf()
  webpack.loadConfig({
    entry: 2,
    output: true,
    module: { loaders: 'wat' },
    plugins: 'DedupePlugin'
  })

  const conf = webpack.config

  t.is(typeof conf, 'object')
  t.is(typeof conf.entry, 'object')
  t.is(typeof conf.output, 'object')
  t.is(typeof conf.module, 'object')
  t.truthy(Array.isArray(conf.module.loaders))
  t.truthy(Array.isArray(conf.plugins))

  t.deepEqual(conf.entry, { main: 'index.js' })
  t.deepEqual(conf.output, { filename: 'bundle.js' })
  t.deepEqual(conf.module.loaders, [])
  t.deepEqual(conf.plugins, [])
})
