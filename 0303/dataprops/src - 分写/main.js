import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
Vue.config.productionTip = false
//需要引入并使用store，同vue-router类似
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
