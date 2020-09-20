<template>
    <div class="serve_tab">
      <div class="service_navigate" >
        <ul>
          <li>
            <a href="javascript:;">
              <i></i>
              <div>重点旅客预约</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i></i>
              <div>遗失物品查找</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i></i>
              <div>共享汽车</div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i></i>
              <div>便民托运</div>
            </a>
          </li>
          <li>

            <a href="javascript:;">
              <i></i>
              <div>车站引导</div>
            </a>
          </li>
          <li>

            <a href="javascript:;">
              <i></i>
              <div>站车风采</div>
            </a>
          </li>
          <li>

            <a href="javascript:;">
              <i></i>
              <div>用户反馈</div>
            </a>
          </li>


        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ServeTab"
    }
</script>

<style scoped>
  /*服务导航*/
  .service_navigate ul{
    height: 136px;
  }
  .service_navigate li{
    padding: 35px 0;
    width: 170px;
    float: left;
    text-align: center;
  }
  .service_navigate a{
    display: inline-block;
    height:66px ;
    width: 170px;
    background: url("../assets/img/line01@2x.png") no-repeat right;
    background-size: 35px;
    font-size: 14px;
  }
  .service_navigate a i{
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-bottom: 5px;
    background-color: #00b0e8;
  }
</style>
