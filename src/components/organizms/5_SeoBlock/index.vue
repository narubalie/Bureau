<template lang='pug'>
  el-main#seoBlock
    el-row
      el-col.bgImg(
        :span="24"
      )
    el-row
      el-col.seoCard(
        :xs="22"
        :sm="20"
        :md="16"
        :lg="12"
        :xl="4"
      )
        el-card
          h3 Лечение зубов в Дентал Бюро
          p
            | О центре медицинской косметологии «Эстетик Клуб»
            | на улице Уточкина можно сказать просто – «рядом
            | с домом». Жители Приморского района Санкт-Петербурга
            | уже по достоинству оценили «Эстетик Клуб» на Уточкина:
            | удобное расположение в центре спального района, передовые
            | методики, квалифицированный персонал, домашняя атмосфера.
          el-button(type="default") Записаться на приём
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
