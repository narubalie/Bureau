import Parallax from 'vue-parallaxy'

export default {
  name: 'blogBlock',
  components: {
    Parallax
  },
  data () {
    return {
      item: {
        text: {
          1: 'Лечим клиента, а не болезнь',
          2: 'Лечим клиента, а не болезнь',
          3: 'Лечим клиента, а не болезнь',
          4: 'Лечим клиента, а не болезнь'
        }
      }
    }
  }
}
