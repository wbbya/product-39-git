import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import home from './views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/home',
      component: home
    }
  ]
})
