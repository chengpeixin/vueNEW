import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 滚动插件
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
  Icon
} from 'vant';
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';
Vue.config.productionTip = false
Vue
  .use(Touch)
  .use(Icon);
Vue.prototype.$Bscroll = BScroll

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')