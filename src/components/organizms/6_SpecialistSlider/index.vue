<template lang='pug'>
  #specialistSlider.grid
    .carousel-content
      h2 Специалисты
      el-carousel(
        arrow="never"
        trigger="click"
        type="card"
        :interval="8000"
        :autoplay="false"
        height="50vh"
        )
        el-carousel-item(
          v-for='doctor in doctors'
          :key='doctor.id'
          )
          img(:src='doctor.cover')
          .textBlock
            h3 {{ doctor.name }}
            p {{ doctor.description }}
      button.default Все специалисты
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
