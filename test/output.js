import test from 'ava'
import WebpackConf from '../src/index'

test('resets the output', t => {
  const webpack = new WebpackConf()
  webpack.setOutput({ path: '/dev/null', filename: 'test.js' })
  const conf = webpack.toConfig()

  t.deepEqual(conf.output, { path: '/dev/null', filename: 'test.js' })
})

test('sets an output path', t => {
  const webpack = new WebpackConf()
  webpack.setOutputPath('test')
  const conf = webpack.toConfig()

  t.truthy(conf.output.path)
  t.is(conf.output.path, 'test')
})

test('sets an output filename', t => {
  const webpack = new WebpackConf()
  webpack.setOutputFilename('test.js')
  const conf = webpack.toConfig()

  t.truthy(conf.output.filename)
  t.is(conf.output.filename, 'test.js')
})

test('sets an output public path', t => {
  const webpack = new WebpackConf()
  webpack.setOutputPublicPath('/test/')
  const conf = webpack.toConfig()

  t.truthy(conf.output.publicPath)
  t.is(conf.output.publicPath, '/test/')
})
