import Vue from 'vue'
import { 
  isH5,
  isLoader,
  isNative,
  isDevelopment
} from '@/utils/env'
import store from '@/store'

Vue.config.productionTip = false

const mount = component => {

  console.log(`是否为开发环境: ${isDevelopment || isLoader}`)
  console.log(`是否为生产环境: ${isH5 || isNative}`)

  const render = () => {
    new Vue({
      store,
      render: h => h(component),
    }).$mount('#app')
  }
  
  if (isLoader || isNative) {
    window.apiready = () => {
      Vue.prototype.api = window.api
      render()
    }
  }
  
  if (isDevelopment || isH5) {
    import('@/utils/api').then(module => {
      Vue.prototype.api = module.default
      render()
    })
  }
}

export default mount;
