<template>
      <div class="weather dis">
        <div class="form_box">
          <label class="form_label" for=""><span>*</span>目的地</label>
          <div class="around_input"><input placeholder="简拼/全拼/汉字" class="input_box" type="text"></div>
        </div>
        <div class="form_box btn_box">
          <button>查&nbsp;&nbsp;&nbsp;询</button>
        </div>
      </div>
</template>

<script>
    export default {
        name: "Weather"
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
