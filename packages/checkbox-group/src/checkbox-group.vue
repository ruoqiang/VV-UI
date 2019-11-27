<template>
  <div class="e8-Checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from "../../utils/util";
export default {
  name: "E8CheckboxGroup",
  props: {
    value: { //v-mode中绑定的value值，事件为change
      type: Array,
      default() {
        return [];
      }
    },
    showFiled: {
      type: String,
      default:'label'
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  methods: {
    updateModel(update) {
      this.childrens = findComponentsDownward(this, "E8Checkbox");
      if (this.childrens) {
        let { value } = this; // value为v-mode中绑定的值
        if(value[0]&&value[0][this.showFiled]){ //特殊处理非 ['好的','好的2'] 结构的,例如 [{label:'好的',isDisalbed:false},{label:'好的2',isDisalbed:true}]
          value = this.formateLabelValue(value)
        }
        this.childrens.forEach(child => {
          child.model = value;
          // child.SelectedDataList = this.value;

          if (update) { //child的currentValue变化就会更新选择状态
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    },
    change(data) { //v-mode中绑定的value值，事件为change
      this.currentValue = data;
      this.$emit("input", data);
      this.$emit("on-change", data);
    },
    formateLabelValue(value) {
      return value.map(item=> {
        return item.label
      })
    }
  },
  watch: {
            value () {
                this.updateModel(true);
            }
        }
};
</script>

<style>
</style>