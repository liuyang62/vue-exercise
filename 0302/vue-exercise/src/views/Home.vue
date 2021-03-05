<template>
  <div>
      <div>
        <div>home</div>
        <ul>
          <li><router-link to="/home/message">message</router-link></li>
          <li><router-link to="/home/news">news</router-link></li>
        </ul>
        <div><router-view></router-view></div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Home"
}
</script>

<style>

</style>