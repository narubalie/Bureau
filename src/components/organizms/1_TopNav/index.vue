<template>
  <css-grid-item id="topNav" area="topNav">
    <div id="logoDropdown" area="logoDropdown">
      <span class="Burger ic"></span>
      <span class="Logo ic"></span>
    </div>
    <div id="navLinks">
      <router-link to="Servises"><a>Услуги</a></router-link>
      <router-link to="Specialists"><a>Специалисты</a></router-link>
      <router-link to="Prices"><a>Цены</a></router-link>
      <router-link to="Contacts"><a>Контакты</a></router-link>
    </div>
    <div id="searchBlock">
      <ais-input id="search" placeholder="Поиск..." autocomplete="on"></ais-input>
    </div>
  </css-grid-item>
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
