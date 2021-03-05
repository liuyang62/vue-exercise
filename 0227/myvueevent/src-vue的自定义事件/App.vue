<template>
<div>
  <p>{{num}}</p>
  <Home @add="add"/>
  <Ref ref="sub"/>
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
    this.$refs.sub.$on("sub",this.sub)
  },
  beforeDestroy(){
    this.$refs.sub.off("sub",this.sub)
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
    sub(){
      this.num--
    }
  }
}
</script>

<style>

</style>