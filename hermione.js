module.exports = {
  plugins: {
    // Important!!! This plugin should be enabled last, otherwise its work is not guaranteed
    'hermione-wdio-migrator': {
      enabled: true
    }
  }
};
