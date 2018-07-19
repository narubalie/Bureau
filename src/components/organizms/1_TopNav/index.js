// import { mapState } from 'vuex'

export default {
  name: 'TopNav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '2'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
  // computed: mapState({
  //   const x = Object.values(state).reduce(
  //     (categories, field) => {
  //       const fieldCategories = field.filter(objN => objN.hasOwnProperty('category')).map(objN => objN.category)
  //       return [...categories, ...fieldCategories]
  //     }, []
  //   )
  // })
}
