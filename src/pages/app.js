// import Vue from 'vue'
// import eruda from 'eruda'
// import VueRouter from 'vue-router'
// import store from '@/store'
// import { isH5, isLoader, isNative, isChrome } from '@/utils'
import { mount } from '@/utils'
import App from './app.vue'
import Home from './home.vue'
import Mine from './mine'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/mine', name: 'mine', component: Mine },
]

mount(App, routes);
