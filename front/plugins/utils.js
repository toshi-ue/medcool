const errorMessage = (email, errorCode) => {
  if (!errorCode) return
  // let message
  switch (errorCode) {
    case 'auth/email-already-exists':
      return `${email}はご利用いただけません`
    case 'auth/email-already-in-use':
      return `${email}はご利用いただけません`
    case 'auth/id-token-expired':
      return '一定期間アクセスがなかったため'
    default:
      return errorCode
  }
}

export default ({ app }, inject) => {
  inject('getFirebaseErrorMessage', (email, errorCode) => {
    return errorMessage(email, errorCode)
  })
}
