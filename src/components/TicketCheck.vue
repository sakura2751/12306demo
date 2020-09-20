<template>
  <div class="ticket">
    <div class="center_search">
      <!--            查询左边tab-->
      <router-link class="center_left_search" tag="div" to="/ticket"><a href="javascript:;">车票</a></router-link>
      <router-link class="center_left_search" tag="div" to="/normal_check"><a href="javascript:;">常用查询</a></router-link>
      <router-link class="center_left_search" tag="div" to="/order_food"><a href="javascript:;">订餐</a></router-link>
    </div>
    <div class="rout">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
    export default {
        name: "TicketCheck",

    }
</script>

<style scoped>
  /*查询*/
.rout{
  bottom: 0;
  right: 0;
  position: absolute;
}
  .ticket{
    position: absolute;
    width: 510px;
    height: 350px;
    top: 50px;
    left: 50%;
    margin-left: -595px;
    background-color: white;

  }
  .center_search{
    width: 100px;
    height: 100%;
  }
  .center_left_search{
    width: 100px;
    height: 115px;
    border-bottom: white solid 1px;
    background-color: #3B99FC;
    line-height: 115px;
  }
  .center_left_search:last-child{
    border-bottom: none;
    height: 118px;
    line-height:118px;

  }
  .center_left_search a{
    display: block;
    box-sizing: border-box;
    width: 100px;
    border-left: 3px solid #3B99FC;
    color: white;
  }
  /*激活*/
  .router-link-active a{
    background-color: white;
    color: #3B99FC;

  }
</style>
