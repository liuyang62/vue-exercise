import Vue from "vue"
import App from "./App.vue"
import "./assets/index.css"
import store from "./store"
Vue.prototype.$globalEventBus=new Vue()
new Vue({
  render:h=>h(App),
  store
}).$mount("#root")