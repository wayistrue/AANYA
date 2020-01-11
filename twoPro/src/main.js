import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
Vue.use(MintUI)

import "./meishifont/iconfont.css"
import home from "./sanya/Home"

import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:5656"
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;

Vue.component("home",home);

new Vue({
  router,
  render: h => h(App),  //App App.vue根组件
  // store               
}).$mount('#app')
