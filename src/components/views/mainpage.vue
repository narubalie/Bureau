<template>
  <TopNav></TopNav>
</template>

<script>
export default {
  name: 'Mainpage',
  components: {
    TopNav: resolve => require(['../organizms/TopNav/index.vue'], resolve)
  }
}
</script>

<style>
</style>
