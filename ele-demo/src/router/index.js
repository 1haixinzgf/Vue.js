import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const home = () => import('@/pages/home')//将页面封装起来，需要页面的时候在加载  lazyload
const login = () => import('@/pages/login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        keepalive: true
      }
    },
    {
      path: '/login',
      component: login,
    }
  ]
})
