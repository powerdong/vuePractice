<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  // 子组件接受父组件传过来的值
  // 指定传值类型
  props: {
    list: Array
  }
};
</script>

<style lang="less" scoped>
// 引入外部文件  在前面加 ~
// 使用less需要安装less依赖
@import url("~styles/ellipsis.less");

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}
.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
  .item-img {
    width: 100%;
  }
}
.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    .ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    .ellipsis();
  }
}
</style>
