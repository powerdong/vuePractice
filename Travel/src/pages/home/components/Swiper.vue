<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id" >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
          pagination:".swiper-pagination",
          loop:true
      },
      swiperList:[{
          id:"0001",
          imgUrl:"https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png"
      },{
          id:"0002",
          imgUrl:"https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png"
      }]
    };
  }
};
</script>

<style lang="less" scoped>
// 样式穿透
.wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff
}

.wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background-color: #eee;
    .swiper-img {
      width: 100%;
      height: 100%;
    }
}
</style>
