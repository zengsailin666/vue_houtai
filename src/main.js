import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// 应用公共样式
import '@/styles/index.less'
// 引入路由
import router from '@/router/index.js'
// 使用饿了么uim
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  // 注入
  router,
  render: h => h(App)
}).$mount('#app')
