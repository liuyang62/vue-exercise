<template>
    <div>
        <p clsss="title" @click="clickHandle">{{num}}</p>
        <Home />
    </div>
</template>
<script>
import Home from "./views/Home/Home"
    export default{
        name:"App",
        data(){
            return {
                num:0
            }
        },
        methods:{
            clickHandle(){
                this.num++
            }
        },
        components:{
            Home
        }
    }
</script>
<style lang="less">
    .title{
        color:red;
        font-size:20px;
    }
</style>