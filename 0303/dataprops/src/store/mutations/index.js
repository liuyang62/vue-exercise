const mutations= {
  INCREASEMENT(state, data) {
    state.count += data;
  },
  DECREASEMENT(state,data){
    state.count -= data;
  },
}
export default mutations