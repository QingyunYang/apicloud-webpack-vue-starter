import Vue from 'vue'
import { isDevelopment, isProduction } from '@/utils/env'
import api from '@/utils/api'
import App from './app.vue'

Vue.config.productionTip = false

const render = () => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

console.log(`isDevelopment: ${isDevelopment}`)
console.log(`isProduction: ${isProduction}`)

if (isProduction) {
  window.apiready = () => {
    Vue.prototype.$api = window.api
    render()
  }
}

if (isDevelopment) {
  Vue.prototype.$api = api
  render()
}
