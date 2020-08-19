module.exports = {
  chainWebpack: config => config.resolve.symlinks(false),
  publicPath: "./",
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
