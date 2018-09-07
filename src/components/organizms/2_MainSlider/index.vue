<template lang='pug'>
  #mainSlider
    el-carousel(
      height='75vh'
      trigger='click'
      :autoplay='false'
      )
      el-carousel-item.grid(v-for='item in 4', :key='item')
        .banner
          h1 Добро пожаловать в&nbsp;Дентал Бюро!
          p.plainText Александр Смирнов, главный врач “Дентал Бюро”, приглашает вас провести небольшую экскурсию!
          button.primary Записаться на приём
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
