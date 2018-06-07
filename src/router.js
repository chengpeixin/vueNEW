import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import About from './views/About.vue'
import Is404 from './public/is404.vue'
import User from './views/user/user.vue'
import Login from './views/login/login.vue'
import Cart from './views/cart/cart.vue'
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
      component: About,
      meta: {
        Auth: true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        Auth: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        Auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'is404',
      component: Is404
    }
  ]
})