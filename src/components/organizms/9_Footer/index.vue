<template lang='pug'>
  el-footer
    el-button
    el-card(
    v-for='item in services'
    :key='item.id'
    )
      h2 {{ item.name }}
      el-card.links(
        v-for='items in item.data'
        :key='item.id'
        )
          h3 {{ item.data.category }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
