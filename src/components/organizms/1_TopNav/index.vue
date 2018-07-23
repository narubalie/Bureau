<template lang='pug'>
  el-header#topNav
      el-menu.el-menu-demo(:default-active="activeIndex" active-text-color="#89b0ae" background-color="#273845" text-color="#ffffff" mode="horizontal" @select="handleSelect")
        el-submenu(index="#")
          template(slot="title")
            span.Burger.ic
            span.Logo.ic
          el-menu-item(index="1-1") item one
        el-submenu(index="2")
          template#navLinks(slot="title")
            a Услуги
          el-menu-item(v-for="(service, i) in services" :key="i" index="2-1") item one
          el-menu-item(index="2-2") item two
          el-menu-item(index="2-3") item three
          el-submenu(index="2-4")
            template(slot="title") item four
            el-menu-item(index="2-4-1") item one
            el-menu-item(index="2-4-2") item two
            el-menu-item(index="2-4-3") item three
        el-menu-item(index="3")
          router-link(to="Specialists")
            a Специалисты
        el-menu-item(index="4")
          router-link(to="Prices")
            a Цены
        el-menu-item(index="5")
          router-link(to="Contacts")
            a Контакты
        el-menu-item(index="6")
          i.el-icon-search
          input
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
