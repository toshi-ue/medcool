// https://www.metrocode.co/blog/post/firebase-authentication-nuxt-vuejs#:~:text=%E4%BD%9C%E6%88%90%E3%81%97%E3%81%BE%E3%81%99%E3%80%82-,onAuthStateChanged,-%E3%81%A8%E3%81%84%E3%81%86%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%AF
// https://zenn.dev/phi/articles/firebase-auth-wait-for-initialization

export default (context) => {
  // console.log('context:', context)
  const { $fire, store } = context
  // console.log(route.name)

  return new Promise((resolve, reject) => {
    $fire.onAuthStateChanged($fire.auth, (user) => {
      // // https://firebase.google.com/docs/reference/js/firebase.User
      if (user) {
        console.log('user: ', user)
        const { email, uid } = user
        store.dispatch('auth/setUser', { email, uid })
      }
      resolve()
    })
  })
}
