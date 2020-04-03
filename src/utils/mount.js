import Vue from 'vue'
import { 
  isH5,
  isLoader,
  isNative,
  isChrome
} from '@/utils'
import store from '@/store'

Vue.config.productionTip = false

const mount = component => {

  console.log(`是否为开发环境: ${process.env.NODE_ENV === 'development'}`)
  console.log(`是否为chrome开发环境: ${isChrome}`)
  console.log(`是否为loader开发环境: ${isLoader}`)


  console.log(`是否为生产环境: ${process.env.NODE_ENV === 'production'}`)
  console.log(`是否为h5生产环境: ${isH5}`)
  console.log(`是否为native生产环境: ${isNative}`)

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
  
  if (isChrome || isH5) {
    import('@/utils/api').then(module => {
      Vue.prototype.api = module.default
      render()
    })
  }
}

export default mount;
