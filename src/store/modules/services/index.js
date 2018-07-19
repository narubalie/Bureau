import common from './1_common.js'
import therapy from './2_therapy.js'
import surgery from './3_surgery.js'
import profHygiene from './4_profHygiene.js'
import periodontics from './5_periodontics.js'
import implantology from './6_implantology.js'
import kids from './7_kids.js'
import orthopedics from './8_ortopedics.js'
import orthodontics from './9_orthodontics.js'

export default {
  namespaced: true,
  services: {
    common,
    therapy,
    surgery,
    profHygiene,
    periodontics,
    implantology,
    kids,
    orthopedics,
    orthodontics
  },
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
