class Observer {
    constructor (data) {
        this.data = data
        this.dep = new Dep()
        if (Array.isArray(this.data)) {
            this.observeArray(this.data)
        } else {
            this.walk(this.data)
        }
    }
    walk(data) { //walk方法会遍历对象的每一个属性进行defineReactive绑定
        const keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(data, keys[i], data[keys[i]])
        }
    }
    observeArray(data) {
        for (let i = 0, j = data.length; i < j; i++) {
            observe(data[i])
          }
    }
}


// Vue.js是一款MVVM框架，上手快速简单易用，通过响应式在修改数据的时候更新视图。Vue.js的响应式原理依赖于Object.defineProperty，这也是Vue.js不支持IE8 以及更低版本浏览器的原因。Vue通过设定对象属性的 setter/getter 方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。
function defineReactive(data, key, val) {
    observer(val)// 遍历递归所有属性
    const dep = new Dep()
    Object.defineProperty(data, key, {
        enumerableL: true,
        configurable: true,
        get: function() {// 依赖收集
            if(addDep(Dep.target)) {
                dep.addSub(watcher) // 添加一个订阅者
            }
            return val
        },
        set: function(newVal) {
            if (val === newVal) return // 如果两次改变的值是相同的
            val = newVal
            console.log('属性' +key + '已经被监听了，现在的值为:' + newVal.toString())
            dep.notify()//订阅者收到消息后的回调
        }
    })
}

// observer 数据监视器
function observe(data) {
    //vue源码中的 observer里面__ob__这个属性来判断是否已经有Observer实例，如果没有Observer实例则会新建一个Observer实例并赋值给__ob__这个属性，如果已有Observer实例则直接返回该Observer实例*/
    if ( data && typeof data === 'object' && (Array.isArray(data) || isPlainObject(data)) && Object.isExtensible(data)) {// 判断data只是个简单的对象，而不是函数或者是Regexp等情况
        return
    }
    return new Observer(data);
}
class Dep  {
    constructor () {
        this.subs = [] // 订阅者的消息订阅器Dep
        this.target = target
    }
}
Dep.prototype = {
    addSub: function(sub) { // 添加订阅者
        this.subs.push(sub)
    },
    notify: function () {// 数据更新，dep通知所有注册的观察者进行响应式处理
        this.subs.forEach(function(subs) {
            sub.update()
        })
    }
}
