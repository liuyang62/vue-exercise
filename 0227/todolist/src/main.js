import Vue from "vue"
import App from "./App.vue"
import "./assets/index.css"

Vue.prototype.$globalEventBus=new Vue()
new Vue({
  render:h=>h(App)
}).$mount("#root")