<template>

<div>
  <h1>Vue Router</h1>
  <div>
    <ul>
     <li> <router-link to="/home">home</router-link></li>
     <li> <router-link to="/about">about</router-link></li>
    </ul>
  </div>
  <div><keep-alive include="Home,About"><router-view /></keep-alive></div>
</div>  
</template>

<script>
export default {
  name:"App",
}
</script>

<style>

</style>
