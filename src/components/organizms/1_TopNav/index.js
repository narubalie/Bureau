import { mapState } from 'vuex'
// import store from '../../../store'

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
  },
  computed: mapState({
    services: state => state.module.services
  })
}
