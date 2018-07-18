export default {
  namespaced: true,
  state: [
    {
      isActive: true,
      billedServices: [{
        name: 'Консультация врача-стоматолога-хирурга и оформление консультативного заключения',
        price: '270.00'
      }]
    }, {
      id: 'Х1000',
      isActive: true,
      category: 'Удаление зубов'
    }, {
      id: 'Х2000',
      isActive: true,
      category: 'Хирургическое лечение и операции',
      description: 'без стоимости анестезии, шовных материалов и восстановления костного дефекта'
    }, {
      id: 'Х3000',
      isActive: true,
      category: 'Лечение периодонтита'
    }, {
      id: 'Х4000',
      isActive: true,
      category: 'Прочее'
    }, {
      id: 'Х5000',
      isActive: true,
      category: 'Повторный осмотр'
    }, {
      id: 'Х6000',
      isActive: true,
      category: 'Наложение швов'
    }, {
      id: 'Х7000',
      isActive: true,
      category: 'Восстановление костного дефекта'
    }],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
