# Webpack Conf
> Programmatically manage your [webpack](https://webpack.github.io/) configuration

[![npm version](https://img.shields.io/travis/webpack-preset/webpack-conf.svg?style=flat-square)](https://travis-ci.org/webpack-preset/webpack-conf)
[![npm version](https://img.shields.io/npm/v/webpack-conf.svg?style=flat-square)](https://www.npmjs.com/package/webpack-conf)
[![npm downloads](https://img.shields.io/npm/dm/webpack-conf.svg?style=flat-square)](https://www.npmjs.com/package/webpack-conf)
[![webpack channel on discord](https://img.shields.io/badge/discord-%23webpack%20%40%20reactiflux-61dafb.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bVrknv7)

Webpack is primarily configured via an object full of various options. This works well for single projects and purpose-built configurations. It's also very powerful, as you have the full feature set of Node available to you. However, if you work on multiple projects that share a common build or would like to more easily configure your builds for different environments, you basically have to program up your own solution to these problems.

webpack-conf provides a simple API for building and modifying a webpack configuration object. This lets you make more stable changes to your config with less coupled, brittle configuration code.

While primarily built for [webpack-preset](https://github.com/webpack-preset/webpack-preset), this could also enable things such as libraries that more easily plug in to existing webpack configurations. If you have a use case that isn't yet covered by the API, but can be enabled, please reach out and open an issue!

## Installation

```sh
npm install --save webpack-conf
```

## Basic Usage

> More extensive API docs coming soon...

```js
const conf = new WebpackConf()

conf.setEntry(path.resolve('./src/entry.js'))
conf.setOutputPath(path.resolve(__dirname, 'build'))
conf.setOutputFilename('bundle.js')

const compiler = webpack(conf.toConfig())
```
