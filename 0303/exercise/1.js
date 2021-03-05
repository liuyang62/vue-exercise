class eventsBus {
	constructor() {
		//初始化是一个存放事件名及事件回调函数的对象
		this.events = {};
	}
	on(eventName, callback) {
		//如果还没有数组则创建一个新数组，里面存放回调函数
		if (!this.events[eventName]) return (this.events[eventName] = [ callback ]);
		this.events[eventName].push(callback);
	}
	//解绑事件，找到该事件对象中的数组，找到数组中对应的回调函数过滤到，展示其他的未解绑的事件
	off(eventName, callback) {
		
		switch (arguments.length) {
			case 0:
				this.events ={};
				break;
			case 1:
				this.events[eventName] = [];
        break;
			case 2:
				this.events[eventName] = this.events[eventName].filter((item) => {
					return item !== callback;
				});
		}
	}
	//触发事件
	emit(eventName, ...arg) {
		if (!this.events[eventName]) return;
		this.events[eventName].forEach((item) => {
			item(...arg);
		});
	}
	//绑定后触发一次后立马解绑
	once(eventName, callback) {
		const fn = (...arg) => {
			//调用后执行回调函数，之后立马解绑
			callback(...arg);
			this.off(eventName, fn);
		};
		//事件绑定，事件触发时fn函数被调用
		this.on(eventName, fn);
	}
	/**
 * 事件对象的存放数据结构
 * @param {String} eventName 事件名
 * @param {Function} param1 回调函数 
 * on(eventName,[callback1,callback2])
 */
}
const re = new eventsBus();
re.once('haha', () => {
	console.log(1);
});
re.once('haha', () => {
	console.log(2);
});
const fn1 = function() {
	console.log(3);
};
re.on('gaga', () => {
	console.log('gaga');
});
re.on('haha', fn1);
// re.emit('haha');
// re.emit('gaga');
re.off();
re.emit('gaga');
