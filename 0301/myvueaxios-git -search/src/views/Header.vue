<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchName"
      />
      <button @click="searchNameHandle">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    searchNameHandle() {
      this.$globalEventBus.$emit("searchName", this.searchName);
    },
  },
};
</script>

<style>
</style>