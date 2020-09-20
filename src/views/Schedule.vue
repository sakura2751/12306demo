<template>

  <div class="schedule dis">
    <div class="form_box">
      <label class="form_label" for="">出发日期</label>
      <div class="around_input"><input class="input_box" type="text"></div>
    </div>
    <div class="form_box">
      <label class="form_label" for="">出发车次</label>
      <div class="around_input"><input class="input_box" type="text" placeholder= "仅支持G、D字头的动车组列车"></div>
    </div>
    <div class="form_box btn_box">
      <button>查&nbsp;&nbsp;&nbsp;询</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Schedule"
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
