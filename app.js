var express = require('express')
var basicAuth = require('express-basic-auth')

var app = express()

app.use(express.static('public'))

app.use(basicAuth({
    users: { 'gt': 'nextLevelGT' }
}))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
