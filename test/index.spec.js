import test from 'ava'
import WebpackConf from '../src/index'

test('it exports a class', t => {
  const webpack = new WebpackConf()
  t.is(typeof webpack, 'object')
  t.truthy(webpack instanceof WebpackConf)
})
