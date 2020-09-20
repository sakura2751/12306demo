<template>
  <div id="app">
    <Header />
    <Tab/>
    <Rotation/>
    <ServeTab/>
    <ServeImg/>
    <Treval/>
    <News/>
    <EndLink/>
    <Footer/>
    <RightNavige/>
  </div>
</template>
<script>
  import Header from "./components/Header"
  import Tab from "./components/Tab";
  import Rotation from "./components/Rotation";
  import ServeTab from "./components/ServeTab";
  import ServeImg from "./components/ServeImg";
  import Treval from "./components/Treval";
  import News from "./components/News";
  import EndLink from "./components/EndLink";
  import Footer from "./components/Footer";
  import RightNavige from "./components/RightNavige";
  export default {
    name : 'App',
    components: {
      Header,
      Tab,
      Rotation,
      ServeTab,
      ServeImg,
      Treval,
      News,
      EndLink,
      Footer,
      RightNavige
    },


  }

</script>
<style>
  body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, code, del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, dialog, figure, footer, header, hgroup, nav, section{
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
    color: #000000;
    list-style: none;
    text-decoration: none;

  }
  body{
    min-width: 1200px;

  }
  /*二级路由公共代码*/
  .content{
    width: 410px;
    height: 350px;
    padding: 32px 25px 0;
    box-sizing: border-box;
    /*background-color: #0C9A9A;*/

  }
  .center_right_tab{
    width: 360px;
    height: 32px;
    border-bottom: 2px solid #DEDEDE;
  }
  .center_right_tab .tab_search{
    float: left;
    position: relative;
  }
  .center_right_tab .tab_search a{
    line-height: 32px;
    display: block;
    text-align: center;
    color: #999999;
    font-size: 14px;
    width: 90px;
  }
  /*路由激活 */
  .center_right_tab .router-link-active a{
    color: #3B99FC;
  }
  .center_right_tab .router-link-active a::after{
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #3B99FC;
  }





  .service_navigate>ul,.advertisement>ul,.travel,.information,.header .header_top,.tab .header_next .next_box{
    width: 1190px;
    margin: 0 auto;
  }

  /*  查询块公共代码*/
  .check{
    cursor: pointer;
  }
  .one_way,.come_go,.swap,.change,.is_late,.ticket_entrance,.sell_time,.weather,.schedule {
    padding-top: 10px;

  }
  .one_way .form_box,.come_go .form_box,.swap .form_box,.change .form_box,.is_late .form_box,.ticket_entrance .form_box,.sell_time .form_box,.weather .form_box,.schedule .form_box{
    width: 360px;
    height: 30px;
    margin-top: 13px;
  }
  .one_way .form_box:first-child,.come_go .form_box:first-child,.swap .form_box:first-child,.change .form_box:first-child,.is_late .form_box:first-child,.ticket_entrance .form_box:first-child,.sell_time .form_box:first-child,.weather .form_box:first-child,.schedule .form_box:first-child{
    margin-top: 16px;
  }
  .change .btn_box button,.is_late .btn_box button,.ticket_entrance .btn_box button,.sell_time .btn_box button,.weather .btn_box button,.schedule .btn_box button{
    margin-top: 25px;
  }
  .one_way .check .form_box,.come_go .check .form_box,.one_way .btn_box,.come_go .btn_box,.swap .btn_box,.swap .check .form_box{
    margin-top: 8px;
  }
  .one_way .form_label,.come_go .form_label,.swap .form_label,.change .form_label,.is_late .form_label,.ticket_entrance .form_label,.sell_time .form_label,.weather .form_label,.schedule .form_label{
    width: 65px;
    padding-right: 10px;
    display: inline-block;
    float: left;
    text-align: right;
    line-height: 30px;
    font-size: 14px;
  }
  .one_way .input_box,.come_go .input_box,.swap .input_box,.change .input_box,.is_late .input_box,.ticket_entrance .input_box,.sell_time .input_box,.weather .input_box,.schedule .input_box{
    float: left;
    width: 265px;
    line-height: 2;
    /*height: 30px;*/
    border: 1px solid #999;
    font-size: 14px;
  }
  .one_way .check_box,.come_go .check_box,.swap .check_box{
    float: left;
    margin-left: 75px;
  }
  .change .radio_box,.is_late .radio_box{
    float: left;
    line-height: 30px;
    margin-right: 10px;
  }
  .change .radio_box input,.is_late .radio_box input{
    margin-right: 10px;
  }
  .one_way .btn_box button,.come_go .btn_box button,.swap .btn_box button,.change .btn_box button,.is_late .btn_box button,.ticket_entrance .btn_box button,.sell_time .btn_box button,.weather .btn_box button,.schedule .btn_box button{
    line-height: 30px;
    width: 360px;
    border-radius: 10px;
    border: none;
    background-color: #ff8201;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  .form_label span{
    color: red;
  }
</style>
