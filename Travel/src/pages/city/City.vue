<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import cityHeader from "./components/Header";
import citySearch from "./components/Search";
import cityList from "./components/List";
import cityAlphabet from "./components/Alphabet";

export default {
  name: "City",
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
};
</script>

<style lang="less" scoped>
</style>
