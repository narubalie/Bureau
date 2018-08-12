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
            el-row.doctor
              el-col.rightPhoto(:span="3")
                img(:src='article.photo')
              el-col.textBlock(:span="8")
                p {{ article.date }}
                h3 {{ article.h3 }}
                p {{ article.description }}
                p {{ article.text }}
        el-button Посмотреть все события
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
