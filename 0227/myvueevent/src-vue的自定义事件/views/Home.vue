<template>
  <button @click="add">Home</button>
</template>

<script>
export default {
   name:"Home",
   methods:{
       add(){
        //    this.$listeners.add()
        this.$emit("add")
       }
   },
}
</script>

<style>

</style>