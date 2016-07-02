const test = require('ava')
const WebpackConf = require('../src/index')

test('resets the output', t => {
  const webpack = new WebpackConf()
  webpack.setOutput({ path: '/dev/null', filename: 'test.js' })
  const conf = webpack.toConfig()

  t.deepEqual(conf.output, { path: '/dev/null', filename: 'test.js' })
})

test('merges our own output', t => {
  const webpack = new WebpackConf()
  webpack.mergeOutput({ path: 'test' })
  const conf = webpack.toConfig()

  t.truthy(conf.output.path)
  t.is(conf.output.path, 'test')
  t.is(conf.output.filename, 'bundle.js')
})
