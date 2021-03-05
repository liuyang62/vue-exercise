<template>
<div>
  <p v-if="isLoading">loading...</p>
  <p v-else>popular content  <a target="_blank" :href="html_url">{{name}}</a> </p>
</div>
</template>

<script>
import axios from "axios"
export default {
   name:"Home",
   data(){
     return{
       html_url:"",
       name:"",
       isLoading:false
     }
   },
   mounted(){ 
      this.isLoading=true
      axios.get("https://api.github.com/search/repositories?q=v&sort=stars").then((response)=>{
       this.isLoading=false 
       const {name,html_url}=response.data.items[0]
       this.name=name;
       this.html_url=html_url
     }).catch((error=>{
        if(error.message==="Network Error"){
          alert("网络未连接")
        }
     }))
   },
}
</script>

<style>

</style>