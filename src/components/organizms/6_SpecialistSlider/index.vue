<template lang='pug'>
  el-main#specialistSlider
    el-row.block
      el-carousel(arrow="never" trigger="click" type="card" :interval="8000" height="45vh")
        el-carousel-item(v-for="item in 6" :key="item")
          h3 {{ item }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
