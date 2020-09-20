<template>
    <div class="treval">
      <div class="travel">
        <div class="travel_title">
          <h3>铁路旅游</h3>
          <a href="javascript:;">更多&gt;</a>
        </div>
        <div class="travel_content">
          <ul>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/243945e6-c45d-4870-9cf5-77e488068646_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游” 高品质旅游版专线列车</h3>
                <span>¥<i>2560</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/fcd7173f-7651-46e7-a126-bdc199e1f6f7_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游” 陇上江南·行摄山>水陇南三日游</h3>
                <span>¥<i>930</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/b0c76b21-531b-4af4-a607-cf5672c72ded_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游”华夏寻根·人文始祖天水两日游</h3>
                <span>¥<i>980</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/8b36f9a7-f780-4e71-b719-9300109a9ff2_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游”精品旅游线路</h3>
                <span>¥<i>3380</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/1716878f-79a2-4db1-af8c-b9c2039f0b3c_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游”美丽甘南三日游</h3>
                <span>¥<i>880</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/6d77d0ea-53d0-4518-b7e9-e53795b4920c_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游” 青海湖、茶卡2日>游</h3>
                <span>¥<i>880</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/c7c03732-3c86-4308-aea7-df747d4999e8_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游”嘉敦5日游</h3>
                <span>¥<i>2260</i></span>
              </div>
            </a></li>
            <li><a href="javascript:;"><img src="https://travel.12306.cn/imgs/resources/uploadfiles/images/d9ae79de-2f3f-4e9f-ad6e-bdc291dda92a_product_W572_H370.jpg" alt="">
              <div>
                <h3>“环西部火车游” 敦煌一地三日游</h3>
                <span>¥<i>1380</i></span>
              </div>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Treval"
    }
</script>

<style scoped>
.travel{
    height: 548px;
    padding-top: 10px;
  }
  h3{
    font-weight: lighter;
    font-size: 16px;
  }
  .travel_title{
    height: 38px;
    border-bottom: 2px solid  #DEDEDE;
  }
  .travel_title h3{
    float: left;
    line-height: 38px;
    color: #3B99FC;
    padding: 0 4px;
  }
  .travel_title a{
    float: right;
    line-height: 38px;
    color: #999999;
  }
  .travel_content{
    height: 508px;
  }
  .travel_content li{
    float: left;
    margin: 10px 10px 0 0;
  }
  .travel_content li:nth-child(4n){
    margin: 10px 0 0 0;
  }
  .travel_content li a{
    display: block;
    width: 290px;
    border: 1px solid  #DEDEDE;
    box-sizing: border-box;
  }

  .travel_content li a img{
    width: 288px;
    height: 160px;
  }
  .travel_content li a h3{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 32px;
    font-size: 14px;
  }
.travel_content li a h3:hover{
  color: #3B99FC;
}
  .travel_content li a div{
    padding: 10px;
  }
  .travel_content li a span{
    color: #ff8201;
  }
  .travel_content li a span i{
    font-style:normal;
    font-size: 18px;
    margin-left: 6px;
  }
</style>
