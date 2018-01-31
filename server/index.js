var createServer = require('./server')
var development = require('../knexfile').development
var knex = require('knex')(development)

var server = createServer(knex)

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('All The Trans Peeps on ', PORT)
})