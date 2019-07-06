<template>
  <ul class="list">
    <li 
        class="item"
        v-for="(item, index) in letters" 
        :key="index"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"

    >{{item}}
    </li>

  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
      letter:Object
  },
  computed: {
      letters(){
          const letters = []
          for (const i in this.letter) {
                letters.push(i)      
          }
          return letters;
      }
  },
  data() {
      return {
        touchStatus:false,
        startY:0,
        timer:null
      }
  },
  updated() {
      this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
      handleLetterClick(e){
          
          this.$emit('change',e.target.innerText)
      },
      handleTouchStart(e){
          this.touchStatus = true
      },
      handleTouchMove(e){
          if(this.touchStatus){
            if(this.time){
                clearTimeout(this.timer);
            }this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY - 79
                const index = Math.floor((touchY - this.startY) / 20)
                if(index >= 0 && index < this.letters.length){
                    this.$emit('change',this.letters[index]);
                }
            }, 16);
          }
      },
      handleTouchEnd(){
          this.touchStatus = false;
      }
  },
};
</script>

<style lang="less" scoped>
@import url("~styles/global.less");
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: @bgColor;
  }
}
</style>
