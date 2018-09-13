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
  #map.grid
    .absolute
      .block
        h4 Почтовый адрес
        p 197022, Санкт-Петербург г, Реки Карповки наб, дом № 30, литера А
      .block
        h4 Режим и график работы (правила внутреннего распорядка для потребителей услуг)
        p Пн - Сб с 09:00 до 21:00,
        | Вс с 10:00 до 20:00
      .block
        h4 Контактные телефоны, номера телефонов справочных служб
        p Приёмное отделение:
        a
          h4 +7 (999) 999-99-99
        p Гл. врач
        a
          h4 +7 (999) 999-99-99
      .block
        h4 Электронная почта
        a dentalburo@gmail.com
    yandex-map.map(
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
