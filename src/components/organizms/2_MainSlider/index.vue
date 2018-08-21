<template lang='pug'>
  el-main#mainSlider
    el-row.block
      el-carousel(
        height='75vh'
        trigger='click'
        :autoplay='false'
        )
        el-carousel-item(v-for='item in 4', :key='item')
          el-col.bannerText(
            :xs="20"
            :sm="12"
            :md="8"
            :lg="8"
            :xl="4"
            :offset="4"
          )
            span
              h1 Добро пожаловать в&nbsp;Дентал Бюро!
              p.plainText Александр Смирнов, главный врач “Дентал Бюро”, приглашает вас провести небольшую экскурсию!
              el-button(type="primary") Записаться на расследование
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
