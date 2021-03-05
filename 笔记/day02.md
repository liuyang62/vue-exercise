## 总结所有指令
  v-text : 更新元素的 textContent
  v-html : 更新元素的 innerHTML
  v-if : 如果为true, 当前标签才会输出到页面
  v-else: 如果为false, 当前标签才会输出到页面
  v-show : 通过控制display样式来控制显示/隐藏
  v-for : 遍历数组/对象
  v-on : 绑定事件监听, 一般简写为@
  v-bind : 强制绑定解析表达式, 可以省略v-bind
  v-model : 双向数据绑定
  v-cloak : 使用它防止闪现表达式, 与css配合: [v-cloak] { display: none }
  v-pre 跳过解析当前元素
  v-once 只渲染元素和组件一次, 后续渲染会跳过
  ref : 为某个元素注册一个唯一标识, vue对象通过$els属性访问这个元素对象
    获取DOM元素或组件实例对象
## 谈谈生命周期函数
  Vue的生命周期函数：https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90
1. 挂载阶段（初始化阶段）: 一上来自动触发
        beforeCreate
          在数据代理之前触发的
          此时还不能通过this访问数据(data)
        created
        beforeMount
        mounted
          页面渲染完毕了，此时才能操作DOM
          发送请求、设置定时器、绑定事件等一次性任务

2. 更新阶段：更新data数据才会触发
        beforeUpdate
        updated
3. 卸载阶段：this.$destroy()才会触发
        beforeDestroy 
          做一些收尾工作：清除定时器、解绑事件
        destroyed
## 请自定义一个指令（定义和使用）
1. 注册全局指令
  Vue.directive('my-directive', function(el, binding){
    el.innerHTML = binding.value.toupperCase()
  })
2. 注册局部指令
  directives : {
    'my-directive' : {
        bind (el, binding) {
          el.innerHTML = binding.value.toupperCase()
        }
    }
  }
3. 使用指令
  v-my-directive='xxx'
## 请自定义一个过滤器（定义和使用）
1. 理解过滤器
  功能: 对要显示的数据进行特定格式化后再显示
  注意: 并没有改变原本的数据, 可是产生新的对应的数据
2. 编码
  1). 定义过滤器
    Vue.filter(filterName, function(value[,arg1,arg2,...]){
      // 进行一定的数据处理
      return newValue
    })
  2). 使用过滤器
    <div>{{myData | filterName}}</div>
    <div>{{myData | filterName(arg)}}</div>
## 谈谈闭包
### 定义：
 -函数嵌套函数
 -内部函数能使用外部函数变量
 -外部函数被调用
### 作用：
 -在全局中间接操作局部变量
 -延长局部变量的生命周期
### 产生：
 -外部函数调用，内部函数声明提升定义完成就形成了闭包
### 死亡：
 -内部函数没有被引用形成垃圾对象，闭包消失
### 缺点：
 -造成内存泄漏
### 解决方法
 -减少使用闭包，手动释放闭包