module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-notes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAe0EG6TlIdZJomo7neLSxFgEhP4D_Ybjk',
          authDomain: 'testnotes-8564c.firebaseapp.com',
          databaseURL: 'https://testnotes-8564c.firebaseio.com',
          projectId: 'testnotes-8564c',
          storageBucket: 'testnotes-8564c.appspot.com',
          messagingSenderId: '82463393361',
          appId: '1:82463393361:web:ae666ca320a142a9cd5a70'
        },
        services: {
          realtimeDb: true
        }
      }
    ]
  ],
  plugins: [
    '@/plugins/vuelidate',
    '@/plugins/moment.js',
  ]
}

