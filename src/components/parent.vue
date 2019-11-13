<template>
    <div>
        <h3>props测试</h3>
        <div>{{data}}</div>
        <child-par>
          <span style="color:blue">hello slot</span>
          <span slot="header">命名槽口</span>
        </child-par>
        <button @click="providetest">prvide测试</button>
    </div>
</template>

<script>
import childPar from "./childPar"
export default {
  components: {
    childPar,
  },
  //注入测试
  provide(){
    return {
      map_nodeObj:{
        map_node:this.obj
      }
    }
  },
  props: {
      data:{
          type:String,
          default:'默认值',
      }
  },
  data() {
    return {
      obj:"hello provide"
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$on("sendComFun",function(msg){
      console.log(msg)
    })
  },
  watch: {},
  methods: {
    providetest(){
      this.obj = "modify provide"
    }
  },
 
};
</script>

<style scoped>
</style>
