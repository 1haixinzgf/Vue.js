// 响应式 观察者模式 pub-sub
class Vue{
    constructor(options) {
        this._data = options.data;//_data私有属性
        observer(this._data)
    }
}
function observer(value) {
     if(!value || typeof value !== 'object' ) {
        return;
     }
// 数据_data里的每个key: value ,都需要被defineProperty
    //  _data.forEach(element => {
    //      Object.defineProperty(_data,)
    //  });

    // Object.keys(value)得到key
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key])
    })
}

function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true, //可遍历的
        configurable: true,//可删除
        get: function reactiveGetter() {
            return val;
        },
        set: function reactiveSetter(newVal) {
            if(newVal == val) return;
            val = newVal;
            cb(newVal);
        }
    })
}
function cb(val) {
    console.log('视图更新了，新的值应该为' + val)
}

// 发布订阅者模式是vue 数据响应的核心，一对多的关系 
// 发布者:Vue实例化的vue  订阅者:template

let vue = new Vue({
    data: {
        test: 'I am test',
        saying: 'Hello World',
    }
})

vue._data.test = 'hello, test';
vue._data.test = 'hello, test';