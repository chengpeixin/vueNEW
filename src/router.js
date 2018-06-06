import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import About from './views/About.vue'
import Is404 from './public/is404.vue'
import User from './views/user/user.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '*',
      name: 'is404',
      component: Is404
    }
  ]
})