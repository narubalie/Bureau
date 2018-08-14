<template lang="pug">
  el-container
    yMap
</template>

<script>

export default {
  name: 'yMapPage',
  components: {
    yMap: resolve => require(['../organizms/13_Map/index.vue'], resolve)
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
  .el-row {
    width: 74vw;
    margin: 0 auto
  }
  .el-main {
    padding: 0
  }
</style>
