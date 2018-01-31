var express = require('express')
var router = express.Router()
var dbfunctions = require('./dbfunctions')
var bodyParser = require('body-parser')



//ROUTES


router.get('/', function (req, res) {
var db = req.app.get('db')
dbfunctions.listResources('db')
  .then(data => res.render('home', { data }))
  .catch(err => res.send("A cis person broke this", err))
})

router.get('/resources', function (req, res) {
  var db = req.app.get('db')
  dbfunctions.listResources('db')
    .then(data => res.render('resources', { data: data }))
    .catch(err => res.send("A cis person broke this", err))
})




module.exports = router