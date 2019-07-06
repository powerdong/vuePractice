<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
                class="button-wrapper" 
                v-for="(item, index) in hot" 
                :key="index"
            >
            <div class="button" >
            {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div 
            class="area"
            v-for="(items, index) in list" 
            :key="index"
            :ref="index"    
        >
        <div class="title border-topbottom">{{index}}</div>
        <div class="item-list">
          <div 
                class="item border-bottom"
                v-for="(item, index) in items" 
                :key="index"
            >
            {{item.name}}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: "cityList",
  props:{
      list:Object,
      hot:Array,
      letter:String
  },
  mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
      letter(){
          if(this.letter){
              const element = this.$refs[this.letter][0];
              this.scroll.scrollToElement(element);
          }
      }
  },
};
</script>

<style lang="less" scoped>
@import url("~styles/global.less");
.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
