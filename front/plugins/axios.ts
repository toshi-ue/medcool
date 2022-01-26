// FIXME: axiosのログを仕込めるようにしたい
// composition-apiを使用していると @nuxtjs/axios を読み込めず$axiosを使えない
// Pattern0(jsのみ)
// [【Nxut.js】axiosの初期設定を行う(baseURL・browserBaseURLを解説) - 独学プログラマ](https://blog.cloud-acct.com/posts/u-nuxtjs-axios/#:~:text=plugins/axios.js-,axios.js%E3%81%AB%E3%83%AD%E3%82%B0%E3%82%92%E4%BB%95%E8%BE%BC%E3%82%80,-%E7%B6%9A%E3%81%84%E3%81%A6)
// export default ({ $axios }) => {
//   // リクエストログ
//   $axios.onRequest((config) => {
//     console.log(config)
//   })
//   // レスポンスログ
//   $axios.onResponse((config) => {
//     console.log(config)
//   })
//   // エラーログ
//   $axios.onError((e) => {
//     console.log(e.response)
//   })
// }

// Pattern1
// [TypeScript × Axios リポジトリパターン](https://zenn.dev/chida/articles/5756a54d94230a)
// import axios from 'axios'
// const repository = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com'
// })

// export default (resource: string) => {
//   return {
//     index() {
//       return repository.get(resource)
//     },
//     show(id: number) {
//       return repository.get(`${resource}/${id}`)
//     },
//     post(payload: any) {
//       return repository.post(resource, payload)
//     },
//     delete(id: number) {
//       return repository.delete(`${resource}/${id}`)
//     }
//   }
// }

// Pattern2
// [【TypeScript】Axiosのリクエストとレスポンスに型をつける](https://zenn.dev/mkt_engr/articles/axios-req-res-typescript#%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%85%A8%E5%AE%B9)
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
// // // let $axios: AxiosInstance

// // // // AxiosInstance
// export default (axios: AxiosInstance) => {
//   // リクエストログ
//   axios.interceptors.request.use((config: AxiosRequestConfig) => {
//     console.log(config)
//   })
//   // レスポンスログ
//   axios.interceptors.response.use((config: AxiosResponse) => {
//     console.log(config)
//   })
//   // // エラーログ
//   axios.interceptors.response.use((e: AxiosError) => {
//     console.log(e.response)
//   })
// }

// Pattern3
// FIXME: 本命
// [Nuxt+TypeScript で Vuex/axios を型安全にする](https://zenn.dev/hukurouo/articles/nuxt-ts-sample#%E3%83%A9%E3%83%B3%E3%83%80%E3%83%A0%E7%8C%AB%E7%94%BB%E5%83%8F%28axios%29)
// import { NuxtAxiosInstance } from '@nuxtjs/axios'

// const $axios: NuxtAxiosInstance

// export default ({ $axios }: NuxtAxiosInstance) => {
//   // リクエストログ
//   $axios.onRequest((config: AxiosRequestConfig) => {
//     console.log(config)
//   })
//   // レスポンスログ
//   $axios.onResponse((config: AxiosResponse) => {
//     console.log(config)
//   })
//   // エラーログ
//   $axios.onError((e: AxiosError) => {
//     console.log(e.response)
//   })
// }
// export { $axios }

// Pattern4(composition-api)
// import { useContext } from '@nuxtjs/composition-api'
// const $axios = useContext()

// export default ({ $axios }) => {
//   // リクエストログ
//   $axios.onRequest((config) => {
//     console.log(config)
//   })
//   // レスポンスログ
//   $axios.onResponse((config) => {
//     console.log(config)
//   })
//   // エラーログ
//   $axios.onError((e) => {
//     console.log(e.response)
//   })
// }

// Pattern5
// [TypeScriptで実装比較! Nuxt.js VS React.js(Hooks) ◆ SPAフレームワークを徹底検証 その③ 『AxiosによるAPIアクセス共通エラー画面遷移処理』 – taniguchi's web logs](https://blog.taniguchi.tech/archives/697#:~:text=%E3%81%A8%E3%81%84%E3%81%86%E8%A8%B3%E3%81%A7%E3%81%99%E3%80%82-,%E3%81%A7%E3%81%AF%E3%80%81Axios%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E8%A1%8C%E3%81%84%E3%81%BE%E3%81%99,-%E3%80%82nuxt.config.js)
// vueファイルで `Cannot find name 'axios'.`と言われる
// import { Context } from '@nuxt/types'

// export default function (context: Context) {
//   const { $axios, error } = context

//   // $axios.setBaseURL('/api/v1')

//   $axios.onRequest((config) => {
//     // config.headers = {
//     //   'Content-Type': 'application/json'
//     // }
//     console.log(config)
//   })
//   // レスポンスログ
//   $axios.onResponse((config) => {
//     console.log(config)
//   })
//   $axios.onError((err) => {
//     error({
//       statusCode: err.response?.status
//     })
//   })
// }

// Pattern6
// Udemy
