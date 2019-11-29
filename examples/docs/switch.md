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
    return {}
  },
  methods: {
    change(val) {
       console.log(val)
       this.$loading.start()
    }
  },
}
</script>

# switch 开关
----
### 基础用法

<div class="demo-block">
  <e8-switch :value="true" @change="change">
    <span slot="open">开</span>
    <span slot="close">关</span>
  </e8-switch>
  <e8-switch size="large">
      <span slot="open">打开</span>
      <span slot="close">关闭</span>
    </e8-switch>
    <e8-switch size="small">
      <span slot="open"></span>
      <span slot="close"></span>
    </e8-switch>
    <e8-switch size="small" :disabled="true">
      <span slot="open"></span>
      <span slot="close"></span>
    </e8-switch>
</div>

::: demo
```html

<e8-switch :value="true">
    <span slot="open">开</span>
    <span slot="close">关</span>
  </e8-switch>
  <e8-switch size="large">
      <span slot="open">打开</span>
      <span slot="close">关闭</span>
    </e8-switch>
    <e8-switch size="small">
      <span slot="open"></span>
      <span slot="close"></span>
    </e8-switch>
    <e8-switch size="small" :disabled="true">
      <span slot="open"></span>
      <span slot="close"></span>
    </e8-switch>

```
:::


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 类型 | Boolean |  true/false | false |
| size | 类型 | String |  `primary`, `large`, `small`| primary |
| disabled | 禁用切换| Boolean | — | false |


## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 点击按钮时触发 | event |
