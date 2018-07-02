# Vue  
    用来开发SPA，路由接管一切

页面/views 跟  route url 相匹配

router-link 取代a  VueRouter提供的组件
Vue.use(VueRouter提供的组件)  全局都可以引用

route 前端路由  区分ngnix apache等配置的后端路由
前端路由解决的是SPA
实现的是 url切换 页面不换
history API pushState() onPopState() 移除之前的组件，更新新的组件
它的格式和传统的后端url是相同的 /foo
### 缺点：
1. 兼容性//history ie9
2. hash模式//ie8 在url后面加描点ie8就不会刷新页面了，同样可以得到事件 兼容性更好
在同一个页面，不同的状态(对应URl)
