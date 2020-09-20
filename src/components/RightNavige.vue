<template>
  <div class="right_nav">
    <ul>
      <li>
        <i></i>
        <h4>最新发布</h4>
      </li>
      <li>
        <i></i>
        <h4>联系客服</h4>
      </li>
      <li>
        <i></i>
        <h4>APP下载</h4>
      </li>
      <li>
        <i></i>
        <h4>旅客出行温馨提示</h4>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "rightNavige"
    }
</script>

<style scoped>
.right_nav{
  position: fixed;
  right: 0;
  top: 400px;
}
  li{
    width: 50px;
    background-color: #efefef;
    margin-bottom: 5px;
    z-index: 1000;
  }
  li h4{
    width: 40px;
    font-weight: lighter;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;

  }
li h4:hover{
  color: #3B99FC;
}
</style>
