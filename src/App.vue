<template>
    <router-view />
</template>

<script>
export default {}
</script>

<style lang="scss">
  @import './assets/scss/all.scss';
html, body {
  height: 100%;
  margin: 0;
}
body {
  display: flex; /*使物件依序排列*/
  flex-direction: column; /*使物件垂直排列*/
}
.wrapper {
  flex-grow: 1; /*可佔滿垂直剩餘的空間*/
}
.footer {
  background-color: gray;
}
</style>
