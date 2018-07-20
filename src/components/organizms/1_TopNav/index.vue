<template>
  <el-header id="topNav">
    <el-menu
      :default-active="activeIndex"
      active-text-color="#89b0ae"
      background-color="#273845"
      text-color="#ffffff"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect">
      <el-submenu index="#">
        <template slot="title">
          <span class="Burger ic"></span>
          <span class="Logo ic"></span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template id="navLinks" slot="title"><a>Услуги</a></template>
        <el-menu-item v-for="(service, i) in services" :key="i" index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="Specialists"><a>Специалисты</a></router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="Prices"><a>Цены</a></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="Contacts"><a>Контакты</a></router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-search"></i>
        <input>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
