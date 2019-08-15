# Select 选择框
----
### 单选下拉选择框

<script>
  //验证例子组件的可用性  如果这里不引入组件与定义事件 直接使用的话 事件会失效(尤其是组件里还有子组件的时候)
import Input from '../../packages/input';
import E8Select from '../../packages/select';
export default {
  data() {
    return {
      options:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},],
      options2:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},{id: '3',text: 'New York3'},{id: '4',text: 'New York5'},],
      options3:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},{value: '3',label: 'New York3'},{value: '4',label: 'New York2'},{value: '5',label: 'New York3'},{value: '6',label: 'New York3'},{value: '7',label: 'New York7'},{value: '8',label: 'New York3'}]
    };
  },
  methods: {
    inputHnaderrr(e) {
      console.log("sddd", e.target.value)
    },
    onClearVlaue(e) {
       console.log("清除了")
    },
    onSelectedFn(item) {
       console.log("item",item)
    },
    onSelectedFn2(item) {
       console.log("item2",item)
    },
    onSelectedFn3(item) {
       console.log("item3",item)
    }
  },
  components: {
    Input,
    // E8Select
  }
};
</script>

<div class="demo-block">
  <div>
    <e8-select placeholder='不带清除按钮的下拉'  @on-select="onSelectedFn" :value="options"></e8-select>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select placeholder='带清除按钮的下拉' :clearable="true" @on-select="onSelectedFn" :value="options"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :disabled="true" placeholder='禁用的下拉' @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select label-text="姓名:" placeholder='带label的下拉' @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select label-text="姓名" :labelDirectionIsUp="true" placeholder='label在上方的下拉' @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
    </e8-row>

  </div>
</div>

::: demo
```html
<div>
  <e8-select placeholder='不带清除按钮的下拉'  @on-select="onSelectedFn" :value="options"></e8-select>
  <e8-select placeholder='带清除按钮的下拉' :clearable="true" @on-select="onSelectedFn" :value="options"></e8-select>
  <e8-select :disabled="true" placeholder='禁用的下拉' @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
  <e8-select label-text="姓名:" placeholder='带label的下拉' @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
  <e8-select label-text="姓名" :labelDirectionIsUp="true" placeholder='label在上方的下拉' @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
  ...
</div>
```
:::

### 多选下拉选择框
<div class="demo-block">
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :value="options" ></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :clearable="true" :multiple="true" placeholder='带清除按钮的下拉' @on-select="onSelectedFn2" :value="options" ></e8-select>
    </e8-row>
  </div>
   <div class="m-10">
      <e8-select :disabled="true" @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
  </div>
   <div class="m-10">
      <e8-select  @on-select="onSelectedFn2" :value="options2" :multiple="true" keyField="id" showField="text"></e8-select>
  </div>
  <div class="m-10">
      <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :value="options3"></e8-select>
  </div>
   <e8-row  type="flex" justify="space-between">
       <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :value="options3"></e8-select>
        <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :value="options3"></e8-select>
  </e8-row>
      
</div>

::: demo
```html
<div>
  <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :value="options" ></e8-select>
   <e8-select :clearable="true" :multiple="true" placeholder='带清除按钮的下拉' @on-select="onSelectedFn2" :value="options" ></e8-select>
  <e8-select :disabled="true" @on-select="onSelectedFn2" :value="options2" keyField="id" showField="text"></e8-select>
  <e8-select  @on-select="onSelectedFn2" :value="options2" :multiple="true" keyField="id" showField="text"></e8-select>
  <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :value="options3"></e8-select>
  ...
</div>
```
:::

### Attributes

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| placeholder  |placeholder | String   |  —  |  —  |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| clearable  |是否带清除图标 | Boolean   |  —  |  false  |
| multiple  |是否可以多选 | Boolean   |  —  |  false  |
| label-text  |label文本 | String   |  —  |  —   |
| keyField、showField  |下拉数据的每一项key、value字段显示，当后台提交字段时需要id/text | String   |  —  |  value/label   |



### Input events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-focus  |获得焦点时事件 | 无   | 
| on-blur  |失去得焦点时事件 | 无   | 
| on-input  |input值改变时事件 | input的值   | 
| on-clear  |clear时事件 | 无   | 
| on-keyup  |keyup(输入框focus时按下键盘任意一个键)时事件 | input的值   | 
