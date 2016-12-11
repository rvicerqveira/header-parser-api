var express = require('express')
var app = express()
require('dotenv').config({silent: true})
var port = process.env.PORT || 8080

app.get('/', function (req, res) {
  var info = {
    'ipaddress': req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
    'language': req.headers["accept-language"].split(',')[0],
    'software': req.headers['user-agent'].split('(')[1].split(')')[0]
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(info))
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})