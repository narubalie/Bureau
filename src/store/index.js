import services from './modules/services/services.js'

export default {
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    services
  }
}
