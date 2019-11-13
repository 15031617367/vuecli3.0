<template>
    <div>
        父级子组件
        <slot></slot>
        <slot name="header"></slot>

        <div class="separator">provide/inject测试</div>
        <div>   
            <div>{{inject_data}}</div>
        </div>

    </div>
</template>

<script>
export default {
    inject:{
        map_nodeObj:{
            default:()=>{
                return {map_node:"0"}
            }
        }
    },
    props: {

    },
    data() {
        return {
            inject_data:""
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.inject_data = this.map_nodeObj.map_node
    },
    watch: {

    },
    methods: {
    },
    components: {

    },
};
</script>

<style scoped>
.separator{
    width: 100%;
    height: 50px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #ccc;
    line-height: 50px;

}
</style>
