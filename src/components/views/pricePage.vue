<template lang="pug">
  #price
    prices
</template>

<script>

export default {
  name: 'pricePage',
  components: {
    prices: resolve => require(['../organizms/12_Prices/index.vue'], resolve)
  }
}
</script>

<style lang="stylus"></style>
