<template>
  <div class="directionRow" :class="[{'directionColumn':(labelText && labelDirectionIsUp)}]">
    <div class="input-label" v-if="labelText">{{labelText}}</div>
    <div
      class="e8__select-wrap"
      :class="[{'disabled':disabled}]"
      @click="clickSelectWrap"
      :tabindex="~~!disabled"
      @blur="handleWrapBlur"
    >
      <input
        v-if="!multiple"
        class="e8__input"
        :value="selectedValue"
        :placeholder="placeholder"
        @blur="blurInputHandler"
        :class="[{'disabled':disabled}]"
      />
      <div class="e8__input multiple" v-else>
        <div v-if="selectedItem.length===0">{{placeholder}}</div>
        <span
          v-for="item in selectedItem"
          :key="item[keyField]"
          :data-keyField="keyField"
          :data-keyValue="item[keyField]"
        >
          {{item[showField]}}
          <i
            class="e8-icon-closefill"
            v-if="multiple"
            @click.stop="deleteValueItem(item[keyField])"
          ></i>
        </span>
      </div>
      <div class="e8-select-append">
        <div class="e8-input-clear" v-if="_showClear" @click.stop="handleClear">
          <i class="e8-icon-closefill"></i>
        </div>
        <slot name="append"><i class="e8-icon-down arrow-down" :class="[{'is-reverse':isDropShow}]"></i></slot>
      </div>
      <E8Option
        :value="options"
        @on-select="onSelect"
        ref="e8Option"
        :keyField="keyField"
        :multiple="multiple"
        :showField="showField"
      />
      <!--  :deleteItem="deleteItem" -->
    </div>
  </div>
</template>
<script>
import E8Option from "./option";
export default {
  name: "E8Select",
  provide: {
    deleteItem: this.deleteItem
  },
  props: {
    placeholder: { type: String, default: "请选择" },
    keyField: { type: String, default: "value" },
    showField: { type: String, default: "label" },
    value: { type: [String, Object, Number, Array] },
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
    }
  },
  data() {
    return {
      disabledInput: true,
      isFocus: true,
      tabindex: 0, //让元素可以获得、失去焦点
      clearableValue: this.clearable,
      options: this.value,
      selectedValue: "",
      selectedItem: [],
      deleteItem: "",
      isDropShow: false
    };
  },
  created() {},
  methods: {
    handleClear() {
      this.selectedValue = "";
      if (this.multiple) {
        this.selectedItem = [];
        this.$refs.e8Option.deleteAllSelectedStyle();
      }
      this.isDropShow = false
      this.$emit("on-clear");
    },
    focusHandler(e) {
      this.$emit("on-focus");
    },
    deleteValueItem(keyValue) {
      this.selectedItem = this.deleteItemByKeyValue(
        this.selectedItem,
        keyValue,
        this.keyField
      );
      this.deleteItem = keyValue;

      this.$refs.e8Option.deleteCurrentSelectedStyle(this.deleteItem);
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
    blurInputHandler(event) {
      this.$emit("on-blur", this.selectedValue);
      setTimeout(() => {
        //item事件改为mousedown后就不需要延时了  后来又把mousedown改成click为了点击切换显示隐藏，因为外层是click内层mousedown.stop无效，必须click.stop才可以
        this.$refs.e8Option.hide();
      }, 300);
    },
    handleWrapBlur(event) {
      this.$refs.e8Option.hide();
      this.isDropShow = false
    },
    onSelect(item) {
      if (!this.multiple) {
        // 单选下拉
        this.selectedItem = item;
        this.selectedValue = item[this.showField];
        this.isDropShow = false
        this.$emit("on-select", this.selectedValue);
      } else {
        // 多选下拉
        if (
          !this.ListIsNotContainItem(this.selectedItem, item[this.keyField])
        ) {
          // 列表内没有该项才添加
          this.selectedItem.push(item);
          this.$emit("on-select", this.selectedItem);
        }
      }
    },
    ListIsNotContainItem(arr, itemId) {
      let result = false;
      arr.forEach((item, index) => {
        if (item[this.keyField] == itemId) {
          result = true;
          return true;
        }
      });
      return result;
    },
    getSelectedValueByxx(arr, key) {},
    getSelectedValue(arr, key) {},
    clickSelectWrap() {
      if (this.disabled) {
        return;
      }
      if (this.isDropShow) {
        this.$refs.e8Option.hide();
        this.isDropShow = false;
      } else {
        this.$refs.e8Option.show();
        this.isDropShow = true;
      }
    }
  },
  computed: {
    _showClear() {
      let visible =
        this.clearable &&
        (this.selectedValue || this.selectedItem.length > 0) &&
        !this.readonly &&
        !this.disabled;
      if (!this.isFocus) {
        visible = false;
      }
      console.log("------------", this.selectedItem);
      return visible;
    }
  },
  components: {
    E8Option
  }
};
</script>
