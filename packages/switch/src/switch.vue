<template>
  <div class="e8-switch" :class="[size,wrapClasses]" @click="change" :style="wrapStyles">
    <span class="e8-switch-inner">
      <slot name="open" v-if="currentValue"></slot>
      <slot name="close" v-if="!currentValue"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "E8Switch",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "primary"
    },
    width:[String,Number],
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isclosed: false,
      currentValue: this.value,
      itemDisabled: this.disabled
    };
  },
  computed: {
    wrapClasses() {
      return [
        {
          checked: this.currentValue,
          "not-checked": !this.currentValue,
          disabled: this.itemDisabled
        }
      ];
    },
    wrapStyles() {
      let styles={}
      styles['width'] = this.width+ 'px'
      return styles;
    }
  },
  methods: {
    change() {
      if (this.itemDisabled) {
        return false;
      }
      this.currentValue = !this.currentValue;
      this.$emit("change",this.currentValue);
    }
  }
};
</script>
