<template>
  <div class="directionRow" :class="[{'directionColumn':(labelText && labelDirectionIsUp)}]">
    <div class="input-label" v-if="labelText">{{labelText}}</div>
    <div
      class="e8__select-wrap"
      ref="SelectWrap"
      :class="[{'disabled':disabled}]"
      @click="clickSelectWrap"
      :tabindex="~~!disabled"
    >
    <div class="e8__inputwrap">
       <input
        class="e8__input"
        :value="selectedValue"
        :placeholder="placeholder"
        @blur="blurInputHandler"
        @click="inputClick"
        ref="input"
        readonly="readonly"
        :class="[{'disabled':disabled}]"
      />
      <div class="e8-select-append">
        <div class="e8-input-clear" v-if="_showClear" @click.stop="handleClear">
          <i class="e8-icon-closefill"></i>
        </div>
        <slot name="append">
          <i class="e8-icon-down arrow-down" :class="[{'is-reverse':isDropShow}]"></i>
        </slot>
      </div>
    </div>
     
      
      <div v-show="isDropShow">
        <DatePicerDropdown
        :defaultDate="selectedValue"
        :dateType="dateTypeed"
        ref="e8DatePicerDropdown"
        :hasConfirmButton="hasConfirmButton"
        @selectedValue="selectedValueFn"
        @cancel="cancelFn"
      />
      </div>
      
    </div>
  </div>
</template>
<script>
import DatePicerDropdown from "./date-picer-dropdown";

import { formateDate } from "../../utils/util";
let dropDownTop = 0;

export default {
  name: "E8DatePicker",
  provide: {
    app: this
  },
  props: {
    placeholder: { type: String, default: "请选择" },
    labelText: {
      type: String,
      default: ""
    },
    value: {
      type: String
    },
    labelDirectionIsUp: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: [Boolean, Object],
      default: false
    },
    clearable: {
      type: [Boolean, Object],
      default: false
    },
    hasConfirmButton:false,
    dateType:{
      type: String,
      default: "isDay"
    }
  },
  data() {
    return {
      disabledInput: true,
      clearableValue: this.clearable,
      selectedValue: "",
      selectedItem: [],
      isDropShow: false
    };
  },
  created() {
    this.selectedValue = this.value;
    this.dateTypeed = this.dateType
  },
  mounted() {},
  methods: {
    handleClear() {
      this.selectedValue = "";
      this.isDropShow = false;
      this.$emit("on-clear");
    },
    focusHandler(e) {
      this.$emit("on-focus");
    },
    selectedValueFn(val) {
      console.log(val)
      this.selectedValue = formateDate(val);
      this.isDropShow = false
      this.$emit("on-selected", this.selectedValue);
    },
    cancelFn() {
      this.isDropShow = false
      this.$emit("on-cancel");
    },
    blurInputHandler(event) {
      //  this.$emit("on-blur", this.selectedValue);
      // setTimeout(() => {
      //   //item事件改为mousedown后就不需要延时了  后来又把mousedown改成click为了点击切换显示隐藏，因为外层是click内层mousedown.stop无效，必须click.stop才可以
      //     // this.$refs.e8DatePicerDropdown.hide();
      // }, 300);
    },
    inputClick() {
      this.isDropShow = !this.isDropShow
      if (this.isDropShow) {
        var that = this;
        const datePicker = this.$refs["SelectWrap"];
        const handler = event => {
          let dom = event.target; //点击的dom元素
          let flag = false;

          while (dom) { //判断点击的元素是否在datePicker范围内，自己也算
            if (dom === datePicker) {
              flag = true;
              break;
            }
            dom = dom.parentNode;
          }
          if (!flag) {
            that.isDropShow = flag;
          }
          // document.removeEventListener("click", handler, true);
        };
        
        document.addEventListener("click", handler, true);
      } 
    },
    clickSelectWrap() {
      if (this.disabled) {
        return;
      }
    }
  },
  computed: {
    _showClear() {
      let visible =
        this.clearable &&
        this.selectedValue &&
        !this.readonly &&
        !this.disabled;
      return visible;
    }
  },
  components: {
    DatePicerDropdown
  }
};
</script>
