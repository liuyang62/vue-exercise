<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List />
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from "./views/Header/index"
import List from "./views/List/List"
import Footer from "./views/Footer/Footer"
export default {
  components:{
    Header,
    List,
    Footer
  },
}
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>