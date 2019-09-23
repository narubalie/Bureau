<template lang='pug'>
  el-row
    el-col(v-for='doctor in doctors' :key='doctor.id' :span='8')
      router-link(to='/Specialist')
        el-card.doctor(shadow="hover")
          img(:src='doctor.cover')
          span
            h3 {{ doctor.name }}
            p {{ doctor.description }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
