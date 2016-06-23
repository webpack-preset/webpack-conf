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

    this.entry = config.entry || this.entry
    this.output = config.output || this.output
    this.loaders = config.module && config.module.loaders || this.loaders
    this.plugins = config.plugins || this.plugins
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

export default WebpackConf
