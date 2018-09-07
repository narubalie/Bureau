<template lang='pug'>
  #servicesSlider.grid
    .carousel-content
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
          img(:src='article.photo')
          .textBlock(:span="8")
            p.date {{ article.date }}
            h3 {{ article.h3 }}
            p {{ article.description }}
      button.default Все события
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
