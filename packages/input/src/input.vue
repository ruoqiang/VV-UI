<template>
  <div>
      <div class="e8__input-wrap" v-if="!isTextarea" :class="[{'directionColumn':(labelText && labelDirectionIsUp)}]">
        <div class="e8-input-prepend" v-if="$slots.prepend" :style="{'width':paddingLeft+ 'em'}">
          <slot name="prepend"></slot>
        </div>
        <div class="input-label" v-if="labelText">{{labelText}}</div>
        <input
          autocomplete="off"
          :style="{'text-indent':paddingLeft+ 0.2 + 'em'}"
          @focus="focusHandler"
          @blur="blurHandler"
          @input="inputHander"
          @keyup="keyupHander"
          class="e8__input"
          :disabled="disabled"
          :class="[
        {'is-disabled': disabled},
        'e8__input--size-'+size,
        {'e8__input--danger': isDanger},
        {'e8__input--success': isSuccess}
        ]"
          :placeholder="placeholder"
          :type="type"
          v-model="inputValue"
        />
        <div class="e8-input-append" >
          <div class="e8-input-clear" v-if="_showClear" @click="handleClear">
            <i class="e8-icon-closefill"></i>
          </div>
          <div class="e8-input-eye" v-if="_showPwdEye" @click="handlePwdEye">
            <i class="e8-icon-closefill"></i>
          </div>
          <slot name="append"></slot>
        </div>
      </div>
      <div class="e8__input-wrap" v-if="isTextarea" :class="[{'directionColumn':(labelText && labelDirectionIsUp)}]">
        <div class="input-label mr6" v-if="labelText">{{labelText}}</div>
          <textarea
          
          :style="{'min-height':textareaMinHeight+ 'px'}"
           v-model="inputValue"
          @focus="focusHandler"
          @blur="blurHandler"
          @input="inputHander"
          @keyup="keyupHander"
            class="e8__textarea"
          :disabled="disabled"
          :class="[
          {'is-disabled': disabled},
          'e8__textarea--size-'+size,
          {'e8__textarea--danger': isDanger},
          {'e8__textarea--success': isSuccess}
          ]"
          >
           
        </textarea>
      </div>
  </div>
</template>
<script>
export default {
  name: "E8Input",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    isDanger: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    labelText: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    isTextarea:{
      type: Boolean,
      default: false
    },
    labelDirectionIsUp:{
      type: Boolean,
      default: false
    },
    textareaMinHeight: {
      type: Number,
      default: 60
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
    readonly: {
      type: [Boolean, Object],
      default: false
    },
    clearable: {
      type: [Boolean, Object],
      default: false
    },
    eye: {
      type: [Boolean, Object],
      default: false
    },
    value: [String, Number]
  },
  data() {
    return {
      msg: "input",
      inputValue: this.value,
      isFocus: true,
      clearableValue: this.clearable,
      formatedEye: {
        open: false,
        reverse: false
      }
    };
  },
  methods: {
    handleClear() {
      this.inputValue = ''
      this.$emit("on-clear")
    },
    focusHandler(e) {
      // this.isFocus = true;
       this.$emit("on-focus")
    },
    blurHandler() {
      // this.isFocus = false;
      this.$emit("on-blur")
    },
    inputHander(e){
       if(!this.inputValue.trim()) {
         this.clearableValue = true;
       }
       this.$emit("on-input",e)
    },
    keyupHander(e) {
      if(this.inputValue) {
        
        if(e.keyCode ==13) {
          console.log(e)
        }
          this.$emit("on-keyup",this.inputValue)
       }
    },
  },
  computed: {
    _showClear() {
      let visible =
        this.clearable &&
        this.inputValue &&
        !this.readonly &&
        !this.disabled;
      if (!this.isFocus) {
        visible = false;
      }
      return visible;
    },
    _showPwdEye() {
      return this.type === "password" && this.eye && !this.disabled;
    },
    pwdVisible() {
      const eye = this.formatedEye;
      return eye.reverse ? !eye.open : eye.open;
    },
    paddingLeft() {
      // console.log(this.$slots.prepend)
      let leg = this.$slots.prepend&&this.$slots.prepend[0]&&this.$slots.prepend[0]['children']&&this.$slots.prepend[0]['children'][0] && this.$slots.prepend[0]['children'][0].text
      && this.$slots.prepend[0]['children'][0].text.length
      return leg
    }
  }
};
</script>
