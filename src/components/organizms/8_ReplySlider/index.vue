<template lang='pug'>
  el-main#servicesSlider
    el-row.block
      el-col(
        :span="24"
      )
        h2 Блог
        el-carousel(
          arrow="never"
          trigger="click"
          type="card"
          :interval="8000"
          :autoplay="false"
          height="50vh"
          )
          el-carousel-item(
            v-for='article in articles'
            :key='article.id'
            )
            el-card.doctor
              img(:src='article.cover')
              span.textBlock
                h3 {{ article.name }}
                p {{ article.description }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
