export default {
  name: 'Хирургия',
  data: [
    // {
    //   isActive: true,
    //   billedServices: [{
    //     art: 'Т0001',
    //     name: 'Консультация врача-стоматолога-хирурга и оформление консультативного заключения',
    //     price: '270.00'
    //   }]
    // },
    {
      id: 21000,
      category: 'Хирургическое лечение и операции',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      description: 'без стоимости анестезии, шовных материалов и восстановления костного дефекта',
      billedServices: [{
        key: 'Т0007',
        name: 'Постановка пломбы светового отверждения из материала группы высшей категории по поводу кариеса 1-2 пов.',
        price: '1850.00'
      }]
    },
    {
      id: 22000,
      category: 'Прочее',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0013',
        name: 'Услуга',
        price: '350.00'
      },
      {
        art: 'Т0014',
        name: 'Услуга',
        price: '100.00'
      },
      {
        art: 'Т0015',
        name: 'Услуга',
        price: '450.00'
      },
      {
        art: 'Т0016',
        name: 'Услуга',
        price: '250.00'
      }]
    },
    {
      id: 23000,
      category: 'Повторный осмотр',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    },
    {
      id: 24000,
      category: 'Наложение швов',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0012',
        name: 'Услуга',
        price: '100.00'
      }]
    },
    {
      id: 25000,
      category: 'Восстановление костного дефекта',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'Т0025',
        name: 'Услуга',
        price: '100.00'
      }]
    }
  ]
}
