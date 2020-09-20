<template>
  <div class="serve_box">
    <div class="advertisement">
      <ul>
        <li><a href="javascript:;"><img src="https://www.12306.cn/index/images/abanner01.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="https://www.12306.cn/index/images/abanner02.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="https://www.12306.cn/index/images/abanner03.jpg" alt=""></a></li>
        <li><a href="javascript:;"><img src="https://www.12306.cn/index/images/abanner04.jpg" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ServeImg"
    }
</script>

<style scoped>
  .advertisement ul{
    height: 360px;
  }
  .advertisement ul li{
    float: left;
    margin: 0 0 20px;
  }
  .advertisement ul li:nth-child(2n-1){
    margin-right: 10px;
  }
  .advertisement ul img{
    width: 590px;
    height: 160px;
  }
</style>
