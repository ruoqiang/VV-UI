<template>
  <div class="directionRow AutoComplete" >
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
   :filterable="filterablee"
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
      optionss: this.options,
      placeholderr: this.placeholder,
      keyFieldd: this.showField,
      showFieldd: this.showField,
      multiplee: this.multiple,
      labelTextt: this.labelText,
      labelDirectionIsUpp: this.labelDirectionIsUp,
      disabledd: this.disabled,
      clearablee: this.clearable,
      defaultValuee: this.defaultValue,
      // filterablee: this.filterable,
      filterablee:true
      // filterablee: true
    };
  },
  created() {
    // this.optionss = this.options
    // this.placeholderr = this.placeholder
    // this.keyFieldd = this.keyField
    // this.showFieldd = this.showField
    // this.multiplee = this.multiple
    // this.labelTextt = this.labelText
    // this.labelDirectionIsUpp = this.labelDirectionIsUp
    // this.disabledd = this.disabled
    // this.clearablee = this.clearable
    // this.defaultValuee = this.defaultValue
    // this.filterablee = this.filterable
    
    
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
