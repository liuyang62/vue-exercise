<template>
  <button @click="add">Home</button>
</template>

<script>
export default {
   name:"Home",
   methods:{
       add(){
         //Home是用于传输数据的，需要出发事件
        this.$globalEventBus.$emit("add")
       }
   },
}
</script>

<style>

</style>