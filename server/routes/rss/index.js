const auth = require('./auth.controller')

module.exports = function (app) {
  app.get('/rss/getRss', auth.getRssFeed)
}
