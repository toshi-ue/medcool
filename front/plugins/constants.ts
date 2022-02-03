// // // 共通変数を追加・宣言
import { Plugin } from '@nuxt/types'

const APP_NAME = 'Medcool'

declare module 'vue/types/vue' {
  interface Vue {
    $appName: string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $appName: string
  }
}

// // vuexでは使用しない(はず)
declare module 'vuex/types/index' {
  interface Store<S> {
    $appname: string
  }
}

const constantsPlugin: Plugin = (_context, inject) => {
  inject('appName', APP_NAME)
}

export default constantsPlugin
