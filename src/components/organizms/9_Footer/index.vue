<template lang='pug'>
  #footer.grid
    button.primary Записаться на приём
    .expand.content
      router-link.submenu(to='/Services' v-for='service in services' :key='service.id') {{ service.name }}
        router-link.links(to='/Services' v-for='item in service.data' :key='item.id') {{ item.category }}
    .cons.content 
      p Имеются противопоказания. Проконсультируйтесь со специалистом. 16+
    .copyrights.content
      p Дентал Бюро © 1997 - 2017
      a Политика конфиденциальности
      span
        p.inlineLink Сделано
        a.inlineLink Narubalie
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
