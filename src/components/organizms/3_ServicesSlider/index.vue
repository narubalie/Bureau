<template>
  <el-main id='servicesSlider'>
    <el-row class="block">
      <el-carousel
      arrow="never"
      trigger="click"
      type="card"
      :interval="8000"
      height="45vh">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </el-main>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
