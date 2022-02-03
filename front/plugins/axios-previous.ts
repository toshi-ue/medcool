// @nuxtjs/axiosが現時点(22/01)で以下のエラーが発生してimportできない(TypeScriptで型定義できない)
//    NuxtAxiosInstance not found in '@nuxtjs/axios'
// とりえずTypeScriptは使わず、以下でログ確認をする
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export default ({ $axios }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log(config)
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log(config)
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)
  })
}
