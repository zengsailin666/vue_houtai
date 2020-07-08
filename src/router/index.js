// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入登录组件
import Login from '@/views/login'
import Home from '@/views/home'

// 使用
Vue.use(VueRouter)
// 创建路由对象
var router = new VueRouter({
  routes: [{
    name: 'default',
    path: '/',
    redirect: {
      name: 'login'
    }
  }, {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  }]
})
// 暴露登录组件
export default router
