// 单文件组件

<template>
  <!-- 组件模板 -->
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 显示的是当前路由地址所对应的内容  -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// 组件逻辑
export default {
  name: "App"
};
</script>

<style>
/* 组件样式 */
</style>
