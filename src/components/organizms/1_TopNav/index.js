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
  name: 'TopNav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '2',
      store,
      services
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    ...mapState({
      categories: state => state.services['categories']
    })
  }
}
