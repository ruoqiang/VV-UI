<template>
  <div class="dropDown" :style="{'display':dropDownShow? 'block':'none'}">
    <ul>
      <li
        v-show="options.length>0"
        class="dropDownList"
        ref="listItem"
        v-for="item in options"
        :key="item[keyField]"
        :data-keyField="item[keyField]"
        @click.stop="selectFn($event,item)"
        @mousedown="selectFn2($event,item)"
        :class="[{'selected':item['selected']}]"
      >{{item[showField]}}</li>
      <li v-show="options.length===0">暂无匹配结果</li>
    </ul>
  </div>
</template>
<script>
import { deleteItemByKeyValue } from "../../utils/util";
let _thisPageSelectedItems = [];
let cloneDataBak = null;
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
    deleteItem: "",
    filterValue: { type: String, default: "" },
    selectedItems: { type: [String, Object, Number, Array] }
  },
  inject: ["app"],
  data() {
    return {
      clearableValue: this.clearable,
      dropDownShow: false,
      options: this.value,
      currentDefaultSelectedItem: []
      // filterValued: this.filterValue
    };
  },
  created() {
    cloneDataBak = this.options;
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
    deleteItemByKeyValue(data, keyValue, keyField) {
      //options2:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},], ===> 根据id为1去删除一项
      let newData = data.slice();
      newData.forEach((item, index) => {
        if (keyValue == item[keyField]) {
          newData.splice(index, 1);
        }
      });
      return newData;
    },
    selectFn(e, item) {
      if (!this.multiple) {
        // 单选
        this.hide();
        this.$refs.listItem.forEach(item => {
          item["className"] = "dropDownList";
          e.target.className = "dropDownList selected";
        });
      } else {
        // 多选
        if (e.target.className == "dropDownList") {
          e.target.className = "dropDownList selected";
          // 没有则添加
          _thisPageSelectedItems.push(item);
        } else {
          e.target.className = "dropDownList";
          // 有则删除
          _thisPageSelectedItems = this.deleteItemByKeyValue(
            _thisPageSelectedItems,
            item[this.keyField],
            this.keyField
          );
        }
        this.setCurrentItemClassLight(_thisPageSelectedItems);
      }
      this.$emit("on-select", item);
    },
    selectFn2(e, item) {
      //该方法仅测试mousedown与click的执行顺序
    },
    setCurrentItemClassLight(selectedItems) {
      this.currentDefaultSelectedItem = selectedItems;
      cloneDataBak;
      let newData = this.options.slice();
      if (!this.multiple) selectedItems = [];
      selectedItems.forEach(item => {
        newData.forEach((itemm, idx) => {
          if (item[this.keyField] == itemm[this.keyField]) {
            itemm["selected"] = true; // 这里修改的是同一份数据options -->导致数据修改了 所有引用这个数据的下拉状态都会跟着变====》 option数据源不要相同就行
          }
        });
      });
      this.options = newData;
    },
    getDeleteIndexInArr(data, keyValue, keyField) {
      let index = null;
      data.forEach((item, i) => {
        if (item[keyField] == keyValue) {
          index = i;
          return true;
        }
      });
      return index;
    },
    deleteCurrentSelectedStyle(val) {
      //如果删除的2次是同一个就会导致watch不触发的bug------>1.用广播的形式通知，只有删除了就父组件就通知子组件,,2.父组件里面直接通过refs调用子组件方法
      //根据索引确定数组哪一个被删除了，去掉对应的高亮class
      let index = this.getDeleteIndexInArr(this.options, val, this.keyField);
      this.$refs.listItem[index]["className"] = "dropDownList";
    },
    deleteAllSelectedStyle() {
      _thisPageSelectedItems = [];
      let hah = this.options.map(item => {
        if (item["selected"]) item["selected"] = false;
        return item;
      });
      if (!this.multiple) {
        this.$refs.listItem.forEach(item => {
          item["className"] = "dropDownList";
        });
      }
    }
  },
  watch: {
    //watch 直接监听父组件传递到子组件的prop值
    filterValue: {
      handler(newValue, oldValue) {
        if (!this.optionsClone) this.optionsClone = this.options;
        this.options = this.optionsClone.filter(item => {
          return (
            item[this.showField]
              .toLowerCase()
              .indexOf(newValue.toLowerCase()) != -1
          );
        });
       
        if (this.multiple && !newValue) {
          this.options = this.optionsClone;
          this.deleteAllSelectedStyle();
        }
        this.setCurrentItemClassLight(this.selectedItems);
      },
      immediate: true
    }
  },
  computed: {}
};
</script>
