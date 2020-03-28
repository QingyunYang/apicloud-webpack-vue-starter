import store2 from 'store2'
import { STATE_USER } from '@/constants/storagekeys'

const state = {
  loginStatus: false
}

// 初始化state
const user = store2.get(STATE_USER)
if (user) {
  state.loginStatus = user.loginStatus
}

const mutations = {
  SET_LOGIN_STATUS: (state, loginStatus) => {
    state.loginStatus = loginStatus
    store2.set(STATE_USER, state)
  }
}
const actions = {
  login({ commit }) {
    commit('SET_LOGIN_STATUS', true)
  },
  logout({ commit }) {
    commit('SET_LOGIN_STATUS', false)
  }
}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}