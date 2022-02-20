// import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'ここに概要 | %s',
    title: 'app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/axios'でもよい
    '@/plugins/axios',
    '@/plugins/firebase',
    '@/plugins/firebase.authentication',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // docker-compose.yml環境変数API_URLが優先される
    // baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3,
    //     },
    //   },
    // },
  },
  // FIXME: ソースコードの変更が反映されない(少しされるようになった)?
  // もし1つ目でダメなら2つ目のリンクを参考にする
  // [dockerコンテナ上のnuxt.jsアプリでhot reloadを有効にする](https://sunday-morning.app/posts/2020-11-30-docker-nuxt-js-hot-reload)
  // [Nuxt.js 開発サーバーでのSSEがランダムポートになって困ってた « LANCARD.LAB｜ランカードコムのスタッフブログ](https://www.lancard.com/blog/2020/06/30/nuxt-js-%E9%96%8B%E7%99%BA%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%A7%E3%81%AEsse%E3%81%8C%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E5%9B%B0/)
  watchers: {
    webpack: {
      poll: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Nuxt configuration file: https://nuxtjs.org/docs/directory-structure/nuxt-config#runtimeconfig
  publicRuntimeConfig: {
    APP_NAME: 'MedCool',
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      appId: process.env.FIREBASE_APP_ID,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      measurementId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      // services: {
      //   auth: true
      // }
    },
  },
}
