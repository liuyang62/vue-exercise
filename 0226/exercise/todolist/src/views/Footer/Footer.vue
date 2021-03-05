<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="result"/>
        </label>
        <span>
          <span>已完成{{isDoneAll}}</span>/全部{{allTodo}}
        </span>
        <button class="btn btn-danger" @click="clearTodoHandle">清除已完成任务</button>
      </div>
</template>
<script>
export default {
    name:"Footer",
    props:["todoList","clearTodo","allTodo","isDoneAll"],
    computed:{
      result:{
      get(){
        let re=this.todoList.every(item=>{
            return item.isDone
          })
        if(this.todoList.length===0){
          re=false;
        }
          return re;
      },
       set(value){
           this.todoList.forEach(item=>{
             item.isDone=value
           })
       }   
          }
      },
     methods:{
        clearTodoHandle(){
        this.clearTodo()
         }  
          }
      }    
</script>
<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

   </style>