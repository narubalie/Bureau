<template lang="pug">
  #news
    newsCards
</template>

<script>

export default {
  name: 'news',
  components: {
    newsCards: resolve => require(['../organizms/18_News/index.vue'], resolve)
  }
}
</script>

<style lang="stylus">
  #news
    background-color: rgba(244, 248, 247, 1)
</style>
