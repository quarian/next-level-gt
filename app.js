var express = require('express')
var auth = require('basic-auth')

var app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening')
})
