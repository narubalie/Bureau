<template lang="pug">
  el-container
    wideSlider
    textBlock
    slider
    cards
    wideBlock
</template>

<script>

export default {
  name: 'Mainpage',
  components: {
    wideSlider: resolve => require(['../organizms/2_wideSlider/index.vue'], resolve),
    textBlock: resolve => require(['../organizms/3_TextBlock/index.vue'], resolve),
    slider: resolve => require(['../organizms/4_Slider/index.vue'], resolve),
    cards: resolve => require(['../organizms/5_Cards/index.vue'], resolve),
    wideBlock: resolve => require(['../organizms/6_WideBlock/index.vue'], resolve)
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang="stylus">
  .el-container {
    flex-direction: column
  }
  .el-row {
    width: 74vw;
    margin: 0 auto
  }
  .el-main {
    padding: 0
  }
</style>
