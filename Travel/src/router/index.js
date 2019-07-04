import Vue from 'vue'
import Router from 'vue-router' 
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // 当用户访问根路径的时候，我给用户展示一个Home组件
    }
  ]
})
