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
      options3:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},{value: '3',label: 'New York3'},{value: '4',label: 'New York2'},{value: '5',label: 'New York3'},{value: '6',label: 'New York3'},{value: '7',label: 'New York7'},{value: '8',label: 'New York3'}],
      options4:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},{id: '3',text: 'New York3'},{id: '4',text: 'New York5'},],
      options6:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},],
      options7:[{value: '1',label: 'New York1 York1 York1'},{value: '2',label: 'New York2'},{value: '3',label: '上海人民观测哈哈哈'},{value: '4',label: '上海人民观测哈哈哈海2'},{value: '5',label: '上海35455555445'},{value: '6',label: '上海3都是对的的士速递'},{value: '7',label: '上海3都是对的的士速递二人'},],
      options8:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},{value: '3',label: '上海'},{value: '4',label: '上海2'},{value: '5',label: '上海3'},],
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
    Input,
    // E8Select
  }
};
</script>

<div class="demo-block">
  <div>
    <e8-select placeholder='不带清除按钮的下拉'  @on-select="onSelectedFn" :options="options6" :defaultValue="defaultValue1"></e8-select>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select placeholder='有默认文本的下拉' :clearable="true" @on-select="onSelectedFn" :options="options" ></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select placeholder='带清除按钮的下拉' :clearable="true" @on-select="onSelectedFn" :options="options"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :disabled="true" placeholder='禁用的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-field="text"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select label-text="姓名:" placeholder='带label的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-field="text"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select label-text="姓名" :label-directionIsUp="true" placeholder='label在上方的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-field="text"></e8-select>
    </e8-row>

  </div>
</div>

::: demo
```html
<div>
  <e8-select placeholder='不带清除按钮的下拉'  @on-select="onSelectedFn" :options="options"></e8-select>
  <e8-select placeholder='带清除按钮的下拉' :clearable="true" @on-select="onSelectedFn" :options="options"></e8-select>
  <e8-select :disabled="true" placeholder='禁用的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-Field="text"></e8-select>
  <e8-select label-text="姓名:" placeholder='带label的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-Field="text"></e8-select>
  <e8-select label-text="姓名" :label-directionIsUp="true" placeholder='label在上方的下拉' @on-select="onSelectedFn2" :options="options2" key-field="id" show-Field="text"></e8-select>
  ...
</div>
js
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
```
:::

### 多选下拉选择框
<div class="demo-block">
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options"></e8-select>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options4" key-field="id" show-field="text" :defaultValue="defaultValue2"></e8-select>
    </e8-row>
  </div>
  
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-select :clearable="true" :multiple="true" placeholder='带清除按钮的下拉' @on-select="onSelectedFn2" :options="options" ></e8-select>
    </e8-row>
  </div>
   <div class="m-10">
      <e8-select :disabled="true" @on-select="onSelectedFn2" :options="options2" key-field="id" show-field="text"></e8-select>
  </div>
   <div class="m-10">
      <e8-select  @on-select="onSelectedFn2" :options="options2" :multiple="true" key-field="id" show-field="text"></e8-select>
  </div>
  <div class="m-10">
      <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
  </div>
  <div class="m-10">
   <e8-row  type="flex" justify="space-between">
       <e8-col :span="6">
           <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
       </e8-col>
       <e8-col :span="6">
           <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
       </e8-col>
        <e8-col :span="6">
           <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
       </e8-col>
        <e8-col :span="3">
           <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
       </e8-col>
  </e8-row>
  </div>
   <div class="m-10">
    <e8-row  type="flex" justify="space-between">
        <e8-col :span="12">
            <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
        </e8-col>
        <e8-col :span="6">
            <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
        </e8-col>
    </e8-row>
  </div>
</div>

::: demo
```html
<div>
  <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options" defaultValue="2"></e8-select>
   <e8-select :clearable="true" :multiple="true" placeholder='带清除按钮的下拉' @on-select="onSelectedFn2" :options="options" ></e8-select>
  <e8-select :disabled="true" @on-select="onSelectedFn2" :options="options2" key-field="id" show-field="text"></e8-select>
  <e8-select  @on-select="onSelectedFn2" :options="options2" :multiple="true" key-field="id" show-field="text"></e8-select>
  <e8-select placeholder='可以多选' :clearable="true" :multiple="true" @on-select="onSelectedFn3" :options="options3"></e8-select>
  ...
</div>
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
```
:::


### 可搜索的拉选择框
<div class="demo-block">
 <div class="m-10">
    <e8-row  type="flex" justify="space-between">
        <e8-col :span="12">
            <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options7" :filterable="true" :clearable="true"></e8-select>
        </e8-col>
        <e8-col :span="6">
            <e8-select  placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options8"  :filterable="true" :clearable="true"></e8-select>
        </e8-col>
    </e8-row>
</div>
</div>

::: demo
```html
<div>
  <e8-select :multiple="true" placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options7" :filterable="true" :clearable="true"></e8-select>
  <e8-select  placeholder='不带清除按钮的下拉' @on-select="onSelectedFn2" :options="options8"  :filterable="true" :clearable="true"></e8-select>
  ...
</div>
export default {
  data() {
    return {
      options:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},],
      options2:[{id: '1',text: 'New York1'},{id: '2',text: 'New York2'},{id: '3',text: 'New York3'},{id: '4',text: 'New York5'},],
      options3:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},{value: '3',label: 'New York3'},{value: '4',label: 'New York2'},{value: '5',label: 'New York3'},{value: '6',label: 'New York3'},{value: '7',label: 'New York7'},{value: '8',label: 'New York3'}]
    };
  },
};
```
:::




### Attributes

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| defaultValue  |默认文本值 | String/ArrayString  |  可选：配合options使用  |  例如：单选：'1',多选：['1','2']  |
| options  |下拉数据 | Array   |  必须有  |  —  |
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

<!-- 外部使用这个组件的时候如何获取到值=>v-model，参考其他组件库  https://fatge.xyz/blog/juejin-example-3#/Date-picker 
组件内部使用 model: {
    prop: "value",
    event: "input"
  },
-->