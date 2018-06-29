// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// webpack 让css 也可以像js一样被引入，让一切静态资源皆可被引入
import "element-ui/lib/theme-chalk/index.css"
import './mock'
Vue.config.productionTip = false;
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
