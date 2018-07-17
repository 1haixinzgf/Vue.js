class Compile {
    constructor (el, vm) {
        this.vm = vm
        this.el = document.querySelector(el)
        // 文档无法编译 过程 从外到内  编译出来的一段html node append到this.el上，会导致性能很低  dom更新会导致性能太差
        // fragment会代替this.el，最后再一次性的更新到真实的dom里面
        this.fragment = null
        this.init()
    }
    init () {
        // this.el 他将会被编译后的html替换
        if (this.el) {
            this.fragment = this.nodeToFragment(this.el)// 文档碎片，可作为容器，其他节点可以挂载到它上面，不会影响到真实的Dom和性能
            this.el.appendChild(this.fragment)
            this.compileElement(this.fragment)
        } else {
            console.log('DOM元素不在')
        }
    }
    // 递归调用 一层层往里走
    compileElement (el) {
        var childNodes = el.childNodes// 类数组
        // console.log(el)
        [].slice.call(childNodes).forEach(node => {
            console.log(node)
            var reg = /\{\{(.*)\}\}/
            var text = node.textContent
            // console.log(text)
            if (this.isElementNode(node)) {// 如果是他的节点，就会编译
                this.compile(node)
            }else if (this.isTextNode(node) && reg.test(text)) {
                this.compileText(node, reg.exec(text)[1])
            }
            if (node.childNodes && node.childNodes.length) {
                this.compileElement(node)
            }
        })
    }
    compile (node) {
        // 指令
        var nodeAttrs = node.attributes
        Array.prototype.forEach.call(nodeAttrs, attr => {
            var attrName = attr.name
            // console.log(attrName)
            if (this.isDirective(attrName)) {
                var exp = attr.value
                var dir = attrName.subString(2)
                //验证指令
                if(this.isEventDirective(dir)) {
                    this.compileEvent(node, this.vm, exp, dir)
                } else {

                }
            }
        })
    }
    compileEvent(node, vm, exp, dir) { // 编译指令事件
        // 什么事件
        // 核心 addEventListener
        // callback
        const eventType = dir.split(':')[1]
        var cb = vm.methods && vm.methods[exp]//判断callback在vue的methods里面 而且在methods里面注册了
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false)
        }
    }
    isDirective (attr) {
        return attr.indexOf('v-') == 0
    }
    isEventDirective (dir) {
        return dir.indexOf('on:') == 0
    }
    compileText (node, Exp) {
        this.initText = this.vm[Exp]
        this.updataText(node, initText)
    }
    updataText (node, value) {
        node.textContent = typeof value ==='undefined' ? '' : value
    }
    isElementNode (node) {
        return node.nodeType == 1
    }
    isTextNode (node) {
        return node.nodeType == 3
    }
    nodeToFragment (el) {
        var fragment = document.createDocumentFragment()
        var child = el.firstChild
        while (child) { // 将el中的 child添加到fragment中去
            fragment.appendChild(child)
            child = el.firstChild
        }
        return fragment
    }
}