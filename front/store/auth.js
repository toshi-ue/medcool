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
    console.log('payload:', payload)
    state.currentUser = payload
  },
}

// https://vuex.vuejs.org/ja/guide/actions.html
export const actions = {
  setUser({ commit }, data) {
    commit('setUser', data)
  },
}
