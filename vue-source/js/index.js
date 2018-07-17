
class Vue {// 核心 : 订阅发布者模式  definePropery
    constructor(options) {
        this.methods = options.methods
        this.data = options.data
        Object.keys(this.data).forEach((key) => {
            this.proxykeys(key) // 代理
        })
        // 发布者  数据不止用于一个地方  模板  指令  方法
        // 让data成为一个发布者
        // 发布者  形成订阅-发布的关系 1 对多的关系
        observe(this.data)
        // 模板里面编译的过程建立起来订阅发布关系
        new Compile(options.el, this)
        options.mounted.call(this)// this仍然指向vue
    }
    proxykeys (key) {
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function getter () {
                return this.data[key]// key是一个变量
            },
            set: function setter (newVal) {
                this.data[key] = newVal
            }
        })
    }
}