<template lang="pug">
  #specialist
    specialistOne
</template>

<script>

export default {
  name: 'Specialists',
  components: {
    specialistOne: resolve => require(['../organizms/15_SpecialistOne/index.vue'], resolve)
  }
}
</script>
<style lang="stylus">
  #specialist
    background-color: rgba(244, 248, 247, 1)
</style>
