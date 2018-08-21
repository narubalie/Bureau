<template lang='pug'>
  el-main.bgImg
    el-row
      el-col(
        :xs="22"
        :sm="20"
        :md="20"
        :lg="16"
        :xl="4"
      )
        h2 Отзывы
        h3 Очень приятные доктора и интерьер, сделали все качественно и без боли, очень рад, что нашел для себя Дентал Бюро!
        p Семён Александрович | 10.04.2018
        el-button(type="white") Показать все отзывы
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
