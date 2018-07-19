import Vue from 'vue'
import common from './modules/services/1_common'
import therapy from './modules/services/2_therapy.js'
import surgery from './modules/services/3_surgery.js'
import profHygiene from './modules/services/4_profHygiene.js'
import periodontics from './modules/services/5_periodontics.js'
import implantology from './modules/services/6_implantology.js'
import kids from './modules/services/7_kids.js'
import orthopedics from './modules/services/8_ortopedics.js'
import orthodontics from './modules/services/9_orthodontics.js'
import Vuex from 'vuex'

Vue.use(Vuex)

const services = {
  namespaced: true,
  state: {
    common,
    therapy,
    surgery,
    profHygiene,
    periodontics,
    implantology,
    kids,
    orthopedics,
    orthodontics
  }
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  modules: { services },
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
