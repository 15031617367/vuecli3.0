<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div> 接受car组件中的传参:{{brotherData}}</div>

    <div>
      <h3>Vuex操作</h3>
      <h3>
        <!-- 基础vuex测试：{{$store.state.count}}{{$store.getters.money}} -->
        映射vuex测试：{{count}}{{money}}
      </h3>
    </div>



  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      brotherData:'',
    }
  },
  mounted(){
    this.bus.$on("brother",(msg)=>{
        this.brotherData = msg
    })
  },
  methods:{},
  computed:{
    ...mapState(['count']),
    ...mapGetters(['money'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
