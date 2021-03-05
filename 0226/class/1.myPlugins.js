//定义组件的方法1：对象组件
// const myPlugins={
    
// };
// myPlugins.install=function(Vue){
//     //全局组件
//     Vue.globalMethod=function(){
//         console.log("globalMethod()")
//     }
//     //局部组件，给实例化对象添加方法,添加的方法必须以$命名
//     Vue.prototype.$localMethod=function(){
//         console.log("localMethod()")
//     },
//     Vue.directive("upper-case",function(el,binding){
//         el.textContent=binding.value.toUpperCase()
//     })
// }
//定义组件的方法2：函数组件
function myPlugins(Vue){
    //全局组件
    Vue.globalMethod=function(){
        console.log("globalMethod()")
    }
    //局部组件，给实例化对象添加方法
    Vue.prototype.$localMethod=function(){
        console.log("localMethod()")
    },
    Vue.directive("upper-case",function(el,binding){
        el.textContent=binding.value.toUpperCase()
    })
    Vue.filter("formatDate",function(date,style){
        return dayjs(date).format(style)
    })

}