/* 入口文件 */
import Vue from 'vue'
// 引入适配文件
import 'lib-flexible'

import App from './App.vue'
import Header from './components/Header/Header.vue'
// 引入路由器
import router from './router'
// import store from './store'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)

// console.log('zhaojing')
new Vue({
  router, // 使用router，所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
  // store,
  render: h => h(App)
}).$mount('#app')
