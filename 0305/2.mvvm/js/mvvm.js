function MVVM(options) {
    //MVVM中传入options配置对象，包括data.methods,computed...
    this.$options = options;
    //使用时候会new MVVM则this指向实例，将配置对象中的data数据添加到this实例对象的_data属性上
    var data = this._data = this.$options.data;
    //将this用me保存起来
    var me = this;
    //遍历data对象的属性名得到数组
    Object.keys(data).forEach(function(key) {
        //调用数据代理方法
        me._proxy(key);
    });
    observe(data, this);
    //判断配置对象是否存在el属性，存在则传入，不存在则使用document.body,进入compile文件中
    this.$compile = new Compile(options.el || document.body, this)
}
MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },
    //该方法通过原型对象定义
    _proxy: function(key) {
        var me = this;
        //this上添加属性，属性名为msg，值为...
        Object.defineProperty(me, key, {
            configurable: false,
            enumerable: true,
            //获取属性，返回this的_data的属性名对应的属性值
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
};