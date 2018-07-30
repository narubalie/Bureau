export default {
  name: 'Общие',
  data: [
    {
      id: 1000,
      category: 'Проведение обследования',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-1.png'),
      billedServices: [{
        art: 'ОБ0001',
        name: 'Первичный прием врача-стоматолога',
        description: '(осмотр, сбор анамнеза, постановка диагноза, оформление документации)',
        price: '500.00'
      }, {
        art: 'ОБ0002',
        name: 'Повторный прием врача-стоматолога',
        price: '0.00'
      }, {
        art: 'ОБ0003',
        name: 'Осмотр после проведенного лечения',
        price: '0.00'
      }, {
        art: 'ОБ0004',
        name: 'Регистрация окклюзиограммы при помощи аппарата "T-scan"',
        price: '2 850.00'
      }, {
        art: 'ОБ0005',
        name: 'Профосмотр',
        price: '0.00'
      }, {
        art: 'ОБ0006',
        name: 'Профилактический осмотр врача-стоматолога',
        price: '460.00'
      }]
    }, {
      id: 2000,
      category: 'Консультации',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'ОБ0007',
        name: 'Консультация заведующего отделением и оформление консультативного заключения',
        price: '1500.00'
      }, {
        art: 'ОБ0008',
        name: 'Совместная консультация заведующих стоматологическим и ортопедическим отделениями',
        price: '1000.00'
      }]
    }, {
      id: 3000,
      category: 'Анестезия',
      isActive: true,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'ОБ0009',
        name: 'Аппликационная анестезия',
        price: '100.00'
      }, {
        art: 'ОБ0010',
        name: 'Анестезия карпульная',
        price: '350.00'
      }, {
        art: 'ОБ0011',
        name: 'Анестезия Lidocaini hydrochloridi 2%',
        price: '100.00'
      }, {
        art: 'ОБ0012',
        name: 'Наложение ретрактора губ и щек (Optragate и Raberdam)',
        price: '450.00'
      }, {
        art: 'ОБ0013',
        name: 'Наложение жидкого коффердама (LiquidDam)',
        price: '250.00'
      }]
    }, {
      id: 4000,
      category: 'Рентгенография',
      isActive: false,
      cover: require('../../../assets/elements/serviceCover-2.png'),
      billedServices: [{
        art: 'ОБ0014',
        name: 'Консультация врача-рентгенолога',
        description: 'Описание рентгеновских снимков, представленных из других фирм',
        price: '200.00'
      }, {
        art: 'ОБ0015',
        name: 'Рентгенограмма внутриротовая',
        price: '200.00'
      }, {
        art: 'ОБ0016',
        name: 'Компьютерный снимок на бумаге',
        price: '300.00'
      }, {
        art: 'ОБ0017',
        name: 'Просмотр компьютерного снимка',
        price: '150.00'
      }, {
        art: 'ОБ0018',
        name: 'Рентгенграмма мягких тканей дна полости рта',
        price: '250.00'
      }, {
        art: 'ОБ0019',
        name: 'Рентгенограмма внутриротовая для других фирм',
        price: '300.00'
      }]
    }
  ]
}
