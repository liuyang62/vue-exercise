<template>
  <div>
    <ul>
      <li><router-link to="/home">home</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name:"App"
}
</script>

<style>

</style>