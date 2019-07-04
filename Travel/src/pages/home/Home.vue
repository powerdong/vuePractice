<template>
    <div>
        <!-- 使用组件 -->
        <!-- 通过 : 给父子组件之间传值 -->
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
// 引入组件
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';
// 引入axios
import axios from 'axios';

export default {
    // 组件的名字
    name:"Home",
    // 使用自定义的子组件
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            // 父组件定义名字
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('../../../static/mock/index.json')
                    // 成功执行函数
                    .then(this.getHomeInfoSuc)
        },
        getHomeInfoSuc(res){
            res = res.data;
            if(res.ret && res.data){
                this.city = res.data.city,
                this.swiperList = res.data.swiperList,
                this.iconList = res.data.iconList,
                this.recommendList = res.data.recommendList,
                this.weekendList = res.data.weekendList
            }
        }
    },
    // 声明周期的钩子函数
    // 渲染完成执行函数
    mounted() {
        this.getHomeInfo();
    },
}
</script>

<style>

</style>
