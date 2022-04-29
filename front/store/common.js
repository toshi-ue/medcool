export const state = () => ({
  toast: {
    msg: null,
    color: 'error',
    timeout: 4000,
  },
})

export const getters = {
  toastMessage(state) {
    return !!state.toast.msg
  },
}

export const mutations = {
  setToast(state, payload) {
    console.log('b passed')
    state.toast = payload
  },
}

export const actions = {
  getToast({ commit }, { msg, color, timeout }) {
    console.log('a passed')
    color = color || 'error'
    timeout = timeout || 4000
    commit('setToast', { msg, color, timeout })
  },
}
