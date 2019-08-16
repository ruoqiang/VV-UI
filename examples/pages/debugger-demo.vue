<template>
  <div class="pg-index">
    <div class="index-container">
      <Input value="122" :clearable="true" @on-input="inputHnaderrr" />
    </div>
    <e8-select placeholder='文本框' :clearable="true" :options="options"></e8-select>
  </div>
</template>

<script>
import Input from '../../packages/input';
import E8Select from '../../packages/select';
export default {
  data() {
    return {
      options: [{value: '1', label: 'New York1'}, {value: '2', label: 'New York2'}]
    };
  },
  methods: {
    inputHnaderrr(e) {
        // console.log("sddd", e.target.value)
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
