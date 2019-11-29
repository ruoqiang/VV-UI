<template>
  <div class="e8-Radio-group">
    <label class="radiobox-wrapper" :class="[{'radiobox-checked':item.selected},{'disable':item.disabled}]" v-for="(item,index) in dataList" :key="index">
    <span class="radiobox">
      <span class="radiobox-inner" :class="[{'disabled':item.disabled}]"></span>
      <input
        class="radiobox-input"
        type="checkbox"
        :disabled="item.disabled"
        @change="change(item)"
      />
    </span>
    <span class="slot-text"><slot>{{item.name}}</slot></span>
  </label>
  </div>
</template>

<script>
import { deepCopy } from "../../utils/util";
export default {
  name: "E8RadioGroup",
  props: {
     disabled: {
      type: [Boolean, Object],
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    data: Array
  },
  data() {
    return {
     itemDisabled: this.disabled,
     currentValue: this.value,
     dataList:this.data
    };
  },
  methods: {
    change(val) { //v-mode中绑定的value值，事件为change
      // this.currentValue = true;
      
       let data = deepCopy(this.dataList)
       let newData = data.map(item=> {
          item.selected = false
          if(item.id ===val.id) item.selected = true
          return item
       })
       this.dataList = newData
       this.$emit("change", val);
      //  console.log(val);
    },
  },
  computed: {
    checkboxWrapperClass() {
      console.log(this.currentValue);
      return [
        {
          [`radiobox-checked`]: !!this.currentValue
        },
        {
          [`radiobox-wrapper-disabled`]: this.itemDisabled
        }
      ];
    },
    checkboxInnerClass() {
      return [
        {
          [`disabled`]: this.itemDisabled
        }
      ];
    }
  },
  watch: {
            value () {
                // this.updateModel(true);
            }
        }
};
</script>

<style>
</style>