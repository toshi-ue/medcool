export const state = () => ({
  currentUser: null,
})

export const getters = {
  user(state) {
    return state.currentUser
  },
  isAuthenticated(state) {
    return !!state.currentUser
  },
}

export const mutations = {
  setUser(state, payload) {
    state.currentUser = payload
  },
}

// https://vuex.vuejs.org/ja/guide/actions.html
export const actions = {
  setUser({ commit }, data) {
    commit('setUser', data)
  },
  signUp({ commit }, { email, password }) {
    return this.$fire.createUserWithEmailAndPassword(
      this.$fire.auth,
      email,
      password
    )
  },
  signOut() {
    return this.$fire.signOut(this.$fire.auth)
  },
}
