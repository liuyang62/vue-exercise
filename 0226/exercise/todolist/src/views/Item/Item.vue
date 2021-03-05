<template>
    <li @mouseenter="isShow=true" @mouseleave="isShow=false">
          <label>
            <input type="checkbox"  v-model="isDone"/>
            <span :class="{'done':item.isDone}">{{item.todoName}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteTodoHandle" v-show="isShow">删除</button>
    </li>  
</template>
<script>
export default {
    name:"List",
    props:["item","deleteTodo","upDateTodo"],
    methods:{
        deleteTodoHandle(){
            if(confirm("您确定要删除吗")){
                this.deleteTodo(this.item.id)
            }
        }
    },
    data(){
      return {
        isShow:false
      }
    },
    computed:{
       isDone:{
         get(){
           return this.item.isDone
         },
         set(){
           this.upDateTodo(this.item.id)
         }
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