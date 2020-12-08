/**
 * 向外暴露路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入分开的路由数组文件
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  // 使用history模式：路由路径没有#
  mode: 'history',

  // 注册项目中的所有路由
  // 将路由数组分开写
  routes
})
