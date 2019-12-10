import Notification from './notification'

let messageInstance

function getMessageInstance() {
    messageInstance = messageInstance || Notification.newInstance()
    return messageInstance
}
function notice({ duration = 1.5, content = '', index, type }) {
    let instance = getMessageInstance() // 每一个实例添加属性
    instance.add({
        content,
        duration,
        index,
        type
    })
}
export default {
    info(options) {
        return notice(options, Object.assign(options, {type: 'info'}))
    },
    success (options) {
        return notice(Object.assign(options, {type: 'success'}))
    },
    warning (options) {
        return notice(Object.assign(options, {type: 'warning'}))
    },
    error (options) {
        return notice(Object.assign(options, {type: 'error'}))
    }
}

//  alert.js 对外提供了一个方法 info，如果需要各种显示效果，比如成功的、失败的、警告的，可以在 info 下面提供更多的方法，比如 success、fail、warning 等，并传递不同参数让 Alert.vue
//  知道显示哪种状态的图标。本例因为只有一个 info，事实上也可以省略掉，直接导出一个默认的函数，这样在调用时，就不用 this.$Alert.info() 了，直接 this.$Alert()。