// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myaxios from '@/assets/js/myaxios.js'
// 但是不友好
// Vue.prototype.$myHttp = axios;
Vue.use(myaxios);

// 引入并使用 elementUI 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue插件
Vue.use(ElementUI);

import './assets/css/style.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
