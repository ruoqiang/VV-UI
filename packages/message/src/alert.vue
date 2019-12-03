<template>
  <div class="alert" :style="wrapStyles">
    <div class="alert-main" v-for="item in notices" :key="item.name" :class="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
let seed = 0;
function getUuid() {
  return "alert_" + seed++;
}
export default {
  //Alert 组件不同于常规的组件使用方式，它最终是通过 JS 来调用的，因此组件不用预留 props 和 events 接口。

  // 只要给数组 notices 增加数据，这个提示组件就能显示内容了，

  data() {
    return {
      notices: [],
    };
  },
  methods:{
      add(notice) { //在 add 方法中，给每一条传进来的提示数据，加了一个不重复的 name 字段来标识，并通过 setTimeout 创建了一个计时器，当到达指定的 duration 持续时间后，调用 remove 方法，将对应 name 的那条提示信息找到，并从数组中移除。
          //由这个思路，Alert 组件就可以无限扩展，只要在 add 方法中传递更多的参数，就能支持更复杂的组件，比如是否显示手动关闭按钮、确定 / 取消按钮，甚至传入一个 Render 函数都可以
         
         const name = getUuid()
          let _notice = Object.assign({name: name},notice)
          this.notices.push(_notice)

          // 定时移除，单位：秒
          const duration  = notice.duration
          setTimeout(()=> {
              this.remove(name)
          }, duration* 1000  )
      },
      remove (name) {
          for (let i = 0; i < this.notices.length; i++) {
             if(this.notices[i]['name']===name) {
                //  this.notices = this.notices.splice(i,i)
                this.notices.splice(i,i)
                 break
             }
          }
          if(this.notices.length <=1) {
            //   document.body.removeChild(document.getElementsByClassName('alert')[0]);
              document.getElementsByClassName('alert')[0].innerHTML = ''
          }
      }
  },
  computed: {
            wrapStyles () {
                let styles = Object.assign({}, this.styles);
                styles['z-index'] = 1010 + (this.notices[0] && this.notices[0].index || 0);
                return styles;
            }
        },
};
</script>

<style>
.alert {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
}
</style>