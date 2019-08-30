<template>
  <div class="directionRow" >
   <E8Select 
   :options="optionss"
   :placeholder="placeholderr"
   :keyField="keyFieldd"
   :showField="showFieldd"
   :multiple="multiplee"
   :labelText="labelTextt"
   :labelDirectionIsUp="labelDirectionIsUpp"
   :disabled="disabledd"
   :clearable="clearablee"
   :defaultValue="defaultValuee"

   />
    
  </div>
</template>
<script>
import {utilIsArray} from '../../utils/util'
import E8Select from '../../select/index'
let dropDownTop = 0;

export default {
  name: "E8AutoComplete",
  provide: {
    app: this
  },
  props: {
    placeholder: { type: String, default: "请选择" },
    keyField: { type: String, default: "value" },
    showField: { type: String, default: "label" },
    options: { type: [String, Object, Number, Array] },
    multiple: { type: Boolean, default: false },
    labelText: {
      type: String,
      default: ""
    },
    labelDirectionIsUp: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: [Boolean, Object],
      default: false
    },
    clearable: {
      type: [Boolean, Object],
      default: false
    },
    defaultValue: ""
  },
  data() {
    return {
      disabledInput: true,
      isFocus: true,
      tabindex: 0, //让元素可以获得、失去焦点
      clearableValue: this.clearable,
      optionss: this.options,
      selectedItem: [],
      selectedValue: '',
      deleteItem: "",
      isDropShow: false
    };
  },
  created() {
    this.optionss = this.options
    this.placeholderr = this.placeholder
    this.keyFieldd = this.keyField
    this.showFieldd = this.showField
    this.multiplee = this.multiple
    this.labelTextt = this.labelText
    this.labelDirectionIsUpp = this.labelDirectionIsUp
    this.disabledd = this.disabled
    this.clearablee = this.clearable
    this.defaultValuee = this.defaultValue
    
  },
  methods: {
   
  },
   computed: {
    
  },
  watch: {
   
  },
  components: {
    E8Select
  }
};
</script>
