
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'donald shtjefni - senior front end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "portfolio of front-end developer based in turin — available for freelance." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/reset.css',
    '~/assets/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fullpage',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],

  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false,
    exposeConfig: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [

  ],

  purgeCSS: {
    mode: 'postcss',
    // enabled: true,
    whitelist: ['anim', 'fullpage-wp-h', 'animated'],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
