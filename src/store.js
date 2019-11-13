import Vue from 'vue'
import Vuex from 'vuex'

//挂在的插件
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //共享数据
    count:1
  },
  mutations: {
    increase(state){
      state.count += 1 
    } 
  },
  getters:{ //对state中的数据进行加工处理
      money:state=>{
        return state.count + "$"
      }
  },
  actions: { //有异步操作使用
    increaseAsync({commit,state},payload){
      setTimeout(()=>{
        commit("increase")
      },1000)
    }
    
  }
})
