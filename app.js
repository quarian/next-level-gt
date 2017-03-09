var express = require('express')
var auth = require('basic-auth')

var app = express()

const secretName = 'gt';
const secretPass = 'nextLevelGT';

/*app.use(function (req, res, next) {
 let user = auth(req);
 if (user && user.name === secretName && user.pass === secretPass) {
   next();
 }
 else {
   res.status(401)
     .set('WWW-Authenticate', 'Basic realm="GT"')
     .end();
 }
})*/

app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening')
})
