<template>
  <div class="main-skeleton">
    <e8-skeleton height="80px"></e8-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <e8-skeleton height="300px"></e8-skeleton>
        </div>
        <e8-skeleton height="45px"></e8-skeleton>
      </div>
      <div class="skeleton-bottom">
        <e8-skeleton height="45px"></e8-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
