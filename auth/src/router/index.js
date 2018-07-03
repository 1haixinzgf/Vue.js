import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth.js'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
Vue.use(Router)

const requireAuth = (to, from, next) => {// : (to, from, next) => {//路由上的钩子函数   to要去的地方   from从哪里来   next接下来怎么走}
  

console.log(to) 
  // 用户有登录权限？
  if (!auth.loggedIn()) {//auth 授权模块
    const newLocal = next({
      path: '/login',
      query: {
        redirect: to.fullPath,
      }
    });
  }
  next();
}
const isLoginnn = (to, from, next) => {
  if (!auth.loggedIn()) {//auth 授权模块
    const newLocal = next({
      path: '/',
      query: {
        redirect: to.fullPath,
      }
    });
  }
  next();
}
export default new Router({ 
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth  
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: isLoginnn
    },
    {
      path: '/logout',
      component: Logout
    }
  ]
})
