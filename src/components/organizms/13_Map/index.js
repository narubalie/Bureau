import {
  yandexMap,
  ymapMarker
} from 'vue-yandex-maps'

export default {
  name: 'yMap',
  props: {},
  data () {
    return {
      placemarks: [{
        coords: [54.8, 39.8],
        properties: {}, // define properties here
        options: {}, // define options here
        clusterName: '1',
        balloonTemplate: '<div>"Your custom template"</div>',
        callbacks: {
          click: function () {}
        }
      }]
    }
  },
  components: {
    yandexMap,
    ymapMarker
  },
  computed: {},
  methods: {},
  mounted () {}
}
