import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// cookies
import Cookie from 'js-cookie'
// ajax
import Axios from './api/axios.config'
// scroll
import BScroll from 'better-scroll'
// 动画插件
import Animate from './assets/css/animate.css'
// 重置css
import './assets/css/reset.css'
// touch 插件
import Touch from 'vue-directive-touch'
// ui库
import {
  Dialog,
  Toast,
  Icon,
  Swipe,
  SwipeItem
} from 'vant';
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';


require('./../mock/')


router.beforeEach((to, from, next) => {
  if (to.meta.Auth) {
    const user = Cookie.get('user')
    if (!user) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
Vue.config.productionTip = false
Vue
  .use(Touch)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem);
Vue.prototype.$Bscroll = BScroll
Vue.prototype.$Cookie = Cookie;
Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')