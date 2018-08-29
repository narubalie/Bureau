<template lang='pug'>
  el-row
    el-col.topText(:span="24")
      span(v-for='doctor in doctors' :key='doctor.id')
        h3 {{ doctor.name }}
        p {{ doctor.description }}
    el-col(v-for='doctor in doctors' :key='doctor.id' :span='12')
      img.imgLeft(:src='doctor.cover')
    el-col.doctorText(:span="12")
      h3 Образование
      p Волгоградский государственный медицинский университет, стоматологический факультет, 2013г.
      h4 Дополнительное образование
      ul
        li Интернатура ВолгГМУ, 2014
        li Профессиональная переподготовка по детской стоматологии СПбИНСТОМ, 2016
      h4 Сертификаты
      p «Особенности работы с детьми на хирургическом стоматологическом приеме»
      p «Особенности стоматологической помощи беременным и кормящим пациенткам»
      p «Клинические аспекты лечения и профилактики в детской стоматологии»
      h4 Специализации
      ul
        li
          a Коронки на молочные зубы
        li
          a Vista Proof
        li
          a Гигиеническая чистка зубов
        li
          a Глубокое фторирование зубов
      h4 Опыт
      p В стоматологии с 2012 г.
      p В "Дентал Бюро" с 2015 г.
</template>

<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
