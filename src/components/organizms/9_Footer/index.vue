<template lang='pug'>
  el-footer
    el-button
    el-row
      el-col(
      v-for='service in services'
      :key='service.id'
      :span="4"
      )
        h2 {{ service.name }}
        el-col.links(
          v-for='item in service.data'
          :key='item.id'
          )
            a {{ item.category }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
