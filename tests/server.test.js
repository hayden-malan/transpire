var server = require('../server.js')
var cheerio = require('cheerio')
var request = require('supertest')

test('do the tests work', function () {
  expect(true).toEqual(true)
})

test('test server is referenced', function () {
  let expected = 'number'
  let actual = typeof server.length
  expect(actual).toEqual(expected)

})

// test('the h1 of home', function () {
//   var expectedHeaderText = "Gallery"
//   request(server).get('/').end(function (err, res) {
//     console.log('Called the server')
//     //console.log(res.text)
//     var $ = cheerio.load(res.text)
//     var actualHeaderText = $('h1').eq(0).text()

//     expect(expectedHeaderText).toEqual(actualHeaderText)
//   })
// })

// test('The second Li', function () {
//   var expectedLiText = "Kowhai Flowers by Sid Mosdell"
//   request(server).get('/').end(function (err, res) {
//     console.log('Called the server')
//     //console.log(res.text)
//     var $ = cheerio.load(res.text)
//     var actualliText = $('ls').eq(1).text()

//     expect(expectedLiText).toEqual(actualLiText)
//   })
// })