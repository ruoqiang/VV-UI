<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="showFlag" :style="{zIndex:moadlzIndex}">
      <div class="confirm-wrapper" :style="{top:modalTop}">
        <div class="confirm-content">
          <div class="text">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <div class="modal-middle">
            <slot name="content">
              <div class="middle-inner">{{ content }}</div>
            </slot>
          </div>
          <div class="operate" @click.stop>
            <slot name="footer">
                <div class="operate-btn left" @click="cancel">{{cancelBtnText}}</div>
                <div class="operate-btn" @click="confirm">{{confirmBtnText}}</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  //Alert 组件不同于常规的组件使用方式，它最终是通过 JS 来调用的，因此组件不用预留 props 和 events 接口。 -->  实例化后newInstance就是一个对象了，所以data内的数据会 挂载到this下，传入一个对象与之合并

  // 只要给数组 notices 增加数据，这个提示组件就能显示内容了，
  name: "Modal",
  props: {
      title: {
        type: String,
        default: "确认清空所有历史纪录吗?"
      },
      content:{
        type: String,
        default: 'modal内容'
      },
      confirmBtnText: {
        type: String,
        default: "确定"
      },
      cancelBtnText: {
        type: String,
        default: "取消"
      },
      top: {
        type: String,
        default: '30%'
      },
      zIndex: {
        type: Number,
        default: 1000
      },
    },
    data() {
      return {
        showFlag:false,
        modalTop:this.top,
        moadlzIndex:this.zIndex
      }
    },
  methods: {
    show(cb) {
      this.showFlag = true;
      typeof cb === "function" && cb.call(this, this);
      return new Promise((resolve, reject) => {
        this.reject = reject;
        this.resolve = resolve;
      });
    },
    cancel() {
      // this.reject("cancel");
      this.$emit('cancel')
      this.hide();
    },
    confirm() {
      this.resolve("confirm");
      this.$emit('confirm')
      this.hide();
    },
    hide() {
      this.showFlag = false;
    }
  },
  computed: {
    // wrapStyles() {
    //   let styles = Object.assign({}, this.styles);
    //   styles["z-index"] =
    //     1010 + ((this.notices[0] && this.notices[0].index) || 0);
    //   return styles;
    // },
    // iconClass() {
    //   // console.log(val);
    //   const iconType = iconTypes[this.currentNotice.type || 'info'];
    //    console.log(iconType);
    //   return iconType
    // }
  }
};
</script>
<style>
</style>
