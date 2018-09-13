<template lang="pug">
  #vacancies
    vacancies
</template>

<script>

export default {
  name: 'pricePage',
  components: {
    vacancies: resolve => require(['../organizms/17_Vacancies/index.vue'], resolve)
  }
}
</script>

<style lang="stylus"></style>
