<template lang='pug'>
  #topNav
    .menu.grid
      .logodown
        router-link.logo(to='/')
          .logoExpand
            .info
              h3 Телефон приемного отделения:
              p.phone +7 (999) 999-99-99
              h3 Режим работы:
              p Пн - Сб с 09:00 до 21:00, <br>Вс с 10:00 до 20:00
              h3 Адрес электронной почты
              p.mailto dentalburo@gmail.com
            .logoNav
              router-link(to='/') Независимая оценка качества оказания услуг медицинскими организациями
              router-link(to='/') Медицинские организации
              router-link(to='/') Вакансии
              router-link(to='/') Новости
              router-link(to='/') Отзывы
      .navLinks
        router-link(to='/Services') Услуги
        .dropdown
          router-link(to="/Specialists") Специалисты
            .expand
              router-link.submenu(to='/Services' v-for='service in services' :key='service.id') {{ service.name }}
                router-link.links(to='/Services' v-for='item in service.data' :key='item.id') {{ item.category }}
        router-link(to="/Prices") Цены
        router-link(to="/Contacts") Контакты
      input.search(placeholder="Поиск...")
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
