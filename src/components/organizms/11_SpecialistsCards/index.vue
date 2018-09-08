<template lang='pug'>
  #cards.grid
    .content
      .doctor(v-for='doctor in doctors')
        img(:src='doctor.cover')
        .textBlock
          h3 {{ doctor.name }}
          p {{ doctor.description }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
