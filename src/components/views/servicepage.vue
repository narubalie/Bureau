<template lang="pug">
  #service
    prices
</template>

<script>

export default {
  name: 'servicePage',
  components: {
    prices: resolve => require(['../organizms/14_ServiceOne/index.vue'], resolve)
  }
}
</script>

<style lang="stylus"></style>
