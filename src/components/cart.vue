<template>
    <div>
        子组件测试  {{name}} {{data}}
        <button @click="testP">cli3子组件传值</button>
        <button @click="brotherBtn">事件总线模式向兄弟组件传值</button>
        <button @click="testcomputed">测试计算属性</button>
        <h1>{{number}}</h1>

        <div>
            <div>vuex操作测试</div>
            <button @click="inc">increase</button>
            <button @click="incAc">incAsync</button>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import {mapState,mapgetters,mapMutations,mapActions} from "vuex"
export default {
    props: ["name","data"],
    data() {
        return {
            num:1,
        };
    },
    computed: {
        number(){
            // 当num有任何变动时number会自动更新
            return this.num += 1
        },
        //vuex映射

    },
    created() {

    },
    async mounted() {
        let data = await axios.get("/api/goods");
        console.log(data)
    },
    watch: {

    },
    methods: {
        testP(){
            this.$emit("resChild","hello word")
        },
        brotherBtn(){
            this.bus.$emit("brother","hello brother")
        },
        testcomputed(){
            this.num +=1
        },
        ...mapMutations(['increase']),
        ...mapActions(['increaseAsync']),
        inc(){
            this.increase()
            // this.$store.commit("increase")
        },
        incAc(){
            this.increaseAsync()
            // this.$store.dispatch("increaseAsync")
        }
    },
    components: {},
};
</script>

<style scoped lang="scss">

</style>
