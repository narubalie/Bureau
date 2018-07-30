<template lang='pug'>
  el-footer
    el-button
    el-card(
    v-for='service in services'
    :key='service.id'
    )
      h2 {{ service.name }}
      el-card.links(
        v-for='item in service.data'
        :key='item.id'
        )
          h3 {{ item.category }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
