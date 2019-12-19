import Alert from './alert.vue'
import Vue from 'vue'

// 我们对 Alert 组件进一步封装，让它能够实例化，而不是常规的组件使用方法。实例化组件 可以使用 Vue.extend 或 new Vue，然后用 $mount 挂载到 body 节点下
Alert.newInstance = properties => {
    const props = properties || {}
    const Instance = new Vue({
        data: props,
        render(h) {
            return h(Alert, {
                props: props
            })
        }
    })

    const compoent = Instance.$mount()
    document.body.appendChild(compoent.$el)

    const alert = Instance.$children[0]

    return {
        add(noticeProps) {
            alert.add(noticeProps)
        },
        remove(name) {
            alert.remove(name)
            // console('---.',)
        }
    }
}

export default Alert

// notification.js 并不是最终的文件，它只是对 alert.vue 添加了一个方法 newInstance。虽然 alert.vue 包含了 template、script、style 三个标签，并不是一个 JS 对象
// 那怎么能够给它扩展一个方法 newInstance 呢？事实上，alert.vue 会被 Webpack 的 vue-loader 编译，
// 把 template 编译为 Render 函数，最终就会成为一个 JS 对象 自然可以对它进行 扩 展    

// Alert 组件没有任何 props，这里在 Render Alert 组件时，还是给它加了 props，当然，这里的 props 是空对象 {}，而且即使传了内容，也不起作用。这样做的目的还是为了扩展性，
// 如果要在 Alert 上添加 props 来支持更多特性，是要在这里传入的。不过话说回来，因为能拿到 Alert 实例，用 data 或 props 都是可以的。

// const alert = Instance.$children[0];，这里的 alert 就是 Render 的 Alert 组件实例。在 newInstance 里，
// 使用闭包暴露了两个方法 add 和 remove。这里的 add 和 remove 可不是 alert.vue 里的 add 和 remove， 它们只是名字一样 。