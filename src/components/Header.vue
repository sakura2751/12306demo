<template>
    <div class="header">
      <div class="bg"></div>
      <div class="header_top">
        <div class="top_box">
          <h1><a href="javascript:;"><img src="../assets/img/logo@2x.png" alt=""></a></h1>
          <div class="header_right">
            <div class="header_search">
              <div class="header_search_box">
                <input :style="{border:bd}" @blur="loseline" @focus="outline" type="text" placeholder="搜索车票/餐饮/常旅客/相关规章">
              </div>
              <div :style="{backgroundColor:bg}" class="header_search_btn"></div>
            </div>

            <ul class="header_menu">
              <li>
                <a href="javascript:;">我的12306</a>
              </li>
              <li>|</li>
              <li>
                <a href="javascript:;">登录</a>
              </li>
              <li>
                <a href="javascript:;">注册</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
      name: "Header",
      data(){
        return{
          bd:'',
          bg:''
        }
      },
      methods:{
        outline(){
          this.bd = "1px solid #2676E3";
          this.bg = "#2676E3"
        },
        loseline(){
          this.bd = "1px solid #cccccc";
          this.bg = "#3B99FC"
        }
      }
    }
</script>

<style scoped>
  .header{
    height: 80px;
  }
  .header::before{
    content: "";
    position: absolute;
    top: 24px;
    right: 0;
    left: 80%;
    height: 40px;
    background: #f8f8f8;
    z-index: -1;
  }

  .header .header_top{
    height: 80px;
    padding: 0 5px;
  }
  .header .header_top h1{
    margin-top: 15px;
    float: left;
  }
  .header .header_top a img{
    display: block;
    width: 200px;
    height: 50px;
    /*背景图片*/
  }
  .header_right{
    float: right;
    width: 847px;
    height: 40px;
    margin-top: 24px;
    background-image: -webkit-image-set(url(../assets/img/train@2x.png) 2x);
  }
  .header_right .header_search{
    margin: 5px 0 5px 100px;
    float: left;
  }
  .header_right .header_search .header_search_box {
    width: 420px;
    float: left;
  }
  .header_right .header_search .header_search_box input {
    width: 420px;
    height: 30px;
    padding: 4px 10px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    outline: none;

  }
  .header_right .header_search .header_search_btn {
    width: 30px;
    height: 30px;
    background-color: #3B99FC;
    cursor: pointer;
    float: left;
  }
  .header_right .header_menu{
    float: right;
    width: 167px;
    padding-right: 10px;
    height: 40px;
  }
  .header_right .header_menu li {
    float: left;
    font-size: 12px;
    line-height: 40px;
    margin-left: 10px;
  }
  .header_right .header_menu li:first-child {
    width: 76px;
    margin-left: 0;
  }
  .header_right .header_menu li:nth-child(2) {
    color: #3B99FC;
    font-size: 10px;
  }
  .header_right .header_menu li:first-child a{
    color: #3B99FC;
  }

</style>


