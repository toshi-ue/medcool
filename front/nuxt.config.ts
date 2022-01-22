// [Nuxt+TS+CompositionAPI+Vercel+VSCodeのセットアップ手順](https://zenn.dev/sasigume/articles/nuxt-ts-composition-vercel)
// [Nuxt.js + TypeScript + Composition APIで作るSPA - Qiita](https://qiita.com/mmclsntr/items/15acb44ab1746f097a89#layoutsdefaultvue-%E3%81%AEtypescript--composition-api%E5%8C%96)
// [nuxt-community/typescript-template: Typescript starter with Nuxt.js](https://github.com/nuxt-community/typescript-template)
import type { NuxtConfig } from '@nuxt/types';
// [Cannot find module 'vuetify/lib/util/colors' in nuxt.config.js · Issue #101 · nuxt-community/vuetify-module](https://github.com/nuxt-community/vuetify-module/issues/101#issuecomment-703049802)
// import colors from 'vuetify/es5/util/colors.js';
import colors from 'vuetify/src/util/colors'

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - app',
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
    // [Nuxt2系へのtypescript及びcomposition-apiの導入 | スマートショッピング](https://tech.smartshopping.co.jp/composition-api#:~:text=%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82-,3.composition%2Dapi%E5%B0%8E%E5%85%A5,-%E3%81%95%E3%81%A6%E3%80%81%E3%81%84%E3%82%88%E3%81%84%E3%82%88composition)
    // '@/plugins/composition-api',
    // [Nuxt.js + TypeScript + Composition APIで作るSPA - Qiita](https://qiita.com/mmclsntr/items/15acb44ab1746f097a89#composition-api%E3%81%AE%E5%B0%8E%E5%85%A5)
    '@nuxtjs/composition-api/module',
    // [Introduction](https://typed-vuex.roe.dev/)
    // [Vuexの代わりにnuxt-typed-vuexを用いて型の恩恵を受ける🏦 - Qiita](https://qiita.com/y-temp4/items/08e131b8b053f401d996)
    'nuxt-typed-vuex',
    'plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
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
    // 環境変数にAPI_URLが存在する場合axiosのbaseURLは自動で設定・優先される(Dockerfileから参照される)
    // baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default config
