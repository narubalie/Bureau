<template lang='pug'>
  el-main#seoBlock
    el-row
      parallax(
      :parallax="true"
      :sectionHeight="100"
      :speedFactor="0.5"
      )
        el-col(
        :span="10"
        :offset="7"
        )
          h2 Лечение зубов в Дентал Бюро
          p
            | О центре медицинской косметологии «Эстетик Клуб»
            | на улице Уточкина можно сказать просто – «рядом
            | с домом». Жители Приморского района Санкт-Петербурга
            | уже по достоинству оценили «Эстетик Клуб» на Уточкина:
            | удобное расположение в центре спального района, передовые
            | методики, квалифицированный персонал, домашняя атмосфера.
          el-button(
            round
            type="primary"
          )
            span Записаться на приём
        img(src="../../../assets/elements/DSC_7889.jpg")
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
