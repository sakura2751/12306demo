<template>
  <div class="content">
    <div class="center_right_tab">
      <router-link class="tab_search" tag="div" to="/order_food/schedule"><a href="javascript:;">预定</a></router-link>
      <router-link class="tab_search" tag="div" to="/order_food/catering_orders"><a href="javascript:;">餐饮订单</a></router-link>
    </div>
    <div class="rout">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
    export default {
        name: "OrderFood"
    }
</script>

<style scoped>
  .center_right_tab .tab_search a{
    line-height: 32px;
    display: block;
    text-align: center;
    color: #999;
    font-size: 14px;
    width: 180px;
  }
</style>
