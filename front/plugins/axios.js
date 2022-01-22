// development環境でlogを表示・確認するための設定ファイル
export default ({ $axios }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log(config) // eslint-disable-line
  })

  // レスポンスログ
  $axios.onResponse((config) => {
    console.log(config) // eslint-disable-line
  })

  // エラーログ
  $axios.onError((e) => {
    console.log(e.response) // eslint-disable-line
  })
}
