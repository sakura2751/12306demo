<template>
      <div class="ticket_entrance dis">
        <div>
          <div class="form_box">
            <label class="form_label" for=""><span>*</span>乘车日期</label>
            <div class="around_input"><input class="input_box" type="text"></div>
          </div>
          <div class="form_box">
            <label class="form_label" for=""><span>*</span>车次</label>
            <div class="around_input"><input class="input_box" placeholder="请输入车次" type="text"></div>
          </div>
          <div class="form_box">
            <label class="form_label" for=""><span>*</span>乘车站</label>
            <div class="around_input"><input placeholder="请选择车站" disabled class="input_box" type="text"></div>
          </div>
        </div>
        <div class="form_box btn_box">
          <button>查&nbsp;&nbsp;&nbsp;询</button>
        </div>
      </div>
</template>

<script>
    export default {
        name: "TicketCheck"
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
