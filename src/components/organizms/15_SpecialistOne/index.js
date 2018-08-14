
export default {
  name: 'specialistOne',
  props: {},
  data () {
    return {
      doctors: [{
        id: 1000,
        name: 'Великолепная Дарья',
        type: 'Стоматолог',
        isActive: true,
        description: 'Зубы - моя любовь! Профессионально занимаюсь отбеливанием, анестезией и больше всего люблю ожерелья из зубов)',
        cover: require('../../../assets/elements/doctors/doc-11.png')
      }]
    }
  },
  computed: {},
  methods: {},
  mounted () {}
}
