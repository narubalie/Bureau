<template>
  <el-header id="topNav" area="topNav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1" id="logoDropdown" area="logoDropdown">
        <template slot="title">
          <span class="Burger ic"></span>
          <span class="Logo ic"></span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template id="navLinks" slot="title"><router-link to="Servises"><a>Услуги</a></router-link></template>
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
      <el-menu-item index="3" disabled>
        <router-link to="Specialists"><a>Специалисты</a></router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="Prices"><a>Цены</a></router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="Contacts"><a>Контакты</a></router-link>
      </el-menu-item>
    </el-menu>
    <div id="searchBlock">
      <i class="el-icon-search"></i>
      <input>
    </div>
  </el-header>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
