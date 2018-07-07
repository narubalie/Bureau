import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        name: 'Дентал Бюро',
        // img: require('../assets/dentalbureau-cover.png'),
        path: 'project/bureau',
        description: 'Создание логотипа для стоматологической клиники'
      }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
