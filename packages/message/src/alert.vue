<template>
  <div class="e8-alert" :style="wrapStyles">
    
    <transition-group name="list"  tag="div" class="e8-alert-main" v-for="item in notices" :key="item.name" :class="item.name">
      <div class="e8-alert-content" :class="item.type" :key="item.name" >
          <i class="e8-alert-icon" :class="iconClass(item.type)"></i>
          <span class="e8-alert-text">{{ item.content }}</span>
        </div>
        
    </transition-group>
  </div>
</template>

<script>
let seed = 0;
function getUuid() {
  return "alert_" + seed++;
}
const iconTypes = {
  info: 'e8-icon2-tanhao',//"ios-information-circle",
  success: 'e8-icon2-duihao',//"ios-checkmark-circle",
  warning: "e8-icon2-tanhao1",
  error: "e8-icon2-close",
  loading: "e8-icon2-loading"
};
export default {
  //Alert 组件不同于常规的组件使用方式，它最终是通过 JS 来调用的，因此组件不用预留 props 和 events 接口。 -->  实例化后newInstance就是一个对象了，所以data内的数据会 挂载到this下，传入一个对象与之合并

  // 只要给数组 notices 增加数据，这个提示组件就能显示内容了，

  data() {
    return {
      notices: [],
      currentNotice:{}
    };
  },
  methods: {
    add(notice) {
      //在 add 方法中，给每一条传进来的提示数据，加了一个不重复的 name 字段来标识，并通过 setTimeout 创建了一个计时器，当到达指定的 duration 持续时间后，调用 remove 方法，将对应 name 的那条提示信息找到，并从数组中移除。
      //由这个思路，Alert 组件就可以无限扩展，只要在 add 方法中传递更多的参数，就能支持更复杂的组件，比如是否显示手动关闭按钮、确定 / 取消按钮，甚至传入一个 Render 函数都可以

      const name = getUuid();
      let _notice = Object.assign({ name: name }, notice);
      this.notices.push(_notice);
      // 定时移除，单位：秒
      const duration = notice.duration;
      setTimeout(()=> {
          this.remove(name)
      }, duration* 1000  )
        this.currentNotice = _notice //保存当前添加的实例配置，方便下面计算样式使用
    },
    remove(name) {
      for (let i = 0; i < this.notices.length; i++) {
        if (this.notices[i]["name"] === name) {
          //  this.notices = this.notices.splice(i,i) //这样使用会多个message整体一起消失
          this.notices.splice(i, i);
          break;
        }
      }
      if (this.notices.length <= 1) {
        //   document.body.removeChild(document.getElementsByClassName('alert')[0]);
        document.getElementsByClassName("e8-alert")[0].innerHTML = "";
      }
    },
    iconClass(val) {
      console.log(val);
      const iconType = iconTypes[val] //iconTypes[this.currentNotice.type || 'info'];
       console.log(iconType);
      return iconType
     
    }
  },
  computed: {
    wrapStyles() {
      let styles = Object.assign({}, this.styles);
      styles["z-index"] =
        1010 + ((this.notices[0] && this.notices[0].index) || 0);
      return styles;
    },
    // iconClass() {
    //   // console.log(val);
    //   const iconType = iconTypes[this.currentNotice.type || 'info'];
    //    console.log(iconType);
    //   return iconType
     
    // }
  }
};
</script>
