function defineReactive(data, key, val) {
    observer(val)
    const dep = new Dep()
    Object.defineProperty(data, key, {
        enumerableL: true,
        configurable: true,
        get: function() {
            if(addDep()) {
                dep.addSub(watcher) // 添加一个订阅者
            }
            return val
        },
        set: function(newVal) {
            val = newVal
            console.log('属性' +key + '已经被监听了，现在的值为:' + newVal.toString())
        }
    })
}

// observer 数据监视器
function observer(data) {
    if (! data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}
function Dep () {
    this.subs = [] // 订阅者的消息订阅器Dep
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub)
    },
    notify: function () {
        this.subs.forEach(function(subs) {
            sub.update()
        })
    }
}

var library = {
    book1: {
        name: ''
    },
    book2: ''
}
observer(library)
library.book1.name = 'Vue权威指南'
library.book2 = '没有书籍'
