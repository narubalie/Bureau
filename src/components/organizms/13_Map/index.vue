<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script type="text/javascript">
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
    }
</script>

<template lang='pug'>
  el-row
    el-col.absolute(
        :xs="10"
        :sm="6"
        :md="6"
        :lg="8"
        :xl="8"
        :offset="4")
      h4 почтовый адрес
      p 197022, Санкт-Петербург г, Реки Карповки наб, дом № 30, литера А
      h4 режим и график работы (правила внутреннего распорядка для потребителей услуг)
      p Пн - Сб с 09:00 до 21:00,
      | Вс с 10:00 до 20:00
      h4 контактные телефоны, номера телефонов справочных служб, адреса электронной почты;
      p Приёмное отделение:
      a +7 (999) 999-99-99
      p Гл. врач
      a +7 (999) 999-99-99
      h4 адреса электронной почты
      a dentalburo@gmail.com
    el-col(:span="24")
      yandex-map(
        :coords="[59.969564, 30.301319]"
        zoom="15"
        style="width: 100%; height: 80vh;"
        :cluster-options="{\
    1: {clusterDisableClickZoom: true}\
    }"
        :behaviors="['ruler']"
        :controls="['trafficControl']"
        :placemarks="placemarks"
        map-type="map"
      )
        ymap-marker(
          marker-id="1"
          marker-type="placemark"
          :coords="[59.969564, 30.301319]"
          hint-content="Hint content 1"
          :balloon="{header: 'header', body: 'body', footer: 'footer'}"
          :marker-fill="{color: '#000000', opacity: 0.4}"
          :marker-stroke="{color: '#ff0000', width: 5}"
          :icon="{color: 'green'}"
          cluster-name="1"
        )
</template>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
