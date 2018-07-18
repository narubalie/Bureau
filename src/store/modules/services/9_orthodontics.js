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
      }]
    }, {
      isActive: true,
      category: 'Диагностика'
    }, {
      isActive: true,
      category: 'Лечение с использованием съемной техники'
    }, {
      isActive: true,
      category: 'Изготовление и установка съемных аппаратов'
    }, {
      isActive: true,
      category: 'Установка элементов'
    }, {
      isActive: true,
      category: 'Манипуляции'
    }, {
      isActive: true,
      category: 'Дополнительные работы'
    }, {
      isActive: true,
      category: 'Прочее'
    }],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
