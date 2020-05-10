import Vue from 'vue'
import eruda from 'eruda'
import VueRouter from 'vue-router'
import store from '@/store'
import { isH5, isLoader, isNative, isChrome } from '@/utils'
import '@/assets/less/global.less'

// 开启移动端调试
const { VUE_APP_CONSOLE } = process.env
if (VUE_APP_CONSOLE === 'true') {
  eruda.init()
}

Vue.config.productionTip = false

/**
 * 根据路由信息，生成路由
 * @param {array} routes 
 */
const initRouter = routes => {
  if (routes.length) {
    Vue.use(VueRouter)
    return new VueRouter({ routes })
  }
  return null
}

const mount = (component, routes = []) => {

  const { NODE_ENV } = process.env
  console.log(`是否为开发环境: ${NODE_ENV === 'development'}`)
  console.log(`是否为chrome开发环境: ${isChrome}`)
  console.log(`是否为loader开发环境: ${isLoader}`)

  console.log(`是否为生产环境: ${NODE_ENV === 'production'}`)
  console.log(`是否为h5生产环境: ${isH5}`)
  console.log(`是否为native生产环境: ${isNative}`)

  /**
   * 实例化Vue
   */
  const createInstance = () => {
    const router = initRouter(routes)
    const render = h => h(component)
    new Vue({ store, router, render }).$mount('#app')
  }
  
  if (isLoader || isNative) {
    window.apiready = () => {
      Vue.prototype.api = window.api
      createInstance()
    }
  }
  
  if (isChrome || isH5) {
    import('@/utils/api').then(module => {
      Vue.prototype.api = module.default
      createInstance()
    })
  }
}

export default mount;
