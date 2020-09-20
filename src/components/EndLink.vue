<template>
    <div class="link">
      <div class="footer_content">
        <div class="friendly_link">
          <h2>友情链接</h2>
          <ul>
            <li><a href=""><img src="../assets/img/link/link02.png" alt=""></a></li>
            <li><a href=""><img src="../assets/img/link/link03.png" alt=""></a></li>
            <li><a href=""><img src="../assets/img/link/link04.png" alt=""></a></li>
            <li><a href=""><img src="../assets/img/link/link05.png" alt=""></a></li>
          </ul>
        </div>
        <div class="offical_code">
          <ul>
            <li>
              <h2>中国铁路官方微信</h2>
              <div><img src="../assets/img/code/zgtlwb.png" alt=""></div>
            </li>
            <li>
              <h2>中国铁路官方微博</h2>
              <div><img src="../assets/img/code/zgtlwx.png" alt=""></div>
            </li>
            <li>
              <h2>12306 公众号</h2>
              <div><img src="../assets/img/code/public.png" alt=""></div>
            </li>
            <li>
              <h2>铁路12306</h2>
              <div><img src="../assets/img/code/download.png" alt=""></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "EndLink"
    }
</script>

<style scoped>
  .link{
    background-color: #f8f8f8;
    margin-top: 50px;
  }
  .footer_content{
    height: 154px;
    width: 1200px;
    padding: 20px 0;
    margin: 0 auto;
  }
  .footer_content .friendly_link{
    width: 420px;
    height: 154px;
    margin: 0 20px 0 60px;
    float: left;
  }

  .footer_content h2{
    line-height: 54px;
    font-size: 14px;
    font-weight: lighter;
  }
  .friendly_link h2{
    width: 420px;
  }
  .offical_code h2{
    width: 140px;
  }
  .offical_code li:nth-child(3) h2,.offical_code li:last-child h2{
    width: 110px;
  }
  .friendly_link ul{
    width: 420px;
    height: 100px;
  }
  .friendly_link img{
    width: 200px;
    height: 34px;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
    float: left;
    margin: 0 10px 10px 0;
  }
  .footer_content .offical_code{
    width: 500px;
    height: 134px;
    float: left;
  }
  .offical_code li{
    width: 140px;
    height: 134px;
    float: left;
    text-align: center;
  }
  .offical_code li:nth-child(3),.offical_code li:last-child{
    width: 110px;
    text-align: center;
  }
  .offical_code img{
    width: 80px;
    height: 80px;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
    margin: 0 auto;
  }
</style>
