const getters={
  //接受的vue为就是定义的state的值
  type(state){
    return (state.count&1)===0?"偶数":"奇数"
  }
}
export default getters