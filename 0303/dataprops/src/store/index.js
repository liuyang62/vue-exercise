import vue from 'vue';
import VueX from 'vuex';
import actions from "../store/actions"
import state from "../store/state"
import mutations from "../store/mutations"
import getters from "../store/getters"
//引入并使用vuex插件
vue.use(VueX);
/*
vuex的Store上创建三个对象分别是state，actions，mutations
*/
export default new VueX.Store({
  actions,state,mutations,getters
	
});
