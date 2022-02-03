// [(Nuxt + Composition API) RepositoryFactoryパターンを用いたAPIリクエストの実装サンプル](https://zenn.dev/m2tkl/articles/b1c862d9800fbe#repository-plugin-%E3%81%A8-axios-plugin-%E3%81%AE%E4%BD%9C%E6%88%90)
import { NuxtApp } from '@nuxt/types/app'

export default ({ app }: { app: NuxtApp }) => {
  // リクエストログ
  app.$axios.onRequest((config) => {
    console.log(config)
  })
  // レスポンスログ
  app.$axios.onResponse((config) => {
    console.log(config)
  })
  // エラーログ
  app.$axios.onError((e) => {
    console.log(e.response)
  })
}
