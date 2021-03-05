<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoName" @keydown.enter="addtodoHandle"/>
  </div>
</template>

<script>
import {mapState,mapMutations}from "vuex"
export default {
  name: "Header",
  computed:{
    ...mapState(["todoList"])
  },
  data(){
    return {
      todoName:""
    }
  },
  methods:{
    ...mapMutations(["ADD_TODO"]),
    addtodoHandle(){
      if(this.todoName.trim()==="")
      return alert("輸入的內容不能為空")
      this.ADD_TODO(this.todoName)
      this.todoName=""
    }
  }
};
</script>

<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>