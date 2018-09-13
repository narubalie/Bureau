<template lang='pug'>
  #modal.grid
    .form
      button.close(@click="show = false")
      h3 Записаться на приём
      input
      input
      p.smText Даю согласие на обработку персональных данных
      button.primary Записаться на приём
    .bg
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
