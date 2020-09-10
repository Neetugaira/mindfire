const auth = require('./auth.controller')

module.exports = function (app) {
  app.post('/auth/login', auth.login)
  app.get('/getFilterData', auth.getFilterData)
  app.get('/getNewsData', auth.getNewsData)
  app.get('/getAgencyData', auth.getAgencyData)
  app.post('/getCountData', auth.getCountData)
}
