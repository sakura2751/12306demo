<template>
  <div class="is_late dis">
    <div class="check">
      <div class="form_box">
        <label for="" class="form_label">查询类型</label>
        <div class="radio_box">
          <input class="check" type="radio" checked name="change_two"><span>到达站</span>
        </div>
        <div class="radio_box">
          <input class="check" type="radio" name="change_two"><span>出发站</span>
        </div>
      </div>
    </div>
    <div>
      <div class="form_box">
        <label class="form_label" for="">车站</label>
        <div class="around_input"><input class="input_box" placeholder="简拼/全拼/汉字" type="text"></div>
      </div>
      <div class="form_box">
        <label class="form_label" for="">车次</label>
        <div class="around_input"><input class="input_box" placeholder="请输入车次" type="text"></div>
      </div>
    </div>
    <div class="form_box btn_box">
      <button>查&nbsp;&nbsp;&nbsp;询</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Late"
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
