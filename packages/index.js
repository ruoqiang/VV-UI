/**
 * @author monkeywang
 * Date: 17/11/9
 */
import E8Button from './button/index.js';
import E8Row from './row/index'
import E8Col from './col/index'
import E8Tag from './tag/index'
import WShowMore from './show-more/index'
import WLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import WAlert from './alert/index'
import WLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'
import Input from './input/index'
import Select from './select/index'

const components = [
  E8Button,
  E8Row,
  E8Col,
  E8Tag,
  Input,
  Select,
  WShowMore,
  WLimitTextArea,
  WAlert,
  Skeleton
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar  // 然后可以全局使用this.$loading.start()
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  E8Button,
  E8Row,
  E8Col,
  E8Tag,
  Input,
  Select,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar,
  Skeleton
}
