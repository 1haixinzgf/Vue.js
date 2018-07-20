var obj = {}
Object.defineProperty(obj, 'hello', {
    get: function () {
        console.log('get')
        return 
    },
    set: function (newVal) {
        console.log('set', newVal)
    }
})
obj.hello
obj.hello = 'ss'