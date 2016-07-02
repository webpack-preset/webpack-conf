class WebpackConf {

  // Setup methods

  constructor(config) {
    if (!!config && typeof config === 'object')
      this.loadConfig(config)
    else
      this._setDefault()
  }

  _setDefault() {
    this.entry = {
      main: 'index.js'
    }
    this.output = {
      filename: 'bundle.js'
    }
    this.loaders = []
    this.plugins = []
  }

  loadConfig(config) {
    // reset the config to the defaults before loading
    this._setDefault()

    if ((typeof config.entry === 'object' && config.entry !== null) || typeof config.entry === 'string')
      this.entry = config.entry

    if (typeof config.output === 'object' && config.output !== null)
      this.output = config.output

    if (config.module && Array.isArray(config.module.loaders))
      this.loaders = config.module.loaders

    if (Array.isArray(config.plugins))
      this.plugins = config.plugins
  }

  // Entry

  setEntry(entry) {
    this.entry = entry
  }

  addEntry(name, entry) {
    if (typeof this.entry === 'string')
      this.entry = { main: this.entry }

    if (Array.isArray(this.entry))
      this.entry = { main: this.entry }

    this.entry[name] = entry
  }

  // Output

  setOutput(output) {
    this.output = output
  }

  mergeOutput(output) {
    Object.assign(this.output, output)
  }

  // loaders

  // Plugins

  // Export

  toConfig() {
    return {
      entry: this.entry,
      output: this.output,
      module: { loaders: this.loaders },
      plugins: this.plugins
    }
  }
}

module.exports = WebpackConf
