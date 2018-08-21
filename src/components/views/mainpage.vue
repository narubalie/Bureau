<template lang="pug">
  el-container
    MainSlider
    ServicesSlider
    SeoBlock
    SpecialistSlider
    BlogBlock
    ReplySlider
</template>

<script>

export default {
  name: 'Mainpage',
  components: {
    MainSlider: resolve => require(['../organizms/2_MainSlider/index.vue'], resolve),
    ServicesSlider: resolve => require(['../organizms/3_ServicesSlider/index.vue'], resolve),
    SeoBlock: resolve => require(['../organizms/5_SeoBlock/index.vue'], resolve),
    SpecialistSlider: resolve => require(['../organizms/6_SpecialistSlider/index.vue'], resolve),
    BlogBlock: resolve => require(['../organizms/7_BlogBlock/index.vue'], resolve),
    ReplySlider: resolve => require(['../organizms/8_ReplySlider/index.vue'], resolve)
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
    margin: 0 auto
  }
  .el-main {
    padding: 0
  }
</style>
