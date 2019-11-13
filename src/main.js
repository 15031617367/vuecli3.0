import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



//事件总线方式进行兄弟组件之间传值
Vue.prototype.bus = new Vue()

//引入axios
import axios from "axios"

import './plugins/element.js'
import router from './router'
import store from './store'
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
