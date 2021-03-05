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
import {mapState,mapActions,mapMutations,mapGetters}from "vuex"
export default {
  name:"App",
  //计算属性中映射定义的状态数据以及getters中返回的计算数据
  computed:{
    ...mapState(["count"]),
    ...mapGetters(["type"])
  },
  //methods中映射定义的actions和mutations函数，返回的是一个对象，通过扩展运算符展开得到函数
  methods:{
    ...mapActions(["increaseodd","asyncincrease"]),
    ...mapMutations(["DECREASEMENT","INCREASEMENT"]),
    increaseHandle(){
      this.INCREASEMENT(1)
    },
    decreasementHandle(){
      this.DECREASEMENT(1)
    },
    increasementoddHandle(){
      this.increaseodd(1)
    },
    asyncincreaseHandle(){
      this.asyncincrease(1)
    }
    
  }
}
</script>

<style>

</style>