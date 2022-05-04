// リロード時のリダイレクト処理など
// https://zenn.dev/phi/articles/firebase-auth-wait-for-initialization
// https://tns-blog.com/275 を参考にするとログイン画面に戻ってしまう
// 非同期処理をしていないことでauthenticated.jsが先に実行されることが原因と思われる
// https://www.metrocode.co/blog/post/firebase-authentication-nuxt-vuejs#:~:text=%E4%BD%9C%E6%88%90%E3%81%97%E3%81%BE%E3%81%99%E3%80%82-,onAuthStateChanged,-%E3%81%A8%E3%81%84%E3%81%86%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AF を参考にして修正
export default function ({ $axios, $fire, redirect, route, store }) {
  return new Promise((resolve, reject) => {
    $fire.onAuthStateChanged($fire.auth, (user) => {
      // // https://firebase.google.com/docs/reference/js/firebase.User
      if (user) {
        const token = user.accessToken
        $axios.setToken(token, 'Bearer')

        const { email, uid } = user
        store.dispatch('auth/setUser', { email, uid })
      } else {
        $axios.setToken(null, 'Bearer')

        if (route.path !== '/login' && route.path !== '/signup') {
          redirect('/login')
        }
      }
      resolve()
    })
  })
}
