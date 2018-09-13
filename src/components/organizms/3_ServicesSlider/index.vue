<template lang='pug'>
  #servicesSlider.grid
    .carousel-content
      h2 Услуги
      el-carousel(
        arrow="never"
        trigger="click"
        type="card"
        :interval="8000"
        :autoplay="false"
        height="50vh"
        )
        el-carousel-item(
          v-for='service in services'
          :key='service.id'
          )
          img(:src='service.cover')
          .textBlock
            h3 {{ service.category }}
            p {{ service.description }}
      //- button.default Все услуги
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
