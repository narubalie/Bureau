// import router from '../../../router'

// const categories = Object.values(services).reduce(
//   (categories) => {
//     const isCategories = services.filter(objN => objN.hasOwnProperty('category')).map(objN => objN.category)
//     return [...categories, ...isCategories]
//   }, []
// )

export default {
  name: 'Footer',
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
  mounted () {}
}
