<template>
  <!-- v-show="dropDownShow"  -->
  <div class="dropDown" :style="{'display':dropDownShow? 'block':'none'}">
    <ul>
      <li
      ref="listItem"
        v-for="item in options"
        :key="item[keyField]"
        :data-keyField="item[keyField]"
        @click.stop="selectFn($event,item)"
      >{{item[showField]}}</li>
    </ul>
  </div>
</template>
<script>
import { deleteItemByKeyValue } from "../../utils/util";
export default {
  name: "E8Option",
  props: {
    disabled: {
      type: [Boolean, Object],
      default: false
    },
    multiple: {
      type: [Boolean, Object],
      default: false
    },
    keyField: { type: String, default: "value" },
    showField: { type: String, default: "label" },
    value: { type: [String, Object, Number, Array] },
    deleteItem: ""
  },
  inject: ['deleteItem'],
  data() {
    return {
      clearableValue: this.clearable,
      dropDownShow: false,
      options: this.value
      // [
      //   { id: "1", text: "newYork1" },
      //   { id: "2", text: "newYork2" }
      // ]
    };
  },
  created() {
    // this.options.forEach((item, index) => {
    //   this.$set(this.options[index], "isSelect", false);
    // });
  },
  methods: {
    handleClear() {
      this.inputValue = "";
      this.$emit("on-clear");
    },
    focusHandler(e) {
      this.$emit("on-focus");
    },
    blurHandler() {
      this.$emit("on-blur");
    },
    inputHander(e) {
      if (!this.inputValue.trim()) {
        this.clearableValue = true;
      }
      this.$emit("on-input", e);
    },
    show() {
      this.dropDownShow = true;
    },
    hide() {
      this.dropDownShow = false;
    },
    selectFn(e, item) {
      if (!this.multiple) {
        this.hide();
        this.$refs.listItem.forEach(item=> {
          item['className'] = ''
        })
      }
      e.target.className = "selected";
      this.$emit("on-select", item);
    },
    getDeleteIndexInArr(data,keyValue,keyField) {
      let index = null
      data.forEach((item,i)=> {
        if(item[keyField] == keyValue) {
          index = i
          return true
        }
      })
      return index
    },
    deleteCurrentSelectedStyle(val) { //如果删除的2次是同一个就会导致watch不触发的bug------>1.用广播的形式通知，只有删除了就父组件就通知子组件,,2.父组件里面直接通过refs调用子组件方法
      //根据索引确定数组哪一个被删除了，去掉对应的高亮class
      let index = this.getDeleteIndexInArr(this.options,val,this.keyField)
      this.$refs.listItem[index]['className'] = ''
    },
    deleteAllSelectedStyle() {
      this.$refs.listItem.forEach(item=> {
        item['className'] = ''
      })
    }
  },
  watch: {
    
  },
  computed: {}
};
</script>
