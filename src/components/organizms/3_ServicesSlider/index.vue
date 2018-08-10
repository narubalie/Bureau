<template lang='pug'>
  el-main#servicesSlider
    el-row.block
      el-col(
        :span="18"
      )
        h2 Услуги
        el-carousel(
          arrow="never"
          trigger="click"
          type="card"
          :interval="8000"
          :autoplay="false"
          height="70vh"
          )
          el-carousel-item(
            v-for='service in services'
            :key='service.id'
            )
            img(:src='service.cover')
            span.textBlock
              h3 {{ service.category }}
              p {{ service.description }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
