const errorMessage = (email, errorCode) => {
  if (!errorCode) return
  // let message
  switch (errorCode) {
    // [Admin Authentication API エラー  Firebase Documentation](https://firebase.google.com/docs/auth/admin/errors?hl=ja)
    case 'auth/email-already-exists':
      return `${email}はご利用いただけません`
    case 'auth/email-already-in-use':
      return `${email}はご利用いただけません`
    case 'auth/id-token-expired':
      return '一定期間アクセスがなかったため'
    case 'auth/invalid-email':
      return 'メールアドレスもしくはパスワードが間違っています'
    case 'auth/internal-error':
      return '予期しないエラーが発生しました<br/>しばらくたってから再度お試しください'
    default:
      return errorCode
  }
}

export default ({ app }, inject) => {
  inject('getFirebaseErrorMessage', (email, errorCode) => {
    return errorMessage(email, errorCode)
  })
}
