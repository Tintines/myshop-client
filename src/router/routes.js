/**
 * 所有的路由配置数组
 */

// 引入模块
import MSite from '@/pages/MSite/MSite.vue'
import Search from '@/pages/Search/Search.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Login from '@/pages/Login/Login.vue' // 引入登陆注册路由

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {

    }
  },
  {
    path: '/search',
    component: Search,
    meta: {

    }
  },
  {
    path: '/order',
    component: Order,
    meta: {

    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {

    }
  },
  {
    path: '/login',
    component: Login,
    meta: {

    }
  },
  {
    path: '/',
    redirect: '/msite'
  }
]
