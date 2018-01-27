const express = require('express')
const router = express.Router()
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile').development
var db = require('knex')(config)
var bodyParser = require('body-parser')



router.get('/', (req, res) => {

res.render('/homepage')
})

module.exports = router