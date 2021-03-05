<template>
<div>
  <p>App组件</p>
  <A>
     <header> header</header>
     <footer> footer</footer>
  </A>
  <B>
    <template v-slot:header>
       <header> header</header>
    </template>
    <template #footer>
      <footer> footer</footer>
    </template>
  </B>
  <C>
    <!-- 接受到的数据是一个对象，通过{}对对象进行结构 -->
    <template v-slot:header="{count}">
       <header> {{count}}</header>
    </template>
    <template #footer="{msg}">
      <footer> {{msg}}</footer>
    </template>
  </C>
</div>
  
</template>

<script>
import A from "./views/A"
import B from "./views/B"
import C from "./views/C"
export default {
  name:"App",
  components:{
    A,
    B,
    C
  },
}
</script>

<style>

</style>