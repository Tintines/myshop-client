// 入口文件
import Vue from 'vue'
import App from './App.vue'
// 引入适配文件
import 'lib-flexible/flexible'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

// console.log('zhaojing')
new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
