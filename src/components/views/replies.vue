<template lang="pug">
  #replies
    reps
</template>

<script>

export default {
  name: 'replies',
  components: {
    reps: resolve => require(['../organizms/19_Replies/index.vue'], resolve)
  }
}
</script>

<style lang="stylus"></style>
