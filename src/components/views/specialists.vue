<template lang="pug">
  #specialists
    specialistTop
    specialistsCards
</template>

<script>

export default {
  name: 'Specialists',
  components: {
    specialistTop: resolve => require(['../organizms/10_SpecialistTop/index.vue'], resolve),
    specialistsCards: resolve => require(['../organizms/11_SpecialistsCards/index.vue'], resolve)
  }
}
</script>

<style lang="stylus">
  #specialists
    background-color: rgba(244, 248, 247, 1)
</style>
