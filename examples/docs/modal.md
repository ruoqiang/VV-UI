<style>
  .e8__tag{
    margin-right: 10px;
  }
  .e8-switch{
    margin-bottom: 10px;
  }
</style>
<script>
  //验证例子组件的可用性
// import Input from '../../packages/input';  全局注册了这么没有必要单独再引入注册一次了
import Vue from 'vue'
import Modal  from '../../packages/modal/src/modalforCreateApi'

import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
Vue.createAPI(Modal, true)

export default {
  data() {
    return {
      width:67
    }
  },
  methods: {
      messageInfo() {
        this.$refs.modal.show();
      },
      messageInfo2() {
        this.$MyModal({
          title: `我是全局modal`,
          content:`<p>我是内容</p>`, // 如果想生成html 参考createAPI 
            top: '20%'
        });
      },
      showModal() {
        Modal.$create({
          $props: {
            title: '我是createApi创建的title',
            content: '<p>我是createApi创建的content</p>',
            top: '24%'
          },
          $events: {
            confirm: () => { //组件中$emit 派发出来的事件，才可以通过$events监听到
              console.log('confirm')
            },
            cancell: () => {
              console.log('cancel')
            },
          }
        },(createElement) => {
        return [
          createElement('div', {
            'class': {
              'my-title': true
            },
            slot: 'title'
          }, [
            createElement('div', {
              'class': {
                'my-title-img': true
              }
            }),
            createElement('p', 'createApi的插槽创建的title')
          ]),
          createElement('p', {
            'class': {
              'my-content': true
            },
            slot: 'content'
          }, '我是createApi的插槽创建的content')
        ]
      }).show()
      },
      showModal2() { // 全局Vue.prototype.$Modal挂载时这样使用
        console.log(this)
        this.$Modal.show()
      }
  },
}
</script>

# modal 提示
----
### 基础用法

<div class="demo-block">
    <e8-button type="info" @click="messageInfo">当前组件普通提示</e8-button>
    <e8-button type="info" @click="messageInfo2">全局提示</e8-button>
    <e8-button type="info" @click="showModal">createApi全局提示</e8-button>
    <!-- <e8-button type="info" @click="showModal2">全局提示</e8-button> -->
    <e8-modal ref="modal">
     <p slot="content">Content of dialog</p>
    </e8-modal>

    
</div>

::: demo
```js
js

import Vue from 'vue'
import Modal  from '../../packages/modal/src/modalforCreateApi'

import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
Vue.createAPI(Modal, true)

methods: {
      messageInfo() {
        this.$refs.modal.show();
      },
      messageInfo2() {
        this.$MyModal({
          title: `我是全局modal`,
          content:`<p>我是内容</p>` // 如果想生成html 参考createAPI 
        });
      },
      showModal() {
        Modal.$create({
          $props: {
            title: '我是createApi创建的title',
            content: '<p>我是createApi创建的content</p>'
          },
          $events: {
            confirm: () => { //组件中$emit 派发出来的事件，才可以通过$events监听到
              console.log('confirm')
            },
            cancell: () => {
              console.log('cancel')
            },
          }
        },(createElement) => {
        return [
          createElement('div', {
            'class': {
              'my-title': true
            },
            slot: 'title'
          }, [
            createElement('div', {
              'class': {
                'my-title-img': true
              }
            }),
            createElement('p', 'createApi的插槽创建的title')
          ]),
          createElement('p', {
            'class': {
              'my-content': true
            },
            slot: 'content'
          }, '我是createApi的插槽创建的content')
        ]
      }).show()
      },
      showModal2() { // 全局Vue.prototype.$Modal挂载时这样使用
        console.log(this)
        this.$Modal.show()
      }
  },
```
```html
html
    <e8-button type="info" @click="messageInfo">当前组件普通提示</e8-button>
    <e8-button type="info" @click="messageInfo2">全局提示</e8-button>
    <e8-button type="info" @click="showModal">createApi全局提示</e8-button>
    <e8-modal ref="modal">
     <p slot="content">Content of dialog</p>
    </e8-modal>
```
:::

## Message instance #
通过直接调用以下方法来使用组件：

`this.$MyModal(config)`

## createAPI方式调用

- 非.vue格式文件中使用
```js
import Vue from 'vue'
import Modal  from '../../packages/modal/src/modalforCreateApi'
import CreateAPI from 'vue-create-api'
Vue.use(CreateAPI)
Vue.createAPI(Modal, true)


Modal.$create({
          $props: {
            title: '我是createApi创建的title',
            content: '<p>我是createApi创建的content</p>'
          },
          $events: {
            confirm: () => { //组件中$emit 派发出来的事件，才可以通过$events监听到
              console.log('confirm')
            },
            cancell: () => {
              console.log('cancel')
            },
          }
        })
```

- .vue格式文件中使用

参考 [`https://didi.github.io/cube-ui/#/zh-CN/docs/create-api`](https://didi.github.io/cube-ui/#/zh-CN/docs/create-api)


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | String |  —  | — |
| content | 提示内容 | String |  — | — |
| top | 距离顶部的top值 | String |  — | — |
| zIndex | dom层级 | Number |  — | — |


## 插槽

| 参数      | 说明          | 
|---------- |-------------- |
| title | 自定义标题 |
| content | 自定义提示内容 |
| footer | 自定义底部 |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| confirm | 点击确认按钮时触发 | event |
| cancel | 点击取消按钮时触发 | event |
