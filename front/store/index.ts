// [Getting started (Nuxt)](https://typed-vuex.roe.dev/getting-started/getting-started-nuxt)
// [nuxt-typed-vuexを使ってNuxtのStoreに型をもたらす - unsweets.log](https://blog.unsweets.net/entries/get-types-of-store-using-nuxt-typed-veux/)
// [Vuexの代わりにnuxt-typed-vuexを用いて型の恩恵を受ける🏦 - Qiita](https://qiita.com/y-temp4/items/08e131b8b053f401d996)
// [Nuxt.jsとTypeScriptで開発環境を構築する](https://zenn.dev/sueshin/articles/f3ae746309bcc0)
import { getAccessorType } from 'typed-vuex'

// Import all your submodules
// import * as submodule from '~/store/submodule'

export const state = () => {
  return {}
}

export const getters = {}
export const mutations = {}
export const actions = {}

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
  // modules: {
  //   // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
  //   submodule
  // }
})
