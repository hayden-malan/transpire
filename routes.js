var express = require('express')
var router = express.Router()




//ROUTES


router.get('/', function (req, res) {
  res.render('home', data)
})




module.exports = router