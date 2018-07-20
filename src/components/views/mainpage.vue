<template>
  <el-container>
    <MainSlider></MainSlider>
    <ServicesSlider area="servicesSlider"></ServicesSlider>
    <SeoBlock area="seoBlock"></SeoBlock>
    <VideoBlock area="videoBlock"></VideoBlock>
    <SpecialistSlider area="specialistSlider"></SpecialistSlider>
    <BlogBlock area="blogBlock"></BlogBlock>
    <ReplySlider area="replySlider"></ReplySlider>
    <Footer area="footer"></Footer>
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
</style>
