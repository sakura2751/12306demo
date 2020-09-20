<template>
  <div class="one_way dis">
    <div>
      <div>
        <div class="form_box">
          <label class="form_label" for="">出发地</label>
          <div class="around_input"><input :style="{border:bd1}" @blur="loseline1" @focus="outline1" :placeholder="place" class="input_box"  type="text"></div>
        </div>
        <div class="form_box">
          <label for="" class="form_label">到达地</label>
          <div class="around_input"><input :style="{border:bd2}" @blur="loseline2" @focus="outline2" :placeholder="place" class="input_box"  type="text"></div>
        </div>
      </div>
      <div class="form_box">
        <label for="" class="form_label">出发日期</label>
        <div class="around_input"><input :style="{border:bd3}" @blur="loseline3" @focus="outline3" :placeholder="placeTime" class="input_box" type="text"></div>
      </div>
      <div class="check">
        <div class="form_box">
          <div class="check_box">
            <label for="">学生</label>
            <input class="check" type="checkbox" >
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
        name: "OneWay",
      data(){
          return{
            place:"简拼/全拼/汉字",
            placeTime:"",
            bd1:'',
            bd2:'',
            bd3:'',

          }
      },
      methods:{
        outline1(){
          this.bd1 = "1px solid #2676E3";
        },
        loseline1(){
          this.bd1 = "1px solid #cccccc";
        },
        outline2(){
          this.bd2 = "1px solid #2676E3";
        },
        loseline2(){
          this.bd2 = "1px solid #cccccc";
        },
        outline3(){
          this.bd3 = "1px solid #2676E3";
        },
        loseline3(){
          this.bd3 = "1px solid #cccccc";
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
