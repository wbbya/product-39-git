import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui的css文件
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'
// 安装element
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
