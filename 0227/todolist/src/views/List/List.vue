<template>
     <ul class="todo-main">
        <Item v-for="todo in todoList" :key="todo.id" :todo="todo" />
      </ul>
</template>
<script> 
import Item from "../Item/Item"
export default {
    name:"List",
    data(){
      return {
        todoList:[
        {
        id:0,
        todoName:"吃饭",
        isDone:true
        },
        {
          id:1,
         todoName:"睡觉",
          isDone:false
        }
      ]
      } 
    },
    mounted(){
      this.$globalEventBus.$on("addTodo",this.addTodoHandle)
      this.$globalEventBus.$on("deleteTodo",this.deleteTodoHandle)
    },
    beforeDestroy(){
      this.$globalEventBus.$off("addTodo",this.addTodoHandle)
      this.$globalEventBus.$off("deleteTodo",this.deleteTodoHandle)
      
    },
    components:{
        Item
    },
    methods:{
      addTodoHandle(todoName){
        this.todoList.unshift({todoName,id:Date.now(),isDone:false})
      },
      deleteTodoHandle(todoId){
        if(confirm("您确定要删除吗？")){
          this.todoList=this.todoList.filter(item=>{
          return item.id!==todoId
        })
        } 
      }, 
    },
    
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