<template>
  <css-grid
    :columns="currentGrid.columns"
    :rows="currentGrid.rows"
    :areas="currentGrid.areas"
    :gaps="currentGrid.gaps">
    <MainSlider></MainSlider>
    <ServicesSlider area="servicesSlider"></ServicesSlider>
    <SeoBlock area="seoBlock"></SeoBlock>
    <VideoBlock area="videoBlock"></VideoBlock>
    <SpecialistSlider area="specialistSlider"></SpecialistSlider>
    <BlogBlock area="blogBlock"></BlogBlock>
    <ReplySlider area="replySlider"></ReplySlider>
    <Footer area="footer"></Footer>
    <viewport-listener v-model="viewport"/>
  </css-grid>
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
      // logo: require('./assets/logo-narubalie.svg'),
      // default viewport, mobile first
      viewport: {width: 320, height: 568},
      // 3x3 grid
      desktopGrid: {
        columns: ['20%', '60%', '20%'],
        rows: ['100px', '90vh', '90vh'],
        areas: [
          ['.', '.', '.'],
          ['mainSlider', 'mainSlider', 'mainSlider'],
          ['servicesSlider', 'servicesSlider', 'servicesSlider']
        ]
      },
      // 2x4 grid
      tabletGrid: {
        columns: ['20', '60'],
        rows: ['auto'],
        areas: [
          ['sidebar', 'content']
        ]
      },
      // 1x5 grid
      mobileGrid: {
        columns: ['100%'],
        rows: [
          '80px',
          'auto',
          '100px',
          '100px',
          '80px'
        ],
        areas: [
          ['title'],
          ['main'],
          ['leftbar'],
          ['rightbar'],
          ['footer']
        ]
      }
    }
  },
  computed: {
    // change Layout according to the viewport size
    currentGrid () {
      if (this.viewport.isDesktop ||
        this.viewport.isLargeDesktop) {
        return this.desktopGrid
      }
      if (this.viewport.isTablet) {
        return this.tabletGrid
      }
      return this.mobileGrid
    }
  }
}
</script>

<style>
</style>
