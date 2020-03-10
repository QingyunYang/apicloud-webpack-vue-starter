[apicloud](https://www.apicloud.com/)是一个混合app开发平台，有丰富的原生模块，可以云编译打包android和iOS应用，给web前端同学提供了快速高效的开发能力。随着前端开发体验的提升，基于webpack的工程化开发成为了日常开发形式，同样的，我们可以将两者结合起来，打造一个顺手的项目框架。

我们的最终目标：

- 使用前端流行框架，这里我们选用vue进行演示
- 使用我们熟悉的chrome浏览器调试开发
- 一套代码，完美运行于android和iOS端

你可以访问下面链接，来获取搭建好的源码：

[github](https://github.com/QingyunYang/apicloud-webpack-vue-starter)

## 使用vue-cli创建项目

### 安装vue脚手架

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 创建项目

```
vue create my-project
# OR
vue ui
```
### 项目目录如下

```bash
|-- .gitignore
|-- babel.config.js
|-- package.json
|-- README.md
|-- yarn.lock
|-- public
|   |-- favicon.ico
|   |-- index.html
|-- src
    |-- App.vue
    |-- main.js
    |-- assets
    |   |-- logo.png
    |-- components
        |-- HelloWorld.vue

```

## 改造为多页面应用

在这里，我们需要对比一下，使用多页面的优缺点：

优点：使用apicloud提供的方法跳转页面，比单页面的路由跳转页面，看起来更像原生，用户体验更好。

缺点：页面之间无法使用vuex状态库。

#### 项目根目录创建vue.config.js

```javascript
const path = require('path')
const glob = require('glob')

const pages = {}
glob.sync('./src/pages/**/app.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.js')[0]
  pages[chunk] = {
    entry: path,
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
```

创建pages文件夹，添加页面

```bash
pages
|-- entry
    |-- app.js
    |-- app.vue

```

pages/entry/app.js:

```javascript
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

```

pages/entry/app.vue

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

### 执行编译构建

```bash
yarn build
```

构建结果：

```bash
|-- dist
    |-- entry.html
    |-- favicon.ico
    |-- static
        |-- js
            |-- chunk-vendors.cf8a90fa.js
            |-- chunk-vendors.cf8a90fa.js.map
            |-- entry.9940a6f5.js
            |-- entry.9940a6f5.js.map

```

