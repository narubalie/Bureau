<template lang='pug'>
  el-footer
    el-button
    el-card.box-card(
    v-for='state in $store.services'
    :key="service.id"
    )
      h3 {{service.state}}
      a(v-for='category in $this.service.state' :key='service.state.id')
        | {{service.state.category}}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
