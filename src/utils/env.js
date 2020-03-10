const { VUE_APP_ENV } = process.env

/**
 * 判断当前是否为开发环境
 * @returns
 */
const isDevelopment = VUE_APP_ENV === 'development'

/**
 * 判断当前是否为生产环境
 * @returns
 */
const isProduction = VUE_APP_ENV === 'production'

/**
 * 判断当前是否为测试开发环境
 * @returns
 */
const isStage = VUE_APP_ENV === 'stage'

export {
  isDevelopment,
  isProduction,
  isStage
}
