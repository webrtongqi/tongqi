import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import base from '../static/js/base.js'  
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.use(base); 

var app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
