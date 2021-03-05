import vue from "vue"
import Vuex from "vuex"
vue.use(Vuex)
import state from "./state"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations
})