<template lang="pug">
  #Org
    organizations
</template>

<script>

export default {
  name: 'servicePage',
  components: {
    organizations: resolve => require(['../organizms/21_Organizations/index.vue'], resolve)
  }
}
</script>

<style lang="stylus"></style>
