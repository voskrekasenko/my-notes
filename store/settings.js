import {LOCAL_STORAGE} from "../helpers/constants";

export const state = () => ({
  storage: LOCAL_STORAGE
})

export const mutations = {
  setStorage(state, storage) {
    state.storage = storage
  }
}

export const actions = {
  async updateStorage({commit}, value) {
    commit('setStorage', value)
  },
}

export const getters = {
  storage: s => s.storage
}
