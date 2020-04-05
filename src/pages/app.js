import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  isH5,
  isLoader,
  isNative,
  isChrome
} from '@/utils'
import store from '@/store'
import App from './app.vue'
import Home from './home.vue'
import Mine from './mine'
import '@/assets/less/global.less'

Vue.config.productionTip = false

console.log(`是否为开发环境: ${process.env.NODE_ENV === 'development'}`)
console.log(`是否为chrome开发环境: ${isChrome}`)
console.log(`是否为loader开发环境: ${isLoader}`)


console.log(`是否为生产环境: ${process.env.NODE_ENV === 'production'}`)
console.log(`是否为h5生产环境: ${isH5}`)
console.log(`是否为native生产环境: ${isNative}`)

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/mine', name: 'mine', component: Mine },
]
const router = new VueRouter({ routes })

const render = () => {
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
}

if (isLoader || isNative) {
  window.apiready = () => {
    Vue.prototype.api = window.api
    render()
  }
}

if (isChrome || isH5) {
  import('@/utils/api').then(module => {
    Vue.prototype.api = module.default
    render()
  })
}
