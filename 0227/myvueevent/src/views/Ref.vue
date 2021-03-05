<template>
  <button @click="decrease" >Ref</button>
</template>

<script>
export default {
   name:"Ref",
   methods:{
       decrease(){
         //通过点击事件，获取到全局事件对象上绑定的方法，通过方法，传递需要的数据
           this.$globalEventBus.$emit("sub",5)
       }
       
   }
  
}
</script>

<style>

</style>