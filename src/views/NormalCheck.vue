<template>
  <div class="content">
    <div class="center_right_tab">
      <router-link class="tab_search" tag="div" to="/normal_check/late"><a href="javascript:;">正晚点</a></router-link>
      <router-link class="tab_search" tag="div" to="/normal_check/ticker_check"><a href="javascript:;">检票口</a></router-link>
      <router-link class="tab_search" tag="div" to="/normal_check/sale"><a href="javascript:;">起售时间</a></router-link>
      <router-link class="tab_search" tag="div" to="/normal_check/weather"><a href="javascript:;">天气查询</a></router-link>
    </div>
    <div class="rout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NormalCheck"
    }
</script>

<style scoped>


</style>
