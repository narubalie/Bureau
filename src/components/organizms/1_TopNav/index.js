// import router from '../../../router'

// const categories = Object.values(services).reduce(
//   (categories) => {
//     const isCategories = services.filter(objN => objN.hasOwnProperty('category')).map(objN => objN.category)
//     return [...categories, ...isCategories]
//   }, []
// )

export default {
  name: 'TopNav',
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
