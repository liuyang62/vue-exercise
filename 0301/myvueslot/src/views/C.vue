<template>
<div>
    <p>C组件</p>
    <slot name=header :count="count"></slot>
     <slot name=footer :msg="msg"></slot>
</div>
 
</template>

<script>
export default {
   name:"C",
   data(){
       return {
           count:0,
           msg:"hello"
       }
   }
}
</script>

<style>

</style>