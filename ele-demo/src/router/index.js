import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const home = () => import('@/pages/home')//将页面封装起来，需要页面的时候在加载  lazyload懒加载
const login = () => import('@/pages/login')
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')
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
    },
    {
      path: '/city/:cityid',//动态路由，参数，在生命周期里拿到
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
