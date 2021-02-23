<template>
  <div id="app">
    <HeaderItem/>
    <router-view/>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem'
export default {
  name: 'app',
  components : {
    HeaderItem
  }
}
</script>

<style lang="scss">
@import "style/style.scss";
body {
    animation: fadeIn 2s ease 0s 1 normal;
}
@keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}
</style>
