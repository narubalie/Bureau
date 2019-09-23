<template lang='pug'>
  el-main#mainSlider
    el-row.block
      el-carousel(
        height='75vh'
        trigger='click'
        :autoplay='false'
        )
        el-carousel-item(v-for='item in 4', :key='item')
          el-row
            el-col.bannerText(
              :span="8"
              :offset="4"
            )
              span
                h1 Добро пожаловать!
                p.plainText Дополнительный текст!
                el-button(type="primary") Записаться на расследование
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
