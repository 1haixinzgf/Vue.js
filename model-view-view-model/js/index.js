class Vue {
    constructor(options) {
        this.methods = options.methods
        this._data = options.data
        Object.keys(this._data).forEach(key => {
            this._proxykeys( key)
        })
    }
    _proxykeys (key) { // 代理模式，去偷懒，把this.data.text 变成this.text
        Object.defineProperty(this._data, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._data[key]
            },
            set: (newVal) => {
                this._data[key] = newVal
            }
        })
    }
    
}

