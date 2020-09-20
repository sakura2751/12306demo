<template>
  <div class="rotation swiper-no-swiping">
    <swiper :options="swiperOption">
      <swiper-slide><img src="https://www.12306.cn/index/images/pic/banner20200707.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="https://www.12306.cn/index/images/pic/banner0619.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="https://www.12306.cn/index/images/pic/banner0619.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="https://www.12306.cn/index/images/pic/banner08.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="https://www.12306.cn/index/images/pic/banner12.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <TicketCheck style="z-index: 899"/>
  </div>
</template>

<script>
  import TicketCheck from "./TicketCheck";
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
      name: "Rotation",
      components:{
        Swiper,
        SwiperSlide,
        TicketCheck
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOption: {
          //   //显示分页器
            pagination: {
              el: '.swiper-pagination',
              //分页器可点击
              clickable: true,
            },
            //异步加载
            // observer:true,
            // observeParents:true,
          //   paginationClickable: true,
          //   //循环轮播
              loop:true,
            // onlyExternal : true,
          //   //自动轮播
              autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                //用户滑动图片后禁止轮播
                disableOnInteraction: false,
              },
            },
          }
        },
    }

</script>

<style >
  .rotation{
    height: 450px;
    position: relative;
    overflow: hidden;
    margin-top: 1px;


  }
  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 6px;
  }


</style>
