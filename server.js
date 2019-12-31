var path = require('path');
var express = require('express');
const fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {
  console.log('listening on port ', server.address().port);
});

app.get('/getData', function (req, res, next) {
  let rawdata = fs.readFileSync('data/products.json');
  let data = JSON.parse(rawdata);
  res.json(data);


});

app.get("/runTestResults", function (request, response) {
  let rawdata = fs.readFileSync('data/products.json');
  let data = JSON.parse(rawdata);
  response.send(data);
})