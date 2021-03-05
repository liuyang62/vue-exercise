export default{
  total(state){
    return state.todoList.length
  },
  complete(state){
    return state.todoList.reduce((p,c)=>{
      return p+= c.isDone?1:0
    },0)
}
}