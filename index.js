var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Fo shizzle ya nizzle on', PORT)
})