<template>
     <ul class="todo-main">
        <Item v-for="item in todoList" :key="item.id" :item="item" :deleteTodo="deleteTodo" :upDateTodo="upDateTodo"/>
      </ul>
</template>
<script> 
import Item from "../Item/Item"
export default {
    name:"List",
    components:{
        Item
    },
    props:["todoList","deleteTodo","upDateTodo"]
}
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>