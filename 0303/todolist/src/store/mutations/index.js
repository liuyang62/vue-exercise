export default{
  UPDATE_TODO(state,id){
    const re=state.todoList.find(item=>item.id===id)
    re.isDone=!re.isDone
  },
  DELETE_TODO(state,id){
    state.todoList=state.todoList.filter(item=>item.id!==id)
  },
  ADD_TODO(state,todoName){
    state.todoList.unshift({todoName,id:Date.now(),isDone:false})
  },
  ALL_TODO(state,value){
    state.todoList.map(item=>{
      item.isDone=value
    })
  },
  CLEAR_TODO(state){
    state.todoList=state.todoList.filter(item=>!item.isDone)
  }
}