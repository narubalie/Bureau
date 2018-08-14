<template lang='pug'>
  el-row
    el-col(:span="8")
      #myMap(style="width: 600px; height: 300px")
    //-   yandex-map(
    //-     :coords="[54.62896654088406, 39.731893822753904]"
    //-     zoom="10"
    //-     style="width: 600px; height: 600px;"
    //-     :cluster-options="{\
    //- 1: {clusterDisableClickZoom: true}\
    //- }"
    //-     :behaviors="['ruler']"
    //-     :controls="['trafficControl']"
    //-     :placemarks="placemarks"
    //-     map-type="hybrid"
    //-     @map-was-initialized="initHandler"
    //-   )
    //-     ymap-marker(
    //-       marker-id="1"
    //-       marker-type="placemark"
    //-       :coords="[54.7, 39.7]"
    //-       hint-content="Hint content 1"
    //-       :balloon="{header: 'header', body: 'body', footer: 'footer'}"
    //-       :icon="{color: 'green', glyph: 'cinema'}"
    //-       cluster-name="1"
    //-     )
    //-     ymap-marker(
    //-       marker-id="2"
    //-       marker-type="placemark"
    //-       :coords="[54.6, 39.8]"
    //-       hint-content="Hint content 1"
    //-       :balloon="{header: 'header', body: 'body', footer: 'footer'}"
    //-       :icon="{color: 'green', glyph: 'cinema'}"
    //-       cluster-name="1"
    //-     )
    //-     ymap-marker(
    //-       marker-id="3"
    //-       marker-type="circle"
    //-       :coords="[54.62896654088406, 39.731893822753904]"
    //-       circle-radius="1600"
    //-       hint-content="Hint content 1"
    //-       :marker-fill="{color: '#000000', opacity: 0.4}"
    //-       :marker-stroke="{color: '#ff0000', width: 5}"
    //-       :balloon="{header: 'header', body: 'body', footer: 'footer'}"
    //-       )
</template>

<script src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU" type="text/javascript"></script>
<script type="text/javascript">
  // if (window.location.pathname == '/Contacts') {
  //   // Для этой страницы нужны балун и хинт
  //   ymaps.load(['balloon', 'hint', 'map']);
  // }
  var myMap = new ymaps.Map ("myMap", {
      center: [55.76, 37.64],
      zoom: 7
  });
</script>
<script type="text/babel" src='./index.js'></script>
<style lang='stylus' scoped src='./index.styl'></style>
