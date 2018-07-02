import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home'
import Foo from '@/views/Foo'

Vue.use(VueRouter)
// 路由大管家
const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    
    // 管理所有的映射
    routes: [
        {
          path: '/',
          component: Home,
        },
        {
          path: '/foo', 
          component: Foo,
        },
      ]
    
  })


export default router
  