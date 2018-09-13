<template lang="pug">
  #main
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
  }
}
</script>

<style lang="stylus">
  #main
    background-color: rgba(244, 248, 247, 1)
</style>
