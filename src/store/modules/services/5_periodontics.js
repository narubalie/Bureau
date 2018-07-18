export default {
  namespaced: true,
  state: [
    {
      isActive: true,
      billedServices: [
        {
          name: 'Консультация врача-стоматолога-пародонтолога и оформление консультативного заключения',
          price: '1500.00'
        }]
    }, {
      isActive: true,
      category: 'Консервативное лечение'
    }, {
      isActive: true,
      category: 'Операции',
      description: 'без стоимости анестезии, шовных материалов и восстановления костного деффекта'
    }, {
      isActive: true,
      category: 'Наложение швов'
    }, {
      isActive: true,
      category: 'Восстановление костного дефекта'
    }, {
      isActive: true,
      category: 'Шинирование'
    }, {
      isActive: true,
      category: 'Прочее'
    }, {
      isActive: true,
      category: 'Лечение слизистой оболочки полости рта'
    }],
  getters: {},
  mutations: {},
  actions: {},
  plugins: {}
}
