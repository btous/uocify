// const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },
  pwa: {
    name: 'vue-uocify',
    themeColor: '#73ecff', //default
    msTileColor: '#000000', //default
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default', //default
    manifestPath: 'manifest.webmanifest.json', // default
    manifestOptions: {
      name: 'vue-uocify',
      short_name: 'vue-uocify',
      start_url: '/',
      display: 'standalone',
      theme_color: '#73ecff',
      background_color: '#73ecff',
      // caldria disposar d'icones de les mides especificades per poder-les substituïr
      icons: [
        {
          'src': './img/icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png'
        },
        {
          'src': './img/icons/android-chrome-maskable-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': './img/icons/android-chrome-maskable-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        // {
        //   'src': './img/icon.87a2c069.svg',
        //   'sizes': '500x500',
        //   'type': 'image/svg',
        // },
        // {
        //   'src': './img/maskable_icon.png',
        //   'sizes': '1024x1024',
        //   'type': 'image/png',
        //   'purpose': 'maskable'
        // }
      ]
    },
    iconPaths: {
      favicon32: 'img/icon.87a2c069.svg',
      favicon16: 'img/icon.87a2c069.svg',
      appleTouchIcon: 'img/icon.87a2c069.svg',
      maskIcon: 'img/icon.87a2c069.svg',
      msTileImage: 'img/icon.87a2c069.svg',
      // favicon32: 'img/icons/favicon-32x32.png',
      // favicon16: 'img/icons/favicon-16x16.png',
      // appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      // maskIcon: 'img/icons/safari-pinned-tab.svg',
      // msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW', // default
    workboxOptions: {}
  }
};