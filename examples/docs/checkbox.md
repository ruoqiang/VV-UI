# Checkbox
----
### 基础用法
基础Checkbox

<script>
  //验证例子组件的可用性
// import Input from '../../packages/input';  全局注册了这么没有必要单独再引入注册一次了
export default {
  data() {
    return {
      listArr0: ['好的','好的1','好的2','好的3'],
      listSelected01: ['好的2'],
      listArr: [{label:'好的',isDisalbed:false},{label:'好的2',isDisalbed:true},{label:'好的3',isDisalbed:true},{label:'好的4',isDisalbed:false},],
      listSelected: ['好的2'],
      
    };
  },
  methods: {
    inputHnaderrr(e) {
      console.log("sddd", e.target.value)
    },
    onClearVlaue(e) {
       console.log("清除了")
    },
    switchSelectedAll(val) {
       if(val) {
         this.listSelected = this.listArr
       } else {
         this.listSelected = []
       }
    },
    // switchSelectedAllExceptDisabled(val) {
    //    if(val) {
    //      this.listSelected = this.listArr
    //    } else {
    //      this.listSelected = []
    //    }
    // }
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
     数据列表循环的复选组（全选逻辑需要自己额外实现，通过判断data.length实现）
  </div>
  <div class="m-10">
  <span></span>
    <e8-row  type="flex" justify="space-between">
      <e8-checkbox :value="true" :showSlot='false' @change="switchSelectedAll">全选</e8-checkbox>
    </e8-row>
  </div>
   <div class="m-10">
    <e8-row  type="flex" justify="space-between">
    <e8-checkbox-group v-model="listSelected">
      <span v-for="(item,index) in listArr" :key="index"><e8-checkbox :label='item.label' :disabled="item.isDisalbed"></e8-checkbox></span>
      </e8-checkbox-group>
    </e8-row>
      
  </div>
  <div class="m-10">
     非数据列表循环的复选组
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
     <e8-checkbox-group v-model="listSelected01">
        <e8-checkbox label='好的2' :disabled="true"></e8-checkbox>
        <e8-checkbox  label='好的3' :disabled="true"></e8-checkbox>
        <e8-checkbox  label='好的4' ></e8-checkbox>
        <e8-checkbox  label='好的5' ></e8-checkbox>
      </e8-checkbox-group>
    </e8-row>
      
  </div>
  
   <div class="m-10">
     单个复选框--未选中状态
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-checkbox >好的</e8-checkbox>
    </e8-row>
  </div>
  <div class="m-10">
     单个复选框--选中状态
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-checkbox :value="true">好的</e8-checkbox>
    </e8-row>
  </div>
  <div class="m-10">单个复选框--非选中状态并禁用</div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-checkbox :value="false" :disabled="true">好的</e8-checkbox>
    </e8-row>
  </div>
  <div class="m-10">单个复选框--选中状态并禁用</div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-checkbox :value="true" :disabled="true">好的</e8-checkbox>
    </e8-row>
  </div>
</div>

::: demo
```html
js
data() {
    return {
      listArr0: ['好的','好的1','好的2','好的3'],
      listSelected01: ['好的2'],
      listArr: [{label:'好的',isDisalbed:false},{label:'好的2',isDisalbed:true},{label:'好的3',isDisalbed:true},{label:'好的4',isDisalbed:false},],
      listSelected: ['好的2'],
      
    };
  },
<div>
  <e8-checkbox :value="true" :showSlot='false' @change="switchSelectedAll">全选</e8-checkbox>
  <e8-checkbox-group v-model="listSelected">
    <span v-for="(item,index) in listArr" :key="index"><e8-checkbox :label='item.label' :disabled="item.isDisalbed"></e8-checkbox></span>
  </e8-checkbox-group>
  <e8-checkbox-group v-model="listSelected01">
    <e8-checkbox label='好的2' :disabled="true"></e8-checkbox>
    <e8-checkbox  label='好的3' :disabled="true"></e8-checkbox>
    <e8-checkbox  label='好的4' ></e8-checkbox>
    <e8-checkbox  label='好的5' ></e8-checkbox>
  </e8-checkbox-group>

   <e8-checkbox >好的</e8-checkbox>
    <e8-checkbox :value="true">好的</e8-checkbox>
    <e8-checkbox :value="false" :disabled="true">好的</e8-checkbox>
    <e8-checkbox :value="true" :disabled="true">好的</e8-checkbox>
  ...
</div>
```
:::

<!-- ### 固定表头
<div class="demo-block">
   <div class="m-10">
   
  </div>
</div> -->



### Attributes

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| value     | 单个复选框时的是否选中的值   | Boolean    |  true/false |     false    |
| disabled     | 是否禁用   | Boolean    |   true/false |     false    |
| v-model     | 组复选框时的选中的值   | Array    | [] | —    |
| label     | 组复选框时非数据遍历得到的checkbox的值   | String    | —  | —    |
| showFiled     | 组复选框时数据遍历得到的checkbox的值显示字段   | String    | —  | label    |





### Input events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-change  |选择checkbox时事件 | 无   | 
