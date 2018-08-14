<template lang='pug'>
  #app
    TopNav(:services='services')
    router-view
    Footer(:services='services')
</template>

<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<script>
export default {
  name: 'App',
  components: {
    TopNav: resolve => require(['./components/organizms/1_TopNav/index.vue'], resolve),
    Footer: resolve => require(['./components/organizms/9_Footer/index.vue'], resolve)
  },
  computed: {
    services () {
      return this.$store.state.services
    }
  }
}
</script>

<style>
  #app {
    font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
