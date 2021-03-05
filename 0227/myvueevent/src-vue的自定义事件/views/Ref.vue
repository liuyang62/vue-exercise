<template>
  <button @click="sub">Ref</button>
</template>

<script>
export default {
   name:"Ref",
   methods:{
       sub(){
           this.$emit("sub")
       }
   },
   mounted(){
       console.log(this.emit)
   }
}
</script>

<style>

</style>