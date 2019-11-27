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
import E8Checkbox from './Checkbox/index'
import E8CheckboxGroup from './checkbox-group/index'
import E8Radio from './radio/index'
import E8RadioGroup from './radio-group/index'

import WLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'
import Input from './input/index'
import Select from './select/index'
import DatePicker from './date-picker/index'
import AutoComplete from './auto-complete/index'
import Table from './table/index'

const components = [ // 这里注册了就可以全局直接使用了，不用每次需要使用的时候导入再注册带当前页面
  E8Button,
  E8Row,
  E8Col,
  E8Tag,
  WShowMore,
  WLimitTextArea,
  WAlert,
  Skeleton,
  Input,
  E8Checkbox,
  E8CheckboxGroup,
  E8Radio,
  E8RadioGroup,
  Select,
  DatePicker,
  AutoComplete,
  Table
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar  // 然后可以全局使用this.$loading.start()
}
/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  E8Button,
  E8Row,
  E8Col,
  E8Tag,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar,
  Skeleton,
  Input,
  E8Checkbox,
  E8CheckboxGroup,
  E8Radio,
  E8RadioGroup,
  Select,
  AutoComplete,
  Table
}
