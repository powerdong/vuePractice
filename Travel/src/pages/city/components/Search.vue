<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="请输入城市名或拼音" class="search-input" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
        <ul>
            <li 
                class="search-item border-bottom"
                v-for="(item, index) in list" 
                :key="index"
            >
            {{item.name}}
            </li>
            <li class="search-item border-bottom" v-show="hasNoData">
                没有找到匹配内容
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: "citySearch",
  props:{
      cities:Object
  },
  data() {
    return {
      keyword: "",
      list:[],
      timer:null
    };
  },
  computed: {
      hasNoData(){
          return !this.list.length
      }
  },
  watch: {
      keyword(){
          if(this.timer){
              clearTimeout(this.timer)
          }
          if(!this.keyword){
              this.list = [];
              return;
          }
          this.timer = setTimeout(() => {
              const result = [];
              for (const i in this.cities) {
                this.cities[i].forEach(value => {
                    if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                        result.push(value);
                    }
                })
              }
              this.list = result;  
          }, 100);
      }
  },
  mounted() {
      this.scroll = new Bscroll(this.$refs.search)
  },
};
</script>

<style lang="less" scoped>
@import url("~styles/global.less");
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: @bgColor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        background-color: #fff;
        color: #666;
    }
}
</style>
