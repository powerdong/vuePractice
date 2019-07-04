<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';

export default {
    // 组件的名字
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style>

</style>
