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
            router-link(to='/Specialist')
              el-card.doctor
                img(:src='doctor.cover')
                span
                  h3 {{ doctor.name }}
                  p {{ doctor.description }}
    el-button(type='default') Показать всех специалистов
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
