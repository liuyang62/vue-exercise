<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="allCheck"/>
        </label>
        <span>
          <span>已完成{{isdonecount}}</span>/全部{{total}}
        </span>
        <button class="btn btn-danger" @click="cleartodoHandle">清除已完成任务</button>
      </div>
</template>
<script>
import {mapGetters,mapState,mapMutations} from "vuex"
export default {
    name:"Footer",
    computed:{
      ...mapState(["todoList"]),
      ...mapGetters(["total","isdonecount"]),
      allCheck:{
        get(){
          if(this.todoList.length===0)return false
          // return this.todoList.every(item=>{
          //   return item.isDone
          // })
          return this.total===this.isdonecount
         },
         set(value){
           this.ALL_TODO(value)
         }
      }
    },
    methods:{
      ...mapMutations(["ALL_TODO","CLEAR_TODO"]),
      cleartodoHandle(){
        if(confirm("您确定要删除吗")){
           this.CLEAR_TODO()
        } 
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