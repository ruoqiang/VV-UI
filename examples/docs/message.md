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
export default {
  data() {
    return {
      width:67
    }
  },
  methods: {
    change(val) {
       console.log(val)
       this.$loading.start()
    },
      handleOpen1 (val) {
       let text = val ? '打开的': '关闭的'
        this.$Message.success({
          content: `我是${text}提示信息`,
          index:111111
        });
      },
      messageInfo() {
        this.$Message.info({
          content: `我是info提示信息`,
          index:111111
        });
      },
      successInfo() {
        this.$Message.success({
          content: `我是success提示信息`,
          index:111111
        });
      },
      warningInfo() {
        this.$Message.warning({
          content: `我是success提示信息`,
          index:111111
        });
      },
      errorInfo() {
        this.$Message.error({
          content: `我是success提示信息`,
          index:111111
        });
      }
  },
}
</script>

# message 提示
----
### 基础用法

<div class="demo-block">
  <e8-switch size="large" @change="handleOpen1">
      <span slot="open">打开</span>
      <span slot="close">关闭</span>
    </e8-switch>
    <e8-button type="info" @click="messageInfo">普通提示</e8-button>
    <e8-button type="success" @click="successInfo">成功提示</e8-button>
    <e8-button type="warning" @click="warningInfo">警告提示</e8-button>
    <e8-button type="danger" @click="errorInfo">错误提示</e8-button>
</div>

::: demo
```js
js
handleOpen1 (val) {
       let text = val ? '打开的': '关闭的'
        this.$Message.success({
          content: `我是${text}提示信息`,
          index:111111
        });
      },
      messageInfo() {
        this.$Message.info({
          content: `我是info提示信息`,
          index:111111
        });
      },
      successInfo() {
        this.$Message.success({
          content: `我是success提示信息`,
          index:111111
        });
      },
      warningInfo() {
        this.$Message.warning({
          content: `我是success提示信息`,
          index:111111
        });
      },
      errorInfo() {
        this.$Message.error({
          content: `我是success提示信息`,
          index:111111
        });
      }
```
```html
html
    <e8-switch size="large" @change="handleOpen1">
      <span slot="open">打开</span>
      <span slot="close">关闭</span>
    </e8-switch>
    <e8-button type="info" @click="messageInfo">普通提示</e8-button>
    <e8-button type="success" @click="successInfo">成功提示</e8-button>
    <e8-button type="warning" @click="warningInfo">警告提示</e8-button>
    <e8-button type="danger" @click="errorInfo">错误提示</e8-button>

```
:::

## Message instance #
通过直接调用以下方法来使用组件：

`this.$Message.info(config)`

`this.$Message.success(config)`

`this.$Message.warning(config)`

`this.$Message.error(config)`

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | 提示内容 | String |  — | — |
| duration | 自动关闭的延时，单位秒 | Number |  数字| — |


## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 点击按钮时触发 | event |
