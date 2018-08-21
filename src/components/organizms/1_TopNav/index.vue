<template lang='pug'>
  el-header#topNav
    el-menu.el-menu-demo(
      :default-active="activeIndex"
      active-text-color="#89b0ae"
      background-color="#273845"
      text-color="#ffffff"
      mode="horizontal"
      @select="handleSelect")
      el-submenu(index="1")
        template(slot="title")
          router-link(to='/')
            span.Burger.ic
            span.Logo.ic
        el-menu-item(index="1-1")
      el-submenu(index="2")
        template#navLinks(slot="title")
          a Услуги
        el-submenu(
          v-for='(service, index) in services'
          :key='service.id'
          :index='index'
          )
          template(slot="title")
            h3 {{ service.name }}
          el-menu-item.links(
            v-for='item in service.data'
            :key='item.id'
            )
            router-link(to='/Services') {{ item.category }}
      el-menu-item(index="3")
        router-link(to="/Specialists")
          a Специалисты
      el-menu-item(index="4")
        router-link(to="/Prices")
          a Цены
      el-menu-item(index="5")
        router-link(to="/Contacts")
          a Контакты
      el-menu-item(index="6")
        i.el-icon-search
        input
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
