var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var config = require('./knexfile').development
var knex = require('knex')
var db = knex(config)


var routes = require('./routes')

var app = express()

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', hbs({
  defaultLayout: 'main.hbs',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))


app.use('/', routes)

module.exports = function (db) {
  app.set('db', db)
  return app
}