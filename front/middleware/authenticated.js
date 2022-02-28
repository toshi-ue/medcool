export default ({ store, route, redirect }) => {
  if (
    store.getters['auth/isAuthenticated'] &&
    (route.name === 'login' || route.name === 'signup')
  ) {
    redirect('/')
  }
  if (
    !store.getters['auth/isAuthenticated'] &&
    route.name !== 'login' &&
    route.name !== 'signup'
  ) {
    redirect('/login')
  }
}
