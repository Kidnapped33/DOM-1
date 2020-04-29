window.dom = {
    find(selector, scope) {
        //如果有多个，那就在scope范围里面找，没有就直接document
        // let x = scope || document
        // return x.querySelectorAll(selector) 和下面等价
        return (scope || document).querySelectorAll(selector)
    },
    //改style内容
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value
        }
        else if (arguments.length === 2) {
            //dom.style(div,'color')
            if (typeof name === 'string') {
                return node.style[name]
            }
            else if (name instanceof Object) {
                //dom.style(div,{color:'red'})
                for (let key in name) {
                    node.style[key] = name[key]
                }
            }
        }

    },

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
}
