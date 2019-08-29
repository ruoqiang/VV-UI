# DatePicker 日期选择
----
### 日期选择拉选择框

<script>
  //验证例子组件的可用性  如果这里不引入组件与定义事件 直接使用的话 事件会失效(尤其是组件里还有子组件的时候)
import Input from '../../packages/input';
import E8Select from '../../packages/select';
export default {
  data() {
    return {
      options:[{value: '1',label: 'New York1'},{value: '2',label: 'New York2'},]
    }
  },
  methods: {
    inputHnaderrr(e) {
      console.log("sddd", e.target.value)
    },
    onClearVlaue(e) {
       console.log("清除了")
    },
  },
  components: {
    Input,
    // E8Select
  }
};
</script>

<div class="demo-block">
  <div>
    <e8-date-picker value="2019-8-9" :labelDirectionIsUp="true" label-text="有默认值的日期选择"  placeholder='不带清除按钮的下拉'  ></e8-date-picker>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
    <e8-date-picker :labelDirectionIsUp="true" label-text="没有默认值的日期选择" placeholder='请选择日期'  ></e8-date-picker></e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
        <e8-col :span="6">
           <e8-date-picker :labelDirectionIsUp="true" label-text="禁用的日期选择" value="2019-08-29" placeholder='请选择日期'  :disabled="true"></e8-date-picker>
       </e8-col>
       <e8-col :span="6">
           <e8-date-picker  :labelDirectionIsUp="true" label-text="开始日期" value="2019-08-29" placeholder='请选择日期'  :disabled="true"></e8-date-picker>
       </e8-col>
    </e8-row>
  </div>
<div class="m-10">
    <e8-row  type="flex" justify="space-between">
        <e8-col :span="6">
           <e8-date-picker label-text="带label的日期选择" value="2019-08-29" placeholder='请选择日期'  ></e8-date-picker>
       </e8-col>
        <e8-col :span="6">
           <e8-date-picker  placeholder='不带label的日期选择'  ></e8-date-picker>
       </e8-col>
    </e8-row>
  </div>
  
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
       <e8-col :span="6">
            <e8-date-picker label-text="可清除的选择日期" :labelDirectionIsUp="true" :clearable="true" value="2019-08-29" :hasConfirmButton="true" placeholder='请选择日期2'></e8-date-picker>
       </e8-col>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
      <e8-col :span="6">
            <e8-date-picker label-text="请选择年月" :labelDirectionIsUp="true"  date-type="isMonth" value="2019-08" placeholder='请选择年月'  ></e8-date-picker>
       </e8-col>
       <e8-col :span="6">
            <e8-date-picker label-text="请选择年月" :labelDirectionIsUp="true"  date-type="isMonth" value="2019-08" :hasConfirmButton="true"  placeholder='请选择年月' ></e8-date-picker>
       </e8-col>
    </e8-row>
  </div>
  <div class="m-10">
    <e8-row  type="flex" justify="space-between">
       <e8-col :span="6">
            <e8-date-picker label-text="请选择年" :labelDirectionIsUp="true"  date-type="isYear" value="2019"  placeholder='请选择年' ></e8-date-picker>
       </e8-col>
       <e8-col :span="6">
            <e8-date-picker label-text="请选择年" :labelDirectionIsUp="true"  date-type="isYear" value="2019" :hasConfirmButton="true"  placeholder='请选择年' ></e8-date-picker>
       </e8-col>
    </e8-row>
  </div>
</div>

::: demo
```html
<div>
  <e8-date-picker value="2019-8-9" :labelDirectionIsUp="true" label-text="有默认值的日期选择"  placeholder='不带清除按钮的下拉'  ></e8-date-picker>
  <e8-date-picker :labelDirectionIsUp="true" label-text="没有默认值的日期选择" placeholder='请选择日期'  ></e8-date-picker>
  <e8-date-picker :labelDirectionIsUp="true" label-text="禁用的日期选择" value="2019-08-29" placeholder='请选择日期'  :disabled="true"></e8-date-picker>
  <e8-date-picker  :labelDirectionIsUp="true" label-text="开始日期" value="2019-08-29" placeholder='请选择日期'  :disabled="true"></e8-date-picker>
  <e8-date-picker label-text="带label的日期选择" value="2019-08-29" placeholder='请选择日期'  ></e8-date-picker>
   <e8-date-picker label-text="可清除的选择日期" :labelDirectionIsUp="true" :clearable="true" value="2019-08-29" :hasConfirmButton="true" placeholder='请选择日期2'></e8-date-picker>
   
  <e8-date-picker label-text="请选择年" :labelDirectionIsUp="true"  date-type="isYear" value="2019" :hasConfirmButton="true"  placeholder='请选择年' ></e8-date-picker>
 <e8-date-picker label-text="请选择年月" :labelDirectionIsUp="true"  date-type="isMonth" value="2019-08" placeholder='请选择年月'  ></e8-date-picker>
 <e8-date-picker label-text="请选择年" :labelDirectionIsUp="true"  date-type="isYear" value="2019" :hasConfirmButton="true"  placeholder='请选择年' ></e8-date-picker>
  ...
</div>
```
:::


### Attributes

| 参数      | 说明    | 类型      |可选值       | 默认值   |
|---------- |-------- |---------- |:----------:|-------- |
| date-type |日历类型 | String   |  isYear(年份选择)/isMonth(年月选择)  |  isDay可以不写   |
| placeholder  |placeholder | String   |  可选  |  请选择  |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| clearable  |是否带清除图标 | Boolean   |  —  |  false  |
| label-directionIsUp  |是否让标签在选择框上方面 | Boolean   |  —  |  false   |
| label-text  |label文本 | String   |  —  |  —   |




### Select events


| 事件名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| on-selected  |选择日期后的事件 | 无   | 
| on-clear  |clear时事件 | 无   | 

### Select methods

| 方法名      | 说明    | 返回值      |
|---------- |:--------:|---------- |
| getValue  |暂未实现(有必要需要这个方法吗) | 获取当前组件选择的value值   | 
| setValue  |暂未实现(有必要吗) | 设置当前组件选择的value值   | 

