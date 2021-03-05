import vue from 'vue';
import VueX from 'vuex';
//引入并使用vuex插件
vue.use(VueX);
/*
vuex的Store上创建三个对象分别是state，actions，mutations
*/
export default new VueX.Store({
	//定义初始状态数据
	state: {
		count: 0,
	},
  getters:{
    type(value){
      return (value.count&1)===0?"偶数":"奇数"
    }
  },
	//用来定义间接修改数据的对象actions，并在对象中定义间接修改数据的函数，传入store对象，调用store对象的commit方法，传入要直接修改数据的函数名，同时传入修改的参数
	actions: {
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
    
	},
  //用来定义直接修改数据的对象mutations，并在对象中定义函数来直接修改数据，函数实参接收state数据，（原始数据）和修改的参数，state上面会有定义的数据，对数据直接修改
	mutations: {
		INCREASEMENT(state, data) {
			state.count += data;
		},
    DECREASEMENT(state,data){
      state.count -= data;
    },
	}
});
