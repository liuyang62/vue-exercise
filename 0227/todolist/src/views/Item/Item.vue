<template>
    <li @mouseenter="flag=true" @mouseleave="flag=false">
          <label>
            <input type="checkbox" v-model="checktodo"/>
            <span>{{todo.todoName}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteTodoHandle" v-show="flag">删除</button>
    </li>  
</template>
<script>
export default {
    name:"List",
    props:["todo"],
    data(){
      return {
        flag:false
      }
    },
    computed:{
     checktodo:{
       get(){
         return this.todo.isDone
       },
       set(value){
        this.todo.isDone=value
      }
     }
   },
   methods:{
     deleteTodoHandle(){
      this.$globalEventBus.$emit("deleteTodo",this.todo.id)
     }
   }
}
</script>
<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

span.done{
    text-decoration: line-through;
    color:#666;
}
</style>