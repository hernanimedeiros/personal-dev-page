// Initial state
export const state = () => ({
  info: []
})
// Mutations
export const mutations = {
  set (state, newState) {
    state.info.splice(0)
    state.info.push.apply(state.info, newState)
  }
}

export const getters = {
  get (state) {
    return state.info
  }
}
