import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page1 from "./views/page1.vue"
import Page2 from "./views/page2.vue"

//插件挂在
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
    {
      path:'/page1',
      component:Page1
    },
    {
      path:'/page2',
      component:Page2
    }
  ]
})
