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
import {mapMutations} from "vuex"
export default {
    name:"List",
    props:["todo"],
    computed:{
      checktodo:{
        get(){
          return this.todo.isDone
        },
        set(){
          this.UPDATE_TODO(this.todo.id)
        }
      }
    },
    data(){
      return {
        flag:false
      }
    },
    methods:{
      ...mapMutations(["UPDATE_TODO","DELETE_TODO"]),
      deleteTodoHandle(){
        if(confirm("您确定要删除吗")){
          this.DELETE_TODO(this.todo.id)
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