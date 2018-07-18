export default {
  namespaced: true,
  state: [
    {
      isActive: true,
      billedServices: [{
        name: 'Снятие зубных отложений с 1 зуба, имплантата',
        price: '270.00'
      }, {
        name: 'Медобработка 1 зубо-десневого кармана',
        price: '270.00'
      }, {
        name: 'Наложение лечебной повязки',
        price: '270.00'
      }, {
        name: 'Покрытие поверхности 1 зуба фторсодержащим лаком',
        price: '270.00'
      }, {
        name: 'Покрытие поверхности 1 зуба "Bifluorid"',
        price: '270.00'
      }, {
        name: 'Покрытие поверхности 1 зуба герметиком для корневого дентина',
        price: '270.00'
      }]
    }, {
      isActive: true,
      category: 'Отбеливание зубов'
    }],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
