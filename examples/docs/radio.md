# Radio 输入框
----
### 基础用法
使用输入框原来的`type`属性来定义输入框类型。

<script>
  //验证例子组件的可用性
// import Input from '../../packages/input';  全局注册了这么没有必要单独再引入注册一次了
export default {
  data() {
    return {
      radioList: [{"id":"1","name":"上海"},{"id":"2","name":"北京","disabled":true},{"id":"3","name":"杭州","selected":true,"disabled":true},{"id":"4","name":"上海4"}],
      radioSelected:{}
    };
  },
  methods: {
    inputHnaderrr(e) {
      console.log("sddd", e.target.value)
    },
    onClearVlaue(e) {
       console.log("清除了")
    },
    radioGroupChange(val) {
       console.log("radioGroupChange",val)
       this.radioSelected = val
    }
  },
  components: {
    // Input
  }
};
</script>

<div class="demo-block">
  <div> 默认非选中</div>
  <div class="m-10">
  <e8-row  type="flex" justify="space-between">
      <e8-col ><e8-radio >上海</e8-radio></e8-col>
  </e8-row>
  </div>
  <div> 默认选中</div>
   <div class="m-10">
       <e8-row  type="flex" justify="space-between">
      <e8-col ><e8-radio :value="true">上海2</e8-radio></e8-col>
  </e8-row>   
  </div>
  <div> 默认选中</div>
   <div class="m-10">
       <e8-row  type="flex" justify="space-between">
      <e8-col ><e8-radio-group :data="radioList" @change="radioGroupChange"></e8-radio-group></e8-col>
  </e8-row>
    <div class="m-10">
        {{radioSelected.name}}
    </e8-row>   
  </div>   
  </div>
 
</div>

::: demo
```html
<div>
  <!-- <e8-input placeholder='文本框'></e8-input>
  <e8-input type='number' value="value10" placeholder="数字框"></e8-input>
   <e8-input type='password' placeholder="密码框"></e8-input>
  <e8-input type='tel' value="value9" placeholder="手机号码"></e8-input>
  <e8-input type='tel'  :clearable="true" value='带清除图标的输入框'   placeholder="带清除图标的输入框"></e8-input> -->
  ...
</div>
```
:::


### Attributes

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| focus  |默认值 | String   |  —  |  —  |
| type     | 类型   | String    |   text,password,number等原生input的type |     —    |
| size     | 尺寸   | String  |   default,large,small            |    —     |
| is-danger     | 是否警告颜色   | Boolean    | — | false   |
| is-success     | 是否通过颜色   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| clearable  |是否带清除图标 | Boolean   |  —  |  false  |
| label-text  |label文本 | String   |  —  |  —   |
| is-textarea  |是否为textarea,其他属性基本跟Input组件一致 | Boolean   |  —  |  false   |



### Input events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-change  |radio切换时事件 | 无   | 
