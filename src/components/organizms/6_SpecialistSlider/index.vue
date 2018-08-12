<template lang='pug'>
  el-main#specialistSlider
    el-row.block
      el-col(
        :span="24"
      )
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
            el-card.doctor
              img(:src='doctor.cover')
              span.textBlock
                h3 {{ doctor.name }}
                p {{ doctor.description }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
