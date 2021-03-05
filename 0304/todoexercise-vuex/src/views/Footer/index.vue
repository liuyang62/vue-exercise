<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="allcheck"/>
        </label>
        <span>
          <span>已完成{{complete}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearHandle">清除已完成任务</button>
      </div>
</template>

<script>
import {mapGetters,mapState,mapMutations}from "vuex"
export default {
  name:"Footer",
  methods:{
    ...mapMutations(["SELECT_TODO","CLEAR_TODO"]),
    clearHandle(){
      this.CLEAR_TODO()
    }
  },
  computed:{
    ...mapState(["todoList"]),
    ...mapGetters(["total","complete"]),
    allcheck:{
      get(){
        if(this.todoList.length===0)return false
        return this.total===this.complete
      },
      set(value){
        this.SELECT_TODO(value)
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