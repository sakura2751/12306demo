<template>
        <div class="change dis">
          <div class="check">
            <div class="form_box">
              <label for="" class="form_label">查询类型</label>
              <div class="radio_box">
                <input class="check" type="radio" checked name="change"><span>订票日期</span>
              </div>
              <div class="radio_box">
                <input class="check" type="radio" name="change"><span>乘车日期</span>
              </div>
            </div>
          </div>
          <div>
            <div class="form_box">
              <label for="" class="form_label"><span>*</span>开始日期</label>
              <div class="around_input"><input class="input_box" type="text"></div>
            </div>
            <div class="form_box">
              <label for="" class="form_label"><span>*</span>结束日期</label>
              <div class="around_input"><input class="input_box" type="text"></div>
            </div>
          </div>
          <div>
            <div class="form_box">
              <label class="form_label" for="">关键字</label>
              <div class="around_input"><input class="input_box" placeholder="订单号/车次/乘客姓名" type="text"></div>
            </div>
          </div>
          <div class="form_box btn_box">
            <button>查&nbsp;&nbsp;&nbsp;询</button>
          </div>
        </div>
</template>

<script>
    export default {
        name: "RefundChange"
    }
</script>

<style scoped>
input,button{
  outline: none;
}
button:hover{
  background-color: rgba(255, 130, 1, 0.75);
}
</style>
