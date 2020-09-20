<template>
    <div class="new">
      <div class="information">
        <!--        tab-->
        <div class="information_tab">
          <ul>
            <li class="li_list" v-for="(item,index) in itemList" :key="index"><a href="javascript:;">{{item.name}}</a></li>
          </ul>

        </div>

        <!--        内容-->
        <div class="information_content">
          <!--            最新发布-->
          <div >
            <div class="new_issue">
              <ul>
                <li><a href="javascript:;">公告</a><span>2020-05-28</span></li>
                <li><a href="javascript:;">铁路部门再出免费退票措施</a><span>2020-05-28</span></li>
                <li><a href="javascript:;">候补购票操作说明</a><span>2020-05-28</span></li>
                <li><a href="javascript:;">公 告</a><span>2020-05-28</span></li>
                <li><a href="javascript:;">关于调整互联网、电话订票起售时间的公告</a><span>2020-06-30</span></li>
                <li><a href="javascript:;">中国铁路广州局集团有限公司关于2020年7月1日至7月7日增开部分旅客列车的公告</a><span>2020-06-29</span></li>
                <li><a href="javascript:;">中国铁路广州局集团有限公司关于2020年6月30日至7月31日增开部分旅客列车的公告</a><span>2020-06-29</span></li>
                <li><a href="javascript:;">中国铁路广州局集团有限公司关于2020年7月1日至7月31日增开部分旅客列车的公告</a><span>2020-06-29</span></li>
                <li><a href="javascript:;">青藏铁路公司关于加开临时旅客列车的公告</a><span>2020-06-29</span></li>
                <li><a href="javascript:;">中国铁路昆明局集团公司 关于部分旅客列车开行的公告</a><span>2020-06-29</span></li>
              </ul>
              <div class="more">
                <a href="https://www.12306.cn/mormhweb/zxdt/index_zxdt.html">更多&gt;</a>
              </div>
            </div>
          </div>
          <!--            常见问题-->
          <div class=" list_content">
            <div class="normal_question">
              <ul>
                <li><a href="javascript:;">实名制车票</a></li>
                <li><a href="javascript:;">售票窗口购票</a></li>
                <li><a href="javascript:;">互联网购票、换票</a></li>
                <li><a href="javascript:;">互联网改签、变更到站</a></li>
                <li><a href="javascript:;">互联网退票</a></li>
                <li><a href="javascript:;">随身携带品</a></li>
                <li><a href="javascript:;">进出站</a></li>
                <li><a href="javascript:;">丢失车票</a></li>
                <li><a href="javascript:;">使用居民身份证直接检票乘车</a></li>
                <li><a href="javascript:;">广深港跨境列车</a></li>
              </ul>
              <div class="more">
                <a href="">更多&gt;</a>
              </div>
            </div>
          </div>
          <!--            信用信息-->
          <div class=" list_content">
            <div class="credit_information">
              <div class="credit_left credit">
                <dl>
                  <dt>失信被执行人(自然人)公示</dt>
                  <dd>
                    <div class="credit_center">
                      <img src="https://www.12306.cn/index/images/empty.png" alt="">
                      <div class="credit_cue">暂无公示数据</div>
                    </div>
                    <div class="credit_more">
                      <a href="">更多&gt;</a>
                    </div>
                  </dd>
                </dl>
              </div>
              <div class="credit_right credit">
                <dl>
                  <dt>失信已执行人(自然人)公布</dt>
                  <dd>
                    <div class="credit_center">

                    </div>
                    <div class="credit_more">
                      <a href="">更多&gt;</a>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  window.addEventListener("load", function () {
    var liList = document.getElementsByClassName('li_list');
    var informationContent = document.getElementsByClassName('information_content')[0];
    var listContent = informationContent.children;
    liList[0].children[0].className = "actived";
    for (var i = 0; i < liList.length; i++){
      (function(i){
        liList[i].onclick = function(){
         for(var j =0; j < liList.length; j++){
           liList[j].children[0].className = "";
           listContent[j].className = "list_content";
         }
          this.children[0].className = "actived";
          listContent[i].className = "";

        }
      })(i)

    }
  });
  export default {
        name: "News",
        data(){
          return{
            itemList:[
              {name:'最新发布'},
              {name:'常见问题'},
              {name:'信用信息'},
            ],
          }
        },
    }
</script>

<style scoped>
  .information{
    height: 298px;
    margin: 40px auto 55px;
  }
  /*新闻tab*/
  .information_tab{
    height: 40px;
  }

  .information_tab li a{
    width: 390px;
    line-height: 40px;
    margin-right: 10px;
    float: left;
    color: #555;
    background-color: #efeff4;
    text-align: center;
  }
  .information_tab .actived{
    background-color:#3B99FC ;
    color: white;
  }

  .information_tab li:last-child a{
    margin-right: 0;
  }
  /*新闻内容*/
  .information_content{
    padding: 20px;
    height: 258px;
    border: 1px solid #DEDEDE;
    box-sizing: border-box;
  }
  /*最新发布块 常见问题块 信用信息块*/
  .list_content{
    display: none;
  }

  /*公用代码*/
  .new_issue ul,.normal_question ul{
    width: 1208px;
    height: 180px;
  }
  .new_issue li,.normal_question li{
    float: left;
    width: 544px;
    height: 36px;
    margin-right: 60px;
  }
  .new_issue li:before,.normal_question li:before{
    content: "";
    width: 6px;
    height: 6px;
    background-color:#3B99FC ;
    float: left;
    margin: 15px 20px 0 0;
  }
  .new_issue li a,.normal_question li a{
    font-size: 14px;
    float: left;
    max-width: 70%;
    line-height: 36px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .new_issue li span{
    line-height: 36px;
    font-size: 12px;
    color: #999999;
    float: right;
  }
  .more{
    width: 1148px;
  }
  .more a{
    line-height: 36px;
    float: right;
    color: #999999;
  }
  .credit_information .credit{
    width: 544px;
    height: 216px;
  }
  .credit_information .credit_left{
    float: left;
  }
  .credit_information .credit_right{
    float: right;
  }
  .credit .credit_center{
    width: 544px;
    height: 128px;
  }
  .credit_right .credit_center{
    margin: 15px 0 0 0;
  }
  .credit dl dt{
    width: 544px;
    border-bottom: 2px solid #DEDEDE;
    margin-bottom: 5px;
    text-align: center;
    line-height: 46px;
  }
  .credit_left dl dd img{
    width: 100px;
    height: 80px;
    margin: 15px auto;
    display: block;
  }
  .credit_left dl dd .credit_cue{
    text-align: center;
    font-size: 14px;
    color: #999999;
  }
  .credit_more{
    width: 484px;
    height: 20px;
    padding-right: 60px;

  }
  .credit_more a{
    color: #999999;
    float: right;
  }
</style>
