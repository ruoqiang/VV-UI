<template>
  <label class="radiobox-wrapper singleRadioWrap" :class="checkboxWrapperClass">
    <span class="radiobox">
      <span class="radiobox-inner" :class="checkboxInnerClass"></span>
      <input
        class="radiobox-input"
        type="radio"
        :disabled="itemDisabled"
        :checked="value"
        @change="change"
      />
    </span>
    <span class="slot-text"><slot></slot></span>
  </label>
</template>
<script>
export default {
  name: "E8Radio",
  props: {
    labelText: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: [Boolean, Object],
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      itemDisabled: this.disabled,
      currentValue: this.value,
    };
  },
  methods: {
    handleClear() {
      this.inputValue = ''
      this.$emit("on-clear")
    },
     change(e) {
       this.currentValue = true;
       this.$emit("change", this.currentValue);
      
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
  }
};
</script>
