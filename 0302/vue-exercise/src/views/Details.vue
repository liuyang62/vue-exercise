<template>
  <div>
    <div>details</div>
    <ul>
      <li v-for="(value,key) in detail" :key="key">{{value}}--{{key}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"Details",
  data(){
    return {
      details:[ ],
      detail:{}
    }
  },
  props:['name',"age"],
  mounted(){
    setTimeout(()=>{
      this.details=[
        { id: 1, title:"石榴姐",context: "石榴姐很美" },
        { id: 2, title:"龅牙妹",context: "龅牙妹很有味道" }]
    },1000)
    console.log(this.$route.query)
    // console.log(this.name,this.age)
  },
  watch:{
    $route:{
      handler(newValue){
        this.detail=this.details.find(item=>{
          return item.title===newValue.params.title}
          )
      
      },
      immediate:true
    }
  }
}
</script>

<style>

</style>