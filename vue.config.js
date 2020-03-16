const path = require('path')
const glob = require('glob')


const pages = {
  index: './src/pages/app.js'
}
const pathList = glob.sync('./src/pages/**/app.js', {
  ignore: './src/pages/app.js'
})
pathList.forEach(item => {
  const chunk = item.split('./src/pages/')[1].split('/app.js')[0]
  pages[chunk] = {
    entry: item,
    title: chunk,
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})

module.exports = {
  pages,
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  }
}
