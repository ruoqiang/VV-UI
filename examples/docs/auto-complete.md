# auto-complete 自动完成
----
### 单选下拉选择框 auto-complete自动完成

<script>
  //验证例子组件的可用性  如果这里不引入组件与定义事件 直接使用的话 事件会失效(尤其是组件里还有子组件的时候) --->index.js里面全局注册一下就好哦了
import Input from '../../packages/input';
import E8Select from '../../packages/select';
import E8AutoComplete from '../../packages/auto-complete/'
export default {
  data() {
    return {
      options:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},],
      options2:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},{id: '3',text: 'New York3'},{id: '4',text: 'New York5'},],
      options3:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},{value: '3',label: 'New York3'},{value: '4',label: 'New York4'}],
      options4:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},{id: '3',text: 'New York3'},{id: '4',text: 'New York5'},],
      options6:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},],
      defaultValue1: '1',
      defaultValue2: ['1','2']
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
      //  console.log("item",item)
    },
    onSelectedFn2(item) {
      //  console.log("item2",item)
    },
    onSelectedFn3(item) {
      //  console.log("item3",item)
    }
  },
  components: {
    // Input,
    // E8AutoComplete
    // E8Select
  }
};
</script>

<div class="demo-block">
  <div>
    <e8-auto-complete placeholder='不带清除按钮的下拉'  @on-select="onSelectedFn" :filterable="true" :options="options6" ></e8-auto-complete>
  <!-- <E8AutoComplete /> -->
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-auto-complete :disabled="true" placeholder='禁用的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-field="text"></e8-auto-complete>
    </e8-row>
  </div>
</div>

::: demo
```html
<div>
  ...
</div>
```
:::

### 多选下拉选择框 auto-complete自动完成
<div class="demo-block">
  
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-auto-complete :multiple="true" placeholder='不带清除按钮的下拉' :options="options"  :clearable="true"></e8-auto-complete>
    </e8-row>
  </div>
   <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-auto-complete :multiple="true" placeholder='不带清除按钮的下拉' :options="options3"  :clearable="true"></e8-auto-complete>
    </e8-row>
  </div>
</div>

::: demo
```html
<div>

  ...
</div>

```
:::

### Attributes `基本等他select组件的属性(少了filterable属性)`

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| defaultValue  |默认文本值 | String/ArrayString  |  可选：配合options使用  |  例如：单选：'1',多选：['1','2']  |
| options  |下拉数据(注意所有的选项值不能出现重复的否则会报错：[{value: '1',label: 'New York1'},{value: '2',label: 'New York1'},]) | Array   |  必须有  |  —  |
| placeholder  |placeholder | String   |  可选  |  请选择  |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| clearable  |是否带清除图标 | Boolean   |  —  |  false  |
| multiple  |是否可以多选 | Boolean   |  —  |  false  |
| label-directionIsUp  |是否让标签在选择框上方面 | Boolean   |  —  |  false   |
| label-text  |label文本 | String   |  —  |  —   |
| keyField、show-Field  |下拉数据的每一项key、value字段显示，当后台提交字段时需要id/text | String   |  —  |  value/label   |




### Select events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-focus  |获得焦点时事件 | 无   | 
| on-blur  |失去得焦点时事件 | 无   | 
| on-input  |input值改变时事件 | input的值   | 
| on-clear  |clear时事件 | 无   | 

### Select methods

| 方法名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| getValue  |暂未实现(有必要需要这个方法吗)-->外部使用这个组件的时候如何最简单的获取到值=>v-model，参考其他组件库 | 获取当前组件选择的value值   | 
| setValue  |暂未实现(有必要吗) | 设置当前组件选择的value值   | 

