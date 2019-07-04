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
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe64a;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeHeader",
    // 子组件接受父组件传过来的值
    // 指定传值类型
    props:{
        city:String
    }
}
</script>

<style lang="less" scoped>
    @import '~styles/global.less';

    .header{
        display: flex;
        justify-content: space-between;
        height: 0.86rem;
        background-color: @bgColor;
        color: #fff;
        text-align: center;
        line-height: 0.86rem;
        .header-left{
            width: 0.64rem;
        }
        .header-input{
            flex: 1;
            height: 0.64rem;
            line-height: 0.64rem;
            margin-top: 0.12rem;
            margin-left: .2rem;
            border-radius: .1rem;
            color: #ccc;
            background-color: #fff;
        }
        .header-right{
            width: 1.04rem;
            padding: 0 .1rem;
        }
    }
</style>
