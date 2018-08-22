<template lang="pug">
  el-container
    prices
</template>

<script>

export default {
  name: 'servicePage',
  components: {
    prices: resolve => require(['../organizms/14_ServiceOne/index.vue'], resolve)
  },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang="stylus">
  .el-container {
    flex-direction: column;
    background-color: #F1F7F7;
  }
  .contentRow {
    width: 74vw;
    margin: 0 auto
  }
  .el-main {
    padding: 0
  }
</style>
