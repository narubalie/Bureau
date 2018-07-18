<template>
  <css-grid-item id='mainSlider' area="mainSlider">
    <div class="block">
      <el-carousel trigger="click" height="calc(100vh - 100px)">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </css-grid-item>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
