<template>
<div>
  <p>{{num}}</p>
  <Home />
  <Ref />
</div>
  
</template>

<script>
import Home from "./views/Home"
 import Ref from "./views/Ref"
export default {
  name:"App",
  components:{
    Home,
    Ref
  },
  mounted(){
    //App页面是展示数据（接收数据的）的，
    this.$globalEventBus.$on("add",this.add)
    this.$globalEventBus.$on("sub",this.sub)
  },
  data(){
    return {
      num:0
    }
  },
  methods:{
    add(){
      this.num++
    },
    sub(b){
      this.num=this.num-b
    }
  }
}
</script>

<style>

</style>