<template>
  <el-main id='mainSlider'>
    <el-row class="block">
      <el-carousel
      height="75vh"
      trigger="click">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </el-main>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
