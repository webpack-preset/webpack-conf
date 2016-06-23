import test from 'ava'
import WebpackConf from '../src/index'

test('resets the entry point', t => {
  const webpack = new WebpackConf()
  webpack.setEntry('test.js')
  const conf = webpack.toConfig()

  t.is(conf.entry, 'test.js')
})

test('adds a string entry', t => {
  const webpack = new WebpackConf()
  webpack.addEntry('test', 'test.js')
  const conf = webpack.toConfig()

  t.truthy(conf.entry.test)
  t.is(conf.entry.test, 'test.js')
})

test('adds an array entry', t => {
  const webpack = new WebpackConf()
  webpack.addEntry('test', ['test1.js', 'test2.js'])
  const conf = webpack.toConfig()

  t.truthy(conf.entry.test)
  t.deepEqual(conf.entry.test, ['test1.js', 'test2.js'])
})

test('upgrades a single entry point to multiple entries', t => {
  const webpack = new WebpackConf({entry: 'main.js'})
  webpack.addEntry('test', 'test.js')
  const conf = webpack.toConfig()

  t.truthy(conf.entry.main)
  t.is(conf.entry.main, 'main.js')
  t.truthy(conf.entry.test)
  t.is(conf.entry.test, 'test.js')
})
