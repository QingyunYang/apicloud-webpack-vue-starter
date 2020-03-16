const { VUE_APP_ENV } = process.env

/**
 * 当前是否为测试开发环境
 * @returns
 */
const isStage = VUE_APP_ENV === 'stage'

/**
 * 当前是否为生产环境
 * @returns
 */
const isProduction = VUE_APP_ENV === 'production'

/**
 * 当前是否为开发环境
 * @returns
 */
const isDevelopment = VUE_APP_ENV === 'development'

export {
  isStage,
  isProduction,
  isDevelopment
}
