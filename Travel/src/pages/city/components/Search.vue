<template>
    <div class="search">
        <input type="text" placeholder="请输入城市名或拼音" class="search-input">
    </div>
</template>

<script>
export default {
    name:'citySearch'
}
</script>

<style lang="less" scoped>
    @import url('~styles/global.less');
    .search{
        height: 0.72rem;
        padding: 0 .1rem;
        background-color: @bgColor;
        .search-input{
            box-sizing: border-box;
            width: 100%;
            height: 0.62rem;
            padding: 0 .1rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            color: #666;
        }
    }


</style>
