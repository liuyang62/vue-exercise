<template>
<div>
  <!-- <h3>count is {{$store.state.count}},num is{{$store.state.num}}</h3> -->
  <h3>count is {{$store.state.count}} times ,is{{$store.getters.type}} </h3>
  <button @click="increaseHandle">+</button>
  <button @click="decreasementHandle">—</button>
  <button @click="increasementoddHandle">Increasement if odd</button>
  <button @click="asyncincreaseHandle">Increasement async</button>
</div> 
</template>
<script>
export default {
  name:"App",
  // mounted(){
  //  console.log(this.$store.getters)
  // },
  methods:{
    increaseHandle(){
      //通过this.$store可以读取和修改数据，dispatch中传入action对象中定义的函数名
      this.$store.dispatch("increase")
    },
    decreasementHandle(){
      this.$store.dispatch("decrease")
    },
    increasementoddHandle(){
      this.$store.dispatch("increaseodd")
    },
    asyncincreaseHandle(){
      this.$store.dispatch("asyncincrease")
    }
    
  }
}
</script>

<style>

</style>