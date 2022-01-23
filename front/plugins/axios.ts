// // development環境でlogを表示・確認するための設定ファイル
import { NuxtAxiosInstance } from '@nuxtjs/axios'
let $axios: NuxtAxiosInstance // eslint-disable-line

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  // リクエストログ
  axiosInstance.onRequest((config) => {
    console.log(config) // eslint-disable-line
  })

  // レスポンスログ
  axiosInstance.onResponse((config) => {
    console.log(config) // eslint-disable-line
  })

  // エラーログ
  axiosInstance.onError((e) => {
    console.log(e.response) // eslint-disable-line
  })
}

export { $axios }
