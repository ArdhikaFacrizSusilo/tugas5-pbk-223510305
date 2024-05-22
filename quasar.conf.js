// quasar.conf.js
module.exports = function (/* ctx */) {
  return {
    cssAddon: true,
    css: [
      'app.sass',
      'quasar-variables.sass'
    ],

    framework: {
      iconSet: 'material-icons', // icon set
      lang: 'en-us', // Quasar language pack
      config: {},

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: 'auto',

      // Quasar plugins
      plugins: []
    },

    // other configurations
  }
}
