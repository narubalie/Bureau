<template>
  <el-main id='servicesSlider' area="servicesSlider">
    <div class="block">
      <el-carousel trigger="click" height="calc(100vh - 100px)">
        <el-carousel-item v-for="item in 2" :key="item">
          <el-row>
            <el-col :span="4" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 3">
              <el-card class="serviceCover" shadow="hover" :body-style="{ padding: '0px' }">
                <!-- <img src="~examples/assets/images/hamburger.png" class="image"> -->
                <div style="padding: 14px;">
                  <!-- <span> {{ service.category }} </span> -->
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">Operating button</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-main>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
