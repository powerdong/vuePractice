<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont">&#xe64a;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  },
};

</script>

<style lang="less" scoped>
@import "~styles/global.less";

.header {
  display: flex;
  justify-content: space-between;
  height: 0.86rem;
  background-color: @bgColor;
  color: #fff;
  text-align: center;
  line-height: 0.86rem;
  .header-left {
    width: 0.64rem;
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.1rem;
    color: #ccc;
    background-color: #fff;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    color: #fff;
  }
}
</style>
