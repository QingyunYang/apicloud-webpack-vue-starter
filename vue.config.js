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
      pxtoviewport({ viewportWidth: 375 })
    )
  } else if (scheme === 'rem') {
    plugins.push(
      pxtorem({
        rootValue: 75,
        propList: ['*']
      })
    )
  }

  return plugins
}

module.exports = {
  pages: getPagesConfig(),
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: getPostcssPlugins('rem')
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
