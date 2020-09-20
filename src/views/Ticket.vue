<template>
  <div class="content">
    <div class="center_right_tab">
      <router-link class="tab_search" tag="div" to="/ticket/one_way"><a href="javascript:;">单程</a></router-link>
      <router-link class="tab_search" tag="div" to="/ticket/round_trip"><a href="javascript:;">往返</a></router-link>
      <router-link class="tab_search" tag="div" to="/ticket/transfer"><a href="javascript:;">接续换乘</a></router-link>
      <router-link class="tab_search" tag="div" to="/ticket/refund_change"><a href="javascript:;">退改签</a></router-link>
    </div>
    <div class="rout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Ticket",

    }
</script>

<style scoped>



</style>
