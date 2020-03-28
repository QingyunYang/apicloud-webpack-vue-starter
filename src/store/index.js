import Vue from 'vue'
import Vuex from 'vuex'
import store2 from 'store2'
import modules from './modules'
import { STATE_USER } from '@/constants/storagekeys'

Vue.use(Vuex)

/**
 * 创建vuex仓库
 * @returns
 */
const createStore = () => {

  // 实例化
  const store = new Vuex.Store({ modules })

  // 监听本地储存的变化，来同步多页面之间的状态
  window.addEventListener('storage', function (e) {
    console.log(e)
    if (e.key === STATE_USER) {
      const user = store2.get(STATE_USER)
      console.log(user)
      console.log(store.state)
      store.replaceState({ ...store.state, user })
    }
  })

  return store
}

const store = createStore()

export default store
