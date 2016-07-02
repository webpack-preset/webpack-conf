const test = require('ava')
const WebpackConf = require('../src/index')

test('it adds a loader', t => {
  const webpack = new WebpackConf()
  webpack.setLoader('bubble', { test: /.js$/, loader: 'bubble', query: { superMode: true } })
  const conf = webpack.config

  t.is(conf.module.loaders.length, 1)
})
