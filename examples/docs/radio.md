# Radio 单选框
----
### 基础用法


<script>
  //验证例子组件的可用性
// import Input from '../../packages/input';  全局注册了这么没有必要单独再引入注册一次了
export default {
  data() {
    return {
      radioList: [{"id":"1","name":"上海"},{"id":"2","name":"北京","disabled":true},{"id":"3","name":"杭州","selected":true,"disabled":true},{"id":"4","name":"上海4"}
      ,{"id":"5","name":"上海5"}],
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
      <e8-col ><e8-radio >上海</e8-radio><e8-radio >上海2</e8-radio><e8-radio >上海3</e8-radio></e8-col>
  </e8-row>
  </div>
  <div> 默认选中</div>
   <div class="m-10">
       <e8-row  type="flex" justify="space-between">
       <e8-col ><e8-radio :value="true">上海2</e8-radio></e8-col>
  </e8-row>   
  </div>
    
  </div>
 
</div>

::: demo
```html
<div>
  <e8-radio >上海</e8-radio><e8-radio >上海2</e8-radio><e8-radio >上海3</e8-radio>
  <e8-radio :value="true">上海2</e8-radio>
  ...
</div>
```
:::
### 组合用法
<div class="demo-block">
    <div class="m-10" style="height:60px;">
        <e8-row  type="flex" justify="space-between">
            <e8-col ><e8-radio-group :data="radioList" @change="radioGroupChange"></e8-radio-group></e8-col>
        </e8-row>
        <div class="m-10">
            已选择：{{radioSelected.name}}
        </e8-row>   
      </div> 
    </div> 
</div> 

::: demo
```html
js
 data() {
    return {
      radioList: [{"id":"1","name":"上海"},{"id":"2","name":"北京","disabled":true},{"id":"3","name":"杭州","selected":true,"disabled":true},{"id":"4","name":"上海4"}
      ,{"id":"5","name":"上海5"}]
    };
  },
<div>
  <e8-radio-group :data="radioList" @change="radioGroupChange"></e8-radio-group>
  ...
</div>
```
:::


### Attributes

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| data  |组合单选时的数据 | Array   |  —  |  —  |


### Input events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-change  |radio切换时事件 | 无   | 
