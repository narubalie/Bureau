import Vue from 'vue'
import services from './modules/services/'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    services
  },
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
