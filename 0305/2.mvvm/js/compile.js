
function Compile(el, vm) {
    //vm是mvvm的实例，el是"#root"或者是dom元素
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    //判断el是否存在，防止传入的el的值写的不正确
    if (this.$el) {
        //存在的话，将节点插入到文档碎片节点中
        this.$fragment = this.node2Fragment(this.$el);
        //模板编译
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}
Compile.prototype = {
    node2Fragment: function(el) {
        //创建文档碎片节点
        var fragment = document.createDocumentFragment(),
            child;
        //将el的子元素添加到文档碎片节点中
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        //返回文档碎片节点
        return fragment;
    },

    init: function() {
        //传入文档碎片节点
        this.compileElement(this.$fragment);
    },

    compileElement: function(el) {
        //获取文档碎片的所有子节点（根元素app的所有子节点）
        var childNodes = el.childNodes,
            me = this;
        //遍历根元素app的子节点
        [].slice.call(childNodes).forEach(function(node) {
            //获取节点的文本内容
            var text = node.textContent;
            var reg = /\{\{(.*)\}\}/;
            //如果节点类型是元素节点
            if (me.isElementNode(node)) {
                //该函数用于指令
                me.compile(node);
            //如果该元素是文本节点，且符合插值语法的正则判断
            } else if (me.isTextNode(node) && reg.test(text)) {
                //将节点名和插值表达式传给compileText
                me.compileText(node, RegExp.$1);
            }
            //判断是否存在子节点且长度不为0
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function(node) {
        //获取所有的属性节点
        var nodeAttrs = node.attributes,
            me = this;
        //遍历属性节点，获取属性节点的属性名
        [].slice.call(nodeAttrs).forEach(function(attr) {
            var attrName = attr.name;
            //判断该属性名是否是指令
            if (me.isDirective(attrName)) {
                var exp = attr.value;
                //获取指令除了v-外的其他元素
                var dir = attrName.substring(2);
                // 判断是否是事件指令
                if (me.isEventDirective(dir)) {
                    //事件绑定的函数
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                    // 普通指令
                } else {
                    //普通指令调用则通过指令查找对应要调用的方法
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }

                node.removeAttribute(attrName);
            }
        });
    },
    //接收到传过来的节点及表达式
    compileText: function(node, exp) {
        //使用compileUtil，传入节点名，实例及表达式
        compileUtil.text(node, this.$vm, exp);
    },
    //判断属性名中是否包含了v-
    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
    },
    //判断指令中是否包含了on,包含了on则为事件绑定
    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合
var compileUtil = {
    //text指令
    text: function(node, vm, exp) {
        //bind函数中传入节点名，实例，表达式，固定字符text
        this.bind(node, vm, exp, 'text');
    },

    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },

    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },

    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },
//bind函数接收传入的节点，实例，表达式及指令
    bind: function(node, vm, exp, dir) {
        //查找updater对象上的方法
        var updaterFn = updater[dir + 'Updater'];
        //如果存在则传入节点名及data（this._data)中存储的表达式的值
        //获取data中存储的表达式的值需要通过this._getVMVal方法获取，里面传入实例及表达式
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        //得到指令中的事件名（事件类型）
        var eventType = dir.split(':')[1],
        //data的methods查找对应的事件处理函数
            fn = vm.$options.methods && vm.$options.methods[exp];
        //
        if (eventType && fn) {
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },
    //获取表达式对应的data中的数据
    _getVMVal: function(vm, exp) {
        var val = vm._data;
        //分割表达式，分割成一个对象，主要针对data中存储的仍然是对象
        exp = exp.split('.');
        //遍历数组，获取属性名对应的值
        exp.forEach(function(k) {
            //根据key查找data对象中存储的数据，找到后赋值给val
            val = val[k];
        });
        return val;
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm._data;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


var updater = {
    textUpdater: function(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    },

    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },

    classUpdater: function(node, value, oldValue) {
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};