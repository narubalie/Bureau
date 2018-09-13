<template lang="pug">
  #service
    textPage
</template>

<script>

export default {
  name: 'Quality',
  components: {
    textPage: resolve => require(['../organizms/20_Quality/index.vue'], resolve)
  }
}
</script>

<style lang="stylus"></style>
