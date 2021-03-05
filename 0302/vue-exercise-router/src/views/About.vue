<template>
  <div>
      <p>about...</p>
      <ul>
          <li>
               <router-link to="/about/message">message</router-link>
          </li>
          <li>
              <router-link to="/about/news">news</router-link>
          </li>     
      </ul> 
      <div>
           <router-view></router-view>
      </div> 
  </div>
</template>

<script>
export default {
    name:"About",
    beforeCreate(){
        console.log("beforeCreate()")
    },
    created(){
        console.log("created()")
    },
    beforeMount(){
        console.log("beforeMount()")
    },
    mounted(){
        console.log("mounted()")
    },
    activated(){
        console.log("activated()")
    },
    deactivated(){
        console.log("detactivated()")
    }
}
</script>

<style>

</style>