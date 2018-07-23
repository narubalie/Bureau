<template lang='pug'>
  el-main#mainSlider
    el-row.block
      el-carousel(
        height='75vh',
        trigger='click'
        )
        el-carousel-item(v-for='item in 4', :key='item')
          h1 {{ item.text }}
          div
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
