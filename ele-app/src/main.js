// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import goods from '@/views/goods'
import ratings from '@/views/ratings'
import seller from '@/views/seller'
import '@/common/stylus/index.styl'
import store from './store'
import { currency } from './currency'

Vue.filter('currency', currency)
Vue.config.productionTip = false
// Vue.use(VueRouter)
//   const routes = [{
//     path: '/',
//     component: goods,
//   },
//   {
//     path: '/goods',
//     component: goods,
//   },
//   {
//     path: '/ratings',
//     component: ratings,
//   },
//   {
//     path: '/seller',
//     component: seller
//   }
// ];

// const router = new VueRouter({
//   linkActiveClass: 'active',
//   routes
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  // router,
  store,
  template: '<App/>'
})
