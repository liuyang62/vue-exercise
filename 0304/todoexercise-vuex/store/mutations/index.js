export default{
  ADD_TODO(state,todoName){
      state.todoList.push({todoName,id:Date.now(),isDone:false})
  },
  UPDATE_TODO(state,id){
    const todo=state.todoList.find(item=>item.id===id)
    todo.isDone=!todo.isDone
  },
  DELETE_TODO(state,id){
    state.todoList=state.todoList.filter(item=>item.id!=id)
  },
  SELECT_TODO(state,value){
    state.todoList.forEach(item=>{
      item.isDone=value
    })
  },
  CLEAR_TODO(state){
    state.todoList=state.todoList.filter(item=>!item.isDone)
  }
}