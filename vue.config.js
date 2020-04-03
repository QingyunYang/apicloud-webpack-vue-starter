const path = require('path')
const glob = require('glob')
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const pxtorem = require('postcss-pxtorem');

// 获取pages配置
const getPagesConfig = () => {
  const index = './src/pages/app.js';
  const pages = { index }

  const pattern = './src/pages/**/app.js'
  const paths = glob.sync(pattern, { ignore: index })
  paths.forEach(item => {
    const chunk = item.split('./src/pages/')[1].split('/app.js')[0]
    pages[chunk] = {
      entry: item,
      title: chunk,
      chunks: ['chunk-vendors', 'chunk-common', chunk]
    }
  })
  return pages
}

/**
 * 获取postcss插件配置
 * @param {string} scheme 可选，屏幕适配方案，可选 vw，rem
 */
const getPostcssPlugins = scheme => {
  const plugins = [
    autoprefixer()
  ]

  if (scheme === 'vw') {
    plugins.push(
      pxtoviewport({
        viewportWidth: 375
      })
    )
  } else if (scheme === 'rem') {
    // rem适配方案
    // 需要在html根节点添加font-size样式
    plugins.push(
      pxtorem({
        rootValue: 16,
        unitPrecision: 5,
        selectorBlackList: [],
        propList: ["font", "font-size", "line-height", "letter-spacing"],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude: null
      })
    )
  }

  return plugins
}

const getPublicPath = () => {
  if (process.env.VUE_APP_CLIENT === 'h5') return '/'
  if (process.env.VUE_APP_CLIENT === 'chrome') return '/'
  if (process.env.VUE_APP_CLIENT === 'loader') return '/'

  if (process.env.VUE_APP_CLIENT === 'native') return './'
}

module.exports = {
  pages: getPagesConfig(),
  assetsDir: 'static',
  publicPath: getPublicPath(),
  css: {
    loaderOptions: {
      postcss: {
        plugins: getPostcssPlugins('vw')
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  }
}
