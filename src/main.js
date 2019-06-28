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
// 注册一个导航守卫
router.beforeEach((to, from, next) => {
  // to()页面从哪跳过来的
  // from() 页面要跳到哪去
  // next()页面跳转,不调用就不会跳
  // 1.判断用户访问的是不是登录页面,如果是登录页面,直接放行
  if (to.path === '/login') {
    next()
    return
  }
  //   2.如果访问的是其他页面,判断用户是否进行了登录
  //     2.1 如果登录了,那就直接放行
  //     2.2 如果没有登录,那就跳转到登录页
  // })
  if (localStorage.getItem('token')) {
    next()
  } else {
    router.push('/login')
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
