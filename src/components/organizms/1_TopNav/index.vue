<template lang='pug'>
  #topNav
    .menu
      router-link(to='/')
        .Logo
      .navLinks
        router-link(to='/Services') Услуги
        router-link(to="/Specialists") Специалисты
        router-link(to="/Prices") Цены
        router-link(to="/Contacts") Контакты
      .search
        i.el-icon-search
        input(placeholder="Поиск...")
    .expand
      router-link.submenu.row(to='/Services' v-for='service in services' :key='service.id') {{ service.name }}
        router-link.links(to='/Services' v-for='item in service.data' :key='item.id') {{ item.category }}
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
