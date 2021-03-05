<template>
  <div>
    <div class="container">
      <Header />
      <List />
    </div>
  </div>
</template>
<script>
import Header from "./views/Header";
import List from "./views/List";
export default {
  name: "App",
  components: {
    Header,
    List,
  },
};
</script>

<style>
</style>