import Vue from "vue"
import App from "./App.vue"
//两种方式创建全局事件总线
//方式一：
// Vue.prototype.$globalEventBus=new Vue()
// new Vue({
//   render:h=>h(App)
// }).$mount("#app")
//方式二：
new Vue({
  beforeCreate(){
    Vue.prototype.$globalEventBus=this
  },
  render:h=>h(App) 
}).$mount("#app")
/*
1.vue的实例
vm=new Vue()
vm是vue的实例化对象，它的__proto__指向vue的prototype，
vm.__proto__=vue.prototype
2.组件的实例
组件的实例化对象的__proto__指向组件的prototype
组件的原型对象的__proto__指向vue的prototype
vc.__proto__=vc.prototype
vc.__proto__.__proto__=vue.prototype
* */