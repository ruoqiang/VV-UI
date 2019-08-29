<template>
  <div class="pg-index">
    <div class="index-container">
      <Input value="122" :clearable="true" @on-input="inputHnaderrr" />
    </div>
    <e8-select
      placeholder="不带清除按钮的下拉"
      :options="options1"
      :defaultValue="defaultValue1"
    ></e8-select>
    <e8-select
      :multiple="true"
      placeholder="不带清除按钮的下拉"
      :options="options2"
      :defaultValue="defaultValue2"
    ></e8-select>

     <e8-col :span="6">
            <!-- <e8-date-picker label-text="请选择日期" @on-selected="selectedFn" :labelDirectionIsUp="true" :clearable="true" value="2019-08-29" placeholder='请选择日期2'  ></e8-date-picker> -->
          <e8-date-picker label-text="请选择年月" :labelDirectionIsUp="true"  date-type="isMonth" value="2019-08-29" placeholder='请选择年月'  ></e8-date-picker>
       </e8-col>
  </div>
</template>

<script>
import Input from '../../packages/input';
import E8Select from '../../packages/select';
export default {
  data() {
    return {
      options1: [
        { value: '1', label: 'New York1' },
        { value: '2', label: 'New York2' }
      ],
      options2: [
        { value: '1', label: 'New York1' },
        { value: '2', label: 'New York2' },
        { value: '3', label: 'New York3' }
      ]
    };
  },
  created() {
    this.defaultValue1 = '1';
    this.defaultValue2 = ['3'];
  },
  methods: {
    inputHnaderrr(e) {
      // console.log("sddd", e.target.value)
    },
    selectedFn(val) {
      console.log('xxxx', val)
    }
  },
  components: {
    Input,
    E8Select
  }
};
</script>
<style type="text/less" lang="less">
.pg-index {
  .index-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
    p {
      margin-top: 56px;
      color: #8994c6;
      font-size: 32px;
    }
  }
}
</style>
