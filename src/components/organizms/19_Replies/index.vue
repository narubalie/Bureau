<template lang='pug'>
  #reply.grid
    h3.head Отзывы о Бюро
    .content
      .card(v-for='n in 5')
        p.date 10.04.2018
        p.name Семён Александрович
        p.reply Очень приятные доктора и интерьер, сделали все качественно и без боли, очень рад, что нашел для себя Дентал Бюро!
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
