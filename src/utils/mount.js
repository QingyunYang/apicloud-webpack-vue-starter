import Vue from 'vue'
import { isDevelopment, isProduction } from '@/utils/env'
import api from '@/utils/api'

Vue.config.productionTip = false

const mount = component => {

  console.log(`isDevelopment: ${isDevelopment}`)
  console.log(`isProduction: ${isProduction}`)

  const render = () => {
    new Vue({
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
    Vue.prototype.api = api
    render()
  }
}

export default mount;
