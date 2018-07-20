<template>
  <el-container>
    <MainSlider></MainSlider>
    <ServicesSlider></ServicesSlider>
    <SeoBlock></SeoBlock>
    <VideoBlock></VideoBlock>
    <SpecialistSlider></SpecialistSlider>
    <BlogBlock></BlogBlock>
    <ReplySlider></ReplySlider>
    <Footer></Footer>
  </el-container>
</template>

<script>
export default {
  name: 'Mainpage',
  components: {
    MainSlider: resolve => require(['../organizms/2_MainSlider/index.vue'], resolve),
    ServicesSlider: resolve => require(['../organizms/3_ServicesSlider/index.vue'], resolve),
    VideoBlock: resolve => require(['../organizms/4_VideoBlock/index.vue'], resolve),
    SeoBlock: resolve => require(['../organizms/5_SeoBlock/index.vue'], resolve),
    SpecialistSlider: resolve => require(['../organizms/6_SpecialistSlider/index.vue'], resolve),
    BlogBlock: resolve => require(['../organizms/7_BlogBlock/index.vue'], resolve),
    ReplySlider: resolve => require(['../organizms/8_ReplySlider/index.vue'], resolve),
    Footer: resolve => require(['../organizms/9_Footer/index.vue'], resolve)
  },
  data () {
    return {
      // logo: require('./assets/logo-narubalie.svg')
    }
  },
  computed: {}
}
</script>

<style>
  .el-container {
    flex-direction: column
  }
  .el-row {
    width: 1200px;
    margin: 0 auto
  }
  .el-main {
    padding: 0
  }
</style>
