import Vue from 'vue'
import { isDevelopment, isProduction } from '@/utils/env'
import store from '@/store'

Vue.config.productionTip = false

const mount = component => {

  console.log(`isDevelopment: ${isDevelopment}`)
  console.log(`isProduction: ${isProduction}`)

  const render = () => {
    new Vue({
      store,
      render: h => h(component),
    }).$mount('#app')
  }
  
  if (isProduction) {
    window.apiready = () => {
      Vue.prototype.api = window.api
      render()
    }
  }
  
  if (isDevelopment) {
    import('@/utils/api').then(module => {
      Vue.prototype.api = module.default
      render()
    })
  }
}

export default mount;
