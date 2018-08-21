<template lang='pug'>
  el-footer(height="100%  ")
    el-button.footerButton(type="primary") Записаться на приём
    el-row.block
      el-col.categories(
      v-for='service in services'
      :key='service.id'
      :xs="22"
      :sm="12"
      :md="12"
      :lg="8"
      :xl="4"
      )
        h3 {{ service.name }}
        a(v-for='item in service.data'
        :key='item.id'
        ) {{ item.category }}
    p.cons Имеются противопоказания. Проконсультируйтесь со специалистом. 16+
    span.copyrights
      p Дентал Бюро © 1997 - 2017
      a Политика конфиденциальности
      span
        p.inlineLink Сделано
        a.inlineLink Narubalie
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
