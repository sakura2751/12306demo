<template>
        <div class="come_go dis">
          <div>
            <div>
              <div class="form_box">
                <label class="form_label" for="">出发地</label>
                <div class="around_input"><input :placeholder="place" class="input_box" type="text"></div>
              </div>
              <div class="form_box">
                <label for="" class="form_label">到达地</label>
                <div class="around_input"><input :placeholder="place" class="input_box" type="text"></div>
              </div>
            </div>
            <div>
              <div class="form_box">
                <label for="" class="form_label">出发日期</label>
                <div class="around_input"><input class="input_box" type="text"></div>
              </div>
              <div class="form_box">
                <label for="" class="form_label">返程日期</label>
                <div class="around_input"><input class="input_box" type="text"></div>
              </div>
            </div>
            <div class="check">
              <div class="form_box">
                <div class="check_box">
                  <label for="">学生</label>
                  <input class="check" type="checkbox">
                </div>
                <div class="check_box">
                  <label for="">高铁/动车</label>
                  <input class="check" type="checkbox">
                </div>
              </div>
            </div>
            <div class="form_box btn_box">
              <button>查&nbsp;&nbsp;&nbsp;询</button>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        name: "RoundTrip",
      data(){
        return{
          place:"简拼/全拼/汉字"
        }
      }
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
