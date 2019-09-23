<template lang='pug'>
  el-header
    el-menu.el-menu-demo(
      :default-active="activeIndex"
      active-text-color="#89b0ae"
      background-color="#273845"
      text-color="#ffffff"
      mode="horizontal"
      @select="handleSelect")
      el-menu-item(index="1")
        template(slot="title")
          router-link.Logo(to='/')
      el-submenu(index="2")
        template(slot="title")
          router-link(to='/Services') Список
        el-menu-item(
          v-for='service in services'
          :key='service.id'
          index="2-1"
          )
          template(slot="title")
            h3 {{ service.name }}
      el-menu-item(index="3")
        router-link(to="/Ссылка")
          a Ссылка
      el-menu-item(index="6")
        i.el-icon-search
        input
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
