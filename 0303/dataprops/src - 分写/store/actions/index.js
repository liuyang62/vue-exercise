const actions={
  
		increase(store) {
			store.commit('INCREASEMENT', 1);
		},
    decrease(store){
      store.commit("DECREASEMENT",1)
    },
    increaseodd(store){
      if(store.state.count%2===0)return ;
      store.commit('INCREASEMENT', 1);
    },
    asyncincrease({commit}){
      setTimeout(()=>{
        commit('INCREASEMENT', 1);
      },2000)
    }
}
export default actions