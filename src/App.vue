<template>
  <div id="app">
    <hello-world></hello-world>
    <cart :name="name" :data="data" @resChild="chilData"></cart>
    <parent :data="value"></parent>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Cart from "./components/cart"
import Parent from "./components/parent"

export default {
  name: 'app',
  components: {
    HelloWorld,
    Cart,
    Parent
  },
  data(){
    return{
      name:"hello",
      data:"child",
      value:'hello'
    }
  },
  methods:{
    chilData(value){
      alert(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
