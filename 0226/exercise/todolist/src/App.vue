<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List v-if="todoList.length" :todoList="todoList" :deleteTodo="deleteTodo" :upDateTodo="upDateTodo"/>
      <Footer :todoList="todoList" :clearTodo="clearTodo" :allTodo="allTodo" :isDoneAll="isDoneAll"/>
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
  data(){
    const todoList=JSON.parse(localStorage.getItem("todoList"))
    return {
      // todoList:[
      //   {
      //   id:0,
      //   todoName:"吃饭",
      //   isDone:true
      //   },
      //   {
      //     id:1,
      //    todoName:"睡觉",
      //     isDone:false
      //   }
      // ],
      todoList
    }
  },
  methods:{
    addTodo(todoName){
        this.todoList.push({todoName,id:Date.now(),isDone:false})
    },
    upDateTodo(id){
      const todo=this.todoList.find(item=>{
        return item.id===id
      })
      todo.isDone=!todo.isDone
    },
    deleteTodo(todoId){
        this.todoList=this.todoList.filter(item=>{
          return item.id!==todoId
        })
    },
    clearTodo(){
      const isDoneList=this.todoList.filter(item=>{
        return item.isDone
      })
      if(isDoneList.length===0)return
      if(confirm("您确定要删除吗")){
        this.todoList=this.todoList.filter(item=>{
          return !item.isDone
        })
    }
  },
      },
  computed:{
    allTodo(){
      return this.todoList.length
    },
    isDoneAll(){
      const isDoneList=this.todoList.filter(item=>{
        return item.isDone
      })
      return isDoneList.length
    }
  },
  watch:{
    todoList(value){
      localStorage.setItem("todoList",JSON.stringify(value))
    }
  }
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