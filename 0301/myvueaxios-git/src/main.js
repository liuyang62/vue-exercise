import Vue from "vue"
import App from "./App.vue"
new Vue({
  beforeCreate(){
    Vue.prototype.$globalEventBus=this
  },
  render:h=>h(App) 
}).$mount("#app")
