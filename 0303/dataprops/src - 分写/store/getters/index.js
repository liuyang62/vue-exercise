const getters={
  type(value){
    return (value.count&1)===0?"偶数":"奇数"
  }
}
export default getters