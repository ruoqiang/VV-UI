# Input 输入框
----
### 基础用法
使用输入框原来的`type`属性来定义输入框类型。

<script>
  //验证例子组件的可用性
import Input from '../../packages/input';
export default {
  data() {
    return {};
  },
  methods: {
    inputHnaderrr(e) {
      console.log("sddd", e.target.value)
    },
    onClearVlaue(e) {
       console.log("清除了")
    }
  },
  components: {
    Input
  }
};
</script>

<div class="demo-block">
  <div>
    <e8-input placeholder='文本框' :clearable="true" @on-input="inputHnaderrr" ></e8-input>
  </div>
  <div class="m-10">
  <e8-row  type="flex" justify="space-between">
      <e8-col ><e8-input type='number' placeholder="数字框"></e8-input></e8-col>
      <e8-col ><e8-input type='password' placeholder="密码框"></e8-input></e8-col>
      <e8-input type='tel' placeholder="手机号码"></e8-input>
  </e8-row>
      
  </div>
   <div class="m-10">
      <e8-input type='tel'  :clearable="true" value='带清除图标的输入框' placeholder="带清除图标的输入框" @on-clear="onClearVlaue" ></e8-input>
      <e8-input type='tel'  :clearable="true" value='带清除图标的输入框' placeholder="带清除图标的输入框" @on-clear="onClearVlaue" ></e8-input>
  </div>
 
</div>

::: demo
```html
<div>
  <e8-input placeholder='文本框'></e8-input>
  <e8-input type='number' value="value10" placeholder="数字框"></e8-input>
   <e8-input type='password' placeholder="密码框"></e8-input>
  <e8-input type='tel' value="value9" placeholder="手机号码"></e8-input>
  <e8-input type='tel'  :clearable="true" value='带清除图标的输入框'   placeholder="带清除图标的输入框"></e8-input>
  ...
</div>
```
:::

### 输入框边框颜色状态
<div class="demo-block">
  <e8-input :is-danger="true" placeholder="验证失败的颜色"></e8-input>
   <div class="m-10">
    <e8-input :is-success="true" placeholder="验证通过的颜色"></e8-input>
  </div>
</div>

::: demo
```html
<div>
 <e8-input :is-danger="true" placeholder="验证失败的颜色"></e8-input>
  <e8-input :is-success="true" placeholder="验证通过的颜色"></e8-input>
</div>
```
:::

### 是否禁用
<div class="demo-block">
  <e8-input :disabled="true" placeholder="禁用"></e8-input>
   <div class="m-10">
    <e8-input :disabled="false" placeholder="不禁用"></e8-input>
  </div>
  
</div>

::: demo
```html
<div>
  <e8-input :disabled="true" placeholder="禁用"></e8-input>
  <e8-input :disabled="false" placeholder="不禁用"></e8-input>
</div>
```
:::

### 不同尺寸
Input 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸默认中等尺寸。
额外的尺寸：```large```、```small```，通过设置```size```属性来配置它们。

<div class="demo-block">
   <div class="m-10"><e8-input  placeholder="默认尺寸"></e8-input></div>
   <div class="m-10"><e8-input size="large" placeholder="大尺寸"></e8-input></div>
   <div class="m-10"><e8-input size="small" placeholder="小型尺寸"></e8-input></div>
</div>

::: demo
```html
<div>
  <e8-input  placeholder="默认尺寸"></e8-input>
  <e8-input size="large" placeholder="大尺寸"></e8-input>
  <e8-input size="small" placeholder="小型尺寸"></e8-input>
</div>
```
:::

### 带插槽的输入框
<div class="demo-block">
  <e8-input placeholder="我是插槽的内容"><span slot="prepend">我是插槽的</span></e8-input>
   <div class="m-10">
    <e8-input  placeholder="我是插槽的内容2"><span slot="append">我是插槽的内容2</span></e8-input>
  </div>
</div>

::: demo
```html
<div>
  <e8-input placeholder="我是插槽的内容"><span slot="prepend">我是插槽的</span></e8-input>
  <e8-input  placeholder="我是插槽的内容2"><span slot="append">我是插槽的内容2</span></e8-input>
</div>
```
:::

### 带label的输入框
<div class="demo-block">
 <e8-input placeholder="带label的输入框" label-text="姓名：" ></e8-input>
   <div class="m-10">
   <e8-input placeholder="带label的输入框" label-text="手机号码："></e8-input>
  </div>
  <div class="m-10">
   <e8-input placeholder="label在输入框上面" label-text="手机号码：" :labelDirectionIsUp="true"></e8-input>
  </div>
</div>

::: demo
```html
<div>
  <e8-input placeholder="带label的输入框" label-text="姓名："></e8-input>
   <e8-input placeholder="带label的输入框" label-text="手机号码："></e8-input>
   <e8-input placeholder="带label的输入框" label-text="手机号码：" :labelDirectionIsUp="true"></e8-input>
</div>
```
:::

### textarea文本框
<div class="demo-block">
 <e8-input :is-textarea="true"  :textareaMinHeight="120" labelText="dd:" value="ee"></e8-input>
 <e8-input :is-textarea="true"  :textareaMinHeight="120" labelText="回复：" value="你好。。" :labelDirectionIsUp="true"></e8-input>
   
</div>

::: demo
```html
<div>
   <e8-input :is-textarea="true" :disabled="true" value="ee"></e8-input>
   <e8-input :is-textarea="true" :textareaMinHeight="120" labelText="回复：" value="你好。。" :labelDirectionIsUp="true"></e8-input>
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
| on-focus  |获得焦点时事件 | 无   | 
| on-blur  |失去得焦点时事件 | 无   | 
| on-input  |input值改变时事件 | input的值   | 
| on-clear  |clear时事件 | 无   | 
| on-keyup  |keyup(输入框focus时按下键盘任意一个键)时事件 | input的值   | 
