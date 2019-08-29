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
      <div class="e8__input multiple" v-else ref="multiple">
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
        :value="optionss"
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
import {utilIsArray} from '../../utils/util'
let dropDownTop = 0;

export default {
  name: "E8Select",
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
  created() {},
  methods: {
    handleClear() {
      this.selectedValue = "";
      if (this.multiple) {
        this.selectedItem = [];
      }
      this.$refs.e8Option.deleteAllSelectedStyle();
      this.isDropShow = false
      this.$emit("on-clear");
      this.setDropDownPositon();
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
      this.setDropDownPositon();
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
    //通过id: '1' 确定某一项item，然后调用option selectFn
    getItemByKeyValue(data,keyValue,keyField) {
      if(!utilIsArray(keyValue)) keyValue = [keyValue]
      let newData = data.slice();
      // let ret = newData.filter((item,i)=> item[keyField] == keyValue)
      let ret = []
      keyValue.forEach(keyValueItem=> {
        newData.forEach((itemm,i)=> {
          if(itemm[keyField] == keyValueItem) {
            ret.push(itemm)
          }
        })
      })
      if(!ret.length) console.warn('你传入的默认值defaultValue：'+keyValue+ ' 对应的选项不在下拉列表数据中')
      return ret
    },
    blurInputHandler(event) {
      this.$emit("on-blur", this.selectedValue);
      setTimeout(() => {
        //item事件改为mousedown后就不需要延时了  后来又把mousedown改成click为了点击切换显示隐藏，因为外层是click内层mousedown.stop无效，必须click.stop才可以
        // 另外为单选时才有input的blurInputHandler事件，
         // ---> mousedown事件先于click执行
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
        if ( !this.ListIsNotContainItem(this.selectedItem, item[this.keyField])) {
          // 列表内没有该项才添加
          this.selectedItem.push(item);
        } else { // 有则删除
          this.selectedItem = this.deleteItemByKeyValue(this.selectedItem, item[this.keyField],this.keyField);
        }
        // console.log(this.selectedItem)
        this.$emit("on-select", this.selectedItem);
      }
      this.setDropDownPositon()
    },
    setDropDownPositon(components) {
      if(!this.multiple) return;
      this.$nextTick(()=> {
        // if(dropDownTop ==top) return //top值发生改变了才会设置style.top
        let $dropDown = this.$refs.e8Option.$el;
        //屏幕高度 - 选择框底部相对于屏幕位置 < dropDown高度  ==>dropDown往上方显示
        let screenHeigh = document.documentElement.clientHeight
        let multipleBottom = this.$refs.multiple.getBoundingClientRect().bottom
        let dropDownheight = this.$refs.e8Option.$el.getBoundingClientRect().height
        if(screenHeigh - multipleBottom < dropDownheight) {
          // console.log('woyao')
           let top = -(dropDownheight + 10);
           $dropDown.style.top = top+ 'px';
        } else {
          let top = this.$refs.multiple.getBoundingClientRect().height;
          $dropDown.style.top = top+ 'px';
        }
        // console.log('改变了top') //----------------->待做：都使用top 动态计算一下位置吧
        dropDownTop = top;
      })
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
      this.setDropDownPositon();
    },
    getCurrentDefaultSelectedItem() {
      return this.currentDefaultSelectedItem
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
      // console.log("------------", this.selectedItem);
      return visible;
    }
  },
  watch: {
    defaultValue: {
      handler(val) {
        if(val) {
          let currentDefaultSelectedItem = this.getItemByKeyValue(this.optionss,val,this.keyField)
          if(currentDefaultSelectedItem.length) 
          {
             this.currentDefaultSelectedItem = currentDefaultSelectedItem
             this.selectedValue = this.currentDefaultSelectedItem.map((item,i)=> item[this.showField])
             this.selectedItem = this.currentDefaultSelectedItem
              this.$nextTick(()=> {
                this.$refs.e8Option.setCurrentItemClassLight(currentDefaultSelectedItem);
              })
          }
        }
      },
      immediate: true
    }
  },
  components: {
    E8Option
  }
};
</script>
