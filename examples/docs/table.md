# Table
----
### 基础用法
基础表格

<script>
  //验证例子组件的可用性
// import Input from '../../packages/input';  全局注册了这么没有必要单独再引入注册一次了
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "年龄2",
          key: "age2",
          width: 150,
          align: "center"
        },
        {
          title: "地址",
          key: "address",
          width: 250,
          align: "center"
        }
      ],
      columns2: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "学校",
          key: "school"
        },
        {
          title: "班级",
          key: "inClass"
        },
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "年龄1",
          key: "age1",
          width: 150,
        },
        {
          title: "年龄3",
          key: "age3"
        },
        {
          title: "年龄4",
          key: "age4",
          width: 250,
          align: "center"
        },{
          title: "手机号码",
          key: "mobile",
          width: 250,
          align: "center"
        },
        
        {
          title: "地址",
          key: "address",
          width: 250,
          align: "center"
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          school: 18,
          inClass: 18,
          sex: '男',
          age2: 18,
          age1: 1832333333,
          age3: 1348,
          age4: 18323,
          mobile: 1832312323322,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 18,
          school: 18,
          inClass: 18,
          sex: '男',
          age2: 18,
          age1: 1832333333,
          age3: 1348,
          age4: 18323,
          mobile: 1832312323322,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 18,
          school: 18,
          inClass: 18,
          sex: '男',
          age2: 18,
          age1: 1832333333,
          age3: 1348,
          age4: 18323,
          mobile: 1832312323322,
          address: "New York No. 1 Lake Park"
        },
        {
          age2: 18,
          age: 18,
          school: 18,
          inClass: 18,
          sex: '男',
          age2: 18,
          age1: 1832333333,
          age3: 1348,
          age4: 18323,
          mobile: 1832312323322,
          address: "New York No. 1 Lake Park"
        }
      ],
      data7: [
        {
          name: "John Brown",
          age: 18,
          age2: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          age2: 18,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          age2: 18,
          address: "Sydney No. 1 Lake Park"
        },
        {
          age2: 18,
          name: "Jon Snow",
          age: 26,
          address: "上海市闵行区华中路 1818 弄"
        },
        {
          name: "Joe Black",
          age: 30,
          age2: 18,
          address: "Sydney No. 1 Lake Park"
        },
        {
          age2: 18,
          name: "Jon Snow",
          age: 26,
          address: "上海市闵行区华中路 1818 弄"
        },
        {
          name: "Joe Black",
          age: 30,
          age2: 18,
          address: "Sydney No. 1 Lake Park"
        },
        {
          age2: 18,
          name: "Jon Snow",
          age: 26,
          address: "上海市闵行区华中路 1818 弄"
        },
        {
          name: "Joe Black",
          age: 30,
          age2: 18,
          address: "Sydney No. 1 Lake Park"
        },
        {
          age2: 18,
          name: "Jon Snow",
          age: 26,
          address: "上海市闵行区华中路 1818 弄"
        }
      ]
    };
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
    // Input
  }
};
</script>

<div class="demo-block">
  <div>
    <!-- <e8-table :columns="columns" :data="data6" ></e8-table> -->
  </div>
  <div class="m-10">
     带斑马线的表格
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-table :columns="columns" :data="data6" is-striped="true" ></e8-table>
    </e8-row>
      
  </div>
  
   <div class="m-10">
     带边框线的表格
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-table :columns="columns" :data="data6" is-border="true" is-striped="true" ></e8-table>
    </e8-row>
  </div>
  <div class="m-10">
     可横线滚动
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-table :columns="columns2" :data="data6" is-border="true" is-striped="true" width="100%"></e8-table>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-table :columns="columns2" :data="data6" is-border="true" is-striped="true" width="1000"></e8-table>
    </e8-row>
  </div>
</div>

::: demo
```html
<div>
  <!-- <e8-table :columns="columns" :data="data6" ></e8-table>
  <e8-table :columns="columns" :data="data6" is-striped="true"></e8-table>
  <e8-table :columns="columns" :data="data6" is-border="true" is-striped="true"></e8-table> -->
  ...
</div>
```
:::

### 固定表头
<div class="demo-block">
  <e8-table :columns="columns" :data="data7" isStriped="true" height="250" ></e8-table>
   <div class="m-10">
   
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

### 固定列
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

### 可编辑
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

### 可横线滚动
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

### 可多选
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
| columns     | 类型   | Array    |   表头数据 |     —    |
| data     | 类型   | Array    |   表格数据 |     —    |
| isStriped     | 是否带斑马线   | Boolean    | — | false   |
| is-border     | 是否带表格的边框线   | Boolean    | — | false   |
| width  | 有宽度x轴滚动    | string/number   | —   | —    |
| defaultCellWidth  | 有x轴滚动时的每个td的宽度   | string/number   | —   | 100   |
| height  |有高度y轴滚动  | string/number   | —   | -   |




### Input events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-focus  |获得焦点时事件 | 无   | 
| on-blur  |失去得焦点时事件 | 无   | 
| on-input  |input值改变时事件 | input的值   | 
| on-clear  |clear时事件 | 无   | 
| on-keyup  |keyup(输入框focus时按下键盘任意一个键)时事件 | input的值   | 