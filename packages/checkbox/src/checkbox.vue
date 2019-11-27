<template>
  <label class="checkbox-wrapper" :class="checkboxWrapperClass">
    <span class="checkbox">
      <span class="checkbox-inner" :class="checkboxInnerClass"></span>
      <input
        v-if="group"
        class="checkbox-input"
        type="checkbox"
        :disabled="itemDisabled"
        :value="label"
        v-model="model"
        :name="name"
        @change="change"
      />
      <input
        v-else
        type="checkbox"
        class="checkbox-input"
        :disabled="itemDisabled"
        :checked="currentValue"
        :name="name"
        @change="change"
      />
    </span>
    <slot>
      <span >{{ label }}</span>
    </slot>
  </label>
</template>
<script>
import { findComponentUpward } from "../../utils/util";
export default {
  name: "E8Checkbox",
  props: {
    name: {
      type: String,
      requre: true
    },
    label: String,
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      visible: true,
      currentValue: this.value,
      itemDisabled: this.disabled,
      model: [],
      group: false,
      showSlot: true,
      parent: findComponentUpward(this, 'E8CheckboxGroup'),
    };
  },
  mounted() {
    this.parent = findComponentUpward(this, "E8CheckboxGroup");

    if (this.parent) {
      this.group = true;
    }

    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
      this.showSlot = this.$slots.default !== undefined;
    }
  },
  methods: {
    change(e) {
      
      if (this.group) {
        console.log(this.model)
        this.parent.change(this.model);
        // this.currentValue = !this.model.length;
      } else {
        this.currentValue = !this.currentValue;
        console.log(this.currentValue);
        this.$emit("change", this.currentValue);
        this.$emit("input", this.currentValue);
      }
      
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    }
  },
  computed: {
    checkboxWrapperClass() {
      console.log(this.currentValue);
      return [
        {
          [`checkbox-checked`]: !!this.currentValue
        },
        {
          [`checkbox-wrapper-disabled`]: this.itemDisabled
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
            value (val) {
                if (val === this.trueValue || val === this.falseValue) {
                    this.updateModel();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
};
</script>
