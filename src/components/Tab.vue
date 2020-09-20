<template>
    <div class="tab">
      <div class="header_next">
        <div class="next_box">
          <ul>
            <li><a href="javascript:;">首页</a></li>
            <li @mouseenter="ticketEnter" @mouseleave="ticketLeave">
              <a  href="javascript:;">车票</a>
              <div class="ticket" :style="{display:disp1}">
                <div>
                  <div><span>购买</span></div>
                  <div><a href="javascript:;">单程</a></div>
                  <div><a href="javascript:;">接续换乘</a></div>
                </div>
                <div>
                  <div><a href="javascript:;">往返</a></div>
                </div>
                <div>
                  <div><span>变更</span></div>
                  <div><a href="javascript:;">退票</a></div>
                  <div><a href="javascript:;">变更到站</a></div>
                </div>
                <div>
                  <div><a href="javascript:;">改签</a></div>
                </div>
                <div>
                  <div><span>更多</span></div>
                  <div><a href="javascript:;">中铁银通卡</a></div>
                  <div><a href="javascript:;">市郊快速铁路</a></div>
                </div>
                <div>
                  <div><a href="javascript:;">广九直通车</a></div>
                  <div><a href="javascript:;">国际列车</a></div>
                </div>
              </div>
            </li>
            <li @mouseenter="ticketEnter2" @mouseleave="ticketLeave2">
              <a href="javascript:;">团购服务</a>
              <div class="ticket2" :style="{display:disp2}">
                <div>
                  <div><a href="javascript:;">务工人员</a></div>
                </div>
                <div>
                  <div><a href="javascript:;">学生团体</a></div>
                </div>
              </div>
            </li>
            <li >
              <a href="javascript:;">会员服务</a>
            </li>
            <li>
              <a href="javascript:;">站车服务</a>
            </li>
            <li><a href="javascript:;">商旅服务</a></li>
            <li><a href="javascript:;">出行指南</a></li>
            <li><a href="javascript:;">信息查询</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
      data(){
          return{
            disp1:"",
            disp2:"",
          }
      },
      methods:{
        ticketEnter(){
          this.disp1 = "block";
        },
        ticketLeave(){
          this.disp1= "none";
        },
        ticketEnter2(){
          this.disp2 = "block";
        },
        ticketLeave2(){
          this.disp2= "none";
        },
      }
    }
</script>

<style scoped>
  .header_next {
    background-color: #3B99FC;
    height: 40px;
  }
   .next_box>ul>li{
    position: relative;
  }
  .next_box>ul>li>a{
    width: 150px;
    text-align: center;
    display: block;
    font-size: 14px;
    color: white;
    float: left;
    line-height: 40px;
  }
   .next_box>ul>li>a:hover{
    background-color: rgba(38, 118, 227, 0.5);
  }
  .next_box>ul>li:first-child>a{
    background-color: #2676E3;
  }
  .next_box>ul>li:first-child>a, .next_box>ul>li:nth-child(2)>a{
    width: 145px;
  }

/* hover tab 后 */
  .ticket,.ticket2{
    width: 1200px;
    height: 120px;
    background-color: rgba(255,255,255,.9);
    position: absolute;
    top: 40px;
    z-index: 999;
    left: 0;
    border: 1px solid #3B99FC;
    display: none;
  }

  .ticket2{
    height: 60px;
  }
  .ticket>div {
    width: 200px;
    height: 80%;
    float: left;
    box-sizing: border-box;
    border-left: 1px solid #3B99FC;
    margin-top: 10px;
  }
  .ticket>div:first-child{
    border-left:none;
  }

  .ticket2>div,.ticket3>div,.ticket4>div{
    width: 200px;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #3B99FC;
    margin-top: 10px;
  }
  .ticket3>div:last-child,.ticket4>div:last-child{
    border-right: none;
  }
  .ticket>div:nth-child(2n){
    margin-top: 35px;
    height: 60px;
  }
  .ticket>div>div ,.ticket2>div>div,.ticket3>div>div{
    margin-left: 30px;
    line-height: 35px;

  }
  .ticket>div span,.ticket>div a,.ticket2>div a,.ticket3>div a{
    color: black;
    font-size: 14px;
  }
  .ticket>div span{
    color: #3B99FC;
  }
  .ticket>div a:hover,.ticket2>div a:hover,.ticket3>div a:hover{
    color: black;
    font-size: 14px;
    color: #3B99FC;
  }


</style>
