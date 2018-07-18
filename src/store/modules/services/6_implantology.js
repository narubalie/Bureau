export default {
  namespaced: true,
  state: [{
    isActive: true,
    billedServices: [{
      name: 'Снятие зубных отложений с 1 зуба, имплантата',
      price: '270.00'
    }, {
      name: 'Медобработка 1 зубо-десневого кармана',
      price: '270.00'
    }]
  }, {
    isActive: true,
    category: 'Операции'
  }, {
    isActive: true,
    category: 'Прочее'
  }, {
    isActive: true,
    category: 'Наложение швов'
  }],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
