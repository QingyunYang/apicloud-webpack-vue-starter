const { VUE_APP_ENV, VUE_APP_CLIENT } = process.env

/**
 * 当前是否为浏览器开发环境
 * @returns
 */
const isDevelopment = VUE_APP_ENV === 'development' && VUE_APP_CLIENT === 'chrome'

/**
 * 当前是否为自定义loader开发环境
 * @returns
 */
const isLoader = VUE_APP_ENV === 'development' && VUE_APP_CLIENT === 'loader'

/**
 * 当前是否为h5生产环境
 * @returns
 */
const isH5 = VUE_APP_ENV === 'production' && VUE_APP_CLIENT === 'h5'

/**
 * 当前是否为native生产环境
 * @returns
 */
const isNative = VUE_APP_ENV === 'production' && VUE_APP_CLIENT === 'native'

export {
  isH5,
  isLoader,
  isNative,
  isDevelopment
}
