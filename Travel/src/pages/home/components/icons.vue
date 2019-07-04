<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="(item, index) in page" :key="index">
          <div class="icon-img">
            <img :src="item.imgUrl" alt class="icon-img-content" />
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        autoplay: false
      },
      list: []
    };
  },
  methods: {
    pages() {
      const page = [];
      this.list.forEach((item, index) => {
        // 有几页数据   如果列表项大于8 page===1  展示两页
        const page = Math.floor(index / 8);
        // 如果当前只有一页
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="less" scoped>

    @import url('~styles/global.less');
    @import url('~styles/ellipsis.less');

    .icons /deep/ .swiper-container{
        height: 0;
        padding-bottom: 50%;
        background-color: aqua;
    }
    .icons{
        margin-top: .1rem;
        .icon{
            position: relative;
            overflow: hidden;
            float: left;
            width: 25%;
            min-height: 1.8rem;
            .icon-img{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .44rem;
                box-sizing: border-box;
                padding: .1rem;
                .icon-img-content{
                    display: block;
                    margin: 0 auto;
                    height: 100%;
                }
            }
            .icon-desc{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.44rem;
                line-height: .44rem;
                text-align: center;
                color: @darkTextColor;
                .ellipsis();
            }
        }
    }
</style>
