<template lang="pug">
  el-container
    specialistTop
    specialistsCards
</template>

<script>

export default {
  name: 'Specialists',
  components: {
    specialistTop: resolve => require(['../organizms/10_SpecialistTop/index.vue'], resolve),
    specialistsCards: resolve => require(['../organizms/11_SpecialistsCards/index.vue'], resolve)
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
