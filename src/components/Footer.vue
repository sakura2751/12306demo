<template>
    <div class="footer">
      <div class="footer_end">
        <p><span>版权所有©2008-2020</span><span>中国铁道科学研究院集团有限公司</span></p>
        <p><span>京ICP备05020493号-4</span><span>|</span><span>京ICP证150437号</span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer_end{
    padding: 10px 0;
    background-color: olive;
    text-align: center;
    background-color: #666;
  }
  .footer_end span{
    color: #c1c1c1;
    font-size: 14px;

  }

  .footer_end p{
    line-height: 30px;
  }
  .footer_end p span:first-child,.footer_end p:last-child span:nth-child(2){
    margin-right: 10px;
  }
</style>
