import { store, services } from '../../../store'
import { mapState } from 'vuex'
// import router from '../../../router'

// const categories = Object.values(services).reduce(
//   (categories) => {
//     const isCategories = services.filter(objN => objN.hasOwnProperty('category')).map(objN => objN.category)
//     return [...categories, ...isCategories]
//   }, []
// )

export default {
  name: 'Footer',
  data () {
    return {
      store,
      services
    }
  },
  methods: {}
}
